({
  id: "13", slug: "ttae", title: "-(으)ㄹ 때", sub: "Wanneer en toen: een moment in de tijd",
  canDo: "Je kunt nu zeggen wat je doet op een bepaald moment, en wat er gebeurde toen iets voorbij was, met -(으)ㄹ 때 en -았/었을 때.",
  guess: {
    q: "\"Toen ik klein was, woonde ik in Busan.\" Welke zin klopt, denk je?",
    options: ["어렸을 때 부산에 살았어요.", "어렸는 때 부산에 살았어요.", "어렸어 때 부산에 살았어요.", "어렸으면 부산에 살았어요."], answer: 0,
    why: ["Goed: 어렸 + 을 때 = toen ik klein was.", "Vóór 때 staat -(으)ㄹ, niet -는.", "Vóór 때 hoort -을: 어렸을 때.", "-(으)면 is \"als\", een voorwaarde. Het gaat hier om een periode."]
  },
  problem: "In het Nederlands staan \"wanneer\" en \"toen\" vooraan in de bijzin. Het Koreaans zet 때 (\"moment, tijd\") achter het werkwoord. 시간이 있을 때 = wanneer ik tijd heb. Is de handeling al voorbij of af, dan zeg je -았/었을 때: 왔을 때 = toen ik gekomen was.",
  pattern: [
    { l: "situatie", v: "시간이 있", c: 3 }, { l: "-(으)ㄹ 때", v: "을 때", c: 2, key: true }, { l: "wat je doet", v: "영화를 봐요", c: 5 }
  ],
  patternCap: "Stam + (으)ㄹ 때 (wanneer, terwijl); stam + 았/었을 때 (toen, het was af); naamwoord + 때: 방학 때",
  rules: [
    "Na een klinker: -ㄹ 때 (갈 때). Na een 받침: -을 때 (먹을 때). Bij een stam op ㄹ komt alleen 때: 살 때, 만들 때.",
    "-았/었을 때 gebruik je als de handeling op dat moment al af was: 한국에 왔을 때 = toen ik in Korea was aangekomen.",
    "Bij beschrijvende werkwoorden kan het verleden op twee manieren: 어릴 때 en 어렸을 때 betekenen allebei \"toen ik klein was\".",
    "Na een naamwoord komt 때 direct: 방학 때, 생일 때, 대학생 때.",
    "Het onderwerp in de 때-zin krijgt meestal 이/가: 제가 어렸을 때, 비가 올 때."
  ],
  pitfall: "Bij werkwoorden van beweging is het verschil groot. 한국에 갈 때 = op weg naar Korea, bijvoorbeeld in het vliegtuig. 한국에 갔을 때 = toen ik in Korea was aangekomen.",
  examples: [
    { cn: "시간이 있을 때 영화를 봐요.", py: "Sigani isseul ttae yeonghwareul bwayo.", nl: "Wanneer ik tijd heb, kijk ik films." },
    { cn: "어렸을 때 부산에 살았어요.", py: "Eoryeosseul ttae busane sarasseoyo.", nl: "Toen ik klein was, woonde ik in Busan." },
    { cn: "한국에 처음 왔을 때 한국어를 하나도 몰랐어요.", py: "Hanguge cheoeum wasseul ttae hangugeoreul hanado mollasseoyo.", nl: "Toen ik voor het eerst in Korea kwam, kende ik helemaal geen Koreaans." },
    { cn: "방학 때 제주도에 갈 거예요.", py: "Banghak ttae jejudoe gal geoyeyo.", nl: "In de vakantie ga ik naar Jeju." }
  ],
  nuance: [
    { h: "-(으)ㄹ 때 of -(으)면?",
      p: "-(으)면 is een voorwaarde: als dit gebeurt, dan dat. -(으)ㄹ 때 noemt een moment of periode. Bij gewoontes kunnen ze soms allebei. Maar voor één echt moment in het verleden kan alleen 때. En een opdracht voor als iets straks gebeurt, maak je meestal met -(으)면.",
      ex: [
        { cn: "어제 집에 왔을 때 아무도 없었어요.", py: "Eoje jibe wasseul ttae amudo eopseosseoyo.", nl: "Toen ik gisteren thuiskwam, was er niemand." },
        { cn: "집에 오면 전화하세요.", py: "Jibe omyeon jeonhwahaseyo.", nl: "Bel me als je thuis bent." }
      ] },
    { h: "갈 때 of 갔을 때?",
      p: "Bij 가다, 오다 en 도착하다 maakt de vorm veel uit. -(으)ㄹ 때 = onderweg, de handeling is nog bezig. -았/었을 때 = de handeling is af, je bent er. Of het allemaal vroeger of nu is, zie je aan het einde van de zin.",
      ex: [
        { cn: "회사에 갈 때 지하철을 타요.", py: "Hoesae gal ttae jihacheoreul tayo.", nl: "Als ik naar mijn werk ga, neem ik de metro." },
        { cn: "회사에 갔을 때 아무도 없었어요.", py: "Hoesae gasseul ttae amudo eopseosseoyo.", nl: "Toen ik op mijn werk aankwam, was er niemand." }
      ] },
    { h: "때는: toen wel, nu niet",
      p: "Met 는 erachter (때는) zet je dat moment tegenover een ander moment. Vaak volgt dan 지금은. In de spreektaal zeg je gewoon 때. 때에 klinkt formeler en zie je vooral in geschreven tekst.",
      ex: [
        { cn: "어렸을 때는 채소를 싫어했어요. 지금은 좋아해요.", py: "Eoryeosseul ttaeneun chaesoreul sireohaesseoyo. Jigeumeun joahaeyo.", nl: "Als kind hield ik niet van groente. Nu wel." }
      ] }
  ],
  mistakes: [
    { wrong: "어렸는 때 부산에 살았어요.", right: "어렸을 때 부산에 살았어요.", why: "Vóór 때 staat altijd -(으)ㄹ: 어렸을 때." },
    { wrong: "어제 집에 오면 아무도 없었어요.", right: "어제 집에 왔을 때 아무도 없었어요.", why: "Voor één moment in het verleden gebruik je 때, geen -(으)면." },
    { wrong: "김밥을 만들을 때 김이 필요해요.", right: "김밥을 만들 때 김이 필요해요.", why: "Bij een stam op ㄹ komt geen 을. Je zegt 만들 때." },
    { wrong: "한국에 갈 때 친구 집에서 지냈어요.", right: "한국에 갔을 때 친구 집에서 지냈어요.", why: "Je verbleef er na aankomst. Dan is het gaan af: 갔을 때." }
  ],
  vocab: [
    ["-(으)ㄹ 때", "-(eu)l ttae", "wanneer, toen"], ["어리다", "eorida", "jong, klein (van leeftijd)"], ["처음", "cheoeum", "voor het eerst"],
    ["방학", "banghak", "schoolvakantie"], ["모르다", "moreuda", "niet weten, niet kennen"], ["지하철", "jihacheol", "metro"],
    ["아무도", "amudo", "niemand (met ontkenning)"], ["외롭다", "oeropda", "eenzaam"], ["힘들다", "himdeulda", "zwaar, moeilijk"], ["도착하다", "dochakada", "aankomen"]
  ],
  dialogue: [
    ["A", "언제 한국어 공부를 시작했어요?", "Eonje hangugeo gongbureul sijakaesseoyo?", "Wanneer ben je met Koreaans begonnen?"],
    ["B", "대학생 때 시작했어요.", "Daehaksaeng ttae sijakaesseoyo.", "Toen ik student was."],
    ["A", "처음 한국에 왔을 때 어땠어요?", "Cheoeum hanguge wasseul ttae eottaesseoyo?", "Hoe was het toen je voor het eerst in Korea kwam?"],
    ["B", "말이 안 통해서 힘들었어요. 지금은 괜찮아요.", "Mari an tonghaeseo himdeureosseoyo. Jigeumeun gwaenchanayo.", "Ik kon me niet verstaanbaar maken, dus het was zwaar. Nu gaat het goed."],
    ["A", "저는 힘들 때 한국 노래를 들어요.", "Jeoneun himdeul ttae hanguk noraereul deureoyo.", "Als ik het zwaar heb, luister ik naar Koreaanse liedjes."],
    ["B", "저도요!", "Jeodoyo!", "Ik ook!"]
  ],
  reading: {
    title: "처음 서울에 왔을 때",
    lines: [
      { cn: "저는 2년 전에 서울에 왔어요.", py: "Jeoneun inyeon jeone seoure wasseoyo.", nl: "Ik kwam twee jaar geleden naar Seoul." },
      { cn: "처음 서울에 도착했을 때 정말 추웠어요.", py: "Cheoeum seoure dochakaesseul ttae jeongmal chuwosseoyo.", nl: "Toen ik voor het eerst in Seoul aankwam, was het echt koud." },
      { cn: "그때 저는 한국어를 하나도 몰랐어요.", py: "Geuttae jeoneun hangugeoreul hanado mollasseoyo.", nl: "Toen kende ik helemaal geen Koreaans." },
      { cn: "식당에서 주문할 때 항상 그림을 보고 손으로 가리켰어요.", py: "Sikdangeseo jumunhal ttae hangsang geurimeul bogo soneuro garikyeosseoyo.", nl: "Als ik in een restaurant bestelde, keek ik altijd naar de plaatjes en wees ik met mijn hand." },
      { cn: "친구가 없어서 외로울 때가 많았어요.", py: "Chinguga eopseoseo oeroul ttaega manasseoyo.", nl: "Ik had geen vrienden, dus ik was vaak eenzaam." },
      { cn: "외로울 때는 엄마에게 전화했어요.", py: "Oeroul ttaeneun eommaege jeonhwahaesseoyo.", nl: "Als ik me eenzaam voelde, belde ik mijn moeder." },
      { cn: "지금은 한국 친구도 많고 한국어도 잘해요.", py: "Jigeumeun hanguk chingudo manko hangugeodo jalhaeyo.", nl: "Nu heb ik veel Koreaanse vrienden en spreek ik goed Koreaans." },
      { cn: "그래도 처음 왔을 때를 자주 생각해요.", py: "Geuraedo cheoeum wasseul ttaereul jaju saenggakaeyo.", nl: "Toch denk ik vaak terug aan de tijd dat ik net aankwam." }
    ],
    questions: [
      { type: "mc", q: "Hoe was het weer toen de schrijver in Seoul aankwam?",
        options: ["Het was echt koud.", "Het was warm.", "Het regende.", "Het sneeuwde."], answer: 0,
        why: ["Goed: 처음 서울에 도착했을 때 정말 추웠어요.", "Er staat 추웠어요: koud.", "Regen staat niet in de tekst.", "Sneeuw staat niet in de tekst."] },
      { type: "mc", q: "Wat deed de schrijver als hij eenzaam was?",
        options: ["Hij belde zijn moeder.", "Hij ging naar een restaurant.", "Hij luisterde naar muziek.", "Hij zocht Koreaanse vrienden."], answer: 0,
        why: ["Goed: 외로울 때는 엄마에게 전화했어요.", "In het restaurant bestelde hij met plaatjes, dat was niet om de eenzaamheid.", "Muziek staat in de dialoog, niet in de tekst.", "Vrienden heeft hij nu, maar dat was niet wat hij deed als hij eenzaam was."] },
      { type: "mc", q: "식당에서 주문할 때 ... Wat betekent -ㄹ 때 hier?",
        options: ["Elke keer als hij bestelde.", "Als hij misschien zou bestellen.", "Nadat hij had besteld.", "Omdat hij bestelde."], answer: 0,
        why: ["Goed: -(으)ㄹ 때 noemt het moment waarop iets gebeurt.", "Een voorwaarde zou -(으)면 zijn.", "\"Nadat\" is -(으)ㄴ 후에.", "Een reden zou -아서/어서 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Wanneer ik tijd heb, lees ik boeken.\"",
      options: ["시간이 있을 때 책을 읽어요.", "시간이 있는 때 책을 읽어요.", "시간이 있 때 책을 읽어요.", "시간이 있었을 때 책을 읽어요."], answer: 0,
      why: ["Goed: 있 + 을 때.", "Vóór 때 staat -(으)ㄹ, niet -는.", "Na een 받침 heb je -을 nodig: 있을 때.", "-았/었을 때 is \"toen\", dat past niet bij een gewoonte nu."] },
    { type: "mc", q: "김밥을 ___ 때 김이 필요해요. (Als je kimbap maakt, heb je zeewier nodig.)",
      options: ["만들", "만들을", "만드는", "만들었을"], answer: 0,
      why: ["Goed: bij een stam op ㄹ komt alleen 때: 만들 때.", "Bij een stam op ㄹ komt geen 을.", "Vóór 때 staat -(으)ㄹ, niet -는.", "-았/었을 때 is \"toen het af was\". Dat past niet bij een algemene regel."] },
    { type: "mc", q: "\"Toen ik in Korea aankwam, regende het.\"",
      options: ["한국에 도착했을 때 비가 왔어요.", "한국에 도착했는 때 비가 왔어요.", "한국에 도착하면 비가 왔어요.", "한국에 도착했으면 비가 왔어요."], answer: 0,
      why: ["Goed: één moment in het verleden, en het aankomen was af.", "Vóór 때 staat -(으)ㄹ, niet -는.", "-(으)면 is een voorwaarde. Voor één moment in het verleden gebruik je 때.", "-았/었으면 betekent \"als ... had\", geen \"toen\"."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["어제 집에 오면 아무도 없었어요.", "어제 집에 왔을 때 아무도 없었어요.", "집에 오면 전화하세요.", "집에 올 때 우유 좀 사 오세요."], answer: 0,
      why: ["Goed: dit is fout. Voor één moment gisteren gebruik je 왔을 때, niet -면.", "Dit klopt: één moment in het verleden.", "Dit klopt: een opdracht voor als het straks gebeurt.", "Dit klopt: onderweg naar huis melk kopen."] },
    { type: "mc", q: "학교에 갈 때 친구를 만났어요. Waar zag hij zijn vriend?",
      options: ["Onderweg naar school.", "Op school, na aankomst.", "Na school, op weg naar huis.", "Hij heeft hem niet gezien."], answer: 0,
      why: ["Goed: 갈 때 = terwijl hij nog onderweg was.", "Na aankomst zou 갔을 때 zijn.", "Het gaat over naar school gaan, niet naar huis.", "만났어요 betekent dat hij hem wel zag."] },
    { type: "mc", q: "\"In de vakantie ga ik naar Jeju.\"",
      options: ["방학 때 제주도에 갈 거예요.", "방학을 때 제주도에 갈 거예요.", "방학 때를 제주도에 갈 거예요.", "방학 때서 제주도에 갈 거예요."], answer: 0,
      why: ["Goed: naamwoord + 때.", "Na een naamwoord komt 때 direct, zonder 을.", "때 is hier een tijd, geen lijdend voorwerp: geen 를.", "때서 bestaat niet. Zeg 때 of 때에."] },
    { type: "mc", q: "어렸을 때는 채소를 싫어했어요. Wat zegt 는 na 때 hier?",
      options: ["Dat het nu anders is.", "Dat hij nog steeds klein is.", "Dat het een voorwaarde is.", "Dat het morgen gebeurt."], answer: 0,
      why: ["Goed: 때는 zet dat moment tegenover nu.", "어렸을 때 gaat over vroeger.", "Een voorwaarde is -(으)면.", "싫어했어요 is verleden tijd."] },
    { type: "fill", q: "___ 때 일찍 자요. (Als ik moe ben, ga ik vroeg slapen. 피곤하다 = moe zijn)", answers: ["피곤할"],
      hint: "피곤하 eindigt op een klinker. Welke vorm komt vóór 때?", why: "Na een klinker: -ㄹ 때. 피곤하 + ㄹ = 피곤할." },
    { type: "order", q: "Zet in de goede volgorde: \"Toen ik student was, woonde ik in Seoul.\"",
      tokens: [["대학생", "daehaksaeng"], ["때", "ttae"], ["서울에", "seoure"], ["살았어요", "sarasseoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Als ik naar mijn werk ga, neem ik de metro.\"",
      tokens: [["회사에", "hoesae"], ["갈", "gal"], ["때", "ttae"], ["지하철을", "jihacheoreul"], ["타요", "tayo"]] },
    { type: "open", q: "Vertaal: \"Toen ik klein was, hield ik van pizza.\"", model: ["어렸을 때 피자를 좋아했어요.", "어릴 때 피자를 좋아했어요."],
      tip: "Check: 어리다 + (었)을 때. De verleden tijd van de hoofdzin staat aan het eind: 좋아했어요." },
    { type: "open", q: "Vertaal: \"Als ik moe ben, luister ik naar muziek.\"", model: ["피곤할 때 음악을 들어요.", "피곤할 때는 음악을 들어요."],
      tip: "Check: 피곤하 + ㄹ 때, en 듣다 wordt 들어요." }
  ],
  review: [
    { type: "mc", q: "\"Toen ik in Seoul aankwam, belde ik mijn moeder.\"",
      options: ["서울에 도착했을 때 엄마한테 전화했어요.", "서울에 도착했는 때 엄마한테 전화했어요.", "서울에 도착했 때 엄마한테 전화했어요.", "서울에 도착하면 엄마한테 전화했어요."], answer: 0,
      why: ["Goed: het aankomen was af, dus -았/었을 때.", "Vóór 때 staat -(으)ㄹ, niet -는.", "Vóór 때 hoort -을: 도착했을 때.", "-(으)면 is een voorwaarde. Voor één moment in het verleden gebruik je 때."] },
    { type: "mc", q: "\"Als ik verdrietig ben, eet ik chocola.\" (슬프다 = verdrietig)",
      options: ["슬플 때 초콜릿을 먹어요.", "슬플을 때 초콜릿을 먹어요.", "슬픈 때 초콜릿을 먹어요.", "슬펐을 때 초콜릿을 먹어요."], answer: 0,
      why: ["Goed: 슬프 + ㄹ 때.", "Na een klinker komt alleen ㄹ, niet ㄹ + 을.", "Vóór 때 staat -(으)ㄹ, niet -(으)ㄴ.", "-았/었을 때 is \"toen\", dat past niet bij een gewoonte nu."] },
    { type: "mc", q: "\"Wat heb je in de zomervakantie gedaan?\"",
      options: ["여름 방학 때 뭐 했어요?", "여름 방학을 때 뭐 했어요?", "여름 방학 때를 뭐 했어요?", "여름 방학으면 뭐 했어요?"], answer: 0,
      why: ["Goed: naamwoord + 때.", "Na een naamwoord komt 때 direct, zonder 을.", "때 is hier een tijd, geen lijdend voorwerp: geen 를.", "-(으)면 hoort bij een werkwoord en is een voorwaarde."] }
  ]
})
