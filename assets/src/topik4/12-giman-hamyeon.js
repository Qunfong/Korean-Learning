({
  id: "12", slug: "giman-hamyeon", title: "-기만 하면", sub: "Telkens als ..., dan altijd ...",
  canDo: "Je kunt nu zeggen dat iets elke keer gebeurt zodra een bepaalde handeling plaatsvindt, met -기만 하면.",
  guess: {
    q: "\"Elke keer als ik koffie drink, kan ik niet slapen.\" Welke zin klopt, denk je?",
    options: ["커피를 마시기만 하면 잠을 못 자요.", "커피를 마시만 하면 잠을 못 자요.", "커피를 마셨기만 하면 잠을 못 자요.", "커피를 마시기만 해서 잠을 못 자요."], answer: 0,
    why: ["Goed: stam + 기만 하면 + wat er altijd volgt.", "Tussen de stam en 만 hoort 기: 마시기만.", "Vóór 기만 komt geen verleden tijd.", "-기만 해서 betekent \"omdat ik alleen maar drink\"; dat is iets anders."]
  },
  problem: "Sommige dingen gebeuren elke keer opnieuw. \"Zodra ik in de bus zit, word ik misselijk.\" Met -(으)면 zeg je alleen \"als\". Met -기만 하면 zeg je: telkens als dit gebeurt, volgt altijd dat. Vaak klinkt er een klacht of verbazing in door.",
  pattern: [
    { l: "handeling (stam)", v: "버스를 타", c: 1 }, { l: "telkens als", v: "기만 하면", c: 2, key: true },
    { l: "vast gevolg", v: "멀미가 나요", c: 4 }
  ],
  patternCap: "Werkwoordstam + 기만 하면 + gevolg dat altijd volgt; ook: -기만 하면 되다 (je hoeft alleen maar ...)",
  rules: [
    "Stam + 기만 하면, met of zonder 받침: 보기만 하면, 먹기만 하면. Onregelmatige stammen veranderen niet vóór 기: 듣기만 하면.",
    "Vóór 기만 komt geen tijd. Zeg niet 마셨기만 하면; de tijd staat in het gevolg.",
    "Voor een gewoonte nu staat het gevolg in de tegenwoordige tijd (빨개져요). Voor een gewoonte van vroeger in de verleden tijd (울었어요).",
    "Het gaat om een patroon dat zich herhaalt, niet om één gebeurtenis. Woorden als 어제 of 내일 passen er meestal niet bij.",
    "Bijna altijd met werkwoorden: een handeling die het gevolg in gang zet."
  ],
  pitfall: "Verwar -기만 하면 niet met -기만 하다. 자기만 하면 ... betekent \"telkens als hij slaapt, ...\". 자기만 해요 betekent \"hij doet niets anders dan slapen\".",
  examples: [
    { cn: "저는 술을 마시기만 하면 얼굴이 빨개져요.", py: "Jeoneun sureul masigiman hamyeon eolguri ppalgaejyeoyo.", nl: "Elke keer als ik alcohol drink, word ik rood in mijn gezicht." },
    { cn: "우리 아이는 차를 타기만 하면 잠이 들어요.", py: "Uri aineun chareul tagiman hamyeon jami deureoyo.", nl: "Zodra ons kind in de auto zit, valt het in slaap." },
    { cn: "그 노래를 듣기만 하면 고향 생각이 나요.", py: "Geu noraereul deutgiman hamyeon gohyang saenggagi nayo.", nl: "Telkens als ik dat liedje hoor, moet ik aan mijn geboorteplaats denken." },
    { cn: "어렸을 때 동생은 저를 보기만 하면 울었어요.", py: "Eoryeosseul ttae dongsaengeun jeoreul bogiman hamyeon ureosseoyo.", nl: "Toen we klein waren, begon mijn broertje te huilen zodra hij me zag." }
  ],
  nuance: [
    { h: "-기만 하면 of -(으)면?",
      p: "-(으)면 is een gewone voorwaarde. Het past ook bij één keer of bij een plan voor morgen. -기만 하면 zegt: elke keer, zonder uitzondering. Het klinkt sterker, en vaak hoor je er een klacht in. Voor één gebeurtenis of een belofte gebruik je -(으)면.",
      ex: [
        { cn: "비가 오면 집에 있을게요.", py: "Biga omyeon jibe isseulgeyo.", nl: "Als het regent, blijf ik thuis." },
        { cn: "비가 오기만 하면 무릎이 아파요.", py: "Biga ogiman hamyeon mureupi apayo.", nl: "Telkens als het regent, doet mijn knie pijn." }
      ] },
    { h: "-기만 하면 of -기만 하다?",
      p: "-기만 하다 aan het einde van de zin betekent: alleen maar dit doen, niets anders. -기만 하면 verbindt twee delen: zodra A, dan B. Let dus op wat er na 기만 komt: 해요 of 하면.",
      ex: [
        { cn: "동생은 주말에 게임을 하기만 해요.", py: "Dongsaengeun jumare geimeul hagiman haeyo.", nl: "Mijn broertje doet in het weekend niets anders dan gamen." },
        { cn: "동생은 게임을 하기만 하면 밥을 안 먹어요.", py: "Dongsaengeun geimeul hagiman hamyeon babeul an meogeoyo.", nl: "Zodra mijn broertje gaat gamen, eet hij niet meer." }
      ] },
    { h: "-기만 하면 되다: je hoeft alleen maar ...",
      p: "Met 되다 erachter betekent het: je hoeft alleen dit te doen, dan is het goed. Dat hoor je vaak bij uitleg en instructies. Het is neutraal en past in spreektaal en in beleefde uitleg.",
      ex: [
        { cn: "이 버튼을 누르기만 하면 돼요.", py: "I beoteuneul nureugiman hamyeon dwaeyo.", nl: "Je hoeft alleen maar op deze knop te drukken." }
      ] }
  ],
  mistakes: [
    { wrong: "술을 마셨기만 하면 얼굴이 빨개져요.", right: "술을 마시기만 하면 얼굴이 빨개져요.", why: "Vóór 기만 komt geen verleden tijd. De tijd staat in het gevolg." },
    { wrong: "술을 마시만 하면 얼굴이 빨개져요.", right: "술을 마시기만 하면 얼굴이 빨개져요.", why: "만 komt niet direct na de stam. Eerst 기, dan 만: 마시기만." },
    { wrong: "주말에는 집에서 자기만 하면 해요.", right: "주말에는 집에서 자기만 해요.", why: "\"Alleen maar slapen\" is -기만 하다. 하면 hoort er alleen bij als er een tweede deel volgt." },
    { wrong: "이 버튼을 누르면만 돼요.", right: "이 버튼을 누르기만 하면 돼요.", why: "만 staat na 기, niet na -(으)면: 누르기만 하면 돼요." }
  ],
  vocab: [
    ["-기만 하면", "-giman hamyeon", "telkens als, zodra"], ["빨개지다", "ppalgaejida", "rood worden"],
    ["잠이 들다", "jami deulda", "in slaap vallen"], ["고향", "gohyang", "geboorteplaats"], ["멀미", "meolmi", "wagenziekte, misselijkheid onderweg"],
    ["누르다", "nureuda", "drukken (op)"], ["무릎", "mureup", "knie"], ["재채기", "jaechaegi", "nies, niezen"],
    ["알레르기", "allereugi", "allergie"], ["신기하다", "singihada", "vreemd, verbazend"]
  ],
  dialogue: [
    ["A", "왜 그렇게 재채기를 해요?", "Wae geureoke jaechaegireul haeyo?", "Waarom nies je zo?"],
    ["B", "고양이 알레르기가 있어서 고양이를 보기만 하면 재채기가 나와요.", "Goyangi allereugiga isseoseo goyangireul bogiman hamyeon jaechaegiga nawayo.", "Ik ben allergisch voor katten. Zodra ik een kat zie, moet ik niezen."],
    ["A", "아, 미안해요. 우리 고양이를 방에 넣을게요.", "A, mianhaeyo. Uri goyangireul bange neoeulgeyo.", "O, sorry. Ik doe onze kat in een andere kamer."],
    ["B", "괜찮아요. 약을 먹기만 하면 금방 괜찮아져요.", "Gwaenchanayo. Yageul meokgiman hamyeon geumbang gwaenchanajyeoyo.", "Geen probleem. Zodra ik een pil neem, gaat het snel beter."],
    ["A", "약은 어디 있어요?", "Yageun eodi isseoyo?", "Waar zijn je pillen?"],
    ["B", "가방에 있어요. 물만 한 잔 주세요.", "Gabange isseoyo. Mulman han jan juseyo.", "In mijn tas. Geef me alleen een glas water."]
  ],
  reading: {
    title: "멀미하는 아이",
    lines: [
      { cn: "나는 어렸을 때 멀미가 아주 심했다.", py: "Naneun eoryeosseul ttae meolmiga aju simhaetda.", nl: "Als kind had ik erg last van wagenziekte." },
      { cn: "버스를 타기만 하면 머리가 아프고 속이 안 좋았다.", py: "Beoseureul tagiman hamyeon meoriga apeugo sogi an joatda.", nl: "Zodra ik in de bus stapte, kreeg ik hoofdpijn en werd ik misselijk." },
      { cn: "그래서 가족 여행을 갈 때마다 걱정이 많았다.", py: "Geuraeseo gajok yeohaengeul gal ttaemada geokjeongi manatda.", nl: "Daarom maakte ik me elke keer zorgen als we met het gezin op reis gingen." },
      { cn: "그런데 이상하게도 기차는 괜찮았다.", py: "Geureonde isanghagedo gichaneun gwaenchanatda.", nl: "Maar vreemd genoeg had ik in de trein geen last." },
      { cn: "기차를 타기만 하면 창밖을 보면서 즐겁게 노래를 불렀다.", py: "Gichareul tagiman hamyeon changbakkeul bomyeonseo jeulgeopge noraereul bulleotda.", nl: "Zodra ik in de trein zat, keek ik naar buiten en zong ik vrolijk liedjes." },
      { cn: "어머니는 그런 나를 보면서 신기하다고 하셨다.", py: "Eomeonineun geureon nareul bomyeonseo singihadago hasyeotda.", nl: "Mijn moeder zei dat ze dat vreemd vond als ze me zo zag." },
      { cn: "지금은 어른이 되어서 버스를 타도 괜찮다.", py: "Jigeumeun eoreuni doeeoseo beoseureul tado gwaenchanta.", nl: "Nu ben ik volwassen en heb ik in de bus geen last meer." },
      { cn: "하지만 지금도 기차 소리를 듣기만 하면 어린 시절이 생각난다.", py: "Hajiman jigeumdo gicha sorireul deutgiman hamyeon eorin sijeori saenggangnanda.", nl: "Maar ook nu denk ik aan mijn jeugd zodra ik het geluid van een trein hoor." }
    ],
    questions: [
      { type: "mc", q: "Wat gebeurde er vroeger als de schrijver in de bus zat?",
        options: ["Hij kreeg hoofdpijn en werd misselijk.", "Hij zong vrolijk liedjes.", "Hij viel meteen in slaap.", "Hij keek graag naar buiten."], answer: 0,
        why: ["Goed: 버스를 타기만 하면 머리가 아프고 속이 안 좋았다.", "Zingen deed hij in de trein, niet in de bus.", "Over in slaap vallen staat niets in de tekst.", "Naar buiten kijken deed hij in de trein."] },
      { type: "mc", q: "Hoe is het nu met de schrijver?",
        options: ["Hij heeft in de bus geen last meer.", "Hij wordt nog steeds misselijk in de bus.", "Hij reist alleen nog met de trein.", "Hij gaat niet meer op reis."], answer: 0,
        why: ["Goed: 지금은 어른이 되어서 버스를 타도 괜찮다.", "Dat was vroeger; nu is het 괜찮다.", "Dat staat niet in de tekst.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "기차를 타기만 하면 ... Wat betekent -기만 하면 hier?",
        options: ["Telkens als hij in de trein zat.", "Hij deed niets anders dan treinreizen.", "Als hij misschien één keer de trein zou nemen.", "Hoewel hij in de trein zat."], answer: 0,
        why: ["Goed: -기만 하면 = elke keer zodra ..., dan altijd ...", "Dat zou -기만 했다 zijn, zonder tweede deel.", "-기만 하면 gaat over een patroon, niet over één keer.", "\"Hoewel\" is -지만 of -는데도, niet -기만 하면."] }
    ]
  },
  questions: [
    { type: "mc", q: "그 친구는 슬픈 영화를 ___ 하면 울어요. (보다)",
      options: ["보기만", "봤기만", "보만", "보면만"], answer: 0,
      why: ["Goed: stam 보 + 기만 하면.", "Vóór 기만 komt geen verleden tijd.", "Tussen de stam en 만 hoort 기.", "만 staat na 기, niet na -(으)면."] },
    { type: "mc", q: "우리 아이는 차를 타기만 하면 잠이 들어요. Wat betekent dit?",
      options: ["Elke keer als ons kind in de auto zit, valt het in slaap.", "Ons kind doet in de auto niets anders dan slapen.", "Als ons kind morgen in de auto zit, valt het misschien in slaap.", "Ons kind wil alleen in de auto slapen."], answer: 0,
      why: ["Goed: -기만 하면 = telkens als ..., dan altijd ...", "\"Niets anders dan slapen\" zou 자기만 해요 zijn.", "-기만 하면 is een vast patroon, geen gok over morgen.", "Er staat niets over wat het kind wil."] },
    { type: "mc", q: "주말에 동생은 아무것도 안 하고 ___. (Mijn broertje doet in het weekend niets, hij slaapt alleen maar.)",
      options: ["자기만 해요", "자기만 하면 해요", "자기만 하면 돼요", "자면 해요"], answer: 0,
      why: ["Goed: \"alleen maar doen\" = -기만 하다.", "Met 하면 verwacht je een tweede deel; dat ontbreekt hier.", "-기만 하면 되다 betekent \"je hoeft alleen maar\"; dat past niet.", "자면 해요 is geen bestaande constructie."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["어제 공원에 가기만 하면 비가 왔어요.", "공원에 가기만 하면 비가 와요.", "어제 공원에 가니까 비가 왔어요.", "내일 공원에 가면 전화할게요."], answer: 0,
      why: ["Goed: 어제 is één keer. -기만 하면 is voor iets wat telkens gebeurt.", "Dit klopt: elke keer als ik naar het park ga, regent het.", "Dit klopt: één keer gisteren, met -(으)니까.", "Dit klopt: een plan voor morgen met -(으)면."] },
    { type: "mc", q: "이 약은 하루에 한 번 ___ 돼요. (Je hoeft dit medicijn maar één keer per dag te nemen.)",
      options: ["먹기만 하면", "먹으면만", "먹었기만 하면", "먹기만 해서"], answer: 0,
      why: ["Goed: -기만 하면 되다 = je hoeft alleen maar ...", "만 staat na 기, niet na -(으)면.", "Vóór 기만 komt geen verleden tijd.", "-아/어서 past niet vóór 되다 in deze betekenis."] },
    { type: "mc", q: "그 노래를 ___ 고향 생각이 나요. (듣다)",
      options: ["듣기만 하면", "들기만 하면", "들었기만 하면", "듣만 하면"], answer: 0,
      why: ["Goed: vóór 기 verandert de ㄷ niet: 듣기만.", "De ㄷ wordt alleen ㄹ vóór een klinker. Vóór 기 blijft het 듣.", "Vóór 기만 komt geen verleden tijd.", "Tussen de stam en 만 hoort 기."] },
    { type: "order", q: "Zet in de goede volgorde: \"Zodra ik dat liedje hoor, moet ik huilen.\"",
      tokens: [["그 노래를", "geu noraereul"], ["듣기만", "deutgiman"], ["하면", "hamyeon"], ["눈물이 나요", "nunmuri nayo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Je hoeft alleen maar op deze knop te drukken.\"",
      tokens: [["이 버튼을", "i beoteuneul"], ["누르기만", "nureugiman"], ["하면", "hamyeon"], ["돼요", "dwaeyo"]] },
    { type: "fill", q: "저는 매운 음식을 먹___ 하면 땀이 나요. (Telkens als ik pittig eten eet, ga ik zweten.)", answers: ["기만"],
      hint: "Welke twee lettergrepen staan tussen de stam en 하면?", why: "먹 + 기만 하면: telkens als ik eet, volgt het zweten." },
    { type: "open", q: "Vertaal: \"Zodra ons kind in de auto zit, valt het in slaap.\"",
      model: ["우리 아이는 차를 타기만 하면 잠이 들어요.", "우리 아이는 차를 타기만 하면 자요."],
      tip: "Check: 타 + 기만 하면 zonder tijd, en het gevolg in de tegenwoordige tijd." },
    { type: "open", q: "Vertaal: \"Telkens als ik koffie drink, kan ik niet slapen.\"",
      model: ["저는 커피를 마시기만 하면 잠을 못 자요.", "커피를 마시기만 하면 잠이 안 와요."],
      tip: "Check: 마시기만 하면 (niet 마셨기만), en daarna wat er altijd gebeurt." }
  ],
  review: [
    { type: "mc", q: "제 친구는 시험 이야기를 ___ 하면 긴장해요. (듣다)",
      options: ["듣기만", "들기만", "들었기만", "듣만"], answer: 0,
      why: ["Goed: vóór 기 blijft 듣 gewoon 듣.", "De ㄷ wordt alleen ㄹ vóór een klinker.", "Vóór 기만 komt geen verleden tijd.", "Tussen de stam en 만 hoort 기."] },
    { type: "mc", q: "형은 방학 내내 게임을 ___. (Mijn broer deed de hele vakantie niets anders dan gamen.)",
      options: ["하기만 했어요", "하기만 하면 했어요", "하기만 하면 돼요", "하면만 했어요"], answer: 0,
      why: ["Goed: \"alleen maar doen\" = -기만 하다, hier in de verleden tijd.", "Met 하면 verwacht je een tweede deel; dat ontbreekt.", "-기만 하면 되다 betekent \"je hoeft alleen maar\".", "만 staat na 기, niet na -(으)면."] },
    { type: "mc", q: "이 서류에 이름을 ___ 돼요. (Je hoeft alleen je naam op dit formulier te schrijven.)",
      options: ["쓰기만 하면", "쓰면만", "썼기만 하면", "쓰기만 해서"], answer: 0,
      why: ["Goed: -기만 하면 되다 = je hoeft alleen maar ...", "만 staat na 기, niet na -(으)면.", "Vóór 기만 komt geen verleden tijd.", "-아/어서 past niet vóór 되다 in deze betekenis."] }
  ]
})
