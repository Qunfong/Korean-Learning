({
  id: "02", slug: "deorado", title: "-더라도", sub: "Zelfs als ..., toch ...",
  canDo: "Je kunt nu zeggen dat iets doorgaat, zelfs als een (moeilijke) situatie waar wordt, met -더라도.",
  guess: {
    q: "\"Zelfs als het regent, ga ik.\" Welke zin klopt, denk je?",
    options: ["비가 오더라도 갈 거예요.", "비가 와더라도 갈 거예요.", "비가 오으더라도 갈 거예요.", "비가 오는더라도 갈 거예요."], answer: 0,
    why: ["Goed: 더라도 komt direct na de stam 오.", "Er komt geen 아/어 vóór 더라도.", "더라도 krijgt nooit een extra 으.", "Er komt geen 는 vóór 더라도."]
  },
  problem: "Soms wil je zeggen: ook in het ergste geval verandert er niets. \"Ik ga, zelfs als het regent.\" -아/어도 kan dat ook, maar -더라도 is sterker. Het klinkt alsof de situatie misschien niet gebeurt, maar je bent er klaar voor.",
  pattern: [
    { l: "situatie (stam)", v: "비가 오", c: 1 }, { l: "zelfs als", v: "더라도", c: 2, key: true },
    { l: "toch", v: "꼭", c: 3 }, { l: "besluit", v: "갈 거예요", c: 4 }
  ],
  patternCap: "Stam + 더라도 + besluit, advies of plicht. Vaak met 아무리 (hoe ... ook). Naamwoord + (이)더라도.",
  rules: [
    "더라도 komt direct na de stam, met of zonder 받침: 가더라도, 먹더라도, 힘들더라도.",
    "Bij een naamwoord gebruik je 이더라도: 학생이더라도. Na een klinker valt 이 in spreektaal vaak weg: 친구더라도.",
    "Voor iets in het verleden zet je -았/었 ervoor: 늦었더라도, 떨어졌더라도.",
    "Het tweede deel is vaak een besluit, advies of plicht: -(으)ㄹ 거예요, -지 마세요, -아/어야 해요."
  ],
  pitfall: "Zet geen 아/어 of 는 vóór 더라도. Zeg dus niet 와더라도 of 오는더라도, maar 오더라도.",
  examples: [
    { cn: "비가 오더라도 꼭 갈 거예요.", py: "Biga odeorado kkok gal geoyeyo.", nl: "Zelfs als het regent, ga ik zeker." },
    { cn: "힘들더라도 포기하지 마세요.", py: "Himdeuldeorado pogihaji maseyo.", nl: "Geef niet op, ook al is het zwaar." },
    { cn: "아무리 바쁘더라도 아침은 먹어야 해요.", py: "Amuri bappeudeorado achimeun meogeoya haeyo.", nl: "Hoe druk je ook bent, je moet ontbijten." },
    { cn: "시험에 떨어졌더라도 실망하지 마세요.", py: "Siheome tteoreojyeotdeorado silmanghaji maseyo.", nl: "Ook als je voor het examen gezakt bent, wees niet teleurgesteld." }
  ],
  nuance: [
    { h: "-더라도 of -아/어도?",
      p: "Allebei betekenen \"ook als\". -아/어도 is de gewone vorm. Je gebruikt het voor feiten én voor veronderstellingen. -더라도 benadrukt dat het een veronderstelling is: misschien gebeurt het niet, maar zelfs dan. Het klinkt sterker en iets formeler. Voor een feit dat je al kent, is -아/어도 natuurlijker.",
      ex: [
        { cn: "이 약은 써도 드셔야 해요.", py: "I yageun sseodo deusyeoya haeyo.", nl: "Dit medicijn is bitter, maar u moet het toch innemen." },
        { cn: "결과가 나쁘더라도 실망하지 마세요.", py: "Gyeolgwaga nappeudeorado silmanghaji maseyo.", nl: "Ook als de uitslag slecht is, wees niet teleurgesteld." }
      ] },
    { h: "Al gebeurd? Dan -(으)ㄴ/는데도",
      p: "Na -더라도 volgt een besluit, advies, plicht of verwachting. Voor iets wat echt al gebeurd is (het regende, en toch gingen we) past -더라도 niet. Dan gebruik je -(으)ㄴ/는데도: \"hoewel ... toch\".",
      ex: [
        { cn: "비가 왔는데도 등산을 갔어요.", py: "Biga wanneundedo deungsaneul gasseoyo.", nl: "Hoewel het regende, gingen we toch de berg op." }
      ] },
    { h: "Schrijftaal: 설령 ... -더라도",
      p: "In formele tekst staat er vaak 설령 of 설사 (\"zelfs in het geval dat\") vóór -더라도. Dat maakt de veronderstelling nog sterker. In spreektaal hoor je eerder 아무리 ... -아/어도.",
      ex: [
        { cn: "설령 실패하더라도 다시 도전할 것이다.", py: "Seollyeong silpaehadeorado dasi dojeonhal geosida.", nl: "Zelfs als ik faal, zal ik het opnieuw proberen." }
      ] }
  ],
  mistakes: [
    { wrong: "비가 와더라도 갈 거예요.", right: "비가 오더라도 갈 거예요.", why: "더라도 komt direct na de stam, zonder 아/어." },
    { wrong: "작으더라도 괜찮아요.", right: "작더라도 괜찮아요.", why: "더라도 krijgt nooit een extra 으, ook niet na een 받침." },
    { wrong: "학생더라도 돈을 내야 해요.", right: "학생이더라도 돈을 내야 해요.", why: "Na een naamwoord met 받침 heb je 이 nodig: 이더라도." },
    { wrong: "어제 비가 오더라도 등산을 갔어요.", right: "어제 비가 왔는데도 등산을 갔어요.", why: "Het regende echt en jullie gingen echt. Voor zo'n feit uit het verleden gebruik je -는데도." }
  ],
  vocab: [
    ["-더라도", "-deorado", "zelfs als, ook al"], ["아무리", "amuri", "hoe ... ook"], ["포기하다", "pogihada", "opgeven"],
    ["실망하다", "silmanghada", "teleurgesteld zijn"], ["외우다", "oeuda", "uit het hoofd leren"], ["효과", "hyogwa", "effect"],
    ["실수", "silsu", "fout, vergissing"], ["과정", "gwajeong", "proces"], ["꾸준히", "kkujunhi", "gestaag, volhardend"],
    ["실력", "sillyeok", "vaardigheid, niveau"]
  ],
  dialogue: [
    ["A", "내일 등산 갈 거예요?", "Naeil deungsan gal geoyeyo?", "Ga je morgen de berg op?"],
    ["B", "네, 비가 오더라도 갈 거예요.", "Ne, biga odeorado gal geoyeyo.", "Ja, ook als het regent, ga ik."],
    ["A", "비가 많이 오면 위험하지 않아요?", "Biga mani omyeon wiheomhaji anayo?", "Is het niet gevaarlijk als het hard regent?"],
    ["B", "많이 오면 안 갈 거예요. 그런데 조금 오더라도 꼭 갈 거예요.", "Mani omyeon an gal geoyeyo. Geureonde jogeum odeorado kkok gal geoyeyo.", "Als het hard regent, ga ik niet. Maar als het een beetje regent, ga ik zeker."],
    ["A", "그럼 우산 꼭 가져가세요.", "Geureom usan kkok gajyeogaseyo.", "Neem dan zeker een paraplu mee."]
  ],
  reading: {
    title: "외국어 공부를 계속하는 방법",
    lines: [
      { cn: "외국어를 배우다 보면 누구나 힘든 시기를 겪게 된다.", py: "Oegugeoreul baeuda bomyeon nuguna himdeun sigireul gyeokge doenda.", nl: "Wie een vreemde taal leert, komt vroeg of laat in een zware periode." },
      { cn: "단어가 잘 외워지지 않거나 말이 늘지 않는 것 같아서 포기하고 싶어진다.", py: "Daneoga jal oewojiji ankeona mari neulji anneun geot gataseo pogihago sipeojinda.", nl: "Woorden blijven niet hangen of je spreken lijkt niet beter te worden, en je wilt opgeven." },
      { cn: "그러나 아무리 바쁘더라도 하루에 10분은 꼭 공부하는 것이 좋다.", py: "Geureona amuri bappeudeorado harue sip buneun kkok gongbuhaneun geosi jota.", nl: "Maar hoe druk je ook bent, studeer elke dag minstens tien minuten." },
      { cn: "짧더라도 매일 하는 것이 가끔 오래 하는 것보다 효과가 크다.", py: "Jjaldeorado maeil haneun geosi gakkeum orae haneun geotboda hyogwaga keuda.", nl: "Elke dag, ook al is het kort, heeft meer effect dan af en toe lang." },
      { cn: "또 실수를 하더라도 부끄러워하지 말아야 한다.", py: "Tto silsureul hadeorado bukkeureowohaji maraya handa.", nl: "Ook als je fouten maakt, moet je je niet schamen." },
      { cn: "실수는 배우는 과정의 일부이기 때문이다.", py: "Silsuneun baeuneun gwajeongui ilbuigi ttaemunida.", nl: "Fouten zijn namelijk een deel van het leerproces." },
      { cn: "처음에는 결과가 잘 보이지 않더라도 꾸준히 하면 반드시 실력이 는다.", py: "Cheoeumeneun gyeolgwaga jal boiji anteorado kkujunhi hamyeon bandeusi sillyeogi neunda.", nl: "Ook als je in het begin weinig resultaat ziet, word je zeker beter als je volhoudt." },
      { cn: "중요한 것은 멈추지 않는 것이다.", py: "Jungyohan geoseun meomchuji anneun geosida.", nl: "Het belangrijkste is niet te stoppen." }
    ],
    questions: [
      { type: "mc", q: "Hoeveel moet je volgens de tekst minstens per dag studeren?",
        options: ["Tien minuten, ook als je het druk hebt.", "Een uur, ook als je het druk hebt.", "Tien minuten, maar alleen als je tijd hebt.", "Het maakt niet uit, af en toe lang is beter."], answer: 0,
        why: ["Goed: 아무리 바쁘더라도 하루에 10분은 꼭 공부하는 것이 좋다.", "De tekst noemt 10분, geen uur.", "-더라도 zegt juist: ook als je géén tijd hebt.", "De tekst zegt het omgekeerde: elke dag kort heeft meer effect."] },
      { type: "mc", q: "Wat zegt de tekst over fouten?",
        options: ["Ze horen bij het leerproces.", "Je moet ze zo snel mogelijk vermijden.", "Ze laten zien dat je moet stoppen.", "Ze komen alleen in het begin voor."], answer: 0,
        why: ["Goed: 실수는 배우는 과정의 일부이기 때문이다.", "De tekst zegt: schaam je er niet voor, niet: vermijd ze.", "De tekst zegt juist: 멈추지 않는 것이 중요하다.", "Daar zegt de tekst niets over."] },
      { type: "mc", q: "짧더라도 매일 하는 것이 ... Wat betekent 짧더라도 hier?",
        options: ["Ook al is het kort.", "Omdat het kort is.", "Alleen als het kort is.", "Hoewel het lang duurde."], answer: 0,
        why: ["Goed: -더라도 = zelfs als, ook al.", "Een reden geef je met -아서 of -(으)니까, niet met -더라도.", "\"Alleen als\" is -아/어야, niet -더라도.", "짧다 is kort, en -더라도 zegt niets over het verleden."] }
    ]
  },
  questions: [
    { type: "mc", q: "아무리 ___ 아침은 꼭 드세요. (바쁘다)",
      options: ["바쁘더라도", "바빠더라도", "바쁘는더라도", "바쁜더라도"], answer: 0,
      why: ["Goed: stam 바쁘 + 더라도.", "Er komt geen 아/어 vóór 더라도.", "Er komt geen 는 vóór 더라도.", "Er komt geen ㄴ-vorm vóór 더라도."] },
    { type: "mc", q: "\"Geef niet op, ook al is het zwaar.\" Welke zin klopt?",
      options: ["힘들더라도 포기하지 마세요.", "힘들어더라도 포기하지 마세요.", "힘든더라도 포기하지 마세요.", "힘들으더라도 포기하지 마세요."], answer: 0,
      why: ["Goed: stam 힘들 + 더라도.", "Er komt geen 어 vóór 더라도.", "힘든 is de ㄴ-vorm; die past niet vóór 더라도.", "더라도 krijgt nooit een extra 으."] },
    { type: "mc", q: "시험에 ___ 실망하지 마세요. (Het examen is al voorbij: ook als je gezakt bent.)",
      options: ["떨어졌더라도", "떨어졌어더라도", "떨어진더라도", "떨어졌는더라도"], answer: 0,
      why: ["Goed: verleden tijd 떨어졌 + 더라도.", "Na 었 komt direct 더라도, zonder 어.", "떨어진 is de ㄴ-vorm; die past niet vóór 더라도.", "Er komt geen 는 vóór 더라도."] },
    { type: "order", q: "Zet in de goede volgorde: \"Zelfs als die tas duur is, koop ik hem.\"",
      tokens: [["그", "geu"], ["가방이", "gabangi"], ["비싸더라도", "bissadeorado"], ["살", "sal"], ["거예요", "geoyeyo"]] },
    { type: "mc", q: "어제 비가 많이 ___ 축구를 했어요. (Gisteren regende het hard, en toch hebben we gevoetbald.)",
      options: ["왔는데도", "오더라도", "왔더라도", "와서"], answer: 0,
      why: ["Goed: het regende echt, dus -는데도: \"hoewel ... toch\".", "-더라도 is voor een veronderstelling, niet voor een feit uit het verleden.", "Ook met 었 blijft -더라도 een veronderstelling; hier gaat het om een echt gebeurd feit.", "-아서 geeft een reden, geen tegenstelling."] },
    { type: "mc", q: "졸업하더라도 연락할게요. Wat betekent dit?",
      options: ["Ook als ik afstudeer, neem ik contact met je op.", "Omdat ik afstudeer, neem ik contact met je op.", "Pas als ik afgestudeerd ben, neem ik contact op.", "Ik ben al afgestudeerd, maar ik neem toch contact op."], answer: 0,
      why: ["Goed: -더라도 = zelfs als.", "Een reden geef je met -아서 of -(으)니까.", "\"Pas als\" is -아/어야, niet -더라도.", "졸업하더라도 heeft geen 았/었: het gaat om de toekomst."] },
    { type: "mc", q: "의사___ 모든 병을 알 수는 없어요. (Ook een arts kan niet alle ziektes kennen.)",
      options: ["이더라도", "인더라도", "이어더라도", "이는더라도"], answer: 0,
      why: ["Goed: naamwoord + 이더라도.", "인 is de ㄴ-vorm van 이다; die past niet vóór 더라도.", "Er komt geen 어 vóór 더라도.", "Er komt geen 는 vóór 더라도."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ook als je één keer faalt, geef nooit op.\"",
      tokens: [["한 번", "han beon"], ["실패하더라도", "silpaehadeorado"], ["절대", "jeoldae"], ["포기하지", "pogihaji"], ["마세요", "maseyo"]] },
    { type: "fill", q: "아무리 피곤하___ 숙제는 해야 해요. (Hoe moe je ook bent, je huiswerk moet je maken.)", answers: ["더라도", "여도"],
      hint: "Welke uitgang betekent \"zelfs als\" en komt direct na de stam?", why: "피곤하 + 더라도: geen 아/어 en geen 으 ertussen." },
    { type: "open", q: "Vertaal: \"Zelfs als je het druk hebt, bel me.\"",
      model: ["바쁘더라도 전화하세요.", "아무리 바쁘더라도 저한테 전화해 주세요.", "바쁘더라도 꼭 연락해 주세요."],
      tip: "Check: staat 더라도 direct na de stam 바쁘, zonder 아/어?" },
    { type: "open", q: "Vertaal: \"Zelfs als het morgen sneeuwt, gaan we naar zee.\"",
      model: ["내일 눈이 오더라도 바다에 갈 거예요.", "내일 눈이 오더라도 우리는 바다에 가요."],
      tip: "Check: 오 + 더라도 (niet 와더라도), en een besluit of plan in het tweede deel." }
  ],
  review: [
    { type: "mc", q: "___ 꼭 와 주세요. (Ook als je laat bent, kom zeker.)",
      options: ["늦더라도", "늦어더라도", "늦는더라도", "늦으더라도"], answer: 0,
      why: ["Goed: stam 늦 + 더라도.", "Er komt geen 어 vóór 더라도.", "Er komt geen 는 vóór 더라도.", "더라도 krijgt geen 으, ook niet na een 받침."] },
    { type: "mc", q: "학생___ 돈을 내야 해요. (Ook als je student bent, moet je betalen.)",
      options: ["이더라도", "더라도", "을더라도", "인더라도"], answer: 0,
      why: ["Goed: naamwoord met 받침 + 이더라도.", "학생 heeft een 받침; je hebt 이 nodig.", "을 is een objectpartikel en past hier niet.", "인 is de ㄴ-vorm van 이다; die past niet vóór 더라도."] },
    { type: "mc", q: "아무리 ___ 약속은 지켜야 해요. (Hoe moeilijk het ook is, beloftes moet je nakomen.)",
      options: ["어렵더라도", "어려워더라도", "어려운더라도", "어렵으더라도"], answer: 0,
      why: ["Goed: stam 어렵 + 더라도. De ㅂ blijft staan, want er volgt een medeklinker.", "Er komt geen 어 vóór 더라도.", "어려운 is de ㄴ-vorm; die past niet vóór 더라도.", "더라도 krijgt nooit een extra 으."] }
  ]
})
