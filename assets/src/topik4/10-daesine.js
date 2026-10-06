({
  id: "10", slug: "daesine", title: "-(으)ㄴ/는 대신에", sub: "In plaats van ... / maar daarvoor ...",
  canDo: "Je kunt nu zeggen wat je in plaats van iets anders doet, of wat een voordeel compenseert, met -(으)ㄴ/는 대신에.",
  guess: {
    q: "\"In plaats van de bus te nemen, liep ik.\" Welke zin klopt, denk je?",
    options: ["버스를 타는 대신에 걸어갔어요.", "버스를 탔는 대신에 걸어갔어요.", "버스를 탄 대신에 걸어갔어요.", "버스를 타 대신에 걸어갔어요."], answer: 0,
    why: ["Goed: werkwoord + 는 대신에 voor \"in plaats van\".", "Er komt geen 았/었 vóór 는 대신에.", "탄 대신에 betekent dat je de bus wél nam, met iets als compensatie.", "Tussen de stam en 대신에 hoort 는."]
  },
  problem: "In het Nederlands zeg je: \"In plaats van de bus te nemen, liep ik.\" Of: \"Het is duur, maar daarvoor is het goed.\" Het Koreaans gebruikt voor allebei -(으)ㄴ/는 대신에. Je zet het eerste ding tegenover het tweede: ruilen, of goedmaken.",
  pattern: [
    { l: "wat je niet doet (stam)", v: "버스를 타", c: 1 }, { l: "in plaats van", v: "는 대신에", c: 2, key: true },
    { l: "wat je wel doet", v: "걸어갔어요", c: 4 }
  ],
  patternCap: "Werkwoord + 는 대신에 · bijvoeglijk werkwoord of afgeronde handeling + (으)ㄴ 대신에 · naamwoord + 대신(에)",
  rules: [
    "Werkwoord + 는 대신에: 가는 대신에, 먹는 대신에. Een ㄹ-stam verliest de ㄹ: 만드는 대신에. Ook 있다/없다: 맛있는 대신에.",
    "Bijvoeglijk werkwoord + (으)ㄴ 대신에: 비싼 대신에, 작은 대신에, 가벼운 대신에.",
    "Een handeling die al gedaan is + (으)ㄴ 대신에. Dat betekent bijna altijd compensatie: 일한 대신에 쉬어요.",
    "Naamwoord + 대신(에), zonder partikel: 커피 대신 차. 에 mag weg: 가는 대신, 커피 대신.",
    "Twee betekenissen: in plaats van (A niet, B wel) en ter compensatie (A, en daarvoor B)."
  ],
  pitfall: "Bij \"in plaats van\" met een werkwoord zeg je 는 대신에, niet (으)ㄴ. 버스를 탄 대신에 betekent dat je de bus wél nam.",
  examples: [
    { cn: "버스를 타는 대신에 걸어서 출근했어요.", py: "Beoseureul taneun daesine georeoseo chulgeunhaesseoyo.", nl: "In plaats van de bus te nemen, ging ik lopend naar het werk." },
    { cn: "이 가방은 비싼 대신에 아주 튼튼해요.", py: "I gabangeun bissan daesine aju teunteunhaeyo.", nl: "Deze tas is duur, maar daarvoor is hij erg stevig." },
    { cn: "제가 요리하는 대신에 설거지는 민수 씨가 해 주세요.", py: "Jega yorihaneun daesine seolgeojineun Minsu ssiga hae juseyo.", nl: "Ik kook, dus doe jij in ruil de afwas, Minsu." },
    { cn: "커피 대신 차를 마셔요.", py: "Keopi daesin chareul masyeoyo.", nl: "Ik drink thee in plaats van koffie." }
  ],
  nuance: [
    { h: "In plaats van, of ter compensatie?",
      p: "De vorm is dezelfde; de context beslist. Doe je A niet en B wel? Dan is het \"in plaats van\". Gebeuren A en B allebei, en maakt B iets goed? Dan is het compensatie. Bij bijvoeglijke werkwoorden is het bijna altijd compensatie: een voordeel tegenover een nadeel.",
      ex: [
        { cn: "주말에 일한 대신에 월요일에 쉬어요.", py: "Jumare ilhan daesine woryoire swieoyo.", nl: "Ik heb in het weekend gewerkt, dus ter compensatie ben ik maandag vrij." },
        { cn: "이 동네는 조용한 대신에 교통이 불편해요.", py: "I dongneneun joyonghan daesine gyotongi bulpyeonhaeyo.", nl: "Deze buurt is rustig, maar het openbaar vervoer is onhandig." }
      ] },
    { h: "-는 대신에 of -지 말고?",
      p: "-지 말고 betekent \"niet A, maar B\" en staat in een opdracht of voorstel. Voor een mededeling over wat je deed werkt het niet. -는 대신에 kan in mededelingen, en heeft ook de betekenis compensatie. Die heeft -지 말고 niet.",
      ex: [
        { cn: "버스 타지 말고 걸어가세요.", py: "Beoseu taji malgo georeogaseyo.", nl: "Neem niet de bus, maar ga lopen." },
        { cn: "버스를 타는 대신에 걸어갔어요.", py: "Beoseureul taneun daesine georeogasseoyo.", nl: "In plaats van de bus te nemen, liep ik." }
      ] },
    { h: "대신 + naamwoord, en 대신 aan het begin",
      p: "Na een naamwoord betekent 대신 \"in plaats van\" of \"namens\": 친구 대신 회의에 갔어요. Aan het begin van een zin betekent 대신 \"maar daarvoor\" of \"in ruil\". In spreektaal laat je 에 meestal weg.",
      ex: [
        { cn: "아픈 친구 대신 제가 회의에 갔어요.", py: "Apeun chingu daesin jega hoeuie gasseoyo.", nl: "Ik ging in plaats van mijn zieke vriend naar de vergadering." },
        { cn: "오늘은 바빠요. 대신 내일은 시간이 있어요.", py: "Oneureun bappayo. Daesin naeireun sigani isseoyo.", nl: "Vandaag heb ik het druk. Maar morgen heb ik wel tijd." }
      ] }
  ],
  mistakes: [
    { wrong: "버스를 탄 대신에 걸어갔어요.", right: "버스를 타는 대신에 걸어갔어요.", why: "Voor \"in plaats van\" gebruik je 는 대신에. 탄 betekent dat je de bus wél nam." },
    { wrong: "이 식당은 싸는 대신에 맛이 없어요.", right: "이 식당은 싼 대신에 맛이 없어요.", why: "싸다 is een bijvoeglijk werkwoord. Dat krijgt (으)ㄴ, niet 는." },
    { wrong: "커피를 대신에 차를 마셔요.", right: "커피 대신에 차를 마셔요.", why: "Na een naamwoord komt 대신 direct, zonder 을/를." },
    { wrong: "밥을 먹지 말고 빵을 먹었어요.", right: "밥을 먹는 대신에 빵을 먹었어요.", why: "-지 말고 hoort bij een opdracht of voorstel. Voor wat je deed gebruik je -는 대신에." }
  ],
  vocab: [
    ["-(으)ㄴ/는 대신에", "-(eu)n/neun daesine", "in plaats van; ter compensatie"], ["출근하다", "chulgeunhada", "naar het werk gaan"],
    ["튼튼하다", "teunteunhada", "stevig, sterk"], ["설거지", "seolgeoji", "afwas"], ["월세", "wolse", "maandhuur"],
    ["좁다", "jopda", "smal, krap"], ["넓다", "neolda", "ruim, breed"], ["집주인", "jipjuin", "huisbaas"],
    ["깎다", "kkakda", "(prijs) verlagen, korting geven"], ["아끼다", "akkida", "besparen, zuinig zijn op"]
  ],
  dialogue: [
    ["A", "주말에 뭐 했어요?", "Jumare mwo haesseoyo?", "Wat heb je in het weekend gedaan?"],
    ["B", "영화관에 가는 대신에 집에서 책을 읽었어요.", "Yeonghwagwane ganeun daesine jibeseo chaegeul ilgeosseoyo.", "In plaats van naar de bioscoop te gaan, heb ik thuis een boek gelezen."],
    ["A", "왜요? 영화 좋아하잖아요.", "Waeyo? Yeonghwa joahajanayo.", "Waarom? Je houdt toch van films."],
    ["B", "지난주에 돈을 너무 많이 썼거든요. 대신 다음 달에는 꼭 보러 갈 거예요.", "Jinanjue doneul neomu mani sseotgeodeunyo. Daesin daeum dareneun kkok boreo gal geoyeyo.", "Ik heb vorige week te veel geld uitgegeven. Maar volgende maand ga ik zeker."],
    ["A", "그럼 같이 가요. 제가 표를 사는 대신에 팝콘은 사 주세요.", "Geureom gachi gayo. Jega pyoreul saneun daesine papkoneun sa juseyo.", "Laten we dan samen gaan. Ik koop de kaartjes, en jij koopt in ruil de popcorn."],
    ["B", "좋아요. 약속해요.", "Joayo. Yaksokaeyo.", "Goed. Afgesproken."]
  ],
  reading: {
    title: "새 집을 고르면서",
    lines: [
      { cn: "다음 달에 이사를 하기로 해서 요즘 집을 보러 다닌다.", py: "Daeum dare isareul hagiro haeseo yojeum jibeul boreo daninda.", nl: "Ik ga volgende maand verhuizen, dus ik ga tegenwoordig huizen bekijken." },
      { cn: "첫 번째 집은 회사에서 가까운 대신에 방이 아주 좁았다.", py: "Cheot beonjjae jibeun hoesaeseo gakkaun daesine bangi aju jobatda.", nl: "Het eerste huis lag dicht bij mijn werk, maar de kamer was erg krap." },
      { cn: "두 번째 집은 넓고 깨끗한 대신에 월세가 너무 비쌌다.", py: "Du beonjjae jibeun neolgo kkaekkeutan daesine wolsega neomu bissatda.", nl: "Het tweede huis was ruim en schoon, maar de huur was te hoog." },
      { cn: "세 번째 집은 조용하고 월세도 싼 대신에 역에서 멀었다.", py: "Se beonjjae jibeun joyonghago wolsedo ssan daesine yeogeseo meoreotda.", nl: "Het derde huis was rustig en ook goedkoop, maar het lag ver van het station." },
      { cn: "고민하다가 나는 세 번째 집을 골랐다.", py: "Gominhadaga naneun se beonjjae jibeul gollatda.", nl: "Na lang twijfelen koos ik het derde huis." },
      { cn: "지하철을 타는 대신에 자전거로 출근하면 운동도 되고 돈도 아낄 수 있다.", py: "Jihacheoreul taneun daesine jajeongeoro chulgeunhamyeon undongdo doego dondo akkil su itda.", nl: "Als ik in plaats van de metro te nemen met de fiets naar mijn werk ga, sport ik ook en bespaar ik geld." },
      { cn: "집주인은 내가 2년 동안 사는 대신에 월세를 조금 깎아 주겠다고 했다.", py: "Jipjuineun naega inyeon dongan saneun daesine wolsereul jogeum kkakka jugetdago haetda.", nl: "De huisbaas zei dat hij de huur wat zou verlagen, in ruil voor een huurperiode van twee jaar." },
      { cn: "조금 불편하겠지만 좋은 선택이라고 생각한다.", py: "Jogeum bulpyeonhagetjiman joeun seontaegirago saenggakanda.", nl: "Het zal wat onhandig zijn, maar ik denk dat het een goede keuze is." }
    ],
    questions: [
      { type: "mc", q: "Wat was het nadeel van het tweede huis?",
        options: ["De huur was te hoog.", "De kamer was te krap.", "Het lag ver van het station.", "Het was niet schoon."], answer: 0,
        why: ["Goed: 월세가 너무 비쌌다.", "Dat was het nadeel van het eerste huis.", "Dat was het nadeel van het derde huis.", "Het tweede huis was juist schoon: 깨끗한."] },
      { type: "mc", q: "Hoe wil de schrijver naar zijn werk gaan?",
        options: ["Met de fiets.", "Met de metro.", "Met de bus.", "Lopend."], answer: 0,
        why: ["Goed: 자전거로 출근하면.", "De metro neemt hij juist niet: 지하철을 타는 대신에.", "De bus staat niet in de tekst.", "Lopen staat niet in de tekst."] },
      { type: "mc", q: "회사에서 가까운 대신에 방이 아주 좁았다. Wat betekent 대신에 hier?",
        options: ["Een voordeel staat tegenover een nadeel.", "Het huis lag niet dicht bij het werk.", "De schrijver koos dit huis in plaats van een ander.", "Het huis was dichtbij omdat de kamer krap was."], answer: 0,
        why: ["Goed: bijvoeglijk werkwoord + (으)ㄴ 대신에 = compensatie: dichtbij, maar krap.", "가까운 betekent dat het wel dichtbij lag.", "De schrijver koos uiteindelijk het derde huis.", "대신에 geeft geen reden."] }
    ]
  },
  questions: [
    { type: "mc", q: "엘리베이터를 ___ 계단으로 올라갔어요. (In plaats van de lift te nemen, ging ik met de trap naar boven.)",
      options: ["타는 대신에", "탄 대신에", "탔는 대신에", "타기 대신에"], answer: 0,
      why: ["Goed: werkwoord + 는 대신에 voor \"in plaats van\".", "탄 대신에 betekent dat je de lift wél nam.", "Er komt geen 았/었 vóór 는 대신에.", "Vóór 대신에 staat een bijvoeglijke vorm, niet -기."] },
    { type: "mc", q: "이 휴대폰은 ___ 대신에 화면이 작아요. (Deze telefoon is licht, maar het scherm is klein.)",
      options: ["가벼운", "가볍는", "가볍은", "가벼울"], answer: 0,
      why: ["Goed: 가볍다 is een ㅂ-onregelmatig bijvoeglijk werkwoord: 가벼운.", "Een bijvoeglijk werkwoord krijgt geen 는.", "De ㅂ wordt 우: 가벼운, niet 가볍은.", "-(으)ㄹ kijkt naar de toekomst; dat past hier niet."] },
    { type: "mc", q: "주말에 일한 대신에 월요일에 쉬어요. Wat betekent dit?",
      options: ["Ik heb in het weekend gewerkt, dus ter compensatie ben ik maandag vrij.", "In plaats van in het weekend te werken, ben ik maandag vrij.", "Als ik in het weekend werk, ben ik maandag vrij.", "Ik werk in het weekend, maar ik ben maandag niet vrij."], answer: 0,
      why: ["Goed: 일한 (al gedaan) + 대신에 = compensatie.", "\"In plaats van\" zou 일하는 대신에 zijn.", "Een voorwaarde zou -(으)면 zijn.", "쉬어요 betekent dat je wel vrij bent."] },
    { type: "order", q: "Zet in de goede volgorde: \"In plaats van de bus te nemen, ga ik lopen.\"",
      tokens: [["버스를", "beoseureul"], ["타는", "taneun"], ["대신에", "daesine"], ["걸어갈게요", "georeogalgeyo"]] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["밥을 먹지 말고 빵을 먹었어요.", "밥을 먹는 대신에 빵을 먹었어요.", "밥 먹지 말고 빵 드세요.", "밥 대신에 빵을 먹었어요."], answer: 0,
      why: ["Goed: -지 말고 hoort bij een opdracht of voorstel, niet bij wat je deed.", "Dit klopt: -는 대신에 in een mededeling.", "Dit klopt: -지 말고 in een opdracht.", "Dit klopt: naamwoord + 대신에."] },
    { type: "mc", q: "___ 차를 마셔요. (Ik drink thee in plaats van koffie.)",
      options: ["커피 대신에", "커피를 대신에", "커피는 대신에", "커피인 대신에"], answer: 0,
      why: ["Goed: naamwoord + 대신에, zonder partikel.", "Na een naamwoord komt 대신 zonder 을/를.", "Na een naamwoord komt 대신 zonder 은/는.", "커피인 대신에 betekent \"omdat het koffie is, daarvoor\"; dat bedoel je niet."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik kook, en jij doet in ruil de afwas, Minsu.\"",
      tokens: [["제가", "jega"], ["요리하는", "yorihaneun"], ["대신에", "daesine"], ["설거지는 민수 씨가 해 주세요", "seolgeojineun Minsu ssiga hae juseyo"]] },
    { type: "fill", q: "이 동네는 조용___ 대신에 교통이 불편해요. (Deze buurt is rustig, maar het openbaar vervoer is onhandig.)", answers: ["한"],
      hint: "Welke vorm krijgt een bijvoeglijk werkwoord vóór 대신에?", why: "조용하다 is een bijvoeglijk werkwoord: 조용하 + ㄴ = 조용한." },
    { type: "mc", q: "오늘은 시간이 없어요. 대신 내일 만나요. Wat betekent 대신 hier?",
      options: ["Maar in plaats daarvan", "Omdat", "Daarna", "Bovendien"], answer: 0,
      why: ["Goed: aan het begin van een zin betekent 대신 \"maar in plaats daarvan\" of \"in ruil\".", "Een reden zou 그래서 of 왜냐하면 geven.", "Een volgorde zou 그다음에 zijn.", "\"Bovendien\" is 게다가."] },
    { type: "mc", q: "아픈 친구 ___ 제가 회의에 갔어요. (Ik ging in plaats van mijn zieke vriend naar de vergadering.)",
      options: ["대신에", "대신에서", "를 대신에", "에 대신"], answer: 0,
      why: ["Goed: naamwoord + 대신에.", "Er komt geen 에서 na 대신.", "Na een naamwoord komt 대신 zonder 을/를.", "에 komt na 대신, niet ervoor."] },
    { type: "open", q: "Vertaal: \"In plaats van tv te kijken, las ik een boek.\"",
      model: ["TV를 보는 대신에 책을 읽었어요.", "텔레비전을 보는 대신 책을 읽었어요.", "TV를 보는 대신에 책을 봤어요."],
      tip: "Check: 보 + 는 대신에 (niet 본 대신에), en de verleden tijd aan het eind." },
    { type: "open", q: "Vertaal: \"Dit restaurant is duur, maar daarvoor is het eten lekker.\"",
      model: ["이 식당은 비싼 대신에 음식이 맛있어요.", "이 식당은 비싼 대신 음식이 맛있어요."],
      tip: "Check: 비싸다 is een bijvoeglijk werkwoord, dus 비싼 대신에." }
  ],
  review: [
    { type: "mc", q: "오늘은 운동을 ___ 대신에 일찍 잤어요. (In plaats van te sporten, ging ik vandaag vroeg slapen.)",
      options: ["하는", "한", "했는", "할"], answer: 0,
      why: ["Goed: werkwoord + 는 대신에 voor \"in plaats van\".", "한 대신에 betekent dat je wél sportte, met compensatie.", "Er komt geen 았/었 vóór 는 대신에.", "-(으)ㄹ past niet vóór 대신에."] },
    { type: "mc", q: "이 노트북은 ___ 대신에 배터리가 오래가요. (Deze laptop is zwaar, maar de batterij gaat lang mee.)",
      options: ["무거운", "무겁는", "무겁은", "무거울"], answer: 0,
      why: ["Goed: 무겁다 is ㅂ-onregelmatig: 무거운.", "Een bijvoeglijk werkwoord krijgt geen 는.", "De ㅂ wordt 우: 무거운.", "-(으)ㄹ past niet vóór 대신에."] },
    { type: "mc", q: "주스 ___ 물을 주세요. (Geef me water in plaats van sap.)",
      options: ["대신에", "를 대신에", "대신에서", "대신을"], answer: 0,
      why: ["Goed: naamwoord + 대신에.", "Na een naamwoord komt 대신 zonder 을/를.", "Er komt geen 에서 na 대신.", "대신을 past hier niet; het is 대신(에)."] }
  ]
})
