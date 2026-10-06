({
  id: "03", slug: "ayo-eoyo", title: "-아요/어요", sub: "Beleefde tegenwoordige tijd",
  canDo: "Je kunt nu werkwoorden beleefd vervoegen in de tegenwoordige tijd, met -아요, -어요 en 해요.",
  guess: {
    q: "먹다 betekent \"eten\". \"Ik eet brood.\" Welke zin klopt, denk je?",
    options: ["저는 빵을 먹어요.", "저는 빵을 먹아요.", "저는 빵을 먹해요.", "저는 빵을 먹으요."], answer: 0,
    why: ["Goed: de klinker van 먹 is ㅓ, dus 어요.", "아요 komt alleen na ㅏ of ㅗ. De klinker van 먹 is ㅓ.", "해요 is alleen voor werkwoorden op 하다.", "으요 bestaat niet. Na 먹 komt 어요."]
  },
  problem: "Een Koreaans werkwoord in het woordenboek eindigt op 다: 가다, 먹다. Zo praat je niet. In beleefde spreektaal haal je 다 weg. Aan de stam plak je 아요 of 어요. De laatste klinker van de stam beslist welke.",
  pattern: [
    { l: "stam", v: "먹", c: 4 }, { l: "-아요/어요", v: "어요", c: 2, key: true }
  ],
  patternCap: "Stam + 아요 (na ㅏ of ㅗ) · stam + 어요 (andere klinkers) · 하다 → 해요",
  rules: [
    "Is de laatste klinker van de stam ㅏ of ㅗ? Dan 아요: 좋다 → 좋아요, 살다 → 살아요.",
    "Bij andere klinkers komt 어요: 먹다 → 먹어요, 읽다 → 읽어요.",
    "Eindigt de stam op een klinker? Dan smelten ze samen: 가다 → 가요, 오다 → 와요, 마시다 → 마셔요, 배우다 → 배워요.",
    "Alles met 하다 wordt 해요: 공부하다 → 공부해요.",
    "Bijvoeglijke werkwoorden gaan net zo: 좋다 → 좋아요, 크다 → 커요. Je hebt geen woord voor \"is\" nodig."
  ],
  pitfall: "Zeg niet 하아요 of 하어요. 하다 heeft een eigen vorm: 해요. Een vraag heeft dezelfde vorm; alleen je toon gaat omhoog.",
  examples: [
    { cn: "저는 서울에 살아요.", py: "Jeoneun Seoure sarayo.", nl: "Ik woon in Seoel." },
    { cn: "오늘 날씨가 좋아요.", py: "Oneul nalssiga joayo.", nl: "Het weer is vandaag goed." },
    { cn: "동생이 우유를 마셔요.", py: "Dongsaengi uyureul masyeoyo.", nl: "Mijn broertje drinkt melk." },
    { cn: "저는 매일 한국어를 공부해요.", py: "Jeoneun maeil hangugeoreul gongbuhaeyo.", nl: "Ik studeer elke dag Koreaans." }
  ],
  nuance: [
    { h: "-아요/어요 of -습니다?",
      p: "Beide zijn beleefd en betekenen hetzelfde. -아요/어요 is de gewone, vriendelijke vorm voor gesprekken met onbekenden, collega's en winkelpersoneel. -습니다/-ㅂ니다 is formeler. Je hoort het in het nieuws, bij presentaties en in aankondigingen. Gebruik in een gewoon gesprek -아요/어요.",
      ex: [
        { cn: "저는 학교에 가요.", py: "Jeoneun hakgyoe gayo.", nl: "Ik ga naar school. (beleefd, gesprek)" },
        { cn: "저는 학교에 갑니다.", py: "Jeoneun hakgyoe gamnida.", nl: "Ik ga naar school. (formeel)" }
      ] },
    { h: "Eén vorm, vier functies",
      p: "Dezelfde vorm kan een mededeling, een vraag, een voorstel of een vriendelijk verzoek zijn. Je toon en de situatie maken het verschil. Met een stijgende toon is het een vraag. Met 같이 (samen) is het vaak een voorstel.",
      ex: [
        { cn: "같이 가요?", py: "Gachi gayo?", nl: "Gaan we samen?" },
        { cn: "같이 가요!", py: "Gachi gayo!", nl: "Laten we samen gaan!" }
      ] },
    { h: "Bijvoeglijke werkwoorden: geen 이에요",
      p: "Woorden als 좋다 (goed), 크다 (groot) en 바쁘다 (druk) zijn in het Koreaans werkwoorden. Je vervoegt ze direct met -아요/어요. Zet er geen 이에요 achter. 이에요 gebruik je alleen na een zelfstandig naamwoord: 학생이에요.",
      ex: [
        { cn: "이 가방은 커요.", py: "I gabangeun keoyo.", nl: "Deze tas is groot." }
      ] }
  ],
  mistakes: [
    { wrong: "빵을 먹아요.", right: "빵을 먹어요.", why: "De klinker van 먹 is ㅓ. Dan komt 어요, niet 아요." },
    { wrong: "한국어를 공부하아요.", right: "한국어를 공부해요.", why: "하다 heeft een eigen vorm: 해요." },
    { wrong: "학교에 가아요.", right: "학교에 가요.", why: "Eindigt de stam op ㅏ, dan smelt 아 erin weg: 가요." },
    { wrong: "날씨가 좋이에요.", right: "날씨가 좋아요.", why: "좋다 is zelf een werkwoord. Je vervoegt het, zonder 이에요." }
  ],
  vocab: [
    ["-아요/어요", "-ayo/eoyo", "(beleefde uitgang, tegenwoordige tijd)"], ["가다", "gada", "gaan"], ["오다", "oda", "komen"],
    ["살다", "salda", "wonen, leven"], ["좋다", "jota", "goed, fijn"], ["배우다", "baeuda", "leren"],
    ["쉬다", "swida", "rusten"], ["공부하다", "gongbuhada", "studeren"], ["날씨", "nalssi", "weer"], ["주말", "jumal", "weekend"]
  ],
  dialogue: [
    ["A", "주말에 뭐 해요?", "Jumare mwo haeyo?", "Wat doe je in het weekend?"],
    ["B", "친구를 만나요. 같이 영화를 봐요.", "Chingureul mannayo. Gachi yeonghwareul bwayo.", "Ik zie een vriend. We kijken samen een film."],
    ["A", "어디에서 만나요?", "Eodieseo mannayo?", "Waar spreken jullie af?"],
    ["B", "학교 앞에서 만나요. 수진 씨는요?", "Hakgyo apeseo mannayo. Sujin ssineunyo?", "Voor de school. En jij, Sujin?"],
    ["A", "저는 집에서 쉬어요. 그리고 책을 읽어요.", "Jeoneun jibeseo swieoyo. Geurigo chaegeul ilgeoyo.", "Ik rust thuis. En ik lees een boek."]
  ],
  reading: {
    title: "제 일주일",
    lines: [
      { cn: "저는 대학생이에요.", py: "Jeoneun daehaksaengieyo.", nl: "Ik ben student." },
      { cn: "월요일부터 금요일까지 학교에 가요.", py: "Woryoilbuteo geumyoilkkaji hakgyoe gayo.", nl: "Van maandag tot vrijdag ga ik naar school." },
      { cn: "학교에서 한국어를 배워요.", py: "Hakgyoeseo hangugeoreul baewoyo.", nl: "Op school leer ik Koreaans." },
      { cn: "점심에는 친구하고 밥을 먹어요.", py: "Jeomsimeneun chinguhago babeul meogeoyo.", nl: "'s Middags eet ik met een vriend." },
      { cn: "저녁에는 도서관에서 공부해요.", py: "Jeonyeogeneun doseogwaneseo gongbuhaeyo.", nl: "'s Avonds studeer ik in de bibliotheek." },
      { cn: "주말에는 집에서 쉬어요.", py: "Jumareneun jibeseo swieoyo.", nl: "In het weekend rust ik thuis." },
      { cn: "가끔 공원에서 운동해요.", py: "Gakkeum gongwoneseo undonghaeyo.", nl: "Soms sport ik in het park." },
      { cn: "조금 바빠요.", py: "Jogeum bappayo.", nl: "Ik heb het een beetje druk." },
      { cn: "그래도 재미있어요.", py: "Geuraedo jaemiisseoyo.", nl: "Toch is het leuk." }
    ],
    questions: [
      { type: "mc", q: "Waar studeert de schrijver 's avonds?",
        options: ["In de bibliotheek.", "Thuis.", "In het park.", "In een café."], answer: 0,
        why: ["Goed: 저녁에는 도서관에서 공부해요.", "Thuis rust de schrijver, in het weekend.", "In het park sport de schrijver soms.", "Een café staat niet in de tekst."] },
      { type: "mc", q: "Wat doet de schrijver in het weekend?",
        options: ["Thuis rusten, en soms sporten in het park.", "Naar school gaan.", "In de bibliotheek studeren.", "Met een vriend lunchen op school."], answer: 0,
        why: ["Goed: 주말에는 집에서 쉬어요. 가끔 공원에서 운동해요.", "Naar school gaat de schrijver van maandag tot vrijdag.", "De bibliotheek hoort bij de avonden door de week.", "Dat gebeurt door de week, 's middags."] },
      { type: "mc", q: "학교에서 한국어를 배워요. Welke woordenboekvorm hoort bij 배워요?",
        options: ["배우다: 우 + 어요 smelt samen tot 워요.", "배다: de stam is 배, plus 워요.", "배워다: je haalt alleen 요 weg.", "배우하다: een werkwoord met 하다."], answer: 0,
        why: ["Goed: 배우다 (leren) → 배워요.", "워 komt van 우 + 어. De stam is 배우.", "De woordenboekvorm is stam + 다: 배우다.", "Werkwoorden met 하다 eindigen op 해요, niet op 워요."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik ga naar school.\" (가다)",
      options: ["학교에 가요.", "학교에 가아요.", "학교에 가어요.", "학교에 갔어요."], answer: 0,
      why: ["Goed: 가 + 아요 smelt samen tot 가요.", "Twee keer ㅏ smelt samen. Je zegt 가요.", "De klinker is ㅏ, dus 아요, en dat smelt samen tot 가요.", "갔어요 is verleden tijd: \"ik ging\"."] },
    { type: "mc", q: "\"Ik studeer Koreaans.\" (공부하다)",
      options: ["한국어를 공부해요.", "한국어를 공부하아요.", "한국어를 공부하어요.", "한국어가 공부해요."], answer: 0,
      why: ["Goed: 하다 wordt 해요.", "하다 heeft een eigen vorm: 해요, niet 하아요.", "하다 heeft een eigen vorm: 해요, niet 하어요.", "Wat je studeert is het lijdend voorwerp: 한국어를."] },
    { type: "mc", q: "\"Het weer is goed.\" (좋다)",
      options: ["날씨가 좋아요.", "날씨가 좋어요.", "날씨가 좋해요.", "날씨가 좋았어요."], answer: 0,
      why: ["Goed: de klinker van 좋 is ㅗ, dus 아요.", "Na ㅗ komt 아요, niet 어요.", "해요 is alleen voor werkwoorden op 하다.", "좋았어요 is verleden tijd: \"het weer was goed\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn vriend woont in Seoel.\"",
      tokens: [["제", "je"], ["친구는", "chinguneun"], ["서울에", "Seoure"], ["살아요", "sarayo"]] },
    { type: "mc", q: "Welke vorm is FOUT?",
      options: ["먹아요", "살아요", "읽어요", "와요"], answer: 0,
      why: ["Goed: deze is fout. De klinker van 먹 is ㅓ, dus 먹어요.", "Deze klopt: 살 heeft ㅏ, dus 아요.", "Deze klopt: 읽 heeft ㅣ, dus 어요.", "Deze klopt: 오 + 아요 smelt samen tot 와요."] },
    { type: "mc", q: "Je leest het weerbericht voor op de radio. Welke zin is het meest formeel?",
      options: ["날씨가 좋습니다.", "날씨가 좋아요.", "날씨가 좋아.", "날씨가 좋어요."], answer: 0,
      why: ["Goed: -습니다 is de formele vorm voor nieuws en aankondigingen.", "Dit is beleefd, maar minder formeel dan -습니다.", "Zonder 요 is het informeel, voor vrienden.", "Na ㅗ komt 아요. 좋어요 bestaat niet."] },
    { type: "mc", q: "Je zegt tegen een collega: 같이 가요! Wat betekent dit?",
      options: ["Laten we samen gaan!", "We zijn samen gegaan!", "Ga niet mee!", "Ik ga alleen!"], answer: 0,
      why: ["Goed: met 같이 en een uitroep is -아요 een voorstel.", "가요 is tegenwoordige tijd. Verleden tijd is 갔어요.", "Er staat geen ontkenning in de zin.", "같이 betekent \"samen\", niet \"alleen\"."] },
    { type: "fill", q: "저는 매일 커피를 ___. (Ik drink elke dag koffie.) (마시다)", answers: ["마셔요"],
      hint: "마시 + 어요: de klinkers smelten samen.", why: "ㅣ + 어 wordt ㅕ: 마시다 → 마셔요." },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn zus leert Koreaans.\"",
      tokens: [["제", "je"], ["언니는", "eonnineun"], ["한국어를", "hangugeoreul"], ["배워요", "baewoyo"]] },
    { type: "open", q: "Vertaal: \"Ik drink thee.\" (마시다)", model: ["저는 차를 마셔요.", "차를 마셔요."],
      tip: "Check: 마시 + 어요 smelt samen tot 마셔요. 차 eindigt op een klinker, dus 를." },
    { type: "open", q: "Vertaal: \"Ik rust thuis.\" (쉬다)", model: ["저는 집에서 쉬어요.", "집에서 쉬어요."],
      tip: "Check: de klinker van 쉬 is ㅟ, dus 어요: 쉬어요. Het werkwoord staat achteraan." }
  ],
  review: [
    { type: "mc", q: "\"Mijn vriend komt.\" (오다)",
      options: ["친구가 와요.", "친구가 오아요.", "친구가 오어요.", "친구가 왔어요."], answer: 0,
      why: ["Goed: 오 + 아요 smelt samen tot 와요.", "ㅗ + 아요 smelt samen. Je zegt 와요.", "Na ㅗ komt 아요, en dat smelt samen tot 와요.", "왔어요 is verleden tijd: \"mijn vriend kwam\"."] },
    { type: "mc", q: "저는 태권도를 ___. (Ik leer taekwondo.) (배우다)",
      options: ["배워요", "배우아요", "배와요", "배웠어요"], answer: 0,
      why: ["Goed: de klinker ㅜ krijgt 어요, en 우 + 어 smelt samen tot 워.", "Na ㅜ komt 어요, niet 아요.", "Na ㅜ komt 어, dus 워, niet 와.", "배웠어요 is verleden tijd: \"ik leerde\"."] },
    { type: "mc", q: "\"Ik woon in Amsterdam.\" (살다)",
      options: ["암스테르담에 살아요.", "암스테르담에 살어요.", "암스테르담에 살해요.", "암스테르담에 사요."], answer: 0,
      why: ["Goed: de klinker van 살 is ㅏ, dus 아요.", "Na ㅏ komt 아요, niet 어요.", "해요 is alleen voor werkwoorden op 하다.", "사요 komt van 사다 en betekent \"kopen\"."] }
  ]
})
