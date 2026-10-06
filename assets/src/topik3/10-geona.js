({
  id: "10", slug: "geona", title: "-거나 en (이)나", sub: "Of: kiezen tussen handelingen en dingen",
  canDo: "Je kunt nu keuzes noemen met -거나 (bij werkwoorden) en (이)나 (bij naamwoorden), en je weet wanneer 또는 of -든지 beter past.",
  guess: {
    q: "\"In het weekend lees ik of kijk ik een film.\" Welke zin klopt, denk je?",
    options: ["주말에는 책을 읽거나 영화를 봐요.", "주말에는 책을 읽나 영화를 봐요.", "주말에는 책을 읽이나 영화를 봐요.", "주말에는 책을 읽어거나 영화를 봐요."], answer: 0,
    why: ["Goed: stam 읽 + 거나.", "Na een werkwoordstam komt -거나, niet 나.", "(이)나 hoort bij naamwoorden, niet bij werkwoorden.", "-거나 komt aan de stam, niet aan de 어-vorm."]
  },
  problem: "In het Nederlands gebruik je overal \"of\": \"koffie of thee\", \"ik lees of ik kijk tv\". In het Koreaans hangt het af van het woord. Bij een werkwoord gebruik je -거나. Bij een naamwoord gebruik je 이나 of 나.",
  pattern: [
    { l: "handeling 1", v: "책을 읽", c: 1 }, { l: "-거나", v: "거나", c: 2, key: true }, { l: "handeling 2", v: "영화를 봐요", c: 4 },
    { l: "naamwoord + (이)나", v: "빵이나 밥", c: 3, key: true }
  ],
  patternCap: "Stam + 거나 + handeling 2 = ... of ... · Naamwoord + 이나 (na 받침) / 나 (zonder 받침) + naamwoord · Formeel: 또는",
  rules: [
    "-거나 komt direct na de stam, met of zonder 받침: 가거나, 먹거나, 쉬거나.",
    "Bij naamwoorden: na een 받침 이나 (빵이나), zonder 받침 나 (커피나).",
    "De tijd zet je aan het eind van de zin: 쉬거나 친구를 만났어요.",
    "Met -거나 하다 sluit je een rijtje af: 주말에는 쉬거나 해요 = in het weekend rust ik zoal.",
    "(이)나 staat tussen de naamwoorden. Het partikel (을/를, 에) komt pas na het laatste: 빵이나 밥을 먹어요."
  ],
  pitfall: "Na een getal betekent 이나 niet \"of\" maar \"maar liefst\": 세 시간이나 기다렸어요 = ik heb maar liefst drie uur gewacht.",
  examples: [
    { cn: "주말에는 책을 읽거나 영화를 봐요.", py: "Jumareneun chaegeul ilgeona yeonghwareul bwayo.", nl: "In het weekend lees ik of kijk ik een film." },
    { cn: "아침에는 빵이나 과일을 먹어요.", py: "Achimeneun ppangina gwaireul meogeoyo.", nl: "'s Ochtends eet ik brood of fruit." },
    { cn: "커피나 차 드릴까요?", py: "Keopina cha deurilkkayo?", nl: "Zal ik u koffie of thee geven?" },
    { cn: "피곤하면 집에서 쉬거나 일찍 자요.", py: "Pigonhamyeon jibeseo swigeona iljjik jayo.", nl: "Als ik moe ben, rust ik thuis uit of ga ik vroeg slapen." }
  ],
  nuance: [
    { h: "-거나 of (이)나?",
      p: "Kijk naar het woord vóór \"of\". Is het een werkwoord of bijvoeglijk werkwoord? Dan -거나. Is het een naamwoord? Dan (이)나. In een vraag of voorstel betekent (이)나 ook \"of zo\": 커피나 마실까요? = zullen we koffie of zo drinken?",
      ex: [
        { cn: "저녁에 운동하거나 산책해요.", py: "Jeonyeoge undonghageona sanchaekaeyo.", nl: "'s Avonds sport ik of maak ik een wandeling." },
        { cn: "저녁에 헬스장이나 공원에 가요.", py: "Jeonyeoge helseujangina gongwone gayo.", nl: "'s Avonds ga ik naar de sportschool of het park." }
      ] },
    { h: "(이)나 of 또는?",
      p: "또는 is een los woord voor \"of\". Het klinkt formeel en zakelijk. Je ziet het in mededelingen, formulieren en instructies. Het kan tussen naamwoorden en tussen zinsdelen staan. In een gewoon gesprek kies je bijna altijd (이)나 of -거나.",
      ex: [
        { cn: "신청은 전화 또는 이메일로 하십시오.", py: "Sincheongeun jeonhwa ttoneun imeillo hasipsio.", nl: "Aanmelden kan telefonisch of per e-mail." },
        { cn: "전화나 이메일로 연락해 주세요.", py: "Jeonhwana imeillo yeollakae juseyo.", nl: "Neem contact op via telefoon of e-mail." }
      ] },
    { h: "-거나 of -든지?",
      p: "-거나 noemt een paar mogelijkheden: dit of dat. -든지 zegt: het maakt niet uit welke. Je hoort het vaak in 뭐든지 (wat dan ook) en 언제든지 (wanneer dan ook). Vaak herhaal je -든지: 가든지 말든지 = of je nu gaat of niet.",
      ex: [
        { cn: "주말에 등산하거나 수영해요.", py: "Jumare deungsanhageona suyeonghaeyo.", nl: "In het weekend wandel ik in de bergen of ga ik zwemmen." },
        { cn: "등산하든지 수영하든지 운동을 좀 하세요.", py: "Deungsanhadeunji suyeonghadeunji undongeul jom haseyo.", nl: "Bergwandelen of zwemmen, maakt niet uit: beweeg een beetje." }
      ] }
  ],
  mistakes: [
    { wrong: "저녁에 운동하나 산책해요.", right: "저녁에 운동하거나 산책해요.", why: "Na een werkwoordstam komt -거나. (이)나 is voor naamwoorden." },
    { wrong: "빵나 밥을 먹어요.", right: "빵이나 밥을 먹어요.", why: "빵 eindigt op een 받침, dus 이나." },
    { wrong: "커피이나 차를 마셔요.", right: "커피나 차를 마셔요.", why: "커피 heeft geen 받침, dus alleen 나." },
    { wrong: "주말에 쉬었거나 친구를 만났어요.", right: "주말에 쉬거나 친구를 만났어요.", why: "Bij een gewoon rijtje zet je de verleden tijd alleen aan het eind." }
  ],
  vocab: [
    ["-거나 / (이)나", "-geona / (i)na", "of"], ["보통", "botong", "meestal, gewoonlijk"], ["산책하다", "sanchaekada", "wandelen"],
    ["과일", "gwail", "fruit"], ["또는", "ttoneun", "of (formeel)"], ["신청", "sincheong", "aanmelding, aanvraag"],
    ["연락하다", "yeollakada", "contact opnemen"], ["고르다", "goreuda", "kiezen"], ["환영하다", "hwanyeonghada", "verwelkomen"], ["언제든지", "eonjedeunji", "wanneer dan ook, altijd"]
  ],
  dialogue: [
    ["A", "주말에 보통 뭐 해요?", "Jumare botong mwo haeyo?", "Wat doe je meestal in het weekend?"],
    ["B", "집에서 쉬거나 친구를 만나요. 민준 씨는요?", "Jibeseo swigeona chingureul mannayo. Minjun ssineunyo?", "Ik rust thuis uit of zie vrienden. En jij, Minjun?"],
    ["A", "저는 공원에서 산책하거나 자전거를 타요.", "Jeoneun gongwoneseo sanchaekageona jajeongeoreul tayo.", "Ik wandel in het park of ik fiets."],
    ["B", "좋네요. 이번 주말에 같이 자전거나 탈까요?", "Jonneyo. Ibeon jumare gachi jajeongeona talkkayo?", "Leuk. Zullen we dit weekend samen gaan fietsen of zo?"],
    ["A", "좋아요. 토요일이나 일요일 어때요?", "Joayo. Toyoirina iryoil eottaeyo?", "Goed. Wat dacht je van zaterdag of zondag?"],
    ["B", "저는 언제든지 괜찮아요.", "Jeoneun eonjedeunji gwaenchanayo.", "Mij is alles goed."]
  ],
  reading: {
    title: "한국어 교실 안내",
    lines: [
      { cn: "우리 주민 센터에서 외국인을 위한 한국어 교실을 열어요.", py: "Uri jumin senteoeseo oegugineul wihan hangugeo gyosireul yeoreoyo.", nl: "Ons buurthuis start een Koreaanse les voor buitenlanders." },
      { cn: "수업은 화요일이나 목요일 중에서 하루를 고를 수 있어요.", py: "Sueobeun hwayoirina mogyoil jungeseo harureul goreul su isseoyo.", nl: "Je kunt voor de les kiezen uit dinsdag of donderdag." },
      { cn: "수업에서는 한국 노래를 배우거나 한국 음식을 만들어요.", py: "Sueobeseoneun hanguk noraereul baeugeona hanguk eumsigeul mandeureoyo.", nl: "In de les leer je Koreaanse liedjes of maak je Koreaans eten." },
      { cn: "수업이 끝나면 차를 마시거나 이야기를 나누는 시간도 있어요.", py: "Sueobi kkeunnamyeon chareul masigeona iyagireul nanuneun sigando isseoyo.", nl: "Na de les is er ook tijd om thee te drinken of te praten." },
      { cn: "신청은 전화 또는 이메일로 하세요.", py: "Sincheongeun jeonhwa ttoneun imeillo haseyo.", nl: "Aanmelden kan telefonisch of per e-mail." },
      { cn: "센터에 직접 오셔도 돼요.", py: "Senteoe jikjeop osyeodo dwaeyo.", nl: "Je mag ook zelf langskomen bij het buurthuis." },
      { cn: "수업료는 없지만 공책이나 펜은 직접 가져오세요.", py: "Sueomnyoneun eopjiman gongchaegina peneun jikjeop gajyeooseyo.", nl: "De les is gratis, maar neem zelf een schrift of pen mee." },
      { cn: "궁금한 것이 있으면 언제든지 연락하세요. 환영합니다!", py: "Gunggeumhan geosi isseumyeon eonjedeunji yeollakaseyo. Hwanyeonghamnida!", nl: "Heb je een vraag, neem dan altijd contact op. Welkom!" }
    ],
    questions: [
      { type: "mc", q: "Hoe kun je je aanmelden?",
        options: ["Telefonisch, per e-mail of door zelf langs te komen.", "Alleen per e-mail.", "Alleen op dinsdag.", "Via de leraar in de les."], answer: 0,
        why: ["Goed: 전화 또는 이메일로, en 직접 오셔도 돼요.", "Telefoon kan ook: 전화 또는 이메일.", "Dinsdag gaat over de les, niet over aanmelden.", "Over de leraar staat niets in de tekst."] },
      { type: "mc", q: "Wat moet je zelf meenemen?",
        options: ["Een schrift of een pen.", "Geld voor de les.", "Thee.", "Koreaans eten."], answer: 0,
        why: ["Goed: 공책이나 펜은 직접 가져오세요.", "De les is gratis: 수업료는 없지만.", "Thee drink je na de les; je hoeft het niet mee te nemen.", "Eten maak je in de les zelf."] },
      { type: "mc", q: "노래를 배우거나 음식을 만들어요. Wat zegt -거나 hier?",
        options: ["Je doet het een of het ander: liedjes leren of eten maken.", "Je doet eerst het een en dan het ander.", "Je doet beide tegelijk.", "Het maakt niet uit wat je doet."], answer: 0,
        why: ["Goed: -거나 noemt mogelijkheden: dit of dat.", "\"Eerst ... dan\" zou -고 of -(으)ㄴ 후에 zijn.", "Tegelijk zou -(으)면서 zijn.", "\"Maakt niet uit\" zou -든지 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Na het werk sport ik of ga ik wandelen.\"",
      options: ["퇴근 후에 운동하거나 산책해요.", "퇴근 후에 운동하나 산책해요.", "퇴근 후에 운동하고거나 산책해요.", "퇴근 후에 운동해거나 산책해요."], answer: 0,
      why: ["Goed: stam 운동하 + 거나.", "Na een werkwoordstam komt -거나, niet 나.", "Kies -고 (en) of -거나 (of), niet allebei.", "-거나 komt aan de stam 운동하, niet aan de 어-vorm."] },
    { type: "mc", q: "아침에는 빵___ 밥을 먹어요. ('s Ochtends eet ik brood of rijst.)",
      options: ["이나", "나", "거나", "이도"], answer: 0,
      why: ["Goed: 빵 heeft een 받침, dus 이나.", "Na een 받침 komt 이나, niet 나.", "-거나 hoort bij werkwoorden, niet bij naamwoorden.", "이도 bestaat niet als partikel. \"Ook\" is 도."] },
    { type: "mc", q: "커피___ 차 드릴까요? (Zal ik u koffie of thee geven?)",
      options: ["나", "이나", "거나", "든지"], answer: 0,
      why: ["Goed: 커피 heeft geen 받침, dus 나.", "이나 komt alleen na een 받침.", "-거나 hoort bij werkwoorden.", "-든지 betekent \"maakt niet uit welke\" en wordt dan herhaald. Hier is het een gewone keuze."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["주말에 청소하나 빨래해요.", "주말에 청소하거나 빨래해요.", "주말에 공원이나 산에 가요.", "신청은 전화 또는 이메일로 하세요."], answer: 0,
      why: ["Goed: dit is fout. Na een werkwoordstam komt -거나, niet 나.", "Dit klopt: werkwoord + -거나.", "Dit klopt: 공원 heeft een 받침, dus 이나.", "Dit klopt: 또는 tussen twee naamwoorden."] },
    { type: "mc", q: "A: 뭐 먹을까요? B: 저는 뭐든지 괜찮아요. Wat bedoelt B?",
      options: ["Wat dan ook is goed.", "Niets is goed.", "Alleen dit of dat is goed.", "Wat is er lekker?"], answer: 0,
      why: ["Goed: 뭐든지 = wat dan ook. -든지 betekent: het maakt niet uit.", "Dan zou B 아무것도 싫어요 zeggen.", "-든지 noemt geen beperkte keuze; alles mag.", "B stelt geen vraag; B antwoordt."] },
    { type: "mc", q: "Welke zin past in een officiële mededeling?",
      options: ["전화 또는 이메일로 연락하십시오.", "전화나 이메일로 연락해.", "전화거나 이메일로 연락하십시오.", "전화 또 이메일로 연락하십시오."], answer: 0,
      why: ["Goed: 또는 is formeel, en -십시오 past bij een mededeling.", "연락해 is 반말. Dat past niet in een mededeling.", "Na een naamwoord komt geen -거나.", "또 betekent \"weer, ook\". \"Of\" is 또는."] },
    { type: "order", q: "Zet in de goede volgorde: \"'s Avonds luister ik muziek of lees ik een boek.\"",
      tokens: [["저녁에는", "jeonyeogeneun"], ["음악을", "eumageul"], ["듣거나", "deutgeona"], ["책을", "chaegeul"], ["읽어요.", "ilgeoyo."]] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik wil koffie of thee drinken.\"",
      tokens: [["커피나", "keopina"], ["차를", "chareul"], ["마시고", "masigo"], ["싶어요.", "sipeoyo."]] },
    { type: "fill", q: "주말에는 등산을 하___ 수영을 해요. (In het weekend ga ik bergwandelen of zwemmen.)", answers: ["거나"],
      hint: "Welke uitgang betekent \"of\" na een werkwoord?", why: "Stam 하 + 거나: 하거나." },
    { type: "open", q: "Vertaal: \"Ik ga met de bus of de metro naar mijn werk.\"", model: ["버스나 지하철로 회사에 가요.", "버스나 지하철을 타고 회사에 가요.", "저는 버스나 지하철로 출근해요."],
      tip: "Check: 버스 heeft geen 받침, dus 나. Het partikel 로 komt pas na 지하철." },
    { type: "open", q: "Vertaal: \"Na het eten maak ik een wandeling of kijk ik tv.\"", model: ["밥을 먹은 후에 산책하거나 TV를 봐요.", "저녁을 먹고 나서 산책하거나 텔레비전을 봐요."],
      tip: "Check: 산책하 + 거나 (werkwoord), en de tijd alleen aan het eind." }
  ],
  review: [
    { type: "mc", q: "시간이 있으면 운동을 ___ 요리를 해요. (Als ik tijd heb, sport ik of kook ik.)",
      options: ["하거나", "하나", "했거나", "하이나"], answer: 0,
      why: ["Goed: stam 하 + 거나.", "Na een werkwoordstam komt -거나, niet 나.", "De zin gaat over nu; zet geen verleden tijd bij -거나.", "이나 hoort bij naamwoorden, niet bij een stam."] },
    { type: "mc", q: "\"Geef me een pen of een potlood.\"",
      options: ["펜이나 연필 좀 주세요.", "펜나 연필 좀 주세요.", "펜거나 연필 좀 주세요.", "펜이고 연필 좀 주세요."], answer: 0,
      why: ["Goed: 펜 heeft een 받침, dus 이나.", "Na een 받침 komt 이나, niet 나.", "Na een naamwoord komt geen -거나.", "이고 betekent \"en (het is)\", niet \"of\"."] },
    { type: "mc", q: "버스를 세 시간이나 기다렸어요. Wat betekent 이나 hier?",
      options: ["Maar liefst: ik heb wel drie uur gewacht.", "Of: drie uur of iets anders.", "Pas: ik heb maar drie uur gewacht.", "Ongeveer: ik weet het niet precies."], answer: 0,
      why: ["Goed: na een getal betekent 이나 \"maar liefst\".", "Na een getal betekent 이나 geen \"of\".", "\"Maar\" of \"pas\" zou 밖에 ... 안 zijn: 세 시간밖에 안 기다렸어요.", "\"Ongeveer\" is 쯤: 세 시간쯤."] }
  ]
})
