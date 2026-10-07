({
  id: "10", slug: "eerste-zinnen", title: "Eerste zinnen: wat, waar, er is", sub: "Vragen naar dingen en plaatsen",
  canDo: "Je kunt nu vragen wat iets is en waar iets is, zeggen of iets er is, en aanwijzen met 이, 그 en 저.",
  guess: {
    q: "Je houdt iets in je hand en vraagt: \"Wat is dit?\" Welke zin klopt, denk je?",
    options: ["이거 뭐예요?", "저거 뭐예요?", "이거 어디예요?", "뭐 이거예요?"], answer: 0,
    why: ["Goed: 이거 = dit (bij mij), 뭐예요? = wat is het?", "저거 is iets ver weg, niet in je hand.", "어디예요? vraagt \"waar is het?\"", "Het ding staat vooraan, 뭐예요 achteraan."]
  },
  problem: "Als beginner wil je vooral vragen: wat is dit, en waar is het? Daarvoor heb je weinig nodig. 이거 is \"dit\". 뭐 is \"wat\". 어디 is \"waar\". Met 있어요 zeg je dat iets er is, met 없어요 dat het er niet is. Voor \"dit\" en \"dat\" heeft het Koreaans drie woorden. Je kiest op basis van de afstand.",
  pattern: [
    { l: "dit", v: "이거", c: 1, key: true }, { l: "wat", v: "뭐", c: 3 }, { l: "is het?", v: "예요?", c: 2, key: true }
  ],
  patternCap: "이거/그거/저거 + 뭐예요? · ding + 있어요/없어요 · plaats of ding + 어디예요?",
  rules: [
    "이 = bij mij, 그 = bij jou, 저 = ver van ons allebei. Met 거 erachter wordt het een ding: 이거, 그거, 저거.",
    "Voor een zelfstandig naamwoord gebruik je 이, 그 of 저 zonder 거: 이 책 (dit boek), 저 사람 (die persoon daar).",
    "Antwoord met 예요/이에요 (les 08): 이거는 커피예요. 이거는 책이에요.",
    "있어요 = er is, ik heb. 없어요 = er is niet, ik heb niet. Als vraag laat je je stem omhoog gaan: 물 있어요?",
    "어디예요? = waar is het? 화장실 어디예요? Het antwoord kan zijn: 저기예요 (daar)."
  ],
  pitfall: "이, 그 en 저 staan nooit alleen. Zeg niet 이 뭐예요?, maar 이거 뭐예요? Of: 이 책 뭐예요?",
  examples: [
    { cn: "이거 뭐예요?", py: "Igeo mwoyeyo?", nl: "Wat is dit?" },
    { cn: "이거는 김치예요.", py: "Igeoneun gimchiyeyo.", nl: "Dit is kimchi." },
    { cn: "우산 있어요?", py: "Usan isseoyo?", nl: "Heb je een paraplu?" },
    { cn: "화장실 어디예요?", py: "Hwajangsil eodiyeyo?", nl: "Waar is het toilet?" }
  ],
  nuance: [
    { h: "이, 그, 저: waar staat het?",
      p: "Kies het woord op basis van de afstand. 이거 ligt bij jou als spreker. 그거 ligt bij de luisteraar. 저거 is ver weg van jullie allebei. 그 gebruik je ook voor iets waar je het net over had: 그 사람 = die persoon (van wie we spraken).",
      ex: [
        { cn: "이거 뭐예요?", py: "Igeo mwoyeyo?", nl: "Wat is dit? (in mijn hand)" },
        { cn: "그거 뭐예요?", py: "Geugeo mwoyeyo?", nl: "Wat is dat? (in jouw hand)" },
        { cn: "저거 뭐예요?", py: "Jeogeo mwoyeyo?", nl: "Wat is dat daar? (ver weg)" }
      ] },
    { h: "저: \"ik\" of \"daar\"?",
      p: "저 heeft twee betekenissen. Alleen of met 는 is het \"ik\" (beleefd): 저는. Voor een zelfstandig naamwoord of met 거 betekent het \"die/dat daar\": 저 사람, 저거. Kijk dus naar wat erachter staat.",
      ex: [
        { cn: "저는 학생이에요.", py: "Jeoneun haksaengieyo.", nl: "Ik ben student." },
        { cn: "저 사람은 학생이에요.", py: "Jeo sarameun haksaengieyo.", nl: "Die persoon daar is student." }
      ] },
    { h: "있어요 en 없어요: zijn én hebben",
      p: "Het Nederlands heeft twee werkwoorden: \"er is\" en \"ik heb\". Het Koreaans gebruikt voor allebei 있어요. Voor het tegendeel gebruik je 없어요. Je hoeft \"ik\" vaak niet te zeggen. Uit de situatie blijkt wie het heeft.",
      ex: [
        { cn: "시간 있어요?", py: "Sigan isseoyo?", nl: "Heb je tijd?" },
        { cn: "돈이 없어요.", py: "Doni eopseoyo.", nl: "Ik heb geen geld." }
      ] },
    { h: "이거는, 이건 of 이게",
      p: "In spreektaal worden deze woorden korter. 이거는 wordt vaak 이건 (igeon). In een vraag hoor je ook 이게 뭐예요? (Ige mwoyeyo?). Alle drie zijn gewoon en beleefd genoeg met 요.",
      ex: [
        { cn: "이건 제 책이에요.", py: "Igeon je chaegieyo.", nl: "Dit is mijn boek." },
        { cn: "이게 뭐예요?", py: "Ige mwoyeyo?", nl: "Wat is dit?" }
      ] }
  ],
  mistakes: [
    { wrong: "이 뭐예요?", right: "이거 뭐예요?", why: "이 staat niet alleen. Voor \"dit\" als ding zeg je 이거." },
    { wrong: "이거는 책예요.", right: "이거는 책이에요.", why: "책 eindigt op een 받침 (ㄱ). Dan komt 이에요." },
    { wrong: "화장실 어디이에요?", right: "화장실 어디예요?", why: "어디 eindigt op een klinker. Dan komt 예요." },
    { wrong: "(Je wijst naar een gebouw ver weg.) 이거 뭐예요?", right: "(Je wijst naar een gebouw ver weg.) 저거 뭐예요?", why: "Iets ver weg van jullie allebei is 저거, niet 이거." }
  ],
  vocab: [
    ["이거, 그거, 저거", "igeo, geugeo, jeogeo", "dit, dat (bij jou), dat daar"], ["뭐", "mwo", "wat"], ["어디", "eodi", "waar"],
    ["있어요", "isseoyo", "er is, ik heb"], ["없어요", "eopseoyo", "er is niet, ik heb niet"], ["여기", "yeogi", "hier"],
    ["저기", "jeogi", "daar"], ["화장실", "hwajangsil", "toilet"], ["책", "chaek", "boek"], ["우산", "usan", "paraplu"]
  ],
  dialogue: [
    ["A", "이거 뭐예요?", "Igeo mwoyeyo?", "Wat is dit?"],
    ["B", "그거는 떡이에요.", "Geugeoneun tteogieyo.", "Dat is tteok (rijstcake)."],
    ["A", "저거는 뭐예요?", "Jeogeoneun mwoyeyo?", "En wat is dat daar?"],
    ["B", "저거는 김밥이에요.", "Jeogeoneun gimbabieyo.", "Dat daar is kimbap (rijstrol)."],
    ["A", "물 있어요?", "Mul isseoyo?", "Is er water?"],
    ["B", "아니요, 물은 없어요. 저기 편의점에 있어요.", "Aniyo, mureun eopseoyo. Jeogi pyeonuijeome isseoyo.", "Nee, water hebben we niet. Daar in de buurtwinkel is het wel."]
  ],
  reading: {
    title: "제 방 (je bang, mijn kamer)",
    lines: [
      { cn: "여기는 제 방이에요.", py: "Yeogineun je bangieyo.", nl: "Dit is mijn kamer." },
      { cn: "이거는 제 책상이에요.", py: "Igeoneun je chaeksangieyo.", nl: "Dit is mijn bureau." },
      { cn: "책상 위에 책이 있어요.", py: "Chaeksang wie chaegi isseoyo.", nl: "Op het bureau ligt een boek." },
      { cn: "그런데 컴퓨터는 없어요.", py: "Geureonde keompyuteoneun eopseoyo.", nl: "Maar een computer is er niet." },
      { cn: "저거는 창문이에요.", py: "Jeogeoneun changmunieyo.", nl: "Dat daar is het raam." },
      { cn: "창문 옆에 침대가 있어요.", py: "Changmun yeope chimdaega isseoyo.", nl: "Naast het raam staat het bed." },
      { cn: "화장실은 어디예요?", py: "Hwajangsireun eodiyeyo?", nl: "Waar is het toilet?" },
      { cn: "화장실은 방 밖에 있어요.", py: "Hwajangsireun bang bakke isseoyo.", nl: "Het toilet is buiten de kamer." }
    ],
    questions: [
      { type: "mc", q: "Wat is er NIET in de kamer?",
        options: ["Een computer.", "Een boek.", "Een bed.", "Een bureau."], answer: 0,
        why: ["Goed: 컴퓨터는 없어요.", "Er ligt een boek op het bureau: 책이 있어요.", "Het bed staat naast het raam: 침대가 있어요.", "이거는 제 책상이에요: er is een bureau."] },
      { type: "mc", q: "Waar is het toilet?",
        options: ["Buiten de kamer.", "Naast het raam.", "Op het bureau.", "Naast het bed."], answer: 0,
        why: ["Goed: 화장실은 방 밖에 있어요.", "Naast het raam staat het bed.", "Op het bureau ligt een boek.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "저거는 창문이에요. Waarom staat hier 저거?",
        options: ["Het raam is ver van de spreker.", "Het raam is in de hand van de spreker.", "저거 betekent hier \"ik\".", "저거 is formeler dan 이거."], answer: 0,
        why: ["Goed: 저거 = dat daar, ver weg.", "Iets in je eigen hand is 이거.", "\"Ik\" is 저 alleen of 저는. 저거 is \"dat daar\".", "Het verschil is afstand, niet beleefdheid."] }
    ]
  },
  questions: [
    { type: "mc", q: "Je vriend houdt iets vast. Jij vraagt wat het is.",
      options: ["그거 뭐예요?", "이거 뭐예요?", "저거 뭐예요?", "그 뭐예요?"], answer: 0,
      why: ["Goed: bij de luisteraar is 그거.", "이거 is iets bij jou zelf.", "저거 is iets ver weg van jullie allebei.", "그 staat niet alleen. Je hebt 그거 nodig."] },
    { type: "mc", q: "Je wijst naar een toren in de verte en vraagt wat het is.",
      options: ["저거 뭐예요?", "이거 뭐예요?", "그거 뭐예요?", "저거 어디예요?"], answer: 0,
      why: ["Goed: ver weg van jullie allebei is 저거.", "이거 is iets bij jou.", "그거 is iets bij de luisteraar.", "어디예요? vraagt \"waar\". Je ziet de toren al."] },
    { type: "mc", q: "\"Is er water?\"",
      options: ["물 있어요?", "물 어디예요?", "물 뭐예요?", "물 없어요."], answer: 0,
      why: ["Goed: ding + 있어요?", "Dat is \"Waar is het water?\"", "Dat is \"Wat is water?\"", "Dat is \"Er is geen water.\""] },
    { type: "mc", q: "이거는 책___. (Dit is een boek.)",
      options: ["이에요", "예요", "이예요", "있어요"], answer: 0,
      why: ["Goed: 책 eindigt op een 받침, dus 이에요.", "예요 komt na een klinker. 책 eindigt op ㄱ.", "이예요 bestaat niet.", "있어요 betekent \"er is\", niet \"is (een)\"."] },
    { type: "mc", q: "화장실 어디예요? Wat betekent dat?",
      options: ["Waar is het toilet?", "Is er een toilet?", "Wat is een toilet?", "Dit is het toilet."], answer: 0,
      why: ["Goed: 어디예요? = waar is het?", "Dat zou 화장실 있어요? zijn.", "Dat zou 화장실 뭐예요? zijn.", "Dat zou 여기가 화장실이에요 zijn. Hier staat een vraag."] },
    { type: "mc", q: "저 사람은 선생님이에요. Wat betekent 저 hier?",
      options: ["die (daar)", "ik", "dit (hier)", "wat"], answer: 0,
      why: ["Goed: 저 voor een zelfstandig naamwoord = die daar.", "\"Ik\" is 저 alleen of 저는, niet 저 + 사람.", "\"Dit\" is 이.", "\"Wat\" is 뭐."] },
    { type: "mc", q: "돈이 없어요. Wat betekent dat?",
      options: ["Ik heb geen geld.", "Ik heb geld.", "Waar is het geld?", "Wat is geld?"], answer: 0,
      why: ["Goed: 없어요 = er is niet, ik heb niet.", "Dat zou 돈이 있어요 zijn.", "Dat zou 돈 어디예요? zijn.", "Dat zou 돈이 뭐예요? zijn."] },
    { type: "order", q: "Zet in de goede volgorde: \"Op het bureau ligt een boek.\"",
      tokens: [["책상", "chaeksang"], ["위에", "wie"], ["책이", "chaegi"], ["있어요", "isseoyo"]],
      alt: ["책이 책상 위에 있어요"] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb vandaag geen tijd.\"",
      tokens: [["저는", "jeoneun"], ["오늘", "oneul"], ["시간이", "sigani"], ["없어요", "eopseoyo"]],
      alt: ["오늘 저는 시간이 없어요"] },
    { type: "fill", q: "화장실 ___? (Waar is het toilet?)", answers: ["어디예요", "eodiyeyo"],
      hint: "어디 = waar. Wat komt erachter na een klinker?", why: "어디 eindigt op een klinker: 어디예요? (eodiyeyo)." },
    { type: "open", q: "Vertaal: \"Wat is dat daar?\" (ver weg) Schrijf Hangul en romanisatie.", model: ["저거 뭐예요? (Jeogeo mwoyeyo?)", "저건 뭐예요? (Jeogeon mwoyeyo?)", "저게 뭐예요? (Jeoge mwoyeyo?)"],
      tip: "Check: ver weg van jullie allebei is 저거, niet 이거 of 그거." },
    { type: "open", q: "Vertaal: \"Is er koffie? Nee, er is geen koffie.\" Schrijf Hangul en romanisatie.", model: ["커피 있어요? 아니요, 커피 없어요. (Keopi isseoyo? Aniyo, keopi eopseoyo.)", "커피 있어요? 아니요, 없어요. (Keopi isseoyo? Aniyo, eopseoyo.)"],
      tip: "Check: de vraag is ding + 있어요? met je stem omhoog. Het antwoord gebruikt 없어요." }
  ],
  review: [
    { type: "mc", q: "\"Er is geen melk.\" (melk = 우유)",
      options: ["우유 없어요.", "우유 있어요.", "우유 어디예요?", "우유 뭐예요?"], answer: 0,
      why: ["Goed: 없어요 = er is niet.", "있어요 betekent \"er is\".", "Dat vraagt waar de melk is.", "Dat vraagt wat melk is."] },
    { type: "mc", q: "\"Waar is het station?\" (station = 역)",
      options: ["역 어디예요?", "역 어디이에요?", "역 뭐예요?", "역 저기예요?"], answer: 0,
      why: ["Goed: plaats + 어디예요?", "어디 eindigt op een klinker, dus 예요.", "뭐예요? vraagt \"wat\", niet \"waar\".", "Dat is \"Is het station daar?\" Je vraagt dan niet waar het is."] },
    { type: "mc", q: "\"Dat boek daar\" (ver van jullie allebei)",
      options: ["저 책", "이 책", "그 책", "저거 책"], answer: 0,
      why: ["Goed: 저 + zelfstandig naamwoord = dat ... daar.", "이 책 is \"dit boek\", bij jou.", "그 책 is \"dat boek\" bij de luisteraar.", "Voor een zelfstandig naamwoord gebruik je 저, zonder 거."] }
  ]
})
