({
  id: "06", slug: "myeon", title: "-(으)면", sub: "Een voorwaarde: als",
  canDo: "Je kunt nu een voorwaarde noemen en zeggen wat er dan gebeurt, met -(으)면. Je kunt ook zeggen wat genoeg is (-(으)면 돼요) en wat niet mag (-(으)면 안 돼요).",
  guess: {
    q: "\"Als het regent, blijf ik thuis.\" Welke zin klopt, denk je?",
    options: ["비가 오면 집에 있어요.", "비가 오으면 집에 있어요.", "비가 와면 집에 있어요.", "비가 옴면 집에 있어요."], answer: 0,
    why: ["Goed: 오 eindigt op een klinker, dus -면.", "-으면 komt alleen na een 받침.", "-면 komt direct op de stam, niet op de 아/어-vorm.", "-면 is een aparte lettergreep: 오면."]
  },
  problem: "Je wilt zeggen wat er gebeurt onder een voorwaarde: \"Als het regent, blijf ik thuis.\" In het Nederlands kan \"als\" vooraan of in het midden staan. In het Koreaans komt de voorwaarde altijd eerst. Je plakt -(으)면 aan de stam, en daarna volgt wat er dan gebeurt.",
  pattern: [
    { l: "voorwaarde", v: "비가 오", c: 3 }, { l: "-(으)면", v: "면", c: 2, key: true }, { l: "dan", v: "집에 있어요", c: 5 }
  ],
  patternCap: "Stam + 면 (na klinker of ㄹ) / 으면 (na 받침) + wat er dan gebeurt. Ook: -(으)면 돼요 (genoeg), -(으)면 안 돼요 (mag niet).",
  rules: [
    "Stam op een klinker: -면. 가다 wordt 가면, 비싸다 wordt 비싸면.",
    "Stam op een 받침: -으면. 먹다 wordt 먹으면, 있다 wordt 있으면.",
    "Stam op ㄹ: alleen -면. 살다 wordt 살면, 멀다 wordt 멀면. Bij 듣다 wordt de ㄷ een ㄹ: 들으면.",
    "De voorwaarde staat in de gewone vorm, ook als het over morgen gaat: 내일 비가 오면 ...",
    "Na -(으)면 mag een opdracht of voorstel: 시간이 있으면 전화하세요."
  ],
  pitfall: "Bij een ㄹ-stam komt er geen 으. Zeg niet 살으면, maar 살면.",
  examples: [
    { cn: "시간이 있으면 같이 영화 봐요.", py: "Sigani isseumyeon gachi yeonghwa bwayo.", nl: "Als je tijd hebt, laten we samen een film kijken." },
    { cn: "비가 오면 집에서 쉬어요.", py: "Biga omyeon jibeseo swieoyo.", nl: "Als het regent, rust ik thuis uit." },
    { cn: "너무 비싸면 안 살 거예요.", py: "Neomu bissamyeon an sal geoyeyo.", nl: "Als het te duur is, koop ik het niet." },
    { cn: "서울에 살면 지하철을 많이 타요.", py: "Seoure salmyeon jihacheoreul mani tayo.", nl: "Als je in Seoul woont, neem je vaak de metro." }
  ],
  nuance: [
    { h: "-(으)면 of -(으)ㄹ 때?",
      p: "-(으)면 is \"als\": misschien gebeurt het, misschien niet. -(으)ㄹ 때 is \"wanneer, op het moment dat\": het gebeurt zeker, je noemt alleen het moment. Voor een vast moment in het verleden kan -(으)면 dus niet. Zeg 어렸을 때, niet 어리면.",
      ex: [
        { cn: "내일 비가 오면 집에 있을 거예요.", py: "Naeil biga omyeon jibe isseul geoyeyo.", nl: "Als het morgen regent, blijf ik thuis." },
        { cn: "어렸을 때 부산에 살았어요.", py: "Eoryeosseul ttae Busane sarasseoyo.", nl: "Toen ik klein was, woonde ik in Busan." }
      ] },
    { h: "-(으)면 돼요 en -(으)면 안 돼요",
      p: "-(으)면 돼요 betekent letterlijk \"als je ... doet, is het goed\". Zo zeg je wat genoeg is: \"je hoeft alleen ...\". -(으)면 안 돼요 betekent \"als je ... doet, is het niet goed\": het mag niet. Je hoort dit vaak bij regels en uitleg.",
      ex: [
        { cn: "이 버스를 타면 돼요.", py: "I beoseureul tamyeon dwaeyo.", nl: "Je hoeft alleen deze bus te nemen." },
        { cn: "여기에서 사진을 찍으면 안 돼요.", py: "Yeogieseo sajineul jjigeumyeon an dwaeyo.", nl: "Je mag hier geen foto's maken." }
      ] },
    { h: "Telkens als: gewoontes",
      p: "Met de tegenwoordige tijd aan het eind betekent -(으)면 ook \"telkens als\". Zo beschrijf je een gewoonte of iets wat altijd gebeurt. In het Nederlands zeg je dan vaak \"als\" of \"wanneer\".",
      ex: [
        { cn: "피곤하면 커피를 마셔요.", py: "Pigonhamyeon keopireul masyeoyo.", nl: "Als ik moe ben, drink ik koffie." },
        { cn: "봄이 되면 꽃이 피어요.", py: "Bomi doemyeon kkochi pieoyo.", nl: "Als het lente wordt, gaan de bloemen bloeien." }
      ] }
  ],
  mistakes: [
    { wrong: "서울에 살으면 좋겠어요.", right: "서울에 살면 좋겠어요.", why: "Bij een ㄹ-stam komt er geen 으: 살면." },
    { wrong: "어리면 부산에 살았어요.", right: "어렸을 때 부산에 살았어요.", why: "Voor een vast moment in het verleden gebruik je -(으)ㄹ 때, niet -(으)면." },
    { wrong: "여기에서 담배를 피우면 안 해요.", right: "여기에서 담배를 피우면 안 돼요.", why: "\"Mag niet\" is -(으)면 안 돼요, met 되다, niet met 하다." },
    { wrong: "음악을 듣으면 기분이 좋아요.", right: "음악을 들으면 기분이 좋아요.", why: "Bij 듣다 wordt de ㄷ vóór een klinker een ㄹ: 들으면." }
  ],
  vocab: [
    ["-(으)면", "-(eu)myeon", "als (voorwaarde)"], ["-(으)면 되다", "-(eu)myeon doeda", "je hoeft alleen ..., het is genoeg als"], ["-(으)면 안 되다", "-(eu)myeon an doeda", "mag niet"],
    ["비싸다", "bissada", "duur zijn"], ["멀다", "meolda", "ver zijn"], ["지하철", "jihacheol", "metro"],
    ["등산", "deungsan", "bergwandelen"], ["신분증", "sinbunjeung", "identiteitsbewijs"], ["빌리다", "billida", "lenen (van iemand)"], ["돌려주다", "dollyeojuda", "teruggeven"]
  ],
  dialogue: [
    ["A", "내일 시간이 있으면 같이 등산 가요.", "Naeil sigani isseumyeon gachi deungsan gayo.", "Als je morgen tijd hebt, laten we samen de berg op gaan."],
    ["B", "좋아요. 그런데 비가 오면 어떻게 해요?", "Joayo. Geureonde biga omyeon eotteoke haeyo?", "Goed. Maar wat doen we als het regent?"],
    ["A", "비가 오면 카페에 가요.", "Biga omyeon kape-e gayo.", "Als het regent, gaan we naar een café."],
    ["B", "좋아요. 아침에 일어나면 전화할게요.", "Joayo. Achime ireonamyeon jeonhwahalgeyo.", "Goed. Als ik 's ochtends op ben, bel ik je."]
  ],
  reading: {
    title: "우리 동네 도서관",
    lines: [
      { cn: "저는 주말에 자주 도서관에 가요.", py: "Jeoneun jumare jaju doseogwane gayo.", nl: "In het weekend ga ik vaak naar de bibliotheek." },
      { cn: "도서관에 처음 가면 회원 카드를 만들어야 해요.", py: "Doseogwane cheoeum gamyeon hoewon kadeureul mandeureoya haeyo.", nl: "Als je voor het eerst naar de bibliotheek gaat, moet je een pasje maken." },
      { cn: "신분증을 보여 주면 돼요.", py: "Sinbunjeungeul boyeo jumyeon dwaeyo.", nl: "Je hoeft alleen je identiteitsbewijs te laten zien." },
      { cn: "도서관 안에서 음식을 먹으면 안 돼요.", py: "Doseogwan aneseo eumsigeul meogeumyeon an dwaeyo.", nl: "In de bibliotheek mag je niet eten." },
      { cn: "책을 빌리면 2주 후에 돌려줘야 해요.", py: "Chaegeul billimyeon i ju hue dollyeojwoya haeyo.", nl: "Als je een boek leent, moet je het na twee weken teruggeven." },
      { cn: "늦게 돌려주면 일주일 동안 책을 빌릴 수 없어요.", py: "Neutge dollyeojumyeon iljuil dongan chaegeul billil su eopseoyo.", nl: "Als je het te laat teruggeeft, kun je een week lang geen boeken lenen." },
      { cn: "저는 시간이 있으면 도서관에서 한국어 공부를 해요.", py: "Jeoneun sigani isseumyeon doseogwaneseo hangugeo gongbureul haeyo.", nl: "Als ik tijd heb, studeer ik Koreaans in de bibliotheek." },
      { cn: "도서관은 조용해서 공부가 잘 돼요.", py: "Doseogwaneun joyonghaeseo gongbuga jal dwaeyo.", nl: "De bibliotheek is rustig, dus ik kan er goed studeren." }
    ],
    questions: [
      { type: "mc", q: "Wat heb je nodig om een pasje te maken?",
        options: ["Je identiteitsbewijs.", "Een foto.", "Geld.", "Een boek."], answer: 0,
        why: ["Goed: 신분증을 보여 주면 돼요.", "Een foto staat niet in de tekst.", "Over geld staat niets in de tekst.", "Boeken leen je pas als je een pasje hebt."] },
      { type: "mc", q: "Wat gebeurt er als je een boek te laat teruggeeft?",
        options: ["Je kunt een week lang geen boeken lenen.", "Je moet geld betalen.", "Je pasje wordt ingenomen.", "Je moet een nieuw pasje maken."], answer: 0,
        why: ["Goed: 늦게 돌려주면 일주일 동안 책을 빌릴 수 없어요.", "Over een boete staat niets in de tekst.", "Dat staat niet in de tekst.", "Een pasje maak je alleen de eerste keer."] },
      { type: "mc", q: "도서관 안에서 음식을 먹으면 안 돼요. Wat betekent -(으)면 안 돼요 hier?",
        options: ["Het mag niet.", "Het is genoeg.", "Het lukt niet.", "Het hoeft niet."], answer: 0,
        why: ["Goed: -(으)면 안 돼요 = als je dat doet, is het niet goed: het mag niet.", "\"Genoeg\" is -(으)면 돼요, zonder 안.", "\"Lukt niet\" is -(으)ㄹ 수 없어요 of 못.", "\"Hoeft niet\" is een ander patroon."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Als ik moe ben, ga ik slapen.\" Welke zin klopt?",
      options: ["피곤하면 자요.", "피곤하으면 자요.", "피곤해면 자요.", "피곤면 자요."], answer: 0,
      why: ["Goed: 하 eindigt op een klinker, dus -면.", "-으면 komt alleen na een 받침.", "-면 komt direct op de stam 피곤하, niet op 해.", "De stam is 피곤하. Je mag 하 niet weglaten."] },
    { type: "mc", q: "배가 ___ 이거 먹어요. (Als je honger hebt, eet dit.)",
      options: ["고프면", "고프으면", "고파면", "고픈면"], answer: 0,
      why: ["Goed: 고프 eindigt op een klinker, dus -면.", "-으면 komt alleen na een 받침.", "-면 komt direct op de stam, niet op de 아/어-vorm.", "-면 komt direct op 고프, zonder ㄴ."] },
    { type: "mc", q: "\"Als het ver is, neem ik een taxi.\" Welke zin klopt?",
      options: ["멀면 택시를 타요.", "멀으면 택시를 타요.", "머면 택시를 타요.", "멀어면 택시를 타요."], answer: 0,
      why: ["Goed: 멀다 is een ㄹ-stam, dus alleen -면.", "Bij een ㄹ-stam komt er geen 으.", "De ㄹ van de stam blijft staan.", "-면 komt direct op de stam, niet op de 아/어-vorm."] },
    { type: "order", q: "Zet in de goede volgorde: \"Als je deze bus neemt, kom je bij school.\"",
      tokens: [["이", "i"], ["버스를", "beoseureul"], ["타면", "tamyeon"], ["학교에 가요", "hakgyoe gayo"]] },
    { type: "mc", q: "\"Toen ik klein was, woonde ik in Busan.\" Welke zin klopt?",
      options: ["어렸을 때 부산에 살았어요.", "어리면 부산에 살았어요.", "어렸으면 부산에 살았어요.", "어린 때 부산에 살았어요."], answer: 0,
      why: ["Goed: een vast moment in het verleden: -(으)ㄹ 때.", "-(으)면 is \"als\", geen vast moment in het verleden.", "어렸으면 is nog steeds \"als\", geen \"toen\".", "Vóór 때 komt -(으)ㄹ: 어릴 때 of 어렸을 때."] },
    { type: "mc", q: "여기에서 사진을 찍으면 안 돼요. Wat betekent dit?",
      options: ["Je mag hier geen foto's maken.", "Je hoeft hier alleen een foto te maken.", "Je kunt hier geen foto's maken, het lukt niet.", "Als je hier een foto maakt, is het goed."], answer: 0,
      why: ["Goed: -(으)면 안 돼요 = het mag niet.", "Dat is -(으)면 돼요, zonder 안.", "\"Het lukt niet\" is 못 of -(으)ㄹ 수 없어요.", "Door 안 betekent het juist: het is niet goed."] },
    { type: "fill", q: "이 버튼을 ___ 돼요. (Je hoeft alleen op deze knop te drukken. 누르다 = drukken)", answers: ["누르면"],
      hint: "누르 eindigt op een klinker. Welke vorm van -(으)면 komt erachter?", why: "누르 + 면 = 누르면. Met 돼요 erachter betekent het: dat is genoeg." },
    { type: "mc", q: "음악을 ___ 기분이 좋아요. (Als ik naar muziek luister, voel ik me goed.)",
      options: ["들으면", "듣으면", "들면", "듣면"], answer: 0,
      why: ["Goed: bij 듣다 wordt de ㄷ vóór een klinker een ㄹ: 들으면.", "De ㄷ van 듣다 verandert in ㄹ vóór 으.", "들면 komt van 들다 (optillen).", "Na een 받침 heb je -으면 nodig, en de ㄷ wordt ㄹ."] },
    { type: "order", q: "Zet in de goede volgorde: \"Je hoeft alleen bij het volgende station uit te stappen.\"",
      tokens: [["다음", "daeum"], ["역에서", "yeogeseo"], ["내리면", "naerimyeon"], ["돼요", "dwaeyo"]] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["음식을 먹으면 안 해요.", "여기에 앉으면 돼요.", "시간이 있으면 전화하세요.", "피곤하면 쉬세요."], answer: 0,
      why: ["Goed: dit is fout. \"Mag niet\" is -(으)면 안 돼요: 먹으면 안 돼요.", "Dit klopt: je hoeft alleen hier te zitten.", "Dit klopt: na -(으)면 mag een opdracht.", "Dit klopt: 피곤하 + 면, en dan een opdracht."] },
    { type: "open", q: "Vertaal: \"Als je tijd hebt, bel me.\"", model: ["시간이 있으면 전화하세요.", "시간이 있으면 전화해 주세요."],
      tip: "Check: 있 heeft een 받침, dus -으면. Staat de voorwaarde vooraan?" },
    { type: "open", q: "Vertaal: \"Je mag hier niet roken.\"", model: ["여기에서 담배를 피우면 안 돼요.", "여기서 담배를 피우면 안 돼요."],
      tip: "Check: 피우 + 면, en dan 안 돼요 (met 되다, niet met 하다)." }
  ],
  review: [
    { type: "mc", q: "\"Als het duur is, koop ik het niet.\"",
      options: ["비싸면 안 사요.", "비싸으면 안 사요.", "비쌌면 안 사요.", "비싼면 안 사요."], answer: 0,
      why: ["Goed: 비싸 eindigt op een klinker, dus -면.", "-으면 komt alleen na een 받침.", "Voor een gewone voorwaarde gebruik je geen verleden tijd. En na 비쌌 zou -으면 moeten komen.", "-면 komt direct op 비싸, zonder ㄴ."] },
    { type: "mc", q: "\"Als je in Korea woont, leer je snel Koreaans.\"",
      options: ["한국에 살면 한국어를 빨리 배워요.", "한국에 살으면 한국어를 빨리 배워요.", "한국에 사면 한국어를 빨리 배워요.", "한국에 살아면 한국어를 빨리 배워요."], answer: 0,
      why: ["Goed: 살다 is een ㄹ-stam, dus 살면.", "Bij een ㄹ-stam komt er geen 으.", "사면 komt van 사다 en betekent \"als je koopt\".", "-면 komt direct op de stam, niet op de 아/어-vorm."] },
    { type: "mc", q: "\"Je mag hier niet parkeren.\"",
      options: ["여기에 주차하면 안 돼요.", "여기에 주차하면 돼요.", "여기에 주차하면 안 해요.", "여기에 주차해면 안 돼요."], answer: 0,
      why: ["Goed: -(으)면 안 돼요 = het mag niet.", "Zonder 안 betekent het: je hoeft hier alleen te parkeren.", "\"Mag niet\" gaat met 되다, niet met 하다.", "-면 komt op de stam 주차하, niet op 해."] }
  ]
})
