({
  id: "03", slug: "lettergrepen", title: "Lettergreepblokken bouwen", sub: "가 en 고: links-rechts of boven-onder",
  canDo: "Je kunt nu letters samenvoegen tot lettergreepblokken en woorden lezen als 나무, 바다 en 어머니.",
  guess: {
    q: "ㄴ is n en ㅏ is a. Hoe schrijf je de lettergreep 'na' in Hangul, denk je?",
    options: ["나", "ㄴㅏ", "노", "아"], answer: 0,
    why: ["Goed: ㄴ en ㅏ samen in één blokje. ㅏ is verticaal, dus ㄴ staat links.", "De letters horen samen in één blokje, niet los naast elkaar.", "노 is no: daar staat de klinker ㅗ onder de ㄴ.", "아 is a: de ㅇ is stil, dus je hoort geen n."]
  },
  problem: "Nederlands schrijf je letter na letter op een rij. Hangul zet de letters van één lettergreep samen in een vierkant blokje. Een lettergreep is één klankstuk, zoals 'na' en 'mu' in 'namu'. Elk blokje begint met een medeklinker en heeft altijd een klinker. Waar de klinker staat, hangt af van zijn vorm.",
  pattern: [
    { l: "medeklinker (h)", v: "ㅎ", c: 1 }, { l: "klinker (a)", v: "ㅏ", c: 4 }, { l: "slot (n)", v: "ㄴ", c: 3 },
    { l: "lettergreep: han", v: "한", c: 2, key: true }
  ],
  patternCap: "Medeklinker + klinker (+ slotmedeklinker) = één blokje: 가 ga (links-rechts), 고 go (boven-onder), 한 han (met slot)",
  rules: [
    "Verticale klinker (ㅏ ㅓ ㅣ): de medeklinker staat links, de klinker rechts. 가 = ga, 너 = neo, 미 = mi.",
    "Horizontale klinker (ㅗ ㅜ ㅡ): de medeklinker staat boven, de klinker eronder. 고 = go, 누 = nu, 스 = seu.",
    "Een blokje kan onderaan nog een medeklinker hebben. Dat heet 받침 (batchim): de slotmedeklinker. 한 = h + a + n.",
    "Je leest een blokje van links naar rechts en van boven naar onder. De blokjes lees je van links naar rechts.",
    "Woorden staan los van elkaar met een spatie, net als in het Nederlands: 우리 어머니."
  ],
  pitfall: "Schrijf de letters van één lettergreep nooit los naast elkaar. Niet ㄴㅏㅁㅜ, maar 나무: twee blokjes.",
  examples: [
    { cn: "나무", py: "namu", nl: "boom" },
    { cn: "바다", py: "bada", nl: "zee" },
    { cn: "어머니", py: "eomeoni", nl: "moeder" },
    { cn: "아버지", py: "abeoji", nl: "vader" }
  ],
  nuance: [
    { h: "Links-rechts of boven-onder: kijk naar de lange streep",
      p: "Heeft de klinker een lange staande streep? Dan staat de medeklinker links: 가 (ga). Heeft de klinker een lange liggende streep? Dan staat de medeklinker erboven: 고 (go). Zo blijft elk blokje ongeveer vierkant.",
      ex: [
        { cn: "가", py: "ga", nl: "(links-rechts: ㄱ + ㅏ)" },
        { cn: "고", py: "go", nl: "(boven-onder: ㄱ + ㅗ)" },
        { cn: "구", py: "gu", nl: "(boven-onder: ㄱ + ㅜ)" }
      ] },
    { h: "받침: de slotmedeklinker onderaan",
      p: "Sommige lettergrepen eindigen op een medeklinker, zoals 'han' of 'guk'. Die slotmedeklinker komt onderaan het blokje. Hij heet 받침 (batchim). Aan het eind klinkt ㅇ als 'ng' in 'zang', en ㄱ als een korte k. 받침 komt in een latere les uitgebreid terug.",
      ex: [
        { cn: "한국", py: "Hanguk", nl: "Korea (ㄴ en ㄱ onderaan)" },
        { cn: "강", py: "gang", nl: "rivier (ㅇ onderaan klinkt als ng)" }
      ] },
    { h: "Aan elkaar lezen",
      p: "Lees de blokjes vloeiend achter elkaar, zonder pauze. Dan hoor je ook de zachte medeklinkers uit les 2: in 바다 klinkt de ㄷ tussen twee klinkers als een d. In 아버지 klinkt de ㅂ als een b.",
      ex: [
        { cn: "바다", py: "bada", nl: "zee (ㄷ in het midden = d)" }
      ] }
  ],
  mistakes: [
    { wrong: "ㄴㅏㅁㅜ", right: "나무", why: "Letters van één lettergreep horen samen in één blokje. Je schrijft twee blokjes: 나 en 무." },
    { wrong: "고 schrijven met ㄱ links van ㅗ", right: "고: ㄱ boven, ㅗ eronder", why: "ㅗ is een horizontale klinker. De medeklinker staat dan boven." },
    { wrong: "어머니 lezen als 'e-me-nie'", right: "어머니 = eomeoni (o-mo-nie, met open o)", why: "ㅓ klinkt als de o in 'pot', opener. De romanisatie 'eo' is geen e." },
    { wrong: "바다 lezen met een harde t: 'bata'", right: "바다 = bada", why: "Tussen twee klinkers klinkt ㄷ als een zachte d." }
  ],
  vocab: [
    ["받침", "batchim", "slotmedeklinker (onderaan een blokje)"], ["나무", "namu", "boom"], ["바다", "bada", "zee"],
    ["어머니", "eomeoni", "moeder"], ["아버지", "abeoji", "vader"], ["누나", "nuna", "oudere zus (van een jongen)"],
    ["바지", "baji", "broek"], ["소리", "sori", "geluid"], ["우리", "uri", "wij; ons"], ["한국", "Hanguk", "Korea"]
  ],
  dialogue: [
    ["A", "안녕하세요.", "Annyeonghaseyo.", "Hallo."],
    ["B", "안녕하세요.", "Annyeonghaseyo.", "Hallo."],
    ["A", "이거 나무예요?", "Igeo namuyeyo?", "Is dit een boom?"],
    ["B", "네, 나무예요.", "Ne, namuyeyo.", "Ja, het is een boom."],
    ["A", "저거 바다예요?", "Jeogeo badayeyo?", "Is dat daar de zee?"],
    ["B", "네, 바다예요.", "Ne, badayeyo.", "Ja, het is de zee."]
  ],
  reading: {
    title: "우리 (uri)",
    lines: [
      { cn: "나무", py: "namu", nl: "boom" },
      { cn: "바다", py: "bada", nl: "zee" },
      { cn: "바다 소리", py: "bada sori", nl: "het geluid van de zee" },
      { cn: "어머니", py: "eomeoni", nl: "moeder" },
      { cn: "우리 어머니", py: "uri eomeoni", nl: "mijn moeder (letterlijk: onze moeder)" },
      { cn: "우리 아버지", py: "uri abeoji", nl: "mijn vader (letterlijk: onze vader)" },
      { cn: "누나 바지", py: "nuna baji", nl: "de broek van mijn zus" },
      { cn: "한국", py: "Hanguk", nl: "Korea" }
    ],
    questions: [
      { type: "mc", q: "Wat betekent 바다 소리?",
        options: ["het geluid van de zee", "de broek van mijn zus", "mijn moeder", "boom en zee"], answer: 0,
        why: ["Goed: 바다 = zee, 소리 = geluid.", "Dat is 누나 바지.", "Dat is 우리 어머니.", "Boom is 나무. Dat woord staat hier niet."] },
      { type: "mc", q: "Koreanen zeggen vaak 우리 (uri) bij familie. Wat bedoelen ze met 우리 어머니?",
        options: ["mijn moeder", "jouw moeder", "zijn moeder", "een moeder"], answer: 0,
        why: ["Goed: letterlijk 'onze moeder', maar je bedoelt je eigen moeder.", "우리 betekent wij of ons. Het gaat om je eigen familie.", "우리 gaat over de spreker zelf, niet over een ander.", "우리 maakt het juist persoonlijk: jouw eigen moeder."] },
      { type: "mc", q: "In 한국 staan de letters ㄴ en ㄱ onderaan. Hoe heet zo'n slotmedeklinker?",
        options: ["받침 (batchim)", "klinker", "lettergreep", "romanisatie"], answer: 0,
        why: ["Goed: de medeklinker onderaan een blokje heet 받침.", "Een klinker is a, o, i enzovoort. ㄴ en ㄱ zijn medeklinkers.", "Een lettergreep is het hele blokje, zoals 한.", "Romanisatie is Koreaans in onze letters, zoals 'Hanguk'."] }
    ]
  },
  questions: [
    { type: "mc", q: "Welk woord betekent 'boom'?",
      options: ["나무", "나비", "누나", "바다"], answer: 0,
      why: ["Goed: 나무 (namu) is boom.", "나비 (nabi) is vlinder: tweede blokje met ㅂ en ㅣ.", "누나 (nuna) is oudere zus: de blokjes staan omgekeerd.", "바다 (bada) is zee."] },
    { type: "mc", q: "In welk blokje staat de medeklinker LINKS van de klinker?",
      options: ["가", "고", "구", "그"], answer: 0,
      why: ["Goed: ㅏ is verticaal, dus ㄱ staat links.", "ㅗ is horizontaal, dus ㄱ staat boven.", "ㅜ is horizontaal, dus ㄱ staat boven.", "ㅡ is horizontaal, dus ㄱ staat boven."] },
    { type: "mc", q: "Welke romanisatie hoort bij 어머니?",
      options: ["eomeoni", "omeoni", "eomoni", "eumeoni"], answer: 0,
      why: ["Goed: 어 = eo, 머 = meo, 니 = ni.", "'o' is ㅗ. Het eerste blokje heeft ㅓ: eo.", "Ook in 머 staat ㅓ, dus meo, niet mo.", "'eu' is ㅡ. In 어 staat ㅓ: eo."] },
    { type: "mc", q: "Hoeveel lettergrepen (blokjes) heeft 아버지?",
      options: ["drie", "twee", "vier", "zes"], answer: 0,
      why: ["Goed: 아, 버, 지.", "Tel de blokjes: 아 + 버 + 지 = drie.", "Er is geen vierde blokje.", "Zes is het aantal letters: ㅇ ㅏ ㅂ ㅓ ㅈ ㅣ. Blokjes zijn er drie."] },
    { type: "mc", q: "Welke lettergreep is 'so'?",
      options: ["소", "사", "수", "서"], answer: 0,
      why: ["Goed: ㅅ boven, ㅗ eronder.", "사 is sa: ㅏ wijst naar rechts.", "수 is su: het streepje van ㅜ wijst omlaag.", "서 is seo: ㅓ is een open o zonder ronde lippen."] },
    { type: "mc", q: "Wat is een 받침?",
      options: ["een medeklinker onderaan een blokje", "een klinker rechts in een blokje", "de stille ㅇ aan het begin", "een spatie tussen twee woorden"], answer: 0,
      why: ["Goed: 받침 = slotmedeklinker, zoals ㄴ in 한.", "Een klinker is nooit een 받침.", "De stille ㅇ staat aan het begin, niet onderaan.", "Een spatie is gewoon 띄어쓰기 (tussenruimte), geen 받침."] },
    { type: "order", q: "Bouw het woord 'namu' (boom): zet de letters in leesvolgorde.",
      tokens: [["ㄴ", "n"], ["ㅏ", "a"], ["ㅁ", "m"], ["ㅜ", "u"]] },
    { type: "order", q: "Bouw het woord 'sori' (geluid): zet de letters in leesvolgorde.",
      tokens: [["ㅅ", "s"], ["ㅗ", "o"], ["ㄹ", "r"], ["ㅣ", "i"]] },
    { type: "fill", q: "Typ de romanisatie: 바다 = ___ (zee)", answers: ["bada"],
      hint: "ㅂ = b, ㄷ = d, ㅏ = a.", why: "바 = ba en 다 = da, dus 바다 = bada." },
    { type: "open", q: "Schrijf je naam in Hangul. Gebruik de letters die je kent, en zeg hem hardop.", model: ["안나 (Anna)", "리사 (Lisa)", "사라 (Sara)"],
      tip: "Check: één blokje per lettergreep, met de medeklinker links of boven. Een slotmedeklinker (zoals de n in Anna) komt onderaan." },
    { type: "open", q: "Schrijf in Hangul: namu (boom), bada (zee), eomeoni (moeder).", model: ["나무, 바다, 어머니"],
      tip: "Check: 무 heeft ㅁ boven ㅜ. In 어머니 staat twee keer ㅓ, met de medeklinker links." }
  ],
  review: [
    { type: "mc", q: "Lees: 바지. Wat betekent het?",
      options: ["broek", "zee", "vader", "boom"], answer: 0,
      why: ["Goed: 바지 (baji) is broek.", "Zee is 바다 (bada): het tweede blokje is 다.", "Vader is 아버지 (abeoji): drie blokjes.", "Boom is 나무 (namu)."] },
    { type: "mc", q: "Welke lettergreep is 'mu'?",
      options: ["무", "모", "머", "므"], answer: 0,
      why: ["Goed: ㅁ boven, ㅜ eronder.", "모 is mo: het streepje wijst omhoog.", "머 is meo: een verticale klinker.", "므 is meu: ㅡ heeft geen streepje."] },
    { type: "mc", q: "Lees: 누나. Welke romanisatie klopt?",
      options: ["nuna", "nona", "nana", "neuna"], answer: 0,
      why: ["Goed: 누 = nu, 나 = na.", "no is 노: het streepje van ㅗ wijst omhoog. In 누 wijst het omlaag.", "na is 나. Het eerste blokje heeft ㅜ, niet ㅏ.", "neu is 느, met ㅡ zonder streepje."] }
  ]
})
