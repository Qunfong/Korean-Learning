({
  id: "15", slug: "jiman", title: "-지만", sub: "Maar",
  canDo: "Je kunt nu twee tegengestelde dingen in één zin zeggen met -지만, en een nieuwe zin beginnen met 하지만 of 그렇지만.",
  guess: {
    q: "\"Kimchi is pittig, maar lekker.\" (맵다 = pittig) Welke zin klopt, denk je?",
    options: ["김치는 맵지만 맛있어요.", "김치는 매워지만 맛있어요.", "김치는 매워요지만 맛있어요.", "김치는 맵고 맛있어요."], answer: 0,
    why: ["Goed: 지만 komt aan de kale stam: 맵 + 지만.", "지만 komt aan de kale stam (맵), niet aan de 해요-vorm (매워).", "Na 요 kan geen 지만 meer komen. Gebruik de stam.", "-고 betekent \"en\". Dan is er geen tegenstelling."]
  },
  problem: "In het Nederlands zet je \"maar\" tussen twee zinsdelen. In het Koreaans plak je -지만 aan de stam van het eerste werkwoord of bijvoeglijk naamwoord. Daarna volgt het tweede deel. Wil je twee losse zinnen maken? Dan begin je de tweede zin met 하지만 of 그렇지만.",
  pattern: [
    { l: "waarover", v: "한국어는", c: 1 }, { l: "stam + 지만", v: "어렵지만", c: 2, key: true }, { l: "tegenstelling", v: "재미있어요", c: 4 }
  ],
  patternCap: "Stam + 지만 + tweede deel (moeilijk: 어렵지만 · gaan, verleden: 갔지만 · student: 학생이지만) · losse zin: ... 하지만 / 그렇지만 ...",
  rules: [
    "Stam + 지만. Er is geen klinkerregel: 가지만, 먹지만, 좋지만, 공부하지만.",
    "Verleden tijd: 았/었 + 지만. 갔지만, 먹었지만, 했지만. Het eerste deel krijgt zelf de verleden tijd.",
    "Na een zelfstandig naamwoord: 이지만 na een 받침 (학생이지만). Na een klinker 지만 of 이지만 (친구지만).",
    "Bij een tegenstelling tussen twee personen of dingen krijgen ze vaak allebei 은/는: 저는 ..., 동생은 ...",
    "Twee losse zinnen? Dan begint de tweede zin met 하지만 of 그렇지만. 지만 kan niet alleen aan het begin staan."
  ],
  pitfall: "-지만 komt aan de kale stam, niet aan de 해요-vorm. Je zegt 어렵지만, niet 어려워지만 of 어려워요지만.",
  examples: [
    { cn: "한국어는 어렵지만 재미있어요.", py: "Hangugeoneun eoryeopjiman jaemiisseoyo.", nl: "Koreaans is moeilijk, maar leuk." },
    { cn: "이 가방은 비싸지만 예뻐요.", py: "I gabangeun bissajiman yeppeoyo.", nl: "Deze tas is duur, maar mooi." },
    { cn: "어제는 바빴지만 오늘은 한가해요.", py: "Eojeneun bappatjiman oneureun hangahaeyo.", nl: "Gisteren had ik het druk, maar vandaag heb ik tijd." },
    { cn: "저는 학생이지만 동생은 회사원이에요.", py: "Jeoneun haksaengijiman dongsaengeun hoesawonieyo.", nl: "Ik ben student, maar mijn broer werkt bij een bedrijf." }
  ],
  nuance: [
    { h: "-지만 of 하지만 / 그렇지만?",
      p: "-지만 verbindt twee delen tot één zin. 하지만 en 그렇지만 staan aan het begin van een nieuwe zin. De betekenis is hetzelfde. 그렇지만 klinkt iets netter. 하지만 hoor en lees je overal. Een losse zin geeft het tweede deel iets meer nadruk.",
      ex: [
        { cn: "비싸지만 맛있어요.", py: "Bissajiman masisseoyo.", nl: "Het is duur, maar lekker." },
        { cn: "비싸요. 하지만 맛있어요.", py: "Bissayo. Hajiman masisseoyo.", nl: "Het is duur. Maar het is lekker." }
      ] },
    { h: "Beleefd beginnen: 죄송하지만, 미안하지만",
      p: "Met 죄송하지만 (sorry, maar ...) maak je een vraag of verzoek beleefder. Het is geen echt excuus voor een fout. Het betekent: \"neem me niet kwalijk\". 미안하지만 is hetzelfde, maar minder formeel. Gebruik het tegen vrienden.",
      ex: [
        { cn: "죄송하지만 화장실이 어디예요?", py: "Joesonghajiman hwajangsiri eodiyeyo?", nl: "Neem me niet kwalijk, waar is het toilet?" }
      ] },
    { h: "Verleden tijd in het eerste deel",
      p: "In het Nederlands staat de tijd in elk deel apart, en dat is in het Koreaans ook zo. Gebeurde het eerste deel in het verleden? Dan krijgt de stam zelf 았/었: 공부했지만. Zonder 었 klinkt het alsof het nu gebeurt.",
      ex: [
        { cn: "열심히 공부했지만 시험이 어려웠어요.", py: "Yeolsimhi gongbuhaetjiman siheomi eoryeowosseoyo.", nl: "Ik had hard gestudeerd, maar het examen was moeilijk." }
      ] },
    { h: "-지만 of 그런데?",
      p: "그런데 kan ook \"maar\" betekenen. Toch is het breder: het kan ook \"trouwens\" zijn of achtergrond geven. -지만 is altijd een duidelijke tegenstelling. Twijfel je? Gebruik -지만 voor een echte \"maar\".",
      ex: [
        { cn: "그런데 내일 시간 있어요?", py: "Geureonde naeil sigan isseoyo?", nl: "Trouwens, heb je morgen tijd?" }
      ] }
  ],
  mistakes: [
    { wrong: "김치는 매워요지만 맛있어요.", right: "김치는 맵지만 맛있어요.", why: "지만 komt aan de kale stam (맵), niet na 요." },
    { wrong: "어제 비가 오지만 공원에 갔어요.", right: "어제 비가 왔지만 공원에 갔어요.", why: "Het eerste deel gebeurde gisteren. Dan krijgt het zelf de verleden tijd: 왔지만." },
    { wrong: "저는 학생지만 동생은 회사원이에요.", right: "저는 학생이지만 동생은 회사원이에요.", why: "학생 eindigt op een 받침. Na een zelfstandig naamwoord met 받침 komt 이지만." },
    { wrong: "비싸요. 지만 예뻐요.", right: "비싸요. 하지만 예뻐요.", why: "지만 is een uitgang en kan niet los staan. Aan het begin van een zin gebruik je 하지만." }
  ],
  vocab: [
    ["-지만", "-jiman", "maar (tussen twee zinsdelen)"], ["하지만 / 그렇지만", "hajiman / geureochiman", "maar (aan het begin van een zin)"], ["어렵다", "eoryeopda", "moeilijk"],
    ["맵다", "maepda", "pittig"], ["맛있다", "masitda", "lekker"], ["비싸다", "bissada", "duur"], ["예쁘다", "yeppeuda", "mooi"],
    ["바쁘다", "bappeuda", "druk (bezig)"], ["작다", "jakda", "klein"], ["깨끗하다", "kkaekkeutada", "schoon"]
  ],
  dialogue: [
    ["A", "새 집이 어때요?", "Sae jibi eottaeyo?", "Hoe is je nieuwe huis?"],
    ["B", "조금 작지만 깨끗해요.", "Jogeum jakjiman kkaekkeutaeyo.", "Een beetje klein, maar schoon."],
    ["A", "학교에서 멀어요?", "Hakgyoeseo meoreoyo?", "Is het ver van school?"],
    ["B", "네, 좀 멀어요. 하지만 지하철역이 가까워요.", "Ne, jom meoreoyo. Hajiman jihacheollyeogi gakkawoyo.", "Ja, een beetje ver. Maar het metrostation is dichtbij."],
    ["A", "집세는 비싸요?", "Jipseneun bissayo?", "Is de huur duur?"],
    ["B", "비싸지만 괜찮아요. 저는 이 집이 좋아요.", "Bissajiman gwaenchanayo. Jeoneun i jibi joayo.", "Duur, maar het gaat. Ik vind dit huis fijn."]
  ],
  reading: {
    title: "제 서울 생활",
    lines: [
      { cn: "저는 작년에 한국에 왔어요.", py: "Jeoneun jangnyeone hanguge wasseoyo.", nl: "Ik ben vorig jaar naar Korea gekomen." },
      { cn: "처음에는 한국어를 잘 못했지만 지금은 조금 해요.", py: "Cheoeumeneun hangugeoreul jal motaetjiman jigeumeun jogeum haeyo.", nl: "In het begin sprak ik slecht Koreaans, maar nu spreek ik het een beetje." },
      { cn: "서울은 크지만 지하철이 편해요.", py: "Seoureun keujiman jihacheori pyeonhaeyo.", nl: "Seoul is groot, maar de metro is handig." },
      { cn: "한국 음식은 맵지만 정말 맛있어요.", py: "Hanguk eumsigeun maepjiman jeongmal masisseoyo.", nl: "Koreaans eten is pittig, maar echt lekker." },
      { cn: "제 방은 작아요.", py: "Je bangeun jagayo.", nl: "Mijn kamer is klein." },
      { cn: "하지만 깨끗하고 조용해요.", py: "Hajiman kkaekkeutago joyonghaeyo.", nl: "Maar hij is schoon en rustig." },
      { cn: "가족이 보고 싶지만 서울 생활이 즐거워요.", py: "Gajogi bogo sipjiman Seoul saenghwari jeulgeowoyo.", nl: "Ik mis mijn familie, maar het leven in Seoul is leuk." },
      { cn: "다음 달에 엄마가 한국에 놀러 와요.", py: "Daeum dare eommaga hanguge nolleo wayo.", nl: "Volgende maand komt mijn moeder op bezoek in Korea." }
    ],
    questions: [
      { type: "mc", q: "Hoe is de kamer van de schrijver?",
        options: ["Klein, maar schoon en rustig.", "Groot, maar lawaaierig.", "Klein en vies.", "Groot, schoon en rustig."], answer: 0,
        why: ["Goed: 제 방은 작아요. 하지만 깨끗하고 조용해요.", "Groot (크지만) gaat over Seoul, niet over de kamer.", "깨끗하다 betekent schoon, niet vies.", "작아요 betekent klein."] },
      { type: "mc", q: "Wat vindt de schrijver van Koreaans eten?",
        options: ["Pittig, maar echt lekker.", "Lekker, maar te duur.", "Pittig, en daarom niet lekker.", "Niet pittig, maar lekker."], answer: 0,
        why: ["Goed: 맵지만 정말 맛있어요.", "Over de prijs staat niets in de tekst.", "Er staat 지만 (maar): pittig en toch lekker.", "맵지만 betekent juist: het is pittig."] },
      { type: "mc", q: "가족이 보고 싶지만 서울 생활이 즐거워요. Wat zegt 지만 hier?",
        options: ["Er is een tegenstelling: de schrijver mist haar familie, toch is het leven leuk.", "Het leven is leuk omdat ze haar familie mist.", "Ze mist haar familie en daarna wordt het leven leuk.", "Ze mist haar familie niet."], answer: 0,
        why: ["Goed: -지만 = maar, een tegenstelling.", "-지만 geeft geen reden. Dat zou 그래서 of -아서/어서 zijn.", "-지만 geeft geen volgorde in tijd.", "보고 싶다 betekent missen. Ze mist haar familie dus wel."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Deze kleren zijn duur, maar mooi.\" 이 옷은 ___ 예뻐요.",
      options: ["비싸지만", "비싸요지만", "비쌌지만", "비싸고"], answer: 0,
      why: ["Goed: stam 비싸 + 지만.", "Na 요 kan geen 지만 meer komen.", "비쌌지만 is verleden tijd: \"waren duur\".", "-고 betekent \"en\", niet \"maar\"."] },
    { type: "mc", q: "\"Ik had hard gestudeerd, maar het examen was moeilijk.\"",
      options: ["열심히 공부했지만 시험이 어려웠어요.", "열심히 공부하지만 시험이 어려웠어요.", "열심히 공부했어요지만 시험이 어려웠어요.", "열심히 공부했고 시험이 어려웠어요."], answer: 0,
      why: ["Goed: het eerste deel krijgt zelf de verleden tijd: 했지만.", "Het studeren was in het verleden. Dan wordt het 했지만.", "Na 요 kan geen 지만 meer komen.", "-고 betekent \"en\". Dan is er geen tegenstelling."] },
    { type: "mc", q: "\"Ik ben student, maar mijn oudere zus werkt bij een bedrijf.\"",
      options: ["저는 학생이지만 언니는 회사원이에요.", "저는 학생지만 언니는 회사원이에요.", "저는 학생이에요지만 언니는 회사원이에요.", "저는 학생이고 언니는 회사원이에요."], answer: 0,
      why: ["Goed: 학생 heeft een 받침, dus 이지만.", "Na een zelfstandig naamwoord met 받침 komt 이지만.", "Na 요 kan geen 지만 meer komen.", "-고 betekent \"en\". Dan noem je twee feiten zonder tegenstelling."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["날씨가 추워요지만 기분이 좋아요.", "날씨가 춥지만 기분이 좋아요.", "날씨가 추워요. 하지만 기분이 좋아요.", "날씨가 추워요. 그렇지만 기분이 좋아요."], answer: 0,
      why: ["Goed: deze is fout. 지만 komt aan de stam: 춥지만.", "Deze klopt: stam + 지만.", "Deze klopt: losse zin met 하지만.", "Deze klopt: losse zin met 그렇지만."] },
    { type: "mc", q: "\"Het is duur. Maar het is lekker.\" (twee zinnen)",
      options: ["비싸요. 하지만 맛있어요.", "비싸요. 지만 맛있어요.", "비싸요. 하고 맛있어요.", "비싸요. 그리고 맛있어요."], answer: 0,
      why: ["Goed: aan het begin van een zin staat 하지만.", "지만 is een uitgang en kan niet los staan.", "하고 verbindt zelfstandige naamwoorden, geen zinnen.", "그리고 betekent \"en\", niet \"maar\"."] },
    { type: "mc", q: "죄송하지만 화장실이 어디예요? Wat doet 죄송하지만 hier?",
      options: ["Het maakt de vraag beleefd: neem me niet kwalijk.", "Je biedt excuses aan voor een fout.", "Je zegt dat je het toilet niet kunt vinden.", "Je vraagt of de ander sorry zegt."], answer: 0,
      why: ["Goed: 죄송하지만 maakt een vraag of verzoek beleefder.", "Hier is geen fout gemaakt. Het is een beleefde opening.", "Dat staat er niet. 죄송하다 betekent \"het spijt me\".", "Jij bent de spreker die beleefd vraagt."] },
    { type: "mc", q: "Wat betekent 맵지만 맛있어요?",
      options: ["Het is pittig, maar lekker.", "Het is pittig en lekker.", "Het is niet pittig, maar lekker.", "Het is pittig, daarom is het lekker."], answer: 0,
      why: ["Goed: -지만 = maar.", "\"En\" zou 맵고 zijn.", "맵지만 betekent juist dat het pittig is.", "-지만 geeft geen reden."] },
    { type: "fill", q: "이 방은 ___ 깨끗해요. (Deze kamer is klein, maar schoon. 작다)", answers: ["작지만"],
      hint: "Neem de kale stam van 작다.", why: "Stam 작 + 지만: 작지만." },
    { type: "order", q: "Zet in de goede volgorde: \"Deze tas is duur, maar mooi.\"",
      tokens: [["이", "i"], ["가방은", "gabangeun"], ["비싸지만", "bissajiman"], ["예뻐요", "yeppeoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Gisteren had ik het druk, maar vandaag heb ik tijd.\"",
      tokens: [["어제는", "eojeneun"], ["바빴지만", "bappatjiman"], ["오늘은", "oneureun"], ["한가해요", "hangahaeyo"]] },
    { type: "open", q: "Vertaal: \"Kimchi is pittig, maar lekker.\"", model: ["김치는 맵지만 맛있어요.", "김치는 매워요. 하지만 맛있어요."],
      tip: "Check: 지만 aan de kale stam 맵. Of twee zinnen met 하지만." },
    { type: "open", q: "Vertaal: \"Ik was moe, maar ik heb gestudeerd.\" (피곤하다 = moe)", model: ["피곤했지만 공부했어요.", "저는 피곤했지만 공부했어요."],
      tip: "Check: het eerste deel krijgt zelf de verleden tijd: 피곤했지만." }
  ],
  review: [
    { type: "mc", q: "\"Dit restaurant is klein, maar lekker.\" 이 식당은 ___ 맛있어요.",
      options: ["작지만", "작아지만", "작아요지만", "작고"], answer: 0,
      why: ["Goed: stam 작 + 지만.", "지만 komt aan de kale stam, niet aan 작아.", "Na 요 kan geen 지만 meer komen.", "-고 betekent \"en\", niet \"maar\"."] },
    { type: "mc", q: "\"Ik heb gisteren op mijn vriend gewacht, maar hij kwam niet.\" 어제 친구를 ___ 안 왔어요.",
      options: ["기다렸지만", "기다리지만", "기다렸어요지만", "기다려지만"], answer: 0,
      why: ["Goed: het wachten was gisteren, dus 기다렸 + 지만.", "Het eerste deel gebeurde gisteren. Dan krijgt het 었.", "Na 요 kan geen 지만 meer komen.", "지만 komt niet aan de 해요-vorm 기다려."] },
    { type: "mc", q: "\"Het is vandaag zondag, maar ik werk.\" 오늘은 ___ 일해요.",
      options: ["일요일이지만", "일요일지만", "일요일이에요지만", "일요일이고"], answer: 0,
      why: ["Goed: 일요일 heeft een 받침, dus 이지만.", "Na een zelfstandig naamwoord met 받침 komt 이지만.", "Na 요 kan geen 지만 meer komen.", "-고 betekent \"en\". Dan is er geen tegenstelling."] }
  ]
})
