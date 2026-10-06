({
  id: "04", slug: "ryeogo", title: "-(으)려고 하다", sub: "Zeggen wat je van plan bent",
  canDo: "Je kunt nu zeggen wat je van plan bent met -(으)려고 하다, en wat je van plan was maar niet deed.",
  guess: {
    q: "\"Ik ben van plan dit weekend naar Busan te gaan.\" Welke zin klopt, denk je?",
    options: ["이번 주말에 부산에 가려고 해요.", "이번 주말에 부산에 가으려고 해요.", "이번 주말에 부산에 가려고 있어요.", "이번 주말에 부산에 가러고 해요."], answer: 0,
    why: ["Goed: 가 eindigt op een klinker, dus -려고 해요.", "Na een klinker komt geen 으: 가려고.", "Na -려고 komt 하다, niet 있다.", "De uitgang is -려고, met ㅕ."]
  },
  problem: "Met -고 싶다 zeg je wat je wilt. Dat is een wens. Met -(으)려고 하다 zeg je wat je van plan bent, zoals het Nederlandse \"van plan zijn\". In de verleden tijd betekent het vaak: ik was het van plan, maar het ging niet door.",
  pattern: [
    { l: "wie", v: "저는", c: 1 }, { l: "wat", v: "한국어를 배우", c: 3 }, { l: "-려고 하다", v: "려고 해요", c: 2, key: true }
  ],
  patternCap: "Stam + (으)려고 해요 = ik ben van plan · Stam + (으)려고 했는데 = ik was van plan, maar ... · Stam + (으)려고 + zin = om te",
  rules: [
    "Na een klinker of ㄹ: -려고 하다. 가려고, 만들려고.",
    "Na een andere 받침: -으려고 하다. 먹으려고, 읽으려고.",
    "ㄷ-stammen zoals 듣다 en 걷다 worden 들으려고 en 걸으려고.",
    "De tijd zit in 하다: 가려고 해요 (plan nu), 가려고 했어요 (plan vroeger).",
    "Zonder 하다 betekent -(으)려고 \"om te\": 보려고 공부해요. Daarna komt geen opdracht of voorstel."
  ],
  pitfall: "Bij een ㄹ-stam komt geen 으. Zeg 만들려고, niet 만들으려고. In spreektaal hoor je vaak 할려고 of 먹을려고, maar schrijf 하려고 en 먹으려고.",
  examples: [
    { cn: "내년에 한국에 유학을 가려고 해요.", py: "Naenyeone hanguge yuhageul garyeogo haeyo.", nl: "Ik ben van plan volgend jaar in Korea te gaan studeren." },
    { cn: "저녁에 김치찌개를 만들려고 해요.", py: "Jeonyeoge gimchijjigaereul mandeullyeogo haeyo.", nl: "Ik ben van plan vanavond kimchistoofpot te maken." },
    { cn: "오늘부터 매일 운동하려고 해요.", py: "Oneulbuteo maeil undongharyeogo haeyo.", nl: "Vanaf vandaag ben ik van plan elke dag te sporten." },
    { cn: "전화하려고 했는데 시간이 없었어요.", py: "Jeonhwaharyeogo haenneunde sigani eopseosseoyo.", nl: "Ik wilde bellen, maar ik had geen tijd." }
  ],
  nuance: [
    { h: "-(으)려고 하다, -(으)ㄹ 거예요 of -고 싶다?",
      p: "-고 싶다 is een wens: misschien doe je het nooit. -(으)려고 하다 is een plan of voornemen: je bent het van plan, maar het staat nog niet vast. -(으)ㄹ 거예요 klinkt zekerder: zo gaat het gebeuren. Vraagt iemand naar je plannen met -(으)ㄹ 거예요?, dan kun je met -(으)려고 해요 antwoorden.",
      ex: [
        { cn: "제주도에 가고 싶어요.", py: "Jejudoe gago sipeoyo.", nl: "Ik wil (graag) naar Jeju." },
        { cn: "제주도에 가려고 해요.", py: "Jejudoe garyeogo haeyo.", nl: "Ik ben van plan naar Jeju te gaan." },
        { cn: "제주도에 갈 거예요.", py: "Jejudoe gal geoyeyo.", nl: "Ik ga naar Jeju." }
      ] },
    { h: "\"Om te\": -(으)려고 of -(으)러?",
      p: "-(으)러 kan alleen vóór 가다, 오다 of 다니다: je gaat ergens heen om iets te doen. -(으)려고 kan vóór elk werkwoord. Maar na -(으)려고 komt geen opdracht of voorstel. Wil je samen ergens heen, dan zeg je -(으)러 갈까요?",
      ex: [
        { cn: "돈을 모으려고 열심히 일해요.", py: "Doneul moeuryeogo yeolsimhi ilhaeyo.", nl: "Ik werk hard om geld te sparen." },
        { cn: "같이 밥 먹으러 갈까요?", py: "Gachi bap meogeureo galkkayo?", nl: "Zullen we samen gaan eten?" }
      ] },
    { h: "Op het punt staan: 비가 오려고 해요",
      p: "Is het onderwerp geen persoon, dan betekent -(으)려고 하다 vaak: het gaat zo gebeuren. Een plan kan een wolk niet hebben. Je ziet dat iets bijna begint.",
      ex: [
        { cn: "하늘이 어두워요. 비가 오려고 해요.", py: "Haneuri eoduwoyo. Biga oryeogo haeyo.", nl: "De lucht is donker. Het gaat zo regenen." }
      ] }
  ],
  mistakes: [
    { wrong: "케이크를 만들으려고 해요.", right: "케이크를 만들려고 해요.", why: "Na een ㄹ-stam komt geen 으: 만들려고." },
    { wrong: "음악을 듣으려고 해요.", right: "음악을 들으려고 해요.", why: "듣다 is een ㄷ-stam. Vóór 으 wordt ㄷ een ㄹ: 들으려고." },
    { wrong: "같이 밥 먹으려고 갈까요?", right: "같이 밥 먹으러 갈까요?", why: "Na -(으)려고 komt geen voorstel. Met 가다 en een voorstel gebruik je -(으)러." },
    { wrong: "돈을 모으러 열심히 일해요.", right: "돈을 모으려고 열심히 일해요.", why: "-(으)러 kan alleen vóór 가다, 오다 of 다니다. Bij 일하다 gebruik je -(으)려고." }
  ],
  vocab: [
    ["-(으)려고 하다", "-(eu)ryeogo hada", "van plan zijn"], ["유학", "yuhak", "studie in het buitenland"], ["방학", "banghak", "schoolvakantie"],
    ["비행기표", "bihaenggipyo", "vliegticket"], ["확인하다", "hwaginhada", "controleren, nakijken"], ["계획을 세우다", "gyehoegeul seuda", "een plan maken"],
    ["건강", "geongang", "gezondheid"], ["자막", "jamak", "ondertiteling"], ["그만두다", "geumanduda", "stoppen met"], ["포기하다", "pogihada", "opgeven"]
  ],
  dialogue: [
    ["A", "방학에 뭐 할 거예요?", "Banghage mwo hal geoyeyo?", "Wat ga je doen in de vakantie?"],
    ["B", "제주도에 여행을 가려고 해요.", "Jejudoe yeohaengeul garyeogo haeyo.", "Ik ben van plan een reis naar Jeju te maken."],
    ["A", "와, 좋겠어요! 비행기표는 샀어요?", "Wa, jokesseoyo! Bihaenggipyoneun sasseoyo?", "Wat leuk! Heb je je vliegticket al gekocht?"],
    ["B", "어제 사려고 했는데 너무 비쌌어요.", "Eoje saryeogo haenneunde neomu bissasseoyo.", "Ik wilde het gisteren kopen, maar het was te duur."],
    ["A", "그럼 주말에 다시 확인하세요.", "Geureom jumare dasi hwaginhaseyo.", "Kijk dan in het weekend nog eens."]
  ],
  reading: {
    title: "새해 계획",
    lines: [
      { cn: "새해가 되어서 올해 계획을 세웠어요.", py: "Saehaega doeeoseo olhae gyehoegeul sewosseoyo.", nl: "Het nieuwe jaar is begonnen, dus ik heb plannen gemaakt." },
      { cn: "먼저 건강을 위해서 매일 아침 30분씩 걸으려고 해요.", py: "Meonjeo geonganeul wihaeseo maeil achim samsip bunssik georeuryeogo haeyo.", nl: "Ten eerste ben ik van plan elke ochtend een half uur te wandelen, voor mijn gezondheid." },
      { cn: "그리고 한국 드라마를 자막 없이 보려고 한국어 공부를 시작했어요.", py: "Geurigo hanguk deuramareul jamak eopsi boryeogo hangugeo gongbureul sijakaesseoyo.", nl: "En ik ben Koreaans gaan leren, om Koreaanse series zonder ondertiteling te kijken." },
      { cn: "여름에는 서울에 사는 친구를 만나러 한국에 갈 거예요.", py: "Yeoreumeneun seoure saneun chingureul mannareo hanguge gal geoyeyo.", nl: "In de zomer ga ik naar Korea om een vriend in Seoul te zien." },
      { cn: "사실 작년에도 비슷한 계획을 세웠어요.", py: "Sasil jangnyeonedo biseutan gyehoegeul sewosseoyo.", nl: "Eerlijk gezegd maakte ik vorig jaar ook zulke plannen." },
      { cn: "매일 운동하려고 했는데 일주일 만에 그만뒀어요.", py: "Maeil undongharyeogo haenneunde iljuil mane geumandwosseoyo.", nl: "Ik was van plan elke dag te sporten, maar na een week stopte ik al." },
      { cn: "그래서 올해는 친구와 같이 걸으려고 해요.", py: "Geuraeseo olhaeneun chinguwa gachi georeuryeogo haeyo.", nl: "Daarom ben ik van plan dit jaar samen met een vriend te wandelen." },
      { cn: "혼자 하면 쉽게 포기하니까요.", py: "Honja hamyeon swipge pogihanikkayo.", nl: "Want alleen geef ik het snel op." }
    ],
    questions: [
      { type: "mc", q: "Waarom is de schrijver Koreaans gaan leren?",
        options: ["Om Koreaanse series zonder ondertiteling te kijken.", "Om in Korea te gaan studeren.", "Om een vriend te helpen.", "Om een baan in Seoul te krijgen."], answer: 0,
        why: ["Goed: 자막 없이 보려고 한국어 공부를 시작했어요.", "Over studeren in Korea staat niets in deze tekst.", "De vriend in Seoul gaat de schrijver alleen bezoeken.", "Over werk staat niets in de tekst."] },
      { type: "mc", q: "Wat gebeurde er vorig jaar?",
        options: ["De schrijver stopte na een week met sporten.", "De schrijver sportte het hele jaar elke dag.", "De schrijver ging naar Korea.", "De schrijver maakte geen plannen."], answer: 0,
        why: ["Goed: 일주일 만에 그만뒀어요.", "Het was een plan, maar het ging niet door.", "Naar Korea gaan is het plan voor dit jaar.", "Hij maakte juist ook plannen: 비슷한 계획을 세웠어요."] },
      { type: "mc", q: "매일 운동하려고 했는데 ...: wat zegt -려고 했는데 hier?",
        options: ["Het was een plan, maar het lukte niet.", "Het sporten is elke dag gelukt.", "Het is een wens voor de toekomst.", "Het geeft de reden van het stoppen."], answer: 0,
        why: ["Goed: -려고 했는데 = ik was van plan, maar ...", "-려고 했어요 zegt niet dat het gebeurd is.", "했 wijst naar het verleden, niet naar de toekomst.", "-는데 geeft hier een contrast, geen reden."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik ben van plan een boek te lezen.\"",
      options: ["책을 읽으려고 해요.", "책을 읽려고 해요.", "책을 읽으러고 해요.", "책을 읽으려고 있어요."], answer: 0,
      why: ["Goed: 읽 heeft een 받침, dus -으려고.", "Na een 받침 (behalve ㄹ) heb je 으 nodig: 읽으려고.", "De uitgang is -려고, met ㅕ.", "Na -려고 komt 하다, niet 있다."] },
    { type: "mc", q: "케이크를 ___ 해요. (Ik ben van plan een taart te maken.)",
      options: ["만들려고", "만들으려고", "만드려고", "만들러고"], answer: 0,
      why: ["Goed: ㄹ-stam + -려고.", "Na een ㄹ-stam komt geen 으.", "De ㄹ blijft staan voor -려고.", "De uitgang is -려고, met ㅕ."] },
    { type: "mc", q: "어제 운동하려고 했는데 비가 왔어요. Wat betekent dit?",
      options: ["Ik wilde gisteren sporten, maar het regende.", "Ik heb gisteren gesport, maar het regende.", "Ik wil morgen sporten, maar het regent.", "Ik wilde gisteren sporten, omdat het regende."], answer: 0,
      why: ["Goed: -려고 했는데 = ik was van plan, maar ...", "-려고 했어요 zegt niet dat het gebeurd is. Het was alleen een plan.", "어제 en 했 wijzen naar gisteren, niet naar morgen.", "-는데 geeft hier een contrast, geen reden."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik ben van plan een nieuwe computer te kopen.\"",
      tokens: [["새", "sae"], ["컴퓨터를", "keompyuteoreul"], ["사려고", "saryeogo"], ["해요.", "haeyo."]] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["돈을 모으러 열심히 일해요.", "돈을 모으려고 열심히 일해요.", "친구를 만나러 카페에 가요.", "친구를 만나려고 카페에 가요."], answer: 0,
      why: ["Goed: dit is fout. -(으)러 kan alleen vóór 가다, 오다 of 다니다.", "Dit klopt: -(으)려고 kan vóór elk werkwoord.", "Dit klopt: -(으)러 + 가다.", "Dit klopt: -(으)려고 kan ook vóór 가다."] },
    { type: "mc", q: "같이 점심 ___ 갈까요? (Zullen we samen gaan lunchen?)",
      options: ["먹으러", "먹으려고", "먹을 거예요", "먹으려고 해서"], answer: 0,
      why: ["Goed: -(으)러 + 가다, en daarna mag een voorstel.", "Na -(으)려고 komt geen voorstel zoals -(으)ㄹ까요.", "-(으)ㄹ 거예요 sluit een zin af; het kan niet vóór 갈까요.", "-려고 해서 geeft een reden, en ook dan past geen voorstel."] },
    { type: "mc", q: "내년에 결혼하려고 해요. Wat betekent dit?",
      options: ["Ik ben van plan volgend jaar te trouwen.", "Ik ben volgend jaar al getrouwd.", "Ik wilde volgend jaar trouwen, maar het gaat niet door.", "Ik moet volgend jaar trouwen."], answer: 0,
      why: ["Goed: -려고 해요 = een plan voor de toekomst.", "-려고 해요 zegt niets over iets wat al klaar is.", "Dat zou -려고 했는데 zijn, met verleden tijd.", "Moeten is -아/어야 하다, niet -려고 하다."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik wilde een taxi nemen, maar er was geen taxi.\"",
      tokens: [["택시를", "taeksireul"], ["타려고", "taryeogo"], ["했는데", "haenneunde"], ["택시가", "taeksiga"], ["없었어요.", "eopseosseoyo."]] },
    { type: "fill", q: "공원에서 매일 ___ 해요. (Ik ben van plan elke dag in het park te wandelen.)", answers: ["걸으려고"],
      hint: "걷다 is een ㄷ-stam.", why: "Vóór 으 wordt de ㄷ van 걷다 een ㄹ: 걸 + 으려고 = 걸으려고." },
    { type: "open", q: "Vertaal met -(으)려고 하다: \"Ik ben van plan vandaag vroeg te slapen.\"", model: ["오늘 일찍 자려고 해요.", "오늘은 일찍 자려고 해요.", "오늘 밤에 일찍 자려고 해요."],
      tip: "Check: 자다 eindigt op een klinker, dus 자려고. Eindig met 해요." },
    { type: "open", q: "Vertaal: \"Ik wilde gisteren een film kijken, maar ik was te moe.\"", model: ["어제 영화를 보려고 했는데 너무 피곤했어요.", "어제 영화 보러 가려고 했는데 너무 피곤했어요."],
      tip: "Check: het plan ligt in het verleden, dus -려고 했는데, en ook 피곤했어요 in de verleden tijd." }
  ],
  review: [
    { type: "mc", q: "음악을 ___ 해요. (Ik ben van plan naar muziek te luisteren.)",
      options: ["들으려고", "듣으려고", "들려고", "듣려고"], answer: 0,
      why: ["Goed: 듣다 is een ㄷ-stam. Voor 으 wordt ㄷ een ㄹ: 들으려고.", "Bij 듣다 wordt ㄷ een ㄹ voor 으.", "Na de ㄹ van 들 komt hier nog 으: 들으려고.", "Na een 받침 heb je 으 nodig, en ㄷ wordt ㄹ."] },
    { type: "mc", q: "전화하려고 ___ 잊어버렸어요. (Ik wilde je bellen, maar ik vergat het.)",
      options: ["했는데", "하는데", "해는데", "했은데"], answer: 0,
      why: ["Goed: het plan was vroeger, dus 했는데.", "Het plan hoort bij het verleden. Je hebt 했 nodig.", "-는데 komt niet na de 어-vorm 해.", "Na 았/었 komt altijd -는데."] },
    { type: "mc", q: "이번 주말에 고향 친구를 ___ 해요. (Ik ben van plan dit weekend een vriend uit mijn geboorteplaats te zien.)",
      options: ["만나려고", "만나으려고", "만나러", "만나려고서"], answer: 0,
      why: ["Goed: klinker + -려고 + 해요.", "Na een klinker komt geen 으.", "-(으)러 gaat alleen samen met 가다 of 오다, niet met 하다.", "Tussen -려고 en 하다 komt niets."] }
  ]
})
