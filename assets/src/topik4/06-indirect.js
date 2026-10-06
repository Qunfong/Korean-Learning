({
  id: "06", slug: "indirect", title: "Indirecte rede", sub: "Hij zei dat ... / vroeg of ... / stelde voor ... / zei dat ik moest ...",
  canDo: "Je kunt nu doorvertellen wat iemand zei, vroeg, voorstelde of opdroeg, met -다고, -냐고, -자고 en -(으)라고.",
  guess: {
    q: "\"Minsu zei dat hij morgen naar Busan gaat.\" Welke zin klopt, denk je?",
    options: ["민수 씨가 내일 부산에 간다고 했어요.", "민수 씨가 내일 부산에 가다고 했어요.", "민수 씨가 내일 부산에 가는다고 했어요.", "민수 씨가 내일 부산에 가냐고 했어요."], answer: 0,
    why: ["Goed: werkwoord op een klinker + ㄴ다고.", "Een werkwoord krijgt ㄴ of 는 vóór 다고.", "Na een klinker komt ㄴ다고, niet 는다고.", "냐고 is voor een vraag; Minsu deelde iets mee."]
  },
  problem: "Je wilt doorvertellen wat iemand zei, zonder letterlijk te citeren. Het Koreaans kijkt naar het soort zin: een mededeling, een vraag, een voorstel of een opdracht. Elk soort krijgt een eigen uitgang vóór 고 했어요.",
  pattern: [
    { l: "wie", v: "민수 씨가", c: 1 }, { l: "wat (in de goede vorm)", v: "내일 간다", c: 3 },
    { l: "citaat", v: "고 했어요", c: 2, key: true }
  ],
  patternCap: "Mededeling -다고 · vraag -냐고 · voorstel -자고 · opdracht -(으)라고 + 했어요 / 말했어요 / 물어봤어요",
  rules: [
    "Mededeling: werkwoord + ㄴ다고/는다고 (간다고, 먹는다고), bijvoeglijk werkwoord + 다고 (바쁘다고), naamwoord + (이)라고 (학생이라고). Verleden: -았/었다고.",
    "Vraag: + 냐고 (가냐고, 먹냐고, 바쁘냐고), naamwoord + (이)냐고. Vaak met 묻다 of 물어보다.",
    "Voorstel: + 자고 (가자고, 먹자고).",
    "Opdracht: + (으)라고 (가라고, 먹으라고). \"Geef mij\" wordt 달라고.",
    "In spreektaal kort je 고 해요 vaak in: 간대요, 가냬요, 가재요, 가래요."
  ],
  pitfall: "Een bijvoeglijk werkwoord krijgt geen ㄴ of 는. Zeg 바쁘다고, niet 바쁜다고.",
  examples: [
    { cn: "민수 씨가 내일 바쁘다고 했어요.", py: "Minsu ssiga naeil bappeudago haesseoyo.", nl: "Minsu zei dat hij morgen druk is." },
    { cn: "친구가 저한테 점심을 먹었냐고 물어봤어요.", py: "Chinguga jeohante jeomsimeul meogeonnyago mureobwasseoyo.", nl: "Mijn vriend vroeg of ik al geluncht had." },
    { cn: "동생이 같이 영화를 보자고 했어요.", py: "Dongsaengi gachi yeonghwareul bojago haesseoyo.", nl: "Mijn broertje stelde voor om samen een film te kijken." },
    { cn: "의사가 담배를 끊으라고 했어요.", py: "Uisaga dambaereul kkeuneurago haesseoyo.", nl: "De dokter zei dat ik moest stoppen met roken." }
  ],
  nuance: [
    { h: "Verkorte vormen: -대요, -냬요, -재요, -(으)래요",
      p: "In spreektaal valt 고 하 weg. -다고 해요 wordt -대요, -냐고 해요 wordt -냬요, -자고 해요 wordt -재요, -(으)라고 해요 wordt -(으)래요. Bij een naamwoord: 학생이래요. Zo vertel je snel door wat je hoorde, ook uit het nieuws. In formele tekst schrijf je de lange vorm.",
      ex: [
        { cn: "민수 씨가 내일 바쁘대요.", py: "Minsu ssiga naeil bappeudaeyo.", nl: "Minsu zegt dat hij morgen druk is." },
        { cn: "친구가 같이 가재요.", py: "Chinguga gachi gajaeyo.", nl: "Mijn vriend stelt voor om samen te gaan." },
        { cn: "선생님이 숙제를 내일까지 내래요.", py: "Seonsaengnimi sukjereul naeilkkaji naeraeyo.", nl: "De leraar zegt dat we het huiswerk morgen moeten inleveren." }
      ] },
    { h: "달라고 of 주라고?",
      p: "Beide komen van een opdracht met 주다. Wil de spreker het zelf krijgen? Dan zeg je 달라고: \"geef het mij\". Moet iemand het aan een derde geven? Dan zeg je 주라고. Kijk dus wie de ontvanger is.",
      ex: [
        { cn: "동생이 저한테 돈을 빌려 달라고 했어요.", py: "Dongsaengi jeohante doneul billyeo dallago haesseoyo.", nl: "Mijn broertje vroeg mij om hem geld te lenen." },
        { cn: "엄마가 동생한테 돈을 빌려 주라고 했어요.", py: "Eommaga dongsaenghante doneul billyeo jurago haesseoyo.", nl: "Mijn moeder zei dat ik mijn broertje geld moest lenen." }
      ] },
    { h: "Indirect of letterlijk citeren?",
      p: "Wil je de woorden precies herhalen, dan zet je ze tussen aanhalingstekens en volgt (이)라고 of 하고. Dat zie je vooral in verhalen. In een gesprek is de indirecte vorm veel gewoner. Let op: bij indirecte rede verandert de beleefdheidsvorm. 배고파요 wordt 배고프다고.",
      ex: [
        { cn: "민수 씨가 \"배고파요.\"라고 했어요.", py: "Minsu ssiga \"baegopayo.\"rago haesseoyo.", nl: "Minsu zei: \"Ik heb honger.\"" },
        { cn: "민수 씨가 배고프다고 했어요.", py: "Minsu ssiga baegopeudago haesseoyo.", nl: "Minsu zei dat hij honger had." }
      ] }
  ],
  mistakes: [
    { wrong: "민수 씨가 내일 바쁜다고 했어요.", right: "민수 씨가 내일 바쁘다고 했어요.", why: "바쁘다 is een bijvoeglijk werkwoord. Dat krijgt gewoon 다고, zonder ㄴ." },
    { wrong: "친구가 저한테 책을 빌려 주라고 했어요.", right: "친구가 저한테 책을 빌려 달라고 했어요.", why: "Je vriend wil het boek zelf krijgen. Dan is het 달라고, niet 주라고." },
    { wrong: "그 사람이 자기가 학생다고 했어요.", right: "그 사람이 자기가 학생이라고 했어요.", why: "Na een naamwoord komt (이)라고, niet 다고." },
    { wrong: "뉴스에서 내일 비가 온데요.", right: "뉴스에서 내일 비가 온대요.", why: "Iets doorvertellen is 대요 (다고 해요). 데요 gebruik je voor wat je zelf zag of als achtergrond." }
  ],
  vocab: [
    ["-다고 하다", "-dago hada", "zeggen dat ... (indirecte rede)"], ["물어보다", "mureoboda", "vragen"],
    ["대답하다", "daedapada", "antwoorden"], ["부탁하다", "butakada", "vragen om, verzoeken"], ["끊다", "kkeunta", "stoppen met; ophangen"],
    ["연락하다", "yeollakada", "contact opnemen"], ["피곤하다", "pigonhada", "moe zijn"], ["무리하다", "murihada", "te veel van zichzelf vragen"],
    ["목소리", "moksori", "stem"], ["빌려 주다", "billyeo juda", "uitlenen"]
  ],
  dialogue: [
    ["A", "지민 씨가 뭐라고 했어요?", "Jimin ssiga mworago haesseoyo?", "Wat zei Jimin?"],
    ["B", "오늘 너무 피곤하다고 했어요.", "Oneul neomu pigonhadago haesseoyo.", "Ze zei dat ze vandaag erg moe is."],
    ["A", "그럼 내일 만나자고 할까요?", "Geureom naeil mannajago halkkayo?", "Zullen we dan voorstellen om morgen af te spreken?"],
    ["B", "아까 제가 물어봤어요. 내일 시간이 있냐고요.", "Akka jega mureobwasseoyo. Naeil sigani innyagoyo.", "Dat heb ik net gevraagd. Of ze morgen tijd heeft."],
    ["A", "뭐라고 대답했어요?", "Mworago daedaphaesseoyo?", "Wat antwoordde ze?"],
    ["B", "일찍 연락하라고 했어요.", "Iljjik yeollakarago haesseoyo.", "Ze zei dat we vroeg contact moeten opnemen."]
  ],
  reading: {
    title: "엄마의 전화",
    lines: [
      { cn: "어제 저녁에 엄마한테서 전화가 왔다.", py: "Eoje jeonyeoge eommahanteseo jeonhwaga watda.", nl: "Gisteravond belde mijn moeder." },
      { cn: "엄마는 나에게 요즘 밥은 잘 먹냐고 물으셨다.", py: "Eommaneun naege yojeum babeun jal meongnyago mureusyeotda.", nl: "Mijn moeder vroeg of ik tegenwoordig goed eet." },
      { cn: "나는 회사 일이 많아서 좀 피곤하다고 대답했다.", py: "Naneun hoesa iri manaseo jom pigonhadago daedapaetda.", nl: "Ik antwoordde dat ik wat moe ben, omdat er veel werk is." },
      { cn: "그러자 엄마는 무리하지 말고 일찍 자라고 하셨다.", py: "Geureoja eommaneun murihaji malgo iljjik jarago hasyeotda.", nl: "Toen zei mijn moeder dat ik me niet moest overwerken en vroeg moest gaan slapen." },
      { cn: "그리고 이번 주말에 같이 김치를 만들자고 하셨다.", py: "Geurigo ibeon jumare gachi gimchireul mandeuljago hasyeotda.", nl: "En ze stelde voor om dit weekend samen kimchi te maken." },
      { cn: "아빠도 나를 많이 보고 싶어 하신다고 했다.", py: "Appado nareul mani bogo sipeo hasindago haetda.", nl: "Ze zei dat papa me ook erg mist." },
      { cn: "전화를 끊기 전에 엄마는 김치통을 꼭 가져오라고 하셨다.", py: "Jeonhwareul kkeunkki jeone eommaneun gimchitongeul kkok gajyeoorago hasyeotda.", nl: "Voor ze ophing, zei mijn moeder dat ik zeker een kimchibak moest meenemen." },
      { cn: "오랜만에 엄마 목소리를 들으니 마음이 따뜻해졌다.", py: "Oraenmane eomma moksorireul deureuni maeumi ttatteutaejyeotda.", nl: "Na lange tijd mijn moeders stem horen gaf me een warm gevoel." }
    ],
    questions: [
      { type: "mc", q: "Wat stelde de moeder voor?",
        options: ["Om dit weekend samen kimchi te maken.", "Om dit weekend samen uit eten te gaan.", "Om vaker te bellen.", "Om papa te bezoeken in het ziekenhuis."], answer: 0,
        why: ["Goed: 같이 김치를 만들자고 하셨다.", "Er gaat niemand uit eten in de tekst.", "Over vaker bellen staat niets in de tekst.", "Papa mist de schrijver, maar er is geen ziekenhuis."] },
      { type: "mc", q: "Wat moet de schrijver meenemen?",
        options: ["Een kimchibak.", "Kimchi.", "Rijst.", "Een cadeau voor papa."], answer: 0,
        why: ["Goed: 김치통을 꼭 가져오라고 하셨다.", "De kimchi maken ze samen; de schrijver neemt de bak mee.", "Rijst komt alleen voor in de vraag 밥은 잘 먹냐고.", "Over een cadeau staat niets in de tekst."] },
      { type: "mc", q: "일찍 자라고 하셨다. Wat voor zin vertelt de schrijver hier door?",
        options: ["Een opdracht of advies van de moeder.", "Een vraag van de moeder.", "Een voorstel om samen te slapen.", "Een mededeling over hoe laat de moeder slaapt."], answer: 0,
        why: ["Goed: -(으)라고 geeft een opdracht door.", "Een vraag zou 자냐고 zijn.", "Een voorstel zou 자자고 zijn.", "Een mededeling zou 잔다고 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "민수 씨가 ___ 했어요. (Minsu zei dat hij het druk heeft.)",
      options: ["바쁘다고", "바쁜다고", "바쁘는다고", "바빠다고"], answer: 0,
      why: ["Goed: bijvoeglijk werkwoord + 다고.", "Een bijvoeglijk werkwoord krijgt geen ㄴ vóór 다고.", "Een bijvoeglijk werkwoord krijgt geen 는 vóór 다고.", "Er komt geen 아/어 vóór 다고."] },
    { type: "mc", q: "선생님이 이 책을 ___ 했어요. (De leraar zei: \"Lees dit boek.\")",
      options: ["읽으라고", "읽자고", "읽냐고", "읽는다고"], answer: 0,
      why: ["Goed: een opdracht wordt (으)라고; 읽 heeft een 받침, dus 으라고.", "자고 is een voorstel (laten we lezen), geen opdracht.", "냐고 is een vraag, geen opdracht.", "는다고 is een mededeling, geen opdracht."] },
    { type: "mc", q: "엄마가 밥을 ___ 물어봤어요. (Mijn moeder vroeg of ik al gegeten had.)",
      options: ["먹었냐고", "먹었다고", "먹으라고", "먹었자고"], answer: 0,
      why: ["Goed: een vraag in de verleden tijd wordt 었냐고.", "다고 is een mededeling; je moeder vroeg iets.", "으라고 is een opdracht; je moeder vroeg iets.", "자고 krijgt nooit een verleden tijd, en het is geen vraag."] },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn vriend stelde voor om samen te eten.\"",
      tokens: [["친구가", "chinguga"], ["같이 밥을", "gachi babeul"], ["먹자고", "meokjago"], ["했어요", "haesseoyo"]] },
    { type: "open", q: "Vertaal: \"Mijn moeder zei dat ik vroeg moest gaan slapen.\"",
      model: ["엄마가 일찍 자라고 했어요.", "어머니가 저한테 일찍 자라고 하셨어요.", "엄마가 빨리 자라고 말했어요."],
      tip: "Check: is het een opdracht, dus 자라고 (klinker + 라고)?" },
    { type: "mc", q: "민수 씨가 내일 바쁘다고 했어요. Hoe zeg je dit kort in spreektaal?",
      options: ["민수 씨가 내일 바쁘대요.", "민수 씨가 내일 바쁜대요.", "민수 씨가 내일 바쁘데요.", "민수 씨가 내일 바쁘래요."], answer: 0,
      why: ["Goed: -다고 해요 wordt -대요.", "Ook in de korte vorm krijgt een bijvoeglijk werkwoord geen ㄴ.", "데요 is wat je zelf gezien hebt; doorvertellen is 대요.", "래요 is voor een opdracht of een naamwoord."] },
    { type: "mc", q: "친구가 저한테 우산을 ___ 했어요. (Mijn vriend vroeg mij om hem een paraplu te lenen.)",
      options: ["빌려 달라고", "빌려 주라고", "빌려 주자고", "빌려 준다고"], answer: 0,
      why: ["Goed: de vriend wil de paraplu zelf krijgen, dus 달라고.", "주라고 gebruik je als iemand het aan een derde moet geven.", "주자고 is een voorstel: \"laten we lenen\".", "준다고 is een mededeling: hij zei dat hij zou lenen."] },
    { type: "mc", q: "친구가 같이 점심 먹재요. Wat betekent dit?",
      options: ["Mijn vriend stelt voor om samen te lunchen.", "Mijn vriend zegt dat hij samen met iemand luncht.", "Mijn vriend vraagt of we samen lunchen.", "Mijn vriend zegt dat ik samen met hem moet lunchen."], answer: 0,
      why: ["Goed: -재요 = -자고 해요, een voorstel.", "Een mededeling zou 먹는대요 zijn.", "Een vraag zou 먹냬요 zijn.", "Een opdracht zou 먹으래요 zijn."] },
    { type: "order", q: "Zet in de goede volgorde: \"Minsu vroeg mij of ik morgen tijd heb.\"",
      tokens: [["민수 씨가 저한테", "Minsu ssiga jeohante"], ["내일 시간이", "naeil sigani"], ["있냐고", "innyago"], ["물어봤어요", "mureobwasseoyo"]],
      alt: ["내일 시간이 있냐고 민수 씨가 저한테 물어봤어요"] },
    { type: "fill", q: "뉴스에서 내일 비가 온___. (Volgens het nieuws gaat het morgen regenen.)", answers: ["대요"],
      hint: "Welke korte vorm gebruik je om door te vertellen?", why: "온다고 해요 wordt 온대요. Met 데요 zeg je wat je zelf zag." },
    { type: "open", q: "Vertaal: \"Mijn zus vroeg mij om haar te helpen.\"",
      model: ["언니가 저한테 도와 달라고 했어요.", "누나가 도와 달라고 부탁했어요.", "여동생이 저한테 도와 달라고 했어요."],
      tip: "Check: de zus wil zelf geholpen worden, dus 도와 달라고, niet 도와주라고." }
  ],
  review: [
    { type: "mc", q: "동생이 내일 같이 ___ 했어요. (Mijn broertje stelde voor om morgen samen te gaan zwemmen.)",
      options: ["수영하자고", "수영하라고", "수영하냐고", "수영한다고"], answer: 0,
      why: ["Goed: een voorstel wordt 자고.", "라고 is een opdracht, geen voorstel.", "냐고 is een vraag, geen voorstel.", "ㄴ다고 is een mededeling, geen voorstel."] },
    { type: "mc", q: "그 사람이 자기가 ___ 했어요. (Hij zei dat hij student is.)",
      options: ["학생이라고", "학생다고", "학생이다고", "학생라고"], answer: 0,
      why: ["Goed: naamwoord met 받침 + 이라고.", "Bij een naamwoord komt (이)라고, niet 다고.", "이다 wordt 이라고, niet 이다고.", "학생 heeft een 받침; je hebt 이 nodig: 이라고."] },
    { type: "mc", q: "의사 선생님이 매일 운동하___. (Spreektaal: de dokter zegt dat ik elke dag moet sporten.)",
      options: ["래요", "대요", "재요", "냬요"], answer: 0,
      why: ["Goed: een opdracht, -라고 해요 wordt -래요.", "대요 is een mededeling: de dokter sport zelf.", "재요 is een voorstel: laten we sporten.", "냬요 is een vraag: of ik sport."] }
  ]
})
