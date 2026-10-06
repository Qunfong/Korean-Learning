(function () {
  "use strict";

  // ---------- site settings (window.SITE overrides these; defaults are the Chinese site) ----------
  var CFG = Object.assign({
    key: "hsk-learning-v1", lang: "zh-CN", voice: /^zh/i, rom: "pinyin", language: "Chinees", unit: "karakter", sep: "",
    listNote: "Dit is geen officiële HSK 3.0-woordenlijst.", first: "hsk3/les.html?id=01", firstLabel: "HSK 3 · les 1"
  }, window.SITE || {});

  // ---------- storage (progress lives only in this browser) ----------
  var KEY = CFG.key;
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { lessons: {}, rules: {}, prefs: {} }; }
    catch (e) { return { lessons: {}, rules: {}, prefs: {} }; }
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* private mode */ } }
  var state = load();
  state.lessons = state.lessons || {}; state.rules = state.rules || {}; state.prefs = state.prefs || {};

  function today() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function addDays(iso, n) {
    var p = iso.split("-"), d = new Date(+p[0], +p[1] - 1, +p[2] + n);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  // ---------- helpers ----------
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  var HAN = /[㐀-鿿，。？！…“”ᄀ-ᇿ㄰-㆏가-힣]+/g;
  function zh(s) { return esc(s).replace(HAN, function (m) { return '<span class="zh">' + m + "</span>"; }); }
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }

  // Stable shuffle: the same question always shows the same A/B/C/D order.
  function seeded(seedStr) {
    var h = 2166136261;
    for (var i = 0; i < seedStr.length; i++) { h ^= seedStr.charCodeAt(i); h = Math.imul(h, 16777619); }
    return function () { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 10000) / 10000; };
  }
  function order(n, seedStr) {
    var idx = [], r = seeded(seedStr);
    for (var i = 0; i < n; i++) idx.push(i);
    for (var j = n - 1; j > 0; j--) { var k = Math.floor(r() * (j + 1)); var t = idx[j]; idx[j] = idx[k]; idx[k] = t; }
    return idx;
  }

  // ---------- speech (browser voice, playback only) ----------
  var canSpeak = "speechSynthesis" in window;
  if (!canSpeak) document.body.classList.add("no-tts");
  var SPEAKER = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>';
  function sayBtn(text) { return '<button class="say" type="button" data-say="' + esc(text) + '" aria-label="Uitspreken">' + SPEAKER + "</button>"; }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-say]");
    if (!b || !canSpeak) return;
    var u = new SpeechSynthesisUtterance(b.getAttribute("data-say"));
    u.lang = CFG.lang; u.rate = 0.85;
    var v = speechSynthesis.getVoices().filter(function (x) { return CFG.voice.test(x.lang); })[0];
    if (v) u.voice = v;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  });

  // ---------- pinyin toggle ----------
  function applyPinyin() { document.body.classList.toggle("no-py", state.prefs.pinyin === false); }
  function pinyinToggle() {
    return '<label><input type="checkbox" id="pytoggle"' + (state.prefs.pinyin === false ? "" : " checked") + "> " + CFG.rom + " tonen</label>";
  }
  document.addEventListener("change", function (e) {
    if (e.target.id === "pytoggle") { state.prefs.pinyin = e.target.checked; save(state); applyPinyin(); }
  });
  applyPinyin();

  // ---------- question widgets ----------
  // onDone(firstTry) is called once the question is solved.
  function mcWidget(q, seed, onDone, opts) {
    opts = opts || {};
    var box = el('<div class="q"><div class="qt">' + (opts.label ? "<b>" + esc(opts.label) + ".</b> " : "") + zh(q.q) + '</div><div class="opts"></div></div>');
    var wrap = box.querySelector(".opts"), ord = order(q.options.length, seed), misses = 0, solved = false;
    ord.forEach(function (oi, pos) {
      var b = el('<button class="opt" type="button">' + "ABCD"[pos] + ") " + zh(q.options[oi]) + "</button>");
      b.addEventListener("click", function () {
        if (solved) return;
        var right = oi === q.answer;
        b.classList.add(right ? "right" : "wrong"); b.disabled = true;
        var old = box.querySelector(".fb"); if (old) old.remove();
        box.appendChild(el('<div class="fb ' + (right ? "right" : "wrong") + '">' + zh(q.why[oi]) +
          (right || opts.oneShot ? "" : " Probeer het nog eens.") + "</div>"));
        if (right || opts.oneShot) {
          solved = true;
          wrap.querySelectorAll(".opt").forEach(function (x) { x.disabled = true; });
          if (!right) wrap.children[ord.indexOf(q.answer)].classList.add("right");
          onDone(misses === 0 && right);
        } else misses++;
      });
      wrap.appendChild(b);
    });
    return box;
  }

  function orderWidget(q, seed, onDone, label) {
    var answer = q.tokens.map(function (t) { return t[0]; }).join(CFG.sep);
    var box = el('<div class="q"><div class="qt"><b>' + esc(label) + ".</b> " + zh(q.q) + '</div><div class="built"></div><div class="tokens"></div>' +
      '<div class="row"><button class="btn" type="button" data-a="check">Controleer</button><button class="btn ghost" type="button" data-a="reset">Opnieuw</button></div></div>');
    var built = box.querySelector(".built"), pool = box.querySelector(".tokens"), misses = 0, solved = false;
    var ord = order(q.tokens.length, seed);
    if (ord.every(function (v, i) { return v === i; })) ord.reverse();
    function tok(t) {
      var b = el('<button class="tok" type="button">' + esc(t[0]) + "<small>" + esc(t[1]) + "</small></button>");
      b.dataset.v = t[0];
      b.addEventListener("click", function () { if (!solved) (b.parentNode === pool ? built : pool).appendChild(b); });
      return b;
    }
    function reset() { built.innerHTML = ""; pool.innerHTML = ""; ord.forEach(function (i) { pool.appendChild(tok(q.tokens[i])); }); }
    reset();
    box.querySelector('[data-a="reset"]').addEventListener("click", function () { if (!solved) { reset(); var f = box.querySelector(".fb"); if (f) f.remove(); } });
    box.querySelector('[data-a="check"]').addEventListener("click", function () {
      if (solved) return;
      var got = Array.prototype.map.call(built.children, function (b) { return b.dataset.v; }).join(CFG.sep);
      var old = box.querySelector(".fb"); if (old) old.remove();
      if (pool.children.length) { box.appendChild(el('<div class="fb wrong">Gebruik alle blokjes.</div>')); return; }
      if (got === answer) {
        solved = true;
        box.appendChild(el('<div class="fb right">Goed: <span class="zh">' + esc(answer) + "</span> " + sayBtn(answer) + "</div>"));
        onDone(misses === 0);
      } else {
        misses++;
        box.appendChild(el('<div class="fb wrong">Nog niet. Kijk naar het patroon bovenaan: wat komt eerst, wat komt achteraan?' +
          (misses >= 2 ? ' Hint: het begint met <span class="zh">' + esc(q.tokens[0][0] + CFG.sep + q.tokens[1][0]) + "</span>." : "") + "</div>"));
      }
    });
    return box;
  }

  function openWidget(q, onDone, label) {
    var box = el('<div class="q"><div class="qt"><b>' + esc(label) + ".</b> " + zh(q.q) + '</div><textarea lang="' + CFG.lang + '" placeholder="Typ je zin in het ' + CFG.language + '"></textarea>' +
      '<div class="row"><button class="btn" type="button">Vergelijk met voorbeeld</button></div></div>');
    var ta = box.querySelector("textarea"), done = false;
    box.querySelector("button").addEventListener("click", function () {
      if (done) return;
      if (!ta.value.trim()) { ta.focus(); return; }
      done = true;
      box.appendChild(el('<div class="model"><b>Voorbeelden:</b> ' + q.model.map(function (m) { return '<span class="zh">' + esc(m) + "</span> " + sayBtn(m); }).join(" · ") +
        '<br><span class="muted">' + zh(q.tip) + " Andere goede zinnen zijn ook goed.</span></div>"));
      onDone(true);
    });
    return box;
  }

  // ---------- page: lesson ----------
  function lessonPage(root) {
    var params = new URLSearchParams(location.search);
    var levelKey = root.dataset.level, level = window.HSK[levelKey];
    var idx = level.lessons.findIndex(function (l) { return l.id === params.get("id"); });
    if (idx < 0) idx = 0;
    var L = level.lessons[idx], lid = levelKey + "-" + L.id;
    document.title = L.id + " " + L.title + " · " + level.level;

    var h = [];
    h.push('<p class="muted small"><a href="./">' + esc(level.level) + "</a> · les " + (idx + 1) + " van " + level.lessons.length + "</p>");
    h.push("<h1>" + zh(L.id + " " + L.title) + "</h1><p class=\"lead\">" + zh(L.sub) + "</p>");
    h.push('<div class="toolbar">' + pinyinToggle() + "<span>· ongeveer 15 minuten · Leren → Oefenen → Herhalen</span></div>");
    var due = dueRules().length, sec = 0;
    function h2(t) { sec++; return "<h2>" + sec + ". " + t + "</h2>"; }
    if (due) h.push('<div class="card">Er staan <b>' + due + '</b> herhalingsvragen klaar. <a href="../herhaling.html">Eerst herhalen</a></div>');

    h.push(h2("Gok eerst") + "<p class=\"muted small\">Nog geen uitleg gehad? Juist. Gokken telt niet mee, maar je onthoudt de uitleg daarna beter.</p><div id=\"guess\"></div>");

    h.push(h2("Het idee") + "<p>" + zh(L.problem) + "</p>");
    h.push('<div class="pattern">' + L.pattern.map(function (b) {
      return '<div class="blk c' + b.c + (b.key ? " key" : "") + '"><span class="l">' + esc(b.l || " ") + '</span><span class="v">' + esc(b.v) + "</span></div>";
    }).join("") + "</div>");
    h.push('<p class="pattern-cap">' + zh(L.patternCap) + "</p>");
    h.push("<ul>" + L.rules.map(function (r) { return "<li>" + zh(r) + "</li>"; }).join("") + "</ul>");
    h.push('<p class="pitfall"><b>Let op:</b> ' + zh(L.pitfall) + "</p>");

    h.push(h2("Voorbeelden") + '<div class="card">' + L.examples.map(function (x) {
      return '<div class="ex"><div class="cn">' + esc(x.cn) + " " + sayBtn(x.cn) + '</div><div class="py">' + esc(x.py) + '</div><div class="nl">' + esc(x.nl) + "</div></div>";
    }).join("") + "</div>");

    if (L.vocab && L.vocab.length) h.push(h2("Tien woorden") + '<p class="muted small">Oefenwoorden op ' + esc(level.level) + '-niveau. ' + CFG.listNote + '</p><div class="card"><table class="vocab">' +
      L.vocab.map(function (v) { return '<tr><td class="h">' + esc(v[0]) + " " + sayBtn(v[0]) + '</td><td class="p">' + esc(v[1]) + "</td><td>" + esc(v[2]) + "</td></tr>"; }).join("") + "</table></div>");

    h.push(h2("Dialoog") + '<div class="card dlg">' + L.dialogue.map(function (d) {
      return '<div class="ex"><div class="cn"><span class="who">' + d[0] + "</span>" + esc(d[1]) + " " + sayBtn(d[1]) + '</div><div class="py">' + esc(d[2]) + '</div><div class="nl">' + esc(d[3]) + "</div></div>";
    }).join("") + "</div>");

    h.push(h2("Oefenen") + '<p class="muted small">Eén vraag tegelijk. Fout? Lees de uitleg en probeer opnieuw.</p><div id="qs"></div><div id="result"></div>');

    var nav = '<div class="pager">' + (idx > 0 ? '<a href="les.html?id=' + level.lessons[idx - 1].id + '">← ' + zh(level.lessons[idx - 1].title) + "</a>" : "<span></span>") +
      (idx < level.lessons.length - 1 ? '<a href="les.html?id=' + level.lessons[idx + 1].id + '">' + zh(level.lessons[idx + 1].title) + " →</a>" : '<a href="./">Terug naar overzicht →</a>') + "</div>";
    h.push(nav);
    root.innerHTML = h.join("");

    root.querySelector("#guess").appendChild(mcWidget(L.guess, lid + "-g", function () {}, { oneShot: true, label: "G" }));

    var qs = root.querySelector("#qs"), firstTry = 0, solved = 0, total = L.questions.length;
    function done(ok) {
      solved++; if (ok) firstTry++;
      if (solved === total) finish();
    }
    L.questions.forEach(function (q, i) {
      var label = "Q" + (i + 1), seed = lid + "-q" + i;
      qs.appendChild(q.type === "mc" ? mcWidget(q, seed, done, { label: label }) : q.type === "order" ? orderWidget(q, seed, done, label) : openWidget(q, done, label));
    });

    function finish() {
      var rec = state.lessons[lid];
      var first = !rec;
      if (first) {
        state.lessons[lid] = { passed: today(), firstTry: firstTry === total };
        L.review.forEach(function (_, ri) { state.rules[lid + "-r" + ri] = { next: addDays(today(), 2), gap: 2 }; });
        save(state);
      }
      root.querySelector("#result").innerHTML = '<p class="pass">' + zh(L.canDo) + "</p>" +
        '<p class="muted small">' + (first ? "Over 2 dagen komen twee nieuwe vragen over deze les terug op de <a href=\"../herhaling.html\">herhaalpagina</a>." : "Je had deze les al eerder gehaald.") + "</p>";
    }
    if (state.lessons[lid]) qs.insertAdjacentHTML("beforebegin", '<p class="tag ok">Al gehaald op ' + esc(state.lessons[lid].passed) + "</p>");
  }

  // ---------- review (spaced: 2 days, double when right, back to 1 when wrong, learned at 16+) ----------
  function allReviewItems() {
    var out = [];
    Object.keys(window.HSK).forEach(function (lk) {
      window.HSK[lk].lessons.forEach(function (L) {
        L.review.forEach(function (q, ri) { out.push({ key: lk + "-" + L.id + "-r" + ri, q: q, lesson: L, dir: window.HSK[lk].dir || lk }); });
      });
    });
    return out;
  }
  function dueRules() {
    var t = today();
    return allReviewItems().filter(function (it) { var r = state.rules[it.key]; return r && !r.learned && r.next <= t; });
  }
  function reviewPage(root) {
    var due = dueRules();
    var upcoming = allReviewItems().filter(function (it) { var r = state.rules[it.key]; return r && !r.learned && r.next > today(); })
      .map(function (it) { return state.rules[it.key].next; }).sort();
    var learned = Object.keys(state.rules).filter(function (k) { return state.rules[k].learned; }).length;
    var h = ["<h1>Herhalen</h1><p class=\"lead\">Vragen over lessen die je al gehaald hebt, in een nieuwe zin. Eén poging per vraag.</p>"];
    h.push('<div class="toolbar">' + pinyinToggle() + "</div>");
    if (!due.length) {
      h.push('<div class="card">Nu staat er niets klaar.' + (upcoming.length ? " Volgende herhaling: <b>" + esc(upcoming[0]) + "</b>." : ' Haal eerst een les, bijvoorbeeld <a href="' + CFG.first + '">' + esc(CFG.firstLabel) + "</a>.") +
        (learned ? " Geleerd (niet meer herhalen): " + learned + " regels." : "") + "</div>");
      root.innerHTML = h.join(""); return;
    }
    h.push('<p class="muted small">' + due.length + " vraag/vragen klaar.</p><div id=\"rv\"></div>");
    root.innerHTML = h.join("");
    var rv = root.querySelector("#rv");
    due.forEach(function (it, i) {
      var w = mcWidget(it.q, it.key, function (right) {
        var r = state.rules[it.key];
        if (right) {
          if (r.gap >= 16) { r.learned = true; }
          else { r.gap = r.gap * 2; r.next = addDays(today(), r.gap); }
        } else { r.gap = 1; r.next = addDays(today(), 1); }
        save(state);
        w.appendChild(el('<p class="muted small">' + (r.learned ? "Geleerd: deze komt niet meer terug." : "Volgende keer: " + esc(r.next) + ".") +
          ' Uit <a href="' + it.dir + "/les.html?id=" + it.lesson.id + '">' + zh(it.lesson.title) + "</a>.</p>"));
      }, { oneShot: true, label: "R" + (i + 1) });
      rv.appendChild(w);
    });
  }

  // ---------- level overview ----------
  function levelPage(root) {
    var lk = root.dataset.level, level = window.HSK[lk];
    var passed = level.lessons.filter(function (L) { return state.lessons[lk + "-" + L.id]; }).length;
    var pct = Math.round(100 * passed / level.lessons.length);
    var due = dueRules().length;
    root.innerHTML = '<div class="card"><div class="row" style="justify-content:space-between;margin:0"><span><b>' + passed + "</b> van " + level.lessons.length + " lessen gehaald</span>" +
      (due ? '<a href="../herhaling.html">' + due + " herhalingsvragen klaar</a>" : '<span class="muted">geen herhaling klaar</span>') +
      '</div><div class="progress" style="margin-top:8px"><i style="width:' + pct + '%"></i></div></div>' +
      '<ol class="lessons">' + level.lessons.map(function (L) {
        var ok = state.lessons[lk + "-" + L.id];
        return '<li class="card"><a href="les.html?id=' + L.id + '"><span class="num">' + L.id + '</span><span class="t">' + zh(L.title) + "<small>" + zh(L.sub) + "</small></span>" +
          (ok ? '<span class="tag ok">gehaald</span>' : '<span class="tag dim">open</span>') + "</a></li>";
      }).join("") + "</ol>";
  }

  // ---------- documentation: all grammar and words ----------
  function docsPage(root) {
    var levels = Object.keys(window.HSK);
    function patternHtml(L) {
      return '<div class="pattern">' + L.pattern.map(function (b) {
        return '<div class="blk c' + b.c + (b.key ? " key" : "") + '"><span class="l">' + esc(b.l || " ") + '</span><span class="v">' + esc(b.v) + "</span></div>";
      }).join("") + "</div>";
    }
    function grammar() {
      return levels.map(function (lk) {
        var level = window.HSK[lk];
        return "<h2>" + esc(level.level) + '</h2><div class="toc">' + level.lessons.map(function (L) {
          return '<a href="#g-' + lk + "-" + L.id + '">' + zh(L.title) + "</a>";
        }).join("") + "</div>" + level.lessons.map(function (L) {
          return '<div class="card gram" id="g-' + lk + "-" + L.id + '"><h3>' + zh(L.title) + '</h3><p class="muted small">' + zh(L.sub) + "</p>" +
            patternHtml(L) + '<p class="pattern-cap">' + zh(L.patternCap) + "</p>" +
            "<ul>" + L.rules.map(function (r) { return "<li>" + zh(r) + "</li>"; }).join("") + "</ul>" +
            '<p class="pitfall"><b>Let op:</b> ' + zh(L.pitfall) + "</p>" +
            L.examples.map(function (x) {
              return '<div class="ex"><div class="cn">' + esc(x.cn) + " " + sayBtn(x.cn) + '</div><div class="py">' + esc(x.py) + '</div><div class="nl">' + esc(x.nl) + "</div></div>";
            }).join("") +
            '<p class="small"><a href="' + (level.dir || lk) + "/les.html?id=" + L.id + '">Naar de les →</a></p></div>';
        }).join("");
      }).join("");
    }
    function words() {
      var withVocab = levels.filter(function (lk) { return window.HSK[lk].lessons.some(function (L) { return L.vocab && L.vocab.length; }); });
      var without = levels.filter(function (lk) { return withVocab.indexOf(lk) < 0; }).map(function (lk) { return window.HSK[lk].level; });
      return '<input class="search" type="search" id="wsearch" placeholder="Zoek op ' + CFG.unit + ", " + CFG.rom + ' of betekenis">' + withVocab.map(function (lk) {
        var level = window.HSK[lk];
        return "<h2>" + esc(level.level) + '</h2><div class="card"><table class="vocab">' + level.lessons.map(function (L) {
          return (L.vocab || []).map(function (v) {
            var hay = (v[0] + " " + v[1] + " " + v[1].normalize("NFD").replace(/[̀-ͯ]/g, "") + " " + v[2]).toLowerCase();
            return '<tr data-s="' + esc(hay) + '"><td class="h">' + esc(v[0]) + " " + sayBtn(v[0]) + '</td><td class="p">' + esc(v[1]) + "</td><td>" + esc(v[2]) +
              '</td><td class="les"><a href="' + (level.dir || lk) + "/les.html?id=" + L.id + '">les ' + L.id + "</a></td></tr>";
          }).join("");
        }).join("") + '</table><p class="muted small" id="wnone" hidden>Geen woorden gevonden.</p></div>';
      }).join("") + (without.length ? '<p class="muted small">Woordenlijsten voor ' + esc(without.join(", ")) + " volgen later.</p>" : "") + '<p class="muted small">Oefenwoorden op niveau. ' + CFG.listNote + '</p>';
    }
    function render() {
      var tab = location.hash.indexOf("#woorden") === 0 ? "woorden" : "grammatica";
      root.innerHTML = '<h1>Documentatie</h1><p class="lead">Alle grammatica en woorden uit de lessen, op één plek.</p>' +
        '<div class="toolbar">' + pinyinToggle() + "</div>" +
        '<nav class="tabs"><a href="#grammatica"' + (tab === "grammatica" ? ' class="on"' : "") + ">Grammatica</a>" +
        '<a href="#woorden"' + (tab === "woorden" ? ' class="on"' : "") + ">Woorden</a></nav>" +
        (tab === "woorden" ? words() : grammar());
      var s = root.querySelector("#wsearch");
      if (s) s.addEventListener("input", function () {
        var q = s.value.trim().toLowerCase(), shown = 0;
        root.querySelectorAll("tr[data-s]").forEach(function (tr) { var ok = !q || tr.dataset.s.indexOf(q) >= 0; tr.hidden = !ok; if (ok) shown++; });
        root.querySelectorAll("#wnone").forEach(function (p) { p.hidden = shown > 0; });
      });
    }
    window.addEventListener("hashchange", function () {
      if (location.hash === "#grammatica" || location.hash === "#woorden") render();
    });
    render();
    if (location.hash.indexOf("#g-") === 0) { var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
  }

  var root = document.getElementById("app");
  if (!root) return;
  var page = root.dataset.page;
  if (page === "lesson") lessonPage(root);
  else if (page === "review") reviewPage(root);
  else if (page === "level") levelPage(root);
  else if (page === "docs") docsPage(root);
})();
