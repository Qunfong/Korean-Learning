({
  id: "15", slug: "manhada", title: "-(으)ㄹ 만하다", sub: "De moeite waard, goed genoeg, begrijpelijk",
  canDo: "Je kunt nu zeggen dat iets de moeite waard is, dat iets goed genoeg is, of dat een reactie begrijpelijk is, met -(으)ㄹ 만하다.",
  guess: {
    q: "이 영화는 한 번 볼 만해요. Wat bedoelt de spreker, denk je?",
    options: ["Deze film is het zien waard.", "Deze film moet je absoluut niet zien.", "Deze film heb ik één keer gezien.", "Deze film kun je onmogelijk zien."], answer: 0,
    why: [
      "Goed: -(으)ㄹ 만하다 betekent hier \"de moeite waard om te doen\".",
      "Het is juist een aanbeveling, geen waarschuwing.",
      "Er staat geen verleden tijd. 볼 만해요 is een oordeel over de film.",
      "\"Onmogelijk\" is -(으)ㄹ 리가 없다."
    ]
  },
  problem: "In het Nederlands zeg je \"Die film is het zien waard\" of \"Het eten is wel te eten\". Beide keren zeg je dat iets goed genoeg is om te doen. In het Koreaans gebruik je voor beide -(으)ㄹ 만하다. De context bepaalt of het een aanbeveling is of een lauw \"het gaat wel\".",
  pattern: [
    { l: "wat", v: "이 영화는", c: 1 }, { l: "stam + (으)ㄹ", v: "볼", c: 4 },
    { l: "만하다", v: "만해요", c: 2, key: true }
  ],
  patternCap: "Stam + (으)ㄹ 만하다 · 볼 만하다 · 먹을 만하다 · 들을 만하다 · 볼 만한 영화 · -아/어 볼 만하다 (het proberen waard)",
  rules: [
    "Na een klinker of ㄹ: -ㄹ 만하다 (볼, 갈, 살 만하다). Na een 받침: -을 만하다 (먹을, 읽을). 듣다 wordt 들을 만하다.",
    "Alleen met werkwoorden. Bij bijvoeglijke werkwoorden kan het niet: niet 예쁠 만하다.",
    "만하다 vervoeg je als bijvoeglijk werkwoord: 볼 만한 영화 (niet 만하는), 볼 만해요, 볼 만했어요. Ontkennen: 볼 만하지 않다, 볼 만한 게 없다.",
    "Drie betekenissen: de moeite waard (볼 만하다), goed genoeg of te verdragen (먹을 만하다, 참을 만하다), en begrijpelijk (화가 날 만하다).",
    "Register: in spreektaal 볼 만해, 그럴 만해요. In schrijftaal vaak 주목할 만하다 (opmerkelijk) of het formelere -(으)ㄹ 가치가 있다."
  ],
  pitfall: "먹을 만해요 is meestal geen groot compliment. Het betekent vaak \"het is te eten, het gaat wel\". Wil je zeggen dat iets het proberen waard is, gebruik dan -아/어 볼 만하다: 먹어 볼 만해요.",
  examples: [
    { cn: "이 영화는 한 번 볼 만해요.", py: "I yeonghwaneun han beon bol manhaeyo.", nl: "Deze film is het zien waard." },
    { cn: "국물이 좀 짜지만 먹을 만해요.", py: "Gungmuri jom jjajiman meogeul manhaeyo.", nl: "De soep is wat zout, maar hij is wel te eten." },
    { cn: "그렇게 오래 기다렸으면 화가 날 만하네요.", py: "Geureoke orae gidaryeosseumyeon hwaga nal manhaneyo.", nl: "Als je zo lang hebt gewacht, is het logisch dat je boos wordt." },
    { cn: "이 연구는 주목할 만한 결과를 보여 주었다.", py: "I yeon-guneun jumokal manhan gyeolgwareul boyeo jueotda.", nl: "Dit onderzoek liet opmerkelijke resultaten zien." }
  ],
  nuance: [
    { h: "먹을 만하다 of 먹어 볼 만하다?",
      p: "-(으)ㄹ 만하다 zegt vaak: het is goed genoeg, het gaat wel. -아/어 볼 만하다 voegt 보다 (\"proberen\") toe: het is de moeite waard om het eens te proberen. Dat is een echte aanbeveling. Zo zeg je ook 가 볼 만한 곳: een plek die de moeite waard is om heen te gaan.",
      ex: [
        { cn: "학교 식당 밥이 맛있지는 않지만 먹을 만해요.", py: "Hakgyo sikdang bobi masitjineun anjiman meogeul manhaeyo.", nl: "Het eten in de schoolkantine is niet lekker, maar het is te eten." },
        { cn: "그 식당은 비싸지만 먹어 볼 만해요.", py: "Geu sikdang-eun bissajiman meogeo bol manhaeyo.", nl: "Dat restaurant is duur, maar het is het proberen waard." }
      ] },
    { h: "만하다 of -(으)ㄹ 가치가 있다?",
      p: "-(으)ㄹ 가치가 있다 betekent letterlijk \"heeft de waarde om te\". Het is sterker en formeler, en past bij serieuze zaken. -(으)ㄹ 만하다 is een alledaags oordeel. Over een film of een restaurant zeg je 만하다. Over onderzoek of een moeilijke keuze schrijf je eerder 가치가 있다.",
      ex: [
        { cn: "이 책은 한번 읽을 만해요.", py: "I chaegeun hanbeon ilgeul manhaeyo.", nl: "Dit boek is het lezen waard." },
        { cn: "이 문제는 깊이 연구할 가치가 있다.", py: "I munjeneun gipi yeon-guhal gachiga itda.", nl: "Dit probleem verdient grondig onderzoek." }
      ] },
    { h: "\"Begrijpelijk\" en het register",
      p: "Met gevoelens betekent -(으)ㄹ 만하다 \"begrijpelijk, terecht\": 화가 날 만하다, 그럴 만해요 (dat is logisch). 살 만하다 betekent \"het leven is te doen\". Dit hoor je vooral in spreektaal. In schrijftaal zie je vaste vormen als 주목할 만하다 en 눈여겨볼 만하다: \"opmerkelijk, de aandacht waard\".",
      ex: [
        { cn: "요즘은 형편이 나아져서 살 만해요.", py: "Yojeumeun hyeongpyeoni naajyeoseo sal manhaeyo.", nl: "Mijn situatie is beter geworden, dus het leven is nu goed te doen." },
        { cn: "주목할 만한 점은 젊은 층의 변화이다.", py: "Jumokal manhan jeomeun jeolmeun cheung-ui byeonhwaida.", nl: "Wat opvalt, is de verandering bij jongeren." }
      ] }
  ],
  mistakes: [
    { wrong: "이건 정말 볼 만하는 영화예요.", right: "이건 정말 볼 만한 영화예요.", why: "만하다 is een bijvoeglijk werkwoord. Vóór een zelfstandig naamwoord wordt het 만한, niet 만하는." },
    { wrong: "이 책은 읽기 만해요.", right: "이 책은 읽을 만해요.", why: "Vóór 만하다 staat de (으)ㄹ-vorm, niet -기." },
    { wrong: "이 과일은 처음 보는데 한번 먹을 만해요.", right: "이 과일은 처음 보는데 한번 먹어 볼 만해요.", why: "Je raadt aan om iets nieuws te proberen. Dat is -아/어 볼 만하다. 먹을 만하다 klinkt als \"het gaat wel\"." },
    { wrong: "이 노래는 듣을 만해요.", right: "이 노래는 들을 만해요.", why: "듣다 is onregelmatig: vóór een klinker wordt ㄷ een ㄹ. Dus 들을 만하다." }
  ],
  vocab: [
    ["-(으)ㄹ 만하다", "-(eu)l manhada", "de moeite waard; goed genoeg om; begrijpelijk"], ["-(으)ㄹ 가치가 있다", "-(eu)l gachiga itda", "het waard zijn om (formeler)"],
    ["국물", "gungmul", "bouillon, soep"], ["주목하다", "jumokada", "aandacht schenken aan"],
    ["참다", "chamda", "verdragen, inhouden"], ["볼거리", "bolgeori", "bezienswaardigheden, iets om te zien"],
    ["입장료", "ipjangnyo", "toegangsprijs"], ["북적이다", "bukjeogida", "druk zijn, krioelen"],
    ["감탄하다", "gamtanhada", "bewonderen, versteld staan"], ["야경", "yagyeong", "uitzicht bij nacht"]
  ],
  dialogue: [
    ["A", "요즘 새로 나온 드라마 봤어요?", "Yojeum saero naon deurama bwasseoyo?", "Heb je die nieuwe serie gezien?"],
    ["B", "네, 처음엔 좀 지루했는데 3화부터는 볼 만하더라고요.", "Ne, cheoeumen jom jiruhaenneunde samhwabuteoneun bol manhadeoragoyo.", "Ja, in het begin was het wat saai, maar vanaf aflevering 3 was het de moeite waard."],
    ["A", "그래요? 주인공 연기는 어때요?", "Geuraeyo? Juingong yeongineun eottaeyo?", "O ja? Hoe is het acteerwerk van de hoofdrolspeler?"],
    ["B", "연기도 괜찮고 음악도 들을 만해요.", "Yeongido gwaenchanko eumakdo deureul manhaeyo.", "Het acteerwerk is goed, en de muziek is ook het luisteren waard."],
    ["A", "그럼 이번 주말에 한번 봐 볼게요.", "Geureom ibeon jumare hanbeon bwa bolgeyo.", "Dan ga ik het dit weekend eens proberen."],
    ["B", "꼭 보세요. 시간을 들여서 볼 가치가 있어요.", "Kkok boseyo. Siganeul deuryeoseo bol gachiga isseoyo.", "Zeker doen. Het is de tijd echt waard."]
  ],
  reading: {
    title: "경주 여행 후기",
    lines: [
      { cn: "지난 주말에 경주에 다녀왔다.", py: "Jinan jumare gyeongjue danyeowatda.", nl: "Afgelopen weekend ben ik naar Gyeongju geweest." },
      { cn: "경주는 역사 도시답게 볼거리가 많아서 한 번쯤 가 볼 만한 곳이다.", py: "Gyeongjuneun yeoksa dosidapge bolgeoriga manaseo han beonjjeum ga bol manhan gosida.", nl: "Zoals je van een historische stad verwacht, is er veel te zien. Het is een plek die het minstens één bezoek waard is." },
      { cn: "특히 박물관은 입장료가 무료인데도 전시가 충실해서 시간을 들일 만했다.", py: "Teuki bangmulgwaneun ipjangnyoga muryoindedo jeonsiga chungsilhaeseo siganeul deuril manhaetda.", nl: "Vooral het museum was de tijd waard: de toegang is gratis, en toch is de tentoonstelling heel volledig." },
      { cn: "다만 주말이라 관광객으로 북적여서 조금 아쉬웠다.", py: "Daman jumarira gwangwanggaegeuro bukjeogyeoseo jogeum aswiwotda.", nl: "Alleen was het weekend en krioelde het van de toeristen. Dat was een beetje jammer." },
      { cn: "점심에 먹은 한정식은 유명하다고 해서 기대했는데, 맛은 그냥 먹을 만한 정도였다.", py: "Jeomsime meogeun hanjeongsigeun yumyeonghadago haeseo gidaehaenneunde, maseun geunyang meogeul manhan jeongdoyeotda.", nl: "Ik had veel verwacht van de beroemde Koreaanse maaltijd die ik als lunch at, maar de smaak was gewoon redelijk." },
      { cn: "반면 밤에 본 동궁과 월지의 야경은 정말 감탄할 만했다.", py: "Banmyeon bame bon donggunggwa woljiui yagyeong-eun jeongmal gamtanhal manhaetda.", nl: "Het nachtzicht op Donggung en Wolji daarentegen was echt om versteld van te staan." },
      { cn: "걷는 거리가 꽤 길었지만 경치가 좋아서 참을 만했다.", py: "Geonneun georiga kkwae gireotjiman gyeongchiga joaseo chameul manhaetda.", nl: "We moesten vrij ver lopen, maar door het mooie landschap was dat goed te doen." },
      { cn: "역사에 관심이 있는 사람이라면 꼭 한번 방문해 볼 만한 도시이다.", py: "Yeoksa-e gwansimi inneun saramiramyeon kkok hanbeon bangmunhae bol manhan dosiida.", nl: "Wie in geschiedenis geïnteresseerd is, moet deze stad zeker eens bezoeken." }
    ],
    questions: [
      { type: "mc", q: "Wat vond de schrijver jammer?",
        options: ["Het was erg druk met toeristen.", "Het museum was duur.", "Het nachtzicht viel tegen.", "Er was weinig te zien."], answer: 0,
        why: ["Goed: 관광객으로 북적여서 조금 아쉬웠다.", "De toegang tot het museum was juist gratis.", "Het nachtzicht was juist om versteld van te staan.", "Er was juist veel te zien: 볼거리가 많다."] },
      { type: "mc", q: "Hoe was de lunch?",
        options: ["Redelijk, maar niet bijzonder.", "Heel erg lekker.", "Niet te eten.", "Te duur."], answer: 0,
        why: ["Goed: 그냥 먹을 만한 정도였다 = het was gewoon te eten.", "Hij had veel verwacht, maar het viel tegen.", "먹을 만하다 betekent juist dat het wel te eten was.", "Over de prijs staat niets in de tekst."] },
      { type: "mc", q: "걷는 거리가 꽤 길었지만 ... 참을 만했다. Wat betekent 참을 만했다?",
        options: ["Het was goed te verdragen.", "Het was onmogelijk te verdragen.", "Het was de moeite waard om te proberen.", "Het was begrijpelijk dat hij boos werd."], answer: 0,
        why: ["Goed: hier betekent 만하다 \"goed genoeg, te verdragen\".", "Het is juist het tegenovergestelde: het ging wel.", "\"Het proberen waard\" is -아/어 볼 만하다.", "Er staat niets over boos worden. 참다 = verdragen."] }
    ]
  },
  questions: [
    { type: "mc", q: "학교 식당 밥이 맛있지는 않지만 먹을 만해요. Wat betekent dit?",
      options: ["Het kantine-eten is niet lekker, maar wel te eten.", "Het kantine-eten is niet lekker, maar het is het proberen waard.", "Het kantine-eten is niet lekker, maar ik wil het eten.", "Het kantine-eten is niet lekker, en het is onmogelijk te eten."], answer: 0,
      why: ["Goed: 먹을 만하다 = goed genoeg, het gaat wel.", "\"Het proberen waard\" is 먹어 볼 만하다.", "\"Willen\" is -고 싶다.", "만하다 zegt juist dat het wel kan."] },
    { type: "mc", q: "\"Weet je een film die de moeite waard is?\" Welke zin klopt?",
      options: ["볼 만한 영화 있어요?", "볼 만하는 영화 있어요?", "보는 만한 영화 있어요?", "볼 만할 영화 있어요?"], answer: 0,
      why: ["Goed: 만하다 is een bijvoeglijk werkwoord, dus vóór een zelfstandig naamwoord: 만한.", "-는 hoort bij werkwoorden. 만하다 krijgt -ㄴ.", "Vóór 만하다 staat de (으)ㄹ-vorm: 볼.", "Een algemeen oordeel krijgt 만한, niet 만할."] },
    { type: "mc", q: "이 노래는 정말 ___ 만해요. (듣다 = luisteren)",
      options: ["들을", "듣을", "듣는", "들"], answer: 0,
      why: ["Goed: 듣다 is onregelmatig. Vóór een klinker wordt ㄷ een ㄹ: 들을.", "Vóór 을 verandert de ㄷ van 듣다 in ㄹ.", "Vóór 만하다 staat de (으)ㄹ-vorm, niet -는.", "Na de stam 들 (van 듣다) komt nog 을: 들을."] },
    { type: "mc", q: "\"Dat restaurant is duur, maar het is het proberen waard.\" Welke zin klopt?",
      options: ["그 식당은 비싸지만 먹어 볼 만해요.", "그 식당은 비싸지만 먹을 만해요.", "그 식당은 비싸지만 먹어 볼 가치해요.", "그 식당은 비싸지만 먹기 볼 만해요."], answer: 0,
      why: ["Goed: \"het proberen waard\" = -아/어 볼 만하다.", "먹을 만해요 betekent \"het is te eten\", niet \"het proberen waard\".", "Het is 가치가 있다, niet 가치하다.", "Vóór 보다 staat -아/어: 먹어 보다."] },
    { type: "mc", q: "그렇게 무시를 당했으면 화를 낼 만해요. Wat betekent dit?",
      options: ["Als je zo genegeerd werd, is het begrijpelijk dat je boos wordt.", "Als je zo genegeerd werd, word je onmogelijk boos.", "Als je zo genegeerd werd, word je waarschijnlijk niet boos.", "Als je zo genegeerd werd, is het de moeite waard om iemand boos te maken."], answer: 0,
      why: ["Goed: bij gevoelens betekent 만하다 \"begrijpelijk, terecht\".", "\"Onmogelijk\" is -(으)ㄹ 리가 없다.", "만하다 is geen vermoeden over iets wat niet gebeurt.", "화를 내다 is zelf boos worden, niet iemand anders boos maken."] },
    { type: "mc", q: "Welke zin is NIET correct?",
      options: ["이 옷은 예쁠 만해요.", "이 옷은 입을 만해요.", "이 옷은 한번 입어 볼 만해요.", "이 옷은 이 가격이면 살 만해요."], answer: 0,
      why: ["Goed: 예쁘다 is een bijvoeglijk werkwoord. Daarmee kan 만하다 niet.", "Deze zin klopt: het kledingstuk is goed genoeg om te dragen.", "Deze zin klopt: het is het passen waard.", "Deze zin klopt: voor deze prijs is het de aankoop waard."] },
    { type: "mc", q: "Welke zin past het best in een wetenschappelijk artikel?",
      options: ["이번 실험 결과는 주목할 만하다.", "이번 실험 결과는 꽤 볼 만해.", "이번 실험 결과는 꽤 볼 만하더라고요.", "이번 실험 결과는 볼 만하잖아."], answer: 0,
      why: ["Goed: 주목할 만하다 met de -다-vorm is schrijftaal.", "Het informele -해 is spreektaal.", "-더라고요 (\"ik merkte dat\") hoort bij een gesprek.", "-잖아 hoort bij een gesprek."] },
    { type: "order", q: "Zet in de goede volgorde: \"Gyeongju is een stad die het bezoeken waard is.\"",
      tokens: [["경주는", "gyeongjuneun"], ["가", "ga"], ["볼", "bol"], ["만한", "manhan"], ["도시예요", "dosiyeyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"De prik doet wat pijn, maar het is te verdragen.\"",
      tokens: [["주사가", "jusaga"], ["좀 아프지만", "jom apeujiman"], ["참을", "chameul"], ["만해요", "manhaeyo"]] },
    { type: "fill", q: "이 동네는 조용하고 교통도 편해서 ___ 만해요. (Deze buurt is rustig en goed bereikbaar, dus het is er goed wonen.)",
      answers: ["살"], hint: "살다 = wonen. De stam eindigt op ㄹ.",
      why: "Een stam op ㄹ krijgt geen extra 을: 살다 wordt 살 만하다." },
    { type: "open", q: "Vertaal: \"Dit museum is het bezoeken waard.\"",
      model: ["이 박물관은 가 볼 만해요.", "이 박물관은 한번 방문해 볼 만해요.", "이 박물관은 방문할 가치가 있어요."],
      tip: "Check: voor een aanbeveling om iets te proberen past -아/어 볼 만하다. -(으)ㄹ 가치가 있다 klinkt formeler." },
    { type: "open", q: "Een vriend vraagt hoe het eten in je bedrijfskantine is. Antwoord informeel: niet bijzonder lekker, maar te eten.",
      model: ["특별히 맛있지는 않지만 먹을 만해.", "그냥 먹을 만해.", "맛있지는 않은데 먹을 만해."],
      tip: "Check: 먹을 만하다 (niet 먹어 볼 만하다), en informeel eindigen met -해." }
  ],
  review: [
    { type: "mc", q: "\"Deze roman is de moeite waard om te lezen.\"",
      options: ["이 소설은 읽을 만해요.", "이 소설은 읽는 만해요.", "이 소설은 읽기 만해요.", "이 소설은 읽어 만해요."], answer: 0,
      why: ["Goed: 읽다 heeft een 받침, dus 읽을 만하다.", "Vóór 만하다 staat de (으)ㄹ-vorm, niet -는.", "Vóór 만하다 staat de (으)ㄹ-vorm, niet -기.", "-아/어 kan alleen met 보다 ertussen: 읽어 볼 만해요."] },
    { type: "mc", q: "\"Een plek die het waard is om eens heen te gaan\"",
      options: ["한번 가 볼 만한 곳", "한번 가 볼 만하는 곳", "한번 가 보는 만한 곳", "한번 가 볼 만할 곳"], answer: 0,
      why: ["Goed: 가 보다 + (으)ㄹ 만하다, en vóór 곳 wordt het 만한.", "만하다 is een bijvoeglijk werkwoord: 만한, niet 만하는.", "Vóór 만하다 staat de (으)ㄹ-vorm: 볼.", "Een algemeen oordeel krijgt 만한, niet 만할."] },
    { type: "mc", q: "그렇게 열심히 했으니 상을 받을 만해요. Wat betekent dit?",
      options: ["Hij heeft zo hard gewerkt, dus hij verdient de prijs.", "Hij heeft zo hard gewerkt, maar hij krijgt de prijs onmogelijk.", "Hij heeft zo hard gewerkt, en hij heeft de prijs al gekregen.", "Hij heeft zo hard gewerkt, en hij wil de prijs krijgen."], answer: 0,
      why: ["Goed: 만하다 = begrijpelijk, terecht: hij verdient het.", "\"Onmogelijk\" is -(으)ㄹ 리가 없다.", "Er staat geen verleden tijd op 받다. Het is een oordeel.", "\"Willen\" is -고 싶다."] }
  ]
})
