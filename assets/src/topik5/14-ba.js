({
  id: "14", slug: "ba", title: "-는 바 / -(으)ㄴ 바", sub: "Formeel: wat ..., zoals ..., heeft ooit ...",
  canDo: "Je kunt nu in formele teksten en presentaties zeggen \"wat ...\", \"zoals ...\", \"voor zover ...\" en \"heeft ooit ...\" met 바.",
  guess: {
    q: "앞에서 살펴본 바와 같이 인구는 계속 줄고 있다. Wat betekent 살펴본 바와 같이, denk je?",
    options: ["Zoals hierboven besproken", "Omdat we het hierboven bekeken", "Hoewel we het hierboven bekeken", "Voordat we het hierboven bekijken"], answer: 0,
    why: [
      "Goed: -(으)ㄴ 바와 같이 betekent \"zoals\". 바 = \"wat\", 와 같이 = \"gelijk aan\".",
      "\"Omdat\" is -기 때문에. 바와 같이 is een vergelijking.",
      "\"Hoewel\" is -지만. Er is hier geen tegenstelling.",
      "살펴본 staat in de verleden tijd: het is al besproken."
    ]
  },
  problem: "In een Nederlands verslag schrijf je: \"Zoals hierboven besproken ...\" of \"Volgens wat bekend is ...\". In gewone spreektaal zeg je dat met 것, 대로 of 적이 있다. In formele schrijftaal gebruikt het Koreaans 바: een woord voor \"wat, hetgeen\". Je ziet het in rapporten, nieuws en toespraken.",
  pattern: [
    { l: "waar", v: "앞에서", c: 1 }, { l: "bijzin-vorm", v: "살펴본", c: 4 },
    { l: "바와 같이", v: "바와 같이", c: 2, key: true }, { l: "hoofdzin", v: "인구는 계속 줄고 있다", c: 5 }
  ],
  patternCap: "-는 바 (nu) · -(으)ㄴ 바 (verleden) · -(으)ㄹ 바 · -는/(으)ㄴ 바와 같이 (zoals) · -는 바로는 (voor zover) · -(으)ㄴ 바 있다 (heeft ooit)",
  rules: [
    "바 is een gebonden zelfstandig naamwoord. Ervoor staat altijd een bijzin-vorm: -는 바 (nu), -(으)ㄴ 바 (verleden), -(으)ㄹ 바 (어찌할 바를 모르다). Vóór 바 staat een spatie.",
    "-는/(으)ㄴ 바와 같이 = \"zoals\": 앞서 언급한 바와 같이, 표에서 보는 바와 같이.",
    "-는 바로는 of -(으)ㄴ 바에 따르면 = \"voor zover, volgens wat\": 제가 아는 바로는, 조사한 바에 따르면.",
    "-(으)ㄴ 바 있다/없다 = formeel voor -(으)ㄴ 적이 있다/없다 (\"heeft ooit\"). Het partikel 가 valt vaak weg: 발표한 바 있다.",
    "Register: schrijftaal (rapport, krant, toespraak, formele vergadering). In spreektaal gebruik je 것, 대로 en -(으)ㄴ 적이 있다."
  ],
  pitfall: "바 staat alleen voor abstracte inhoud: wat je weet, zegt, voelt of bedoelt. Voor een concreet ding gebruik je altijd 것: 어제 산 것, nooit 어제 산 바.",
  examples: [
    { cn: "앞에서 살펴본 바와 같이 인구는 계속 줄고 있다.", py: "Apeseo salpyeobon bawa gachi inguneun gyesok julgo itda.", nl: "Zoals hierboven besproken, blijft de bevolking dalen." },
    { cn: "제가 아는 바로는 그 회의는 취소되었습니다.", py: "Jega aneun baroneun geu hoeuineun chwisodoeeotseumnida.", nl: "Voor zover ik weet, is die vergadering afgelast." },
    { cn: "정부는 이 문제에 대해 여러 차례 경고한 바 있다.", py: "Jeongbuneun i munje-e daehae yeoreo charye gyeonggohan ba itda.", nl: "De regering heeft al meerdere keren voor dit probleem gewaarschuwd." },
    { cn: "이번 여행에서 느낀 바가 많았다.", py: "Ibeon yeohaeng-eseo neukkin baga manatda.", nl: "Deze reis heeft me veel te denken gegeven. (letterlijk: wat ik voelde, was veel)" }
  ],
  nuance: [
    { h: "바 of 것?",
      p: "Op veel plekken kun je 바 vervangen door 것: 그가 주장하는 바 = 그가 주장하는 것. 바 klinkt dan formeler. Maar 것 kan meer. 것 kan ook een concreet ding zijn, en 것 hoort in spreektaal. 바 gaat alleen over abstracte inhoud: kennis, mening, bedoeling, gevoel.",
      ex: [
        { cn: "그가 주장하는 바는 분명하다.", py: "Geuga jujanghaneun baneun bunmyeonghada.", nl: "Wat hij beweert, is duidelijk." },
        { cn: "어제 시장에서 산 것을 보여 줄게.", py: "Eoje sijang-eseo san geoseul boyeo julge.", nl: "Ik laat je zien wat ik gisteren op de markt heb gekocht." }
      ] },
    { h: "바와 같이 of 대로? 바 있다 of 적이 있다?",
      p: "In een gesprek zeg je 말한 대로 (\"zoals ik zei\") en 받은 적이 있다 (\"heeft ooit gekregen\"). In een tekst of officiële toespraak schrijf je 언급한 바와 같이 en 받은 바 있다. De betekenis is gelijk. Alleen het register verschilt.",
      ex: [
        { cn: "아까 말한 대로 내일 10시에 만나요.", py: "Akka malhan daero naeil yeolsie mannayo.", nl: "Zoals ik net zei, zien we elkaar morgen om 10 uur." },
        { cn: "앞서 언급한 바와 같이 비용이 크게 증가하였다.", py: "Apseo eon-geupan bawa gachi biyong-i keuge jeunggahayeotda.", nl: "Zoals eerder vermeld, zijn de kosten sterk gestegen." },
        { cn: "그 가수는 2015년에 이 상을 받은 바 있다.", py: "Geu gasuneun icheonsibonyeone i sang-eul badeun ba itda.", nl: "Die zanger heeft deze prijs in 2015 al eens gewonnen." }
      ] },
    { h: "Spatie: 바 of -ㄴ바?",
      p: "In deze les staat 바 los: 살펴본 바와 같이. Aan elkaar geschreven -(으)ㄴ바 of -는바 is een ander, verbindend achtervoegsel in schrijftaal: \"nu ..., (en daarbij bleek)\". Het spatiegebruik verandert dus de grammatica. Een vaste uitdrukking met -(으)ㄹ 바 is 어찌할 바를 모르다: niet weten wat je moet doen.",
      ex: [
        { cn: "서류를 검토한바 몇 가지 문제가 발견되었다.", py: "Seoryureul geomtohanba myeot gaji munjega balgyeondoeeotda.", nl: "Bij het nakijken van de documenten werden enkele problemen gevonden." },
        { cn: "갑자기 사고가 나서 어찌할 바를 몰랐다.", py: "Gapjagi sagoga naseo eojjihal bareul mollatda.", nl: "Er gebeurde plots een ongeluk en ik wist niet wat ik moest doen." }
      ] }
  ],
  mistakes: [
    { wrong: "어제 시장에서 산 바를 보여 줄게요.", right: "어제 시장에서 산 것을 보여 줄게요.", why: "Wat je kocht, is een concreet ding. Daarvoor gebruik je 것. Bovendien is 바 geen spreektaal." },
    { wrong: "앞에서 설명하는 바와 같이 비용이 늘었다.", right: "앞에서 설명한 바와 같이 비용이 늘었다.", why: "De uitleg staat eerder in de tekst. Het is al gebeurd, dus -(으)ㄴ 바와 같이." },
    { wrong: "정부는 이 문제를 경고하는 바 있다.", right: "정부는 이 문제를 경고한 바 있다.", why: "바 있다 betekent \"heeft ooit\". Daarvoor staat altijd de verleden vorm -(으)ㄴ." },
    { wrong: "앞에서 살펴본바와 같이 인구가 줄고 있다.", right: "앞에서 살펴본 바와 같이 인구가 줄고 있다.", why: "In 바와 같이 is 바 een los woord. Schrijf een spatie vóór 바." }
  ],
  vocab: [
    ["-는 바 / -(으)ㄴ 바", "-neun ba / -(eu)n ba", "wat, hetgeen (schrijftaal)"], ["-는 바와 같이", "-neun bawa gachi", "zoals (schrijftaal)"],
    ["살펴보다", "salpyeoboda", "bekijken, onderzoeken"], ["언급하다", "eon-geupada", "vermelden, noemen"],
    ["경고하다", "gyeonggohada", "waarschuwen"], ["가구", "gagu", "huishouden"],
    ["지적하다", "jijeokada", "wijzen op, aankaarten"], ["대책", "daechaek", "maatregel, oplossing"],
    ["수요", "suyo", "vraag (economie)"], ["어찌할 바를 모르다", "eojjihal bareul moreuda", "niet weten wat je moet doen"]
  ],
  dialogue: [
    ["사회자", "다음은 김 과장님의 발표가 있겠습니다.", "Daeumeun gim gwajangnimui balpyoga itgetseumnida.", "Nu volgt de presentatie van afdelingshoofd Kim."],
    ["김 과장", "화면에서 보시는 바와 같이 올해 매출이 10% 증가했습니다.", "Hwamyeoneseo bosineun bawa gachi olhae maechuri sip peosenteu jeunggahaetseumnida.", "Zoals u op het scherm ziet, is de omzet dit jaar met 10% gestegen."],
    ["이사", "그 원인이 무엇이라고 보십니까?", "Geu wonini mueosirago bosimnikka?", "Wat ziet u als de oorzaak?"],
    ["김 과장", "제가 파악한 바로는 온라인 판매가 크게 늘었기 때문입니다.", "Jega paakan baroneun ollain panmaega keuge neureotgi ttaemunimnida.", "Voor zover ik heb kunnen nagaan, komt het doordat de online verkoop sterk is gegroeid."],
    ["이사", "작년에도 비슷한 전략을 시도한 바 있지 않습니까?", "Jangnyeonedo biseutan jeollyageul sidohan ba itji ansseumnikka?", "Hebben we vorig jaar niet al een vergelijkbare strategie geprobeerd?"],
    ["김 과장", "네, 맞습니다. 다만 올해는 광고 방식을 바꾸었습니다.", "Ne, matseumnida. Daman olhaeneun gwanggo bangsigeul bakkueotseumnida.", "Ja, dat klopt. Alleen hebben we dit jaar de manier van adverteren veranderd."]
  ],
  reading: {
    title: "1인 가구의 증가",
    lines: [
      { cn: "통계청이 발표한 바에 따르면 1인 가구는 전체 가구의 3분의 1을 넘었다.", py: "Tonggyecheong-i balpyohan bae ttareumyeon irin gaguneun jeonche gaguui sambunui ireul neomeotda.", nl: "Volgens wat het statistiekbureau heeft bekendgemaakt, is meer dan een derde van alle huishoudens nu eenpersoons." },
      { cn: "이러한 변화는 이미 여러 연구에서 예측된 바 있다.", py: "Ireohan byeonhwaneun imi yeoreo yeon-gueseo yecheukdoen ba itda.", nl: "Deze verandering was al in verschillende onderzoeken voorspeld." },
      { cn: "앞에서 살펴본 바와 같이 결혼을 늦게 하거나 하지 않는 사람이 늘고 있다.", py: "Apeseo salpyeobon bawa gachi gyeolhoneul neutge hageona haji anneun sarami neulgo itda.", nl: "Zoals hierboven besproken, trouwen steeds meer mensen laat of helemaal niet." },
      { cn: "또한 혼자 사는 노인의 수도 꾸준히 증가하고 있다.", py: "Ttohan honja saneun noinui sudo kkujunhi jeunggahago itda.", nl: "Ook het aantal ouderen dat alleen woont, stijgt gestaag." },
      { cn: "1인 가구가 늘면서 소형 주택과 간편식에 대한 수요도 커졌다.", py: "Irin gaguga neulmyeonseo sohyeong jutaekgwa ganpyeonsige daehan suyodo keojyeotda.", nl: "Doordat er meer eenpersoonshuishoudens zijn, is ook de vraag naar kleine woningen en kant-en-klaarmaaltijden gegroeid." },
      { cn: "그러나 전문가들이 지적하는 바는 외로움과 안전 문제이다.", py: "Geureona jeonmungadeuri jijeokaneun baneun oeroumgwa anjeon munjeida.", nl: "Waar deskundigen echter op wijzen, zijn eenzaamheid en veiligheid." },
      { cn: "따라서 정부는 1인 가구를 위한 대책을 마련할 필요가 있다.", py: "Ttaraseo jeongbuneun irin gagureul wihan daechaegeul maryeonhal piryoga itda.", nl: "Daarom moet de regering maatregelen voor eenpersoonshuishoudens opstellen." },
      { cn: "이것이 본 보고서가 강조하고자 하는 바이다.", py: "Igeosi bon bogoseoga gangjohagoja haneun baida.", nl: "Dat is wat dit rapport wil benadrukken." }
    ],
    questions: [
      { type: "mc", q: "Waar wijzen deskundigen volgens de tekst op?",
        options: ["Eenzaamheid en veiligheid.", "Te weinig kleine woningen.", "Te dure kant-en-klaarmaaltijden.", "Het dalende aantal ouderen."], answer: 0,
        why: ["Goed: 전문가들이 지적하는 바는 외로움과 안전 문제이다.", "De vraag naar kleine woningen groeit, maar dat is niet waar deskundigen op wijzen.", "Over prijzen staat niets in de tekst.", "Het aantal ouderen dat alleen woont, stijgt juist."] },
      { type: "mc", q: "Waar is de vraag naar gegroeid?",
        options: ["Kleine woningen en kant-en-klaarmaaltijden.", "Grote woningen en restaurants.", "Huwelijksfeesten.", "Zorg voor ouderen."], answer: 0,
        why: ["Goed: 소형 주택과 간편식에 대한 수요도 커졌다.", "소형 = klein, en restaurants worden niet genoemd.", "Er trouwen juist minder mensen.", "Ouderen worden genoemd, maar niet als vraag op de markt."] },
      { type: "mc", q: "이것이 본 보고서가 강조하고자 하는 바이다. Wat betekent 강조하고자 하는 바?",
        options: ["wat dit rapport wil benadrukken", "hoe dit rapport het benadrukt", "omdat dit rapport het benadrukt", "wat dit rapport ooit heeft benadrukt"], answer: 0,
        why: ["Goed: 바 = \"wat\", -고자 하다 = willen (schrijftaal).", "바 betekent \"wat\", niet \"hoe\".", "\"Omdat\" zou -기 때문에 zijn.", "\"Ooit\" is -(으)ㄴ 바 있다. Hier staat -는 바이다."] }
    ]
  },
  questions: [
    { type: "mc", q: "제가 들은 바로는 다음 주에 시험이 있습니다. Wat betekent dit?",
      options: ["Voor zover ik heb gehoord, is er volgende week een examen.", "Ik heb gehoord dat er volgende week geen examen is.", "Zoals ik eerder zei, is er volgende week een examen.", "Omdat ik het hoorde, is er volgende week een examen."], answer: 0,
      why: ["Goed: -(으)ㄴ 바로는 = \"voor zover, volgens wat\".", "Er staat geen ontkenning in de zin.", "\"Zoals ik zei\" is 말한 바와 같이. 바로는 betekent \"voor zover\".", "바로는 geeft de bron van je kennis, geen oorzaak."] },
    { type: "mc", q: "\"Zoals in de tabel te zien is, is de omzet gestegen.\" Welke zin klopt?",
      options: ["표에서 보는 바와 같이 매출이 증가하였다.", "표에서 보는 바와 매출이 증가하였다.", "표에서 볼 바와 같이 매출이 증가하였다.", "표에서 보는 것 바와 같이 매출이 증가하였다."], answer: 0,
      why: ["Goed: -는 바와 같이 = \"zoals\".", "와 alleen betekent \"en\". Je hebt 같이 nodig: 바와 같이.", "Hier zie je het nu in de tabel: -는 바, niet de (으)ㄹ-vorm.", "바 vervangt 것. Ze staan nooit samen."] },
    { type: "mc", q: "\"De minister heeft al eens voor dit probleem gewaarschuwd.\" Welke zin klopt?",
      options: ["장관은 이 문제에 대해 경고한 바 있다.", "장관은 이 문제에 대해 경고하는 바 있다.", "장관은 이 문제에 대해 경고할 바 있다.", "장관은 이 문제에 대해 경고한 바 했다."], answer: 0,
      why: ["Goed: \"heeft ooit\" = -(으)ㄴ 바 있다.", "바 있다 vraagt de verleden vorm -(으)ㄴ, niet -는.", "Vóór 바 있다 staat geen (으)ㄹ-vorm.", "Na 바 komt 있다, niet 하다."] },
    { type: "mc", q: "Welke zin is NIET correct?",
      options: ["어제 산 바를 친구에게 보여 주었다.", "어제 산 것을 친구에게 보여 주었다.", "그가 주장하는 바는 분명하다.", "그가 주장하는 것은 분명하다."], answer: 0,
      why: ["Goed: wat je kocht, is een concreet ding. Daarvoor kan 바 niet: gebruik 것.", "Deze zin klopt: 것 kan een concreet ding zijn.", "Deze zin klopt: een bewering is abstract, dus 바 kan.", "Deze zin klopt: 것 kan ook abstract zijn."] },
    { type: "mc", q: "Je zegt tegen een vriend: \"Zoals ik net zei, we zien elkaar om 10 uur.\"",
      options: ["아까 말한 대로 10시에 만나자.", "아까 말한 바와 같이 10시에 만나자.", "아까 말한 바 10시에 만나자.", "아까 말하는 대로 10시에 만나자."], answer: 0,
      why: ["Goed: in spreektaal zeg je -(으)ㄴ 대로.", "바와 같이 is schrijftaal. Tegen een vriend klinkt het stijf.", "바 alleen betekent \"wat\". Voor \"zoals\" heb je 바와 같이 of 대로 nodig.", "Je zei het al, dus de verleden vorm: 말한 대로."] },
    { type: "mc", q: "갑자기 사고가 나서 어찌할 바를 몰랐다. Wat betekent dit?",
      options: ["Er gebeurde plots een ongeluk en ik wist niet wat ik moest doen.", "Er gebeurde plots een ongeluk en ik wist niet wat er gebeurd was.", "Er gebeurde plots een ongeluk en ik wist niet waar ik heen moest.", "Er gebeurde plots een ongeluk en ik wist niet wie het had gedaan."], answer: 0,
      why: ["Goed: 어찌할 바를 모르다 = niet weten wat je moet doen.", "어찌할 kijkt vooruit (wat te doen), niet terug.", "바 betekent \"wat\", niet \"waar\".", "바 betekent \"wat\", niet \"wie\"."] },
    { type: "mc", q: "Welke spelling is correct voor \"zoals hierboven besproken\"?",
      options: ["앞에서 살펴본 바와 같이", "앞에서 살펴본바와 같이", "앞에서 살펴 본 바와같이", "앞에서살펴본 바와 같이"], answer: 0,
      why: ["Goed: spatie vóór 바 en vóór 같이. 살펴보다 is één woord.", "Hier is 바 een los woord. Aan elkaar is -ㄴ바 een ander achtervoegsel.", "살펴보다 is één woord, en tussen 바와 en 같이 staat een spatie.", "Tussen 앞에서 en 살펴본 staat een spatie."] },
    { type: "order", q: "Zet in de goede volgorde: \"Volgens het onderzoek is het aantal gebruikers gestegen.\"",
      tokens: [["조사한", "josahan"], ["바에", "bae"], ["따르면", "ttareumyeon"], ["사용자 수가", "sayongja suga"], ["증가하였다", "jeunggahayeotda"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Zoals eerder vermeld, zijn de kosten sterk gestegen.\"",
      tokens: [["앞서 언급한", "apseo eon-geupan"], ["바와", "bawa"], ["같이", "gachi"], ["비용이 크게", "biyong-i keuge"], ["증가하였다", "jeunggahayeotda"]] },
    { type: "fill", q: "그 회사는 작년에 같은 문제로 사과한 ___ 있다. (Dat bedrijf heeft vorig jaar al eens excuses aangeboden voor hetzelfde probleem.)",
      answers: ["바", "바가"], hint: "Formeel voor -(으)ㄴ 적이 있다.",
      why: "-(으)ㄴ 바 있다 = \"heeft ooit\" in schrijftaal. Het partikel 가 mag erbij, maar valt vaak weg." },
    { type: "open", q: "Vertaal formeel (bijvoorbeeld in een vergadering): \"Voor zover ik weet, is de vergadering uitgesteld.\"",
      model: ["제가 아는 바로는 회의가 연기되었습니다.", "제가 알고 있는 바로는 회의가 연기되었습니다."],
      tip: "Check: -는 바로는 voor \"voor zover\", spatie vóór 바, en een formele eindvorm (-습니다)." },
    { type: "open", q: "Herschrijf deze spreektaal als schrijftaal voor een verslag: 아까 말한 대로 비용이 많이 늘었어요.",
      model: ["앞서 언급한 바와 같이 비용이 크게 증가하였다.", "앞에서 말한 바와 같이 비용이 크게 늘었다."],
      tip: "Check: 대로 wordt -(으)ㄴ 바와 같이, en de eindvorm wordt -다 (늘었다, 증가하였다)." }
  ],
  review: [
    { type: "mc", q: "\"Zoals in de grafiek te zien is, daalt de bevolking.\"",
      options: ["그래프에서 보는 바와 같이 인구가 감소하고 있다.", "그래프에서 보는 바와 같은 인구가 감소하고 있다.", "그래프에서 볼 바와 같이 인구가 감소하고 있다.", "그래프에서 보는 바가 같이 인구가 감소하고 있다."], answer: 0,
      why: ["Goed: -는 바와 같이 = \"zoals\" vóór een zin.", "바와 같은 staat vóór een zelfstandig naamwoord. Vóór een hele zin gebruik je 바와 같이.", "Je ziet het nu: -는 바, niet de (으)ㄹ-vorm.", "Het vaste patroon is 바와 같이, met 와."] },
    { type: "mc", q: "\"Het bedrijf heeft dit product al eens teruggeroepen.\"",
      options: ["그 회사는 이 제품을 회수한 바 있다.", "그 회사는 이 제품을 회수하는 바 있다.", "그 회사는 이 제품을 회수할 바 있다.", "그 회사는 이 제품을 회수한 바 했다."], answer: 0,
      why: ["Goed: \"heeft ooit\" = -(으)ㄴ 바 있다.", "바 있다 vraagt de verleden vorm -(으)ㄴ, niet -는.", "Vóór 바 있다 staat geen (으)ㄹ-vorm.", "Na 바 komt 있다, niet 하다."] },
    { type: "mc", q: "\"Ik heb alles opgegeten wat in de koelkast stond.\"",
      options: ["냉장고에 있는 것을 다 먹었다.", "냉장고에 있는 바를 다 먹었다.", "냉장고에 있는 바와 같이 다 먹었다.", "냉장고에 있은 것을 다 먹었다."], answer: 0,
      why: ["Goed: eten is een concreet ding, dus 것.", "바 gaat alleen over abstracte inhoud, niet over eten.", "바와 같이 betekent \"zoals\". Dat past hier niet.", "Met 있다 gebruik je -는: 있는 것."] }
  ]
})
