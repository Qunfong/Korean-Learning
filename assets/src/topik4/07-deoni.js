({
  id: "07", slug: "deoni", title: "-았/었더니", sub: "Toen ik ..., bleek ... / Ik heb ..., daardoor ...",
  canDo: "Je kunt nu vertellen wat je ontdekte na je eigen handeling, of wat daarvan het gevolg was, met -았/었더니.",
  guess: {
    q: "\"Toen ik naar de winkel ging, bleek die dicht te zijn.\" Welke zin klopt, denk je?",
    options: ["가게에 갔더니 문이 닫혀 있었어요.", "가게에 가더니 문이 닫혀 있었어요.", "가게에 갔더니 문이 닫혀 있을 거예요.", "가게에 간다더니 문이 닫혀 있었어요."], answer: 0,
    why: ["Goed: je eigen handeling + 았더니, dan wat je ontdekte.", "-더니 zonder 았 gebruik je voor wat je bij een ander zag, niet voor jezelf.", "Na -았/었더니 komt wat je al ontdekte, geen gissing over de toekomst.", "-ㄴ다더니 betekent \"je zei dat ..., maar\". Dat is een ander patroon."]
  },
  problem: "In het Nederlands zeg je: \"Ik ging naar huis, en toen bleek er niemand te zijn.\" Of: \"Ik heb veel gegeten, dus nu heb ik geen honger.\" Het Koreaans plakt dit aan elkaar met -았/었더니. Eerst jouw handeling, dan wat je ontdekte of wat het gevolg was.",
  pattern: [
    { l: "mijn handeling (stam)", v: "집에 가", c: 1 }, { l: "toen / daardoor", v: "았더니", c: 2, key: true },
    { l: "ontdekking of gevolg", v: "아무도 없었어요", c: 4 }
  ],
  patternCap: "Werkwoordstam + 았/었더니 (했더니) + wat je ontdekte of wat het gevolg was",
  rules: [
    "Stam met ㅏ of ㅗ + 았더니 (갔더니, 봤더니), andere stammen + 었더니 (먹었더니, 마셨더니), 하다 wordt 했더니.",
    "Het eerste deel is je eigen handeling. Het onderwerp is dus meestal ik of wij.",
    "Het tweede deel is een ontdekking (vaak verleden tijd: 없었어요) of een gevolg (ook nu: 피곤해요). Daar mag een ander onderwerp staan.",
    "Na -았/었더니 komt geen opdracht, voorstel of plan voor later."
  ],
  pitfall: "Gaat het om wat een ander deed en hoe die veranderde? Gebruik dan -더니 zonder 았/었: 민수 씨가 열심히 공부하더니 합격했어요.",
  examples: [
    { cn: "집에 갔더니 아무도 없었어요.", py: "Jibe gatdeoni amudo eopseosseoyo.", nl: "Toen ik thuiskwam, bleek er niemand te zijn." },
    { cn: "아침을 많이 먹었더니 배가 안 고파요.", py: "Achimeul mani meogeotdeoni baega an gopayo.", nl: "Ik heb veel ontbeten, dus ik heb geen honger." },
    { cn: "매일 운동했더니 건강해졌어요.", py: "Maeil undonghaetdeoni geonganghaejyeosseoyo.", nl: "Ik sportte elke dag, en daardoor werd ik gezonder." },
    { cn: "친구한테 전화했더니 벌써 자고 있었어요.", py: "Chinguhante jeonhwahaetdeoni beolsseo jago isseosseoyo.", nl: "Toen ik mijn vriend belde, bleek hij al te slapen." }
  ],
  nuance: [
    { h: "-았/었더니 of -더니?",
      p: "Met -았/었더니 vertel je over je eigen handeling en wat daarna kwam. Met -더니 (zonder 았/었) vertel je wat je bij een ander of bij iets zag, en hoe dat daarna veranderde of anders werd. Bij -더니 is het onderwerp dus niet ik.",
      ex: [
        { cn: "제가 열심히 공부했더니 시험에 합격했어요.", py: "Jega yeolsimhi gongbuhaetdeoni siheome hapgyeokaesseoyo.", nl: "Ik studeerde hard, en daardoor slaagde ik voor het examen." },
        { cn: "민수 씨가 열심히 공부하더니 시험에 합격했어요.", py: "Minsu ssiga yeolsimhi gongbuhadeoni siheome hapgyeokaesseoyo.", nl: "Minsu studeerde hard (dat zag ik), en hij slaagde voor het examen." },
        { cn: "동생이 어제는 아프더니 오늘은 괜찮아요.", py: "Dongsaengi eojeneun apeudeoni oneureun gwaenchanayo.", nl: "Mijn zusje was gisteren ziek, maar vandaag is ze in orde." }
      ] },
    { h: "-았/었더니 of -(으)니까 (ontdekking)?",
      p: "Voor een ontdekking kun je ook -(으)니까 zeggen: 집에 가니까 아무도 없었어요. Dat betekent bijna hetzelfde. -(으)니까 is neutraler en werkt ook met een ander onderwerp. -았/었더니 klinkt meer als terugblikken op je eigen ervaring. Alleen -(으)니까 kan ook een reden met een opdracht geven.",
      ex: [
        { cn: "집에 가니까 아무도 없었어요.", py: "Jibe ganikka amudo eopseosseoyo.", nl: "Toen ik thuiskwam, was er niemand." },
        { cn: "비가 오니까 우산을 가져가세요.", py: "Biga onikka usaneul gajyeogaseyo.", nl: "Het regent, dus neem een paraplu mee." }
      ] },
    { h: "Twee betekenissen: ontdekking en gevolg",
      p: "Bij een ontdekking was het resultaat er al, los van jou: de winkel was dicht. Bij een gevolg komt het resultaat door jouw handeling: je bent moe omdat je laat opbleef. De vorm is hetzelfde. Het patroon is gewoon in spreektaal en in verhalen of dagboeken.",
      ex: [
        { cn: "어제 늦게 잤더니 너무 피곤해요.", py: "Eoje neutge jatdeoni neomu pigonhaeyo.", nl: "Ik ging gisteren laat slapen, dus ik ben erg moe." }
      ] }
  ],
  mistakes: [
    { wrong: "민수 씨가 열심히 공부했더니 합격했어요.", right: "민수 씨가 열심히 공부하더니 합격했어요.", why: "Het gaat om wat Minsu deed, niet om jezelf. Dan gebruik je -더니 zonder 았/었." },
    { wrong: "제가 아침을 많이 먹더니 배가 불러요.", right: "제가 아침을 많이 먹었더니 배가 불러요.", why: "Over je eigen handeling zeg je -았/었더니, niet -더니." },
    { wrong: "많이 걸었더니 좀 쉽시다.", right: "많이 걸었으니까 좀 쉽시다.", why: "Na -았/었더니 komt geen voorstel of opdracht. Voor een reden met een voorstel gebruik je -(으)니까." },
    { wrong: "창문을 열었더니 시원할 거예요.", right: "창문을 열었더니 시원했어요.", why: "Na -았/었더니 vertel je wat je al merkte, geen gissing over later." }
  ],
  vocab: [
    ["-았/었더니", "-at/eotdeoni", "toen ik ..., bleek ...; ik heb ..., daardoor ..."], ["일기 예보", "ilgi yebo", "weerbericht"],
    ["미리", "miri", "van tevoren"], ["편의점", "pyeonuijeom", "buurtsupermarkt (24 uur)"], ["팔리다", "pallida", "verkocht worden"],
    ["(비를) 맞다", "(bireul) matda", "(regen) over je heen krijgen"], ["맑다", "makda", "helder, onbewolkt"],
    ["챙기다", "chaenggida", "meenemen, niet vergeten"], ["새벽", "saebyeok", "vroege ochtend, nacht (na middernacht)"], ["열이 나다", "yeori nada", "koorts hebben"]
  ],
  dialogue: [
    ["A", "얼굴이 좋아 보여요. 무슨 좋은 일 있어요?", "Eolguri joa boyeoyo. Museun joeun il isseoyo?", "Je ziet er goed uit. Is er iets leuks gebeurd?"],
    ["B", "요즘 일찍 잤더니 피곤하지 않아요.", "Yojeum iljjik jatdeoni pigonhaji anayo.", "Ik ga tegenwoordig vroeg slapen, dus ik ben niet moe."],
    ["A", "저도 어제 일찍 누웠어요. 그런데 휴대폰을 봤더니 벌써 새벽 두 시였어요.", "Jeodo eoje iljjik nuwosseoyo. Geureonde hyudaeponeul bwatdeoni beolsseo saebyeok du siyeosseoyo.", "Ik ging gisteren ook vroeg liggen. Maar ik keek op mijn telefoon, en ineens was het al twee uur 's nachts."],
    ["B", "저도 전에는 그랬어요. 휴대폰을 침대 옆에 안 뒀더니 잠이 잘 와요.", "Jeodo jeoneneun geuraesseoyo. Hyudaeponeul chimdae yeope an dwotdeoni jami jal wayo.", "Dat deed ik vroeger ook. Sinds ik mijn telefoon niet naast mijn bed leg, slaap ik goed."],
    ["A", "좋은 방법이네요. 오늘 해 볼게요.", "Joeun bangbeobineyo. Oneul hae bolgeyo.", "Goed idee. Ik probeer het vandaag."]
  ],
  reading: {
    title: "비 오는 날의 제주도",
    lines: [
      { cn: "지난 주말에 혼자 제주도에 여행을 갔다.", py: "Jinan jumare honja jejudoe yeohaengeul gatda.", nl: "Afgelopen weekend ging ik alleen op reis naar Jeju." },
      { cn: "공항에 도착했더니 비가 많이 오고 있었다.", py: "Gonghange dochakaetdeoni biga mani ogo isseotda.", nl: "Toen ik op het vliegveld aankwam, bleek het hard te regenen." },
      { cn: "일기 예보를 미리 확인하지 않아서 우산이 없었다.", py: "Ilgi yeboreul miri hwaginhaji anaseo usani eopseotda.", nl: "Ik had het weerbericht niet van tevoren bekeken, dus ik had geen paraplu." },
      { cn: "그래서 근처 편의점에 갔더니 우산이 다 팔리고 없었다.", py: "Geuraeseo geuncheo pyeonuijeome gatdeoni usani da palligo eopseotda.", nl: "Dus ging ik naar een winkeltje in de buurt, maar de paraplu's bleken uitverkocht." },
      { cn: "할 수 없이 비를 맞으면서 호텔까지 걸어갔다.", py: "Hal su eopsi bireul majeumyeonseo hotelkkaji georeogatda.", nl: "Er zat niets anders op: ik liep in de regen naar het hotel." },
      { cn: "다음 날 아침에 창문을 열었더니 하늘이 아주 맑았다.", py: "Daeum nal achime changmuneul yeoreotdeoni haneuri aju malgatda.", nl: "Toen ik de volgende ochtend het raam opendeed, was de lucht helemaal helder." },
      { cn: "하지만 전날 비를 많이 맞았더니 목이 아프고 열이 났다.", py: "Hajiman jeonnal bireul mani majatdeoni mogi apeugo yeori natda.", nl: "Maar omdat ik de dag ervoor veel regen had gehad, had ik keelpijn en koorts." },
      { cn: "다음에는 꼭 일기 예보를 확인하고 우산을 챙겨야겠다.", py: "Daeumeneun kkok ilgi yeboreul hwaginhago usaneul chaenggyeoyagetda.", nl: "Volgende keer ga ik zeker het weerbericht bekijken en een paraplu meenemen." }
    ],
    questions: [
      { type: "mc", q: "Waarom had de schrijver geen paraplu?",
        options: ["Hij had het weerbericht niet bekeken.", "Hij had zijn paraplu in het vliegtuig laten liggen.", "Zijn paraplu was kapot.", "Hij had zijn paraplu aan een vriend gegeven."], answer: 0,
        why: ["Goed: 일기 예보를 미리 확인하지 않아서 우산이 없었다.", "Over het vliegtuig staat niets in de tekst.", "Er staat niet dat de paraplu kapot was.", "De schrijver reisde alleen; er is geen vriend."] },
      { type: "mc", q: "Hoe ging het de volgende ochtend?",
        options: ["Het weer was mooi, maar de schrijver was ziek.", "Het regende nog steeds hard.", "De schrijver kocht een paraplu in de winkel.", "De schrijver voelde zich weer helemaal goed."], answer: 0,
        why: ["Goed: 하늘이 아주 맑았다, maar 목이 아프고 열이 났다.", "De lucht was juist helder: 하늘이 아주 맑았다.", "De paraplu's waren al de dag ervoor uitverkocht.", "Hij had keelpijn en koorts."] },
      { type: "mc", q: "편의점에 갔더니 우산이 다 팔리고 없었다. Wat zegt 갔더니 hier?",
        options: ["De schrijver ging erheen en ontdekte toen dat er geen paraplu's waren.", "De schrijver ging erheen omdat de paraplu's op waren.", "Iemand anders ging naar de winkel.", "De schrijver is van plan om erheen te gaan."], answer: 0,
        why: ["Goed: eigen handeling + 았더니 + wat je ontdekte.", "-았/었더니 geeft geen doel of reden voor het gaan.", "-았/었더니 gaat over je eigen handeling; voor een ander zeg je -더니.", "갔 is verleden tijd; het gaat niet over een plan."] }
    ]
  },
  questions: [
    { type: "mc", q: "아침을 많이 ___ 배가 안 고파요. (Ik heb veel ontbeten, dus ik heb geen honger.)",
      options: ["먹었더니", "먹더니", "먹을더니", "먹었는더니"], answer: 0,
      why: ["Goed: je eigen handeling + 었더니.", "-더니 zonder 었 gebruik je voor wat je bij een ander zag.", "Er bestaat geen vorm met ㄹ vóór 더니.", "Er komt geen 는 tussen 었 en 더니."] },
    { type: "mc", q: "도서관에 갔더니 문이 닫혀 있었어요. Wat betekent dit?",
      options: ["Toen ik naar de bibliotheek ging, bleek die dicht te zijn.", "Ik ging naar de bibliotheek omdat die dicht was.", "Hij ging naar de bibliotheek, en toen was die dicht.", "Als ik naar de bibliotheek ga, is die dicht."], answer: 0,
      why: ["Goed: eigen handeling, daarna een ontdekking.", "-았/었더니 geeft geen reden voor het gaan.", "-았/었더니 gaat over je eigen handeling, niet over hem.", "Het gaat om iets wat al gebeurd is, geen voorwaarde."] },
    { type: "mc", q: "동생이 어제는 ___ 오늘은 괜찮아요. (Mijn zusje was gisteren ziek, maar vandaag is ze in orde.)",
      options: ["아프더니", "아팠더니", "아프니까", "아파서"], answer: 0,
      why: ["Goed: -더니 voor wat je bij een ander zag en hoe dat veranderde.", "-았/었더니 is voor je eigen handeling, niet voor je zusje.", "-(으)니까 geeft een reden; ziek zijn is geen reden om in orde te zijn.", "-아서 geeft een reden of volgorde, geen verandering."] },
    { type: "order", q: "Zet in de goede volgorde: \"Toen ik het raam opendeed, werd de kamer koel.\"",
      tokens: [["창문을", "changmuneul"], ["열었더니", "yeoreotdeoni"], ["방이", "bangi"], ["시원해졌어요", "siwonhaejyeosseoyo"]] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["많이 걸었더니 좀 쉽시다.", "많이 걸었더니 다리가 아파요.", "약을 먹었더니 좀 나았어요.", "친구 집에 갔더니 친구가 없었어요."], answer: 0,
      why: ["Goed: na -았/었더니 komt geen voorstel. Zeg: 많이 걸었으니까 좀 쉽시다.", "Dit klopt: eigen handeling met een gevolg.", "Dit klopt: je nam het medicijn en werd beter.", "Dit klopt: in het tweede deel mag een ander onderwerp staan."] },
    { type: "mc", q: "비가 ___ 우산을 가져가세요. (Het regent, dus neem een paraplu mee.)",
      options: ["오니까", "왔더니", "오더니", "와서"], answer: 0,
      why: ["Goed: een reden met een opdracht wordt -(으)니까.", "Na -았/었더니 komt geen opdracht.", "Na -더니 komt geen opdracht.", "Na -아/어서 met een reden komt geen opdracht."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik vroeg het aan de leraar, en hij legde het vriendelijk uit.\"",
      tokens: [["선생님께", "seonsaengnimkke"], ["여쭤봤더니", "yeojjwobwatdeoni"], ["친절하게", "chinjeolhage"], ["설명해 주셨어요", "seolmyeonghae jusyeosseoyo"]] },
    { type: "fill", q: "매일 운동___ 몸이 가벼워졌어요. (Ik sportte elke dag, en daardoor voelt mijn lichaam lichter.)", answers: ["했더니"],
      hint: "Hoe wordt 하다 vóór 더니 bij je eigen handeling?", why: "운동하다 wordt 운동했더니: 하다 + 었 = 했." },
    { type: "mc", q: "Welke zin betekent ongeveer hetzelfde als 집에 갔더니 아무도 없었어요?",
      options: ["집에 가니까 아무도 없었어요.", "집에 가더니 아무도 없었어요.", "집에 가서 아무도 없었어요.", "집에 가면 아무도 없어요."], answer: 0,
      why: ["Goed: -(으)니까 kan ook een ontdekking geven.", "-더니 gaat over wat een ander deed, niet over jou.", "-아/어서 maakt het een reden: niemand was er omdat ik ging.", "-(으)면 is een voorwaarde voor elke keer, geen ontdekking."] },
    { type: "mc", q: "늦게까지 게임을 했더니 너무 피곤해요. Wat drukt 했더니 hier uit?",
      options: ["Het gevolg van mijn eigen handeling.", "Een ontdekking over iemand anders.", "Een plan voor vanavond.", "Een tegenstelling: ik speelde, maar ik ben niet moe."], answer: 0,
      why: ["Goed: ik speelde lang, en daardoor ben ik nu moe.", "Het onderwerp is ik; voor een ander zeg je -더니.", "했 is verleden tijd; het gaat niet om een plan.", "Er staat juist dat ik moe ben: 너무 피곤해요."] },
    { type: "open", q: "Vertaal: \"Toen ik de deur opendeed, stond mijn vriend daar.\"",
      model: ["문을 열었더니 친구가 서 있었어요.", "문을 열었더니 친구가 있었어요.", "현관문을 열었더니 친구가 서 있었어요."],
      tip: "Check: 열 + 었더니 voor je eigen handeling, en de ontdekking in de verleden tijd." },
    { type: "open", q: "Vertaal: \"Ik heb veel water gedronken, en nu voel ik me beter.\"",
      model: ["물을 많이 마셨더니 몸이 좋아졌어요.", "물을 많이 마셨더니 기분이 좋아졌어요.", "물을 많이 마셨더니 몸이 나아졌어요."],
      tip: "Check: 마시 + 었더니 wordt 마셨더니, en het gevolg komt erna." }
  ],
  review: [
    { type: "mc", q: "오랜만에 대청소를 ___ 집이 깨끗해졌어요. (Ik heb na lange tijd grondig schoongemaakt, en nu is het huis schoon.)",
      options: ["했더니", "하더니", "했으면", "할 테니까"], answer: 0,
      why: ["Goed: je eigen handeling + 했더니 + het gevolg.", "-더니 gebruik je voor wat een ander deed.", "-았/었으면 is een wens of voorwaarde, geen gevolg.", "-(으)ㄹ 테니까 gaat over iets wat nog moet komen."] },
    { type: "mc", q: "형이 어릴 때는 키가 ___ 지금은 저보다 커요. (Mijn broer was klein als kind, maar nu is hij langer dan ik.)",
      options: ["작더니", "작았더니", "작으니까", "작아서"], answer: 0,
      why: ["Goed: -더니 voor een verandering die je bij een ander zag.", "-았/었더니 is voor je eigen handeling, niet voor je broer.", "-(으)니까 geeft een reden; klein zijn is geen reden om lang te worden.", "-아서 geeft een reden, geen verandering."] },
    { type: "mc", q: "커피를 세 잔이나 마셨더니 잠이 안 와요. Wat betekent dit?",
      options: ["Ik dronk wel drie koppen koffie, en daardoor kan ik niet slapen.", "Hij dronk drie koppen koffie, en daardoor kan hij niet slapen.", "Als ik drie koppen koffie drink, kan ik niet slapen.", "Ik drink drie koppen koffie om niet in slaap te vallen."], answer: 0,
      why: ["Goed: eigen handeling + 었더니 + gevolg.", "-았/었더니 gaat over je eigen handeling, niet over hem.", "Het gaat om iets wat al gebeurd is, geen voorwaarde.", "-았/었더니 geeft geen doel."] }
  ]
})
