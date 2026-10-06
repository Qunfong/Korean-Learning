// Usage: node tools/validate.js assets/data/hsk4.js [more files]
// Checks the lesson data schema used by assets/app.js.
global.window = {};
const errs = [];
for (const f of process.argv.slice(2)) require(require("path").resolve(f));
for (const [key, level] of Object.entries(window.HSK)) {
  const at = (s) => errs.push(key + " " + s);
  if (!level.level || !level.dir || !Array.isArray(level.lessons)) at("needs level, dir, lessons");
  const ids = new Set();
  for (const L of level.lessons || []) {
    const w = (s) => at(L.id + ": " + s);
    if (ids.has(L.id)) w("duplicate id"); ids.add(L.id);
    for (const k of ["slug", "title", "sub", "canDo", "problem", "patternCap", "pitfall"]) if (typeof L[k] !== "string" || !L[k]) w("missing " + k);
    if (/—/.test(JSON.stringify(L))) w("contains an em dash");
    if (!Array.isArray(L.pattern) || L.pattern.length < 2 || L.pattern.some((b) => !b.v || ![1, 2, 3, 4, 5].includes(b.c))) w("bad pattern");
    if (!L.pattern.some((b) => b.key)) w("pattern has no key block");
    if (!Array.isArray(L.rules) || L.rules.length < 2) w("rules < 2");
    if (!Array.isArray(L.examples) || L.examples.length < 3 || L.examples.some((x) => !x.cn || !x.py || !x.nl)) w("examples need 3+ with cn/py/nl");
    // vocab is optional for now (grammar first); when present it must be 10 x [hanzi, pinyin, nl]
    if (L.vocab && L.vocab.length) {
      if (L.vocab.length !== 10 || L.vocab.some((v) => v.length !== 3 || v.some((s) => !s))) w("vocab must be empty or 10 x [hanzi, pinyin, nl]");
      if (new Set(L.vocab.map((v) => v[0])).size !== L.vocab.length) w("vocab has duplicates");
    }
    if (!Array.isArray(L.dialogue) || L.dialogue.length < 4 || L.dialogue.some((d) => d.length !== 4)) w("dialogue needs 4+ lines of [who, cn, py, nl]");
    const mc = (q, name) => {
      if (!q || !q.q || !Array.isArray(q.options) || q.options.length !== 4) return w(name + ": mc needs q + 4 options");
      if (new Set(q.options).size !== 4) w(name + ": duplicate options");
      if (!(q.answer >= 0 && q.answer < 4)) w(name + ": bad answer index");
      if (!Array.isArray(q.why) || q.why.length !== 4) w(name + ": why must have 4 entries");
    };
    mc(L.guess, "guess");
    const types = { mc: 0, order: 0, open: 0 };
    (L.questions || []).forEach((q, i) => {
      const n = "Q" + (i + 1);
      types[q.type] = (types[q.type] || 0) + 1;
      if (q.type === "mc") mc(q, n);
      else if (q.type === "order") {
        if (!q.q || !Array.isArray(q.tokens) || q.tokens.length < 4 || q.tokens.some((t) => t.length !== 2)) w(n + ": order needs 4+ [hanzi, pinyin] tokens");
        if (new Set(q.tokens.map((t) => t[0])).size !== q.tokens.length) w(n + ": order tokens must be unique");
      } else if (q.type === "open") {
        if (!q.q || !Array.isArray(q.model) || !q.model.length || !q.tip) w(n + ": open needs q, model[], tip");
      } else w(n + ": unknown type " + q.type);
    });
    if ((L.questions || []).length < 4 || types.mc < 2 || types.order < 1 || types.open < 1) w("questions: need 4+, with 2+ mc, 1+ order, 1+ open");
    if (!Array.isArray(L.review) || L.review.length !== 2) w("review must have 2 mc");
    (L.review || []).forEach((q, i) => mc(q, "R" + (i + 1)));
  }
}
if (errs.length) { console.log(errs.join("\n")); process.exit(1); }
console.log("OK:", Object.values(window.HSK).map((l) => l.level + " (" + l.lessons.length + " lessen)").join(", "));
