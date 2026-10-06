({
  id: "06", slug: "go-sipeoyo", title: "-고 싶어요", sub: "Zeggen wat je wilt",
  canDo: "Je kunt nu zeggen wat je wilt doen met -고 싶어요, en wat een ander wil met -고 싶어 해요.",
  guess: {
    q: "\"Ik wil naar Korea.\" Welke zin klopt, denk je?",
    options: ["한국에 가고 싶어요.", "한국에 가요 싶어요.", "한국에 갔고 싶어요.", "한국에 가고 싶었어요."], answer: 0,
    why: ["Goed: stam 가 + 고 싶어요.", "Je plakt 고 aan de stam, niet aan 가요.", "De stam blijft kaal. De tijd zit in 싶어요.", "싶었어요 is verleden tijd: \"ik wilde\"."]
  },
  problem: "Je wilt zeggen wat je graag wilt doen. In het Nederlands zet je \"willen\" voor het werkwoord. In het Koreaans plak je -고 싶어요 achter de stam van het werkwoord. Je hoeft niet op de klinker te letten. Elke stam krijgt gewoon 고.",
  pattern: [
    { l: "waarheen", v: "한국에", c: 3 }, { l: "stam", v: "가", c: 4 }, { l: "-고 싶어요", v: "고 싶어요", c: 2, key: true }
  ],
  patternCap: "Stam + 고 싶어요 (ik wil) · stam + 고 싶어 해요 (hij/zij wil) · stam + 고 싶지 않아요 (ik wil niet)",
  rules: [
    "Stam + 고 싶어요. Er is geen klinkerregel: 가고, 먹고, 읽고, 공부하고.",
    "Verleden tijd zit in 싶다, niet in de stam: 가고 싶었어요.",
    "Niet willen: 가고 싶지 않아요.",
    "Een vraag: 뭐 먹고 싶어요? (Wat wil je eten?)",
    "Over een ander (hij, zij, mijn broer): 가고 싶어 해요."
  ],
  pitfall: "-고 싶어요 gebruik je voor jezelf, of in een vraag aan de ander. Over een derde persoon zeg je -고 싶어 해요: 동생이 가고 싶어 해요. Je ziet het ook vaak aan elkaar geschreven: 싶어해요.",
  examples: [
    { cn: "저는 한국에 가고 싶어요.", py: "Jeoneun Hanguge gago sipeoyo.", nl: "Ik wil naar Korea." },
    { cn: "비빔밥을 먹고 싶어요.", py: "Bibimbabeul meokgo sipeoyo.", nl: "Ik wil bibimbap eten." },
    { cn: "오늘은 집에서 쉬고 싶어요.", py: "Oneureun jibeseo swigo sipeoyo.", nl: "Vandaag wil ik thuis rusten." },
    { cn: "어제 영화를 보고 싶었어요.", py: "Eoje yeonghwareul bogo sipeosseoyo.", nl: "Gisteren wilde ik een film kijken." }
  ],
  nuance: [
    { h: "Ik wil (싶어요) of hij wil (싶어 해요)?",
      p: "In het Koreaans weet je alleen zeker wat jij zelf wilt. Wat een ander wil, zie je aan de buitenkant. Daarom krijgt een derde persoon -고 싶어 해요: \"hij laat zien dat hij wil\". In een vraag aan je gesprekspartner gebruik je gewoon -고 싶어요?",
      ex: [
        { cn: "저는 커피를 마시고 싶어요.", py: "Jeoneun keopireul masigo sipeoyo.", nl: "Ik wil koffie drinken." },
        { cn: "친구는 커피를 마시고 싶어 해요.", py: "Chinguneun keopireul masigo sipeo haeyo.", nl: "Mijn vriend wil koffie drinken." }
      ] },
    { h: "Niet willen: 싶지 않아요",
      p: "Je ontkent 싶다 met -지 않아요: 가고 싶지 않아요. Voor een derde persoon wordt het -고 싶어 하지 않아요. In de spreektaal hoor je ook 안 가고 싶어요. Dat betekent: ik wil liever niet gaan. Leer eerst de vorm met 싶지 않아요.",
      ex: [
        { cn: "오늘은 일하고 싶지 않아요.", py: "Oneureun ilhago sipji anayo.", nl: "Vandaag wil ik niet werken." },
        { cn: "동생은 학교에 가고 싶어 하지 않아요.", py: "Dongsaengeun hakgyoe gago sipeo haji anayo.", nl: "Mijn broertje wil niet naar school." }
      ] },
    { h: "\"Ik wil koffie\": noem het werkwoord",
      p: "In het Nederlands zeg je \"ik wil koffie\" zonder werkwoord. In het Koreaans heeft -고 싶어요 altijd een werkwoord nodig. Zeg dus wat je met de koffie doet: drinken. 커피를 싶어요 bestaat niet.",
      ex: [
        { cn: "커피를 마시고 싶어요.", py: "Keopireul masigo sipeoyo.", nl: "Ik wil koffie. (letterlijk: koffie drinken)" }
      ] },
    { h: "Beleefd vragen aan een oudere",
      p: "Aan een vriend of klasgenoot vraag je: 뭐 먹고 싶어요? Aan een oudere of een klant is -고 싶으세요? beleefder. Dat leer je later bij -(으)세요. Over jezelf zeg je nooit 싶으세요.",
      ex: [
        { cn: "선생님, 뭐 드시고 싶으세요?", py: "Seonsaengnim, mwo deusigo sipeuseyo?", nl: "Meneer/mevrouw, wat wilt u eten?" }
      ] }
  ],
  mistakes: [
    { wrong: "저는 한국에 가요 싶어요.", right: "저는 한국에 가고 싶어요.", why: "고 komt direct aan de stam 가, niet aan de vervoegde vorm 가요." },
    { wrong: "동생이 한국에 가고 싶어요.", right: "동생이 한국에 가고 싶어 해요.", why: "Het gaat over een derde persoon. Dan gebruik je -고 싶어 해요." },
    { wrong: "커피를 싶어요.", right: "커피를 마시고 싶어요.", why: "싶어요 heeft een werkwoord nodig. Noem wat je wilt doen." },
    { wrong: "가고 안 싶어요.", right: "가고 싶지 않아요.", why: "안 kan niet tussen -고 en 싶어요. Gebruik 싶지 않아요." }
  ],
  vocab: [
    ["-고 싶다", "-go sipda", "willen (+ werkwoord)"], ["쉬다", "swida", "rusten"], ["마시다", "masida", "drinken"],
    ["만나다", "mannada", "ontmoeten, afspreken met"], ["배고프다", "baegopeuda", "honger hebben"], ["바다", "bada", "zee"],
    ["사진을 찍다", "sajineul jjikda", "een foto maken"], ["주말", "jumal", "weekend"], ["혼자", "honja", "alleen, in je eentje"], ["가족", "gajok", "familie, gezin"]
  ],
  dialogue: [
    ["A", "배고파요. 뭐 먹고 싶어요?", "Baegopayo. Mwo meokgo sipeoyo?", "Ik heb honger. Wat wil je eten?"],
    ["B", "저는 불고기를 먹고 싶어요.", "Jeoneun bulgogireul meokgo sipeoyo.", "Ik wil bulgogi eten."],
    ["A", "좋아요. 그리고 뭐 마시고 싶어요?", "Joayo. Geurigo mwo masigo sipeoyo?", "Goed. En wat wil je drinken?"],
    ["B", "콜라를 마시고 싶어요. 민수 씨는요?", "Kollareul masigo sipeoyo. Minsu ssineunyo?", "Ik wil cola drinken. En jij, Minsu?"],
    ["A", "저는 물을 마시고 싶어요.", "Jeoneun mureul masigo sipeoyo.", "Ik wil water drinken."]
  ],
  reading: {
    title: "주말 계획",
    lines: [
      { cn: "이번 주말에 시간이 있어요.", py: "Ibeon jumare sigani isseoyo.", nl: "Dit weekend heb ik tijd." },
      { cn: "저는 바다에 가고 싶어요.", py: "Jeoneun badae gago sipeoyo.", nl: "Ik wil naar zee." },
      { cn: "바다에서 사진을 찍고 싶어요.", py: "Badaeseo sajineul jjikgo sipeoyo.", nl: "Ik wil aan zee foto's maken." },
      { cn: "그런데 동생은 바다에 가고 싶어 하지 않아요.", py: "Geureonde dongsaengeun badae gago sipeo haji anayo.", nl: "Maar mijn broertje wil niet naar zee." },
      { cn: "동생은 집에서 게임을 하고 싶어 해요.", py: "Dongsaengeun jibeseo geimeul hago sipeo haeyo.", nl: "Mijn broertje wil thuis gamen." },
      { cn: "어머니는 시장에 가고 싶어 해요.", py: "Eomeonineun sijange gago sipeo haeyo.", nl: "Mijn moeder wil naar de markt." },
      { cn: "그래서 저는 혼자 바다에 가요.", py: "Geuraeseo jeoneun honja badae gayo.", nl: "Daarom ga ik in mijn eentje naar zee." },
      { cn: "저녁에는 가족하고 같이 밥을 먹고 싶어요.", py: "Jeonyeogeneun gajokhago gachi babeul meokgo sipeoyo.", nl: "'s Avonds wil ik samen met mijn familie eten." }
    ],
    questions: [
      { type: "mc", q: "Wat wil de schrijver aan zee doen?",
        options: ["Foto's maken.", "Gamen.", "Naar de markt gaan.", "Rusten."], answer: 0,
        why: ["Goed: 바다에서 사진을 찍고 싶어요.", "Gamen wil het broertje, thuis.", "Naar de markt wil de moeder.", "Rusten staat niet in de tekst."] },
      { type: "mc", q: "Met wie gaat de schrijver naar zee?",
        options: ["Met niemand: alleen.", "Met het broertje.", "Met de moeder.", "Met de hele familie."], answer: 0,
        why: ["Goed: 저는 혼자 바다에 가요.", "Het broertje wil niet naar zee.", "De moeder wil naar de markt.", "Met de familie wil de schrijver 's avonds eten, niet naar zee."] },
      { type: "mc", q: "동생은 집에서 게임을 하고 싶어 해요. Waarom staat hier 싶어 해요 en niet 싶어요?",
        options: ["Het gaat over een ander, het broertje.", "Het is verleden tijd.", "Het is een vraag.", "Het is een ontkenning."], answer: 0,
        why: ["Goed: over een derde persoon zeg je -고 싶어 해요.", "Verleden tijd zou 싶어 했어요 zijn.", "Er staat geen vraag; de zin eindigt op een punt.", "Een ontkenning heeft 않아요. Die staat hier niet."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik wil een boek lezen.\"",
      options: ["책을 읽고 싶어요.", "책을 읽어고 싶어요.", "책을 읽었고 싶어요.", "책을 읽고 싶었어요."], answer: 0,
      why: ["Goed: stam 읽 + 고 싶어요.", "고 komt direct aan de stam, zonder 어.", "De stam blijft kaal. De tijd zit in 싶어요.", "싶었어요 is verleden tijd: \"ik wilde lezen\"."] },
    { type: "mc", q: "\"Ik wil Koreaans studeren.\"",
      options: ["한국어를 공부하고 싶어요.", "한국어를 공부해고 싶어요.", "한국어를 공부하고 싶해요.", "한국어를 공부하고 싶아요."], answer: 0,
      why: ["Goed: stam 공부하 + 고 싶어요.", "고 komt aan de kale stam 공부하, niet aan 해.", "싶다 is geen 하다-werkwoord. Het wordt 싶어요.", "De klinker van 싶 is ㅣ, dus 어요: 싶어요."] },
    { type: "mc", q: "\"Ik wil vandaag niet gaan.\"",
      options: ["오늘은 가고 싶지 않아요.", "오늘은 가고 싶어 않아요.", "오늘은 가고 싶지 안아요.", "오늘은 가고 싶지 않았어요."], answer: 0,
      why: ["Goed: 싶 + 지 않아요.", "Tussen 싶 en 않아요 hoort 지.", "Het is 않아요, met ㄶ.", "않았어요 is verleden tijd: \"ik wilde niet\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik wil een Koreaanse vriend ontmoeten.\"",
      tokens: [["한국", "hanguk"], ["친구를", "chingureul"], ["만나고", "mannago"], ["싶어요", "sipeoyo"]] },
    { type: "mc", q: "\"Mijn jongere zus wil naar Seoul.\"",
      options: ["동생이 서울에 가고 싶어 해요.", "동생이 서울에 가고 싶어요.", "동생이 서울에 가고 싶어 했어요.", "동생이 서울에 가고 싶해요."], answer: 0,
      why: ["Goed: over een derde persoon zeg je -고 싶어 해요.", "싶어요 gebruik je voor jezelf. Over je zus wordt het 싶어 해요.", "싶어 했어요 is verleden tijd: \"ze wilde\".", "싶해요 bestaat niet. Het is 싶어 해요."] },
    { type: "mc", q: "Je vraagt een vriend: \"Wat wil je dit weekend doen?\"",
      options: ["주말에 뭐 하고 싶어요?", "주말에 뭐 하고 싶어 해요?", "주말에 뭐 해고 싶어요?", "주말에 뭐 하고 싶었어요?"], answer: 0,
      why: ["Goed: in een vraag aan je gesprekspartner gebruik je -고 싶어요?", "싶어 해요 gaat over een derde persoon, niet over \"jij\".", "고 komt aan de kale stam 하, niet aan 해.", "싶었어요 is verleden tijd: \"wat wilde je doen?\"."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["저는 커피를 마시고 싶어 해요.", "저는 커피를 마시고 싶어요.", "친구는 커피를 마시고 싶어 해요.", "커피를 마시고 싶어요?"], answer: 0,
      why: ["Goed: deze is fout. Over jezelf zeg je 싶어요, niet 싶어 해요.", "Deze klopt: ik + 싶어요.", "Deze klopt: een derde persoon + 싶어 해요.", "Deze klopt: een vraag aan de ander met 싶어요?"] },
    { type: "fill", q: "저는 오늘 일하___ 싶지 않아요. (Ik wil vandaag niet werken.)", answers: ["고"],
      hint: "Wat komt er altijd tussen de stam en 싶다?", why: "Stam 일하 + 고, daarna 싶지 않아요." },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn moeder wil een film kijken.\"",
      tokens: [["어머니는", "eomeonineun"], ["영화를", "yeonghwareul"], ["보고", "bogo"], ["싶어", "sipeo"], ["해요", "haeyo"]] },
    { type: "open", q: "Vertaal: \"Ik wil naar huis gaan.\"", model: ["집에 가고 싶어요.", "저는 집에 가고 싶어요."],
      tip: "Check: stam 가 + 고 싶어요, en 집 krijgt 에." },
    { type: "open", q: "Vertaal: \"Mijn vriend wil Koreaans eten eten.\"", model: ["제 친구는 한국 음식을 먹고 싶어 해요.", "친구가 한국 음식을 먹고 싶어 해요.", "제 친구는 한국 음식을 먹고 싶어해요."],
      tip: "Check: het gaat over een ander, dus 싶어 해요. 음식 krijgt 을." }
  ],
  review: [
    { type: "mc", q: "\"Ik wil een film kijken.\" (보다)",
      options: ["영화를 보고 싶어요.", "영화를 봐고 싶어요.", "영화를 봤고 싶어요.", "영화를 보고 싶었어요."], answer: 0,
      why: ["Goed: stam 보 + 고 싶어요.", "고 komt aan de kale stam 보, niet aan 봐.", "De stam blijft kaal. De tijd zit in 싶어요.", "싶었어요 is verleden tijd: \"ik wilde kijken\"."] },
    { type: "mc", q: "\"Gisteren wilde ik slapen.\" (자다)",
      options: ["어제 자고 싶었어요.", "어제 잤고 싶어요.", "어제 자고 싶어요.", "어제 자고 싶았어요."], answer: 0,
      why: ["Goed: de verleden tijd zit in 싶었어요.", "De stam blijft kaal. De tijd zit in 싶다.", "싶어요 is tegenwoordige tijd. Bij 어제 hoort 싶었어요.", "De klinker van 싶 is ㅣ, dus 었어요."] },
    { type: "mc", q: "\"Minsu wil een nieuwe telefoon kopen.\" (사다)",
      options: ["민수 씨는 새 휴대폰을 사고 싶어 해요.", "민수 씨는 새 휴대폰을 사고 싶어요.", "민수 씨는 새 휴대폰을 사요 싶어 해요.", "민수 씨는 새 휴대폰을 사고 싶어 했어요."], answer: 0,
      why: ["Goed: Minsu is een derde persoon, dus -고 싶어 해요.", "싶어요 gebruik je voor jezelf, niet voor Minsu.", "고 komt aan de stam 사, niet aan 사요.", "싶어 했어요 is verleden tijd: \"hij wilde\"."] }
  ]
})
