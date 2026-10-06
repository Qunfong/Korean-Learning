({
  id: "05", slug: "an", title: "안 en -지 않아요", sub: "Ontkenning",
  canDo: "Je kunt nu zeggen wat je niet doet, met 안 en -지 않아요.",
  guess: {
    q: "\"Ik eet geen vlees.\" Welke zin klopt, denk je?",
    options: ["저는 고기를 안 먹어요.", "저는 안 고기를 먹어요.", "저는 고기를 먹지 안아요.", "저는 고기를 안 먹었어요."], answer: 0,
    why: ["Goed: 안 staat direct voor het werkwoord.", "안 hoort voor het werkwoord, niet voor het ding.", "Het is 않아요, met ㄶ. 안아요 betekent \"knuffelen\".", "먹었어요 is verleden tijd: \"ik heb geen vlees gegeten\"."]
  },
  problem: "Wil je zeggen dat je iets niet doet? Het Koreaans heeft twee manieren. 안 zet je vlak voor het werkwoord. -지 않아요 plak je aan de stam. Ze betekenen hetzelfde. 안 is korter en hoor je vaak in spreektaal.",
  pattern: [
    { l: "wat", v: "커피를", c: 3 }, { l: "안", v: "안", c: 2, key: true }, { l: "werkwoord", v: "마셔요", c: 4 }
  ],
  patternCap: "안 + werkwoord (안 마셔요) · stam + 지 않아요 (마시지 않아요)",
  rules: [
    "안 staat direct voor het werkwoord: 안 가요, 안 먹어요.",
    "-지 않아요 komt achter de stam: 가지 않아요, 먹지 않아요.",
    "Bij ding + 하다 staat 안 voor 해요: 공부 안 해요, niet 안 공부해요.",
    "Verleden tijd: 안 갔어요 of 가지 않았어요.",
    "Sommige woorden hebben een eigen ontkenning: 있어요 → 없어요, 알아요 → 몰라요, 이에요 → 아니에요."
  ],
  pitfall: "있어요 ontken je niet met 안. Je zegt 없어요: 시간이 없어요.",
  examples: [
    { cn: "저는 술을 안 마셔요.", py: "Jeoneun sureul an masyeoyo.", nl: "Ik drink geen alcohol." },
    { cn: "오늘은 학교에 가지 않아요.", py: "Oneureun hakgyoe gaji anayo.", nl: "Vandaag ga ik niet naar school." },
    { cn: "동생은 공부 안 해요.", py: "Dongsaengeun gongbu an haeyo.", nl: "Mijn broertje studeert niet." },
    { cn: "어제 아침을 안 먹었어요.", py: "Eoje achimeul an meogeosseoyo.", nl: "Gisteren heb ik niet ontbeten." }
  ],
  nuance: [
    { h: "안 of 못: niet doen of niet kunnen?",
      p: "안 zegt dat je iets niet doet, vaak omdat je niet wilt. 못 zegt dat je iets niet kunt, of dat iets je tegenhoudt. Beide staan op dezelfde plek, direct voor het werkwoord. Let op: met 안 kan het klinken alsof je iets weigert.",
      ex: [
        { cn: "저는 술을 안 마셔요.", py: "Jeoneun sureul an masyeoyo.", nl: "Ik drink geen alcohol. (ik wil het niet)" },
        { cn: "저는 술을 못 마셔요.", py: "Jeoneun sureul mot masyeoyo.", nl: "Ik kan geen alcohol drinken." }
      ] },
    { h: "안 of -지 않아요?",
      p: "De betekenis is hetzelfde. 안 is kort en hoor je vooral in gesprekken. -지 않아요 klinkt iets netter en zie je meer in geschreven taal. In formele taal zeg je -지 않습니다. Bij lange werkwoorden klinkt -지 않아요 vaak natuurlijker.",
      ex: [
        { cn: "이 가방은 비싸지 않아요.", py: "I gabangeun bissaji anayo.", nl: "Deze tas is niet duur." },
        { cn: "저는 고기를 먹지 않습니다.", py: "Jeoneun gogireul meokji anseumnida.", nl: "Ik eet geen vlees. (formeel)" }
      ] },
    { h: "Eigen ontkenning: 없어요, 몰라요, 아니에요",
      p: "Drie veelgebruikte woorden ontken je niet met 안. 있어요 wordt 없어요. 알아요 (weten) wordt 몰라요. 이에요/예요 wordt 이/가 아니에요. Zeg dus nooit 안 있어요, 안 알아요 of 안 학생이에요.",
      ex: [
        { cn: "저는 학생이 아니에요.", py: "Jeoneun haksaengi anieyo.", nl: "Ik ben geen student." },
        { cn: "잘 몰라요.", py: "Jal mollayo.", nl: "Ik weet het niet goed." }
      ] }
  ],
  mistakes: [
    { wrong: "오늘은 안 공부해요.", right: "오늘은 공부 안 해요.", why: "Bij ding + 하다 komt 안 tussen het ding en 해요." },
    { wrong: "시간이 안 있어요.", right: "시간이 없어요.", why: "Het tegendeel van 있어요 is 없어요." },
    { wrong: "안 알아요.", right: "몰라요.", why: "알다 (weten) heeft een eigen ontkenning: 모르다 → 몰라요." },
    { wrong: "저는 안 학생이에요.", right: "저는 학생이 아니에요.", why: "이에요 ontken je met 이/가 아니에요, niet met 안." }
  ],
  vocab: [
    ["안, -지 않다", "an, -ji anta", "niet (ontkenning)"], ["없다", "eopda", "er niet zijn, niet hebben"], ["모르다", "moreuda", "niet weten"],
    ["아니다", "anida", "niet zijn"], ["못", "mot", "niet kunnen"], ["술", "sul", "alcohol"],
    ["고기", "gogi", "vlees"], ["음식", "eumsik", "eten, gerecht"], ["비싸다", "bissada", "duur"], ["회사", "hoesa", "bedrijf, werk"]
  ],
  dialogue: [
    ["A", "커피 마셔요?", "Keopi masyeoyo?", "Drink je koffie?"],
    ["B", "아니요, 커피는 안 마셔요. 차를 마셔요.", "Aniyo, keopineun an masyeoyo. Chareul masyeoyo.", "Nee, koffie drink ik niet. Ik drink thee."],
    ["A", "오늘 회사에 가요?", "Oneul hoesae gayo?", "Ga je vandaag naar je werk?"],
    ["B", "아니요, 오늘은 가지 않아요. 집에서 쉬어요.", "Aniyo, oneureun gaji anayo. Jibeseo swieoyo.", "Nee, vandaag ga ik niet. Ik rust thuis."],
    ["A", "그럼 같이 점심 먹어요!", "Geureom gachi jeomsim meogeoyo!", "Laten we dan samen lunchen!"],
    ["B", "좋아요.", "Joayo.", "Goed."]
  ],
  reading: {
    title: "제 룸메이트",
    lines: [
      { cn: "하나는 제 룸메이트예요.", py: "Hananeun je rummeiteuyeyo.", nl: "Hana is mijn huisgenote." },
      { cn: "하나는 고기를 안 먹어요.", py: "Hananeun gogireul an meogeoyo.", nl: "Hana eet geen vlees." },
      { cn: "커피도 안 마셔요.", py: "Keopido an masyeoyo.", nl: "Ze drinkt ook geen koffie." },
      { cn: "아침에는 차를 마셔요.", py: "Achimeneun chareul masyeoyo.", nl: "'s Ochtends drinkt ze thee." },
      { cn: "하나는 텔레비전을 보지 않아요.", py: "Hananeun tellebijeoneul boji anayo.", nl: "Hana kijkt geen tv." },
      { cn: "저녁에는 책을 읽어요.", py: "Jeonyeogeneun chaegeul ilgeoyo.", nl: "'s Avonds leest ze een boek." },
      { cn: "저는 고기를 아주 좋아해요.", py: "Jeoneun gogireul aju joahaeyo.", nl: "Ik houd erg van vlees." },
      { cn: "그래서 저녁은 따로 먹어요.", py: "Geuraeseo jeonyeogeun ttaro meogeoyo.", nl: "Daarom eten we 's avonds apart." },
      { cn: "그래도 하나는 정말 좋은 친구예요.", py: "Geuraedo Hananeun jeongmal joeun chinguyeyo.", nl: "Toch is Hana een heel goede vriendin." }
    ],
    questions: [
      { type: "mc", q: "Wat drinkt Hana 's ochtends?",
        options: ["Thee.", "Koffie.", "Melk.", "Niets."], answer: 0,
        why: ["Goed: 아침에는 차를 마셔요.", "커피도 안 마셔요: koffie drinkt ze juist niet.", "Melk staat niet in de tekst.", "Er staat dat ze thee drinkt."] },
      { type: "mc", q: "Waarom eten ze 's avonds apart?",
        options: ["De schrijver houdt van vlees, en Hana eet geen vlees.", "Hana kijkt 's avonds tv.", "Hana is geen goede vriendin.", "De schrijver eet 's avonds niet."], answer: 0,
        why: ["Goed: 고기를 안 먹어요 ... 저는 고기를 아주 좋아해요. 그래서 ...", "Hana kijkt juist geen tv: 보지 않아요.", "Er staat: 정말 좋은 친구예요.", "Ze eten allebei, maar apart: 따로 먹어요."] },
      { type: "mc", q: "하나는 텔레비전을 보지 않아요. Wat betekent dit?",
        options: ["Hana kijkt geen tv.", "Hana kan geen tv kijken.", "Hana heeft geen tv.", "Hana keek gisteren geen tv."], answer: 0,
        why: ["Goed: -지 않아요 = 안 봐요: ze doet het niet.", "Niet kunnen is 못 봐요 of 보지 못해요.", "Geen tv hebben is 텔레비전이 없어요.", "않아요 is tegenwoordige tijd. Verleden tijd is 않았어요."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik studeer vandaag niet.\"",
      options: ["오늘은 공부 안 해요.", "오늘은 안 공부해요.", "오늘은 공부 안 했어요.", "오늘은 공부 않 해요."], answer: 0,
      why: ["Goed: bij ding + 하다 staat 안 direct voor 해요.", "Bij 공부하다 komt 안 tussen 공부 en 해요.", "안 했어요 is verleden tijd: \"ik heb niet gestudeerd\".", "Voor het werkwoord schrijf je 안. 않 hoort alleen bij -지 않아요."] },
    { type: "mc", q: "\"Ik ga niet naar school.\" Gebruik -지 않아요.",
      options: ["학교에 가지 않아요.", "학교에 가지 안아요.", "학교에 가 않아요.", "학교에 가지 않았어요."], answer: 0,
      why: ["Goed: stam 가 + 지 않아요.", "Het is 않아요, met ㄶ.", "Tussen de stam en 않아요 hoort 지.", "않았어요 is verleden tijd: \"ik ging niet\"."] },
    { type: "mc", q: "\"Ik heb geen tijd.\"",
      options: ["시간이 없어요.", "시간이 안 있어요.", "시간을 없어요.", "시간가 없어요."], answer: 0,
      why: ["Goed: het tegendeel van 있어요 is 없어요.", "있어요 ontken je niet met 안. Je zegt 없어요.", "Bij 없어요 krijgt het ding 이/가, niet 을.", "시간 eindigt op een 받침, dus 이, niet 가."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik eet geen Koreaans eten.\"",
      tokens: [["한국", "hanguk"], ["음식을", "eumsigeul"], ["안", "an"], ["먹어요", "meogeoyo"]] },
    { type: "mc", q: "\"Ik kan geen pittig eten eten.\" 매운 음식을 ___.",
      options: ["못 먹어요", "안 먹어요", "먹지 않아요", "못 먹었어요"], answer: 0,
      why: ["Goed: niet kunnen = 못.", "안 betekent \"niet doen\", niet \"niet kunnen\".", "-지 않아요 is hetzelfde als 안: niet doen.", "먹었어요 is verleden tijd: \"ik kon het niet eten\"."] },
    { type: "mc", q: "\"Ik ben geen student.\"",
      options: ["저는 학생이 아니에요.", "저는 안 학생이에요.", "저는 학생이 안 이에요.", "저는 학생이 없어요."], answer: 0,
      why: ["Goed: 이에요 ontken je met 이/가 아니에요.", "안 staat niet voor een zelfstandig naamwoord.", "이에요 ontken je niet met 안. Je zegt 아니에요.", "없어요 betekent \"er is geen / ik heb geen\"."] },
    { type: "mc", q: "Iemand vraagt de weg. Je zegt: \"Ik weet het niet.\"",
      options: ["몰라요.", "안 알아요.", "알아요 안.", "없어요."], answer: 0,
      why: ["Goed: 알다 heeft een eigen ontkenning: 몰라요.", "알다 ontken je niet met 안. Je zegt 몰라요.", "안 staat voor het werkwoord, niet erachter. En bij 알다 zeg je 몰라요.", "없어요 betekent \"er is niet\", niet \"ik weet het niet\"."] },
    { type: "fill", q: "저는 오늘 회사에 가지 ___. (Ik ga vandaag niet naar mijn werk.)", answers: ["않아요"],
      hint: "Na 가지 komt de ontkenning met ㄶ.", why: "Stam + 지 않아요: 가지 않아요. Schrijf 않, niet 안." },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn vader drinkt geen alcohol.\"",
      tokens: [["제", "je"], ["아버지는", "abeojineun"], ["술을", "sureul"], ["안", "an"], ["마셔요", "masyeoyo"]] },
    { type: "open", q: "Vertaal: \"Ik drink geen koffie.\"", model: ["저는 커피를 안 마셔요.", "커피를 마시지 않아요.", "저는 커피를 마시지 않아요."],
      tip: "Check: 안 staat direct voor 마셔요, of 지 않아요 komt achter de stam 마시." },
    { type: "open", q: "Vertaal: \"Vandaag ga ik niet naar school.\"", model: ["오늘은 학교에 안 가요.", "오늘은 학교에 가지 않아요.", "오늘 학교에 안 가요."],
      tip: "Check: 안 vlak voor 가요, of 가지 않아요. 학교에 krijgt 에 (naar)." }
  ],
  review: [
    { type: "mc", q: "\"Ik heb gisteren niet gewerkt.\" (일하다)",
      options: ["어제 일 안 했어요.", "어제 안 일했어요.", "어제 일 안 해요.", "어제 일 않 했어요."], answer: 0,
      why: ["Goed: 안 staat voor 했어요, en het is verleden tijd.", "Bij 일하다 komt 안 tussen 일 en 했어요.", "안 해요 is tegenwoordige tijd. Bij 어제 hoort 했어요.", "Voor het werkwoord schrijf je 안, niet 않."] },
    { type: "mc", q: "\"Het is niet duur.\" (비싸다)",
      options: ["비싸지 않아요.", "비싸지 안아요.", "비싸 않아요.", "비싸지 않았어요."], answer: 0,
      why: ["Goed: stam 비싸 + 지 않아요.", "Het is 않아요, met ㄶ.", "Tussen de stam en 않아요 hoort 지.", "않았어요 is verleden tijd: \"het was niet duur\"."] },
    { type: "mc", q: "\"Ik kijk geen tv.\"",
      options: ["텔레비전을 안 봐요.", "안 텔레비전을 봐요.", "텔레비전을 봐요 안.", "텔레비전을 보지 안아요."], answer: 0,
      why: ["Goed: 안 staat direct voor 봐요.", "안 hoort voor het werkwoord, niet voor het ding.", "안 staat voor het werkwoord, niet erachter.", "Het is 않아요, met ㄶ: 보지 않아요."] }
  ]
})
