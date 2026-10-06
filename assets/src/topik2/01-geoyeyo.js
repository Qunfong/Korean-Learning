({
  id: "01", slug: "geoyeyo", title: "-(으)ㄹ 거예요", sub: "Zeggen wat je gaat doen of wat je verwacht",
  canDo: "Je kunt nu zeggen wat je gaat doen en wat er waarschijnlijk gebeurt, met -(으)ㄹ 거예요.",
  guess: {
    q: "\"Morgen ga ik naar Busan.\" Welke zin klopt, denk je?",
    options: ["내일 부산에 갈 거예요.", "내일 부산에 가을 거예요.", "내일 부산에 갈 거에요.", "내일 부산에 가 거예요."], answer: 0,
    why: ["Goed: 가다 heeft geen 받침, dus 가 + ㄹ = 갈.", "-을 komt alleen na een 받침. 가 eindigt op een klinker.", "De juiste spelling is 거예요, niet 거에요.", "De ㄹ ontbreekt. Je hebt 갈 nodig, niet 가."]
  },
  problem: "Je wilt zeggen wat je morgen gaat doen. Of je wilt een verwachting uitspreken, zoals \"het gaat vast regenen\". Het Nederlands gebruikt daarvoor \"gaan\" of \"zullen\". Het Koreaans gebruikt één vorm: -(으)ㄹ 거예요. Je plakt hem achter de stam van het werkwoord.",
  pattern: [
    { l: "wanneer", v: "내일", c: 1 }, { l: "wat", v: "친구를", c: 3 },
    { l: "stam", v: "만나", c: 4 }, { l: "-(으)ㄹ 거예요", v: "ㄹ 거예요", c: 2, key: true }
  ],
  patternCap: "Stam + -ㄹ 거예요 (na klinker) of -을 거예요 (na 받침): 만날 거예요, 먹을 거예요",
  rules: [
    "Stam op een klinker: -ㄹ 거예요. 가다 wordt 갈 거예요, 보다 wordt 볼 거예요.",
    "Stam op een 받침: -을 거예요. 먹다 wordt 먹을 거예요, 있다 wordt 있을 거예요.",
    "Stam op ㄹ: je voegt niets toe. 살다 wordt 살 거예요, 만들다 wordt 만들 거예요.",
    "Onregelmatige stammen veranderen: 듣다 wordt 들을 거예요, 춥다 wordt 추울 거예요.",
    "Over jezelf is het een plan. Over iets anders is het vaak een vermoeden: 비가 올 거예요."
  ],
  pitfall: "Bij een ㄹ-stam komt er geen -을 bij. Zeg niet 만들을 거예요, maar 만들 거예요.",
  examples: [
    { cn: "주말에 친구를 만날 거예요.", py: "Jumare chingureul mannal geoyeyo.", nl: "In het weekend ga ik een vriend ontmoeten." },
    { cn: "내일은 비가 올 거예요.", py: "Naeireun biga ol geoyeyo.", nl: "Morgen gaat het waarschijnlijk regenen." },
    { cn: "저녁에 김치찌개를 만들 거예요.", py: "Jeonyeoge gimchijjigaereul mandeul geoyeyo.", nl: "Vanavond ga ik kimchistoofpot maken." },
    { cn: "이 영화는 재미있을 거예요.", py: "I yeonghwaneun jaemiisseul geoyeyo.", nl: "Deze film is vast leuk." }
  ],
  nuance: [
    { h: "-(으)ㄹ 거예요 of -(으)ㄹ게요?",
      p: "Met -(으)ㄹ 거예요 vertel je een plan dat al vaststaat. Met -(으)ㄹ게요 beslis of beloof je iets op dit moment, vaak als reactie op de ander. -(으)ㄹ게요 kan alleen over jezelf, en nooit in een vraag. Vraag dus: 뭐 할 거예요?, niet 뭐 할게요?",
      ex: [
        { cn: "이따가 전화할 거예요.", py: "Ittaga jeonhwahal geoyeyo.", nl: "Ik ga straks bellen. (plan)" },
        { cn: "이따가 전화할게요.", py: "Ittaga jeonhwahalgeyo.", nl: "Ik bel je straks, beloofd." }
      ] },
    { h: "Plan of vermoeden?",
      p: "Gaat de zin over jezelf, dan is het meestal een plan. Gaat hij over het weer, een ander of een ding, dan is het een vermoeden. Met 아마 (waarschijnlijk) maak je het vermoeden duidelijk.",
      ex: [
        { cn: "저는 내일 도서관에 갈 거예요.", py: "Jeoneun naeil doseogwane gal geoyeyo.", nl: "Ik ga morgen naar de bibliotheek." },
        { cn: "민수 씨는 아마 늦을 거예요.", py: "Minsu ssineun ama neujeul geoyeyo.", nl: "Minsu is waarschijnlijk te laat." }
      ] },
    { h: "Beleefd, formeel en informeel",
      p: "거예요 is beleefd en past bijna overal. In nieuws, toespraken en op het werk hoor je 겁니다. Tegen vrienden zeg je 거야.",
      ex: [
        { cn: "내일 회의가 있을 겁니다.", py: "Naeil hoeuiga isseul geomnida.", nl: "Morgen is er een vergadering. (formeel)" },
        { cn: "나 내일 갈 거야.", py: "Na naeil gal geoya.", nl: "Ik ga morgen. (tegen een vriend)" }
      ] }
  ],
  mistakes: [
    { wrong: "케이크를 만들을 거예요.", right: "케이크를 만들 거예요.", why: "만들다 is een ㄹ-stam. Daar komt geen -을 bij." },
    { wrong: "주말에 뭐 할게요?", right: "주말에 뭐 할 거예요?", why: "-(으)ㄹ게요 is een belofte van jezelf. In een vraag gebruik je -(으)ㄹ 거예요." },
    { wrong: "음악을 듣을 거예요.", right: "음악을 들을 거예요.", why: "듣다 is onregelmatig: voor -을 wordt ㄷ een ㄹ." },
    { wrong: "내일 친구를 만날 거에요.", right: "내일 친구를 만날 거예요.", why: "Na 거 (klinker) schrijf je 예요, niet 에요." }
  ],
  vocab: [
    ["-(으)ㄹ 거예요", "-(eu)l geoyeyo", "gaan (plan), zullen (vermoeden)"], ["주말", "jumal", "weekend"], ["만나다", "mannada", "ontmoeten"],
    ["비", "bi", "regen"], ["쉬다", "swida", "uitrusten"], ["아마", "ama", "waarschijnlijk"],
    ["영화", "yeonghwa", "film"], ["재미있다", "jaemiitda", "leuk, interessant"], ["여행", "yeohaeng", "reis"], ["바다", "bada", "zee"]
  ],
  dialogue: [
    ["A", "이번 주말에 뭐 할 거예요?", "Ibeon jumare mwo hal geoyeyo?", "Wat ga je dit weekend doen?"],
    ["B", "토요일에 친구하고 영화를 볼 거예요.", "Toyoire chinguhago yeonghwareul bol geoyeyo.", "Zaterdag ga ik met een vriend naar een film."],
    ["A", "일요일에는요?", "Iryoireneunyo?", "En zondag?"],
    ["B", "집에서 쉴 거예요. 아마 비가 올 거예요.", "Jibeseo swil geoyeyo. Ama biga ol geoyeyo.", "Dan rust ik thuis uit. Het gaat waarschijnlijk regenen."],
    ["A", "그럼 저도 집에 있을 거예요.", "Geureom jeodo jibe isseul geoyeyo.", "Dan blijf ik ook thuis."]
  ],
  reading: {
    title: "제주도 여행",
    lines: [
      { cn: "다음 주에 방학이 시작돼요.", py: "Daeum jue banghagi sijakdwaeyo.", nl: "Volgende week begint de vakantie." },
      { cn: "저는 친구하고 제주도에 갈 거예요.", py: "Jeoneun chinguhago jejudoe gal geoyeyo.", nl: "Ik ga met een vriend naar Jeju." },
      { cn: "비행기로 갈 거예요.", py: "Bihaenggiro gal geoyeyo.", nl: "We gaan met het vliegtuig." },
      { cn: "제주도에서 바다를 볼 거예요.", py: "Jejudoeseo badareul bol geoyeyo.", nl: "Op Jeju gaan we naar de zee kijken." },
      { cn: "그리고 귤을 많이 먹을 거예요.", py: "Geurigo gyureul mani meogeul geoyeyo.", nl: "En we gaan veel mandarijnen eten." },
      { cn: "그런데 일기예보를 봤어요.", py: "Geureonde ilgiyeboreul bwasseoyo.", nl: "Maar ik heb de weersverwachting bekeken." },
      { cn: "토요일에는 비가 올 거예요.", py: "Toyoireneun biga ol geoyeyo.", nl: "Zaterdag gaat het waarschijnlijk regenen." },
      { cn: "그날은 박물관에 갈 거예요.", py: "Geunareun bangmulgwane gal geoyeyo.", nl: "Die dag gaan we naar een museum." },
      { cn: "정말 재미있을 거예요!", py: "Jeongmal jaemiisseul geoyeyo!", nl: "Het wordt vast echt leuk!" }
    ],
    questions: [
      { type: "mc", q: "Hoe reizen ze naar Jeju?",
        options: ["Met het vliegtuig.", "Met de boot.", "Met de trein.", "Met de bus."], answer: 0,
        why: ["Goed: 비행기로 갈 거예요.", "Ze kijken naar de zee, maar ze reizen niet met de boot.", "De trein staat niet in de tekst.", "De bus staat niet in de tekst."] },
      { type: "mc", q: "Wat doen ze zaterdag?",
        options: ["Ze gaan naar een museum.", "Ze gaan naar de zee.", "Ze blijven in het hotel.", "Ze gaan naar huis."], answer: 0,
        why: ["Goed: 그날은 박물관에 갈 거예요. Het regent dan waarschijnlijk.", "De zee is het gewone plan, maar zaterdag regent het.", "Een hotel staat niet in de tekst.", "Ze gaan niet terug naar huis."] },
      { type: "mc", q: "토요일에는 비가 올 거예요. Wat betekent -(으)ㄹ 거예요 hier?",
        options: ["Een vermoeden: het gaat waarschijnlijk regenen.", "Een plan van de schrijver.", "Een belofte aan de vriend.", "Iets wat al gebeurd is."], answer: 0,
        why: ["Goed: het gaat over het weer, dus het is een vermoeden.", "Het weer is geen plan van iemand.", "Een belofte zou -(으)ㄹ게요 zijn, en die gaat over jezelf.", "Voor het verleden gebruik je -았/었어요."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik ga brood eten.\" Welke zin klopt?",
      options: ["빵을 먹을 거예요.", "빵을 먹 거예요.", "빵을 멀 거예요.", "빵을 먹을 거에요."], answer: 0,
      why: ["Goed: 먹 heeft een 받침, dus -을 거예요.", "Na een 받침 heb je -을 nodig.", "Je mag de 받침 ㄱ niet vervangen door ㄹ.", "De juiste spelling is 거예요."] },
    { type: "mc", q: "\"Ik ga in Seoul wonen.\" Welke zin klopt?",
      options: ["서울에서 살 거예요.", "서울에서 살을 거예요.", "서울에서 사을 거예요.", "서울에서 사 거예요."], answer: 0,
      why: ["Goed: 살다 is een ㄹ-stam. Je voegt niets toe: 살 거예요.", "Bij een ㄹ-stam komt er geen -을 bij.", "De ㄹ hoort bij de stam en blijft staan.", "De ㄹ van de stam ontbreekt."] },
    { type: "mc", q: "민수 씨는 아마 지금 집에 ___. (Minsu is nu waarschijnlijk thuis.)",
      options: ["있을 거예요", "있 거예요", "있을 거에요", "있을게요"], answer: 0,
      why: ["Goed: een vermoeden over iemand anders, met -을 na de 받침 ㅆ.", "Na een 받침 heb je -을 nodig.", "De juiste spelling is 거예요.", "-(으)ㄹ게요 is een belofte van jezelf. Het past niet bij Minsu."] },
    { type: "order", q: "Zet in de goede volgorde: \"Deze film is vast leuk.\"",
      tokens: [["이", "i"], ["영화는", "yeonghwaneun"], ["재미있을", "jaemiisseul"], ["거예요", "geoyeyo"]] },
    { type: "mc", q: "Je vraagt een collega: \"Wat ga je morgen doen?\"",
      options: ["내일 뭐 할 거예요?", "내일 뭐 할게요?", "내일 뭐 하을 거예요?", "내일 뭐 할 거에요?"], answer: 0,
      why: ["Goed: in een vraag naar iemands plan gebruik je -(으)ㄹ 거예요.", "-(으)ㄹ게요 kan niet in een vraag: het is je eigen belofte.", "하다 eindigt op een klinker, dus 할, niet 하을.", "De juiste spelling is 거예요."] },
    { type: "mc", q: "\"Ik ga muziek luisteren.\" Welke zin klopt?",
      options: ["음악을 들을 거예요.", "음악을 듣을 거예요.", "음악을 들 거예요.", "음악을 듣 거예요."], answer: 0,
      why: ["Goed: 듣다 is onregelmatig. Voor -을 wordt ㄷ een ㄹ: 들을.", "Voor -을 verandert de ㄷ van 듣다 in ㄹ.", "Na de nieuwe 받침 ㄹ van 들- komt nog -을.", "De ㄷ verandert, en -을 ontbreekt."] },
    { type: "mc", q: "Welke zin is een vermoeden, en geen plan?",
      options: ["내일은 추울 거예요.", "저는 내일 공부할 거예요.", "저는 저녁에 운동할 거예요.", "저는 주말에 청소할 거예요."], answer: 0,
      why: ["Goed: over het weer kun je alleen een vermoeden uitspreken.", "Dit gaat over jezelf: het is een plan.", "Dit gaat over jezelf: het is een plan.", "Dit gaat over jezelf: het is een plan."] },
    { type: "fill", q: "저는 오늘 밤에 이 책을 ___ 거예요. (Ik ga vanavond dit boek lezen. 읽다 = lezen)", answers: ["읽을"],
      hint: "읽다 eindigt op een 받침.", why: "Stam 읽 heeft een 받침, dus -을: 읽을 거예요." },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn jongere broer gaat naar de universiteit.\"",
      tokens: [["제", "je"], ["동생은", "dongsaengeun"], ["대학교에", "daehakgyoe"], ["갈", "gal"], ["거예요", "geoyeyo"]] },
    { type: "open", q: "Vertaal: \"Ik ga morgen thuis uitrusten.\"", model: ["내일 집에서 쉴 거예요.", "저는 내일 집에서 쉴 거예요."],
      tip: "Check: 쉬다 heeft geen 받침, dus 쉬 + ㄹ = 쉴. Staat er 집에서 (waar je iets doet)?" },
    { type: "open", q: "Vertaal: \"Het wordt morgen waarschijnlijk koud.\"", model: ["내일은 아마 추울 거예요.", "내일은 추울 거예요.", "내일 날씨가 추울 거예요."],
      tip: "Check: 춥다 is onregelmatig, dus 추울 거예요 (niet 춥을). 아마 maakt het vermoeden duidelijk." }
  ],
  review: [
    { type: "mc", q: "\"Ik ga een taart maken.\"",
      options: ["케이크를 만들 거예요.", "케이크를 만들을 거예요.", "케이크를 만드을 거예요.", "케이크를 만들 거에요."], answer: 0,
      why: ["Goed: 만들다 is een ㄹ-stam, dus 만들 거예요.", "Bij een ㄹ-stam komt er geen -을 bij.", "De ㄹ van de stam valt niet weg.", "De juiste spelling is 거예요."] },
    { type: "mc", q: "\"Ik heb het morgen waarschijnlijk druk.\"",
      options: ["내일은 바쁠 거예요.", "내일은 바쁘을 거예요.", "내일은 바빠 거예요.", "내일은 바쁠 거에요."], answer: 0,
      why: ["Goed: 바쁘다 eindigt op een klinker, dus 바쁘 + ㄹ = 바쁠.", "-을 komt alleen na een 받침.", "Voor 거예요 staat de vorm met ㄹ, niet de 아/어-vorm.", "De juiste spelling is 거예요."] },
    { type: "mc", q: "\"Wanneer ga je naar Korea?\"",
      options: ["언제 한국에 갈 거예요?", "언제 한국에 갈게요?", "언제 한국에 가을 거예요?", "언제 한국에 갔을 거예요?"], answer: 0,
      why: ["Goed: een vraag naar een plan, met -(으)ㄹ 거예요.", "-(으)ㄹ게요 kan niet in een vraag.", "가다 eindigt op een klinker: 갈, niet 가을.", "갔- is verleden tijd. De vraag gaat over de toekomst."] }
  ]
})
