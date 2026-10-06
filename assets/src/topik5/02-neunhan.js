({
  id: "02", slug: "neunhan", title: "-는 한", sub: "Zolang, tenzij, voor zover",
  canDo: "Je kunt nu een voorwaarde noemen die moet blijven gelden met -는 한, en \"voor zover ik weet\" zeggen met 제가 아는 한.",
  guess: {
    q: "특별한 일이 없는 한 내일 갈게요. Wat betekent dit, denk je?",
    options: [
      "Zolang er niets bijzonders gebeurt, kom ik morgen.",
      "Omdat er niets bijzonders is, kom ik morgen.",
      "Ook als er iets bijzonders gebeurt, kom ik morgen.",
      "Er is niets bijzonders, dus ik kom morgen niet."
    ], answer: 0,
    why: [
      "Goed: -는 한 noemt een voorwaarde: zolang die geldt, gebeurt het.",
      "-는 한 is geen reden. Het is een voorwaarde.",
      "\"Ook als\" is -아/어도. -는 한 betekent \"zolang\".",
      "갈게요 betekent \"ik kom\", niet \"ik kom niet\"."
    ]
  },
  problem: "Soms gebeurt iets alleen zolang een voorwaarde blijft gelden. In het Nederlands zeg je \"zolang\" of \"tenzij\". Gewoon -(으)면 zegt alleen \"als\". Met -는 한 zeg je: dit geldt, zolang die voorwaarde er is.",
  pattern: [
    { l: "voorwaarde", v: "포기하지 않", c: 4 }, { l: "는 한", v: "는 한", c: 2, key: true },
    { l: "gevolg", v: "성공할 수 있어요", c: 5 }
  ],
  patternCap: "Werkwoordstam + 는 한 + gevolg · 않는 한 / 없는 한 = tenzij · 제가 아는 한 = voor zover ik weet · 가능한 한 = zo ... mogelijk",
  rules: [
    "Na een werkwoord komt -는 한 direct na de stam, met of zonder 받침: 가는 한, 먹는 한.",
    "Vaak met een ontkenning: -지 않는 한 en 없는 한 betekenen \"tenzij\".",
    "Een stam op ㄹ verliest de ㄹ: 살다 wordt 사는 한, 알다 wordt 아는 한.",
    "Na een bijvoeglijk werkwoord staat -(으)ㄴ 한. Dat zie je vooral in vaste uitdrukkingen: 가능한 한.",
    "Dit is vrij formeel en komt veel voor in schrijftaal. In spreektaal zeg je vaak -(으)면: 포기하지 않으면."
  ],
  pitfall: "Gebruik na een werkwoord geen verleden of toekomst vóór 한: niet 않은 한 of 않을 한, maar 않는 한. Schrijf 한 los: 않는 한, niet 않는한.",
  examples: [
    { cn: "포기하지 않는 한 꿈은 이루어질 거예요.", py: "Pogihaji anneun han kkumeun irueojil geoyeyo.", nl: "Zolang je niet opgeeft, komt je droom uit." },
    { cn: "제가 아는 한 그 사람은 거짓말을 하지 않아요.", py: "Jega aneun han geu sarameun geojinmareul haji anayo.", nl: "Voor zover ik weet, liegt die persoon niet." },
    { cn: "비가 오지 않는 한 경기는 예정대로 진행된다.", py: "Biga oji anneun han gyeongineun yejeongdaero jinhaengdoenda.", nl: "Tenzij het regent, gaat de wedstrijd door zoals gepland." },
    { cn: "특별한 일이 없는 한 매일 운동해요.", py: "Teukbyeolhan iri eomneun han maeil undonghaeyo.", nl: "Tenzij er iets bijzonders is, sport ik elke dag." }
  ],
  nuance: [
    { h: "-는 한 of -(으)면?",
      p: "-(으)면 is een gewone voorwaarde: \"als\". Het past ook bij iets wat één keer gebeurt. -는 한 betekent \"zolang\": de voorwaarde moet blijven gelden. Het gevolg is meestal een vaste toestand of een sterke uitspraak. Voor één moment, zoals thuiskomen, past -는 한 niet.",
      ex: [
        { cn: "집에 도착하면 전화할게요.", py: "Jibe dochakamyeon jeonhwahalgeyo.", nl: "Als ik thuis ben, bel ik je." },
        { cn: "규칙을 지키는 한 아무 문제가 없어요.", py: "Gyuchigeul jikineun han amu munjega eopseoyo.", nl: "Zolang je je aan de regels houdt, is er geen enkel probleem." }
      ] },
    { h: "Vaste uitdrukkingen",
      p: "Drie vormen hoor en lees je heel vaak. 제가 아는 한: voor zover ik weet. 가능한 한: zo ... mogelijk. 살아 있는 한: zolang ik leef. Let op: 가능한 빨리 hoor je veel, maar de correcte schrijfvorm is 가능한 한 빨리.",
      ex: [
        { cn: "가능한 한 빨리 연락드리겠습니다.", py: "Ganeunghan han ppalli yeollakdeurigetseumnida.", nl: "Ik neem zo snel mogelijk contact met u op." },
        { cn: "내가 살아 있는 한 이 약속은 꼭 지킬게.", py: "Naega sara inneun han i yaksogeun kkok jikilge.", nl: "Zolang ik leef, houd ik me aan deze belofte." }
      ] },
    { h: "Register: regels, contracten en nieuws",
      p: "-는 한 is vooral schrijftaal. Je ziet het in regels, contracten en officiële berichten, vaak als 특별한 사정이 없는 한. In een gewoon gesprek zeg je liever -지 않으면 of 없으면.",
      ex: [
        { cn: "특별한 사정이 없는 한 환불은 불가능합니다.", py: "Teukbyeolhan sajeong-i eomneun han hwanbureun bulganeunghamnida.", nl: "Tenzij er bijzondere omstandigheden zijn, is terugbetaling niet mogelijk." },
        { cn: "특별한 일 없으면 내일 갈게.", py: "Teukbyeolhan il eopseumyeon naeil galge.", nl: "Als er niets bijzonders is, kom ik morgen. (spreektaal)" }
      ] }
  ],
  mistakes: [
    { wrong: "집에 도착하는 한 전화할게요.", right: "집에 도착하면 전화할게요.", why: "Thuiskomen gebeurt één keer. Dat is een gewone voorwaarde: -(으)면." },
    { wrong: "연습하지 않은 한 실력이 늘지 않아요.", right: "연습하지 않는 한 실력이 늘지 않아요.", why: "Na een werkwoord staat vóór 한 altijd -는, niet de verleden vorm -은." },
    { wrong: "제가 알는 한 그 가게는 문을 닫았어요.", right: "제가 아는 한 그 가게는 문을 닫았어요.", why: "Bij 알다 valt de ㄹ weg vóór -는: 아는." },
    { wrong: "가능한 빨리 보내 주세요.", right: "가능한 한 빨리 보내 주세요.", why: "In correcte schrijftaal heeft 가능한 nog 한 nodig: 가능한 한." }
  ],
  vocab: [
    ["-는 한", "-neun han", "zolang, voor zover"], ["포기하다", "pogihada", "opgeven"],
    ["이루어지다", "irueojida", "uitkomen, werkelijkheid worden"], ["예정대로", "yejeongdaero", "zoals gepland"],
    ["진행되다", "jinhaengdoeda", "doorgaan, plaatsvinden"], ["급하다", "geupada", "dringend zijn, haast hebben"],
    ["실력", "sillyeok", "vaardigheid, niveau"], ["재능", "jaeneung", "talent"],
    ["조언하다", "joeonhada", "advies geven"], ["흥미", "heungmi", "interesse, belangstelling"]
  ],
  dialogue: [
    ["A", "이번 주말에 등산 갈 수 있어요?", "Ibeon jumare deungsan gal su isseoyo?", "Kun je dit weekend mee de berg op?"],
    ["B", "비가 오지 않는 한 갈게요.", "Biga oji anneun han galgeyo.", "Zolang het niet regent, ga ik mee."],
    ["A", "일기 예보에서는 맑을 거라고 했어요.", "Ilgi yeboeseoneun malgeul georago haesseoyo.", "Volgens de weersverwachting wordt het helder."],
    ["B", "그럼 급한 일이 생기지 않는 한 꼭 갈게요.", "Geureom geupan iri saenggiji anneun han kkok galgeyo.", "Dan kom ik zeker, tenzij er iets dringends gebeurt."],
    ["A", "좋아요. 토요일 아침에 만나요.", "Joayo. Toyoil achime mannayo.", "Prima. Tot zaterdagochtend."]
  ],
  reading: {
    title: "외국어 실력은 언제 늘까?",
    lines: [
      { cn: "외국어를 배우는 사람들은 \"언제쯤 잘하게 될까?\"라고 자주 묻는다.", py: "Oegugeoreul baeuneun saramdeureun \"Eonjejjeum jalhage doelkka?\"rago jaju mutneunda.", nl: "Mensen die een vreemde taal leren, vragen vaak: \"Wanneer word ik er goed in?\"" },
      { cn: "내가 아는 한 이 질문에 정확한 답은 없다.", py: "Naega aneun han i jilmune jeonghwakan dabeun eopda.", nl: "Voor zover ik weet, is er geen precies antwoord op die vraag." },
      { cn: "다만 매일 조금씩 연습하는 한 실력은 반드시 는다.", py: "Daman maeil jogeumssik yeonseupaneun han sillyeogeun bandeusi neunda.", nl: "Maar zolang je elke dag een beetje oefent, word je zeker beter." },
      { cn: "반대로 아무리 재능이 있어도 연습하지 않는 한 실력은 늘지 않는다.", py: "Bandaero amuri jaeneung-i isseodo yeonseupaji anneun han sillyeogeun neulji anneunda.", nl: "Omgekeerd: hoeveel talent je ook hebt, zolang je niet oefent, word je niet beter." },
      { cn: "그래서 전문가들은 가능한 한 매일 그 언어를 접하라고 조언한다.", py: "Geuraeseo jeonmungadeureun ganeunghan han maeil geu eoneoreul jeopharago joeonhanda.", nl: "Daarom raden experts aan om zo veel mogelijk elke dag met de taal in aanraking te komen." },
      { cn: "드라마를 보거나 노래를 듣는 것도 좋은 방법이다.", py: "Deuramareul bogeona noraereul deunneun geotdo joeun bangbeobida.", nl: "Series kijken of naar liedjes luisteren is ook een goede manier." },
      { cn: "흥미를 잃지 않는 한 공부는 오래 계속될 수 있다.", py: "Heungmireul ilchi anneun han gongbuneun orae gyesokdoel su itda.", nl: "Zolang je je interesse niet verliest, kun je lang blijven leren." }
    ],
    questions: [
      { type: "mc", q: "Wat is volgens de schrijver het antwoord op \"Wanneer word ik er goed in?\"",
        options: ["Daar is geen precies antwoord op.", "Na precies één jaar.", "Alleen als je veel talent hebt.", "Pas als je in Korea woont."], answer: 0,
        why: ["Goed: 이 질문에 정확한 답은 없다.", "De tekst noemt geen tijdsduur.", "De tekst zegt juist: talent alleen is niet genoeg.", "Over in Korea wonen staat niets in de tekst."] },
      { type: "mc", q: "Wat raden experts aan?",
        options: ["Zo veel mogelijk elke dag met de taal in aanraking komen.", "Alleen grammatica uit een boek leren.", "Eerst veel talent ontwikkelen.", "Geen series kijken."], answer: 0,
        why: ["Goed: 가능한 한 매일 그 언어를 접하라고 조언한다.", "De tekst noemt geen grammaticaboek.", "Talent is volgens de tekst niet het belangrijkste.", "Series kijken is juist een goede manier."] },
      { type: "mc", q: "흥미를 잃지 않는 한 공부는 오래 계속될 수 있다. Wat betekent -지 않는 한 hier?",
        options: ["Zolang je je interesse niet verliest.", "Omdat je je interesse niet verliest.", "Ook als je je interesse verliest.", "Nadat je je interesse verloren hebt."], answer: 0,
        why: ["Goed: -지 않는 한 = zolang ... niet.", "-는 한 is een voorwaarde, geen reden.", "\"Ook als\" is -아/어도.", "\"Nadat\" is -(으)ㄴ 후에."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Zolang je niet oefent, word je niet beter.\" Welke zin klopt?",
      options: ["연습하지 않는 한 실력이 늘지 않아요.", "연습하지 않은 한 실력이 늘지 않아요.", "연습하지 않을 한 실력이 늘지 않아요.", "연습하지 않아 한 실력이 늘지 않아요."], answer: 0,
      why: ["Goed: 않다 + 는 한.", "Vóór 한 staat de vorm -는, niet de verleden vorm -은.", "Vóór 한 staat de vorm -는, niet de toekomstvorm -을.", "Vóór 한 staat een bijvoeglijke vorm met -는, niet -아."] },
    { type: "mc", q: "제가 ___ 한 그 식당은 일요일에 문을 닫아요. (Voor zover ik weet ...)",
      options: ["아는", "알는", "알은", "알"], answer: 0,
      why: ["Goed: bij 알다 valt de ㄹ weg vóór -는: 아는.", "De ㄹ valt weg vóór -는. Het is 아는.", "Vóór 한 staat -는, en de ㄹ valt weg: 아는.", "알 is een toekomstvorm. Vóór 한 staat 아는."] },
    { type: "mc", q: "돈을 아끼지 않는 한 저축할 수 없어요. Wat betekent dit?",
      options: ["Tenzij je zuinig bent, kun je niet sparen.", "Omdat je zuinig bent, kun je niet sparen.", "Ook als je zuinig bent, kun je niet sparen.", "Zodra je zuinig bent, kun je niet sparen."], answer: 0,
      why: ["Goed: -지 않는 한 betekent \"tenzij\" of \"zolang niet\".", "-는 한 geeft een voorwaarde, geen reden.", "\"Ook als\" is -아/어도, niet -는 한.", "\"Zodra\" is -자마자, niet -는 한."] },
    { type: "order", q: "Zet in de goede volgorde: \"Tenzij er een groot probleem is, begint de vergadering om drie uur.\"",
      tokens: [["큰", "keun"], ["문제가", "munjega"], ["없는", "eomneun"], ["한", "han"], ["회의는 세 시에 시작해요", "hoeuineun se sie sijakaeyo"]] },
    { type: "open", q: "Vertaal: \"Zolang je je best doet, is het goed.\"",
      model: ["최선을 다하는 한 괜찮아요.", "열심히 하는 한 괜찮아요.", "네가 최선을 다하는 한 괜찮아."],
      tip: "Check: staat -는 direct na de stam, en staat 한 los?" },
    { type: "mc", q: "\"Als ik thuis ben, bel ik je.\" Welke zin klopt?",
      options: ["집에 도착하면 전화할게요.", "집에 도착하는 한 전화할게요.", "집에 도착해도 전화할게요.", "집에 도착한 한 전화할게요."], answer: 0,
      why: ["Goed: thuiskomen gebeurt één keer. Dat is een gewone voorwaarde met -(으)면.", "-는 한 betekent \"zolang\". Dat past niet bij één moment.", "-아/어도 betekent \"ook als\".", "-(으)ㄴ 한 past niet na een werkwoord, en \"zolang\" past hier niet."] },
    { type: "mc", q: "가능한 한 빨리 답장 부탁드립니다. Wat betekent dit?",
      options: ["Graag zo snel mogelijk een antwoord.", "Graag een antwoord, tenzij het snel kan.", "Graag een antwoord, zolang het mogelijk is.", "Graag een snel antwoord, omdat het mogelijk is."], answer: 0,
      why: ["Goed: 가능한 한 is een vaste uitdrukking: zo ... mogelijk.", "Er staat geen ontkenning, dus het betekent geen \"tenzij\".", "In 가능한 한 빨리 is 가능한 한 een vaste combinatie met 빨리: zo snel mogelijk.", "-는 한 geeft nooit een reden."] },
    { type: "order", q: "Zet in de goede volgorde: \"Voor zover ik weet, is hij nu in Busan.\"",
      tokens: [["제가", "jega"], ["아는", "aneun"], ["한", "han"], ["그 사람은 지금 부산에 있어요", "geu sarameun jigeum busane isseoyo"]] },
    { type: "fill", q: "특별한 사정이 ___ 한 마감일은 바뀌지 않습니다. (Tenzij er bijzondere omstandigheden zijn, verandert de deadline niet.)",
      answers: ["없는"], hint: "\"Er is niet\" = 없다. Welke vorm staat vóór 한?",
      why: "없다 krijgt -는: 없는 한 = tenzij er ... is." },
    { type: "mc", q: "Welke zin is NIET natuurlijk?",
      options: ["내일 비가 오는 한 우산을 가져가세요.", "건강이 허락하는 한 계속 일하고 싶어요.", "제가 아는 한 그건 사실이에요.", "규칙을 지키는 한 문제없어요."], answer: 0,
      why: ["Goed: dit is niet natuurlijk. Regen morgen is één situatie. Zeg: 내일 비가 오면 우산을 가져가세요.", "Dit kan: zolang mijn gezondheid het toelaat, wil ik blijven werken.", "Dit kan: 제가 아는 한 = voor zover ik weet.", "Dit kan: zolang je de regels volgt, is er geen probleem."] },
    { type: "open", q: "Vertaal: \"Zolang ik leef, vergeet ik dit niet.\"",
      model: ["제가 살아 있는 한 이 일을 잊지 않을 거예요.", "내가 살아 있는 한 이것을 잊지 않겠다."],
      tip: "Check: 살아 있다 + 는 한 = 살아 있는 한. Staat 한 los?" }
  ],
  review: [
    { type: "mc", q: "\"Tenzij het sneeuwt, rijdt de bus.\"",
      options: ["눈이 오지 않는 한 버스는 다녀요.", "눈이 오지 않은 한 버스는 다녀요.", "눈이 오지 않을 한 버스는 다녀요.", "눈이 오지 않고 한 버스는 다녀요."], answer: 0,
      why: ["Goed: -지 않는 한 = tenzij.", "Vóór 한 staat -는, niet de verleden vorm -은.", "Vóór 한 staat -는, niet de toekomstvorm -을.", "-고 is een verbindingsvorm. Vóór 한 staat -는."] },
    { type: "mc", q: "이 동네에 ___ 한 걱정하지 마세요. (Zolang je in deze buurt woont, hoef je je geen zorgen te maken.)",
      options: ["사는", "살는", "산", "살"], answer: 0,
      why: ["Goed: bij 살다 valt de ㄹ weg vóór -는: 사는.", "De ㄹ valt weg vóór -는. Het is 사는.", "산 is de verleden vorm. Vóór 한 staat 사는.", "살 is een toekomstvorm. Vóór 한 staat 사는."] },
    { type: "mc", q: "네가 먼저 ___ 한 그는 아무 말도 안 할 거야. (Tenzij jij het eerst vraagt, zegt hij niets.)",
      options: ["묻지 않는", "묻지 않은", "묻지 않을", "묻지 않아서"], answer: 0,
      why: ["Goed: -지 않는 한 = tenzij.", "Vóór 한 staat -는, niet de verleden vorm -은.", "Vóór 한 staat -는, niet de toekomstvorm -을.", "-아서 geeft een reden. Vóór 한 staat -는."] }
  ]
})
