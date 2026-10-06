({
  id: "11", slug: "gi-nareum", title: "-기 나름이다", sub: "Het hangt af van hoe je het doet",
  canDo: "Je kunt nu zeggen dat een uitkomst afhangt van hoe iemand iets doet of bekijkt, met -기 나름이다, en je kiest tussen 나름이다 en -에 달려 있다.",
  guess: {
    q: "\"Het hangt ervan af hoe je erover denkt.\" Welke zin klopt, denk je?",
    options: ["생각하기 나름이에요.", "생각하는 나름이에요.", "생각했기 나름이에요.", "생각하기 달려 있어요."], answer: 0,
    why: ["Goed: werkwoordstam + -기, dan 나름이에요.", "나름 neemt een vorm op -기, niet -는.", "Vóór -기 staat geen tijd. De tijd zit in 이다.", "달려 있다 heeft 에 nodig: 생각하기에 달려 있어요."]
  },
  problem: "In het Nederlands zeg je: \"Het hangt ervan af hoe je het aanpakt.\" In het Koreaans zeg je dat met -기 나름이다. De uitkomst ligt niet vast. Ze verandert met hoe iemand iets doet of bekijkt. Vaak hoor je er een aanmoediging in: het ligt aan jou.",
  pattern: [
    { l: "uitkomst", v: "결과는", c: 1 }, { l: "wie", v: "자기가", c: 2 },
    { l: "werkwoord", v: "하", c: 3 }, { l: "-기 나름이다", v: "기 나름이다", c: 4, key: true }
  ],
  patternCap: "(Uitkomst는) + (wie가) + werkwoordstam + -기 나름이다; ook N + 나름이다 (사람 나름이다); spreektaal -기 나름이에요 / -기 나름이야",
  rules: [
    "-기 komt direct aan de stam van een werkwoord, zonder tijd: 하기, 생각하기, 노력하기. Niet 했기 나름.",
    "Tijd en beleefdheid zitten in 이다: 나름이다, 나름이에요, 나름입니다, 나름이었다.",
    "Het werkwoord is een handeling of houding: 하다, 생각하다, 받아들이다, 쓰다. Bijvoeglijke werkwoorden (좋다, 크다) passen niet.",
    "Na een zelfstandig naamwoord zeg je N 나름이다: 사람 나름이다 (het verschilt per persoon). Er staat geen 에 tussen.",
    "나름 is een los woord: schrijf een spatie vóór 나름 (하기 나름)."
  ],
  pitfall: "-기 나름이다 gaat over hoe iemand handelt of kijkt. Hangt iets af van een factor waar niemand iets aan doet, zoals het weer, dan zeg je -에 달려 있다: 날씨에 달려 있다, niet 날씨가 좋기 나름이다.",
  examples: [
    { cn: "행복은 마음먹기 나름이다.", py: "Haengbogeun maeummeokgi nareumida.", nl: "Geluk hangt af van hoe je je instelt." },
    { cn: "같은 일이라도 생각하기 나름이에요.", py: "Gateun irirado saenggakagi nareumieyo.", nl: "Ook bij hetzelfde voorval hangt het ervan af hoe je erover denkt." },
    { cn: "아이는 부모가 키우기 나름이라는 말이 있다.", py: "Aineun bumoga kiugi nareumiraneun mari itda.", nl: "Er is een gezegde: hoe een kind wordt, hangt af van hoe de ouders het opvoeden." },
    { cn: "돈은 쓰기 나름이라서 적게 벌어도 여유 있게 살 수 있다.", py: "Doneun sseugi nareumiraseo jeokge beoreodo yeoyu itge sal su itda.", nl: "Bij geld hangt het af van hoe je het uitgeeft. Ook met een klein inkomen kun je ruim leven." }
  ],
  nuance: [
    { h: "-기 나름이다 of -에 달려 있다?",
      p: "Beide betekenen \"het hangt af van\". -에 달려 있다 neemt een zelfstandig naamwoord met 에 (노력에, 날씨에) of een vraagvorm (어떻게 하느냐에). Het noemt de factor neutraal. -기 나름이다 neemt een werkwoordstam en legt de nadruk op de manier: hoe iemand het doet of bekijkt. Vaak klinkt er aanmoediging in.",
      ex: [
        { cn: "성공은 네가 노력하기 나름이다.", py: "Seonggongeun nega noryeokagi nareumida.", nl: "Of je slaagt, hangt af van hoe jij je inzet." },
        { cn: "성공은 너의 노력에 달려 있다.", py: "Seonggongeun neoui noryeoge dallyeo itda.", nl: "Succes hangt af van jouw inzet." }
      ] },
    { h: "Wanneer NIET: factoren buiten je macht",
      p: "Hangt de uitkomst af van iets wat je niet kunt sturen, zoals het weer, geluk of de beslissing van een ander? Gebruik dan -에 달려 있다. -기 나름이다 zegt juist dat iemand de uitkomst kan beïnvloeden.",
      ex: [
        { cn: "행사 개최 여부는 날씨에 달려 있다.", py: "Haengsa gaechoe yeobuneun nalssie dallyeo itda.", nl: "Of het evenement doorgaat, hangt af van het weer." },
        { cn: "면접은 준비하기 나름이다.", py: "Myeonjeobeun junbihagi nareumida.", nl: "Hoe een sollicitatiegesprek gaat, hangt af van hoe je je voorbereidt." }
      ] },
    { h: "N 나름이다: het verschilt per ...",
      p: "Na een zelfstandig naamwoord betekent 나름 \"het verschilt per ...\": 사람 나름, 회사 나름. Je zegt dit vooral in gesprekken, als iemand te snel generaliseert.",
      ex: [
        { cn: "야근이 많은지는 회사 나름이에요.", py: "Yageuni maneunjineun hoesa nareumieyo.", nl: "Of je veel moet overwerken, verschilt per bedrijf." },
        { cn: "그건 사람 나름이지.", py: "Geugeon saram nareumiji.", nl: "Dat verschilt per persoon." }
      ] },
    { h: "Register: schrijftaal en spreektaal",
      p: "In formele tekst schrijf je -기 나름이다, of je kiest -느냐에 따라 달라진다 en -느냐에 달려 있다. In gesprekken zeg je -기 나름이에요, of tegen vrienden -기 나름이야 en 다 하기 나름이지.",
      ex: [
        { cn: "결과는 어떻게 받아들이느냐에 따라 달라진다.", py: "Gyeolgwaneun eotteoke badadeurineunyae ttara dallajinda.", nl: "Het resultaat verschilt naargelang hoe je het opvat." },
        { cn: "다 하기 나름이야.", py: "Da hagi nareumiya.", nl: "Alles hangt af van hoe je het doet." }
      ] }
  ],
  mistakes: [
    { wrong: "결과는 네가 했기 나름이다.", right: "결과는 네가 하기 나름이다.", why: "Vóór -기 staat geen tijd. Wil je verleden tijd, zet die in 이다: 나름이었다." },
    { wrong: "결과는 네가 하는 나름이다.", right: "결과는 네가 하기 나름이다.", why: "나름 in deze betekenis neemt altijd -기, niet -는." },
    { wrong: "성공은 노력하기 달려 있다.", right: "성공은 노력하기에 달려 있다.", why: "달려 있다 heeft 에 nodig. 나름이다 juist niet: 노력하기 나름이다." },
    { wrong: "결과는 네가 하기나름이다.", right: "결과는 네가 하기 나름이다.", why: "나름 is een los woord. Schrijf een spatie vóór 나름." }
  ],
  vocab: [
    ["-기 나름이다", "-gi nareumida", "het hangt af van hoe je ..."], ["마음먹다", "maeummeokda", "besluiten, zich instellen"],
    ["받아들이다", "badadeurida", "aanvaarden, opvatten"], ["달려 있다", "dallyeo itda", "afhangen van"],
    ["여부", "yeobu", "of ... (wel of niet)"], ["면접", "myeonjeop", "sollicitatiegesprek"],
    ["위기", "wigi", "crisis"], ["기회", "gihoe", "kans"],
    ["매출", "maechul", "omzet"], ["활용하다", "hwaryonghada", "benutten, gebruikmaken van"]
  ],
  dialogue: [
    ["A", "면접에서 또 떨어졌어요. 저는 운이 없나 봐요.", "Myeonjeobeseo tto tteoreojyeosseoyo. Jeoneun uni eomna bwayo.", "Ik ben weer gezakt voor een sollicitatiegesprek. Ik heb zeker gewoon pech."],
    ["B", "면접은 운보다 준비하기 나름이에요. 어떻게 준비했어요?", "Myeonjeobeun unboda junbihagi nareumieyo. Eotteoke junbihaesseoyo?", "Een gesprek hangt meer af van hoe je je voorbereidt dan van geluk. Hoe heb je je voorbereid?"],
    ["A", "그냥 예상 질문만 외웠어요.", "Geunyang yesang jilmunman oewosseoyo.", "Ik heb alleen de verwachte vragen uit mijn hoofd geleerd."],
    ["B", "그 회사에 대해서도 알아보세요. 결과는 하기 나름이니까요.", "Geu hoesae daehaeseodo araboseyo. Gyeolgwaneun hagi nareuminikkayo.", "Zoek ook iets uit over dat bedrijf. Het resultaat hangt af van hoe je het aanpakt."],
    ["A", "네, 이번에는 마음먹고 제대로 해 볼게요.", "Ne, ibeoneneun maeummeokgo jedaero hae bolgeyo.", "Oké, deze keer pak ik het vastberaden goed aan."]
  ],
  reading: {
    title: "위기와 기회",
    lines: [
      { cn: "위기는 곧 기회라는 말이 있다.", py: "Wigineun got gihoeraneun mari itda.", nl: "Er is een gezegde dat een crisis tegelijk een kans is." },
      { cn: "같은 상황이라도 어떻게 받아들이느냐에 따라 결과는 크게 달라진다.", py: "Gateun sanghwangirado eotteoke badadeurineunyae ttara gyeolgwaneun keuge dallajinda.", nl: "Ook in dezelfde situatie verschilt het resultaat sterk naargelang hoe je die opvat." },
      { cn: "한 작은 식당은 감염병이 유행하던 시기에 손님이 거의 끊겼다.", py: "Han jageun sikdangeun gamyeombyeongi yuhaenghadeon sigie sonnimi geoui kkeunkyeotda.", nl: "Een klein restaurant had tijdens een epidemie bijna geen klanten meer." },
      { cn: "주인은 문을 닫는 대신 배달과 포장 판매를 시작했다.", py: "Juineun muneul danneun daesin baedalgwa pojang panmaereul sijakaetda.", nl: "In plaats van te sluiten begon de eigenaar met bezorgen en afhalen." },
      { cn: "그는 위기도 생각하기 나름이라고 믿었다.", py: "Geuneun wigido saenggakagi nareumirago mideotda.", nl: "Hij geloofde dat ook een crisis afhangt van hoe je ernaar kijkt." },
      { cn: "그 결과 식당의 매출은 오히려 이전보다 늘었다.", py: "Geu gyeolgwa sikdangui maechureun ohiryeo ijeonboda neureotda.", nl: "Daardoor steeg de omzet van het restaurant juist tot boven het oude niveau." },
      { cn: "물론 모든 일이 노력하기 나름인 것은 아니다.", py: "Mullon modeun iri noryeokagi nareumin geoseun anida.", nl: "Natuurlijk hangt niet alles af van hoe je je inspant." },
      { cn: "경기나 정책처럼 개인이 바꿀 수 없는 조건에 달려 있는 부분도 있다.", py: "Gyeonggina jeongchaekcheoreom gaeini bakkul su eomneun jogeone dallyeo inneun bubundo itda.", nl: "Een deel hangt af van omstandigheden die een individu niet kan veranderen, zoals de economie of het beleid." },
      { cn: "그러나 주어진 상황을 어떻게 활용할지는 결국 각자가 하기 나름이다.", py: "Geureona jueojin sanghwangeul eotteoke hwaryonghaljineun gyeolguk gakjaga hagi nareumida.", nl: "Maar hoe je de gegeven situatie benut, hangt uiteindelijk af van hoe ieder het aanpakt." }
    ],
    questions: [
      { type: "mc", q: "Wat deed de eigenaar van het restaurant?",
        options: ["Hij begon met bezorgen en afhalen.", "Hij sloot het restaurant.", "Hij verhuisde naar een andere stad.", "Hij verlaagde alle prijzen."], answer: 0,
        why: ["Goed: 배달과 포장 판매를 시작했다.", "Hij deed juist het omgekeerde: 문을 닫는 대신.", "Over verhuizen staat niets in de tekst.", "Over prijzen staat niets in de tekst."] },
      { type: "mc", q: "Waar hangt volgens de tekst een deel van de uitkomst van af?",
        options: ["Van omstandigheden zoals de economie en het beleid.", "Alleen van de inzet van de eigenaar.", "Van het aantal personeelsleden.", "Van de mening van de klanten."], answer: 0,
        why: ["Goed: 경기나 정책처럼 개인이 바꿀 수 없는 조건.", "De tekst zegt juist dat niet alles van inzet afhangt.", "Over personeel staat niets in de tekst.", "Over de mening van klanten staat niets in de tekst."] },
      { type: "mc", q: "각자가 하기 나름이다 in de laatste zin betekent:",
        options: ["Het hangt af van hoe ieder het aanpakt.", "Iedereen moet hetzelfde doen.", "Niemand kan er iets aan doen.", "Het is al door iedereen gedaan."], answer: 0,
        why: ["Goed: -기 나름이다 legt de uitkomst bij de manier waarop iemand handelt.", "나름 zegt juist dat het per persoon verschilt.", "Dat is het omgekeerde: 나름 zegt dat je er wel iets aan kunt doen.", "-기 나름이다 zegt niets over een afgeronde handeling."] }
    ]
  },
  questions: [
    { type: "mc", q: "행복은 마음___ 나름이다. (Geluk hangt af van hoe je je instelt.)",
      options: ["먹기", "먹는", "먹었기", "먹을"], answer: 0,
      why: ["Goed: stam + -기, dan 나름이다.", "나름 neemt -기, niet -는.", "Vóór -기 staat geen tijd.", "-을 wijst naar de toekomst en past niet vóór 나름."] },
    { type: "mc", q: "\"Hoe snel je Koreaans vooruitgaat, hangt af van hoe je studeert.\"",
      options: ["한국어 실력은 공부하기 나름이에요.", "한국어 실력은 공부했기 나름이에요.", "한국어 실력은 공부하는 나름이에요.", "한국어 실력은 공부하기 달려 있어요."], answer: 0,
      why: ["Goed: 공부하기 + 나름이에요.", "Vóór -기 staat geen verleden tijd.", "나름 neemt -기, niet -는.", "달려 있다 heeft 에 nodig: 공부하기에 달려 있어요."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["내일 소풍은 날씨가 좋기 나름이에요.", "내일 소풍은 날씨에 달려 있어요.", "인생은 마음먹기 나름이에요.", "그건 사람 나름이에요."], answer: 0,
      why: ["Goed: 좋다 is een bijvoeglijk werkwoord en het weer stuur je niet. Zeg: 날씨에 달려 있어요.", "Dit klopt: een factor buiten je macht met -에 달려 있다.", "Dit klopt: een vaste uitdrukking met -기 나름이다.", "Dit klopt: N 나름이다, het verschilt per persoon."] },
    { type: "mc", q: "성공은 너의 노력___ 달려 있다.",
      options: ["에", "을", "이", "으로"], answer: 0,
      why: ["Goed: 달려 있다 neemt altijd N + 에.", "을 is een lijdend voorwerp. 달려 있다 heeft geen lijdend voorwerp.", "이 maakt van 노력 het onderwerp. Dan klopt de betekenis niet.", "으로 geeft een middel aan, niet waarvan iets afhangt."] },
    { type: "mc", q: "Wat betekent: 같은 월급이라도 쓰기 나름이다?",
      options: ["Met hetzelfde loon hangt het af van hoe je het uitgeeft.", "Je moet hetzelfde loon altijd helemaal uitgeven.", "Iedereen geeft hetzelfde loon op dezelfde manier uit.", "Het loon hangt af van wat de baas wil."], answer: 0,
      why: ["Goed: 쓰기 나름 = het hangt af van hoe je het uitgeeft.", "나름 is geen verplichting zoals -아야 하다.", "나름 zegt juist dat het per persoon verschilt.", "Het gaat om hoe jij uitgeeft, niet om de baas."] },
    { type: "mc", q: "Welke zin past het best in een formeel rapport?",
      options: ["성과는 각 부서가 운영하기 나름이다.", "성과는 각 부서가 운영하기 나름이야.", "성과는 각 부서가 운영하기 나름이지 뭐.", "성과는 각 부서가 운영하기 나름이잖아요."], answer: 0,
      why: ["Goed: de -다-vorm is de neutrale schrijfstijl.", "-야 is informele spreektaal tegen vrienden.", "-지 뭐 klinkt laconiek en hoort in een gesprek.", "-잖아요 is spreektaal: \"dat weet je toch\"."] },
    { type: "mc", q: "\"Of je veel moet overwerken, verschilt per bedrijf.\"",
      options: ["야근이 많은지는 회사 나름이에요.", "야근이 많은지는 회사에 나름이에요.", "야근이 많은지는 회사기 나름이에요.", "야근이 많은지는 회사하기 나름이에요."], answer: 0,
      why: ["Goed: N 나름이다, zonder partikel.", "Tussen het naamwoord en 나름 staat geen 에.", "-기 komt alleen aan een werkwoordstam.", "회사하다 bestaat niet als werkwoord."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ook bij hetzelfde voorval hangt het ervan af hoe je erover denkt.\"",
      tokens: [["같은", "gateun"], ["일이라도", "irirado"], ["생각하기", "saenggakagi"], ["나름이에요", "nareumieyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Hoe een kind wordt, hangt af van hoe de ouders het opvoeden.\"",
      tokens: [["아이는", "aineun"], ["부모가", "bumoga"], ["키우기", "kiugi"], ["나름이다", "nareumida"]] },
    { type: "fill", q: "아이의 습관은 부모가 가르치___ 나름이다. (De gewoontes van een kind hangen af van hoe de ouders het iets leren.)",
      answers: ["기"], hint: "Welke uitgang komt vóór 나름?", why: "가르치기 나름이다: werkwoordstam + -기, dan 나름이다." },
    { type: "open", q: "Vertaal: \"Of je gelukkig bent, hangt af van hoe je erover denkt.\"",
      model: ["행복은 생각하기 나름이에요.", "행복한지 아닌지는 생각하기 나름이다.", "행복은 마음먹기 나름입니다."],
      tip: "Check: stam + -기 zonder tijd, een spatie vóór 나름, en de tijd of beleefdheid in 이다." },
    { type: "open", q: "Vertaal in formele schrijfstijl (-다): \"Of een crisis een kans wordt, hangt af van hoe elk bedrijf reageert.\"",
      model: ["위기가 기회가 될지는 각 기업이 대응하기 나름이다.", "위기가 기회가 되느냐는 기업이 어떻게 대응하느냐에 달려 있다.", "위기를 기회로 만드는 것은 각 기업이 대응하기 나름이다."],
      tip: "Check: 대응하기 나름이다 (geen 에), of -느냐에 달려 있다 (wel 에), en een -다-einde." }
  ],
  review: [
    { type: "mc", q: "건강은 평소에 ___ 나름이다. (Gezondheid hangt af van hoe je er dagelijks voor zorgt.)",
      options: ["관리하기", "관리하는", "관리했기", "관리할"], answer: 0,
      why: ["Goed: stam + -기 vóór 나름.", "나름 neemt -기, niet -는.", "Vóór -기 staat geen tijd.", "-ㄹ wijst naar de toekomst en past niet vóór 나름."] },
    { type: "mc", q: "\"Of het een goede vakantie wordt, hangt af van hoe je die plant.\"",
      options: ["좋은 휴가가 될지는 계획하기 나름이에요.", "좋은 휴가가 될지는 계획했기 나름이에요.", "좋은 휴가가 될지는 계획하는 나름이에요.", "좋은 휴가가 될지는 계획하기 달려 있어요."], answer: 0,
      why: ["Goed: 계획하기 + 나름이에요.", "Vóór -기 staat geen verleden tijd.", "나름 neemt -기, niet -는.", "달려 있다 heeft 에 nodig: 계획하기에 달려 있어요."] },
    { type: "mc", q: "\"Of de wedstrijd doorgaat, hangt af van het weer.\"",
      options: ["경기 개최 여부는 날씨에 달려 있다.", "경기 개최 여부는 날씨가 좋기 나름이다.", "경기 개최 여부는 날씨를 달려 있다.", "경기 개최 여부는 날씨에 나름이다."], answer: 0,
      why: ["Goed: een factor buiten je macht, dus N + 에 달려 있다.", "Het weer stuur je niet, en 좋다 is een bijvoeglijk werkwoord. 나름 past niet.", "달려 있다 neemt 에, niet 를.", "Tussen een naamwoord en 나름 staat geen 에."] }
  ]
})
