({
  id: "10", slug: "do-man", title: "도 en 만", sub: "Ook en alleen",
  canDo: "Je kunt nu zeggen dat iets ook zo is met 도, en dat het alleen dat is met 만.",
  guess: {
    q: "Je vriend zegt: 저는 학생이에요. Jij bent ook student. Welke zin klopt, denk je?",
    options: ["저도 학생이에요.", "저는도 학생이에요.", "제가도 학생이에요.", "저만 학생이에요."], answer: 0,
    why: ["Goed: 도 vervangt 는. 저 + 도 = 저도.", "도 komt niet na 는. Het neemt de plaats van 는 in.", "도 komt niet na 가. Het neemt de plaats van 가 in.", "만 betekent \"alleen\": alleen ik ben student."]
  },
  problem: "In het Nederlands zeg je \"ook\" en \"alleen\" als losse woorden. In het Koreaans zijn dat partikels die je achter een woord plakt: 도 (ook) en 만 (alleen). Ze hangen aan het woord waar ze over gaan. Let op: 도 en 만 nemen de plaats in van 은/는, 이/가 en 을/를.",
  pattern: [
    { l: "wie", v: "저", c: 1 }, { l: "도 (ook)", v: "도", c: 2, key: true }, { l: "wat", v: "커피", c: 3 },
    { l: "만 (alleen)", v: "만", c: 5, key: true }, { l: "werkwoord", v: "마셔요", c: 4 }
  ],
  patternCap: "Woord + 도 (ook) · woord + 만 (alleen) · ze vervangen 은/는, 이/가, 을/를 · na 에/에서 blijven die staan: 집에서도, 주말에만",
  rules: [
    "도 en 만 hebben geen vorm na 받침: 저도, 학생도, 커피만, 물만.",
    "도 en 만 vervangen 은/는, 이/가 en 을/를: 저는 wordt 저도, 커피를 wordt 커피만.",
    "에 en 에서 blijven staan. 도 en 만 komen erachter: 학교에도, 집에서만.",
    "Twee dingen met 도: 사과도 바나나도 좋아해요 (zowel appels als bananen).",
    "도 en 만 staan direct achter het woord waar ze over gaan, net als \"ook\" en \"alleen\"."
  ],
  pitfall: "Zet 도 niet achter 는, 가 of 를. 저는도 en 커피를도 zijn fout. Het is 저도 en 커피도.",
  examples: [
    { cn: "저도 학생이에요.", py: "Jeodo haksaengieyo.", nl: "Ik ben ook student." },
    { cn: "저는 커피만 마셔요.", py: "Jeoneun keopiman masyeoyo.", nl: "Ik drink alleen koffie." },
    { cn: "동생은 사과도 좋아해요.", py: "Dongsaengeun sagwado joahaeyo.", nl: "Mijn broertje houdt ook van appels." },
    { cn: "주말에만 운동해요.", py: "Jumareman undonghaeyo.", nl: "Ik sport alleen in het weekend." }
  ],
  nuance: [
    { h: "도 (ook) of 만 (alleen)? Het minimale paar",
      p: "도 voegt iets toe: nog iemand of nog iets. 만 sluit al het andere uit: dit en niets anders. Met hetzelfde woord krijg je dus bijna tegengestelde zinnen.",
      ex: [
        { cn: "저도 가요.", py: "Jeodo gayo.", nl: "Ik ga ook." },
        { cn: "저만 가요.", py: "Jeoman gayo.", nl: "Alleen ik ga." }
      ] },
    { h: "Het woord met 도 krijgt de betekenis",
      p: "In het Nederlands verschuift de betekenis met de plaats van \"ook\". In het Koreaans hangt 도 aan één woord. Zet je 도 aan 저, dan ben jij het die ook iets doet. Zet je 도 aan 커피, dan is koffie het extra ding.",
      ex: [
        { cn: "저도 커피를 마셔요.", py: "Jeodo keopireul masyeoyo.", nl: "Ik drink ook koffie. (net als jij)" },
        { cn: "저는 커피도 마셔요.", py: "Jeoneun keopido masyeoyo.", nl: "Ik drink ook koffie. (naast thee)" }
      ] },
    { h: "Met 에 en 에서: die blijven staan",
      p: "은/는, 이/가 en 을/를 verdwijnen voor 도 en 만. Maar 에 en 에서 dragen betekenis: waar of wanneer. Die blijven dus staan, en 도 of 만 komt erachter. 학교도에 bestaat niet.",
      ex: [
        { cn: "저는 집에서도 한국어를 공부해요.", py: "Jeoneun jibeseodo hangugeoreul gongbuhaeyo.", nl: "Ik studeer ook thuis Koreaans." }
      ] },
    { h: "만 om een verzoek zachter te maken",
      p: "In verzoeken maakt 만 je vraag klein en beleefd: alleen dit, niet meer. Je hoort dit veel in winkels en bij het wachten: 하나만 주세요, 잠깐만 기다리세요.",
      ex: [
        { cn: "하나만 주세요.", py: "Hanaman juseyo.", nl: "Geeft u er maar één." }
      ] }
  ],
  mistakes: [
    { wrong: "저는도 학생이에요.", right: "저도 학생이에요.", why: "도 vervangt 는. Ze staan nooit samen." },
    { wrong: "커피를도 마셔요.", right: "커피도 마셔요.", why: "도 vervangt 를. Ze staan nooit samen." },
    { wrong: "물을만 마셔요.", right: "물만 마셔요.", why: "만 vervangt 을. Je plakt 만 direct aan 물." },
    { wrong: "학교도에 가요.", right: "학교에도 가요.", why: "에 blijft staan en komt eerst. Daarna komt 도." }
  ],
  vocab: [
    ["도 / 만", "do / man", "ook / alleen, maar"], ["사과", "sagwa", "appel"], ["좋아하다", "joahada", "houden van, graag hebben"],
    ["고기", "gogi", "vlees"], ["채소", "chaeso", "groente"], ["과일", "gwail", "fruit"],
    ["빵", "ppang", "brood"], ["우유", "uyu", "melk"], ["아침", "achim", "ochtend; ontbijt"], ["다", "da", "allemaal, alles"]
  ],
  dialogue: [
    ["A", "저는 비빔밥을 먹어요. 안나 씨도 비빔밥 먹어요?", "Jeoneun bibimbabeul meogeoyo. Anna ssido bibimbap meogeoyo?", "Ik neem bibimbap. Neem jij ook bibimbap, Anna?"],
    ["B", "네, 저도 비빔밥을 먹어요.", "Ne, jeodo bibimbabeul meogeoyo.", "Ja, ik neem ook bibimbap."],
    ["A", "고기도 먹어요?", "Gogido meogeoyo?", "Eet je ook vlees?"],
    ["B", "아니요, 저는 고기를 안 먹어요. 채소만 먹어요.", "Aniyo, jeoneun gogireul an meogeoyo. Chaesoman meogeoyo.", "Nee, ik eet geen vlees. Ik eet alleen groente."],
    ["A", "아, 그래요? 저는 고기도 채소도 다 좋아해요.", "A, geuraeyo? Jeoneun gogido chaesodo da joahaeyo.", "O, echt? Ik hou van vlees én van groente."]
  ],
  reading: {
    title: "우리 가족의 아침",
    lines: [
      { cn: "저는 아침에 빵만 먹어요.", py: "Jeoneun achime ppangman meogeoyo.", nl: "'s Ochtends eet ik alleen brood." },
      { cn: "밥은 안 먹어요.", py: "Babeun an meogeoyo.", nl: "Rijst eet ik niet." },
      { cn: "그리고 우유도 마셔요.", py: "Geurigo uyudo masyeoyo.", nl: "En ik drink ook melk." },
      { cn: "제 동생도 빵을 좋아해요.", py: "Je dongsaengdo ppangeul joahaeyo.", nl: "Mijn broertje houdt ook van brood." },
      { cn: "그런데 동생은 과일도 먹어요.", py: "Geureonde dongsaengeun gwaildo meogeoyo.", nl: "Maar mijn broertje eet ook fruit." },
      { cn: "사과도 바나나도 먹어요.", py: "Sagwado bananado meogeoyo.", nl: "Hij eet appels én bananen." },
      { cn: "우리 어머니는 커피만 마셔요.", py: "Uri eomeonineun keopiman masyeoyo.", nl: "Mijn moeder drinkt alleen koffie." },
      { cn: "어머니는 아침을 안 먹어요.", py: "Eomeonineun achimeul an meogeoyo.", nl: "Mijn moeder ontbijt niet." }
    ],
    questions: [
      { type: "mc", q: "Wat neemt de moeder 's ochtends?",
        options: ["Alleen koffie.", "Brood en melk.", "Fruit.", "Rijst."], answer: 0,
        why: ["Goed: 어머니는 커피만 마셔요.", "Brood en melk neemt de schrijver.", "Fruit eet het broertje.", "Rijst eet niemand; de schrijver eet geen rijst."] },
      { type: "mc", q: "Wat eet het broertje naast brood?",
        options: ["Appels en bananen.", "Rijst.", "Niets anders.", "Alleen bananen."], answer: 0,
        why: ["Goed: 과일도 먹어요 ... 사과도 바나나도 먹어요.", "Rijst staat bij de schrijver, en die eet het niet.", "Er staat 과일도: ook fruit.", "Er staat 사과도 바나나도: allebei."] },
      { type: "mc", q: "제 동생도 빵을 좋아해요. Wat zegt 도 hier?",
        options: ["Het broertje houdt van brood, net als de schrijver.", "Het broertje houdt alleen van brood.", "Het broertje houdt ook van ander eten dan brood.", "Het broertje houdt niet van brood."], answer: 0,
        why: ["Goed: 도 hangt aan 동생: hij ook, net als ik.", "\"Alleen\" is 만, niet 도.", "Dan zou 도 aan 빵 hangen: 빵도. Hier hangt 도 aan 동생.", "Er staat geen ontkenning in de zin."] }
    ]
  },
  questions: [
    { type: "mc", q: "Je vriend zegt: 저는 한국 사람이에요. Jij bent ook Koreaan. Wat zeg je?",
      options: ["저도 한국 사람이에요.", "저는도 한국 사람이에요.", "제가도 한국 사람이에요.", "저만 한국 사람이에요."], answer: 0,
      why: ["Goed: 도 vervangt 는.", "도 komt niet na 는.", "도 komt niet na 가.", "만 betekent \"alleen ik\"."] },
    { type: "mc", q: "\"Ik drink alleen water.\"",
      options: ["저는 물만 마셔요.", "저는 물을만 마셔요.", "저는 물도 마셔요.", "저는 물만 마셨어요."], answer: 0,
      why: ["Goed: 만 vervangt 을.", "만 komt niet na 을. Je plakt het direct aan 물.", "도 betekent \"ook\", niet \"alleen\".", "마셨어요 is verleden tijd: \"ik dronk\"."] },
    { type: "mc", q: "Je eet vis. \"Ik eet ook vlees.\" (naast vis)",
      options: ["저는 고기도 먹어요.", "저는 고기를도 먹어요.", "저도 고기를 먹어요.", "저는 고기만 먹어요."], answer: 0,
      why: ["Goed: vlees is het extra ding, dus 도 aan 고기.", "도 vervangt 를. Ze staan niet samen.", "Hier hangt 도 aan 저: \"ik ook\", niet \"ook vlees\".", "만 betekent \"alleen vlees\"."] },
    { type: "mc", q: "Je gaat naar school. \"Ik ga ook naar de bibliotheek.\"",
      options: ["도서관에도 가요.", "도서관도에 가요.", "도서관에만 가요.", "도서관을도 가요."], answer: 0,
      why: ["Goed: 에 blijft staan, 도 komt erachter.", "Eerst 에, dan 도.", "만 betekent \"alleen naar de bibliotheek\".", "도 vervangt 을. Ze staan niet samen."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["친구가도 와요.", "친구도 와요.", "친구만 와요.", "친구는 와요."], answer: 0,
      why: ["Goed: deze is fout. 도 vervangt 가: 친구도.", "Deze klopt: \"mijn vriend komt ook\".", "Deze klopt: \"alleen mijn vriend komt\".", "Deze klopt: \"mijn vriend komt (wel)\"."] },
    { type: "mc", q: "\"Alleen Minsu komt.\"",
      options: ["민수 씨만 와요.", "민수 씨도 와요.", "민수 씨가만 와요.", "민수 씨만 왔어요."], answer: 0,
      why: ["Goed: 만 = alleen, en het vervangt 가.", "도 betekent \"ook\": Minsu komt ook.", "만 vervangt 가. Ze staan niet samen.", "왔어요 is verleden tijd: \"kwam\"."] },
    { type: "mc", q: "In een winkel: \"Geeft u er maar één.\"",
      options: ["하나만 주세요.", "하나도 주세요.", "하나를만 주세요.", "하나만 줬어요."], answer: 0,
      why: ["Goed: 만 maakt het verzoek klein: alleen één.", "도 betekent \"ook één\". Dat past hier niet.", "만 vervangt 를. Ze staan niet samen.", "줬어요 is verleden tijd en geen verzoek."] },
    { type: "fill", q: "저는 주말___ 쉬어요. (Ik rust alleen in het weekend.)", answers: ["에만"],
      hint: "Tijd krijgt 에. Wat komt erachter voor \"alleen\"?", why: "에 blijft staan, 만 komt erachter: 주말에만." },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn broertje drinkt ook koffie.\" (net als ik)",
      tokens: [["제", "je"], ["동생도", "dongsaengdo"], ["커피를", "keopireul"], ["마셔요", "masyeoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik eet 's ochtends alleen brood.\"",
      tokens: [["저는", "jeoneun"], ["아침에", "achime"], ["빵만", "ppangman"], ["먹어요", "meogeoyo"]],
      alt: ["아침에 저는 빵만 먹어요"] },
    { type: "open", q: "Vertaal: \"Ik ben ook Nederlander.\"", model: ["저도 네덜란드 사람이에요.", "저도 네덜란드인이에요."],
      tip: "Check: 도 vervangt 는, dus 저도, niet 저는도." },
    { type: "open", q: "Vertaal: \"Ik drink alleen thee.\"", model: ["저는 차만 마셔요.", "차만 마셔요."],
      tip: "Check: 만 vervangt 를, dus 차만, niet 차를만." }
  ],
  review: [
    { type: "mc", q: "Je hebt een hond. \"Ik heb ook een kat.\"",
      options: ["고양이도 있어요.", "고양이가도 있어요.", "고양이만 있어요.", "고양이도에 있어요."], answer: 0,
      why: ["Goed: de kat is het extra ding, en 도 vervangt 가.", "도 vervangt 가. Ze staan niet samen.", "만 betekent \"alleen een kat\".", "Bij 있어요 krijgt het ding geen 에."] },
    { type: "mc", q: "\"Ik studeer alleen thuis.\"",
      options: ["집에서만 공부해요.", "집만에서 공부해요.", "집에서도 공부해요.", "집을만 공부해요."], answer: 0,
      why: ["Goed: 에서 blijft staan, 만 komt erachter.", "Eerst 에서, dan 만.", "도 betekent \"ook thuis\".", "을 hoort niet bij de plek, en 만 vervangt 을."] },
    { type: "mc", q: "\"Mijn moeder komt ook.\"",
      options: ["어머니도 와요.", "어머니는도 와요.", "어머니가도 와요.", "어머니만 와요."], answer: 0,
      why: ["Goed: 도 vervangt 는 en 가.", "도 komt niet na 는.", "도 komt niet na 가.", "만 betekent \"alleen mijn moeder\"."] }
  ]
})
