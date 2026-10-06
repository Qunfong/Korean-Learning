({
  id: "04", slug: "beobida", title: "-는 법이다", sub: "Zo gaat het nu eenmaal",
  canDo: "Je kunt nu een algemene waarheid of levensles uitspreken met -는 법이다, en je kiest tussen -는 법이다 en -기 마련이다.",
  guess: {
    q: "\"Iedereen maakt in het begin fouten. Zo gaat dat nu eenmaal.\" Welke zin klopt, denk je?",
    options: ["처음에는 누구나 실수하는 법이에요.", "처음에는 누구나 실수한 법이에요.", "처음에는 누구나 실수할 법이에요.", "처음에는 누구나 실수하는 법해요."], answer: 0,
    why: ["Goed: werkwoord + -는 법이다 voor iets wat altijd zo gaat.", "-ㄴ is verleden. Een algemene waarheid staat in het heden.", "-ㄹ vóór 법 is geen vorm voor een algemene waarheid. Gebruik -는 법이다.", "Na 법 komt 이다, hier 이에요."]
  },
  problem: "Je wilt zeggen dat iets altijd zo gaat, als een regel van het leven. In het Nederlands zeg je \"zo gaat dat nu eenmaal\". In het Koreaans plak je -는 법이다 achter het werkwoord.",
  pattern: [
    { l: "wie", v: "노력하는 사람이", c: 1 }, { l: "werkwoord", v: "성공하", c: 4 }, { l: "법이다", v: "는 법이다", c: 2, key: true }
  ],
  patternCap: "Algemene situatie + werkwoord + -는 법이다 / bijvoeglijk werkwoord + -(으)ㄴ 법이다; spreektaal: -기 마련이에요, 원래 ... -아요",
  rules: [
    "Werkwoord: -는 법이다 (실수하는, 느는). Bijvoeglijk werkwoord: -(으)ㄴ 법이다 (쓴, 낯선).",
    "Je gebruikt het voor algemene waarheden, niet voor één gebeurtenis. Daarom staat er geen verleden vóór 법.",
    "Met -아/어야 하는 법이다 geef je een norm: zo hoort het.",
    "법 is een los woord: schrijf een spatie ervoor. In beleefde spreektaal zeg je -는 법이에요.",
    "Register: schrijftaal en wijze raad. Het klinkt wat belerend. Alledaags zeg je -기 마련이에요, of 원래 ... -아요."
  ],
  pitfall: "Gebruik -는 법이다 niet voor je eigen eenmalige ervaring. 저는 어제 늦게 일어나는 법이에요 klopt niet.",
  examples: [
    { cn: "노력하는 사람이 결국 성공하는 법이다.", py: "Noryeokaneun sarami gyeolguk seonggonghaneun beobida.", nl: "Wie hard werkt, slaagt uiteindelijk. Zo gaat dat." },
    { cn: "좋은 약은 입에 쓴 법이에요.", py: "Joeun yageun ibe sseun beobieyo.", nl: "Goede medicijnen smaken nu eenmaal bitter." },
    { cn: "시간이 지나면 아픔도 잊게 되는 법이에요.", py: "Sigani jinamyeon apeumdo itge doeneun beobieyo.", nl: "Na verloop van tijd vergeet je ook de pijn." },
    { cn: "가까운 사이일수록 예의를 지켜야 하는 법이다.", py: "Gakkaun saiilsurok yeuireul jikyeoya haneun beobida.", nl: "Hoe dichter je bij iemand staat, hoe beleefder je moet blijven." }
  ],
  nuance: [
    { h: "-는 법이다 of -기 마련이다?",
      p: "Beide betekenen \"zo gaat het nu eenmaal\". -기 마련이다 beschrijft een natuurlijk, onvermijdelijk gevolg, en is gewoner in spreektaal. -는 법이다 klinkt als een levensles of wet, en kan ook een norm geven: -아야 하는 법이다 (zo hoort het). Met -아야 하다 gebruik je geen 마련이다. Let op de vorm: 마련이다 neemt altijd -기, 법이다 neemt -는 of -(으)ㄴ.",
      ex: [
        { cn: "사람은 누구나 늙기 마련이다.", py: "Sarameun nuguna neukgi maryeonida.", nl: "Ieder mens wordt nu eenmaal oud." },
        { cn: "윗사람에게는 예의를 지켜야 하는 법이다.", py: "Witsaramegeneun yeuireul jikyeoya haneun beobida.", nl: "Tegenover ouderen hoor je beleefd te zijn." }
      ] },
    { h: "Niet verwarren: -(으)ㄹ 법하다",
      p: "-(으)ㄹ 법하다 lijkt op -는 법이다, maar betekent iets anders: \"het is aannemelijk, het kan best\". Het gaat over een concrete situatie, niet over een algemene waarheid. Vaak met 도: -(으)ㄹ 법도 하다.",
      ex: [
        { cn: "그렇게 오래 기다렸으니 화를 낼 법도 해요.", py: "Geureoke orae gidaryeosseuni hwareul nael beopdo haeyo.", nl: "Hij heeft zo lang gewacht. Het is begrijpelijk dat hij boos wordt." }
      ] },
    { h: "Register: belerend in spreektaal",
      p: "-는 법이다 staat veel in essays, columns en spreekwoorden. In een gesprek klinkt het als wijze raad van een oudere. Tegen iemand die ouder is dan jij kan het betweterig klinken. Alledaags zeg je 원래 (van nature) met een gewone zin, of -기 마련이에요.",
      ex: [
        { cn: "원래 처음에는 다 떨려요.", py: "Wollae cheoeumeneun da tteollyeoyo.", nl: "In het begin is iedereen gewoon zenuwachtig." }
      ] }
  ],
  mistakes: [
    { wrong: "처음에는 누구나 실수한 법이에요.", right: "처음에는 누구나 실수하는 법이에요.", why: "Een algemene waarheid staat in het heden. Een werkwoord krijgt -는." },
    { wrong: "새로운 환경은 낯설은 법이에요.", right: "새로운 환경은 낯선 법이에요.", why: "Bij een stam op ㄹ valt de ㄹ weg vóór -ㄴ: 낯설다 wordt 낯선." },
    { wrong: "많이 먹으면 배가 부르기 법이다.", right: "많이 먹으면 배가 부른 법이다.", why: "-기 hoort bij 마련이다. Vóór 법이다 staat -는 of -(으)ㄴ." },
    { wrong: "저는 어제 늦게 일어나는 법이에요.", right: "저는 어제 늦게 일어났어요.", why: "Eén eigen ervaring is geen algemene waarheid. Gebruik een gewone zin." }
  ],
  vocab: [
    ["-는 법이다", "-neun beobida", "zo gaat het nu eenmaal (algemene waarheid)"], ["결국", "gyeolguk", "uiteindelijk"],
    ["낯설다", "natseolda", "onbekend, onwennig"], ["예의", "yeui", "beleefdheid, etiquette"],
    ["실력", "sillyeok", "vaardigheid, kunnen"], ["늘다", "neulda", "toenemen, beter worden"],
    ["위기", "wigi", "crisis"], ["극복하다", "geukbokada", "overwinnen"],
    ["겸손하다", "gyeomsonhada", "bescheiden"], ["좌절하다", "jwajeolhada", "de moed verliezen"]
  ],
  dialogue: [
    ["A", "발표를 망쳐서 너무 속상해요.", "Balpyoreul mangchyeoseo neomu soksanghaeyo.", "Ik heb mijn presentatie verknald. Ik baal enorm."],
    ["B", "첫 발표는 누구나 떨리는 법이에요.", "Cheot balpyoneun nuguna tteollineun beobieyo.", "Bij een eerste presentatie is iedereen zenuwachtig. Zo gaat dat."],
    ["A", "그래도 다음에는 잘하고 싶어요.", "Geuraedo daeumeneun jalhago sipeoyo.", "Toch wil ik het de volgende keer goed doen."],
    ["B", "연습하면 실력이 느는 법이에요.", "Yeonseupamyeon sillyeogi neuneun beobieyo.", "Als je oefent, word je vanzelf beter."],
    ["A", "고마워요. 힘이 나네요.", "Gomawoyo. Himi naneyo.", "Dank je. Daar krijg ik energie van."]
  ],
  reading: {
    title: "실패에서 배우는 것",
    lines: [
      { cn: "살다 보면 누구나 실패를 경험하게 된다.", py: "Salda bomyeon nuguna silpaereul gyeongheomhage doenda.", nl: "In het leven krijgt iedereen met mislukking te maken." },
      { cn: "실패한 직후에는 자신감을 잃고 좌절하는 법이다.", py: "Silpaehan jikueneun jasingameul ilko jwajeolhaneun beobida.", nl: "Vlak na een mislukking verlies je nu eenmaal je zelfvertrouwen en de moed." },
      { cn: "그러나 위기를 극복한 경험은 사람을 더 강하게 만든다.", py: "Geureona wigireul geukbokan gyeongheomeun sarameul deo ganghage mandeunda.", nl: "Maar de ervaring van een overwonnen crisis maakt een mens sterker." },
      { cn: "넘어져 본 사람이 일어서는 방법도 아는 법이다.", py: "Neomeojyeo bon sarami ireoseoneun bangbeopdo aneun beobida.", nl: "Wie gevallen is, weet ook hoe je weer opstaat." },
      { cn: "또한 성공했을 때일수록 겸손해야 하는 법이다.", py: "Ttohan seonggonghaesseul ttaeilsurok gyeomsonhaeya haneun beobida.", nl: "Ook hoor je juist na een succes bescheiden te blijven." },
      { cn: "자만하는 순간 다시 실수하기 쉽기 때문이다.", py: "Jamanhaneun sungan dasi silsuhagi swipgi ttaemunida.", nl: "Want op het moment dat je verwaand wordt, maak je makkelijk weer fouten." },
      { cn: "결국 실패와 성공은 서로 이어져 있는 셈이다.", py: "Gyeolguk silpaewa seonggongeun seoro ieojyeo inneun semida.", nl: "Mislukking en succes zijn dus eigenlijk met elkaar verbonden." },
      { cn: "그러므로 실패를 두려워하지 말고 그 안에서 배울 점을 찾아야 한다.", py: "Geureomeuro silpaereul duryeowohaji malgo geu aneseo baeul jeomeul chajaya handa.", nl: "Wees dus niet bang voor mislukking, maar zoek wat je ervan kunt leren." }
    ],
    questions: [
      { type: "mc", q: "Wat gebeurt er volgens de tekst vlak na een mislukking?",
        options: ["Je verliest je zelfvertrouwen en de moed.", "Je wordt meteen sterker.", "Je wordt verwaand.", "Je vergeet de mislukking."], answer: 0,
        why: ["Goed: 자신감을 잃고 좌절하는 법이다.", "Sterker word je pas als je de crisis overwint.", "Verwaandheid hoort bij succes, niet bij mislukking.", "Over vergeten staat niets in de tekst."] },
      { type: "mc", q: "Waarom moet je na een succes bescheiden blijven?",
        options: ["Omdat je anders makkelijk weer fouten maakt.", "Omdat anderen jaloers worden.", "Omdat succes nooit lang duurt.", "Omdat je anders je baan verliest."], answer: 0,
        why: ["Goed: 자만하는 순간 다시 실수하기 쉽기 때문이다.", "Over jaloezie staat niets in de tekst.", "De tekst zegt niet hoe lang succes duurt.", "Over een baan staat niets in de tekst."] },
      { type: "mc", q: "성공했을 때일수록 겸손해야 하는 법이다. Wat drukt -아야 하는 법이다 hier uit?",
        options: ["Een algemene norm: zo hoort het.", "Een persoonlijke ervaring van de schrijver.", "Een voorspelling voor morgen.", "Een vermoeden: misschien is het zo."], answer: 0,
        why: ["Goed: -아야 하는 법이다 geeft aan hoe het hoort, voor iedereen.", "-는 법이다 gaat niet over één eigen ervaring.", "Het gaat om een algemene regel, niet over een bepaald moment.", "Een vermoeden is -(으)ㄹ 법하다 of -(으)ㄹ 것 같다."] }
    ]
  },
  questions: [
    { type: "mc", q: "잘못을 하면 벌을 ___ 법이다. (Wie iets fout doet, wordt nu eenmaal gestraft.)",
      options: ["받는", "받은", "받을", "받기"], answer: 0,
      why: ["Goed: werkwoord + -는 법이다.", "-은 is verleden. Een algemene regel staat in het heden.", "-을 vóór 법 is geen vorm voor een algemene waarheid.", "-기 hoort bij 마련이다 en past niet vóór 법."] },
    { type: "mc", q: "\"Een nieuwe omgeving is in het begin altijd onwennig.\"",
      options: ["새로운 환경은 처음에는 낯선 법이에요.", "새로운 환경은 처음에는 낯설은 법이에요.", "새로운 환경은 처음에는 낯설는 법이에요.", "새로운 환경은 처음에는 낯설 법이에요."], answer: 0,
      why: ["Goed: 낯설다 is bijvoeglijk en verliest de ㄹ vóór -ㄴ: 낯선.", "Bij een stam op ㄹ valt de ㄹ weg. Er komt geen -은.", "낯설다 is een bijvoeglijk werkwoord. -는 past niet.", "Vóór 법이다 hoort een vorm met -ㄴ."] },
    { type: "mc", q: "Welke zin past NIET bij -는 법이다?",
      options: ["저는 어제 늦게 일어나는 법이에요.", "부모는 자식을 걱정하는 법이에요.", "봄이 오면 꽃이 피는 법이에요.", "돈이 많으면 걱정도 많은 법이에요."], answer: 0,
      why: ["Goed: dit is één persoonlijke gebeurtenis, geen algemene waarheid.", "Dit kan: ouders maken zich altijd zorgen.", "Dit kan: het is een vaste regel van de natuur.", "Dit kan: het is een algemene levensles."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hoe meer haast, hoe makkelijker je fouten maakt.\"",
      tokens: [["급할수록", "geupalsurok"], ["실수하기", "silsuhagi"], ["쉬운", "swiun"], ["법이에요", "beobieyo"]] },
    { type: "mc", q: "가까운 사이일수록 예의를 지켜야 ___. (Hoe dichter je bij iemand staat, hoe meer je beleefd hoort te blijven.)",
      options: ["하는 법이다", "하기 마련이다", "한 법이다", "할 법이다"], answer: 0,
      why: ["Goed: een norm met -아야 하다 combineer je met -는 법이다.", "마련이다 beschrijft een natuurlijk gevolg, geen norm. Met -아야 하다 past het niet.", "-ㄴ is verleden. Een norm geldt altijd.", "-ㄹ vóór 법 is geen vorm voor een algemene waarheid."] },
    { type: "mc", q: "사람은 누구나 ___ 마련이다. (Ieder mens wordt nu eenmaal oud.)",
      options: ["늙기", "늙는", "늙은", "늙을"], answer: 0,
      why: ["Goed: 마련이다 neemt altijd -기.", "-는 hoort bij 법이다, niet bij 마련이다.", "-은 hoort niet vóór 마련이다.", "-을 hoort niet vóór 마련이다."] },
    { type: "mc", q: "그렇게 오래 기다렸으니 화를 낼 법도 해요. Wat betekent dit?",
      options: ["Hij heeft zo lang gewacht. Het is begrijpelijk dat hij boos wordt.", "Hij wordt nu eenmaal altijd boos.", "Hij heeft zo lang gewacht, dus hij moet boos worden.", "Hij heeft lang gewacht en werd gisteren boos."], answer: 0,
      why: ["Goed: -(으)ㄹ 법하다 betekent \"het is aannemelijk\".", "Dat is een algemene waarheid, zoals bij -는 법이다. 법하다 gaat over deze situatie.", "법하다 geeft geen verplichting aan.", "법하다 zegt niet dat het al gebeurd is."] },
    { type: "fill", q: "겨울이 가면 봄이 ___ 법이다. (Na de winter komt nu eenmaal de lente.)",
      answers: ["오는"], hint: "오다 is een werkwoord. Welke vorm komt vóór 법?", why: "Werkwoord + -는 법이다: 오는 법이다." },
    { type: "order", q: "Zet in de goede volgorde: \"Ieder mens maakt nu eenmaal fouten.\"",
      tokens: [["사람은", "sarameun"], ["누구나", "nuguna"], ["실수하는", "silsuhaneun"], ["법이다", "beobida"]] },
    { type: "open", q: "Vertaal als levensles: \"Wie veel leest, weet veel.\"",
      model: ["책을 많이 읽는 사람은 아는 것이 많은 법이에요.", "책을 많이 읽으면 아는 게 많아지는 법이에요.", "많이 읽는 사람이 많이 아는 법이다."],
      tip: "Check: 많다 is bijvoeglijk (많은 법), 많아지다 is een werkwoord (많아지는 법)." },
    { type: "open", q: "Vertaal in schrijfstijl (-다): \"Hoe meer je hebt, hoe meer je nu eenmaal wilt.\"",
      model: ["가진 것이 많을수록 더 많이 원하는 법이다.", "많이 가질수록 더 갖고 싶어지는 법이다.", "가진 것이 많을수록 더 많은 것을 원하기 마련이다."],
      tip: "Check: werkwoord + -는 법이다 (of -기 마련이다), geen verleden vóór 법, en een -다-einde." }
  ],
  review: [
    { type: "mc", q: "비싼 물건은 대개 품질이 ___ 법이에요. (Dure spullen zijn meestal van goede kwaliteit.)",
      options: ["좋은", "좋는", "좋을", "좋아"], answer: 0,
      why: ["Goed: 좋다 is bijvoeglijk, dus -은 법이다.", "좋다 is een bijvoeglijk werkwoord. -는 past niet.", "-을 vóór 법 is geen vorm voor een algemene waarheid.", "Vóór 법 hoort een vorm met -ㄴ, niet -아."] },
    { type: "mc", q: "아는 만큼 보이는 법이다. Wat betekent dit?",
      options: ["Je ziet zoveel als je weet. Zo gaat dat nu eenmaal.", "Je moet meer kijken om meer te weten.", "Gisteren zag ik alles wat ik wist.", "Ik weet niet wat ik zie."], answer: 0,
      why: ["Goed: -는 법이다 geeft een algemene waarheid.", "De richting is omgedraaid. Kennis komt eerst, zien volgt.", "-는 법이다 gaat niet over één moment in het verleden.", "De zin ontkent niets."] },
    { type: "mc", q: "\"Een gewoonte is nu eenmaal moeilijk te veranderen.\"",
      options: ["습관은 바꾸기 어려운 법이다.", "습관은 바꾸기 어렵는 법이다.", "습관은 바꾸기 어려울 법이다.", "습관은 바꾸기 어려웠던 법이다."], answer: 0,
      why: ["Goed: 어렵다 is bijvoeglijk: 어려운 법이다.", "어렵다 is bijvoeglijk. -는 past niet.", "-ㄹ vóór 법 is geen vorm voor een algemene waarheid.", "Een algemene waarheid staat niet in de verleden tijd."] }
  ]
})
