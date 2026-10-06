({
  id: "15", slug: "onregelmatig", title: "Onregelmatige werkwoorden", sub: "ㅂ, ㄷ, 르 en ㅅ: de stam verandert vóór een klinker",
  canDo: "Je kunt nu de vier groepen onregelmatige werkwoorden (ㅂ, ㄷ, 르, ㅅ) goed vervoegen, en ze onderscheiden van regelmatige look-alikes.",
  guess: {
    q: "\"Het is vandaag warm.\" (덥다 = warm) Welke zin klopt, denk je?",
    options: ["오늘은 더워요.", "오늘은 덥어요.", "오늘은 더와요.", "오늘은 덥워요."], answer: 0,
    why: ["Goed: de ㅂ wordt 우, en 우 + 어요 wordt 워요.", "덥다 is onregelmatig: de ㅂ blijft niet staan vóór een klinker.", "Na 우 komt -어요, en samen wordt dat 워요, niet 와요.", "De ㅂ verdwijnt helemaal. Hij wordt 우."]
  },
  problem: "Ook het Nederlands heeft onregelmatige werkwoorden: lopen wordt liep. In het Koreaans verandert bij sommige werkwoorden de stam als er een klinker achter komt, zoals bij -아요/어요. 덥다 wordt 더워요, 듣다 wordt 들어요. Vóór een medeklinker, zoals bij -고 of -지, blijft de stam gewoon: 덥고, 듣지.",
  pattern: [
    { l: "stam", v: "덥", c: 3 }, { l: "ㅂ wordt 우", v: "더우", c: 2, key: true }, { l: "+ 어요", v: "더워요", c: 5 }
  ],
  patternCap: "ㅂ wordt 우 (덥다: 더워요); ㄷ wordt ㄹ (듣다: 들어요); 르 wordt ㄹㄹ (모르다: 몰라요); ㅅ valt weg (낫다: 나아요)",
  rules: [
    "De stam verandert alleen vóór een klinker: -아요/어요, -았/었어요, -아서/어서, -(으)면, -(으)ㄴ. Vóór -고, -지 en -기 blijft hij gewoon: 덥고, 듣기.",
    "ㅂ: de ㅂ wordt 우. 덥다 wordt 더워요, 어렵다 wordt 어려워요. Uitzondering: 돕다 wordt 도와요.",
    "ㄷ: de ㄷ wordt ㄹ. 듣다 wordt 들어요, 걷다 wordt 걸어요, 묻다 (vragen) wordt 물어요.",
    "르: 르 wordt ㄹ + ㄹ. 모르다 wordt 몰라요, 부르다 wordt 불러요, 빠르다 wordt 빨라요.",
    "ㅅ: de ㅅ valt weg, maar de klinkers trekken niet samen. 낫다 wordt 나아요, 짓다 (bouwen) wordt 지어요."
  ],
  pitfall: "Niet elk werkwoord op ㅂ, ㄷ of ㅅ is onregelmatig. 입다 wordt 입어요, 받다 wordt 받아요, 웃다 wordt 웃어요: die zijn regelmatig. Je moet het per woord leren.",
  examples: [
    { cn: "오늘은 정말 더워요.", py: "Oneureun jeongmal deowoyo.", nl: "Het is vandaag echt warm." },
    { cn: "저는 매일 아침 음악을 들어요.", py: "Jeoneun maeil achim eumageul deureoyo.", nl: "Ik luister elke ochtend naar muziek." },
    { cn: "그 사람 이름을 몰라요.", py: "Geu saram ireumeul mollayo.", nl: "Ik weet de naam van die persoon niet." },
    { cn: "약을 먹고 감기가 다 나았어요.", py: "Yageul meokgo gamgiga da naasseoyo.", nl: "Ik heb medicijnen genomen en mijn verkoudheid is over." }
  ],
  nuance: [
    { h: "Look-alikes: onregelmatig of regelmatig?",
      p: "Werkwoorden die op elkaar lijken, gedragen zich soms anders. 덥다 is onregelmatig, 입다 niet. 듣다 is onregelmatig, 받다 niet. 낫다 is onregelmatig, 웃다 niet. Je kunt het niet aan het woord zien. Leer daarom elk werkwoord samen met zijn -아요/어요-vorm.",
      ex: [
        { cn: "추워서 코트를 입어요.", py: "Chuwoseo koteureul ibeoyo.", nl: "Het is koud, dus ik trek een jas aan." },
        { cn: "선물을 받아서 기분이 좋아요.", py: "Seonmureul badaseo gibuni joayo.", nl: "Ik kreeg een cadeau, dus ik ben blij." }
      ] },
    { h: "르 is niet hetzelfde als 으",
      p: "Een stam op 르 krijgt een extra ㄹ: 모르다 wordt 몰라요. Een gewone stam op 으 verliest alleen de 으: 바쁘다 wordt 바빠요, 쓰다 wordt 써요. Let dus op de ㄹ vóór de 으. Ook 다르다 (anders zijn) en 빠르다 (snel) volgen de 르-regel.",
      ex: [
        { cn: "지하철이 버스보다 빨라요.", py: "Jihacheori beoseuboda ppallayo.", nl: "De metro is sneller dan de bus." },
        { cn: "요즘 너무 바빠요.", py: "Yojeum neomu bappayo.", nl: "Ik heb het de laatste tijd heel druk." }
      ] },
    { h: "Ook vóór 으: -(으)면 en -(으)ㄴ",
      p: "-(으)면, -(으)니까 en -(으)ㄴ beginnen met 으, een klinker. Dan verandert de stam ook. ㅂ + 으 wordt 우: 더우면, 어려운. ㄷ wordt ㄹ: 들으면. Bij ㅅ valt de ㅅ weg: 나으면. Bij 르 zie je niets: 모르면, want 르 eindigt al op een klinker.",
      ex: [
        { cn: "어려운 문제예요.", py: "Eoryeoun munjeyeyo.", nl: "Het is een moeilijk probleem." },
        { cn: "음악을 들으면 기분이 좋아져요.", py: "Eumageul deureumyeon gibuni joajyeoyo.", nl: "Als ik naar muziek luister, ga ik me beter voelen." }
      ] }
  ],
  mistakes: [
    { wrong: "오늘 날씨가 덥어요.", right: "오늘 날씨가 더워요.", why: "덥다 is onregelmatig: vóór een klinker wordt de ㅂ 우." },
    { wrong: "선생님 말을 잘 듣어요.", right: "선생님 말을 잘 들어요.", why: "듣다 is onregelmatig: vóór een klinker wordt de ㄷ ㄹ." },
    { wrong: "그 사람을 모라요.", right: "그 사람을 몰라요.", why: "Bij 르 komt er een extra ㄹ: 몰라요." },
    { wrong: "코트를 이워요.", right: "코트를 입어요.", why: "입다 is regelmatig. De ㅂ blijft gewoon staan." }
  ],
  vocab: [
    ["불규칙 동사", "bulgyuchik dongsa", "onregelmatig werkwoord"], ["덥다", "deopda", "warm, heet (weer)"], ["듣다", "deutda", "luisteren, horen"],
    ["모르다", "moreuda", "niet weten, niet kennen"], ["낫다", "natda", "beter worden, genezen"], ["걷다", "geotda", "lopen, wandelen"],
    ["입다", "ipda", "aantrekken, dragen (kleren)"], ["받다", "batda", "krijgen, ontvangen"], ["웃다", "utda", "lachen"], ["어렵다", "eoryeopda", "moeilijk"]
  ],
  dialogue: [
    ["A", "오늘 정말 더워요.", "Oneul jeongmal deowoyo.", "Het is echt warm vandaag."],
    ["B", "네, 그래서 얇은 옷을 입었어요.", "Ne, geuraeseo yalbeun oseul ibeosseoyo.", "Ja, daarom heb ik dunne kleren aangetrokken."],
    ["A", "감기는 다 나았어요?", "Gamgineun da naasseoyo?", "Is je verkoudheid helemaal over?"],
    ["B", "네, 다 나았어요. 그런데 이 단어 뜻을 몰라요.", "Ne, da naasseoyo. Geureonde i daneo tteuseul mollayo.", "Ja, helemaal. Maar ik weet niet wat dit woord betekent."],
    ["A", "선생님께 물어보세요.", "Seonsaengnimkke mureoboseyo.", "Vraag het aan de leraar."],
    ["B", "그럼 지금 물어볼게요.", "Geureom jigeum mureobolgeyo.", "Dan vraag ik het nu."]
  ],
  reading: {
    title: "불규칙 동사는 어려워요",
    lines: [
      { cn: "저는 요즘 한국어를 배워요.", py: "Jeoneun yojeum hangugeoreul baewoyo.", nl: "Ik leer de laatste tijd Koreaans." },
      { cn: "한국어 문법은 조금 어려워요.", py: "Hangugeo munbeobeun jogeum eoryeowoyo.", nl: "De Koreaanse grammatica is een beetje moeilijk." },
      { cn: "특히 불규칙 동사가 어려워요.", py: "Teuki bulgyuchik dongsaga eoryeowoyo.", nl: "Vooral de onregelmatige werkwoorden zijn moeilijk." },
      { cn: "어제 친구에게 \"오늘 덥어요?\" 하고 물었어요.", py: "Eoje chinguege \"oneul deobeoyo?\" hago mureosseoyo.", nl: "Gisteren vroeg ik een vriend: \"오늘 덥어요?\" (fout)." },
      { cn: "친구가 웃었어요.", py: "Chinguga useosseoyo.", nl: "Mijn vriend lachte." },
      { cn: "그리고 \"더워요!\" 하고 가르쳐 줬어요.", py: "Geurigo \"deowoyo!\" hago gareuchyeo jwosseoyo.", nl: "En hij leerde me de goede vorm: \"더워요!\"" },
      { cn: "요즘은 매일 공원을 걸어요.", py: "Yojeumeun maeil gongwoneul georeoyo.", nl: "Tegenwoordig wandel ik elke dag in het park." },
      { cn: "걸을 때 한국어 노래를 들어요.", py: "Georeul ttae hangugeo noraereul deureoyo.", nl: "Tijdens het wandelen luister ik naar Koreaanse liedjes." },
      { cn: "모르는 단어가 있으면 사전을 찾아요.", py: "Moreuneun daneoga isseumyeon sajeoneul chajayo.", nl: "Als er een woord is dat ik niet ken, zoek ik het op in het woordenboek." },
      { cn: "이제 덥다, 듣다, 걷다는 안 틀려요!", py: "Ije deopda, deutda, geotdaneun an teullyeoyo!", nl: "Nu maak ik bij 덥다, 듣다 en 걷다 geen fouten meer!" }
    ],
    questions: [
      { type: "mc", q: "Wat deed de vriend van de schrijver?",
        options: ["Hij lachte en leerde hem de goede vorm.", "Hij werd boos.", "Hij zocht het woord op in het woordenboek.", "Hij zei dat 덥어요 goed was."], answer: 0,
        why: ["Goed: 친구가 웃었어요. 그리고 \"더워요!\" 하고 가르쳐 줬어요.", "Er staat 웃었어요: hij lachte.", "Het woordenboek gebruikt de schrijver zelf.", "Hij leerde hem juist 더워요."] },
      { type: "mc", q: "Wat doet de schrijver als hij wandelt?",
        options: ["Hij luistert naar Koreaanse liedjes.", "Hij zoekt woorden op.", "Hij belt zijn vriend.", "Hij leest een boek."], answer: 0,
        why: ["Goed: 걸을 때 한국어 노래를 들어요.", "Het woordenboek gebruikt hij als hij een woord niet kent, niet tijdens het wandelen.", "Bellen staat niet in de tekst.", "Lezen staat niet in de tekst."] },
      { type: "mc", q: "Waarom is \"오늘 덥어요?\" in de tekst fout?",
        options: ["덥다 is onregelmatig: vóór een klinker wordt de ㅂ 우.", "덥다 neemt -아요, niet -어요.", "덥다 kan niet in een vraag.", "Na 오늘 moet 은 staan."], answer: 0,
        why: ["Goed: 덥 + 어요 wordt 더워요.", "Het probleem is de ㅂ, niet de keuze tussen -아요 en -어요.", "더워요? is een gewone vraag.", "오늘 kan ook zonder 은."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Koreaans is moeilijk.\" (어렵다)",
      options: ["한국어가 어려워요.", "한국어가 어렵어요.", "한국어가 어려와요.", "한국어가 어렵워요."], answer: 0,
      why: ["Goed: de ㅂ wordt 우, en 우 + 어요 wordt 워요.", "어렵다 is onregelmatig: de ㅂ blijft niet staan.", "우 + 어요 wordt 워요, niet 와요.", "De ㅂ verdwijnt helemaal. Hij wordt 우."] },
    { type: "mc", q: "\"Ik weet het niet.\" (모르다)",
      options: ["몰라요.", "모라요.", "모르어요.", "몰르어요."], answer: 0,
      why: ["Goed: 르 wordt ㄹ + ㄹ, dus 몰라요.", "Je mist de extra ㄹ.", "De 으 valt weg, en er komt een extra ㄹ.", "De 으 valt weg en de klinker wordt 아: 몰라요."] },
    { type: "mc", q: "\"Mijn verkoudheid is helemaal over.\" (낫다)",
      options: ["감기가 다 나았어요.", "감기가 다 낫았어요.", "감기가 다 났어요.", "감기가 다 나섰어요."], answer: 0,
      why: ["Goed: de ㅅ valt weg, en de klinkers trekken niet samen: 나았어요.", "낫다 is onregelmatig: de ㅅ valt weg vóór een klinker.", "Bij ㅅ trekken de klinkers niet samen: 나 + 았 blijft 나았.", "De ㅅ valt weg; hij wordt geen 서."] },
    { type: "mc", q: "\"Ik trek een jas aan.\" (입다)",
      options: ["코트를 입어요.", "코트를 이워요.", "코트를 입아요.", "코트를 입워요."], answer: 0,
      why: ["Goed: 입다 is regelmatig.", "입다 is regelmatig. Alleen bij onregelmatige ㅂ wordt de ㅂ 우.", "De laatste klinker is ㅣ, dus -어요.", "Bij 입다 blijft de ㅂ gewoon staan."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["친구한테 선물을 발았어요.", "친구한테 선물을 받았어요.", "어제 음악을 들었어요.", "공원을 걸었어요."], answer: 0,
      why: ["Goed: dit is fout. 받다 is regelmatig: 받았어요.", "Dit klopt: 받다 is regelmatig.", "Dit klopt: 듣다 wordt 들었어요.", "Dit klopt: 걷다 wordt 걸었어요."] },
    { type: "mc", q: "Welk werkwoord is REGELMATIG?",
      options: ["웃다", "낫다", "덥다", "듣다"], answer: 0,
      why: ["Goed: 웃다 wordt 웃어요. De ㅅ blijft staan.", "낫다 is onregelmatig: 나아요.", "덥다 is onregelmatig: 더워요.", "듣다 is onregelmatig: 들어요."] },
    { type: "mc", q: "Wanneer verandert de stam van 듣다?",
      options: ["Alleen vóór een klinker, zoals in 들어요.", "Altijd, ook in 듣고.", "Alleen in de verleden tijd.", "Nooit: 듣어요 is goed."], answer: 0,
      why: ["Goed: vóór een klinker wordt ㄷ ㄹ. Vóór -고 blijft 듣.", "Vóór een medeklinker blijft de stam gewoon: 듣고.", "Ook in de tegenwoordige tijd: 들어요.", "듣다 is onregelmatig: 들어요."] },
    { type: "fill", q: "지하철이 버스보다 ___. (De metro is sneller dan de bus. 빠르다 = snel)", answers: ["빨라요"],
      hint: "빠르다 eindigt op 르. Wat gebeurt er dan?", why: "르 wordt ㄹ + ㄹ: 빠르 + 아요 = 빨라요." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik weet de naam van die persoon niet.\"",
      tokens: [["그", "geu"], ["사람", "saram"], ["이름을", "ireumeul"], ["몰라요", "mollayo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Het is warm, dus ik trek dunne kleren aan.\"",
      tokens: [["날씨가", "nalssiga"], ["더워서", "deowoseo"], ["얇은", "yalbeun"], ["옷을", "oseul"], ["입어요", "ibeoyo"]] },
    { type: "open", q: "Vertaal: \"Het is vandaag koud.\" (춥다)", model: ["오늘은 추워요.", "오늘 날씨가 추워요."],
      tip: "Check: 춥다 is onregelmatig. De ㅂ wordt 우: 추워요, niet 춥어요." },
    { type: "open", q: "Vertaal: \"Ik heb naar Koreaanse liedjes geluisterd.\"", model: ["한국 노래를 들었어요.", "한국어 노래를 들었어요."],
      tip: "Check: 듣다 wordt 들었어요. De ㄷ wordt ㄹ vóór een klinker." }
  ],
  review: [
    { type: "mc", q: "\"Ik wandel in het park.\" (걷다)",
      options: ["공원에서 걸어요.", "공원에서 걷어요.", "공원에서 걸러요.", "공원에서 걷아요."], answer: 0,
      why: ["Goed: de ㄷ wordt ㄹ vóór een klinker.", "걷다 is onregelmatig: de ㄷ wordt ㄹ.", "Er komt geen extra ㄹ. Dat gebeurt alleen bij 르.", "De ㄷ wordt ㄹ, en na ㅓ komt -어요."] },
    { type: "mc", q: "\"Ik zing een liedje.\" (부르다)",
      options: ["노래를 불러요.", "노래를 부러요.", "노래를 부르어요.", "노래를 불르어요."], answer: 0,
      why: ["Goed: 르 wordt ㄹ + ㄹ, dus 불러요.", "Je mist de extra ㄹ.", "De 으 valt weg, en er komt een extra ㄹ.", "De 으 valt weg: 불러요."] },
    { type: "mc", q: "\"Ik heb een brief gekregen.\" (받다)",
      options: ["편지를 받았어요.", "편지를 발았어요.", "편지를 바왔어요.", "편지를 받었어요."], answer: 0,
      why: ["Goed: 받다 is regelmatig, en na ㅏ komt -았어요.", "받다 is regelmatig. De ㄷ wordt geen ㄹ.", "Alleen onregelmatige ㅂ-werkwoorden krijgen 우.", "De laatste klinker is ㅏ, dus -았어요."] }
  ]
})
