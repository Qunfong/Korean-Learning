// Checks lesson data. Usage:
//   node tools/validate.js assets/data/hsk3.js [...]            merged level files (after python tools/build_pages.py)
//   node tools/validate.js --deep assets/src/hsk3/07-zhe.js     single lesson source files, full (deep) schema
//   node tools/validate.js --words assets/src/hsk3/_words.js    a level word list
// --deep is implied for source files. This file is identical in HSK-Learning and Korean-Learning.
const fs = require("fs"), path = require("path"), vm = require("vm");
const args = process.argv.slice(2);
const deepFlag = args.includes("--deep"), wordsFlag = args.includes("--words");
const files = args.filter((a) => !a.startsWith("--"));
const errs = [];

function checkLesson(L, at, deep) {
  const w = (s) => errs.push(at + " " + (L.id || "?") + ": " + s);
  for (const k of ["id", "slug", "title", "sub", "canDo", "problem", "patternCap", "pitfall"]) if (typeof L[k] !== "string" || !L[k]) w("missing " + k);
  if (/—/.test(JSON.stringify(L))) w("contains an em dash");
  if (!Array.isArray(L.pattern) || L.pattern.length < 2 || L.pattern.some((b) => !b.v || ![1, 2, 3, 4, 5].includes(b.c))) w("bad pattern");
  else if (!L.pattern.some((b) => b.key)) w("pattern has no key block");
  if (!Array.isArray(L.rules) || L.rules.length < 2) w("rules < 2");
  const ex = (x) => x && x.cn && x.py && x.nl;
  if (!Array.isArray(L.examples) || L.examples.length < 3 || !L.examples.every(ex)) w("examples need 3+ with cn/py/nl");
  if (L.vocab && L.vocab.length) {
    if (L.vocab.length !== 10 || L.vocab.some((v) => v.length !== 3 || v.some((s) => !s))) w("vocab must be empty or 10 x [word, romanization, nl]");
    if (new Set(L.vocab.map((v) => v[0])).size !== L.vocab.length) w("vocab has duplicates");
  } else if (deep) w("deep: vocab must have 10 entries");
  if (!Array.isArray(L.dialogue) || L.dialogue.length < 4 || L.dialogue.some((d) => d.length !== 4)) w("dialogue needs 4+ lines of [who, cn, py, nl]");
  const mc = (q, name) => {
    if (!q || !q.q || !Array.isArray(q.options) || q.options.length !== 4) return w(name + ": mc needs q + 4 options");
    if (new Set(q.options).size !== 4) w(name + ": duplicate options");
    if (!(q.answer >= 0 && q.answer < 4)) w(name + ": bad answer index");
    if (!Array.isArray(q.why) || q.why.length !== 4) w(name + ": why must have 4 entries");
  };
  mc(L.guess, "guess");
  const types = { mc: 0, order: 0, open: 0, fill: 0 };
  (L.questions || []).forEach((q, i) => {
    const n = "Q" + (i + 1);
    types[q.type] = (types[q.type] || 0) + 1;
    if (q.type === "mc") mc(q, n);
    else if (q.type === "order") {
      if (!q.q || !Array.isArray(q.tokens) || q.tokens.length < 4 || q.tokens.some((t) => t.length !== 2)) w(n + ": order needs 4+ [word, romanization] tokens");
      else if (new Set(q.tokens.map((t) => t[0])).size !== q.tokens.length) w(n + ": order tokens must be unique");
      if (q.alt && (!Array.isArray(q.alt) || q.alt.some((x) => typeof x !== "string"))) w(n + ": alt must be an array of strings");
    } else if (q.type === "open") {
      if (!q.q || !Array.isArray(q.model) || !q.model.length || !q.tip) w(n + ": open needs q, model[], tip");
    } else if (q.type === "fill") {
      if (!q.q || !q.q.includes("___") || !Array.isArray(q.answers) || !q.answers.length || !q.why) w(n + ": fill needs q with ___, answers[], why");
    } else w(n + ": unknown type " + q.type);
  });
  if (deep) {
    const n = (L.questions || []).length;
    if (n < 10 || n > 12 || types.mc < 5 || types.order < 2 || types.fill < 1 || types.open < 2)
      w("deep: questions need 10-12, with 5+ mc, 2+ order, 1+ fill, 2+ open (have " + JSON.stringify(types) + ")");
    if (!Array.isArray(L.nuance) || L.nuance.length < 2 || L.nuance.length > 4 || L.nuance.some((x) => !x.h || !x.p || (x.ex && !x.ex.every(ex))))
      w("deep: nuance needs 2-4 items {h, p, ex?[]}");
    if (!Array.isArray(L.mistakes) || L.mistakes.length < 3 || L.mistakes.length > 4 || L.mistakes.some((x) => !x.wrong || !x.right || !x.why))
      w("deep: mistakes needs 3-4 items {wrong, right, why}");
    const r = L.reading;
    if (!r || !r.title || !Array.isArray(r.lines) || r.lines.length < 6 || r.lines.length > 10 || !r.lines.every(ex)) w("deep: reading needs title + 6-10 lines {cn, py, nl}");
    else if (!Array.isArray(r.questions) || r.questions.length !== 3) w("deep: reading needs 3 mc questions");
    else r.questions.forEach((q, i) => mc(q, "reading Q" + (i + 1)));
    if (!Array.isArray(L.review) || L.review.length !== 3) w("deep: review must have 3 mc");
  } else if (!Array.isArray(L.review) || L.review.length < 2) w("review must have 2+ mc");
  (L.review || []).forEach((q, i) => mc(q, "R" + (i + 1)));
}

function checkWords(W, at) {
  const w = (s) => errs.push(at + ": " + s);
  if (!W || !Array.isArray(W.themes) || !W.themes.length) return w("words need themes[]");
  const all = [];
  for (const t of W.themes) {
    if (!t.name || !Array.isArray(t.words) || t.words.length < 8) w("theme '" + t.name + "' needs a name and 8+ words");
    for (const v of t.words || []) { if (v.length !== 3 || v.some((s) => !s)) w("bad word " + JSON.stringify(v)); all.push(v[0]); }
  }
  const dup = all.filter((x, i) => all.indexOf(x) !== i);
  if (dup.length) w("duplicate words: " + [...new Set(dup)].join(", "));
  if (all.length < 150 || all.length > 320) w("word list should have 150-300 words (has " + all.length + ")");
}

const evalExpr = (f) => vm.runInNewContext(fs.readFileSync(f, "utf8"), {}, { filename: f });
const summary = [];
for (const f of files) {
  const base = path.basename(f);
  if (wordsFlag || base === "_words.js") { const W = evalExpr(f); checkWords(W, base); summary.push(base + " (" + W.themes.reduce((n, t) => n + t.words.length, 0) + " woorden)"); }
  else if (f.includes(path.sep + "src" + path.sep) || f.includes("/src/") || deepFlag) { checkLesson(evalExpr(f), base, true); summary.push(base); }
  else {
    const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
    for (const [key, lv] of Object.entries(ctx.window.HSK)) {
      if (!lv.level || !lv.dir || !Array.isArray(lv.lessons)) errs.push(key + ": needs level, dir, lessons");
      const ids = new Set();
      for (const L of lv.lessons) { if (ids.has(L.id)) errs.push(key + " " + L.id + ": duplicate id"); ids.add(L.id); checkLesson(L, key, false); }
      if (lv.words) checkWords(lv.words, key + " words");
      summary.push(lv.level + " (" + lv.lessons.length + " lessen" + (lv.words ? ", " + lv.words.themes.reduce((n, t) => n + t.words.length, 0) + " woorden" : "") + ")");
    }
  }
}
if (errs.length) { console.log(errs.join("\n")); process.exit(1); }
console.log("OK: " + summary.join(", "));
