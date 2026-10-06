({
  id: "14", slug: "dorok", title: "-도록", sub: "Zodat, tot, en beleefd opdragen met -도록 하세요",
  canDo: "Je kunt nu zeggen met welk doel iemand iets moet doen (-도록), hoe ver iets gaat (밤늦도록), en beleefd advies geven met -도록 하세요. Je weet ook wanneer -게 of -(으)려고 past.",
  guess: {
    q: "\"Kleed je warm aan, zodat je niet verkouden wordt.\" Welke zin klopt, denk je?",
    options: ["감기에 걸리지 않도록 옷을 따뜻하게 입으세요.", "감기에 걸리지 않으려고 옷을 따뜻하게 입으세요.", "감기에 걸리도록 옷을 따뜻하게 입으세요.", "감기에 걸리지 않았도록 옷을 따뜻하게 입으세요."], answer: 0,
    why: ["Goed: -지 않도록 = zodat ... niet. Daarna mag een opdracht volgen.", "Na -(으)려고 komt geen opdracht zoals -(으)세요.", "Zonder -지 않 zeg je \"zodat je verkouden wordt\".", "Vóór -도록 komt geen verleden tijd."]
  },
  problem: "In het Nederlands zeg je \"zodat\": praat luid, zodat iedereen het hoort. In het Koreaans plak je -도록 achter het werkwoord. Het doel kan over een ander gaan, en er mag een opdracht na komen. -도록 kan ook \"tot\" betekenen (tot laat in de nacht), en met 하세요 is het een beleefde opdracht.",
  pattern: [
    { l: "doel", v: "늦지 않", c: 1 }, { l: "-도록", v: "도록", c: 2, key: true }, { l: "wat je doet / vraagt", v: "일찍 오세요", c: 4 }
  ],
  patternCap: "Stam + 도록 = zodat / tot · Stam + 지 않도록 = zodat ... niet · Stam + 도록 하세요 (beleefde opdracht) · -도록 하겠습니다 (ik zal ervoor zorgen)",
  rules: [
    "-도록 komt direct na de stam, met of zonder 받침: 가도록, 먹도록, 들을 수 있도록.",
    "Vóór -도록 staat geen verleden tijd: 늦지 않도록, nooit 늦지 않았도록.",
    "\"Zodat ... niet\": stam + 지 않도록. Dit hoor je heel vaak: 잊지 않도록, 넘어지지 않도록.",
    "Het doel kan bij een ander horen, en daarna mag een opdracht of verzoek staan: 아이가 잘 수 있도록 조용히 해 주세요.",
    "-도록 하세요 is een beleefde opdracht of advies (dokter, leraar). -도록 하겠습니다 is een formele belofte: \"ik zal ervoor zorgen\"."
  ],
  pitfall: "Na -(으)려고 komt geen opdracht. \"Kom vroeg, om niet te laat te zijn\" is 늦지 않도록 일찍 오세요, niet 늦지 않으려고 일찍 오세요.",
  examples: [
    { cn: "감기에 걸리지 않도록 옷을 따뜻하게 입으세요.", py: "Gamgie geolliji antorok oseul ttatteutage ibeuseyo.", nl: "Kleed je warm aan, zodat je niet verkouden wordt." },
    { cn: "뒤에 있는 사람도 잘 들을 수 있도록 크게 말해 주세요.", py: "Dwie inneun saramdo jal deureul su itdorok keuge malhae juseyo.", nl: "Spreek luid, zodat ook de mensen achteraan het goed kunnen horen." },
    { cn: "그는 밤늦도록 일했어요.", py: "Geuneun bamneutdorok ilhaesseoyo.", nl: "Hij werkte tot diep in de nacht." },
    { cn: "내일까지 서류를 내도록 하세요.", py: "Naeilkkaji seoryureul naedorok haseyo.", nl: "Lever de documenten uiterlijk morgen in." }
  ],
  nuance: [
    { h: "-도록 of -게?",
      p: "Voor \"zodat\" kun je ook -게 gebruiken. De betekenis is bijna gelijk. -게 klinkt gewoon en hoor je veel in gesprekken. -도록 klinkt formeler. Je ziet het in mededelingen, instructies en op bordjes.",
      ex: [
        { cn: "아이들이 볼 수 있게 크게 써 주세요.", py: "Aideuri bol su itge keuge sseo juseyo.", nl: "Schrijf het groot, zodat de kinderen het kunnen zien. (gewoon)" },
        { cn: "모든 분이 보실 수 있도록 크게 써 주십시오.", py: "Modeun buni bosil su itdorok keuge sseo jusipsio.", nl: "Schrijf het groot, zodat iedereen het kan zien. (formeel)" }
      ] },
    { h: "-도록 of -(으)려고?",
      p: "-(으)려고 is het eigen voornemen van het onderwerp. Het onderwerp is in beide delen hetzelfde, en er volgt geen opdracht. -도록 kan over een ander gaan en mag vóór een opdracht of verzoek staan.",
      ex: [
        { cn: "저는 살을 빼려고 매일 걸어요.", py: "Jeoneun sareul ppaeryeogo maeil georeoyo.", nl: "Ik loop elke dag om af te vallen." },
        { cn: "아기가 잘 수 있도록 조용히 해 주세요.", py: "Agiga jal su itdorok joyonghi hae juseyo.", nl: "Doe zachtjes, zodat de baby kan slapen." }
      ] },
    { h: "\"Tot\": hoe ver iets gaat",
      p: "-도록 kan ook een grens of graad aangeven: tot een bepaald moment of tot een gevolg. Vaste combinaties zijn 밤늦도록 (tot laat in de nacht) en 밤새도록 (de hele nacht door). Ook 목이 아프도록 (tot je keel pijn doet).",
      ex: [
        { cn: "친구들과 목이 아프도록 노래했어요.", py: "Chingudeulgwa mogi apeudorok noraehaesseoyo.", nl: "Ik zong met vrienden tot mijn keel pijn deed." }
      ] },
    { h: "Register: -도록 하세요 en -도록 하겠습니다",
      p: "Een dokter, leraar of baas geeft met -도록 하세요 een beleefde maar duidelijke opdracht. Tegen een meerdere klinkt het te sturend. Met -도록 하겠습니다 beloof je iets op je werk of in een formele situatie.",
      ex: [
        { cn: "하루에 물을 많이 마시도록 하세요.", py: "Harue mureul mani masidorok haseyo.", nl: "Drink elke dag veel water." },
        { cn: "앞으로 늦지 않도록 하겠습니다.", py: "Apeuro neutji antorok hagetseumnida.", nl: "Ik zal ervoor zorgen dat ik voortaan niet meer te laat kom." }
      ] }
  ],
  mistakes: [
    { wrong: "늦지 않으려고 일찍 오세요.", right: "늦지 않도록 일찍 오세요.", why: "Na -(으)려고 komt geen opdracht. Voor een doel + opdracht gebruik je -도록." },
    { wrong: "잊지 않았도록 메모하세요.", right: "잊지 않도록 메모하세요.", why: "Vóór -도록 staat geen verleden tijd." },
    { wrong: "감기에 걸리도록 조심하세요.", right: "감기에 걸리지 않도록 조심하세요.", why: "Je wilt níet verkouden worden. Dan heb je -지 않도록 nodig." },
    { wrong: "밤늦게도록 일했어요.", right: "밤늦도록 일했어요.", why: "-도록 komt na de stam (밤늦다 → 밤늦), niet na een bijwoord op -게." }
  ],
  vocab: [
    ["-도록", "-dorok", "zodat; tot"], ["조심하다", "josimhada", "voorzichtig zijn, oppassen"], ["서류", "seoryu", "documenten, papieren"],
    ["메모하다", "memohada", "noteren"], ["미끄럽다", "mikkeureopda", "glad zijn"], ["넘어지다", "neomeojida", "vallen, omvallen"],
    ["승객", "seunggaek", "passagier"], ["손잡이", "sonjabi", "handgreep, lus"], ["확인하다", "hwaginhada", "controleren"], ["비우다", "biuda", "leegmaken, vrijhouden"]
  ],
  dialogue: [
    ["A", "감기가 심하네요. 오늘은 푹 쉬도록 하세요.", "Gamgiga simhaneyo. Oneureun puk swidorok haseyo.", "U bent flink verkouden. Rust vandaag goed uit."],
    ["B", "네. 내일은 회사에 가도 돼요?", "Ne. Naeireun hoesae gado dwaeyo?", "Goed. Mag ik morgen naar mijn werk?"],
    ["A", "열이 내릴 때까지 집에 있도록 하세요.", "Yeori naeril ttaekkaji jibe itdorok haseyo.", "Blijf thuis tot de koorts gezakt is."],
    ["B", "알겠습니다. 약은 언제 먹어요?", "Algetseumnida. Yageun eonje meogeoyo?", "Begrepen. Wanneer neem ik het medicijn?"],
    ["A", "식사하고 삼십 분 후에 드세요. 잊지 않도록 휴대폰에 메모해 두세요.", "Siksahago samsip bun hue deuseyo. Itji antorok hyudaepone memohae duseyo.", "Een half uur na het eten. Zet het in je telefoon, zodat je het niet vergeet."],
    ["B", "네, 감사합니다.", "Ne, gamsahamnida.", "Goed, dank u wel."]
  ],
  reading: {
    title: "지하철 안내 방송",
    lines: [
      { cn: "승객 여러분께 안내 말씀 드리겠습니다.", py: "Seunggaek yeoreobunkke annae malsseum deurigetseumnida.", nl: "Beste reizigers, wij hebben een mededeling." },
      { cn: "오늘은 비가 와서 바닥이 미끄럽습니다.", py: "Oneureun biga waseo badagi mikkeureopseumnida.", nl: "Vandaag regent het, dus de vloer is glad." },
      { cn: "넘어지지 않도록 조심하시기 바랍니다.", py: "Neomeojiji antorok josimhasigi baramnida.", nl: "Wees voorzichtig, zodat u niet valt." },
      { cn: "열차가 흔들릴 수 있으니 손잡이를 꼭 잡도록 하십시오.", py: "Yeolchaga heundeullil su isseuni sonjabireul kkok japdorok hasipsio.", nl: "De trein kan schudden. Houd u daarom goed vast aan de lus." },
      { cn: "다른 승객들이 편하게 탈 수 있도록 가방은 앞으로 메 주십시오.", py: "Dareun seunggaekdeuri pyeonhage tal su itdorok gabangeun apeuro me jusipsio.", nl: "Draag uw rugzak voor u, zodat andere reizigers makkelijk kunnen instappen." },
      { cn: "어르신들이 앉으실 수 있도록 노약자석은 비워 두십시오.", py: "Eoreusindeuri anjeusil su itdorok noyakjaseogeun biwo dusipsio.", nl: "Houd de plaatsen voor ouderen vrij, zodat ouderen kunnen zitten." },
      { cn: "내리실 때는 물건을 두고 내리지 않도록 다시 한번 확인해 주십시오.", py: "Naerisil ttaeneun mulgeoneul dugo naeriji antorok dasi hanbeon hwaginhae jusipsio.", nl: "Controleer bij het uitstappen nog een keer of u niets laat liggen." },
      { cn: "오늘도 안전하고 편안한 하루 되십시오.", py: "Oneuldo anjeonhago pyeonanhan haru doesipsio.", nl: "Wij wensen u een veilige en prettige dag." }
    ],
    questions: [
      { type: "mc", q: "Waarom is de vloer glad?",
        options: ["Omdat het regent.", "Omdat de trein schudt.", "Omdat er net is schoongemaakt.", "Omdat er veel reizigers zijn."], answer: 0,
        why: ["Goed: 비가 와서 바닥이 미끄럽습니다.", "Het schudden is een reden om de lus vast te houden.", "Over schoonmaken staat niets in de tekst.", "Het aantal reizigers wordt niet genoemd."] },
      { type: "mc", q: "Wat moet je met je rugzak doen?",
        options: ["Hem voor je dragen.", "Hem op de vloer zetten.", "Hem op een stoel leggen.", "Hem goed vasthouden bij het uitstappen."], answer: 0,
        why: ["Goed: 가방은 앞으로 메 주십시오.", "Dat staat niet in de tekst.", "De stoelen voor ouderen moeten juist vrij blijven.", "Bij het uitstappen moet je controleren of je niets vergeet."] },
      { type: "mc", q: "넘어지지 않도록 조심하시기 바랍니다. Wat betekent 넘어지지 않도록?",
        options: ["Zodat u niet valt.", "Omdat u gevallen bent.", "Tot u valt.", "Om zelf te gaan vallen."], answer: 0,
        why: ["Goed: -지 않도록 = zodat ... niet.", "-도록 geeft een doel, geen reden uit het verleden.", "\"Tot\" past hier niet: niemand wil vallen.", "Er staat 않: het doel is juist níet vallen."] }
    ]
  },
  questions: [
    { type: "mc", q: "아이가 잘 수 ___ 조용히 해 주세요. (Doe zachtjes, zodat het kind kan slapen.)",
      options: ["있도록", "있으려고", "있었도록", "있도록서"], answer: 0,
      why: ["Goed: 있다 + -도록. Het doel hoort bij het kind, en er volgt een verzoek.", "-(으)려고 kan niet vóór een verzoek, en het kind is een ander onderwerp.", "Vóór -도록 staat geen verleden tijd.", "Na -도록 komt geen 서."] },
    { type: "mc", q: "그는 목이 아프도록 노래했어요. Wat betekent -도록 hier?",
      options: ["Hij zong tot zijn keel pijn deed.", "Hij zong, zodat zijn keel pijn zou doen.", "Hij zong omdat zijn keel pijn deed.", "Hij zong hoewel zijn keel pijn deed."], answer: 0,
      why: ["Goed: hier geeft -도록 een grens of graad aan: \"tot\".", "Niemand wil keelpijn. Hier is het geen doel, maar een grens.", "Een reden zou -아서 of -기 때문에 zijn.", "\"Hoewel\" zou -지만 of -는데도 zijn."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["늦지 않으려고 일찍 오세요.", "늦지 않도록 일찍 오세요.", "늦지 않게 일찍 오세요.", "저는 늦지 않으려고 일찍 출발했어요."], answer: 0,
      why: ["Goed: dit is fout. Na -(으)려고 komt geen opdracht zoals -(으)세요.", "Dit klopt: -도록 + opdracht.", "Dit klopt: -게 is de gewone spreektaalvorm.", "Dit klopt: eigen voornemen, geen opdracht."] },
    { type: "mc", q: "Een dokter zegt tegen een patiënt: \"Drink veel water.\"",
      options: ["물을 많이 마시도록 하세요.", "물을 많이 마시도록 해.", "물을 많이 마시도록 했어요.", "물을 많이 마시려고 하세요."], answer: 0,
      why: ["Goed: -도록 하세요 = beleefde opdracht of advies.", "해 is informeel. Een dokter spreekt een patiënt beleefd aan.", "했어요 vertelt wat er gebeurd is. Het is geen opdracht.", "-(으)려고 하다 is een voornemen, geen advies aan een ander."] },
    { type: "mc", q: "Je collega zegt: 다음부터는 미리 연락드리도록 하겠습니다. Wat doet hij?",
      options: ["Hij belooft beleefd dat hij voortaan vooraf contact opneemt.", "Hij vraagt jou voortaan vooraf contact op te nemen.", "Hij zegt dat hij al vooraf contact heeft opgenomen.", "Hij vraagt of hij contact mag opnemen."], answer: 0,
      why: ["Goed: -도록 하겠습니다 = ik zal ervoor zorgen (formele belofte).", "Een verzoek aan jou zou -도록 해 주세요 zijn.", "하겠습니다 gaat over de toekomst, niet over iets wat gebeurd is.", "Toestemming vragen is -아/어도 될까요?"] },
    { type: "mc", q: "잊어버리지 ___ 메모해 두세요. (Schrijf het op, zodat je het niet vergeet.)",
      options: ["않도록", "않았도록", "안도록", "않으도록"], answer: 0,
      why: ["Goed: -지 않도록 = zodat ... niet.", "Vóór -도록 staat geen verleden tijd.", "Na -지 hoort 않다, geschreven met ㄶ: 않도록.", "-도록 komt direct na de stam, zonder 으."] },
    { type: "order", q: "Zet in de goede volgorde: \"Schrijf het groot, zodat de kinderen het kunnen zien.\"",
      tokens: [["아이들이", "aideuri"], ["볼 수", "bol su"], ["있도록", "itdorok"], ["크게", "keuge"], ["써 주세요.", "sseo juseyo."]] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik zal ervoor zorgen dat ik voortaan niet te laat kom.\"",
      tokens: [["앞으로", "apeuro"], ["늦지", "neutji"], ["않도록", "antorok"], ["하겠습니다.", "hagetseumnida."]] },
    { type: "fill", q: "길이 미끄러우니까 넘어지지 않___ 조심하세요. (De weg is glad, dus pas op dat je niet valt.)", answers: ["도록", "게"],
      hint: "Welke uitgang betekent \"zodat\"?", why: "넘어지지 않도록 (formeler) of 넘어지지 않게 (gewoon) = zodat je niet valt." },
    { type: "mc", q: "Welke zin klinkt het meest formeel, bijvoorbeeld in een mededeling?",
      options: ["모든 분이 들으실 수 있도록 크게 말씀해 주십시오.", "다들 들을 수 있게 크게 말해 줘.", "다들 들을 수 있게 크게 말해 주세요.", "모든 분이 들으실 수 있도록 크게 말해 줘."], answer: 0,
      why: ["Goed: -도록, eerbiedige vormen en -십시오 maken dit formeel.", "-게 en 줘 zijn gewone, informele spreektaal.", "Beleefd, maar -게 klinkt gewoner dan -도록.", "-도록 en 들으실 zijn formeel, maar 줘 is informeel. Dat botst."] },
    { type: "open", q: "Vertaal: \"Doe zachtjes, zodat de baby kan slapen.\"", model: ["아기가 잘 수 있도록 조용히 해 주세요.", "아기가 잘 수 있게 조용히 해 주세요."],
      tip: "Check: 수 있도록 (of 있게) na het doel, en daarna een verzoek met -아/어 주세요." },
    { type: "open", q: "Vertaal als beleefde opdracht met -도록 하세요: \"Kom morgen om negen uur.\"", model: ["내일 아홉 시에 오도록 하세요.", "내일 아홉 시까지 오도록 하세요."],
      tip: "Check: stam 오 + 도록 하세요, en 아홉 시 met de Koreaanse telwoorden." }
  ],
  review: [
    { type: "mc", q: "\"Ik heb de wekker gezet, zodat ik me niet verslaap.\"",
      options: ["늦잠을 자지 않도록 알람을 맞췄어요.", "늦잠을 자지 않았도록 알람을 맞췄어요.", "늦잠을 자도록 알람을 맞췄어요.", "늦잠을 자지 않으도록 알람을 맞췄어요."], answer: 0,
      why: ["Goed: -지 않도록 = zodat ... niet.", "Vóór -도록 staat geen verleden tijd. Die zit in 맞췄어요.", "Zonder -지 않 zeg je \"zodat ik me verslaap\".", "-도록 komt direct na 않, zonder 으."] },
    { type: "mc", q: "Een leraar: 문법을 잊지 않도록 매일 복습___. (Herhaal elke dag, zodat je de grammatica niet vergeet.)",
      options: ["하도록 하세요", "하도록 했어요", "하려고 하세요", "했도록 하세요"], answer: 0,
      why: ["Goed: -도록 하세요 = beleefde opdracht van de leraar.", "했어요 vertelt wat er gebeurd is. Het is geen opdracht.", "-(으)려고 하다 is een voornemen, geen opdracht.", "Vóór -도록 staat geen verleden tijd."] },
    { type: "mc", q: "어제 친구와 밤새도록 이야기했어요. Wat betekent 밤새도록?",
      options: ["De hele nacht door.", "Zodat het nacht werd.", "Omdat het nacht was.", "Voordat het nacht werd."], answer: 0,
      why: ["Goed: -도록 = tot; 밤새도록 = tot de nacht voorbij is.", "Hier is -도록 geen doel, maar een grens.", "Een reden zou -아서 of -기 때문에 zijn.", "\"Voordat\" is -기 전에."] }
  ]
})
