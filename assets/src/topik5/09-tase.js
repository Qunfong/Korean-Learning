({
  id: "09", slug: "tase", title: "-(으)ㄴ/는 탓에", sub: "Door de schuld van ... (en dat liep slecht af)",
  canDo: "Je kunt nu een oorzaak noemen die tot iets slechts leidde, en de schuld aanwijzen, met -(으)ㄴ/는 탓에 en 탓이다.",
  guess: {
    q: "비가 많이 온 탓에 경기가 취소되었어요. Wat betekent dit, denk je?",
    options: [
      "Doordat het hard regende, werd de wedstrijd helaas afgelast.",
      "Dankzij de regen werd de wedstrijd afgelast.",
      "Hoewel het hard regende, werd de wedstrijd afgelast.",
      "Het regende hard, zodat de wedstrijd kon doorgaan."
    ], answer: 0,
    why: [
      "Goed: -(으)ㄴ 탓에 noemt een oorzaak met een slecht gevolg.",
      "\"Dankzij\" is -(으)ㄴ 덕분에. 탓에 is negatief.",
      "\"Hoewel\" is -지만 of -는데도. 탓에 geeft een oorzaak.",
      "취소되었어요 betekent \"werd afgelast\", niet \"kon doorgaan\"."
    ]
  },
  problem: "In het Nederlands zeg je: \"Door de regen ging de wedstrijd niet door.\" Soms wil je ook laten horen dat het jammer is, of wie de schuld heeft. In het Koreaans zeg je dan -(으)ㄴ/는 탓에. 탓 betekent \"schuld\". Voor iets goeds gebruik je het nooit.",
  pattern: [
    { l: "oorzaak", v: "비가 많이", c: 3 }, { l: "bijv. vorm", v: "온", c: 4 },
    { l: "탓에", v: "탓에", c: 2, key: true }, { l: "slecht gevolg", v: "경기가 취소되었어요", c: 5 }
  ],
  patternCap: "Werkwoord + 는 탓에 (nu) / (으)ㄴ 탓에 (verleden) · bijv. ww + (으)ㄴ 탓에 · naamwoord + 탓에 · ... -(으)ㄴ/는 탓이다",
  rules: [
    "Werkwoord in het heden of een gewoonte: -는 탓에 (못 자는 탓에). In het verleden: -(으)ㄴ 탓에 (온 탓에, 먹은 탓에).",
    "Bijvoeglijk werkwoord: -(으)ㄴ 탓에 (추운 탓에, 바쁜 탓에). Naamwoord: N 탓에 (날씨 탓에).",
    "Aan het eind van de zin: -(으)ㄴ/는 탓이다 = \"dat komt (helaas) doordat\". Met een naamwoord: 내 탓이다.",
    "Het gevolg is altijd negatief, en het is een feit. Na 탓에 komt geen verzoek of voorstel (-(으)세요, -자).",
    "탓에 klinkt formeel en komt veel voor in nieuws en schrijftaal. In spreektaal hoor je vooral 탓이야 en 남 탓."
  ],
  pitfall: "탓에 is alleen voor slechte gevolgen. 선생님 탓에 합격했어요 zegt dat het de schuld van de leraar is dat je slaagde. Voor iets goeds zeg je 덕분에.",
  examples: [
    { cn: "비가 많이 온 탓에 경기가 취소되었다.", py: "Biga mani on tase gyeonggiga chwisodoeeotda.", nl: "Doordat het hard regende, werd de wedstrijd afgelast." },
    { cn: "요즘 잠을 못 자는 탓에 늘 피곤해요.", py: "Yojeum jameul mot janeun tase neul pigonhaeyo.", nl: "Omdat ik de laatste tijd slecht slaap, ben ik altijd moe." },
    { cn: "날씨가 추운 탓에 감기에 걸린 사람이 많다.", py: "Nalssiga chuun tase gamgie geollin sarami manta.", nl: "Door het koude weer zijn er veel mensen verkouden." },
    { cn: "시험에 떨어진 건 공부를 안 한 탓이에요.", py: "Siheome tteoreojin geon gongbureul an han tasieyo.", nl: "Dat ik gezakt ben, komt doordat ik niet gestudeerd heb." }
  ],
  nuance: [
    { h: "탓에 of 덕분에?",
      p: "De vorm is gelijk, de toon is tegengesteld. -(으)ㄴ/는 덕분에 is voor een goed gevolg. Je laat dankbaarheid horen: \"dankzij\". -(으)ㄴ/는 탓에 is voor een slecht gevolg. Je wijst een schuldige aan. Kies dus op basis van het gevolg, niet van de oorzaak.",
      ex: [
        { cn: "친구가 도와준 덕분에 일찍 끝났어요.", py: "Chin-guga dowajun deokbune iljjik kkeunnasseoyo.", nl: "Dankzij de hulp van mijn vriend was ik vroeg klaar." },
        { cn: "친구가 늦게 온 탓에 기차를 놓쳤어요.", py: "Chin-guga neutge on tase gichareul nochyeosseoyo.", nl: "Doordat mijn vriend te laat kwam, misten we de trein." }
      ] },
    { h: "탓에 of -기 때문에?",
      p: "-기 때문에 is neutraal. Het past bij goede en slechte gevolgen en wijst niemand aan. 탓에 voegt een verwijt of spijt toe. Wil je alleen een reden geven, dan is 때문에 veiliger. Met een naamwoord: 나 때문이에요 (door mij) en 내 탓이에요 (het is mijn schuld).",
      ex: [
        { cn: "길이 막혔기 때문에 늦었어요.", py: "Giri makyeotgi ttaemune neujeosseoyo.", nl: "Ik was te laat, omdat het druk was op de weg." },
        { cn: "길이 막힌 탓에 회의에 늦었어요.", py: "Giri makin tase hoeuie neujeosseoyo.", nl: "Door die file was ik helaas te laat voor de vergadering." }
      ] },
    { h: "Spreektaal en schrijftaal",
      p: "In nieuws en verslagen zie je vaak N 탓에 en -(으)ㄴ 탓이다. Formeel is ook N을/를 남의 탓으로 돌리다: de schuld bij een ander leggen. In een gesprek gebruik je 탓 vooral als naamwoord: 내 탓이야, 네 탓이 아니야, 남 탓 하지 마.",
      ex: [
        { cn: "경기 침체 탓에 소비가 줄었다.", py: "Gyeonggi chimche tase sobiga jureotda.", nl: "Door de economische neergang is de consumptie gedaald." },
        { cn: "남 탓 하지 마.", py: "Nam tat haji ma.", nl: "Schuif de schuld niet op een ander." }
      ] }
  ],
  mistakes: [
    { wrong: "선생님 탓에 시험에 합격했어요.", right: "선생님 덕분에 시험에 합격했어요.", why: "Slagen is een goed gevolg. Daarvoor gebruik je 덕분에, niet 탓에." },
    { wrong: "날씨가 춥는 탓에 감기에 걸렸어요.", right: "날씨가 추운 탓에 감기에 걸렸어요.", why: "춥다 is een bijvoeglijk werkwoord. Dat krijgt -(으)ㄴ, niet -는." },
    { wrong: "비가 오는 탓에 우산을 가져가세요.", right: "비가 오니까 우산을 가져가세요.", why: "Na 탓에 komt geen verzoek. Gebruik -(으)니까 voor een reden met een verzoek." },
    { wrong: "늦게 일어나는 탓에 어제 버스를 놓쳤어요.", right: "늦게 일어난 탓에 어제 버스를 놓쳤어요.", why: "Het gaat om één keer, gisteren. Voor het verleden gebruik je -(으)ㄴ 탓에." }
  ],
  vocab: [
    ["-(으)ㄴ/는 탓에", "-(eu)n/neun tase", "door de schuld van, doordat (negatief)"], ["덕분에", "deokbune", "dankzij"],
    ["취소되다", "chwisodoeda", "afgelast worden"], ["태풍", "taepung", "tyfoon"],
    ["수확량", "suhwangnyang", "oogst (hoeveelheid)"], ["부족하다", "bujokada", "tekort zijn, onvoldoende zijn"],
    ["대책", "daechaek", "maatregel"], ["원인", "wonin", "oorzaak"],
    ["피해", "pihae", "schade"], ["남", "nam", "een ander, anderen"]
  ],
  dialogue: [
    ["A", "왜 이렇게 기운이 없어요?", "Wae ireoke giuni eopseoyo?", "Waarom ben je zo futloos?"],
    ["B", "어젯밤에 옆집이 시끄러운 탓에 한숨도 못 잤어요.", "Eojetbame yeopjibi sikkeureoun tase hansumdo mot jasseoyo.", "De buren maakten gisteravond zoveel lawaai dat ik geen oog dicht heb gedaan."],
    ["A", "저런. 그래서 아까 회의 때 실수했군요.", "Jeoreon. Geuraeseo akka hoeui ttae silsuhaetgunyo.", "Ach. Daarom maakte je zonet in de vergadering een fout."],
    ["B", "네, 다 잠을 못 잔 탓이에요.", "Ne, da jameul mot jan tasieyo.", "Ja, dat komt allemaal doordat ik niet geslapen heb."],
    ["A", "그래도 너무 남 탓만 하지 마세요.", "Geuraedo neomu nam tanman haji maseyo.", "Maar geef niet alleen anderen de schuld."],
    ["B", "맞아요. 오늘은 일찍 자야겠어요.", "Majayo. Oneureun iljjik jayagesseoyo.", "Klopt. Vanavond moet ik vroeg gaan slapen."]
  ],
  reading: {
    title: "올해 사과 농사",
    lines: [
      { cn: "올해 여름에는 비가 거의 오지 않았다.", py: "Olhae yeoreumeneun biga geoui oji anatda.", nl: "Deze zomer heeft het bijna niet geregend." },
      { cn: "비가 오지 않은 탓에 사과가 잘 자라지 못했다.", py: "Biga oji aneun tase sagwaga jal jaraji motaetda.", nl: "Doordat het niet regende, groeiden de appels slecht." },
      { cn: "게다가 가을에 태풍이 온 탓에 많은 사과가 떨어졌다.", py: "Gedaga gaeure taepung-i on tase manheun sagwaga tteoreojyeotda.", nl: "Bovendien vielen er in de herfst door een tyfoon veel appels van de bomen." },
      { cn: "수확량은 작년의 절반 정도에 그쳤다.", py: "Suhwangnyang-eun jangnyeonui jeolban jeongdoe geuchyeotda.", nl: "De oogst bleef steken op ongeveer de helft van vorig jaar." },
      { cn: "사과가 부족한 탓에 가격이 크게 올랐다.", py: "Sagwaga bujokan tase gagyeogi keuge ollatda.", nl: "Door het tekort aan appels is de prijs sterk gestegen." },
      { cn: "어떤 사람들은 정부의 대책이 늦은 탓이라고 말한다.", py: "Eotteon saramdeureun jeongbuui daechaegi neujeun tasirago malhanda.", nl: "Sommige mensen zeggen dat het komt doordat de overheid te laat maatregelen nam." },
      { cn: "하지만 전문가들은 기후 변화가 가장 큰 원인이라고 본다.", py: "Hajiman jeonmun-gadeureun gihu byeonhwaga gajang keun wonin-irago bonda.", nl: "Maar deskundigen zien klimaatverandering als de grootste oorzaak." },
      { cn: "다행히 일부 농가는 새로운 기술 덕분에 피해를 줄일 수 있었다.", py: "Dahaenghi ilbu nongganeun saeroun gisul deokbune pihaereul juril su isseotda.", nl: "Gelukkig konden sommige boerderijen dankzij nieuwe technologie de schade beperken." },
      { cn: "농민들은 내년에는 날씨가 좋기를 바라고 있다.", py: "Nongmindeureun naenyeoneneun nalssiga jokireul barago itda.", nl: "De boeren hopen dat het weer volgend jaar goed is." }
    ],
    questions: [
      { type: "mc", q: "Waarom is de prijs van appels gestegen?",
        options: ["Er zijn te weinig appels.", "De overheid heeft de prijs verhoogd.", "Er zijn te veel appels.", "De boeren hebben nieuwe technologie gekocht."], answer: 0,
        why: ["Goed: 사과가 부족한 탓에 가격이 크게 올랐다.", "Over een prijsverhoging door de overheid staat niets.", "Het is juist een tekort: 부족하다.", "De technologie beperkte de schade. Ze is niet de reden van de prijs."] },
      { type: "mc", q: "Wat zien deskundigen als de grootste oorzaak?",
        options: ["Klimaatverandering.", "De late maatregelen van de overheid.", "Nieuwe technologie.", "De boeren zelf."], answer: 0,
        why: ["Goed: 기후 변화가 가장 큰 원인이라고 본다.", "Dat zeggen 어떤 사람들, niet de deskundigen.", "Technologie hielp juist: 덕분에.", "Over schuld van de boeren staat niets."] },
      { type: "mc", q: "Waarom staat er in zin 8 덕분에 en niet 탓에?",
        options: ["Het gevolg is goed: de schade werd kleiner.", "덕분에 is formeler dan 탓에.", "Na een naamwoord kan 탓에 niet.", "덕분에 gebruik je alleen voor personen."], answer: 0,
        why: ["Goed: 덕분에 hoort bij een goed gevolg, 탓에 bij een slecht.", "Allebei komen in formele tekst voor. Het verschil is de toon.", "N 탓에 bestaat wel: 날씨 탓에.", "덕분에 werkt ook met dingen: 기술 덕분에."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Door de regen werd de wedstrijd afgelast.\" Welke zin klopt?",
      options: ["비가 온 탓에 경기가 취소됐어요.", "비가 오은 탓에 경기가 취소됐어요.", "비가 온 덕분에 경기가 취소됐어요.", "비가 왔는 탓에 경기가 취소됐어요."], answer: 0,
      why: ["Goed: werkwoord in het verleden + -(으)ㄴ 탓에.", "Na een klinker komt alleen ㄴ, geen 은: 온.", "Afgelast worden is een slecht gevolg. 덕분에 is voor iets goeds.", "Na 았 komt geen -는. Zeg: 온 탓에."] },
    { type: "mc", q: "\"Dankzij jouw hulp was ik vroeg klaar.\" Welke zin klopt?",
      options: ["네가 도와준 덕분에 일찍 끝났어.", "네가 도와준 탓에 일찍 끝났어.", "네가 도와주는 탓에 일찍 끝났어.", "네가 도와준 때문에 일찍 끝났어."], answer: 0,
      why: ["Goed: een goed gevolg krijgt 덕분에.", "탓에 is voor een slecht gevolg. Vroeg klaar zijn is goed.", "탓에 is negatief, en het heden past niet bij iets wat al gebeurd is.", "때문에 komt na -기 of een naamwoord: 도와줬기 때문에."] },
    { type: "mc", q: "날씨가 ___ 탓에 감기에 걸렸어요. (Door het koude weer ...)",
      options: ["추운", "춥는", "춥은", "추울"], answer: 0,
      why: ["Goed: 춥다 wordt 추운: bijv. ww + -(으)ㄴ 탓에.", "-는 hoort bij werkwoorden. 춥다 is een bijvoeglijk werkwoord.", "Bij 춥다 verandert ㅂ in 우: 추운.", "Vóór 탓 staat geen (으)ㄹ-vorm."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["길이 막히는 탓에 일찍 출발하세요.", "길이 막힌 탓에 늦었어요.", "길이 막혔기 때문에 늦었어요.", "길이 막혀서 늦었어요."], answer: 0,
      why: ["Goed gezien: deze zin is fout. Na 탓에 komt geen verzoek. Zeg: 길이 막히니까 일찍 출발하세요.", "Deze zin klopt: verleden + -(으)ㄴ 탓에.", "Deze zin klopt: neutrale reden met -기 때문에.", "Deze zin klopt: reden met -아/어서."] },
    { type: "mc", q: "Welke zin past het best in een nieuwsbericht?",
      options: ["경기 침체 탓에 소비가 줄었다.", "경기 침체 탓에 소비가 줄었어.", "경기 침체 탓에 소비가 줄었잖아요.", "경기 침체 탓에 소비가 줄었네요."], answer: 0,
      why: ["Goed: in nieuws eindig je op -다.", "-어 is informele spreektaal.", "-잖아요 is spreektaal: \"je weet toch\".", "-네요 drukt verrassing uit in een gesprek."] },
    { type: "mc", q: "다 내 탓이에요. Wat betekent dit?",
      options: ["Het is allemaal mijn schuld.", "Het is allemaal dankzij mij.", "Het is allemaal jouw schuld.", "Het is niet mijn schuld."], answer: 0,
      why: ["Goed: 내 탓 = mijn schuld.", "\"Dankzij mij\" is 내 덕분이에요.", "\"Jouw schuld\" is 네 탓이에요.", "Er staat geen ontkenning. Dat zou 내 탓이 아니에요 zijn."] },
    { type: "mc", q: "A: 다 동생 때문이야! B: 남 탓 하지 마. Wat bedoelt B?",
      options: ["Schuif de schuld niet op een ander.", "Bedank je broertje niet.", "Praat niet over je broertje.", "Het is niet erg."], answer: 0,
      why: ["Goed: 남 탓(을) 하다 = een ander de schuld geven.", "탓 betekent \"schuld\", niet \"dank\".", "B zegt iets over de schuld, niet over het praten zelf.", "B troost niet. B verwijt A iets."] },
    { type: "order", q: "Zet in de goede volgorde: \"Doordat ik te veel at, had ik buikpijn.\"",
      tokens: [["너무 많이", "neomu mani"], ["먹은", "meogeun"], ["탓에", "tase"], ["배가 아팠어요", "baega apasseoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Dat komt doordat jij te laat kwam.\"",
      tokens: [["그건", "geugeon"], ["네가", "nega"], ["늦게 온", "neutge on"], ["탓이야", "tasiya"]] },
    { type: "fill", q: "회의에 늦은 건 길이 ___ 탓이에요. (Dat ik te laat was, kwam doordat de weg vaststond. Gebruik 막히다.)",
      answers: ["막힌"], hint: "막히다 = vaststaan. Het gaat over het verleden.",
      why: "Werkwoord in het verleden + -(으)ㄴ 탓이다: 막히다 wordt 막힌 탓이에요." },
    { type: "open", q: "Vertaal: \"Doordat ik mijn telefoon thuis had laten liggen, kon ik je niet bellen.\"",
      model: ["휴대폰을 집에 두고 온 탓에 전화를 못 했어요.", "휴대폰을 집에 놓고 온 탓에 너한테 전화를 못 했어.", "핸드폰을 집에 두고 나온 탓에 연락을 못 했어요."],
      tip: "Check: verleden + -(으)ㄴ 탓에, en een negatief gevolg erna?" },
    { type: "open", q: "Vertaal: \"Het is niet jouw schuld. Het komt door het weer.\"",
      model: ["네 탓이 아니야. 날씨 탓이야.", "당신 탓이 아니에요. 날씨 탓이에요."],
      tip: "Check: N 탓이다, en de ontkenning 탓이 아니다?" }
  ],
  review: [
    { type: "mc", q: "눈이 많이 ___ 탓에 비행기가 늦게 출발했어요. (Door de sneeuw ...)",
      options: ["온", "왔는", "올", "와서"], answer: 0,
      why: ["Goed: verleden + -(으)ㄴ 탓에: 온 탓에.", "Na 았 komt geen -는.", "Vóór 탓 staat geen (으)ㄹ-vorm.", "Vóór 탓 staat een bijvoeglijke vorm, niet -아서."] },
    { type: "mc", q: "새 감독 ___ 팀이 처음으로 우승했어요. (Dankzij de nieuwe trainer ...)",
      options: ["덕분에", "탓에", "탓이", "덕분이"], answer: 0,
      why: ["Goed: winnen is een goed gevolg, dus 덕분에.", "탓에 is voor een slecht gevolg.", "탓이 is een onderwerpsvorm. Hier hoort 에, en 덕분.", "In het midden van de zin hoort 덕분에, met 에."] },
    { type: "mc", q: "몸이 약한 탓에 자주 아파요. Wat betekent dit?",
      options: ["Omdat mijn lichaam zwak is, ben ik helaas vaak ziek.", "Dankzij mijn zwakke lichaam ben ik vaak ziek.", "Hoewel mijn lichaam zwak is, ben ik vaak ziek.", "Om sterker te worden, ben ik vaak ziek."], answer: 0,
      why: ["Goed: -(으)ㄴ 탓에 geeft een oorzaak met een slecht gevolg.", "\"Dankzij\" is 덕분에, voor iets goeds.", "\"Hoewel\" is -지만.", "Een doel is -기 위해서."] }
  ]
})
