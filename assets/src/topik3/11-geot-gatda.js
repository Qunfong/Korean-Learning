({
  id: "11", slug: "geot-gatda", title: "-(으)ㄴ/는/(으)ㄹ 것 같다", sub: "Het lijkt erop dat: vermoeden en zachter formuleren",
  canDo: "Je kunt nu een vermoeden uitspreken over nu, het verleden en de toekomst met 것 같다, je mening zachter brengen, en je weet wanneer -나 보다 beter past.",
  guess: {
    q: "Je kijkt naar de donkere lucht. \"Het gaat volgens mij regenen.\" Welke zin klopt, denk je?",
    options: ["비가 올 것 같아요.", "비가 온 것 같아요.", "비가 오을 것 같아요.", "비가 올 것 같이요."], answer: 0,
    why: ["Goed: iets wat nog moet komen, krijgt -(으)ㄹ: 올 것 같아요.", "온 is verleden: \"het heeft volgens mij geregend\".", "오 eindigt op een klinker, dus alleen ㄹ: 올, niet 오을.", "같이 betekent \"samen\". De vorm is 같아요."]
  },
  problem: "In het Nederlands zeg je \"ik denk dat\" of \"het lijkt erop dat\". In het Koreaans plak je dat achter het werkwoord: 것 같아요. Je gebruikt het voor een vermoeden. Maar Koreanen gebruiken het ook heel vaak om een mening of klacht zachter te maken.",
  pattern: [
    { l: "situatie", v: "비가", c: 1 }, { l: "stam + 는/ㄴ/ㄹ", v: "오는", c: 2 }, { l: "것 같다", v: "것 같아요", c: 4, key: true }
  ],
  patternCap: "Werkwoord: -는 (nu) · -(으)ㄴ (verleden) · -(으)ㄹ (toekomst/gok) + 것 같다 · Bijvoeglijk: -(으)ㄴ (nu) · -(으)ㄹ (gok) · Naamwoord: 인 것 같다",
  rules: [
    "Werkwoord nu: stam + 는: 가는 것 같아요. Verleden: stam + (으)ㄴ: 간 것 같아요, 먹은 것 같아요.",
    "Toekomst of een gok zonder bewijs: stam + (으)ㄹ: 갈 것 같아요, 추울 것 같아요.",
    "Bijvoeglijk werkwoord nu: stam + (으)ㄴ: 바쁜 것 같아요, 작은 것 같아요. Let op: 있다/없다 krijgen 는: 맛있는 것 같아요.",
    "Naamwoord + 인 것 같아요: 학생인 것 같아요. ㄹ-stammen verliezen de ㄹ vóór ㄴ: 길다 → 긴 것 같아요.",
    "Vermoedde je het vroeger? Zet 같다 in de verleden tijd: 비가 올 것 같았어요 = het leek te gaan regenen."
  ],
  pitfall: "De tijd zit in de vorm vóór 것, niet in 같아요. 온 것 같아요 (het heeft geregend) en 올 것 같아요 (het gaat regenen) zijn verschillende vermoedens.",
  examples: [
    { cn: "밖에 비가 오는 것 같아요.", py: "Bakke biga oneun geot gatayo.", nl: "Het lijkt erop dat het buiten regent." },
    { cn: "민수 씨가 벌써 집에 간 것 같아요.", py: "Minsu ssiga beolsseo jibe gan geot gatayo.", nl: "Minsu is volgens mij al naar huis gegaan." },
    { cn: "내일은 더 추울 것 같아요.", py: "Naeireun deo chuul geot gatayo.", nl: "Ik denk dat het morgen kouder wordt." },
    { cn: "이 옷은 저한테 좀 작은 것 같아요.", py: "I oseun jeohante jom jageun geot gatayo.", nl: "Deze kleren zijn volgens mij wat te klein voor mij." }
  ],
  nuance: [
    { h: "Welke tijd kies je?",
      p: "Kijk naar het moment van wat je vermoedt. Gebeurt het nu? Dan -는. Is het al gebeurd? Dan -(으)ㄴ. Komt het nog, of gok je zonder direct bewijs? Dan -(으)ㄹ. Een natte straat wijst op het verleden, een donkere lucht op de toekomst.",
      ex: [
        { cn: "길이 젖었어요. 비가 온 것 같아요.", py: "Giri jeojeosseoyo. Biga on geot gatayo.", nl: "De straat is nat. Het heeft volgens mij geregend." },
        { cn: "하늘이 어두워요. 비가 올 것 같아요.", py: "Haneuri eoduwoyo. Biga ol geot gatayo.", nl: "De lucht is donker. Het gaat volgens mij regenen." }
      ] },
    { h: "Zachter formuleren",
      p: "Koreanen zeggen hun mening liever niet te direct. Met 것 같아요 maak je kritiek of een weigering vriendelijker, ook als je het zeker weet. In de winkel of bij een collega klinkt dat beleefd. In spreektaal hoor je vaak 거 같아요. In formele tekst schrijf je 것 같습니다.",
      ex: [
        { cn: "이 찌개는 좀 짠 것 같아요.", py: "I jjigaeneun jom jjan geot gatayo.", nl: "Deze stoofpot is volgens mij een beetje zout." },
        { cn: "오늘은 좀 어려울 것 같아요.", py: "Oneureun jom eoryeoul geot gatayo.", nl: "Vandaag gaat het denk ik lastig worden. (= nee, beleefd)" }
      ] },
    { h: "것 같다 of -나 보다 / -(으)ㄴ가 보다?",
      p: "-나 보다 (werkwoord) en -(으)ㄴ가 보다 (bijvoeglijk) gebruik je alleen voor een conclusie uit iets wat je ziet of hoort. Je hebt het zelf niet meegemaakt. 것 같다 kan dat ook, maar ook voor je eigen ervaring en mening. Heb je het eten zelf geproefd? Dan alleen 맛있는 것 같아요.",
      ex: [
        { cn: "줄이 길어요. 이 식당이 맛있나 봐요.", py: "Juri gireoyo. I sikdangi masinna bwayo.", nl: "Wat een rij. Dit restaurant is zeker lekker." },
        { cn: "먹어 봤는데 정말 맛있는 것 같아요.", py: "Meogeo bwanneunde jeongmal masinneun geot gatayo.", nl: "Ik heb het geproefd, en ik vind het echt lekker." },
        { cn: "지원 씨가 요즘 바쁜가 봐요.", py: "Jiwon ssiga yojeum bappeunga bwayo.", nl: "Jiwon heeft het tegenwoordig zeker druk. (ik zie haar nooit)" }
      ] }
  ],
  mistakes: [
    { wrong: "내일 비가 오는 것 같아요.", right: "내일 비가 올 것 같아요.", why: "Voor een vermoeden over morgen gebruik je -(으)ㄹ: 올 것 같아요." },
    { wrong: "날씨가 춥는 것 같아요.", right: "날씨가 추운 것 같아요.", why: "Een bijvoeglijk werkwoord krijgt in het heden -(으)ㄴ, geen -는. 춥다 wordt 추운." },
    { wrong: "그 사람은 학생 것 같아요.", right: "그 사람은 학생인 것 같아요.", why: "Na een naamwoord heb je 이다 nodig: 학생 + 인 것 같아요." },
    { wrong: "어제 민수 씨가 오는 것 같아요.", right: "어제 민수 씨가 온 것 같아요.", why: "Iets wat al gebeurd is, krijgt bij een werkwoord -(으)ㄴ: 온 것 같아요." }
  ],
  vocab: [
    ["-(으)ㄴ/는/(으)ㄹ 것 같다", "-(eu)n/neun/(eu)l geot gatda", "het lijkt erop dat; ik denk dat"], ["흐리다", "heurida", "bewolkt zijn"], ["젖다", "jeotda", "nat worden"],
    ["짜다", "jjada", "zout zijn"], ["줄", "jul", "rij (wachtende mensen)"], ["룸메이트", "rummeiteu", "huisgenoot"],
    ["조용하다", "joyonghada", "stil zijn"], ["부엌", "bueok", "keuken"], ["중요하다", "jungyohada", "belangrijk zijn"], ["스트레스", "seuteureseu", "stress"]
  ],
  dialogue: [
    ["A", "하늘이 많이 흐려요. 비가 올 것 같아요.", "Haneuri mani heuryeoyo. Biga ol geot gatayo.", "De lucht is erg bewolkt. Het gaat volgens mij regenen."],
    ["B", "그래요? 저는 우산이 없는데요.", "Geuraeyo? Jeoneun usani eomneundeyo.", "O ja? Ik heb geen paraplu bij me."],
    ["A", "제 우산을 같이 써요. 그런데 민수 씨는 어디 있어요?", "Je usaneul gachi sseoyo. Geureonde Minsu ssineun eodi isseoyo?", "Deel mijn paraplu maar. Trouwens, waar is Minsu?"],
    ["B", "아까 가방을 들고 나갔어요. 벌써 집에 간 것 같아요.", "Akka gabangeul deulgo nagasseoyo. Beolsseo jibe gan geot gatayo.", "Hij ging net weg met zijn tas. Hij is volgens mij al naar huis."],
    ["A", "요즘 많이 피곤해 보였어요. 일이 많은 것 같아요.", "Yojeum mani pigonhae boyeosseoyo. Iri maneun geot gatayo.", "Hij zag er de laatste tijd erg moe uit. Hij heeft het volgens mij druk."]
  ],
  reading: {
    title: "룸메이트",
    lines: [
      { cn: "오늘 아침에 룸메이트 지원 씨의 방이 아주 조용했어요.", py: "Oneul achime rummeiteu Jiwon ssiui bangi aju joyonghaesseoyo.", nl: "Vanochtend was de kamer van mijn huisgenoot Jiwon heel stil." },
      { cn: "문 앞에 신발이 없었어요. 벌써 학교에 간 것 같았어요.", py: "Mun ape sinbari eopseosseoyo. Beolsseo hakgyoe gan geot gatasseoyo.", nl: "Bij de deur stonden geen schoenen. Ze leek al naar school te zijn." },
      { cn: "부엌에는 커피 컵이 세 개 있었어요.", py: "Bueokeneun keopi keobi se gae isseosseoyo.", nl: "In de keuken stonden drie koffiekopjes." },
      { cn: "어젯밤에 늦게까지 공부한 것 같아요.", py: "Eojetbame neutgekkaji gongbuhan geot gatayo.", nl: "Ze heeft gisteravond volgens mij tot laat gestudeerd." },
      { cn: "지원 씨는 다음 주에 중요한 시험이 있어요.", py: "Jiwon ssineun daeum jue jungyohan siheomi isseoyo.", nl: "Jiwon heeft volgende week een belangrijk examen." },
      { cn: "요즘 시험 때문에 스트레스가 많은 것 같아요.", py: "Yojeum siheom ttaemune seuteureseuga maneun geot gatayo.", nl: "Ze heeft volgens mij veel stress door het examen." },
      { cn: "오늘 저녁에는 지원 씨가 아주 피곤할 것 같아요.", py: "Oneul jeonyeogeneun Jiwon ssiga aju pigonhal geot gatayo.", nl: "Vanavond is Jiwon vast heel moe." },
      { cn: "그래서 저녁에 지원 씨가 좋아하는 김치찌개를 만들 거예요.", py: "Geuraeseo jeonyeoge Jiwon ssiga joahaneun gimchijjigaereul mandeul geoyeyo.", nl: "Daarom maak ik vanavond kimchi-stoofpot, waar Jiwon van houdt." }
    ],
    questions: [
      { type: "mc", q: "Waarom denkt de schrijver dat Jiwon al naar school is?",
        options: ["Haar schoenen stonden niet bij de deur.", "Er stonden drie koffiekopjes in de keuken.", "Jiwon heeft volgende week een examen.", "Jiwon stuurde een bericht."], answer: 0,
        why: ["Goed: 문 앞에 신발이 없었어요. 벌써 학교에 간 것 같았어요.", "De kopjes wijzen op laat studeren, niet op vertrekken.", "Het examen verklaart de stress, niet waar ze nu is.", "Over een bericht staat niets in de tekst."] },
      { type: "mc", q: "Wat gaat de schrijver vanavond doen?",
        options: ["Kimchi-stoofpot maken.", "Samen met Jiwon studeren.", "Koffie zetten voor Jiwon.", "Naar Jiwons school gaan."], answer: 0,
        why: ["Goed: 김치찌개를 만들 거예요.", "Studeren doet Jiwon, de schrijver kookt.", "De koffie dronk Jiwon zelf gisteravond.", "Daar staat niets over in de tekst."] },
      { type: "mc", q: "어젯밤에 늦게까지 공부한 것 같아요. Wat laat 공부한 것 같아요 zien?",
        options: ["Een vermoeden over iets wat al gebeurd is.", "Een vermoeden over iets wat nog gaat gebeuren.", "Iets wat de schrijver zelf zeker weet.", "Een plan van de schrijver."], answer: 0,
        why: ["Goed: 공부한 = verleden, 것 같아요 = vermoeden, op basis van de kopjes.", "Voor de toekomst zou het 공부할 것 같아요 zijn.", "Het is een conclusie uit de koffiekopjes, geen zekerheid.", "Het gaat over Jiwon, niet over een plan."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik denk dat het morgen gaat sneeuwen.\"",
      options: ["내일 눈이 올 것 같아요.", "내일 눈이 온 것 같아요.", "내일 눈이 올 것 같았어요.", "내일 눈이 올 것 같다요."], answer: 0,
      why: ["Goed: toekomst = 올 + 것 같아요.", "온 is verleden: dat past niet bij morgen.", "같았어요 betekent \"het leek\": jouw vermoeden ligt dan in het verleden.", "같다 + 요 kan niet. De beleefde vorm is 같아요."] },
    { type: "mc", q: "이 가방은 좀 ___ 것 같아요. (Deze tas is volgens mij wat duur.)",
      options: ["비싼", "비싸는", "비싸은", "비쌌는"], answer: 0,
      why: ["Goed: bijvoeglijk werkwoord nu = stam + ㄴ: 비싼.", "-는 is voor werkwoorden in het heden, niet voor bijvoeglijke.", "Na een klinker komt alleen ㄴ, geen 은.", "Na 았/었 komt geen 는; en de tas is nu duur."] },
    { type: "mc", q: "Je hebt het gerecht zelf geproefd en vindt het lekker. Welke zin past NIET?",
      options: ["이 음식이 맛있나 봐요.", "이 음식이 맛있는 것 같아요.", "이 음식이 맛있어요.", "이 음식이 정말 맛있네요."], answer: 0,
      why: ["Goed: deze past niet. -나 보다 is een conclusie uit wat je ziet, niet uit je eigen ervaring.", "Dit past: 것 같다 kan ook voor je eigen mening.", "Dit past: een gewone, directe uitspraak.", "Dit past: -네요 toont dat je het nu merkt."] },
    { type: "mc", q: "Je ziet Jiwon nooit meer. 지원 씨가 요즘 ___ 봐요. (Ze heeft het zeker druk.)",
      options: ["바쁜가", "바쁘는가", "바쁜 것", "바쁜데"], answer: 0,
      why: ["Goed: bijvoeglijk werkwoord + -(으)ㄴ가 보다.", "Een bijvoeglijk werkwoord krijgt geen 는.", "것 hoort bij 같다, niet bij 보다.", "-는데 is een verbindingsvorm; vóór 보다 hoort -(으)ㄴ가."] },
    { type: "order", q: "Zet in de goede volgorde: \"Als ik naar de lucht kijk, denk ik dat het gaat regenen.\"",
      tokens: [["하늘을", "haneureul"], ["보니까", "bonikka"], ["비가", "biga"], ["올", "ol"], ["것", "geot"], ["같아요.", "gatayo."]] },
    { type: "order", q: "Zet in de goede volgorde: \"Deze schoenen zijn volgens mij wat klein.\"",
      tokens: [["이 신발은", "i sinbareun"], ["좀 작은", "jom jageun"], ["것", "geot"], ["같아요.", "gatayo."]] },
    { type: "fill", q: "저 사람은 이 학교 ___ 것 같아요. (Die persoon is volgens mij een leraar van deze school.)", answers: ["선생님인"],
      hint: "선생님 + 이다 in de bijvoeglijke vorm", why: "Na een naamwoord: naamwoord + 인 것 같아요: 선생님인." },
    { type: "mc", q: "Je collega vraagt wat je van zijn tekst vindt. Je vindt hem wat lang. Welke zin is zacht en correct?",
      options: ["좀 긴 것 같아요.", "너무 길어요.", "좀 기는 것 같아요.", "좀 길은 것 같아요."], answer: 0,
      why: ["Goed: 길다 verliest de ㄹ: 긴 것 같아요. Dat klinkt vriendelijk.", "Correct Koreaans, maar erg direct. Met 것 같아요 klinkt het zachter.", "Een bijvoeglijk werkwoord krijgt geen -는.", "Bij een ㄹ-stam valt de ㄹ weg: 긴, niet 길은."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["날씨가 춥는 것 같아요.", "날씨가 추운 것 같아요.", "날씨가 추울 것 같아요.", "날씨가 추웠던 것 같아요."], answer: 0,
      why: ["Goed: dit is fout. 춥다 is bijvoeglijk, dus 추운, niet 춥는.", "Dit klopt: het is nu koud, denk ik.", "Dit klopt: het wordt koud, denk ik.", "Dit klopt: het was toen koud, denk ik."] },
    { type: "mc", q: "Je vriend gaapt de hele dag. 어제 늦게 ___ 봐요. (Hij is gisteren zeker laat gaan slapen.)",
      options: ["잤나", "자나", "잔가", "잤는"], answer: 0,
      why: ["Goed: verleden + -나 보다: 잤나 봐요.", "어제 vraagt de verleden tijd: 잤나.", "-(으)ㄴ가 is voor bijvoeglijke werkwoorden. Bij 자다 (verleden) zeg je 잤나.", "Na 잤 hoort -나, niet -는."] },
    { type: "open", q: "Vertaal: \"Ik denk dat het morgen koud wordt.\"", model: ["내일 추울 것 같아요.", "내일은 날씨가 추울 것 같아요.", "내일은 추울 것 같습니다."],
      tip: "Check: toekomst = -(으)ㄹ. Bij 춥다 wordt dat 추울 (ㅂ wordt 우)." },
    { type: "open", q: "Vertaal: \"Hij is volgens mij al vertrokken.\"", model: ["그 사람은 벌써 출발한 것 같아요.", "벌써 떠난 것 같아요.", "그는 이미 간 것 같아요."],
      tip: "Check: al gebeurd = stam + (으)ㄴ vóór 것 같아요 (출발한, 떠난, 간)." }
  ],
  review: [
    { type: "mc", q: "\"Die film is volgens mij leuk.\"",
      options: ["그 영화는 재미있는 것 같아요.", "그 영화는 재미있은 것 같아요.", "그 영화는 재미있다 것 같아요.", "그 영화는 재미있는 것 같이요."], answer: 0,
      why: ["Goed: 있다/없다 krijgen 는: 재미있는.", "Bij woorden op 있다 gebruik je 는, niet 은.", "Vóór 것 moet een bijvoeglijke vorm staan, niet de woordenboekvorm.", "같이 betekent \"samen\". De vorm is 같아요."] },
    { type: "mc", q: "내일은 공원에 사람이 ___ 것 같아요. (Ik vermoed dat het morgen druk is in het park.)",
      options: ["많을", "많는", "많아을", "많을는"], answer: 0,
      why: ["Goed: gok over morgen = stam + 을: 많을.", "많다 is bijvoeglijk en krijgt geen 는.", "-(으)ㄹ komt na de stam, niet na de 아-vorm.", "Er hoort maar één vorm vóór 것: 많을."] },
    { type: "mc", q: "Je buurman draagt veel dozen naar buiten. 옆집 사람이 ___ 봐요. (Hij gaat zeker verhuizen.)",
      options: ["이사하나", "이사한가", "이사할나", "이사하는나"], answer: 0,
      why: ["Goed: werkwoord + -나 보다: 이사하나 봐요.", "-(으)ㄴ가 is voor bijvoeglijke werkwoorden, niet voor 이사하다.", "Vóór -나 komt de kale stam, geen ㄹ.", "-나 komt direct na de stam, zonder 는."] }
  ]
})
