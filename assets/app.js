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
      if (got === answer || (q.alt || []).some(function (a) { return norm(a) === norm(got); })) {
        solved = true;
        box.appendChild(el('<div class="fb right">Goed' + (got === answer ? ": " : '. Ook vaak gezegd: ') + '<span class="zh">' + esc(answer) + "</span> " + sayBtn(answer) + "</div>"));
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

  // Fill in the blank: compared without spaces and punctuation, against every accepted answer.
  function norm(s) { return String(s).replace(/[\s.,!?。，！？、…]/g, "").toLowerCase(); }
  function fillWidget(q, onDone, label) {
    var box = el('<div class="q"><div class="qt"><b>' + esc(label) + ".</b> " + zh(q.q) + "</div>" +
      '<div class="row" style="margin-top:0"><input class="fillin" type="text" lang="' + CFG.lang + '" autocomplete="off" placeholder="Wat hoort op ___?">' +
      '<button class="btn" type="button">Controleer</button></div></div>');
    var inp = box.querySelector("input"), misses = 0, solved = false;
    function check() {
      if (solved) return;
      var v = inp.value.trim();
      if (!v) { inp.focus(); return; }
      var ok = q.answers.some(function (a) { return norm(a) === norm(v); });
      var old = box.querySelector(".fb"); if (old) old.remove();
      if (ok) {
        solved = true; inp.disabled = true;
        box.appendChild(el('<div class="fb right">Goed. ' + zh(q.why) + "</div>"));
        onDone(misses === 0);
      } else {
        misses++;
        box.appendChild(el('<div class="fb wrong">Nog niet.' + (q.hint && misses === 1 ? " Hint: " + zh(q.hint) : "") +
          (misses >= 2 ? ' Het antwoord is <span class="zh">' + esc(q.answers[0]) + "</span>. " + zh(q.why) + " Typ het over om door te gaan." : "") + "</div>"));
      }
    }
    box.querySelector("button").addEventListener("click", check);
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
    return box;
  }

  function exHtml(x) {
    return '<div class="ex"><div class="cn">' + esc(x.cn) + " " + sayBtn(x.cn) + '</div><div class="py">' + esc(x.py) + '</div><div class="nl">' + esc(x.nl) + "</div></div>";
  }
  function patternHtml(L) {
    return '<div class="pattern">' + L.pattern.map(function (b) {
      return '<div class="blk c' + b.c + (b.key ? " key" : "") + '"><span class="l">' + esc(b.l || " ") + '</span><span class="v">' + esc(b.v) + "</span></div>";
    }).join("") + "</div>";
  }
  function nuanceHtml(L) {
    return (L.nuance || []).map(function (n) {
      return '<div class="card nuance"><h3>' + zh(n.h) + "</h3><p>" + zh(n.p) + "</p>" + (n.ex || []).map(exHtml).join("") + "</div>";
    }).join("");
  }
  function mistakesHtml(L) {
    return '<div class="card"><table class="mistakes"><tr><th>Fout</th><th>Goed</th><th>Waarom</th></tr>' + (L.mistakes || []).map(function (m) {
      return '<tr><td class="bad zh">' + esc(m.wrong) + '</td><td class="good zh">' + esc(m.right) + "</td><td>" + zh(m.why) + "</td></tr>";
    }).join("") + "</table></div>";
  }

  // ---------- page: lesson ----------
  function lessonPage(root) {
    var params = new URLSearchParams(location.search);
    var levelKey = root.dataset.level, level = window.HSK[levelKey];
    var idx = level.lessons.findIndex(function (l) { return l.id === params.get("id"); });
    if (idx < 0) idx = 0;
    var L = level.lessons[idx], lid = levelKey + "-" + L.id;
    document.title = L.id + " " + L.title + " · " + level.level;

    var h = [], toc = [], sec = 0, due = dueRules().length;
    function h2(t, id) { sec++; toc.push('<a href="#' + id + '">' + sec + ". " + t + "</a>"); return '<h2 id="' + id + '">' + sec + ". " + t + "</h2>"; }

    h.push(h2("Gok eerst", "gok") + '<p class="muted small">Nog geen uitleg gehad? Juist. Gokken telt niet mee, maar je onthoudt de uitleg daarna beter.</p><div id="guess"></div>');
    h.push(h2("Het idee", "idee") + "<p>" + zh(L.problem) + "</p>" + patternHtml(L) + '<p class="pattern-cap">' + zh(L.patternCap) + "</p>");
    h.push("<ul>" + L.rules.map(function (r) { return "<li>" + zh(r) + "</li>"; }).join("") + "</ul>");
    h.push('<p class="pitfall"><b>Let op:</b> ' + zh(L.pitfall) + "</p>");
    h.push(h2("Voorbeelden", "voorbeelden") + '<div class="card">' + L.examples.map(exHtml).join("") + "</div>");
    if (L.nuance && L.nuance.length) h.push(h2("Dieper: wanneer wel en niet", "dieper") + nuanceHtml(L));
    if (L.mistakes && L.mistakes.length) h.push(h2("Veelgemaakte fouten", "fouten") + mistakesHtml(L));
    if (L.vocab && L.vocab.length) h.push(h2("Tien woorden", "woorden") + '<p class="muted small">Oefenwoorden op ' + esc(level.level) + "-niveau. " + CFG.listNote +
      (level.words ? ' Meer woorden: <a href="woorden.html">woordenlijst ' + esc(level.level) + "</a>." : "") + '</p><div class="card"><table class="vocab">' +
      L.vocab.map(function (v) { return '<tr><td class="h">' + esc(v[0]) + " " + sayBtn(v[0]) + '</td><td class="p">' + esc(v[1]) + "</td><td>" + esc(v[2]) + "</td></tr>"; }).join("") + "</table></div>");
    h.push(h2("Dialoog", "dialoog") + '<div class="card dlg">' + L.dialogue.map(function (d) {
      return '<div class="ex"><div class="cn"><span class="who">' + d[0] + "</span>" + esc(d[1]) + " " + sayBtn(d[1]) + '</div><div class="py">' + esc(d[2]) + '</div><div class="nl">' + esc(d[3]) + "</div></div>";
    }).join("") + "</div>");
    if (L.reading) h.push(h2("Lezen", "lezen") + '<div class="card reading"><h3 class="zh">' + esc(L.reading.title) + " " +
      sayBtn(L.reading.lines.map(function (x) { return x.cn; }).join(CFG.sep || "")) + "</h3>" +
      '<p class="muted small"><label><input type="checkbox" id="rtrans"> vertaling tonen</label></p>' +
      L.reading.lines.map(function (x) { return '<p class="rl"><span class="cn">' + esc(x.cn) + '</span><span class="py">' + esc(x.py) + '</span><span class="nl">' + esc(x.nl) + "</span></p>"; }).join("") +
      '</div><div id="rq"></div>');
    h.push(h2("Oefenen", "oefenen") + '<p class="muted small">Eén vraag tegelijk. Fout? Lees de uitleg en probeer opnieuw.</p><div id="qs"></div><div id="result"></div>');

    var nav = '<div class="pager">' + (idx > 0 ? '<a href="les.html?id=' + level.lessons[idx - 1].id + '">← ' + zh(level.lessons[idx - 1].title) + "</a>" : "<span></span>") +
      (idx < level.lessons.length - 1 ? '<a href="les.html?id=' + level.lessons[idx + 1].id + '">' + zh(level.lessons[idx + 1].title) + " →</a>" : '<a href="./">Terug naar overzicht →</a>') + "</div>";
    var head = '<p class="muted small"><a href="./">' + esc(level.level) + "</a> · les " + (idx + 1) + " van " + level.lessons.length + "</p>" +
      "<h1>" + zh(L.id + " " + L.title) + '</h1><p class="lead">' + zh(L.sub) + "</p>" +
      '<div class="toolbar">' + pinyinToggle() + "<span>· ongeveer 30 minuten · Leren → Lezen → Oefenen → Herhalen</span></div>" +
      '<nav class="toc">' + toc.join("") + "</nav>" +
      (due ? '<div class="card">Er staan <b>' + due + '</b> herhalingsvragen klaar. <a href="../herhaling.html">Eerst herhalen</a></div>' : "");
    root.innerHTML = head + h.join("") + nav;

    root.querySelector("#guess").appendChild(mcWidget(L.guess, lid + "-g", function () {}, { oneShot: true, label: "G" }));
    var rt = root.querySelector("#rtrans");
    if (rt) rt.addEventListener("change", function () { root.querySelector(".reading").classList.toggle("show-nl", rt.checked); });

    // Reading questions (L1..) and exercises (Q1..) together decide the pass.
    var items = (L.reading ? L.reading.questions.map(function (q, i) { return { q: q, label: "L" + (i + 1), seed: lid + "-l" + i, box: "#rq" }; }) : [])
      .concat(L.questions.map(function (q, i) { return { q: q, label: "Q" + (i + 1), seed: lid + "-q" + i, box: "#qs" }; }));
    var total = items.length, solved = 0, firstTry = 0;
    function done(ok) { solved++; if (ok) firstTry++; if (solved === total) finish(); }
    items.forEach(function (it) {
      var q = it.q;
      var w = q.type === "order" ? orderWidget(q, it.seed, done, it.label) : q.type === "open" ? openWidget(q, done, it.label) :
        q.type === "fill" ? fillWidget(q, done, it.label) : mcWidget(q, it.seed, done, { label: it.label });
      root.querySelector(it.box).appendChild(w);
    });

    function finish() {
      var first = !state.lessons[lid];
      if (first) {
        state.lessons[lid] = { passed: today(), firstTry: firstTry === total };
        L.review.forEach(function (_, ri) { state.rules[lid + "-r" + ri] = { next: addDays(today(), 2), gap: 2 }; });
        save(state);
      }
      root.querySelector("#result").innerHTML = '<p class="pass">' + zh(L.canDo) + '</p><p class="muted small">' +
        (first ? "Over 2 dagen komen " + L.review.length + ' nieuwe vragen over deze les terug op de <a href="../herhaling.html">herhaalpagina</a>.' : "Je had deze les al eerder gehaald.") + "</p>";
    }
    if (state.lessons[lid]) root.querySelector("#qs").insertAdjacentHTML("beforebegin", '<p class="tag ok">Al gehaald op ' + esc(state.lessons[lid].passed) + "</p>");
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
  function wordCount(level) { return level.words ? level.words.themes.reduce(function (n, t) { return n + t.words.length; }, 0) : 0; }
  function levelPage(root) {
    var lk = root.dataset.level, level = window.HSK[lk];
    var passed = level.lessons.filter(function (L) { return state.lessons[lk + "-" + L.id]; }).length;
    var pct = Math.round(100 * passed / level.lessons.length);
    var due = dueRules().length, wc = wordCount(level);
    root.innerHTML = '<div class="card"><div class="row" style="justify-content:space-between;margin:0"><span><b>' + passed + "</b> van " + level.lessons.length + " lessen gehaald</span>" +
      (due ? '<a href="../herhaling.html">' + due + " herhalingsvragen klaar</a>" : '<span class="muted">geen herhaling klaar</span>') +
      '</div><div class="progress" style="margin-top:8px"><i style="width:' + pct + '%"></i></div>' +
      (wc ? '<p class="small" style="margin:10px 0 0"><a href="woorden.html">Woordenlijst ' + esc(level.level) + ": " + wc + " woorden, met flashcards →</a></p>" : "") + "</div>" +
      '<ol class="lessons">' + level.lessons.map(function (L) {
        var ok = state.lessons[lk + "-" + L.id];
        return '<li class="card"><a href="les.html?id=' + L.id + '"><span class="num">' + L.id + '</span><span class="t">' + zh(L.title) + "<small>" + zh(L.sub) + "</small></span>" +
          (ok ? '<span class="tag ok">gehaald</span>' : '<span class="tag dim">open</span>') + "</a></li>";
      }).join("") + "</ol>";
  }

  // ---------- level word list: list per theme + flashcards ----------
  function wordsPage(root) {
    var lk = root.dataset.level, level = window.HSK[lk];
    document.title = "Woorden · " + level.level;
    state.known = state.known || {};
    var themes = (level.words && level.words.themes) || [];
    var all = [];
    themes.forEach(function (t, ti) { t.words.forEach(function (v) { all.push({ v: v, t: ti }); }); });
    function known(v) { return !!state.known[lk + ":" + v[0]]; }
    var mode = "lijst", theme = -1, deck = [], pos = 0, shown = false, reverse = false, onlyNew = true;

    function header() {
      var k = all.filter(function (x) { return known(x.v); }).length;
      return '<p class="muted small"><a href="./">' + esc(level.level) + "</a> · woordenlijst</p><h1>Woorden " + esc(level.level) + "</h1>" +
        '<p class="lead">' + all.length + " woorden in " + themes.length + " thema's. Je kent er <b>" + k + "</b>. " + CFG.listNote + "</p>" +
        '<div class="toolbar">' + pinyinToggle() + "</div>" +
        '<nav class="tabs"><a href="#" data-mode="lijst"' + (mode === "lijst" ? ' class="on"' : "") + ">Lijst</a>" +
        '<a href="#" data-mode="kaarten"' + (mode === "kaarten" ? ' class="on"' : "") + ">Flashcards</a></nav>" +
        '<div class="row"><select id="wtheme" class="search" style="margin:0;max-width:340px"><option value="-1">Alle thema\'s</option>' +
        themes.map(function (t, i) { return '<option value="' + i + '"' + (i === theme ? " selected" : "") + ">" + esc(t.name) + " (" + t.words.length + ")</option>"; }).join("") + "</select></div>";
    }
    function list() {
      return themes.map(function (t, ti) {
        if (theme >= 0 && ti !== theme) return "";
        return "<h2>" + esc(t.name) + '</h2><div class="card"><table class="vocab">' + t.words.map(function (v) {
          return '<tr><td class="h">' + esc(v[0]) + " " + sayBtn(v[0]) + '</td><td class="p">' + esc(v[1]) + "</td><td>" + esc(v[2]) + "</td>" +
            '<td class="les"><label class="small"><input type="checkbox" data-known="' + esc(v[0]) + '"' + (known(v) ? " checked" : "") + "> ken ik</label></td></tr>";
        }).join("") + "</table></div>";
      }).join("");
    }
    function newDeck() {
      deck = all.filter(function (x) { return (theme < 0 || x.t === theme) && (!onlyNew || !known(x.v)); }).map(function (x) { return x.v; });
      for (var i = deck.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = deck[i]; deck[i] = deck[j]; deck[j] = t; }
      pos = 0; shown = false;
    }
    function cards() {
      var opts = '<div class="row small"><label><input type="checkbox" id="fonly"' + (onlyNew ? " checked" : "") + "> alleen woorden die ik nog niet ken</label>" +
        '<label><input type="checkbox" id="frev"' + (reverse ? " checked" : "") + "> Nederlands eerst</label></div>";
      if (!deck.length) return opts + '<div class="card">Geen kaarten in deze selectie. Zet "alleen woorden die ik nog niet ken" uit, of kies een ander thema.</div>';
      if (pos >= deck.length) return opts + '<div class="card"><p>Klaar: je hebt alle ' + deck.length + ' kaarten gezien.</p><button class="btn" type="button" data-a="again">Opnieuw schudden</button></div>';
      var v = deck[pos];
      var front = reverse ? '<div class="fc-nl">' + esc(v[2]) + "</div>" : '<div class="fc-word zh">' + esc(v[0]) + "</div>";
      var back = reverse ? '<div class="fc-word zh">' + esc(v[0]) + " " + sayBtn(v[0]) + '</div><div class="py">' + esc(v[1]) + "</div>"
        : '<div class="py">' + esc(v[1]) + " " + sayBtn(v[0]) + '</div><div class="fc-nl">' + esc(v[2]) + "</div>";
      return opts + '<div class="card flashcard"><p class="muted small">Kaart ' + (pos + 1) + " van " + deck.length + "</p>" + front +
        (shown ? '<div class="fc-back">' + back + '</div><div class="row" style="justify-content:center"><button class="btn ghost" type="button" data-a="no">Nog niet</button><button class="btn" type="button" data-a="yes">Ken ik</button></div>'
          : '<div class="row" style="justify-content:center"><button class="btn" type="button" data-a="show">Toon antwoord</button></div>') + "</div>";
    }
    function render() {
      root.innerHTML = header() + (themes.length ? (mode === "lijst" ? list() : cards()) : '<div class="card">De woordenlijst voor dit niveau volgt later.</div>');
    }
    root.addEventListener("click", function (e) {
      var m = e.target.closest("[data-mode]");
      if (m) { e.preventDefault(); mode = m.dataset.mode; if (mode === "kaarten") newDeck(); render(); return; }
      var a = e.target.closest("[data-a]");
      if (!a) return;
      var act = a.dataset.a;
      if (act === "show") shown = true;
      else if (act === "yes" || act === "no") { state.known[lk + ":" + deck[pos][0]] = act === "yes"; if (act === "no") delete state.known[lk + ":" + deck[pos][0]]; save(state); pos++; shown = false; }
      else if (act === "again") newDeck();
      render();
    });
    root.addEventListener("change", function (e) {
      if (e.target.id === "wtheme") { theme = +e.target.value; newDeck(); render(); }
      else if (e.target.id === "fonly") { onlyNew = e.target.checked; newDeck(); render(); }
      else if (e.target.id === "frev") { reverse = e.target.checked; render(); }
      else if (e.target.dataset.known) {
        if (e.target.checked) state.known[lk + ":" + e.target.dataset.known] = true; else delete state.known[lk + ":" + e.target.dataset.known];
        save(state);
      }
    });
    render();
  }

  // ---------- documentation: all grammar and words ----------
  function docsPage(root) {
    var levels = Object.keys(window.HSK);
    function grammar() {
      return levels.map(function (lk) {
        var level = window.HSK[lk];
        return "<h2>" + esc(level.level) + '</h2><div class="toc">' + level.lessons.map(function (L) {
          return '<a href="#g-' + lk + "-" + L.id + '">' + zh(L.title) + "</a>";
        }).join("") + "</div>" + level.lessons.map(function (L) {
          return '<div class="card gram" id="g-' + lk + "-" + L.id + '"><h3>' + zh(L.title) + '</h3><p class="muted small">' + zh(L.sub) + "</p>" +
            patternHtml(L) + '<p class="pattern-cap">' + zh(L.patternCap) + "</p>" +
            "<ul>" + L.rules.map(function (r) { return "<li>" + zh(r) + "</li>"; }).join("") + "</ul>" +
            '<p class="pitfall"><b>Let op:</b> ' + zh(L.pitfall) + "</p>" + L.examples.map(exHtml).join("") +
            (L.nuance && L.nuance.length ? "<details><summary>Dieper: wanneer wel en niet</summary>" + nuanceHtml(L) + "</details>" : "") +
            (L.mistakes && L.mistakes.length ? "<details><summary>Veelgemaakte fouten</summary>" + mistakesHtml(L) + "</details>" : "") +
            '<p class="small"><a href="' + (level.dir || lk) + "/les.html?id=" + L.id + '">Naar de les →</a></p></div>';
        }).join("");
      }).join("");
    }
    function row(v, lk, link, label) {
      var hay = (v[0] + " " + v[1] + " " + v[1].normalize("NFD").replace(/[̀-ͯ]/g, "") + " " + v[2]).toLowerCase();
      return '<tr data-s="' + esc(hay) + '"><td class="h">' + esc(v[0]) + " " + sayBtn(v[0]) + '</td><td class="p">' + esc(v[1]) + "</td><td>" + esc(v[2]) +
        '</td><td class="les"><a href="' + link + '">' + esc(label) + "</a></td></tr>";
    }
    function words() {
      return '<input class="search" type="search" id="wsearch" placeholder="Zoek op ' + CFG.unit + ", " + CFG.rom + ' of betekenis">' + levels.map(function (lk) {
        var level = window.HSK[lk], dir = level.dir || lk, seen = {};
        var rows = [];
        level.lessons.forEach(function (L) { (L.vocab || []).forEach(function (v) { seen[v[0]] = 1; rows.push(row(v, lk, dir + "/les.html?id=" + L.id, "les " + L.id)); }); });
        ((level.words && level.words.themes) || []).forEach(function (t) {
          t.words.forEach(function (v) { if (!seen[v[0]]) { seen[v[0]] = 1; rows.push(row(v, lk, dir + "/woorden.html", t.name)); } });
        });
        if (!rows.length) return "";
        return "<h2>" + esc(level.level) + ' <a class="small" href="' + dir + '/woorden.html">flashcards →</a></h2><div class="card"><table class="vocab">' + rows.join("") + "</table></div>";
      }).join("") + '<p class="muted small" id="wnone" hidden>Geen woorden gevonden.</p><p class="muted small">Oefenwoorden op niveau. ' + CFG.listNote + "</p>";
    }
    function render() {
      var tab = location.hash.indexOf("#woorden") === 0 ? "woorden" : "grammatica";
      root.innerHTML = '<h1>Documentatie</h1><p class="lead">Alle grammatica en woorden, op één plek.</p>' +
        '<div class="toolbar">' + pinyinToggle() + "</div>" +
        '<nav class="tabs"><a href="#grammatica"' + (tab === "grammatica" ? ' class="on"' : "") + ">Grammatica</a>" +
        '<a href="#woorden"' + (tab === "woorden" ? ' class="on"' : "") + ">Woorden</a></nav>" +
        (tab === "woorden" ? words() : grammar());
      var s = root.querySelector("#wsearch");
      if (s) s.addEventListener("input", function () {
        var q = s.value.trim().toLowerCase(), shown = 0;
        root.querySelectorAll("tr[data-s]").forEach(function (tr) { var ok = !q || tr.dataset.s.indexOf(q) >= 0; tr.hidden = !ok; if (ok) shown++; });
        root.querySelector("#wnone").hidden = shown > 0;
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
  else if (page === "words") wordsPage(root);
})();
