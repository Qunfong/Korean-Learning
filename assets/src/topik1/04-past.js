({
  id: "04", slug: "past", title: "-았/었어요", sub: "Verleden tijd",
  canDo: "Je kunt nu vertellen wat je gisteren of in het weekend deed, met -았어요, -었어요 en 했어요.",
  guess: {
    q: "\"Gisteren heb ik vlees gegeten.\" Welke zin klopt, denk je?",
    options: ["어제 고기를 먹었어요.", "어제 고기를 먹았어요.", "어제 고기를 먹어요.", "어제 고기를 먹했어요."], answer: 0,
    why: ["Goed: de klinker van 먹 is ㅓ, dus 었어요.", "았어요 komt alleen na ㅏ of ㅗ.", "먹어요 is tegenwoordige tijd. Bij 어제 hoort verleden tijd.", "했어요 is alleen voor werkwoorden op 하다."]
  },
  problem: "Wil je vertellen wat je gisteren deed? Dan heb je de verleden tijd nodig. Je plakt 았어요 of 었어요 aan de stam. Dezelfde klinkerregel als bij 아요/어요 beslist welke.",
  pattern: [
    { l: "wanneer", v: "어제", c: 1 }, { l: "stam", v: "먹", c: 4 }, { l: "-았/었어요", v: "었어요", c: 2, key: true }
  ],
  patternCap: "Stam + 았어요 (na ㅏ of ㅗ) · stam + 었어요 (andere klinkers) · 하다 → 했어요",
  rules: [
    "Is de laatste klinker ㅏ of ㅗ? Dan 았어요: 좋다 → 좋았어요, 살다 → 살았어요.",
    "Bij andere klinkers komt 었어요: 먹다 → 먹었어요, 읽다 → 읽었어요.",
    "Eindigt de stam op een klinker? Dan smelten ze samen: 가다 → 갔어요, 오다 → 왔어요, 마시다 → 마셨어요.",
    "Alles met 하다 wordt 했어요: 공부하다 → 공부했어요.",
    "Bij 이다: na een 받침 이었어요, na een klinker 였어요: 학생이었어요, 의사였어요."
  ],
  pitfall: "Een tijdwoord als 어제 maakt de zin niet vanzelf verleden. Het werkwoord verandert ook: zeg 어제 갔어요, niet 어제 가요.",
  examples: [
    { cn: "어제 친구를 만났어요.", py: "Eoje chingureul mannasseoyo.", nl: "Gisteren heb ik een vriend gezien." },
    { cn: "주말에 영화를 봤어요.", py: "Jumare yeonghwareul bwasseoyo.", nl: "In het weekend heb ik een film gekeken." },
    { cn: "아침에 커피를 마셨어요.", py: "Achime keopireul masyeosseoyo.", nl: "Vanochtend heb ik koffie gedronken." },
    { cn: "지난주에 한국어를 공부했어요.", py: "Jinanjue hangugeoreul gongbuhaesseoyo.", nl: "Vorige week heb ik Koreaans gestudeerd." }
  ],
  nuance: [
    { h: "Eén vorm voor \"ik at\" en \"ik heb gegeten\"",
      p: "Het Nederlands heeft twee verleden tijden: de onvoltooid verleden tijd en de voltooid tegenwoordige tijd. Het Koreaans heeft hier één vorm. 먹었어요 is dus \"ik at\" én \"ik heb gegeten\". Kies in je vertaling wat in het Nederlands natuurlijk klinkt.",
      ex: [
        { cn: "점심을 먹었어요.", py: "Jeomsimeul meogeosseoyo.", nl: "Ik heb geluncht. / Ik lunchte." }
      ] },
    { h: "-았/었어요 of -았/었습니다?",
      p: "-았/었어요 is beleefd en gewoon in gesprekken. -았/었습니다 is formeel: in het nieuws, in een toespraak of op het werk tegen een klant. De betekenis is hetzelfde. In een gewoon gesprek klinkt -습니다 stijf.",
      ex: [
        { cn: "어제 회의를 했어요.", py: "Eoje hoeuireul haesseoyo.", nl: "Gisteren hadden we een vergadering. (beleefd)" },
        { cn: "어제 회의를 했습니다.", py: "Eoje hoeuireul haetseumnida.", nl: "Gisteren hadden we een vergadering. (formeel)" }
      ] },
    { h: "Zijn in het verleden: 이었어요 en 였어요",
      p: "\"Ik was student\" maak je met 이다. Na een 받침 zeg je 이었어요, na een klinker 였어요. Gebruik hier geen 했어요. Bij bijvoeglijke werkwoorden zoals 좋다 vervoeg je het werkwoord zelf: 좋았어요.",
      ex: [
        { cn: "저는 작년에 학생이었어요.", py: "Jeoneun jangnyeone haksaengieosseoyo.", nl: "Vorig jaar was ik student." },
        { cn: "제 아버지는 의사였어요.", py: "Je abeojineun uisayeosseoyo.", nl: "Mijn vader was arts." }
      ] }
  ],
  mistakes: [
    { wrong: "어제 학교에 가요.", right: "어제 학교에 갔어요.", why: "Bij 어제 moet ook het werkwoord in de verleden tijd." },
    { wrong: "어제 밥을 먹았어요.", right: "어제 밥을 먹었어요.", why: "De klinker van 먹 is ㅓ. Dan komt 었어요, niet 았어요." },
    { wrong: "한국어를 공부하았어요.", right: "한국어를 공부했어요.", why: "하다 heeft een eigen vorm: 했어요." },
    { wrong: "저는 의사이었어요.", right: "저는 의사였어요.", why: "의사 eindigt op een klinker. Dan wordt het 였어요." }
  ],
  vocab: [
    ["-았/었어요", "-asseoyo/-eosseoyo", "(beleefde uitgang, verleden tijd)"], ["어제", "eoje", "gisteren"], ["지난주", "jinanju", "vorige week"],
    ["여행하다", "yeohaenghada", "reizen"], ["바다", "bada", "zee"], ["생선", "saengseon", "vis (als eten)"],
    ["사진", "sajin", "foto"], ["찍다", "jjikda", "(een foto) maken"], ["맛있다", "masitda", "lekker"], ["비", "bi", "regen"]
  ],
  dialogue: [
    ["A", "주말에 뭐 했어요?", "Jumare mwo haesseoyo?", "Wat heb je in het weekend gedaan?"],
    ["B", "부산에 갔어요.", "Busane gasseoyo.", "Ik ben naar Busan gegaan."],
    ["A", "부산에서 뭐 했어요?", "Busaneseo mwo haesseoyo?", "Wat heb je in Busan gedaan?"],
    ["B", "바다를 봤어요. 그리고 생선을 먹었어요.", "Badareul bwasseoyo. Geurigo saengseoneul meogeosseoyo.", "Ik heb de zee gezien. En ik heb vis gegeten."],
    ["A", "재미있었어요?", "Jaemiisseosseoyo?", "Was het leuk?"],
    ["B", "네, 정말 좋았어요.", "Ne, jeongmal joasseoyo.", "Ja, het was echt fijn."]
  ],
  reading: {
    title: "제주도 여행",
    lines: [
      { cn: "지난주에 제주도에 갔어요.", py: "Jinanjue Jejudoe gasseoyo.", nl: "Vorige week ben ik naar Jeju gegaan." },
      { cn: "친구하고 같이 여행했어요.", py: "Chinguhago gachi yeohaenghaesseoyo.", nl: "Ik reisde samen met een vriendin." },
      { cn: "첫날에는 바다를 봤어요.", py: "Cheonnareneun badareul bwasseoyo.", nl: "De eerste dag zagen we de zee." },
      { cn: "날씨가 아주 좋았어요.", py: "Nalssiga aju joasseoyo.", nl: "Het weer was heel mooi." },
      { cn: "우리는 사진을 많이 찍었어요.", py: "Urineun sajineul mani jjigeosseoyo.", nl: "We maakten veel foto's." },
      { cn: "저녁에는 생선을 먹었어요.", py: "Jeonyeogeneun saengseoneul meogeosseoyo.", nl: "'s Avonds aten we vis." },
      { cn: "생선이 정말 맛있었어요.", py: "Saengseoni jeongmal masisseosseoyo.", nl: "De vis was echt lekker." },
      { cn: "다음 날에는 비가 왔어요.", py: "Daeum nareneun biga wasseoyo.", nl: "De volgende dag regende het." },
      { cn: "그래서 호텔에서 쉬었어요.", py: "Geuraeseo hotereseo swieosseoyo.", nl: "Daarom rustten we in het hotel." }
    ],
    questions: [
      { type: "mc", q: "Wat deden ze op de eerste dag?",
        options: ["Ze zagen de zee en maakten veel foto's.", "Ze rustten in het hotel.", "Ze bleven binnen door de regen.", "Ze gingen terug naar huis."], answer: 0,
        why: ["Goed: 첫날에는 바다를 봤어요 ... 사진을 많이 찍었어요.", "In het hotel rustten ze de volgende dag.", "De regen kwam pas de volgende dag.", "Over teruggaan staat niets in de tekst."] },
      { type: "mc", q: "Waarom rustten ze in het hotel?",
        options: ["Omdat het regende.", "Omdat de vis niet lekker was.", "Omdat het weer te warm was.", "Omdat ze moe waren van het werk."], answer: 0,
        why: ["Goed: 비가 왔어요. 그래서 호텔에서 쉬었어요.", "De vis was juist lekker: 맛있었어요.", "Er staat niets over warmte. Het weer was eerst mooi.", "Over werk staat niets in de tekst."] },
      { type: "mc", q: "다음 날에는 비가 왔어요. Wat betekent 왔어요 hier?",
        options: ["Het is de verleden tijd van 오다: het regende.", "Het is tegenwoordige tijd: het regent nu.", "Het is een plan: het gaat regenen.", "Het komt van 와요 en betekent \"kom!\"."], answer: 0,
        why: ["Goed: 오 + 았어요 wordt 왔어요. 비가 오다 = regenen.", "Tegenwoordige tijd is 와요, zonder ㅆ.", "Voor een plan gebruik je geen -았어요.", "왔어요 heeft ㅆ: dat is verleden tijd, geen opdracht."] }
    ]
  },
  questions: [
    { type: "mc", q: "어제 학교에 ___. (Gisteren ging ik naar school.) (가다)",
      options: ["갔어요", "가었어요", "가요", "가았어요"], answer: 0,
      why: ["Goed: 가 + 았어요 smelt samen tot 갔어요.", "Na ㅏ komt 았, niet 었.", "가요 is tegenwoordige tijd. Bij 어제 hoort verleden tijd.", "Twee keer ㅏ smelt samen. Je zegt 갔어요."] },
    { type: "mc", q: "\"Ik heb gisteren een boek gelezen.\"",
      options: ["어제 책을 읽었어요.", "어제 책을 읽았어요.", "어제 책을 읽어요.", "어제 책을 읽했어요."], answer: 0,
      why: ["Goed: de klinker van 읽 is ㅣ, dus 었어요.", "았어요 komt alleen na ㅏ of ㅗ.", "읽어요 is tegenwoordige tijd.", "했어요 is alleen voor werkwoorden op 하다."] },
    { type: "mc", q: "\"Ik heb gisteren gewerkt.\" (일하다)",
      options: ["어제 일했어요.", "어제 일하었어요.", "어제 일하았어요.", "어제 일해요."], answer: 0,
      why: ["Goed: 하다 wordt 했어요.", "하다 heeft een eigen vorm: 했어요.", "하다 heeft een eigen vorm: 했어요.", "일해요 is tegenwoordige tijd."] },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn Koreaanse vriend heeft gebeld.\"",
      tokens: [["제", "je"], ["한국", "hanguk"], ["친구가", "chinguga"], ["전화했어요", "jeonhwahaesseoyo"]] },
    { type: "mc", q: "\"Vroeger was ik leraar.\" 저는 전에 ___.",
      options: ["선생님이었어요", "선생님였어요", "선생님이에요", "선생님했어요"], answer: 0,
      why: ["Goed: 선생님 eindigt op een 받침, dus 이었어요.", "였어요 komt alleen na een klinker.", "이에요 is tegenwoordige tijd.", "Bij een zelfstandig naamwoord gebruik je 이다, niet 하다."] },
    { type: "mc", q: "Je houdt een formele toespraak. Welke zin past het best? (\"Vorig jaar ben ik naar Korea gekomen.\")",
      options: ["작년에 한국에 왔습니다.", "작년에 한국에 왔어요.", "작년에 한국에 옵니다.", "작년에 한국에 오았습니다."], answer: 0,
      why: ["Goed: -았습니다 is de formele verleden tijd.", "Dit is beleefd, maar minder formeel dan -습니다.", "옵니다 is formeel, maar tegenwoordige tijd.", "오 + 았 smelt samen tot 왔."] },
    { type: "mc", q: "Welke vorm is FOUT?",
      options: ["보었어요", "봤어요", "먹었어요", "했어요"], answer: 0,
      why: ["Goed: deze is fout. Na ㅗ komt 았: 보다 → 봤어요.", "Deze klopt: 보 + 았어요 = 봤어요.", "Deze klopt: 먹 heeft ㅓ, dus 었어요.", "Deze klopt: 하다 → 했어요."] },
    { type: "fill", q: "지난주에 친구를 ___. (Vorige week heb ik een vriend gezien.) (만나다)", answers: ["만났어요"],
      hint: "만나 eindigt op ㅏ. Wat gebeurt er met 았?", why: "만나 + 았어요 smelt samen tot 만났어요." },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn moeder heeft vis gekocht.\"",
      tokens: [["제", "je"], ["어머니가", "eomeoniga"], ["생선을", "saengseoneul"], ["샀어요", "sasseoyo"]] },
    { type: "open", q: "Vertaal: \"Ik heb gisteren koffie gedronken.\" (마시다)", model: ["어제 커피를 마셨어요.", "저는 어제 커피를 마셨어요."],
      tip: "Check: 마시 + 었어요 smelt samen tot 마셨어요." },
    { type: "open", q: "Vertaal: \"Wat heb je gisteren gedaan?\"", model: ["어제 뭐 했어요?", "어제 무엇을 했어요?"],
      tip: "Check: 하다 → 했어요, en 어제 staat vooraan. De vraag heeft dezelfde vorm als een mededeling." }
  ],
  review: [
    { type: "mc", q: "\"Het eten was lekker.\" (맛있다)",
      options: ["음식이 맛있었어요.", "음식이 맛있았어요.", "음식이 맛있어요.", "음식을 맛있었어요."], answer: 0,
      why: ["Goed: de klinker van 있 is ㅣ, dus 었어요.", "았어요 komt alleen na ㅏ of ㅗ.", "맛있어요 is tegenwoordige tijd: \"het is lekker\".", "Het eten is lekker; het is geen lijdend voorwerp. Dus 이."] },
    { type: "mc", q: "\"Mijn moeder kwam.\" (오다)",
      options: ["엄마가 왔어요.", "엄마가 오었어요.", "엄마가 와요.", "엄마가 오았어요."], answer: 0,
      why: ["Goed: 오 + 았어요 smelt samen tot 왔어요.", "Na ㅗ komt 았, niet 었.", "와요 is tegenwoordige tijd.", "ㅗ + 았 smelt samen. Je zegt 왔어요."] },
    { type: "mc", q: "\"Gisteren heb ik tv gekeken.\" (보다)",
      options: ["어제 텔레비전을 봤어요.", "어제 텔레비전을 보었어요.", "어제 텔레비전을 봐요.", "어제 텔레비전을 봤해요."], answer: 0,
      why: ["Goed: 보 + 았어요 smelt samen tot 봤어요.", "Na ㅗ komt 았, niet 었.", "봐요 is tegenwoordige tijd. Bij 어제 hoort verleden tijd.", "해요 hoort alleen bij werkwoorden op 하다."] }
  ]
})
