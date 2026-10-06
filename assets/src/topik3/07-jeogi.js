({
  id: "07", slug: "jeogi", title: "-(으)ㄴ 적이 있다/없다", sub: "Vertellen wat je ooit (of nooit) hebt meegemaakt",
  canDo: "Je kunt nu met -(으)ㄴ 적이 있다/없다 vertellen wat je ooit of nog nooit hebt meegemaakt, en je weet wanneer -아/어 본 적이 있다 of gewoon de verleden tijd beter past.",
  guess: {
    q: "\"Ik ben ooit in Korea geweest.\" Welke zin klopt, denk je?",
    options: ["한국에 간 적이 있어요.", "한국에 가는 적이 있어요.", "한국에 간 적이 해요.", "한국에 간 적에 있어요."], answer: 0,
    why: ["Goed: 가 + -ㄴ = 간, dan 적이 있어요.", "Een ervaring ligt in het verleden: -(으)ㄴ, niet -는.", "Na 적이 komt 있다 of 없다, niet 하다.", "적 krijgt het onderwerpspartikel 이, niet 에."]
  },
  problem: "In het Nederlands zeg je \"ik ben weleens in Japan geweest\" of \"ik heb nog nooit gevlogen\". Het gaat niet om wanneer, maar om de ervaring zelf. In het Koreaans zeg je dat met -(으)ㄴ 적이 있다 (ooit) en -(으)ㄴ 적이 없다 (nooit). 적 betekent \"keer, moment\".",
  pattern: [
    { l: "handeling", v: "제주도에 가", c: 1 }, { l: "-(으)ㄴ (verleden)", v: "ㄴ", c: 3, key: true }, { l: "적이 있다/없다", v: "적이 있어요", c: 2, key: true }
  ],
  patternCap: "Stam + (으)ㄴ 적이 있어요 = ik heb ooit ... · Stam + (으)ㄴ 적이 없어요 = ik heb nog nooit ... · 가 본 적이 있어요 = ik heb eens geprobeerd ...",
  rules: [
    "Zonder 받침: stam + ㄴ: 가다 → 간 적. Met 받침: stam + 은: 먹다 → 먹은 적.",
    "Bij een ㄹ-stam valt de ㄹ weg: 만들다 → 만든 적, 살다 → 산 적.",
    "ㄷ-onregelmatig: 듣다 → 들은 적, 걷다 → 걸은 적.",
    "Nooit: 적이 없어요, vaak met 한 번도: 한 번도 간 적이 없어요. Niet 안 있어요.",
    "Je kunt 이 vervangen door 은 of 도: 간 적은 있어요 (wel eens, maar ...), 간 적도 있어요 (ook weleens)."
  ],
  pitfall: "Gebruik het niet voor iets van gisteren of voor dagelijkse dingen. 어제 그 영화를 본 적이 있어요 is vreemd. Zeg gewoon: 어제 그 영화를 봤어요.",
  examples: [
    { cn: "저는 제주도에 간 적이 있어요.", py: "Jeoneun jejudoe gan jeogi isseoyo.", nl: "Ik ben weleens op Jeju geweest." },
    { cn: "한국 음식을 만든 적이 없어요.", py: "Hanguk eumsigeul mandeun jeogi eopseoyo.", nl: "Ik heb nog nooit Koreaans eten gemaakt." },
    { cn: "어릴 때 미국에서 산 적이 있어요.", py: "Eoril ttae migugeseo san jeogi isseoyo.", nl: "Als kind heb ik een tijd in Amerika gewoond." },
    { cn: "혹시 이 노래를 들은 적이 있어요?", py: "Hoksi i noraereul deureun jeogi isseoyo?", nl: "Heb je dit liedje toevallig weleens gehoord?" }
  ],
  nuance: [
    { h: "-(으)ㄴ 적이 있다, -아/어 본 적이 있다 of -아/어 봤어요?",
      p: "-(으)ㄴ 적이 있다 meldt alleen een feit: het is ooit gebeurd. Dat past ook bij iets wat je overkwam. -아/어 본 적이 있다 legt de nadruk op bewust proberen of meemaken. -아/어 봤어요 betekent bijna hetzelfde, maar is korter en klinkt meer als spreektaal. Het kan ook over één concrete poging gaan: 어제 처음 먹어 봤어요.",
      ex: [
        { cn: "지하철에서 지갑을 잃어버린 적이 있어요.", py: "Jihacheoreseo jigabeul ireobeorin jeogi isseoyo.", nl: "Ik ben eens mijn portemonnee kwijtgeraakt in de metro." },
        { cn: "번지 점프를 해 본 적이 있어요.", py: "Beonji jeompeureul hae bon jeogi isseoyo.", nl: "Ik heb weleens bungeejumpen geprobeerd." },
        { cn: "어제 떡볶이를 처음 먹어 봤어요.", py: "Eoje tteokbokkireul cheoeum meogeo bwasseoyo.", nl: "Gisteren heb ik voor het eerst tteokbokki geprobeerd." }
      ] },
    { h: "Wanneer niet: gisteren en elke dag",
      p: "적이 있다 gaat over een ervaring in je leven, niet over een moment. Een vage tijd past goed: 어릴 때, 작년에, 한 번. Een precies, recent tijdstip zoals 어제 of 아까 past niet. Ook gewone dagelijkse dingen klinken vreemd: iedereen heeft ooit water gedronken. Gebruik dan de gewone verleden tijd.",
      ex: [
        { cn: "작년에 한 번 한라산에 올라간 적이 있어요.", py: "Jangnyeone han beon hallasane ollagan jeogi isseoyo.", nl: "Vorig jaar ben ik één keer de Hallasan op geweest." },
        { cn: "아까 친구를 만났어요.", py: "Akka chingureul mannasseoyo.", nl: "Ik heb net een vriend gezien." }
      ] },
    { h: "Nadruk en register",
      p: "한 번도 ... 적이 없어요 maakt \"nooit\" sterker. Met 은 zet je iets tegenover elkaar: 가 본 적은 있지만 ... = ik ben er wel geweest, maar .... In spreektaal laat je 이 vaak weg: 가 본 적 있어요? In formele taal zeg je 적이 있습니다.",
      ex: [
        { cn: "한 번도 지각한 적이 없어요.", py: "Han beondo jigakan jeogi eopseoyo.", nl: "Ik ben nog nooit te laat gekomen." },
        { cn: "부산에 간 적은 있지만 바다는 못 봤어요.", py: "Busane gan jeogeun itjiman badaneun mot bwasseoyo.", nl: "Ik ben wel in Busan geweest, maar de zee heb ik niet gezien." }
      ] }
  ],
  mistakes: [
    { wrong: "한국에 가는 적이 있어요.", right: "한국에 간 적이 있어요.", why: "Een ervaring ligt in het verleden. Gebruik -(으)ㄴ, niet -는." },
    { wrong: "김치를 만들은 적이 있어요.", right: "김치를 만든 적이 있어요.", why: "Bij een ㄹ-stam valt de ㄹ weg en komt er ㄴ: 만든." },
    { wrong: "비행기를 탄 적이 안 있어요.", right: "비행기를 탄 적이 없어요.", why: "Het tegendeel van 있다 is 없다. 안 있어요 zeg je niet." },
    { wrong: "어제 그 영화를 본 적이 있어요.", right: "어제 그 영화를 봤어요.", why: "Bij een precies, recent tijdstip gebruik je de gewone verleden tijd." }
  ],
  vocab: [
    ["-(으)ㄴ 적이 있다/없다", "-(eu)n jeogi itda/eopda", "ooit / nog nooit ... hebben"], ["혹시", "hoksi", "misschien, toevallig"], ["한 번도", "han beondo", "(nog) nooit, geen enkele keer"],
    ["등산", "deungsan", "bergwandelen"], ["경치", "gyeongchi", "uitzicht, landschap"], ["외국", "oeguk", "buitenland"],
    ["길거리", "gilgeori", "straat"], ["대답하다", "daedaphada", "antwoorden"], ["약", "yak", "medicijn"], ["어릴 때", "eoril ttae", "als kind, toen ik klein was"]
  ],
  dialogue: [
    ["A", "혹시 한라산에 올라간 적이 있어요?", "Hoksi hallasane ollagan jeogi isseoyo?", "Ben je toevallig weleens de Hallasan op geweest?"],
    ["B", "아니요, 한 번도 올라간 적이 없어요. 등산을 별로 안 좋아해요.", "Aniyo, han beondo ollagan jeogi eopseoyo. Deungsaneul byeollo an joahaeyo.", "Nee, nog nooit. Ik hou niet zo van bergwandelen."],
    ["A", "저는 작년에 친구하고 간 적이 있어요. 경치가 정말 좋았어요.", "Jeoneun jangnyeone chinguhago gan jeogi isseoyo. Gyeongchiga jeongmal joasseoyo.", "Ik ben er vorig jaar met een vriend geweest. Het uitzicht was echt mooi."],
    ["B", "그래요? 그럼 저도 한번 가 볼까요?", "Geuraeyo? Geureom jeodo hanbeon ga bolkkayo?", "Echt? Zal ik er dan ook eens heen gaan?"],
    ["A", "네, 꼭 가 보세요.", "Ne, kkok ga boseyo.", "Ja, ga zeker eens."]
  ],
  reading: {
    title: "잊을 수 없는 여행",
    lines: [
      { cn: "저는 여행을 좋아해서 여러 나라에 간 적이 있어요.", py: "Jeoneun yeohaengeul joahaeseo yeoreo narae gan jeogi isseoyo.", nl: "Ik reis graag, dus ik ben al in veel landen geweest." },
      { cn: "그런데 외국에서 병원에 간 적은 한 번도 없었어요.", py: "Geureonde oegugeseo byeongwone gan jeogeun han beondo eopseosseoyo.", nl: "Maar in het buitenland was ik nog nooit naar een ziekenhuis gegaan." },
      { cn: "작년 여름에 처음으로 태국에 갔어요.", py: "Jangnyeon yeoreume cheoeumeuro taeguge gasseoyo.", nl: "Vorige zomer ging ik voor het eerst naar Thailand." },
      { cn: "거기에서 길거리 음식을 먹고 배가 많이 아팠어요.", py: "Geogieseo gilgeori eumsigeul meokgo baega mani apasseoyo.", nl: "Daar at ik eten van straat en kreeg ik veel buikpijn." },
      { cn: "그래서 외국 병원에 처음 가게 됐어요.", py: "Geuraeseo oeguk byeongwone cheoeum gage dwaesseoyo.", nl: "Zo kwam ik voor het eerst in een buitenlands ziekenhuis terecht." },
      { cn: "의사 선생님이 \"이런 음식을 먹은 적이 있어요?\"라고 물었어요.", py: "Uisa seonsaengnimi \"ireon eumsigeul meogeun jeogi isseoyo?\"rago mureosseoyo.", nl: "De dokter vroeg: \"Heb je dit soort eten al eens gegeten?\"" },
      { cn: "저는 \"아니요, 한 번도 먹은 적이 없어요\"라고 대답했어요.", py: "Jeoneun \"aniyo, han beondo meogeun jeogi eopseoyo\"rago daedaphaesseoyo.", nl: "Ik antwoordde: \"Nee, nog nooit.\"" },
      { cn: "다행히 약을 먹고 이틀 후에 괜찮아졌어요.", py: "Dahaenghi yageul meokgo iteul hue gwaenchanajyeosseoyo.", nl: "Gelukkig was ik na twee dagen met medicijnen weer beter." },
      { cn: "지금은 여행할 때 항상 약을 가지고 가요.", py: "Jigeumeun yeohaenghal ttae hangsang yageul gajigo gayo.", nl: "Nu neem ik op reis altijd medicijnen mee." }
    ],
    questions: [
      { type: "mc", q: "Wat gebeurde er in Thailand?",
        options: ["De schrijver kreeg buikpijn van eten van straat.", "De schrijver raakte een tas kwijt.", "De schrijver werd dokter.", "De schrijver kwam niet in een ziekenhuis."], answer: 0,
        why: ["Goed: 길거리 음식을 먹고 배가 많이 아팠어요.", "Over een tas staat niets in de tekst.", "De schrijver ging juist naar een dokter.", "De schrijver ging wel naar een ziekenhuis: 병원에 처음 가게 됐어요."] },
      { type: "mc", q: "Wat doet de schrijver nu anders?",
        options: ["Altijd medicijnen meenemen op reis.", "Nooit meer reizen.", "Nooit meer eten van straat eten.", "Alleen nog naar Thailand gaan."], answer: 0,
        why: ["Goed: 여행할 때 항상 약을 가지고 가요.", "De schrijver reist nog steeds: 여행할 때.", "Dat staat niet in de tekst.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "외국에서 병원에 간 적은 한 번도 없었어요. Wat betekent dit?",
        options: ["Vóór die reis was de schrijver nog nooit in een buitenlands ziekenhuis geweest.", "De schrijver wilde niet naar het ziekenhuis.", "De schrijver ging één keer naar het ziekenhuis.", "De schrijver kon het ziekenhuis niet vinden."], answer: 0,
        why: ["Goed: 적이 없었어요 = het was nog nooit gebeurd, tot dan toe.", "Een wens zou -고 싶다 zijn.", "한 번도 + 없다 betekent \"geen enkele keer\".", "Over zoeken staat niets in de zin."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik ben weleens in Japan geweest.\"",
      options: ["일본에 간 적이 있어요.", "일본에 가는 적이 있어요.", "일본에 갈 적이 있어요.", "일본에 간 적을 있어요."], answer: 0,
      why: ["Goed: 가 + -ㄴ + 적이 있어요.", "Een ervaring is verleden: -(으)ㄴ, niet -는.", "-(으)ㄹ is toekomst. Een ervaring ligt achter je.", "Bij 있다 krijgt 적 het partikel 이, niet 을."] },
    { type: "mc", q: "김치를 ___ 적이 있어요. (Ik heb weleens kimchi gemaakt.)",
      options: ["만든", "만들은", "만드는", "만들"], answer: 0,
      why: ["Goed: bij een ㄹ-stam valt de ㄹ weg: 만들 + ㄴ = 만든.", "Na een ㄹ-stam komt geen 은. De ㄹ valt weg: 만든.", "-는 is tegenwoordige tijd. Een ervaring is verleden.", "만들 is de toekomstvorm. Een ervaring ligt achter je."] },
    { type: "mc", q: "이 노래를 ___ 적이 없어요. (Ik heb dit liedje nog nooit gehoord.)",
      options: ["들은", "듣은", "듣는", "들는"], answer: 0,
      why: ["Goed: 듣다 is ㄷ-onregelmatig: 들 + 은 = 들은.", "Vóór een klinker wordt de ㄷ van 듣다 een ㄹ: 들은.", "-는 is tegenwoordige tijd. Hier gaat het om ervaring.", "들는 bestaat niet. Verleden: 들은."] },
    { type: "mc", q: "Je hebt gisteren die film gezien. Wat zeg je?",
      options: ["어제 그 영화를 봤어요.", "어제 그 영화를 본 적이 있어요.", "어제 그 영화를 보는 적이 있어요.", "어제 그 영화를 볼 적이 있어요."], answer: 0,
      why: ["Goed: bij een precies, recent tijdstip gebruik je de gewone verleden tijd.", "적이 있다 gaat over een ervaring, niet over gisteren.", "-는 is tegenwoordige tijd, en 적이 past hier niet.", "-(으)ㄹ is toekomst, en 적이 past hier niet."] },
    { type: "mc", q: "비행기를 한 번도 탄 적이 없어요. Wat betekent dit?",
      options: ["Ik heb nog nooit gevlogen.", "Ik heb één keer gevlogen.", "Ik wil niet vliegen.", "Ik kan niet vliegen."], answer: 0,
      why: ["Goed: 한 번도 ... 적이 없어요 = nog geen enkele keer.", "한 번도 met 없다 betekent juist \"geen enkele keer\".", "Een wens zou -고 싶지 않다 zijn.", "Kunnen is -(으)ㄹ 수 있다/없다."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["휴대폰을 잃어버려 본 적이 있어요.", "휴대폰을 잃어버린 적이 있어요.", "한국 소주를 마셔 본 적이 있어요.", "부산에 간 적이 있어요."], answer: 0,
      why: ["Goed: dit is fout. Iets kwijtraken probeer je niet bewust. Gebruik -(으)ㄴ 적이 있다.", "Dit klopt: iets wat je overkwam, met -(으)ㄴ 적이 있다.", "Dit klopt: iets wat je bewust probeerde, met -아/어 본 적이 있다.", "Dit klopt: een gewone ervaring."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik ben nog nooit te laat gekomen.\"",
      tokens: [["저는", "jeoneun"], ["한", "han"], ["번도", "beondo"], ["지각한", "jigakan"], ["적이", "jeogi"], ["없어요.", "eopseoyo."]] },
    { type: "order", q: "Zet in de goede volgorde: \"Ben je weleens in dit restaurant geweest?\"",
      tokens: [["이", "i"], ["식당에", "sikdange"], ["와", "wa"], ["본", "bon"], ["적이", "jeogi"], ["있어요?", "isseoyo?"]] },
    { type: "fill", q: "저는 그 배우를 직접 만난 ___이 없어요. (Ik heb die acteur nog nooit in het echt ontmoet.)", answers: ["적"],
      hint: "Welk woord betekent hier \"keer, moment\"?", why: "-(으)ㄴ + 적 + 이 없어요: 만난 적이 없어요." },
    { type: "open", q: "Vertaal: \"Heb je weleens bibimbap gemaakt?\"", model: ["비빔밥을 만든 적이 있어요?", "비빔밥을 만들어 본 적이 있어요?", "혹시 비빔밥을 만들어 본 적 있어요?"],
      tip: "Check: 만들다 wordt 만든 (zonder 은), of 만들어 본. Na 적 komt 이 있어요." },
    { type: "open", q: "Vertaal: \"Ik ben eens mijn telefoon kwijtgeraakt in de metro.\"", model: ["지하철에서 휴대폰을 잃어버린 적이 있어요.", "저는 지하철에서 핸드폰을 잃어버린 적이 있어요."],
      tip: "Check: dit overkwam je, dus -(으)ㄴ 적이 있다 en niet -아/어 보다." }
  ],
  review: [
    { type: "mc", q: "그 가수를 직접 ___ 적이 있어요. (Ik heb die zanger eens in het echt gezien.)",
      options: ["본", "보는", "볼", "봤은"], answer: 0,
      why: ["Goed: 보 + ㄴ = 본.", "-는 is tegenwoordige tijd. Een ervaring is verleden.", "-(으)ㄹ is toekomst.", "Vóór 적 komt geen 았/었. Gebruik 본."] },
    { type: "mc", q: "\"Ik heb nog nooit sushi gegeten.\"",
      options: ["초밥을 먹은 적이 없어요.", "초밥을 먹은 적이 안 있어요.", "초밥을 먹는 적이 없어요.", "초밥을 먹은 적을 없어요."], answer: 0,
      why: ["Goed: 먹 + 은 + 적이 없어요.", "Het tegendeel van 있다 is 없다, niet 안 있다.", "Een ervaring is verleden: 먹은, niet 먹는.", "Bij 없다 krijgt 적 het partikel 이, niet 을."] },
    { type: "mc", q: "저는 서울에서 ___ 적이 있어요. (Ik heb weleens in Seoul gewoond.)",
      options: ["산", "살은", "사는", "살"], answer: 0,
      why: ["Goed: bij een ㄹ-stam valt de ㄹ weg: 살 + ㄴ = 산.", "Na een ㄹ-stam komt geen 은. De ㄹ valt weg: 산.", "-는 is tegenwoordige tijd. Een ervaring is verleden.", "살 is de toekomstvorm."] }
  ]
})
