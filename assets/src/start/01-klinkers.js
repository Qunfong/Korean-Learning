({
  id: "01", slug: "klinkers", title: "De zes basisklinkers", sub: "아 어 오 우 으 이 lezen en uitspreken",
  canDo: "Je kunt nu de zes basisklinkers lezen en uitspreken, en je weet waarom ㅇ aan het begin stil is.",
  guess: {
    q: "Het rondje ㅇ is aan het begin van een lettergreep stil. ㅏ is de klank 'a'. Hoe spreek je 아 uit, denk je?",
    options: ["a", "nga", "o", "ha"], answer: 0,
    why: ["Goed: ㅇ is stil, dus je hoort alleen de klinker ㅏ: a.", "ㅇ klinkt alleen als 'ng' aan het eind van een lettergreep. Aan het begin is hij stil.", "'o' is een andere klinker: ㅗ, zoals in 오.", "De 'h' is een andere letter: ㅎ. ㅇ is aan het begin stil."]
  },
  problem: "Het Koreaanse schrift heet Hangul (한글, hangeul). Het heeft letters, net als het Nederlands. Een klinker is een klank als a, o of ie: je mond blijft open. Een klinker staat in het Koreaans nooit alleen. Hij krijgt altijd een medeklinker ervoor. Is er geen medeklinker te horen? Dan zet je het stille rondje ㅇ ervoor.",
  pattern: [
    { l: "stille ㅇ", v: "ㅇ", c: 1 }, { l: "klinker (a)", v: "ㅏ", c: 4 }, { l: "lettergreep: a", v: "아", c: 2, key: true }
  ],
  patternCap: "Stille ㅇ + klinker = lettergreep: 아 (a), 어 (eo), 오 (o), 우 (u), 으 (eu), 이 (i)",
  rules: [
    "Er zijn zes basisklinkers: ㅏ (a), ㅓ (eo), ㅗ (o), ㅜ (u), ㅡ (eu), ㅣ (i).",
    "Verticale klinkers (ㅏ ㅓ ㅣ) hebben een lange staande streep. De ㅇ staat dan links: 아, 어, 이.",
    "Horizontale klinkers (ㅗ ㅜ ㅡ) hebben een lange liggende streep. De ㅇ staat dan boven: 오, 우, 으.",
    "Het korte streepje wijst de richting: ㅏ wijst naar rechts, ㅓ naar links, ㅗ omhoog, ㅜ omlaag.",
    "Een lettergreep is één klankstuk, zoals 'ba' in 'banaan'. In Hangul schrijf je elke lettergreep als één blokje."
  ],
  pitfall: "De romanisatie 'eo' en 'eu' klinkt niet als het Nederlandse 'eu' in 'neus'. 어 (eo) klinkt als de o in 'pot', 으 (eu) als een 'oe' met gespreide lippen.",
  examples: [
    { cn: "아이", py: "ai", nl: "kind" },
    { cn: "오이", py: "oi", nl: "komkommer" },
    { cn: "이", py: "i", nl: "twee (ook: tand)" },
    { cn: "오", py: "o", nl: "vijf" }
  ],
  nuance: [
    { h: "Waarom ㅇ aan het begin stil is",
      p: "Een Koreaanse lettergreep begint altijd met een medeklinker-teken. Een medeklinker is een klank als b, m of s: je lippen of tong blokkeren de lucht even. Begint het woord met een klinker? Dan zet je ㅇ als lege plaatshouder. Je hoort hem niet. Pas aan het eind van een lettergreep klinkt ㅇ als 'ng' in 'zang'. Dat komt in les 3.",
      ex: [
        { cn: "아이", py: "ai", nl: "kind (twee keer stille ㅇ)" }
      ] },
    { h: "ㅓ (eo) en ㅗ (o): twee soorten o",
      p: "ㅗ (o) klinkt als de oo in 'boot', maar korter. Je lippen zijn rond. ㅓ (eo) klinkt als de o in 'pot', maar opener. Je lippen zijn niet rond. Je mond staat verder open, bijna als bij een a.",
      ex: [
        { cn: "오", py: "o", nl: "vijf (ronde lippen)" },
        { cn: "어", py: "eo", nl: "eh, uh (open mond, geen ronde lippen)" }
      ] },
    { h: "ㅜ (u) en ㅡ (eu): ronde of gespreide lippen",
      p: "ㅜ (u) klinkt als de oe in 'boek', met ronde lippen. ㅡ (eu) maak je met je tong op dezelfde plek, maar je lippen spreid je, alsof je glimlacht. Zo'n klank heeft het Nederlands niet. Zeg 'oe' en trek dan je mondhoeken opzij.",
      ex: [
        { cn: "우", py: "u", nl: "(klank) oe, ronde lippen" },
        { cn: "으", py: "eu", nl: "(klank) oe met gespreide lippen" }
      ] },
    { h: "Romanisatie is een hulpmiddel, geen uitspraak",
      p: "Romanisatie is Koreaans geschreven in onze letters. Deze site gebruikt de officiële Zuid-Koreaanse romanisatie. Die is gemaakt voor Engelse lezers. Lees 'u' dus als 'oe' en 'i' als 'ie'. Leer zo snel mogelijk de Hangul-letters zelf. Daarna kun je de romanisatie uitzetten."
    }
  ],
  mistakes: [
    { wrong: "어 lezen als 'e' (zoals in 'bed')", right: "어 klinkt als de o in 'pot', opener", why: "De romanisatie 'eo' begint met een e, maar je hoort geen e. Het is een open o-klank zonder ronde lippen." },
    { wrong: "오 en 우 verwisselen", right: "오 = o (streepje omhoog), 우 = oe (streepje omlaag)", why: "Het korte streepje staat bij 오 boven de lange streep en bij 우 eronder. Kijk naar de richting." },
    { wrong: "으 lezen als 'eu' in 'neus'", right: "으 klinkt als 'oe' met gespreide lippen", why: "De romanisatie 'eu' is twee letters voor één klank. Die klank lijkt niet op het Nederlandse 'eu'." },
    { wrong: "ㅇ uitspreken als 'ng' in 아이 (nga-i)", right: "아이 = a-i", why: "Aan het begin van een lettergreep is ㅇ stil. Alleen aan het eind klinkt hij als 'ng'." }
  ],
  vocab: [
    ["아 어 오 우 으 이", "a eo o u eu i", "de zes basisklinkers (met stille ㅇ)"], ["아이", "ai", "kind"], ["오이", "oi", "komkommer"],
    ["이", "i", "twee; tand; dit"], ["오", "o", "vijf"], ["아우", "au", "jonger broertje (ouderwets)"],
    ["어", "eo", "eh, uh (aarzeling)"], ["네", "ne", "ja"], ["아니요", "aniyo", "nee"], ["안녕하세요", "annyeonghaseyo", "hallo, goedendag"]
  ],
  dialogue: [
    ["A", "안녕하세요.", "Annyeonghaseyo.", "Hallo."],
    ["B", "안녕하세요.", "Annyeonghaseyo.", "Hallo."],
    ["A", "이거 오이예요?", "Igeo oiyeyo?", "Is dit een komkommer?"],
    ["B", "네, 오이예요.", "Ne, oiyeyo.", "Ja, het is een komkommer."],
    ["A", "아, 오이!", "A, oi!", "Ah, een komkommer!"]
  ],
  reading: {
    title: "아 어 오 우 으 이",
    lines: [
      { cn: "아", py: "a", nl: "ah! (klank: a)" },
      { cn: "어", py: "eo", nl: "eh, uh (klank: open o)" },
      { cn: "오", py: "o", nl: "vijf" },
      { cn: "이", py: "i", nl: "twee" },
      { cn: "아이", py: "ai", nl: "kind" },
      { cn: "오이", py: "oi", nl: "komkommer" },
      { cn: "아우", py: "au", nl: "jonger broertje" },
      { cn: "이 아이", py: "i ai", nl: "dit kind" },
      { cn: "이 오이", py: "i oi", nl: "deze komkommer" }
    ],
    questions: [
      { type: "mc", q: "Wat betekent 오이?",
        options: ["komkommer", "kind", "vijf", "twee"], answer: 0,
        why: ["Goed: 오이 (oi) is komkommer.", "Kind is 아이 (ai): met ㅏ, niet met ㅗ.", "Vijf is alleen 오 (o), zonder 이.", "Twee is 이 (i)."] },
      { type: "mc", q: "Welk woord betekent 'kind'?",
        options: ["아이", "오이", "아우", "이"], answer: 0,
        why: ["Goed: 아이 (ai) is kind.", "오이 (oi) is komkommer: de eerste klinker is ㅗ.", "아우 (au) is jonger broertje: de tweede klinker is ㅜ.", "이 (i) alleen is twee of tand."] },
      { type: "mc", q: "In 이 아이 staan twee woorden. Wat betekent het eerste woord 이 hier?",
        options: ["dit", "twee", "tand", "kind"], answer: 0,
        why: ["Goed: 이 vóór een ding betekent 'dit': 이 아이 = dit kind.", "이 kan 'twee' betekenen, maar 'twee kind' is geen goede vertaling. Hier is het 'dit'.", "이 kan 'tand' betekenen, maar 'tand kind' zegt niets.", "Kind is het tweede woord: 아이."] }
    ]
  },
  questions: [
    { type: "mc", q: "Welke romanisatie hoort bij 오이?",
      options: ["oi", "ui", "eoi", "ai"], answer: 0,
      why: ["Goed: ㅗ = o en ㅣ = i. De ㅇ is twee keer stil.", "'u' is ㅜ: het streepje wijst dan omlaag. Bij 오 wijst het omhoog.", "'eo' is ㅓ: een verticale klinker. ㅗ is horizontaal.", "'a' is ㅏ: een verticale klinker met het streepje naar rechts."] },
    { type: "mc", q: "Welke klinker klinkt als de oe in 'boek'?",
      options: ["ㅜ", "ㅗ", "ㅡ", "ㅓ"], answer: 0,
      why: ["Goed: ㅜ (u) = oe, met ronde lippen.", "ㅗ (o) klinkt als oo in 'boot'. Het streepje wijst omhoog.", "ㅡ (eu) lijkt op oe, maar met gespreide lippen.", "ㅓ (eo) klinkt als de o in 'pot', opener."] },
    { type: "mc", q: "Hoe klinkt 어 ongeveer?",
      options: ["als de o in 'pot', maar opener", "als de e in 'bed'", "als de eu in 'neus'", "als de oo in 'boot'"], answer: 0,
      why: ["Goed: 어 (eo) is een open o zonder ronde lippen.", "De romanisatie begint met e, maar je hoort geen e.", "Het Nederlandse 'eu' komt in het Koreaans niet voor. 'eo' is iets anders.", "De oo in 'boot' is 오 (o), met ronde lippen."] },
    { type: "mc", q: "Welke klinker is horizontaal (lange liggende streep)?",
      options: ["ㅡ", "ㅏ", "ㅓ", "ㅣ"], answer: 0,
      why: ["Goed: ㅡ is één liggende streep. De ㅇ komt erboven: 으.", "ㅏ is verticaal: de ㅇ staat links, 아.", "ㅓ is verticaal: de ㅇ staat links, 어.", "ㅣ is verticaal: de ㅇ staat links, 이."] },
    { type: "mc", q: "Waar staat de ㅇ bij de lettergreep 우?",
      options: ["boven de klinker", "links van de klinker", "rechts van de klinker", "onder de klinker"], answer: 0,
      why: ["Goed: ㅜ is horizontaal, dus de ㅇ staat erboven.", "Links staat de ㅇ alleen bij verticale klinkers: 아, 어, 이.", "De medeklinker staat nooit rechts van de klinker.", "Onder de klinker staat de ㅇ niet. De klinker ㅜ zit onder de ㅇ."] },
    { type: "mc", q: "Hoe spreek je de ㅇ in 아이 uit?",
      options: ["Niet: aan het begin is ㅇ stil.", "Als 'ng', zoals in 'zang'.", "Als een korte 'h'.", "Als een zachte 'g'."], answer: 0,
      why: ["Goed: aan het begin is ㅇ een stille plaatshouder.", "'ng' hoor je alleen aan het eind van een lettergreep.", "De h-klank is de letter ㅎ.", "De g-klank is de letter ㄱ."] },
    { type: "order", q: "Zet de klinkers in de vaste volgorde van de Koreaanse woordenboeken: a, eo, o, u, eu, i.",
      tokens: [["아", "a"], ["어", "eo"], ["오", "o"], ["우", "u"], ["으", "eu"], ["이", "i"]] },
    { type: "order", q: "Zet de woorden in deze volgorde: kind, komkommer, vijf, twee.",
      tokens: [["아이", "ai"], ["오이", "oi"], ["오", "o"], ["이", "i"]] },
    { type: "fill", q: "Typ de romanisatie: 아우 = ___ (jonger broertje)", answers: ["au"],
      hint: "ㅏ = a, ㅜ = u. De ㅇ is stil.", why: "아 = a en 우 = u, dus 아우 = au. De twee ㅇ's hoor je niet." },
    { type: "open", q: "Schrijf het woord 'kind' (ai) in Hangul. Gebruik pen en papier.", model: ["아이"],
      tip: "Check: twee blokjes. Elke klinker heeft een ㅇ ervoor. ㅏ en ㅣ zijn verticaal, dus de ㅇ staat links." },
    { type: "open", q: "Schrijf de zes basisklinkers, elk met een stille ㅇ. Zeg ze hardop.", model: ["아 어 오 우 으 이"],
      tip: "Check: bij ㅏ ㅓ ㅣ staat de ㅇ links, bij ㅗ ㅜ ㅡ staat de ㅇ boven." }
  ],
  review: [
    { type: "mc", q: "Welke lettergreep klinkt als 'oe' met gespreide lippen?",
      options: ["으", "우", "어", "이"], answer: 0,
      why: ["Goed: 으 (eu) is een oe met gespreide lippen.", "우 (u) is oe met ronde lippen.", "어 (eo) is een open o.", "이 (i) is ie."] },
    { type: "mc", q: "Welke romanisatie hoort bij 어?",
      options: ["eo", "o", "e", "u"], answer: 0,
      why: ["Goed: ㅓ wordt 'eo' geschreven.", "'o' is ㅗ, met ronde lippen.", "'e' is een andere klinker (ㅔ), die komt in les 4.", "'u' is ㅜ."] },
    { type: "mc", q: "Lees hardop: 이 오이. Wat betekent het?",
      options: ["deze komkommer", "dit kind", "vijf komkommers", "twee kinderen"], answer: 0,
      why: ["Goed: 이 = dit/deze, 오이 = komkommer.", "Kind is 아이, met ㅏ. Hier staat 오이, met ㅗ.", "Vijf is 오. Hier staat 이 vooraan.", "Kind is 아이, en dat woord staat hier niet."] }
  ]
})
