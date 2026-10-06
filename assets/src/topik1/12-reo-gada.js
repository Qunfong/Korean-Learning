({
  id: "12", slug: "reo-gada", title: "-(으)러 가다/오다", sub: "Gaan of komen om te ...",
  canDo: "Je kunt nu zeggen waarvoor je ergens heen gaat of komt, met -(으)러 가요 en -(으)러 와요.",
  guess: {
    q: "\"Ik ga naar de bibliotheek om een boek te lenen.\" (빌리다 = lenen) Welke zin klopt, denk je?",
    options: ["도서관에 책을 빌리러 가요.", "도서관에 책을 빌리으러 가요.", "도서관에 책을 빌려러 가요.", "도서관에 책을 빌리고 가요."], answer: 0,
    why: ["Goed: 빌리 eindigt op een klinker, dus 러: 빌리러 가요.", "으러 komt alleen na een 받침. 빌리 eindigt op een klinker.", "러 komt aan de kale stam (빌리), niet aan de 해요-vorm (빌려).", "-고 betekent \"en dan\": eerst lenen, dan gaan. Dat is geen doel."]
  },
  problem: "In het Nederlands zeg je: ik ga naar de markt om fruit te kopen. Het Koreaans plakt het doel aan de stam van het werkwoord met -(으)러. Daarna komt altijd een werkwoord van beweging: 가요 (gaan), 와요 (komen) of 다녀요 (geregeld gaan). Zo zeg je in één zin waarheen je gaat en waarom.",
  pattern: [
    { l: "wat", v: "과일을", c: 1 }, { l: "stam + (으)러", v: "사러", c: 2, key: true }, { l: "waarheen", v: "시장에", c: 3 }, { l: "gaan/komen", v: "가요", c: 4, key: true }
  ],
  patternCap: "Stam + (으)러 + 가다/오다/다니다 (kopen: 사러 가요 · eten: 먹으러 가요 · spelen: 놀러 와요)",
  rules: [
    "Eindigt de stam op een klinker of op ㄹ? Dan plak je 러: 사러, 보러, 놀러, 만들러.",
    "Eindigt de stam op een andere 받침? Dan plak je 으러: 먹으러, 읽으러, 찾으러.",
    "Bij 듣다 en 걷다 wordt ㄷ een ㄹ: 들으러, 걸으러.",
    "Na -(으)러 komt alleen 가다, 오다 of 다니다. Tijd en beleefdheid zitten in dat laatste werkwoord: 먹으러 갔어요, 먹으러 가세요.",
    "De plaats met 에 mag voor of na het doel staan: 식당에 밥 먹으러 가요 en 밥 먹으러 식당에 가요."
  ],
  pitfall: "-(으)러 werkt alleen met gaan en komen. Je zegt niet 한국어를 배우러 공부해요. Na 러 moet 가요, 와요 of 다녀요 komen.",
  examples: [
    { cn: "밥 먹으러 식당에 가요.", py: "Bap meogeureo sikdange gayo.", nl: "Ik ga naar een restaurant om te eten." },
    { cn: "친구가 우리 집에 놀러 왔어요.", py: "Chinguga uri jibe nolleo wasseoyo.", nl: "Mijn vriend kwam bij ons thuis op bezoek." },
    { cn: "옷을 사러 시장에 갔어요.", py: "Oseul sareo sijange gasseoyo.", nl: "Ik ging naar de markt om kleren te kopen." },
    { cn: "한국어를 배우러 학원에 다녀요.", py: "Hangugeoreul baeureo hagwone danyeoyo.", nl: "Ik ga geregeld naar een taalschool om Koreaans te leren." }
  ],
  nuance: [
    { h: "-(으)러 of -(으)려고?",
      p: "Later (rond TOPIK 3) leer je -(으)려고: \"om te, met de bedoeling\". Dat kan bij elk werkwoord. -(으)러 kan alleen met gaan en komen. Wil je zeggen dat je studeert om iets te bereiken? Dan past -(으)러 niet. Voor nu: gaat of komt iemand ergens heen? Gebruik -(으)러.",
      ex: [
        { cn: "한국어를 배우러 한국에 왔어요.", py: "Hangugeoreul baeureo hanguge wasseoyo.", nl: "Ik kwam naar Korea om Koreaans te leren." },
        { cn: "한국어를 배우려고 매일 공부해요.", py: "Hangugeoreul baeuryeogo maeil gongbuhaeyo.", nl: "Ik studeer elke dag om Koreaans te leren." }
      ] },
    { h: "Samen iets gaan doen: 갈까요? en 갑시다",
      p: "Met -(으)러 kun je iemand uitnodigen of iets vragen: 갈까요? (zullen we gaan?), 갑시다 (laten we gaan), 가세요 (gaat u maar). Met -(으)려고 kan dat niet. Daarom hoor je -(으)러 heel vaak in voorstellen.",
      ex: [
        { cn: "커피 마시러 갈까요?", py: "Keopi masireo galkkayo?", nl: "Zullen we koffie gaan drinken?" }
      ] },
    { h: "-(으)러 가요 of -고 가요?",
      p: "Met -(으)러 is de handeling het doel: je gaat ergens heen en doet het daar. Met -고 doe je eerst de handeling en ga je daarna weg. Het verschil is één klank, maar de betekenis is heel anders.",
      ex: [
        { cn: "밥 먹으러 가요.", py: "Bap meogeureo gayo.", nl: "Ik ga eten. (ik ga ergens heen om te eten)" },
        { cn: "밥 먹고 가요.", py: "Bap meokgo gayo.", nl: "Ik eet eerst en ga dan weg." }
      ] }
  ],
  mistakes: [
    { wrong: "한국어를 배우러 공부해요.", right: "한국어를 배우러 학원에 가요.", why: "Na -(으)러 komt alleen 가다, 오다 of 다니다, geen 공부해요." },
    { wrong: "점심을 먹러 가요.", right: "점심을 먹으러 가요.", why: "먹 eindigt op een 받침. Dan wordt het 으러." },
    { wrong: "주말에 놀으러 가요.", right: "주말에 놀러 가요.", why: "Een stam op ㄹ krijgt gewoon 러, zonder 으." },
    { wrong: "수업을 듣으러 학교에 가요.", right: "수업을 들으러 학교에 가요.", why: "Bij 듣다 wordt ㄷ een ㄹ voor een klinker: 들으러." }
  ],
  vocab: [
    ["-(으)러 가다/오다", "-(eu)reo gada/oda", "gaan/komen om te ..."], ["식당", "sikdang", "restaurant"], ["도서관", "doseogwan", "bibliotheek"],
    ["빌리다", "billida", "lenen"], ["놀다", "nolda", "spelen, plezier maken"], ["사다", "sada", "kopen"], ["시장", "sijang", "markt"],
    ["배우다", "baeuda", "leren"], ["학원", "hagwon", "(taal)school, instituut"], ["다니다", "danida", "geregeld gaan naar"]
  ],
  dialogue: [
    ["A", "어디 가요?", "Eodi gayo?", "Waar ga je heen?"],
    ["B", "우체국에 소포를 보내러 가요.", "Ucheguge soporeul bonaereo gayo.", "Naar het postkantoor, om een pakketje te versturen."],
    ["A", "그다음에 뭐 해요?", "Geudaeume mwo haeyo?", "En wat doe je daarna?"],
    ["B", "친구를 만나러 카페에 가요.", "Chingureul mannareo kapee gayo.", "Ik ga naar een café om een vriend te zien."],
    ["A", "저도 커피 마시러 같이 갈까요?", "Jeodo keopi masireo gachi galkkayo?", "Zal ik meegaan om koffie te drinken?"],
    ["B", "좋아요. 같이 가요.", "Joayo. Gachi gayo.", "Goed. Laten we samen gaan."]
  ],
  reading: {
    title: "제 토요일",
    lines: [
      { cn: "토요일 아침에 저는 공원에 운동하러 가요.", py: "Toyoil achime jeoneun gongwone undonghareo gayo.", nl: "Op zaterdagochtend ga ik naar het park om te sporten." },
      { cn: "운동 후에 빵을 사러 빵집에 가요.", py: "Undong hue ppangeul sareo ppangjibe gayo.", nl: "Na het sporten ga ik naar de bakker om brood te kopen." },
      { cn: "점심에는 친구가 우리 집에 놀러 와요.", py: "Jeomsimeneun chinguga uri jibe nolleo wayo.", nl: "Rond de middag komt een vriendin bij mij op bezoek." },
      { cn: "우리는 같이 점심을 만들어요.", py: "Urineun gachi jeomsimeul mandeureoyo.", nl: "We maken samen de lunch." },
      { cn: "오후에는 영화를 보러 영화관에 가요.", py: "Ohueneun yeonghwareul boreo yeonghwagwane gayo.", nl: "'s Middags gaan we naar de bioscoop om een film te zien." },
      { cn: "영화가 아주 재미있어요.", py: "Yeonghwaga aju jaemiisseoyo.", nl: "De film is heel leuk." },
      { cn: "저녁에는 집에서 쉬어요.", py: "Jeonyeogeneun jibeseo swieoyo.", nl: "'s Avonds rust ik thuis uit." },
      { cn: "일요일에는 한국어를 배우러 학원에 가요.", py: "Iryoireneun hangugeoreul baeureo hagwone gayo.", nl: "Op zondag ga ik naar de taalschool om Koreaans te leren." }
    ],
    questions: [
      { type: "mc", q: "Waarom gaat de schrijver naar de bakker?",
        options: ["Om brood te kopen.", "Om te sporten.", "Om een vriendin te zien.", "Om de lunch te maken."], answer: 0,
        why: ["Goed: 빵을 사러 빵집에 가요.", "Sporten doet de schrijver in het park.", "De vriendin komt naar het huis, niet naar de bakker.", "De lunch maken ze samen thuis."] },
      { type: "mc", q: "Wat doet de schrijver op zondag?",
        options: ["Koreaans leren op de taalschool.", "Naar de bioscoop gaan.", "Thuis uitrusten.", "In het park sporten."], answer: 0,
        why: ["Goed: 일요일에는 한국어를 배우러 학원에 가요.", "De bioscoop is op zaterdagmiddag.", "Uitrusten doet de schrijver op zaterdagavond.", "Sporten is op zaterdagochtend."] },
      { type: "mc", q: "친구가 우리 집에 놀러 와요. Wat betekent 놀러 와요 hier?",
        options: ["De vriendin komt langs om samen leuke dingen te doen.", "De vriendin speelt eerst en komt daarna.", "De vriendin wil komen, maar komt niet.", "De vriendin is al gekomen."], answer: 0,
        why: ["Goed: -(으)러 와요 = komen om te ...; 놀다 = plezier maken.", "Eerst iets doen en dan komen is -고 와요.", "Willen is -고 싶어요. Hier komt ze echt.", "와요 is tegenwoordige tijd. Verleden tijd is 왔어요."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik ga naar de bibliotheek om te lezen.\" 책을 ___ 도서관에 가요. (읽다)",
      options: ["읽으러", "읽러", "읽어러", "읽고"], answer: 0,
      why: ["Goed: 읽 eindigt op een 받침, dus 으러.", "Na een 받침 komt 으러, niet 러.", "러 komt aan de kale stam, niet aan de 해요-vorm.", "-고 betekent \"en dan\", niet \"om te\"."] },
    { type: "mc", q: "\"Mijn vriend komt bij mij langs.\" 친구가 우리 집에 ___ 와요. (놀다)",
      options: ["놀러", "놀으러", "노러", "놀아러"], answer: 0,
      why: ["Goed: een stam op ㄹ krijgt gewoon 러.", "Na ㄹ komt geen 으.", "De ㄹ blijft staan voor 러: 놀러.", "러 komt aan de kale stam, niet aan de 해요-vorm."] },
    { type: "mc", q: "\"Ik ga naar school om les te volgen.\" 수업을 ___ 학교에 가요. (듣다)",
      options: ["들으러", "듣으러", "듣러", "들러"], answer: 0,
      why: ["Goed: bij 듣다 wordt ㄷ een ㄹ voor 으: 들으러.", "Bij 듣다 verandert ㄷ in ㄹ voor een klinker.", "Na een 받침 komt 으러, en ㄷ wordt ㄹ.", "들러 komt van een ander werkwoord (들르다, even langsgaan)."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["한국어를 배우러 공부해요.", "한국어를 배우러 학원에 가요.", "한국어를 배우러 한국에 왔어요.", "한국어를 배우러 학원에 다녀요."], answer: 0,
      why: ["Goed: deze is fout. Na -(으)러 komt alleen gaan, komen of 다니다.", "Deze klopt: -(으)러 + 가요.", "Deze klopt: -(으)러 + 왔어요.", "Deze klopt: -(으)러 + 다녀요."] },
    { type: "mc", q: "Wat betekent 밥 먹으러 가요?",
      options: ["Ik ga (ergens heen) om te eten.", "Ik eet eerst en ga dan weg.", "Ik heb gegeten en ben gegaan.", "Ik wil eten."], answer: 0,
      why: ["Goed: -(으)러 가요 = gaan om te ...", "Eerst eten en dan gaan is 먹고 가요.", "Verleden tijd zou 먹으러 갔어요 zijn, en dan nog met \"om te\".", "Willen is 먹고 싶어요."] },
    { type: "mc", q: "\"Zullen we koffie gaan drinken?\"",
      options: ["커피 마시러 갈까요?", "커피 마시려고 갈까요?", "커피 마셔러 갈까요?", "커피 마시러 마실까요?"], answer: 0,
      why: ["Goed: -(으)러 + 갈까요? voor een voorstel.", "-(으)려고 past niet bij een voorstel als 갈까요?", "러 komt aan de kale stam 마시, niet aan 마셔.", "Na -(으)러 komt gaan of komen, niet nog een keer drinken."] },
    { type: "mc", q: "\"Gisteren ging ik naar de markt om fruit te kopen.\"",
      options: ["어제 과일을 사러 시장에 갔어요.", "어제 과일을 샀으러 시장에 갔어요.", "어제 과일을 사러 시장에 가요.", "어제 과일을 사으러 시장에 갔어요."], answer: 0,
      why: ["Goed: de verleden tijd zit in 갔어요; 사러 blijft kaal.", "De tijd zit niet in de stam voor 러. 사러 blijft kaal.", "어제 vraagt om verleden tijd: 갔어요.", "사 eindigt op een klinker. Dan komt 러, niet 으러."] },
    { type: "fill", q: "주말에 친구를 ___ 서울에 가요. (Dit weekend ga ik naar Seoul om een vriend te zien. 만나다)", answers: ["만나러"],
      hint: "만나 eindigt op een klinker.", why: "Stam op een klinker + 러: 만나러." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik ga een vriend ontmoeten.\"",
      tokens: [["저는", "jeoneun"], ["친구를", "chingureul"], ["만나러", "mannareo"], ["가요", "gayo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn jongere zus kwam om een boek te lenen.\"",
      tokens: [["동생이", "dongsaengi"], ["책을", "chaegeul"], ["빌리러", "billireo"], ["왔어요", "wasseoyo"]] },
    { type: "open", q: "Vertaal: \"Ik ga naar de markt om groente te kopen.\"", model: ["채소를 사러 시장에 가요.", "시장에 채소를 사러 가요.", "야채를 사러 시장에 가요."],
      tip: "Check: stam 사 + 러, dan 가요. De plaats krijgt 에." },
    { type: "open", q: "Vertaal: \"Ik ga naar de bibliotheek om te studeren.\"", model: ["공부하러 도서관에 가요.", "도서관에 공부하러 가요.", "저는 공부하러 도서관에 가요."],
      tip: "Check: 공부하 eindigt op een klinker, dus 공부하러. Daarna 가요." }
  ],
  review: [
    { type: "mc", q: "\"Ik ga naar het zwembad om te zwemmen.\" (수영장 = zwembad)",
      options: ["수영하러 수영장에 가요.", "수영하으러 수영장에 가요.", "수영해러 수영장에 가요.", "수영하고 수영장에 가요."], answer: 0,
      why: ["Goed: 수영하 eindigt op een klinker, dus 러.", "으러 komt alleen na een 받침.", "러 komt aan de kale stam 수영하, niet aan 수영해.", "-고 betekent \"eerst zwemmen, dan gaan\"."] },
    { type: "mc", q: "\"We gaan naar het park om foto's te maken.\" 사진을 ___ 공원에 가요. (찍다)",
      options: ["찍으러", "찍러", "찍어러", "찍었으러"], answer: 0,
      why: ["Goed: 찍 eindigt op een 받침, dus 으러.", "Na een 받침 komt 으러.", "러 komt aan de kale stam, niet aan de 해요-vorm.", "Voor 러 staat geen verleden tijd."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["빵을 만들러 부엌에 가요.", "빵을 만들으러 부엌에 가요.", "빵을 만드러 부엌에 가요.", "빵을 만들러 요리해요."], answer: 0,
      why: ["Goed: stam op ㄹ + 러: 만들러, en daarna 가요.", "Na ㄹ komt geen 으.", "De ㄹ blijft staan voor 러: 만들러.", "Na -(으)러 komt gaan of komen, niet 요리해요."] }
  ]
})
