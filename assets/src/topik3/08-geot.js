({
  id: "08", slug: "geot", title: "-는 것 en -기", sub: "Van een werkwoord een zelfstandig naamwoord maken",
  canDo: "Je kunt nu een handeling als onderwerp of lijdend voorwerp gebruiken met -는 것 en -기, en je weet wanneer -기 vast is (lijstjes, -기 시작하다, -기 전에).",
  guess: {
    q: "\"Koreaans studeren is leuk.\" Welke zin klopt, denk je?",
    options: ["한국어를 공부하는 것이 재미있어요.", "한국어를 공부하다가 재미있어요.", "한국어를 공부하는 것을 재미있어요.", "한국어를 공부해 것이 재미있어요."], answer: 0,
    why: ["Goed: stam 공부하 + 는 것 + 이: \"het studeren\" is het onderwerp.", "-다가 betekent \"terwijl ... en toen\". Het maakt geen naamwoord.", "Bij 재미있다 is het studeren het onderwerp: 것이, niet 것을.", "-는 것 komt aan de stam 공부하, niet aan de 어-vorm."]
  },
  problem: "In het Nederlands zeg je gewoon \"zwemmen is gezond\" of \"ik hou van lezen\". In het Koreaans kan een werkwoord niet zomaar onderwerp of lijdend voorwerp zijn. Je maakt er eerst een naamwoord van: met -는 것 (\"het ...-en\") of met -기.",
  pattern: [
    { l: "handeling", v: "한국어를 공부하", c: 1 }, { l: "-는 것 / -기", v: "는 것이", c: 2, key: true }, { l: "oordeel", v: "재미있어요", c: 4 }
  ],
  patternCap: "Stam + 는 것 (+ 이/을/은) = het ...-en · Stam + 기 = lijstjes en vaste combinaties: -기 시작하다, -기 전에 · Spreektaal: -는 게, -는 걸, -는 건",
  rules: [
    "-는 것 komt na de stam, met of zonder 받침: 가는 것, 먹는 것. Bij een ㄹ-stam valt de ㄹ weg: 만들다 → 만드는 것.",
    "-기 komt direct na de stam: 듣기, 말하기, 읽기, 쓰기, 만들기.",
    "Na 것 en -기 volgt een gewoon partikel: 것이, 것을, 것은; 기가, 기를, 기는.",
    "In spreektaal trek je 것 + partikel samen: 것이 → 게, 것을 → 걸, 것은 → 건.",
    "Vaste combinaties nemen altijd -기: -기 시작하다, -기 전에, -기 때문에, -기 쉽다, -기 어렵다."
  ],
  pitfall: "In vaste combinaties kun je -기 niet vervangen door -는 것. 먹는 것 전에 en 배우는 것 시작했어요 zijn fout. Zeg 먹기 전에 en 배우기 시작했어요.",
  examples: [
    { cn: "한국어를 공부하는 것이 재미있어요.", py: "Hangugeoreul gongbuhaneun geosi jaemiisseoyo.", nl: "Koreaans studeren is leuk." },
    { cn: "제 취미는 사진을 찍는 것이에요.", py: "Je chwimineun sajineul jjingneun geosieyo.", nl: "Mijn hobby is foto's maken." },
    { cn: "듣기는 쉬운데 말하기는 어려워요.", py: "Deutgineun swiunde malhagineun eoryeowoyo.", nl: "Luisteren is makkelijk, maar spreken is moeilijk." },
    { cn: "작년부터 피아노를 배우기 시작했어요.", py: "Jangnyeonbuteo pianoreul baeugi sijakaesseoyo.", nl: "Vorig jaar ben ik piano gaan leren." }
  ],
  nuance: [
    { h: "Wanneer -기?",
      p: "-기 is kort en zakelijk. Je gebruikt het in lijstjes, titels en to-do's: 듣기, 말하기, 장보기. Daarnaast in vaste combinaties: -기 시작하다, -기 전에, -기 때문에. Ook met oordelen over hoe makkelijk iets gaat: 이 신발은 걷기 편해요. Bij deze combinaties kies je nooit -는 것.",
      ex: [
        { cn: "오늘 할 일: 청소하기, 장보기, 숙제하기", py: "Oneul hal il: cheongsohagi, jangbogi, sukjehagi", nl: "Vandaag te doen: schoonmaken, boodschappen doen, huiswerk maken" },
        { cn: "자기 전에 이를 닦아요.", py: "Jagi jeone ireul dakkayo.", nl: "Voor het slapengaan poets ik mijn tanden." }
      ] },
    { h: "Wanneer -는 것?",
      p: "-는 것 is de gewone keuze in een volledige zin: als onderwerp, met 이다, of met 좋아하다. Bij 좋아하다 kan -기를 ook, maar -는 것을 klinkt in een gesprek natuurlijker. Zie of hoor je iemand iets doen? Dan kan alleen -는 것. Vergelijk het minimale paar.",
      ex: [
        { cn: "친구가 노래하는 것을 들었어요.", py: "Chinguga noraehaneun geoseul deureosseoyo.", nl: "Ik hoorde mijn vriend zingen." },
        { cn: "저는 노래하는 것을 좋아해요.", py: "Jeoneun noraehaneun geoseul joahaeyo.", nl: "Ik zing graag." }
      ] },
    { h: "Spreektaal en schrijftaal",
      p: "In een gesprek hoor je bijna altijd de korte vormen: 공부하는 게 재미있어요, 요리하는 걸 좋아해요, 운동하는 건 싫어요. In formele tekst schrijf je de volle vorm: 것이, 것을, 것은. -기 als los naamwoord (듣기, 말하기) vind je vooral in schoolboeken, instructies en opschriften.",
      ex: [
        { cn: "저는 요리하는 걸 좋아해요.", py: "Jeoneun yorihaneun geol joahaeyo.", nl: "Ik kook graag." }
      ] }
  ],
  mistakes: [
    { wrong: "저는 요리하다를 좋아해요.", right: "저는 요리하는 것을 좋아해요.", why: "De woordenboekvorm kan geen lijdend voorwerp zijn. Maak er eerst een naamwoord van met -는 것." },
    { wrong: "밥을 먹는 것 전에 손을 씻으세요.", right: "밥을 먹기 전에 손을 씻으세요.", why: "\"Voordat\" is een vaste combinatie met -기: -기 전에." },
    { wrong: "케이크를 만들는 것이 어려워요.", right: "케이크를 만드는 것이 어려워요.", why: "Bij een ㄹ-stam valt de ㄹ weg vóór -는: 만드는." },
    { wrong: "친구가 노래하기를 들었어요.", right: "친구가 노래하는 것을 들었어요.", why: "Als je iemand iets ziet of hoort doen, gebruik je -는 것, niet -기." }
  ],
  vocab: [
    ["-는 것 / -기", "-neun geot / -gi", "het ...-en (maakt van een werkwoord een naamwoord)"], ["취미", "chwimi", "hobby"], ["찍다", "jjikda", "(een foto) maken"],
    ["시작하다", "sijakada", "beginnen"], ["발음", "bareum", "uitspraak"], ["단어", "daneo", "woord"],
    ["외우다", "oeuda", "uit het hoofd leren"], ["연습하다", "yeonseupada", "oefenen"], ["실수하다", "silsuhada", "een fout maken"], ["중요하다", "jungyohada", "belangrijk zijn"]
  ],
  dialogue: [
    ["A", "한국어 공부에서 뭐가 제일 어려워요?", "Hangugeo gongbueseo mwoga jeil eoryeowoyo?", "Wat vind je het moeilijkst aan Koreaans leren?"],
    ["B", "저는 말하기가 제일 어려워요. 발음이 어려워서요.", "Jeoneun malhagiga jeil eoryeowoyo. Bareumi eoryeowoseoyo.", "Voor mij is spreken het moeilijkst. De uitspraak is lastig."],
    ["A", "저는 단어를 외우는 게 힘들어요.", "Jeoneun daneoreul oeuneun ge himdeureoyo.", "Ik vind woordjes leren zwaar."],
    ["B", "그럼 자기 전에 단어를 보는 건 어때요?", "Geureom jagi jeone daneoreul boneun geon eottaeyo?", "Wat dacht je ervan om voor het slapengaan woordjes te bekijken?"],
    ["A", "좋은 생각이에요. 오늘부터 해 볼게요.", "Joeun saenggagieyo. Oneulbuteo hae bolgeyo.", "Goed idee. Ik probeer het vanaf vandaag."]
  ],
  reading: {
    title: "나의 한국어 공부",
    lines: [
      { cn: "저는 작년 봄부터 한국어를 배우기 시작했어요.", py: "Jeoneun jangnyeon bombuteo hangugeoreul baeugi sijakaesseoyo.", nl: "Ik ben vorig voorjaar begonnen met Koreaans leren." },
      { cn: "처음에는 한글을 읽는 것도 어려웠어요.", py: "Cheoeumeneun hangeureul ingneun geotdo eoryeowosseoyo.", nl: "In het begin was zelfs Hangul lezen moeilijk." },
      { cn: "하지만 지금은 한국어로 문자를 보내는 것을 좋아해요.", py: "Hajiman jigeumeun hangugeoro munjareul bonaeneun geoseul joahaeyo.", nl: "Maar nu stuur ik graag berichtjes in het Koreaans." },
      { cn: "우리 반에서는 듣기, 말하기, 읽기, 쓰기를 모두 연습해요.", py: "Uri baneseoneun deutgi, malhagi, ilgi, sseugireul modu yeonseupaeyo.", nl: "In onze klas oefenen we luisteren, spreken, lezen en schrijven." },
      { cn: "저는 듣기는 잘하지만 말하기는 아직 어려워요.", py: "Jeoneun deutgineun jalhajiman malhagineun ajik eoryeowoyo.", nl: "Luisteren gaat goed, maar spreken vind ik nog moeilijk." },
      { cn: "사람들 앞에서 실수하는 것이 무서워요.", py: "Saramdeul apeseo silsuhaneun geosi museowoyo.", nl: "Ik ben bang om fouten te maken waar anderen bij zijn." },
      { cn: "그래서 요즘은 자기 전에 소리 내서 읽는 연습을 해요.", py: "Geuraeseo yojeumeun jagi jeone sori naeseo ingneun yeonseubeul haeyo.", nl: "Daarom oefen ik nu voor het slapengaan met hardop lezen." },
      { cn: "선생님은 \"실수하는 것은 괜찮아요. 많이 말하는 것이 중요해요\"라고 하셨어요.", py: "Seonsaengnimeun \"silsuhaneun geoseun gwaenchanayo. Mani malhaneun geosi jungyohaeyo\"rago hasyeosseoyo.", nl: "De leraar zei: \"Fouten maken is niet erg. Veel spreken is belangrijk.\"" },
      { cn: "이제는 한국 친구와 이야기하는 것이 즐거워요.", py: "Ijeneun hanguk chinguwa iyagihaneun geosi jeulgeowoyo.", nl: "Nu vind ik praten met Koreaanse vrienden leuk." }
    ],
    questions: [
      { type: "mc", q: "Wat vindt de schrijver nog moeilijk?",
        options: ["Spreken.", "Luisteren.", "Hangul lezen.", "Berichtjes sturen."], answer: 0,
        why: ["Goed: 말하기는 아직 어려워요.", "Luisteren gaat juist goed: 듣기는 잘하지만.", "Dat was alleen in het begin moeilijk: 처음에는.", "Dat doet de schrijver nu graag: 보내는 것을 좋아해요."] },
      { type: "mc", q: "Wat zei de leraar?",
        options: ["Fouten maken is niet erg; veel spreken is belangrijk.", "Je moet minder fouten maken.", "Je moet meer woordjes leren.", "Luisteren is het belangrijkst."], answer: 0,
        why: ["Goed: 실수하는 것은 괜찮아요. 많이 말하는 것이 중요해요.", "De leraar zegt juist dat fouten niet erg zijn.", "Over woordjes zegt de leraar niets.", "De leraar noemt spreken, niet luisteren."] },
      { type: "mc", q: "Waarom staat er 듣기, 말하기, 읽기, 쓰기 en niet 듣는 것, 말하는 것 ...?",
        options: ["Het is een lijstje met namen van vaardigheden; daar past -기.", "-는 것 kan nooit met 연습하다.", "-기 is verleden tijd.", "-는 것 kan alleen na 이다."], answer: 0,
        why: ["Goed: in lijstjes en als naam van een vaardigheid gebruik je -기.", "Dat is te streng; het gaat hier om het lijstje.", "-기 heeft geen tijd. Het is alleen een naamwoord.", "-는 것 kan met veel werkwoorden, zoals 좋아하다 en 중요하다."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Koreaans leren is leuk.\"",
      options: ["한국어를 배우는 것이 재미있어요.", "한국어를 배우기 것이 재미있어요.", "한국어를 배우는 것을 재미있어요.", "한국어를 배우다 것이 재미있어요."], answer: 0,
      why: ["Goed: 배우 + 는 것 + 이, als onderwerp van 재미있다.", "Je kiest -는 것 of -기, niet allebei.", "Bij 재미있다 is de handeling het onderwerp: 것이.", "Na de woordenboekvorm komt geen 것. Gebruik de stam + 는."] },
    { type: "mc", q: "밥을 ___ 손을 씻으세요. (Was je handen voordat je eet.)",
      options: ["먹기 전에", "먹는 것 전에", "먹은 전에", "먹기를 전에"], answer: 0,
      why: ["Goed: \"voordat\" is vast -기 전에.", "In deze vaste combinatie kan -는 것 niet.", "Vóór 전에 hoort -기, geen -(으)ㄴ.", "Tussen -기 en 전에 komt geen 를."] },
    { type: "mc", q: "케이크를 ___ 것이 어려워요. (Een taart maken is moeilijk.)",
      options: ["만드는", "만들는", "만들기", "만드기"], answer: 0,
      why: ["Goed: bij een ㄹ-stam valt de ㄹ weg vóór -는: 만드는.", "Vóór -는 valt de ㄹ van 만들다 weg.", "Je kiest -기 of -는 것, niet allebei.", "Bij -기 blijft de ㄹ wel staan: 만들기. En dan komt er geen 것."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["친구가 노래하기를 들었어요.", "친구가 노래하는 것을 들었어요.", "저는 노래하기를 좋아해요.", "노래하는 게 제 취미예요."], answer: 0,
      why: ["Goed: dit is fout. Als je iemand iets hoort doen, gebruik je -는 것.", "Dit klopt: je hoorde de vriend zingen.", "Dit klopt: bij 좋아하다 kan -기를 ook.", "Dit klopt: 게 is de spreektaalvorm van 것이."] },
    { type: "mc", q: "비가 오기 시작했어요. Wat betekent dit?",
      options: ["Het begon te regenen.", "Het regent niet meer.", "Het gaat zo regenen.", "Het regent altijd."], answer: 0,
      why: ["Goed: -기 시작하다 = beginnen te ...", "Ophouden (van regen) is 그치다, niet 시작하다.", "시작했어요 is verleden tijd: het is al begonnen.", "시작하다 zegt niets over altijd."] },
    { type: "mc", q: "요리하는 것을 좋아해요. Hoe zeg je 것을 in spreektaal?",
      options: ["걸", "게", "거을", "것를"], answer: 0,
      why: ["Goed: 것을 wordt 걸: 요리하는 걸 좋아해요.", "게 is de korte vorm van 것이, niet van 것을.", "거을 bestaat niet. De korte vorm is 걸.", "Na 것 (met 받침) komt 을, niet 를. Kort: 걸."] },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn droom is in Korea werken.\"",
      tokens: [["제", "je"], ["꿈은", "kkumeun"], ["한국에서", "hangugeseo"], ["일하는", "ilhaneun"], ["것이에요.", "geosieyo."]] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik lees graag voor het slapengaan.\"",
      tokens: [["자기", "jagi"], ["전에", "jeone"], ["책을", "chaegeul"], ["읽는", "ingneun"], ["것을", "geoseul"], ["좋아해요.", "joahaeyo."]],
      alt: ["책을 자기 전에 읽는 것을 좋아해요."] },
    { type: "fill", q: "작년부터 수영을 배우___ 시작했어요. (Vorig jaar ben ik begonnen met zwemles.)", answers: ["기"],
      hint: "Welke uitgang hoort vast bij 시작하다?", why: "-기 시작하다 is een vaste combinatie: 배우기 시작했어요." },
    { type: "open", q: "Vertaal: \"Mijn hobby is films kijken.\"", model: ["제 취미는 영화를 보는 것이에요.", "제 취미는 영화 보기예요.", "제 취미는 영화를 보는 거예요."],
      tip: "Check: 보 + 는 것 + 이에요, of 보기 + 예요. Schrijf 보는, niet 본." },
    { type: "open", q: "Vertaal: \"Koreaans spreken is moeilijk, maar leuk.\"", model: ["한국어로 말하는 것은 어렵지만 재미있어요.", "한국어로 말하는 건 어렵지만 재미있어요.", "한국어 말하기는 어렵지만 재미있어요."],
      tip: "Check: 말하 + 는 것 (of 말하기) als onderwerp, met 은/이 erna." }
  ],
  review: [
    { type: "mc", q: "\"Voordat ik ga sporten, drink ik water.\"",
      options: ["운동하기 전에 물을 마셔요.", "운동하는 것 전에 물을 마셔요.", "운동한 전에 물을 마셔요.", "운동하기를 전에 물을 마셔요."], answer: 0,
      why: ["Goed: -기 전에 = voordat.", "In de vaste combinatie -기 전에 kan -는 것 niet.", "Vóór 전에 hoort -기.", "Tussen -기 en 전에 komt geen 를."] },
    { type: "mc", q: "\"Ik wandel graag.\"",
      options: ["저는 걷는 것을 좋아해요.", "저는 걸는 것을 좋아해요.", "저는 걷다를 좋아해요.", "저는 걷는 것이 좋아해요."], answer: 0,
      why: ["Goed: 걷 + 는 것 + 을 좋아해요.", "Vóór -는 blijft de ㄷ van 걷다 staan. Alleen vóór een klinker wordt het ㄹ.", "De woordenboekvorm kan geen lijdend voorwerp zijn.", "Bij 좋아하다 is de handeling het lijdend voorwerp: 것을."] },
    { type: "mc", q: "공원에서 아이들이 ___ 것을 봤어요. (In het park zag ik kinderen spelen.)",
      options: ["노는", "놀는", "놀기", "노기"], answer: 0,
      why: ["Goed: 놀다 is een ㄹ-stam: de ㄹ valt weg vóór -는: 노는.", "Vóór -는 valt de ㄹ weg: 노는.", "Je kiest -기 of -는 것, en bij zien past alleen -는 것.", "노기 bestaat niet. Met -기 is het 놀기, maar dat past hier niet."] }
  ]
})
