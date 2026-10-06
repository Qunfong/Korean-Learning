({
  id: "05", slug: "surok", title: "-(으)ㄹ수록", sub: "Hoe meer ..., hoe meer ...",
  canDo: "Je kunt nu zeggen dat iets toeneemt naarmate iets anders toeneemt, met -(으)ㄹ수록 en -(으)면 -(으)ㄹ수록.",
  guess: {
    q: "한국어는 공부할수록 재미있어요. Wat betekent dit, denk je?",
    options: [
      "Hoe meer ik Koreaans leer, hoe leuker het wordt.",
      "Als ik Koreaans leer, is het leuk.",
      "Ik leer Koreaans omdat het leuk is.",
      "Hoewel ik Koreaans leer, is het niet leuk."
    ], answer: 0,
    why: [
      "Goed: -(으)ㄹ수록 betekent \"hoe meer ..., hoe meer ...\".",
      "Gewoon \"als\" is -(으)면. -(으)ㄹ수록 zegt dat het toeneemt.",
      "\"Omdat\" is -아/어서 of -(으)니까.",
      "\"Hoewel\" is -지만. Er staat ook geen ontkenning."
    ]
  },
  problem: "Soms groeit het ene mee met het andere. In het Nederlands zeg je \"hoe meer ..., hoe ...\". In het Koreaans plak je -(으)ㄹ수록 aan de eerste stam. Voor extra nadruk zet je hetzelfde werkwoord met -(으)면 ervoor: 보면 볼수록.",
  pattern: [
    { l: "(stam + 면)", v: "보면", c: 3 }, { l: "stam + (으)ㄹ수록", v: "볼수록", c: 2, key: true },
    { l: "gevolg", v: "더 좋아요", c: 5 }
  ],
  patternCap: "(Stam + (으)면) + stam + (으)ㄹ수록 + gevolg · 갈수록 · 먹을수록 · 많을수록 · 보면 볼수록",
  rules: [
    "Na een klinker of ㄹ: -ㄹ수록 (갈수록, 알수록). Na een 받침: -을수록 (먹을수록, 많을수록).",
    "Het werkt met werkwoorden en bijvoeglijke werkwoorden. Onregelmatige stammen veranderen: 덥다 wordt 더울수록, 듣다 wordt 들을수록.",
    "Met -(으)면 ervoor wordt het sterker: 먹으면 먹을수록. Je herhaalt dan hetzelfde werkwoord.",
    "Het hoort in spreektaal en in schrijftaal. Er komt geen verleden vóór -수록."
  ],
  pitfall: "수록 schrijf je vast aan de stam: 갈수록, niet 갈 수록. Na een klinker komt geen 으: 비쌀수록, niet 비싸을수록.",
  examples: [
    { cn: "그 사람은 보면 볼수록 멋있어요.", py: "Geu sarameun bomyeon bolsurok meosisseoyo.", nl: "Hoe vaker ik hem zie, hoe leuker ik hem vind." },
    { cn: "연습을 많이 할수록 실력이 늘어요.", py: "Yeonseubeul mani halsurok sillyeogi neureoyo.", nl: "Hoe meer je oefent, hoe beter je wordt." },
    { cn: "높이 올라갈수록 공기가 차가워진다.", py: "Nopi ollagalsurok gonggiga chagawojinda.", nl: "Hoe hoger je komt, hoe kouder de lucht wordt." },
    { cn: "집은 역에서 가까울수록 비싸요.", py: "Jibeun yeogeseo gakkaulsurok bissayo.", nl: "Hoe dichter een huis bij het station ligt, hoe duurder het is." }
  ],
  nuance: [
    { h: "-(으)ㄹ수록 of -(으)면 -(으)ㄹ수록?",
      p: "De betekenis is hetzelfde: hoe meer ..., hoe meer. Met -(으)면 ervoor leg je extra nadruk. Dat hoor je veel in spreektaal. Je herhaalt dan altijd hetzelfde werkwoord: 보면 볼수록, nooit 보면 들을수록. Staat er al een woord als 많이 of 높이 bij, dan is de korte vorm vaak natuurlijker.",
      ex: [
        { cn: "이 영화는 볼수록 재미있어요.", py: "I yeonghwaneun bolsurok jaemiisseoyo.", nl: "Hoe vaker je deze film ziet, hoe leuker hij is." },
        { cn: "이 영화는 보면 볼수록 재미있어요.", py: "I yeonghwaneun bomyeon bolsurok jaemiisseoyo.", nl: "Hoe vaker je deze film ziet, hoe leuker hij wordt. (met nadruk)" }
      ] },
    { h: "-(으)ㄹ수록 of gewoon -(으)면?",
      p: "-(으)면 is een gewone voorwaarde: als A, dan B. -(으)ㄹ수록 zegt dat B meegroeit met A. Gebruik -(으)ㄹ수록 dus alleen als het om meer of minder gaat. Voor een eenmalige voorwaarde, zoals regen morgen, is -(으)면 de vorm.",
      ex: [
        { cn: "연습하면 실력이 늘어요.", py: "Yeonseupamyeon sillyeogi neureoyo.", nl: "Als je oefent, word je beter." },
        { cn: "연습할수록 실력이 늘어요.", py: "Yeonseupalsurok sillyeogi neureoyo.", nl: "Hoe meer je oefent, hoe beter je wordt." }
      ] },
    { h: "Vaste vorm: 갈수록 en 날이 갈수록",
      p: "갈수록 betekent los \"steeds meer\" of \"almaar\". In nieuws en verslagen zie je vaak 날이 갈수록 of 해가 갈수록: met de dag, met het jaar. In formele teksten staat de zin dan in de -다-vorm.",
      ex: [
        { cn: "물가가 갈수록 오르고 있다.", py: "Mulgaga galsurok oreugo itda.", nl: "De prijzen stijgen steeds verder." },
        { cn: "날이 갈수록 날씨가 추워진다.", py: "Nari galsurok nalssiga chuwojinda.", nl: "Met de dag wordt het kouder." }
      ] }
  ],
  mistakes: [
    { wrong: "시간이 갈 수록 편해져요.", right: "시간이 갈수록 편해져요.", why: "수록 is een uitgang. Schrijf het vast aan de stam: 갈수록." },
    { wrong: "물건이 비싸을수록 좋아요?", right: "물건이 비쌀수록 좋아요?", why: "Na een klinker komt alleen ㄹ: 비쌀수록. 을 is alleen voor een 받침." },
    { wrong: "먹으면 마실수록 배가 불러요.", right: "먹으면 먹을수록 배가 불러요.", why: "In -(으)면 -(으)ㄹ수록 herhaal je hetzelfde werkwoord." },
    { wrong: "많이 먹었을수록 살이 쪄요.", right: "많이 먹을수록 살이 쪄요.", why: "Vóór -수록 komt geen verleden. Gebruik gewoon de stam." }
  ],
  vocab: [
    ["-(으)ㄹ수록", "-(eu)lsurok", "hoe meer ..., hoe meer ..."], ["늘다", "neulda", "toenemen, beter worden"],
    ["공기", "gonggi", "lucht"], ["맵다", "maepda", "pittig, scherp"],
    ["연구", "yeongu", "onderzoek"], ["영향", "yeonghyang", "invloed"],
    ["부족하다", "bujokada", "tekortschieten, onvoldoende zijn"], ["집중력", "jipjungnyeok", "concentratievermogen"],
    ["줄이다", "jurida", "verminderen, beperken"], ["현명하다", "hyeonmyeonghada", "verstandig, wijs"]
  ],
  dialogue: [
    ["A", "김치를 처음 먹었을 때 어땠어요?", "Gimchireul cheoeum meogeosseul ttae eottaesseoyo?", "Hoe was het toen je voor het eerst kimchi at?"],
    ["B", "너무 매웠어요. 그런데 먹으면 먹을수록 맛있어요.", "Neomu maewosseoyo. Geureonde meogeumyeon meogeulsurok masisseoyo.", "Heel pittig. Maar hoe meer ik het eet, hoe lekkerder het is."],
    ["A", "저도 그래요. 매울수록 더 먹고 싶어요.", "Jeodo geuraeyo. Maeulsurok deo meokgo sipeoyo.", "Ik ook. Hoe pittiger, hoe meer ik wil eten."],
    ["B", "한국 생활도 시간이 갈수록 편해져요.", "Hanguk saenghwaldo sigani galsurok pyeonhaejyeoyo.", "Ook het leven in Korea wordt makkelijker naarmate de tijd verstrijkt."]
  ],
  reading: {
    title: "스마트폰과 잠",
    lines: [
      { cn: "요즘 스마트폰을 사용하는 시간이 점점 늘고 있다.", py: "Yojeum seumateuponeul sayonghaneun sigani jeomjeom neulgo itda.", nl: "Tegenwoordig gebruiken mensen hun smartphone steeds langer." },
      { cn: "한 연구에 따르면 스마트폰을 오래 사용할수록 잠을 자는 시간이 줄어든다.", py: "Han yeongue ttareumyeon seumateuponeul orae sayonghalsurok jameul janeun sigani jureodeunda.", nl: "Volgens een onderzoek: hoe langer je je smartphone gebruikt, hoe minder je slaapt." },
      { cn: "특히 자기 전에 화면을 오래 볼수록 잠들기가 어려워진다고 한다.", py: "Teuki jagi jeone hwamyeoneul orae bolsurok jamdeulgiga eoryeowojindago handa.", nl: "Vooral: hoe langer je voor het slapen op een scherm kijkt, hoe moeilijker je in slaap valt." },
      { cn: "잠이 부족하면 다음 날 집중력이 떨어진다.", py: "Jami bujokamyeon daeum nal jipjungnyeogi tteoreojinda.", nl: "Als je te weinig slaapt, daalt de volgende dag je concentratie." },
      { cn: "또한 나이가 어릴수록 스마트폰의 영향을 더 많이 받는다.", py: "Ttohan naiga eorilsurok seumateuponui yeonghyang-eul deo mani banneunda.", nl: "Bovendien: hoe jonger je bent, hoe meer invloed de smartphone op je heeft." },
      { cn: "그래서 전문가들은 사용 시간을 줄이면 줄일수록 좋다고 말한다.", py: "Geuraeseo jeonmungadeureun sayong siganeul jurimyeon jurilsurok jotago malhanda.", nl: "Daarom zeggen experts: hoe minder gebruikstijd, hoe beter." },
      { cn: "물론 스마트폰은 편리한 도구이다.", py: "Mullon seumateuponeun pyeollihan doguida.", nl: "Natuurlijk is de smartphone een handig hulpmiddel." },
      { cn: "하지만 편리할수록 더 현명하게 사용해야 한다.", py: "Hajiman pyeollihalsurok deo hyeonmyeonghage sayonghaeya handa.", nl: "Maar hoe handiger iets is, hoe verstandiger je het moet gebruiken." }
    ],
    questions: [
      { type: "mc", q: "Wat gebeurt er volgens het onderzoek als je je smartphone lang gebruikt?",
        options: ["Je slaapt minder.", "Je slaapt langer.", "Je concentratie wordt beter.", "Je valt sneller in slaap."], answer: 0,
        why: ["Goed: 오래 사용할수록 잠을 자는 시간이 줄어든다.", "De slaaptijd neemt juist af: 줄어든다.", "De concentratie daalt juist: 집중력이 떨어진다.", "In slaap vallen wordt juist moeilijker: 잠들기가 어려워진다."] },
      { type: "mc", q: "Op wie heeft de smartphone de meeste invloed?",
        options: ["Op jonge mensen.", "Op oude mensen.", "Op experts.", "Op iedereen evenveel."], answer: 0,
        why: ["Goed: 나이가 어릴수록 영향을 더 많이 받는다.", "어리다 betekent jong, niet oud.", "Experts geven alleen advies.", "De tekst zegt dat het met de leeftijd verschilt."] },
      { type: "mc", q: "사용 시간을 줄이면 줄일수록 좋다. Wat betekent dit?",
        options: ["Hoe minder gebruikstijd, hoe beter.", "Als je de gebruikstijd vermindert, is het één keer goed.", "Je moet de gebruikstijd niet verminderen.", "Omdat je de gebruikstijd vermindert, is het goed."], answer: 0,
        why: ["Goed: -(으)면 -(으)ㄹ수록 = hoe meer ..., hoe ... (met nadruk).", "Een gewone voorwaarde is alleen -(으)면. 줄일수록 zegt dat het steeds beter wordt.", "Er staat geen verbod in de zin.", "\"Omdat\" is -아/어서. -(으)ㄹ수록 geeft geen reden."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Hoe meer mensen, hoe leuker.\" Welke zin klopt?",
      options: ["사람이 많을수록 재미있어요.", "사람이 많으수록 재미있어요.", "사람이 많는수록 재미있어요.", "사람이 많수록 재미있어요."], answer: 0,
      why: ["Goed: 많다 heeft een 받침, dus -을수록.", "Na een 받침 komt -을수록, met ㄹ: 많을수록.", "Vóór 수록 staat geen -는. Het is -(으)ㄹ수록.", "Na een 받침 heb je -을 nodig: 많을수록."] },
    { type: "mc", q: "날씨가 ___ 아이스크림이 많이 팔려요. (Hoe warmer het is, hoe meer ijs er verkocht wordt.)",
      options: ["더울수록", "덥을수록", "더워수록", "덥는수록"], answer: 0,
      why: ["Goed: bij 덥다 wordt de ㅂ een 우: 더울수록.", "덥다 is onregelmatig. De ㅂ wordt 우: 더울수록.", "Vóór 수록 staat -(으)ㄹ, niet -어.", "Vóór 수록 staat -(으)ㄹ, niet -는."] },
    { type: "mc", q: "이 노래는 ___ 들을수록 좋아요. (Hoe vaker ik dit lied hoor, hoe mooier het is.)",
      options: ["들으면", "듣으면", "들어서", "듣고"], answer: 0,
      why: ["Goed: -(으)면 + -(으)ㄹ수록, en 듣다 wordt 들으면.", "듣다 is onregelmatig. Vóór een klinker wordt ㄷ een ㄹ: 들으면.", "In dit patroon staat -(으)면 vóór -(으)ㄹ수록, niet -어서.", "In dit patroon staat -(으)면 vóór -(으)ㄹ수록, niet -고."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hoe meer boeken je leest, hoe meer je weet.\"",
      tokens: [["책을 많이", "chaegeul mani"], ["읽을수록", "ilgeulsurok"], ["아는 것이", "aneun geosi"], ["많아져요", "manajyeoyo"]] },
    { type: "open", q: "Vertaal: \"Hoe meer ik oefen, hoe makkelijker het wordt.\"",
      model: ["연습할수록 쉬워져요.", "연습하면 연습할수록 쉬워져요.", "많이 연습할수록 더 쉬워져요."],
      tip: "Check: staat 수록 vast aan de stam, en gebruik je na een 받침 -을수록?" },
    { type: "mc", q: "\"Als het morgen regent, blijf ik thuis.\" Welke zin klopt?",
      options: ["내일 비가 오면 집에 있을 거예요.", "내일 비가 올수록 집에 있을 거예요.", "내일 비가 오면 올수록 집에 있을 거예요.", "내일 비가 와서 집에 있을 거예요."], answer: 0,
      why: ["Goed: één voorwaarde zonder \"hoe meer\" is gewoon -(으)면.", "-(으)ㄹ수록 zegt \"hoe meer\". Dat past niet bij één regenachtige dag.", "-(으)면 -(으)ㄹ수록 betekent ook \"hoe meer\", niet \"als\".", "-아서/-어서 geeft een reden: \"omdat het regent\"."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["먹으면 마실수록 배가 불러요.", "먹으면 먹을수록 배가 불러요.", "많이 먹을수록 배가 불러요.", "먹을수록 배가 불러요."], answer: 0,
      why: ["Goed: deze is fout. In -(으)면 -(으)ㄹ수록 herhaal je hetzelfde werkwoord.", "Deze klopt: 먹으면 먹을수록 = hoe meer je eet (met nadruk).", "Deze klopt: 많이 + 먹을수록.", "Deze klopt: de korte vorm 먹을수록."] },
    { type: "mc", q: "요즘 물가가 갈수록 오르고 있다. Wat betekent 갈수록 hier?",
      options: ["steeds verder", "hoe verder je reist", "als je gaat", "omdat de tijd gaat"], answer: 0,
      why: ["Goed: 갈수록 is een vaste vorm: steeds meer, almaar.", "Het gaat hier niet om reizen. 갈수록 is een vaste vorm voor \"steeds meer\".", "\"Als je gaat\" is 가면.", "-(으)ㄹ수록 geeft geen reden."] },
    { type: "order", q: "Zet in de goede volgorde: \"Een antwoord: hoe sneller, hoe beter.\"",
      tokens: [["답장은", "dapjang-eun"], ["빠르면", "ppareumyeon"], ["빠를수록", "ppareulsurok"], ["좋아요", "joayo"]] },
    { type: "fill", q: "시간이 ___ 고향이 더 그리워져요. (Hoe meer tijd verstrijkt, hoe meer ik mijn geboorteplaats mis.)",
      answers: ["지날수록", "갈수록"], hint: "지나다 = verstrijken. Stam op een klinker + ㄹ수록.",
      why: "지나다 eindigt op een klinker: 지날수록. 갈수록 kan ook: 시간이 갈수록." },
    { type: "open", q: "Vertaal: \"Hoe vaker ik hem ontmoet, hoe aardiger ik hem vind.\"",
      model: ["그 사람은 만나면 만날수록 좋아져요.", "그 사람을 만날수록 더 좋아져요.", "만나면 만날수록 그 사람이 좋아요."],
      tip: "Check: 만나다 eindigt op een klinker: 만날수록. Bij -면 -수록 herhaal je 만나다." }
  ],
  review: [
    { type: "mc", q: "\"Hoe ouder je wordt, hoe wijzer je wordt.\"",
      options: ["나이가 들수록 지혜로워져요.", "나이가 들을수록 지혜로워져요.", "나이가 드수록 지혜로워져요.", "나이가 드는수록 지혜로워져요."], answer: 0,
      why: ["Goed: 들다 eindigt op ㄹ, dus alleen 수록 erbij: 들수록.", "Een stam op ㄹ krijgt geen extra 을: 들수록.", "De ㄹ blijft staan vóór 수록: 들수록.", "Vóór 수록 staat geen -는."] },
    { type: "mc", q: "이 책은 ___ 읽을수록 어려워요. (Hoe meer ik dit boek lees, hoe moeilijker het wordt.)",
      options: ["읽으면", "읽어면", "읽고", "읽어서"], answer: 0,
      why: ["Goed: -(으)면 + -(으)ㄹ수록. Na een 받침: 읽으면.", "Na een 받침 komt -으면, niet -어면.", "In dit patroon staat -(으)면 vóór -(으)ㄹ수록, niet -고.", "In dit patroon staat -(으)면 vóór -(으)ㄹ수록, niet -어서."] },
    { type: "mc", q: "방이 ___ 청소하기 힘들어요. (Hoe groter de kamer, hoe zwaarder het schoonmaken.)",
      options: ["넓을수록", "넓수록", "넓으수록", "넓는수록"], answer: 0,
      why: ["Goed: 넓다 heeft een 받침, dus -을수록.", "Na een 받침 heb je -을 nodig: 넓을수록.", "Na een 받침 komt -을수록, met ㄹ.", "Vóór 수록 staat geen -는."] }
  ]
})
