({
  id: "02", slug: "ttaemune", title: "-기 때문에", sub: "Omdat: een sterke reden geven",
  canDo: "Je kunt nu een duidelijke reden geven met -기 때문에, ook in de verleden tijd, en je weet wanneer -아서/어서 of -(으)니까 beter past.",
  guess: {
    q: "\"Ik was te laat, omdat de bus niet kwam.\" Welke zin klopt, denk je?",
    options: ["버스가 안 왔기 때문에 늦었어요.", "버스가 안 와기 때문에 늦었어요.", "버스가 안 왔기 때문 늦었어요.", "버스가 안 왔때문에 늦었어요."], answer: 0,
    why: ["Goed: 왔 + -기 때문에.", "-기 komt na de stam of na 았/었, niet na de 아-vorm.", "때문 heeft hier 에 nodig: 때문에.", "Tussen 왔 en 때문에 ontbreekt -기."]
  },
  problem: "Je kent -아서/어서 al voor \"omdat\". Maar soms wil je de reden benadrukken, of de reden ligt duidelijk in het verleden. Dan gebruik je -기 때문에. Het lijkt op het Nederlandse \"doordat\" of \"vanwege\": het klinkt sterker en wat formeler.",
  pattern: [
    { l: "reden", v: "시험이 있", c: 1 }, { l: "-기 때문에", v: "기 때문에", c: 2, key: true }, { l: "gevolg", v: "공부해요", c: 4 }
  ],
  patternCap: "Stam (+ 았/었) + 기 때문에 + gevolg · Naamwoord + 때문에 = vanwege ... · Aan het eind: -기 때문이에요",
  rules: [
    "-기 때문에 komt direct na de stam, met of zonder 받침: 가기 때문에, 먹기 때문에, 바쁘기 때문에.",
    "Verleden tijd zet je in de reden zelf: 늦었기 때문에. Met -아서/어서 kan dat niet.",
    "Na een naamwoord zeg je alleen 때문에: 비 때문에 = vanwege de regen.",
    "Na -기 때문에 komt geen opdracht of voorstel (-(으)세요, -(으)ㅂ시다). Gebruik daarvoor -(으)니까.",
    "Als antwoord op 왜 eindig je met -기 때문이에요: 길이 막혔기 때문이에요."
  ],
  pitfall: "Bij sorry en dank gebruik je -아서/어서: 늦어서 죄송합니다. Met -기 때문에 klinkt een excuus vreemd.",
  examples: [
    { cn: "내일 시험이 있기 때문에 오늘 공부해야 해요.", py: "Naeil siheomi itgi ttaemune oneul gongbuhaeya haeyo.", nl: "Morgen heb ik een examen. Daarom moet ik vandaag studeren." },
    { cn: "길이 막혔기 때문에 늦었어요.", py: "Giri makyeotgi ttaemune neujeosseoyo.", nl: "Ik was te laat omdat er file was." },
    { cn: "감기 때문에 학교에 못 갔어요.", py: "Gamgi ttaemune hakgyoe mot gasseoyo.", nl: "Door een verkoudheid kon ik niet naar school." },
    { cn: "그 식당은 싸기 때문에 학생이 많아요.", py: "Geu sikdangeun ssagi ttaemune haksaengi manayo.", nl: "Dat restaurant is goedkoop. Daarom komen er veel studenten." }
  ],
  nuance: [
    { h: "-기 때문에, -아서/어서 of -(으)니까?",
      p: "-아서/어서 is de neutrale, gewone reden; geen verleden tijd en geen opdracht. -기 때문에 legt de nadruk op de reden en klinkt formeler; ook geen opdracht. -(으)니까 geeft je eigen, persoonlijke reden en is de enige die vóór een opdracht of voorstel kan.",
      ex: [
        { cn: "비가 와서 집에 있었어요.", py: "Biga waseo jibe isseosseoyo.", nl: "Het regende, dus ik bleef thuis." },
        { cn: "비가 왔기 때문에 경기가 취소됐어요.", py: "Biga watgi ttaemune gyeonggiga chwisodwaesseoyo.", nl: "Doordat het regende, werd de wedstrijd afgelast." },
        { cn: "비가 오니까 우산을 가져가세요.", py: "Biga onikka usaneul gajyeogaseyo.", nl: "Het regent, dus neem een paraplu mee." }
      ] },
    { h: "Register: schrijftaal en uitleg",
      p: "-기 때문에 hoor je veel in nieuws, verslagen en presentaties. In een gewoon gesprek klinkt -아서/어서 natuurlijker. Op de vraag 왜 antwoord je netjes met -기 때문이에요 of formeel -기 때문입니다. In losse spreektaal zeg je vaak gewoon -아서요.",
      ex: [
        { cn: "왜 늦었어요? 길이 막혔기 때문이에요.", py: "Wae neujeosseoyo? Giri makyeotgi ttaemunieyo.", nl: "Waarom was je te laat? Omdat er file was." }
      ] },
    { h: "때문에 of 덕분에?",
      p: "Naamwoord + 때문에 noemt een oorzaak, vaak van iets vervelends. Na een persoon klinkt het als een verwijt. Voor iets goeds zeg je 덕분에: \"dankzij\".",
      ex: [
        { cn: "친구 때문에 늦었어요.", py: "Chingu ttaemune neujeosseoyo.", nl: "Door mijn vriend was ik te laat." },
        { cn: "친구 덕분에 이사를 빨리 끝냈어요.", py: "Chingu deokbune isareul ppalli kkeunnaesseoyo.", nl: "Dankzij mijn vriend was de verhuizing snel klaar." }
      ] }
  ],
  mistakes: [
    { wrong: "비가 오기 때문에 우산을 가져가세요.", right: "비가 오니까 우산을 가져가세요.", why: "Na -기 때문에 komt geen opdracht. Voor een opdracht of voorstel gebruik je -(으)니까." },
    { wrong: "도와주셨기 때문에 감사합니다.", right: "도와주셔서 감사합니다.", why: "Bij dank en sorry gebruik je vast -아서/어서, zonder verleden tijd." },
    { wrong: "숙제기 때문에 못 놀아요.", right: "숙제 때문에 못 놀아요.", why: "Na een naamwoord komt direct 때문에, zonder -기." },
    { wrong: "선생님 때문에 시험에 합격했어요.", right: "선생님 덕분에 시험에 합격했어요.", why: "Persoon + 때문에 klinkt als een verwijt. Voor iets goeds zeg je 덕분에." }
  ],
  vocab: [
    ["-기 때문에", "-gi ttaemune", "omdat, doordat"], ["막히다", "makhida", "vaststaan (verkeer), verstopt zijn"], ["감기", "gamgi", "verkoudheid"],
    ["발표", "balpyo", "presentatie"], ["퇴근하다", "toegeunhada", "van het werk naar huis gaan"], ["무리하다", "murihada", "te veel doen, zich overwerken"],
    ["면접", "myeonjeop", "sollicitatiegesprek"], ["도착하다", "dochakada", "aankomen"], ["결국", "gyeolguk", "uiteindelijk"], ["다행히", "dahaenghi", "gelukkig"]
  ],
  dialogue: [
    ["A", "왜 어제 모임에 안 왔어요?", "Wae eoje moime an wasseoyo?", "Waarom kwam je gisteren niet naar de bijeenkomst?"],
    ["B", "일이 많았기 때문에 못 갔어요.", "Iri manatgi ttaemune mot gasseoyo.", "Ik had veel werk. Daarom kon ik niet komen."],
    ["A", "요즘 많이 바빠요?", "Yojeum mani bappayo?", "Heb je het nu erg druk?"],
    ["B", "네, 다음 주에 발표가 있기 때문에 매일 늦게 퇴근해요.", "Ne, daeum jue balpyoga itgi ttaemune maeil neutge toegeunhaeyo.", "Ja. Volgende week heb ik een presentatie, dus ik werk elke dag lang."],
    ["A", "그렇군요. 너무 무리하지 마세요.", "Geureokunyo. Neomu murihaji maseyo.", "Ik snap het. Doe niet te veel."]
  ],
  reading: {
    title: "면접 날",
    lines: [
      { cn: "지난주 월요일에 회사 면접이 있었어요.", py: "Jinanju woryoire hoesa myeonjeobi isseosseoyo.", nl: "Vorige week maandag had ik een sollicitatiegesprek." },
      { cn: "면접이 아침 아홉 시였기 때문에 전날 일찍 잤어요.", py: "Myeonjeobi achim ahop siyeotgi ttaemune jeonnal iljjik jasseoyo.", nl: "Het gesprek was om negen uur 's ochtends, dus de avond ervoor ging ik vroeg slapen." },
      { cn: "그런데 아침에 비가 많이 와서 길이 막혔어요.", py: "Geureonde achime biga mani waseo giri makyeosseoyo.", nl: "Maar 's ochtends regende het hard, en het verkeer stond vast." },
      { cn: "버스가 오지 않았기 때문에 저는 택시를 탔어요.", py: "Beoseuga oji anatgi ttaemune jeoneun taeksireul tasseoyo.", nl: "Omdat de bus niet kwam, nam ik een taxi." },
      { cn: "하지만 택시도 비 때문에 천천히 갔어요.", py: "Hajiman taeksido bi ttaemune cheoncheonhi gasseoyo.", nl: "Maar ook de taxi reed langzaam vanwege de regen." },
      { cn: "결국 저는 면접에 조금 늦었어요.", py: "Gyeolguk jeoneun myeonjeobe jogeum neujeosseoyo.", nl: "Uiteindelijk kwam ik iets te laat op het gesprek." },
      { cn: "면접관에게 \"늦어서 죄송합니다\"라고 말했어요.", py: "Myeonjeongwanege \"neujeoseo joesonghamnida\"rago malhaesseoyo.", nl: "Ik zei tegen de interviewer: \"Sorry dat ik te laat ben.\"" },
      { cn: "면접관은 \"오늘은 비 때문에 다른 사람들도 늦었어요\"라고 웃으면서 말했어요.", py: "Myeonjeongwaneun \"oneureun bi ttaemune dareun saramdeuldo neujeosseoyo\"rago useumyeonseo malhaesseoyo.", nl: "De interviewer zei lachend: \"Vandaag waren anderen ook te laat door de regen.\"" },
      { cn: "다행히 저는 다음 주부터 그 회사에서 일해요.", py: "Dahaenghi jeoneun daeum jubuteo geu hoesaeseo ilhaeyo.", nl: "Gelukkig werk ik vanaf volgende week bij dat bedrijf." }
    ],
    questions: [
      { type: "mc", q: "Waarom nam de schrijver een taxi?",
        options: ["De bus kwam niet.", "Het gesprek begon om negen uur.", "De schrijver had een fiets nodig.", "De interviewer vroeg erom."], answer: 0,
        why: ["Goed: 버스가 오지 않았기 때문에 저는 택시를 탔어요.", "Daarom ging de schrijver vroeg slapen, niet daarom een taxi.", "Een fiets komt niet in de tekst voor.", "De interviewer zag de schrijver pas later."] },
      { type: "mc", q: "Hoe liep het af?",
        options: ["De schrijver kreeg de baan.", "De schrijver kwam op tijd.", "Het gesprek werd afgelast.", "De interviewer was boos."], answer: 0,
        why: ["Goed: 다음 주부터 그 회사에서 일해요.", "De schrijver was juist iets te laat: 조금 늦었어요.", "Het gesprek ging gewoon door.", "De interviewer lachte: 웃으면서 말했어요."] },
      { type: "mc", q: "Waarom zegt de schrijver 늦어서 죄송합니다 en niet 늦었기 때문에 죄송합니다?",
        options: ["Bij een excuus gebruik je vast -아서/어서.", "Omdat het te laat komen nog niet gebeurd is.", "Omdat -기 때문에 alleen na een naamwoord kan.", "Omdat 늦다 geen verleden tijd heeft."], answer: 0,
        why: ["Goed: sorry en dank gaan met -아서/어서. -기 때문에 klinkt daar vreemd.", "Het te laat komen is al gebeurd.", "Na een naamwoord komt juist alleen 때문에, zonder -기.", "늦다 heeft wel een verleden tijd: 늦었어요."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Omdat ik gisteren te veel heb gegeten, heb ik buikpijn.\"",
      options: ["어제 많이 먹었기 때문에 배가 아파요.", "어제 많이 먹기 때문에 배가 아파요.", "어제 많이 먹었어서 배가 아파요.", "어제 많이 먹었기 때문 배가 아파요."], answer: 0,
      why: ["Goed: de verleden tijd zit in de reden: 먹었기 때문에.", "Het eten was gisteren, dus je hebt 먹었 nodig.", "-아서/어서 kan geen verleden tijd dragen. Zeg 먹어서 of 먹었기 때문에.", "때문 heeft hier 에 nodig."] },
    { type: "mc", q: "___ 비행기가 늦게 출발했어요. (Door de sneeuw vertrok het vliegtuig laat.)",
      options: ["눈 때문에", "눈기 때문에", "눈에 때문에", "눈 때문"], answer: 0,
      why: ["Goed: naamwoord + 때문에.", "-기 komt alleen na een werkwoordstam, niet na een naamwoord.", "Tussen het naamwoord en 때문에 komt geen 에.", "때문 heeft hier 에 nodig."] },
    { type: "mc", q: "Je komt te laat en zegt sorry. Welke zin is goed?",
      options: ["늦어서 죄송합니다.", "늦었어서 죄송합니다.", "늦었기 때문에 죄송합니다.", "늦아서 죄송합니다."], answer: 0,
      why: ["Goed: bij sorry gebruik je -아서/어서, zonder verleden tijd.", "-아서/어서 krijgt nooit 았/었 ervoor.", "Bij een excuus klinkt -기 때문에 vreemd. Koreanen zeggen 늦어서.", "늦다 heeft 으 als laatste klinker, dus -어서: 늦어서."] },
    { type: "order", q: "Zet in de goede volgorde: \"Omdat ik geen tijd had, nam ik een taxi.\"",
      tokens: [["시간이", "sigani"], ["없었기", "eopseotgi"], ["때문에", "ttaemune"], ["택시를", "taeksireul"], ["탔어요.", "tasseoyo."]] },
    { type: "mc", q: "비가 ___ 우산을 가져가세요. (Het regent, dus neem een paraplu mee.)",
      options: ["오니까", "오기 때문에", "와서", "왔기 때문에"], answer: 0,
      why: ["Goed: vóór een opdracht (-세요) gebruik je -(으)니까.", "Na -기 때문에 komt geen opdracht.", "Na -아서/어서 komt ook geen opdracht.", "Het regent nu, en ook hier verbiedt -기 때문에 de opdracht."] },
    { type: "mc", q: "A: 왜 늦었어요? B: 길이 ___. (Omdat er file was.)",
      options: ["막혔기 때문이에요", "막혔때문이에요", "막혀기 때문이에요", "막혔기 때문에이에요"], answer: 0,
      why: ["Goed: als antwoord op 왜: -기 때문이에요.", "Tussen 막혔 en 때문 ontbreekt -기.", "-기 komt na 막혔 of na de stam 막히, niet na de 어-vorm.", "Aan het eind wordt 때문에 + 이에요 samen 때문이에요."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["늦게 일어났기 때문에 빨리 준비하세요.", "늦게 일어났기 때문에 아침을 못 먹었어요.", "늦게 일어나서 아침을 못 먹었어요.", "늦게 일어났으니까 빨리 준비하세요."], answer: 0,
      why: ["Goed: dit is fout. Na -기 때문에 komt geen opdracht; gebruik -(으)니까.", "Dit klopt: reden + gewoon gevolg.", "Dit klopt: -아서/어서 zonder verleden tijd.", "Dit klopt: -(으)니까 mag vóór een opdracht."] },
    { type: "order", q: "Zet in de goede volgorde: \"Vanwege het werk kon ik niet gaan.\"",
      tokens: [["일", "il"], ["때문에", "ttaemune"], ["못", "mot"], ["갔어요.", "gasseoyo."]] },
    { type: "fill", q: "요즘 회사 일이 ___ 때문에 너무 피곤해요. (Ik heb veel werk tegenwoordig, daarom ben ik erg moe.)", answers: ["많기"],
      hint: "많다 + -기", why: "Stam + -기 vóór 때문에: 많 + 기 = 많기." },
    { type: "open", q: "Vertaal met -기 때문에: \"Omdat ik ziek was, ben ik thuisgebleven.\"", model: ["아팠기 때문에 집에 있었어요.", "몸이 아팠기 때문에 집에서 쉬었어요.", "아팠기 때문에 집에 있었습니다."],
      tip: "Check: staat de verleden tijd in de reden (아팠기), en schrijf je 때문에 met 에?" },
    { type: "open", q: "Vertaal: \"Vanwege de regen is de wedstrijd afgelast.\"", model: ["비 때문에 경기가 취소됐어요.", "비 때문에 경기가 취소되었습니다."],
      tip: "Check: na het naamwoord 비 komt direct 때문에, zonder -기." }
  ],
  review: [
    { type: "mc", q: "\"Ik was moe, daarom ben ik vroeg gaan slapen.\"",
      options: ["피곤했기 때문에 일찍 잤어요.", "피곤했어서 일찍 잤어요.", "피곤했기 때문 일찍 잤어요.", "피곤하었기 때문에 일찍 잤어요."], answer: 0,
      why: ["Goed: 피곤했 + -기 때문에.", "-아서/어서 kan geen verleden tijd dragen.", "때문 heeft hier 에 nodig.", "하다 wordt in de verleden tijd 했, niet 하었."] },
    { type: "mc", q: "가방이 ___ 안 샀어요. (De tas was te duur, daarom heb ik hem niet gekocht.)",
      options: ["비쌌기 때문에", "비쌌기 때문", "비쌌 때문에", "비쌌기 때문에서"], answer: 0,
      why: ["Goed: 비쌌 + -기 때문에.", "때문 heeft hier 에 nodig.", "Tussen 비쌌 en 때문에 ontbreekt -기.", "Na 때문에 komt geen 서."] },
    { type: "mc", q: "___ 학교에 안 갔어요. (Omdat het zondag was, ging ik niet naar school.)",
      options: ["일요일이었기 때문에", "일요일였기 때문에", "일요일기 때문에", "일요일이었기 때문"], answer: 0,
      why: ["Goed: naamwoord met 받침 + 이었 + -기 때문에.", "Na een 받침 is de verleden tijd van 이다 이었, niet 였.", "Tussen een naamwoord en -기 hoort 이다: 일요일이기 of 일요일이었기.", "때문 heeft hier 에 nodig."] }
  ]
})
