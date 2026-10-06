({
  id: "11", slug: "getallen", title: "Getallen en telwoorden", sub: "일, 이, 삼 en 하나, 둘, 셋",
  canDo: "Je kunt nu tijd, leeftijd, prijzen en aantallen zeggen met de juiste reeks getallen en het juiste telwoord.",
  guess: {
    q: "Iemand vraagt hoe laat het is. Je wilt zeggen: \"Het is drie uur.\" Welke zin klopt, denk je?",
    options: ["세 시예요.", "삼 시예요.", "셋 시예요.", "세 분이에요."], answer: 0,
    why: ["Goed: voor het uur gebruik je de puur Koreaanse getallen, en 셋 wordt 세 voor een telwoord.", "삼 is Sino-Koreaans. Voor het uur gebruik je puur Koreaans: 세 시.", "Voor een telwoord wordt 셋 korter: 세.", "분 is een minuut (en 세 분 betekent drie personen, beleefd). Het uur is 시."]
  },
  problem: "Het Koreaans heeft twee reeksen getallen. De Sino-Koreaanse reeks (일, 이, 삼) gebruik je voor geld, minuten, data en verdiepingen. De puur Koreaanse reeks (하나, 둘, 셋) gebruik je om dingen en mensen te tellen, voor het uur en voor je leeftijd. Na het getal komt bijna altijd een telwoord, zoals 개 (stuks) of 명 (personen).",
  pattern: [
    { l: "wat", v: "사과", c: 1 }, { l: "getal", v: "세", c: 2, key: true }, { l: "telwoord", v: "개", c: 3, key: true }, { l: "werkwoord", v: "주세요", c: 4 }
  ],
  patternCap: "Ding + getal + telwoord · Sino-Koreaans: 삼 층, 삼십 분, 오천 원 · puur Koreaans: 세 개, 세 명, 세 시, 스무 살",
  rules: [
    "Sino-Koreaans (일, 이, 삼, 사, 오 ...) gebruik je bij 원 (geld), 분 (minuten), 층 (verdieping), 월 en 일 (datum) en telefoonnummers.",
    "Puur Koreaans (하나, 둘, 셋, 넷 ...) gebruik je bij 개 (stuks), 명 (personen), 시 (uur), 살 (leeftijd) en 잔 (glazen, kopjes).",
    "Voor een telwoord worden vijf getallen korter: 하나 → 한, 둘 → 두, 셋 → 세, 넷 → 네, 스물 → 스무. Ook in samenstellingen: 열한 개, 스물두 살.",
    "De volgorde is: ding + getal + telwoord. Je zegt 사과 세 개 (appel drie stuks), niet 세 사과.",
    "Vraag je naar een getal? Dan gebruik je 몇 + telwoord: 몇 시, 몇 살, 몇 개, 몇 층."
  ],
  pitfall: "Bij de klok gebruik je twee reeksen tegelijk. Het uur is puur Koreaans, de minuten zijn Sino-Koreaans: 세 시 삼십 분 (half vier).",
  examples: [
    { cn: "사과 세 개 주세요.", py: "Sagwa se gae juseyo.", nl: "Drie appels, alstublieft." },
    { cn: "지금 두 시 십 분이에요.", py: "Jigeum du si sip bunieyo.", nl: "Het is nu tien over twee." },
    { cn: "이 가방은 삼만 원이에요.", py: "I gabangeun samman wonieyo.", nl: "Deze tas kost 30.000 won." },
    { cn: "제 동생은 스무 살이에요.", py: "Je dongsaengeun seumu sarieyo.", nl: "Mijn jongere broer is twintig." }
  ],
  nuance: [
    { h: "Welke reeks bij welk telwoord?",
      p: "Er is geen logische regel. Je leert per telwoord welke reeks erbij hoort. Een handig ezelsbruggetje: tellen en de klok (uren) zijn puur Koreaans. Meten en nummeren (geld, minuten, datum, verdieping) is Sino-Koreaans. Let op: bij hetzelfde getal 3 hoor je dus 세 of 삼, afhankelijk van het telwoord.",
      ex: [
        { cn: "세 명이에요.", py: "Se myeongieyo.", nl: "Het zijn drie personen." },
        { cn: "삼 층이에요.", py: "Sam cheungieyo.", nl: "Het is de derde verdieping." }
      ] },
    { h: "Korte vorm alleen voor een telwoord",
      p: "한, 두, 세, 네 en 스무 gebruik je alleen direct voor een telwoord. Tel je hardop, of antwoord je zonder telwoord? Dan gebruik je de volle vorm: 하나, 둘, 셋. Boven de 20 werkt het net zo: 스물하나 wordt 스물한 voor een telwoord.",
      ex: [
        { cn: "몇 개 드릴까요? 하나 주세요.", py: "Myeot gae deurilkkayo? Hana juseyo.", nl: "Hoeveel wilt u er? Eén, alstublieft." },
        { cn: "스물한 살이에요.", py: "Seumulhan sarieyo.", nl: "Ik ben eenentwintig." }
      ] },
    { h: "Geld: 만 is een eigen eenheid",
      p: "Het Koreaans telt in blokken van 10.000 (만), niet van 1.000. 10.000 is gewoon 만, zonder 일. 50.000 is 오만, en 100.000 is 십만. Een prijs zeg je dus met 만 en 천: 15.000 won is 만 오천 원. Zeg niet 일만 원 of 십천 원.",
      ex: [
        { cn: "만 오천 원이에요.", py: "Man ocheon wonieyo.", nl: "Het kost 15.000 won." }
      ] },
    { h: "Datum: twee maanden met een andere vorm",
      p: "Maanden zijn Sino-Koreaans: getal + 월. Twee maanden klinken anders: juni is 유월 (niet 육월) en oktober is 시월 (niet 십월). De volgorde is maand, dan dag: 유월 오일 is 5 juni.",
      ex: [
        { cn: "제 생일은 시월 구일이에요.", py: "Je saengireun siwol guirieyo.", nl: "Mijn verjaardag is op 9 oktober." }
      ] }
  ],
  mistakes: [
    { wrong: "지금 삼 시예요.", right: "지금 세 시예요.", why: "Het uur gebruikt puur Koreaanse getallen: 세 시." },
    { wrong: "사과 하나 개 주세요.", right: "사과 한 개 주세요.", why: "Voor een telwoord wordt 하나 korter: 한." },
    { wrong: "저는 스물 살이에요.", right: "저는 스무 살이에요.", why: "Voor een telwoord wordt 스물 korter: 스무 살." },
    { wrong: "일만 원이에요.", right: "만 원이에요.", why: "10.000 is gewoon 만. Je zet er geen 일 voor." }
  ],
  vocab: [
    ["일, 이, 삼 / 하나, 둘, 셋", "il, i, sam / hana, dul, set", "Sino-Koreaanse en puur Koreaanse getallen"], ["개", "gae", "stuk (telwoord voor dingen)"], ["명", "myeong", "persoon (telwoord)"],
    ["시", "si", "uur (op de klok)"], ["분", "bun", "minuut"], ["살", "sal", "jaar oud"], ["원", "won", "won (Koreaans geld)"],
    ["층", "cheung", "verdieping"], ["몇", "myeot", "hoeveel, welk (getal)"], ["얼마예요?", "eolmayeyo?", "hoeveel kost het?"]
  ],
  dialogue: [
    ["A", "사과 얼마예요?", "Sagwa eolmayeyo?", "Hoeveel kosten de appels?"],
    ["B", "한 개에 천 원이에요.", "Han gaee cheon wonieyo.", "Duizend won per stuk."],
    ["A", "그럼 다섯 개 주세요.", "Geureom daseot gae juseyo.", "Dan wil ik er vijf."],
    ["B", "네, 오천 원이에요.", "Ne, ocheon wonieyo.", "Goed, dat is 5.000 won."],
    ["A", "여기 만 원 있어요.", "Yeogi man won isseoyo.", "Alstublieft, 10.000 won."],
    ["B", "네, 오천 원 받으세요.", "Ne, ocheon won badeuseyo.", "Dank u, hier is 5.000 won terug."]
  ],
  reading: {
    title: "민지의 하루",
    lines: [
      { cn: "제 이름은 민지예요.", py: "Je ireumeun Minjiyeyo.", nl: "Ik heet Minji." },
      { cn: "저는 스물두 살이에요.", py: "Jeoneun seumuldu sarieyo.", nl: "Ik ben tweeëntwintig." },
      { cn: "우리 가족은 네 명이에요.", py: "Uri gajogeun ne myeongieyo.", nl: "Mijn gezin bestaat uit vier personen." },
      { cn: "우리 집은 오 층에 있어요.", py: "Uri jibeun o cheunge isseoyo.", nl: "Ons huis is op de vijfde verdieping." },
      { cn: "저는 아침 일곱 시에 일어나요.", py: "Jeoneun achim ilgop sie ireonayo.", nl: "Ik sta 's ochtends om zeven uur op." },
      { cn: "수업은 아홉 시 삼십 분에 있어요.", py: "Sueobeun ahop si samsip bune isseoyo.", nl: "Mijn les is om half tien." },
      { cn: "점심에 김밥 두 줄을 먹어요.", py: "Jeomsime gimbap du jureul meogeoyo.", nl: "Als lunch eet ik twee rollen kimbap." },
      { cn: "김밥은 한 줄에 삼천 원이에요.", py: "Gimbabeun han jure samcheon wonieyo.", nl: "Kimbap kost 3.000 won per rol." },
      { cn: "제 생일은 시월 구일이에요.", py: "Je saengireun siwol guirieyo.", nl: "Mijn verjaardag is op 9 oktober." }
    ],
    questions: [
      { type: "mc", q: "Hoe oud is Minji?",
        options: ["22 jaar.", "20 jaar.", "2 jaar.", "12 jaar."], answer: 0,
        why: ["Goed: 스물두 살 = 20 + 2.", "스물 is 20, maar er staat 스물두: 22.", "두 살 is 2 jaar. Hier staat 스물 ervoor.", "12 is 열두. Hier staat 스물두."] },
      { type: "mc", q: "Hoeveel betaalt Minji voor haar lunch?",
        options: ["6.000 won.", "3.000 won.", "2.000 won.", "5.000 won."], answer: 0,
        why: ["Goed: twee rollen van 3.000 won is 6.000 won.", "3.000 won is de prijs van één rol. Ze eet er twee.", "두 is het aantal rollen, niet de prijs.", "Dat getal staat niet bij de lunch. 오 층 is de verdieping."] },
      { type: "mc", q: "Waarom staat er 아홉 시 maar 삼십 분?",
        options: ["Het uur is puur Koreaans, de minuten zijn Sino-Koreaans.", "Het uur is Sino-Koreaans, de minuten zijn puur Koreaans.", "Boven de tien gebruik je altijd Sino-Koreaans.", "Je mag kiezen. Beide reeksen kunnen bij 시 en 분."], answer: 0,
        why: ["Goed: 시 neemt puur Koreaans (아홉), 분 neemt Sino-Koreaans (삼십).", "Het is andersom: 아홉 is puur Koreaans, 삼십 is Sino-Koreaans.", "Het gaat om het telwoord, niet om de grootte: 열 시 is puur Koreaans.", "Je mag niet kiezen. 삼 시 of 서른 분 is fout."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Het is half vier.\" Welke zin klopt?",
      options: ["세 시 삼십 분이에요.", "삼 시 삼십 분이에요.", "세 시 서른 분이에요.", "셋 시 삼십 분이에요."], answer: 0,
      why: ["Goed: uur puur Koreaans en kort (세), minuten Sino-Koreaans (삼십).", "Het uur is puur Koreaans: 세 시, niet 삼 시.", "Minuten zijn Sino-Koreaans: 삼십 분, niet 서른 분.", "Voor een telwoord wordt 셋 korter: 세 시."] },
    { type: "mc", q: "\"Twee koffie, alstublieft.\" (잔 = kopje)",
      options: ["커피 두 잔 주세요.", "커피 둘 잔 주세요.", "커피 이 잔 주세요.", "두 잔 커피 주세요."], answer: 0,
      why: ["Goed: ding + kort getal + telwoord: 커피 두 잔.", "Voor een telwoord wordt 둘 korter: 두.", "잔 neemt puur Koreaanse getallen, niet 이.", "De volgorde is ding + getal + telwoord: 커피 두 잔."] },
    { type: "mc", q: "\"Ik ben twintig.\" Welke zin klopt?",
      options: ["저는 스무 살이에요.", "저는 스물 살이에요.", "저는 이십 살이에요.", "저는 스무 시예요."], answer: 0,
      why: ["Goed: leeftijd is puur Koreaans, en 스물 wordt 스무 voor 살.", "Voor een telwoord wordt 스물 korter: 스무.", "살 neemt puur Koreaanse getallen, niet 이십.", "시 is het uur op de klok. Leeftijd is 살."] },
    { type: "mc", q: "\"Dat is 10.000 won.\" Welke zin klopt?",
      options: ["만 원이에요.", "일만 원이에요.", "열 원이에요.", "십천 원이에요."], answer: 0,
      why: ["Goed: 10.000 is gewoon 만.", "Voor 만 zet je geen 일.", "열 is tien. Dan is het maar 10 won.", "Koreaans telt in blokken van 만. \"Tien duizend\" letterlijk bestaat niet."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["사과 삼 개 주세요.", "사과 세 개 주세요.", "사무실은 삼 층에 있어요.", "오 분 기다려 주세요."], answer: 0,
      why: ["Goed: deze is fout. 개 neemt puur Koreaans: 세 개.", "Deze klopt: 개 + puur Koreaans, kort.", "Deze klopt: 층 neemt Sino-Koreaans.", "Deze klopt: 분 neemt Sino-Koreaans."] },
    { type: "mc", q: "\"Het is 5 juni.\" Welke zin klopt?",
      options: ["유월 오일이에요.", "육월 오일이에요.", "오일 유월이에요.", "여섯 월 오일이에요."], answer: 0,
      why: ["Goed: juni is 유월, en eerst de maand, dan de dag.", "Juni heeft een eigen vorm: 유월, niet 육월.", "De volgorde is maand, dan dag: 유월 오일.", "Maanden zijn Sino-Koreaans, geen 여섯."] },
    { type: "mc", q: "Wat betekent 몇 살이에요?",
      options: ["Hoe oud ben je?", "Hoe laat is het?", "Hoeveel kost het?", "Op welke verdieping is het?"], answer: 0,
      why: ["Goed: 몇 + 살 vraagt naar de leeftijd.", "Naar de tijd vraag je met 몇 시예요?", "Naar de prijs vraag je met 얼마예요?", "Naar de verdieping vraag je met 몇 층이에요?"] },
    { type: "fill", q: "교실에 학생이 ___ 명 있어요. (Er zijn vier studenten in het lokaal.)", answers: ["네"],
      hint: "명 neemt puur Koreaans. Wat is de korte vorm van 넷?", why: "Voor een telwoord wordt 넷 korter: 네 명." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik sta 's ochtends om zeven uur op.\"",
      tokens: [["아침", "achim"], ["일곱", "ilgop"], ["시에", "sie"], ["일어나요", "ireonayo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Drie appels, alstublieft.\"",
      tokens: [["사과", "sagwa"], ["세", "se"], ["개", "gae"], ["주세요", "juseyo"]] },
    { type: "open", q: "Vertaal: \"Ik ben vijfentwintig.\"", model: ["저는 스물다섯 살이에요.", "스물다섯 살이에요."],
      tip: "Check: leeftijd is puur Koreaans (스물다섯) met 살. 살 heeft een 받침, dus 이에요." },
    { type: "open", q: "Vertaal: \"Het is nu tien over twee.\"", model: ["지금 두 시 십 분이에요.", "두 시 십 분이에요."],
      tip: "Check: uur puur Koreaans en kort (두 시), minuten Sino-Koreaans (십 분)." }
  ],
  review: [
    { type: "mc", q: "\"Er zijn twee mensen.\" Welke zin klopt?",
      options: ["두 명 있어요.", "둘 명 있어요.", "이 명 있어요.", "두 개 있어요."], answer: 0,
      why: ["Goed: 명 met puur Koreaans, kort: 두.", "Voor een telwoord wordt 둘 korter: 두.", "명 neemt puur Koreaanse getallen, niet 이.", "개 is voor dingen. Voor mensen gebruik je 명."] },
    { type: "mc", q: "\"Dit boek kost 15.000 won.\" 이 책은 ___이에요.",
      options: ["만 오천 원", "일만 오천 원", "열다섯 천 원", "십오천 원"], answer: 0,
      why: ["Goed: 15.000 = 만 (10.000) + 오천 (5.000).", "Voor 만 zet je geen 일.", "Geld is Sino-Koreaans, geen 열다섯.", "Koreaans telt in blokken van 만, niet 15 × 1.000."] },
    { type: "mc", q: "\"Mijn zusje is elf.\" 제 여동생은 ___이에요.",
      options: ["열한 살", "열하나 살", "십일 살", "열한 시"], answer: 0,
      why: ["Goed: 열하나 wordt 열한 voor 살.", "Ook in 열하나 wordt 하나 korter voor een telwoord: 열한.", "살 neemt puur Koreaanse getallen, niet 십일.", "시 is het uur. Leeftijd is 살."] }
  ]
})
