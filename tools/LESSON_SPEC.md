# Lesson spec (HSK-Learning and Korean-Learning)

One lesson = one file `assets/src/<level>/<NN>-<slug>.js` containing ONE JavaScript object literal wrapped in parentheses: `({ ... })`.
Reference lesson (follow its depth, tone and structure exactly): `HSK-Learning/assets/src/hsk3/01-ba.js`.
Check every file with `node tools/validate.js assets/src/<level>/<file>.js` (run from the repo root) until it prints OK.
Do NOT edit `assets/data/*.js` (generated) or any file outside your assignment.

## Fields
- `id` "NN", `slug` (short lowercase ascii), `title`, `sub` (one line), `canDo` ("Je kunt nu ...").
- `guess`: mc asked BEFORE any teaching; the learner can reason toward any option.
- `problem`: < ~60 words, opens with the problem the pattern solves (contrast with Dutch where helpful).
- `pattern`: blocks `{ l: label, v: text, c: 1-5, key?: true }`; exactly one or two `key` blocks = the grammar point. `patternCap`: one line with the formula and variants.
- `rules`: 3-5 form rules (word order, negation, aspect/tense, after vowel vs 받침 for Korean, verbs vs adjectives, register).
- `pitfall`: the single most important trap.
- `examples`: 3-4 `{ cn, py, nl }`. For Korean, `cn` = Hangul, `py` = Revised Romanization of the whole sentence.
- `nuance`: 2-4 items `{ h, p, ex?: [{cn, py, nl}] }`, each p ≤ ~80 words. Cover: when to use and when NOT; the difference with 1-2 similar patterns the learner will confuse it with (name them, give a minimal pair); register (spreektaal/schrijftaal, beleefdheid) where relevant.
- `mistakes`: 3-4 `{ wrong, right, why }`: real learner errors, `wrong` and `right` differ minimally.
- `vocab`: exactly 10 `[word, romanization, Dutch]`; first entry = the grammar word(s) of the lesson; the rest = words from this lesson's examples, dialogue and reading that a learner at this level would look up.
- `dialogue`: 4-6 lines `[who, cn, py, nl]`, natural, using the pattern.
- `reading`: `{ title, lines: 6-10 × {cn, py, nl}, questions: 3 × mc }`. A short coherent story or text AT THE LEVEL (formal register for the highest levels) that uses the pattern at least 3 times. Questions: 2 on content, 1 on the pattern's meaning in the text.
- `questions`: 10-12, at least 5 `mc`, 2 `order`, 1 `fill`, 2 `open` (at least one open = translate Dutch → target language). Vary: meaning, form, word order, choose-the-wrong-one, contrast with the look-alike pattern, register.
  - mc: `{ type: "mc", q, options: [4], answer: 0, why: [4] }`. Write the correct option first (`answer: 0`; the site shuffles in a stable order). Each wrong option = the correct one changed by ONE real misconception, same shape and length. `why[0]` starts with "Goed"; the others name the misconception. Every wrong option must be truly wrong: no option a native speaker could accept. In fill-in-the-word mc, only one option may fit.
  - order: `{ type: "order", q, tokens: [[word, romanization], ...] }` in the CORRECT order, 4-6 unique tokens; only one ordering should be correct (merge movable parts into one token). If another order is also grammatical and natural, list it in `alt: ["other full sentence", ...]` (written exactly as the joined tokens would read). Chinese answers are joined without spaces; Korean answers with one space (tokens = 어절), so the join must equal the correct sentence.
  - fill: `{ type: "fill", q: "... ___ ... (Dutch meaning)", answers: ["accepted", ...], hint, why }`. Short answers (1-4 characters / one 어절 or ending). List every acceptable answer.
  - open: `{ type: "open", q, model: [2-3 answers], tip }`, tip = what to check.
- `review`: exactly 3 mc on NEW sentences (never a sentence from the lesson); they come back days later.

## Writing rules
- All explanations in Dutch. Sentences ≤ ~20 words, one idea per sentence, active voice, no idioms, no praise.
- No em dashes anywhere (use "-", ":" or "..."). Escape double quotes inside strings (`\"`).
- Accuracy first: correct characters/Hangul, spacing (띄어쓰기), tone-marked pinyin (neutral tone unmarked) or consistent Revised Romanization, natural sentences. If unsure about a sentence or word, replace it with one you are sure about.
- Vocabulary is level-appropriate practice; never claim official HSK/TOPIK list membership.
- Do not copy official exam questions.

## Upgrading an existing lesson
Keep what is good (id, slug, title, examples, dialogue, existing questions and reviews), fix anything wrong, and ADD the missing parts: nuance, mistakes, reading, vocab (if empty), more questions (to 10-12 with the required mix), and a third review question. Rewrite the file as a readable JS object literal (not JSON with quoted keys), like the reference.

## Level word list (`assets/src/<level>/_words.js`)
`({ themes: [ { name: "Dutch theme name", words: [[word, romanization, Dutch], ...] }, ... ] })`
150-300 words in 8-14 themes (each ≥ 8 words), typical for THIS level (not basic words of lower levels), no duplicates. Check with `node tools/validate.js assets/src/<level>/_words.js`.
