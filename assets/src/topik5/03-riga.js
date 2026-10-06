({
  id: "03", slug: "riga", title: "-(으)ㄹ 리가 없다", sub: "Dat kan onmogelijk",
  canDo: "Je kunt nu zeggen dat iets volgens jou onmogelijk is, ook over het verleden, met -(으)ㄹ 리가 없다.",
  guess: {
    q: "민수가 거짓말을 할 리가 없어요. Wat betekent dit, denk je?",
    options: ["Minsu liegt onmogelijk.", "Minsu liegt misschien.", "Minsu liegt waarschijnlijk wel.", "Minsu liegt nooit meer."], answer: 0,
    why: [
      "Goed: -(으)ㄹ 리가 없다 betekent \"het kan onmogelijk\".",
      "\"Misschien\" is -(으)ㄹ지도 모르다. 리가 없다 is veel sterker.",
      "Het is juist het tegenovergestelde: het kan niet.",
      "Er staat niets over \"meer\". Het gaat om onmogelijkheid."
    ]
  },
  problem: "Je hoort iets wat je niet gelooft. In het Nederlands zeg je \"Dat kan niet!\" of \"Hij kan onmogelijk ...\". In het Koreaans zeg je -(으)ㄹ 리가 없다. Je zegt niet alleen dat iets niet zo is. Je zegt dat het volgens jou onmogelijk is.",
  pattern: [
    { l: "wie", v: "그 사람이", c: 1 }, { l: "stam + (으)ㄹ", v: "늦을", c: 4 },
    { l: "리가 없다", v: "리가 없어요", c: 2, key: true }
  ],
  patternCap: "Stam + (으)ㄹ 리가 없다 · 갈 리가 없다 · 먹을 리가 없다 · 갔을 리가 없다 · 학생일 리가 없다",
  rules: [
    "Na een klinker of ㄹ: -ㄹ 리가 없다 (갈, 알). Na een 받침: -을 리가 없다 (먹을, 작을).",
    "Het werkt met werkwoorden en bijvoeglijke werkwoorden. 이다 wordt 일 리가 없다.",
    "Over het verleden: -았/었을 리가 없다 (벌써 갔을 리가 없어요).",
    "In spreektaal valt 가 soms weg: 그럴 리 없어. Als vraag met 있어요 betekent het ook \"onmogelijk\": 그럴 리가 있어요?"
  ],
  pitfall: "Zeg niet 가는 리가 없다 of 갈 리가 않아요. Vóór 리 staat altijd de (으)ㄹ-vorm, en daarna komt 없다. Schrijf 리가 los.",
  examples: [
    { cn: "그 사람이 약속을 잊었을 리가 없어요.", py: "Geu sarami yaksogeul ijeosseul riga eopseoyo.", nl: "Hij kan de afspraak onmogelijk vergeten zijn." },
    { cn: "이렇게 싼 가방이 진짜일 리가 없어요.", py: "Ireoke ssan gabang-i jinjjail riga eopseoyo.", nl: "Zo'n goedkope tas kan onmogelijk echt zijn." },
    { cn: "매일 연습하는 지수가 시험에 떨어질 리가 없다.", py: "Maeil yeonseupaneun jisuga siheome tteoreojil riga eopda.", nl: "Jisu oefent elke dag. Zij kan onmogelijk zakken." },
    { cn: "그럴 리가 없어요!", py: "Geureol riga eopseoyo!", nl: "Dat kan niet!" }
  ],
  nuance: [
    { h: "리가 없다 of 수 없다?",
      p: "-(으)ㄹ 수 없다 gaat over kunnen: iemand is niet in staat iets te doen, of de situatie laat het niet toe. -(으)ㄹ 리가 없다 is jouw oordeel: je bent er zeker van dat iets niet zo is. Vergelijk: hij kan niet komen (hij is ziek) en hij komt vast niet (dat ken ik van hem).",
      ex: [
        { cn: "민호는 아파서 올 수 없어요.", py: "Minhoneun apaseo ol su eopseoyo.", nl: "Minho is ziek, dus hij kan niet komen." },
        { cn: "민호가 그 파티에 올 리가 없어요.", py: "Minhoga geu patie ol riga eopseoyo.", nl: "Minho komt onmogelijk naar dat feest. (Dat ken ik van hem.)" }
      ] },
    { h: "Spreektaal: 그럴 리가요! en de vraagvorm",
      p: "In een gesprek reageer je vaak kort: 그럴 리가요! of 그럴 리가! Dat betekent \"Dat kan niet!\". Een vraag met 있다 heeft dezelfde betekenis: 그럴 리가 있어요? Het is geen echte vraag. Je zegt: dat kan toch niet.",
      ex: [
        { cn: "그 사람이 벌써 결혼했다고요? 그럴 리가요!", py: "Geu sarami beolsseo gyeolhonhaetdagoyo? Geureol rigayo!", nl: "Is hij al getrouwd, zeg je? Dat kan niet!" },
        { cn: "제가 그런 말을 했을 리가 있어요?", py: "Jega geureon mareul haesseul riga isseoyo?", nl: "Zou ik zoiets gezegd hebben? Natuurlijk niet." }
      ] },
    { h: "Schrijftaal: -(으)ㄹ 리 만무하다",
      p: "In formele teksten zie je -(으)ㄹ 리 만무하다. Het betekent hetzelfde, maar klinkt plechtig. In een gesprek klinkt het vreemd. Zwakker dan 리가 없다 is -(으)ㄹ 것 같지 않다: \"het lijkt me niet\".",
      ex: [
        { cn: "그런 계획이 성공할 리 만무하다.", py: "Geureon gyehoegi seonggonghal ri manmuhada.", nl: "Zo'n plan kan onmogelijk slagen." },
        { cn: "그 계획은 성공할 것 같지 않아요.", py: "Geu gyehoegeun seonggonghal geot gatji anayo.", nl: "Ik denk niet dat dat plan slaagt." }
      ] }
  ],
  mistakes: [
    { wrong: "그가 약속을 잊었을 수 없어요.", right: "그가 약속을 잊었을 리가 없어요.", why: "Je oordeelt dat iets onmogelijk is gebeurd. Daarvoor is 리가 없다, niet 수 없다." },
    { wrong: "그가 그걸 아는 리가 없어요.", right: "그가 그걸 알 리가 없어요.", why: "Vóór 리 staat altijd de (으)ㄹ-vorm, niet -는." },
    { wrong: "어제 그 사람이 부산에 갈 리가 없어요.", right: "어제 그 사람이 부산에 갔을 리가 없어요.", why: "Het gaat over gisteren. Voor het verleden gebruik je -았/었을 리가 없다." },
    { wrong: "그럴 리가 않아요!", right: "그럴 리가 없어요!", why: "Na 리가 komt altijd 없다 (of 있다 in een vraag), nooit 않다." }
  ],
  vocab: [
    ["-(으)ㄹ 리가 없다", "-(eu)l riga eopda", "kan onmogelijk"], ["거짓말", "geojinmal", "leugen"],
    ["진짜", "jinjja", "echt, origineel"], ["떨어지다", "tteoreojida", "zakken (voor een examen), vallen"],
    ["없어지다", "eopseojida", "verdwijnen, kwijtraken"], ["주머니", "jumeoni", "zak (van een kledingstuk)"],
    ["사라지다", "sarajida", "verdwijnen"], ["의심하다", "uisimhada", "verdenken"],
    ["범인", "beomin", "dader"], ["만무하다", "manmuhada", "volstrekt uitgesloten zijn (schrijftaal)"]
  ],
  dialogue: [
    ["A", "지갑이 없어졌어요.", "Jigabi eopseojyeosseoyo.", "Mijn portemonnee is weg."],
    ["B", "아까 가방에 넣었잖아요. 없어졌을 리가 없어요.", "Akka gabang-e neoeotjanayo. Eopseojyeosseul riga eopseoyo.", "Je hebt hem net in je tas gestopt. Hij kan onmogelijk weg zijn."],
    ["A", "가방에도 없어요. 누가 가져갔을까요?", "Gabang-edo eopseoyo. Nuga gajyeogasseulkkayo?", "Hij zit ook niet in mijn tas. Zou iemand hem hebben meegenomen?"],
    ["B", "여기는 우리 사무실이에요. 누가 가져갔을 리가 없어요. 주머니도 봐요.", "Yeogineun uri samusirieyo. Nuga gajyeogasseul riga eopseoyo. Jumeonido bwayo.", "Dit is ons kantoor. Niemand kan hem meegenomen hebben. Kijk ook in je zak."],
    ["A", "아, 여기 있네요!", "A, yeogi inneyo!", "O, hier is hij!"]
  ],
  reading: {
    title: "사라진 케이크",
    lines: [
      { cn: "어제 저녁, 냉장고에 넣어 둔 케이크가 사라졌다.", py: "Eoje jeonyeok, naengjanggoe neoeo dun keikeuga sarajyeotda.", nl: "Gisteravond verdween de taart die ik in de koelkast had gezet." },
      { cn: "처음에 나는 동생을 의심했다.", py: "Cheoeume naneun dongsaeng-eul uisimhaetda.", nl: "Eerst verdacht ik mijn jongere broer." },
      { cn: "하지만 동생은 단 것을 싫어하니까 케이크를 먹었을 리가 없었다.", py: "Hajiman dongsaeng-eun dan geoseul sireohanikka keikeureul meogeosseul riga eopseotda.", nl: "Maar hij houdt niet van zoetigheid, dus hij kon de taart onmogelijk opgegeten hebben." },
      { cn: "어머니는 다이어트 중이셔서 드셨을 리가 없다고 생각했다.", py: "Eomeonineun daieoteu jung-isyeoseo deusyeosseul riga eopdago saenggakaetda.", nl: "Mijn moeder is aan het lijnen, dus ik dacht dat zij hem onmogelijk gegeten kon hebben." },
      { cn: "그렇다면 고양이가 냉장고를 열었을까?", py: "Geureotamyeon goyang-iga naengjanggoreul yeoreosseulkka?", nl: "Zou de kat dan de koelkast hebben opengedaan?" },
      { cn: "하지만 고양이가 냉장고 문을 열 수 있을 리가 없다.", py: "Hajiman goyang-iga naengjanggo muneul yeol su isseul riga eopda.", nl: "Maar een kat kan onmogelijk de deur van een koelkast opendoen." },
      { cn: "그때 아버지가 웃으면서 말씀하셨다. \"미안, 내가 먹었어.\"", py: "Geuttae abeojiga useumyeonseo malsseumhasyeotda. \"Mian, naega meogeosseo.\"", nl: "Toen zei mijn vader lachend: \"Sorry, ik heb hem opgegeten.\"" },
      { cn: "아버지가 범인일 줄은 아무도 몰랐다.", py: "Abeojiga beominil jureun amudo mollatda.", nl: "Niemand had gedacht dat mijn vader de dader was." }
    ],
    questions: [
      { type: "mc", q: "Waarom kon de jongere broer de taart niet opgegeten hebben?",
        options: ["Hij houdt niet van zoetigheid.", "Hij was aan het lijnen.", "Hij was niet thuis.", "Hij kan de koelkast niet openen."], answer: 0,
        why: ["Goed: 동생은 단 것을 싫어하니까.", "Dat geldt voor de moeder: 다이어트 중이셔서.", "Dat staat niet in de tekst.", "Dat geldt voor de kat."] },
      { type: "mc", q: "Wie heeft de taart opgegeten?",
        options: ["De vader.", "De moeder.", "De kat.", "De schrijver zelf."], answer: 0,
        why: ["Goed: 아버지가 \"미안, 내가 먹었어\" 하고 말씀하셨다.", "De moeder was aan het lijnen.", "Een kat kan de koelkast niet openen.", "De schrijver zocht juist de dader."] },
      { type: "mc", q: "고양이가 냉장고 문을 열 수 있을 리가 없다. Wat betekent dit?",
        options: ["Het is uitgesloten dat een kat de koelkastdeur kan openen.", "Een kat kan de koelkastdeur misschien openen.", "Een kat wil de koelkastdeur niet openen.", "Een kat heeft de koelkastdeur gisteren geopend."], answer: 0,
        why: ["Goed: 수 있다 (kunnen) + 리가 없다 (onmogelijk): het is uitgesloten dat hij het kan.", "\"Misschien\" is -(으)ㄹ지도 모르다. 리가 없다 sluit het uit.", "Over willen staat niets in de zin.", "De zin sluit het juist uit."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Hij kan dat onmogelijk weten.\" Welke zin klopt?",
      options: ["그가 그걸 알 리가 없어요.", "그가 그걸 알을 리가 없어요.", "그가 그걸 아는 리가 없어요.", "그가 그걸 알 리가 않아요."], answer: 0,
      why: ["Goed: 알다 eindigt op ㄹ, dus alleen 알 + 리가 없다.", "Een stam op ㄹ krijgt geen extra 을: 알 리가.", "Vóór 리 staat de (으)ㄹ-vorm, niet -는.", "Na 리가 komt 없다, niet 않다."] },
    { type: "mc", q: "민호는 어제 서울에 있었어요. 어제 부산에 ___ 리가 없어요.",
      options: ["갔을", "갈", "가는", "간"], answer: 0,
      why: ["Goed: het gaat over gisteren, dus -았을 리가 없다.", "갈 리가 없다 gaat over nu of later, niet over gisteren.", "Vóór 리 staat de (으)ㄹ-vorm, niet -는.", "Vóór 리 staat de (으)ㄹ-vorm. Voor het verleden: 갔을."] },
    { type: "mc", q: "\"Die man kan onmogelijk een leraar zijn.\" Welke zin klopt?",
      options: ["그 남자가 선생님일 리가 없어요.", "그 남자가 선생님인 리가 없어요.", "그 남자가 선생님을 리가 없어요.", "그 남자가 선생님이을 리가 없어요."], answer: 0,
      why: ["Goed: 이다 wordt 일 리가 없다.", "Vóór 리 staat de (으)ㄹ-vorm: 일, niet 인.", "을 is hier een lijdend-voorwerppartikel. Je hebt 이다 nodig: 일.", "이다 heeft geen 받침, dus geen 을: 일."] },
    { type: "order", q: "Zet in de goede volgorde: \"Die winkel kan onmogelijk al dicht zijn.\"",
      tokens: [["그 가게가", "geu gagega"], ["벌써 문을", "beolsseo muneul"], ["닫았을", "dadasseul"], ["리가", "riga"], ["없어요", "eopseoyo"]] },
    { type: "open", q: "Vertaal: \"Dat kan niet! Ze is onmogelijk al vertrokken.\"",
      model: ["그럴 리가 없어요! 벌써 떠났을 리가 없어요.", "그럴 리가 없어! 벌써 갔을 리가 없어.", "그럴 리가 없어요! 그녀가 벌써 출발했을 리가 없어요."],
      tip: "Check: gebruik je voor het verleden -았/었을 리가 없다, en staat 리가 los?" },
    { type: "mc", q: "다리를 다쳐서 걸을 ___. (Ik heb mijn been bezeerd, dus ik kan niet lopen.)",
      options: ["수 없어요", "리가 없어요", "리가 있어요", "수가 않아요"], answer: 0,
      why: ["Goed: het gaat over niet in staat zijn. Dat is -(으)ㄹ 수 없다.", "리가 없다 is een oordeel over iets anders, niet over je eigen vermogen nu.", "리가 있어요 als vraag betekent \"dat kan toch niet?\". Dat past hier niet.", "Na 수(가) komt 없다, niet 않다."] },
    { type: "mc", q: "A: 지민 씨가 시험에 떨어졌대요. B: 그럴 리가 있어요? Wat bedoelt B?",
      options: ["Dat kan toch niet.", "Is dat echt mogelijk? Vertel meer.", "Dat had ik wel verwacht.", "Dat kan best gebeuren."], answer: 0,
      why: ["Goed: 그럴 리가 있어요? is geen echte vraag. Het betekent: dat kan niet.", "B vraagt niet om uitleg. Het is een retorische vraag.", "B gelooft het juist niet.", "B zegt het tegenovergestelde: het kan niet."] },
    { type: "mc", q: "Welke vorm past het best in een formeel krantenartikel?",
      options: ["그런 정책이 성공할 리 만무하다.", "그런 정책이 성공할 리가 있어?", "그런 정책이 성공할 리가요!", "그런 정책이 성공할 리 없어."], answer: 0,
      why: ["Goed: -(으)ㄹ 리 만무하다 is schrijftaal en past in een formele tekst.", "Een vraag met 있어 is spreektaal, en -어 is informeel.", "그럴 리가요 is een korte reactie in een gesprek.", "Het informele -어 past niet in een krant. Schrijf 없다."] },
    { type: "order", q: "Zet in de goede volgorde: \"Die trein kan onmogelijk al vertrokken zijn.\"",
      tokens: [["그 기차가 벌써", "geu gichaga beolsseo"], ["출발했을", "chulbalhaesseul"], ["리가", "riga"], ["없어요", "eopseoyo"]] },
    { type: "fill", q: "이렇게 쉬운 문제를 그가 ___ 리가 없어요. (Hij kan zo'n makkelijke vraag onmogelijk fout hebben gehad.)",
      answers: ["틀렸을"], hint: "틀리다 = fout hebben. Het gaat over het verleden.",
      why: "Verleden + 을 리가 없다: 틀리다 wordt 틀렸을 리가 없다." },
    { type: "open", q: "Vertaal: \"Het licht is uit. Hij kan onmogelijk thuis zijn.\"",
      model: ["불이 꺼져 있어요. 그가 집에 있을 리가 없어요.", "불이 꺼졌어요. 그 사람이 집에 있을 리가 없어요."],
      tip: "Check: 있다 heeft een 받침, dus 있을 리가 없다. Staat 리가 los?" }
  ],
  review: [
    { type: "mc", q: "\"Deze schoenen kunnen onmogelijk zo duur zijn.\"",
      options: ["이 신발이 그렇게 비쌀 리가 없어요.", "이 신발이 그렇게 비싼 리가 없어요.", "이 신발이 그렇게 비싸을 리가 없어요.", "이 신발이 그렇게 비쌀 리가 아니에요."], answer: 0,
      why: ["Goed: 비싸다 eindigt op een klinker, dus 비쌀 리가 없다.", "Vóór 리 staat de (으)ㄹ-vorm, niet -ㄴ.", "Na een klinker komt alleen ㄹ, geen 을: 비쌀.", "Na 리가 komt 없다, niet 아니다."] },
    { type: "mc", q: "수진 씨는 고기를 안 먹어요. 불고기를 ___ 리가 없어요. (Ze kan onmogelijk bulgogi gegeten hebben.)",
      options: ["먹었을", "먹었는", "먹은", "먹었던"], answer: 0,
      why: ["Goed: verleden + 을 리가 없다.", "Vóór 리 staat -을, niet -는.", "Vóór 리 staat de (으)ㄹ-vorm. Voor het verleden: 먹었을.", "-던 past niet vóór 리. Je hebt 먹었을 nodig."] },
    { type: "mc", q: "그 식당은 항상 손님이 많아요. 오늘만 ___ 리가 없어요. (Het kan onmogelijk alleen vandaag rustig zijn.)",
      options: ["한가할", "한가한", "한가하을", "한가하는"], answer: 0,
      why: ["Goed: 한가하다 eindigt op een klinker, dus 한가할 리가 없다.", "Vóór 리 staat de (으)ㄹ-vorm, niet -ㄴ.", "Na een klinker komt alleen ㄹ, geen 을.", "Vóór 리 staat de (으)ㄹ-vorm, niet -는."] }
  ]
})
