({
  id: "11", slug: "sipsang", title: "-기 십상이다", sub: "Dan gebeurt het al gauw (en dat is niet goed)",
  canDo: "Je kunt nu waarschuwen dat iets ongewensts al gauw gebeurt in een bepaalde situatie, met -기 십상이다.",
  guess: {
    q: "그렇게 서두르면 실수하기 십상이에요. Wat bedoelt de spreker, denk je?",
    options: ["Als je je zo haast, maak je al gauw een fout.", "Als je je zo haast, maak je onmogelijk een fout.", "Als je je zo haast, is een fout makkelijk te herstellen.", "Als je je zo haast, wil je graag een fout maken."], answer: 0,
    why: [
      "Goed: -기 십상이다 betekent \"dat gebeurt al gauw\", en het gaat om iets ongewensts.",
      "\"Onmogelijk\" is -(으)ㄹ 리가 없다. 십상이다 zegt juist: de kans is groot.",
      "Er staat niets over herstellen. 실수하기 십상 = de fout gebeurt al gauw.",
      "Er staat niets over willen. Het gaat om een grote kans."
    ]
  },
  problem: "Je wilt iemand waarschuwen: \"Als je zo doorgaat, gaat het al gauw mis.\" In het Nederlands zeg je \"dan ... je al gauw\" of \"voor je het weet\". In het Koreaans zeg je -기 십상이다. Het betekent: in deze situatie is de kans groot dat er iets vervelends gebeurt.",
  pattern: [
    { l: "voorwaarde", v: "서두르면", c: 1 }, { l: "stam + 기", v: "실수하기", c: 4 },
    { l: "십상이다", v: "십상이에요", c: 2, key: true }
  ],
  patternCap: "(voorwaarde -(으)면 / -다가는) + stam + 기 십상이다 · 늦기 십상이다 · 잊기 십상이다 · 실수하기 십상이었다",
  rules: [
    "Stam + 기, na een klinker en na een 받침 gelijk: 가기, 먹기, 잊기. Er komt geen (으) bij.",
    "Je gebruikt het bijna altijd met werkwoorden, en de uitkomst is ongewenst: fouten, ziekte, spijt, te laat komen.",
    "Vaak staat er een voorwaarde vóór: -(으)면 of -다가는 (\"als je zo doorgaat\").",
    "Tijd en beleefdheid zet je op 이다: 십상이에요, 십상이야, 십상이었다. Vóór 기 komt geen verleden tijd.",
    "Register: in schrijftaal -기 십상이다. In spreektaal 십상이에요 of 십상이야, vaak als waarschuwing na -다가는."
  ],
  pitfall: "Gebruik 십상이다 niet voor iets goeds. 열심히 하면 성공하기 십상이다 klinkt fout. Voor een positief gevolg gebruik je -기 마련이다 of -(으)ㄹ 거예요.",
  examples: [
    { cn: "서두르면 실수하기 십상이에요.", py: "Seodureumyeon silsuhagi sipsang-ieyo.", nl: "Als je je haast, maak je al gauw een fout." },
    { cn: "우산 없이 나가면 비를 맞기 십상이다.", py: "Usan eopsi nagamyeon bireul matgi sipsang-ida.", nl: "Als je zonder paraplu naar buiten gaat, word je al gauw nat." },
    { cn: "아침을 거르면 점심에 과식하기 십상이다.", py: "Achimeul georeumyeon jeomsime gwasikagi sipsang-ida.", nl: "Als je het ontbijt overslaat, eet je 's middags al gauw te veel." },
    { cn: "그렇게 무리하다가는 병나기 십상이에요.", py: "Geureoke murihadaganeun byeongnagi sipsang-ieyo.", nl: "Als je je zo blijft overwerken, word je al gauw ziek." }
  ],
  nuance: [
    { h: "십상이다 of -기 쉽다?",
      p: "-기 쉽다 heeft twee betekenissen: \"makkelijk om te doen\" en \"de kans is groot\". -기 십상이다 heeft alleen de tweede betekenis, en dan altijd voor iets ongewensts. Het klinkt sterker en meer als een waarschuwing. Voor \"makkelijk te maken\" of \"makkelijk te lezen\" kun je 십상이다 dus nooit gebruiken.",
      ex: [
        { cn: "이 책은 읽기 쉬워요.", py: "I chaegeun ilgi swiwoyo.", nl: "Dit boek is makkelijk te lezen." },
        { cn: "밤에 운전하면 사고가 나기 십상이에요.", py: "Bame unjeonhamyeon sagoga nagi sipsang-ieyo.", nl: "Als je 's nachts rijdt, krijg je al gauw een ongeluk." }
      ] },
    { h: "십상이다 of -기 마련이다?",
      p: "-기 마련이다 (les 04) zegt: dit gebeurt nu eenmaal altijd, het is een natuurwet. Het gevolg kan goed of slecht zijn. -기 십상이다 gaat over een grote kans in een bepaalde situatie, en het gevolg is ongewenst. Daarom staat er bij 십상이다 bijna altijd een voorwaarde.",
      ex: [
        { cn: "사람은 누구나 실수하기 마련이다.", py: "Sarameun nuguna silsuhagi maryeonida.", nl: "Iedereen maakt nu eenmaal fouten." },
        { cn: "피곤할 때 운전하면 실수하기 십상이다.", py: "Pigonhal ttae unjeonhamyeon silsuhagi sipsang-ida.", nl: "Als je moe rijdt, maak je al gauw een fout." }
      ] },
    { h: "Spreektaal en schrijftaal",
      p: "In een gesprek waarschuw je vaak met -다가는 ... -기 십상이야. Dat klinkt direct en bezorgd. In schrijftaal, zoals adviesartikelen en columns, staat -기 십상이다. In formele teksten zie je ook het bijwoord 십중팔구: \"tien tegen een\".",
      ex: [
        { cn: "그렇게 놀다가는 시험에 떨어지기 십상이야.", py: "Geureoke noldaganeun siheome tteoreojigi sipsang-iya.", nl: "Als je zo blijft spelen, zak je al gauw voor je examen." },
        { cn: "준비 없이 창업하면 십중팔구 실패한다.", py: "Junbi eopsi chang-eopamyeon sipjungpalgu silpaehanda.", nl: "Wie zonder voorbereiding een bedrijf start, faalt tien tegen een." }
      ] }
  ],
  mistakes: [
    { wrong: "늦게 일어나면 지각할 십상이에요.", right: "늦게 일어나면 지각하기 십상이에요.", why: "Vóór 십상 staat altijd stam + 기, niet de (으)ㄹ-vorm." },
    { wrong: "매일 운동하면 건강해지기 십상이에요.", right: "매일 운동하면 건강해지기 마련이에요.", why: "Gezond worden is een goed gevolg. 십상이다 gebruik je alleen voor iets ongewensts." },
    { wrong: "이 문제는 풀기 십상이에요.", right: "이 문제는 풀기 쉬워요.", why: "Je bedoelt \"makkelijk op te lossen\". Die betekenis heeft alleen -기 쉽다." },
    { wrong: "어릴 때는 감기에 걸렸기 십상이었어요.", right: "어릴 때는 감기에 걸리기 십상이었어요.", why: "De verleden tijd staat op 이다 (십상이었어요), niet vóór 기." }
  ],
  vocab: [
    ["-기 십상이다", "-gi sipsang-ida", "dan gebeurt al gauw (iets ongewensts)"], ["서두르다", "seodureuda", "zich haasten"],
    ["거르다", "georeuda", "overslaan (een maaltijd)"], ["과식하다", "gwasikada", "te veel eten"],
    ["무리하다", "murihada", "zich overwerken, te veel van zichzelf vragen"], ["병나다", "byeongnada", "ziek worden"],
    ["십중팔구", "sipjungpalgu", "tien tegen een, vrijwel zeker"], ["할인 행사", "harin haengsa", "uitverkoop, kortingsactie"],
    ["후회하다", "huhoehada", "spijt hebben"], ["지출", "jichul", "uitgaven"]
  ],
  dialogue: [
    ["A", "내일 아침 일찍 출발해야 하는데, 오늘 밤에 영화 한 편만 더 볼까?", "Naeil achim iljjik chulbalhaeya haneunde, oneul bame yeonghwa han pyeonman deo bolkka?", "Ik moet morgen vroeg vertrekken, maar zal ik vanavond nog één film kijken?"],
    ["B", "그러다가는 늦잠 자기 십상이야.", "Geureodaganeun neutjam jagi sipsang-iya.", "Als je dat doet, verslaap je je al gauw."],
    ["A", "알람을 세 개나 맞춰 놓으면 괜찮지 않을까?", "Allameul se gaena matchwo noeumyeon gwaenchanchi aneulkka?", "Als ik wel drie wekkers zet, gaat het toch wel goed?"],
    ["B", "지난번에도 그렇게 말하고 비행기를 놓칠 뻔했잖아.", "Jinanbeonedo geureoke malhago bihaenggireul notchil ppeonhaetjana.", "Dat zei je de vorige keer ook, en toen miste je bijna je vliegtuig."],
    ["A", "맞다. 피곤하면 알람을 꺼 버리기 십상이지. 그냥 일찍 잘게.", "Matda. Pigonhamyeon allameul kkeo beorigi sipsang-iji. Geunyang iljjik jalge.", "Klopt. Als ik moe ben, zet ik de wekker al gauw uit. Ik ga gewoon vroeg slapen."]
  ],
  reading: {
    title: "충동구매를 피하는 방법",
    lines: [
      { cn: "할인 행사 기간에는 필요 없는 물건까지 사기 십상이다.", py: "Harin haengsa gigan-eneun piryo eomneun mulgeonkkaji sagi sipsang-ida.", nl: "Tijdens de uitverkoop koop je al gauw ook dingen die je niet nodig hebt." },
      { cn: "특히 배가 고플 때 장을 보면 음식을 너무 많이 사게 된다.", py: "Teuki baega gopeul ttae jang-eul bomyeon eumsigeul neomu mani sage doenda.", nl: "Vooral als je met honger boodschappen doet, koop je te veel eten." },
      { cn: "계획 없이 쇼핑을 하면 나중에 후회하기 십상이다.", py: "Gyehoek eopsi syoping-eul hamyeon najung-e huhoehagi sipsang-ida.", nl: "Als je zonder plan winkelt, krijg je later al gauw spijt." },
      { cn: "그래서 전문가들은 쇼핑 전에 목록을 만들라고 조언한다.", py: "Geuraeseo jeonmungadeureun syoping jeone mongnogeul mandeullago joeonhanda.", nl: "Daarom raden deskundigen aan om vóór het winkelen een lijstje te maken." },
      { cn: "또한 카드보다 현금을 쓰는 것이 좋다고 한다.", py: "Ttohan kadeuboda hyeongeumeul sseuneun geosi jotago handa.", nl: "Ook is het volgens hen beter om contant geld te gebruiken dan een kaart." },
      { cn: "카드를 쓰면 얼마를 썼는지 잊기 십상이기 때문이다.", py: "Kadeureul sseumyeon eolmareul sseonneunji itgi sipsang-igi ttaemunida.", nl: "Met een kaart vergeet je namelijk al gauw hoeveel je hebt uitgegeven." },
      { cn: "물론 처음부터 완벽하게 지키기는 어렵다.", py: "Mullon cheoeumbuteo wanbyeokage jikigineun eoryeopda.", nl: "Natuurlijk is het moeilijk om je er meteen perfect aan te houden." },
      { cn: "그러나 작은 습관부터 바꾸면 지출이 조금씩 줄어든다.", py: "Geureona jageun seupgwanbuteo bakkumyeon jichuri jogeumssik jureodeunda.", nl: "Maar als je bij kleine gewoontes begint, dalen je uitgaven beetje bij beetje." }
    ],
    questions: [
      { type: "mc", q: "Wat raden deskundigen aan om vóór het winkelen te doen?",
        options: ["Een lijstje maken.", "Eerst iets eten.", "Contant geld opnemen bij de bank.", "Op de uitverkoop wachten."], answer: 0,
        why: ["Goed: 쇼핑 전에 목록을 만들라고 조언한다.", "De tekst noemt honger, maar het advies is een lijstje.", "Contant geld wordt genoemd, maar niet opnemen bij de bank.", "De uitverkoop is juist het risico."] },
      { type: "mc", q: "Waarom is contant geld beter dan een kaart, volgens de tekst?",
        options: ["Met een kaart vergeet je al gauw hoeveel je uitgeeft.", "Met een kaart krijg je geen korting.", "Een kaart raak je al gauw kwijt.", "Contant geld is veiliger."], answer: 0,
        why: ["Goed: 얼마를 썼는지 잊기 십상이기 때문이다.", "Over korting met een kaart staat niets in de tekst.", "Het gaat niet om kwijtraken, maar om vergeten hoeveel je uitgeeft.", "Over veiligheid staat niets in de tekst."] },
      { type: "mc", q: "계획 없이 쇼핑을 하면 나중에 후회하기 십상이다. Wat betekent 후회하기 십상이다 hier?",
        options: ["Dan krijg je later al gauw spijt.", "Dan krijg je later onmogelijk spijt.", "Dan is spijt later makkelijk te vergeten.", "Dan heb je later nu eenmaal altijd spijt."], answer: 0,
        why: ["Goed: 십상이다 = grote kans op iets ongewensts.", "\"Onmogelijk\" is -(으)ㄹ 리가 없다.", "Dat zou -기 쉽다 in de betekenis \"makkelijk\" zijn, en het gaat niet over vergeten.", "\"Nu eenmaal altijd\" is -기 마련이다. 십상이다 zegt: de kans is groot."] }
    ]
  },
  questions: [
    { type: "mc", q: "늦게 자면 다음 날 지각하기 십상이에요. Wat betekent dit?",
      options: ["Als je laat slaapt, kom je de volgende dag al gauw te laat.", "Als je laat slaapt, kom je de volgende dag onmogelijk te laat.", "Als je laat slaapt, moet je de volgende dag te laat komen.", "Als je laat sliep, kwam je de volgende dag te laat."], answer: 0,
      why: ["Goed: -기 십상이다 = dat gebeurt al gauw, en het is ongewenst.", "\"Onmogelijk\" is -(으)ㄹ 리가 없다.", "\"Moeten\" is -아/어야 하다. 십상이다 gaat over kans.", "De zin is niet in de verleden tijd: 십상이에요, niet 십상이었어요."] },
    { type: "mc", q: "\"Als je zo snel rijdt, krijg je al gauw een ongeluk.\" Welke zin klopt?",
      options: ["그렇게 빨리 운전하면 사고가 나기 십상이에요.", "그렇게 빨리 운전하면 사고가 날 십상이에요.", "그렇게 빨리 운전하면 사고가 나는 십상이에요.", "그렇게 빨리 운전하면 사고가 나기 십상해요."], answer: 0,
      why: ["Goed: stam + 기 십상이다.", "Vóór 십상 staat -기, niet de (으)ㄹ-vorm.", "Vóór 십상 staat -기, niet -는.", "십상 is een zelfstandig naamwoord + 이다. Er bestaat geen 십상하다."] },
    { type: "mc", q: "Welke zin klinkt NIET natuurlijk?",
      options: ["열심히 연습하면 실력이 늘기 십상이다.", "연습을 안 하면 실력이 줄기 십상이다.", "열심히 연습하면 실력이 늘기 마련이다.", "열심히 연습하면 실력이 늘 거예요."], answer: 0,
      why: ["Goed: beter worden is een goed gevolg. Daarvoor gebruik je 십상이다 niet.", "Deze zin klopt: achteruitgaan is ongewenst, dus 십상이다 past.", "Deze zin klopt: 마련이다 kan ook bij een goed gevolg.", "Deze zin klopt: -(으)ㄹ 거예요 is een gewone voorspelling."] },
    { type: "mc", q: "이 요리는 ___. (Dit gerecht is makkelijk te maken.)",
      options: ["만들기 쉬워요", "만들기 십상이에요", "만들기 마련이에요", "만들 리가 없어요"], answer: 0,
      why: ["Goed: \"makkelijk om te doen\" is -기 쉽다.", "십상이다 betekent alleen \"grote kans op iets ongewensts\", niet \"makkelijk\".", "마련이다 betekent \"dat gebeurt nu eenmaal\", niet \"makkelijk\".", "리가 없다 betekent \"onmogelijk\"."] },
    { type: "mc", q: "\"Ieder mens wordt nu eenmaal ouder.\" Welke zin klopt?",
      options: ["사람은 누구나 늙기 마련이다.", "사람은 누구나 늙기 십상이다.", "사람은 누구나 늙을 마련이다.", "사람은 누구나 늙는 마련이다."], answer: 0,
      why: ["Goed: een natuurwet zonder voorwaarde is -기 마련이다.", "Ouder worden is zeker, geen kans in een bepaalde situatie. Dan past 십상이다 niet.", "Vóór 마련 staat -기, niet de (으)ㄹ-vorm.", "Vóór 마련 staat -기, niet -는."] },
    { type: "mc", q: "Welke zin past het best in een formeel artikel over gezondheid?",
      options: ["수면이 부족하면 집중력이 떨어지기 십상이다.", "잠 못 자면 집중 안 되기 십상이야.", "수면이 부족하면 집중력이 떨어지기 십상이잖아요.", "잠이 부족하면 집중력이 떨어지기 십상이지 뭐."], answer: 0,
      why: ["Goed: -기 십상이다 met de -다-vorm is schrijftaal.", "-야 en de korte vormen 못 자면, 안 되기 zijn losse spreektaal.", "-잖아요 (\"dat weet je toch\") hoort bij een gesprek.", "-지 뭐 is losse spreektaal."] },
    { type: "order", q: "Zet in de goede volgorde: \"Als je zonder paraplu naar buiten gaat, word je al gauw nat.\"",
      tokens: [["우산 없이 나가면", "usan eopsi nagamyeon"], ["비를", "bireul"], ["맞기", "matgi"], ["십상이에요", "sipsang-ieyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Als je te veel tegelijk doet, maak je al gauw fouten.\"",
      tokens: [["한꺼번에 너무 많은 일을", "hankkeobeone neomu maneun ireul"], ["하면", "hamyeon"], ["실수하기", "silsuhagi"], ["십상이다", "sipsang-ida"]] },
    { type: "fill", q: "밤늦게 커피를 마시면 잠을 못 ___ 십상이에요. (Als je 's avonds laat koffie drinkt, kun je al gauw niet slapen.)",
      answers: ["자기"], hint: "자다 = slapen. Welke vorm staat vóór 십상?",
      why: "Vóór 십상이다 staat stam + 기: 자다 wordt 자기." },
    { type: "mc", q: "\"Toen ik student was, versliep ik me al gauw.\" Welke zin klopt?",
      options: ["학생 때는 늦잠을 자기 십상이었어요.", "학생 때는 늦잠을 잤기 십상이에요.", "학생 때는 늦잠을 자기 십상했어요.", "학생 때는 늦잠을 잔 십상이었어요."], answer: 0,
      why: ["Goed: de verleden tijd staat op 이다: 십상이었어요.", "Vóór 기 komt geen verleden tijd. Zet die op 이다.", "Er bestaat geen 십상하다. Het is 십상 + 이다.", "Vóór 십상 staat -기, niet -ㄴ."] },
    { type: "open", q: "Vertaal: \"Als je zo laat vertrekt, mis je al gauw de trein.\"",
      model: ["이렇게 늦게 출발하면 기차를 놓치기 십상이에요.", "그렇게 늦게 떠나면 기차를 놓치기 십상이야.", "이렇게 늦게 나가면 기차를 놓치기 십상이다."],
      tip: "Check: staat er een voorwaarde met -(으)면, en gebruik je stam + 기 vóór 십상이다?" },
    { type: "open", q: "Je vriend werkt elke nacht door. Waarschuw hem in spreektaal met -다가는 en -기 십상이야.",
      model: ["그렇게 매일 밤새우다가는 병나기 십상이야.", "매일 밤늦게까지 일하다가는 쓰러지기 십상이야.", "그렇게 무리하다가는 건강을 잃기 십상이야."],
      tip: "Check: -다가는 staat na de stam, het gevolg is ongewenst, en je eindigt informeel met 십상이야." }
  ],
  review: [
    { type: "mc", q: "\"Als je moe bent, maak je al gauw fouten.\"",
      options: ["피곤하면 실수하기 십상이에요.", "피곤하면 실수할 십상이에요.", "피곤하면 실수하는 십상이에요.", "피곤하면 실수하기 십상해요."], answer: 0,
      why: ["Goed: stam + 기 십상이다.", "Vóór 십상 staat -기, niet de (으)ㄹ-vorm.", "Vóór 십상 staat -기, niet -는.", "Er bestaat geen 십상하다. Gebruik 십상이에요."] },
    { type: "mc", q: "\"Dit woord is makkelijk te onthouden.\"",
      options: ["이 단어는 외우기 쉬워요.", "이 단어는 외우기 십상이에요.", "이 단어는 외우기 마련이에요.", "이 단어는 외울 리가 없어요."], answer: 0,
      why: ["Goed: \"makkelijk om te doen\" is -기 쉽다.", "십상이다 betekent \"grote kans op iets ongewensts\", niet \"makkelijk\".", "마련이다 betekent \"dat gebeurt nu eenmaal\".", "리가 없다 betekent \"onmogelijk\"."] },
    { type: "mc", q: "친구에게 돈을 빌려주면 친구를 잃기 십상이다. Wat betekent dit?",
      options: ["Als je een vriend geld leent, verlies je al gauw die vriend.", "Als je een vriend geld leent, verlies je nu eenmaal altijd die vriend.", "Als je een vriend geld leent, verlies je die vriend onmogelijk.", "Als je een vriend geld leende, verloor je die vriend."], answer: 0,
      why: ["Goed: 십상이다 = grote kans op iets ongewensts.", "\"Nu eenmaal altijd\" is -기 마련이다. 십상이다 zegt: de kans is groot.", "\"Onmogelijk\" is -(으)ㄹ 리가 없다.", "De zin staat niet in de verleden tijd."] }
  ]
})
