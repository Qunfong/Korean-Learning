// TOPIK 2 lessons (grammar first, vocab follows later).
// Question types: mc (answer = index), order (tokens in the right order), open (self-check with model answers).
// "review" questions never appear in the lesson itself; they come back on the review page.
window.HSK = window.HSK || {};
window.HSK.topik2 = {
  level: "TOPIK 2", dir: "topik2",
  lessons: [
    {
      id: "01", slug: "geoyeyo", title: "-(으)ㄹ 거예요", sub: "Zeggen wat je gaat doen of wat je verwacht",
      canDo: "Je kunt nu zeggen wat je gaat doen en wat er waarschijnlijk gebeurt, met -(으)ㄹ 거예요.",
      guess: {
        q: "\"Morgen ga ik naar Busan.\" Welke zin klopt, denk je?",
        options: ["내일 부산에 갈 거예요.", "내일 부산에 가을 거예요.", "내일 부산에 갈 거에요.", "내일 부산에 가 거예요."], answer: 0,
        why: ["Goed: 가다 heeft geen 받침, dus 가 + ㄹ = 갈.", "-을 komt alleen na een 받침. 가 eindigt op een klinker.", "De juiste spelling is 거예요, niet 거에요.", "De ㄹ ontbreekt. Je hebt 갈 nodig, niet 가."]
      },
      problem: "Je wilt zeggen wat je morgen gaat doen. Of je wilt een verwachting uitspreken, zoals \"het gaat vast regenen\". Het Koreaans gebruikt daarvoor één vorm: -(으)ㄹ 거예요. Je plakt hem achter de stam van het werkwoord.",
      pattern: [
        { l: "wanneer", v: "내일", c: 1 }, { l: "wat", v: "친구를", c: 3 },
        { l: "stam", v: "만나", c: 4 }, { l: "-(으)ㄹ 거예요", v: "ㄹ 거예요", c: 2, key: true }
      ],
      patternCap: "Stam + -ㄹ 거예요 (na klinker) of -을 거예요 (na 받침): 만날 거예요, 먹을 거예요",
      rules: [
        "Stam op een klinker: -ㄹ 거예요. 가다 wordt 갈 거예요, 보다 wordt 볼 거예요.",
        "Stam op een 받침: -을 거예요. 먹다 wordt 먹을 거예요, 있다 wordt 있을 거예요.",
        "Stam op ㄹ: je voegt niets toe. 살다 wordt 살 거예요, 만들다 wordt 만들 거예요.",
        "Over jezelf is het een plan. Over iets anders is het vaak een vermoeden: 비가 올 거예요."
      ],
      pitfall: "Bij een ㄹ-stam komt er geen -을 bij. Zeg niet 만들을 거예요, maar 만들 거예요.",
      examples: [
        { cn: "주말에 친구를 만날 거예요.", py: "Jumare chingureul mannal geoyeyo.", nl: "In het weekend ga ik een vriend ontmoeten." },
        { cn: "내일은 비가 올 거예요.", py: "Naeireun biga ol geoyeyo.", nl: "Morgen gaat het waarschijnlijk regenen." },
        { cn: "저녁에 김치찌개를 만들 거예요.", py: "Jeonyeoge gimchijjigaereul mandeul geoyeyo.", nl: "Vanavond ga ik kimchistoofpot maken." },
        { cn: "이 영화는 재미있을 거예요.", py: "I yeonghwaneun jaemiisseul geoyeyo.", nl: "Deze film is vast leuk." }
      ],
      vocab: [],
      dialogue: [
        ["A", "이번 주말에 뭐 할 거예요?", "Ibeon jumare mwo hal geoyeyo?", "Wat ga je dit weekend doen?"],
        ["B", "토요일에 친구하고 영화를 볼 거예요.", "Toyoire chinguhago yeonghwareul bol geoyeyo.", "Zaterdag ga ik met een vriend naar een film."],
        ["A", "일요일에는요?", "Iryoireneunyo?", "En zondag?"],
        ["B", "집에서 쉴 거예요. 아마 비가 올 거예요.", "Jibeseo swil geoyeyo. Ama biga ol geoyeyo.", "Dan rust ik thuis uit. Het gaat waarschijnlijk regenen."],
        ["A", "그럼 저도 집에 있을 거예요.", "Geureom jeodo jibe isseul geoyeyo.", "Dan blijf ik ook thuis."]
      ],
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
        { type: "open", q: "Vertaal: \"Ik ga morgen thuis uitrusten.\"", model: ["내일 집에서 쉴 거예요.", "저는 내일 집에서 쉴 거예요."],
          tip: "Check: 쉬다 heeft geen 받침, dus 쉬 + ㄹ = 쉴. Staat er 집에서 (waar je iets doet)?" }
      ],
      review: [
        { type: "mc", q: "\"Ik ga een taart maken.\"",
          options: ["케이크를 만들 거예요.", "케이크를 만들을 거예요.", "케이크를 만드을 거예요.", "케이크를 만들 거에요."], answer: 0,
          why: ["Goed: 만들다 is een ㄹ-stam, dus 만들 거예요.", "Bij een ㄹ-stam komt er geen -을 bij.", "De ㄹ van de stam valt niet weg.", "De juiste spelling is 거예요."] },
        { type: "mc", q: "\"Ik heb het morgen waarschijnlijk druk.\"",
          options: ["내일은 바쁠 거예요.", "내일은 바쁘을 거예요.", "내일은 바빠 거예요.", "내일은 바쁠 거에요."], answer: 0,
          why: ["Goed: 바쁘다 eindigt op een klinker, dus 바쁘 + ㄹ = 바쁠.", "-을 komt alleen na een 받침.", "Voor 거예요 staat de vorm met ㄹ, niet de 아/어-vorm.", "De juiste spelling is 거예요."] }
      ]
    },
    {
      id: "02", slug: "go", title: "-고", sub: "Twee dingen verbinden: en, en dan",
      canDo: "Je kunt nu twee handelingen of eigenschappen verbinden met -고, als opsomming of na elkaar.",
      guess: {
        q: "\"Ik eet en daarna slaap ik.\" Welke zin klopt, denk je?",
        options: ["밥을 먹고 자요.", "밥을 먹어고 자요.", "밥을 먹으고 자요.", "밥을 먹다고 자요."], answer: 0,
        why: ["Goed: je plakt -고 direct op de stam 먹.", "-고 komt direct op de stam, zonder 어.", "-고 krijgt nooit een extra 으, ook niet na een 받침.", "-다고 is een andere vorm. Je haalt -다 eerst weg."]
      },
      problem: "Je wilt twee zinnen aan elkaar koppelen: \"Ik eet en ik slaap.\" Of: \"Het is goedkoop en lekker.\" In het Koreaans zet je geen los woord \"en\" tussen werkwoorden. Je plakt -고 aan de stam van het eerste werkwoord.",
      pattern: [
        { l: "handeling 1", v: "밥을 먹", c: 4 }, { l: "-고", v: "고", c: 2, key: true }, { l: "handeling 2", v: "자요", c: 5 }
      ],
      patternCap: "Stam + 고 + tweede deel: 먹고, 가고, 싸고, 학생이고",
      rules: [
        "-고 komt direct op de stam. Met of zonder 받침 maakt niet uit: 먹고, 보고, 살고.",
        "De tijd staat alleen aan het eind: 어제 밥을 먹고 잤어요.",
        "-고 werkt ook bij bijvoeglijke werkwoorden: 싸고 맛있어요. En bij 이다: 학생이고.",
        "Bij gaan of komen gebruik je voor \"en dan daar\" liever -아서/어서. Dat leer je in les 3."
      ],
      pitfall: "-고 verbindt werkwoorden, geen zelfstandige naamwoorden. \"Brood en melk\" is 빵하고 우유, niet 빵고 우유.",
      examples: [
        { cn: "저는 아침에 샤워하고 커피를 마셔요.", py: "Jeoneun achime syawohago keopireul masyeoyo.", nl: "'s Ochtends douche ik en drink ik koffie." },
        { cn: "이 식당은 싸고 맛있어요.", py: "I sikdangeun ssago masisseoyo.", nl: "Dit restaurant is goedkoop en lekker." },
        { cn: "어제 친구를 만나고 집에 왔어요.", py: "Eoje chingureul mannago jibe wasseoyo.", nl: "Gisteren zag ik een vriend en daarna kwam ik thuis." },
        { cn: "형은 회사원이고 동생은 학생이에요.", py: "Hyeongeun hoesawonigo dongsaengeun haksaengieyo.", nl: "Mijn oudere broer werkt op kantoor en mijn jongere broer is student." }
      ],
      vocab: [],
      dialogue: [
        ["A", "어제 뭐 했어요?", "Eoje mwo haesseoyo?", "Wat heb je gisteren gedaan?"],
        ["B", "도서관에서 공부하고 친구를 만났어요.", "Doseogwaneseo gongbuhago chingureul mannasseoyo.", "Ik heb in de bibliotheek gestudeerd en daarna een vriend gezien."],
        ["A", "친구하고 뭐 했어요?", "Chinguhago mwo haesseoyo?", "Wat hebben jullie gedaan?"],
        ["B", "밥을 먹고 영화를 봤어요.", "Babeul meokgo yeonghwareul bwasseoyo.", "We hebben gegeten en een film gekeken."],
        ["A", "영화는 어땠어요?", "Yeonghwaneun eottaesseoyo?", "Hoe was de film?"],
        ["B", "길고 재미없었어요.", "Gilgo jaemieopseosseoyo.", "Lang en saai."]
      ],
      questions: [
        { type: "mc", q: "\"Gisteren heb ik gegeten en ben ik gaan slapen.\" Welke zin klopt?",
          options: ["어제 밥을 먹고 잤어요.", "어제 밥을 먹고 자요.", "어제 밥을 먹어고 잤어요.", "어제 밥을 먹으고 잤어요."], answer: 0,
          why: ["Goed: -고 op de stam, de verleden tijd aan het eind.", "Het gaat over gisteren. Het laatste werkwoord moet in de verleden tijd.", "-고 komt direct op de stam, zonder 어.", "-고 krijgt geen extra 으."] },
        { type: "mc", q: "\"Ik koop brood en melk.\" Welke zin klopt?",
          options: ["빵하고 우유를 사요.", "빵고 우유를 사요.", "빵이고 우유를 사요.", "빵하고 우유을 사요."], answer: 0,
          why: ["Goed: tussen twee zelfstandige naamwoorden staat 하고.", "-고 hoort bij werkwoorden, niet bij 빵.", "빵이고 betekent \"het is brood en\". Dat past hier niet.", "우유 eindigt op een klinker, dus 를, niet 을."] },
        { type: "mc", q: "이 방은 넓___ 깨끗해요. (Deze kamer is ruim en schoon.)",
          options: ["고", "어고", "으고", "하고"], answer: 0,
          why: ["Goed: 넓 + 고 = 넓고.", "-고 komt direct op de stam, zonder 어.", "-고 krijgt geen extra 으, ook niet na een 받침.", "넓다 is geen 하다-werkwoord. 하고 past hier niet."] },
        { type: "order", q: "Zet in de goede volgorde: \"Die tas is groot en zwaar.\"",
          tokens: [["그", "geu"], ["가방은", "gabangeun"], ["크고", "keugo"], ["무거워요", "mugeowoyo"]] },
        { type: "open", q: "Vertaal: \"Ik maak mijn huiswerk en daarna kijk ik tv.\"", model: ["숙제를 하고 텔레비전을 봐요.", "저는 숙제를 하고 텔레비전을 봐요."],
          tip: "Check: staat -고 direct op de stam (하고)? En staat de tijd alleen aan het eind (봐요)?" }
      ],
      review: [
        { type: "mc", q: "\"Mijn kamer is klein en donker.\"",
          options: ["제 방은 작고 어두워요.", "제 방은 작아고 어두워요.", "제 방은 작으고 어두워요.", "제 방은 작하고 어두워요."], answer: 0,
          why: ["Goed: 작 + 고 = 작고.", "-고 komt direct op de stam, zonder 아.", "-고 krijgt geen extra 으.", "작다 is geen 하다-werkwoord."] },
        { type: "mc", q: "\"Ik lees een boek en luister naar muziek.\"",
          options: ["책을 읽고 음악을 들어요.", "책을 읽어고 음악을 들어요.", "책을 읽으고 음악을 들어요.", "책을 읽고 음악을 듣어요."], answer: 0,
          why: ["Goed: 읽 + 고, en 듣다 wordt 들어요.", "-고 komt direct op de stam, zonder 어.", "-고 krijgt geen extra 으.", "듣다 is onregelmatig: vóór een klinker wordt ㄷ een ㄹ. Dus 들어요."] }
      ]
    },
    {
      id: "03", slug: "aseo", title: "-아서/어서", sub: "Omdat, en: en dan daar",
      canDo: "Je kunt nu een reden geven en twee handelingen die bij elkaar horen verbinden, met -아서/어서.",
      guess: {
        q: "\"Omdat ik moe was, ben ik vroeg gaan slapen.\" Welke zin klopt, denk je?",
        options: ["피곤해서 일찍 잤어요.", "피곤했어서 일찍 잤어요.", "피곤하아서 일찍 잤어요.", "피곤해어서 일찍 잤어요."], answer: 0,
        why: ["Goed: 하다 wordt 해서, en de verleden tijd staat alleen aan het eind.", "Vóór -아서/어서 komt geen verleden tijd.", "하다 wordt altijd 해서, niet 하아서.", "해 bevat de klinker al. Je voegt alleen 서 toe."]
      },
      problem: "Je wilt een reden geven: \"Ik ben te laat, omdat de bus laat kwam.\" Of je wilt zeggen dat je ergens heen gaat en daar iets doet. Voor allebei gebruik je -아서/어서 op de stam.",
      pattern: [
        { l: "reden", v: "배가 아파", c: 3 }, { l: "-아서/어서", v: "서", c: 2, key: true }, { l: "gevolg", v: "병원에 갔어요", c: 5 }
      ],
      patternCap: "Stam + 아서/어서 + gevolg: 가서, 와서, 먹어서, 해서",
      rules: [
        "Laatste klinker ㅏ of ㅗ: -아서. 좋다 wordt 좋아서, 가다 wordt 가서, 오다 wordt 와서.",
        "Andere klinkers: -어서. 먹다 wordt 먹어서, 마시다 wordt 마셔서.",
        "하다 wordt 해서. 공부하다 wordt 공부해서.",
        "Bij \"en dan\" hoort de tweede handeling bij de eerste: 시장에 가서 과일을 사요. Hier mag een voorstel wel."
      ],
      pitfall: "Geen verleden tijd vóór -아서/어서: zeg 늦어서, niet 늦었어서. Een reden met -아서/어서 past ook niet bij een opdracht of voorstel. Zeg niet 비가 와서 우산을 가져가세요. Gebruik dan -(으)니까.",
      examples: [
        { cn: "배가 아파서 병원에 갔어요.", py: "Baega apaseo byeongwone gasseoyo.", nl: "Ik had buikpijn, dus ik ben naar de dokter gegaan." },
        { cn: "버스가 늦게 와서 지각했어요.", py: "Beoseuga neutge waseo jigakaesseoyo.", nl: "De bus kwam laat, dus ik was te laat." },
        { cn: "시장에 가서 과일을 샀어요.", py: "Sijange gaseo gwaireul sasseoyo.", nl: "Ik ging naar de markt en kocht daar fruit." },
        { cn: "만나서 반가워요.", py: "Mannaseo bangawoyo.", nl: "Leuk je te ontmoeten." }
      ],
      vocab: [],
      dialogue: [
        ["A", "어제 왜 수업에 안 왔어요?", "Eoje wae sueobe an wasseoyo?", "Waarom kwam je gisteren niet naar de les?"],
        ["B", "감기에 걸려서 못 갔어요.", "Gamgie geollyeoseo mot gasseoyo.", "Ik was verkouden, dus ik kon niet komen."],
        ["A", "지금은 괜찮아요?", "Jigeumeun gwaenchanayo?", "Gaat het nu?"],
        ["B", "네, 약을 먹어서 괜찮아요.", "Ne, yageul meogeoseo gwaenchanayo.", "Ja, ik heb medicijnen genomen, dus het gaat."],
        ["A", "다행이에요. 내일 같이 도서관에 가서 공부해요.", "Dahaengieyo. Naeil gachi doseogwane gaseo gongbuhaeyo.", "Gelukkig. Laten we morgen samen in de bibliotheek studeren."],
        ["B", "좋아요!", "Joayo!", "Goed!"]
      ],
      questions: [
        { type: "mc", q: "\"Omdat het regende, ben ik thuisgebleven.\" Welke zin klopt?",
          options: ["비가 와서 집에 있었어요.", "비가 왔어서 집에 있었어요.", "비가 오아서 집에 있었어요.", "비가 오서 집에 있었어요."], answer: 0,
          why: ["Goed: 오 + 아서 wordt samen 와서.", "Vóór -아서/어서 komt geen verleden tijd.", "오 + 아서 trek je samen tot 와서.", "Na ㅗ komt -아서. 오서 bestaat niet."] },
        { type: "mc", q: "Welke zin is FOUT?",
          options: ["비가 와서 우산을 가져가세요.", "비가 와서 우산을 샀어요.", "늦어서 죄송해요.", "학교에 가서 친구를 만났어요."], answer: 0,
          why: ["Goed: dit is fout. Een reden met -아서 past niet bij een opdracht. Zeg: 비가 오니까 우산을 가져가세요.", "Dit klopt: een reden met een gewone mededeling.", "Dit klopt: 늦다 wordt 늦어서.", "Dit klopt: je gaat naar school en ziet daar een vriend."] },
        { type: "mc", q: "음식이 ___ 많이 먹어요. (Het eten is lekker, dus ik eet veel.)",
          options: ["맛있어서", "맛있아서", "맛있었어서", "맛있서"], answer: 0,
          why: ["Goed: de laatste klinker is ㅣ, dus -어서.", "Na ㅣ komt -어서, niet -아서.", "Vóór -어서 komt geen verleden tijd.", "Je mist de klinker 어."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik zag een vriend en dronk koffie met hem.\"",
          tokens: [["친구를", "chingureul"], ["만나서", "mannaseo"], ["커피를", "keopireul"], ["마셨어요", "masyeosseoyo"]] },
        { type: "open", q: "Vertaal: \"Sorry dat ik te laat ben.\"", model: ["늦어서 죄송해요.", "늦어서 미안해요."],
          tip: "Check: 늦다 krijgt -어서, zonder verleden tijd. Dus niet 늦었어서." }
      ],
      review: [
        { type: "mc", q: "\"Omdat het mooi weer was, ben ik gaan wandelen.\"",
          options: ["날씨가 좋아서 산책했어요.", "날씨가 좋어서 산책했어요.", "날씨가 좋았어서 산책했어요.", "날씨가 좋서 산책했어요."], answer: 0,
          why: ["Goed: de laatste klinker is ㅗ, dus -아서.", "Na ㅗ komt -아서, niet -어서.", "Vóór -아서 komt geen verleden tijd.", "Je mist de klinker 아."] },
        { type: "mc", q: "\"Ik heb hard gestudeerd, dus ik ben geslaagd.\"",
          options: ["열심히 공부해서 시험에 합격했어요.", "열심히 공부하서 시험에 합격했어요.", "열심히 공부했어서 시험에 합격했어요.", "열심히 공부하어서 시험에 합격했어요."], answer: 0,
          why: ["Goed: 하다 wordt 해서.", "하다 wordt 해서, niet 하서.", "Vóór -아서/어서 komt geen verleden tijd.", "하다 wordt altijd 해서, niet 하어서."] }
      ]
    },
    {
      id: "04", slug: "su", title: "-(으)ㄹ 수 있어요/없어요", sub: "Zeggen wat je kunt en niet kunt",
      canDo: "Je kunt nu zeggen wat je wel en niet kunt, en vragen of iets kan, met -(으)ㄹ 수 있어요/없어요.",
      guess: {
        q: "\"Ik kan Koreaans lezen.\" Welke zin klopt, denk je?",
        options: ["한국어를 읽을 수 있어요.", "한국어를 읽 수 있어요.", "한국어를 읽는 수 있어요.", "한국어를 읽을 수 없어요."], answer: 0,
        why: ["Goed: 읽 heeft een 받침, dus -을 수 있어요.", "Na een 받침 heb je -을 nodig.", "Voor 수 staat de vorm met -(으)ㄹ, niet -는.", "없어요 betekent juist \"niet kunnen\"."]
      },
      problem: "Je wilt zeggen dat je iets kunt: zwemmen, Koreaans spreken, morgen komen. Of juist dat het niet kan. Het Koreaans heeft geen apart woord voor \"kunnen\". Je zegt: \"er is een manier om te ...\" (수 있어요) of \"er is geen manier\" (수 없어요).",
      pattern: [
        { l: "wat", v: "김밥을", c: 3 }, { l: "stam", v: "만들", c: 4 },
        { l: "-(으)ㄹ 수", v: "수", c: 2, key: true }, { l: "wel / niet", v: "있어요", c: 5 }
      ],
      patternCap: "Stam + -(으)ㄹ 수 있어요 (kan) / 없어요 (kan niet): 갈 수 있어요, 먹을 수 없어요",
      rules: [
        "Stam op een klinker: -ㄹ 수 있어요. 가다 wordt 갈 수 있어요.",
        "Stam op een 받침: -을 수 있어요. 먹다 wordt 먹을 수 있어요.",
        "Stam op ㄹ: je voegt niets toe. 만들다 wordt 만들 수 있어요.",
        "Niet kunnen: vervang 있어요 door 없어요. 갈 수 없어요."
      ],
      pitfall: "수 is een los woord. Schrijf 갈 수 있어요 met twee spaties, niet 갈수있어요. Zeg ook niet 갈 수 안 있어요, maar 갈 수 없어요.",
      examples: [
        { cn: "저는 한국어를 조금 할 수 있어요.", py: "Jeoneun hangugeoreul jogeum hal su isseoyo.", nl: "Ik spreek een beetje Koreaans." },
        { cn: "오늘은 바빠서 만날 수 없어요.", py: "Oneureun bappaseo mannal su eopseoyo.", nl: "Vandaag heb ik het druk, dus ik kan niet afspreken." },
        { cn: "여기에서 사진을 찍을 수 있어요?", py: "Yeogieseo sajineul jjigeul su isseoyo?", nl: "Kan ik hier foto's maken?" },
        { cn: "저는 김밥을 만들 수 있어요.", py: "Jeoneun gimbabeul mandeul su isseoyo.", nl: "Ik kan gimbap maken." }
      ],
      vocab: [],
      dialogue: [
        ["A", "수영할 수 있어요?", "Suyeonghal su isseoyo?", "Kun je zwemmen?"],
        ["B", "아니요, 수영할 수 없어요. 자전거는 탈 수 있어요.", "Aniyo, suyeonghal su eopseoyo. Jajeongeoneun tal su isseoyo.", "Nee, ik kan niet zwemmen. Fietsen kan ik wel."],
        ["A", "그럼 토요일에 같이 자전거를 타요.", "Geureom toyoire gachi jajeongeoreul tayo.", "Laten we dan zaterdag samen fietsen."],
        ["B", "토요일에는 일해서 갈 수 없어요. 일요일은 어때요?", "Toyoireneun ilhaeseo gal su eopseoyo. Iryoireun eottaeyo?", "Zaterdag werk ik, dus dan kan ik niet. Hoe is zondag?"],
        ["A", "좋아요. 일요일에 만나요.", "Joayo. Iryoire mannayo.", "Goed. Tot zondag."]
      ],
      questions: [
        { type: "mc", q: "\"Ik kan kimchi eten.\" Welke zin klopt?",
          options: ["김치를 먹을 수 있어요.", "김치를 먹 수 있어요.", "김치를 먹을수 있어요.", "김치를 머글 수 있어요."], answer: 0,
          why: ["Goed: 먹 + 을 수 있어요, met een spatie voor en na 수.", "Na een 받침 heb je -을 nodig.", "수 is een los woord en krijgt een spatie.", "Je schrijft de stam zoals hij is: 먹을, niet zoals je het hoort."] },
        { type: "mc", q: "\"Vandaag kan ik niet gaan.\" Welke zin klopt?",
          options: ["오늘은 갈 수 없어요.", "오늘은 갈 수 안 있어요.", "오늘은 가을 수 없어요.", "오늘은 갈 수 아니에요."], answer: 0,
          why: ["Goed: niet kunnen is 수 없어요.", "Voor \"niet kunnen\" vervang je 있어요 door 없어요. 안 past hier niet.", "-을 komt alleen na een 받침. 가 eindigt op een klinker.", "아니에요 ontkent een zelfstandig naamwoord. Hier heb je 없어요 nodig."] },
        { type: "mc", q: "빵을 ___ 있어요? (Kun je brood maken?)",
          options: ["만들 수", "만들을 수", "만드 수", "만들수"], answer: 0,
          why: ["Goed: 만들다 is een ㄹ-stam. Je voegt niets toe.", "Bij een ㄹ-stam komt er geen -을 bij.", "De ㄹ van de stam blijft staan.", "수 is een los woord en krijgt een spatie."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik kan gimbap maken.\"",
          tokens: [["김밥을", "gimbabeul"], ["만들", "mandeul"], ["수", "su"], ["있어요", "isseoyo"]] },
        { type: "open", q: "Vertaal: \"Kun je autorijden?\"", model: ["운전할 수 있어요?", "운전을 할 수 있어요?"],
          tip: "Check: 운전하다 eindigt op een klinker, dus 할 수. Staan er spaties rond 수?" }
      ],
      review: [
        { type: "mc", q: "\"Ik kan hier niet slapen.\"",
          options: ["여기에서 잘 수 없어요.", "여기에서 자을 수 없어요.", "여기에서 잘수 없어요.", "여기에서 잘 수 안 있어요."], answer: 0,
          why: ["Goed: 자 + ㄹ = 잘, en niet kunnen is 수 없어요.", "-을 komt alleen na een 받침.", "수 is een los woord en krijgt een spatie.", "Niet kunnen is 수 없어요, niet 수 안 있어요."] },
        { type: "mc", q: "\"Kan ik hier zitten?\"",
          options: ["여기 앉을 수 있어요?", "여기 앉 수 있어요?", "여기 앉는 수 있어요?", "여기 안즐 수 있어요?"], answer: 0,
          why: ["Goed: 앉 heeft een 받침, dus -을 수.", "Na een 받침 heb je -을 nodig.", "Voor 수 staat de vorm met -(으)ㄹ, niet -는.", "Je schrijft de stam zoals hij is: 앉을, niet zoals je het hoort."] }
      ]
    },
    {
      id: "05", slug: "aya", title: "-아야/어야 해요", sub: "Zeggen wat je moet doen",
      canDo: "Je kunt nu zeggen wat je moet doen, nu en in het verleden, met -아야/어야 해요.",
      guess: {
        q: "\"Ik moet nu naar huis.\" Welke zin klopt, denk je?",
        options: ["지금 집에 가야 해요.", "지금 집에 가아야 해요.", "지금 집에 가어야 해요.", "지금 집에 가야 있어요."], answer: 0,
        why: ["Goed: 가 + 아야 wordt samen 가야.", "가 + 아 smelt samen tot 가. Je schrijft geen dubbele 아.", "Na ㅏ komt -아야, niet -어야.", "Na -아야/어야 komt 해요, niet 있어요."]
      },
      problem: "Je kunt niet mee, want je moet nog werken. Of je moet medicijnen innemen. Het Koreaans heeft geen los woord voor \"moeten\". Je zegt: \"alleen als ik ... doe, is het goed\". Dat is -아야/어야 해요.",
      pattern: [
        { l: "wat", v: "약을", c: 3 }, { l: "stam", v: "먹", c: 4 },
        { l: "-아야/어야", v: "어야", c: 2, key: true }, { l: "", v: "해요", c: 5 }
      ],
      patternCap: "Stam + 아야/어야 해요: 가야 해요, 먹어야 해요, 해야 해요",
      rules: [
        "Laatste klinker ㅏ of ㅗ: -아야 해요. 가다 wordt 가야 해요, 오다 wordt 와야 해요.",
        "Andere klinkers: -어야 해요. 먹다 wordt 먹어야 해요, 마시다 wordt 마셔야 해요.",
        "하다 wordt 해야 해요. 공부하다 wordt 공부해야 해요.",
        "Verleden tijd: alleen het eind verandert. 가야 했어요 = ik moest gaan."
      ],
      pitfall: "안 가야 해요 betekent \"ik moet wegblijven\". \"Ik hoef niet te gaan\" is iets anders: 안 가도 돼요.",
      examples: [
        { cn: "내일 일찍 일어나야 해요.", py: "Naeil iljjik ireonaya haeyo.", nl: "Morgen moet ik vroeg opstaan." },
        { cn: "감기에 걸려서 약을 먹어야 해요.", py: "Gamgie geollyeoseo yageul meogeoya haeyo.", nl: "Ik ben verkouden, dus ik moet medicijnen innemen." },
        { cn: "시험이 있어서 공부해야 해요.", py: "Siheomi isseoseo gongbuhaeya haeyo.", nl: "Ik heb een examen, dus ik moet studeren." },
        { cn: "어제는 늦게까지 일해야 했어요.", py: "Eojeneun neutgekkaji ilhaeya haesseoyo.", nl: "Gisteren moest ik tot laat werken." }
      ],
      vocab: [],
      dialogue: [
        ["A", "오늘 저녁에 같이 밥 먹을 수 있어요?", "Oneul jeonyeoge gachi bap meogeul su isseoyo?", "Kunnen we vanavond samen eten?"],
        ["B", "미안해요. 오늘은 숙제를 해야 해요.", "Mianhaeyo. Oneureun sukjereul haeya haeyo.", "Sorry. Vandaag moet ik huiswerk maken."],
        ["A", "숙제가 많아요?", "Sukjega manayo?", "Heb je veel huiswerk?"],
        ["B", "네, 내일까지 보고서를 써야 해요.", "Ne, naeilkkaji bogoseoreul sseoya haeyo.", "Ja, ik moet voor morgen een verslag schrijven."],
        ["A", "그럼 주말에 만나요.", "Geureom jumare mannayo.", "Laten we dan in het weekend afspreken."]
      ],
      questions: [
        { type: "mc", q: "\"Ik moet water drinken.\" Welke zin klopt?",
          options: ["물을 마셔야 해요.", "물을 마시야 해요.", "물을 마사야 해요.", "물을 마셔야 있어요."], answer: 0,
          why: ["Goed: 마시 + 어야 wordt samen 마셔야.", "Je mist -어. 마시 + 어야 wordt 마셔야.", "Na ㅣ komt -어야, niet -아야.", "Na -어야 komt 해요, niet 있어요."] },
        { type: "mc", q: "\"Ik moet dit boek lezen.\" Welke zin klopt?",
          options: ["이 책을 읽어야 해요.", "이 책을 읽아야 해요.", "이 책을 읽야 해요.", "이 책을 읽어 해요."], answer: 0,
          why: ["Goed: de laatste klinker is ㅣ, dus -어야.", "Na ㅣ komt -어야, niet -아야.", "Na een 받침 heb je de volle vorm -어야 nodig.", "Je mist 야. Zonder 야 betekent het geen \"moeten\"."] },
        { type: "mc", q: "\"Gisteren moest ik werken.\" Welke zin klopt?",
          options: ["어제 일해야 했어요.", "어제 일해야 해요.", "어제 일하아야 했어요.", "어제 일해야 있었어요."], answer: 0,
          why: ["Goed: 해야, en de verleden tijd aan het eind: 했어요.", "Het gaat over gisteren. Het eind moet in de verleden tijd.", "하다 wordt altijd 해야, niet 하아야.", "Na -아야/어야 komt een vorm van 하다, niet 있다."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik moet mijn huiswerk voor Koreaans maken.\"",
          tokens: [["한국어", "hangugeo"], ["숙제를", "sukjereul"], ["해야", "haeya"], ["해요", "haeyo"]] },
        { type: "open", q: "Vertaal: \"Ik moet naar de dokter.\"", model: ["병원에 가야 해요.", "저는 병원에 가야 해요.", "병원에 가야 돼요."],
          tip: "Check: 가 + 아야 wordt 가야, zonder dubbele 아. Daarna komt 해요 (of 돼요)." }
      ],
      review: [
        { type: "mc", q: "\"Ik moet een cadeau kopen.\"",
          options: ["선물을 사야 해요.", "선물을 사아야 해요.", "선물을 사어야 해요.", "선물을 사야 있어요."], answer: 0,
          why: ["Goed: 사 + 아야 wordt samen 사야.", "사 + 아 smelt samen. Je schrijft geen dubbele 아.", "Na ㅏ komt -아야, niet -어야.", "Na -아야 komt 해요, niet 있어요."] },
        { type: "mc", q: "\"Mijn vriend moet om zeven uur komen.\"",
          options: ["친구가 일곱 시에 와야 해요.", "친구가 일곱 시에 오아야 해요.", "친구가 일곱 시에 와어야 해요.", "친구가 일곱 시에 오야 해요."], answer: 0,
          why: ["Goed: 오 + 아야 wordt samen 와야.", "오 + 아야 trek je samen tot 와야.", "Na ㅗ komt -아야, en 와 bevat die al.", "Je mist de klinker 아. 오 + 아야 = 와야."] }
      ]
    },
    {
      id: "06", slug: "myeon", title: "-(으)면", sub: "Een voorwaarde: als",
      canDo: "Je kunt nu een voorwaarde noemen en zeggen wat er dan gebeurt, met -(으)면.",
      guess: {
        q: "\"Als het regent, blijf ik thuis.\" Welke zin klopt, denk je?",
        options: ["비가 오면 집에 있어요.", "비가 오으면 집에 있어요.", "비가 와면 집에 있어요.", "비가 옴면 집에 있어요."], answer: 0,
        why: ["Goed: 오 eindigt op een klinker, dus -면.", "-으면 komt alleen na een 받침.", "-면 komt direct op de stam, niet op de 아/어-vorm.", "-면 is een aparte lettergreep: 오면."]
      },
      problem: "Je wilt zeggen wat er gebeurt onder een voorwaarde: \"Als het regent, blijf ik thuis.\" In het Koreaans komt de voorwaarde altijd eerst. Je plakt -(으)면 aan de stam, en daarna volgt wat er dan gebeurt.",
      pattern: [
        { l: "voorwaarde", v: "비가 오", c: 3 }, { l: "-(으)면", v: "면", c: 2, key: true }, { l: "dan", v: "집에 있어요", c: 5 }
      ],
      patternCap: "Stam + 면 (na klinker of ㄹ) / 으면 (na 받침) + wat er dan gebeurt",
      rules: [
        "Stam op een klinker: -면. 가다 wordt 가면, 비싸다 wordt 비싸면.",
        "Stam op een 받침: -으면. 먹다 wordt 먹으면, 있다 wordt 있으면.",
        "Stam op ㄹ: alleen -면. 살다 wordt 살면, 멀다 wordt 멀면.",
        "Na -(으)면 mag een opdracht of voorstel: 시간이 있으면 전화하세요."
      ],
      pitfall: "Bij een ㄹ-stam komt er geen 으. Zeg niet 살으면, maar 살면.",
      examples: [
        { cn: "시간이 있으면 같이 영화 봐요.", py: "Sigani isseumyeon gachi yeonghwa bwayo.", nl: "Als je tijd hebt, laten we samen een film kijken." },
        { cn: "비가 오면 집에서 쉬어요.", py: "Biga omyeon jibeseo swieoyo.", nl: "Als het regent, rust ik thuis uit." },
        { cn: "너무 비싸면 안 살 거예요.", py: "Neomu bissamyeon an sal geoyeyo.", nl: "Als het te duur is, koop ik het niet." },
        { cn: "서울에 살면 지하철을 많이 타요.", py: "Seoure salmyeon jihacheoreul mani tayo.", nl: "Als je in Seoul woont, neem je vaak de metro." }
      ],
      vocab: [],
      dialogue: [
        ["A", "내일 시간이 있으면 같이 등산 가요.", "Naeil sigani isseumyeon gachi deungsan gayo.", "Als je morgen tijd hebt, laten we samen de berg op gaan."],
        ["B", "좋아요. 그런데 비가 오면 어떻게 해요?", "Joayo. Geureonde biga omyeon eotteoke haeyo?", "Goed. Maar wat doen we als het regent?"],
        ["A", "비가 오면 카페에 가요.", "Biga omyeon kape-e gayo.", "Als het regent, gaan we naar een café."],
        ["B", "좋아요. 아침에 일어나면 전화할게요.", "Joayo. Achime ireonamyeon jeonhwahalgeyo.", "Goed. Als ik 's ochtends op ben, bel ik je."]
      ],
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
        { type: "open", q: "Vertaal: \"Als je tijd hebt, bel me.\"", model: ["시간이 있으면 전화하세요.", "시간이 있으면 전화해 주세요."],
          tip: "Check: 있 heeft een 받침, dus -으면. Staat de voorwaarde vooraan?" }
      ],
      review: [
        { type: "mc", q: "\"Als het duur is, koop ik het niet.\"",
          options: ["비싸면 안 사요.", "비싸으면 안 사요.", "비쌌면 안 사요.", "비싼면 안 사요."], answer: 0,
          why: ["Goed: 비싸 eindigt op een klinker, dus -면.", "-으면 komt alleen na een 받침.", "Je mag hier geen verleden tijd gebruiken, en 비쌌 zou -으면 nodig hebben.", "-면 komt direct op 비싸, zonder ㄴ."] },
        { type: "mc", q: "\"Als je in Korea woont, leer je snel Koreaans.\"",
          options: ["한국에 살면 한국어를 빨리 배워요.", "한국에 살으면 한국어를 빨리 배워요.", "한국에 사면 한국어를 빨리 배워요.", "한국에 살아면 한국어를 빨리 배워요."], answer: 0,
          why: ["Goed: 살다 is een ㄹ-stam, dus 살면.", "Bij een ㄹ-stam komt er geen 으.", "사면 komt van 사다 en betekent \"als je koopt\".", "-면 komt direct op de stam, niet op de 아/어-vorm."] }
      ]
    }
  ]
};
