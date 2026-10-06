({
  id: "15", slug: "causatief", title: "Causatief: -이/히/리/기/우/구/추- en -게 하다", sub: "Iemand iets laten doen, of iets laten gebeuren",
  canDo: "Je kunt nu zeggen dat je iemand iets laat doen of iets bij iemand laat gebeuren, met causatieve werkwoorden en -게 하다.",
  guess: {
    q: "\"De moeder geeft de baby melk.\" Welke zin klopt, denk je?",
    options: ["엄마가 아기에게 우유를 먹여요.", "엄마가 아기에게 우유를 먹어요.", "엄마가 아기에게 우유를 먹혀요.", "엄마가 아기에게 우유를 먹게요."], answer: 0,
    why: ["Goed: 먹다 → 먹이다 (te eten of drinken geven).", "먹어요 betekent dat de moeder zelf drinkt.", "먹히다 is passief: opgegeten worden.", "-게 alleen is geen werkwoord; het wordt 먹게 해요."]
  },
  problem: "In het Nederlands gebruik je \"laten\" of een ander werkwoord: eten → voeren, slapen → in slaap brengen. In het Koreaans krijgt het werkwoord een uitgang: 먹다 → 먹이다, 자다 → 재우다. Zo zeg je dat jij iets bij een ander laat gebeuren. Met -게 하다 kan het ook, maar dat betekent net iets anders.",
  pattern: [
    { l: "wie het laat gebeuren", v: "엄마가", c: 1 }, { l: "bij wie (에게)", v: "아기에게", c: 3 },
    { l: "wat", v: "우유를", c: 4 }, { l: "causatief werkwoord", v: "먹여요", c: 2, key: true }
  ],
  patternCap: "A가 + B에게/B를 + stam + 이/히/리/기/우/구/추 (먹이다, 입히다, 울리다, 웃기다, 재우다); of: A가 + B에게 + stam + 게 하다",
  rules: [
    "Welke uitgang een werkwoord krijgt, leer je per woord: 먹다 → 먹이다, 입다 → 입히다, 울다 → 울리다, 웃다 → 웃기다, 자다 → 재우다. Zeldzamer: -구- (달다 → 달구다) en -추- (늦다 → 늦추다).",
    "Wie het laat gebeuren is het onderwerp (이/가). Wie het ondergaat krijgt 을/를 of 에게: 아기를 재워요, 아이에게 옷을 입혀요.",
    "Ook sommige bijvoeglijke werkwoorden hebben een causatief: 낮다 → 낮추다, 넓다 → 넓히다.",
    "Sommige vormen lijken op het passief: 보이다 betekent \"te zien zijn\" én \"laten zien\". Met een 을/를-voorwerp is het meestal causatief: 사진을 보여 줬어요.",
    "Niet elk werkwoord heeft een causatief. Dan gebruik je -게 하다: 가다 → 가게 하다. Bij 하다-werkwoorden kan ook 시키다: 공부하다 → 공부시키다."
  ],
  pitfall: "Verwar causatief en passief niet. 먹이다 = te eten geven, 먹히다 = opgegeten worden. Bij een causatief heb je bijna altijd iemand die het ondergaat, met 을/를 of 에게.",
  examples: [
    { cn: "엄마가 아기에게 우유를 먹여요.", py: "Eommaga agiege uyureul meogyeoyo.", nl: "De moeder geeft de baby melk." },
    { cn: "아이에게 따뜻한 옷을 입혔어요.", py: "Aiege ttatteutan oseul ipyeosseoyo.", nl: "Ik heb het kind warme kleren aangetrokken." },
    { cn: "그 영화는 많은 사람들을 울렸어요.", py: "Geu yeonghwaneun maneun saramdeureul ullyeosseoyo.", nl: "Die film heeft veel mensen aan het huilen gebracht." },
    { cn: "제 친구는 항상 사람들을 웃겨요.", py: "Je chinguneun hangsang saramdeureul utgyeoyo.", nl: "Mijn vriend maakt mensen altijd aan het lachen." }
  ],
  nuance: [
    { h: "Causatief werkwoord of -게 하다?",
      p: "Een causatief werkwoord is meestal direct: je doet het zelf bij de ander, bijvoorbeeld met een lepel eten geven. -게 하다 is indirect: je zorgt ervoor dat de ander het zelf doet, met een opdracht of toestemming. Vergelijk een moeder die voert met een moeder die zegt: eet je bord leeg.",
      ex: [
        { cn: "엄마가 아이에게 밥을 먹였어요.", py: "Eommaga aiege babeul meogyeosseoyo.", nl: "De moeder gaf het kind eten (zelf, met de lepel)." },
        { cn: "엄마가 아이에게 밥을 먹게 했어요.", py: "Eommaga aiege babeul meokge haesseoyo.", nl: "De moeder zorgde dat het kind (zelf) at." }
      ] },
    { h: "Causatief of passief?",
      p: "Beide gebruiken soms -이/히/리/기-, en een paar vormen zijn zelfs gelijk. Kijk naar de zin. Bij een passief ondergaat het onderwerp iets en is er geen 을/를. Bij een causatief laat het onderwerp iets gebeuren bij iemand anders, met 을/를 of 에게.",
      ex: [
        { cn: "친구에게 사진을 보여 줬어요.", py: "Chinguege sajineul boyeo jwosseoyo.", nl: "Ik liet mijn vriend de foto zien." },
        { cn: "여기에서 바다가 보여요.", py: "Yeogieseo badaga boyeoyo.", nl: "Hiervandaan is de zee te zien." }
      ] },
    { h: "시키다 en register",
      p: "Bij 하다-werkwoorden gebruik je vaak 시키다: 청소시키다, 공부시키다. Dat klinkt als een opdracht van iemand met gezag, zoals een ouder of baas. -게 하다 is neutraler en kan ook \"toestaan\" betekenen. In spreektaal hoor je ook -게 만들다; dat klinkt sterker, bijna als dwang.",
      ex: [
        { cn: "엄마가 동생에게 방 청소를 시켰어요.", py: "Eommaga dongsaengege bang cheongsoreul sikyeosseoyo.", nl: "Mama liet mijn broertje zijn kamer opruimen." }
      ] }
  ],
  mistakes: [
    { wrong: "엄마가 아기에게 우유를 먹혀요.", right: "엄마가 아기에게 우유를 먹여요.", why: "먹히다 is passief (opgegeten worden). Te eten geven is 먹이다." },
    { wrong: "제가 아기를 자웠어요.", right: "제가 아기를 재웠어요.", why: "Het causatief van 자다 is 재우다: de klinker verandert ook." },
    { wrong: "아이가 혼자 옷을 입혔어요.", right: "아이가 혼자 옷을 입었어요.", why: "Het kind kleedt zichzelf aan. Doe je iets zelf, dan gebruik je geen causatief." },
    { wrong: "선생님이 학생들을 일찍 가였어요.", right: "선생님이 학생들을 일찍 가게 했어요.", why: "가다 heeft geen causatief werkwoord. Gebruik -게 하다." }
  ],
  vocab: [
    ["-이/히/리/기/우/구/추-", "-i/hi/ri/gi/u/gu/chu-", "causatief-uitgang (먹이다, 재우다 ...)"], ["먹이다", "meogida", "te eten geven, voeren"],
    ["입히다", "ipida", "aankleden (iemand anders)"], ["울리다", "ullida", "aan het huilen maken"], ["웃기다", "utgida", "aan het lachen maken"],
    ["재우다", "jaeuda", "in slaap brengen"], ["씻기다", "ssitgida", "wassen (iemand anders)"], ["깨우다", "kkaeuda", "wakker maken"],
    ["시키다", "sikida", "laten doen, opdragen"], ["돌보다", "dolboda", "zorgen voor, oppassen op"]
  ],
  dialogue: [
    ["A", "오늘 조카를 돌봐 줘서 고마워요. 힘들었죠?", "Oneul jokareul dolbwa jwoseo gomawoyo. Himdeureotjyo?", "Bedankt dat je vandaag op mijn neefje paste. Was het zwaar?"],
    ["B", "아니요, 재미있었어요. 점심에 죽을 먹이고 같이 놀았어요.", "Aniyo, jaemiisseosseoyo. Jeomsime jugeul meogigo gachi norasseoyo.", "Nee, het was leuk. 's Middags gaf ik hem pap, en daarna speelden we samen."],
    ["A", "목욕도 시켰어요?", "Mogyokdo sikyeosseoyo?", "Heb je hem ook in bad gedaan?"],
    ["B", "네, 씻기고 잠옷을 입혔어요. 지금은 제가 재워서 자고 있어요.", "Ne, ssitgigo jamoseul ipyeosseoyo. Jigeumeun jega jaewoseo jago isseoyo.", "Ja, ik heb hem gewassen en zijn pyjama aangetrokken. Ik heb hem in slaap gebracht; nu slaapt hij."],
    ["A", "와, 저보다 잘하네요. 울리지는 않았어요?", "Wa, jeoboda jalhaneyo. Ullijineun anasseoyo?", "Wauw, je kunt het beter dan ik. Heb je hem niet aan het huilen gemaakt?"],
    ["B", "아니요, 하루 종일 웃겼어요.", "Aniyo, haru jongil utgyeosseoyo.", "Nee, ik heb hem de hele dag aan het lachen gemaakt."]
  ],
  reading: {
    title: "아빠의 하루",
    lines: [
      { cn: "민수 씨는 회사를 그만두고 집에서 두 아이를 키운다.", py: "Minsu ssineun hoesareul geumandugo jibeseo du aireul kiunda.", nl: "Minsu is gestopt met werken en voedt thuis zijn twee kinderen op." },
      { cn: "아침에는 아이들을 깨우고 옷을 입힌다.", py: "Achimeneun aideureul kkaeugo oseul ipinda.", nl: "'s Ochtends maakt hij de kinderen wakker en kleedt hij ze aan." },
      { cn: "작은아이는 아직 어려서 밥을 직접 먹인다.", py: "Jageunaineun ajik eoryeoseo babeul jikjeop meoginda.", nl: "Het jongste kind is nog klein, dus hij geeft het zelf eten." },
      { cn: "큰아이는 혼자 먹을 수 있지만 채소를 싫어해서 조금이라도 먹게 한다.", py: "Keunaineun honja meogeul su itjiman chaesoreul sireohaeseo jogeumirado meokge handa.", nl: "Het oudste kind kan zelf eten, maar houdt niet van groente. Dus zorgt hij dat het er toch een beetje van eet." },
      { cn: "오후에는 큰아이에게 숙제를 하게 하고 작은아이와 같이 논다.", py: "Ohueneun keunaiege sukjereul hage hago jageunaiwa gachi nonda.", nl: "'s Middags laat hij het oudste kind huiswerk maken en speelt hij met het jongste." },
      { cn: "민수 씨는 재미있는 표정으로 아이들을 자주 웃긴다.", py: "Minsu ssineun jaemiinneun pyojeongeuro aideureul jaju utginda.", nl: "Met grappige gezichten maakt Minsu de kinderen vaak aan het lachen." },
      { cn: "밤에는 아이들을 씻기고 책을 읽어 주면서 재운다.", py: "Bameneun aideureul ssitgigo chaegeul ilgeo jumyeonseo jaeunda.", nl: "'s Avonds wast hij de kinderen en brengt hij ze in slaap terwijl hij voorleest." },
      { cn: "힘들지만 아이들이 크는 것을 보면 정말 행복하다고 한다.", py: "Himdeuljiman aideuri keuneun geoseul bomyeon jeongmal haengbokadago handa.", nl: "Hij zegt dat het zwaar is, maar dat hij echt gelukkig is als hij de kinderen ziet opgroeien." }
    ],
    questions: [
      { type: "mc", q: "Waarom geeft Minsu het jongste kind zelf eten?",
        options: ["Het is nog klein.", "Het houdt niet van groente.", "Het moet huiswerk maken.", "Het is ziek."], answer: 0,
        why: ["Goed: 작은아이는 아직 어려서 밥을 직접 먹인다.", "Dat geldt voor het oudste kind.", "Huiswerk maakt het oudste kind.", "Over ziekte staat niets in de tekst."] },
      { type: "mc", q: "Wat doet Minsu 's middags?",
        options: ["Hij laat het oudste kind huiswerk maken en speelt met het jongste.", "Hij brengt de kinderen naar bed.", "Hij gaat naar zijn werk.", "Hij maakt de kinderen wakker en kleedt ze aan."], answer: 0,
        why: ["Goed: 큰아이에게 숙제를 하게 하고 작은아이와 같이 논다.", "Dat doet hij 's avonds.", "Hij is gestopt met werken.", "Dat doet hij 's ochtends."] },
      { type: "mc", q: "밥을 직접 먹인다 en 조금이라도 먹게 한다: wat is het verschil?",
        options: ["Bij 먹인다 geeft hij zelf eten; bij 먹게 한다 eet het kind zelf.", "Bij 먹게 한다 geeft hij zelf eten; bij 먹인다 eet het kind zelf.", "먹인다 is passief: het kind wordt opgegeten.", "Er is geen verschil in betekenis."], answer: 0,
        why: ["Goed: het causatief werkwoord is direct, -게 하다 is indirect.", "Het is precies andersom.", "Passief is 먹히다; 먹이다 is causatief.", "Het verschil is direct tegenover indirect."] }
    ]
  },
  questions: [
    { type: "mc", q: "엄마가 아기를 ___. (De moeder brengt de baby in slaap.)",
      options: ["재워요", "자워요", "자게요", "자여요"], answer: 0,
      why: ["Goed: 자다 → 재우다, ook de klinker verandert.", "De klinker verandert: 재우다, niet 자우다.", "-게 alleen is geen werkwoord; het zou 자게 해요 zijn.", "자다 krijgt geen -이-."] },
    { type: "mc", q: "아이에게 코트를 ___. (Ik trek het kind een jas aan.)",
      options: ["입혀요", "입어요", "입여요", "입게요"], answer: 0,
      why: ["Goed: 입다 → 입히다.", "입어요 betekent dat je zelf de jas aantrekt.", "입다 krijgt -히-, niet -이-.", "-게 alleen is geen werkwoord."] },
    { type: "mc", q: "그 코미디언은 사람들을 정말 잘 ___. (Die komiek maakt mensen echt goed aan het lachen.)",
      options: ["웃겨요", "웃어요", "웃혀요", "웃이어요"], answer: 0,
      why: ["Goed: 웃다 → 웃기다.", "웃어요 betekent dat de komiek zelf lacht.", "웃다 krijgt -기-, niet -히-.", "웃다 krijgt -기-, niet -이-."] },
    { type: "mc", q: "엄마가 아이에게 채소를 조금이라도 ___. (Mama zorgde dat het kind zelf toch een beetje groente at.)",
      options: ["먹게 했어요", "먹게 됐어요", "먹혔어요", "먹었어요"], answer: 0,
      why: ["Goed: het kind eet zelf; mama zorgt ervoor: -게 하다.", "-게 되다 betekent \"het komt zo dat ...\"; dan laat mama niets doen.", "먹히다 is passief: opgegeten worden.", "먹었어요 betekent dat mama zelf at."] },
    { type: "mc", q: "Welk werkwoord heeft GEEN causatief met -이/히/리/기/우/구/추-?",
      options: ["가다", "먹다", "울다", "자다"], answer: 0,
      why: ["Goed: 가다 heeft geen causatief; je zegt 가게 하다.", "먹다 → 먹이다.", "울다 → 울리다.", "자다 → 재우다."] },
    { type: "mc", q: "친구에게 여행 사진을 ___ 줬어요. (Ik liet mijn vriend mijn reisfoto's zien.)",
      options: ["보여", "봐", "보게", "보혀"], answer: 0,
      why: ["Goed: 보다 → 보이다 (laten zien), + -아/어 주다.", "봐 줬어요 betekent dat jij ernaar keek voor je vriend.", "-게 past niet vóór 주다 in deze betekenis.", "보다 krijgt -이-, niet -히-."] },
    { type: "mc", q: "선생님이 학생들을 일찍 집에 ___. (De leraar liet de leerlingen vroeg naar huis gaan.)",
      options: ["가게 했어요", "가였어요", "가우었어요", "갔어요"], answer: 0,
      why: ["Goed: 가다 heeft geen causatief werkwoord, dus -게 하다.", "가다 krijgt geen -이-.", "가다 krijgt geen -우-.", "갔어요 betekent dat de leraar zelf ging."] },
    { type: "order", q: "Zet in de goede volgorde: \"De moeder gaf de baby melk en bracht hem in slaap.\"",
      tokens: [["엄마가 아기에게", "eommaga agiege"], ["우유를", "uyureul"], ["먹이고", "meogigo"], ["재웠어요", "jaewosseoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Die film heeft veel mensen aan het huilen gebracht.\"",
      tokens: [["그 영화는", "geu yeonghwaneun"], ["많은", "maneun"], ["사람들을", "saramdeureul"], ["울렸어요", "ullyeosseoyo"]] },
    { type: "fill", q: "엄마가 아이에게 옷을 입___어요. (Mama trok het kind kleren aan.)", answers: ["혔"],
      hint: "입다 krijgt -히-; wat wordt 히 + 었?", why: "입다 → 입히다; 입히 + 었어요 = 입혔어요." },
    { type: "open", q: "Vertaal: \"Ik heb de baby in slaap gebracht.\"",
      model: ["제가 아기를 재웠어요.", "아기를 재웠어요."],
      tip: "Check: 자다 → 재우다 (niet 자우다), en 아기를 met 을/를." },
    { type: "open", q: "Vertaal: \"De leraar liet ons een boek lezen.\"",
      model: ["선생님이 우리에게 책을 읽게 했어요.", "선생님께서 저희에게 책을 읽게 하셨어요.", "선생님이 우리에게 책을 읽혔어요."],
      tip: "Check: 읽게 했어요 (-게 하다) of 읽혔어요 (causatief); wie leest krijgt 에게." }
  ],
  review: [
    { type: "mc", q: "아빠가 아이를 욕실에서 ___. (Papa waste het kind in de badkamer.)",
      options: ["씻겼어요", "씻혔어요", "씻이었어요", "씻게 됐어요"], answer: 0,
      why: ["Goed: 씻다 → 씻기다 (iemand anders wassen).", "씻다 krijgt -기-, niet -히-.", "씻다 krijgt -기-, niet -이-.", "-게 되다 betekent \"het komt zo dat ...\"; dan doet papa niets."] },
    { type: "mc", q: "그 소식이 저를 ___. (Dat nieuws maakte me aan het huilen.)",
      options: ["울렸어요", "울었어요", "울혔어요", "울겼어요"], answer: 0,
      why: ["Goed: 울다 → 울리다.", "울었어요 betekent dat het nieuws zelf huilde.", "울다 krijgt -리-, niet -히-.", "울다 krijgt -리-, niet -기-."] },
    { type: "mc", q: "의사가 저에게 일주일 동안 ___. (De dokter liet me een week rusten.)",
      options: ["쉬게 했어요", "쉬웠어요", "쉬혔어요", "쉬었어요"], answer: 0,
      why: ["Goed: 쉬다 heeft geen causatief werkwoord, dus -게 하다.", "쉬웠어요 komt van 쉽다 (makkelijk); dat is iets anders.", "쉬다 krijgt geen -히-.", "쉬었어요 betekent dat de dokter zelf rustte."] }
  ]
})
