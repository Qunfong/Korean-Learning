({
  id: "08", slug: "gime", title: "-는 김에", sub: "Nu ik toch ... ben, doe ik meteen ook ...",
  canDo: "Je kunt nu zeggen dat je een kans benut om iets extra te doen, met -는 김에 en -(으)ㄴ 김에.",
  guess: {
    q: "시장에 가는 김에 과일도 좀 사 올게요. Wat betekent dit, denk je?",
    options: [
      "Nu ik toch naar de markt ga, neem ik ook wat fruit mee.",
      "Ik ga naar de markt omdat ik fruit nodig heb.",
      "Op weg naar huis kwam ik toevallig langs de markt.",
      "Ik ga naar de markt in plaats van fruit te kopen."
    ], answer: 0,
    why: [
      "Goed: -는 김에 = nu je toch A doet, doe je meteen ook B.",
      "De markt is het plan. Het fruit is iets extra, geen reden.",
      "\"Toevallig onderweg\" is eerder -는 길에. Hier gaat het om een bewuste extra handeling.",
      "Er staat 도: \"ook\". Je doet allebei."
    ]
  },
  problem: "In het Nederlands zeg je: \"Nu ik toch naar de markt ga, koop ik meteen ook fruit.\" Je hebt al een plan, en je grijpt de kans om er iets bij te doen. In het Koreaans zeg je dat met -는 김에. Het tweede deel krijgt vaak 도: \"ook\".",
  pattern: [
    { l: "plan", v: "시장에 가는", c: 3 }, { l: "김에", v: "김에", c: 2, key: true },
    { l: "extra", v: "과일도", c: 4 }, { l: "handeling", v: "사 올게요", c: 5 }
  ],
  patternCap: "Werkwoord + 는 김에 (bezig, gepland) · werkwoord + (으)ㄴ 김에 (al gedaan: 온 김에, 나온 김에) + extra handeling met 도",
  rules: [
    "Werkwoord + 는 김에 als de eerste handeling bezig of gepland is: 가는 김에, 청소하는 김에.",
    "Is de eerste handeling al gebeurd, dan -(으)ㄴ 김에: 온 김에, 나온 김에, 일어난 김에.",
    "Alleen met werkwoorden. Na een bijvoeglijk werkwoord of 이다 kan 김에 niet: 좋은 김에 is fout.",
    "Het tweede deel mag een verzoek, voorstel of belofte zijn: -(으)세요, -(으)ㄹ게요, -자, -아/어 줄래요?",
    "Vaste uitdrukkingen: 말이 나온 김에 (nu we het er toch over hebben), 이왕 온 김에 (nu je hier toch bent)."
  ],
  pitfall: "김에 geeft geen reden. Het eerste deel is je hoofdplan, het tweede een extra die je erbij doet. Voor een reden gebruik je -아/어서 of -(으)니까: 날씨가 좋아서 산책했어요.",
  examples: [
    { cn: "시장에 가는 김에 과일도 좀 사 올게요.", py: "Sijang-e ganeun gime gwaildo jom sa olgeyo.", nl: "Nu ik toch naar de markt ga, neem ik ook wat fruit mee." },
    { cn: "서울에 온 김에 친구도 만났어요.", py: "Seoure on gime chingudo mannasseoyo.", nl: "Nu ik toch in Seoul was, heb ik ook een vriend ontmoet." },
    { cn: "청소하는 김에 창문도 닦았어요.", py: "Cheongsohaneun gime changmundo dakkasseoyo.", nl: "Nu ik toch aan het schoonmaken was, heb ik ook de ramen gelapt." },
    { cn: "말이 나온 김에 다음 주 계획도 정해요.", py: "Mari naon gime daeum ju gyehoekdo jeonghaeyo.", nl: "Nu we het er toch over hebben, laten we ook de planning voor volgende week vastleggen." }
  ],
  nuance: [
    { h: "-는 김에 of -(으)ㄹ 겸?",
      p: "-(으)ㄹ 겸 noemt doelen die je vooraf al had: je doet iets om twee redenen tegelijk. Vaak staat het dubbel: A도 할 겸 B도 할 겸. -는 김에 gaat over een kans die ontstaat terwijl je al iets doet. De extra handeling is niet het oorspronkelijke doel.",
      ex: [
        { cn: "운동도 할 겸 기분 전환도 할 겸 산책을 했어요.", py: "Undongdo hal gyeom gibun jeonhwando hal gyeom sanchaegeul haesseoyo.", nl: "Ik ging wandelen, zowel om te bewegen als om mijn hoofd leeg te maken." },
        { cn: "산책하는 김에 빵도 샀어요.", py: "Sanchaekaneun gime ppangdo sasseoyo.", nl: "Nu ik toch aan het wandelen was, kocht ik ook brood." }
      ] },
    { h: "-는 김에 of -는 길에?",
      p: "-는 길에 betekent \"onderweg\". Het werkt alleen met werkwoorden van verplaatsing, zoals 가다 en 오다. Wat onderweg gebeurt, kan ook toeval zijn. -는 김에 werkt met elke handeling en draait om een bewust benutte kans. 청소하는 길에 is dus fout. Toevallig iemand tegenkomen gaat niet met 김에.",
      ex: [
        { cn: "집에 오는 길에 우연히 옛 친구를 만났어요.", py: "Jibe oneun gire uyeonhi yet chingureul mannasseoyo.", nl: "Op weg naar huis kwam ik toevallig een oude vriend tegen." },
        { cn: "우체국에 가는 김에 이 편지도 부쳐 줄래요?", py: "Ucheguge ganeun gime i pyeonjido buchyeo jullaeyo?", nl: "Nu je toch naar het postkantoor gaat, wil je deze brief ook versturen?" }
      ] },
    { h: "Spreektaal en schrijftaal",
      p: "-는 김에 is vooral spreektaal. Je hoort het met 이왕 (\"nu toch\"): 이왕 온 김에. In formele teksten past het minder goed. Daar schrijf je eerder 이번 기회에 (\"bij deze gelegenheid\"), met een eindvorm op -다.",
      ex: [
        { cn: "이왕 온 김에 구경 좀 하고 가요.", py: "Iwang on gime gugyeong jom hago gayo.", nl: "Nu je hier toch bent, kijk dan even rond voor je gaat." },
        { cn: "이번 기회에 제도를 개선해야 한다.", py: "Ibeon gihoee jedoreul gaeseonhaeya handa.", nl: "Bij deze gelegenheid moet het systeem verbeterd worden." }
      ] }
  ],
  mistakes: [
    { wrong: "날씨가 좋은 김에 산책했어요.", right: "날씨가 좋아서 산책했어요.", why: "좋다 is een bijvoeglijk werkwoord en geeft een reden. 김에 werkt alleen met een handeling." },
    { wrong: "서울에 왔는 김에 친구를 만났어요.", right: "서울에 온 김에 친구를 만났어요.", why: "Voor een handeling die al gebeurd is gebruik je -(으)ㄴ 김에. Na 았 komt geen -는." },
    { wrong: "청소하는 길에 창문도 닦았어요.", right: "청소하는 김에 창문도 닦았어요.", why: "-는 길에 werkt alleen met verplaatsing. Bij schoonmaken gebruik je 김에." },
    { wrong: "운동도 하는 김에 자전거로 출근해요.", right: "운동도 할 겸 자전거로 출근해요.", why: "Sporten is een doel dat je vooraf hebt. Daarvoor is -(으)ㄹ 겸." }
  ],
  vocab: [
    ["-는 김에", "-neun gime", "nu ... toch, meteen ook"], ["-(으)ㄹ 겸", "-(eu)l gyeom", "zowel om ... als om ..."],
    ["이왕", "iwang", "nu toch, als het dan toch moet"], ["닦다", "dakda", "schoonvegen, lappen, poetsen"],
    ["부치다", "buchida", "(per post) versturen"], ["소포", "sopo", "pakket"],
    ["들르다", "deulleuda", "even langsgaan"], ["출장", "chuljang", "zakenreis"],
    ["구경하다", "gugyeonghada", "bezichtigen, rondkijken"], ["정리하다", "jeongnihada", "ordenen, opruimen"]
  ],
  dialogue: [
    ["A", "어디 가요?", "Eodi gayo?", "Waar ga je heen?"],
    ["B", "우체국에 소포 부치러 가요.", "Ucheguge sopo buchireo gayo.", "Ik ga naar het postkantoor om een pakket te versturen."],
    ["A", "그럼 가는 김에 이 편지도 좀 부쳐 줄 수 있어요?", "Geureom ganeun gime i pyeonjido jom buchyeo jul su isseoyo?", "Kun je dan, nu je toch gaat, ook deze brief versturen?"],
    ["B", "네, 그럴게요. 오는 길에 커피도 사 올까요?", "Ne, geureolgeyo. Oneun gire keopido sa olkkayo?", "Ja, doe ik. Zal ik op de terugweg ook koffie meenemen?"],
    ["A", "좋아요. 말이 나온 김에 케이크도 하나 부탁해요.", "Joayo. Mari naon gime keikeudo hana butakaeyo.", "Graag. Nu we het er toch over hebben: ook een stuk taart, alsjeblieft."]
  ],
  reading: {
    title: "부산 출장",
    lines: [
      { cn: "지난주에 회의가 있어서 부산에 출장을 갔다.", py: "Jinanjue hoeuiga isseoseo busane chuljang-eul gatda.", nl: "Vorige week ging ik op zakenreis naar Busan voor een vergadering." },
      { cn: "회의는 오전에 일찍 끝났다.", py: "Hoeuineun ojeone iljjik kkeunnatda.", nl: "De vergadering was 's ochtends al vroeg afgelopen." },
      { cn: "부산에 온 김에 오랜만에 대학 친구를 만나기로 했다.", py: "Busane on gime oraenmane daehak chingureul mannagiro haetda.", nl: "Nu ik toch in Busan was, besloot ik een oude studievriend te zien." },
      { cn: "친구는 바다도 볼 겸 점심도 먹을 겸 해운대로 가자고 했다.", py: "Chinguneun badado bol gyeom jeomsimdo meogeul gyeom haeundaero gajago haetda.", nl: "Mijn vriend stelde voor naar Haeundae te gaan, om de zee te zien en om te lunchen." },
      { cn: "해운대에 간 김에 근처 시장도 구경했다.", py: "Haeundaee gan gime geuncheo sijangdo gugyeonghaetda.", nl: "Nu we toch in Haeundae waren, keken we ook rond op een markt in de buurt." },
      { cn: "시장을 구경하는 김에 가족에게 줄 선물도 샀다.", py: "Sijang-eul gugyeonghaneun gime gajogege jul seonmuldo satda.", nl: "Terwijl ik toch over de markt liep, kocht ik ook cadeaus voor mijn familie." },
      { cn: "서울로 돌아오는 길에 기차에서 사진을 정리했다.", py: "Seoullo doraoneun gire gichaeseo sajineul jeongnihaetda.", nl: "Op de terugweg naar Seoul ordende ik in de trein mijn foto's." },
      { cn: "일 때문에 간 출장이었지만 여행을 한 것 같았다.", py: "Il ttaemune gan chuljang-ieotjiman yeohaeng-eul han geot gatatda.", nl: "Het was een zakenreis, maar het voelde als een vakantie." }
    ],
    questions: [
      { type: "mc", q: "Waarom ging de schrijver naar Busan?",
        options: ["Voor een vergadering.", "Om een studievriend te zien.", "Om de zee te zien.", "Om cadeaus te kopen."], answer: 0,
        why: ["Goed: 회의가 있어서 부산에 출장을 갔다.", "De vriend kwam erbij: 부산에 온 김에.", "De zee was het idee van de vriend, later die dag.", "De cadeaus kocht hij er extra bij: 구경하는 김에."] },
      { type: "mc", q: "Wat deed de schrijver in de trein?",
        options: ["Hij ordende zijn foto's.", "Hij had een vergadering.", "Hij kocht cadeaus.", "Hij at met zijn vriend."], answer: 0,
        why: ["Goed: 기차에서 사진을 정리했다.", "De vergadering was 's ochtends in Busan.", "De cadeaus kocht hij op de markt.", "Met zijn vriend at hij in Haeundae."] },
      { type: "mc", q: "부산에 온 김에 친구를 만나기로 했다. Wat betekent 온 김에 hier?",
        options: ["Nu hij toch in Busan was.", "Omdat hij zijn vriend wilde zien.", "Op weg naar Busan.", "Voordat hij naar Busan kwam."], answer: 0,
        why: ["Goed: -(으)ㄴ 김에 = nu je dat toch al gedaan hebt.", "De vriend was niet de reden van de reis. 김에 geeft geen reden.", "\"Onderweg\" is -는 길에.", "\"Voordat\" is -기 전에."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Nu ik toch naar de supermarkt ga, koop ik ook melk.\" Welke zin klopt?",
      options: ["마트에 가는 김에 우유도 살게요.", "마트에 갈 김에 우유도 살게요.", "마트에 가서 김에 우유도 살게요.", "마트에 가는 김이 우유도 살게요."], answer: 0,
      why: ["Goed: werkwoord + 는 김에.", "-(으)ㄹ vóór 김에 bestaat niet. Je denkt aan -(으)ㄹ 겸.", "Vóór 김 staat een bijvoeglijke vorm, niet -아서.", "Het is 김에, met 에, niet 김이."] },
    { type: "mc", q: "A: 이번 여행 언제 갈까? B: 말이 나온 김에 지금 정하자. Wat bedoelt B?",
      options: ["Nu we het er toch over hebben, laten we het nu beslissen.", "Omdat je het zegt, moet jij het beslissen.", "Laten we er later over praten.", "Ik weet het niet, beslis jij maar."], answer: 0,
      why: ["Goed: 말이 나온 김에 = nu het onderwerp toch ter sprake is.", "김에 geeft geen reden, en 정하자 betekent \"laten we beslissen\".", "B wil het juist nu beslissen: 지금.", "-자 is een voorstel om het samen te doen."] },
    { type: "mc", q: "\"Ik fiets naar mijn werk, zowel om te sporten als om geld te besparen.\" Welke zin klopt?",
      options: ["운동도 할 겸 돈도 아낄 겸 자전거로 출근해요.", "운동도 하는 김에 돈도 아끼는 김에 자전거로 출근해요.", "운동도 할 김에 돈도 아낄 김에 자전거로 출근해요.", "운동도 하는 길에 돈도 아끼는 길에 자전거로 출근해요."], answer: 0,
      why: ["Goed: twee vooraf gekozen doelen: -(으)ㄹ 겸 ... -(으)ㄹ 겸.", "김에 is een extra kans, geen vooraf gekozen doel.", "김에 heeft geen (으)ㄹ-vorm ervoor. Je bedoelt 겸.", "-는 길에 betekent \"onderweg\" en past niet bij sporten."] },
    { type: "mc", q: "\"Op weg naar huis kwam ik toevallig een oude vriend tegen.\" Welke zin klopt?",
      options: ["집에 오는 길에 우연히 옛 친구를 만났어요.", "집에 오는 김에 우연히 옛 친구를 만났어요.", "집에 올 길에 우연히 옛 친구를 만났어요.", "집에 오는 길이 우연히 옛 친구를 만났어요."], answer: 0,
      why: ["Goed: onderweg, en iets toevalligs: -는 길에.", "김에 is een bewust benutte kans. Iets toevalligs past niet.", "Vóór 길에 staat -는, niet -(으)ㄹ.", "Het is 길에, met 에, niet 길이."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["날씨가 좋은 김에 산책했어요.", "밖에 나온 김에 장도 봤어요.", "청소하는 김에 빨래도 했어요.", "서울에 간 김에 친구를 만났어요."], answer: 0,
      why: ["Goed gezien: deze zin is fout. 좋다 is een bijvoeglijk werkwoord. Zeg: 날씨가 좋아서.", "Deze zin klopt: al gebeurd + -(으)ㄴ 김에.", "Deze zin klopt: werkwoord + 는 김에.", "Deze zin klopt: al gebeurd + -(으)ㄴ 김에."] },
    { type: "mc", q: "서울에 ___ 김에 경복궁도 구경했어요. (Nu ik toch in Seoul was ...)",
      options: ["온", "왔는", "올", "와서"], answer: 0,
      why: ["Goed: je was er al, dus -(으)ㄴ 김에: 온 김에.", "Na 았 komt geen -는. Zeg: 온.", "-(으)ㄹ vóór 김에 bestaat niet.", "Vóór 김 staat een bijvoeglijke vorm, niet -아서."] },
    { type: "mc", q: "\"Nu je toch opgestaan bent, wil je het licht uitdoen?\" Welke zin klopt?",
      options: ["일어난 김에 불 좀 꺼 줄래요?", "일어날 김에 불 좀 꺼 줄래요?", "일어난 길에 불 좀 꺼 줄래요?", "일어나는 겸 불 좀 꺼 줄래요?"], answer: 0,
      why: ["Goed: al gebeurd + -(으)ㄴ 김에, met een verzoek erna.", "-(으)ㄹ vóór 김에 bestaat niet.", "-길에 gaat over onderweg zijn. Opstaan is geen verplaatsing.", "겸 heeft de (으)ㄹ-vorm ervoor en noemt een doel."] },
    { type: "order", q: "Zet in de goede volgorde: \"Nu ik toch buiten ben, haal ik ook een kop koffie.\"",
      tokens: [["밖에 나온", "bakke naon"], ["김에", "gime"], ["커피도 한 잔", "keopido han jan"], ["사 올게요", "sa olgeyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Nu we het er toch over hebben, laten we de datum vastleggen.\"",
      tokens: [["말이", "mari"], ["나온", "naon"], ["김에", "gime"], ["날짜를", "naljjareul"], ["정해요", "jeonghaeyo"]] },
    { type: "fill", q: "방을 ___ 김에 책상도 정리했어요. (Nu ik toch mijn kamer schoonmaakte ... gebruik 청소하다)",
      answers: ["청소하는", "청소한"], hint: "청소하다 is een werkwoord. Welke vorm komt vóór 김에?",
      why: "Werkwoord + 는 김에 (bezig) of + (으)ㄴ 김에 (al gedaan). Allebei passen hier." },
    { type: "open", q: "Vertaal: \"Nu ik toch in Seoul ben, wil ik ook mijn oude leraar bezoeken.\"",
      model: ["서울에 온 김에 옛 선생님도 찾아뵙고 싶어요.", "서울에 온 김에 예전 선생님도 만나고 싶어요."],
      tip: "Check: 온 김에 (je bent er al), en 도 bij de extra handeling?" },
    { type: "open", q: "Vertaal: \"Nu je toch naar de bakker gaat, wil je ook melk meenemen?\"",
      model: ["빵집에 가는 김에 우유도 사 올래요?", "빵집에 가는 김에 우유도 좀 사다 줄래요?"],
      tip: "Check: 가는 김에, en een verzoek aan het eind?" }
  ],
  review: [
    { type: "mc", q: "\"Nu ik toch aan het koken ben, maak ik ook jouw lunch klaar.\" ___ 김에 네 도시락도 만들게.",
      options: ["요리하는", "요리할", "요리하기", "요리해서"], answer: 0,
      why: ["Goed: werkwoord + 는 김에.", "-(으)ㄹ vóór 김에 bestaat niet.", "Vóór 김 staat een bijvoeglijke vorm, niet -기.", "Vóór 김 staat een bijvoeglijke vorm, niet -아서."] },
    { type: "mc", q: "이왕 온 김에 저녁도 먹고 가세요. Wat betekent dit?",
      options: ["Nu je hier toch bent, blijf ook eten.", "Omdat je gekomen bent, moet je eten.", "Eet onderweg iets.", "Kom eten voordat je gaat."], answer: 0,
      why: ["Goed: 이왕 온 김에 = nu je hier toch bent.", "김에 geeft geen reden of plicht. Het is een uitnodiging.", "\"Onderweg\" is -는 길에.", "Er staat dat je al gekomen bent: 온."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["피곤한 김에 일찍 잤어요.", "은행에 간 김에 환전도 했어요.", "머리를 자르는 김에 염색도 했어요.", "도서관에 온 김에 책도 빌렸어요."], answer: 0,
      why: ["Goed gezien: deze zin is fout. 피곤하다 is een bijvoeglijk werkwoord. Zeg: 피곤해서.", "Deze zin klopt: al gebeurd + -(으)ㄴ 김에.", "Deze zin klopt: werkwoord + 는 김에.", "Deze zin klopt: al gebeurd + -(으)ㄴ 김에."] }
  ]
})
