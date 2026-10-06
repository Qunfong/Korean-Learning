({
  id: "05", slug: "geoniwa", title: "-거니와", sub: "Bovendien, in nette schrijftaal",
  canDo: "Je kunt nu in formele tekst een tweede punt toevoegen met -거니와, en je weet wanneer -는 데다가 beter past.",
  guess: {
    q: "\"Deze stad is mooi en bovendien veilig.\" (schrijftaal) Welke zin klopt, denk je?",
    options: ["이 도시는 아름답거니와 안전하기도 하다.", "이 도시는 아름다운거니와 안전하기도 하다.", "이 도시는 아름다워거니와 안전하기도 하다.", "이 도시는 아름답기거니와 안전하기도 하다."], answer: 0,
    why: ["Goed: -거니와 komt direct na de stam.", "-거니와 komt na de stam, niet na de vorm met -ㄴ.", "-거니와 komt na de stam, niet na de vorm met -어.", "Er hoort geen -기 tussen de stam en -거니와."]
  },
  problem: "In een opstel of toespraak wil je een punt toevoegen. -(으)ㄴ/는 데다가 klinkt dan te gewoon. Met -거니와 zeg je hetzelfde, maar formeler: dit klopt, en dat ook.",
  pattern: [
    { l: "punt 1", v: "머리도 좋", c: 1 }, { l: "거니와", v: "거니와", c: 2, key: true },
    { l: "punt 2", v: "성격도", c: 3 }, { l: "eind", v: "좋다", c: 4 }
  ],
  patternCap: "Stam + -거니와 + tweede punt (vaak met 도 of -기도 하다); spreektaal: -(으)ㄴ/는 데다가",
  rules: [
    "-거니와 komt direct na de stam, met of zonder 받침: 좋거니와, 크거니와, 들거니와.",
    "Verleden: -았/었거니와 (없었거니와). Zelfstandig naamwoord: -(이)거니와 (선생님이거니와).",
    "Beide punten wijzen dezelfde kant op. Vaak staat 도 bij beide punten.",
    "Vaste uitdrukking: 다시 말하거니와 betekent \"ik herhaal\" of \"nogmaals\".",
    "Register: schrijftaal en formele toespraken. In spreektaal zeg je -(으)ㄴ/는 데다가, -고 또, of -(으)ㄹ 뿐만 아니라."
  ],
  pitfall: "Gebruik -거니와 niet in een gewoon gesprek met vrienden. Het klinkt dan stijf en ouderwets.",
  examples: [
    { cn: "그는 머리도 좋거니와 성격도 좋다.", py: "Geuneun meorido jokeoniwa seonggyeokdo jota.", nl: "Hij is slim en heeft bovendien een goed karakter." },
    { cn: "이 방법은 시간도 절약되거니와 비용도 적게 든다.", py: "I bangbeobeun sigando jeoryakdoegeoniwa biyongdo jeokge deunda.", nl: "Deze methode bespaart tijd en kost bovendien weinig." },
    { cn: "그 일은 어렵기도 하거니와 위험하기도 하다.", py: "Geu ireun eoryeopgido hageoniwa wiheomhagido hada.", nl: "Dat werk is moeilijk en bovendien gevaarlijk." },
    { cn: "다시 말하거니와, 이 계획에는 문제가 많다.", py: "Dasi malhageoniwa, i gyehoegeneun munjega manta.", nl: "Ik herhaal: dit plan heeft veel problemen." }
  ],
  nuance: [
    { h: "-거니와 of -는 데다가?",
      p: "De betekenis is bijna gelijk: \"en bovendien\". Het verschil zit in register en vorm. -거니와 is schrijftaal en plakt direct aan de stam (넓거니와). -는 데다가 kan overal en neemt -(으)ㄴ/는 met een spatie (넓은 데다가). 데다가 leidt ook vaak naar een gevolg met -아서. -거니와 zet twee punten eerder netjes naast elkaar.",
      ex: [
        { cn: "이 집은 넓거니와 조용하기도 하다.", py: "I jibeun neolgeoniwa joyonghagido hada.", nl: "Dit huis is ruim en bovendien rustig." },
        { cn: "이 집은 넓은 데다가 조용해서 마음에 들어요.", py: "I jibeun neolbeun dedaga joyonghaeseo maeume deureoyo.", nl: "Dit huis is ruim en ook nog rustig, dus ik vind het fijn." }
      ] },
    { h: "-거니와 of -(으)ㄹ 뿐만 아니라?",
      p: "Ook -(으)ㄹ 뿐만 아니라 is formeel. Het legt de nadruk op het tweede punt: \"niet alleen A, maar ook B\". Je hoort het veel in het nieuws en in rapporten. -거니와 klinkt literairder en wat ouderwetser. In essays en toespraken kun je beide gebruiken.",
      ex: [
        { cn: "이 제도는 효과가 클 뿐만 아니라 비용도 적게 든다.", py: "I jedoneun hyogwaga keul ppunman anira biyongdo jeokge deunda.", nl: "Deze regeling heeft niet alleen veel effect, maar kost ook weinig." }
      ] },
    { h: "Wanneer NIET",
      p: "Gebruik -거니와 niet in een gewoon gesprek, in berichtjes of tegen vrienden. Gebruik het ook niet voor een tegenstelling: dan kies je -지만 of, formeel, -(으)나. In formele spreektaal (een toespraak, een debat) kan het wel, zoals in 다시 말하거니와.",
      ex: [
        { cn: "음식은 맛있지만 서비스는 나쁘다.", py: "Eumsigeun masitjiman seobiseuneun nappeuda.", nl: "Het eten is lekker, maar de bediening is slecht." }
      ] }
  ],
  mistakes: [
    { wrong: "이 도시는 아름다운거니와 안전하다.", right: "이 도시는 아름답거니와 안전하다.", why: "-거니와 komt direct na de stam, zonder -ㄴ ervoor." },
    { wrong: "그는 좋은 선생님거니와 좋은 아버지이기도 하다.", right: "그는 좋은 선생님이거니와 좋은 아버지이기도 하다.", why: "Na een naamwoord op een medeklinker heb je 이 nodig: 선생님이거니와." },
    { wrong: "(tegen een vriend) 이 카페 커피도 맛있거니와 싸. 가자!", right: "(tegen een vriend) 이 카페 커피도 맛있는 데다가 싸. 가자!", why: "-거니와 is schrijftaal. In een gewoon gesprek zeg je -는 데다가." },
    { wrong: "그 식당은 음식은 맛있거니와 서비스는 나쁘다.", right: "그 식당은 음식은 맛있지만 서비스는 나쁘다.", why: "Lekker en slecht wijzen niet dezelfde kant op. Bij een tegenstelling gebruik je -지만." }
  ],
  vocab: [
    ["-거니와", "-geoniwa", "en bovendien (formeel, schrijftaal)"], ["절약되다", "jeoryakdoeda", "bespaard worden"],
    ["비용", "biyong", "kosten"], ["정책", "jeongchaek", "beleid"],
    ["효과", "hyogwa", "effect"], ["대안", "daean", "alternatief"],
    ["기존", "gijon", "bestaand, huidig"], ["개선하다", "gaeseonhada", "verbeteren"],
    ["재택근무", "jaetaekgeunmu", "thuiswerk"], ["소통", "sotong", "communicatie"]
  ],
  dialogue: [
    ["A", "이번 정책에 대해 어떻게 생각하십니까?", "Ibeon jeongchaege daehae eotteoke saenggakasimnikka?", "Wat vindt u van dit nieuwe beleid?"],
    ["B", "비용도 많이 들거니와 효과도 확실하지 않습니다.", "Biyongdo mani deulgeoniwa hyogwado hwaksilhaji anseumnida.", "Het kost veel geld en het effect is bovendien onzeker."],
    ["A", "그럼 대안이 있습니까?", "Geureom daeani itseumnikka?", "Is er dan een alternatief?"],
    ["B", "기존 제도를 개선하는 것이 더 빠르거니와 안전합니다.", "Gijon jedoreul gaeseonhaneun geosi deo ppareugeoniwa anjeonhamnida.", "Het huidige systeem verbeteren is sneller en bovendien veiliger."],
    ["A", "좋은 의견 감사합니다.", "Joeun uigyeon gamsahamnida.", "Dank u voor uw nuttige mening."]
  ],
  reading: {
    title: "재택근무, 계속해야 할까",
    lines: [
      { cn: "최근 많은 기업이 재택근무를 도입하였다.", py: "Choegeun maneun gieobi jaetaekgeunmureul doipayeotda.", nl: "De laatste jaren hebben veel bedrijven thuiswerk ingevoerd." },
      { cn: "재택근무는 출퇴근 시간이 절약되거니와 교통비도 줄일 수 있다.", py: "Jaetaekgeunmuneun chultoegeun sigani jeoryakdoegeoniwa gyotongbido juril su itda.", nl: "Thuiswerk bespaart reistijd en bovendien kun je minder aan vervoer uitgeven." },
      { cn: "직원들은 업무에 더 집중할 수 있거니와 가족과 보내는 시간도 늘었다고 말한다.", py: "Jigwondeureun eommue deo jipjunghal su itgeoniwa gajokgwa bonaeneun sigando neureotdago malhanda.", nl: "Werknemers zeggen dat ze zich beter op hun werk kunnen concentreren en bovendien meer tijd met hun gezin hebben." },
      { cn: "그러나 문제점도 적지 않다.", py: "Geureona munjejeomdo jeokji anta.", nl: "Er zijn echter ook flink wat problemen." },
      { cn: "동료와의 소통이 어렵거니와 업무와 휴식의 경계도 흐려지기 쉽다.", py: "Dongnyowaui sotongi eoryeopgeoniwa eommuwa hyusigui gyeonggyedo heuryeojigi swipda.", nl: "Communicatie met collega's is lastig en bovendien vervaagt de grens tussen werk en rust snel." },
      { cn: "이 때문에 일부 기업은 사무실 근무로 다시 돌아가고 있다.", py: "I ttaemune ilbu gieobeun samusil geunmuro dasi doragago itda.", nl: "Daarom keren sommige bedrijven terug naar werken op kantoor." },
      { cn: "전문가들은 두 방식을 섞은 혼합 근무가 대안이 될 수 있다고 본다.", py: "Jeonmungadeureun du bangsigeul seokkeun honhap geunmuga daeani doel su itdago bonda.", nl: "Deskundigen denken dat hybride werken, een mengvorm van beide, een alternatief kan zijn." },
      { cn: "중요한 것은 일하는 장소가 아니라 일의 성과라는 점이다.", py: "Jungyohan geoseun ilhaneun jangsoga anira irui seonggwaraneun jeomida.", nl: "Waar het om gaat, is niet de plek waar je werkt, maar het resultaat van het werk." }
    ],
    questions: [
      { type: "mc", q: "Welk nadeel van thuiswerk noemt de tekst?",
        options: ["De grens tussen werk en rust vervaagt.", "De reistijd wordt langer.", "Werknemers hebben minder tijd voor hun gezin.", "Het vervoer wordt duurder."], answer: 0,
        why: ["Goed: 업무와 휴식의 경계도 흐려지기 쉽다.", "Reistijd wordt juist bespaard (절약되거니와).", "Werknemers hebben juist méér tijd voor hun gezin (늘었다).", "Vervoerskosten worden juist lager (교통비도 줄일 수 있다)."] },
      { type: "mc", q: "Wat zien deskundigen als alternatief?",
        options: ["Een mengvorm van thuis en op kantoor werken.", "Alleen nog thuiswerken.", "Alleen nog op kantoor werken.", "Kortere werkdagen."], answer: 0,
        why: ["Goed: 두 방식을 섞은 혼합 근무.", "De tekst noemt juist de nadelen van alleen thuiswerk.", "Dat doen sommige bedrijven, maar deskundigen stellen iets anders voor.", "Over werktijden staat niets in de tekst."] },
      { type: "mc", q: "동료와의 소통이 어렵거니와... Wat drukt -거니와 hier uit?",
        options: ["Er komt nog een tweede nadeel bij.", "Er volgt een voordeel als tegenstelling.", "Het geeft de reden van de moeilijke communicatie.", "Het geeft een voorwaarde aan."], answer: 0,
        why: ["Goed: twee nadelen in dezelfde richting: lastige communicatie en een vage grens.", "-거니와 zet geen tegenstelling neer. Beide punten zijn nadelen.", "-거니와 geeft geen reden. Dat zou -아서 of -기 때문에 zijn.", "Een voorwaarde is -(으)면."] }
    ]
  },
  questions: [
    { type: "mc", q: "그 식당은 음식도 ___ 서비스도 훌륭하다.",
      options: ["맛있거니와", "맛있는거니와", "맛있은거니와", "맛있어거니와"], answer: 0,
      why: ["Goed: -거니와 komt direct na de stam 맛있-.", "-거니와 komt na de stam, niet na -는.", "-거니와 komt na de stam, niet na -은.", "-거니와 komt na de stam, niet na -어."] },
    { type: "mc", q: "\"Hij had toen geen geld en bovendien geen tijd.\"",
      options: ["그때 그는 돈도 없었거니와 시간도 없었다.", "그때 그는 돈도 없는거니와 시간도 없었다.", "그때 그는 돈도 없었은거니와 시간도 없었다.", "그때 그는 돈도 없었던거니와 시간도 없었다."], answer: 0,
      why: ["Goed: verleden is -었거니와.", "-거니와 komt na de stam, niet na -는.", "Na -었- volgt direct -거니와, zonder -은.", "Na -었- volgt direct -거니와, zonder -던."] },
    { type: "mc", q: "\"Hij is een goede leraar en bovendien een goede vader.\"",
      options: ["그는 좋은 선생님이거니와 좋은 아버지이기도 하다.", "그는 좋은 선생님거니와 좋은 아버지이기도 하다.", "그는 좋은 선생님인거니와 좋은 아버지이기도 하다.", "그는 좋은 선생님이고거니와 좋은 아버지이기도 하다."], answer: 0,
      why: ["Goed: 선생님 eindigt op een medeklinker, dus 이거니와.", "Na een medeklinker is 이 nodig: 선생님이거니와.", "-거니와 komt na 이-, niet na 인.", "-고 en -거니와 kun je niet stapelen."] },
    { type: "order", q: "Zet in de goede volgorde: \"Deze methode is goedkoop en bovendien snel.\"",
      tokens: [["이 방법은", "i bangbeobeun"], ["값도", "gapdo"], ["싸거니와", "ssageoniwa"], ["속도도", "sokdodo"], ["빠르다", "ppareuda"]] },
    { type: "mc", q: "Waar past -거니와 het best?",
      options: ["In een krantencolumn over onderwijs.", "In een appje aan een vriend.", "In een gesprek met je jongere broer.", "Bij het bestellen in een café."], answer: 0,
      why: ["Goed: -거니와 is formele schrijftaal.", "In een appje klinkt -거니와 stijf. Zeg -는 데다가.", "Met familie praat je gewoon. Zeg -는 데다가.", "Bij bestellen heb je geen formele schrijftaal nodig."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["이 집은 넓은거니와 조용하다.", "이 집은 넓거니와 조용하다.", "이 집은 넓은 데다가 조용하다.", "이 집은 넓을 뿐만 아니라 조용하다."], answer: 0,
      why: ["Goed: -거니와 komt direct na de stam: 넓거니와. Hier is de vorm van 데다가 ermee vermengd.", "Dit klopt: stam + -거니와.", "Dit klopt: -(으)ㄴ + spatie + 데다가.", "Dit klopt: -(으)ㄹ + 뿐만 아니라."] },
    { type: "mc", q: "다시 말하거니와, 이 계획에는 문제가 많다. Wat betekent 다시 말하거니와?",
      options: ["Ik herhaal (nogmaals)", "Ik zeg het niet nog eens", "Volgens anderen", "Kort gezegd"], answer: 0,
      why: ["Goed: 다시 말하거니와 is een vaste uitdrukking voor \"ik herhaal\".", "다시 betekent juist \"opnieuw\".", "Er staat niets over wat anderen zeggen.", "\"Kort gezegd\" is 요컨대 of 한마디로."] },
    { type: "fill", q: "그는 실력도 ___ 성실하기도 하다. (Hij is uitstekend in zijn vak en bovendien ijverig. 뛰어나다 = uitstekend)",
      answers: ["뛰어나거니와"], hint: "Stam 뛰어나- + de formele vorm voor \"bovendien\".", why: "-거니와 komt direct na de stam: 뛰어나거니와." },
    { type: "order", q: "Zet in de goede volgorde: \"Hij had toen geen geld en bovendien geen tijd.\"",
      tokens: [["그때 그는", "geuttae geuneun"], ["돈도", "dondo"], ["없었거니와", "eopseotgeoniwa"], ["시간도", "sigando"], ["없었다", "eopseotda"]] },
    { type: "open", q: "Vertaal in schrijftaal: \"Dit boek is nuttig en bovendien leuk.\"",
      model: ["이 책은 유익하거니와 재미도 있다.", "이 책은 유익하거니와 재미있기도 하다.", "이 책은 내용도 유익하거니와 재미도 있다."],
      tip: "Check: staat -거니와 direct na de stam 유익하-, en eindigt de zin in schrijfstijl (-다)?" },
    { type: "open", q: "Zeg dit in beleefde spreektaal (-아요): 이 방법은 시간도 절약되거니와 비용도 적게 든다.",
      model: ["이 방법은 시간도 절약되는 데다가 비용도 적게 들어요.", "이 방법은 시간도 아낄 수 있고 돈도 적게 들어요.", "이 방법은 시간도 절약되고 비용도 적게 들어요."],
      tip: "Check: -거니와 is vervangen door -는 데다가 of -고, en de zin eindigt op -아요/-어요." }
  ],
  review: [
    { type: "mc", q: "날씨도 ___ 길도 막혀서 늦었다. (Het weer was slecht en bovendien stond er file.)",
      options: ["나쁘거니와", "나쁜거니와", "나빠거니와", "나쁘기거니와"], answer: 0,
      why: ["Goed: -거니와 komt direct na de stam 나쁘-.", "-거니와 komt na de stam, niet na -ㄴ.", "-거니와 komt na de stam, niet na -아.", "Er hoort geen -기 tussen de stam en -거니와."] },
    { type: "mc", q: "그는 키도 크거니와 잘생겼다. Wat is de beste versie in spreektaal?",
      options: ["그는 키도 큰 데다가 잘생겼어요.", "그는 키도 크지만 잘생겼어요.", "그는 키도 커서 잘생겼어요.", "그는 키도 크기는커녕 잘생겼어요."], answer: 0,
      why: ["Goed: -(으)ㄴ 데다가 is de gewone vorm voor \"bovendien\".", "-지만 geeft een tegenstelling. Hier gaan beide punten dezelfde kant op.", "-아서 geeft een reden. Lang zijn is geen reden voor knap zijn.", "-기는커녕 zegt dat het eerste niet klopt."] },
    { type: "mc", q: "\"Het voorstel is onrealistisch en kost bovendien veel.\" (schrijftaal)",
      options: ["그 제안은 비현실적이거니와 비용도 많이 든다.", "그 제안은 비현실적거니와 비용도 많이 든다.", "그 제안은 비현실적인거니와 비용도 많이 든다.", "그 제안은 비현실적이고거니와 비용도 많이 든다."], answer: 0,
      why: ["Goed: 비현실적 + 이다, dus 비현실적이거니와.", "Na een naamwoord op een medeklinker heb je 이 nodig.", "-거니와 komt na 이-, niet na 인.", "-고 en -거니와 kun je niet stapelen."] }
  ]
})
