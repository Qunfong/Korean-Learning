({
  id: "09", slug: "beleefd", title: "Bedanken, sorry en bestellen", sub: "Beleefd vragen in winkel en café",
  canDo: "Je kunt nu iets bestellen met 주세요, de prijs vragen, bedanken, sorry zeggen en kiezen tussen formeel en beleefd.",
  guess: {
    q: "Je zit in een café en wilt water. Wat zeg je, denk je?",
    options: ["물 주세요.", "물 얼마예요?", "물 괜찮아요.", "주세요 물."], answer: 0,
    why: ["Goed: eerst het ding (물, water), dan 주세요 (geef me, alstublieft).", "얼마예요? vraagt de prijs. Je krijgt dan geen water.", "괜찮아요 betekent \"het is goed\" of \"nee, dank je\".", "In het Koreaans komt 주세요 achter het ding."]
  },
  problem: "Met een paar vaste zinnen red je je al in een winkel of café. 주세요 betekent \"geef me, alstublieft\". 얼마예요? vraagt de prijs. Bedanken en sorry zeggen kan op twee manieren: formeel met een uitgang op -습니다, of beleefd met een uitgang op -요.",
  pattern: [
    { l: "ding", v: "물", c: 3 }, { l: "aantal", v: "한 잔", c: 4 }, { l: "geef me", v: "주세요", c: 2, key: true }
  ],
  patternCap: "Ding (+ aantal) + 주세요 · prijs: ding + 얼마예요? · formeel -ㅂ니다/-습니다, beleefd -요",
  rules: [
    "주세요 staat achter het ding: 커피 주세요 (keopi juseyo). Een aantal staat ertussen: 커피 한 잔 주세요.",
    "얼마예요? staat ook achter het ding: 이거 얼마예요? (Hoeveel kost dit?)",
    "Formeel eindigt op -ㅂ니다 of -습니다: 감사합니다, 죄송합니다. Beleefd eindigt op -요: 고마워요, 미안해요.",
    "괜찮아요 (gwaenchanayo) betekent \"het is goed, geen probleem\". Het is ook een beleefd \"nee, dank je\".",
    "저기요 (jeogiyo) gebruik je om iemand te roepen, zoals een ober: \"Pardon!\""
  ],
  pitfall: "Laat 요 niet weg. 고마워 en 미안해 zonder 요 zeg je alleen tegen goede vrienden. Tegen een winkelier klinkt dat onbeleefd.",
  examples: [
    { cn: "커피 한 잔 주세요.", py: "Keopi han jan juseyo.", nl: "Eén kop koffie, alstublieft." },
    { cn: "이거 얼마예요?", py: "Igeo eolmayeyo?", nl: "Hoeveel kost dit?" },
    { cn: "죄송합니다. 괜찮아요.", py: "Joesonghamnida. Gwaenchanayo.", nl: "Het spijt me. Geeft niet." },
    { cn: "도와줘서 고마워요.", py: "Dowajwoseo gomawoyo.", nl: "Bedankt voor je hulp." }
  ],
  nuance: [
    { h: "-요 is beleefd genoeg voor bijna alles",
      p: "Met -요 ben je beleefd tegen iedereen die je niet goed kent. De formele vorm op -ㅂ니다/-습니다 hoor je van winkelpersoneel, op het nieuws, in toespraken en op het werk. Als beginner kun je bijna altijd -요 gebruiken. Alleen 감사합니다 en 죄송합니다 hoor je ook in gewone gesprekken heel vaak.",
      ex: [
        { cn: "고마워요.", py: "Gomawoyo.", nl: "Dank je wel. (beleefd)" },
        { cn: "감사합니다.", py: "Gamsahamnida.", nl: "Dank u wel. (formeel)" },
        { cn: "고마워.", py: "Gomawo.", nl: "Bedankt. (alleen tegen vrienden)" }
      ] },
    { h: "Sorry: 죄송합니다 of 미안해요?",
      p: "Allebei betekenen ze \"sorry\". 죄송합니다 is formeel en klinkt sterker. Gebruik het tegen onbekenden, oudere mensen, klanten en je baas. 미안해요 is beleefd maar lichter. Je zegt het tegen collega's of kennissen. Het antwoord is vaak 괜찮아요.",
      ex: [
        { cn: "늦어서 죄송합니다.", py: "Neujeoseo joesonghamnida.", nl: "Sorry dat ik te laat ben. (formeel)" },
        { cn: "미안해요. 괜찮아요.", py: "Mianhaeyo. Gwaenchanayo.", nl: "Sorry. Geeft niet." }
      ] },
    { h: "괜찮아요: ja of nee?",
      p: "괜찮아요 betekent letterlijk \"het is in orde\". Na een excuus is het \"geeft niet\". Biedt iemand je iets aan? Dan betekent het \"nee, dank je\". Wil je het wel? Zeg dan 네, 주세요.",
      ex: [
        { cn: "커피 더 드릴까요? 아니요, 괜찮아요.", py: "Keopi deo deurilkkayo? Aniyo, gwaenchanayo.", nl: "Wilt u nog koffie? Nee, dank u." }
      ] }
  ],
  mistakes: [
    { wrong: "(Tegen een winkelier.) 고마워.", right: "(Tegen een winkelier.) 고마워요.", why: "Zonder 요 praat je zoals tegen vrienden. Tegen onbekenden zeg je 고마워요 of 감사합니다." },
    { wrong: "주세요 커피 한 잔.", right: "커피 한 잔 주세요.", why: "주세요 staat aan het eind, achter het ding." },
    { wrong: "이거 얼마이에요?", right: "이거 얼마예요?", why: "얼마 eindigt op een klinker. Dan komt 예요." },
    { wrong: "A: 죄송합니다. B: 감사합니다.", right: "A: 죄송합니다. B: 괜찮아요.", why: "Op een excuus antwoord je met 괜찮아요 (geeft niet), niet met een bedankje." }
  ],
  vocab: [
    ["주세요", "juseyo", "geef me, alstublieft"], ["감사합니다", "gamsahamnida", "dank u wel (formeel)"], ["고마워요", "gomawoyo", "dank je wel (beleefd)"],
    ["죄송합니다", "joesonghamnida", "het spijt me (formeel)"], ["미안해요", "mianhaeyo", "sorry (beleefd)"], ["괜찮아요", "gwaenchanayo", "geeft niet, het is goed; nee, dank je"],
    ["얼마예요?", "eolmayeyo?", "hoeveel kost het?"], ["저기요", "jeogiyo", "pardon! (om iemand te roepen)"], ["커피", "keopi", "koffie"], ["원", "won", "won (Koreaans geld)"]
  ],
  dialogue: [
    ["Klant", "저기요, 커피 한 잔 주세요.", "Jeogiyo, keopi han jan juseyo.", "Pardon, één koffie, alstublieft."],
    ["Medewerker", "네, 오천 원입니다.", "Ne, ocheon wonimnida.", "Ja, dat is vijfduizend won."],
    ["Klant", "여기요. 물도 있어요?", "Yeogiyo. Muldo isseoyo?", "Alstublieft. Is er ook water?"],
    ["Medewerker", "죄송합니다. 물은 없어요.", "Joesonghamnida. Mureun eopseoyo.", "Het spijt me. Water hebben we niet."],
    ["Klant", "괜찮아요. 감사합니다.", "Gwaenchanayo. Gamsahamnida.", "Geeft niet. Dank u wel."],
    ["Medewerker", "네, 감사합니다.", "Ne, gamsahamnida.", "Ja, dank u wel."]
  ],
  reading: {
    title: "시장에서 (sijangeseo, op de markt)",
    lines: [
      { cn: "오늘 시장에 갔어요.", py: "Oneul sijange gasseoyo.", nl: "Vandaag ging ik naar de markt." },
      { cn: "사과가 정말 맛있어 보였어요.", py: "Sagwaga jeongmal masisseo boyeosseoyo.", nl: "De appels zagen er heel lekker uit." },
      { cn: "\"저기요, 이 사과 얼마예요?\"", py: "\"Jeogiyo, i sagwa eolmayeyo?\"", nl: "\"Pardon, hoeveel kost deze appel?\"" },
      { cn: "\"한 개에 천 원이에요.\"", py: "\"Han gaee cheon wonieyo.\"", nl: "\"Duizend won per stuk.\"" },
      { cn: "\"그럼 세 개 주세요.\"", py: "\"Geureom se gae juseyo.\"", nl: "\"Dan graag drie stuks.\"" },
      { cn: "아주머니가 사과 한 개를 더 주셨어요.", py: "Ajumeoniga sagwa han gaereul deo jusyeosseoyo.", nl: "De verkoopster gaf me er nog een appel bij." },
      { cn: "\"감사합니다!\"", py: "\"Gamsahamnida!\"", nl: "\"Dank u wel!\"" },
      { cn: "\"괜찮아요. 또 오세요.\"", py: "\"Gwaenchanayo. Tto oseyo.\"", nl: "\"Graag gedaan. Kom nog eens terug.\"" }
    ],
    questions: [
      { type: "mc", q: "Hoeveel kost één appel?",
        options: ["Duizend won.", "Drieduizend won.", "Vijfduizend won.", "Niets."], answer: 0,
        why: ["Goed: 한 개에 천 원이에요.", "Drie appels kosten samen drieduizend won. Eén kost er duizend.", "Vijfduizend won is de koffie uit de dialoog.", "Alleen de extra appel kreeg de schrijver gratis."] },
      { type: "mc", q: "Hoeveel appels heeft de schrijver aan het eind?",
        options: ["Vier.", "Drie.", "Eén.", "Twee."], answer: 0,
        why: ["Goed: drie gekocht (세 개), en één extra gekregen (한 개를 더).", "Er kwam er nog één bij: 한 개를 더 주셨어요.", "De schrijver vroeg om drie: 세 개 주세요.", "Twee staat niet in de tekst."] },
      { type: "mc", q: "\"그럼 세 개 주세요.\" Wat doet 주세요 hier?",
        options: ["Het vraagt beleefd om drie appels.", "Het vraagt de prijs van drie appels.", "Het bedankt voor drie appels.", "Het zegt dat drie appels genoeg zijn."], answer: 0,
        why: ["Goed: ding/aantal + 주세요 = geef me, alstublieft.", "De prijs vraag je met 얼마예요?", "Bedanken is 감사합니다.", "Dat zou 괜찮아요 of iets anders zijn. 주세요 is een verzoek."] }
    ]
  },
  questions: [
    { type: "mc", q: "Welke zin is te informeel om een winkelier te bedanken?",
      options: ["고마워.", "감사합니다.", "고마워요.", "감사해요."], answer: 0,
      why: ["Goed: zonder 요 zeg je dit alleen tegen vrienden.", "Deze is formeel en altijd goed.", "Deze is beleefd: met 요.", "Deze is beleefd: met 요."] },
    { type: "mc", q: "\"Hoeveel kost dit?\"",
      options: ["이거 얼마예요?", "이거 얼마이에요?", "얼마 이거예요?", "이거 뭐예요?"], answer: 0,
      why: ["Goed: ding + 얼마예요?", "얼마 eindigt op een klinker, dus 예요.", "Het ding staat vooraan, 얼마예요 achteraan.", "Dit is \"Wat is dit?\" Dan vraag je niet de prijs."] },
    { type: "mc", q: "Iemand botst tegen je op en zegt 죄송합니다. Wat zeg je terug?",
      options: ["괜찮아요.", "감사합니다.", "주세요.", "얼마예요?"], answer: 0,
      why: ["Goed: 괜찮아요 = geeft niet.", "Op een excuus antwoord je niet met een bedankje.", "주세요 is \"geef me\". Dat past hier niet.", "Je vraagt hier geen prijs."] },
    { type: "mc", q: "Welk woord heeft de formele uitgang -ㅂ니다?",
      options: ["죄송합니다", "미안해요", "괜찮아요", "고마워요"], answer: 0,
      why: ["Goed: 합니다 eindigt op -ㅂ니다.", "Deze eindigt op -요: beleefd, niet formeel.", "Deze eindigt op -요.", "Deze eindigt op -요."] },
    { type: "mc", q: "Een ober vraagt of je nog koffie wilt. Je wilt niets meer. Wat zeg je?",
      options: ["아니요, 괜찮아요.", "네, 주세요.", "얼마예요?", "저기요."], answer: 0,
      why: ["Goed: 괜찮아요 is hier een beleefd \"nee, dank je\".", "Dan krijg je juist nog een koffie.", "Je vraagt dan de prijs, je weigert niet.", "저기요 gebruik je om iemand te roepen."] },
    { type: "mc", q: "Je wilt de ober roepen. Wat zeg je?",
      options: ["저기요!", "괜찮아요!", "미안해요!", "주세요!"], answer: 0,
      why: ["Goed: 저기요 = pardon, om iemand te roepen.", "괜찮아요 betekent \"geeft niet\".", "미안해요 is een excuus, geen roep.", "주세요 gebruik je achter het ding dat je wilt."] },
    { type: "order", q: "Zet in de goede volgorde: \"Eén kop koffie, alstublieft.\"",
      tokens: [["커피", "keopi"], ["한", "han"], ["잔", "jan"], ["주세요", "juseyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Pardon, hoeveel kost deze appel?\"",
      tokens: [["저기요", "jeogiyo"], ["이", "i"], ["사과", "sagwa"], ["얼마예요", "eolmayeyo"]] },
    { type: "fill", q: "물 ___. (Water, alstublieft.)", answers: ["주세요", "juseyo"],
      hint: "Welk woord betekent \"geef me, alstublieft\"?", why: "Ding + 주세요: 물 주세요 (mul juseyo)." },
    { type: "fill", q: "이 가방 ___? (Hoeveel kost deze tas?)", answers: ["얼마예요", "eolmayeyo"],
      hint: "얼마 = hoeveel. Wat komt erachter na een klinker?", why: "얼마 eindigt op een klinker: 얼마예요? (eolmayeyo)." },
    { type: "open", q: "Vertaal: \"Twee koffie, alstublieft.\" Schrijf Hangul en romanisatie.", model: ["커피 두 잔 주세요. (Keopi du jan juseyo.)"],
      tip: "Check: eerst het ding, dan het aantal (두 잔), en 주세요 aan het eind." },
    { type: "open", q: "Je stoot per ongeluk iemand aan in de metro. Wat zeg jij, en wat zegt de ander waarschijnlijk? Schrijf Hangul en romanisatie.", model: ["죄송합니다. (Joesonghamnida.) / 괜찮아요. (Gwaenchanayo.)", "미안해요. (Mianhaeyo.) / 괜찮아요. (Gwaenchanayo.)"],
      tip: "Check: tegen een onbekende is 죄송합니다 het veiligst. Het antwoord is 괜찮아요, geen bedankje." }
  ],
  review: [
    { type: "mc", q: "\"Thee, alstublieft.\" (thee = 차)",
      options: ["차 주세요.", "주세요 차.", "차 얼마예요?", "차 괜찮아요."], answer: 0,
      why: ["Goed: ding + 주세요.", "주세요 staat achter het ding.", "Dat vraagt de prijs van de thee.", "Dat betekent eerder \"geen thee, dank je\"."] },
    { type: "mc", q: "Na een toespraak bedank je het publiek, heel formeel. Wat zeg je?",
      options: ["감사합니다.", "고마워.", "미안해요.", "괜찮아요."], answer: 0,
      why: ["Goed: formeel bedanken met -ㅂ니다.", "Zonder 요 is dit voor vrienden. Te informeel voor een publiek.", "미안해요 betekent \"sorry\".", "괜찮아요 betekent \"geeft niet\"."] },
    { type: "mc", q: "Je vriend zegt 미안해요, want hij is vijf minuten te laat. Wat antwoord je?",
      options: ["괜찮아요.", "주세요.", "감사합니다.", "얼마예요?"], answer: 0,
      why: ["Goed: 괜찮아요 = geeft niet.", "주세요 is een verzoek: geef me.", "Op een excuus antwoord je niet met een bedankje.", "Je vraagt hier geen prijs."] }
  ]
})
