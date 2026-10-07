({
  id: "02", slug: "medeklinkers", title: "De tien basismedeklinkers", sub: "ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅎ en hun vorm",
  canDo: "Je kunt nu tien basismedeklinkers herkennen, uitspreken en met een klinker lezen, zoals 나비 en 모자.",
  guess: {
    q: "De letter ㅁ is getekend als een gesloten mond, van voren gezien. Welke klank hoort erbij, denk je?",
    options: ["m", "k", "s", "h"], answer: 0,
    why: ["Goed: voor een m sluit je je lippen. ㅁ tekent die gesloten mond.", "Voor een k sluit je je lippen niet. De k-klank is ㄱ: de tong achter in de mond.", "Voor een s zijn je lippen open. De s-klank is ㅅ: een tand.", "Voor een h zijn je lippen open. De h-klank is ㅎ."]
  },
  problem: "Een medeklinker is een klank waarbij je lippen, tong of keel de lucht even tegenhouden, zoals m, n of s. Hangul heeft een slimme logica: de vorm van een medeklinker tekent je mond of tong bij die klank. ㄴ tekent de tong tegen het tandvlees, ㅁ tekent de gesloten mond. Zo onthoud je ze snel.",
  pattern: [
    { l: "medeklinker (n)", v: "ㄴ", c: 1, key: true }, { l: "klinker (a)", v: "ㅏ", c: 4 }, { l: "lettergreep: na", v: "나", c: 2 }
  ],
  patternCap: "Medeklinker + klinker = lettergreep: 가 ga, 나 na, 다 da, 라 ra, 마 ma, 바 ba, 사 sa, 아 a, 자 ja, 하 ha",
  rules: [
    "ㄱ (g/k): de achterkant van je tong tegen je gehemelte, van opzij gezien. ㄴ (n): de tongpunt tegen het tandvlees.",
    "ㅁ (m): de gesloten mond. ㅅ (s): een tand. ㅇ: de keel, een open rondje.",
    "Een extra streep maakt de klank sterker: ㄴ wordt ㄷ (d), ㅁ wordt ㅂ (b), ㅅ wordt ㅈ (j), ㅇ wordt ㅎ (h).",
    "ㄹ klinkt tussen twee klinkers als een snelle tik met de tong: een r zoals in het Spaanse 'pero'. Aan het eind van een woord klinkt hij als l.",
    "ㄱ, ㄷ, ㅂ en ㅈ zijn half stemhebbend. Aan het begin van een woord klinken ze bijna als k, t, p en tsj. Tussen twee klinkers klinken ze als g, d, b en dzj."
  ],
  pitfall: "De romanisatie 'j' (ㅈ) is de Engelse j, zoals in 'jeans'. Zeg dus 'dzj', niet de Nederlandse j van 'ja'. 지도 klinkt als 'dzjiedo'.",
  examples: [
    { cn: "나비", py: "nabi", nl: "vlinder" },
    { cn: "모자", py: "moja", nl: "pet, hoed" },
    { cn: "고기", py: "gogi", nl: "vlees" },
    { cn: "하마", py: "hama", nl: "nijlpaard" }
  ],
  nuance: [
    { h: "ㄱ ㄷ ㅂ ㅈ: aan het begin anders dan in het midden",
      p: "Het Koreaans maakt geen verschil tussen g en k zoals het Nederlands. ㄱ aan het begin van een woord klinkt zacht, tussen g en k in. Tussen twee klinkers wordt hij een duidelijke g. Hetzelfde geldt voor ㄷ (t/d), ㅂ (p/b) en ㅈ (tsj/dzj). In 고기 hoor je dat goed: de eerste ㄱ is zachter dan de tweede.",
      ex: [
        { cn: "고기", py: "gogi", nl: "vlees (eerste ㄱ bijna k, tweede ㄱ een g)" },
        { cn: "두부", py: "dubu", nl: "tofu (eerste ㄷ bijna t, ㅂ in het midden een b)" }
      ] },
    { h: "ㄹ: r of l?",
      p: "ㄹ is één letter met twee klanken. Tussen twee klinkers tik je de tongpunt één keer kort tegen het tandvlees. Dat klinkt als een zachte r. Aan het eind van een lettergreep houd je de tong daar, en dan klinkt het als l. Een rollende of keel-r gebruik je nooit.",
      ex: [
        { cn: "오리", py: "ori", nl: "eend (ㄹ als zachte tik-r)" },
        { cn: "라디오", py: "radio", nl: "radio" }
      ] },
    { h: "ㅅ voor ㅣ klinkt als 'sj'",
      p: "ㅅ is gewoon een s. Maar vóór de klinker ㅣ (i) klinkt hij als 'sj', zoals in 'sjaal'. De romanisatie schrijft toch 'si'. Ook dit laat zien: romanisatie is een hulpmiddel, geen exacte uitspraak.",
      ex: [
        { cn: "사자", py: "saja", nl: "leeuw (gewone s)" },
        { cn: "시", py: "si", nl: "uur; gedicht (klinkt als 'sjie')" }
      ] }
  ],
  mistakes: [
    { wrong: "ㄹ uitspreken als een harde, rollende r", right: "ㄹ als een korte tik met de tongpunt", why: "Het Koreaans heeft geen rollende r en geen keel-r. Eén lichte tik is genoeg, zoals de d in het Engelse 'ladder'." },
    { wrong: "지도 lezen als 'jiedo' (met Nederlandse j)", right: "지도 = 'dzjiedo'", why: "De romanisatie 'j' staat voor de Engelse j. De Nederlandse j-klank komt in les 4: die schrijf je als 'y'." },
    { wrong: "ㄱ en ㄴ verwisselen", right: "ㄱ = g/k (haak rechtsboven), ㄴ = n (haak linksonder)", why: "ㄱ tekent de tong die achterin omhoog gaat. ㄴ tekent de tongpunt tegen het tandvlees. Ze zijn elkaars spiegelbeeld." },
    { wrong: "ㅇ aan het begin uitspreken als 'ng'", right: "오리 = ori", why: "Aan het begin is ㅇ stil. Alleen aan het eind van een lettergreep klinkt hij als 'ng'." }
  ],
  vocab: [
    ["ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅎ", "g n d r/l m b s (stil)/ng j h", "de tien basismedeklinkers"], ["나비", "nabi", "vlinder"], ["모자", "moja", "pet, hoed"],
    ["고기", "gogi", "vlees"], ["두부", "dubu", "tofu"], ["하마", "hama", "nijlpaard"],
    ["사자", "saja", "leeuw"], ["지도", "jido", "landkaart"], ["오리", "ori", "eend"], ["머리", "meori", "hoofd; haar"]
  ],
  dialogue: [
    ["A", "안녕하세요.", "Annyeonghaseyo.", "Hallo."],
    ["B", "안녕하세요.", "Annyeonghaseyo.", "Hallo."],
    ["A", "이거 나비예요?", "Igeo nabiyeyo?", "Is dit een vlinder?"],
    ["B", "네, 나비예요.", "Ne, nabiyeyo.", "Ja, het is een vlinder."],
    ["A", "이거 오리예요?", "Igeo oriyeyo?", "Is dit een eend?"],
    ["B", "아니요, 하마예요.", "Aniyo, hamayeyo.", "Nee, het is een nijlpaard."]
  ],
  reading: {
    title: "나비, 오리, 하마 (nabi, ori, hama)",
    lines: [
      { cn: "나비", py: "nabi", nl: "vlinder" },
      { cn: "오리", py: "ori", nl: "eend" },
      { cn: "하마", py: "hama", nl: "nijlpaard" },
      { cn: "사자", py: "saja", nl: "leeuw" },
      { cn: "사자 머리", py: "saja meori", nl: "de kop van de leeuw" },
      { cn: "모자", py: "moja", nl: "pet, hoed" },
      { cn: "지도", py: "jido", nl: "landkaart" },
      { cn: "고기", py: "gogi", nl: "vlees" },
      { cn: "두부", py: "dubu", nl: "tofu" }
    ],
    questions: [
      { type: "mc", q: "Welk dier is 사자?",
        options: ["leeuw", "eend", "nijlpaard", "vlinder"], answer: 0,
        why: ["Goed: 사자 (saja) is leeuw.", "Eend is 오리 (ori).", "Nijlpaard is 하마 (hama).", "Vlinder is 나비 (nabi)."] },
      { type: "mc", q: "Welk woord in de rij is GEEN dier?",
        options: ["지도", "오리", "하마", "나비"], answer: 0,
        why: ["Goed: 지도 (jido) is een landkaart.", "오리 (ori) is een eend, een dier.", "하마 (hama) is een nijlpaard, een dier.", "나비 (nabi) is een vlinder, een dier."] },
      { type: "mc", q: "Hoe klinkt de ㄹ in 머리?",
        options: ["als een korte tik-r", "als een rollende r", "als een harde l", "niet: hij is stil"], answer: 0,
        why: ["Goed: tussen twee klinkers is ㄹ een korte tik met de tongpunt.", "Een rollende r bestaat in het Koreaans niet.", "Als l klinkt ㄹ aan het eind van een lettergreep. Hier staat hij tussen klinkers.", "Stil is alleen ㅇ aan het begin."] }
    ]
  },
  questions: [
    { type: "mc", q: "Welke letter is de klank 'm'?",
      options: ["ㅁ", "ㅂ", "ㄴ", "ㅇ"], answer: 0,
      why: ["Goed: ㅁ tekent de gesloten mond.", "ㅂ is ㅁ met extra strepen: dat is b/p.", "ㄴ is n: de tongpunt tegen het tandvlees.", "ㅇ is stil aan het begin, of 'ng' aan het eind."] },
    { type: "mc", q: "Welke romanisatie hoort bij 나비?",
      options: ["nabi", "nami", "dabi", "nagi"], answer: 0,
      why: ["Goed: ㄴ = n, ㅏ = a, ㅂ = b, ㅣ = i.", "m is ㅁ. In 비 staat ㅂ: de ㅁ met twee extra strepen.", "d is ㄷ. In 나 staat ㄴ, zonder streep erboven.", "g is ㄱ. In 비 staat ㅂ."] },
    { type: "mc", q: "Welk woord betekent 'pet, hoed'?",
      options: ["모자", "사자", "머리", "지도"], answer: 0,
      why: ["Goed: 모자 (moja) is pet of hoed.", "사자 (saja) is leeuw: het begint met ㅅ, niet met ㅁ.", "머리 (meori) is hoofd.", "지도 (jido) is landkaart."] },
    { type: "mc", q: "Welke letter is ㄴ met één extra streep, en welke klank heeft die?",
      options: ["ㄷ, d/t", "ㄹ, r/l", "ㅁ, m", "ㄱ, g/k"], answer: 0,
      why: ["Goed: ㄴ + streep = ㄷ. De tong zit op dezelfde plek, de klank wordt d/t.", "ㄹ heeft meer strepen en een andere klank: r/l.", "ㅁ is een vierkant, de gesloten mond.", "ㄱ is het spiegelbeeld van ㄴ, zonder extra streep."] },
    { type: "mc", q: "Hoe klinkt de tweede ㄱ in 고기?",
      options: ["als een duidelijke g", "als een harde k met een pufje lucht", "als 'ng'", "als een h"], answer: 0,
      why: ["Goed: tussen twee klinkers wordt ㄱ een g.", "Een k met een pufje lucht is een andere letter: ㅋ (les 5).", "'ng' is ㅇ aan het eind van een lettergreep.", "De h-klank is ㅎ."] },
    { type: "mc", q: "Hoe spreek je 지 uit?",
      options: ["dzjie", "jie (zoals in 'jij')", "zie", "sjie"], answer: 0,
      why: ["Goed: ㅈ is de Engelse j, dus 'dzj'.", "De Nederlandse j-klank is geen ㅈ. Die komt in les 4.", "Een z-klank heeft het Koreaans niet.", "'sjie' is 시: met ㅅ, niet ㅈ."] },
    { type: "order", q: "Bouw het woord 'nabi' (vlinder): zet de letters in leesvolgorde.",
      tokens: [["ㄴ", "n"], ["ㅏ", "a"], ["ㅂ", "b"], ["ㅣ", "i"]] },
    { type: "order", q: "Bouw het woord 'jido' (landkaart): zet de letters in leesvolgorde.",
      tokens: [["ㅈ", "j"], ["ㅣ", "i"], ["ㄷ", "d"], ["ㅗ", "o"]] },
    { type: "fill", q: "Typ de romanisatie: 하마 = ___ (nijlpaard)", answers: ["hama"],
      hint: "ㅎ = h, ㅁ = m.", why: "하 = ha en 마 = ma, dus 하마 = hama." },
    { type: "open", q: "Schrijf deze lettergrepen in Hangul: ga, na, da, ma, ba, sa, ja, ha.", model: ["가 나 다 마 바 사 자 하"],
      tip: "Check: elke klinker is ㅏ (verticaal), dus de medeklinker staat telkens links ervan." },
    { type: "open", q: "Schrijf 'moja' (pet) en 'saja' (leeuw) in Hangul.", model: ["모자, 사자"],
      tip: "Check: bij 모 staat ㅁ boven ㅗ. Bij 자 en 사 staat de medeklinker links van ㅏ." }
  ],
  review: [
    { type: "mc", q: "Welke letter tekent een tand en klinkt als s?",
      options: ["ㅅ", "ㅈ", "ㅎ", "ㄹ"], answer: 0,
      why: ["Goed: ㅅ = s.", "ㅈ is ㅅ met een extra streep: dzj.", "ㅎ is h.", "ㄹ is r/l."] },
    { type: "mc", q: "Lees: 머리. Welke romanisatie klopt?",
      options: ["meori", "mori", "meoli", "beori"], answer: 0,
      why: ["Goed: ㅓ = eo, en ㄹ tussen klinkers wordt r.", "'o' is ㅗ. Hier staat ㅓ, een verticale klinker.", "Tussen twee klinkers schrijf je ㄹ als r.", "b is ㅂ. Hier staat ㅁ, het vierkant zonder strepen."] },
    { type: "mc", q: "Lees: 두부. Wat is het?",
      options: ["tofu", "vlees", "eend", "landkaart"], answer: 0,
      why: ["Goed: 두부 (dubu) is tofu.", "Vlees is 고기 (gogi).", "Eend is 오리 (ori).", "Landkaart is 지도 (jido)."] }
  ]
})
