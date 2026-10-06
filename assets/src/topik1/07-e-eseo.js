({
  id: "07", slug: "e-eseo", title: "에 en 에서", sub: "Waar je bent, waar je heen gaat, waar je iets doet",
  canDo: "Je kunt nu zeggen waar iets is en waar je heen gaat met 에, en waar je iets doet met 에서.",
  guess: {
    q: "\"Ik studeer in de bibliotheek.\" Welke zin klopt, denk je?",
    options: ["도서관에서 공부해요.", "도서관에 공부해요.", "도서관을 공부해요.", "도서관이 공부해요."], answer: 0,
    why: ["Goed: je doet iets op die plek (studeren), dus 에서.", "에 gebruik je bij zijn of gaan, niet bij een handeling op een plek.", "을 maakt de bibliotheek het lijdend voorwerp: \"ik bestudeer de bibliotheek\".", "이 maakt de bibliotheek het onderwerp: \"de bibliotheek studeert\"."]
  },
  problem: "In het Nederlands zeg je \"in\" bij \"ik ben in de bibliotheek\" en bij \"ik studeer in de bibliotheek\". Het Koreaans maakt hier verschil. Ben je ergens, of ga je ergens heen? Dan gebruik je 에. Doe je iets op een plek? Dan gebruik je 에서.",
  pattern: [
    { l: "plaats", v: "도서관", c: 3 }, { l: "에서", v: "에서", c: 2, key: true }, { l: "handeling", v: "공부해요", c: 4 }
  ],
  patternCap: "Plaats + 에 + 있어요/없어요/가요/와요 · tijd + 에 · plaats + 에서 + handeling (공부해요, 먹어요, 일해요 ...)",
  rules: [
    "에 en 에서 hebben geen vorm na 받침: 집에, 학교에, 집에서, 학교에서.",
    "Plaats + 에 bij zijn en niet zijn: 집에 있어요, 교실에 없어요.",
    "Plaats + 에 bij richting: 학교에 가요, 한국에 와요.",
    "Tijd + 에: 세 시에, 토요일에. Maar 오늘, 어제, 내일 en 지금 krijgen geen 에.",
    "Plaats + 에서 bij een handeling op die plek: 식당에서 먹어요, 회사에서 일해요."
  ],
  pitfall: "있어요 krijgt altijd 에, ook al zeg je in het Nederlands \"in\" of \"op\". 집에서 있어요 is fout; het is 집에 있어요.",
  examples: [
    { cn: "저는 학교에 가요.", py: "Jeoneun hakgyoe gayo.", nl: "Ik ga naar school." },
    { cn: "저는 학교에서 한국어를 공부해요.", py: "Jeoneun hakgyoeseo hangugeoreul gongbuhaeyo.", nl: "Ik studeer Koreaans op school." },
    { cn: "고양이가 방에 있어요.", py: "Goyangiga bange isseoyo.", nl: "De kat is in de kamer." },
    { cn: "일곱 시에 식당에서 밥을 먹어요.", py: "Ilgop sie sikdangeseo babeul meogeoyo.", nl: "Om zeven uur eet ik in het restaurant." }
  ],
  nuance: [
    { h: "Zijn of doen? Het minimale paar",
      p: "Kijk naar het werkwoord aan het eind. Is het 있어요 of 없어요? Dan 에. Is het een handeling, zoals eten, werken of rusten? Dan 에서. De plek is hetzelfde, het werkwoord beslist.",
      ex: [
        { cn: "저는 집에 있어요.", py: "Jeoneun jibe isseoyo.", nl: "Ik ben thuis." },
        { cn: "저는 집에서 쉬어요.", py: "Jeoneun jibeseo swieoyo.", nl: "Ik rust thuis uit." }
      ] },
    { h: "Gaan naar (에) of vertrekken uit (에서)",
      p: "에 wijst naar het doel: waar je heen gaat. 에서 kan ook het beginpunt zijn: waar je vandaan komt. Zo zeg je ook waar je vandaan komt: 네덜란드에서 왔어요. Let dus op bij 가요 en 와요.",
      ex: [
        { cn: "한국에 왔어요.", py: "Hanguge wasseoyo.", nl: "Ik ben naar Korea gekomen." },
        { cn: "네덜란드에서 왔어요.", py: "Nedeollandeueseo wasseoyo.", nl: "Ik kom uit Nederland." }
      ] },
    { h: "에 bij tijd, maar niet bij elk tijdwoord",
      p: "Een klok- of dagtijd krijgt 에: 세 시에, 월요일에, 아침에. Woorden die zelf al naar nu wijzen krijgen geen 에: 오늘, 어제, 내일, 지금. Voor tijd gebruik je nooit 에서.",
      ex: [
        { cn: "토요일에 만나요.", py: "Toyoire mannayo.", nl: "We zien elkaar zaterdag." },
        { cn: "내일 만나요.", py: "Naeil mannayo.", nl: "We zien elkaar morgen." }
      ] }
  ],
  mistakes: [
    { wrong: "도서관에 공부해요.", right: "도서관에서 공부해요.", why: "Studeren is een handeling op die plek. Dan gebruik je 에서." },
    { wrong: "지금 집에서 있어요.", right: "지금 집에 있어요.", why: "Bij 있어요 en 없어요 gebruik je altijd 에." },
    { wrong: "내일에 학교에 가요.", right: "내일 학교에 가요.", why: "내일, 오늘, 어제 en 지금 krijgen geen 에." },
    { wrong: "저는 회사에 일해요.", right: "저는 회사에서 일해요.", why: "Werken is een handeling. De plek krijgt 에서." }
  ],
  vocab: [
    ["에 / 에서", "e / eseo", "in, naar, om (zijn, richting, tijd) / in, op (plaats van handeling); uit"], ["학교", "hakgyo", "school"], ["도서관", "dogwan", "bibliotheek"],
    ["식당", "sikdang", "restaurant"], ["회사", "hoesa", "bedrijf, werk"], ["일하다", "ilhada", "werken"],
    ["공원", "gongwon", "park"], ["운동하다", "undonghada", "sporten"], ["방", "bang", "kamer"], ["어디", "eodi", "waar"]
  ],
  dialogue: [
    ["A", "지금 어디에 있어요?", "Jigeum eodie isseoyo?", "Waar ben je nu?"],
    ["B", "도서관에 있어요.", "Dogwane isseoyo.", "Ik ben in de bibliotheek."],
    ["A", "도서관에서 뭐 해요?", "Dogwaneseo mwo haeyo?", "Wat doe je in de bibliotheek?"],
    ["B", "숙제를 해요. 민수 씨는요?", "Sukjereul haeyo. Minsu ssineunyo?", "Ik maak huiswerk. En jij, Minsu?"],
    ["A", "저는 지금 식당에 가요. 식당에서 친구를 만나요.", "Jeoneun jigeum sikdange gayo. Sikdangeseo chingureul mannayo.", "Ik ga nu naar een restaurant. Daar zie ik een vriend."],
    ["B", "그럼 내일 학교에서 만나요.", "Geureom naeil hakgyoeseo mannayo.", "Dan zien we elkaar morgen op school."]
  ],
  reading: {
    title: "제 하루",
    lines: [
      { cn: "저는 아침 여덟 시에 회사에 가요.", py: "Jeoneun achim yeodeol sie hoesae gayo.", nl: "Ik ga 's ochtends om acht uur naar mijn werk." },
      { cn: "회사는 서울에 있어요.", py: "Hoesaneun Seoure isseoyo.", nl: "Het bedrijf is in Seoul." },
      { cn: "저는 회사에서 일해요.", py: "Jeoneun hoesaeseo ilhaeyo.", nl: "Ik werk bij het bedrijf." },
      { cn: "열두 시에 식당에서 점심을 먹어요.", py: "Yeoldu sie sikdangeseo jeomsimeul meogeoyo.", nl: "Om twaalf uur lunch ik in een restaurant." },
      { cn: "여섯 시에 집에 와요.", py: "Yeoseot sie jibe wayo.", nl: "Om zes uur kom ik thuis." },
      { cn: "저녁에는 공원에서 운동해요.", py: "Jeonyeogeneun gongwoneseo undonghaeyo.", nl: "'s Avonds sport ik in het park." },
      { cn: "공원에는 사람이 많아요.", py: "Gongwoneneun sarami manayo.", nl: "In het park zijn veel mensen." },
      { cn: "열한 시에 자요.", py: "Yeolhan sie jayo.", nl: "Om elf uur ga ik slapen." }
    ],
    questions: [
      { type: "mc", q: "Waar luncht de schrijver?",
        options: ["In een restaurant.", "Thuis.", "In het park.", "Op kantoor, aan het bureau."], answer: 0,
        why: ["Goed: 식당에서 점심을 먹어요.", "Thuis komt de schrijver pas om zes uur.", "In het park sport de schrijver, 's avonds.", "Op het bedrijf werkt de schrijver; lunchen doet hij in een restaurant."] },
      { type: "mc", q: "Wat doet de schrijver om zes uur?",
        options: ["Naar huis komen.", "Naar het werk gaan.", "Sporten.", "Slapen."], answer: 0,
        why: ["Goed: 여섯 시에 집에 와요.", "Naar het werk gaat de schrijver om acht uur.", "Sporten doet de schrijver 's avonds, na thuiskomst.", "Slapen doet de schrijver om elf uur."] },
      { type: "mc", q: "회사에 가요 en 회사에서 일해요. Waarom eerst 에 en dan 에서?",
        options: ["가요 is richting, dus 에. 일해요 is een handeling op die plek, dus 에서.", "에 staat na een 받침, 에서 na een klinker.", "에 is verleden tijd, 에서 is tegenwoordige tijd.", "에 is beleefd, 에서 is informeel."], answer: 0,
        why: ["Goed: het werkwoord beslist. Gaan naar = 에, iets doen op een plek = 에서.", "에 en 에서 hebben geen 받침-regel. Beide komen na elk woord.", "Tijd zit in het werkwoord, niet in 에 of 에서.", "에 en 에서 zeggen niets over beleefdheid."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Mijn vriend is in het klaslokaal.\"",
      options: ["친구가 교실에 있어요.", "친구가 교실에서 있어요.", "친구가 교실을 있어요.", "친구가 교실에 있었어요."], answer: 0,
      why: ["Goed: bij 있어요 hoort 에.", "있어요 is geen handeling. Dan gebruik je 에, niet 에서.", "을 is voor een lijdend voorwerp. 있어요 heeft er geen.", "있었어요 is verleden tijd: \"was\"."] },
    { type: "mc", q: "\"Ik eet in het restaurant.\"",
      options: ["식당에서 먹어요.", "식당에 먹어요.", "식당을 먹어요.", "식당에서 먹었어요."], answer: 0,
      why: ["Goed: eten is een handeling op die plek, dus 에서.", "에 gebruik je bij zijn of gaan, niet bij eten.", "을 maakt het restaurant het ding dat je eet.", "먹었어요 is verleden tijd: \"ik at\"."] },
    { type: "mc", q: "\"Ik ga naar de bibliotheek.\"",
      options: ["도서관에 가요.", "도서관에서 가요.", "도서관이 가요.", "도서관에 와요."], answer: 0,
      why: ["Goed: richting naar een plek krijgt 에.", "에서 가요 betekent: vanuit de bibliotheek vertrekken.", "이 maakt de bibliotheek het onderwerp: \"de bibliotheek gaat\".", "와요 is \"komen\", niet \"gaan\"."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["집에서 있어요.", "집에 있어요.", "집에서 쉬어요.", "집에 가요."], answer: 0,
      why: ["Goed: deze is fout. Bij 있어요 hoort 에: 집에 있어요.", "Deze klopt: zijn op een plek = 에.", "Deze klopt: rusten is een handeling, dus 에서.", "Deze klopt: richting = 에."] },
    { type: "mc", q: "\"We zien elkaar zaterdag.\"",
      options: ["토요일에 만나요.", "토요일에서 만나요.", "토요일을 만나요.", "토요일이 만나요."], answer: 0,
      why: ["Goed: een dag krijgt 에.", "Voor tijd gebruik je nooit 에서.", "을 maakt zaterdag het ding dat je ontmoet.", "이 maakt zaterdag het onderwerp: \"zaterdag ontmoet\"."] },
    { type: "mc", q: "\"Morgen ga ik naar Busan.\"",
      options: ["내일 부산에 가요.", "내일에 부산에 가요.", "내일 부산에서 가요.", "내일에 부산에서 가요."], answer: 0,
      why: ["Goed: 내일 zonder 에, en richting = 에.", "내일 krijgt geen 에.", "부산에서 가요 betekent: vanuit Busan vertrekken.", "Twee fouten: 내일 zonder 에, en richting is 에."] },
    { type: "mc", q: "\"Ik kom uit Nederland.\" 저는 네덜란드___ 왔어요.",
      options: ["에서", "에", "을", "이"], answer: 0,
      why: ["Goed: 에서 kan ook \"uit, vanaf\" betekenen: het beginpunt.", "네덜란드에 왔어요 betekent: ik ben naar Nederland gekomen.", "을 maakt Nederland een lijdend voorwerp.", "이 maakt Nederland het onderwerp."] },
    { type: "fill", q: "공원___ 운동해요. (Ik sport in het park.)", answers: ["에서"],
      hint: "Sporten is iets wat je doet op die plek.", why: "Bij een handeling op een plek gebruik je 에서: 공원에서." },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn vriend werkt in een restaurant.\"",
      tokens: [["제", "je"], ["친구는", "chinguneun"], ["식당에서", "sikdangeseo"], ["일해요", "ilhaeyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn tas is in de kamer.\"",
      tokens: [["제", "je"], ["가방은", "gabangeun"], ["방에", "bange"], ["있어요", "isseoyo"]] },
    { type: "open", q: "Vertaal: \"Ik werk in Seoul.\"", model: ["저는 서울에서 일해요.", "서울에서 일해요."],
      tip: "Check: werken is een handeling, dus 서울에서." },
    { type: "open", q: "Vertaal: \"Om zeven uur eet ik thuis.\"", model: ["일곱 시에 집에서 밥을 먹어요.", "저는 일곱 시에 집에서 밥을 먹어요.", "일곱 시에 집에서 먹어요."],
      tip: "Check: de tijd krijgt 에 (일곱 시에), de plek van het eten krijgt 에서 (집에서)." }
  ],
  review: [
    { type: "mc", q: "\"Mijn moeder is in de keuken.\"",
      options: ["어머니가 부엌에 있어요.", "어머니가 부엌에서 있어요.", "어머니가 부엌을 있어요.", "어머니가 부엌이 있어요."], answer: 0,
      why: ["Goed: zijn op een plek = 에.", "있어요 is geen handeling. Dan gebruik je 에, niet 에서.", "을 is voor een lijdend voorwerp. 있어요 heeft er geen.", "Met 이 betekent het: mijn moeder heeft een keuken."] },
    { type: "mc", q: "\"Ik drink koffie in het café.\"",
      options: ["카페에서 커피를 마셔요.", "카페에 커피를 마셔요.", "카페에서 커피를 마셨어요.", "카페를 커피를 마셔요."], answer: 0,
      why: ["Goed: drinken is een handeling op die plek, dus 에서.", "에 gebruik je bij zijn of gaan, niet bij drinken.", "마셨어요 is verleden tijd: \"ik dronk\".", "을/를 is voor het ding dat je drinkt, niet voor de plek."] },
    { type: "mc", q: "\"Om negen uur ga ik naar mijn werk.\"",
      options: ["아홉 시에 회사에 가요.", "아홉 시에서 회사에 가요.", "아홉 시에 회사에서 가요.", "아홉 시를 회사에 가요."], answer: 0,
      why: ["Goed: tijd = 에, richting = 에.", "Voor tijd gebruik je nooit 에서.", "회사에서 가요 betekent: vanaf het werk vertrekken.", "을/를 hoort niet bij een tijd."] }
  ]
})
