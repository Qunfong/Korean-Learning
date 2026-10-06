({
  id: "03", slug: "aseo", title: "-아서/어서", sub: "Omdat, en: en dan daar",
  canDo: "Je kunt nu een reden geven en twee handelingen die bij elkaar horen verbinden, met -아서/어서.",
  guess: {
    q: "\"Omdat ik moe was, ben ik vroeg gaan slapen.\" Welke zin klopt, denk je?",
    options: ["피곤해서 일찍 잤어요.", "피곤했어서 일찍 잤어요.", "피곤하아서 일찍 잤어요.", "피곤해어서 일찍 잤어요."], answer: 0,
    why: ["Goed: 하다 wordt 해서, en de verleden tijd staat alleen aan het eind.", "Vóór -아서/어서 komt geen verleden tijd.", "하다 wordt altijd 해서, niet 하아서.", "해 bevat de klinker al. Je voegt alleen 서 toe."]
  },
  problem: "Je wilt een reden geven: \"Ik ben te laat, omdat de bus laat kwam.\" Of je wilt zeggen dat je ergens heen gaat en daar iets doet. Het Nederlands heeft daarvoor twee woorden: \"omdat\" en \"en dan\". Het Koreaans gebruikt voor allebei -아서/어서 op de stam.",
  pattern: [
    { l: "reden", v: "배가 아파", c: 3 }, { l: "-아서/어서", v: "서", c: 2, key: true }, { l: "gevolg", v: "병원에 갔어요", c: 5 }
  ],
  patternCap: "Stam + 아서/어서 + gevolg: 가서, 와서, 먹어서, 해서",
  rules: [
    "Laatste klinker ㅏ of ㅗ: -아서. 좋다 wordt 좋아서, 가다 wordt 가서, 오다 wordt 와서.",
    "Andere klinkers: -어서. 먹다 wordt 먹어서, 마시다 wordt 마셔서.",
    "하다 wordt 해서. 공부하다 wordt 공부해서.",
    "Stam op 으 verliest de 으: 바쁘다 wordt 바빠서, 고프다 wordt 고파서.",
    "Bij \"en dan\" hoort de tweede handeling bij de eerste: 시장에 가서 과일을 사요. Hier mag een voorstel wel."
  ],
  pitfall: "Geen verleden tijd vóór -아서/어서: zeg 늦어서, niet 늦었어서. Een reden met -아서/어서 past ook niet bij een opdracht of voorstel. Zeg niet 비가 와서 우산을 가져가세요. Gebruik dan -(으)니까.",
  examples: [
    { cn: "배가 아파서 병원에 갔어요.", py: "Baega apaseo byeongwone gasseoyo.", nl: "Ik had buikpijn, dus ik ben naar de dokter gegaan." },
    { cn: "버스가 늦게 와서 지각했어요.", py: "Beoseuga neutge waseo jigakaesseoyo.", nl: "De bus kwam laat, dus ik was te laat." },
    { cn: "시장에 가서 과일을 샀어요.", py: "Sijange gaseo gwaireul sasseoyo.", nl: "Ik ging naar de markt en kocht daar fruit." },
    { cn: "만나서 반가워요.", py: "Mannaseo bangawoyo.", nl: "Leuk je te ontmoeten." }
  ],
  nuance: [
    { h: "-아서/어서 of -(으)니까?",
      p: "Allebei geven een reden. -아서/어서 is neutraal en past bij een gewone mededeling. Volgt er een opdracht of voorstel (-세요, -(으)ㅂ시다, -아요 als \"laten we\"), dan moet je -(으)니까 gebruiken. -(으)니까 mag ook in de verleden tijd staan: 왔으니까.",
      ex: [
        { cn: "비가 와서 집에 있었어요.", py: "Biga waseo jibe isseosseoyo.", nl: "Het regende, dus ik bleef thuis." },
        { cn: "비가 오니까 집에 있으세요.", py: "Biga onikka jibe isseuseyo.", nl: "Het regent, dus blijf thuis." }
      ] },
    { h: "Sorry en bedankt: altijd -아서/어서",
      p: "Bij excuses en bedankjes gebruik je -아서/어서. Met -(으)니까 klinkt het alsof je de ander de schuld geeft. Daarom zeg je 늦어서 죄송해요 en 만나서 반가워요.",
      ex: [
        { cn: "늦어서 죄송해요.", py: "Neujeoseo joesonghaeyo.", nl: "Sorry dat ik te laat ben." },
        { cn: "도와줘서 고마워요.", py: "Dowajwoseo gomawoyo.", nl: "Bedankt voor je hulp." }
      ] },
    { h: "\"En dan daar\": -아서/어서 of -고?",
      p: "Met -아서/어서 hoort de tweede handeling bij de eerste: je doet iets op de plek waar je heen ging, of met de persoon die je ontmoette. Met -고 staan ze los van elkaar. Beide delen hebben bij \"en dan\" hetzelfde onderwerp.",
      ex: [
        { cn: "친구를 만나서 밥을 먹었어요.", py: "Chingureul mannaseo babeul meogeosseoyo.", nl: "Ik zag een vriend en at met hem." },
        { cn: "친구를 만나고 집에서 밥을 먹었어요.", py: "Chingureul mannago jibeseo babeul meogeosseoyo.", nl: "Ik zag een vriend en at daarna thuis." }
      ] }
  ],
  mistakes: [
    { wrong: "늦었어서 죄송해요.", right: "늦어서 죄송해요.", why: "Vóór -아서/어서 komt geen verleden tijd." },
    { wrong: "비가 와서 우산을 가져가세요.", right: "비가 오니까 우산을 가져가세요.", why: "Bij een opdracht na de reden gebruik je -(으)니까." },
    { wrong: "시장에 가고 과일을 샀어요.", right: "시장에 가서 과일을 샀어요.", why: "Je kocht het fruit op de markt. Bij gaan + iets daar doen hoort -아서/어서." },
    { wrong: "너무 바쁘어서 못 갔어요.", right: "너무 바빠서 못 갔어요.", why: "Een stam op 으 verliest de 으: 바쁘 + 아서 = 바빠서." }
  ],
  vocab: [
    ["-아서/어서", "-aseo/-eoseo", "omdat, dus; en dan (daar)"], ["아프다", "apeuda", "pijn doen, ziek zijn"], ["병원", "byeongwon", "ziekenhuis, dokter"],
    ["늦다", "neutda", "laat zijn"], ["지각하다", "jigakada", "te laat komen"], ["시장", "sijang", "markt"],
    ["과일", "gwail", "fruit"], ["감기에 걸리다", "gamgie geollida", "verkouden worden"], ["약", "yak", "medicijn"], ["길이 막히다", "giri makida", "er is file"]
  ],
  dialogue: [
    ["A", "어제 왜 수업에 안 왔어요?", "Eoje wae sueobe an wasseoyo?", "Waarom kwam je gisteren niet naar de les?"],
    ["B", "감기에 걸려서 못 갔어요.", "Gamgie geollyeoseo mot gasseoyo.", "Ik was verkouden, dus ik kon niet komen."],
    ["A", "지금은 괜찮아요?", "Jigeumeun gwaenchanayo?", "Gaat het nu?"],
    ["B", "네, 약을 먹어서 괜찮아요.", "Ne, yageul meogeoseo gwaenchanayo.", "Ja, ik heb medicijnen genomen, dus het gaat."],
    ["A", "다행이에요. 내일 같이 도서관에 가서 공부해요.", "Dahaengieyo. Naeil gachi doseogwane gaseo gongbuhaeyo.", "Gelukkig. Laten we morgen samen in de bibliotheek studeren."],
    ["B", "좋아요!", "Joayo!", "Goed!"]
  ],
  reading: {
    title: "힘든 아침",
    lines: [
      { cn: "어제는 정말 힘든 날이었어요.", py: "Eojeneun jeongmal himdeun narieosseoyo.", nl: "Gisteren was echt een zware dag." },
      { cn: "밤에 늦게 자서 아침에 늦게 일어났어요.", py: "Bame neutge jaseo achime neutge ireonasseoyo.", nl: "Ik ging laat slapen, dus ik stond laat op." },
      { cn: "시간이 없어서 아침을 못 먹었어요.", py: "Sigani eopseoseo achimeul mot meogeosseoyo.", nl: "Ik had geen tijd, dus ik kon niet ontbijten." },
      { cn: "버스 정류장에 가서 버스를 기다렸어요.", py: "Beoseu jeongnyujange gaseo beoseureul gidaryeosseoyo.", nl: "Ik ging naar de bushalte en wachtte daar op de bus." },
      { cn: "그런데 길이 많이 막혀서 회사에 늦었어요.", py: "Geureonde giri mani makyeoseo hoesae neujeosseoyo.", nl: "Maar er was veel file, dus ik kwam te laat op mijn werk." },
      { cn: "저는 부장님께 말했어요.", py: "Jeoneun bujangnimkke malhaesseoyo.", nl: "Ik zei tegen mijn chef:" },
      { cn: "\"늦어서 죄송합니다.\"", py: "\"Neujeoseo joesonghamnida.\"", nl: "\"Sorry dat ik te laat ben.\"" },
      { cn: "점심시간에는 배가 너무 고파서 밥을 두 그릇 먹었어요.", py: "Jeomsimsiganeneun baega neomu gopaseo babeul du geureut meogeosseoyo.", nl: "In de lunchpauze had ik zo'n honger dat ik twee kommen rijst at." },
      { cn: "오늘은 일찍 잘 거예요.", py: "Oneureun iljjik jal geoyeyo.", nl: "Vandaag ga ik vroeg slapen." }
    ],
    questions: [
      { type: "mc", q: "Waarom kwam de schrijver te laat op het werk?",
        options: ["Er was veel file.", "De bus kwam niet.", "Hij was ziek.", "Hij ontbeet te lang."], answer: 0,
        why: ["Goed: 길이 많이 막혀서 회사에 늦었어요.", "Hij wachtte op de bus, maar de reden was de file.", "Ziek zijn staat niet in de tekst.", "Hij ontbeet juist niet: 아침을 못 먹었어요."] },
      { type: "mc", q: "Waarom at hij geen ontbijt?",
        options: ["Hij had geen tijd.", "Hij had geen honger.", "Er was geen eten.", "Hij had buikpijn."], answer: 0,
        why: ["Goed: 시간이 없어서 아침을 못 먹었어요.", "Hij had later juist veel honger.", "Dat staat niet in de tekst.", "Buikpijn staat niet in de tekst."] },
      { type: "mc", q: "버스 정류장에 가서 버스를 기다렸어요. Wat betekent -아서 hier?",
        options: ["Hij ging naar de halte en wachtte daar.", "Hij ging naar de halte omdat hij wachtte.", "Hij wachtte en ging toen naar de halte.", "Hij ging naar de halte maar wachtte niet."], answer: 0,
        why: ["Goed: \"en dan daar\". Het wachten gebeurt op de plek waar hij heen ging.", "Hier is -아서 geen reden, maar \"en dan daar\".", "De volgorde is andersom: eerst gaan, dan wachten.", "-아서 betekent niet \"maar\"."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Omdat het regende, ben ik thuisgebleven.\" Welke zin klopt?",
      options: ["비가 와서 집에 있었어요.", "비가 왔어서 집에 있었어요.", "비가 오아서 집에 있었어요.", "비가 오서 집에 있었어요."], answer: 0,
      why: ["Goed: 오 + 아서 wordt samen 와서.", "Vóór -아서/어서 komt geen verleden tijd.", "오 + 아서 trek je samen tot 와서.", "Na ㅗ komt -아서. 오서 bestaat niet."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["비가 와서 우산을 가져가세요.", "비가 와서 우산을 샀어요.", "늦어서 죄송해요.", "학교에 가서 친구를 만났어요."], answer: 0,
      why: ["Goed: dit is fout. Een reden met -아서 past niet bij een opdracht. Zeg: 비가 오니까 우산을 가져가세요.", "Dit klopt: een reden met een gewone mededeling.", "Dit klopt: 늦다 wordt 늦어서.", "Dit klopt: je gaat naar school en ziet daar een vriend."] },
    { type: "mc", q: "음식이 ___ 많이 먹어요. (Het eten is lekker, dus ik eet veel.)",
      options: ["맛있어서", "맛있아서", "맛있었어서", "맛있서"], answer: 0,
      why: ["Goed: de laatste klinker is ㅣ, dus -어서.", "Na ㅣ komt -어서, niet -아서.", "Vóór -어서 komt geen verleden tijd.", "Je mist de klinker 어."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik zag een vriend en dronk koffie met hem.\"",
      tokens: [["친구를", "chingureul"], ["만나서", "mannaseo"], ["커피를", "keopireul"], ["마셨어요", "masyeosseoyo"]] },
    { type: "mc", q: "시간이 ___ 빨리 가요! (Er is geen tijd, laten we snel gaan!)",
      options: ["없으니까", "없어서", "없었어서", "없니까"], answer: 0,
      why: ["Goed: na de reden komt een voorstel, dus -(으)니까.", "-아서/어서 past niet bij een voorstel als \"laten we\".", "Vóór -어서 komt geen verleden tijd, en een voorstel vraagt -(으)니까.", "Na een 받침 heb je -으니까 nodig."] },
    { type: "mc", q: "Je komt te laat op een afspraak. Wat zeg je?",
      options: ["늦어서 죄송해요.", "늦으니까 죄송해요.", "늦었어서 죄송해요.", "늦고 죄송해요."], answer: 0,
      why: ["Goed: bij een excuus gebruik je -아서/어서.", "Met -(으)니까 klinkt een excuus vreemd, alsof het een uitleg is.", "Vóór -어서 komt geen verleden tijd.", "-고 geeft geen reden."] },
    { type: "mc", q: "\"Ik had het druk, dus ik kon niet bellen.\"",
      options: ["바빠서 전화 못 했어요.", "바쁘어서 전화 못 했어요.", "바빴어서 전화 못 했어요.", "바쁘서 전화 못 했어요."], answer: 0,
      why: ["Goed: de 으 valt weg: 바쁘 + 아서 = 바빠서.", "Bij een stam op 으 valt de 으 weg.", "Vóór -아서 komt geen verleden tijd.", "Je mist de klinker 아."] },
    { type: "fill", q: "배가 ___ 라면을 먹었어요. (Ik had honger, dus ik at ramen. 배가 고프다 = honger hebben)", answers: ["고파서"],
      hint: "고프다 eindigt op 으. Wat gebeurt er met die 으?", why: "De 으 valt weg en de klinker ervoor is ㅗ: 고프 + 아서 = 고파서." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik ga naar de markt en koop daar fruit.\"",
      tokens: [["저는", "jeoneun"], ["시장에", "sijange"], ["가서", "gaseo"], ["과일을", "gwaireul"], ["사요", "sayo"]] },
    { type: "open", q: "Vertaal: \"Sorry dat ik te laat ben.\"", model: ["늦어서 죄송해요.", "늦어서 미안해요."],
      tip: "Check: 늦다 krijgt -어서, zonder verleden tijd. Dus niet 늦었어서." },
    { type: "open", q: "Vertaal: \"Ik was ziek, dus ik ben niet naar school gegaan.\"", model: ["아파서 학교에 안 갔어요.", "아파서 학교에 못 갔어요."],
      tip: "Check: 아프다 wordt 아파서 (de 으 valt weg). De verleden tijd staat alleen aan het eind." }
  ],
  review: [
    { type: "mc", q: "\"Omdat het mooi weer was, ben ik gaan wandelen.\"",
      options: ["날씨가 좋아서 산책했어요.", "날씨가 좋어서 산책했어요.", "날씨가 좋았어서 산책했어요.", "날씨가 좋서 산책했어요."], answer: 0,
      why: ["Goed: de laatste klinker is ㅗ, dus -아서.", "Na ㅗ komt -아서, niet -어서.", "Vóór -아서 komt geen verleden tijd.", "Je mist de klinker 아."] },
    { type: "mc", q: "\"Ik heb hard gestudeerd, dus ik ben geslaagd.\"",
      options: ["열심히 공부해서 시험에 합격했어요.", "열심히 공부하서 시험에 합격했어요.", "열심히 공부했어서 시험에 합격했어요.", "열심히 공부하어서 시험에 합격했어요."], answer: 0,
      why: ["Goed: 하다 wordt 해서.", "하다 wordt 해서, niet 하서.", "Vóór -아서/어서 komt geen verleden tijd.", "하다 wordt altijd 해서, niet 하어서."] },
    { type: "mc", q: "\"Het is koud, dus ik draag een jas.\"",
      options: ["추워서 코트를 입어요.", "춥어서 코트를 입어요.", "추웠어서 코트를 입어요.", "춥아서 코트를 입어요."], answer: 0,
      why: ["Goed: 춥다 is onregelmatig. ㅂ wordt 우: 추워서.", "Bij 춥다 wordt de ㅂ vóór een klinker 우.", "Vóór -어서 komt geen verleden tijd.", "De ㅂ verandert, en na 우 komt -어서."] }
  ]
})
