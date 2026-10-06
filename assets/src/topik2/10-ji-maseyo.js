({
  id: "10", slug: "ji-maseyo", title: "-지 마세요 en -지 말고", sub: "Iemand vragen iets niet te doen",
  canDo: "Je kunt nu beleefd vragen of zeggen dat iemand iets niet moet doen, en een alternatief geven met -지 말고.",
  guess: {
    q: "Je ziet iemand roken in een café. Je zegt: \"Rook hier niet, alstublieft.\" Welke zin klopt, denk je?",
    options: ["여기에서 담배를 피우지 마세요.", "여기에서 담배를 안 피우세요.", "여기에서 담배를 피우지 않아요.", "여기에서 담배를 피우지 말세요."], answer: 0,
    why: ["Goed: stam + 지 마세요 = doe het niet.", "안 + -세요 is geen verbod. Het betekent \"u rookt hier niet\".", "-지 않아요 is een mededeling: \"(ik) rook niet\".", "De ㄹ van 말다 valt weg vóór -세요: 마세요."]
  },
  problem: "Je wilt iemand vragen iets níet te doen: \"Kom niet te laat\" of \"Raak het niet aan.\" In het Nederlands zet je gewoon \"niet\" in de opdracht. In het Koreaans werkt dat niet met 안. Je gebruikt een apart werkwoord: -지 마세요 na de stam.",
  pattern: [
    { l: "wat", v: "사진을 찍", c: 3 }, { l: "-지 마세요", v: "지 마세요", c: 2, key: true }, { l: "-지 말고", v: "지 말고 ...", c: 4, key: true }
  ],
  patternCap: "Werkwoordstam + 지 마세요 (niet doen) / stam + 지 말고 + opdracht (niet A, maar B) / naamwoord + 말고 (niet X maar)",
  rules: [
    "-지 마세요 komt op elke werkwoordstam, met of zonder 받침: 가지 마세요, 먹지 마세요.",
    "Niet A, maar B: stam + 지 말고 + opdracht. 버스를 타지 말고 지하철을 타세요. Bij een naamwoord alleen 말고: 커피 말고 차 주세요.",
    "Formeel, bijvoorbeeld op bordjes: -지 마십시오. Tegen vrienden: -지 마.",
    "\"Laten we niet ...\": -지 맙시다 of -지 마요.",
    "Geen verleden tijd vóór -지: zeg 먹지 마세요, niet 먹었지 마세요."
  ],
  pitfall: "안 + -(으)세요 is geen verbod. 안 가세요 betekent \"u gaat niet\" of \"gaat u niet?\". Een verbod is altijd -지 마세요.",
  examples: [
    { cn: "여기에서 사진을 찍지 마세요.", py: "Yeogieseo sajineul jjikji maseyo.", nl: "Maak hier geen foto's, alstublieft." },
    { cn: "걱정하지 마세요.", py: "Geokjeonghaji maseyo.", nl: "Maak je geen zorgen." },
    { cn: "내일은 늦지 마세요.", py: "Naeireun neutji maseyo.", nl: "Kom morgen niet te laat." },
    { cn: "택시를 타지 말고 지하철을 타세요.", py: "Taeksireul taji malgo jihacheoreul taseyo.", nl: "Neem geen taxi, maar de metro." }
  ],
  nuance: [
    { h: "-지 마세요 of 안 -(으)세요?",
      p: "-(으)세요 kan een opdracht zijn, maar ook een beleefde mededeling of vraag over de ander. Met 안 ervoor wordt het altijd een mededeling of vraag: \"u doet het niet\". Wil je iemand vragen iets niet te doen, gebruik dan -지 마세요.",
      ex: [
        { cn: "내일 회사에 안 가세요?", py: "Naeil hoesae an gaseyo?", nl: "Gaat u morgen niet naar het werk?" },
        { cn: "내일 회사에 가지 마세요.", py: "Naeil hoesae gaji maseyo.", nl: "Ga morgen niet naar het werk." }
      ] },
    { h: "-지 마세요 of -지 않아요?",
      p: "-지 않아요 is een gewone ontkenning: je vertelt dat iemand iets niet doet. -지 마세요 is een verzoek aan de ander. Over jezelf kun je dus nooit -지 마세요 zeggen.",
      ex: [
        { cn: "저는 고기를 먹지 않아요.", py: "Jeoneun gogireul meokji anayo.", nl: "Ik eet geen vlees." },
        { cn: "오늘은 고기를 먹지 마세요.", py: "Oneureun gogireul meokji maseyo.", nl: "Eet vandaag geen vlees." }
      ] },
    { h: "Niet A, maar B: -지 말고 en 말고",
      p: "Wil je een alternatief geven, gebruik dan -지 말고 tussen twee handelingen. Het tweede deel is een opdracht of voorstel. Gaat het om twee dingen in plaats van twee handelingen, dan zet je 말고 direct na het naamwoord, zonder 을/를.",
      ex: [
        { cn: "찬물을 마시지 말고 따뜻한 물을 드세요.", py: "Chanmureul masiji malgo ttatteutan mureul deuseyo.", nl: "Drink geen koud water, maar warm water." },
        { cn: "이거 말고 저거 주세요.", py: "Igeo malgo jeogeo juseyo.", nl: "Niet deze, maar die graag." }
      ] },
    { h: "Formeel, beleefd en informeel",
      p: "Op bordjes en in aankondigingen lees je -지 마십시오. In een gewoon gesprek zeg je -지 마세요. Tegen vrienden en jongere mensen zeg je -지 마. Wil je samen iets niet doen, dan zeg je -지 맙시다 of -지 마요.",
      ex: [
        { cn: "이곳에 쓰레기를 버리지 마십시오.", py: "Igose sseuregireul beoriji masipsio.", nl: "Gooi hier geen afval weg." },
        { cn: "울지 마. 괜찮아.", py: "Ulji ma. Gwaenchana.", nl: "Niet huilen. Het is goed." }
      ] }
  ],
  mistakes: [
    { wrong: "여기에서 안 뛰세요.", right: "여기에서 뛰지 마세요.", why: "안 + -세요 is een mededeling over de ander. Een verbod is -지 마세요." },
    { wrong: "걱정하지 말세요.", right: "걱정하지 마세요.", why: "De ㄹ van 말다 valt weg vóór -세요: 마세요." },
    { wrong: "저는 술을 마시지 마세요.", right: "저는 술을 마시지 않아요.", why: "Over jezelf vertel je iets: -지 않아요. -지 마세요 is een verzoek aan een ander." },
    { wrong: "커피를 말고 차 주세요.", right: "커피 말고 차 주세요.", why: "Na een naamwoord komt 말고 direct, zonder 을/를." }
  ],
  vocab: [
    ["-지 마세요", "-ji maseyo", "doe niet ..., niet doen alstublieft"], ["-지 말고", "-ji malgo", "niet ..., maar"], ["걱정하다", "geokjeonghada", "zich zorgen maken"],
    ["만지다", "manjida", "aanraken"], ["뛰다", "ttwida", "rennen"], ["떠들다", "tteodeulda", "lawaai maken, luid praten"],
    ["그림", "geurim", "schilderij, tekening"], ["규칙", "gyuchik", "regel"], ["미술관", "misulgwan", "kunstmuseum"], ["찬물", "chanmul", "koud water"]
  ],
  dialogue: [
    ["A", "선생님, 감기에 걸렸어요.", "Seonsaengnim, gamgie geollyeosseoyo.", "Dokter, ik ben verkouden."],
    ["B", "오늘은 찬물을 마시지 말고 따뜻한 물을 드세요.", "Oneureun chanmureul masiji malgo ttatteutan mureul deuseyo.", "Drink vandaag geen koud water, maar warm water."],
    ["A", "커피는 괜찮아요?", "Keopineun gwaenchanayo?", "Is koffie goed?"],
    ["B", "아니요, 커피도 마시지 마세요.", "Aniyo, keopido masiji maseyo.", "Nee, drink ook geen koffie."],
    ["A", "네. 일은 해도 괜찮아요?", "Ne. Ireun haedo gwaenchanayo?", "Oké. Mag ik wel werken?"],
    ["B", "오늘은 일하지 말고 푹 쉬세요.", "Oneureun ilhaji malgo puk swiseyo.", "Werk vandaag niet, maar rust goed uit."]
  ],
  reading: {
    title: "미술관 규칙",
    lines: [
      { cn: "내일 우리 반은 미술관에 가요.", py: "Naeil uri baneun misulgwane gayo.", nl: "Morgen gaat onze klas naar het kunstmuseum." },
      { cn: "선생님이 미술관 규칙을 말씀하셨어요.", py: "Seonsaengnimi misulgwan gyuchigeul malsseumhasyeosseoyo.", nl: "De leraar vertelde de regels van het museum." },
      { cn: "\"그림을 손으로 만지지 마세요.\"", py: "\"Geurimeul soneuro manjiji maseyo.\"", nl: "\"Raak de schilderijen niet aan met je handen.\"" },
      { cn: "\"안에서 뛰지 말고 천천히 걸으세요.\"", py: "\"Aneseo ttwiji malgo cheoncheonhi georeuseyo.\"", nl: "\"Ren binnen niet, maar loop langzaam.\"" },
      { cn: "\"큰 소리로 떠들지 마세요. 다른 사람들이 그림을 보고 있어요.\"", py: "\"Keun soriro tteodeulji maseyo. Dareun saramdeuri geurimeul bogo isseoyo.\"", nl: "\"Praat niet luid. Andere mensen kijken naar de schilderijen.\"" },
      { cn: "\"사진은 괜찮아요. 하지만 플래시는 쓰지 마세요.\"", py: "\"Sajineun gwaenchanayo. Hajiman peullaesineun sseuji maseyo.\"", nl: "\"Foto's zijn goed. Maar gebruik geen flits.\"" },
      { cn: "\"그리고 아침 아홉 시까지 학교 앞으로 오세요. 늦지 마세요!\"", py: "\"Geurigo achim ahop sikkaji hakgyo apeuro oseyo. Neutji maseyo!\"", nl: "\"En kom om negen uur 's ochtends naar de voorkant van de school. Kom niet te laat!\"" },
      { cn: "저는 미술관에 처음 가요. 정말 기대돼요.", py: "Jeoneun misulgwane cheoeum gayo. Jeongmal gidaedwaeyo.", nl: "Ik ga voor het eerst naar een kunstmuseum. Ik kijk er echt naar uit." }
    ],
    questions: [
      { type: "mc", q: "Mogen de leerlingen foto's maken?",
        options: ["Ja, maar zonder flits.", "Nee, helemaal niet.", "Ja, ook met flits.", "Alleen van de leraar."], answer: 0,
        why: ["Goed: 사진은 괜찮아요. 하지만 플래시는 쓰지 마세요.", "Foto's zijn juist goed: 사진은 괜찮아요.", "De flits mag niet: 플래시는 쓰지 마세요.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "Hoe laat moeten de leerlingen bij school zijn?",
        options: ["Om negen uur 's ochtends.", "Om acht uur 's ochtends.", "Om tien uur 's ochtends.", "Om negen uur 's avonds."], answer: 0,
        why: ["Goed: 아침 아홉 시까지 학교 앞으로 오세요.", "아홉 is negen, niet acht (여덟).", "아홉 is negen, niet tien (열).", "Er staat 아침: 's ochtends."] },
      { type: "mc", q: "안에서 뛰지 말고 천천히 걸으세요. Wat betekent -지 말고 hier?",
        options: ["Ren niet, maar loop langzaam.", "Ren en loop daarna langzaam.", "Als je niet rent, loop je langzaam.", "Je rent niet, dus je loopt langzaam."], answer: 0,
        why: ["Goed: -지 말고 = niet A, maar B.", "-지 말고 verbiedt het eerste deel. Het is geen volgorde.", "\"Als\" is -(으)면.", "-지 말고 is geen reden. Het tweede deel is een opdracht."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Kom niet te laat.\" Welke zin klopt?",
      options: ["늦지 마세요.", "안 늦으세요.", "늦지 않아요.", "늦지 말세요."], answer: 0,
      why: ["Goed: stam + 지 마세요.", "안 + -(으)세요 is een mededeling of vraag, geen verbod.", "-지 않아요 is een mededeling: \"(ik) ben niet te laat\".", "De ㄹ van 말다 valt weg vóór -세요: 마세요."] },
    { type: "mc", q: "\"Neem niet de bus, maar de metro.\"",
      options: ["버스를 타지 말고 지하철을 타세요.", "버스를 타지 마고 지하철을 타세요.", "버스를 안 타지 말고 지하철을 타세요.", "버스를 타지 말아서 지하철을 타세요."], answer: 0,
      why: ["Goed: -지 말고 = niet A, maar B.", "Vóór -고 blijft de ㄹ staan: 말고.", "Met 안 erbij ontken je twee keer: \"neem wél de bus\".", "-아서 geeft een reden, geen \"maar\"."] },
    { type: "mc", q: "\"Geen koffie, maar thee graag.\"",
      options: ["커피 말고 차 주세요.", "커피를 말고 차 주세요.", "커피 안 말고 차 주세요.", "커피지 말고 차 주세요."], answer: 0,
      why: ["Goed: naamwoord + 말고, zonder 을/를.", "Na een naamwoord komt 말고 direct, zonder 을/를.", "안 hoort hier niet. 말고 is al de ontkenning.", "-지 komt alleen op een werkwoordstam, niet op een naamwoord."] },
    { type: "mc", q: "내일 학교에 안 가세요? Wat betekent dit?",
      options: ["Gaat u morgen niet naar school?", "Ga morgen niet naar school.", "Ik ga morgen niet naar school.", "Laten we morgen niet naar school gaan."], answer: 0,
      why: ["Goed: 안 + -(으)세요 is een beleefde vraag of mededeling over de ander.", "Een verbod zou 가지 마세요 zijn.", "-(으)세요 gaat over de ander, niet over jezelf.", "\"Laten we niet\" is -지 맙시다."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["저는 술을 마시지 마세요.", "저는 술을 마시지 않아요.", "술을 마시지 마세요.", "술을 많이 마시지 마세요."], answer: 0,
      why: ["Goed: dit is fout. Over jezelf zeg je -지 않아요, geen -지 마세요.", "Dit klopt: een mededeling over jezelf.", "Dit klopt: een verzoek aan de ander.", "Dit klopt: drink niet te veel."] },
    { type: "mc", q: "Welke tekst past op een bordje in een museum?",
      options: ["사진을 찍지 마십시오.", "사진을 찍지 마.", "사진을 안 찍으십시오.", "사진을 찍지 않습니다."], answer: 0,
      why: ["Goed: -지 마십시오 is de formele vorm voor bordjes.", "-지 마 is informeel, voor vrienden.", "안 + -(으)십시오 is geen verbod.", "-지 않습니다 is een mededeling, geen verbod."] },
    { type: "mc", q: "\"Laten we vandaag geen ramen eten.\"",
      options: ["오늘은 라면을 먹지 맙시다.", "오늘은 라면을 먹지 마세요.", "오늘은 라면을 먹지 말읍시다.", "오늘은 라면을 먹지 않아요."], answer: 0,
      why: ["Goed: \"laten we niet\" = -지 맙시다.", "-지 마세요 is een verzoek aan de ander, niet aan jullie samen.", "De ㄹ valt weg: 말 + ㅂ시다 = 맙시다.", "-지 않아요 is een mededeling, geen voorstel."] },
    { type: "fill", q: "그림을 ___ 마세요. (Raak de schilderijen niet aan. 만지다 = aanraken)", answers: ["만지지"],
      hint: "Stam + 지, dan 마세요.", why: "만지 + 지 + 마세요: raak het niet aan." },
    { type: "order", q: "Zet in de goede volgorde: \"Drink geen koud water, maar warm water.\"",
      tokens: [["찬물을", "chanmureul"], ["마시지 말고", "masiji malgo"], ["따뜻한 물을", "ttatteutan mureul"], ["드세요", "deuseyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Maak je geen zorgen en rust goed uit.\"",
      tokens: [["걱정하지", "geokjeonghaji"], ["말고", "malgo"], ["푹", "puk"], ["쉬세요", "swiseyo"]] },
    { type: "open", q: "Vertaal: \"Kom morgen niet te laat.\"", model: ["내일 늦지 마세요.", "내일은 늦지 마세요."],
      tip: "Check: 늦 + 지 마세요. Niet 안 늦으세요." },
    { type: "open", q: "Vertaal: \"Rook hier niet.\"", model: ["여기에서 담배를 피우지 마세요.", "여기서 담배를 피우지 마세요.", "여기에서 담배를 피우지 마십시오."],
      tip: "Check: 피우 + 지 마세요. De ㄹ van 말다 valt weg: 마세요, niet 말세요." }
  ],
  review: [
    { type: "mc", q: "\"Ren niet in de gang.\"",
      options: ["복도에서 뛰지 마세요.", "복도에서 안 뛰세요.", "복도에서 뛰지 않아요.", "복도에서 뛰지 말세요."], answer: 0,
      why: ["Goed: stam + 지 마세요.", "안 + -(으)세요 is geen verbod.", "-지 않아요 is een mededeling.", "De ㄹ valt weg vóór -세요: 마세요."] },
    { type: "mc", q: "\"Niet de rode, maar de blauwe graag.\"",
      options: ["빨간색 말고 파란색 주세요.", "빨간색을 말고 파란색 주세요.", "빨간색 마고 파란색 주세요.", "빨간색이지 말고 파란색 주세요."], answer: 0,
      why: ["Goed: naamwoord + 말고.", "Na een naamwoord komt 말고 zonder 을/를.", "Vóór -고 blijft de ㄹ staan: 말고.", "Na een naamwoord komt alleen 말고, zonder -이지."] },
    { type: "mc", q: "\"Ik eet geen vlees.\"",
      options: ["저는 고기를 먹지 않아요.", "저는 고기를 먹지 마세요.", "저는 고기를 안 먹으세요.", "저는 고기를 먹지 마요."], answer: 0,
      why: ["Goed: een mededeling over jezelf: -지 않아요.", "-지 마세요 is een verzoek aan een ander.", "-(으)세요 gebruik je niet over jezelf.", "-지 마요 is een verzoek of voorstel, geen mededeling."] }
  ]
})
