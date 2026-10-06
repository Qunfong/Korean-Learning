({
  id: "14", slug: "boda", title: "보다, 제일 en 만큼", sub: "Vergelijken: meer dan, het meest, even ... als",
  canDo: "Je kunt nu twee dingen vergelijken, zeggen wat het meest is, en zeggen dat iets even ... is als iets anders, met 보다, 제일/가장 en 만큼.",
  guess: {
    q: "\"Seoul is groter dan Busan.\" Welke zin klopt, denk je?",
    options: ["서울이 부산보다 커요.", "서울보다 부산이 커요.", "서울이 부산이 보다 커요.", "서울이 보다 부산 커요."], answer: 0,
    why: ["Goed: 보다 staat achter het ding waarmee je vergelijkt: 부산보다 = dan Busan.", "Hier staat 보다 achter 서울. Dan zeg je: Busan is groter dan Seoul.", "보다 plakt direct aan 부산, zonder 이.", "보다 staat niet los. Het plakt achter 부산."]
  },
  problem: "In het Nederlands verandert het bijvoeglijk naamwoord: groot wordt groter en grootst. Het Koreaans verandert het werkwoord niet. Je zet 보다 achter het ding waarmee je vergelijkt: 부산보다 커요 = groter dan Busan. Voor \"het meest\" zet je 제일 ervoor, voor \"even ... als\" gebruik je 만큼.",
  pattern: [
    { l: "onderwerp", v: "서울이", c: 1 }, { l: "vergeleken met", v: "부산보다", c: 2, key: true }, { l: "(meer)", v: "더", c: 4 }, { l: "eigenschap", v: "커요", c: 5 }
  ],
  patternCap: "A이/가 B보다 (더) + eigenschap; 제일/가장 + eigenschap (het meest); B만큼 + eigenschap (even ... als)",
  rules: [
    "보다 plakt aan het woord waarmee je vergelijkt: 부산보다 = dan Busan. Het werkwoord zelf verandert niet.",
    "더 (meer) mag weg: 부산보다 커요 = 부산보다 더 커요. Met 더 klinkt het iets sterker.",
    "De volgorde is vrij: 서울이 부산보다 커요 = 부산보다 서울이 커요. Het onderwerp herken je aan 이/가 of 은/는, niet aan de plaats.",
    "Het meest: 제일 of 가장 vóór het werkwoord. De groep noem je met 중에서 of -에서: 과일 중에서, 우리 반에서.",
    "Even ... als: B만큼. Met 안 of -지 않다 betekent het \"niet zo ... als\": 서울만큼 크지 않아요."
  ],
  pitfall: "보다 hoort achter B, het ding waarmee je vergelijkt, niet achter het onderwerp. 서울보다 부산이 커요 betekent dus: Busan is groter dan Seoul.",
  examples: [
    { cn: "서울이 부산보다 커요.", py: "Seouri busanboda keoyo.", nl: "Seoul is groter dan Busan." },
    { cn: "오늘은 어제보다 더 추워요.", py: "Oneureun eojeboda deo chuwoyo.", nl: "Vandaag is het kouder dan gisteren." },
    { cn: "저는 과일 중에서 딸기를 제일 좋아해요.", py: "Jeoneun gwail jungeseo ttalgireul jeil joahaeyo.", nl: "Van alle fruit vind ik aardbeien het lekkerst." },
    { cn: "동생도 저만큼 키가 커요.", py: "Dongsaengdo jeomankeum kiga keoyo.", nl: "Mijn broertje is net zo lang als ik." }
  ],
  nuance: [
    { h: "Vrije volgorde, en 더 mag weg",
      p: "Het deel met 보다 mag vóór of na het onderwerp staan. Wat groter is, zie je aan 이/가 of 은/는. Begin met het 보다-deel als dat al bekend is of als je het wilt benadrukken. 더 is niet verplicht: zonder 더 is de zin al een vergelijking.",
      ex: [
        { cn: "부산보다 서울이 커요.", py: "Busanboda seouri keoyo.", nl: "Seoul is groter dan Busan." },
        { cn: "커피보다 차가 좋아요.", py: "Keopiboda chaga joayo.", nl: "Ik vind thee fijner dan koffie." }
      ] },
    { h: "제일 of 가장?",
      p: "Allebei betekenen \"het meest\". 제일 is gewoon in de spreektaal. 가장 klinkt formeler en zie je veel in geschreven tekst. In het Nederlands verandert het woord (hoog wordt hoogst). In het Koreaans niet: 가장 높은 산. Bij twee dingen gebruik je 더, bij een groep 제일 of 가장.",
      ex: [
        { cn: "한국에서 가장 높은 산은 한라산이에요.", py: "Hangugeseo gajang nopeun saneun hallasanieyo.", nl: "De hoogste berg van Korea is de Hallasan." }
      ] },
    { h: "만큼: even ... als, en niet zo ... als",
      p: "Met 보다 zeg je dat er een verschil is. Met 만큼 zeg je dat twee dingen gelijk zijn. Met een ontkenning betekent 만큼 \"niet zo ... als\". Dat klinkt vaak zachter dan zeggen dat iets kleiner of slechter is.",
      ex: [
        { cn: "이 가방은 저 가방만큼 비싸요.", py: "I gabangeun jeo gabangmankeum bissayo.", nl: "Deze tas is net zo duur als die tas." },
        { cn: "부산은 서울만큼 크지 않아요.", py: "Busaneun seoulmankeum keuji anayo.", nl: "Busan is niet zo groot als Seoul." }
      ] }
  ],
  mistakes: [
    { wrong: "서울이 보다 부산 커요.", right: "서울이 부산보다 커요.", why: "보다 staat niet los, maar plakt achter het ding waarmee je vergelijkt." },
    { wrong: "커피가 차보다 제일 맛있어요.", right: "커피가 차보다 더 맛있어요.", why: "Bij twee dingen gebruik je 더. 제일 is voor de beste uit een groep." },
    { wrong: "과일에서 딸기를 제일 좋아해요.", right: "과일 중에서 딸기를 제일 좋아해요.", why: "Bij een soort of groep dingen zeg je 중에서: van alle fruit." },
    { wrong: "이 가방이 저 가방보다 비싸요 더.", right: "이 가방이 저 가방보다 더 비싸요.", why: "더 staat vóór het werkwoord. Het werkwoord komt aan het eind." }
  ],
  vocab: [
    ["보다 (더)", "boda (deo)", "dan (meer)"], ["제일 / 가장", "jeil / gajang", "het meest"], ["만큼", "mankeum", "even ... als"],
    ["중에서", "jungeseo", "van, onder (een groep)"], ["딸기", "ttalgi", "aardbei"], ["키가 크다", "kiga keuda", "lang zijn"],
    ["싸다", "ssada", "goedkoop zijn"], ["비싸다", "bissada", "duur zijn"], ["계절", "gyejeol", "seizoen"], ["훨씬", "hwolssin", "veel (meer)"]
  ],
  dialogue: [
    ["A", "이 신발하고 저 신발 중에서 뭐가 더 예뻐요?", "I sinbalhago jeo sinbal jungeseo mwoga deo yeppeoyo?", "Welke schoenen zijn mooier, deze of die?"],
    ["B", "이 신발이 더 예뻐요.", "I sinbari deo yeppeoyo.", "Deze zijn mooier."],
    ["A", "그런데 이 신발이 저 신발보다 만 원 더 비싸요.", "Geureonde i sinbari jeo sinbalboda man won deo bissayo.", "Maar deze zijn tienduizend won duurder dan die."],
    ["B", "그럼 저 신발을 사세요. 저 신발도 이 신발만큼 편해요.", "Geureom jeo sinbareul saseyo. Jeo sinbaldo i sinbalmankeum pyeonhaeyo.", "Koop dan die. Die zitten net zo lekker als deze."],
    ["A", "좋아요. 이것보다 더 싼 거 있어요?", "Joayo. Igeotboda deo ssan geo isseoyo?", "Goed. Hebben ze ook iets goedkopers dan dit?"]
  ],
  reading: {
    title: "제가 좋아하는 계절",
    lines: [
      { cn: "한국에는 봄, 여름, 가을, 겨울이 있어요.", py: "Hangugeneun bom, yeoreum, gaeul, gyeouri isseoyo.", nl: "Korea heeft een lente, zomer, herfst en winter." },
      { cn: "여름은 봄보다 훨씬 더워요.", py: "Yeoreumeun bomboda hwolssin deowoyo.", nl: "De zomer is veel warmer dan de lente." },
      { cn: "겨울은 네덜란드만큼 추워요.", py: "Gyeoureun nedeollandeumankeum chuwoyo.", nl: "De winter is net zo koud als in Nederland." },
      { cn: "그런데 눈은 네덜란드보다 더 많이 와요.", py: "Geureonde nuneun nedeollandeuboda deo mani wayo.", nl: "Maar er valt meer sneeuw dan in Nederland." },
      { cn: "저는 계절 중에서 가을을 제일 좋아해요.", py: "Jeoneun gyejeol jungeseo gaeureul jeil joahaeyo.", nl: "Van alle seizoenen vind ik de herfst het fijnst." },
      { cn: "가을은 여름만큼 덥지 않고 겨울만큼 춥지 않아요.", py: "Gaeureun yeoreummankeum deopji anko gyeoulmankeum chupji anayo.", nl: "De herfst is niet zo warm als de zomer en niet zo koud als de winter." },
      { cn: "그리고 가을 하늘이 가장 맑고 예뻐요.", py: "Geurigo gaeul haneuri gajang malkko yeppeoyo.", nl: "En de herfstlucht is het helderst en het mooist." },
      { cn: "제 친구는 봄을 더 좋아해요.", py: "Je chinguneun bomeul deo joahaeyo.", nl: "Mijn vriend vindt de lente fijner." },
      { cn: "봄에는 꽃이 많아서 예뻐요.", py: "Bomeneun kkochi manaseo yeppeoyo.", nl: "In de lente zijn er veel bloemen, dus het is mooi." }
    ],
    questions: [
      { type: "mc", q: "Welk seizoen vindt de schrijver het fijnst?",
        options: ["De herfst.", "De lente.", "De zomer.", "De winter."], answer: 0,
        why: ["Goed: 계절 중에서 가을을 제일 좋아해요.", "De lente is het seizoen van zijn vriend.", "De zomer is volgens hem veel te warm.", "Over de winter zegt hij alleen dat het koud is."] },
      { type: "mc", q: "Hoe is de winter in Korea, volgens de tekst?",
        options: ["Even koud als in Nederland, maar met meer sneeuw.", "Kouder dan in Nederland, met minder sneeuw.", "Warmer dan in Nederland.", "Even koud als in Nederland, met minder sneeuw."], answer: 0,
        why: ["Goed: 네덜란드만큼 추워요, en 눈은 네덜란드보다 더 많이 와요.", "만큼 betekent \"even\", niet \"meer\". En er valt juist meer sneeuw.", "Er staat 추워요: koud, net als in Nederland.", "보다 더 많이 betekent: meer sneeuw, niet minder."] },
      { type: "mc", q: "가을은 여름만큼 덥지 않아요. Wat betekent dit?",
        options: ["De herfst is minder warm dan de zomer.", "De herfst is even warm als de zomer.", "De herfst is warmer dan de zomer.", "De herfst is het warmste seizoen."], answer: 0,
        why: ["Goed: 만큼 + ontkenning = niet zo ... als.", "Zonder 않아요 zou het \"even warm\" zijn. Hier is het ontkend.", "\"Warmer dan\" zou 여름보다 더 더워요 zijn.", "\"Het warmst\" zou 제일 더워요 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Vandaag is het warmer dan gisteren.\"",
      options: ["오늘이 어제보다 더 더워요.", "어제가 오늘보다 더 더워요.", "오늘이 보다 어제 더 더워요.", "오늘이 어제를 보다 더 더워요."], answer: 0,
      why: ["Goed: 보다 achter 어제, het ding waarmee je vergelijkt.", "Hier is gisteren warmer. 보다 staat achter het verkeerde woord.", "보다 staat niet los. Het plakt achter 어제.", "보다 plakt direct aan 어제, zonder 를."] },
    { type: "mc", q: "Welke zin betekent OOK \"Seoul is groter dan Busan\"?",
      options: ["부산보다 서울이 커요.", "서울보다 부산이 커요.", "부산이 서울보다 커요.", "서울이 부산만큼 커요."], answer: 0,
      why: ["Goed: de volgorde is vrij. 서울이 is het onderwerp, 부산보다 de vergelijking.", "Hier is Busan groter: 보다 staat achter 서울.", "Hier is Busan het onderwerp, dus Busan is groter.", "만큼 betekent \"even groot als\", geen verschil."] },
    { type: "mc", q: "커피보다 차를 더 좋아해요. Wat gebeurt er als je 더 weglaat?",
      options: ["De betekenis blijft bijna hetzelfde.", "Dan betekent het: ik houd evenveel van allebei.", "Dan wordt de zin fout.", "Dan houd je meer van koffie."], answer: 0,
      why: ["Goed: 보다 maakt al een vergelijking. 더 maakt het alleen iets sterker.", "\"Evenveel\" is 만큼, niet 보다.", "더 is niet verplicht. De zin blijft goed.", "보다 staat nog steeds achter 커피. Thee blijft favoriet."] },
    { type: "mc", q: "\"Van alle seizoenen vind ik de zomer het fijnst.\"",
      options: ["계절 중에서 여름을 제일 좋아해요.", "계절보다 여름을 제일 좋아해요.", "계절 중에서 여름을 더 좋아해요.", "계절 중에서 여름이 제일 좋아해요."], answer: 0,
      why: ["Goed: groep met 중에서, en 제일 voor \"het meest\".", "보다 vergelijkt twee dingen. Voor een groep zeg je 중에서.", "Bij een hele groep gebruik je 제일, niet 더.", "좋아하다 neemt 을/를: 여름을."] },
    { type: "mc", q: "부산은 서울만큼 크지 않아요. Wat betekent dit?",
      options: ["Busan is kleiner dan Seoul.", "Busan is groter dan Seoul.", "Busan is even groot als Seoul.", "Busan is de grootste stad."], answer: 0,
      why: ["Goed: 만큼 + ontkenning = niet zo groot als.", "Er staat een ontkenning: 크지 않아요.", "Zonder 않아요 zou het \"even groot\" zijn.", "\"De grootste\" zou 제일 커요 zijn."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["커피가 차보다 제일 맛있어요.", "커피가 차보다 더 맛있어요.", "차보다 커피가 맛있어요.", "커피가 제일 맛있어요."], answer: 0,
      why: ["Goed: dit is fout. Bij twee dingen met 보다 gebruik je 더, niet 제일.", "Dit klopt: 보다 + 더.", "Dit klopt: de volgorde is vrij en 더 mag weg.", "Dit klopt: koffie is het lekkerst."] },
    { type: "mc", q: "In een krant staat: 한국에서 ___ 큰 도시는 서울입니다. Welk woord past?",
      options: ["가장", "더", "만큼", "보다"], answer: 0,
      why: ["Goed: 가장 = het meest. Het klinkt formeel en past in een krant.", "더 vraagt om iets om mee te vergelijken, met 보다.", "만큼 plakt achter een naamwoord en betekent \"even ... als\".", "보다 plakt achter het ding waarmee je vergelijkt."] },
    { type: "fill", q: "제 동생은 저___ 키가 더 커요. (Mijn broertje is langer dan ik.)", answers: ["보다"],
      hint: "Welk woord betekent \"dan\"?", why: "저보다 = dan ik. 보다 plakt achter het ding waarmee je vergelijkt." },
    { type: "order", q: "Zet in de goede volgorde: \"Heeft u iets goedkopers dan dit?\"",
      tokens: [["이것보다", "igeotboda"], ["더", "deo"], ["싼", "ssan"], ["거", "geo"], ["있어요?", "isseoyo?"]] },
    { type: "order", q: "Zet in de goede volgorde: \"De hoogste berg van Korea is de Hallasan.\"",
      tokens: [["한국에서", "hangugeseo"], ["가장", "gajang"], ["높은", "nopeun"], ["산은", "saneun"], ["한라산이에요", "hallasanieyo"]] },
    { type: "open", q: "Vertaal: \"Ik vind thee lekkerder dan koffie.\"", model: ["커피보다 차가 더 맛있어요.", "차가 커피보다 더 맛있어요.", "저는 커피보다 차를 더 좋아해요."],
      tip: "Check: 보다 staat achter 커피, het ding waarmee je vergelijkt. 더 mag ook weg." },
    { type: "open", q: "Vertaal: \"Welk Koreaans gerecht vind je het lekkerst?\"", model: ["한국 음식 중에서 뭐가 제일 맛있어요?", "한국 음식 중에서 뭘 제일 좋아해요?"],
      tip: "Check: de groep met 중에서, en 제일 of 가장 vóór het werkwoord." }
  ],
  review: [
    { type: "mc", q: "\"Mijn zus is langer dan ik.\"",
      options: ["언니가 저보다 키가 커요.", "제가 언니보다 키가 커요.", "언니가 보다 저 키가 커요.", "언니가 저를 보다 키가 커요."], answer: 0,
      why: ["Goed: 저보다 = dan ik.", "Hier ben ik langer dan mijn zus.", "보다 staat niet los. Het plakt achter 저.", "보다 plakt direct aan 저, zonder 를."] },
    { type: "mc", q: "\"Deze winkel is net zo goedkoop als die winkel.\"",
      options: ["이 가게도 저 가게만큼 싸요.", "이 가게도 저 가게보다 싸요.", "이 가게도 만큼 저 가게 싸요.", "이 가게도 저 가게만큼 제일 싸요."], answer: 0,
      why: ["Goed: B만큼 = even ... als B.", "보다 betekent \"goedkoper dan\", geen gelijkheid.", "만큼 staat niet los. Het plakt achter 저 가게.", "제일 is \"het meest\" en past niet bij een gelijkheid."] },
    { type: "mc", q: "\"Wat is het duurste in deze winkel?\"",
      options: ["이 가게에서 뭐가 제일 비싸요?", "이 가게에서 뭐를 제일 비싸요?", "이 가게보다 뭐가 제일 비싸요?", "이 가게에서 뭐가 만큼 비싸요?"], answer: 0,
      why: ["Goed: de groep met -에서, en 제일.", "비싸다 is een eigenschap: het onderwerp krijgt 이/가, geen 를.", "보다 vergelijkt met de winkel. Hier is de winkel de groep: -에서.", "만큼 staat niet los en betekent \"even ... als\"."] }
  ]
})
