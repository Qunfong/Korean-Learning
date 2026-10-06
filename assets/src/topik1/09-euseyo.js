({
  id: "09", slug: "euseyo", title: "-(으)세요", sub: "Beleefd vragen en verzoeken",
  canDo: "Je kunt nu iemand beleefd iets vragen te doen, en een oudere of onbekende beleefd een vraag stellen, met -(으)세요.",
  guess: {
    q: "Je biedt een oudere vrouw een stoel aan: \"Gaat u hier zitten.\" (앉다) Welke zin klopt, denk je?",
    options: ["여기 앉으세요.", "여기 앉세요.", "여기 앉아세요.", "여기 앉지 마세요."], answer: 0,
    why: ["Goed: 앉 eindigt op een 받침, dus 으세요.", "Na een 받침 moet er 으 tussen: 앉으세요.", "-(으)세요 komt aan de kale stam, niet aan 앉아.", "-지 마세요 betekent \"doe het niet\": ga hier niet zitten."]
  },
  problem: "In het Nederlands zeg je \"u\" en \"alstublieft\" om beleefd te zijn. In het Koreaans zit de beleefdheid in de uitgang van het werkwoord. Met -(으)세요 vraag je iemand beleefd iets te doen. Met dezelfde vorm stel je een beleefde vraag aan een oudere of onbekende.",
  pattern: [
    { l: "waar", v: "여기", c: 3 }, { l: "stam", v: "앉", c: 4 }, { l: "-(으)세요", v: "으세요", c: 2, key: true }
  ],
  patternCap: "Stam op klinker + 세요 (가세요) · stam op 받침 + 으세요 (읽으세요) · ㄹ-stam: ㄹ valt weg + 세요 (사세요)",
  rules: [
    "Stam eindigt op een klinker: + 세요. 가다 wordt 가세요, 오다 wordt 오세요.",
    "Stam eindigt op een 받침: + 으세요. 읽다 wordt 읽으세요, 앉다 wordt 앉으세요.",
    "Stam eindigt op ㄹ: de ㄹ valt weg, + 세요. 살다 wordt 사세요, 만들다 wordt 만드세요.",
    "Een punt is een verzoek: 가세요. Een vraagteken is een beleefde vraag: 가세요?",
    "Uitzonderingen: 먹다 en 마시다 worden 드세요, 자다 wordt 주무세요, 있다 (ergens zijn) wordt 계세요."
  ],
  pitfall: "-(으)세요 toont respect voor een ander. Gebruik het nooit over jezelf: 제가 가세요 is fout. Over jezelf zeg je 제가 가요.",
  examples: [
    { cn: "여기 앉으세요.", py: "Yeogi anjeuseyo.", nl: "Gaat u hier zitten." },
    { cn: "이 책을 읽으세요.", py: "I chaegeul ilgeuseyo.", nl: "Leest u dit boek." },
    { cn: "어디 가세요?", py: "Eodi gaseyo?", nl: "Waar gaat u heen?" },
    { cn: "맛있게 드세요.", py: "Masitge deuseyo.", nl: "Eet smakelijk." }
  ],
  nuance: [
    { h: "Verzoek of vraag? Luister naar de toon",
      p: "Het verzoek en de vraag hebben precies dezelfde vorm. Bij een verzoek gaat je stem omlaag en schrijf je een punt. Bij een vraag gaat je stem omhoog en schrijf je een vraagteken. Ook een gewone mededeling over een oudere kan zo: 할머니는 시골에 사세요.",
      ex: [
        { cn: "지금 가세요.", py: "Jigeum gaseyo.", nl: "Gaat u nu." },
        { cn: "지금 가세요?", py: "Jigeum gaseyo?", nl: "Gaat u nu?" }
      ] },
    { h: "-(으)세요? of -아/어요?",
      p: "Aan een vriend of klasgenoot vraag je met -아/어요: 뭐 해요? Aan een leraar, een oudere of een klant gebruik je -(으)세요: 뭐 하세요? Zo toon je respect voor de persoon die iets doet. Over jezelf antwoord je altijd zonder 세: 공부해요.",
      ex: [
        { cn: "민수 씨, 뭐 해요?", py: "Minsu ssi, mwo haeyo?", nl: "Minsu, wat doe je?" },
        { cn: "선생님, 뭐 하세요?", py: "Seonsaengnim, mwo haseyo?", nl: "Meneer, wat doet u?" }
      ] },
    { h: "Speciale woorden: 드세요, 주무세요, 계세요",
      p: "Sommige werkwoorden hebben een eigen beleefd woord. Voor eten en drinken zeg je 드세요, voor slapen 주무세요. Bij afscheid zeg je tegen wie weggaat 안녕히 가세요. Tegen wie blijft zeg je 안녕히 계세요.",
      ex: [
        { cn: "안녕히 주무세요.", py: "Annyeonghi jumuseyo.", nl: "Slaap lekker. (beleefd)" },
        { cn: "안녕히 계세요.", py: "Annyeonghi gyeseyo.", nl: "Tot ziens. (tegen iemand die blijft)" }
      ] },
    { h: "Iets niet doen: -지 마세요",
      p: "Wil je beleefd vragen iets NIET te doen? Dan gebruik je stam + 지 마세요. Je ziet dit veel op bordjes. Hier is er geen klinkerregel: 찍지 마세요, 가지 마세요.",
      ex: [
        { cn: "여기에서 사진을 찍지 마세요.", py: "Yeogieseo sajineul jjikji maseyo.", nl: "Maakt u hier geen foto's." }
      ] }
  ],
  mistakes: [
    { wrong: "여기 앉세요.", right: "여기 앉으세요.", why: "앉 eindigt op een 받침. Dan moet er 으 tussen." },
    { wrong: "서울에 살으세요?", right: "서울에 사세요?", why: "Bij een ㄹ-stam valt de ㄹ weg, en komt er geen 으." },
    { wrong: "할머니, 많이 먹으세요.", right: "할머니, 많이 드세요.", why: "Voor eten tegen een oudere is het beleefde woord 드세요." },
    { wrong: "저는 지금 집에 가세요.", right: "저는 지금 집에 가요.", why: "-(으)세요 is respect voor een ander. Over jezelf gebruik je het niet." }
  ],
  vocab: [
    ["-(으)세요", "-(eu)seyo", "(beleefd verzoek of beleefde vraag)"], ["앉다", "anjda", "zitten, gaan zitten"], ["드시다", "deusida", "eten, drinken (beleefd)"],
    ["주무시다", "jumusida", "slapen (beleefd)"], ["계시다", "gyesida", "zijn, blijven (beleefd)"], ["들어오다", "deureooda", "binnenkomen"],
    ["기다리다", "gidarida", "wachten"], ["조용히", "joyonghi", "stil, rustig"], ["밖", "bak", "buiten"], ["질문", "jilmun", "vraag"]
  ],
  dialogue: [
    ["A", "어서 오세요. 들어오세요.", "Eoseo oseyo. Deureooseyo.", "Welkom. Komt u binnen."],
    ["B", "감사합니다.", "Gamsahamnida.", "Dank u wel."],
    ["A", "여기 앉으세요. 커피 드세요?", "Yeogi anjeuseyo. Keopi deuseyo?", "Gaat u hier zitten. Drinkt u koffie?"],
    ["B", "네, 감사합니다.", "Ne, gamsahamnida.", "Ja, graag."],
    ["A", "잠깐만 기다리세요.", "Jamkkanman gidariseyo.", "Wacht u even."],
    ["B", "네, 천천히 하세요.", "Ne, cheoncheonhi haseyo.", "Ja, doet u rustig aan."]
  ],
  reading: {
    title: "도서관 안내",
    lines: [
      { cn: "이곳은 도서관이에요.", py: "Igoseun dogwanieyo.", nl: "Dit is de bibliotheek." },
      { cn: "도서관은 아침 아홉 시에 문을 열어요.", py: "Dogwaneun achim ahop sie muneul yeoreoyo.", nl: "De bibliotheek gaat om negen uur 's ochtends open." },
      { cn: "도서관에서는 조용히 하세요.", py: "Dogwaneseoneun joyonghi haseyo.", nl: "Weest u stil in de bibliotheek." },
      { cn: "전화는 밖에서 하세요.", py: "Jeonhwaneun bakkeseo haseyo.", nl: "Belt u buiten." },
      { cn: "음식은 일 층 카페에서 드세요.", py: "Eumsigeun il cheung kapeeseo deuseyo.", nl: "Eet u in het café op de begane grond." },
      { cn: "책은 여기에서 읽으세요.", py: "Chaegeun yeogieseo ilgeuseyo.", nl: "Leest u de boeken hier." },
      { cn: "질문이 있으세요?", py: "Jilmuni isseuseyo?", nl: "Heeft u een vraag?" },
      { cn: "그럼 안내 데스크에 오세요.", py: "Geureom annae deseukeue oseyo.", nl: "Komt u dan naar de informatiebalie." }
    ],
    questions: [
      { type: "mc", q: "Waar mag je eten?",
        options: ["In het café op de begane grond.", "In de leeszaal.", "Buiten.", "Bij de informatiebalie."], answer: 0,
        why: ["Goed: 음식은 일 층 카페에서 드세요.", "In de bibliotheek lees je; eten doe je in het café.", "Buiten bel je: 전화는 밖에서 하세요.", "Naar de balie ga je met een vraag."] },
      { type: "mc", q: "Wat moet je doen als je wilt bellen?",
        options: ["Naar buiten gaan.", "Naar het café gaan.", "Naar de balie gaan.", "Zachtjes bellen in de bibliotheek."], answer: 0,
        why: ["Goed: 전화는 밖에서 하세요.", "Het café is voor eten.", "De balie is voor vragen.", "Er staat dat je buiten belt, niet binnen."] },
      { type: "mc", q: "질문이 있으세요? Wat doet -(으)세요 hier?",
        options: ["Het maakt een beleefde vraag aan de lezer.", "Het geeft een verzoek: \"Heb een vraag.\"", "Het zegt iets over de schrijver zelf.", "Het maakt de zin verleden tijd."], answer: 0,
        why: ["Goed: met een vraagteken is -(으)세요 een beleefde vraag.", "Met een vraagteken is het geen verzoek, maar een vraag.", "-(으)세요 gebruik je nooit over jezelf.", "Verleden tijd zou 있으셨어요 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Leest u dit boek.\" (읽다)",
      options: ["이 책을 읽으세요.", "이 책을 읽세요.", "이 책을 읽어세요.", "이 책을 읽지 마세요."], answer: 0,
      why: ["Goed: 읽 eindigt op een 받침, dus 으세요.", "Na een 받침 moet er 으 tussen.", "-(으)세요 komt aan de kale stam, niet aan 읽어.", "-지 마세요 betekent \"lees het niet\"."] },
    { type: "mc", q: "Je vraagt een oudere buurman: \"Waar gaat u heen?\"",
      options: ["어디 가세요?", "어디 가으세요?", "어디 갔세요?", "어디에서 가세요?"], answer: 0,
      why: ["Goed: 가 eindigt op een klinker, dus 세요.", "Na een klinker komt er geen 으.", "-(으)세요 komt aan de kale stam, niet aan 갔.", "어디에서 vraagt vanwaar hij vertrekt, niet waarheen."] },
    { type: "mc", q: "Tegen je oma: \"Eet smakelijk.\"",
      options: ["할머니, 맛있게 드세요.", "할머니, 맛있게 드으세요.", "할머니, 맛있게 드셨어요.", "할머니, 맛있게 들세요."], answer: 0,
      why: ["Goed: het beleefde woord voor eten is 드세요.", "드 eindigt op een klinker. Er komt geen 으.", "드셨어요 is verleden tijd: \"u heeft gegeten\".", "De vorm is 드세요, zonder ㄹ."] },
    { type: "mc", q: "Je gaat weg bij een vriendin thuis. Haar moeder blijft. Wat zeg je?",
      options: ["안녕히 계세요.", "안녕히 가세요.", "안녕히 주무세요.", "안녕히 드세요."], answer: 0,
      why: ["Goed: tegen wie blijft zeg je 안녕히 계세요.", "안녕히 가세요 zeg je tegen wie weggaat.", "안녕히 주무세요 betekent \"slaap lekker\".", "드세요 is eten of drinken. Dat past niet bij afscheid."] },
    { type: "mc", q: "\"Waar woont u?\" (살다)",
      options: ["어디에 사세요?", "어디에 살으세요?", "어디에 살세요?", "어디에 사으세요?"], answer: 0,
      why: ["Goed: bij een ㄹ-stam valt de ㄹ weg, dan 세요.", "Bij een ㄹ-stam komt er geen 으, en valt ㄹ weg.", "Voor 세 valt de ㄹ weg: 사세요.", "Na het wegvallen van ㄹ komt er geen 으."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["제가 지금 가세요.", "선생님이 지금 가세요.", "지금 가세요?", "여기 앉으세요."], answer: 0,
      why: ["Goed: deze is fout. Over jezelf gebruik je geen -(으)세요.", "Deze klopt: respect voor de leraar die gaat.", "Deze klopt: een beleefde vraag.", "Deze klopt: een beleefd verzoek."] },
    { type: "mc", q: "Tegen je leraar: \"Wat doet u?\"",
      options: ["선생님, 뭐 하세요?", "선생님, 뭐 해세요?", "선생님, 뭐 하으세요?", "선생님, 뭐 했세요?"], answer: 0,
      why: ["Goed: stam 하 + 세요.", "-(으)세요 komt aan de stam 하, niet aan 해.", "하 eindigt op een klinker. Er komt geen 으.", "-(으)세요 komt aan de kale stam, niet aan 했."] },
    { type: "fill", q: "여기에 이름을 쓰___. (Schrijft u hier uw naam.)", answers: ["세요"],
      hint: "쓰 eindigt op een klinker.", why: "Na een klinker komt 세요: 쓰세요." },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn oma woont op het platteland.\"",
      tokens: [["우리", "uri"], ["할머니는", "halmeonineun"], ["시골에", "sigore"], ["사세요", "saseyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Meneer, neemt u deze koffie.\"",
      tokens: [["선생님,", "seonsaengnim,"], ["이", "i"], ["커피", "keopi"], ["드세요", "deuseyo"]] },
    { type: "open", q: "Vertaal: \"Gaat u hier zitten.\"", model: ["여기 앉으세요.", "여기에 앉으세요.", "이쪽에 앉으세요."],
      tip: "Check: 앉 heeft een 받침, dus 으세요." },
    { type: "open", q: "Vertaal: \"Waar werkt u?\"", model: ["어디에서 일하세요?", "어디서 일하세요?"],
      tip: "Check: werken is een handeling, dus 어디에서. Stam 일하 + 세요?" }
  ],
  review: [
    { type: "mc", q: "\"Doet u de deur dicht.\" (닫다)",
      options: ["문을 닫으세요.", "문을 닫세요.", "문을 닫아세요.", "문을 닫지 마세요."], answer: 0,
      why: ["Goed: 닫 eindigt op een 받침, dus 으세요.", "Na een 받침 moet er 으 tussen.", "-(으)세요 komt aan de kale stam, niet aan 닫아.", "-지 마세요 betekent \"doe hem niet dicht\"."] },
    { type: "mc", q: "Tegen een klant: \"Drinkt u thee?\"",
      options: ["차 드세요?", "차 드으세요?", "차 드셨어요?", "차 들세요?"], answer: 0,
      why: ["Goed: het beleefde woord voor drinken is 드세요.", "드 eindigt op een klinker. Er komt geen 으.", "드셨어요 is verleden tijd: \"heeft u gedronken?\".", "De vorm is 드세요, zonder ㄹ."] },
    { type: "mc", q: "\"Wat maakt u?\" (만들다)",
      options: ["뭐 만드세요?", "뭐 만들으세요?", "뭐 만들세요?", "뭐 만드으세요?"], answer: 0,
      why: ["Goed: bij een ㄹ-stam valt de ㄹ weg, dan 세요.", "Bij een ㄹ-stam komt er geen 으, en valt ㄹ weg.", "Voor 세 valt de ㄹ weg: 만드세요.", "Na het wegvallen van ㄹ komt er geen 으."] }
  ]
})
