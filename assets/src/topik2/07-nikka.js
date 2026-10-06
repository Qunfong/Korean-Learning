({
  id: "07", slug: "nikka", title: "-(으)니까", sub: "Omdat, dus doe ...: een reden met een opdracht of voorstel",
  canDo: "Je kunt nu een reden geven bij een opdracht of voorstel, en vertellen wat je ontdekte, met -(으)니까.",
  guess: {
    q: "\"Het is koud, dus trek een jas aan.\" Welke zin klopt, denk je?",
    options: ["추우니까 코트를 입으세요.", "추워서 코트를 입으세요.", "춥으니까 코트를 입으세요.", "춥니까 코트를 입으세요."], answer: 0,
    why: ["Goed: bij een opdracht hoort -(으)니까, en 춥다 wordt 추우-.", "-아서/어서 past niet bij een opdracht zoals -세요.", "Bij 춥다 wordt de ㅂ vóór 으 een 우: 추우니까.", "춥니까 is een vraag: \"Is het koud?\". Het is geen reden."]
  },
  problem: "Je wilt een reden geven en de ander iets vragen: \"Het regent, dus neem een paraplu mee.\" In het Nederlands zeg je gewoon \"dus\" of \"want\". In het Koreaans kan -아서/어서 hier niet. Je gebruikt -(으)니까 op de stam, en daarna de opdracht of het voorstel.",
  pattern: [
    { l: "reden", v: "비가 오", c: 3 }, { l: "-(으)니까", v: "니까", c: 2, key: true }, { l: "opdracht / voorstel", v: "우산을 가져가세요", c: 5 }
  ],
  patternCap: "Stam + 니까 (na klinker) / 으니까 (na 받침) + opdracht, voorstel of mededeling: 가니까, 먹으니까, 왔으니까, 학생이니까",
  rules: [
    "Stam op een klinker: -니까. 가다 wordt 가니까, 바쁘다 wordt 바쁘니까.",
    "Stam op een 받침: -으니까. 먹다 wordt 먹으니까, 없다 wordt 없으니까.",
    "Stam op ㄹ: de ㄹ valt weg. 멀다 wordt 머니까, 열다 wordt 여니까. Bij 춥다 wordt de ㅂ een 우: 추우니까.",
    "Verleden tijd mag wel vóór -(으)니까: 왔으니까, 먹었으니까. Bij een zelfstandig naamwoord: 학생이니까, 친구니까.",
    "Na -(으)니까 mag een opdracht (-세요), een voorstel (-(으)ㅂ시다, -(으)ㄹ까요?) of een gewone zin."
  ],
  pitfall: "Volgt er een opdracht of voorstel, gebruik dan nooit -아서/어서. Zeg 시간이 없으니까 택시를 탑시다, niet 시간이 없어서 택시를 탑시다.",
  examples: [
    { cn: "비가 오니까 우산을 가져가세요.", py: "Biga onikka usaneul gajyeogaseyo.", nl: "Het regent, dus neem een paraplu mee." },
    { cn: "시간이 없으니까 택시를 탑시다.", py: "Sigani eopseunikka taeksireul tapsida.", nl: "We hebben geen tijd, dus laten we een taxi nemen." },
    { cn: "오늘은 바쁘니까 내일 만날까요?", py: "Oneureun bappeunikka naeil mannalkkayo?", nl: "Ik heb het vandaag druk. Zullen we morgen afspreken?" },
    { cn: "어제 많이 걸었으니까 오늘은 쉬어요.", py: "Eoje mani georeosseunikka oneureun swieoyo.", nl: "We hebben gisteren veel gelopen, dus laten we vandaag rusten." }
  ],
  nuance: [
    { h: "-(으)니까 of -아서/어서?",
      p: "Allebei betekenen \"omdat\". Bij een gewone mededeling kunnen ze vaak allebei. Volgt er een opdracht of voorstel, dan alleen -(으)니까. Vóór -(으)니까 mag verleden tijd, vóór -아서/어서 niet. Bij sorry en bedankt gebruik je juist -아서/어서: 늦어서 죄송해요.",
      ex: [
        { cn: "배가 고파서 라면을 먹었어요.", py: "Baega gopaseo ramyeoneul meogeosseoyo.", nl: "Ik had honger, dus ik at ramen." },
        { cn: "배가 고프니까 라면을 먹을까요?", py: "Baega gopeunikka ramyeoneul meogeulkkayo?", nl: "Ik heb honger. Zullen we ramen eten?" }
      ] },
    { h: "\"Toen ik ... , zag ik dat ...\"",
      p: "-(으)니까 heeft nog een betekenis. Het eerste deel is wat jij deed. Het tweede deel is wat je toen ontdekte of zag. Het tweede deel staat dan in de verleden tijd. Dit is geen reden: de deur opendoen is niet de oorzaak van de kat. -아서/어서 kan hier niet.",
      ex: [
        { cn: "집에 가니까 아무도 없었어요.", py: "Jibe ganikka amudo eopseosseoyo.", nl: "Toen ik thuiskwam, was er niemand." },
        { cn: "문을 여니까 고양이가 있었어요.", py: "Muneul yeonikka goyangiga isseosseoyo.", nl: "Toen ik de deur opendeed, zat er een kat." }
      ] },
    { h: "Spreektaal: -(으)니까요 als antwoord",
      p: "Op de vraag 왜요? kun je antwoorden met alleen de reden: -(으)니까요. -(으)니까 klinkt wel nadrukkelijk, alsof de reden duidelijk is. Daarom past het niet bij een excuus. Bij een oudere of je baas klinkt een korte -아서/어서 vaak zachter.",
      ex: [
        { cn: "왜 택시를 타요? - 택시가 빠르니까요.", py: "Wae taeksireul tayo? - Taeksiga ppareunikkayo.", nl: "Waarom neem je een taxi? - Omdat een taxi sneller is." }
      ] }
  ],
  mistakes: [
    { wrong: "시간이 없어서 택시를 탑시다.", right: "시간이 없으니까 택시를 탑시다.", why: "Bij een voorstel (-(으)ㅂ시다) gebruik je -(으)니까, niet -아서/어서." },
    { wrong: "학교가 멀으니까 일찍 출발하세요.", right: "학교가 머니까 일찍 출발하세요.", why: "Bij een ㄹ-stam valt de ㄹ weg vóór -니까: 머니까." },
    { wrong: "늦으니까 죄송해요.", right: "늦어서 죄송해요.", why: "Bij een excuus gebruik je -아서/어서. Met -(으)니까 klinkt het als een uitvlucht." },
    { wrong: "날씨가 춥으니까 집에 있읍시다.", right: "날씨가 추우니까 집에 있읍시다.", why: "Bij 춥다 wordt de ㅂ vóór 으 een 우: 추우니까." }
  ],
  vocab: [
    ["-(으)니까", "-(eu)nikka", "omdat, dus; toen (ik ontdekte dat)"], ["우산", "usan", "paraplu"], ["가져가다", "gajyeogada", "meenemen"],
    ["출발하다", "chulbalhada", "vertrekken"], ["미끄럽다", "mikkeureopda", "glad zijn"], ["조심하다", "josimhada", "voorzichtig zijn"],
    ["장갑", "janggap", "handschoenen"], ["창문", "changmun", "raam"], ["열다", "yeolda", "openen, opendoen"], ["도착하다", "dochakada", "aankomen"]
  ],
  dialogue: [
    ["A", "지금 출발할까요?", "Jigeum chulbalhalkkayo?", "Zullen we nu vertrekken?"],
    ["B", "아니요, 밖에 비가 많이 오니까 조금 기다려요.", "Aniyo, bakke biga mani onikka jogeum gidaryeoyo.", "Nee, het regent buiten hard, dus laten we even wachten."],
    ["A", "그런데 영화가 일곱 시에 시작하니까 늦으면 안 돼요.", "Geureonde yeonghwaga ilgop sie sijakanikka neujeumyeon an dwaeyo.", "Maar de film begint om zeven uur, dus we mogen niet te laat zijn."],
    ["B", "그럼 택시를 탑시다. 택시가 빠르니까요.", "Geureom taeksireul tapsida. Taeksiga ppareunikkayo.", "Laten we dan een taxi nemen. Een taxi is sneller."],
    ["A", "좋아요. 제가 택시를 부를게요.", "Joayo. Jega taeksireul bureulgeyo.", "Goed. Ik bel wel een taxi."]
  ],
  reading: {
    title: "눈 오는 날",
    lines: [
      { cn: "어제 아침에 일어나서 창문을 여니까 밖이 하얬어요.", py: "Eoje achime ireonaseo changmuneul yeonikka bakki hayaesseoyo.", nl: "Toen ik gisterochtend opstond en het raam opendeed, was het buiten wit." },
      { cn: "밤에 눈이 많이 왔어요.", py: "Bame nuni mani wasseoyo.", nl: "Er was 's nachts veel sneeuw gevallen." },
      { cn: "엄마가 말했어요. \"길이 미끄러우니까 조심하세요.\"", py: "Eommaga malhaesseoyo. \"Giri mikkeureounikka josimhaseyo.\"", nl: "Mama zei: \"De weg is glad, dus wees voorzichtig.\"" },
      { cn: "\"그리고 추우니까 장갑도 끼세요.\"", py: "\"Geurigo chuunikka janggapdo kkiseyo.\"", nl: "\"En het is koud, dus doe ook handschoenen aan.\"" },
      { cn: "버스 정류장에 가니까 사람이 아주 많았어요.", py: "Beoseu jeongnyujange ganikka sarami aju manasseoyo.", nl: "Toen ik bij de bushalte kwam, stonden er heel veel mensen." },
      { cn: "친구가 말했어요. \"오늘은 버스가 늦게 오니까 같이 걸어갑시다.\"", py: "Chinguga malhaesseoyo. \"Oneureun beoseuga neutge onikka gachi georeogapsida.\"", nl: "Mijn vriend zei: \"De bus komt vandaag laat, dus laten we samen lopen.\"" },
      { cn: "우리는 천천히 걸어서 학교에 갔어요.", py: "Urineun cheoncheonhi georeoseo hakgyoe gasseoyo.", nl: "We liepen langzaam naar school." },
      { cn: "학교에 도착하니까 수업이 벌써 시작했어요.", py: "Hakgyoe dochakanikka sueobi beolsseo sijakaesseoyo.", nl: "Toen we op school aankwamen, was de les al begonnen." },
      { cn: "선생님이 말씀하셨어요. \"눈이 많이 왔으니까 괜찮아요.\"", py: "Seonsaengnimi malsseumhasyeosseoyo. \"Nuni mani wasseunikka gwaenchanayo.\"", nl: "De leraar zei: \"Er is veel sneeuw gevallen, dus het geeft niet.\"" }
    ],
    questions: [
      { type: "mc", q: "Waarom moest de schrijver voorzichtig zijn?",
        options: ["De weg was glad.", "Er waren veel mensen.", "De bus kwam laat.", "Het was donker."], answer: 0,
        why: ["Goed: 길이 미끄러우니까 조심하세요.", "De drukte was bij de bushalte, maar dat was niet de reden.", "Daarom gingen ze lopen, niet daarom voorzichtig zijn.", "Donker staat niet in de tekst."] },
      { type: "mc", q: "Hoe gingen de schrijver en zijn vriend naar school?",
        options: ["Ze liepen.", "Met de bus.", "Met de taxi.", "Met de fiets."], answer: 0,
        why: ["Goed: 같이 걸어갑시다 en 천천히 걸어서 학교에 갔어요.", "De bus kwam laat, dus ze namen hem niet.", "Een taxi staat niet in de tekst.", "Een fiets staat niet in de tekst."] },
      { type: "mc", q: "창문을 여니까 밖이 하얬어요. Wat betekent -니까 hier?",
        options: ["Toen ik het raam opendeed, zag ik dat het buiten wit was.", "Omdat ik het raam opendeed, werd het buiten wit.", "Als ik het raam opendoe, is het buiten wit.", "Het was buiten wit, dus ik deed het raam open."], answer: 0,
        why: ["Goed: eerst jouw handeling, dan wat je ontdekte.", "Het raam openen is niet de oorzaak van de sneeuw.", "\"Als\" is -(으)면, en de zin staat in de verleden tijd.", "De volgorde is andersom: eerst het raam, dan wat hij zag."] }
    ]
  },
  questions: [
    { type: "mc", q: "시간이 ___ 택시를 탑시다. (We hebben geen tijd, dus laten we een taxi nemen.)",
      options: ["없으니까", "없어서", "없니까", "없었어서"], answer: 0,
      why: ["Goed: een voorstel na de reden vraagt -(으)니까, en 없 heeft een 받침.", "-아서/어서 past niet bij een voorstel als -(으)ㅂ시다.", "Na een 받침 heb je -으니까 nodig.", "Vóór -어서 komt geen verleden tijd, en een voorstel vraagt -(으)니까."] },
    { type: "mc", q: "\"Het is ver, dus vertrek vroeg.\" Welke zin klopt?",
      options: ["머니까 일찍 출발하세요.", "멀으니까 일찍 출발하세요.", "멀니까 일찍 출발하세요.", "멀어서 일찍 출발하세요."], answer: 0,
      why: ["Goed: 멀다 is een ㄹ-stam. De ㄹ valt weg: 머니까.", "Bij een ㄹ-stam komt er geen 으.", "Vóór -니까 valt de ㄹ weg.", "-아서/어서 past niet bij een opdracht."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["늦으니까 죄송해요.", "늦어서 죄송해요.", "비가 오니까 우산을 가져가세요.", "배가 고파서 많이 먹었어요."], answer: 0,
      why: ["Goed: dit is fout. Bij een excuus gebruik je -아서/어서: 늦어서 죄송해요.", "Dit klopt: een excuus met -어서.", "Dit klopt: reden + opdracht met -(으)니까.", "Dit klopt: een gewone mededeling met -아서."] },
    { type: "mc", q: "집에 가니까 아무도 없었어요. Wat betekent dit?",
      options: ["Toen ik thuiskwam, was er niemand.", "Omdat ik naar huis ging, was er niemand.", "Als ik naar huis ga, is er niemand.", "Er was niemand, dus ik ging naar huis."], answer: 0,
      why: ["Goed: eerst jouw handeling, dan wat je ontdekte.", "Naar huis gaan is niet de oorzaak dat er niemand is.", "\"Als\" is -(으)면, en de zin staat in de verleden tijd.", "De volgorde is andersom: eerst naar huis, dan niemand."] },
    { type: "mc", q: "날씨가 ___ 따뜻하게 입으세요. (Het is koud, dus kleed je warm aan.)",
      options: ["추우니까", "춥으니까", "추워니까", "춥니까"], answer: 0,
      why: ["Goed: bij 춥다 wordt de ㅂ vóór 으 een 우: 추우니까.", "De ㅂ van 춥다 verandert vóór een klinker.", "-니까 komt op 추우, niet op de 아/어-vorm 추워.", "춥니까 is een vraag: \"Is het koud?\"."] },
    { type: "mc", q: "\"We hebben al gegeten. Zullen we koffie drinken?\"",
      options: ["밥을 먹었으니까 커피 마실까요?", "밥을 먹어서 커피 마실까요?", "밥을 먹었니까 커피 마실까요?", "밥을 먹었어서 커피 마실까요?"], answer: 0,
      why: ["Goed: verleden tijd + -으니까, en dan een voorstel.", "-아서/어서 past niet bij een voorstel als -(으)ㄹ까요?.", "먹었 heeft een 받침, dus -으니까.", "Vóór -어서 komt geen verleden tijd, en een voorstel vraagt -(으)니까."] },
    { type: "fill", q: "길이 ___ 조심하세요. (De weg is glad, dus wees voorzichtig. 미끄럽다 = glad zijn)", answers: ["미끄러우니까"],
      hint: "미끄럽다 werkt zoals 춥다. Wat wordt de ㅂ?", why: "De ㅂ wordt vóór 으 een 우: 미끄러우 + 니까 = 미끄러우니까. Na de reden volgt een opdracht." },
    { type: "order", q: "Zet in de goede volgorde: \"Het regent, dus neem een paraplu mee.\"",
      tokens: [["비가", "biga"], ["오니까", "onikka"], ["우산을", "usaneul"], ["가져가세요", "gajyeogaseyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Toen ik de deur opendeed, zat er een kat.\"",
      tokens: [["문을", "muneul"], ["여니까", "yeonikka"], ["고양이가", "goyangiga"], ["있었어요", "isseosseoyo"]] },
    { type: "open", q: "Vertaal: \"Het is koud, dus trek een jas aan.\"", model: ["추우니까 코트를 입으세요.", "날씨가 추우니까 코트를 입으세요."],
      tip: "Check: 춥다 wordt 추우니까, en na de reden komt een opdracht met -세요. Geen 추워서." },
    { type: "open", q: "Vertaal: \"Ik heb het vandaag druk, dus laten we morgen afspreken.\"", model: ["오늘은 바쁘니까 내일 만나요.", "오늘은 바쁘니까 내일 만납시다.", "오늘은 바쁘니까 내일 만날까요?"],
      tip: "Check: 바쁘다 krijgt -니까 (geen 받침). Een voorstel na de reden kan niet met 바빠서." }
  ],
  review: [
    { type: "mc", q: "\"Het eten is heet, dus eet langzaam.\"",
      options: ["음식이 뜨거우니까 천천히 드세요.", "음식이 뜨거워서 천천히 드세요.", "음식이 뜨겁으니까 천천히 드세요.", "음식이 뜨겁니까 천천히 드세요."], answer: 0,
      why: ["Goed: 뜨겁다 wordt 뜨거우니까, en dan een opdracht.", "-아서/어서 past niet bij een opdracht.", "De ㅂ wordt vóór 으 een 우: 뜨거우니까.", "뜨겁니까 is een vraag: \"Is het heet?\"."] },
    { type: "mc", q: "\"Sorry dat ik niets van me heb laten horen.\"",
      options: ["연락을 못 해서 미안해요.", "연락을 못 하니까 미안해요.", "연락을 못 했어서 미안해요.", "연락을 못 하고 미안해요."], answer: 0,
      why: ["Goed: bij een excuus gebruik je -아서/어서.", "Met -(으)니까 klinkt een excuus als een uitvlucht.", "Vóór -아서/어서 komt geen verleden tijd.", "-고 geeft geen reden."] },
    { type: "mc", q: "\"Toen ik in Korea aankwam, was het erg warm.\"",
      options: ["한국에 도착하니까 날씨가 아주 더웠어요.", "한국에 도착하면 날씨가 아주 더웠어요.", "한국에 도착했으니까 날씨가 아주 더웠어요.", "한국에 도착하고 날씨가 아주 더웠어요."], answer: 0,
      why: ["Goed: eerst jouw handeling, dan wat je merkte.", "-(으)면 is \"als\" en past niet bij iets wat al gebeurd is.", "도착했으니까 maakt er een reden van: \"omdat ik aankwam\".", "-고 zet twee dingen naast elkaar, zonder \"toen merkte ik\"."] }
  ]
})
