({
  id: "02", slug: "go", title: "-고", sub: "Twee dingen verbinden: en, en dan",
  canDo: "Je kunt nu twee handelingen of eigenschappen verbinden met -고, als opsomming of na elkaar.",
  guess: {
    q: "\"Ik eet en daarna slaap ik.\" Welke zin klopt, denk je?",
    options: ["밥을 먹고 자요.", "밥을 먹어고 자요.", "밥을 먹으고 자요.", "밥을 먹다고 자요."], answer: 0,
    why: ["Goed: je plakt -고 direct op de stam 먹.", "-고 komt direct op de stam, zonder 어.", "-고 krijgt nooit een extra 으, ook niet na een 받침.", "-다고 is een andere vorm. Je haalt -다 eerst weg."]
  },
  problem: "Je wilt twee zinnen aan elkaar koppelen: \"Ik eet en ik slaap.\" Of: \"Het is goedkoop en lekker.\" In het Koreaans zet je geen los woord \"en\" tussen werkwoorden. Je plakt -고 aan de stam van het eerste werkwoord.",
  pattern: [
    { l: "handeling 1", v: "밥을 먹", c: 4 }, { l: "-고", v: "고", c: 2, key: true }, { l: "handeling 2", v: "자요", c: 5 }
  ],
  patternCap: "Stam + 고 + tweede deel: 먹고, 가고, 싸고, 학생이고",
  rules: [
    "-고 komt direct op de stam. Met of zonder 받침 maakt niet uit: 먹고, 보고, 살고.",
    "De tijd staat alleen aan het eind: 어제 밥을 먹고 잤어요.",
    "-고 werkt ook bij bijvoeglijke werkwoorden: 싸고 맛있어요. En bij 이다: 학생이고.",
    "De twee delen mogen een ander onderwerp hebben: 형은 회사원이고 동생은 학생이에요."
  ],
  pitfall: "-고 verbindt werkwoorden, geen zelfstandige naamwoorden. \"Brood en melk\" is 빵하고 우유, niet 빵고 우유.",
  examples: [
    { cn: "저는 아침에 샤워하고 커피를 마셔요.", py: "Jeoneun achime syawohago keopireul masyeoyo.", nl: "'s Ochtends douche ik en drink ik koffie." },
    { cn: "이 식당은 싸고 맛있어요.", py: "I sikdangeun ssago masisseoyo.", nl: "Dit restaurant is goedkoop en lekker." },
    { cn: "어제 친구를 만나고 집에 왔어요.", py: "Eoje chingureul mannago jibe wasseoyo.", nl: "Gisteren zag ik een vriend en daarna kwam ik thuis." },
    { cn: "형은 회사원이고 동생은 학생이에요.", py: "Hyeongeun hoesawonigo dongsaengeun haksaengieyo.", nl: "Mijn oudere broer werkt op kantoor en mijn jongere broer is student." }
  ],
  nuance: [
    { h: "-고 of -아서/어서 bij \"en dan\"?",
      p: "Beide kunnen \"en dan\" betekenen. Met -고 staan de twee handelingen los van elkaar. Met -아서/어서 hoort de tweede handeling bij de eerste: je doet iets op de plek waar je heen ging, of met wat je net maakte. Bij gaan, komen en zitten gebruik je dus -아서/어서.",
      ex: [
        { cn: "학교에 가서 공부해요.", py: "Hakgyoe gaseo gongbuhaeyo.", nl: "Ik ga naar school en studeer daar." },
        { cn: "숙제를 하고 게임을 해요.", py: "Sukjereul hago geimeul haeyo.", nl: "Ik maak mijn huiswerk en daarna game ik." }
      ] },
    { h: "Kleren en vervoer: altijd -고",
      p: "Bij aantrekken (입다, 신다, 쓰다) en instappen (타다) gebruik je -고. De toestand blijft dan duren: je hebt de jas nog aan, je zit nog in de bus. Hier is -아서/어서 fout.",
      ex: [
        { cn: "코트를 입고 나갔어요.", py: "Koteureul ipgo nagasseoyo.", nl: "Ik trok een jas aan en ging naar buiten." },
        { cn: "버스를 타고 회사에 가요.", py: "Beoseureul tago hoesae gayo.", nl: "Ik ga met de bus naar het werk." }
      ] },
    { h: "Opsommen: -고 of 하고?",
      p: "-고 hangt aan een werkwoord of bijvoeglijk werkwoord. Tussen twee zelfstandige naamwoorden gebruik je 하고 (spreektaal) of 와/과 (schrijftaal).",
      ex: [
        { cn: "빵하고 우유를 샀어요.", py: "Ppanghago uyureul sasseoyo.", nl: "Ik heb brood en melk gekocht." },
        { cn: "빵을 사고 우유를 마셨어요.", py: "Ppangeul sago uyureul masyeosseoyo.", nl: "Ik kocht brood en dronk melk." }
      ] }
  ],
  mistakes: [
    { wrong: "빵고 우유를 사요.", right: "빵하고 우유를 사요.", why: "-고 hoort bij werkwoorden. Tussen twee zelfstandige naamwoorden staat 하고." },
    { wrong: "어제 밥을 먹었고 잤어요.", right: "어제 밥을 먹고 잤어요.", why: "Bij \"en daarna\" staat de verleden tijd alleen aan het eind." },
    { wrong: "도서관에 가고 책을 읽어요.", right: "도서관에 가서 책을 읽어요.", why: "Je leest in de bibliotheek. Bij gaan + iets daar doen gebruik je -아서/어서." },
    { wrong: "코트를 입어서 나갔어요.", right: "코트를 입고 나갔어요.", why: "Bij aantrekken gebruik je -고: je hebt de jas nog aan." }
  ],
  vocab: [
    ["-고", "-go", "en, en dan"], ["샤워하다", "syawohada", "douchen"], ["싸다", "ssada", "goedkoop"],
    ["맛있다", "masitda", "lekker"], ["식당", "sikdang", "restaurant"], ["숙제", "sukje", "huiswerk"],
    ["타다", "tada", "instappen, rijden met"], ["배우다", "baeuda", "leren"], ["힘들다", "himdeulda", "zwaar, vermoeiend"], ["바쁘다", "bappeuda", "druk"]
  ],
  dialogue: [
    ["A", "어제 뭐 했어요?", "Eoje mwo haesseoyo?", "Wat heb je gisteren gedaan?"],
    ["B", "도서관에서 공부하고 친구를 만났어요.", "Doseogwaneseo gongbuhago chingureul mannasseoyo.", "Ik heb in de bibliotheek gestudeerd en daarna een vriend gezien."],
    ["A", "친구하고 뭐 했어요?", "Chinguhago mwo haesseoyo?", "Wat hebben jullie gedaan?"],
    ["B", "밥을 먹고 영화를 봤어요.", "Babeul meokgo yeonghwareul bwasseoyo.", "We hebben gegeten en een film gekeken."],
    ["A", "영화는 어땠어요?", "Yeonghwaneun eottaesseoyo?", "Hoe was de film?"],
    ["B", "길고 재미없었어요.", "Gilgo jaemieopseosseoyo.", "Lang en saai."]
  ],
  reading: {
    title: "저의 하루",
    lines: [
      { cn: "저는 아침 일곱 시에 일어나요.", py: "Jeoneun achim ilgop sie ireonayo.", nl: "Ik sta om zeven uur 's ochtends op." },
      { cn: "샤워하고 아침을 먹어요.", py: "Syawohago achimeul meogeoyo.", nl: "Ik douche en eet ontbijt." },
      { cn: "그리고 버스를 타고 학교에 가요.", py: "Geurigo beoseureul tago hakgyoe gayo.", nl: "Daarna ga ik met de bus naar school." },
      { cn: "오전에는 한국어를 배우고 오후에는 도서관에서 공부해요.", py: "Ojeoneneun hangugeoreul baeugo ohuneneun doseogwaneseo gongbuhaeyo.", nl: "'s Ochtends leer ik Koreaans en 's middags studeer ik in de bibliotheek." },
      { cn: "학교 식당은 싸고 맛있어요.", py: "Hakgyo sikdangeun ssago masisseoyo.", nl: "De schoolkantine is goedkoop en lekker." },
      { cn: "저녁에는 아르바이트를 해요.", py: "Jeonyeogeneun areubaiteureul haeyo.", nl: "'s Avonds heb ik een bijbaan." },
      { cn: "일이 조금 힘들고 바빠요.", py: "Iri jogeum himdeulgo bappayo.", nl: "Het werk is een beetje zwaar en druk." },
      { cn: "밤에는 숙제를 하고 열한 시에 자요.", py: "Bameneun sukjereul hago yeolhan sie jayo.", nl: "'s Nachts maak ik mijn huiswerk en om elf uur ga ik slapen." }
    ],
    questions: [
      { type: "mc", q: "Hoe gaat de schrijver naar school?",
        options: ["Met de bus.", "Te voet.", "Met de metro.", "Met de fiets."], answer: 0,
        why: ["Goed: 버스를 타고 학교에 가요.", "Lopen staat niet in de tekst.", "De metro staat niet in de tekst.", "De fiets staat niet in de tekst."] },
      { type: "mc", q: "Hoe is de schoolkantine?",
        options: ["Goedkoop en lekker.", "Duur en lekker.", "Goedkoop maar niet lekker.", "Zwaar en druk."], answer: 0,
        why: ["Goed: 학교 식당은 싸고 맛있어요.", "싸다 betekent goedkoop, niet duur.", "맛있어요 betekent dat het wel lekker is.", "Zwaar en druk gaat over de bijbaan."] },
      { type: "mc", q: "숙제를 하고 열한 시에 자요. Wat betekent -고 hier?",
        options: ["Eerst huiswerk, daarna slapen.", "Huiswerk maken omdat hij moe is.", "Huiswerk maken terwijl hij slaapt.", "Huiswerk maken of slapen."], answer: 0,
        why: ["Goed: -고 laat hier de volgorde zien: eerst het een, dan het ander.", "-고 geeft geen reden. Daarvoor is -아서/어서.", "-고 betekent niet \"terwijl\".", "-고 betekent \"en\", niet \"of\"."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Gisteren heb ik gegeten en ben ik gaan slapen.\" Welke zin klopt?",
      options: ["어제 밥을 먹고 잤어요.", "어제 밥을 먹고 자요.", "어제 밥을 먹어고 잤어요.", "어제 밥을 먹으고 잤어요."], answer: 0,
      why: ["Goed: -고 op de stam, de verleden tijd aan het eind.", "Het gaat over gisteren. Het laatste werkwoord moet in de verleden tijd.", "-고 komt direct op de stam, zonder 어.", "-고 krijgt geen extra 으."] },
    { type: "mc", q: "\"Ik koop brood en melk.\" Welke zin klopt?",
      options: ["빵하고 우유를 사요.", "빵고 우유를 사요.", "빵이고 우유를 사요.", "빵하고 우유을 사요."], answer: 0,
      why: ["Goed: tussen twee zelfstandige naamwoorden staat 하고.", "-고 hoort bij werkwoorden, niet bij 빵.", "빵이고 betekent \"het is brood en\". Dat past hier niet.", "우유 eindigt op een klinker, dus 를, niet 을."] },
    { type: "mc", q: "이 방은 넓___ 깨끗해요. (Deze kamer is ruim en schoon.)",
      options: ["고", "어고", "으고", "하고"], answer: 0,
      why: ["Goed: 넓 + 고 = 넓고.", "-고 komt direct op de stam, zonder 어.", "-고 krijgt geen extra 으, ook niet na een 받침.", "넓다 is geen 하다-werkwoord. 하고 past hier niet."] },
    { type: "order", q: "Zet in de goede volgorde: \"Die tas is groot en zwaar.\"",
      tokens: [["그", "geu"], ["가방은", "gabangeun"], ["크고", "keugo"], ["무거워요", "mugeowoyo"]] },
    { type: "mc", q: "\"Ik ga naar de bibliotheek en lees daar een boek.\" Welke zin klopt?",
      options: ["도서관에 가서 책을 읽어요.", "도서관에 가고 책을 읽어요.", "도서관에 가어서 책을 읽어요.", "도서관에 갔어서 책을 읽어요."], answer: 0,
      why: ["Goed: je leest op de plek waar je heen ging. Dan gebruik je -아서/어서.", "Met -고 staan de handelingen los. Het boek lees je juist daar.", "가 + 아서 trekt samen tot 가서.", "Voor -아서/어서 komt nooit de verleden tijd."] },
    { type: "mc", q: "\"Ik trek een jas aan en ga naar buiten.\" Welke zin klopt?",
      options: ["코트를 입고 나가요.", "코트를 입어서 나가요.", "코트를 입으고 나가요.", "코트를 입었고 나가요."], answer: 0,
      why: ["Goed: bij aantrekken gebruik je -고. De jas blijft aan.", "Bij kleren aantrekken gebruik je -고, niet -아서/어서.", "-고 krijgt geen extra 으.", "De tijd staat alleen aan het eind, niet op 입-."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["사과고 바나나를 먹어요.", "사과하고 바나나를 먹어요.", "사과를 먹고 바나나도 먹어요.", "이 사과는 싸고 맛있어요."], answer: 0,
      why: ["Goed: deze is fout. Tussen 사과 en 바나나 hoort 하고, geen -고.", "Deze klopt: 하고 verbindt twee zelfstandige naamwoorden.", "Deze klopt: -고 staat op de stam 먹.", "Deze klopt: -고 op het bijvoeglijk werkwoord 싸다."] },
    { type: "fill", q: "저는 키가 크___ 동생은 키가 작아요. (Ik ben lang en mijn jongere broer is klein.)", answers: ["고"],
      hint: "Twee delen met een ander onderwerp verbinden.", why: "크 + 고 = 크고. -고 mag twee delen met een ander onderwerp verbinden." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik neem de bus en ga naar het werk.\"",
      tokens: [["저는", "jeoneun"], ["버스를", "beoseureul"], ["타고", "tago"], ["회사에", "hoesae"], ["가요", "gayo"]],
      alt: ["저는 회사에 버스를 타고 가요"] },
    { type: "open", q: "Vertaal: \"Ik maak mijn huiswerk en daarna kijk ik tv.\"", model: ["숙제를 하고 텔레비전을 봐요.", "저는 숙제를 하고 텔레비전을 봐요."],
      tip: "Check: staat -고 direct op de stam (하고)? En staat de tijd alleen aan het eind (봐요)?" },
    { type: "open", q: "Vertaal: \"Deze telefoon is goedkoop en goed.\"", model: ["이 핸드폰은 싸고 좋아요.", "이 휴대폰은 싸고 좋아요."],
      tip: "Check: 싸 + 고 direct op de stam, en 좋아요 aan het eind." }
  ],
  review: [
    { type: "mc", q: "\"Mijn kamer is klein en donker.\"",
      options: ["제 방은 작고 어두워요.", "제 방은 작아고 어두워요.", "제 방은 작으고 어두워요.", "제 방은 작하고 어두워요."], answer: 0,
      why: ["Goed: 작 + 고 = 작고.", "-고 komt direct op de stam, zonder 아.", "-고 krijgt geen extra 으.", "작다 is geen 하다-werkwoord."] },
    { type: "mc", q: "\"Ik lees een boek en luister naar muziek.\"",
      options: ["책을 읽고 음악을 들어요.", "책을 읽어고 음악을 들어요.", "책을 읽으고 음악을 들어요.", "책을 읽고 음악을 듣어요."], answer: 0,
      why: ["Goed: 읽 + 고, en 듣다 wordt 들어요.", "-고 komt direct op de stam, zonder 어.", "-고 krijgt geen extra 으.", "듣다 is onregelmatig: vóór een klinker wordt ㄷ een ㄹ. Dus 들어요."] },
    { type: "mc", q: "\"Ik was mijn handen en eet.\"",
      options: ["손을 씻고 밥을 먹어요.", "손을 씻어고 밥을 먹어요.", "손을 씻으고 밥을 먹어요.", "손을 씻었고 밥을 먹어요."], answer: 0,
      why: ["Goed: 씻 + 고, en de tijd aan het eind.", "-고 komt direct op de stam, zonder 어.", "-고 krijgt geen extra 으.", "Bij \"en dan\" staat de tijd alleen aan het eind."] }
  ]
})
