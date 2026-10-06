({
  id: "07", slug: "ppeonhada", title: "-(으)ㄹ 뻔하다", sub: "Bijna ... (maar het is net niet gebeurd)",
  canDo: "Je kunt nu vertellen dat iets bijna gebeurde maar net niet, met -(으)ㄹ 뻔했다.",
  guess: {
    q: "길이 미끄러워서 넘어질 뻔했어요. Wat betekent dit, denk je?",
    options: [
      "De weg was glad, en ik was bijna gevallen.",
      "De weg was glad, en ik ben gevallen.",
      "De weg was glad, dus ik ga misschien vallen.",
      "De weg was glad, maar ik viel nooit."
    ], answer: 0,
    why: [
      "Goed: -(으)ㄹ 뻔했다 betekent \"bijna\": het is net niet gebeurd.",
      "Dan zou er 넘어졌어요 staan. Met 뻔했다 is het niet gebeurd.",
      "뻔했다 staat in het verleden. Het gaat niet over later.",
      "Het gaat om één moment dat bijna misging, niet om \"nooit\"."
    ]
  },
  problem: "In het Nederlands zeg je: \"Ik was bijna gevallen\" of \"Het scheelde niet veel.\" Het is dus net niet gebeurd. In het Koreaans kan 거의 dat niet goed uitdrukken. Daarvoor heb je -(으)ㄹ 뻔했다 nodig. Je zegt: het was zo dichtbij, maar het gebeurde niet.",
  pattern: [
    { l: "reden", v: "길이 미끄러워서", c: 3 }, { l: "하마터면", v: "하마터면", c: 1 },
    { l: "stam + (으)ㄹ", v: "넘어질", c: 4 }, { l: "뻔했다", v: "뻔했어요", c: 2, key: true }
  ],
  patternCap: "(하마터면) + stam + (으)ㄹ 뻔했다 · 갈 뻔했다 · 놓칠 뻔했다 · 잊을 뻔했다 · 죽을 뻔했다",
  rules: [
    "Na een klinker of ㄹ: -ㄹ 뻔했다 (갈, 놓칠, 울). Na een 받침: -을 뻔했다 (잊을, 늦을).",
    "Je gebruikt het bijna altijd in het verleden: 뻔했다, 뻔했어요. Het gaat over iets wat al voorbij is.",
    "Het werkt met werkwoorden. Vóór 뻔 staat altijd de (으)ㄹ-vorm, nooit -는 of -(으)ㄴ.",
    "Vaak staat 하마터면 of 자칫 ervoor: \"het scheelde maar weinig\". Een reden komt met -아/어서 of -는데.",
    "In spreektaal overdrijf je er vaak mee: 죽을 뻔했어요 = \"ik ging bijna dood (van ...)\"."
  ],
  pitfall: "Met -(으)ㄹ 뻔했다 is het NIET gebeurd. 버스를 놓칠 뻔했어요 betekent: ik heb de bus net gehaald. Heb je hem echt gemist, zeg dan 버스를 놓쳤어요.",
  examples: [
    { cn: "늦잠을 자서 비행기를 놓칠 뻔했어요.", py: "Neutjameul jaseo bihaenggireul nochil ppeonhaesseoyo.", nl: "Ik had me verslapen en had bijna het vliegtuig gemist." },
    { cn: "하마터면 친구 생일을 잊을 뻔했어요.", py: "Hamateomyeon chingu saeng-ireul ijeul ppeonhaesseoyo.", nl: "Het scheelde weinig of ik was de verjaardag van mijn vriend vergeten." },
    { cn: "운전자의 실수로 큰 사고가 날 뻔했다.", py: "Unjeonjaui silsuro keun sagoga nal ppeonhaetda.", nl: "Door een fout van de bestuurder gebeurde er bijna een groot ongeluk." },
    { cn: "너무 웃겨서 죽을 뻔했어.", py: "Neomu utgyeoseo jugeul ppeonhaesseo.", nl: "Het was zo grappig, ik lag dubbel." }
  ],
  nuance: [
    { h: "-(으)ㄹ 뻔했다 of 거의 -았/었다?",
      p: "Allebei vertaal je soms met \"bijna\". Toch is het verschil groot. 거의 -았/었다 gaat over hoeveel: het is grotendeels gebeurd. -(으)ㄹ 뻔했다 gaat over een gebeurtenis die net NIET plaatsvond. Gebruik 뻔했다 dus niet voor voortgang, zoals bijna klaar zijn met werk.",
      ex: [
        { cn: "우유를 거의 다 마셨어요.", py: "Uyureul geoui da masyeosseoyo.", nl: "Ik heb de melk bijna helemaal opgedronken. (Er is nog een beetje.)" },
        { cn: "우유를 쏟을 뻔했어요.", py: "Uyureul ssodeul ppeonhaesseoyo.", nl: "Ik had de melk bijna gemorst. (Maar het ging goed.)" }
      ] },
    { h: "Opluchting, spijt en overdrijving",
      p: "Meestal ging er bijna iets mis, en je bent opgelucht. Maar het kan ook iets goeds zijn dat net niet lukte. Dan klinkt spijt mee: 이길 뻔했는데 ... In spreektaal overdrijf je vaak. 배고파서 죽을 뻔했어요 betekent niet dat je echt in gevaar was.",
      ex: [
        { cn: "우리 팀이 이길 뻔했는데 마지막에 졌어요.", py: "Uri timi igil ppeonhaenneunde majimage jyeosseoyo.", nl: "Ons team had bijna gewonnen, maar verloor op het eind." },
        { cn: "배고파서 죽을 뻔했어요.", py: "Baegopaseo jugeul ppeonhaesseoyo.", nl: "Ik verging van de honger." }
      ] },
    { h: "Spreektaal, schrijftaal en het andere 뻔하다",
      p: "In een gesprek hoor je vaak 하마터면 ... 뻔했어요 of kort: 큰일 날 뻔했어요! In nieuws en verslagen zie je 자칫 ... 뻔했다, met -다. Let op: het bijvoeglijk werkwoord 뻔하다 zonder (으)ㄹ ervoor betekent \"voorspelbaar, duidelijk\". Dat is een ander woord.",
      ex: [
        { cn: "자칫 큰 화재로 이어질 뻔했다.", py: "Jachit keun hwajaero ieojil ppeonhaetda.", nl: "Het had bijna tot een grote brand geleid." },
        { cn: "그 영화는 결말이 뻔해요.", py: "Geu yeonghwaneun gyeolmari ppeonhaeyo.", nl: "Het einde van die film is voorspelbaar." }
      ] }
  ],
  mistakes: [
    { wrong: "하마터면 넘어질 뻔해요.", right: "하마터면 넘어질 뻔했어요.", why: "Het gaat over iets wat al voorbij is. Gebruik het verleden: 뻔했어요." },
    { wrong: "지갑을 잃어버린 뻔했어요.", right: "지갑을 잃어버릴 뻔했어요.", why: "Vóór 뻔 staat altijd de (으)ㄹ-vorm, ook al gaat het over het verleden." },
    { wrong: "버스를 놓칠 뻔했어요. 그래서 택시를 탔어요.", right: "버스를 놓쳤어요. 그래서 택시를 탔어요.", why: "Je hebt de bus echt gemist. Met 뻔했다 zou je hem net gehaald hebben." },
    { wrong: "하마터면 다쳤어요.", right: "하마터면 다칠 뻔했어요.", why: "하마터면 betekent \"het scheelde weinig\". Het vraagt om -(으)ㄹ 뻔했다 aan het eind." }
  ],
  vocab: [
    ["-(으)ㄹ 뻔하다", "-(eu)l ppeonhada", "bijna (maar net niet)"], ["하마터면", "hamateomyeon", "het scheelde weinig of ..."],
    ["놓치다", "nochida", "missen (bus, kans)"], ["넘어지다", "neomeojida", "vallen, omvallen"],
    ["늦잠", "neutjam", "het zich verslapen"], ["쏟다", "ssotda", "morsen, omgooien"],
    ["자칫", "jachit", "met een kleine fout, zomaar"], ["사고", "sago", "ongeluk"],
    ["부딪치다", "buditchida", "botsen, tegen iets aan lopen"], ["다행이다", "dahaeng-ida", "gelukkig zijn (dat het goed afliep)"]
  ],
  dialogue: [
    ["A", "왜 이렇게 늦었어요?", "Wae ireoke neujeosseoyo?", "Waarom ben je zo laat?"],
    ["B", "말도 마세요. 오는 길에 사고가 날 뻔했어요.", "Maldo maseyo. Oneun gire sagoga nal ppeonhaesseoyo.", "Hou op. Onderweg had ik bijna een ongeluk."],
    ["A", "정말요? 괜찮아요?", "Jeongmallyo? Gwaenchanayo?", "Echt? Gaat het?"],
    ["B", "네. 자전거가 갑자기 나와서 하마터면 부딪칠 뻔했어요.", "Ne. Jajeongeoga gapjagi nawaseo hamateomyeon buditchil ppeonhaesseoyo.", "Ja. Er kwam ineens een fiets aan, en het scheelde weinig of ik was ertegenaan gebotst."],
    ["A", "안 다쳐서 다행이에요.", "An dachyeoseo dahaeng-ieyo.", "Gelukkig ben je niet gewond."],
    ["B", "네, 정말 큰일 날 뻔했어요.", "Ne, jeongmal keunil nal ppeonhaesseoyo.", "Ja, dat had echt slecht kunnen aflopen."]
  ],
  reading: {
    title: "아슬아슬한 아침",
    lines: [
      { cn: "오늘 아침 나는 알람을 듣지 못하고 늦잠을 잤다.", py: "Oneul achim naneun allameul deutji mothago neutjameul jatda.", nl: "Vanochtend hoorde ik de wekker niet en versliep ik me." },
      { cn: "서둘러 나가다가 계단에서 넘어질 뻔했다.", py: "Seodulleo nagadaga gyedaneseo neomeojil ppeonhaetda.", nl: "Toen ik haastig naar buiten ging, viel ik bijna van de trap." },
      { cn: "지하철역에 도착했을 때 열차 문이 막 닫히고 있었다.", py: "Jihacheollyeoge dochakaesseul ttae yeolcha muni mak dachigo isseotda.", nl: "Toen ik bij het metrostation aankwam, gingen de deuren net dicht." },
      { cn: "뛰어서 겨우 탔지만 가방이 문에 낄 뻔했다.", py: "Ttwieoseo gyeou tatjiman gabang-i mune kkil ppeonhaetda.", nl: "Ik rende en stapte nog net in, maar mijn tas kwam bijna klem te zitten tussen de deuren." },
      { cn: "회사에 도착해서 보니 중요한 서류가 보이지 않았다.", py: "Hoesae dochakaeseo boni jung-yohan seoryuga boiji anatda.", nl: "Op kantoor zag ik mijn belangrijke documenten niet." },
      { cn: "하마터면 다시 집에 돌아갈 뻔했다.", py: "Hamateomyeon dasi jibe doragal ppeonhaetda.", nl: "Het scheelde weinig of ik was weer naar huis gegaan." },
      { cn: "그런데 서류는 가방 안쪽 주머니에 있었다.", py: "Geureonde seoryuneun gabang anjjok jumeonie isseotda.", nl: "Maar de documenten zaten in het binnenvak van mijn tas." },
      { cn: "결국 회의에는 늦지 않았다.", py: "Gyeolguk hoeuieneun neutji anatda.", nl: "Uiteindelijk was ik niet te laat voor de vergadering." },
      { cn: "아슬아슬한 아침이었지만 다행히 아무 일도 없었다.", py: "Aseuraseulhan achimieotjiman dahaenghi amu ildo eopseotda.", nl: "Het was een spannende ochtend, maar gelukkig ging er niets mis." }
    ],
    questions: [
      { type: "mc", q: "Waar waren de documenten?",
        options: ["In het binnenvak van de tas.", "Thuis op tafel.", "In de metro.", "Op kantoor in een la."], answer: 0,
        why: ["Goed: 서류는 가방 안쪽 주머니에 있었다.", "Hij ging bijna naar huis, maar ze lagen niet thuis.", "Over de metro staat dat zijn tas bijna klem zat.", "Op kantoor zag hij ze eerst niet."] },
      { type: "mc", q: "Was de schrijver te laat voor de vergadering?",
        options: ["Nee, hij was op tijd.", "Ja, een beetje.", "Ja, want hij ging terug naar huis.", "Dat staat niet in de tekst."], answer: 0,
        why: ["Goed: 결국 회의에는 늦지 않았다.", "늦지 않았다 betekent \"niet te laat\".", "Hij ging bijna terug, maar deed het niet: 돌아갈 뻔했다.", "Het staat er: 회의에는 늦지 않았다."] },
      { type: "mc", q: "계단에서 넘어질 뻔했다. Wat gebeurde er?",
        options: ["Hij viel bijna van de trap, maar viel niet.", "Hij viel van de trap.", "Hij was bang om later te vallen.", "Hij liep langzaam de trap af."], answer: 0,
        why: ["Goed: -(으)ㄹ 뻔했다 = het is net niet gebeurd.", "Dan zou er 넘어졌다 staan.", "뻔했다 gaat over iets wat al voorbij is.", "Er staat dat hij haast had: 서둘러."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik ben bijna mijn telefoon kwijtgeraakt.\" Welke zin klopt?",
      options: ["휴대폰을 잃어버릴 뻔했어요.", "휴대폰을 잃어버린 뻔했어요.", "휴대폰을 잃어버릴 뻔해요.", "휴대폰을 잃어버리을 뻔했어요."], answer: 0,
      why: ["Goed: stam op een klinker + ㄹ 뻔했다.", "Vóór 뻔 staat de (으)ㄹ-vorm, niet -ㄴ.", "Het is al voorbij. Gebruik het verleden: 뻔했어요.", "Na een klinker komt alleen ㄹ, geen 을."] },
    { type: "mc", q: "시험에 떨어질 뻔했어요. Wat is er gebeurd?",
      options: ["Ik ben net geslaagd.", "Ik ben gezakt.", "Ik zak misschien straks.", "Ik wilde zakken."], answer: 0,
      why: ["Goed: 뻔했다 = het is net niet gebeurd. Je bent dus geslaagd.", "Gezakt is 떨어졌어요. Met 뻔했다 gebeurde het niet.", "뻔했다 gaat over het verleden, niet over straks.", "Over willen staat niets in de zin."] },
    { type: "mc", q: "Welke zin betekent dat het WEL gebeurd is?",
      options: ["우유를 거의 다 마셨어요.", "우유를 쏟을 뻔했어요.", "우유를 다 마실 뻔했어요.", "하마터면 우유를 버릴 뻔했어요."], answer: 0,
      why: ["Goed: 거의 다 마셨다 = je hebt het grootste deel echt gedronken.", "쏟을 뻔했다: je hebt het net niet gemorst.", "마실 뻔했다: je hebt het net niet opgedronken.", "하마터면 ... 뻔했다: je hebt het net niet weggegooid."] },
    { type: "mc", q: "하마터면 약속을 ___ 뻔했어요. (Ik was de afspraak bijna vergeten.)",
      options: ["잊을", "잊는", "잊은", "잊어서"], answer: 0,
      why: ["Goed: 잊다 heeft een 받침, dus 잊을 뻔했어요.", "Vóór 뻔 staat de (으)ㄹ-vorm, niet -는.", "Vóór 뻔 staat de (으)ㄹ-vorm, niet -(으)ㄴ.", "-어서 is een verbindingsvorm. Vóór 뻔 hoort (으)ㄹ."] },
    { type: "mc", q: "\"De weg was glad en ik viel bijna.\" Welke zin klopt?",
      options: ["길이 미끄러워서 넘어질 뻔했어요.", "길이 미끄러워서 넘어질 뻔해요.", "길이 미끄러워서 넘어질 뻔할 거예요.", "길이 미끄러워서 넘어지는 뻔했어요."], answer: 0,
      why: ["Goed: (으)ㄹ-vorm + 뻔했어요, in het verleden.", "Het is al gebeurd. Gebruik 뻔했어요.", "-(으)ㄹ 뻔하다 gaat niet over de toekomst.", "Vóór 뻔 staat de (으)ㄹ-vorm, niet -는."] },
    { type: "mc", q: "A: 그 공연 어땠어요? B: 너무 웃겨서 죽을 뻔했어요. Wat bedoelt B?",
      options: ["Het was ontzettend grappig.", "B was echt in levensgevaar.", "B wilde liever doodgaan.", "Het was helemaal niet grappig."], answer: 0,
      why: ["Goed: 죽을 뻔했다 is hier een overdrijving in spreektaal.", "Het is een overdrijving, geen echt gevaar.", "Over willen staat niets in de zin.", "웃겨서 betekent juist \"omdat het grappig was\"."] },
    { type: "mc", q: "Welke zin past het best in een nieuwsbericht?",
      options: ["운전자의 실수로 큰 사고가 날 뻔했다.", "운전자의 실수로 큰 사고가 날 뻔했어.", "운전자의 실수로 큰 사고가 날 뻔했잖아요.", "운전자의 실수로 큰 사고가 날 뻔했네요."], answer: 0,
      why: ["Goed: in een nieuwsbericht eindig je op -다.", "-어 is informele spreektaal.", "-잖아요 is spreektaal: \"je weet toch\".", "-네요 drukt verrassing uit in een gesprek."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik had bijna mijn paspoort thuis laten liggen.\"",
      tokens: [["여권을 집에", "yeogwoneul jibe"], ["두고", "dugo"], ["올", "ol"], ["뻔했어요", "ppeonhaesseoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Vanochtend regende het, en ik was bijna te laat.\"",
      tokens: [["오늘 아침에", "oneul achime"], ["비가 와서", "biga waseo"], ["지각할", "jigakal"], ["뻔했어요", "ppeonhaesseoyo"]],
      alt: ["비가 와서 오늘 아침에 지각할 뻔했어요"] },
    { type: "fill", q: "길에서 휴대폰을 보다가 차에 ___ 뻔했어요. (Ik werd bijna aangereden.)",
      answers: ["치일"], hint: "치이다 = aangereden worden. Welke vorm komt vóór 뻔?",
      why: "치이다 eindigt op een klinker, dus -ㄹ: 치일 뻔했어요." },
    { type: "open", q: "Vertaal: \"Ik had me verslapen en had bijna mijn examen gemist.\"",
      model: ["늦잠을 자서 시험을 놓칠 뻔했어요.", "늦잠을 자서 하마터면 시험을 못 볼 뻔했어요.", "늦잠을 자서 시험에 늦을 뻔했어요."],
      tip: "Check: (으)ㄹ-vorm vóór 뻔, en 뻔했어요 in het verleden?" },
    { type: "open", q: "Vertaal: \"Ons team had bijna gewonnen, maar verloor in de laatste minuut.\"",
      model: ["우리 팀이 이길 뻔했는데 마지막 1분에 졌어요.", "우리 팀이 이길 뻔했지만 마지막 1분에 지고 말았어요."],
      tip: "Check: 이길 뻔했다 voor de winst die net niet lukte, en 졌어요 voor wat echt gebeurde." }
  ],
  review: [
    { type: "mc", q: "버스를 잘못 ___ 뻔했어요. (Ik had bijna de verkeerde bus genomen.)",
      options: ["탈", "타는", "탄", "탔을"], answer: 0,
      why: ["Goed: 타다 eindigt op een klinker, dus 탈 뻔했어요.", "Vóór 뻔 staat de (으)ㄹ-vorm, niet -는.", "Vóór 뻔 staat de (으)ㄹ-vorm, niet -ㄴ.", "Het verleden staat al in 뻔했어요. Vóór 뻔 komt geen 았."] },
    { type: "mc", q: "커피를 쏟을 뻔했어요. Wat is er gebeurd?",
      options: ["De koffie werd bijna gemorst, maar het ging goed.", "De koffie werd gemorst.", "De koffie wordt straks misschien gemorst.", "De koffie is bijna op."], answer: 0,
      why: ["Goed: 뻔했다 = het is net niet gebeurd.", "Gemorst is 쏟았어요.", "뻔했다 gaat over iets wat al voorbij is.", "\"Bijna op\" zou 거의 다 마셨어요 zijn."] },
    { type: "mc", q: "\"Dat had slecht kunnen aflopen!\" Welke zin klopt?",
      options: ["하마터면 큰일 날 뻔했어요!", "하마터면 큰일 났어요!", "하마터면 큰일 날 거예요!", "하마터면 큰일 나는 뻔했어요!"], answer: 0,
      why: ["Goed: 하마터면 + (으)ㄹ 뻔했어요.", "하마터면 vraagt om 뻔했다, niet om een gewoon verleden.", "-(으)ㄹ 거예요 is toekomst. 하마터면 gaat over iets voorbij.", "Vóór 뻔 staat de (으)ㄹ-vorm, niet -는."] }
  ]
})
