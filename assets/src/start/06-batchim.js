({
  id: "06", slug: "batchim", title: "받침: de slotmedeklinker", sub: "Een medeklinker onderaan de lettergreep",
  canDo: "Je kunt nu een lettergreep met een 받침 lezen en weet welke van de zeven eindklanken je hoort.",
  guess: {
    q: "Je ziet het woord 밥 (rijst). Onderaan staat een tweede ㅂ. Wat doet die, denk je?",
    options: ["Je zegt hem kort aan het eind: bap.", "Hij is stil: je zegt ba.", "Je zegt hem met een extra klinker: ba-beu.", "Hij hoort bij het volgende woord."], answer: 0,
    why: ["Goed: de ㅂ onderaan sluit de lettergreep af met een korte p.", "Een medeklinker onderaan is niet stil. Je hoort hem kort.", "Er komt geen extra klinker achter. De klank stopt meteen.", "De letter hoort bij dit blok. Alleen een klinker erna kan hem laten doorschuiven (les 07)."]
  },
  problem: "Een Koreaanse lettergreep kan eindigen op een medeklinker. Die staat onderaan het blok en heet 받침 (batchim): slotmedeklinker. Veel letters kunnen op die plek staan. Toch hoor je aan het eind maar zeven klanken. 옷 schrijf je met ㅅ, maar je zegt ot.",
  pattern: [
    { l: "lettergreep", v: "바", c: 1 }, { l: "slot", v: "ㅂ", c: 3, key: true }, { l: "samen", v: "밥", c: 2 }
  ],
  patternCap: "Beginklank + klinker + 받침 onderaan · zeven eindklanken: k, n, t, l, m, p, ng",
  rules: [
    "De 받침 staat onderaan het blok: 바 + ㅂ = 밥 (bap), 오 + ㅅ = 옷 (ot).",
    "ㄱ, ㅋ en ㄲ klinken onderaan als k: 책 (chaek), 부엌 (bueok), 밖 (bak).",
    "ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ en ㅎ klinken onderaan als t: 옷 (ot), 낮 (nat), 꽃 (kkot).",
    "ㅂ en ㅍ klinken als p: 밥 (bap), 앞 (ap). ㄴ, ㄹ, ㅁ en ㅇ blijven n, l, m en ng: 산 (san), 물 (mul), 밤 (bam), 방 (bang).",
    "Twee verschillende letters onderaan (dubbele 받침)? Dan zeg je er maar één: 값 (gap), 닭 (dak)."
  ],
  pitfall: "Zeg geen extra klinker achter de 받침. 부엌 is bueok, niet bueokeu. Je mond sluit en de klank stopt.",
  examples: [
    { cn: "밥", py: "bap", nl: "rijst, maaltijd. ㅂ onderaan klinkt als een korte p." },
    { cn: "옷", py: "ot", nl: "kleren. ㅅ onderaan klinkt als t." },
    { cn: "부엌", py: "bueok", nl: "keuken. ㅋ onderaan klinkt als k." },
    { cn: "방", py: "bang", nl: "kamer. ㅇ onderaan klinkt als ng, zoals in \"bang\"." }
  ],
  nuance: [
    { h: "Waarom maar zeven klanken?",
      p: "Aan het eind van een lettergreep laat je geen lucht ontsnappen. Je tong of lippen gaan naar de plek van de medeklinker en stoppen daar. Daardoor klinken ㅅ, ㅈ, ㅊ en ㅌ allemaal als een korte t. Het Nederlands doet iets vergelijkbaars: \"hond\" klinkt als \"hont\".",
      ex: [
        { cn: "옷", py: "ot", nl: "kleren" },
        { cn: "낮", py: "nat", nl: "overdag" },
        { cn: "꽃", py: "kkot", nl: "bloem" },
        { cn: "밭", py: "bat", nl: "akker" }
      ] },
    { h: "ㅇ bovenaan of onderaan: stil of ng",
      p: "Bovenaan is ㅇ stil. Hij vult alleen de lege plek voor een klinker: 아 is a. Onderaan is ㅇ een echte klank: ng, zoals in \"bang\". In 강 (rivier) hoor je dus g, a en ng.",
      ex: [
        { cn: "아", py: "a", nl: "(alleen de klinker a)" },
        { cn: "강", py: "gang", nl: "rivier" },
        { cn: "공", py: "gong", nl: "bal" }
      ] },
    { h: "Dubbele 받침: kort en simpel",
      p: "Soms staan er twee verschillende medeklinkers onderaan. Dat heet 겹받침 (gyeopbatchim): dubbele slotmedeklinker. Aan het eind zeg je er maar één. Welke, dat verschilt per combinatie. Leer eerst deze drie woorden. In les 07 zie je dat de tweede letter terugkomt als er een klinker volgt.",
      ex: [
        { cn: "값", py: "gap", nl: "prijs (ㅄ: je zegt de ㅂ)" },
        { cn: "닭", py: "dak", nl: "kip (ㄺ: je zegt de ㄱ)" },
        { cn: "여덟", py: "yeodeol", nl: "acht (ㄼ: je zegt de ㄹ)" }
      ] },
    { h: "Volgt er een klinker? Dan verandert het",
      p: "De zeven eindklanken gelden aan het eind van een woord en voor een medeklinker. Begint de volgende lettergreep met een stille ㅇ? Dan schuift de 받침 door en krijgt hij zijn eigen klank terug. 옷 is ot, maar 옷이 is osi. Dat leer je in les 07.",
      ex: [
        { cn: "옷이", py: "osi", nl: "kleren (+ partikel 이)" }
      ] }
  ],
  mistakes: [
    { wrong: "옷 = os", right: "옷 = ot", why: "ㅅ onderaan klinkt als t, niet als s." },
    { wrong: "부엌 = bueokeu", right: "부엌 = bueok", why: "Zeg geen extra klinker achter de 받침. De klank stopt kort." },
    { wrong: "강 = ga", right: "강 = gang", why: "ㅇ is alleen bovenaan stil. Onderaan klinkt hij als ng." },
    { wrong: "값 = gaps", right: "값 = gap", why: "Bij een dubbele 받침 zeg je aan het eind maar één medeklinker." }
  ],
  vocab: [
    ["받침", "batchim", "slotmedeklinker (onderaan de lettergreep)"], ["밥", "bap", "rijst, maaltijd"], ["물", "mul", "water"],
    ["방", "bang", "kamer"], ["옷", "ot", "kleren"], ["부엌", "bueok", "keuken"],
    ["꽃", "kkot", "bloem"], ["앞", "ap", "voorkant, voor"], ["책", "chaek", "boek"], ["집", "jip", "huis"]
  ],
  dialogue: [
    ["A", "밥 있어요?", "Bap isseoyo?", "Is er rijst?"],
    ["B", "네, 밥 있어요.", "Ne, bap isseoyo.", "Ja, er is rijst."],
    ["A", "물도 있어요?", "Muldo isseoyo?", "Is er ook water?"],
    ["B", "네, 부엌에 있어요.", "Ne, bueoke isseoyo.", "Ja, in de keuken."],
    ["A", "감사합니다.", "Gamsahamnida.", "Dank u wel."]
  ],
  reading: {
    title: "우리 집 (uri jip)",
    lines: [
      { cn: "여기는 우리 집이에요.", py: "Yeogineun uri jibieyo.", nl: "Dit is ons huis." },
      { cn: "집에 방이 두 개 있어요.", py: "Jibe bangi du gae isseoyo.", nl: "Het huis heeft twee kamers." },
      { cn: "부엌도 있어요.", py: "Bueokdo isseoyo.", nl: "Er is ook een keuken." },
      { cn: "부엌에 밥이 있어요.", py: "Bueoke babi isseoyo.", nl: "In de keuken staat rijst." },
      { cn: "방에 책이 많아요.", py: "Bange chaegi manayo.", nl: "In de kamer liggen veel boeken." },
      { cn: "창문 앞에 꽃이 있어요.", py: "Changmun ape kkochi isseoyo.", nl: "Voor het raam staan bloemen." },
      { cn: "밤에 우리 집은 조용해요.", py: "Bame uri jibeun joyonghaeyo.", nl: "'s Nachts is ons huis stil." },
      { cn: "저는 우리 집이 좋아요.", py: "Jeoneun uri jibi joayo.", nl: "Ik vind ons huis fijn." }
    ],
    questions: [
      { type: "mc", q: "Wat staat er in de keuken?",
        options: ["Rijst.", "Boeken.", "Bloemen.", "Kleren."], answer: 0,
        why: ["Goed: 부엌에 밥이 있어요.", "De boeken liggen in de kamer: 방에 책이 많아요.", "De bloemen staan voor het raam: 창문 앞에.", "Kleren (옷) staan niet in de tekst."] },
      { type: "mc", q: "Waar staan de bloemen?",
        options: ["Voor het raam.", "In de keuken.", "Op het bed.", "Voor het huis."], answer: 0,
        why: ["Goed: 창문 앞에 꽃이 있어요.", "In de keuken staat rijst.", "Een bed staat niet in de tekst.", "Er staat 창문 앞에: voor het raam, niet voor het huis."] },
      { type: "mc", q: "In de tekst staat 꽃이 (kkochi). Hoe zeg je 꽃 los, zonder 이?",
        options: ["kkot", "kkoch", "kko", "kkos"], answer: 0,
        why: ["Goed: ㅊ onderaan klinkt als t.", "Aan het eind hoor je geen ch. ㅊ wordt t.", "De 받침 is niet stil. Je hoort een korte t.", "ㅊ onderaan klinkt als t, niet als s."] }
    ]
  },
  questions: [
    { type: "mc", q: "Hoe spreek je 옷 (kleren) uit?",
      options: ["ot", "os", "o-seu", "ol"], answer: 0,
      why: ["Goed: ㅅ onderaan klinkt als t.", "ㅅ is bovenaan een s, maar onderaan een t.", "Je zegt geen extra klinker achter de 받침.", "Een l hoor je alleen bij ㄹ."] },
    { type: "mc", q: "Welke romanisatie past bij de uitspraak van 부엌 (keuken)?",
      options: ["bueok", "bueokeu", "bueokh", "bueot"], answer: 0,
      why: ["Goed: ㅋ onderaan klinkt als k.", "Na de 받침 komt geen klinker eu.", "De ㅋ verliest onderaan zijn luchtstoot. Je schrijft gewoon k.", "ㅋ hoort bij de k-groep, niet bij de t-groep."] },
    { type: "mc", q: "Welke 받침 klinkt NIET als t?",
      options: ["ㅁ", "ㅅ", "ㅈ", "ㅊ"], answer: 0,
      why: ["Goed: ㅁ blijft onderaan m, zoals in 밤 (bam).", "ㅅ onderaan klinkt als t: 옷 (ot).", "ㅈ onderaan klinkt als t: 낮 (nat).", "ㅊ onderaan klinkt als t: 꽃 (kkot)."] },
    { type: "mc", q: "Hoe klinkt 강 (rivier)?",
      options: ["gang", "ga", "gak", "gan"], answer: 0,
      why: ["Goed: ㅇ onderaan klinkt als ng.", "ㅇ is alleen bovenaan stil.", "ㅇ is geen k. Een k hoor je bij ㄱ.", "n is ㄴ. ㅇ onderaan is ng."] },
    { type: "mc", q: "Hoe spreek je 앞 (voorkant) uit?",
      options: ["ap", "apeu", "aph", "a"], answer: 0,
      why: ["Goed: ㅍ onderaan klinkt als een korte p.", "Na de 받침 komt geen klinker eu.", "De luchtstoot van ㅍ verdwijnt onderaan. Je schrijft p.", "De 받침 is niet stil."] },
    { type: "mc", q: "Hoe spreek je 값 (prijs) uit?",
      options: ["gap", "gaps", "gapseu", "gas"], answer: 0,
      why: ["Goed: bij ㅄ zeg je aan het eind alleen de ㅂ.", "Bij een dubbele 받침 zeg je maar één medeklinker.", "Er komt geen extra klinker achter.", "Je zegt de ㅂ, niet de ㅅ. En ㅅ zou onderaan bovendien t zijn."] },
    { type: "order", q: "Schrijf 책상 (chaeksang, bureau) letter voor letter: zet de letters in schrijfvolgorde.",
      tokens: [["ㅊ", "ch"], ["ㅐ", "ae"], ["ㄱ", "k"], ["ㅅ", "s"], ["ㅏ", "a"], ["ㅇ", "ng"]] },
    { type: "order", q: "Bouw 대한민국 (Daehanminguk, de officiële naam van Zuid-Korea) uit lettergrepen.",
      tokens: [["대", "dae"], ["한", "han"], ["민", "min"], ["국", "guk"]] },
    { type: "fill", q: "옷 (kleren) spreek je uit als ___. (Typ de romanisatie.)", answers: ["ot"],
      hint: "ㅅ onderaan hoort bij de t-groep.", why: "ㅅ onderaan klinkt als t: ot." },
    { type: "fill", q: "밖 (buiten): de klank aan het eind is een ___. (Typ één letter in romanisatie.)", answers: ["k", "ㄱ"],
      hint: "ㄲ hoort bij dezelfde groep als ㄱ en ㅋ.", why: "ㄱ, ㅋ en ㄲ klinken onderaan allemaal als k: 밖 = bak." },
    { type: "open", q: "Lees hardop en schrijf de romanisatie: 꽃, 낮, 밭.", model: ["꽃 = kkot, 낮 = nat, 밭 = bat"],
      tip: "Check: ㅊ, ㅈ en ㅌ onderaan klinken alle drie als t. Zeg geen klinker achter de t." },
    { type: "open", q: "Schrijf drie woorden uit deze les met een 받침, in Hangul en romanisatie. Zeg ze hardop.", model: ["밥 (bap), 물 (mul), 방 (bang)", "옷 (ot), 꽃 (kkot), 책 (chaek)", "부엌 (bueok), 앞 (ap), 집 (jip)"],
      tip: "Check: hoort de eindklank bij een van de zeven (k, n, t, l, m, p, ng)? En zeg je geen extra klinker erachter?" }
  ],
  review: [
    { type: "mc", q: "Hoe spreek je 낮 (overdag) uit?",
      options: ["nat", "naj", "nach", "na"], answer: 0,
      why: ["Goed: ㅈ onderaan klinkt als t.", "ㅈ is bovenaan een j, maar onderaan een t.", "Aan het eind hoor je geen ch.", "De 받침 is niet stil."] },
    { type: "mc", q: "Hoe spreek je 숲 (bos) uit?",
      options: ["sup", "suph", "supeu", "su"], answer: 0,
      why: ["Goed: ㅍ onderaan klinkt als een korte p.", "De luchtstoot van ㅍ verdwijnt onderaan.", "Na de 받침 komt geen klinker eu.", "De 받침 is niet stil."] },
    { type: "mc", q: "공 (bal): welke klank hoor je aan het eind?",
      options: ["ng", "n", "geen klank", "geu"], answer: 0,
      why: ["Goed: ㅇ onderaan klinkt als ng: gong.", "n hoort bij ㄴ. ㅇ onderaan is ng.", "ㅇ is alleen bovenaan stil.", "Er komt geen klinker achter de 받침."] }
  ]
})
