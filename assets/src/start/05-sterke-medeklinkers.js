({
  id: "05", slug: "sterke-medeklinkers", title: "Aangeblazen en gespannen medeklinkers", sub: "ㅋ ㅌ ㅍ ㅊ en ㄲ ㄸ ㅃ ㅆ ㅉ",
  canDo: "Je kunt nu gewone, aangeblazen en gespannen medeklinkers uit elkaar houden, zoals in 달, 탈 en 딸.",
  guess: {
    q: "ㄱ is een zachte g/k. ㅋ is dezelfde vorm met een extra streepje. Hoe klinkt ㅋ, denk je?",
    options: ["als een k met een pufje lucht", "als ng", "als een zachte g", "als een h"], answer: 0,
    why: ["Goed: het extra streepje staat voor extra lucht. ㅋ is een k met een duidelijke luchtstoot.", "'ng' is ㅇ aan het eind van een lettergreep.", "Een zachte g is juist de gewone ㄱ.", "De h-klank is ㅎ."]
  },
  problem: "Het Nederlands heeft p en b, t en d. Het Koreaans maakt een ander verschil: hoeveel lucht en spanning je gebruikt. Er zijn drie reeksen. Gewoon: ㄱ ㄷ ㅂ ㅈ (licht). Aangeblazen: ㅋ ㅌ ㅍ ㅊ (met een pufje lucht). Gespannen: ㄲ ㄸ ㅃ ㅉ en ㅆ (zonder lucht, met een strakke keel). Eén verschil in lucht geeft een ander woord.",
  pattern: [
    { l: "gewoon: ga", v: "가", c: 1 }, { l: "aangeblazen: ka", v: "카", c: 4, key: true }, { l: "gespannen: kka", v: "까", c: 3, key: true }
  ],
  patternCap: "Gewoon ㄱ ㄷ ㅂ ㅈ ㅅ · aangeblazen (+ streepje) ㅋ ㅌ ㅍ ㅊ · gespannen (dubbel) ㄲ ㄸ ㅃ ㅉ ㅆ",
  rules: [
    "Aangeblazen = de gewone letter met een extra streepje: ㄱ wordt ㅋ (k), ㄷ wordt ㅌ (t), ㅈ wordt ㅊ (ch). ㅍ (p) heeft een eigen vorm.",
    "Aangeblazen klanken hebben een sterke luchtstoot, zoals de Engelse k in 'key'. Houd een papiertje voor je mond: het beweegt.",
    "Gespannen = de gewone letter dubbel: ㄲ (kk), ㄸ (tt), ㅃ (pp), ㅆ (ss), ㅉ (jj). Je maakt je keel strak en laat geen lucht ontsnappen.",
    "De Nederlandse k, t en p in 'kat', 'tak' en 'pak' hebben weinig lucht. Ze komen dicht bij ㄲ, ㄸ en ㅃ.",
    "Na een aangeblazen of gespannen medeklinker begint de klinker hoger. Na een gewone medeklinker begint hij lager."
  ],
  pitfall: "Een dubbele letter is geen lange klank. ㄸ in 딸 is niet 'tt' zoals in 'lotto', maar één korte, strakke t zonder lucht.",
  examples: [
    { cn: "달", py: "dal", nl: "maan" },
    { cn: "탈", py: "tal", nl: "masker" },
    { cn: "딸", py: "ttal", nl: "dochter" },
    { cn: "커피", py: "keopi", nl: "koffie" }
  ],
  nuance: [
    { h: "Minimale paren: één klank, een ander woord",
      p: "Een minimaal paar is een paar woorden dat maar in één klank verschilt. 불, 풀 en 뿔 verschillen alleen in de eerste medeklinker. De ㄹ onderaan is een 받침 (slotmedeklinker) en klinkt als l. Oefen deze rijtjes hardop met een papiertje voor je mond.",
      ex: [
        { cn: "불", py: "bul", nl: "vuur (gewoon: licht)" },
        { cn: "풀", py: "pul", nl: "gras (aangeblazen: veel lucht)" },
        { cn: "뿔", py: "ppul", nl: "hoorn van een dier (gespannen: geen lucht)" }
      ] },
    { h: "ㅅ en ㅆ: zachte en scherpe s",
      p: "ㅅ is een zachte s met wat lucht. ㅆ is gespannen: een scherpe, strakke s. ㅅ heeft geen aangeblazen vorm. Het verschil is belangrijk, want 사다 en 싸다 betekenen iets anders.",
      ex: [
        { cn: "사요", py: "sayo", nl: "ik koop" },
        { cn: "싸요", py: "ssayo", nl: "het is goedkoop" }
      ] },
    { h: "ㅈ, ㅊ en ㅉ: drie soorten 'tsj'",
      p: "ㅈ (j) is een lichte 'dzj' of 'tsj'. ㅊ (ch) is 'tsj' met een flinke luchtstoot. ㅉ (jj) is een strakke 'tsj' zonder lucht. Let op: 'ch' in de romanisatie is nooit de g-klank van het Nederlandse 'acht'.",
      ex: [
        { cn: "자요", py: "jayo", nl: "ik slaap" },
        { cn: "차요", py: "chayo", nl: "het is koud (om aan te raken)" },
        { cn: "짜요", py: "jjayo", nl: "het is zout" }
      ] }
  ],
  mistakes: [
    { wrong: "딸 uitspreken met een lange 'tt', zoals in 'lotto'", right: "딸 = ttal: één korte, strakke t", why: "De dubbele letter betekent spanning, niet lengte. Laat geen lucht ontsnappen en houd de klank kort." },
    { wrong: "풀 uitspreken als de Nederlandse p in 'pool', zonder lucht", right: "풀 = pul, met een duidelijke luchtstoot", why: "Zonder lucht klinkt het als 뿔 (hoorn). ㅍ heeft altijd een pufje lucht." },
    { wrong: "차 lezen met de g van 'acht'", right: "차 = cha: 'tsja' met lucht", why: "'ch' in de romanisatie staat voor de Engelse ch in 'church'." },
    { wrong: "ㅋ en ㄲ allebei als dezelfde k uitspreken", right: "카 = ka (met lucht), 까 = kka (strak, zonder lucht)", why: "Het verschil in lucht maakt een ander woord. Test het met een papiertje voor je mond." }
  ],
  vocab: [
    ["ㅋ ㅌ ㅍ ㅊ, ㄲ ㄸ ㅃ ㅆ ㅉ", "k t p ch, kk tt pp ss jj", "aangeblazen en gespannen medeklinkers"], ["커피", "keopi", "koffie"], ["토끼", "tokki", "konijn"],
    ["포도", "podo", "druiven"], ["차", "cha", "thee; auto"], ["딸", "ttal", "dochter"],
    ["빵", "ppang", "brood"], ["아빠", "appa", "papa"], ["코", "ko", "neus"], ["비싸요", "bissayo", "het is duur"]
  ],
  dialogue: [
    ["A", "안녕하세요. 커피 주세요.", "Annyeonghaseyo. Keopi juseyo.", "Goedendag. Een koffie, alstublieft."],
    ["B", "네. 빵도 드릴까요?", "Ne. Ppangdo deurilkkayo?", "Ja. Wilt u er ook brood bij?"],
    ["A", "아니요, 괜찮아요.", "Aniyo, gwaenchanayo.", "Nee, dank u."],
    ["B", "사천 원이에요.", "Sacheon wonieyo.", "Dat is vierduizend won."],
    ["A", "여기요.", "Yeogiyo.", "Alstublieft."],
    ["B", "감사합니다.", "Gamsahamnida.", "Dank u wel."]
  ],
  reading: {
    title: "달, 탈, 딸 (dal, tal, ttal)",
    lines: [
      { cn: "달", py: "dal", nl: "maan" },
      { cn: "탈", py: "tal", nl: "masker" },
      { cn: "딸", py: "ttal", nl: "dochter" },
      { cn: "불", py: "bul", nl: "vuur" },
      { cn: "풀", py: "pul", nl: "gras" },
      { cn: "뿔", py: "ppul", nl: "hoorn" },
      { cn: "아빠", py: "appa", nl: "papa" },
      { cn: "토끼", py: "tokki", nl: "konijn" },
      { cn: "커피", py: "keopi", nl: "koffie" },
      { cn: "빵", py: "ppang", nl: "brood" }
    ],
    questions: [
      { type: "mc", q: "Welk woord betekent 'dochter'?",
        options: ["딸", "달", "탈", "뿔"], answer: 0,
        why: ["Goed: 딸 (ttal) heeft een gespannen ㄸ.", "달 (dal) is maan: gewone ㄷ.", "탈 (tal) is masker: aangeblazen ㅌ.", "뿔 (ppul) is hoorn."] },
      { type: "mc", q: "Welk woord uit de rij eet je bij het ontbijt?",
        options: ["빵", "풀", "뿔", "탈"], answer: 0,
        why: ["Goed: 빵 (ppang) is brood.", "풀 (pul) is gras.", "뿔 (ppul) is de hoorn van een dier.", "탈 (tal) is een masker."] },
      { type: "mc", q: "불, 풀 en 뿔: wat is het enige verschil?",
        options: ["de eerste medeklinker: licht, met lucht, of strak", "de klinker", "de slotmedeklinker onderaan", "de lengte van de klinker"], answer: 0,
        why: ["Goed: ㅂ (gewoon), ㅍ (aangeblazen), ㅃ (gespannen). De rest is gelijk.", "De klinker is in alle drie ㅜ.", "De slotmedeklinker is in alle drie ㄹ.", "Het Koreaans schrijft geen lange klinkers. Het verschil zit in de medeklinker."] }
    ]
  },
  questions: [
    { type: "mc", q: "Welke letter is een k met een pufje lucht?",
      options: ["ㅋ", "ㄲ", "ㄱ", "ㅎ"], answer: 0,
      why: ["Goed: ㅋ is aangeblazen.", "ㄲ is gespannen: strak, zonder lucht.", "ㄱ is de gewone, lichte g/k.", "ㅎ is een h."] },
    { type: "mc", q: "Welke romanisatie hoort bij 토끼?",
      options: ["tokki", "dokki", "toki", "togi"], answer: 0,
      why: ["Goed: ㅌ = t, ㄲ = kk.", "d is de gewone ㄷ. 토 begint met ㅌ: met streepje en lucht.", "ㄲ is gespannen: dat schrijf je als kk.", "g is de gewone ㄱ. Hier staat de dubbele ㄲ."] },
    { type: "mc", q: "Hoe maak je een gespannen klank, zoals ㄸ?",
      options: ["strakke keel, geen pufje lucht", "met een sterk pufje lucht", "met trillende stembanden, als een Nederlandse d", "door de klank lang aan te houden"], answer: 0,
      why: ["Goed: gespannen = strak en zonder lucht.", "Een sterk pufje lucht hoort bij de aangeblazen ㅌ.", "Een stemhebbende d hoor je bij ㄷ tussen twee klinkers, niet bij ㄸ.", "De dubbele letter betekent spanning, niet lengte."] },
    { type: "mc", q: "Welke rij gaat van gewoon naar aangeblazen naar gespannen?",
      options: ["가 카 까", "가 까 카", "카 가 까", "까 카 가"], answer: 0,
      why: ["Goed: ㄱ (gewoon), ㅋ (streepje: lucht), ㄲ (dubbel: strak).", "까 is gespannen en 카 aangeblazen. De volgorde is omgedraaid.", "카 is aangeblazen, niet gewoon.", "Deze rij gaat precies de andere kant op."] },
    { type: "mc", q: "불 (vuur), 풀 (gras), 뿔 (hoorn). In welk woord hoor je een pufje lucht?",
      options: ["풀", "불", "뿔", "in alle drie even sterk"], answer: 0,
      why: ["Goed: ㅍ is aangeblazen.", "ㅂ is gewoon: maar een heel klein beetje lucht.", "ㅃ is gespannen: geen lucht.", "Het verschil in lucht is juist wat de woorden uit elkaar houdt."] },
    { type: "mc", q: "Welk woord betekent 'koffie'?",
      options: ["커피", "코", "포도", "차"], answer: 0,
      why: ["Goed: 커피 (keopi) is koffie.", "코 (ko) is neus.", "포도 (podo) is druiven.", "차 (cha) is thee."] },
    { type: "order", q: "Bouw het woord 'tokki' (konijn): zet de letters in leesvolgorde.",
      tokens: [["ㅌ", "t"], ["ㅗ", "o"], ["ㄲ", "kk"], ["ㅣ", "i"]] },
    { type: "order", q: "Bouw het woord 'keopi' (koffie): zet de letters in leesvolgorde.",
      tokens: [["ㅋ", "k"], ["ㅓ", "eo"], ["ㅍ", "p"], ["ㅣ", "i"]] },
    { type: "fill", q: "Typ de romanisatie: 딸 = ___ (dochter)", answers: ["ttal"],
      hint: "ㄸ is de gespannen t. Schrijf die dubbel. ㄹ onderaan is een l.", why: "ㄸ = tt, ㅏ = a, ㄹ onderaan = l. Dus 딸 = ttal." },
    { type: "open", q: "Schrijf in Hangul: dal (maan), tal (masker), ttal (dochter). Zeg ze hardop met een papiertje voor je mond.", model: ["달, 탈, 딸"],
      tip: "Check: ㄷ, ㅌ (met extra streep) en ㄸ (dubbel). Het papiertje beweegt alleen flink bij 탈." },
    { type: "open", q: "Schrijf in Hangul: appa (papa) en ppang (brood).", model: ["아빠, 빵"],
      tip: "Check: allebei met de dubbele ㅃ. Bij 빵 staat ㅇ onderaan als slotmedeklinker: daar klinkt hij als 'ng'." }
  ],
  review: [
    { type: "mc", q: "Welke lettergreep is 'ppa'?",
      options: ["빠", "파", "바", "따"], answer: 0,
      why: ["Goed: ㅃ is de gespannen p.", "파 is pa: aangeblazen, met lucht.", "바 is ba: de gewone, lichte p/b.", "따 is tta: de gespannen t."] },
    { type: "mc", q: "Lees: 코. Welke romanisatie klopt?",
      options: ["ko", "kko", "go", "keo"], answer: 0,
      why: ["Goed: ㅋ = k, ㅗ = o.", "kk is de dubbele ㄲ. Hier staat ㅋ, met één streepje.", "g is de gewone ㄱ, zonder streepje.", "eo is ㅓ. Hier staat ㅗ onder de medeklinker."] },
    { type: "mc", q: "사요 (ik koop) en 싸요 (het is goedkoop). Wat is het verschil?",
      options: ["ㅆ is een strakke, scherpe s", "ㅆ is een lange s", "ㅆ klinkt als 'sj'", "ㅆ klinkt als een z"], answer: 0,
      why: ["Goed: ㅆ is de gespannen s.", "Dubbel betekent spanning, niet lengte.", "'sj' hoor je bij ㅅ vóór ㅣ, niet door de dubbele letter.", "Een z-klank heeft het Koreaans niet."] }
  ]
})
