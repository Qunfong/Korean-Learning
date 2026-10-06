({
  id: "09", slug: "neurago", title: "-느라고", sub: "Doordat ik bezig was met ... (kon ik niet ...)",
  canDo: "Je kunt nu uitleggen dat je iets niet kon of laat was omdat je met iets anders bezig was, met -느라고.",
  guess: {
    q: "\"Doordat ik met mijn huiswerk bezig was, kon ik niet bellen.\" Welke zin klopt, denk je?",
    options: ["숙제를 하느라고 전화를 못 했어요.", "숙제를 했느라고 전화를 못 했어요.", "숙제를 하느라고 전화를 하세요.", "동생이 숙제를 하느라고 제가 전화를 못 했어요."], answer: 0,
    why: ["Goed: stam + 느라고, en het gevolg in het tweede deel.", "Er komt geen verleden tijd vóór 느라고.", "Na 느라고 komt geen opdracht.", "Bij 느라고 hebben beide delen hetzelfde onderwerp."]
  },
  problem: "Je wilt uitleggen waarom iets niet lukte: \"Ik was met mijn huiswerk bezig, dus ik kon niet opnemen.\" Met -아/어서 geef je zomaar een reden. Met -느라고 zeg je: ik was druk met deze bezigheid, en daardoor bleef iets anders liggen. Het klinkt vaak als een excuus.",
  pattern: [
    { l: "bezigheid (stam)", v: "숙제를 하", c: 1 }, { l: "doordat ik bezig was", v: "느라고", c: 2, key: true },
    { l: "negatief gevolg", v: "전화를 못 했어요", c: 4 }
  ],
  patternCap: "Werkwoordstam + 느라(고) + (meestal negatief) gevolg · zelfde onderwerp, geen tijd vóór 느라고",
  rules: [
    "Werkwoordstam + 느라고, met of zonder 받침: 하느라고, 먹느라고. Een ㄹ-stam verliest de ㄹ: 놀다 → 노느라고, 만들다 → 만드느라고. Korter: 느라.",
    "Beide delen hebben hetzelfde onderwerp: ik was bezig, ik kon niet.",
    "Vóór 느라고 staat geen 았/었 of 겠. De tijd staat in het tweede deel.",
    "Het tweede deel is meestal negatief: 못 했어요, 늦었어요, 힘들었어요, 바빴어요. Er komt geen opdracht of voorstel.",
    "Alleen met werkwoorden voor een bezigheid die tijd kost. Niet met bijvoeglijke werkwoorden, en niet met iets als 비가 오다."
  ],
  pitfall: "Beide delen hebben hetzelfde onderwerp. Was iemand anders bezig? Gebruik dan -는 바람에 of -아/어서: 아기가 우는 바람에 잠을 못 잤어요.",
  examples: [
    { cn: "숙제를 하느라고 전화를 못 받았어요.", py: "Sukjereul haneurago jeonhwareul mot badasseoyo.", nl: "Doordat ik met mijn huiswerk bezig was, kon ik de telefoon niet opnemen." },
    { cn: "게임을 하느라고 밤을 새웠어요.", py: "Geimeul haneurago bameul saewosseoyo.", nl: "Ik was aan het gamen en ben de hele nacht opgebleven." },
    { cn: "이사 준비를 하느라고 요즘 정신이 없어요.", py: "Isa junbireul haneurago yojeum jeongsini eopseoyo.", nl: "Ik ben bezig met de verhuizing, dus ik weet tegenwoordig niet waar mijn hoofd staat." },
    { cn: "친구랑 노느라고 시간 가는 줄 몰랐어요.", py: "Chingurang noneurago sigan ganeun jul mollasseoyo.", nl: "Ik was met vrienden aan het spelen en vergat de tijd." }
  ],
  nuance: [
    { h: "-느라고 of -아/어서?",
      p: "-아/어서 geeft een gewone reden. Het werkt met elk onderwerp, met bijvoeglijke werkwoorden en met dingen waar je niets aan kunt doen. -느라고 zegt specifiek: ik was bezig met iets wat tijd en aandacht kostte, en daardoor lukte iets anders niet.",
      ex: [
        { cn: "비가 와서 못 갔어요.", py: "Biga waseo mot gasseoyo.", nl: "Het regende, dus ik kon niet gaan." },
        { cn: "일하느라고 못 갔어요.", py: "Ilhaneurago mot gasseoyo.", nl: "Ik was aan het werk, dus ik kon niet gaan." }
      ] },
    { h: "-느라고 of -는 바람에?",
      p: "-는 바람에 gaat over een plotselinge, onverwachte gebeurtenis. Het onderwerp mag iets of iemand anders zijn. -느라고 gaat over je eigen bezigheid, die je zelf koos en die een tijd duurde.",
      ex: [
        { cn: "전화를 받느라고 버스를 놓쳤어요.", py: "Jeonhwareul banneurago beoseureul nochyeosseoyo.", nl: "Ik was aan het bellen, en daardoor miste ik de bus." },
        { cn: "갑자기 전화가 오는 바람에 버스를 놓쳤어요.", py: "Gapjagi jeonhwaga oneun barame beoseureul nochyeosseoyo.", nl: "Doordat ik plotseling gebeld werd, miste ik de bus." }
      ] },
    { h: "Excuses en 수고했어요",
      p: "Op de vraag \"waarom?\" antwoord je kort met -느라고요: 길을 찾느라고요. Je hoort -느라 ook in een compliment: 준비하느라 수고했어요. Het \"negatieve\" gevolg is dan de moeite die iemand deed. Dat is beleefd en heel gewoon op het werk.",
      ex: [
        { cn: "A: 왜 늦었어요? B: 길을 찾느라고요.", py: "A: Wae neujeosseoyo? B: Gireul channeuragoyo.", nl: "A: Waarom ben je laat? B: Ik was de weg aan het zoeken." },
        { cn: "행사 준비하느라 수고 많으셨어요.", py: "Haengsa junbihaneura sugo maneusyeosseoyo.", nl: "Bedankt voor al het werk dat u in de voorbereiding stak." }
      ] }
  ],
  mistakes: [
    { wrong: "어제 숙제를 했느라고 못 잤어요.", right: "어제 숙제를 하느라고 못 잤어요.", why: "Vóór 느라고 staat geen verleden tijd. 못 잤어요 draagt de tijd." },
    { wrong: "비가 오느라고 못 갔어요.", right: "비가 와서 못 갔어요.", why: "Regen is geen bezigheid van jou. -느라고 werkt alleen met je eigen handeling." },
    { wrong: "동생이 TV를 보느라고 제가 공부를 못 했어요.", right: "제가 TV를 보느라고 공부를 못 했어요.", why: "Bij -느라고 hebben beide delen hetzelfde onderwerp." },
    { wrong: "놀느라고 숙제를 못 했어요.", right: "노느라고 숙제를 못 했어요.", why: "Bij een ㄹ-stam valt de ㄹ weg vóór 느라고." }
  ],
  vocab: [
    ["-느라고", "-neurago", "doordat ik bezig was met ..."], ["밤을 새우다", "bameul saeuda", "de hele nacht opblijven"],
    ["정신이 없다", "jeongsini eopda", "niet weten waar je hoofd staat"], ["보고서", "bogoseo", "verslag, rapport"], ["마감", "magam", "deadline"],
    ["발표", "balpyo", "presentatie"], ["제대로", "jedaero", "goed, zoals het hoort"], ["답장", "dapjang", "antwoord (op een bericht)"],
    ["칭찬하다", "chingchanhada", "prijzen, een compliment geven"], ["실컷", "silkeot", "naar hartenlust"]
  ],
  dialogue: [
    ["A", "어제 왜 연락이 안 됐어요?", "Eoje wae yeollagi an dwaesseoyo?", "Waarom was je gisteren niet bereikbaar?"],
    ["B", "미안해요. 보고서를 쓰느라고 휴대폰을 못 봤어요.", "Mianhaeyo. Bogoseoreul sseuneurago hyudaeponeul mot bwasseoyo.", "Sorry. Ik was een verslag aan het schrijven en heb niet op mijn telefoon gekeken."],
    ["A", "마감이 언제였는데요?", "Magami eonjeyeonneundeyo?", "Wanneer was de deadline dan?"],
    ["B", "오늘 아침이었어요. 끝내느라고 밤을 새웠어요.", "Oneul achimieosseoyo. Kkeunnaeneurago bameul saewosseoyo.", "Vanochtend. Ik ben de hele nacht opgebleven om het af te maken."],
    ["A", "고생했어요. 오늘은 일찍 들어가서 쉬세요.", "Gosaenghaesseoyo. Oneureun iljjik deureogaseo swiseyo.", "Wat een werk. Ga vandaag vroeg naar huis en rust uit."]
  ],
  reading: {
    title: "정신없는 일주일",
    lines: [
      { cn: "이번 주는 정말 정신없는 일주일이었다.", py: "Ibeon juneun jeongmal jeongsineomneun iljuirieotda.", nl: "Deze week was echt een hectische week." },
      { cn: "월요일부터 회사 발표를 준비하느라고 매일 밤늦게까지 일했다.", py: "Woryoilbuteo hoesa balpyoreul junbihaneurago maeil bamneutgekkaji ilhaetda.", nl: "Vanaf maandag werkte ik elke dag tot laat, omdat ik een presentatie voor het werk voorbereidde." },
      { cn: "자료를 찾느라고 점심도 제대로 못 먹었다.", py: "Jaryoreul channeurago jeomsimdo jedaero mot meogeotda.", nl: "Ik was materiaal aan het zoeken en kon niet eens goed lunchen." },
      { cn: "수요일은 친구 생일이었는데 일하느라고 파티에 못 갔다.", py: "Suyoireun chingu saengirieonneunde ilhaneurago patie mot gatda.", nl: "Woensdag was mijn vriend jarig, maar ik was aan het werk en kon niet naar het feest." },
      { cn: "친구에게 미안하다고 문자를 보냈더니 괜찮다고 답장이 왔다.", py: "Chinguege mianhadago munjareul bonaetdeoni gwaenchantago dapjangi watda.", nl: "Ik stuurde mijn vriend een bericht dat het me speet, en hij antwoordde dat het niet erg was." },
      { cn: "금요일 발표는 다행히 잘 끝났다.", py: "Geumyoil balpyoneun dahaenghi jal kkeunnatda.", nl: "De presentatie op vrijdag ging gelukkig goed." },
      { cn: "팀장님이 준비하느라 수고 많았다고 칭찬해 주셨다.", py: "Timjangnimi junbihaneura sugo manatdago chingchanhae jusyeotda.", nl: "Mijn teamleider prees me voor al het werk aan de voorbereiding." },
      { cn: "이번 주말에는 그동안 못 잔 잠을 실컷 자고 싶다.", py: "Ibeon jumareneun geudongan mot jan jameul silkeot jago sipda.", nl: "Dit weekend wil ik naar hartenlust de slaap inhalen die ik heb gemist." }
    ],
    questions: [
      { type: "mc", q: "Waarom ging de schrijver niet naar het verjaardagsfeest?",
        options: ["Hij was aan het werk.", "Hij was ziek.", "Hij was het vergeten.", "Hij had geen zin."], answer: 0,
        why: ["Goed: 일하느라고 파티에 못 갔다.", "Over ziek zijn staat niets in de tekst.", "Hij wist het: hij stuurde zelfs een bericht.", "Hij kon niet: 못 갔다, niet 안 갔다."] },
      { type: "mc", q: "Wat deed de teamleider?",
        options: ["Hij prees de schrijver voor de voorbereiding.", "Hij gaf de schrijver een vrij weekend.", "Hij hielp met de presentatie.", "Hij stuurde een bericht dat het niet erg was."], answer: 0,
        why: ["Goed: 준비하느라 수고 많았다고 칭찬해 주셨다.", "Het weekend is een wens van de schrijver zelf.", "Er staat niet dat de teamleider hielp.", "Dat bericht kwam van de vriend."] },
      { type: "mc", q: "자료를 찾느라고 점심도 제대로 못 먹었다. Wat betekent 찾느라고 hier?",
        options: ["Doordat hij bezig was met zoeken.", "Om materiaal te vinden.", "Nadat hij het materiaal gevonden had.", "Hoewel hij materiaal zocht."], answer: 0,
        why: ["Goed: -느라고 = doordat ik bezig was met ..., met een negatief gevolg.", "Een doel zou -(으)려고 zijn.", "Een volgorde zou -고 나서 zijn.", "Een tegenstelling zou -지만 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "숙제를 ___ 전화를 못 받았어요. (Doordat ik met mijn huiswerk bezig was, kon ik niet opnemen.)",
      options: ["하느라고", "했느라고", "하겠느라고", "해느라고"], answer: 0,
      why: ["Goed: stam 하 + 느라고.", "Er komt geen verleden tijd vóór 느라고.", "Er komt geen 겠 vóór 느라고.", "느라고 komt direct na de stam, zonder 아/어."] },
    { type: "mc", q: "친구랑 ___ 숙제를 못 했어요. (놀다)",
      options: ["노느라고", "놀느라고", "놀으느라고", "놀았느라고"], answer: 0,
      why: ["Goed: bij een ㄹ-stam valt de ㄹ weg vóór 느라고.", "De ㄹ valt weg vóór 느.", "Er komt geen 으 vóór 느라고.", "Er komt geen verleden tijd vóór 느라고."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["일하느라고 점심을 못 먹었어요.", "비가 오느라고 점심을 못 먹었어요.", "일하느라고 점심을 드세요.", "일했느라고 점심을 못 먹었어요."], answer: 0,
      why: ["Goed: eigen bezigheid + 느라고 + negatief gevolg.", "Regen is geen eigen bezigheid. Zeg: 비가 와서.", "Na 느라고 komt geen opdracht.", "Er komt geen verleden tijd vóór 느라고."] },
    { type: "order", q: "Zet in de goede volgorde: \"Doordat ik met de verhuizing bezig was, had ik het erg druk.\"",
      tokens: [["이사 준비를", "isa junbireul"], ["하느라고", "haneurago"], ["너무", "neomu"], ["바빴어요", "bappasseoyo"]] },
    { type: "mc", q: "갑자기 비가 ___ 우산을 샀어요. (Het ging plotseling regenen, dus ik kocht een paraplu.)",
      options: ["와서", "오느라고", "왔느라고", "오려고"], answer: 0,
      why: ["Goed: een gewone reden waar je niets aan kunt doen: -아/어서.", "Regen is geen eigen bezigheid, dus geen 느라고.", "Er komt geen verleden tijd vóór 느라고, en regen past er niet bij.", "-(으)려고 is een doel; de regen wilde niets."] },
    { type: "mc", q: "버스가 갑자기 ___ 늦었어요. (Doordat de bus plotseling kapotging, was ik te laat.)",
      options: ["고장 나는 바람에", "고장 나느라고", "고장 났느라고", "고장 나려고"], answer: 0,
      why: ["Goed: een plotselinge gebeurtenis met een ander onderwerp: -는 바람에.", "De bus is niet de spreker, en kapotgaan is geen bezigheid.", "Er komt geen verleden tijd vóór 느라고.", "-(으)려고 is een doel, geen reden."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["아기가 우느라고 제가 잠을 못 잤어요.", "시험 공부를 하느라고 잠을 못 잤어요.", "아기가 우는 바람에 잠을 못 잤어요.", "아기를 보느라고 잠을 못 잤어요."], answer: 0,
      why: ["Goed: de baby huilt en ik kon niet slapen: twee onderwerpen. Gebruik -는 바람에.", "Dit klopt: ik studeerde en ik kon niet slapen.", "Dit klopt: -는 바람에 mag een ander onderwerp hebben.", "Dit klopt: ik paste op de baby en ik kon niet slapen."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik was met een vriend aan het praten en reed mijn halte voorbij.\"",
      tokens: [["친구와", "chinguwa"], ["이야기하느라고", "iyagihaneurago"], ["내릴 역을", "naeril yeogeul"], ["지나쳤어요", "jinachyeosseoyo"]] },
    { type: "fill", q: "길을 찾___ 늦었어요. (Ik was de weg aan het zoeken, en daardoor was ik laat.)", answers: ["느라고", "느라"],
      hint: "Welke uitgang betekent \"doordat ik bezig was met\"?", why: "찾 + 느라고 (of kort: 느라). Er komt geen verleden tijd vóór." },
    { type: "mc", q: "A: 왜 이렇게 늦었어요? B: 미안해요. 길을 ___",
      options: ["찾느라고요.", "찾았느라고요.", "찾으려고요.", "찾을까요."], answer: 0,
      why: ["Goed: kort antwoord met -느라고요 als excuus.", "Er komt geen verleden tijd vóór 느라고.", "-(으)려고요 is een plan, geen reden voor te laat komen.", "-(으)ㄹ까요 is een vraag of voorstel."] },
    { type: "open", q: "Vertaal: \"Doordat ik met mijn werk bezig was, kon ik niet eten.\"",
      model: ["일하느라고 밥을 못 먹었어요.", "일하느라 식사를 못 했어요.", "일을 하느라고 밥을 못 먹었어요."],
      tip: "Check: 하 + 느라고 zonder verleden tijd, en 못 in het tweede deel." },
    { type: "open", q: "Vertaal: \"Ik was een film aan het kijken en vergat de tijd.\"",
      model: ["영화를 보느라고 시간 가는 줄 몰랐어요.", "영화를 보느라 시간 가는 줄 몰랐어요."],
      tip: "Check: 보 + 느라고, en hetzelfde onderwerp (ik) in beide delen." }
  ],
  review: [
    { type: "mc", q: "친구 선물을 ___ 하루 종일 바빴어요. (고르다)",
      options: ["고르느라고", "골랐느라고", "고르겠느라고", "골라느라고"], answer: 0,
      why: ["Goed: stam 고르 + 느라고.", "Er komt geen verleden tijd vóór 느라고.", "Er komt geen 겠 vóór 느라고.", "느라고 komt direct na de stam, zonder 아/어."] },
    { type: "mc", q: "케이크를 ___ 손님이 온 줄 몰랐어요. (만들다)",
      options: ["만드느라고", "만들느라고", "만들었느라고", "만들어느라고"], answer: 0,
      why: ["Goed: de ㄹ valt weg: 만드느라고.", "De ㄹ valt weg vóór 느라고.", "Er komt geen verleden tijd vóór 느라고.", "느라고 komt direct na de stam, zonder 어."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["회의 자료를 만드느라고 퇴근을 못 했어요.", "날씨가 춥느라고 퇴근을 못 했어요.", "회의 자료를 만들었느라고 퇴근을 못 했어요.", "회의 자료를 만드느라고 퇴근하지 마세요."], answer: 0,
      why: ["Goed: eigen bezigheid + 느라고 + negatief gevolg.", "춥다 is een bijvoeglijk werkwoord; dat kan niet met 느라고.", "Er komt geen verleden tijd vóór 느라고.", "Na 느라고 komt geen opdracht."] }
  ]
})
