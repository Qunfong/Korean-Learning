({
  id: "12", slug: "gyeom", title: "-(으)ㄹ 겸", sub: "Twee doelen tegelijk: ook om ...",
  canDo: "Je kunt nu zeggen dat je iets doet met twee (of meer) doelen tegelijk, met -(으)ㄹ 겸.",
  guess: {
    q: "운동도 할 겸 친구도 만날 겸 공원에 갔어요. Wat bedoelt de spreker, denk je?",
    options: ["Ik ging naar het park om te sporten en tegelijk een vriend te zien.", "Ik ging naar het park en zag daar toevallig een vriend.", "Ik ging naar het park nadat ik had gesport.", "Ik ging naar het park in plaats van te sporten."], answer: 0,
    why: [
      "Goed: -(으)ㄹ 겸 noemt een doel. Met twee keer 겸 heb je twee doelen tegelijk.",
      "Het zien van de vriend was een doel, geen toeval.",
      "겸 zegt niets over volgorde in de tijd. Het gaat om doelen.",
      "Sporten is juist een van de doelen, geen alternatief."
    ]
  },
  problem: "In het Nederlands zeg je: \"Ik ga naar de stad, ook om even een frisse neus te halen.\" Je hebt dan meer dan één reden. Met -(으)러 noem je maar één doel, en alleen bij gaan of komen. Met -(으)ㄹ 겸 zeg je: ik doe dit met meerdere doelen tegelijk.",
  pattern: [
    { l: "doel 1", v: "운동도 할", c: 4 }, { l: "겸", v: "겸", c: 2, key: true },
    { l: "doel 2", v: "친구도 만날 겸", c: 3 }, { l: "hoofdhandeling", v: "공원에 갔어요", c: 5 }
  ],
  patternCap: "Stam + (으)ㄹ 겸 (+ stam + (으)ㄹ 겸) + hoofdhandeling · 볼 겸 · 먹을 겸 · 놀 겸 · N 겸 N (아침 겸 점심)",
  rules: [
    "Na een klinker of ㄹ: -ㄹ 겸 (볼 겸, 놀 겸). Na een 받침: -을 겸 (먹을 겸, 읽을 겸).",
    "Vaak noem je twee doelen: A-(으)ㄹ 겸 B-(으)ㄹ 겸. Met 도 (\"ook\") erbij: 운동도 할 겸. Noem je er één, dan is er nog een andere reden.",
    "Vóór 겸 komt geen tijd: niet 갔을 겸. De tijd staat op de hoofdhandeling (갔어요, 가요, 갈 거예요).",
    "De hoofdhandeling mag elk werkwoord zijn: 갔어요, 봐요, 시작했어요. Bij -(으)러 mag dat alleen 가다, 오다 of 다니다 zijn.",
    "Met zelfstandige naamwoorden: N 겸 N = \"N en tegelijk N\": 아침 겸 점심 (brunch), 거실 겸 서재."
  ],
  pitfall: "Vóór 겸 staat altijd de (으)ㄹ-vorm, ook als het over het verleden gaat. Dus 볼 겸 갔어요, niet 봤을 겸 of 보는 겸.",
  examples: [
    { cn: "운동도 할 겸 친구도 만날 겸 공원에 갔어요.", py: "Undongdo hal gyeom chingudo mannal gyeom gong-wone gasseoyo.", nl: "Ik ging naar het park om te sporten en tegelijk een vriend te zien." },
    { cn: "바람도 쐴 겸 잠깐 밖에 나갔다 올게요.", py: "Baramdo ssoel gyeom jamkkan bakke nagatda olgeyo.", nl: "Ik ga even naar buiten, ook om een frisse neus te halen." },
    { cn: "듣기 연습도 할 겸 한국 드라마를 자막 없이 봐요.", py: "Deutgi yeonseupdo hal gyeom han-guk deuramareul jamak eopsi bwayo.", nl: "Ik kijk Koreaanse drama's zonder ondertitels, ook om luisteren te oefenen." },
    { cn: "우리는 아침 겸 점심으로 샌드위치를 먹었다.", py: "Urineun achim gyeom jeomsimeuro saendeuwichireul meogeotda.", nl: "We aten een sandwich als ontbijt en lunch tegelijk." }
  ],
  nuance: [
    { h: "겸 of -(으)러?",
      p: "-(으)러 noemt één doel, en daarna komt altijd 가다, 오다 of 다니다. -(으)ㄹ 겸 kan bij elk werkwoord staan. Het zegt ook: dit is niet mijn enige reden. Heb je maar één doel en ga je ergens heen? Dan is -(으)러 het gewoonst.",
      ex: [
        { cn: "책을 빌리러 도서관에 갔어요.", py: "Chaegeul billireo doseogwane gasseoyo.", nl: "Ik ging naar de bibliotheek om een boek te lenen." },
        { cn: "책도 빌릴 겸 공부도 할 겸 도서관에 갔어요.", py: "Chaekdo billil gyeom gongbudo hal gyeom doseogwane gasseoyo.", nl: "Ik ging naar de bibliotheek om een boek te lenen en tegelijk te studeren." }
      ] },
    { h: "겸 of -는 김에?",
      p: "Bij -는 김에 doe je A al, en je grijpt de kans om ook B te doen. B was niet gepland. Bij -(으)ㄹ 겸 had je beide doelen al vooraf. Let ook op de rol: bij 김에 is A de handeling die al gebeurt. Bij 겸 zijn A en B de doelen van de hoofdhandeling.",
      ex: [
        { cn: "시장에 가는 김에 우유도 사 올게요.", py: "Sijang-e ganeun gime uyudo sa olgeyo.", nl: "Nu ik toch naar de markt ga, neem ik ook melk mee." },
        { cn: "장도 볼 겸 산책도 할 겸 시장까지 걸어갔어요.", py: "Jangdo bol gyeom sanchaekdo hal gyeom sijangkkaji georeogasseoyo.", nl: "Ik liep naar de markt om boodschappen te doen en tegelijk te wandelen." }
      ] },
    { h: "Spreektaal en schrijftaal",
      p: "-(으)ㄹ 겸 hoor je vooral in gesprekken. In spreektaal zeg je ook kort 겸사겸사: \"om meerdere redenen tegelijk\". In formele schrijftaal zie je N을/를 겸하여 of N을/를 겸한 N, bijvoorbeeld in verslagen. N 겸 N staat ook in functietitels: 사장 겸 디자이너.",
      ex: [
        { cn: "그냥 겸사겸사 들렀어.", py: "Geunyang gyeomsagyeomsa deulleosseo.", nl: "Ik kwam gewoon langs, om een paar redenen tegelijk." },
        { cn: "대표단은 시장 조사를 겸하여 현지 공장을 방문하였다.", py: "Daepyodaneun sijang josareul gyeomhayeo hyeonji gongjang-eul banmunhayeotda.", nl: "De delegatie bezocht de fabriek ter plaatse, tegelijk als marktonderzoek." }
      ] }
  ],
  mistakes: [
    { wrong: "친구도 만나는 겸 서울에 갔어요.", right: "친구도 만날 겸 서울에 갔어요.", why: "Vóór 겸 staat altijd de (으)ㄹ-vorm, niet -는." },
    { wrong: "영화도 봤을 겸 시내에 나갔어요.", right: "영화도 볼 겸 시내에 나갔어요.", why: "Vóór 겸 komt geen verleden tijd. De tijd staat op 나갔어요." },
    { wrong: "한국어 연습도 하러 드라마를 봐요.", right: "한국어 연습도 할 겸 드라마를 봐요.", why: "-(으)러 kan alleen vóór 가다, 오다 of 다니다. Bij 보다 gebruik je 겸." },
    { wrong: "편의점에 갈 겸 우유 좀 사다 줘.", right: "편의점에 가는 김에 우유 좀 사다 줘.", why: "Je vriend gaat al naar de winkel en je vraagt hem iets extra's te doen. Dat is -는 김에." }
  ],
  vocab: [
    ["-(으)ㄹ 겸", "-(eu)l gyeom", "ook om ..., met als doel tegelijk"], ["바람을 쐬다", "barameul ssoeda", "een frisse neus halen"],
    ["자막", "jamak", "ondertiteling"], ["겸사겸사", "gyeomsagyeomsa", "om meerdere redenen tegelijk (spreektaal)"],
    ["민박", "minbak", "pension, logeren bij mensen thuis"], ["챙기다", "chaenggida", "zorgen voor, letten op"],
    ["올레길", "ollegil", "wandelpad (op Jeju)"], ["사투리", "saturi", "dialect"],
    ["상인", "sangin", "handelaar, marktkoopman"], ["익숙해지다", "iksukaejida", "wennen aan"]
  ],
  dialogue: [
    ["A", "주말에 뭐 했어요?", "Jumare mwo haesseoyo?", "Wat heb je dit weekend gedaan?"],
    ["B", "머리도 식힐 겸 등산을 다녀왔어요.", "Meorido sikil gyeom deungsaneul danyeowasseoyo.", "Ik ben de bergen in geweest, ook om mijn hoofd leeg te maken."],
    ["A", "혼자 갔어요?", "Honja gasseoyo?", "Ging je alleen?"],
    ["B", "아니요, 오랜만에 얼굴도 볼 겸 대학 동기랑 같이 갔어요.", "Aniyo, oraenmane eolguldo bol gyeom daehak donggirang gachi gasseoyo.", "Nee, ik ging met een studiegenoot, ook om elkaar na lange tijd weer te zien."],
    ["A", "좋네요. 저도 다음에 운동도 할 겸 같이 가고 싶어요.", "Jonneyo. Jeodo daeume undongdo hal gyeom gachi gago sipeoyo.", "Leuk. De volgende keer wil ik ook mee, ook om te sporten."],
    ["B", "그래요. 겸사겸사 맛집도 들러요.", "Geuraeyo. Gyeomsagyeomsa matjipdo deulleoyo.", "Goed. Dan gaan we meteen ook langs een goed restaurant."]
  ],
  reading: {
    title: "제주도에서 보낸 일주일",
    lines: [
      { cn: "지난달에 나는 휴가도 즐길 겸 사진 공부도 할 겸 제주도에 갔다.", py: "Jinandare naneun hyugado jeulgil gyeom sajin gongbudo hal gyeom jejudoe gatda.", nl: "Vorige maand ging ik naar Jeju, om van mijn vakantie te genieten en tegelijk fotografie te leren." },
      { cn: "비행기 대신 배를 탄 것은 바다를 직접 보고 싶었기 때문이다.", py: "Bihaenggi daesin baereul tan geoseun badareul jikjeop bogo sipeotgi ttaemunida.", nl: "Ik nam de boot in plaats van het vliegtuig, omdat ik de zee met eigen ogen wilde zien." },
      { cn: "숙소는 작은 민박이었는데, 주인 할머니가 아침 겸 점심을 차려 주셨다.", py: "Suksoneun jageun minbagieonneunde, juin halmeoniga achim gyeom jeomsimeul charyeo jusyeotda.", nl: "Ik logeerde in een klein pension, en de oude eigenares maakte een brunch voor me klaar." },
      { cn: "오후에는 건강도 챙길 겸 올레길을 걸었다.", py: "Ohueneun geon-gangdo chaenggil gyeom ollegireul georeotda.", nl: "'s Middags liep ik over een wandelpad, ook om aan mijn gezondheid te werken." },
      { cn: "걷다가 마음에 드는 풍경이 보이면 멈춰서 사진을 찍었다.", py: "Geotdaga ma-eume deuneun punggyeong-i boimyeon meomchwoseo sajineul jjigeotda.", nl: "Als ik onderweg een mooi uitzicht zag, stopte ik en maakte ik foto's." },
      { cn: "저녁에는 사투리도 배울 겸 시장 상인들과 이야기를 나누었다.", py: "Jeonyeogeneun saturido baeul gyeom sijang sangindeulgwa iyagireul nanueotda.", nl: "'s Avonds praatte ik met de marktkooplui, ook om het dialect te leren." },
      { cn: "처음에는 거의 알아듣지 못했지만 며칠 지나자 조금씩 익숙해졌다.", py: "Cheoeumeneun geoui aradeutji mothaetjiman myeochil jinaja jogeumssik iksukaejyeotda.", nl: "Eerst verstond ik bijna niets, maar na een paar dagen wende ik er langzaam aan." },
      { cn: "쉬려고 떠난 여행이었는데 배운 것이 훨씬 더 많았다.", py: "Swiryeogo tteonan yeohaeng-ieonneunde baeun geosi hwolssin deo manatda.", nl: "Ik was op reis gegaan om uit te rusten, maar ik heb er veel meer geleerd." }
    ],
    questions: [
      { type: "mc", q: "Waarom nam de schrijver de boot?",
        options: ["Hij wilde de zee met eigen ogen zien.", "Het vliegtuig was te duur.", "Hij wilde foto's maken van de haven.", "Er was geen vliegtuig meer."], answer: 0,
        why: ["Goed: 바다를 직접 보고 싶었기 때문이다.", "Over de prijs staat niets in de tekst.", "Foto's maakte hij op het wandelpad.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "Wat deed de schrijver 's avonds?",
        options: ["Hij praatte met marktkooplui.", "Hij liep over een wandelpad.", "Hij at brunch in het pension.", "Hij maakte foto's van de zee."], answer: 0,
        why: ["Goed: 저녁에는 ... 시장 상인들과 이야기를 나누었다.", "Dat deed hij 's middags.", "De brunch kreeg hij in het pension, niet 's avonds.", "Foto's maakte hij tijdens het wandelen."] },
      { type: "mc", q: "오후에는 건강도 챙길 겸 올레길을 걸었다. Wat zegt 건강도 챙길 겸 hier?",
        options: ["Gezondheid was een van zijn doelen bij het wandelen.", "Hij wandelde, en daardoor werd hij toevallig gezonder.", "Hij wandelde alleen voor zijn gezondheid.", "Hij wandelde nadat hij voor zijn gezondheid had gezorgd."], answer: 0,
        why: ["Goed: 겸 + 도 = ook met dit doel. Er waren nog andere redenen (foto's maken).", "겸 noemt een doel vooraf, geen toevallig gevolg.", "Door 도 en 겸 is gezondheid niet het enige doel.", "겸 zegt niets over volgorde in de tijd."] }
    ]
  },
  questions: [
    { type: "mc", q: "장도 볼 겸 산책도 할 겸 시장까지 걸어갔어요. Wat betekent dit?",
      options: ["Ik liep naar de markt om boodschappen te doen en tegelijk te wandelen.", "Ik liep naar de markt, en omdat ik er toch was, deed ik ook boodschappen.", "Ik liep naar de markt nadat ik boodschappen had gedaan.", "Ik liep naar de markt, maar ik deed er geen boodschappen."], answer: 0,
      why: ["Goed: twee keer 겸 = twee doelen die je vooraf had.", "\"Omdat ik er toch was\" is -는 김에. Bij 겸 waren beide doelen gepland.", "겸 zegt niets over volgorde in de tijd.", "Boodschappen doen was juist een van de doelen."] },
    { type: "mc", q: "\"Ik ging naar een café, ook om te lezen.\" Welke zin klopt?",
      options: ["책도 읽을 겸 카페에 갔어요.", "책도 읽는 겸 카페에 갔어요.", "책도 읽었을 겸 카페에 갔어요.", "책도 읽기 겸 카페에 갔어요."], answer: 0,
      why: ["Goed: 읽다 heeft een 받침, dus 읽을 겸.", "Vóór 겸 staat de (으)ㄹ-vorm, niet -는.", "Vóór 겸 komt geen verleden tijd. De tijd staat op 갔어요.", "Vóór 겸 staat de (으)ㄹ-vorm, niet -기."] },
    { type: "mc", q: "친구랑 ___ 겸 공부도 할 겸 친구 집에 갔어요. (놀다 = spelen, plezier hebben)",
      options: ["놀", "놀을", "노는", "놀았을"], answer: 0,
      why: ["Goed: een stam op ㄹ krijgt alleen ㄹ: 놀 겸.", "Een stam op ㄹ krijgt geen extra 을.", "Vóór 겸 staat de (으)ㄹ-vorm, niet -는.", "Vóór 겸 komt geen verleden tijd."] },
    { type: "mc", q: "\"Ik lees elke dag de krant, ook om Koreaans te oefenen.\" Welke zin klopt?",
      options: ["한국어 공부도 할 겸 매일 신문을 읽어요.", "한국어 공부도 하러 매일 신문을 읽어요.", "한국어 공부도 했을 겸 매일 신문을 읽어요.", "한국어 공부도 하는 겸 매일 신문을 읽어요."], answer: 0,
      why: ["Goed: 겸 kan bij elk hoofdwerkwoord staan, ook bij 읽다.", "-(으)러 kan alleen vóór 가다, 오다 of 다니다, niet vóór 읽다.", "Vóór 겸 komt geen verleden tijd.", "Vóór 겸 staat de (으)ㄹ-vorm, niet -는."] },
    { type: "mc", q: "Je vriend gaat al naar de supermarkt. Je zegt: \"Nu je toch gaat, neem even melk mee.\"",
      options: ["마트에 가는 김에 우유 좀 사 와.", "마트에 갈 겸 우유 좀 사 와.", "마트에 가러 우유 좀 사 와.", "마트에 간 겸 우유 좀 사 와."], answer: 0,
      why: ["Goed: hij gaat al, en jij vraagt iets extra's. Dat is -는 김에.", "겸 noemt de doelen van één handeling. Hier is de melk een extra klusje bij iets wat al gebeurt.", "-(으)러 noemt het doel vóór 가다. Hier staat het op de verkeerde plek.", "Vóór 겸 staat de (으)ㄹ-vorm, en de betekenis vraagt toch 김에."] },
    { type: "mc", q: "\"Deze kamer is woonkamer en tegelijk studeerkamer.\" Welke zin klopt?",
      options: ["이 방은 거실 겸 서재예요.", "이 방은 거실일 겸 서재예요.", "이 방은 거실 김에 서재예요.", "이 방은 거실 겸 서재 겸이에요."], answer: 0,
      why: ["Goed: bij zelfstandige naamwoorden is het N 겸 N.", "Bij twee zelfstandige naamwoorden komt 겸 direct na het eerste, zonder 이다.", "김에 staat na een werkwoord (-는 김에), niet na een zelfstandig naamwoord.", "Bij N 겸 N staat 겸 maar één keer, in het midden."] },
    { type: "mc", q: "Welke zin past het best in een formeel bedrijfsverslag?",
      options: ["대표단은 시장 조사를 겸하여 현지 공장을 방문하였다.", "대표단은 겸사겸사 현지 공장에 들렀대.", "대표단은 시장 조사도 할 겸 현지 공장에 갔잖아요.", "대표단은 시장 조사도 할 겸 현지 공장에 갔어."], answer: 0,
      why: ["Goed: N을/를 겸하여 met -였다 is formele schrijftaal.", "겸사겸사 en -대 zijn spreektaal.", "-잖아요 (\"dat weet je toch\") hoort bij een gesprek.", "Het informele -어 past niet in een verslag."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik ging naar buiten, ook om een frisse neus te halen.\"",
      tokens: [["바람도", "baramdo"], ["쐴", "ssoel"], ["겸", "gyeom"], ["밖에 나갔어요", "bakke nagasseoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik kijk Koreaanse drama's zonder ondertitels, ook om luisteren te oefenen.\"",
      tokens: [["듣기 연습도", "deutgi yeonseupdo"], ["할", "hal"], ["겸", "gyeom"], ["한국 드라마를 자막 없이 봐요", "han-guk deuramareul jamak eopsi bwayo"]] },
    { type: "fill", q: "점심도 ___ 겸 친구를 만났어요. (Ik heb een vriend ontmoet, ook om samen te lunchen.)",
      answers: ["먹을"], hint: "먹다 = eten. Let op het 받침.",
      why: "먹다 heeft een 받침, dus -을 겸: 먹을 겸. De verleden tijd staat op 만났어요." },
    { type: "open", q: "Vertaal: \"Ik ben naar de bibliotheek gegaan om boeken te lenen en tegelijk te studeren.\"",
      model: ["책도 빌릴 겸 공부도 할 겸 도서관에 갔어요.", "책도 빌리고 공부도 할 겸 도서관에 갔어요.", "공부도 할 겸 책도 빌릴 겸 도서관에 갔다."],
      tip: "Check: staat vóór 겸 de (으)ㄹ-vorm zonder verleden tijd, en staat de verleden tijd op 갔어요?" },
    { type: "open", q: "Waarom ga je naar Korea? Noem twee doelen in één zin met -(으)ㄹ 겸 ... -(으)ㄹ 겸.",
      model: ["친구도 만날 겸 한국 음식도 먹을 겸 한국에 가요.", "한국어도 연습할 겸 여행도 할 겸 한국에 갈 거예요."],
      tip: "Check: 받침 of niet (만날, 먹을), 도 bij elk doel, en de tijd alleen op het laatste werkwoord." }
  ],
  review: [
    { type: "mc", q: "\"Ik ben naar het park gegaan, ook om te sporten.\"",
      options: ["운동도 할 겸 공원에 갔어요.", "운동도 하는 겸 공원에 갔어요.", "운동도 했을 겸 공원에 갔어요.", "운동도 하기 겸 공원에 갔어요."], answer: 0,
      why: ["Goed: stam + (으)ㄹ 겸, de tijd op 갔어요.", "Vóór 겸 staat de (으)ㄹ-vorm, niet -는.", "Vóór 겸 komt geen verleden tijd.", "Vóór 겸 staat de (으)ㄹ-vorm, niet -기."] },
    { type: "mc", q: "\"Nu je toch opstaat, doe even het raam dicht.\"",
      options: ["일어나는 김에 창문 좀 닫아 줘.", "일어날 겸 창문 좀 닫아 줘.", "일어나러 창문 좀 닫아 줘.", "일어난 겸 창문 좀 닫아 줘."], answer: 0,
      why: ["Goed: de ander staat al op, en jij vraagt iets extra's. Dat is -는 김에.", "겸 noemt geplande doelen van één handeling, geen extra klusje bij iets wat al gebeurt.", "-(으)러 kan alleen vóór 가다, 오다 of 다니다.", "Vóór 겸 staat de (으)ㄹ-vorm, en de betekenis vraagt 김에."] },
    { type: "mc", q: "그 사람은 가수 겸 배우예요. Wat betekent dit?",
      options: ["Hij is zanger en tegelijk acteur.", "Hij is zanger en wil acteur worden.", "Hij was eerst zanger en is nu acteur.", "Hij is zanger in plaats van acteur."], answer: 0,
      why: ["Goed: N 겸 N = beide tegelijk.", "Over willen staat niets in de zin.", "겸 zegt niets over volgorde: beide gelden nu.", "겸 betekent \"en tegelijk\", niet \"in plaats van\"."] }
  ]
})
