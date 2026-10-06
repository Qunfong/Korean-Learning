({
  id: "02", slug: "eul-reul", title: "을/를", sub: "Het lijdend voorwerp",
  canDo: "Je kunt nu zeggen wat je eet, drinkt, koopt of leest, met 을/를.",
  guess: {
    q: "\"Ik drink koffie.\" Welke zin klopt, denk je?",
    options: ["저는 커피를 마셔요.", "저는 커피을 마셔요.", "저를 커피를 마셔요.", "저는 커피이 마셔요."], answer: 0,
    why: ["Goed: 커피 eindigt op een klinker, dus 를.", "을 komt alleen na een 받침. 커피 eindigt op een klinker.", "Jij drinkt zelf. 저 krijgt dus 는, niet 를.", "이 komt na een 받침, en koffie is hier het lijdend voorwerp."]
  },
  problem: "In het Nederlands zie je aan de volgorde wie wat doet. In het Koreaans staat het werkwoord altijd achteraan. Een partikel laat dan zien wat het lijdend voorwerp is: 을/를. Zo weet je welk ding je eet, koopt of leest.",
  pattern: [
    { l: "wie", v: "저는", c: 1 }, { l: "wat", v: "밥", c: 3 }, { l: "을/를", v: "을", c: 2, key: true }, { l: "werkwoord", v: "먹어요", c: 4 }
  ],
  patternCap: "Wie + 은/는 · ding + 을/를 · werkwoord achteraan",
  rules: [
    "Eindigt het ding op een 받침? Dan 을: 밥을, 책을, 물을.",
    "Eindigt het ding op een klinker? Dan 를: 커피를, 사과를, 영화를.",
    "Het werkwoord staat altijd aan het eind van de zin.",
    "Ook 만나다 (ontmoeten) krijgt meestal 을/를: 친구를 만나요. In het Nederlands zeg je vaak \"afspreken met\".",
    "In spreektaal valt 을/를 soms weg. In de oefeningen schrijf je het wel."
  ],
  pitfall: "Bij 있어요, 없어요 en 좋아요 krijgt het ding 이/가: 커피가 좋아요. Bij 좋아해요 is het wel 를: 커피를 좋아해요.",
  examples: [
    { cn: "저는 밥을 먹어요.", py: "Jeoneun babeul meogeoyo.", nl: "Ik eet." },
    { cn: "친구가 사과를 사요.", py: "Chinguga sagwareul sayo.", nl: "Mijn vriend koopt appels." },
    { cn: "동생은 책을 읽어요.", py: "Dongsaengeun chaegeul ilgeoyo.", nl: "Mijn broertje leest een boek." },
    { cn: "저는 한국어를 공부해요.", py: "Jeoneun hangugeoreul gongbuhaeyo.", nl: "Ik studeer Koreaans." }
  ],
  nuance: [
    { h: "좋아해요 met 을/를, 좋아요 met 이/가",
      p: "좋아해요 is een handeling: je houdt van iets. Dat ding krijgt 을/를. 좋아요 betekent \"is goed, bevalt me\". Dan is het ding het onderwerp en krijgt het 이/가. Hetzelfde geldt voor 있어요 en 없어요: 시간이 있어요, niet 시간을 있어요.",
      ex: [
        { cn: "저는 커피를 좋아해요.", py: "Jeoneun keopireul joahaeyo.", nl: "Ik houd van koffie." },
        { cn: "저는 커피가 좋아요.", py: "Jeoneun keopiga joayo.", nl: "Ik vind koffie fijn." }
      ] },
    { h: "Werkwoorden met 하다: één 을/를 is genoeg",
      p: "공부하다, 운동하다 en 요리하다 zijn één werkwoord. Je kunt ze ook splitsen: 공부를 해요. Maar zet niet twee keer 을/를 in een korte zin. Zeg 한국어를 공부해요, of 한국어 공부를 해요.",
      ex: [
        { cn: "저는 한국어 공부를 해요.", py: "Jeoneun hangugeo gongbureul haeyo.", nl: "Ik studeer Koreaans." }
      ] },
    { h: "Spreektaal: 을/를 weglaten",
      p: "In gewone gesprekken laten Koreanen 을/를 vaak weg, vooral bij korte vragen. In geschreven zinnen en in het examen schrijf je het partikel wel. Leer daarom eerst de volledige vorm.",
      ex: [
        { cn: "커피 마셔요?", py: "Keopi masyeoyo?", nl: "Drink je koffie?" }
      ] }
  ],
  mistakes: [
    { wrong: "커피을 마셔요.", right: "커피를 마셔요.", why: "커피 eindigt op een klinker. Dan is het 를." },
    { wrong: "커피를 좋아요.", right: "커피가 좋아요.", why: "Bij 좋아요 krijgt het ding 이/가. Met 를 zeg je 커피를 좋아해요." },
    { wrong: "저는 마셔요 커피를.", right: "저는 커피를 마셔요.", why: "Het werkwoord staat in het Koreaans altijd achteraan." },
    { wrong: "저는 한국어를 공부를 해요.", right: "저는 한국어를 공부해요.", why: "Twee keer 을/를 in een korte zin klinkt fout. 공부해요 is één werkwoord." }
  ],
  vocab: [
    ["을/를", "eul/reul", "(markeert het lijdend voorwerp)"], ["먹다", "meokda", "eten"], ["마시다", "masida", "drinken"],
    ["사다", "sada", "kopen"], ["읽다", "ikda", "lezen"], ["보다", "boda", "kijken, zien"],
    ["만나다", "mannada", "ontmoeten, afspreken met"], ["좋아하다", "joahada", "houden van, graag hebben"], ["사과", "sagwa", "appel"], ["영화", "yeonghwa", "film"]
  ],
  dialogue: [
    ["A", "지금 뭐 해요?", "Jigeum mwo haeyo?", "Wat doe je nu?"],
    ["B", "영화를 봐요.", "Yeonghwareul bwayo.", "Ik kijk een film."],
    ["A", "무슨 영화를 봐요?", "Museun yeonghwareul bwayo?", "Welke film kijk je?"],
    ["B", "한국 영화를 봐요. 같이 봐요!", "Hanguk yeonghwareul bwayo. Gachi bwayo!", "Een Koreaanse film. Kijk mee!"],
    ["A", "좋아요. 그럼 저는 커피를 사요.", "Joayo. Geureom jeoneun keopireul sayo.", "Goed. Dan koop ik koffie."]
  ],
  reading: {
    title: "토요일",
    lines: [
      { cn: "오늘은 토요일이에요.", py: "Oneureun toyoirieyo.", nl: "Vandaag is het zaterdag." },
      { cn: "저는 아침에 빵을 먹어요.", py: "Jeoneun achime ppangeul meogeoyo.", nl: "'s Ochtends eet ik brood." },
      { cn: "그리고 우유를 마셔요.", py: "Geurigo uyureul masyeoyo.", nl: "En ik drink melk." },
      { cn: "오후에 친구를 만나요.", py: "Ohue chingureul mannayo.", nl: "'s Middags zie ik een vriendin." },
      { cn: "우리는 시장에서 과일을 사요.", py: "Urineun sijangeseo gwaireul sayo.", nl: "We kopen fruit op de markt." },
      { cn: "친구는 사과를 좋아해요.", py: "Chinguneun sagwareul joahaeyo.", nl: "Mijn vriendin houdt van appels." },
      { cn: "저는 딸기가 좋아요.", py: "Jeoneun ttalgiga joayo.", nl: "Ik vind aardbeien lekker." },
      { cn: "저녁에 같이 영화를 봐요.", py: "Jeonyeoge gachi yeonghwareul bwayo.", nl: "'s Avonds kijken we samen een film." },
      { cn: "영화가 정말 재미있어요.", py: "Yeonghwaga jeongmal jaemiisseoyo.", nl: "De film is echt leuk." }
    ],
    questions: [
      { type: "mc", q: "Wat doen ze op de markt?",
        options: ["Ze kopen fruit.", "Ze eten brood.", "Ze kijken een film.", "Ze drinken melk."], answer: 0,
        why: ["Goed: 시장에서 과일을 사요.", "Brood eet de schrijver 's ochtends, niet op de markt.", "De film kijken ze 's avonds.", "Melk drinkt de schrijver 's ochtends."] },
      { type: "mc", q: "Wat doen ze 's avonds?",
        options: ["Samen een film kijken.", "Samen fruit kopen.", "Samen ontbijten.", "Samen koffie drinken."], answer: 0,
        why: ["Goed: 저녁에 같이 영화를 봐요.", "Fruit kopen ze 's middags (오후에).", "Ontbijten doet de schrijver alleen, 's ochtends.", "Koffie staat niet in de tekst."] },
      { type: "mc", q: "친구는 사과를 좋아해요, maar 저는 딸기가 좋아요. Waarom 를 en 가?",
        options: ["좋아해요 neemt 을/를; bij 좋아요 krijgt het ding 이/가.", "사과 eindigt op een klinker, 딸기 op een 받침.", "가 betekent \"niet\": ze houdt niet van aardbeien.", "를 is voor mensen, 가 voor dingen."], answer: 0,
        why: ["Goed: het werkwoord bepaalt het partikel.", "Beide woorden eindigen op een klinker (사과, 딸기).", "가 ontkent niets: de schrijver vindt aardbeien lekker.", "Zowel 사과 als 딸기 zijn dingen."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik lees een boek.\"",
      options: ["저는 책을 읽어요.", "저는 책를 읽어요.", "저는 책이 읽어요.", "저을 책을 읽어요."], answer: 0,
      why: ["Goed: 책 eindigt op een 받침 (ㄱ), dus 을.", "를 komt na een klinker. 책 eindigt op ㄱ.", "Het boek is wat je leest. Het krijgt 을, niet 이.", "Jij leest zelf. 저 krijgt 는, en 을 kan niet na een klinker."] },
    { type: "mc", q: "저는 우유___ 마셔요. (Ik drink melk.)",
      options: ["를", "을", "이", "은"], answer: 0,
      why: ["Goed: 우유 eindigt op een klinker, dus 를.", "을 komt alleen na een 받침.", "Melk is wat je drinkt: lijdend voorwerp. En 이 komt na een 받침.", "은 komt na een 받침, en melk is hier het lijdend voorwerp."] },
    { type: "mc", q: "\"Ik heb een auto.\"",
      options: ["차가 있어요.", "차를 있어요.", "차을 있어요.", "차이 있어요."], answer: 0,
      why: ["Goed: bij 있어요 krijgt het ding 이/가, en 차 eindigt op een klinker.", "Bij 있어요 gebruik je geen 를.", "Bij 있어요 gebruik je geen 을. Na een klinker zou het bovendien 를 zijn.", "이 komt na een 받침. 차 eindigt op een klinker, dus 가."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik ken de naam van mijn vriend.\"",
      tokens: [["제", "je"], ["친구", "chingu"], ["이름을", "ireumeul"], ["알아요", "arayo"]] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["저는 커피를 좋아요.", "저는 커피를 좋아해요.", "저는 커피가 좋아요.", "저는 커피를 마셔요."], answer: 0,
      why: ["Goed: deze is fout. Bij 좋아요 krijgt koffie 가: 커피가 좋아요.", "Deze klopt: 좋아해요 neemt 을/를.", "Deze klopt: bij 좋아요 hoort 이/가.", "Deze klopt: koffie is wat je drinkt."] },
    { type: "mc", q: "\"Ik studeer Koreaans.\"",
      options: ["저는 한국어를 공부해요.", "저는 한국어를 공부를 해요.", "저는 한국어가 공부해요.", "저는 한국어을 공부해요."], answer: 0,
      why: ["Goed: één 를 bij 한국어, en 공부해요 als werkwoord.", "Twee keer 를 in deze korte zin klinkt fout. Zeg 한국어 공부를 해요 of 한국어를 공부해요.", "Koreaans is wat je studeert: lijdend voorwerp, dus 를.", "한국어 eindigt op een klinker, dus 를."] },
    { type: "mc", q: "저는 밥___ 먹어요. (Ik eet.)",
      options: ["을", "를", "이", "는"], answer: 0,
      why: ["Goed: 밥 eindigt op een 받침 (ㅂ), dus 을.", "를 komt na een klinker. 밥 eindigt op ㅂ.", "밥 is wat je eet: lijdend voorwerp, niet onderwerp.", "는 komt na een klinker, en 밥 is hier het lijdend voorwerp."] },
    { type: "fill", q: "주말에 친구___ 만나요. (In het weekend zie ik een vriend.)", answers: ["를", "하고", "와"],
      hint: "만나다 neemt het partikel van het lijdend voorwerp. 친구 eindigt op een klinker.", why: "만나다 krijgt 을/를, en na de klinker van 친구 wordt het 를. 친구하고 (met een vriend) kan ook." },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn broertje kijkt een Koreaanse film.\"",
      tokens: [["동생은", "dongsaengeun"], ["한국", "hanguk"], ["영화를", "yeonghwareul"], ["봐요", "bwayo"]] },
    { type: "open", q: "Vertaal: \"Ik drink water.\"", model: ["저는 물을 마셔요.", "물을 마셔요."],
      tip: "Check: 물 eindigt op ㄹ, een 받침, dus 을. Het werkwoord staat achteraan." },
    { type: "open", q: "Vertaal: \"Ik houd van Koreaanse films.\"", model: ["저는 한국 영화를 좋아해요.", "한국 영화를 좋아해요.", "저는 한국 영화가 좋아요."],
      tip: "Check: met 좋아해요 gebruik je 를, met 좋아요 gebruik je 가." }
  ],
  review: [
    { type: "mc", q: "\"Ik kijk tv.\"",
      options: ["저는 텔레비전을 봐요.", "저는 텔레비전를 봐요.", "저는 텔레비전이 봐요.", "저를 텔레비전을 봐요."], answer: 0,
      why: ["Goed: 텔레비전 eindigt op ㄴ, dus 을.", "를 komt na een klinker. 텔레비전 eindigt op ㄴ.", "De tv is wat je kijkt. Het krijgt 을, niet 이.", "Jij kijkt zelf. 저 krijgt 는, niet 를."] },
    { type: "mc", q: "저는 김치___ 좋아해요. (Ik houd van kimchi.)",
      options: ["를", "을", "가", "이"], answer: 0,
      why: ["Goed: bij 좋아해요 krijgt het ding 을/를, en 김치 eindigt op een klinker.", "을 komt alleen na een 받침.", "가 hoort bij 좋아요, niet bij 좋아해요.", "이 komt na een 받침, en bij 좋아해요 is het 을/를."] },
    { type: "mc", q: "내일 선생님___ 만나요. (Morgen zie ik mijn leraar.)",
      options: ["을", "를", "이", "가"], answer: 0,
      why: ["Goed: 만나다 neemt 을/를, en 선생님 eindigt op een 받침 (ㅁ).", "를 komt na een klinker. 선생님 eindigt op ㅁ.", "Met 이 wordt de leraar degene die iemand ontmoet.", "가 komt na een klinker, en de leraar is hier het lijdend voorwerp."] }
  ]
})
