({
  id: "12", slug: "a-itda", title: "-아/어 있다", sub: "Een toestand die blijft na een handeling",
  canDo: "Je kunt nu zeggen dat iets open staat, aan is, ergens ligt of zit, met -아/어 있다, en je weet wanneer je -고 있다 nodig hebt.",
  guess: {
    q: "Je komt thuis. \"De deur staat open.\" Welke zin klopt, denk je?",
    options: ["문이 열려 있어요.", "문을 열고 있어요.", "문을 열어 있어요.", "문이 열어 있어요."], answer: 0,
    why: ["Goed: 열리다 (opengaan) + -어 있다: de deur is open en blijft open.", "Dat is \"iemand is de deur aan het openen\": een handeling, geen toestand.", "-아/어 있다 gaat niet met een lijdend voorwerp (을/를). Gebruik 열리다.", "열다 heeft een lijdend voorwerp nodig. Voor een toestand gebruik je 열리다: 열려."]
  },
  problem: "In het Nederlands zeg je \"de deur staat open\" of \"hij zit op de bank\". Dat is geen handeling, maar een toestand: de handeling is klaar en het resultaat blijft. In het Koreaans zeg je dat met -아/어 있다. Met -고 있다 zeg je juist dat iemand nog bezig is.",
  pattern: [
    { l: "ding / persoon", v: "문이", c: 1 }, { l: "werkwoord zonder object", v: "열리", c: 3 }, { l: "-아/어 있다", v: "어 있어요", c: 2, key: true }
  ],
  patternCap: "Onderwerp (이/가) + stam van een werkwoord zonder object + 아/어 있다 · Beleefd over ouderen: -아/어 계시다",
  rules: [
    "Stam + 아/어 + 있다, net als bij -아/어요: 앉아 있다, 서 있다, 열려 있다, 켜져 있다.",
    "Alleen met werkwoorden zonder lijdend voorwerp: 앉다, 서다, 눕다, 남다, en passieve vormen zoals 열리다, 닫히다, 켜지다, 놓이다, 걸리다.",
    "Het ding of de persoon in die toestand krijgt 이/가 of 은/는, nooit 을/를: 불이 켜져 있어요.",
    "Over ouderen en meerderen gebruik je 계시다: 할머니가 누워 계세요.",
    "Verleden toestand: 있었어요. Ontkennen: 안 열려 있어요 of 열려 있지 않아요."
  ],
  pitfall: "Kleding en sieraden (입다, 신다, 쓰다, 끼다) zijn een uitzondering. \"Hij heeft een hoed op\" is 모자를 쓰고 있어요, met -고 있다, niet 써 있어요.",
  examples: [
    { cn: "문이 열려 있어요.", py: "Muni yeollyeo isseoyo.", nl: "De deur staat open." },
    { cn: "동생은 소파에 앉아 있어요.", py: "Dongsaengeun sopae anja isseoyo.", nl: "Mijn broertje zit op de bank." },
    { cn: "교실 불이 아직 켜져 있어요.", py: "Gyosil buri ajik kyeojyeo isseoyo.", nl: "Het licht in het klaslokaal is nog aan." },
    { cn: "책상 위에 편지가 놓여 있었어요.", py: "Chaeksang wie pyeonjiga noyeo isseosseoyo.", nl: "Er lag een brief op het bureau." }
  ],
  nuance: [
    { h: "-아/어 있다 of -고 있다?",
      p: "-고 있다 = iemand is bezig met een handeling. -아/어 있다 = de handeling is klaar, het resultaat blijft. Bij -고 있다 staat er vaak een persoon met een object (을/를). Bij -아/어 있다 staat het ding zelf voorop, met 이/가.",
      ex: [
        { cn: "제가 창문을 열고 있어요.", py: "Jega changmuneul yeolgo isseoyo.", nl: "Ik ben het raam aan het openen." },
        { cn: "창문이 열려 있어요.", py: "Changmuni yeollyeo isseoyo.", nl: "Het raam staat open." }
      ] },
    { h: "Van 열다 naar 열려 있다",
      p: "Veel werkwoorden hebben een paar: een vorm met object (열다, 닫다, 켜다, 놓다, 걸다) en een vorm zonder object (열리다, 닫히다, 켜지다, 놓이다, 걸리다). Voor -아/어 있다 neem je de vorm zonder object. Dat is precies zoals \"ik hang de foto op\" tegenover \"de foto hangt\".",
      ex: [
        { cn: "제가 벽에 사진을 걸었어요.", py: "Jega byeoge sajineul georeosseoyo.", nl: "Ik heb een foto aan de muur gehangen." },
        { cn: "벽에 사진이 걸려 있어요.", py: "Byeoge sajini geollyeo isseoyo.", nl: "Er hangt een foto aan de muur." }
      ] },
    { h: "Kleding: toch -고 있다",
      p: "Bij aankleden gebruik je -고 있다, ook voor de toestand. 코트를 입고 있어요 kan dus twee dingen betekenen: \"hij trekt zijn jas aan\" of \"hij heeft een jas aan\". De context beslist. Zeg nooit 입어 있어요 of 신어 있어요.",
      ex: [
        { cn: "그 사람은 검은 모자를 쓰고 있어요.", py: "Geu sarameun geomeun mojareul sseugo isseoyo.", nl: "Die persoon heeft een zwarte hoed op." }
      ] },
    { h: "Beleefd: -아/어 계시다",
      p: "Gaat het over je oma, je baas of een leraar? Dan wordt 있다 het beleefde 계시다: 앉아 계세요, 서 계세요. Over jezelf gebruik je gewoon 있다.",
      ex: [
        { cn: "할아버지는 거실에 앉아 계세요.", py: "Harabeojineun geosire anja gyeseyo.", nl: "Opa zit in de woonkamer." }
      ] }
  ],
  mistakes: [
    { wrong: "문을 열어 있어요.", right: "문이 열려 있어요.", why: "-아/어 있다 gaat niet met een object. Gebruik de vorm zonder object (열리다) en 이/가." },
    { wrong: "의자에 앉고 있어요.", right: "의자에 앉아 있어요.", why: "Voor \"zitten\" als toestand gebruik je -아/어 있다. 앉고 있어요 is \"bezig te gaan zitten\"." },
    { wrong: "모자를 써 있어요.", right: "모자를 쓰고 있어요.", why: "Bij kleding en accessoires gebruik je -고 있다, ook voor de toestand." },
    { wrong: "할머니가 방에 누워 있으세요.", right: "할머니가 방에 누워 계세요.", why: "Het beleefde woord voor 있다 is 계시다, niet 있으세요." }
  ],
  vocab: [
    ["-아/어 있다", "-a/eo itda", "(toestand na een handeling) staan, liggen, zijn"], ["열리다", "yeollida", "opengaan, open zijn"], ["켜지다", "kyeojida", "aangaan (licht, apparaat)"],
    ["놓이다", "noida", "neergelegd zijn, liggen"], ["걸리다", "geollida", "hangen (opgehangen zijn)"], ["남다", "namda", "overblijven"],
    ["현관문", "hyeongwanmun", "voordeur"], ["칠판", "chilpan", "schoolbord"], ["풍선", "pungseon", "ballon"], ["붙이다", "buchida", "plakken, ophangen"]
  ],
  dialogue: [
    ["A", "어? 현관문이 열려 있어요.", "Eo? Hyeongwanmuni yeollyeo isseoyo.", "Huh? De voordeur staat open."],
    ["B", "이상하네요. 아침에 분명히 닫았는데요.", "Isanghaneyo. Achime bunmyeonghi dadanneundeyo.", "Raar. Ik heb hem vanochtend echt dichtgedaan."],
    ["A", "거실 불도 켜져 있어요.", "Geosil buldo kyeojyeo isseoyo.", "Het licht in de woonkamer is ook aan."],
    ["B", "아, 소파에 누가 앉아 있어요!", "A, sopae nuga anja isseoyo!", "Ah, er zit iemand op de bank!"],
    ["A", "우리 형이에요! 형, 언제 왔어?", "Uri hyeongieyo! Hyeong, eonje wasseo?", "Het is mijn broer! Hé, wanneer ben je gekomen?"]
  ],
  reading: {
    title: "아침 교실",
    lines: [
      { cn: "오늘 아침에 제일 먼저 교실에 도착했어요.", py: "Oneul achime jeil meonjeo gyosire dochakaesseoyo.", nl: "Vanochtend kwam ik als eerste in het klaslokaal aan." },
      { cn: "그런데 교실 문이 벌써 열려 있었어요.", py: "Geureonde gyosil muni beolsseo yeollyeo isseosseoyo.", nl: "Maar de deur van het lokaal stond al open." },
      { cn: "불도 켜져 있고 창문도 열려 있었어요.", py: "Buldo kyeojyeo itgo changmundo yeollyeo isseosseoyo.", nl: "Het licht was aan en het raam stond ook open." },
      { cn: "칠판에는 \"선생님, 생일 축하합니다!\"라고 쓰여 있었어요.", py: "Chilpaneneun \"seonsaengnim, saengil chukahamnida!\"rago sseuyeo isseosseoyo.", nl: "Op het bord stond: \"Gefeliciteerd met uw verjaardag, juf!\"" },
      { cn: "선생님 책상 위에는 케이크가 놓여 있었어요.", py: "Seonsaengnim chaeksang wieneun keikeuga noyeo isseosseoyo.", nl: "Op het bureau van de juf stond een taart." },
      { cn: "교실 뒤에는 친구 두 명이 서 있었어요.", py: "Gyosil dwieneun chingu du myeongi seo isseosseoyo.", nl: "Achter in het lokaal stonden twee vrienden." },
      { cn: "친구들은 벽에 풍선을 붙이고 있었어요.", py: "Chingudeureun byeoge pungseoneul buchigo isseosseoyo.", nl: "Ze waren ballonnen aan de muur aan het plakken." },
      { cn: "저도 가방을 놓고 같이 준비했어요.", py: "Jeodo gabangeul noko gachi junbihaesseoyo.", nl: "Ik zette mijn tas neer en hielp mee met de voorbereiding." }
    ],
    questions: [
      { type: "mc", q: "Wat stond er op het bureau van de juf?",
        options: ["Een taart.", "Ballonnen.", "Een brief.", "Een tas."], answer: 0,
        why: ["Goed: 책상 위에는 케이크가 놓여 있었어요.", "De ballonnen gingen aan de muur.", "Een brief komt in deze tekst niet voor.", "De schrijver zette een tas neer, maar niet op het bureau."] },
      { type: "mc", q: "Wat deden de twee vrienden?",
        options: ["Ze plakten ballonnen aan de muur.", "Ze schreven op het bord.", "Ze deden het licht aan.", "Ze zaten aan het bureau."], answer: 0,
        why: ["Goed: 벽에 풍선을 붙이고 있었어요.", "Wie op het bord schreef, staat er niet. Wel dat er iets op stond.", "Het licht was al aan: 켜져 있었어요.", "Ze stonden achter in het lokaal: 서 있었어요."] },
      { type: "mc", q: "교실 문이 벌써 열려 있었어요. Wat betekent 열려 있었어요 hier?",
        options: ["De deur stond al open toen de schrijver aankwam.", "Iemand was de deur op dat moment aan het openen.", "De schrijver opende de deur.", "De deur ging later open."], answer: 0,
        why: ["Goed: -아/어 있다 = toestand na de handeling. Iemand had hem eerder opengedaan.", "Dat zou 문을 열고 있었어요 zijn: bezig met de handeling.", "De schrijver kwam aan en de deur was al open.", "있었어요 is verleden, en 벌써 zegt: toen al."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Het licht is aan.\"",
      options: ["불이 켜져 있어요.", "불을 켜 있어요.", "불이 켜 있어요.", "불이 켜지고 있어요."], answer: 0,
      why: ["Goed: 켜지다 (aangaan) + -어 있다: 켜져 있어요.", "-아/어 있다 gaat niet met een object (을/를).", "켜다 heeft een object nodig. Gebruik 켜지다: 켜져.", "-고 있다 is \"bezig aan te gaan\", geen toestand."] },
    { type: "mc", q: "할아버지는 지금 거실에 ___ 계세요. (Opa zit nu in de woonkamer.)",
      options: ["앉아", "앉고", "앉는", "앉을"], answer: 0,
      why: ["Goed: 앉아 계세요 = beleefd voor 앉아 있어요.", "앉고 계세요 is \"bezig te gaan zitten\", geen toestand.", "Vóór 계시다 hoort de 아/어-vorm, geen 는.", "-(으)ㄹ is een toekomstvorm en past niet vóór 계시다."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["모자를 써 있어요.", "모자를 쓰고 있어요.", "의자에 앉아 있어요.", "불이 켜져 있어요."], answer: 0,
      why: ["Goed: dit is fout. Bij kleding en accessoires gebruik je -고 있다.", "Dit klopt: \"hij heeft een hoed op\".", "Dit klopt: zitten als toestand.", "Dit klopt: het licht is aan."] },
    { type: "mc", q: "\"Ik ben het raam aan het openen.\"",
      options: ["창문을 열고 있어요.", "창문이 열려 있어요.", "창문을 열어 있어요.", "창문이 열고 있어요."], answer: 0,
      why: ["Goed: bezig met een handeling op een object = -고 있다.", "Dat is \"het raam staat open\": een toestand.", "-아/어 있다 gaat niet met een object. En je bent nog bezig.", "Het raam opent zichzelf niet. Jij doet het: 창문을 열고 있어요."] },
    { type: "mc", q: "냉장고에 우유가 조금 ___ 있어요. (Er is nog een beetje melk over in de koelkast.)",
      options: ["남아", "남고", "남어", "남은"], answer: 0,
      why: ["Goed: 남다 + -아 있다: 남아 있어요.", "-고 있다 past niet: de melk is niet bezig met overblijven.", "남 heeft ㅏ als klinker, dus -아, niet -어.", "Vóór 있다 hoort de 아/어-vorm, geen bijvoeglijke vorm."] },
    { type: "order", q: "Zet in de goede volgorde: \"Toen ik thuiskwam, stond de deur open.\"",
      tokens: [["집에", "jibe"], ["오니까", "onikka"], ["문이", "muni"], ["열려", "yeollyeo"], ["있었어요.", "isseosseoyo."]] },
    { type: "order", q: "Zet in de goede volgorde: \"Het licht is aan, dus er is vast iemand binnen.\"",
      tokens: [["불이", "buri"], ["켜져", "kyeojyeo"], ["있으니까", "isseunikka"], ["안에 사람이", "ane sarami"], ["있을 거예요.", "isseul geoyeyo."]] },
    { type: "fill", q: "가게 문이 ___ 있어요. (De deur van de winkel is dicht.)", answers: ["닫혀"],
      hint: "닫히다 (dichtgaan) + -어", why: "닫히다 + -어 있다 = 닫혀 있어요: de deur is dicht en blijft dicht." },
    { type: "mc", q: "Je ziet je vriend bij de bushalte. \"Hij staat bij de halte.\"",
      options: ["정류장에 서 있어요.", "정류장에 서고 있어요.", "정류장에 서어 있어요.", "정류장에 섰고 있어요."], answer: 0,
      why: ["Goed: 서다 + -어 있다; 서어 wordt samen 서.", "-고 있다 is een handeling. Staan als toestand is 서 있어요.", "서 + 어 trekt samen tot 서.", "Na 섰 komt geen -고 있다; de verleden tijd zit in 있었어요."] },
    { type: "mc", q: "Je vertelt over je oma. \"Oma ligt in haar kamer.\"",
      options: ["할머니는 방에 누워 계세요.", "할머니는 방에 누워 있으세요.", "할머니는 방에 눕어 계세요.", "할머니는 방에 눕고 계세요."], answer: 0,
      why: ["Goed: 눕다 → 누워, en 계시다 voor oma.", "Het beleefde woord voor 있다 is 계시다, niet 있으세요.", "눕다 is een ㅂ-werkwoord: 눕 + 어 wordt 누워.", "Liggen als toestand is -아/어 계시다, niet -고."] },
    { type: "open", q: "Vertaal: \"Het licht in de keuken is aan.\"", model: ["부엌 불이 켜져 있어요.", "부엌에 불이 켜져 있어요.", "부엌 불이 켜져 있습니다."],
      tip: "Check: 불이 met 이 (geen 을), en 켜지다 + -어 있다 = 켜져 있어요." },
    { type: "open", q: "Vertaal: \"Er ligt een boek op tafel.\"", model: ["테이블 위에 책이 놓여 있어요.", "식탁 위에 책이 놓여 있어요.", "탁자 위에 책이 놓여 있어요."],
      tip: "Check: 놓이다 (neergelegd zijn) + -어 있다 = 놓여 있어요. 책이 krijgt 이, niet 을." }
  ],
  review: [
    { type: "mc", q: "\"De winkel is dicht.\"",
      options: ["가게 문이 닫혀 있어요.", "가게 문을 닫아 있어요.", "가게 문이 닫고 있어요.", "가게 문이 닫혀 해요."], answer: 0,
      why: ["Goed: 닫히다 + -어 있다.", "-아/어 있다 gaat niet met een object (을/를).", "-고 있다 is een handeling, en 닫다 heeft een object nodig.", "Na 닫혀 hoort 있다, niet 하다."] },
    { type: "mc", q: "벽에 달력이 ___ 있어요. (Er hangt een kalender aan de muur.)",
      options: ["걸려", "걸어", "걸리고", "걸린"], answer: 0,
      why: ["Goed: 걸리다 (hangen) + -어 있다: 걸려 있어요.", "걸다 is \"ophangen\" en heeft een object nodig.", "-고 있다 is een handeling. De kalender hangt gewoon.", "Vóór 있다 hoort de 아/어-vorm, geen bijvoeglijke vorm."] },
    { type: "mc", q: "\"Zij heeft een bril op.\"",
      options: ["안경을 쓰고 있어요.", "안경을 써 있어요.", "안경이 써 있어요.", "안경을 쓰어 있어요."], answer: 0,
      why: ["Goed: kleding en accessoires gaan met -고 있다.", "Bij een bril gebruik je niet -아/어 있다.", "Zij draagt de bril; 쓰다 heeft een object nodig.", "쓰 + 어 trekt samen tot 써, en ook dan is -고 있다 nodig."] }
  ]
})
