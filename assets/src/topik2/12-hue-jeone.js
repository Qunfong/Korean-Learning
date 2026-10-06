({
  id: "12", slug: "hue-jeone", title: "-(으)ㄴ 후에 en -기 전에", sub: "Na en voor: de volgorde van twee dingen",
  canDo: "Je kunt nu zeggen wat je doet voordat of nadat je iets anders doet, met -기 전에 en -(으)ㄴ 후에.",
  guess: {
    q: "\"Voordat ik ga slapen, poets ik mijn tanden.\" Welke zin klopt, denk je?",
    options: ["자기 전에 이를 닦아요.", "잔 전에 이를 닦아요.", "자기 후에 이를 닦아요.", "잤기 전에 이를 닦아요."], answer: 0,
    why: ["Goed: stam + 기 전에 = voordat.", "전에 krijgt -기, niet -ㄴ.", "후에 betekent \"na\", en krijgt -ㄴ, niet -기.", "Vóór -기 전에 komt geen verleden tijd."]
  },
  problem: "In het Nederlands zet je \"voordat\" of \"nadat\" vooraan in de bijzin. Het Koreaans zet ze achter het werkwoord, net als \"na het eten\". 먹기 전에 = voor het eten, 먹은 후에 = na het eten. Daarna volgt de rest van de zin.",
  pattern: [
    { l: "eerste handeling", v: "밥을 먹", c: 3 }, { l: "-(으)ㄴ 후에", v: "은 후에", c: 2, key: true }, { l: "tweede handeling", v: "커피를 마셔요", c: 5 }
  ],
  patternCap: "Stam + (으)ㄴ 후에 / 다음에 / 뒤에 (na); stam + 기 전에 (voor); naamwoord + 후에 / 전에",
  rules: [
    "Na: stam + ㄴ 후에 na een klinker (간 후에), stam + 은 후에 na een 받침 (먹은 후에). Bij een stam op ㄹ valt de ㄹ weg: 만든 후에.",
    "Voor: stam + 기 전에, altijd dezelfde vorm: 가기 전에, 먹기 전에.",
    "De tijd staat alleen aan het eind van de zin. Vóór 후에 en 전에 komt geen -았/었-: 먹은 후에, niet 먹었은 후에.",
    "Na een naamwoord zet je 후에 of 전에 direct, zonder -기 of -(으)ㄴ: 수업 후에, 식사 전에.",
    "-(으)ㄴ 다음에 en -(으)ㄴ 뒤에 betekenen hetzelfde als -(으)ㄴ 후에."
  ],
  pitfall: "Elke vorm hoort bij één woord: 전에 krijgt -기, 후에 krijgt -(으)ㄴ. Wissel ze niet om: 먹은 전에 en 먹기 후에 bestaan niet.",
  examples: [
    { cn: "밥을 먹은 후에 커피를 마셔요.", py: "Babeul meogeun hue keopireul masyeoyo.", nl: "Na het eten drink ik koffie." },
    { cn: "자기 전에 이를 닦아요.", py: "Jagi jeone ireul dakkayo.", nl: "Voor het slapengaan poets ik mijn tanden." },
    { cn: "수업이 끝난 다음에 도서관에 갔어요.", py: "Sueobi kkeunnan daeume doseogwane gasseoyo.", nl: "Nadat de les afgelopen was, ging ik naar de bibliotheek." },
    { cn: "한국에 오기 전에 한국어를 조금 배웠어요.", py: "Hanguge ogi jeone hangugeoreul jogeum baewosseoyo.", nl: "Voordat ik naar Korea kwam, heb ik een beetje Koreaans geleerd." }
  ],
  nuance: [
    { h: "De tijd staat alleen aan het eind",
      p: "Vóór 후에 en 전에 staat nooit een verleden of toekomende tijd. Het einde van de zin bepaalt de tijd voor allebei. 먹은 lijkt op een verleden tijd, maar het betekent alleen \"na het eten\". Dezelfde vorm kan dus over gisteren of over morgen gaan.",
      ex: [
        { cn: "밥을 먹은 후에 산책했어요.", py: "Babeul meogeun hue sanchaekaesseoyo.", nl: "Na het eten heb ik gewandeld." },
        { cn: "밥을 먹은 후에 산책할 거예요.", py: "Babeul meogeun hue sanchaekal geoyeyo.", nl: "Na het eten ga ik wandelen." }
      ] },
    { h: "후에, 다음에 of 뒤에?",
      p: "Alle drie betekenen \"na\". 후에 klinkt iets formeler en zie je ook veel in geschreven tekst. 다음에 is heel gewoon in de spreektaal. 뒤에 betekent ook \"achter\" (een plaats), maar na -(으)ㄴ gaat het over tijd. Let op: 다음에 alleen betekent \"een volgende keer\".",
      ex: [
        { cn: "영화를 본 뒤에 저녁을 먹었어요.", py: "Yeonghwareul bon dwie jeonyeogeul meogeosseoyo.", nl: "Na de film hebben we gegeten." },
        { cn: "다음에 또 만나요.", py: "Daeume tto mannayo.", nl: "Tot de volgende keer." }
      ] },
    { h: "Naamwoord en tijdsduur + 후에/전에",
      p: "Na een naamwoord komt 후에 of 전에 direct: 수업 후에 (na de les), 식사 전에 (voor de maaltijd). Na een tijdsduur betekent 전에 \"geleden\" en 후에 \"over\". 3년 전에 is drie jaar geleden. 10분 후에 is over tien minuten.",
      ex: [
        { cn: "3년 전에 서울에 왔어요.", py: "Samnyeon jeone seoure wasseoyo.", nl: "Ik kwam drie jaar geleden naar Seoul." },
        { cn: "10분 후에 출발해요.", py: "Sipbun hue chulbalhaeyo.", nl: "Over tien minuten vertrekken we." }
      ] }
  ],
  mistakes: [
    { wrong: "밥을 먹었은 후에 커피를 마셨어요.", right: "밥을 먹은 후에 커피를 마셨어요.", why: "Vóór 후에 komt geen verleden tijd. De tijd staat aan het eind." },
    { wrong: "수업이 끝나기 후에 만나요.", right: "수업이 끝난 후에 만나요.", why: "후에 krijgt -(으)ㄴ, niet -기." },
    { wrong: "밥을 먹은 전에 손을 씻어요.", right: "밥을 먹기 전에 손을 씻어요.", why: "전에 krijgt -기, niet -(으)ㄴ." },
    { wrong: "케이크를 만들은 후에 먹었어요.", right: "케이크를 만든 후에 먹었어요.", why: "Bij een stam op ㄹ valt de ㄹ weg: 만들 + ㄴ = 만든." }
  ],
  vocab: [
    ["-(으)ㄴ 후에 / -기 전에", "-(eu)n hue / -gi jeone", "nadat / voordat"], ["끝나다", "kkeunnada", "eindigen, afgelopen zijn"], ["이를 닦다", "ireul dakda", "tanden poetsen"],
    ["손", "son", "hand"], ["씻다", "ssitda", "wassen"], ["배우다", "baeuda", "leren"],
    ["산책하다", "sanchaekada", "wandelen"], ["출발하다", "chulbalhada", "vertrekken"], ["먼저", "meonjeo", "eerst"], ["학원", "hagwon", "(taal)school, instituut"]
  ],
  dialogue: [
    ["A", "수업이 끝난 다음에 뭐 할 거예요?", "Sueobi kkeunnan daeume mwo hal geoyeyo?", "Wat ga je doen na de les?"],
    ["B", "도서관에서 공부한 후에 집에 갈 거예요.", "Doseogwaneseo gongbuhan hue jibe gal geoyeyo.", "Ik ga eerst in de bibliotheek studeren en dan naar huis."],
    ["A", "그럼 집에 가기 전에 같이 저녁 먹어요.", "Geureom jibe gagi jeone gachi jeonyeok meogeoyo.", "Laten we dan samen eten voordat je naar huis gaat."],
    ["B", "좋아요. 6시 후에 괜찮아요?", "Joayo. Yeoseotsi hue gwaenchanayo?", "Goed. Is na zessen goed?"],
    ["A", "네, 그럼 6시에 도서관 앞에서 만나요.", "Ne, geureom yeoseotsie doseogwan apeseo mannayo.", "Ja, dan zien we elkaar om zes uur voor de bibliotheek."]
  ],
  reading: {
    title: "출근하기 전에",
    lines: [
      { cn: "저는 매일 아침 6시에 일어나요.", py: "Jeoneun maeil achim yeoseotsie ireonayo.", nl: "Ik sta elke ochtend om zes uur op." },
      { cn: "일어난 후에 먼저 물을 한 잔 마셔요.", py: "Ireonan hue meonjeo mureul han jan masyeoyo.", nl: "Na het opstaan drink ik eerst een glas water." },
      { cn: "그리고 30분 동안 공원에서 산책해요.", py: "Geurigo samsipbun dongan gongwoneseo sanchaekaeyo.", nl: "Daarna wandel ik dertig minuten in het park." },
      { cn: "산책한 다음에 샤워를 하고 아침을 먹어요.", py: "Sanchaekan daeume syaworeul hago achimeul meogeoyo.", nl: "Na het wandelen douche ik en ontbijt ik." },
      { cn: "아침을 먹기 전에 꼭 손을 씻어요.", py: "Achimeul meokgi jeone kkok soneul ssiseoyo.", nl: "Voor het ontbijt was ik altijd mijn handen." },
      { cn: "회사에 가기 전에 뉴스를 봐요.", py: "Hoesae gagi jeone nyuseureul bwayo.", nl: "Voordat ik naar mijn werk ga, kijk ik naar het nieuws." },
      { cn: "8시에 집에서 출발해요.", py: "Yeodeolsie jibeseo chulbalhaeyo.", nl: "Om acht uur vertrek ik van huis." },
      { cn: "일이 끝난 후에는 한국어 학원에 가요.", py: "Iri kkeunnan huene hangugeo hagwone gayo.", nl: "Na het werk ga ik naar de Koreaanse taalschool." },
      { cn: "저는 1년 후에 한국에서 일하고 싶어요.", py: "Jeoneun illyeon hue hangugeseo ilhago sipeoyo.", nl: "Over een jaar wil ik in Korea werken." }
    ],
    questions: [
      { type: "mc", q: "Wat doet de schrijver direct na het opstaan?",
        options: ["Hij drinkt een glas water.", "Hij wandelt in het park.", "Hij kijkt naar het nieuws.", "Hij douchet."], answer: 0,
        why: ["Goed: 일어난 후에 먼저 물을 한 잔 마셔요.", "Wandelen komt pas na het water.", "Het nieuws kijkt hij voordat hij naar zijn werk gaat.", "Douchen komt na het wandelen."] },
      { type: "mc", q: "Wat doet hij na het werk?",
        options: ["Hij gaat naar de Koreaanse taalschool.", "Hij gaat wandelen.", "Hij kijkt naar het nieuws.", "Hij gaat meteen slapen."], answer: 0,
        why: ["Goed: 일이 끝난 후에는 한국어 학원에 가요.", "Wandelen doet hij 's ochtends.", "Het nieuws kijkt hij 's ochtends.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "아침을 먹기 전에 꼭 손을 씻어요. Wat doet hij eerst?",
        options: ["Zijn handen wassen.", "Ontbijten.", "Allebei tegelijk.", "Eerst ontbijten, dan nog een keer eten."], answer: 0,
        why: ["Goed: -기 전에 = voordat. Eerst handen wassen, dan ontbijten.", "-기 전에 betekent \"voordat\": het ontbijt komt erna.", "-기 전에 geeft een volgorde, niet \"tegelijk\".", "Er staat maar één maaltijd in deze zin."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Na de les ga ik naar huis.\"",
      options: ["수업이 끝난 후에 집에 가요.", "수업이 끝나기 후에 집에 가요.", "수업이 끝났은 후에 집에 가요.", "수업이 끝나는 후에 집에 가요."], answer: 0,
      why: ["Goed: 끝나 + ㄴ 후에.", "후에 krijgt -(으)ㄴ, niet -기.", "Vóór 후에 komt geen verleden tijd.", "Vóór 후에 staat -(으)ㄴ, niet -는."] },
    { type: "mc", q: "\"Was je handen voor het eten.\"",
      options: ["밥을 먹기 전에 손을 씻으세요.", "밥을 먹은 전에 손을 씻으세요.", "밥을 먹었기 전에 손을 씻으세요.", "밥을 먹 전에 손을 씻으세요."], answer: 0,
      why: ["Goed: stam + 기 전에.", "전에 krijgt -기, niet -(으)ㄴ.", "Vóór -기 전에 komt geen verleden tijd.", "Tussen de stam en 전에 hoort -기."] },
    { type: "mc", q: "케이크를 ___ 후에 사진을 찍었어요. (Nadat ik de taart had gemaakt, maakte ik een foto.)",
      options: ["만든", "만들은", "만들", "만들었은"], answer: 0,
      why: ["Goed: de ㄹ valt weg vóór ㄴ: 만든.", "Bij een stam op ㄹ komt geen 은. De ㄹ valt weg: 만든.", "Zonder -ㄴ betekent het niet \"na\".", "Vóór 후에 komt geen verleden tijd."] },
    { type: "mc", q: "밥을 먹은 후에 산책할 거예요. Wanneer wordt er gegeten?",
      options: ["Straks, in de toekomst.", "Gisteren.", "Nu, op dit moment.", "Er wordt niet gegeten."], answer: 0,
      why: ["Goed: de tijd staat aan het eind (할 거예요), en die geldt voor de hele zin.", "먹은 lijkt verleden tijd, maar de tijd van de zin staat aan het eind.", "-(으)ㄴ 후에 betekent \"na\", niet \"nu\".", "Het eten gebeurt wel: eerst eten, dan wandelen."] },
    { type: "mc", q: "\"Na de film eten we samen.\"",
      options: ["영화 후에 같이 밥 먹어요.", "영화한 후에 같이 밥 먹어요.", "영화기 후에 같이 밥 먹어요.", "영화은 후에 같이 밥 먹어요."], answer: 0,
      why: ["Goed: na een naamwoord komt 후에 direct.", "영화 is geen werkwoord. 영화하다 bestaat niet.", "-기 hoort bij een werkwoord, en bij 전에.", "-은 hoort bij een werkwoordstam, niet bij een naamwoord."] },
    { type: "mc", q: "3년 전에 한국에 왔어요. Wat betekent 3년 전에?",
      options: ["drie jaar geleden", "over drie jaar", "drie jaar lang", "drie keer per jaar"], answer: 0,
      why: ["Goed: tijdsduur + 전에 = geleden.", "\"Over drie jaar\" is 3년 후에.", "\"Drie jaar lang\" is 3년 동안.", "Er staat niets over hoe vaak."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["숙제를 했은 다음에 게임을 해요.", "숙제를 한 다음에 게임을 해요.", "숙제를 한 뒤에 게임을 해요.", "숙제를 하기 전에 게임을 해요."], answer: 0,
      why: ["Goed: dit is fout. Vóór 다음에 komt geen verleden tijd: 한 다음에.", "Dit klopt: 하 + ㄴ 다음에.", "Dit klopt: 뒤에 betekent hier hetzelfde als 후에.", "Dit klopt, al betekent het iets anders: eerst gamen, dan huiswerk."] },
    { type: "fill", q: "집에 ___ 전에 전화하세요. (Bel voordat je naar huis gaat.)", answers: ["가기"],
      hint: "Welke vorm krijgt 가다 vóór 전에?", why: "Stam + 기 전에: 가기 전에." },
    { type: "order", q: "Zet in de goede volgorde: \"Nadat ik mijn tanden heb gepoetst, ga ik slapen.\"",
      tokens: [["이를", "ireul"], ["닦은", "dakkeun"], ["후에", "hue"], ["자요", "jayo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Voor het eten was ik mijn handen.\"",
      tokens: [["밥을", "babeul"], ["먹기", "meokgi"], ["전에", "jeone"], ["손을", "soneul"], ["씻어요", "ssiseoyo"]] },
    { type: "open", q: "Vertaal: \"Na het werk ga ik sporten.\"", model: ["일이 끝난 후에 운동해요.", "일이 끝난 다음에 운동해요.", "퇴근한 후에 운동해요."],
      tip: "Check: -(으)ㄴ 후에/다음에, zonder verleden tijd ervoor. De tijd staat aan het eind." },
    { type: "open", q: "Vertaal: \"Voordat ik naar mijn werk ga, drink ik koffie.\"", model: ["회사에 가기 전에 커피를 마셔요.", "출근하기 전에 커피를 마셔요."],
      tip: "Check: stam + 기 전에. Niet 간 전에." }
  ],
  review: [
    { type: "mc", q: "\"Na het douchen ga ik ontbijten.\"",
      options: ["샤워한 후에 아침을 먹어요.", "샤워하기 후에 아침을 먹어요.", "샤워했은 후에 아침을 먹어요.", "샤워하는 후에 아침을 먹어요."], answer: 0,
      why: ["Goed: 샤워하 + ㄴ 후에.", "후에 krijgt -(으)ㄴ, niet -기.", "Vóór 후에 komt geen verleden tijd.", "Vóór 후에 staat -(으)ㄴ, niet -는."] },
    { type: "mc", q: "\"Doe het licht uit voordat je weggaat.\"",
      options: ["나가기 전에 불을 끄세요.", "나간 전에 불을 끄세요.", "나갔기 전에 불을 끄세요.", "나가서 전에 불을 끄세요."], answer: 0,
      why: ["Goed: stam + 기 전에.", "전에 krijgt -기, niet -ㄴ.", "Vóór -기 전에 komt geen verleden tijd.", "-아서 kan niet vóór 전에 staan."] },
    { type: "mc", q: "\"Over een uur vertrekken we.\"",
      options: ["한 시간 후에 출발해요.", "한 시간 전에 출발해요.", "한 시간 동안 출발해요.", "한 시간한 후에 출발해요."], answer: 0,
      why: ["Goed: tijdsduur + 후에 = over.", "전에 betekent hier \"geleden\" of \"ervoor\".", "동안 betekent \"lang\", niet \"over\".", "Na een naamwoord komt 후에 direct, zonder 하다."] }
  ]
})
