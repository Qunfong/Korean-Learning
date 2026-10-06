({
  id: "08", slug: "deon", title: "-던", sub: "Het restaurant waar ik vroeger vaak heen ging",
  canDo: "Je kunt nu met -던 een naamwoord beschrijven met iets wat je vroeger vaak deed of niet afmaakte.",
  guess: {
    q: "\"Dit is het restaurant waar ik vroeger vaak heen ging.\" Welke zin klopt, denk je?",
    options: ["여기가 제가 예전에 자주 가던 식당이에요.", "여기가 제가 예전에 자주 가는 식당이에요.", "여기가 제가 예전에 자주 갈 식당이에요.", "여기가 제가 예전에 자주 가더니 식당이에요."], answer: 0,
    why: ["Goed: stam + 던 voor een gewoonte in het verleden.", "가는 is een gewoonte van nu, niet van vroeger.", "갈 kijkt naar de toekomst.", "-더니 verbindt twee zinnen en staat niet vóór een naamwoord."]
  },
  problem: "In het Nederlands zeg je: \"het restaurant waar ik vroeger vaak heen ging\" of \"het boek waar ik in bezig was\". Het Koreaans zet daarvoor -던 vóór het naamwoord. Het betekent: in het verleden, vaak herhaald of niet afgemaakt. Er zit vaak een gevoel van herinnering in.",
  pattern: [
    { l: "herinnering (stam)", v: "자주 가", c: 1 }, { l: "vroeger, herhaald", v: "던", c: 2, key: true },
    { l: "naamwoord", v: "식당", c: 3 }, { l: "rest van de zin", v: "이 문을 닫았어요", c: 4 }
  ],
  patternCap: "Stam + 던 + naamwoord (gewoonte of onafgemaakt in het verleden) · -았/었던 = afgerond en voorbij",
  rules: [
    "Stam + 던, met of zonder 받침: 가던, 먹던. Een ㄹ-stam houdt de ㄹ: 살던, 놀던.",
    "Werkwoord + 던: iets wat je vroeger vaak deed, of waar je mee bezig was en niet afmaakte. 먹던 빵 = brood waar ik van at; er is nog over.",
    "Bijvoeglijk werkwoord + 던 of 았/었던: hoe iets vroeger was. 조용하던 동네 en 조용했던 동네 betekenen bijna hetzelfde.",
    "-았/었던 = afgerond en voorbij, vaak één keer: 작년에 한 번 갔던 식당.",
    "Vaak samen met 자주, 매일, 예전에 of 어릴 때."
  ],
  pitfall: "Heb je iets helemaal op of uit? Zeg dan -(으)ㄴ: 다 먹은 빵. 제가 먹던 빵 betekent dat er nog brood over is.",
  examples: [
    { cn: "여기가 제가 자주 가던 식당이에요.", py: "Yeogiga jega jaju gadeon sikdangieyo.", nl: "Dit is het restaurant waar ik vroeger vaak heen ging." },
    { cn: "제가 먹던 빵 어디 있어요?", py: "Jega meokdeon ppang eodi isseoyo?", nl: "Waar is het brood waar ik van aan het eten was?" },
    { cn: "어릴 때 살던 동네에 다시 가 봤어요.", py: "Eoril ttae saldeon dongnee dasi ga bwasseoyo.", nl: "Ik ben teruggegaan naar de buurt waar ik als kind woonde." },
    { cn: "조용하던 거리가 지금은 아주 시끄러워요.", py: "Joyonghadeon georiga jigeumeun aju sikkeureowoyo.", nl: "De straat die vroeger rustig was, is nu erg lawaaierig." }
  ],
  nuance: [
    { h: "-던 of -(으)ㄴ?",
      p: "-(으)ㄴ bij een werkwoord betekent: het is gebeurd en afgerond. -던 betekent: het ging een tijd door, of het is niet af. 읽은 책 heb je uit. 읽던 책 was je aan het lezen; je bent er nog niet mee klaar.",
      ex: [
        { cn: "어제 읽은 책이 재미있었어요.", py: "Eoje ilgeun chaegi jaemiisseosseoyo.", nl: "Het boek dat ik gisteren las (uit), was leuk." },
        { cn: "읽던 책을 다시 읽기 시작했어요.", py: "Ikdeon chaegeul dasi ilgi sijakaesseoyo.", nl: "Ik ben weer begonnen in het boek waar ik in bezig was." }
      ] },
    { h: "-던 of -았/었던?",
      p: "-던 legt de nadruk op herhaling of iets wat nog niet af was: 자주 가던 식당. -았/었던 legt de nadruk op iets wat afgerond en voorbij is, vaak één keer: 작년에 한 번 갔던 식당. Bij bijvoeglijke werkwoorden is het verschil klein. -았/었던 klinkt dan iets verder weg.",
      ex: [
        { cn: "학생 때 매일 가던 카페가 없어졌어요.", py: "Haksaeng ttae maeil gadeon kapega eopseojyeosseoyo.", nl: "Het café waar ik als student elke dag kwam, is verdwenen." },
        { cn: "작년에 한 번 갔던 카페에 또 갔어요.", py: "Jangnyeone han beon gatdeon kapee tto gasseoyo.", nl: "Ik ging weer naar het café waar ik vorig jaar één keer was." }
      ] },
    { h: "In gesprek: 하던 일, 하던 이야기",
      p: "In spreektaal hoor je -던 vaak voor iets wat even onderbroken werd. 하던 일 is het werk waar je mee bezig was. 하던 이야기 is het verhaal dat je aan het vertellen was. In verhalen en liedjes geeft -던 een gevoel van heimwee.",
      ex: [
        { cn: "하던 일을 끝내고 갈게요.", py: "Hadeon ireul kkeunnaego galgeyo.", nl: "Ik maak het werk af waar ik mee bezig was, en dan kom ik." }
      ] }
  ],
  mistakes: [
    { wrong: "어제 다 읽던 책을 친구한테 빌려줬어요.", right: "어제 다 읽은 책을 친구한테 빌려줬어요.", why: "다 betekent dat het boek uit is. Iets afgerond is -(으)ㄴ, niet -던." },
    { wrong: "요즘 제가 자주 가던 카페예요.", right: "요즘 제가 자주 가는 카페예요.", why: "요즘 is nu. Een gewoonte van nu is -는; -던 is voor vroeger." },
    { wrong: "어릴 때 사던 동네에 가 봤어요.", right: "어릴 때 살던 동네에 가 봤어요.", why: "살다 houdt de ㄹ vóór 던. 사던 komt van 사다 (kopen)." },
    { wrong: "작년에 한 번 가던 식당이에요.", right: "작년에 한 번 갔던 식당이에요.", why: "Eén keer en afgerond: dan is het -았/었던, niet -던." }
  ],
  vocab: [
    ["-던", "-deon", "die/dat ... (vroeger, vaak of niet afgemaakt)"], ["고향", "gohyang", "geboorteplaats"],
    ["그대로", "geudaero", "zoals het was, onveranderd"], ["변하다", "byeonhada", "veranderen"], ["골목", "golmok", "steeg, straatje"],
    ["놀이터", "noriteo", "speeltuin"], ["주차장", "juchajang", "parkeerplaats"], ["주인", "juin", "eigenaar"],
    ["꼬마", "kkoma", "kleintje, klein kind"], ["노래방", "noraebang", "karaoke(zaal)"]
  ],
  dialogue: [
    ["A", "이 노래 알아요?", "I norae arayo?", "Ken je dit liedje?"],
    ["B", "그럼요. 고등학교 때 매일 듣던 노래예요.", "Geureomyo. Godeunghakgyo ttae maeil deutdeon noraeyeyo.", "Natuurlijk. Dat is het liedje dat ik op de middelbare school elke dag luisterde."],
    ["A", "저도요. 그때 자주 가던 노래방이 아직 있을까요?", "Jeodoyo. Geuttae jaju gadeon noraebangi ajik isseulkkayo?", "Ik ook. Zou de karaoke waar we toen vaak heen gingen er nog zijn?"],
    ["B", "아니요, 작년에 가 봤는데 없어졌어요.", "Aniyo, jangnyeone ga bwanneunde eopseojyeosseoyo.", "Nee, ik ben er vorig jaar geweest, maar hij is weg."],
    ["A", "아쉽네요. 그때 같이 다니던 친구들도 보고 싶어요.", "Aswimneyo. Geuttae gachi danideon chingudeuldo bogo sipeoyo.", "Jammer. Ik mis ook de vrienden met wie ik toen optrok."]
  ],
  reading: {
    title: "10년 만의 고향",
    lines: [
      { cn: "지난달에 10년 만에 고향에 내려갔다.", py: "Jinandare simnyeon mane gohyange naeryeogatda.", nl: "Vorige maand ging ik na tien jaar terug naar mijn geboorteplaats." },
      { cn: "어릴 때 살던 집은 그대로 있었지만 주변은 많이 변해 있었다.", py: "Eoril ttae saldeon jibeun geudaero isseotjiman jubyeoneun mani byeonhae isseotda.", nl: "Het huis waar ik als kind woonde, stond er nog, maar de omgeving was erg veranderd." },
      { cn: "조용하던 골목에는 큰 아파트가 생겼다.", py: "Joyonghadeon golmogeneun keun apateuga saenggyeotda.", nl: "In het straatje dat vroeger zo rustig was, stond nu een groot flatgebouw." },
      { cn: "친구들과 매일 놀던 놀이터도 주차장이 되어 있었다.", py: "Chingudeulgwa maeil noldeon noriteodo juchajangi doeeo isseotda.", nl: "Ook de speeltuin waar ik elke dag met vrienden speelde, was een parkeerplaats geworden." },
      { cn: "그래도 학교 앞에서 자주 사 먹던 떡볶이 가게는 아직 있었다.", py: "Geuraedo hakgyo apeseo jaju sa meokdeon tteokbokki gageneun ajik isseotda.", nl: "Toch was de tteokbokki-zaak bij school, waar ik vaak iets kocht, er nog." },
      { cn: "주인 할머니는 나를 보자마자 \"그때 그 꼬마구나!\" 하고 웃으셨다.", py: "Juin halmeonineun nareul bojamaja \"geuttae geu kkomaguna!\" hago useusyeotda.", nl: "Zodra de oude eigenares me zag, lachte ze: \"Dat is dat kleintje van toen!\"" },
      { cn: "떡볶이 맛은 예전에 먹던 맛 그대로였다.", py: "Tteokbokki maseun yejeone meokdeon mat geudaeroyeotda.", nl: "De tteokbokki smaakte precies zoals vroeger." },
      { cn: "다음에는 그때 같이 다니던 친구들과 함께 다시 오고 싶다.", py: "Daeumeneun geuttae gachi danideon chingudeulgwa hamkke dasi ogo sipda.", nl: "Volgende keer wil ik terugkomen met de vrienden met wie ik toen optrok." }
    ],
    questions: [
      { type: "mc", q: "Wat is er van de speeltuin geworden?",
        options: ["Een parkeerplaats.", "Een groot flatgebouw.", "Een tteokbokki-zaak.", "Hij is nog hetzelfde."], answer: 0,
        why: ["Goed: 놀이터도 주차장이 되어 있었다.", "Het flatgebouw staat in het straatje, niet op de speeltuin.", "De tteokbokki-zaak staat bij de school.", "De speeltuin is juist veranderd."] },
      { type: "mc", q: "Wat is NIET veranderd?",
        options: ["De smaak van de tteokbokki.", "Het straatje.", "De speeltuin.", "De hele omgeving."], answer: 0,
        why: ["Goed: 예전에 먹던 맛 그대로였다.", "In het straatje staat nu een flatgebouw.", "De speeltuin is een parkeerplaats geworden.", "주변은 많이 변해 있었다: de omgeving is erg veranderd."] },
      { type: "mc", q: "친구들과 매일 놀던 놀이터. Wat zegt -던 hier?",
        options: ["De schrijver speelde daar vroeger herhaaldelijk.", "De schrijver speelde daar maar één keer.", "De schrijver speelt daar nu nog elke dag.", "De schrijver wil daar later gaan spelen."], answer: 0,
        why: ["Goed: -던 = vroeger, vaak herhaald.", "Eén keer en afgerond zou eerder 놀았던 zijn.", "Een gewoonte van nu zou 노는 zijn.", "Iets voor later zou 놀 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "여기가 제가 어릴 때 ___ 동네예요. (살다)",
      options: ["살던", "사던", "살은", "살는"], answer: 0,
      why: ["Goed: de ㄹ blijft vóór 던.", "사던 komt van 사다 (kopen), niet van 살다.", "살은 bestaat niet; de ㄴ-vorm van 살다 is 산.", "살는 bestaat niet; vóór 는 valt de ㄹ weg (사는)."] },
    { type: "mc", q: "제가 ___ 커피 누가 버렸어요? (de koffie waar ik nog van aan het drinken was)",
      options: ["마시던", "마신", "마셨는", "마시더니"], answer: 0,
      why: ["Goed: niet afgemaakt in het verleden: 마시던.", "마신 betekent dat de koffie op is.", "마셨는 bestaat niet vóór een naamwoord.", "-더니 verbindt zinnen en staat niet vóór een naamwoord."] },
    { type: "mc", q: "이건 제가 읽던 책이에요. Wat betekent dit?",
      options: ["Dit is het boek waar ik in bezig was; ik heb het nog niet uit.", "Dit is het boek dat ik helemaal uitgelezen heb.", "Dit is het boek dat ik ga lezen.", "Dit is het boek dat ik nu lees, elke dag."], answer: 0,
      why: ["Goed: -던 = niet afgemaakt in het verleden.", "Uitgelezen zou 읽은 zijn.", "Iets voor later zou 읽을 zijn.", "Een gewoonte van nu zou 읽는 zijn."] },
    { type: "order", q: "Zet in de goede volgorde: \"Dit is het liedje dat ik vroeger vaak hoorde.\"",
      tokens: [["이건", "igeon"], ["제가 예전에", "jega yejeone"], ["자주 듣던", "jaju deutdeon"], ["노래예요", "noraeyeyo"]] },
    { type: "mc", q: "작년 여름에 한 번 ___ 바다가 생각나요. (Ik moet denken aan de zee waar ik vorige zomer één keer was.)",
      options: ["갔던", "가던", "가는", "갈"], answer: 0,
      why: ["Goed: één keer en afgerond: -았/었던.", "-던 past bij herhaling, niet bij 한 번.", "가는 is nu, niet vorige zomer.", "갈 kijkt naar de toekomst."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["어제 다 읽던 책을 돌려줬어요.", "고등학교 때 자주 가던 서점이 없어졌어요.", "아까 하던 이야기 계속해요.", "어릴 때 조용하던 동네가 많이 변했어요."], answer: 0,
      why: ["Goed: 다 = helemaal uit. Dan is het 읽은, niet 읽던.", "Dit klopt: een gewoonte van vroeger.", "Dit klopt: het verhaal was niet af.", "Dit klopt: hoe de buurt vroeger was."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik maak het werk af waar ik mee bezig was, en dan kom ik.\"",
      tokens: [["하던", "hadeon"], ["일을", "ireul"], ["끝내고", "kkeunnaego"], ["갈게요", "galgeyo"]] },
    { type: "fill", q: "학생 때 자주 가___ 카페에 오랜만에 갔어요. (Ik ging na lange tijd naar het café waar ik als student vaak kwam.)", answers: ["던"],
      hint: "Welke uitgang geeft een gewoonte in het verleden vóór een naamwoord?", why: "가 + 던 = 가던: vroeger, vaak herhaald." },
    { type: "mc", q: "요즘 제가 자주 ___ 카페예요. (Dit is het café waar ik tegenwoordig vaak kom.)",
      options: ["가는", "가던", "갔던", "갈"], answer: 0,
      why: ["Goed: een gewoonte van nu: -는.", "-던 is voor vroeger, niet voor 요즘.", "-았/었던 is afgerond en voorbij.", "갈 kijkt naar de toekomst."] },
    { type: "mc", q: "자주 가던 식당이 문을 닫았어요. Wat weet je over de spreker?",
      options: ["Hij ging er vroeger vaak heen.", "Hij is er maar één keer geweest.", "Hij wilde er altijd eens heen.", "Hij gaat er morgen heen."], answer: 0,
      why: ["Goed: 자주 + -던 = vroeger vaak.", "Eén keer zou 갔던 zijn, en 자주 betekent vaak.", "Een wens zou 가 보고 싶던 zijn.", "Iets voor later zou 갈 zijn."] },
    { type: "open", q: "Vertaal: \"Dit is de school waar ik vroeger heen ging.\"",
      model: ["여기가 제가 다니던 학교예요.", "이게 제가 예전에 다니던 학교예요.", "여기가 제가 어릴 때 다니던 학교예요."],
      tip: "Check: 다니 + 던 vóór 학교, want het ging een tijd door." },
    { type: "open", q: "Vertaal: \"Waar is het boek waar ik in bezig was?\"",
      model: ["제가 읽던 책 어디 있어요?", "제가 읽던 책이 어디에 있어요?"],
      tip: "Check: 읽던 (niet af), niet 읽은 (uit)." }
  ],
  review: [
    { type: "mc", q: "어릴 때 매일 ___ 공원에 다시 가 봤어요. (놀다)",
      options: ["놀던", "노던", "놀은", "놀는"], answer: 0,
      why: ["Goed: de ㄹ blijft vóór 던.", "Vóór 던 valt de ㄹ niet weg.", "놀은 bestaat niet; de ㄴ-vorm is 논.", "놀는 bestaat niet."] },
    { type: "mc", q: "제가 ___ 물이니까 버리지 마세요. (Het is water waar ik nog van aan het drinken was, dus gooi het niet weg.)",
      options: ["마시던", "마셨는", "마시더니", "마시는던"], answer: 0,
      why: ["Goed: niet afgemaakt: 마시던.", "마셨는 bestaat niet vóór een naamwoord.", "-더니 staat niet vóór een naamwoord.", "Er komt geen 는 vóór 던."] },
    { type: "mc", q: "대학교 때 한 번 ___ 영화를 다시 봤어요. (Ik zag de film opnieuw die ik als student één keer gezien had.)",
      options: ["봤던", "보던", "보는", "볼"], answer: 0,
      why: ["Goed: één keer en afgerond: -았/었던.", "-던 past bij herhaling of iets wat niet af was.", "보는 is nu, niet als student.", "볼 kijkt naar de toekomst."] }
  ]
})
