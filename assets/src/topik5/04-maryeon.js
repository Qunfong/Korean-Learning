({
  id: "04", slug: "maryeon", title: "-기 마련이다", sub: "Dat gebeurt nu eenmaal",
  canDo: "Je kunt nu zeggen dat iets vanzelf of altijd zo gaat, met -기 마련이다.",
  guess: {
    q: "사람은 누구나 실수하기 마련이에요. Wat betekent dit, denk je?",
    options: ["Iedereen maakt nu eenmaal fouten.", "Iedereen moet fouten maken.", "Iedereen probeert fouten te maken.", "Iedereen heeft vandaag een fout gemaakt."], answer: 0,
    why: [
      "Goed: -기 마련이다 zegt dat iets vanzelf en altijd zo gaat.",
      "Het is geen plicht. \"Moeten\" is -아/어야 하다.",
      "Het gaat niet om een poging of een wens.",
      "Het gaat om een algemene waarheid, niet om vandaag."
    ]
  },
  problem: "Sommige dingen gaan altijd zo. In het Nederlands zeg je \"nu eenmaal\" of \"dat is normaal\". In het Koreaans zeg je -기 마련이다. Je zegt daarmee: dit is een algemene waarheid, het gebeurt vanzelf.",
  pattern: [
    { l: "situatie", v: "시간이 지나면", c: 3 }, { l: "stam", v: "잊", c: 4 },
    { l: "-기 마련이다", v: "기 마련이에요", c: 2, key: true }
  ],
  patternCap: "Stam + 기 마련이다 (ook: -게 마련이다) · 가기 마련이다 · 먹기 마련이다 · 비싸기 마련이다",
  rules: [
    "-기 마련이다 komt direct na de stam. Klinker of 받침 maakt niet uit: 가기, 먹기.",
    "Het werkt met werkwoorden en bijvoeglijke werkwoorden: 비싸기 마련이다.",
    "Er komt geen verleden vóór -기: niet 갔기 마련이다. Het gaat over wat altijd geldt.",
    "Vaak staat er een voorwaarde voor: -(으)면 ... -기 마련이다. Het is vrij formeel. In spreektaal zeg je ook -게 돼 있어요."
  ],
  pitfall: "Gebruik -기 마련이다 niet voor een eigen plan of één voorval. 내일 비가 오기 마련이에요 is fout. Zeg dan: 내일 비가 올 거예요.",
  examples: [
    { cn: "사람은 누구나 실수하기 마련이에요.", py: "Sarameun nuguna silsuhagi maryeonieyo.", nl: "Iedereen maakt nu eenmaal fouten." },
    { cn: "시간이 지나면 잊기 마련이에요.", py: "Sigani jinamyeon itgi maryeonieyo.", nl: "Na een tijdje vergeet je het nu eenmaal." },
    { cn: "처음에는 누구나 긴장하기 마련이다.", py: "Cheoeumeneun nuguna ginjanghagi maryeonida.", nl: "In het begin is iedereen nu eenmaal zenuwachtig." },
    { cn: "좋은 물건은 비싸기 마련이에요.", py: "Joeun mulgeoneun bissagi maryeonieyo.", nl: "Goede spullen zijn nu eenmaal duur." }
  ],
  nuance: [
    { h: "-기 마련이다 of -는 법이다?",
      p: "Beide zeggen dat iets altijd zo gaat. -기 마련이다 legt de nadruk op wat vanzelf gebeurt: een natuurlijk gevolg. -는 법이다 klinkt als een vaste regel of levensles, vaak uit een spreekwoord. Let op de vorm: 마련 na -기, 법 na -는 of -(으)ㄴ.",
      ex: [
        { cn: "시간이 지나면 잊기 마련이다.", py: "Sigani jinamyeon itgi maryeonida.", nl: "Na verloop van tijd vergeet je het nu eenmaal." },
        { cn: "노력은 배신하지 않는 법이다.", py: "Noryeogeun baesinhaji anneun beobida.", nl: "Moeite loont altijd. (letterlijk: inspanning verraadt je niet)" },
        { cn: "좋은 약은 입에 쓴 법이다.", py: "Joeun yageun ibe sseun beobida.", nl: "Goede medicijnen smaken nu eenmaal bitter." }
      ] },
    { h: "Varianten: -게 마련이다 en -게 돼 있다",
      p: "-게 마련이다 betekent precies hetzelfde als -기 마련이다. In spreektaal hoor je vaak -게 돼 있다: het gaat vanzelf zo. Dat klinkt losser.",
      ex: [
        { cn: "비밀은 언젠가 알려지게 마련이다.", py: "Bimireun eonjenga allyeojige maryeonida.", nl: "Een geheim komt nu eenmaal ooit uit." },
        { cn: "걱정 마. 다 잘되게 돼 있어.", py: "Geokjeong ma. Da jaldoege dwae isseo.", nl: "Maak je geen zorgen. Het komt vanzelf goed." }
      ] },
    { h: "Troosten in een gesprek",
      p: "Je hoort -기 마련이다 vaak als je iemand troost. Je zegt: wat jou overkomt, is normaal. Dan is de stijl beleefd met -이에요 of los met -이야. In teksten staat -기 마련이다.",
      ex: [
        { cn: "처음엔 다 그렇기 마련이야. 너무 걱정하지 마.", py: "Cheoeumen da geureoki maryeoniya. Neomu geokjeonghaji ma.", nl: "In het begin is het voor iedereen zo. Maak je niet te veel zorgen." }
      ] }
  ],
  mistakes: [
    { wrong: "내일은 비가 오기 마련이에요.", right: "내일은 비가 올 거예요.", why: "Regen morgen is één voorval, geen algemene waarheid. Gebruik -(으)ㄹ 거예요." },
    { wrong: "노력하면 성공하는 마련이에요.", right: "노력하면 성공하기 마련이에요.", why: "Vóór 마련이다 staat altijd -기 (of -게), niet -는." },
    { wrong: "시간이 지나면 잊었기 마련이에요.", right: "시간이 지나면 잊기 마련이에요.", why: "Een algemene waarheid krijgt geen verleden vóór -기." },
    { wrong: "사람은 누구나 실수하기 법이에요.", right: "사람은 누구나 실수하는 법이에요.", why: "법이다 komt na -는 (werkwoord). -기 hoort bij 마련이다." }
  ],
  vocab: [
    ["-기 마련이다", "-gi maryeonida", "nu eenmaal (zo gaan)"], ["실수하다", "silsuhada", "een fout maken"],
    ["긴장하다", "ginjanghada", "zenuwachtig zijn"], ["떨리다", "tteollida", "trillen, zenuwachtig zijn"],
    ["품질", "pumjil", "kwaliteit"], ["고장 나다", "gojang nada", "kapotgaan"],
    ["실패", "silpae", "mislukking"], ["자신감", "jasingam", "zelfvertrouwen"],
    ["성장하다", "seongjanghada", "groeien, zich ontwikkelen"], ["도전하다", "dojeonhada", "een uitdaging aangaan"]
  ],
  dialogue: [
    ["A", "발표할 때 너무 떨렸어요.", "Balpyohal ttae neomu tteollyeosseoyo.", "Ik was erg zenuwachtig bij mijn presentatie."],
    ["B", "처음에는 누구나 떨리기 마련이에요.", "Cheoeumeneun nuguna tteolligi maryeonieyo.", "In het begin is iedereen nu eenmaal zenuwachtig."],
    ["A", "말도 몇 번 틀렸어요.", "Maldo myeot beon teullyeosseoyo.", "Ik heb me ook een paar keer vergist."],
    ["B", "사람은 실수하기 마련이에요. 다음에는 더 잘할 거예요.", "Sarameun silsuhagi maryeonieyo. Daeumeneun deo jalhal geoyeyo.", "Mensen maken nu eenmaal fouten. Volgende keer gaat het beter."],
    ["A", "고마워요. 연습을 더 해야겠어요.", "Gomawoyo. Yeonseubeul deo haeyagesseoyo.", "Dank je. Ik moet meer oefenen."]
  ],
  reading: {
    title: "실패에 대하여",
    lines: [
      { cn: "새로운 일을 시작하면 누구나 실패를 경험하기 마련이다.", py: "Saeroun ireul sijakamyeon nuguna silpaereul gyeongheomhagi maryeonida.", nl: "Wie iets nieuws begint, maakt nu eenmaal mislukkingen mee." },
      { cn: "처음부터 모든 것을 잘하는 사람은 없다.", py: "Cheoeumbuteo modeun geoseul jalhaneun sarameun eopda.", nl: "Niemand kan vanaf het begin alles goed." },
      { cn: "그런데 실패를 하면 자신감이 떨어지기 마련이다.", py: "Geureonde silpaereul hamyeon jasingami tteoreojigi maryeonida.", nl: "Maar na een mislukking daalt je zelfvertrouwen nu eenmaal." },
      { cn: "어떤 사람은 그때 포기하고, 어떤 사람은 다시 도전한다.", py: "Eotteon sarameun geuttae pogihago, eotteon sarameun dasi dojeonhanda.", nl: "Sommige mensen geven dan op, anderen proberen het opnieuw." },
      { cn: "실패에서 배우는 사람은 결국 성장하기 마련이다.", py: "Silpaeeseo baeuneun sarameun gyeolguk seongjanghagi maryeonida.", nl: "Wie van mislukkingen leert, groeit uiteindelijk nu eenmaal." },
      { cn: "옛말에 \"실패는 성공의 어머니\"라는 말이 있다.", py: "Yenmare \"silpaeneun seonggong-ui eomeoni\"raneun mari itda.", nl: "Er is een oud gezegde: \"Mislukking is de moeder van succes.\"" },
      { cn: "노력은 배신하지 않는 법이다.", py: "Noryeogeun baesinhaji anneun beobida.", nl: "Moeite loont altijd." },
      { cn: "그러니 실패를 너무 두려워하지 말자.", py: "Geureoni silpaereul neomu duryeowohaji malja.", nl: "Laten we dus niet te bang zijn voor mislukking." }
    ],
    questions: [
      { type: "mc", q: "Wat gebeurt er volgens de tekst na een mislukking?",
        options: ["Je zelfvertrouwen daalt.", "Je wordt meteen beter.", "Je geeft altijd op.", "Je krijgt meer zelfvertrouwen."], answer: 0,
        why: ["Goed: 실패를 하면 자신감이 떨어지기 마련이다.", "Groeien gebeurt pas als je ervan leert, en uiteindelijk.", "Sommige mensen geven op, anderen niet.", "Het zelfvertrouwen daalt juist."] },
      { type: "mc", q: "Wat is de boodschap van de tekst?",
        options: ["Wees niet te bang voor mislukking.", "Begin nooit iets nieuws.", "Alleen mensen met talent slagen.", "Geef op als het mislukt."], answer: 0,
        why: ["Goed: 실패를 너무 두려워하지 말자.", "De tekst zegt dat mislukken normaal is, niet dat je niets nieuws moet beginnen.", "Over talent staat niets in de tekst.", "De tekst zegt het tegenovergestelde: leer ervan en probeer opnieuw."] },
      { type: "mc", q: "실패에서 배우는 사람은 결국 성장하기 마련이다. Wat zegt -기 마련이다 hier?",
        options: ["Dat groeien een natuurlijk gevolg is.", "Dat je moet groeien.", "Dat groeien misschien gebeurt.", "Dat iemand gisteren gegroeid is."], answer: 0,
        why: ["Goed: -기 마련이다 = het gaat nu eenmaal zo.", "\"Moeten\" is -아/어야 하다.", "\"Misschien\" is -(으)ㄹ지도 모르다. 마련이다 is zekerder.", "Het gaat om een algemene waarheid, niet om gisteren."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Wie hard werkt, slaagt nu eenmaal.\" Welke zin klopt?",
      options: ["열심히 노력하면 성공하기 마련이에요.", "열심히 노력하면 성공하는 마련이에요.", "열심히 노력하면 성공할 마련이에요.", "열심히 노력하면 성공했기 마련이에요."], answer: 0,
      why: ["Goed: stam + 기 마련이다.", "Vóór 마련이다 staat -기, niet -는.", "Vóór 마련이다 staat -기, niet -ㄹ.", "Er komt geen verleden vóór -기 마련이다."] },
    { type: "mc", q: "봄이 오면 날씨가 ___ 마련이에요.",
      options: ["따뜻해지기", "따뜻해지는", "따뜻해질", "따뜻해졌기"], answer: 0,
      why: ["Goed: stam + 기 마련이다.", "Vóór 마련이다 staat -기, niet -는.", "Vóór 마련이다 staat -기, niet -ㄹ.", "Een algemene waarheid krijgt geen verleden: 따뜻해지기."] },
    { type: "mc", q: "In welke zin past -기 마련이다 goed?",
      options: ["물건이 싸면 품질이 떨어지기 마련이에요.", "저는 내일 친구를 만나기 마련이에요.", "어제 길에서 지갑을 줍기 마련이었어요.", "다음 주에 제가 시험을 보기 마련이에요."], answer: 0,
      why: ["Goed: dit is een algemene waarheid. Goedkoop gaat vaak samen met slechte kwaliteit.", "Een eigen plan is geen algemene waarheid. Zeg: 만날 거예요.", "Eén voorval van gisteren is geen algemene waarheid. Zeg: 주웠어요.", "Een eigen plan is geen algemene waarheid. Zeg: 볼 거예요."] },
    { type: "order", q: "Zet in de goede volgorde: \"Na verloop van tijd verandert alles nu eenmaal.\"",
      tokens: [["시간이", "sigani"], ["지나면", "jinamyeon"], ["모든 것이 변하기", "modeun geosi byeonhagi"], ["마련이에요", "maryeonieyo"]] },
    { type: "open", q: "Vertaal: \"Kinderen worden nu eenmaal snel groot.\"",
      model: ["아이들은 빨리 크기 마련이에요.", "아이들은 빨리 자라기 마련이에요.", "아이들은 금방 자라기 마련이다."],
      tip: "Check: staat -기 direct na de stam, zonder verleden, en staat 마련이다 los?" },
    { type: "mc", q: "태어난 사람은 언젠가 ___ 법이다. (Wie geboren is, sterft ooit.)",
      options: ["죽는", "죽기", "죽을", "죽었기"], answer: 0,
      why: ["Goed: 법이다 komt na -는 bij een werkwoord.", "-기 hoort bij 마련이다, niet bij 법이다.", "-(으)ㄹ past niet vóór 법이다.", "Er komt geen verleden met -기 vóór 법이다."] },
    { type: "mc", q: "Welke zin betekent hetzelfde als 사람은 누구나 실수하기 마련이에요?",
      options: ["사람은 누구나 실수하게 마련이에요.", "사람은 누구나 실수할 리가 없어요.", "사람은 누구나 실수할 수 없어요.", "사람은 누구나 실수하면 안 돼요."], answer: 0,
      why: ["Goed: -게 마련이다 is een variant van -기 마련이다.", "리가 없다 betekent \"kan onmogelijk\": het tegenovergestelde.", "수 없다 betekent \"niet kunnen\".", "-면 안 되다 betekent \"mag niet\"."] },
    { type: "mc", q: "거짓말은 언젠가 드러나기 마련이다. Wat betekent dit?",
      options: ["Een leugen komt nu eenmaal ooit uit.", "Een leugen moet ooit uitkomen.", "Een leugen komt misschien ooit uit.", "Een leugen is gisteren uitgekomen."], answer: 0,
      why: ["Goed: -기 마련이다 = het gaat nu eenmaal zo.", "Het is geen plicht. \"Moeten\" is -아/어야 하다.", "마련이다 is zeker, niet \"misschien\".", "Het gaat om een algemene waarheid, niet om één voorval."] },
    { type: "order", q: "Zet in de goede volgorde: \"Wie veel praat, maakt nu eenmaal veel fouten.\"",
      tokens: [["말이 많으면", "mari maneumyeon"], ["실수도", "silsudo"], ["많기", "mankki"], ["마련이다", "maryeonida"]] },
    { type: "fill", q: "운동을 안 하면 체력이 ___ 마련이에요. (Als je niet sport, gaat je conditie nu eenmaal achteruit.)",
      answers: ["떨어지기", "약해지기"], hint: "떨어지다 = dalen. Welke vorm staat vóór 마련이다?",
      why: "Stam + 기: 떨어지기 마련이에요. Geen -는 en geen verleden." },
    { type: "open", q: "Vertaal: \"Een nieuwe omgeving is in het begin nu eenmaal moeilijk.\"",
      model: ["새로운 환경은 처음에는 힘들기 마련이에요.", "새 환경은 처음에 어렵기 마련이다."],
      tip: "Check: 힘들다 en 어렵다 krijgen gewoon -기: 힘들기, 어렵기. Geen verleden." }
  ],
  review: [
    { type: "mc", q: "\"Als je niet eet, krijg je nu eenmaal honger.\"",
      options: ["밥을 안 먹으면 배가 고프기 마련이에요.", "밥을 안 먹으면 배가 고픈 마련이에요.", "밥을 안 먹으면 배가 고플 마련이에요.", "밥을 안 먹으면 배가 고팠기 마련이에요."], answer: 0,
      why: ["Goed: stam + 기 마련이다.", "Vóór 마련이다 staat -기, niet -ㄴ.", "Vóór 마련이다 staat -기, niet -ㄹ.", "Er komt geen verleden vóór -기 마련이다."] },
    { type: "mc", q: "오래 쓰면 물건은 ___ 마련이에요. (Als je iets lang gebruikt, gaat het nu eenmaal kapot.)",
      options: ["고장 나기", "고장 나는", "고장 날", "고장 났기"], answer: 0,
      why: ["Goed: stam + 기 마련이다.", "Vóór 마련이다 staat -기, niet -는.", "Vóór 마련이다 staat -기, niet -ㄹ.", "Er komt geen verleden vóór -기 마련이다."] },
    { type: "mc", q: "늦게 자면 다음 날 아침에 ___ 마련이에요. (Als je laat naar bed gaat, ben je de volgende ochtend nu eenmaal moe.)",
      options: ["피곤하기", "피곤한", "피곤할", "피곤했기"], answer: 0,
      why: ["Goed: stam + 기 마련이다.", "Vóór 마련이다 staat -기, niet -ㄴ.", "Vóór 마련이다 staat -기, niet -ㄹ.", "Er komt geen verleden vóór -기 마련이다."] }
  ]
})
