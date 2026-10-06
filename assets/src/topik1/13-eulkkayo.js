({
  id: "13", slug: "eulkkayo", title: "-(으)ㄹ까요?", sub: "Zullen we ...? Zal ik ...?",
  canDo: "Je kunt nu iets voorstellen, hulp aanbieden en iemands mening vragen met -(으)ㄹ까요?, en daarop antwoorden.",
  guess: {
    q: "Je wilt aan een vriend vragen: \"Zullen we samen eten?\" Welke zin klopt, denk je?",
    options: ["같이 먹을까요?", "같이 먹까요?", "같이 먹어까요?", "같이 먹었을까요?"], answer: 0,
    why: ["Goed: 먹 eindigt op een 받침, dus 을까요.", "Na een 받침 komt 을까요, niet 까요.", "까요 komt aan de kale stam, niet aan de 해요-vorm.", "먹었을까요 vraagt of iemand al gegeten heeft (denk je dat ...?). Dat is geen voorstel."]
  },
  problem: "In het Nederlands stel je iets voor met \"zullen we ...?\" en bied je iets aan met \"zal ik ...?\". Het Koreaans gebruikt voor allebei één uitgang: -(으)ㄹ까요?. Het onderwerp maakt het verschil: 우리 (wij) of 제가 (ik). Over het weer of over anderen betekent het: \"denk je dat ...?\".",
  pattern: [
    { l: "wie", v: "우리", c: 1 }, { l: "samen", v: "같이", c: 3 }, { l: "wat", v: "영화", c: 4 }, { l: "stam + (으)ㄹ까요?", v: "볼까요?", c: 2, key: true }
  ],
  patternCap: "Stam + (으)ㄹ까요? (gaan: 갈까요? · eten: 먹을까요? · maken: 만들까요?) · antwoord: 가요 / 갑시다 / 하세요",
  rules: [
    "Eindigt de stam op een klinker? Dan plak je ㄹ까요: 갈까요, 볼까요, 할까요.",
    "Eindigt de stam op een 받침? Dan plak je 을까요: 먹을까요, 읽을까요, 앉을까요.",
    "Eindigt de stam op ㄹ? Dan plak je alleen 까요: 만들까요, 열까요, 놀까요. Let ook op: 걷다 → 걸을까요, 춥다 → 추울까요.",
    "Antwoord op \"zullen we\": -아요/어요 (같이 가요) of -(으)ㅂ시다 (갑시다, 먹읍시다). Antwoord op \"zal ik\": -(으)세요 (하세요, 앉으세요) of 아니요, 괜찮아요.",
    "Gaat het over het weer of over iemand anders? Dan vraag je naar een mening: 내일 비가 올까요? Een antwoord is 네, 올 거예요."
  ],
  pitfall: "Antwoord niet met dezelfde -(으)ㄹ까요-vorm. Op 제가 전화할까요? zeg je 네, 전화하세요, niet 네, 전화할까요.",
  examples: [
    { cn: "우리 같이 영화 볼까요?", py: "Uri gachi yeonghwa bolkkayo?", nl: "Zullen we samen een film kijken?" },
    { cn: "제가 창문을 열까요?", py: "Jega changmuneul yeolkkayo?", nl: "Zal ik het raam openzetten?" },
    { cn: "내일 비가 올까요?", py: "Naeil biga olkkayo?", nl: "Denk je dat het morgen gaat regenen?" },
    { cn: "점심에 뭐 먹을까요?", py: "Jeomsime mwo meogeulkkayo?", nl: "Wat zullen we als lunch eten?" }
  ],
  nuance: [
    { h: "Drie betekenissen: het onderwerp beslist",
      p: "Met 우리 of 같이 is het een voorstel: zullen we ...? Met 제가 bied je iets aan: zal ik ...? Gaat het over iemand anders of over het weer, dan vraag je wat de ander denkt. Het onderwerp mag wegvallen. Dan bepaalt de situatie de betekenis.",
      ex: [
        { cn: "제가 할까요?", py: "Jega halkkayo?", nl: "Zal ik het doen?" },
        { cn: "우리 같이 할까요?", py: "Uri gachi halkkayo?", nl: "Zullen we het samen doen?" },
        { cn: "민수 씨가 올까요?", py: "Minsu ssiga olkkayo?", nl: "Denk je dat Minsu komt?" }
      ] },
    { h: "-(으)ㅂ시다 is direct",
      p: "-(으)ㅂ시다 betekent \"laten we ...\". Het klinkt beslist, een beetje als een leider die de groep meeneemt. Tegen een vriend of een collega van je leeftijd is het prima. Tegen een leraar, een baas of een ouder iemand klinkt het onbeleefd. Gebruik dan 같이 가요.",
      ex: [
        { cn: "좋아요. 갑시다!", py: "Joayo. Gapsida!", nl: "Goed. Laten we gaan! (tegen een vriend)" },
        { cn: "선생님, 같이 가요.", py: "Seonsaengnim, gachi gayo.", nl: "Meester, laten we samen gaan." }
      ] },
    { h: "-(으)ㄹ까요? of -고 싶어요?",
      p: "Met 뭐 먹을까요? beslis je samen: wat zullen we eten? Met 뭐 먹고 싶어요? vraag je alleen wat de ander wil. In een restaurant met vrienden hoor je vaak de eerste vorm. Bij de dokter of in een interview hoor je eerder de tweede.",
      ex: [
        { cn: "뭐 먹을까요?", py: "Mwo meogeulkkayo?", nl: "Wat zullen we eten?" },
        { cn: "뭐 먹고 싶어요?", py: "Mwo meokgo sipeoyo?", nl: "Wat wil je eten?" }
      ] }
  ],
  mistakes: [
    { wrong: "제가 문을 열을까요?", right: "제가 문을 열까요?", why: "Een stam op ㄹ krijgt alleen 까요: 열까요." },
    { wrong: "A: 제가 전화할까요? B: 네, 전화할까요.", right: "A: 제가 전화할까요? B: 네, 전화하세요.", why: "Op \"zal ik\" antwoord je met -(으)세요, niet met dezelfde vraagvorm." },
    { wrong: "내일 더을까요?", right: "내일 더울까요?", why: "덥다 is onregelmatig: ㅂ wordt 우 voor een klinker. Dus 더울까요." },
    { wrong: "선생님, 같이 갑시다.", right: "선생님, 같이 가요.", why: "-(으)ㅂ시다 klinkt te direct tegen een leraar. Gebruik 같이 가요." }
  ],
  vocab: [
    ["-(으)ㄹ까요?", "-(eu)lkkayo?", "zullen we ...? / zal ik ...? / denk je dat ...?"], ["-(으)ㅂ시다", "-(eu)psida", "laten we ..."], ["같이", "gachi", "samen"],
    ["창문", "changmun", "raam"], ["열다", "yeolda", "openen"], ["날씨", "nalssi", "weer"], ["비가 오다", "biga oda", "regenen"],
    ["등산하다", "deungsanhada", "bergwandelen"], ["표", "pyo", "kaartje"], ["만나다", "mannada", "(af)spreken, ontmoeten"]
  ],
  dialogue: [
    ["A", "주말에 같이 영화 볼까요?", "Jumare gachi yeonghwa bolkkayo?", "Zullen we dit weekend samen een film kijken?"],
    ["B", "좋아요. 무슨 영화를 볼까요?", "Joayo. Museun yeonghwareul bolkkayo?", "Goed. Welke film zullen we kijken?"],
    ["A", "한국 영화를 봐요.", "Hanguk yeonghwareul bwayo.", "Laten we een Koreaanse film kijken."],
    ["B", "그래요. 제가 표를 살까요?", "Geuraeyo. Jega pyoreul salkkayo?", "Prima. Zal ik de kaartjes kopen?"],
    ["A", "네, 사 주세요. 몇 시에 만날까요?", "Ne, sa juseyo. Myeot sie mannalkkayo?", "Ja, graag. Hoe laat zullen we afspreken?"],
    ["B", "일곱 시에 영화관 앞에서 만나요.", "Ilgop sie yeonghwagwan apeseo mannayo.", "Laten we om zeven uur voor de bioscoop afspreken."]
  ],
  reading: {
    title: "문자 메시지",
    lines: [
      { cn: "지나: 민수 씨, 토요일에 같이 등산할까요?", py: "Jina: Minsu ssi, toyoire gachi deungsanhalkkayo?", nl: "Jina: Minsu, zullen we zaterdag samen gaan bergwandelen?" },
      { cn: "민수: 좋아요. 그런데 토요일에 비가 올까요?", py: "Minsu: Joayo. Geureonde toyoire biga olkkayo?", nl: "Minsu: Goed. Maar denk je dat het zaterdag regent?" },
      { cn: "지나: 아니요, 날씨가 좋을 거예요.", py: "Jina: Aniyo, nalssiga joeul geoyeyo.", nl: "Jina: Nee, het weer wordt vast mooi." },
      { cn: "민수: 그럼 몇 시에 만날까요?", py: "Minsu: Geureom myeot sie mannalkkayo?", nl: "Minsu: Hoe laat zullen we dan afspreken?" },
      { cn: "지나: 아침 아홉 시에 만납시다.", py: "Jina: Achim ahop sie mannapsida.", nl: "Jina: Laten we om negen uur 's ochtends afspreken." },
      { cn: "민수: 어디에서 만날까요?", py: "Minsu: Eodieseo mannalkkayo?", nl: "Minsu: Waar zullen we afspreken?" },
      { cn: "지나: 지하철역 앞에서 만나요.", py: "Jina: Jihacheollyeok apeseo mannayo.", nl: "Jina: Laten we voor het metrostation afspreken." },
      { cn: "민수: 제가 김밥을 살까요?", py: "Minsu: Jega gimbabeul salkkayo?", nl: "Minsu: Zal ik kimbap kopen?" },
      { cn: "지나: 네, 사세요. 저는 물을 사요.", py: "Jina: Ne, saseyo. Jeoneun mureul sayo.", nl: "Jina: Ja, doe maar. Ik koop water." }
    ],
    questions: [
      { type: "mc", q: "Waar en wanneer spreken Jina en Minsu af?",
        options: ["Om negen uur 's ochtends voor het metrostation.", "Om negen uur 's avonds voor het metrostation.", "Om negen uur 's ochtends op de berg.", "Om zeven uur 's ochtends voor het metrostation."], answer: 0,
        why: ["Goed: 아침 아홉 시 ... 지하철역 앞에서.", "Er staat 아침: 's ochtends.", "Ze spreken af bij het metrostation, niet op de berg.", "아홉 is negen, niet zeven (일곱)."] },
      { type: "mc", q: "Wie koopt de kimbap?",
        options: ["Minsu.", "Jina.", "Allebei.", "Niemand."], answer: 0,
        why: ["Goed: Minsu biedt het aan (제가 ... 살까요?) en Jina zegt 네, 사세요.", "Jina koopt water, geen kimbap.", "Ze verdelen het: Minsu de kimbap, Jina het water.", "Jina zegt ja op het aanbod van Minsu."] },
      { type: "mc", q: "토요일에 비가 올까요? Wat vraagt Minsu hier?",
        options: ["Wat Jina denkt: gaat het zaterdag regenen?", "Of ze samen in de regen gaan lopen.", "Of hij de regen moet tegenhouden.", "Of het zaterdag geregend heeft."], answer: 0,
        why: ["Goed: over het weer betekent -(으)ㄹ까요? \"denk je dat ...?\".", "Er staat geen 우리 of 같이. Het weer is het onderwerp.", "Er staat geen 제가. Het is geen aanbod.", "Het gaat over komende zaterdag, niet over het verleden."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Zullen we samen een taart maken?\" 같이 케이크를 ___? (만들다)",
      options: ["만들까요", "만들을까요", "만드까요", "만들어까요"], answer: 0,
      why: ["Goed: een stam op ㄹ krijgt alleen 까요.", "Na ㄹ komt geen 을.", "De ㄹ blijft staan: 만들까요.", "까요 komt aan de kale stam, niet aan de 해요-vorm."] },
    { type: "mc", q: "Wat betekent 제가 할까요?",
      options: ["Zal ik het doen?", "Doe jij het?", "Heb ik het gedaan?", "Wil ik het doen?"], answer: 0,
      why: ["Goed: 제가 + -(으)ㄹ까요? = zal ik ...?", "제가 is \"ik\", niet \"jij\".", "Er staat geen verleden tijd.", "Willen is -고 싶어요."] },
    { type: "mc", q: "A: 제가 전화할까요? Welk antwoord klopt?",
      options: ["네, 전화하세요.", "네, 전화할까요.", "네, 전화합시다.", "네, 전화했어요."], answer: 0,
      why: ["Goed: op \"zal ik\" antwoord je met -(으)세요.", "Je herhaalt de vraagvorm niet in het antwoord.", "-(으)ㅂ시다 is \"laten we\". A bood aan om het alleen te doen.", "A vraagt iets voor straks. \"Ik heb gebeld\" past niet."] },
    { type: "mc", q: "Je vriend vraagt: 같이 점심 먹을까요? Je wilt ja zeggen. Welk antwoord klopt?",
      options: ["네, 같이 먹어요.", "네, 먹으세요.", "네, 먹을까요.", "네, 먹었어요."], answer: 0,
      why: ["Goed: op \"zullen we\" antwoord je met -아요/어요 of -(으)ㅂ시다.", "먹으세요 is \"eet u maar\". Dan eet je niet samen.", "Je herhaalt de vraagvorm niet in het antwoord.", "\"Ik heb al gegeten\" is geen ja op het voorstel."] },
    { type: "mc", q: "Je stelt je leraar voor om samen te gaan. Welke zin is het beste?",
      options: ["선생님, 같이 가요.", "선생님, 같이 갑시다.", "선생님, 같이 가세요.", "선생님, 같이 갔어요."], answer: 0,
      why: ["Goed: 같이 가요 is beleefd en vriendelijk.", "-(으)ㅂ시다 klinkt te direct tegen een leraar.", "가세요 is een verzoek aan de ander: \"gaat u\". Dan ga je niet zelf mee.", "갔어요 is verleden tijd, geen voorstel."] },
    { type: "mc", q: "\"Denk je dat het morgen koud is?\" 내일 날씨가 ___? (춥다)",
      options: ["추울까요", "춥을까요", "춥까요", "추워까요"], answer: 0,
      why: ["Goed: 춥다 is onregelmatig: ㅂ wordt 우, dan ㄹ까요.", "Bij 춥다 wordt ㅂ een 우 voor een klinker.", "춥 heeft een 받침. Je kunt niet direct 까요 plakken.", "까요 komt niet aan de 해요-vorm 추워."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["같이 놀을까요?", "같이 걸을까요?", "같이 놀까요?", "같이 먹을까요?"], answer: 0,
      why: ["Goed: deze is fout. 놀다 heeft een stam op ㄹ: 놀까요.", "Deze klopt: 걷다 wordt 걸을까요.", "Deze klopt: stam op ㄹ + 까요.", "Deze klopt: 받침 + 을까요."] },
    { type: "fill", q: "우리 몇 시에 ___? (Hoe laat zullen we afspreken? 만나다)", answers: ["만날까요", "만날까요?"],
      hint: "만나 eindigt op een klinker.", why: "Stam op een klinker + ㄹ까요: 만날까요?" },
    { type: "order", q: "Zet in de goede volgorde: \"Zullen we samen koffie drinken?\"",
      tokens: [["우리", "uri"], ["같이", "gachi"], ["커피", "keopi"], ["마실까요?", "masilkkayo?"]],
      alt: ["우리 커피 같이 마실까요?"] },
    { type: "order", q: "Zet in de goede volgorde: \"Denk je dat het morgen veel gaat regenen?\"",
      tokens: [["내일", "naeil"], ["비가", "biga"], ["많이", "mani"], ["올까요?", "olkkayo?"]] },
    { type: "open", q: "Vertaal: \"Zullen we zaterdag samen een film kijken?\"", model: ["토요일에 같이 영화 볼까요?", "우리 토요일에 같이 영화를 볼까요?"],
      tip: "Check: 보 eindigt op een klinker, dus 볼까요? Met 같이 of 우리 is het een voorstel." },
    { type: "open", q: "Vertaal: \"Zal ik het raam dichtdoen?\" (닫다 = dichtdoen)", model: ["제가 창문을 닫을까요?", "창문을 닫을까요?"],
      tip: "Check: 닫 heeft een 받침, dus 을까요. 제가 maakt duidelijk dat het een aanbod is." }
  ],
  review: [
    { type: "mc", q: "\"Zullen we samen een foto maken?\" 같이 사진을 ___? (찍다)",
      options: ["찍을까요", "찍까요", "찍어까요", "찍었을까요"], answer: 0,
      why: ["Goed: 찍 heeft een 받침, dus 을까요.", "Na een 받침 komt 을까요.", "까요 komt aan de kale stam, niet aan de 해요-vorm.", "찍었을까요 vraagt of iemand al een foto heeft gemaakt. Dat is geen voorstel."] },
    { type: "mc", q: "A: 제가 청소할까요? (Zal ik schoonmaken?) Je zegt ja. B: ___",
      options: ["네, 청소하세요.", "네, 청소할까요.", "네, 청소했어요.", "네, 청소하고 싶어요."], answer: 0,
      why: ["Goed: op \"zal ik\" antwoord je met -(으)세요.", "Je herhaalt de vraagvorm niet in het antwoord.", "\"Ik heb schoongemaakt\" is geen antwoord op het aanbod.", "\"Ik wil schoonmaken\" zegt iets over jezelf, niet over A."] },
    { type: "mc", q: "\"Denk je dat het dit weekend warm is?\" 주말에 날씨가 ___? (덥다)",
      options: ["더울까요", "덥을까요", "더을까요", "더워까요"], answer: 0,
      why: ["Goed: bij 덥다 wordt ㅂ een 우: 더울까요.", "Bij 덥다 wordt ㅂ een 우 voor een klinker.", "De ㅂ wordt 우, niet 으.", "까요 komt niet aan de 해요-vorm 더워."] }
  ]
})
