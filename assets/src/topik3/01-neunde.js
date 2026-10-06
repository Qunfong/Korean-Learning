({
  id: "01", slug: "neunde", title: "-는데 / -(으)ㄴ데", sub: "Eerst de achtergrond, dan je punt",
  canDo: "Je kunt nu met -는데 en -(으)ㄴ데 eerst de situatie schetsen, of een contrast maken met \"maar\".",
  guess: {
    q: "\"Het weer is mooi. Zullen we naar het park gaan?\" Welke zin klopt, denk je?",
    options: ["날씨가 좋은데 공원에 갈까요?", "날씨가 좋는데 공원에 갈까요?", "날씨가 좋아는데 공원에 갈까요?", "날씨가 좋데 공원에 갈까요?"], answer: 0,
    why: ["Goed: 좋다 is bijvoeglijk en heeft een 받침, dus -은데.", "-는데 hoort bij werkwoorden van handeling, niet bij 좋다.", "-는데 plak je direct aan de stam, niet aan de 아-vorm.", "Na een 받침 heb je -은데 nodig, niet alleen -데."]
  },
  problem: "Soms wil je eerst de situatie schetsen en dan pas je vraag of voorstel doen. Soms wil je \"maar\" zeggen. Het Nederlands gebruikt daarvoor twee losse zinnen of \"maar\". Het Koreaans doet allebei met één uitgang: -는데 of -(으)ㄴ데. De eerste zin geeft de achtergrond, de tweede zin het punt.",
  pattern: [
    { l: "achtergrond", v: "비가 오", c: 1 }, { l: "-는데", v: "는데", c: 2, key: true }, { l: "hoofdzin", v: "우산이 없어요", c: 4 }
  ],
  patternCap: "Achtergrond + -는데 / -(으)ㄴ데 + vraag, voorstel of contrast (가는데, 작은데, 큰데, 학생인데, 갔는데)",
  rules: [
    "Werkwoord van handeling, en ook 있다 en 없다: stam + -는데. 가는데, 먹는데, 맛있는데.",
    "Bijvoeglijk werkwoord: na een klinker -ㄴ데, na een 받침 -은데. 큰데, 작은데.",
    "Naamwoord: + -인데. 학생인데, 주말인데.",
    "Verleden tijd: -았/었는데, voor elk soort werkwoord. 갔는데, 작았는데.",
    "Bij een ㄹ-stam valt de ㄹ weg: 살다 wordt 사는데, 길다 wordt 긴데."
  ],
  pitfall: "Een bijvoeglijk werkwoord krijgt in de tegenwoordige tijd nooit -는데. Zeg 좋은데, niet 좋는데. Let ook op ㅂ-stammen: 춥다 wordt 추운데.",
  examples: [
    { cn: "비가 오는데 우산이 없어요.", py: "Biga oneunde usani eopseoyo.", nl: "Het regent, maar ik heb geen paraplu." },
    { cn: "배가 고픈데 뭐 먹을까요?", py: "Baega gopeunde mwo meogeulkkayo?", nl: "Ik heb honger. Zullen we iets eten?" },
    { cn: "이 가방은 예쁜데 너무 비싸요.", py: "I gabangeun yeppeunde neomu bissayo.", nl: "Deze tas is mooi, maar te duur." },
    { cn: "어제 시장에 갔는데 사람이 많았어요.", py: "Eoje sijange ganneunde sarami manasseoyo.", nl: "Gisteren ging ik naar de markt. Er waren veel mensen." }
  ],
  nuance: [
    { h: "Achtergrond, geen tegenstelling",
      p: "Vaak betekent -는데 helemaal geen \"maar\". Je schetst eerst de situatie, en daarna komt een vraag, voorstel of opdracht. -지만 kan dat niet: -지만 is altijd een echte tegenstelling. Na -지만 klinkt een voorstel daarom vreemd.",
      ex: [
        { cn: "배가 고픈데 밥 먹을까요?", py: "Baega gopeunde bap meogeulkkayo?", nl: "Ik heb honger. Zullen we eten?" },
        { cn: "내일 시간이 있는데 같이 영화 볼래요?", py: "Naeil sigani inneunde gachi yeonghwa bollaeyo?", nl: "Ik heb morgen tijd. Zullen we samen een film kijken?" }
      ] },
    { h: "-는데 of -지만?",
      p: "Bij een echte tegenstelling kan het allebei. -지만 zegt duidelijk \"maar\" en past goed in geschreven tekst. -는데 is zachter en klinkt meer als spreektaal. Wil je in een opstel een sterk contrast maken, kies dan -지만.",
      ex: [
        { cn: "이 가방은 예쁘지만 비싸요.", py: "I gabangeun yeppeujiman bissayo.", nl: "Deze tas is mooi, maar duur." },
        { cn: "이 가방은 예쁜데 비싸요.", py: "I gabangeun yeppeunde bissayo.", nl: "Deze tas is mooi, alleen is hij duur." }
      ] },
    { h: "Aan het eind van de zin: -는데요",
      p: "In spreektaal kun je met -는데요 een zin beëindigen. Je laat dan iets open: de ander moet zelf de conclusie trekken of reageren. Zo klink je beleefd en minder direct, bijvoorbeeld als je nee zegt of iets verbaast.",
      ex: [
        { cn: "저는 내일 시간이 없는데요.", py: "Jeoneun naeil sigani eomneundeyo.", nl: "Ik heb morgen eigenlijk geen tijd..." },
        { cn: "지금 회의 중인데요.", py: "Jigeum hoeui jungindeyo.", nl: "Ik zit nu in een vergadering..." }
      ] }
  ],
  mistakes: [
    { wrong: "날씨가 좋는데 산책할까요?", right: "날씨가 좋은데 산책할까요?", why: "좋다 is bijvoeglijk. In de tegenwoordige tijd krijgt het -은데, niet -는데." },
    { wrong: "이 식당은 맛있은데 비싸요.", right: "이 식당은 맛있는데 비싸요.", why: "Woorden op 있다 en 없다 krijgen altijd -는데, ook als ze als bijvoeglijk voelen." },
    { wrong: "밖이 춥은데 코트를 입으세요.", right: "밖이 추운데 코트를 입으세요.", why: "Bij een ㅂ-stam wordt ㅂ tot 우: 춥다 wordt 추운데." },
    { wrong: "배가 고프지만 밥 먹을까요?", right: "배가 고픈데 밥 먹을까요?", why: "Voor een voorstel na de achtergrond gebruik je -는데. -지만 is alleen voor een echte tegenstelling." }
  ],
  vocab: [
    ["-는데 / -(으)ㄴ데", "-neunde / -(eu)nde", "(achtergrond geven; maar)"], ["우산", "usan", "paraplu"], ["배가 고프다", "baega gopeuda", "honger hebben"],
    ["비싸다", "bissada", "duur"], ["근처", "geuncheo", "buurt, omgeving"], ["동네", "dongne", "wijk, buurt"],
    ["이사하다", "isahada", "verhuizen"], ["신선하다", "sinseonhada", "vers"], ["옆집", "yeopjip", "huis ernaast, de buren"], ["짖다", "jitda", "blaffen"]
  ],
  dialogue: [
    ["A", "지금 뭐 해요?", "Jigeum mwo haeyo?", "Wat doe je nu?"],
    ["B", "숙제를 하는데 너무 어려워요.", "Sukjereul haneunde neomu eoryeowoyo.", "Ik maak huiswerk, maar het is erg moeilijk."],
    ["A", "저는 시간이 있는데 도와줄까요?", "Jeoneun sigani inneunde dowajulkkayo?", "Ik heb tijd. Zal ik je helpen?"],
    ["B", "좋아요. 그런데 배가 고픈데 먼저 밥 먹을까요?", "Joayo. Geureonde baega gopeunde meonjeo bap meogeulkkayo?", "Graag. Maar ik heb honger. Zullen we eerst eten?"],
    ["A", "그래요. 근처에 식당이 있는데 아주 맛있어요.", "Geuraeyo. Geuncheoe sikdangi inneunde aju masisseoyo.", "Goed. Er is een restaurant in de buurt. Het is erg lekker."]
  ],
  reading: {
    title: "새 동네",
    lines: [
      { cn: "저는 지난달에 새 동네로 이사했어요.", py: "Jeoneun jinandare sae dongnero isahaesseoyo.", nl: "Vorige maand ben ik naar een nieuwe wijk verhuisd." },
      { cn: "집은 좀 작은데 깨끗하고 조용해요.", py: "Jibeun jom jageunde kkaekkeutago joyonghaeyo.", nl: "Het huis is wat klein, maar schoon en rustig." },
      { cn: "근처에 시장이 있는데 과일이 싸고 신선해요.", py: "Geuncheoe sijangi inneunde gwairi ssago sinseonhaeyo.", nl: "Er is een markt in de buurt. Het fruit is er goedkoop en vers." },
      { cn: "그런데 한 가지 문제가 있어요.", py: "Geureonde han gaji munjega isseoyo.", nl: "Maar er is één probleem." },
      { cn: "옆집에 개가 있는데 밤마다 짖어요.", py: "Yeopjibe gaega inneunde bammada jijeoyo.", nl: "De buren hebben een hond, en die blaft elke nacht." },
      { cn: "어제 옆집에 갔는데 할머니 한 분이 문을 여셨어요.", py: "Eoje yeopjibe ganneunde halmeoni han buni muneul yeosyeosseoyo.", nl: "Gisteren ging ik naar de buren. Een oudere dame deed de deur open." },
      { cn: "할머니는 혼자 사시는데 그 개가 가족이에요.", py: "Halmeonineun honja sasineunde geu gaega gajogieyo.", nl: "Ze woont alleen, en die hond is haar familie." },
      { cn: "이제 개가 짖어도 괜찮아요.", py: "Ije gaega jijeodo gwaenchanayo.", nl: "Nu vind ik het niet erg meer als de hond blaft." }
    ],
    questions: [
      { type: "mc", q: "Wat is het probleem in de nieuwe wijk?",
        options: ["De hond van de buren blaft elke nacht.", "Het huis is te duur.", "De markt is ver weg.", "Het fruit is niet vers."], answer: 0,
        why: ["Goed: 옆집에 개가 있는데 밤마다 짖어요.", "Over de prijs van het huis staat niets in de tekst.", "De markt is juist in de buurt: 근처에 시장이 있는데.", "Het fruit is juist vers: 신선해요."] },
      { type: "mc", q: "Waarom vindt de schrijver het blaffen nu niet erg meer?",
        options: ["De hond is de familie van een oudere dame die alleen woont.", "De hond blaft niet meer.", "De schrijver is weer verhuisd.", "De dame heeft de hond weggedaan."], answer: 0,
        why: ["Goed: 할머니는 혼자 사시는데 그 개가 가족이에요.", "De hond blaft nog steeds: 개가 짖어도 괜찮아요.", "De schrijver woont nog in dezelfde wijk.", "De hond is er nog; hij is haar familie."] },
      { type: "mc", q: "어제 옆집에 갔는데 할머니 한 분이 문을 여셨어요. Wat doet -는데 hier?",
        options: ["Het geeft de situatie, daarna volgt wat er gebeurde.", "Het betekent \"maar\": er is een tegenstelling.", "Het betekent \"omdat\": het geeft een reden.", "Het betekent \"om te\": het geeft een doel."], answer: 0,
        why: ["Goed: eerst de achtergrond (ik ging naar de buren), dan wat er gebeurde.", "Er is geen tegenstelling tussen langsgaan en de deur opendoen.", "Langsgaan is niet de reden dat de dame opendeed. Voor een reden gebruik je -아서 of -(으)니까.", "Voor een doel gebruik je -(으)러 of -(으)려고."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Deze kamer is klein, maar schoon.\" Welke zin klopt?",
      options: ["이 방은 작은데 깨끗해요.", "이 방은 작는데 깨끗해요.", "이 방은 작인데 깨끗해요.", "이 방은 작안데 깨끗해요."], answer: 0,
      why: ["Goed: 작다 is bijvoeglijk met 받침, dus -은데.", "-는데 is voor werkwoorden van handeling, niet voor 작다.", "-인데 hoort bij een naamwoord, niet bij een werkwoordstam.", "De klinker is 으, niet 아: -은데."] },
    { type: "mc", q: "어제 영화를 ___ 재미없었어요. (Gisteren keek ik een film, maar hij was saai.)",
      options: ["봤는데", "봐는데", "봤은데", "봤인데"], answer: 0,
      why: ["Goed: verleden tijd 봤 + -는데.", "-는데 komt niet na de 아/어-vorm; voor verleden tijd gebruik je 봤.", "Na de verleden tijd 았/었 komt altijd -는데, niet -은데.", "-인데 hoort bij een naamwoord."] },
    { type: "mc", q: "학생이다 (student zijn) + -는데: welke vorm klopt?",
      options: ["학생인데", "학생는데", "학생은데", "학생이는데"], answer: 0,
      why: ["Goed: naamwoord + -인데.", "Een naamwoord krijgt -인데, niet -는데.", "-은데 is voor bijvoeglijke werkwoorden met 받침.", "이다 wordt 인데, niet 이는데."] },
    { type: "order", q: "Zet in de goede volgorde: \"Het is koud. Zal ik het raam dichtdoen?\"",
      tokens: [["날씨가", "nalssiga"], ["추운데", "chuunde"], ["창문을", "changmuneul"], ["닫을까요?", "dadeulkkayo?"]] },
    { type: "mc", q: "Welke zin klinkt NIET natuurlijk?",
      options: ["배가 고프지만 밥 먹을까요?", "배가 고픈데 밥 먹을까요?", "이 가방은 예쁘지만 비싸요.", "이 가방은 예쁜데 비싸요."], answer: 0,
      why: ["Goed: -지만 is een echte tegenstelling. Voor achtergrond + voorstel gebruik je -는데.", "Dit klopt: achtergrond (honger) + voorstel.", "Dit klopt: een echte tegenstelling met -지만.", "Dit klopt: -는데 kan ook een zachte tegenstelling zijn."] },
    { type: "mc", q: "이 빵은 ___ 좀 비싸요. (Dit brood is lekker, maar wat duur.)",
      options: ["맛있는데", "맛있은데", "맛있인데", "맛있어는데"], answer: 0,
      why: ["Goed: woorden op 있다 krijgen -는데.", "맛있다 eindigt op 있다, dus -는데, niet -은데.", "-인데 hoort bij een naamwoord.", "-는데 komt direct na de stam, niet na de 어-vorm."] },
    { type: "mc", q: "Iemand vraagt je mee uit. Je zegt: 저는 내일 시간이 없는데요. Wat doet -는데요 hier?",
      options: ["Het maakt je \"nee\" zachter en laat ruimte voor een reactie.", "Het maakt er een vraag van.", "Het zet de zin in de verleden tijd.", "Het geeft een reden, zoals \"omdat\"."], answer: 0,
      why: ["Goed: -는데요 aan het eind laat iets open en klinkt minder direct.", "Er is geen vraag; de toon zakt aan het eind.", "Voor verleden tijd heb je 없었는데요 nodig.", "-는데요 aan het eind geeft geen reden, het verzacht."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik ben kantoormedewerker, maar mijn jongere broer is student.\"",
      tokens: [["저는", "jeoneun"], ["회사원인데", "hoesawoninde"], ["동생은", "dongsaengeun"], ["학생이에요.", "haksaengieyo."]] },
    { type: "fill", q: "저는 지금 ___ 나중에 전화할게요. (Ik heb het nu druk. Ik bel je later.)", answers: ["바쁜데"],
      hint: "바쁘다 is bijvoeglijk en heeft geen 받침.", why: "Bijvoeglijk zonder 받침: stam + -ㄴ데. 바쁘 + ㄴ데 = 바쁜데." },
    { type: "open", q: "Vertaal met -(으)ㄴ데: \"Ik heb honger. Zullen we gaan eten?\"", model: ["배가 고픈데 밥 먹으러 갈까요?", "배가 고픈데 같이 밥 먹을까요?", "배고픈데 식당에 갈까요?"],
      tip: "Check: 고프다 is bijvoeglijk zonder 받침, dus 고픈데. Eindig met -(으)ㄹ까요?" },
    { type: "open", q: "Vertaal: \"Ik ging gisteren naar een restaurant, maar het was dicht.\"", model: ["어제 식당에 갔는데 문을 닫았어요.", "어제 식당에 갔는데 문이 닫혀 있었어요."],
      tip: "Check: verleden tijd vóór -는데 (갔는데), en ook de tweede zin in de verleden tijd." }
  ],
  review: [
    { type: "mc", q: "오늘 ___ 아이스크림 먹을까요? (Het is warm vandaag. Zullen we een ijsje eten?)",
      options: ["더운데", "덥는데", "덥은데", "더워는데"], answer: 0,
      why: ["Goed: 덥다 is een ㅂ-stam. ㅂ wordt 우, dus 더운데.", "덥다 is bijvoeglijk, dus geen -는데.", "Bij een ㅂ-stam valt ㅂ weg: 더운데.", "-는데 komt niet na de 어-vorm."] },
    { type: "mc", q: "저는 서울에 ___ 부모님은 부산에 사세요. (Ik woon in Seoul, maar mijn ouders wonen in Busan.)",
      options: ["사는데", "살는데", "살은데", "산데"], answer: 0,
      why: ["Goed: bij een ㄹ-stam valt ㄹ weg voor -는데: 사는데.", "Voor -는데 valt de ㄹ van 살다 weg.", "살다 is een werkwoord van handeling: -는데, niet -은데.", "살다 is een werkwoord van handeling: de vorm is 사는데, niet 산데."] },
    { type: "mc", q: "이 옷은 ___ 좀 커요. (Deze kleding is mooi, maar wat groot.)",
      options: ["예쁜데", "예쁘는데", "예뻐는데", "예쁘은데"], answer: 0,
      why: ["Goed: 예쁘다 is bijvoeglijk zonder 받침: -ㄴ데.", "예쁘다 is bijvoeglijk, dus geen -는데.", "-는데 komt niet na de 어-vorm.", "Zonder 받침 komt er geen 으 bij: alleen -ㄴ데."] }
  ]
})
