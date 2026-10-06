({
  id: "13", slug: "cheok", title: "-(으)ㄴ/는 척하다", sub: "Doen alsof",
  canDo: "Je kunt nu zeggen dat iemand bewust doet alsof, in heden en verleden, met -(으)ㄴ/는 척하다.",
  guess: {
    q: "엄마가 방에 들어오자 동생은 자는 척했어요. Wat deed het broertje, denk je?",
    options: ["Hij deed alsof hij sliep.", "Hij sliep echt.", "Hij wilde gaan slapen.", "Hij leek te slapen, zonder het zo te bedoelen."], answer: 0,
    why: [
      "Goed: -는 척하다 betekent \"doen alsof\". Hij sliep dus niet echt.",
      "척 zegt juist dat het niet echt is.",
      "\"Willen\" is -고 싶다. 척하다 gaat over doen alsof.",
      "척하다 is bewust toneelspel. Een indruk zonder opzet is -는 것처럼 보이다."
    ]
  },
  problem: "In het Nederlands zeg je: \"Hij deed alsof hij me niet zag.\" Het is toneelspel: iemand laat bewust iets zien wat niet waar is. In het Koreaans zeg je -(으)ㄴ/는 척하다. De vorm vóór 척 laat zien of het om nu, het verleden of een eigenschap gaat.",
  pattern: [
    { l: "wie", v: "그는", c: 1 }, { l: "wat", v: "내 말을", c: 3 },
    { l: "bijzin-vorm", v: "못 들은", c: 4 }, { l: "척하다", v: "척했다", c: 2, key: true }
  ],
  patternCap: "Werkwoord -는 척하다 (nu) · -(으)ㄴ 척하다 (verleden) · bijv. werkwoord -(으)ㄴ 척하다 · N인 척하다 · ook -(으)ㄴ/는 체하다",
  rules: [
    "Werkwoord, nu bezig: -는 척하다 (자는 척, 모르는 척). Werkwoord, al gebeurd: -(으)ㄴ 척하다 (본 척, 들은 척, 먹은 척).",
    "Bijvoeglijk werkwoord: -(으)ㄴ 척하다 (아픈 척, 괜찮은 척, 바쁜 척). Met 있다/없다: -는 척 (돈 있는 척, 멋있는 척).",
    "Zelfstandig naamwoord: N인 척하다 (학생인 척, 의사인 척).",
    "Ontkenning binnen het toneelspel: 못 본 척하다 (doen alsof je het niet zag). Ontkenning van het toneelspel: 아픈 척하지 마.",
    "척하다 schrijf je aan elkaar. Je hoort ook 척을 하다, en 척도 안 하다 (\"doet niet eens alsof\"). In spreektaal kan 하다 wegvallen: 모르는 척 지나갔다."
  ],
  pitfall: "Let op de tijd vóór 척. 보는 척했다 = hij deed alsof hij aan het kijken was. 본 척했다 = hij deed alsof hij het al gezien had. De tijd van het toneelspel zelf staat op 하다.",
  examples: [
    { cn: "엄마가 방에 들어오자 동생은 자는 척했어요.", py: "Eommaga bang-e deureooja dongsaeng-eun janeun cheokaesseoyo.", nl: "Toen mama de kamer binnenkwam, deed mijn broertje alsof hij sliep." },
    { cn: "그는 내 말을 못 들은 척했다.", py: "Geuneun nae mareul mot deureun cheokaetda.", nl: "Hij deed alsof hij me niet had gehoord." },
    { cn: "피곤했지만 친구 앞에서는 괜찮은 척했어요.", py: "Pigonhaetjiman chingu apeseoneun gwaenchaneun cheokaesseoyo.", nl: "Ik was moe, maar bij mijn vriend deed ik alsof het goed ging." },
    { cn: "모르면서 아는 척하지 마세요.", py: "Moreumyeonseo aneun cheokaji maseyo.", nl: "Doe niet alsof je het weet, als je het niet weet." }
  ],
  nuance: [
    { h: "척하다 of 체하다?",
      p: "-(으)ㄴ/는 체하다 betekent precies hetzelfde en heeft dezelfde vormen. In het dagelijks leven hoor je vooral 척하다. 체하다 klinkt iets ouder en formeler, en je ziet het vaker in boeken. Een vaste uitdrukking met 체 is 본체만체하다: doen alsof je iemand niet ziet.",
      ex: [
        { cn: "그는 아무것도 모르는 체했다.", py: "Geuneun amugeotdo moreuneun chehaetda.", nl: "Hij deed alsof hij van niets wist." },
        { cn: "그 사람은 나를 보고도 본체만체했다.", py: "Geu sarameun nareul bogodo bonchemanchehaetda.", nl: "Hij zag me wel, maar deed alsof ik er niet was." }
      ] },
    { h: "척하다 of -는 것처럼?",
      p: "척하다 is altijd bewust: iemand speelt toneel. -는 것처럼 is een vergelijking: \"alsof, zoals\". Vaak staat er 보이다 of 느껴지다 achter. Dan is er geen opzet. Een pop of een wolk kan dus niet 척하다, maar iets kan er wel uitzien 것처럼.",
      ex: [
        { cn: "아이가 자는 것처럼 보였다.", py: "Aiga janeun geotcheoreom boyeotda.", nl: "Het kind leek te slapen." },
        { cn: "아이가 자는 척했다.", py: "Aiga janeun cheokaetda.", nl: "Het kind deed alsof het sliep." }
      ] },
    { h: "Spreektaal en schrijftaal",
      p: "In spreektaal is 척 vaak een verwijt: 잘난 척하다 (opscheppen), 아는 척하다 (doen alsof je alles weet). In een gesprek betekent 아는 척하다 ook \"laten merken dat je iemand kent\": 아는 척도 안 했어 = hij groette me niet eens. In formele schrijftaal kies je eerder 체하다 of N을/를 가장하다 (\"zich voordoen als\").",
      ex: [
        { cn: "어제 길에서 만났는데 아는 척도 안 했어.", py: "Eoje gireseo mannanneunde aneun cheokdo an haesseo.", nl: "Ik kwam hem gisteren op straat tegen, maar hij groette me niet eens." },
        { cn: "범인은 손님을 가장하여 가게에 들어갔다.", py: "Beomineun sonnimeul gajanghayeo gage-e deureogatda.", nl: "De dader ging de winkel binnen terwijl hij zich voordeed als klant." }
      ] }
  ],
  mistakes: [
    { wrong: "그녀는 항상 바쁘는 척해요.", right: "그녀는 항상 바쁜 척해요.", why: "바쁘다 is een bijvoeglijk werkwoord. Dan gebruik je -(으)ㄴ 척, niet -는 척." },
    { wrong: "그 영화를 안 봤는데 보는 척했어요.", right: "그 영화를 안 봤는데 본 척했어요.", why: "Je deed alsof je de film al had gezien. Voor iets wat al gebeurd is gebruik je -(으)ㄴ 척." },
    { wrong: "그는 경찰 척했어요.", right: "그는 경찰인 척했어요.", why: "Na een zelfstandig naamwoord heb je 이다 nodig: N인 척하다." },
    { wrong: "그 인형은 살아 있는 척 보여요.", right: "그 인형은 살아 있는 것처럼 보여요.", why: "Een pop speelt geen toneel. Voor een indruk zonder opzet gebruik je -는 것처럼 보이다." }
  ],
  vocab: [
    ["-(으)ㄴ/는 척하다", "-(eu)n/neun cheokada", "doen alsof"], ["-(으)ㄴ/는 체하다", "-(eu)n/neun chehada", "doen alsof (iets formeler)"],
    ["잘난 척하다", "jallan cheokada", "opscheppen, zich beter voordoen"], ["본체만체하다", "bonchemanchehada", "doen alsof je iemand niet ziet"],
    ["가장하다", "gajanghada", "zich voordoen als (schrijftaal)"], ["용어", "yong-eo", "vakterm"],
    ["끄덕이다", "kkeudeogida", "knikken"], ["당황하다", "danghwanghada", "van slag raken, in verlegenheid raken"],
    ["들키다", "deulkida", "betrapt worden, uitkomen"], ["솔직히", "soljiki", "eerlijk, openhartig"]
  ],
  dialogue: [
    ["A", "아까 복도에서 민수 씨를 봤는데 못 본 척했어요.", "Akka bokdoeseo minsu ssireul bwanneunde mot bon cheokaesseoyo.", "Ik zag Minsu net op de gang, maar ik deed alsof ik hem niet zag."],
    ["B", "왜요? 싸웠어요?", "Waeyo? Ssawosseoyo?", "Waarom? Hebben jullie ruzie gehad?"],
    ["A", "아니요, 지난주에 빌린 책을 아직 안 돌려줘서 좀 미안해서요.", "Aniyo, jinanjue billin chaegeul ajik an dollyeojwoseo jom mianhaeseoyo.", "Nee, ik heb het boek dat ik vorige week leende nog niet teruggegeven. Ik schaam me een beetje."],
    ["B", "민수 씨도 아마 눈치챘을 거예요. 모르는 척하지 말고 그냥 인사하세요.", "Minsu ssido ama nunchichaesseul geoyeyo. Moreuneun cheokaji malgo geunyang insahaseyo.", "Minsu heeft het vast ook gemerkt. Doe niet alsof je van niets weet, groet hem gewoon."],
    ["A", "맞아요. 내일 책을 돌려주면서 먼저 사과할게요.", "Majayo. Naeil chaegeul dollyeojumyeonseo meonjeo sagwahalgeyo.", "Je hebt gelijk. Morgen geef ik het boek terug en bied ik meteen mijn excuses aan."]
  ],
  reading: {
    title: "아는 척의 대가",
    lines: [
      { cn: "신입 사원 시절, 나는 회의 시간마다 아는 척을 했다.", py: "Sinip sawon sijeol, naneun hoeui siganmada aneun cheogeul haetda.", nl: "Toen ik net begon bij het bedrijf, deed ik in elke vergadering alsof ik alles wist." },
      { cn: "모르는 용어가 나와도 고개를 끄덕이며 이해한 척했다.", py: "Moreuneun yong-eoga nawado gogaereul kkeudeogimyeo ihaehan cheokaetda.", nl: "Ook als er een vakterm viel die ik niet kende, knikte ik en deed ik alsof ik het begreep." },
      { cn: "질문을 하면 능력이 없어 보일까 봐 걱정됐기 때문이다.", py: "Jilmuneul hamyeon neungnyeogi eopseo boilkka bwa geokjeongdwaetgi ttaemunida.", nl: "Ik was namelijk bang dat ik onbekwaam zou lijken als ik een vraag stelde." },
      { cn: "어느 날 팀장님이 나에게 그 내용을 정리해서 발표하라고 하셨다.", py: "Eoneu nal timjangnimi na-ege geu naeyong-eul jeongnihaeseo balpyoharago hasyeotda.", nl: "Op een dag vroeg mijn teamleider me om die inhoud samen te vatten en te presenteren." },
      { cn: "나는 당황했지만 끝까지 괜찮은 척하며 발표를 시작했다.", py: "Naneun danghwanghaetjiman kkeutkkaji gwaenchaneun cheokamyeo balpyoreul sijakaetda.", nl: "Ik raakte van slag, maar deed tot het einde alsof er niets aan de hand was en begon te presenteren." },
      { cn: "그러나 몇 분도 지나지 않아 내가 아무것도 모른다는 사실이 들키고 말았다.", py: "Geureona myeot bundo jinaji ana naega amugeotdo moreundaneun sasiri deulkigo maratda.", nl: "Maar binnen een paar minuten kwam uit dat ik er niets van wist." },
      { cn: "팀장님은 화를 내는 대신 \"모르는 건 부끄러운 게 아니다\"라고 말씀하셨다.", py: "Timjangnimeun hwareul naeneun daesin \"moreuneun geon bukkeureoun ge anida\"rago malsseumhasyeotda.", nl: "In plaats van boos te worden zei de teamleider: \"Iets niet weten is geen schande.\"" },
      { cn: "그 후로 나는 아는 척하는 것보다 솔직히 모른다고 말하는 것이 낫다는 것을 배웠다.", py: "Geu huro naneun aneun cheokaneun geotboda soljiki moreundago malhaneun geosi natdaneun geoseul baewotda.", nl: "Sindsdien weet ik dat eerlijk zeggen dat je iets niet weet beter is dan doen alsof je het weet." }
    ],
    questions: [
      { type: "mc", q: "Waarom stelde de schrijver geen vragen in vergaderingen?",
        options: ["Hij was bang dat hij onbekwaam zou lijken.", "Hij begreep alles al.", "De teamleider verbood vragen.", "Er was nooit tijd voor vragen."], answer: 0,
        why: ["Goed: 능력이 없어 보일까 봐 걱정됐기 때문이다.", "Hij deed juist alleen alsof hij het begreep.", "Dat staat niet in de tekst.", "Over tijd staat niets in de tekst."] },
      { type: "mc", q: "Hoe reageerde de teamleider?",
        options: ["Hij zei dat iets niet weten geen schande is.", "Hij werd boos.", "Hij gaf de presentatie aan iemand anders.", "Hij deed alsof hij niets merkte."], answer: 0,
        why: ["Goed: \"모르는 건 부끄러운 게 아니다\"라고 말씀하셨다.", "Er staat juist: 화를 내는 대신, in plaats van boos te worden.", "Dat staat niet in de tekst.", "Hij merkte het wel en zei er iets over."] },
      { type: "mc", q: "모르는 용어가 나와도 ... 이해한 척했다. Wat betekent 이해한 척했다?",
        options: ["Hij deed alsof hij het begreep, maar begreep het niet.", "Hij begreep het echt.", "Hij deed alsof hij het niet begreep.", "Hij leek het te begrijpen, zonder opzet."], answer: 0,
        why: ["Goed: -(으)ㄴ 척하다 = bewust doen alsof iets zo is.", "척 zegt juist dat het niet echt was.", "Dan zou er 이해 못 한 척했다 staan.", "척 is bewust toneelspel. Zonder opzet is -는 것처럼 보이다."] }
    ]
  },
  questions: [
    { type: "mc", q: "그는 내 말을 못 들은 척했다. Wat betekent dit?",
      options: ["Hij deed alsof hij me niet had gehoord.", "Hij had me echt niet gehoord.", "Hij deed alsof hij me wel had gehoord.", "Hij leek me niet gehoord te hebben, zonder opzet."], answer: 0,
      why: ["Goed: 못 들은 + 척하다 = doen alsof je het niet hoorde.", "척 zegt juist dat het niet echt is: hij hoorde het wel.", "못 staat binnen het toneelspel: hij speelt dat hij het NIET hoorde.", "척 is bewust. Zonder opzet zou je -(으)ㄴ 것처럼 보이다 gebruiken."] },
    { type: "mc", q: "\"Ze doet altijd alsof ze het druk heeft.\" Welke zin klopt?",
      options: ["그녀는 항상 바쁜 척해요.", "그녀는 항상 바쁘는 척해요.", "그녀는 항상 바쁠 척해요.", "그녀는 항상 바빠 척해요."], answer: 0,
      why: ["Goed: bijvoeglijk werkwoord + -(으)ㄴ 척하다.", "-는 is voor werkwoorden. 바쁘다 is een bijvoeglijk werkwoord.", "Vóór 척 staat geen (으)ㄹ-vorm.", "Vóór 척 staat een bijzin-vorm (-ㄴ), niet -아/어."] },
    { type: "mc", q: "\"Ik deed alsof ik die film al had gezien.\" Welke zin klopt?",
      options: ["그 영화를 본 척했어요.", "그 영화를 보는 척했어요.", "그 영화를 봤는 척했어요.", "그 영화를 볼 척했어요."], answer: 0,
      why: ["Goed: al gebeurd = -(으)ㄴ 척: 본 척.", "보는 척 = doen alsof je nu aan het kijken bent.", "봤는 bestaat niet als bijzin-vorm. Het verleden is 본.", "Vóór 척 staat geen (으)ㄹ-vorm."] },
    { type: "mc", q: "\"Hij deed alsof hij politieagent was.\" Welke zin klopt?",
      options: ["그는 경찰인 척했어요.", "그는 경찰 척했어요.", "그는 경찰는 척했어요.", "그는 경찰한 척했어요."], answer: 0,
      why: ["Goed: zelfstandig naamwoord + 인 척하다.", "Na een zelfstandig naamwoord heb je 이다 nodig: 경찰인.", "-는 hoort bij een werkwoord. Hier heb je 인 nodig.", "경찰하다 bestaat niet. Gebruik 경찰인."] },
    { type: "mc", q: "\"Die pop ziet eruit alsof hij leeft.\" Welke zin klopt?",
      options: ["그 인형은 살아 있는 것처럼 보여요.", "그 인형은 살아 있는 척 보여요.", "그 인형은 살아 있는 척해요.", "그 인형은 살아 있는 척처럼 보여요."], answer: 0,
      why: ["Goed: een indruk zonder opzet is -는 것처럼 보이다.", "척 staat niet vóór 보이다. Het gaat hier om een indruk, niet om toneel.", "Een pop speelt geen toneel. 척하다 is bewust doen alsof.", "척 en 처럼 gaan niet samen. Gebruik 것처럼."] },
    { type: "mc", q: "Welke zin betekent bijna hetzelfde als 그는 모르는 척했다?",
      options: ["그는 모르는 체했다.", "그는 모르는 것 같았다.", "그는 정말 몰랐다.", "그는 모를 리가 없었다."], answer: 0,
      why: ["Goed: -는 체하다 = -는 척하다, alleen iets formeler.", "것 같다 is een vermoeden van de spreker, geen toneelspel.", "척 zegt juist dat hij het wel wist.", "리가 없다 betekent \"onmogelijk\"."] },
    { type: "mc", q: "Welke zin past het best in een formeel nieuwsbericht?",
      options: ["범인은 손님을 가장하여 가게에 들어갔다.", "범인은 손님인 척하고 가게에 들어갔대.", "범인은 손님인 척 가게에 들어갔잖아.", "범인은 손님인 척하면서 가게에 들어갔어요."], answer: 0,
      why: ["Goed: N을/를 가장하여 met -았다 is formele schrijftaal.", "-대 (\"zeggen ze\") is spreektaal.", "-잖아 hoort bij een gesprek.", "De beleefde spreekvorm -어요 past niet in een nieuwsbericht."] },
    { type: "order", q: "Zet in de goede volgorde: \"Doe niet alsof je het weet, als je het niet weet.\"",
      tokens: [["모르면서", "moreumyeonseo"], ["아는", "aneun"], ["척하지", "cheokaji"], ["마세요", "maseyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij deed alsof hij mij niet zag en liep voorbij.\"",
      tokens: [["그는 나를", "geuneun nareul"], ["못", "mot"], ["본", "bon"], ["척하고", "cheokago"], ["지나갔다", "jinagatda"]] },
    { type: "fill", q: "시험을 망쳤지만 엄마 앞에서는 ___ 척했어요. (Ik had het examen verknald, maar tegenover mama deed ik alsof ik blij was.)",
      answers: ["기쁜"], hint: "기쁘다 = blij. Het is een bijvoeglijk werkwoord.",
      why: "Bijvoeglijk werkwoord + -(으)ㄴ 척하다: 기쁘다 wordt 기쁜 척하다." },
    { type: "open", q: "Vertaal: \"Hij doet altijd alsof hij rijk is.\"",
      model: ["그는 항상 부자인 척해요.", "그 사람은 늘 돈이 많은 척해요.", "그는 항상 돈 있는 척해."],
      tip: "Check: N인 척 (부자인), bijvoeglijk werkwoord -(으)ㄴ 척 (많은), of 있다 + -는 척 (있는)." },
    { type: "open", q: "Je vriend doet alsof hij ziek is om niet te hoeven werken. Zeg hem informeel dat hij daarmee moet stoppen.",
      model: ["아픈 척하지 마.", "아픈 척하지 말고 일해.", "그만 아픈 척해."],
      tip: "Check: 아프다 + -(으)ㄴ 척 = 아픈 척, en de ontkenning staat op 하다: 척하지 마." }
  ],
  review: [
    { type: "mc", q: "\"Hij deed alsof hij sliep.\"",
      options: ["그는 자는 척했어요.", "그는 자은 척했어요.", "그는 잘 척했어요.", "그는 자기 척했어요."], answer: 0,
      why: ["Goed: werkwoord, bezig = -는 척하다.", "자다 heeft geen 받침, dus geen 은. En hier past -는.", "Vóór 척 staat geen (으)ㄹ-vorm.", "Vóór 척 staat een bijzin-vorm, niet -기."] },
    { type: "mc", q: "\"Hij doet alsof hij niet bang is.\"",
      options: ["그는 무섭지 않은 척해요.", "그는 무섭지 않는 척해요.", "그는 무섭지 않을 척해요.", "그는 무섭지 않기 척해요."], answer: 0,
      why: ["Goed: 무섭다 is een bijvoeglijk werkwoord, dus ook 않다 krijgt -은: 않은 척.", "Na een bijvoeglijk werkwoord gedraagt 않다 zich als bijvoeglijk werkwoord: 않은, niet 않는.", "Vóór 척 staat geen (으)ㄹ-vorm.", "Vóór 척 staat een bijzin-vorm, niet -기."] },
    { type: "mc", q: "\"Het voelt alsof ik droom.\"",
      options: ["꿈을 꾸는 것처럼 느껴져요.", "꿈을 꾸는 척 느껴져요.", "꿈을 꾸는 척해요.", "꿈을 꾸는 체해요."], answer: 0,
      why: ["Goed: een gevoel zonder opzet is -는 것처럼.", "척 staat niet vóór 느껴지다. Het gaat om een gevoel, niet om toneel.", "척하다 betekent dat je bewust doet alsof je droomt.", "체하다 betekent ook bewust doen alsof."] }
  ]
})
