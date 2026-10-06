({
  id: "05", slug: "aya", title: "-아야/어야 해요", sub: "Zeggen wat je moet doen",
  canDo: "Je kunt nu zeggen wat je moet doen, nu en in het verleden, met -아야/어야 해요.",
  guess: {
    q: "\"Ik moet nu naar huis.\" Welke zin klopt, denk je?",
    options: ["지금 집에 가야 해요.", "지금 집에 가아야 해요.", "지금 집에 가어야 해요.", "지금 집에 가야 있어요."], answer: 0,
    why: ["Goed: 가 + 아야 wordt samen 가야.", "가 + 아 smelt samen tot 가. Je schrijft geen dubbele 아.", "Na ㅏ komt -아야, niet -어야.", "Na -아야/어야 komt 해요, niet 있어요."]
  },
  problem: "Je kunt niet mee, want je moet nog werken. Of je moet medicijnen innemen. Het Koreaans heeft geen los woord voor \"moeten\". Je zegt: \"alleen als ik ... doe, is het goed\". Dat is -아야/어야 해요.",
  pattern: [
    { l: "wat", v: "약을", c: 3 }, { l: "stam", v: "먹", c: 4 },
    { l: "-아야/어야", v: "어야", c: 2, key: true }, { l: "하다", v: "해요", c: 5 }
  ],
  patternCap: "Stam + 아야/어야 해요 (of 돼요): 가야 해요, 먹어야 해요, 해야 해요",
  rules: [
    "Laatste klinker ㅏ of ㅗ: -아야 해요. 가다 wordt 가야 해요, 오다 wordt 와야 해요.",
    "Andere klinkers: -어야 해요. 먹다 wordt 먹어야 해요, 마시다 wordt 마셔야 해요.",
    "하다 wordt 해야 해요. 공부하다 wordt 공부해야 해요.",
    "Stam op 으 verliest de 으: 쓰다 wordt 써야 해요, 바쁘다 wordt 바빠야 해요.",
    "Verleden tijd: alleen het eind verandert. 가야 했어요 = ik moest gaan."
  ],
  pitfall: "\"Ik hoef niet te gaan\" is 안 가도 돼요. \"Ik moet wegblijven\" is iets anders: 가지 말아야 해요.",
  examples: [
    { cn: "내일 일찍 일어나야 해요.", py: "Naeil iljjik ireonaya haeyo.", nl: "Morgen moet ik vroeg opstaan." },
    { cn: "감기에 걸려서 약을 먹어야 해요.", py: "Gamgie geollyeoseo yageul meogeoya haeyo.", nl: "Ik ben verkouden, dus ik moet medicijnen innemen." },
    { cn: "시험이 있어서 공부해야 해요.", py: "Siheomi isseoseo gongbuhaeya haeyo.", nl: "Ik heb een examen, dus ik moet studeren." },
    { cn: "어제는 늦게까지 일해야 했어요.", py: "Eojeneun neutgekkaji ilhaeya haesseoyo.", nl: "Gisteren moest ik tot laat werken." }
  ],
  nuance: [
    { h: "-아야 해요 of -아야 돼요?",
      p: "Ze betekenen hetzelfde: moeten. -아야 돼요 hoor je het meest in spreektaal. -아야 해요 is iets neutraler en staat vaker in teksten. Je kunt ze allebei gebruiken. Ook in de verleden tijd: 가야 했어요 en 가야 됐어요.",
      ex: [
        { cn: "지금 가야 해요.", py: "Jigeum gaya haeyo.", nl: "Ik moet nu gaan." },
        { cn: "지금 가야 돼요.", py: "Jigeum gaya dwaeyo.", nl: "Ik moet nu gaan. (spreektaal)" }
      ] },
    { h: "Moeten, niet hoeven, niet mogen",
      p: "Moeten is -아야 해요. Niet hoeven is -지 않아도 돼요 of 안 -아도 돼요. Met 안 vóór -아야 해요 zeg je dat je iets juist níet moet doen. Let op: dat is iets heel anders dan niet hoeven.",
      ex: [
        { cn: "내일은 일찍 일어나야 해요.", py: "Naeireun iljjik ireonaya haeyo.", nl: "Morgen moet ik vroeg opstaan." },
        { cn: "내일은 일찍 안 일어나도 돼요.", py: "Naeireun iljjik an ireonado dwaeyo.", nl: "Morgen hoef ik niet vroeg op te staan." }
      ] },
    { h: "Formeel: -아야 합니다",
      p: "Op borden, in mededelingen en in formele situaties lees je -아야 합니다. Tegen vrienden zeg je -아야 돼 of -아야 해.",
      ex: [
        { cn: "여기에서는 신발을 벗어야 합니다.", py: "Yeogieseoneun sinbareul beoseoya hamnida.", nl: "Hier moet u uw schoenen uittrekken." },
        { cn: "나 지금 집에 가야 돼.", py: "Na jigeum jibe gaya dwae.", nl: "Ik moet nu naar huis. (tegen een vriend)" }
      ] }
  ],
  mistakes: [
    { wrong: "지금 집에 가아야 해요.", right: "지금 집에 가야 해요.", why: "가 + 아 smelt samen tot 가. Je schrijft geen dubbele 아." },
    { wrong: "어제 늦게까지 일해야 해요.", right: "어제 늦게까지 일해야 했어요.", why: "Het gaat over gisteren. De verleden tijd staat aan het eind: 했어요." },
    { wrong: "오늘은 일요일이라서 학교에 안 가야 해요.", right: "오늘은 일요일이라서 학교에 안 가도 돼요.", why: "Je bedoelt \"niet hoeven\". Dat is 안 가도 돼요, niet \"moeten wegblijven\"." },
    { wrong: "보고서를 쓰어야 해요.", right: "보고서를 써야 해요.", why: "Een stam op 으 verliest de 으: 쓰 + 어야 = 써야." }
  ],
  vocab: [
    ["-아야/어야 하다", "-aya/-eoya hada", "moeten"], ["일찍", "iljjik", "vroeg"], ["일어나다", "ireonada", "opstaan"],
    ["시험", "siheom", "examen, toets"], ["보고서", "bogoseo", "verslag"], ["쓰다", "sseuda", "schrijven"],
    ["여권", "yeogwon", "paspoort"], ["비자", "bija", "visum"], ["찾다", "chatda", "zoeken, vinden"], ["바꾸다", "bakkuda", "wisselen, ruilen"]
  ],
  dialogue: [
    ["A", "오늘 저녁에 같이 밥 먹을 수 있어요?", "Oneul jeonyeoge gachi bap meogeul su isseoyo?", "Kunnen we vanavond samen eten?"],
    ["B", "미안해요. 오늘은 숙제를 해야 해요.", "Mianhaeyo. Oneureun sukjereul haeya haeyo.", "Sorry. Vandaag moet ik huiswerk maken."],
    ["A", "숙제가 많아요?", "Sukjega manayo?", "Heb je veel huiswerk?"],
    ["B", "네, 내일까지 보고서를 써야 해요.", "Ne, naeilkkaji bogoseoreul sseoya haeyo.", "Ja, ik moet voor morgen een verslag schrijven."],
    ["A", "그럼 주말에 만나요.", "Geureom jumare mannayo.", "Laten we dan in het weekend afspreken."]
  ],
  reading: {
    title: "유학 준비",
    lines: [
      { cn: "저는 다음 달에 한국에 유학을 가요.", py: "Jeoneun daeum dare hanguge yuhageul gayo.", nl: "Volgende maand ga ik in Korea studeren." },
      { cn: "그래서 할 일이 많아요.", py: "Geuraeseo hal iri manayo.", nl: "Daarom heb ik veel te doen." },
      { cn: "먼저 여권을 만들어야 해요.", py: "Meonjeo yeogwoneul mandeureoya haeyo.", nl: "Eerst moet ik een paspoort laten maken." },
      { cn: "그리고 비자도 받아야 해요.", py: "Geurigo bijado badaya haeyo.", nl: "En ik moet ook een visum krijgen." },
      { cn: "비행기 표는 지난주에 샀어요.", py: "Bihaenggi pyoneun jinanjue sasseoyo.", nl: "Het vliegticket heb ik vorige week gekocht." },
      { cn: "한국에서 살 집도 찾아야 해요.", py: "Hangugeseo sal jipdo chajaya haeyo.", nl: "Ik moet ook een huis in Korea zoeken." },
      { cn: "어제는 은행에 가서 돈을 바꿔야 했어요.", py: "Eojeneun eunhaenge gaseo doneul bakkwoya haesseoyo.", nl: "Gisteren moest ik naar de bank om geld te wisselen." },
      { cn: "짐은 아직 안 싸도 돼요.", py: "Jimeun ajik an ssado dwaeyo.", nl: "Mijn bagage hoef ik nog niet in te pakken." },
      { cn: "바쁘지만 정말 기대돼요.", py: "Bappeujiman jeongmal gidaedwaeyo.", nl: "Het is druk, maar ik kijk er echt naar uit." }
    ],
    questions: [
      { type: "mc", q: "Wat heeft de schrijver al gedaan?",
        options: ["Het vliegticket gekocht.", "Een visum gekregen.", "Een huis in Korea gevonden.", "De bagage ingepakt."], answer: 0,
        why: ["Goed: 비행기 표는 지난주에 샀어요.", "Het visum moet nog: 비자도 받아야 해요.", "Het huis moet hij nog zoeken: 찾아야 해요.", "Inpakken hoeft nog niet: 안 싸도 돼요."] },
      { type: "mc", q: "Waarom ging hij gisteren naar de bank?",
        options: ["Om geld te wisselen.", "Om een paspoort te halen.", "Om een ticket te kopen.", "Om een huis te zoeken."], answer: 0,
        why: ["Goed: 은행에 가서 돈을 바꿔야 했어요.", "Een paspoort haal je niet bij de bank.", "Het ticket kocht hij vorige week.", "Een huis zoeken staat niet bij de bank."] },
      { type: "mc", q: "돈을 바꿔야 했어요. Wat betekent dit?",
        options: ["Hij moest geld wisselen.", "Hij moet geld wisselen.", "Hij hoefde geen geld te wisselen.", "Hij kon geen geld wisselen."], answer: 0,
        why: ["Goed: -아야/어야 + 했어요 = moest, in de verleden tijd.", "했어요 is verleden tijd, dus \"moest\".", "Niet hoeven zou -지 않아도 됐어요 zijn.", "Niet kunnen zou 바꿀 수 없었어요 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik moet water drinken.\" Welke zin klopt?",
      options: ["물을 마셔야 해요.", "물을 마시야 해요.", "물을 마사야 해요.", "물을 마셔야 있어요."], answer: 0,
      why: ["Goed: 마시 + 어야 wordt samen 마셔야.", "Je mist -어. 마시 + 어야 wordt 마셔야.", "Na ㅣ komt -어야, niet -아야.", "Na -어야 komt 해요, niet 있어요."] },
    { type: "mc", q: "\"Ik moet dit boek lezen.\" Welke zin klopt?",
      options: ["이 책을 읽어야 해요.", "이 책을 읽아야 해요.", "이 책을 읽야 해요.", "이 책을 읽어 해요."], answer: 0,
      why: ["Goed: de laatste klinker is ㅣ, dus -어야.", "Na ㅣ komt -어야, niet -아야.", "Na een 받침 heb je de volle vorm -어야 nodig.", "Je mist 야. Zonder 야 betekent het geen \"moeten\"."] },
    { type: "mc", q: "\"Gisteren moest ik werken.\" Welke zin klopt?",
      options: ["어제 일해야 했어요.", "어제 일해야 해요.", "어제 일하아야 했어요.", "어제 일해야 있었어요."], answer: 0,
      why: ["Goed: 해야, en de verleden tijd aan het eind: 했어요.", "Het gaat over gisteren. Het eind moet in de verleden tijd.", "하다 wordt altijd 해야, niet 하아야.", "Na -아야/어야 komt een vorm van 하다, niet 있다."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik moet mijn huiswerk voor Koreaans maken.\"",
      tokens: [["한국어", "hangugeo"], ["숙제를", "sukjereul"], ["해야", "haeya"], ["해요", "haeyo"]] },
    { type: "mc", q: "Welke zin betekent ook \"Ik moet gaan\"?",
      options: ["가야 돼요.", "가도 돼요.", "갈 수 있어요.", "가고 싶어요."], answer: 0,
      why: ["Goed: -아야 돼요 betekent hetzelfde als -아야 해요.", "-아도 돼요 betekent \"mogen\", niet \"moeten\".", "-(으)ㄹ 수 있어요 betekent \"kunnen\".", "-고 싶어요 betekent \"willen\"."] },
    { type: "mc", q: "\"Je hoeft morgen niet te komen.\"",
      options: ["내일은 안 와도 돼요.", "내일은 안 와야 해요.", "내일은 와야 해요.", "내일은 올 수 없어요."], answer: 0,
      why: ["Goed: niet hoeven is 안 -아도 돼요.", "안 와야 해요 betekent \"je moet wegblijven\". Dat is strenger.", "와야 해요 betekent juist \"je moet komen\".", "올 수 없어요 betekent \"je kunt niet komen\"."] },
    { type: "mc", q: "\"Ik moet een brief schrijven.\"",
      options: ["편지를 써야 해요.", "편지를 쓰어야 해요.", "편지를 쓰야 해요.", "편지를 써야 있어요."], answer: 0,
      why: ["Goed: de 으 valt weg: 쓰 + 어야 = 써야.", "Bij een stam op 으 valt de 으 weg.", "Je mist de klinker 어.", "Na -어야 komt 해요, niet 있어요."] },
    { type: "fill", q: "내일 시험이 있어서 오늘 ___ 해요. (Ik heb morgen een examen, dus vandaag moet ik studeren. 공부하다)", answers: ["공부해야"],
      hint: "Wat wordt 하다 vóór -야?", why: "하다 wordt 해, dus 공부해야 해요." },
    { type: "order", q: "Zet in de goede volgorde: \"Morgen moet ik vroeg opstaan.\"",
      tokens: [["내일", "naeil"], ["일찍", "iljjik"], ["일어나야", "ireonaya"], ["해요", "haeyo"]] },
    { type: "open", q: "Vertaal: \"Ik moet naar de dokter.\"", model: ["병원에 가야 해요.", "저는 병원에 가야 해요.", "병원에 가야 돼요."],
      tip: "Check: 가 + 아야 wordt 가야, zonder dubbele 아. Daarna komt 해요 (of 돼요)." },
    { type: "open", q: "Vertaal: \"Gisteren moest ik naar de bank.\"", model: ["어제 은행에 가야 했어요.", "어제 은행에 가야 됐어요.", "저는 어제 은행에 가야 했어요."],
      tip: "Check: 가야 blijft gelijk. Alleen het eind staat in de verleden tijd: 했어요 of 됐어요." }
  ],
  review: [
    { type: "mc", q: "\"Ik moet een cadeau kopen.\"",
      options: ["선물을 사야 해요.", "선물을 사아야 해요.", "선물을 사어야 해요.", "선물을 사야 있어요."], answer: 0,
      why: ["Goed: 사 + 아야 wordt samen 사야.", "사 + 아 smelt samen. Je schrijft geen dubbele 아.", "Na ㅏ komt -아야, niet -어야.", "Na -아야 komt 해요, niet 있어요."] },
    { type: "mc", q: "\"Mijn vriend moet om zeven uur komen.\"",
      options: ["친구가 일곱 시에 와야 해요.", "친구가 일곱 시에 오아야 해요.", "친구가 일곱 시에 와어야 해요.", "친구가 일곱 시에 오야 해요."], answer: 0,
      why: ["Goed: 오 + 아야 wordt samen 와야.", "오 + 아야 trek je samen tot 와야.", "Na ㅗ komt -아야, en 와 bevat die al.", "Je mist de klinker 아. 오 + 아야 = 와야."] },
    { type: "mc", q: "\"Ik hoef vandaag niet te werken.\"",
      options: ["오늘은 일하지 않아도 돼요.", "오늘은 일하지 않아야 해요.", "오늘은 일해야 해요.", "오늘은 일할 수 없어요."], answer: 0,
      why: ["Goed: niet hoeven is -지 않아도 돼요.", "-지 않아야 해요 betekent \"je moet niet werken\". Dat is iets anders.", "일해야 해요 betekent juist \"ik moet werken\".", "일할 수 없어요 betekent \"ik kan niet werken\"."] }
  ]
})
