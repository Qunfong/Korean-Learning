({
  id: "05", slug: "boda", title: "-아/어 보다", sub: "Iets proberen, of al eens gedaan hebben",
  canDo: "Je kunt nu iemand iets aanraden met -아/어 보세요, en vertellen wat je al eens gedaan hebt met -아/어 봤어요 of -(으)ㄴ 적이 있어요.",
  guess: {
    q: "\"Heb je weleens kimchi gegeten?\" Welke zin klopt, denk je?",
    options: ["김치를 먹어 봤어요?", "김치를 먹아 봤어요?", "김치를 먹고 봤어요?", "김치를 먹어 보세요?"], answer: 0,
    why: ["Goed: 먹어 + 봤어요 = al eens gegeten.", "먹 heeft ㅓ, dus -어: 먹어.", "Met -고 staat er: eten en daarna kijken.", "보세요 is een raad: probeer het eens. Geen vraag naar ervaring."]
  },
  problem: "Je wilt iemand iets aanraden: \"probeer het eens\". Of je wilt vertellen wat je al eens gedaan hebt. Het Nederlands gebruikt daarvoor \"eens\" en \"weleens\". Het Koreaans doet allebei met -아/어 보다. Letterlijk staat er: doen en kijken hoe het is.",
  pattern: [
    { l: "wat", v: "이 김치를", c: 3 }, { l: "werkwoord", v: "먹", c: 4 }, { l: "-어 보다", v: "어 보세요", c: 2, key: true }
  ],
  patternCap: "먹어 보세요 = probeer het eens · 먹어 봤어요 = ik heb het al eens gegeten · 먹어 볼게요 = ik zal het proberen",
  rules: [
    "Stam met ㅏ of ㅗ: -아 보다. 가 보다, 와 보다.",
    "Andere klinkers: -어 보다. 먹어 보다, 입어 보다. 하다 wordt 해 보다.",
    "Probeer eens: -아/어 보세요. Ervaring: -아/어 봤어요.",
    "Ontkennen: 안 + werkwoord. 아직 안 먹어 봤어요 = ik heb het nog nooit gegeten.",
    "Schrijf een spatie tussen de 아/어-vorm en 보다: 먹어 봤어요."
  ],
  pitfall: "Gebruik geen -고 vóór 보다. 먹고 보세요 betekent \"eet en kijk dan\". Zeg 먹어 보세요.",
  examples: [
    { cn: "이 옷을 한번 입어 보세요.", py: "I oseul hanbeon ibeo boseyo.", nl: "Pas deze kleren eens." },
    { cn: "저는 한국에 가 봤어요.", py: "Jeoneun hanguge ga bwasseoyo.", nl: "Ik ben weleens in Korea geweest." },
    { cn: "김치찌개를 만들어 봤는데 너무 매웠어요.", py: "Gimchijjigaereul mandeureo bwanneunde neomu maewosseoyo.", nl: "Ik heb een keer kimchistoofpot gemaakt, maar die was te pittig." },
    { cn: "이 노래를 들어 봤어요?", py: "I noraereul deureo bwasseoyo?", nl: "Heb je dit liedje weleens gehoord?" }
  ],
  nuance: [
    { h: "-아/어 봤어요 of -(으)ㄴ 적이 있어요?",
      p: "Allebei vertellen ze een ervaring. -아/어 보다 betekent eigenlijk \"proberen\": je deed het bewust. -(으)ㄴ 적이 있다 zegt alleen: het is ooit gebeurd. Voor iets wat je overkwam, zoals iets kwijtraken of ziek worden, gebruik je dus -(으)ㄴ 적이 있다. Vaak combineer je ze: 가 본 적이 있어요.",
      ex: [
        { cn: "제주도에 가 봤어요.", py: "Jejudoe ga bwasseoyo.", nl: "Ik ben weleens op Jeju geweest." },
        { cn: "여행 중에 지갑을 잃어버린 적이 있어요.", py: "Yeohaeng junge jigabeul ireobeorin jeogi isseoyo.", nl: "Ik ben op reis eens mijn portemonnee kwijtgeraakt." }
      ] },
    { h: "Proberen en zacht vragen",
      p: "Met 한번 -아/어 보세요 geef je een vriendelijke raad of uitnodiging. Met -아/어 볼게요 beloof je dat je het probeert. Tegen vrienden zeg je -아/어 봐. In een winkel is 입어 봐도 돼요? de gewone vraag om iets te passen.",
      ex: [
        { cn: "제가 한번 해 볼게요.", py: "Jega hanbeon hae bolgeyo.", nl: "Ik zal het eens proberen." },
        { cn: "이 운동화 신어 봐도 돼요?", py: "I undonghwa sineo bwado dwaeyo?", nl: "Mag ik deze sportschoenen passen?" }
      ] },
    { h: "Nog nooit: 안 -아/어 봤어요",
      p: "Heb je iets nog nooit gedaan, dan zet je 안 vóór het hele werkwoord: 안 먹어 봤어요. Met 아직 erbij klinkt het als \"nog niet, maar misschien later\". -(으)ㄴ 적이 없어요 klinkt sterker: het is echt nooit gebeurd.",
      ex: [
        { cn: "아직 떡볶이를 안 먹어 봤어요.", py: "Ajik tteokbokkireul an meogeo bwasseoyo.", nl: "Ik heb nog nooit tteokbokki gegeten." },
        { cn: "비행기를 탄 적이 없어요.", py: "Bihaenggireul tan jeogi eopseoyo.", nl: "Ik heb nog nooit gevlogen." }
      ] }
  ],
  mistakes: [
    { wrong: "이 김치 먹고 보세요.", right: "이 김치 먹어 보세요.", why: "Vóór 보다 komt de 아/어-vorm, niet -고. 먹고 보세요 is \"eet en kijk dan\"." },
    { wrong: "지갑을 잃어버려 봤어요.", right: "지갑을 잃어버린 적이 있어요.", why: "-아/어 보다 is iets wat je bewust probeert. Iets wat je overkomt, zeg je met -(으)ㄴ 적이 있다." },
    { wrong: "제주도에 가아 봤어요.", right: "제주도에 가 봤어요.", why: "가 + 아 smelt samen tot 가. Je schrijft geen 가아." },
    { wrong: "떡볶이를 먹어 안 봤어요.", right: "떡볶이를 안 먹어 봤어요.", why: "안 staat vóór het hele werkwoord: 안 먹어 봤어요." }
  ],
  vocab: [
    ["-아/어 보다", "-a/eo boda", "eens proberen; weleens gedaan hebben"], ["한번", "hanbeon", "eens, een keer"], ["맵다", "maepda", "pittig, scherp"],
    ["신다", "sinda", "(schoenen, sokken) aantrekken"], ["생각보다", "saenggakboda", "meer dan je dacht, dan verwacht"], ["입장료", "ipjangnyo", "toegangsprijs"],
    ["무료", "muryo", "gratis"], ["잃어버리다", "ireobeorida", "kwijtraken, verliezen"], ["당황하다", "danghwanghada", "van slag raken, in paniek raken"], ["역무원", "yeongmuwon", "stationsmedewerker"]
  ],
  dialogue: [
    ["A", "한국 음식을 먹어 봤어요?", "Hanguk eumsigeul meogeo bwasseoyo?", "Heb je weleens Koreaans eten gegeten?"],
    ["B", "네, 불고기를 먹어 봤어요. 정말 맛있었어요.", "Ne, bulgogireul meogeo bwasseoyo. Jeongmal masisseosseoyo.", "Ja, ik heb bulgogi gegeten. Het was echt lekker."],
    ["A", "떡볶이도 먹어 봤어요?", "Tteokbokkido meogeo bwasseoyo?", "Heb je ook tteokbokki gegeten?"],
    ["B", "아니요, 아직 안 먹어 봤어요.", "Aniyo, ajik an meogeo bwasseoyo.", "Nee, dat heb ik nog nooit gegeten."],
    ["A", "그럼 오늘 같이 먹어 봐요. 학교 앞에 맛있는 집이 있어요.", "Geureom oneul gachi meogeo bwayo. Hakgyo ape masinneun jibi isseoyo.", "Laten we het dan vandaag samen proberen. Voor de school zit een lekker restaurant."]
  ],
  reading: {
    title: "서울에서 처음 해 본 것",
    lines: [
      { cn: "지난 가을에 처음으로 서울에 가 봤어요.", py: "Jinan gaeure cheoeumeuro seoure ga bwasseoyo.", nl: "Afgelopen herfst ben ik voor het eerst in Seoul geweest." },
      { cn: "시장에서 떡볶이를 먹어 봤는데 생각보다 많이 매웠어요.", py: "Sijangeseo tteokbokkireul meogeo bwanneunde saenggakboda mani maewosseoyo.", nl: "Op de markt probeerde ik tteokbokki. Het was veel pittiger dan ik dacht." },
      { cn: "경복궁에서는 한복을 입어 봤어요.", py: "Gyeongbokgungeseoneun hanbogeul ibeo bwasseoyo.", nl: "Bij het Gyeongbokgung-paleis heb ik een hanbok aangetrokken." },
      { cn: "한복을 입으면 입장료가 무료예요.", py: "Hanbogeul ibeumyeon ipjangnyoga muryoyeyo.", nl: "Met een hanbok aan is de toegang gratis." },
      { cn: "그런데 마지막 날에 지하철에서 지갑을 잃어버렸어요.", py: "Geureonde majimak nare jihacheoreseo jigabeul ireobeoryeosseoyo.", nl: "Maar op de laatste dag raakte ik in de metro mijn portemonnee kwijt." },
      { cn: "외국에서 물건을 잃어버린 적이 없었기 때문에 정말 당황했어요.", py: "Oegugeseo mulgeoneul ireobeorin jeogi eopseotgi ttaemune jeongmal danghwanghaesseoyo.", nl: "Ik was in het buitenland nog nooit iets kwijtgeraakt, dus ik schrok echt." },
      { cn: "다행히 친절한 역무원이 지갑을 찾아 주었어요.", py: "Dahaenghi chinjeolhan yeongmuwoni jigabeul chaja jueosseoyo.", nl: "Gelukkig vond een vriendelijke stationsmedewerker mijn portemonnee." },
      { cn: "여러분도 서울에 꼭 한번 가 보세요!", py: "Yeoreobundo seoure kkok hanbeon ga boseyo!", nl: "Ga zelf ook zeker eens naar Seoul!" }
    ],
    questions: [
      { type: "mc", q: "Wat deed de schrijver bij het paleis?",
        options: ["Een hanbok aantrekken.", "Tteokbokki eten.", "De portemonnee kwijtraken.", "Toegang betalen."], answer: 0,
        why: ["Goed: 경복궁에서는 한복을 입어 봤어요.", "Tteokbokki at de schrijver op de markt.", "Dat gebeurde in de metro.", "Met een hanbok is de toegang juist gratis: 무료예요."] },
      { type: "mc", q: "Waarom schrok de schrijver zo?",
        options: ["Hij was in het buitenland nog nooit iets kwijtgeraakt.", "De tteokbokki was te pittig.", "De metro was erg vol.", "De stationsmedewerker was onvriendelijk."], answer: 0,
        why: ["Goed: 잃어버린 적이 없었기 때문에 정말 당황했어요.", "Het eten was pittig, maar daar schrok hij niet van.", "Over een volle metro staat niets in de tekst.", "De medewerker was juist vriendelijk: 친절한 역무원."] },
      { type: "mc", q: "Waarom staat er 잃어버린 적이 없었기 en niet 잃어버려 보지 않았기?",
        options: ["Iets kwijtraken doe je niet bewust; dan past -(으)ㄴ 적이 있다.", "-아/어 보다 kan nooit in de verleden tijd.", "-(으)ㄴ 적이 있다 is alleen voor plannen.", "잃어버리다 kan niet met een 아/어-vorm."], answer: 0,
        why: ["Goed: -아/어 보다 is bewust proberen. Iets wat je overkomt, zeg je met -(으)ㄴ 적이 있다.", "-아/어 보다 kan wel in de verleden tijd: 가 봤어요.", "-(으)ㄴ 적이 있다 gaat over ervaring, niet over plannen.", "잃어버리다 heeft gewoon een 어-vorm: 잃어버려."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Pas deze schoenen eens.\"",
      options: ["이 신발을 신어 보세요.", "이 신발을 신아 보세요.", "이 신발을 신고 보세요.", "이 신발을 신어 봤어요."], answer: 0,
      why: ["Goed: 신 heeft ㅣ, dus -어 보세요.", "Alleen na ㅏ of ㅗ komt -아. 신다 wordt 신어.", "Met -고 staat er: aantrekken en dan kijken.", "봤어요 vertelt een ervaring, geen raad."] },
    { type: "mc", q: "\"Ik ben weleens op Jeju geweest.\"",
      options: ["제주도에 가 봤어요.", "제주도에 가아 봤어요.", "제주도에 가 보세요.", "제주도에 가어 봤어요."], answer: 0,
      why: ["Goed: 가 + 아 wordt samen 가.", "가 + 아 smelt samen tot 가. Je schrijft geen 가아.", "보세요 is een raad, geen ervaring.", "가 heeft ㅏ, dus -아, en dat smelt samen tot 가."] },
    { type: "mc", q: "요가를 ___? (Heb je weleens yoga gedaan?)",
      options: ["해 봤어요", "하 봤어요", "해 보세요", "했어 봤어요"], answer: 0,
      why: ["Goed: 하다 wordt 해, dan 봤어요.", "하다 wordt altijd 해 vóór 보다.", "보세요 is een raad, geen vraag naar ervaring.", "De verleden tijd zit alleen in 봤, niet in 했."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik wil eens een hanbok aantrekken.\"",
      tokens: [["한복을", "hanbogeul"], ["입어", "ibeo"], ["보고", "bogo"], ["싶어요.", "sipeoyo."]] },
    { type: "mc", q: "\"Ik ben weleens mijn paspoort kwijtgeraakt.\"",
      options: ["여권을 잃어버린 적이 있어요.", "여권을 잃어버려 봤어요.", "여권을 잃어버리는 적이 있어요.", "여권을 잃어버린 적이 해요."], answer: 0,
      why: ["Goed: iets wat je overkwam: -(으)ㄴ 적이 있다.", "-아/어 보다 is bewust proberen. Niemand probeert een paspoort kwijt te raken.", "Ervaring is verleden: -(으)ㄴ, niet -는.", "Na 적이 komt 있다 of 없다, niet 하다."] },
    { type: "mc", q: "\"Ik heb nog nooit sushi gegeten.\"",
      options: ["아직 초밥을 안 먹어 봤어요.", "아직 초밥을 먹어 안 봤어요.", "아직 초밥을 안 먹어 보세요.", "아직 초밥을 안 먹고 봤어요."], answer: 0,
      why: ["Goed: 안 vóór het hele werkwoord, dan 봤어요.", "안 staat vóór 먹어, niet tussen 먹어 en 봤어요.", "보세요 is een raad, geen ervaring.", "Vóór 보다 komt de 어-vorm, niet -고."] },
    { type: "mc", q: "In een winkel zegt de verkoper: 이 신발 한번 신어 보세요. Wat bedoelt hij?",
      options: ["Hij raadt je aan de schoenen te passen.", "Hij vraagt of je de schoenen al gepast hebt.", "Hij zegt dat hij de schoenen gepast heeft.", "Hij zegt dat je de schoenen niet mag passen."], answer: 0,
      why: ["Goed: -아/어 보세요 = probeer eens.", "Een vraag naar ervaring is 신어 봤어요?", "Dat zou 신어 봤어요 zijn, over zichzelf.", "보세요 is een uitnodiging, geen verbod."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb een keer bibimbap gemaakt.\"",
      tokens: [["저는", "jeoneun"], ["비빔밥을", "bibimbabeul"], ["만들어", "mandeureo"], ["봤어요.", "bwasseoyo."]] },
    { type: "fill", q: "이 노래 정말 좋아요. 한번 ___ 보세요. (Dit liedje is echt goed. Luister eens.)", answers: ["들어"],
      hint: "듣다 is een ㄷ-stam.", why: "Vóór 어 wordt de ㄷ van 듣다 een ㄹ: 들 + 어 = 들어." },
    { type: "open", q: "Vertaal: \"Probeer dit eens te eten.\"", model: ["이거 먹어 보세요.", "이것 좀 먹어 보세요.", "이 음식을 먹어 보세요."],
      tip: "Check: 먹 + 어, dan 보세요. Schrijf een spatie tussen 먹어 en 보세요." },
    { type: "open", q: "Vertaal: \"Ik ben nog nooit in Busan geweest.\"", model: ["아직 부산에 안 가 봤어요.", "부산에 가 본 적이 없어요.", "저는 부산에 가 본 적이 없어요."],
      tip: "Check: 안 vóór 가 봤어요, of -(으)ㄴ 적이 없어요. Schrijf 가 (niet 가아)." }
  ],
  review: [
    { type: "mc", q: "\"Ik heb dit boek weleens gelezen.\"",
      options: ["이 책을 읽어 봤어요.", "이 책을 읽아 봤어요.", "이 책을 읽고 봤어요.", "이 책을 읽어 보세요."], answer: 0,
      why: ["Goed: 읽 + 어 + 봤어요.", "읽 heeft ㅣ, dus -어.", "Met -고 staat er: lezen en dan kijken.", "보세요 is een raad, geen ervaring."] },
    { type: "mc", q: "우리 식당에 한번 ___. (Kom eens naar ons restaurant.)",
      options: ["와 보세요", "오아 보세요", "와 봤어요", "오어 보세요"], answer: 0,
      why: ["Goed: 오 + 아 smelt samen tot 와.", "오 + 아 schrijf je samen als 와.", "봤어요 vertelt een ervaring. Hier geef je een uitnodiging.", "오 heeft ㅗ, dus -아, en dat wordt 와."] },
    { type: "mc", q: "이 바지 ___ 봐도 돼요? (Mag ik deze broek passen?)",
      options: ["입어", "입아", "입고", "입은"], answer: 0,
      why: ["Goed: 입 heeft ㅣ, dus 입어 + 보다.", "Alleen na ㅏ of ㅗ komt -아.", "Met -고 staat er: aantrekken en dan kijken.", "Vóór 보다 komt de 어-vorm, geen bijzin-vorm."] }
  ]
})
