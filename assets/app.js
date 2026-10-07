(function () {
  "use strict";

  // ---------- site settings (window.SITE overrides these; defaults are the Chinese site) ----------
  var CFG = Object.assign({
    key: "hsk-learning-v1", lang: "zh-CN", voice: /^zh/i, rom: "pinyin", language: "Chinees", unit: "karakter", sep: "",
    listNote: "Dit is geen officiële HSK 3.0-woordenlijst.", passSeal: "过", first: "hsk3/les.html?id=01", firstLabel: "HSK 3 · les 1"
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
  function zh(s) { return esc(s).replace(HAN, function (m) { return '<span class="zh">' + (CFG.autoRom && !romOff ? rubyKo(m) : m) + "</span>"; }); }
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

  // ---------- automatic romanization (Korean site: window.SITE.autoRom) ----------
  // Revised Romanization of a Hangul word, pronunciation-based: liaison, nasalization, ㄹ-assimilation, ㅎ-aspiration.
  var RR_INI = ["g", "kk", "n", "d", "tt", "r", "m", "b", "pp", "s", "ss", "", "j", "jj", "ch", "k", "t", "p", "h"];
  var RR_MED = ["a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "wo", "we", "wi", "yu", "eu", "ui", "i"];
  // per final consonant: [sound before a consonant or at the end, what stays when the next syllable starts with ㅇ, what moves over]
  var RR_FIN = [["", "", ""], ["k", "", "g"], ["k", "", "kk"], ["k", "k", "s"], ["n", "", "n"], ["n", "n", "j"], ["n", "", "n"], ["t", "", "d"],
    ["l", "", "r"], ["k", "l", "g"], ["m", "l", "m"], ["l", "l", "b"], ["l", "l", "s"], ["l", "l", "t"], ["p", "l", "p"], ["l", "", "r"],
    ["m", "", "m"], ["p", "", "b"], ["p", "p", "s"], ["t", "", "s"], ["t", "", "ss"], ["ng", "ng", ""], ["t", "", "j"], ["t", "", "ch"],
    ["k", "", "k"], ["t", "", "t"], ["p", "", "p"], ["t", "", ""]];
  function romanize(word) {
    var syl = [];
    for (var i = 0; i < word.length; i++) {
      var c = word.charCodeAt(i) - 0xac00;
      if (c < 0 || c > 11171) return null;
      syl.push({ i: Math.floor(c / 588), m: Math.floor((c % 588) / 28), f: c % 28 });
    }
    var out = "", ini = RR_INI[syl[0].i];
    for (var k = 0; k < syl.length; k++) {
      var s = syl[k], n = syl[k + 1], coda = RR_FIN[s.f][0];
      out += ini + RR_MED[s.m];
      if (!n) { out += coda; break; }
      var ni = RR_INI[n.i];
      var hFinal = s.f === 6 || s.f === 15 || s.f === 27; // ㄶ ㅀ ㅎ
      if (n.i === 11 && n.m === 20 && (s.f === 7 || s.f === 25)) { coda = ""; ni = s.f === 7 ? "j" : "ch"; } // 같이 gachi, 굳이 guji
      else if (n.i === 11) { coda = RR_FIN[s.f][1]; ni = RR_FIN[s.f][2]; }        // liaison: 음악 eumak
      else if (hFinal && (n.i === 0 || n.i === 3 || n.i === 12)) {               // 좋다 jota, 많고 manko
        coda = s.f === 6 ? "n" : s.f === 15 ? "l" : ""; ni = n.i === 0 ? "k" : n.i === 3 ? "t" : "ch";
      } else if (n.i === 18 && /^[ktp]$/.test(coda)) { ni = coda; coda = ""; }    // 축하 chuka, 입학 ipak
      else if (n.i === 2 || n.i === 6) { coda = coda === "k" ? "ng" : coda === "t" ? "n" : coda === "p" ? "m" : coda; } // 국물 gungmul
      else if (n.i === 5) {                                                      // ㄹ after a final
        if (coda === "n" || coda === "l") { coda = "l"; ni = "l"; }              // 신라 silla
        else if (coda) { coda = coda === "k" ? "ng" : coda === "t" ? "n" : coda === "p" ? "m" : coda; ni = "n"; } // 종로 jongno
      }
      if (coda === "l" && n.i === 2) ni = "l";                                   // 설날 seollal
      out += coda; ini = ni;
    }
    return out;
  }
  // Wrap each Hangul word in <ruby> with its romanization. Input is already HTML-escaped.
  function rubyKo(html) {
    return html.replace(/[가-힣]+/g, function (w) { var r = romanize(w); return r ? "<ruby>" + w + "<rt>" + r + "</rt></ruby>" : w; });
  }
  // A level can switch the automatic romanization off ("noRom" in _level.json), e.g. where the exercises test reading Hangul itself.
  var romOff = false;
  function kor(s) { return CFG.autoRom && !romOff ? rubyKo(esc(s)) : esc(s); }

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
    return '<label><input type="checkbox" class="pytoggle"' + (state.prefs.pinyin === false ? "" : " checked") + "> " + CFG.rom.charAt(0).toUpperCase() + CFG.rom.slice(1) + " tonen</label>";
  }
  document.addEventListener("change", function (e) {
    if (e.target.classList && e.target.classList.contains("pytoggle")) {
      state.prefs.pinyin = e.target.checked; save(state); applyPinyin();
      document.querySelectorAll(".pytoggle").forEach(function (x) { x.checked = e.target.checked; });
    }
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
      return '<div class="blk c' + b.c + (b.key ? " key" : "") + '"><span class="l">' + esc(b.l || " ") + '</span><span class="v">' + kor(b.v) + "</span></div>";
    }).join("") + "</div>";
  }
  function nuanceHtml(L) {
    return (L.nuance || []).map(function (n) {
      return '<div class="card nuance"><h3>' + zh(n.h) + "</h3><p>" + zh(n.p) + "</p>" + (n.ex || []).map(exHtml).join("") + "</div>";
    }).join("");
  }
  function mistakesHtml(L) {
    return '<div class="card"><table class="mistakes"><tr><th>Fout</th><th>Goed</th><th>Waarom</th></tr>' + (L.mistakes || []).map(function (m) {
      return '<tr><td class="bad zh">' + kor(m.wrong) + '</td><td class="good zh">' + kor(m.right) + "</td><td>" + zh(m.why) + "</td></tr>";
    }).join("") + "</table></div>";
  }

  // ---------- navigation helpers ----------
  var HAN1 = /[㐀-鿿가-힣]/;
  function keyGlyph(L) {
    var k = (L.pattern || []).filter(function (b) { return b.key; })[0] || (L.pattern || [])[0] || { v: "" };
    var m = String(k.v).match(HAN1) || String(L.title).match(HAN1);
    return m ? m[0] : "";
  }
  function levelKeys() { return Object.keys(window.HSK); }
  function passedIn(lk) { return window.HSK[lk].lessons.filter(function (L) { return state.lessons[lk + "-" + L.id]; }).length; }
  // Where "Ga verder" goes: the last opened lesson if not passed, else the next open lesson after it.
  function nextTarget() {
    var keys = levelKeys(), last = state.last;
    function firstOpen(lk, from) {
      var ls = window.HSK[lk].lessons;
      for (var i = from || 0; i < ls.length; i++) if (!state.lessons[lk + "-" + ls[i].id]) return { lk: lk, L: ls[i] };
      return null;
    }
    if (last && window.HSK[last.lk]) {
      var ls = window.HSK[last.lk].lessons, i = ls.findIndex(function (L) { return L.id === last.id; });
      if (i >= 0 && !state.lessons[last.lk + "-" + last.id]) return { lk: last.lk, L: ls[i] };
      var t = firstOpen(last.lk, i + 1) || firstOpen(last.lk, 0);
      if (t) return t;
    }
    for (var k = 0; k < keys.length; k++) { var o = firstOpen(keys[k], 0); if (o) return o; }
    return { lk: keys[0], L: window.HSK[keys[0]].lessons[0] };
  }
  function rootPath() { return document.body.getAttribute("data-root") || ""; }
  function lessonHref(lk, id) { return rootPath() + (window.HSK[lk].dir || lk) + "/les.html?id=" + id; }
  function squaresHtml(lk) {
    return '<span class="squares" aria-hidden="true">' + window.HSK[lk].lessons.map(function (L) {
      return "<i" + (state.lessons[lk + "-" + L.id] ? ' class="on"' : "") + "></i>";
    }).join("") + "</span>";
  }
  function decorateHeader(page) {
    var due = dueRules().length;
    document.querySelectorAll("[data-due]").forEach(function (s) { s.textContent = due ? String(due) : ""; });
    var t = nextTarget(), c = document.querySelector("[data-continue]");
    if (c && t) { c.href = lessonHref(t.lk, t.L.id); c.title = window.HSK[t.lk].level + ", les " + Number(t.L.id) + ": " + t.L.title; }
    var on = page === "review" ? "herhalen" : page === "docs" ? (location.hash.indexOf("#woorden") === 0 ? "woorden" : "grammatica") :
      page === "words" ? "woorden" : "leren";
    document.querySelectorAll("[data-nav]").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-nav") === on); });
  }

  // ---------- page: home ----------
  function homePage(root) {
    var H = window.HOME || {}, keys = levelKeys(), t = nextTarget(), due = dueRules().length;
    var totalL = 0, passed = 0, words = 0;
    keys.forEach(function (lk) { totalL += window.HSK[lk].lessons.length; passed += passedIn(lk); words += wordCount(window.HSK[lk]); });
    var known = Object.keys(state.known || {}).length;
    var started = Object.keys(state.lessons).length > 0 || !!state.last;
    var lv = window.HSK[t.lk];
    root.innerHTML =
      '<section class="home-hero"><div class="grid-char"><span>' + esc(keyGlyph(t.L)) + "</span></div><div>" +
      "<h1>" + esc(H.h1 || "") + '</h1><p class="lead">' + esc(H.lead || "") + "</p>" +
      '<p class="next-label">' + (started ? "Ga verder met " : "Begin met ") + esc(lv.level) + ", les " + Number(t.L.id) + '</p><p><b>' + zh(t.L.title) + "</b>: " + zh(t.L.sub) + "</p>" +
      '<div class="row"><a class="btn" href="' + lessonHref(t.lk, t.L.id) + '">' + (started ? "Ga verder" : "Begin de eerste les") + "</a>" +
      (due ? '<a class="btn ghost" href="herhaling.html">Herhalen (' + due + ")</a>" : "") + "</div>" +
      '<p class="facts"><span><b>' + passed + "</b> van " + totalL + " lessen gehaald</span><span><b>" + known + "</b> van " + words + " woorden gekend</span>" +
      "<span><b>" + due + "</b> herhaling" + (due === 1 ? "" : "en") + " klaar</span></p></div></section>" +
      '<h2 id="niveaus">Niveaus</h2><div class="levels">' + keys.map(function (lk) {
        var L = window.HSK[lk], p = passedIn(lk), wc = wordCount(L);
        return '<a class="level-row" href="' + (L.dir || lk) + '/"><span class="name">' + esc(L.level) + "</span>" + squaresHtml(lk) +
          '<span class="topics zh">' + esc((H.topics || {})[lk] || "") + '</span><span class="meta">' + p + " van " + L.lessons.length + " lessen<br>" + wc + " woorden</span></a>";
      }).join("") + "</div>" +
      '<h2>Zo werkt een les</h2><ol class="how">' +
      "<li><b>Gok eerst.</b> Eén vraag over het nieuwe patroon, vóór de uitleg. Telt niet mee.</li>" +
      "<li><b>Het idee.</b> Welk probleem het patroon oplost, de zinsbouw als schema, en de valkuil.</li>" +
      "<li><b>Dieper.</b> Wanneer wel en niet, het verschil met patronen die erop lijken, en veelgemaakte fouten.</li>" +
      "<li><b>Woorden, dialoog en leestekst.</b> Met " + esc(CFG.rom) + " (uit te zetten) en uitspraak via je browser.</li>" +
      "<li><b>Oefenen.</b> Meerkeuze, invullen, zinnen bouwen en vertalen. Fout? Je krijgt uitleg en probeert opnieuw.</li>" +
      "<li><b>Herhalen.</b> Na 2 dagen komen nieuwe vragen terug. Goed: de pauze verdubbelt. Fout: morgen opnieuw.</li></ol>";
  }

  // ---------- page: lesson ----------
  function lessonPage(root) {
    var params = new URLSearchParams(location.search);
    var levelKey = root.dataset.level, level = window.HSK[levelKey];
    var idx = level.lessons.findIndex(function (l) { return l.id === params.get("id"); });
    if (idx < 0) idx = 0;
    var L = level.lessons[idx], lid = levelKey + "-" + L.id;
    romOff = !!level.noRom;
    document.title = L.id + " " + L.title + " | " + level.level;
    state.last = { lk: levelKey, id: L.id }; save(state);

    var secs = [];
    function sec(id, title, html) { secs.push({ id: id, title: title, html: html }); }
    sec("gok", "Gok eerst", '<p class="muted">Nog geen uitleg gehad? Juist. Gokken telt niet mee, maar je onthoudt de uitleg daarna beter.</p><div id="guess"></div>');
    sec("idee", "Het idee", "<p>" + zh(L.problem) + "</p>" + patternHtml(L) + '<p class="pattern-cap">' + zh(L.patternCap) + "</p>" +
      '<ul class="rules">' + L.rules.map(function (r) { return "<li>" + zh(r) + "</li>"; }).join("") + "</ul>" +
      '<p class="pitfall"><b>Let op:</b> ' + zh(L.pitfall) + "</p>");
    sec("voorbeelden", "Voorbeelden", '<div class="card">' + L.examples.map(exHtml).join("") + "</div>");
    if (L.nuance && L.nuance.length) sec("dieper", "Wanneer wel en niet", nuanceHtml(L));
    if (L.mistakes && L.mistakes.length) sec("fouten", "Veelgemaakte fouten", mistakesHtml(L));
    if (L.vocab && L.vocab.length) sec("woorden", "Tien woorden", '<p class="muted small">Oefenwoorden op ' + esc(level.level) + "-niveau. " + CFG.listNote +
      (level.words ? ' Meer woorden staan in de <a href="woorden.html">woordenlijst van ' + esc(level.level) + "</a>." : "") + '</p><div class="card"><table class="vocab">' +
      L.vocab.map(function (v) { return '<tr><td class="h">' + esc(v[0]) + " " + sayBtn(v[0]) + '</td><td class="p">' + esc(v[1]) + "</td><td>" + esc(v[2]) + "</td></tr>"; }).join("") + "</table></div>");
    sec("dialoog", "Dialoog", '<div class="card dlg">' + L.dialogue.map(function (d) {
      return '<div class="ex"><span class="who">' + esc(d[0]) + '</span><div class="cn">' + esc(d[1]) + " " + sayBtn(d[1]) + '</div><div class="py">' + esc(d[2]) + '</div><div class="nl">' + esc(d[3]) + "</div></div>";
    }).join("") + "</div>");
    if (L.reading) sec("lezen", "Lezen", '<div class="card reading"><h3>' + esc(L.reading.title) + " " +
      sayBtn(L.reading.lines.map(function (x) { return x.cn; }).join(CFG.sep || "")) + "</h3>" +
      '<p class="toolbar"><label><input type="checkbox" id="rtrans"> Vertaling tonen</label></p>' +
      L.reading.lines.map(function (x) { return '<p class="rl"><span class="cn">' + esc(x.cn) + '</span><span class="py">' + esc(x.py) + '</span><span class="nl">' + esc(x.nl) + "</span></p>"; }).join("") +
      '</div><div id="rq"></div>');
    sec("oefenen", "Oefenen", '<p class="muted">Eén vraag tegelijk. Fout? Lees de uitleg en probeer opnieuw.</p><div id="qs"></div><div id="result"></div>');

    var next = level.lessons[idx + 1], prev = level.lessons[idx - 1];
    var nextHtml = next
      ? '<a class="card next-card" href="les.html?id=' + next.id + '"><span class="grid-char sm"><span>' + esc(keyGlyph(next)) + '</span></span><span class="t"><small>Volgende les</small><b>' + zh(next.title) + "</b></span></a>"
      : '<a class="card next-card" href="./"><span class="t"><small>Laatste les van ' + esc(level.level) + "</small><b>Terug naar het overzicht</b></span></a>";
    var pager = '<p class="pager">' + (prev ? '<a href="les.html?id=' + prev.id + '">Vorige les: ' + zh(prev.title) + "</a>" : "<span></span>") + '<a href="./">Alle lessen van ' + esc(level.level) + "</a></p>";
    var due = dueRules().length;
    var head = '<header class="lesson-head"><div><p class="where"><a href="./">' + esc(level.level) + "</a>, les " + (idx + 1) + " van " + level.lessons.length +
      (state.lessons[lid] ? ' <span class="tag ok">gehaald</span>' : "") + "</p>" +
      "<h1>" + zh(L.title) + '</h1><p class="lead">' + zh(L.sub) + "</p>" +
      '<p class="goal"><b>Doel:</b> ' + zh(L.canDo.replace(/^Je kunt nu /, "je kunt straks ")) + "</p>" +
      '<div class="toolbar mobile-toolbar">' + pinyinToggle() + "</div></div>" +
      '<div class="grid-char"><span>' + esc(keyGlyph(L)) + "</span></div></header>";
    var side = '<aside class="side"><nav class="toc" aria-label="Onderdelen van de les">' + secs.map(function (s, i) {
      return '<a href="#' + s.id + '"><span class="n">' + (i + 1) + "</span>" + s.title + "</a>";
    }).join("") + '</nav><div class="side-box"><span id="pcount"></span><div class="progress"><i id="pbar" style="width:0"></i></div>' +
      (due ? '<a href="../herhaling.html">' + due + " herhaling" + (due === 1 ? "" : "en") + " klaar</a>" : "") + "</div>" +
      '<div class="toolbar">' + pinyinToggle() + "</div></aside>";
    root.innerHTML = head + '<div class="lesson-layout">' + side + '<div class="lesson-main">' + secs.map(function (s, i) {
      return '<section id="' + s.id + '"><h2><span class="n">' + (i + 1) + "</span>" + s.title + "</h2>" + s.html + "</section>";
    }).join("") + nextHtml + pager + "</div></div>";

    root.querySelector("#guess").appendChild(mcWidget(L.guess, lid + "-g", function () {}, { oneShot: true, label: "G" }));
    var rt = root.querySelector("#rtrans");
    if (rt) rt.addEventListener("change", function () { root.querySelector(".reading").classList.toggle("show-nl", rt.checked); });

    // Scroll spy: highlight the section in view.
    var links = root.querySelectorAll("nav.toc a");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          links.forEach(function (a) {
            var on = a.getAttribute("href") === "#" + e.target.id;
            a.classList.toggle("on", on);
            if (on && a.scrollIntoView && window.innerWidth <= 980) a.parentNode.scrollLeft = a.offsetLeft - 20;
          });
        });
      }, { rootMargin: "-30% 0px -60% 0px" });
      root.querySelectorAll(".lesson-main > section").forEach(function (s) { io.observe(s); });
    }

    // Reading questions (L1..) and exercises (Q1..) together decide the pass.
    var items = (L.reading ? L.reading.questions.map(function (q, i) { return { q: q, label: "L" + (i + 1), seed: lid + "-l" + i, box: "#rq" }; }) : [])
      .concat(L.questions.map(function (q, i) { return { q: q, label: "Q" + (i + 1), seed: lid + "-q" + i, box: "#qs" }; }));
    var total = items.length, solved = 0, firstTry = 0;
    function progress() {
      root.querySelector("#pcount").textContent = solved + " van " + total + " vragen gedaan";
      root.querySelector("#pbar").style.width = Math.round(100 * solved / total) + "%";
    }
    function done(ok) { solved++; if (ok) firstTry++; progress(); if (solved === total) finish(); }
    items.forEach(function (it) {
      var q = it.q, w;
      w = q.type === "order" ? orderWidget(q, it.seed, mark, it.label) : q.type === "open" ? openWidget(q, mark, it.label) :
        q.type === "fill" ? fillWidget(q, mark, it.label) : mcWidget(q, it.seed, mark, { label: it.label });
      function mark(ok) { w.classList.add("solved"); done(ok); }
      root.querySelector(it.box).appendChild(w);
    });
    progress();

    function finish() {
      var first = !state.lessons[lid];
      if (first) {
        state.lessons[lid] = { passed: today(), firstTry: firstTry === total };
        L.review.forEach(function (_, ri) { state.rules[lid + "-r" + ri] = { next: addDays(today(), 2), gap: 2 }; });
        save(state);
        decorateHeader("lesson");
      }
      root.querySelector("#result").innerHTML = '<div class="pass"><span class="stamp" aria-hidden="true">' + esc(CFG.passSeal) + "</span><div>" + zh(L.canDo) +
        '<br><span class="muted small">' + (first ? "Over 2 dagen komen " + L.review.length + ' nieuwe vragen over deze les terug bij <a href="../herhaling.html">Herhalen</a>.' : "Je had deze les al eerder gehaald.") + "</span></div></div>";
    }
  }

  // ---------- review (spaced: 2 days, double when right, back to 1 when wrong, learned at 16+) ----------
  function allReviewItems() {
    var out = [];
    Object.keys(window.HSK).forEach(function (lk) {
      window.HSK[lk].lessons.forEach(function (L) {
        L.review.forEach(function (q, ri) { out.push({ key: lk + "-" + L.id + "-r" + ri, q: q, lesson: L, dir: window.HSK[lk].dir || lk, noRom: !!window.HSK[lk].noRom }); });
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
      romOff = it.noRom;
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
    var passed = passedIn(lk), wc = wordCount(level), due = dueRules().length;
    var nextId = (level.lessons.filter(function (L) { return !state.lessons[lk + "-" + L.id]; })[0] || {}).id;
    root.innerHTML = '<div class="level-head">' + squaresHtml(lk) + '<p class="facts"><span><b>' + passed + "</b> van " + level.lessons.length + " lessen gehaald</span>" +
      (wc ? '<span><a href="woorden.html">Woordenlijst met flashcards</a> (' + wc + " woorden)</span>" : "") +
      (due ? '<span><a href="../herhaling.html">' + due + " herhaling" + (due === 1 ? "" : "en") + " klaar</a></span>" : "") + "</p></div>" +
      '<ol class="lessons">' + level.lessons.map(function (L) {
        var ok = state.lessons[lk + "-" + L.id];
        return '<li class="' + (ok ? "done" : L.id === nextId ? "next" : "") + '"><a href="les.html?id=' + L.id + '"><span class="num">' + Number(L.id) + '</span><span class="t">' + zh(L.title) + "<small>" + zh(L.sub) + "</small></span>" +
          (ok ? '<span class="tag ok">gehaald</span>' : L.id === nextId ? '<span class="tag">volgende</span>' : "") + "</a></li>";
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
      return '<p class="muted small"><a href="./">' + esc(level.level) + "</a>, woordenlijst</p><h1>Woorden " + esc(level.level) + "</h1>" +
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
      var square = '<div class="grid-char' + (v[0].length > 2 ? " wide" : "") + '"><span>' + esc(v[0]) + "</span></div>";
      var front = reverse ? '<div class="fc-nl">' + esc(v[2]) + "</div>" : square;
      var back = reverse ? square + sayBtn(v[0]) + '<div class="py">' + esc(v[1]) + "</div>"
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
        return "<h2>" + esc(level.level) + '</h2><div class="toc-chips">' + level.lessons.map(function (L) {
          return '<a href="#g-' + lk + "-" + L.id + '">' + zh(L.title) + "</a>";
        }).join("") + "</div>" + level.lessons.map(function (L) {
          return '<div class="card gram" id="g-' + lk + "-" + L.id + '"><h3>' + zh(L.title) + '</h3><p class="muted small">' + zh(L.sub) + "</p>" +
            patternHtml(L) + '<p class="pattern-cap">' + zh(L.patternCap) + "</p>" +
            "<ul>" + L.rules.map(function (r) { return "<li>" + zh(r) + "</li>"; }).join("") + "</ul>" +
            '<p class="pitfall"><b>Let op:</b> ' + zh(L.pitfall) + "</p>" + L.examples.map(exHtml).join("") +
            (L.nuance && L.nuance.length ? "<details><summary>Dieper: wanneer wel en niet</summary>" + nuanceHtml(L) + "</details>" : "") +
            (L.mistakes && L.mistakes.length ? "<details><summary>Veelgemaakte fouten</summary>" + mistakesHtml(L) + "</details>" : "") +
            '<p class="small"><a href="' + (level.dir || lk) + "/les.html?id=" + L.id + '">Naar de les</a></p></div>';
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
        return "<h2>" + esc(level.level) + '</h2><p class="small"><a href="' + dir + '/woorden.html">Flashcards voor ' + esc(level.level) + '</a></p><div class="card"><table class="vocab">' + rows.join("") + "</table></div>";
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
  if (page === "home") homePage(root);
  else if (page === "lesson") lessonPage(root);
  else if (page === "review") reviewPage(root);
  else if (page === "level") levelPage(root);
  else if (page === "docs") docsPage(root);
  else if (page === "words") wordsPage(root);
  decorateHeader(page);
  window.addEventListener("hashchange", function () { decorateHeader(page); });
})();
