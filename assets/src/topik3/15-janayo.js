({
  id: "15", slug: "janayo", title: "-잖아요", sub: "Je weet toch: herinneren aan wat de ander al weet",
  canDo: "Je kunt nu iemand herinneren aan iets wat hij al weet met -잖아요, ook als reden of als \"ik zei het toch\", en je weet wanneer -거든요 past en wanneer -잖아요 te direct is.",
  guess: {
    q: "Je vriend vraagt waarom de bank dicht is. \"Het is vandaag toch zondag.\" Welke zin klopt, denk je?",
    options: ["오늘은 일요일이잖아요.", "오늘은 일요일잖아요.", "오늘은 일요일이잔아요.", "오늘은 일요일이지 않아요."], answer: 0,
    why: ["Goed: naamwoord met 받침 + 이잖아요.", "Na een 받침 heb je 이 nodig: 일요일이잖아요.", "Je schrijft 잖아요 (van -지 않아요), niet 잔아요.", "Dit is een ontkenning, geen herinnering. En bij een naamwoord ontken je met 아니에요."]
  },
  problem: "In het Nederlands zeg je \"het is toch zondag\" of \"ik zei het toch\". Met \"toch\" herinner je de ander aan iets wat hij al weet. In het Koreaans doe je dat met -잖아요. Het klinkt vertrouwd, maar soms ook als een verwijt.",
  pattern: [
    { l: "wat de ander al weet", v: "오늘은 일요일이", c: 1 }, { l: "-잖아요", v: "잖아요", c: 2, key: true }
  ],
  patternCap: "Stam + 잖아요 · Verleden: 았/었잖아요 · Naamwoord: 잖아요 (na klinker) / 이잖아요 (na 받침) · Informeel: -잖아",
  rules: [
    "-잖아요 komt direct na de stam, met of zonder 받침: 가잖아요, 먹잖아요, 춥잖아요.",
    "Verleden tijd: 았/었 + 잖아요: 말했잖아요. Toekomst: -(으)ㄹ 거잖아요.",
    "Naamwoord: na een klinker 잖아요 (친구잖아요), na een 받침 이잖아요 (학생이잖아요).",
    "Het is geen echte vraag. Je zegt het met een dalende toon. Schrijf 잖아요, want het komt van -지 않아요.",
    "Het is spreektaal. Met vrienden zeg je -잖아. In formele tekst gebruik je het niet."
  ],
  pitfall: "Gebruik -잖아요 alleen als de luisteraar het al weet. Geef je nieuwe informatie, dan klinkt -잖아요 vreemd of zelfs arrogant. Gebruik dan -거든요.",
  examples: [
    { cn: "제가 어제 말했잖아요.", py: "Jega eoje malhaetjanayo.", nl: "Ik zei het je gisteren toch." },
    { cn: "오늘은 일요일이잖아요. 은행이 문을 닫았어요.", py: "Oneureun iryoirijanayo. Eunhaengi muneul dadasseoyo.", nl: "Het is vandaag toch zondag. De bank is dicht." },
    { cn: "밖은 춥잖아요. 코트를 입고 가세요.", py: "Bakkeun chupjanayo. Koteureul ipgo gaseyo.", nl: "Het is buiten toch koud. Doe je jas aan." },
    { cn: "민수 씨는 매운 음식을 못 먹잖아요.", py: "Minsu ssineun maeun eumsigeul mot meokjanayo.", nl: "Minsu kan toch niet tegen pittig eten." }
  ],
  nuance: [
    { h: "-잖아요 of -거든요?",
      p: "Beide geven een reden of achtergrond. Bij -잖아요 weet de luisteraar het al: je herinnert hem eraan. Bij -거든요 weet hij het nog niet: je legt iets nieuws uit. Vraag je dus af: weet de ander dit al?",
      ex: [
        { cn: "내일 시험이 있잖아요. 오늘은 공부해야 해요.", py: "Naeil siheomi itjanayo. Oneureun gongbuhaeya haeyo.", nl: "We hebben morgen toch een examen. Vandaag moet ik studeren. (de ander weet het)" },
        { cn: "내일 시험이 있거든요. 그래서 오늘은 못 가요.", py: "Naeil siheomi itgeodeunyo. Geuraeseo oneureun mot gayo.", nl: "Ik heb morgen namelijk een examen. Daarom kan ik vandaag niet. (nieuw voor de ander)" }
      ] },
    { h: "Toon en register",
      p: "-잖아요 kan vriendelijk klinken: \"je weet het toch\". Met nadruk klinkt het als een verwijt: \"dat had je moeten weten\". Tegen je baas, een docent of een onbekende in een formele situatie is het daarom riskant. Zeg dan liever een neutrale zin, bijvoorbeeld met -는데요.",
      ex: [
        { cn: "어제 말씀드렸는데요.", py: "Eoje malsseumdeuryeonneundeyo.", nl: "Ik had het u gisteren al gezegd. (beleefd, neutraal)" },
        { cn: "어제 말했잖아.", py: "Eoje malhaetjana.", nl: "Ik zei het gisteren toch. (informeel, tegen een vriend)" }
      ] },
    { h: "있잖아요: \"weet je wat...\"",
      p: "Met 있잖아요 of 있잖아 aan het begin trek je de aandacht. Het betekent ongeveer \"weet je wat\" of \"zeg\". Daarna komt vaak nieuws. Hier herinner je dus niet aan iets bekends.",
      ex: [
        { cn: "있잖아요, 저 다음 달에 이사해요.", py: "Itjanayo, jeo daeum dare isahaeyo.", nl: "Weet je wat? Ik ga volgende maand verhuizen." }
      ] }
  ],
  mistakes: [
    { wrong: "그 사람은 학생잖아요.", right: "그 사람은 학생이잖아요.", why: "Na een naamwoord met 받침 heb je 이 nodig: 학생이잖아요." },
    { wrong: "어제 말하잖아요.", right: "어제 말했잖아요.", why: "Het zeggen was gisteren. Zet de verleden tijd vóór -잖아요: 말했잖아요." },
    { wrong: "다 알잔아요.", right: "다 알잖아요.", why: "Het komt van -지 않아요. Schrijf daarom 잖아요, met ㄶ." },
    { wrong: "(tegen een onbekende) 저는 네덜란드 사람이잖아요.", right: "(tegen een onbekende) 저는 네덜란드 사람이거든요.", why: "Een onbekende weet dit nog niet. Nieuwe informatie geef je met -거든요." }
  ],
  vocab: [
    ["-잖아요", "-janayo", "... toch (je weet het al)"], ["깜빡하다", "kkamppakada", "even vergeten"], ["챙기다", "chaenggida", "meenemen, niet vergeten"],
    ["맵다", "maepda", "pittig, heet"], ["은행", "eunhaeng", "bank"], ["출장", "chuljang", "zakenreis"],
    ["빵집", "ppangjip", "bakkerij"], ["혹시", "hoksi", "misschien, toevallig"], ["부탁하다", "butakada", "om een gunst vragen"], ["음성 메시지", "eumseong mesiji", "voicemail"]
  ],
  dialogue: [
    ["A", "아, 비가 오네요. 우산 가져왔어요?", "A, biga oneyo. Usan gajyeowasseoyo?", "O, het regent. Heb je een paraplu bij je?"],
    ["B", "아니요, 깜빡했어요.", "Aniyo, kkamppakaesseoyo.", "Nee, vergeten."],
    ["A", "제가 아침에 우산 챙기라고 했잖아요.", "Jega achime usan chaenggirago haetjanayo.", "Ik zei vanochtend toch dat je een paraplu mee moest nemen."],
    ["B", "미안해요. 아침에 너무 바빴잖아요.", "Mianhaeyo. Achime neomu bappatjanayo.", "Sorry. We hadden het vanochtend toch zo druk."],
    ["A", "괜찮아요. 제 우산이 크잖아요. 같이 써요.", "Gwaenchanayo. Je usani keujanayo. Gachi sseoyo.", "Geeft niet. Mijn paraplu is toch groot. Laten we hem samen gebruiken."]
  ],
  reading: {
    title: "친구의 음성 메시지",
    lines: [
      { cn: "민지 씨, 저 하나예요.", py: "Minji ssi, jeo Hanaeyo.", nl: "Minji, met Hana." },
      { cn: "내일 수진 씨 생일 파티 있잖아요.", py: "Naeil Sujin ssi saengil pati itjanayo.", nl: "Morgen is toch het verjaardagsfeest van Sujin." },
      { cn: "그런데 제가 내일 아침에 출장을 가게 됐어요.", py: "Geureonde jega naeil achime chuljangeul gage dwaesseoyo.", nl: "Maar ik moet morgenochtend op zakenreis." },
      { cn: "그래서 케이크를 못 살 것 같아요.", py: "Geuraeseo keikeureul mot sal geot gatayo.", nl: "Daarom kan ik de taart denk ik niet kopen." },
      { cn: "민지 씨 집이 그 빵집에서 가깝잖아요.", py: "Minji ssi jibi geu ppangjibeseo gakkapjanayo.", nl: "Jouw huis is toch dicht bij die bakkerij." },
      { cn: "혹시 민지 씨가 케이크를 사 줄 수 있어요?", py: "Hoksi Minji ssiga keikeureul sa jul su isseoyo?", nl: "Kun jij misschien de taart kopen?" },
      { cn: "수진 씨는 초콜릿을 좋아하잖아요. 초콜릿 케이크로 부탁해요.", py: "Sujin ssineun chokolliseul joahajanayo. Chokollit keikeuro butakaeyo.", nl: "Sujin houdt toch van chocola. Graag een chocoladetaart." },
      { cn: "돈은 제가 다음 주에 꼭 줄게요. 고마워요!", py: "Doneun jega daeum jue kkok julgeyo. Gomawoyo!", nl: "Ik betaal je volgende week zeker terug. Bedankt!" }
    ],
    questions: [
      { type: "mc", q: "Waarom kan Hana de taart niet kopen?",
        options: ["Ze moet op zakenreis.", "Ze woont ver van de bakkerij.", "Ze heeft geen geld.", "Ze is niet uitgenodigd."], answer: 0,
        why: ["Goed: 제가 내일 아침에 출장을 가게 됐어요.", "Minji woont dichtbij. Over Hana's huis staat niets.", "Ze betaalt Minji volgende week terug, dus geld is niet het probleem.", "Ze noemt het feest alsof ze erbij hoort."] },
      { type: "mc", q: "Welke taart moet Minji kopen?",
        options: ["Een chocoladetaart.", "Een aardbeientaart.", "Een taart naar keuze.", "Een kleine taart voor twee."], answer: 0,
        why: ["Goed: 초콜릿 케이크로 부탁해요.", "Aardbeien komen niet in de tekst voor.", "Hana vraagt duidelijk om chocolade.", "Over de grootte staat niets."] },
      { type: "mc", q: "민지 씨 집이 그 빵집에서 가깝잖아요. Waarom gebruikt Hana hier -잖아요?",
        options: ["Minji weet dat al; Hana gebruikt het als reden voor haar vraag.", "Hana vertelt Minji iets nieuws.", "Hana vraagt of Minji dichtbij woont.", "Hana verwijt Minji dat ze dichtbij woont."], answer: 0,
        why: ["Goed: -잖아요 = je weet het toch. Hier is het de reden van het verzoek.", "Nieuwe informatie zou -거든요 zijn. Minji weet waar ze woont.", "-잖아요 is geen echte vraag.", "De toon is vriendelijk: ze vraagt een gunst."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik zei het gisteren toch!\"",
      options: ["어제 말했잖아요!", "어제 말하잖아요!", "어제 말했잔아요!", "어제 말했거든요!"], answer: 0,
      why: ["Goed: verleden tijd + 잖아요.", "Het zeggen was gisteren: 말했잖아요.", "Schrijf 잖아요, van -지 않아요.", "-거든요 geeft nieuwe uitleg. \"Ik zei het toch\" is een herinnering."] },
    { type: "mc", q: "민호 씨는 ___. 그래서 영어를 잘해요. (Minho is toch Amerikaan. Daarom spreekt hij goed Engels.)",
      options: ["미국 사람이잖아요", "미국 사람잖아요", "미국 사람이잔아요", "미국 사람이지 않아요"], answer: 0,
      why: ["Goed: 사람 heeft een 받침, dus 이잖아요.", "Na een 받침 heb je 이 nodig.", "Schrijf 잖아요, niet 잔아요.", "Dit klinkt als een ontkenning, geen herinnering."] },
    { type: "mc", q: "Een nieuwe collega vraagt waarom je Koreaans spreekt. Hij weet niets over je familie. \"Mijn moeder is namelijk Koreaanse.\"",
      options: ["어머니가 한국 사람이거든요.", "어머니가 한국 사람이잖아요.", "어머니가 한국 사람거든요.", "어머니가 한국 사람이잖거든요."], answer: 0,
      why: ["Goed: nieuwe informatie als uitleg = -거든요.", "De collega weet dit nog niet. Met -잖아요 klinkt het vreemd.", "Na een 받침 heb je 이 nodig: 사람이거든요.", "Je kunt -잖아요 en -거든요 niet stapelen."] },
    { type: "mc", q: "Je vriend wil vanavond uitgaan. Jullie hebben allebei morgen een examen. \"We hebben morgen toch een examen!\"",
      options: ["내일 시험이 있잖아요!", "내일 시험이 있잖았어요!", "내일 시험이 있잔아요!", "내일 시험이 있지 않아요!"], answer: 0,
      why: ["Goed: je herinnert je vriend aan iets wat hij weet.", "Het examen is morgen. Verleden tijd past niet, en die komt vóór 잖아요.", "Schrijf 잖아요, niet 잔아요.", "-지 않아요 is een ontkenning: \"we hebben geen examen\"."] },
    { type: "mc", q: "In welke situatie past -잖아요 het minst goed?",
      options: ["In een sollicitatiegesprek, tegen de interviewer.", "Tegen een vriend die zijn sleutels vergeten is.", "Tegen je zus, over een afspraak die jullie samen maakten.", "Tegen een collega van je leeftijd, over een bekende regel."], answer: 0,
      why: ["Goed: in een formele situatie tegen een meerdere klinkt -잖아요 als een verwijt.", "Dit past: met een vriend mag het, ook als licht verwijt.", "Dit past: je zus weet het, en de situatie is informeel.", "Dit past: een collega van je leeftijd, en de regel is bekend."] },
    { type: "order", q: "Zet in de goede volgorde: \"Je houdt toch van koffie. Daarom heb ik er een gekocht.\"",
      tokens: [["커피를", "keopireul"], ["좋아하잖아요.", "joahajanayo."], ["그래서", "geuraeseo"], ["하나", "hana"], ["샀어요.", "sasseoyo."]] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik zei toch dat het vandaag koud zou worden.\"",
      tokens: [["오늘", "oneul"], ["추울", "chuul"], ["거라고", "georago"], ["했잖아요.", "haetjanayo."]] },
    { type: "fill", q: "지금 여섯 시예요. 은행은 벌써 문을 닫았___. (Het is zes uur. De bank is toch al dicht.)", answers: ["잖아요"],
      hint: "Welke uitgang betekent \"je weet het toch\"?", why: "닫았 + 잖아요: je herinnert de ander aan iets wat hij kan weten." },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["그 사람은 학생잖아요.", "그 사람은 친구잖아요.", "그 사람은 학생이잖아요.", "그 사람은 의사잖아요."], answer: 0,
      why: ["Goed: dit is fout. 학생 heeft een 받침, dus 학생이잖아요.", "Dit klopt: 친구 eindigt op een klinker.", "Dit klopt: na een 받침 komt 이잖아요.", "Dit klopt: 의사 eindigt op een klinker."] },
    { type: "mc", q: "있잖아요, 저 다음 달에 결혼해요. Wat doet 있잖아요 hier?",
      options: ["Het trekt de aandacht: \"weet je wat...\".", "Het betekent \"er is\".", "Het herinnert aan iets wat de ander al weet.", "Het is een vraag: \"is het er?\""], answer: 0,
      why: ["Goed: aan het begin is 있잖아요 een opener vóór nieuws.", "Hier gaat het niet om iets wat er is.", "Het nieuws (de bruiloft) is juist nieuw voor de ander.", "-잖아요 is geen echte vraag."] },
    { type: "open", q: "Vertaal: \"Ik heb het je toch gezegd!\"", model: ["제가 말했잖아요!", "내가 말했잖아!", "제가 얘기했잖아요!"],
      tip: "Check: verleden tijd vóór 잖아요 (말했잖아요), en 잖아요 met ㄶ." },
    { type: "open", q: "Vertaal: \"Het is buiten toch koud. Neem een jas mee.\"", model: ["밖이 춥잖아요. 코트를 가져가세요.", "밖에 춥잖아요. 외투를 가져가세요."],
      tip: "Check: 춥 + 잖아요, en daarna een gewone opdracht met -(으)세요." }
  ],
  review: [
    { type: "mc", q: "\"Je weet toch dat ik geen koffie drink.\"",
      options: ["저는 커피를 안 마시잖아요.", "저는 커피를 안 마시잔아요.", "저는 커피를 안 마셨잖아요.", "저는 커피를 안 마시지 않아요."], answer: 0,
      why: ["Goed: stam + 잖아요.", "Schrijf 잖아요, niet 잔아요.", "Het gaat om een gewoonte nu, niet om één keer in het verleden.", "Dit is een dubbele ontkenning, geen herinnering."] },
    { type: "mc", q: "그 영화 정말 ___. 같이 봤잖아요. (Die film was toch echt leuk. We hebben hem samen gezien.)",
      options: ["재미있었잖아요", "재미있잖았어요", "재미있었잔아요", "재미있었거든요"], answer: 0,
      why: ["Goed: verleden tijd + 잖아요.", "De verleden tijd komt vóór 잖아요: 있었잖아요.", "Schrijf 잖아요, niet 잔아요.", "-거든요 is voor nieuwe informatie. Jullie zagen de film samen."] },
    { type: "mc", q: "Je professor zegt dat je opdracht ontbreekt. Je hebt hem gisteren ingeleverd. Welke zin past het best?",
      options: ["어제 이미 제출했습니다.", "어제 이미 제출했잖아요.", "어제 이미 제출했잖아.", "어제 이미 제출하잖아요."], answer: 0,
      why: ["Goed: tegen een professor zeg je het neutraal en beleefd.", "-잖아요 klinkt tegen een professor als een verwijt.", "-잖아 is informeel en klinkt nog directer.", "Het inleveren was gisteren, dus verleden tijd. En ook dan klinkt -잖아요 te direct."] }
  ]
})
