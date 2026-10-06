({
  id: "01", slug: "banmyeone", title: "-(으)ㄴ/는 반면에", sub: "Twee tegengestelde kanten: daarentegen",
  canDo: "Je kunt nu twee tegengestelde kanten van iets naast elkaar zetten met -(으)ㄴ/는 반면에.",
  guess: {
    q: "이 동네는 조용한 반면에 교통이 불편해요. Wat betekent dit, denk je?",
    options: [
      "Deze buurt is rustig, maar het vervoer is daarentegen onhandig.",
      "Deze buurt is rustig, en daardoor is het vervoer onhandig.",
      "Deze buurt is rustig, en het vervoer is ook handig.",
      "Deze buurt is rustig, omdat het vervoer onhandig is."
    ], answer: 0,
    why: [
      "Goed: 반면에 zet twee tegengestelde kanten naast elkaar.",
      "반면에 geeft geen oorzaak of gevolg aan.",
      "불편해요 betekent onhandig, en 반면에 geeft een tegenstelling.",
      "Er staat geen reden in de zin. 반면에 zet twee kanten tegenover elkaar."
    ]
  },
  problem: "Je wilt een voordeel en een nadeel tegenover elkaar zetten. In het Nederlands zeg je \"..., maar daarentegen ...\". -지만 kan dat ook, maar klinkt alledaags. In formeel en geschreven Koreaans gebruik je -(으)ㄴ/는 반면에. Het benadrukt dat de twee kanten tegengesteld zijn.",
  pattern: [
    { l: "onderwerp", v: "이 일은", c: 1 }, { l: "eigenschap", v: "힘든", c: 4 },
    { l: "반면에", v: "반면에", c: 2, key: true }, { l: "tegenkant", v: "월급이 많아요", c: 5 }
  ],
  patternCap: "Bijvoeglijk werkwoord + (으)ㄴ 반면에 · werkwoord + 는 반면에 · verleden -(으)ㄴ 반면에 · daarna de tegengestelde kant",
  rules: [
    "Bijvoeglijk werkwoord: na een klinker -ㄴ 반면에 (싼 반면에), na een 받침 -은 반면에 (작은 반면에).",
    "Werkwoord in het heden: -는 반면에 (잘 먹는 반면에). Ook 있다 en 없다 krijgen 는: 맛있는 반면에.",
    "Werkwoord in het verleden: -(으)ㄴ 반면에 (많이 온 반면에). 이다 wordt 인 반면에.",
    "Dit is vooral schrijftaal en formele taal. In spreektaal zeg je meestal -지만 of -는데."
  ],
  pitfall: "Zeg niet 비싸는 반면에. 비싸다 is een bijvoeglijk werkwoord, dus: 비싼 반면에. Schrijf 반면에 los van het woord ervoor.",
  examples: [
    { cn: "이 식당은 음식이 맛있는 반면에 가격이 비싸요.", py: "I sikdang-eun eumsigi masinneun banmyeone gagyeogi bissayo.", nl: "Dit restaurant heeft lekker eten, maar is daarentegen duur." },
    { cn: "형은 운동을 잘하는 반면에 동생은 공부를 잘해요.", py: "Hyeong-eun undong-eul jalhaneun banmyeone dongsaeng-eun gongbureul jalhaeyo.", nl: "De oudste broer is goed in sport. De jongste is daarentegen goed in leren." },
    { cn: "도시 생활은 편리한 반면에 스트레스가 많다.", py: "Dosi saenghwareun pyeollihan banmyeone seuteureseuga manta.", nl: "Het stadsleven is handig, maar geeft daarentegen veel stress." },
    { cn: "작년에는 비가 많이 온 반면에 올해는 거의 안 왔어요.", py: "Jangnyeoneneun biga mani on banmyeone olhaeneun geoui an wasseoyo.", nl: "Vorig jaar regende het veel. Dit jaar regende het daarentegen bijna niet." }
  ],
  nuance: [
    { h: "반면에, -지만 of -는데?",
      p: "-지만 is het gewone \"maar\". Het past bij elke tegenstelling, ook bij \"toch\": het was duur, toch kocht ik het. -는데 is zachter en vooral spreektaal. 반면에 zet alleen twee tegengestelde kanten of feiten naast elkaar. Voor \"toch\" past het niet.",
      ex: [
        { cn: "이 옷은 비쌌지만 샀어요.", py: "I oseun bissatjiman sasseoyo.", nl: "Deze kleren waren duur, maar ik heb ze toch gekocht." },
        { cn: "이 옷은 디자인이 예쁜 반면에 값이 비싸요.", py: "I oseun dijaini yeppeun banmyeone gapsi bissayo.", nl: "Deze kleren zijn mooi ontworpen, maar daarentegen duur." },
        { cn: "이 옷 예쁜데 좀 비싸네.", py: "I ot yeppeunde jom bissane.", nl: "Deze kleren zijn mooi, maar wel een beetje duur. (spreektaal)" }
      ] },
    { h: "Schrijftaal: 반면, 반면에 en 이에 반해",
      p: "In kranten en verslagen zie je ook 반면 zonder 에. Je kunt 반면에 ook aan het begin van een nieuwe zin zetten. Dan betekent het \"daarentegen\". In dezelfde stijl staat de zin vaak in de -다-vorm.",
      ex: [
        { cn: "남부는 비가 많이 온 반면, 중부는 비가 적었다.", py: "Nambuneun biga mani on banmyeon, jungbuneun biga jeogeotda.", nl: "In het zuiden regende het veel, in het midden daarentegen weinig." },
        { cn: "수출은 늘었다. 반면에 수입은 줄었다.", py: "Suchureun neureotda. Banmyeone suibeun jureotda.", nl: "De export steeg. De import daalde daarentegen." }
      ] },
    { h: "Twee onderwerpen: zet 은/는 erachter",
      p: "Vergelijk je twee personen of dingen? Geef dan beide het onderwerpspartikel 은/는. Dat partikel laat het contrast horen. Met 이/가 klinkt de tegenstelling minder duidelijk.",
      ex: [
        { cn: "저는 아침형인 반면에 남편은 저녁형이에요.", py: "Jeoneun achimhyeong-in banmyeone nampyeoneun jeonyeokhyeong-ieyo.", nl: "Ik ben een ochtendmens, mijn man daarentegen een avondmens." }
      ] }
  ],
  mistakes: [
    { wrong: "이 가방은 비싸는 반면에 튼튼해요.", right: "이 가방은 비싼 반면에 튼튼해요.", why: "비싸다 is een bijvoeglijk werkwoord. Dan gebruik je -ㄴ, niet -는." },
    { wrong: "작년에는 비가 많이 오는 반면에 올해는 안 왔어요.", right: "작년에는 비가 많이 온 반면에 올해는 안 왔어요.", why: "Het gaat over vorig jaar. Een werkwoord in het verleden krijgt -(으)ㄴ 반면에." },
    { wrong: "가격이 비싼 반면에 그 가방을 샀어요.", right: "가격이 비쌌지만 그 가방을 샀어요.", why: "\"Duur, en toch gekocht\" is een toegeving. Daarvoor gebruik je -지만, niet 반면에." },
    { wrong: "도시는 편리한반면에 시끄러워요.", right: "도시는 편리한 반면에 시끄러워요.", why: "반면 is een zelfstandig naamwoord. Schrijf het los: 편리한 반면에." }
  ],
  vocab: [
    ["-(으)ㄴ/는 반면에", "-(eu)n/neun banmyeone", "terwijl ... daarentegen"], ["가격", "gagyeok", "prijs"],
    ["편리하다", "pyeollihada", "handig, gemakkelijk"], ["월급", "wolgeup", "maandsalaris"],
    ["동료", "dongnyo", "collega"], ["물가", "mulga", "prijspeil, kosten van levensonderhoud"],
    ["재택근무", "jaetaekgeunmu", "thuiswerk"], ["출퇴근", "chultoegeun", "woon-werkverkeer"],
    ["선호하다", "seonhohada", "de voorkeur geven aan"], ["단점", "danjeom", "nadeel"]
  ],
  dialogue: [
    ["A", "새 회사는 어때요?", "Sae hoesaneun eottaeyo?", "Hoe is je nieuwe bedrijf?"],
    ["B", "월급이 많은 반면에 일이 너무 많아요.", "Wolgeubi maneun banmyeone iri neomu manayo.", "Het salaris is hoog, maar er is daarentegen erg veel werk."],
    ["A", "그럼 퇴근이 늦어요?", "Geureom toegeuni neujeoyo?", "Ga je dan laat naar huis?"],
    ["B", "네. 그래도 동료들은 친절해요.", "Ne. Geuraedo dongnyodeureun chinjeolhaeyo.", "Ja. Maar de collega's zijn wel aardig."],
    ["A", "일이 힘든 반면에 사람들이 좋네요.", "Iri himdeun banmyeone saramdeuri jonneyo.", "Het werk is zwaar, maar de mensen zijn daarentegen fijn."]
  ],
  reading: {
    title: "재택근무의 장단점",
    lines: [
      { cn: "최근 재택근무를 하는 회사가 늘고 있다.", py: "Choegeun jaetaekgeunmureul haneun hoesaga neulgo itda.", nl: "De laatste tijd laten steeds meer bedrijven mensen thuiswerken." },
      { cn: "재택근무는 출퇴근 시간이 없는 반면에 동료와 만날 기회가 적다.", py: "Jaetaekgeunmuneun chultoegeun sigani eomneun banmyeone dongnyowa mannal gihoega jeokda.", nl: "Bij thuiswerk is er geen reistijd, maar daarentegen zie je collega's weinig." },
      { cn: "어떤 사람은 집에서 집중을 더 잘하는 반면에 어떤 사람은 집중하기 어려워한다.", py: "Eotteon sarameun jibeseo jipjung-eul deo jalhaneun banmyeone eotteon sarameun jipjunghagi eoryeowohanda.", nl: "Sommige mensen concentreren zich thuis beter. Anderen vinden concentreren daarentegen moeilijk." },
      { cn: "회사 입장에서는 사무실 비용이 줄어드는 반면에 직원 관리가 어려워진다.", py: "Hoesa ipjang-eseoneun samusil biyong-i jureodeuneun banmyeone jigwon gwalliga eoryeowojinda.", nl: "Voor het bedrijf dalen de kosten van het kantoor, maar het beheer van personeel wordt daarentegen moeilijker." },
      { cn: "한 조사에 따르면 젊은 직원들은 재택근무를 선호하는 반면에 관리자들은 사무실 근무를 선호한다.", py: "Han josa-e ttareumyeon jeolmeun jigwondeureun jaetaekgeunmureul seonhohaneun banmyeone gwallijadeureun samusil geunmureul seonhohanda.", nl: "Volgens een onderzoek werken jonge werknemers liever thuis. Leidinggevenden werken daarentegen liever op kantoor." },
      { cn: "그래서 많은 회사가 일주일에 두세 번만 출근하는 방식을 선택하고 있다.", py: "Geuraeseo maneun hoesaga iljuire duse beonman chulgeunhaneun bangsigeul seontaekago itda.", nl: "Daarom kiezen veel bedrijven ervoor dat mensen maar twee of drie keer per week naar kantoor komen." },
      { cn: "재택근무에는 분명히 장점과 단점이 모두 있다.", py: "Jaetaekgeunmueneun bunmyeonghi jangjeomgwa danjeomi modu itda.", nl: "Thuiswerk heeft duidelijk zowel voordelen als nadelen." }
    ],
    questions: [
      { type: "mc", q: "Wie werken volgens het onderzoek liever op kantoor?",
        options: ["Leidinggevenden.", "Jonge werknemers.", "Alle werknemers.", "Niemand: iedereen werkt liever thuis."], answer: 0,
        why: ["Goed: 관리자들은 사무실 근무를 선호한다.", "Jonge werknemers werken juist liever thuis: 젊은 직원들은 재택근무를 선호하는.", "De tekst zet twee groepen tegenover elkaar, niet iedereen.", "De leidinggevenden willen wel naar kantoor."] },
      { type: "mc", q: "Wat is volgens de tekst een nadeel voor het bedrijf?",
        options: ["Het beheer van personeel wordt moeilijker.", "De kosten van het kantoor stijgen.", "De werknemers hebben meer reistijd.", "De werknemers krijgen minder salaris."], answer: 0,
        why: ["Goed: 직원 관리가 어려워진다.", "De kosten dalen juist: 비용이 줄어드는.", "Bij thuiswerk is er juist geen reistijd.", "Over salaris staat niets in de tekst."] },
      { type: "mc", q: "재택근무는 출퇴근 시간이 없는 반면에 동료와 만날 기회가 적다. Wat doet 반면에 hier?",
        options: ["Het zet een voordeel en een nadeel tegenover elkaar.", "Het geeft de reden waarom je collega's weinig ziet.", "Het zegt dat er toch reistijd is.", "Het voegt nog een voordeel toe."], answer: 0,
        why: ["Goed: geen reistijd (voordeel) tegenover weinig collega's zien (nadeel).", "반면에 geeft geen reden. Daarvoor zou je -아서/-어서 of -기 때문에 gebruiken.", "Er staat 없는: er is geen reistijd.", "Een tweede voordeel verbind je met -고, niet met 반면에."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Dit huis is ruim, maar daarentegen oud.\" Welke zin klopt?",
      options: ["이 집은 넓은 반면에 오래됐어요.", "이 집은 넓는 반면에 오래됐어요.", "이 집은 넓을 반면에 오래됐어요.", "이 집은 넓어서 반면에 오래됐어요."], answer: 0,
      why: ["Goed: 넓다 is een bijvoeglijk werkwoord met 받침, dus 넓은 반면에.", "는 hoort bij werkwoorden. 넓다 is een bijvoeglijk werkwoord.", "-(으)ㄹ is een toekomstvorm en past niet vóór 반면에.", "Na -아서 kan 반면에 niet komen. Het moet een bijvoeglijke vorm zijn: 넓은."] },
    { type: "mc", q: "저는 고기를 자주 ___ 반면에 채소는 잘 안 먹어요.",
      options: ["먹는", "먹은", "먹을", "먹고"], answer: 0,
      why: ["Goed: een werkwoord in het heden krijgt -는 반면에.", "먹은 is verleden, maar de zin gaat over nu.", "-을 is een toekomstvorm en past niet vóór 반면에.", "-고 is een verbindingsvorm. Vóór 반면에 staat -는."] },
    { type: "mc", q: "\"Dit brood is lekker, maar daarentegen ongezond.\" Welke zin klopt?",
      options: ["이 빵은 맛있는 반면에 건강에 안 좋아요.", "이 빵은 맛있은 반면에 건강에 안 좋아요.", "이 빵은 맛있을 반면에 건강에 안 좋아요.", "이 빵은 맛있어 반면에 건강에 안 좋아요."], answer: 0,
      why: ["Goed: woorden op 있다 en 없다 krijgen -는: 맛있는.", "맛있다 eindigt op 있다. Dan gebruik je -는, niet -은.", "-을 is een toekomstvorm en past niet vóór 반면에.", "Vóór 반면에 staat een bijvoeglijke vorm, niet -어."] },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn vriend praat veel, ik daarentegen weinig.\"",
      tokens: [["제 친구는", "je chinguneun"], ["말이 많은", "mari maneun"], ["반면에", "banmyeone"], ["저는", "jeoneun"], ["말이 적어요", "mari jeogeoyo"]] },
    { type: "open", q: "Vertaal: \"Seoul is handig, maar daarentegen duur.\"",
      model: ["서울은 교통이 편리한 반면에 물가가 비싸요.", "서울은 편리한 반면에 물가가 비싸다.", "서울은 생활이 편리한 반면에 집값이 비싸요."],
      tip: "Check: 편리하다 is een bijvoeglijk werkwoord, dus 편리한 (niet 편리하는). Staat 반면에 los?" },
    { type: "mc", q: "\"De jas was duur, maar ik heb hem toch gekocht.\" Welke zin klopt?",
      options: ["코트가 비쌌지만 그래도 샀어요.", "코트가 비싼 반면에 그래도 샀어요.", "코트가 비싸서 그래도 샀어요.", "코트가 비쌀 반면에 그래도 샀어요."], answer: 0,
      why: ["Goed: \"toch\" is een toegeving. Daarvoor is -지만 de vorm.", "반면에 zet twee kanten tegenover elkaar. Voor \"toch\" past het niet.", "-아서/-어서 geeft een reden: \"omdat hij duur was\".", "-(으)ㄹ past niet vóór 반면에, en de betekenis blijft een toegeving."] },
    { type: "mc", q: "Waar past -는 반면에 het best?",
      options: ["In een verslag over de voor- en nadelen van een plan.", "In een snel berichtje aan een goede vriend.", "In een verzoek aan je collega: \"Doe de deur dicht.\"", "In een zin die een reden geeft: \"Ik ben moe, dus ik ga slapen.\""], answer: 0,
      why: ["Goed: 반면에 is formeel en zet twee kanten tegenover elkaar.", "In een kort berichtje klinkt -는데 of -지만 natuurlijker. 반면에 is schrijftaal.", "Een verzoek heeft geen twee tegengestelde kanten.", "Een reden geef je met -아서/-어서, niet met 반면에."] },
    { type: "order", q: "Zet in de goede volgorde: \"In de stad is het leven handig, maar de huizen zijn daarentegen duur.\"",
      tokens: [["도시는", "dosineun"], ["생활이 편리한", "saenghwari pyeollihan"], ["반면에", "banmyeone"], ["집값이", "jipgapsi"], ["비싸다", "bissada"]] },
    { type: "fill", q: "이 휴대폰은 화면이 ___ 반면에 배터리가 빨리 닳아요. (Deze telefoon heeft een groot scherm, maar de batterij is daarentegen snel leeg.)",
      answers: ["큰"], hint: "크다 is een bijvoeglijk werkwoord zonder 받침.", why: "크다 + -ㄴ = 큰. Bijvoeglijke werkwoorden krijgen -(으)ㄴ 반면에." },
    { type: "mc", q: "지난달에는 일을 많이 ___ 반면에 이번 달에는 별로 안 했어요. (Vorige maand werkte ik veel, deze maand daarentegen weinig.)",
      options: ["한", "하는", "할", "했는"], answer: 0,
      why: ["Goed: het gaat over vorige maand. Een werkwoord in het verleden krijgt -(으)ㄴ.", "하는 is heden, maar 지난달 vraagt om verleden.", "-ㄹ is een toekomstvorm en past niet vóór 반면에.", "했는 bestaat niet als vorm vóór 반면에. Het verleden is 한."] },
    { type: "open", q: "Vertaal: \"Deze stad is rustig, maar er is daarentegen weinig te doen.\"",
      model: ["이 도시는 조용한 반면에 할 것이 별로 없어요.", "이 도시는 조용한 반면에 놀 곳이 적다."],
      tip: "Check: 조용하다 wordt 조용한 (bijvoeglijk werkwoord). De tweede helft is de tegengestelde kant." }
  ],
  review: [
    { type: "mc", q: "\"Deze tas is licht, maar daarentegen klein.\"",
      options: ["이 가방은 가벼운 반면에 작아요.", "이 가방은 가볍는 반면에 작아요.", "이 가방은 가볍은 반면에 작아요.", "이 가방은 가벼울 반면에 작아요."], answer: 0,
      why: ["Goed: 가볍다 wordt 가벼운 (ㅂ wordt 우).", "가볍다 is een bijvoeglijk werkwoord, dus geen -는.", "Bij 가볍다 verandert de ㅂ: 가벼운, niet 가볍은.", "-(으)ㄹ is een toekomstvorm en past niet vóór 반면에."] },
    { type: "mc", q: "영수는 말을 ___ 반면에 글은 잘 못 써요. (Yeongsu is goed in praten, maar kan daarentegen niet goed schrijven.)",
      options: ["잘하는", "잘한", "잘할", "잘하고"], answer: 0,
      why: ["Goed: 잘하다 is een werkwoord in het heden, dus -는 반면에.", "잘한 is verleden, maar de zin gaat over nu.", "-ㄹ is een toekomstvorm en past niet vóór 반면에.", "-고 is een verbindingsvorm. Vóór 반면에 staat -는."] },
    { type: "mc", q: "언니는 돈을 아껴 ___ 반면에 오빠는 돈을 많이 써요. (Mijn zus is zuinig, mijn broer geeft daarentegen veel uit.)",
      options: ["쓰는", "쓴", "쓸", "써서"], answer: 0,
      why: ["Goed: 쓰다 is een werkwoord in het heden, dus -는 반면에.", "쓴 is verleden, maar de zin gaat over een gewoonte nu.", "-ㄹ is een toekomstvorm en past niet vóór 반면에.", "-어서 geeft een reden of volgorde, geen tegenstelling."] }
  ]
})
