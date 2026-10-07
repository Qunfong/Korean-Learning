({
  id: "04", slug: "samengestelde-klinkers", title: "Samengestelde klinkers", sub: "ㅐ ㅔ, ㅑ ㅕ ㅛ ㅠ en ㅘ ㅝ ㅚ ㅟ ㅢ",
  canDo: "Je kunt nu klinkers met een j- of w-klank lezen, en woorden als 우유, 사과 en 의자 uitspreken.",
  guess: {
    q: "ㅏ is a. ㅑ is dezelfde klinker met een extra streepje. Hoe klinkt ㅑ, denk je?",
    options: ["ja", "aa", "wa", "e"], answer: 0,
    why: ["Goed: een extra streepje zet een j-klank vóór de klinker: ya, uitgesproken als 'ja'.", "Een lange a bestaat in het Koreaans niet als aparte letter.", "Een w-klank maak je door twee klinkers te combineren, zoals ㅗ + ㅏ = ㅘ.", "De e-klank is ㅔ of ㅐ: een andere vorm."]
  },
  problem: "Met zes basisklinkers kom je niet ver. Het Koreaans bouwt meer klinkers uit dezelfde streepjes. Een extra streepje geeft een j-klank: ㅏ wordt ㅑ (ja). Twee klinkers samen geven een w-klank: ㅗ + ㅏ wordt ㅘ (wa). Zo hoef je weinig nieuwe vormen te leren.",
  pattern: [
    { l: "klinker (o)", v: "ㅗ", c: 1 }, { l: "klinker (a)", v: "ㅏ", c: 4 }, { l: "samen: wa", v: "ㅘ", c: 2, key: true },
    { l: "woord: sagwa", v: "사과", c: 3 }
  ],
  patternCap: "Extra streepje = j-klank (ㅑ ya, ㅕ yeo, ㅛ yo, ㅠ yu) · twee klinkers = w-klank (ㅘ wa, ㅝ wo, ㅚ oe, ㅟ wi) · ㅐ ae en ㅔ e",
  rules: [
    "ㅐ (ae) en ㅔ (e) klinken allebei als de e in 'bed'. Bijna geen Koreaan hoort nog verschil.",
    "Eén extra streepje = j ervoor: ㅑ ya ('ja'), ㅕ yeo ('jo' in 'jong'), ㅛ yo ('jo' in 'jojo'), ㅠ yu ('joe').",
    "In de romanisatie is 'y' de Nederlandse j. 야 is 'ya', maar je zegt 'ja'.",
    "ㅗ of ㅜ vóór een andere klinker = w ervoor: ㅘ wa, ㅝ wo, ㅟ wi. ㅚ schrijf je 'oe' maar zeg je als 'we'.",
    "ㅢ (ui) is ㅡ + ㅣ snel achter elkaar. Na een medeklinker klinkt hij als i."
  ],
  pitfall: "Lees de 'y' in de romanisatie niet als 'ij' of 'i'. 여우 (yeou) klinkt als 'jo-oe', niet als 'ij-o-oe'.",
  examples: [
    { cn: "우유", py: "uyu", nl: "melk" },
    { cn: "사과", py: "sagwa", nl: "appel" },
    { cn: "여우", py: "yeou", nl: "vos" },
    { cn: "의자", py: "uija", nl: "stoel" }
  ],
  nuance: [
    { h: "ㅐ en ㅔ klinken bijna hetzelfde",
      p: "Vroeger was ㅐ (ae) iets opener dan ㅔ (e). Nu zeggen bijna alle Koreanen ze hetzelfde: als de e in 'bed'. Je moet de spelling dus uit je hoofd leren. Lees 'ae' in de romanisatie niet als 'a-e' of 'aai'.",
      ex: [
        { cn: "개", py: "gae", nl: "hond" },
        { cn: "게", py: "ge", nl: "krab (klinkt hetzelfde als 개)" },
        { cn: "네", py: "ne", nl: "ja" }
      ] },
    { h: "Het streepje maakt een j-klank",
      p: "Vergelijk ㅏ en ㅑ, ㅓ en ㅕ, ㅗ en ㅛ, ㅜ en ㅠ. Het enige verschil is één extra kort streepje. Dat streepje zet een j vóór de klinker. Dat werkt ook bij ㅐ en ㅔ: ㅒ (yae) en ㅖ (ye), allebei 'je'.",
      ex: [
        { cn: "야구", py: "yagu", nl: "honkbal (ㅑ = ja)" },
        { cn: "요리", py: "yori", nl: "koken, gerecht (ㅛ = jo)" },
        { cn: "여자", py: "yeoja", nl: "vrouw (ㅕ = jo met open o)" }
      ] },
    { h: "Twee klinkers in één: de w-klank",
      p: "Zet je ㅗ of ㅜ vóór een andere klinker? Dan glijd je snel van de eerste naar de tweede. Dat klinkt als een w zoals in het Engelse 'water'. ㅗ gaat samen met ㅏ (ㅘ wa) en ㅐ (ㅙ wae). ㅜ gaat samen met ㅓ (ㅝ wo) en ㅔ (ㅞ we). ㅚ en ㅟ hebben een ㅣ erachter.",
      ex: [
        { cn: "뭐", py: "mwo", nl: "wat (ㅜ + ㅓ)" },
        { cn: "귀", py: "gwi", nl: "oor (ㅜ + ㅣ)" },
        { cn: "회사", py: "hoesa", nl: "bedrijf (ㅚ klinkt als 'we')" }
      ] }
  ],
  mistakes: [
    { wrong: "우유 lezen als 'oe-ij-oe'", right: "우유 = uyu: 'oe-joe'", why: "De 'y' in de romanisatie is de Nederlandse j. ㅠ klinkt als 'joe'." },
    { wrong: "개 lezen als 'gaai' (a + e)", right: "개 = gae: 'ge' zoals in 'gek'", why: "'ae' is één klank: de e in 'bed'. Het is geen a gevolgd door een e." },
    { wrong: "ㅕ lezen als 'je' (zoals in 'jet')", right: "ㅕ = yeo: 'jo' met open o", why: "ㅕ is ㅓ met een j ervoor. ㅓ is een open o, geen e." },
    { wrong: "ㅛ en ㅠ verwisselen", right: "ㅛ = yo (streepjes omhoog), ㅠ = yu (streepjes omlaag)", why: "Net als bij ㅗ en ㅜ: wijzen de streepjes omhoog, dan is het o. Wijzen ze omlaag, dan is het oe." }
  ],
  vocab: [
    ["ㅐ ㅔ ㅑ ㅕ ㅛ ㅠ ㅘ ㅝ ㅚ ㅟ ㅢ", "ae e ya yeo yo yu wa wo oe wi ui", "samengestelde klinkers"], ["개", "gae", "hond"], ["새", "sae", "vogel"],
    ["우유", "uyu", "melk"], ["여우", "yeou", "vos"], ["요리", "yori", "koken, gerecht"],
    ["사과", "sagwa", "appel"], ["뭐", "mwo", "wat"], ["회사", "hoesa", "bedrijf"], ["의자", "uija", "stoel"]
  ],
  dialogue: [
    ["A", "이거 뭐예요?", "Igeo mwoyeyo?", "Wat is dit?"],
    ["B", "사과예요.", "Sagwayeyo.", "Het is een appel."],
    ["A", "우유도 있어요?", "Uyudo isseoyo?", "Is er ook melk?"],
    ["B", "네, 있어요.", "Ne, isseoyo.", "Ja, die is er."],
    ["A", "과자는요?", "Gwajaneunyo?", "En koekjes?"],
    ["B", "아니요, 과자는 없어요.", "Aniyo, gwajaneun eopseoyo.", "Nee, koekjes zijn er niet."]
  ],
  reading: {
    title: "뭐예요? (mwoyeyo?)",
    lines: [
      { cn: "개", py: "gae", nl: "hond" },
      { cn: "새", py: "sae", nl: "vogel" },
      { cn: "여우", py: "yeou", nl: "vos" },
      { cn: "귀", py: "gwi", nl: "oor" },
      { cn: "의자", py: "uija", nl: "stoel" },
      { cn: "회사", py: "hoesa", nl: "bedrijf" },
      { cn: "사과", py: "sagwa", nl: "appel" },
      { cn: "사과예요.", py: "Sagwayeyo.", nl: "Het is een appel." },
      { cn: "우유", py: "uyu", nl: "melk" },
      { cn: "우유 주세요.", py: "Uyu juseyo.", nl: "Melk, alstublieft." }
    ],
    questions: [
      { type: "mc", q: "Welk woord in de rij is een dier dat vliegt?",
        options: ["새", "개", "여우", "귀"], answer: 0,
        why: ["Goed: 새 (sae) is vogel.", "개 (gae) is hond.", "여우 (yeou) is vos.", "귀 (gwi) is oor, geen dier."] },
      { type: "mc", q: "Wat vraag je met 우유 주세요?",
        options: ["melk", "een appel", "een stoel", "koekjes"], answer: 0,
        why: ["Goed: 우유 (uyu) = melk, 주세요 = geef alstublieft.", "Appel is 사과 (sagwa).", "Stoel is 의자 (uija).", "Koekjes is 과자 (gwaja)."] },
      { type: "mc", q: "In 사과 staat de klinker ㅘ. Uit welke twee klinkers bestaat ㅘ?",
        options: ["ㅗ + ㅏ", "ㅜ + ㅓ", "ㅗ + ㅣ", "ㅡ + ㅏ"], answer: 0,
        why: ["Goed: o + a, snel achter elkaar = wa.", "ㅜ + ㅓ is ㅝ (wo), zoals in 뭐.", "ㅗ + ㅣ is ㅚ (oe), zoals in 회사.", "ㅡ combineert alleen met ㅣ: ㅢ."] }
    ]
  },
  questions: [
    { type: "mc", q: "Welke romanisatie hoort bij 우유?",
      options: ["uyu", "uju", "uyo", "uu"], answer: 0,
      why: ["Goed: 우 = u, 유 = yu. Je zegt 'oe-joe'.", "In de romanisatie is 'j' de letter ㅈ. Een j-klank schrijf je als 'y'.", "'yo' is ㅛ: de streepjes wijzen omhoog. Bij 유 wijzen ze omlaag.", "유 heeft een extra streepje: daar hoort een y bij."] },
    { type: "mc", q: "Welke klinker klinkt als 'ja'?",
      options: ["ㅑ", "ㅏ", "ㅕ", "ㅘ"], answer: 0,
      why: ["Goed: ㅑ = ya, uitgesproken als 'ja'.", "ㅏ is alleen a, zonder j.", "ㅕ is yeo: 'jo' met open o.", "ㅘ is wa: een w-klank, geen j."] },
    { type: "mc", q: "개 (hond) en 게 (krab). Hoe verschilt de uitspraak?",
      options: ["Bijna niet: allebei als de e in 'bed'.", "개 klinkt als 'gaai'.", "게 klinkt als 'gee' met een lange ee.", "개 klinkt als 'ga'."], answer: 0,
      why: ["Goed: ㅐ en ㅔ klinken tegenwoordig vrijwel gelijk.", "'ae' is één klank, geen a + e.", "ㅔ is een korte e, geen lange ee.", "'ga' is 가, met ㅏ zonder extra streep."] },
    { type: "mc", q: "Welk woord betekent 'appel'?",
      options: ["사과", "과자", "회사", "의자"], answer: 0,
      why: ["Goed: 사과 (sagwa) is appel.", "과자 (gwaja) is koekje: 과 staat vooraan.", "회사 (hoesa) is bedrijf.", "의자 (uija) is stoel."] },
    { type: "mc", q: "Hoe spreek je 뭐 (wat) uit?",
      options: ["mwo: m + w + open o", "mo: m + o", "mu-eo: twee lettergrepen", "meo: m + open o"], answer: 0,
      why: ["Goed: ㅝ = ㅜ + ㅓ, snel samen tot 'wo'.", "Er is een w-glijklank: 뭐 heeft ㅜ + ㅓ.", "ㅝ is één klinker in één blokje: één lettergreep.", "meo is 머. In 뭐 zit ook ㅜ, dus een w."] },
    { type: "mc", q: "Welke lettergreep is 'yo'?",
      options: ["요", "여", "유", "야"], answer: 0,
      why: ["Goed: ㅛ heeft twee streepjes omhoog.", "여 is yeo: verticale klinker, open o.", "유 is yu: de streepjes wijzen omlaag.", "야 is ya: 'ja'."] },
    { type: "order", q: "Bouw het woord 'sagwa' (appel): zet de letters in leesvolgorde.",
      tokens: [["ㅅ", "s"], ["ㅏ", "a"], ["ㄱ", "g"], ["ㅘ", "wa"]] },
    { type: "order", q: "Bouw het woord 'hyuji' (tissue, wc-papier): zet de letters in leesvolgorde.",
      tokens: [["ㅎ", "h"], ["ㅠ", "yu"], ["ㅈ", "j"], ["ㅣ", "i"]] },
    { type: "fill", q: "Typ de romanisatie: 여우 = ___ (vos)", answers: ["yeou"],
      hint: "ㅕ = yeo, ㅜ = u.", why: "여 = yeo en 우 = u, dus 여우 = yeou. Je zegt 'jo-oe' met een open o." },
    { type: "open", q: "Schrijf in Hangul: uyu (melk) en sagwa (appel).", model: ["우유, 사과"],
      tip: "Check: 유 heeft twee streepjes omlaag. In 과 staat ㄱ links boven, met ㅗ eronder en ㅏ rechts." },
    { type: "open", q: "Schrijf in Hangul: yori (koken) en yeoja (vrouw). Zeg ze hardop.", model: ["요리, 여자"],
      tip: "Check: 요 heeft twee streepjes omhoog, 여 twee streepjes naar links. Zeg 'jo-rie' en 'jo-dzja'." }
  ],
  review: [
    { type: "mc", q: "Lees: 귀. Welke romanisatie klopt?",
      options: ["gwi", "gi", "gu", "gwo"], answer: 0,
      why: ["Goed: ㅟ = ㅜ + ㅣ = wi.", "gi is 기, zonder ㅜ.", "gu is 구, zonder ㅣ.", "gwo is 궈: ㅜ + ㅓ."] },
    { type: "mc", q: "Welke klinker is ㅗ + ㅣ, en klinkt als 'we'?",
      options: ["ㅚ", "ㅘ", "ㅟ", "ㅢ"], answer: 0,
      why: ["Goed: ㅚ (oe) klinkt als 'we'.", "ㅘ is ㅗ + ㅏ = wa.", "ㅟ is ㅜ + ㅣ = wi.", "ㅢ is ㅡ + ㅣ = ui."] },
    { type: "mc", q: "Lees: 여우 귀. Wat betekent het?",
      options: ["het oor van de vos", "de melk van de vos", "het oor van de hond", "de stoel van de vos"], answer: 0,
      why: ["Goed: 여우 (yeou) = vos, 귀 (gwi) = oor.", "Melk is 우유 (uyu). Hier staat 귀.", "Hond is 개 (gae). Hier staat 여우.", "Stoel is 의자 (uija). Hier staat 귀."] }
  ]
})
