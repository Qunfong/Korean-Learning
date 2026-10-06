({
  id: "14", slug: "hago", title: "하고, 와/과, (이)랑", sub: "En, met",
  canDo: "Je kunt nu twee dingen of personen verbinden (\"en\") en zeggen met wie je iets doet (\"met\"), in spreektaal en in schrijftaal.",
  guess: {
    q: "In een bakkerij zeg je: \"Brood en melk, alstublieft.\" Welke zin klopt, denk je?",
    options: ["빵하고 우유 주세요.", "빵와 우유 주세요.", "빵고 우유 주세요.", "빵이 우유 주세요."], answer: 0,
    why: ["Goed: 하고 = en. Het past na elk woord, met of zonder 받침.", "빵 eindigt op een 받침 (ㅇ). Dan wordt het 과, niet 와.", "-고 verbindt werkwoorden, geen zelfstandige naamwoorden.", "이 is het onderwerpspartikel, geen \"en\"."]
  },
  problem: "Het Nederlandse \"en\" tussen twee woorden en \"met\" (samen met iemand) zijn in het Koreaans hetzelfde partikel. Er zijn drie vormen: 하고, 와/과 en (이)랑. Ze betekenen hetzelfde. Het verschil zit in de stijl: 하고 is gewoon, 와/과 is schrijftaal en (이)랑 is losse spreektaal.",
  pattern: [
    { l: "wie", v: "저는", c: 1 }, { l: "met wie", v: "친구", c: 3 }, { l: "하고 / 와/과 / (이)랑", v: "하고", c: 2, key: true }, { l: "samen", v: "같이", c: 5 }, { l: "werkwoord", v: "가요", c: 4 }
  ],
  patternCap: "A + 하고/와/과/(이)랑 + B (en) · persoon + 하고 (같이) + werkwoord (met) · 와 na klinker, 과 na 받침 · 랑 na klinker, 이랑 na 받침",
  rules: [
    "하고 blijft altijd hetzelfde: 친구하고, 동생하고. Het past in bijna elke situatie, vooral in spreektaal.",
    "와/과 is schrijftaal en formeel spreken. 와 na een klinker (친구와), 과 na een 받침 (동생과).",
    "(이)랑 is losse spreektaal, met vrienden en familie. 랑 na een klinker (친구랑), 이랑 na een 받침 (동생이랑).",
    "\"Met iemand\": persoon + 하고 + 같이 (spreektaal) of + 와/과 함께 (schrijftaal). 같이 en 함께 mag je weglaten.",
    "Deze partikels verbinden alleen zelfstandige naamwoorden. Werkwoorden verbind je met -고: 먹고 마셔요."
  ],
  pitfall: "와/과 werkt net andersom dan je verwacht: 과 (met medeklinker) komt na een 받침, 와 na een klinker. Dus 책과, maar 사과와.",
  examples: [
    { cn: "빵하고 우유를 샀어요.", py: "Ppanghago uyureul sasseoyo.", nl: "Ik heb brood en melk gekocht." },
    { cn: "친구하고 같이 점심을 먹었어요.", py: "Chinguhago gachi jeomsimeul meogeosseoyo.", nl: "Ik heb samen met een vriend geluncht." },
    { cn: "서울과 부산은 큰 도시입니다.", py: "Seoulgwa Busaneun keun dosiimnida.", nl: "Seoul en Busan zijn grote steden." },
    { cn: "엄마랑 시장에 갔어요.", py: "Eommarang sijange gasseoyo.", nl: "Ik ging met mama naar de markt." }
  ],
  nuance: [
    { h: "Drie vormen, drie stijlen",
      p: "In een opstel, een nieuwsbericht of op een bord zie je 와/과. Tegen een vriend of je moeder zeg je vaak (이)랑. 하고 zit ertussen en is altijd veilig in een gesprek. Kies één vorm per zin. 엄마랑 아빠하고 klinkt rommelig.",
      ex: [
        { cn: "동생과 함께 여행했습니다.", py: "Dongsaenggwa hamkke yeohaenghaetseumnida.", nl: "Ik heb met mijn broer gereisd. (geschreven)" },
        { cn: "동생하고 같이 여행했어요.", py: "Dongsaenghago gachi yeohaenghaesseoyo.", nl: "Ik heb met mijn broer gereisd. (gesprek)" },
        { cn: "동생이랑 여행했어요.", py: "Dongsaengirang yeohaenghaesseoyo.", nl: "Ik heb met mijn broer gereisd. (los, onder vrienden)" }
      ] },
    { h: "같이 of 함께?",
      p: "Allebei betekenen \"samen\". 같이 hoor je in gewone gesprekken. 함께 is netter en staat vaak in teksten, liedjes en toespraken. Daarom gaan ze vaak samen met een partikel van dezelfde stijl: 하고 같이, (이)랑 같이, 와/과 함께.",
      ex: [
        { cn: "가족과 함께 살아요.", py: "Gajokgwa hamkke sarayo.", nl: "Ik woon samen met mijn familie." }
      ] },
    { h: "\"En\" tussen werkwoorden is -고",
      p: "In het Nederlands zeg je \"en\" tussen woorden én tussen zinnen. In het Koreaans niet. 하고, 와/과 en (이)랑 staan alleen tussen zelfstandige naamwoorden. Wil je twee handelingen verbinden? Dan plak je -고 aan de stam van het eerste werkwoord.",
      ex: [
        { cn: "빵하고 우유를 먹어요.", py: "Ppanghago uyureul meogeoyo.", nl: "Ik eet brood en (drink) melk." },
        { cn: "빵을 먹고 우유를 마셔요.", py: "Ppangeul meokgo uyureul masyeoyo.", nl: "Ik eet brood en drink melk." }
      ] }
  ],
  mistakes: [
    { wrong: "책와 공책을 샀어요.", right: "책과 공책을 샀어요.", why: "책 eindigt op een 받침 (ㄱ). Dan gebruik je 과." },
    { wrong: "친구과 같이 왔어요.", right: "친구와 같이 왔어요.", why: "친구 eindigt op een klinker. Dan gebruik je 와." },
    { wrong: "동생랑 놀았어요.", right: "동생이랑 놀았어요.", why: "동생 eindigt op een 받침. Dan wordt het 이랑." },
    { wrong: "빵을 먹어요하고 우유를 마셔요.", right: "빵을 먹고 우유를 마셔요.", why: "하고 verbindt alleen zelfstandige naamwoorden. Werkwoorden verbind je met -고." }
  ],
  vocab: [
    ["하고, 와/과, (이)랑", "hago, wa/gwa, (i)rang", "en, met"], ["같이 / 함께", "gachi / hamkke", "samen"], ["빵", "ppang", "brood"],
    ["우유", "uyu", "melk"], ["엄마", "eomma", "mama"], ["가족", "gajok", "familie, gezin"], ["바다", "bada", "zee"],
    ["공책", "gongchaek", "schrift"], ["준비하다", "junbihada", "klaarmaken, voorbereiden"], ["도시", "dosi", "stad"]
  ],
  dialogue: [
    ["A", "어제 뭐 했어요?", "Eoje mwo haesseoyo?", "Wat heb je gisteren gedaan?"],
    ["B", "동생이랑 바다에 갔어요.", "Dongsaengirang badae gasseoyo.", "Ik ben met mijn broertje naar zee geweest."],
    ["A", "바다에서 뭐 먹었어요?", "Badaeseo mwo meogeosseoyo?", "Wat hebben jullie aan zee gegeten?"],
    ["B", "회하고 라면을 먹었어요.", "Hoehago ramyeoneul meogeosseoyo.", "We hebben rauwe vis en ramyeon gegeten."],
    ["A", "좋아요! 저도 친구하고 같이 가고 싶어요.", "Joayo! Jeodo chinguhago gachi gago sipeoyo.", "Leuk! Ik wil ook met een vriend gaan."],
    ["B", "다음에 우리 같이 가요.", "Daeume uri gachi gayo.", "Laten we de volgende keer samen gaan."]
  ],
  reading: {
    title: "우리 가족의 주말",
    lines: [
      { cn: "우리 가족은 아빠, 엄마, 오빠와 저, 네 명이에요.", py: "Uri gajogeun appa, eomma, oppawa jeo, ne myeongieyo.", nl: "Mijn gezin bestaat uit vier personen: papa, mama, mijn oudere broer en ik." },
      { cn: "아빠와 엄마는 회사원이에요.", py: "Appawa eommaneun hoesawonieyo.", nl: "Papa en mama werken bij een bedrijf." },
      { cn: "오빠는 대학생이에요.", py: "Oppaneun daehaksaengieyo.", nl: "Mijn broer studeert aan de universiteit." },
      { cn: "주말에 우리는 함께 산에 가요.", py: "Jumare urineun hamkke sane gayo.", nl: "In het weekend gaan we samen de bergen in." },
      { cn: "엄마는 김밥과 과일을 준비해요.", py: "Eommaneun gimbapgwa gwaireul junbihaeyo.", nl: "Mama maakt kimbap en fruit klaar." },
      { cn: "아빠는 물과 커피를 가져가요.", py: "Appaneun mulgwa keopireul gajyeogayo.", nl: "Papa neemt water en koffie mee." },
      { cn: "산에서 저는 오빠와 사진을 찍어요.", py: "Saneseo jeoneun oppawa sajineul jjigeoyo.", nl: "In de bergen maak ik foto's met mijn broer." },
      { cn: "가족과 함께 있어요. 그래서 주말이 정말 즐거워요.", py: "Gajokgwa hamkke isseoyo. Geuraeseo jumari jeongmal jeulgeowoyo.", nl: "Ik ben samen met mijn gezin. Daarom is het weekend echt leuk." }
    ],
    questions: [
      { type: "mc", q: "Wat maakt mama klaar?",
        options: ["Kimbap en fruit.", "Water en koffie.", "Kimbap en koffie.", "Fruit en water."], answer: 0,
        why: ["Goed: 엄마는 김밥과 과일을 준비해요.", "Water en koffie neemt papa mee.", "Koffie neemt papa mee, niet mama.", "Water neemt papa mee."] },
      { type: "mc", q: "Met wie maakt de schrijver foto's?",
        options: ["Met haar oudere broer.", "Met haar moeder.", "Met haar vader.", "Met een vriendin."], answer: 0,
        why: ["Goed: 오빠와 사진을 찍어요.", "Mama maakt het eten klaar. Er staat 오빠와.", "Papa neemt drinken mee. Er staat 오빠와.", "Er komt geen vriendin in de tekst voor."] },
      { type: "mc", q: "Waarom staat er 김밥과 maar 오빠와?",
        options: ["김밥 eindigt op een 받침, 오빠 op een klinker.", "김밥 is een ding, 오빠 is een persoon.", "과 betekent \"en\", 와 betekent \"met\".", "과 is spreektaal, 와 is schrijftaal."], answer: 0,
        why: ["Goed: 과 na een 받침, 와 na een klinker.", "Het verschil zit in de klank, niet in ding of persoon.", "와 en 과 betekenen allebei \"en\" en \"met\".", "와 en 과 zijn allebei schrijftaal. Het verschil is de klank."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Een boek en een schrift\" in een geschreven tekst:",
      options: ["책과 공책", "책와 공책", "책이과 공책", "책고 공책"], answer: 0,
      why: ["Goed: 책 eindigt op een 받침, dus 과.", "와 komt na een klinker. 책 eindigt op ㄱ.", "Bij 과 komt geen 이 ervoor.", "-고 verbindt werkwoorden, geen zelfstandige naamwoorden."] },
    { type: "mc", q: "In een opstel: \"Ik ging met mijn vriend naar de bioscoop.\" 친구___ 함께 영화관에 갔어요.",
      options: ["와", "과", "이랑", "고"], answer: 0,
      why: ["Goed: 친구 eindigt op een klinker, dus 와. Dat past bij 함께.", "과 komt na een 받침. 친구 eindigt op een klinker.", "이랑 komt na een 받침, en het is losse spreektaal.", "-고 verbindt werkwoorden, geen personen."] },
    { type: "mc", q: "Je schrijft een formele tekst. Welke vorm voor \"en\" tussen twee woorden past het best?",
      options: ["와/과", "(이)랑", "-고", "도"], answer: 0,
      why: ["Goed: 와/과 is de vorm van de schrijftaal.", "(이)랑 is losse spreektaal.", "-고 verbindt werkwoorden, geen woorden als \"boek en schrift\".", "도 betekent \"ook\", niet \"en\"."] },
    { type: "mc", q: "Tegen een vriend: \"Ik speelde met mijn vriendin.\" 친구___ 같이 놀았어요.",
      options: ["랑", "이랑", "과", "랑이"], answer: 0,
      why: ["Goed: 친구 eindigt op een klinker, dus 랑.", "이랑 komt na een 받침.", "과 komt na een 받침, en het is schrijftaal.", "De vorm is 랑, zonder 이 erachter."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["빵와 우유를 샀어요.", "빵하고 우유를 샀어요.", "빵과 우유를 샀어요.", "빵이랑 우유를 샀어요."], answer: 0,
      why: ["Goed: deze is fout. 빵 eindigt op een 받침, dus 과.", "Deze klopt: 하고 past na elk woord.", "Deze klopt: 과 na een 받침.", "Deze klopt: 이랑 na een 받침."] },
    { type: "mc", q: "\"Ik eet brood en drink melk.\"",
      options: ["빵을 먹고 우유를 마셔요.", "빵을 먹하고 우유를 마셔요.", "빵을 먹어요하고 우유를 마셔요.", "빵을 먹과 우유를 마셔요."], answer: 0,
      why: ["Goed: twee handelingen verbind je met -고.", "하고 komt niet aan de stam van een werkwoord.", "하고 verbindt geen zinnen of werkwoorden.", "과 verbindt zelfstandige naamwoorden, geen werkwoorden."] },
    { type: "mc", q: "Welke combinatie klinkt het meest formeel?",
      options: ["가족과 함께", "가족이랑 같이", "가족하고 같이", "가족랑 같이"], answer: 0,
      why: ["Goed: 와/과 en 함께 zijn allebei schrijftaal.", "(이)랑 en 같이 zijn spreektaal.", "하고 같이 is gewone spreektaal.", "Dit is fout: na een 받침 wordt het 이랑."] },
    { type: "fill", q: "동생___ 영화를 봤어요. (Ik heb met mijn broertje een film gekeken. Gebruik (이)랑.)", answers: ["이랑"],
      hint: "동생 eindigt op een 받침 (ㅇ).", why: "Na een 받침 wordt (이)랑 → 이랑: 동생이랑." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik ging met mama naar de markt.\"",
      tokens: [["저는", "jeoneun"], ["엄마하고", "eommahago"], ["시장에", "sijange"], ["갔어요", "gasseoyo"]],
      alt: ["저는 시장에 엄마하고 갔어요"] },
    { type: "order", q: "Zet in de goede volgorde: \"Mama heeft brood en melk gekocht.\"",
      tokens: [["엄마가", "eommaga"], ["빵하고", "ppanghago"], ["우유를", "uyureul"], ["샀어요", "sasseoyo"]] },
    { type: "open", q: "Vertaal: \"Ik ga met mijn vriend naar de bioscoop.\"", model: ["친구하고 같이 영화관에 가요.", "친구랑 영화관에 가요.", "저는 친구와 함께 영화관에 가요."],
      tip: "Check: 친구 eindigt op een klinker: 하고, 랑 of 와. Kies 같이 bij spreektaal en 함께 bij 와." },
    { type: "open", q: "Vertaal: \"Koffie en thee, alstublieft.\" (차 = thee)", model: ["커피하고 차 주세요.", "커피랑 차 주세요."],
      tip: "Check: 하고 of 랑 tussen de twee dingen. 와 is te formeel voor een bestelling." }
  ],
  review: [
    { type: "mc", q: "In een folder: \"Seoul en Busan\"",
      options: ["서울과 부산", "서울와 부산", "서울고 부산", "서울이과 부산"], answer: 0,
      why: ["Goed: 서울 eindigt op een 받침 (ㄹ), dus 과.", "와 komt na een klinker. 서울 eindigt op ㄹ.", "-고 verbindt werkwoorden, geen namen.", "Bij 과 komt geen 이 ervoor."] },
    { type: "mc", q: "Tegen een vriend: \"Ik praat met mijn zus.\" 언니___ 이야기해요.",
      options: ["랑", "이랑", "과", "가"], answer: 0,
      why: ["Goed: 언니 eindigt op een klinker, dus 랑.", "이랑 komt na een 받침.", "과 komt na een 받침, en het is schrijftaal.", "가 maakt 언니 het onderwerp: dan praat je zus, niet jij met haar."] },
    { type: "mc", q: "\"Ik drink koffie en lees een boek.\"",
      options: ["커피를 마시고 책을 읽어요.", "커피를 마시하고 책을 읽어요.", "커피를 마시와 책을 읽어요.", "커피를 마시랑 책을 읽어요."], answer: 0,
      why: ["Goed: twee handelingen verbind je met -고.", "하고 komt niet aan de stam van een werkwoord.", "와 verbindt zelfstandige naamwoorden, geen werkwoorden.", "랑 verbindt zelfstandige naamwoorden, geen werkwoorden."] }
  ]
})
