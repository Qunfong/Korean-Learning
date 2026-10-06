({
  id: "01", slug: "eun-ga", title: "은/는 en 이/가", sub: "Topic en onderwerp",
  canDo: "Je kunt nu zeggen waar je zin over gaat met 은/는, en wie iets doet met 이/가.",
  guess: {
    q: "Je stelt jezelf voor: \"Ik ben Minsu.\" Welke zin klopt, denk je?",
    options: ["저는 민수예요.", "저은 민수예요.", "저가 민수예요.", "저을 민수예요."], answer: 0,
    why: ["Goed: 저 eindigt op een klinker, dus 는.", "은 komt alleen na een 받침. 저 eindigt op een klinker.", "저 + 가 bestaat niet; dat wordt 제가. Bij een voorstelling gebruik je 저는.", "을 markeert een lijdend voorwerp, niet wie je bent."]
  },
  problem: "Het Koreaans plakt een klein partikel achter een woord. Dat partikel zegt welke rol het woord heeft. 은/는 zegt: hierover gaat de zin. 이/가 zegt: dit is wie of wat iets doet of is. Vaak is dat nieuwe informatie. Het Nederlands heeft hier geen woordje voor.",
  pattern: [
    { l: "wie", v: "저", c: 1 }, { l: "은/는", v: "는", c: 2, key: true }, { l: "wat", v: "학생이에요", c: 4 }
  ],
  patternCap: "Woord + 은/는 (hierover gaat het) · woord + 이/가 (wie of wat, nieuwe informatie)",
  rules: [
    "Eindigt het woord op een 받침 (medeklinker)? Dan 은 of 이: 선생님은, 책이.",
    "Eindigt het woord op een klinker? Dan 는 of 가: 저는, 친구가.",
    "Vraag je met 누가 (wie)? Dan krijgt het antwoord ook 이/가: 친구가 와요.",
    "Bij 있어요 en 없어요 krijgt het ding meestal 이/가: 동생이 있어요.",
    "Let op: 저 + 가 wordt 제가, en 누구 + 가 wordt 누가."
  ],
  pitfall: "Zeg niet 저가. Als 가 achter 저 komt, wordt het 제가: 제가 해요.",
  examples: [
    { cn: "저는 네덜란드 사람이에요.", py: "Jeoneun Nedeollandeu saramieyo.", nl: "Ik ben Nederlander." },
    { cn: "친구가 와요.", py: "Chinguga wayo.", nl: "Mijn vriend komt eraan." },
    { cn: "이 책은 재미있어요.", py: "I chaegeun jaemiisseoyo.", nl: "Dit boek is leuk." },
    { cn: "동생이 있어요.", py: "Dongsaengi isseoyo.", nl: "Ik heb een jonger broertje of zusje." }
  ],
  nuance: [
    { h: "은/는 of 이/가: bekend onderwerp of nieuwe informatie?",
      p: "Met 은/는 zeg je: over dit woord gaat het, en nu volgt iets nieuws erover. Met 이/가 ligt de nadruk op het woord zelf. Dat is het nieuwe stukje informatie, vaak het antwoord op 누가 (wie). Vergelijk: je vertelt iets over Minsu, of je zegt wie de student is.",
      ex: [
        { cn: "민수는 학생이에요.", py: "Minsuneun haksaengieyo.", nl: "Minsu is student. (over Minsu)" },
        { cn: "민수가 학생이에요.", py: "Minsuga haksaengieyo.", nl: "Minsu is de student. (en niet iemand anders)" }
      ] },
    { h: "은/는 voor tegenstelling",
      p: "Zet je twee dingen tegenover elkaar? Dan krijgen ze allebei 은/는. Zo hoor je: ik wel, maar zij iets anders. In het Nederlands leg je dan vaak klemtoon op het woord.",
      ex: [
        { cn: "저는 학생이에요. 언니는 회사원이에요.", py: "Jeoneun haksaengieyo. Eonnineun hoesawonieyo.", nl: "Ik ben student. Mijn oudere zus werkt bij een bedrijf." }
      ] },
    { h: "Nieuw ding eerst met 이/가, daarna met 은/는",
      p: "Noem je iets voor het eerst, zoals met 있어요? Dan gebruik je 이/가. Praat je daarna verder over hetzelfde ding, dan wordt het 은/는. Het is nu bekend.",
      ex: [
        { cn: "집 앞에 카페가 있어요. 그 카페는 커요.", py: "Jip ape kapega isseoyo. Geu kapeneun keoyo.", nl: "Voor mijn huis is een café. Dat café is groot." }
      ] }
  ],
  mistakes: [
    { wrong: "저가 학생이에요.", right: "제가 학생이에요.", why: "저 + 가 wordt altijd 제가." },
    { wrong: "선생님는 한국 사람이에요.", right: "선생님은 한국 사람이에요.", why: "선생님 eindigt op een 받침 (ㅁ). Dan gebruik je 은, niet 는." },
    { wrong: "누가 와요? 민수는 와요.", right: "누가 와요? 민수가 와요.", why: "Het antwoord op 누가 is nieuwe informatie. Dat krijgt 이/가." },
    { wrong: "시간을 있어요.", right: "시간이 있어요.", why: "Bij 있어요 en 없어요 krijgt het ding 이/가, geen 을/를." }
  ],
  vocab: [
    ["은/는, 이/가", "eun/neun, i/ga", "(topicpartikel, onderwerpspartikel)"], ["저", "jeo", "ik (beleefd)"], ["친구", "chingu", "vriend"],
    ["사람", "saram", "mens, persoon"], ["동생", "dongsaeng", "jonger broertje of zusje"], ["선생님", "seonsaengnim", "leraar"],
    ["학생", "haksaeng", "student, leerling"], ["재미있다", "jaemiitda", "leuk, interessant"], ["어렵다", "eoryeopda", "moeilijk"], ["누가", "nuga", "wie (als onderwerp)"]
  ],
  dialogue: [
    ["A", "안녕하세요. 저는 민수예요.", "Annyeonghaseyo. Jeoneun Minsuyeyo.", "Hallo. Ik ben Minsu."],
    ["B", "안녕하세요. 저는 안나예요. 네덜란드 사람이에요.", "Annyeonghaseyo. Jeoneun Annayeyo. Nedeollandeu saramieyo.", "Hallo. Ik ben Anna. Ik ben Nederlandse."],
    ["A", "한국어가 어려워요?", "Hangugeoga eoryeowoyo?", "Is Koreaans moeilijk?"],
    ["B", "네, 조금 어려워요. 그런데 재미있어요.", "Ne, jogeum eoryeowoyo. Geureonde jaemiisseoyo.", "Ja, een beetje. Maar het is leuk."],
    ["A", "누가 가르쳐요?", "Nuga gareuchyeoyo?", "Wie geeft les?"],
    ["B", "김 선생님이 가르쳐요.", "Gim seonsaengnimi gareuchyeoyo.", "Meneer Kim geeft les."]
  ],
  reading: {
    title: "제 친구 지수",
    lines: [
      { cn: "저는 안나예요.", py: "Jeoneun Annayeyo.", nl: "Ik ben Anna." },
      { cn: "저는 서울에 살아요.", py: "Jeoneun Seoure sarayo.", nl: "Ik woon in Seoul." },
      { cn: "저는 한국 친구가 있어요.", py: "Jeoneun Hanguk chinguga isseoyo.", nl: "Ik heb een Koreaanse vriendin." },
      { cn: "친구 이름은 지수예요.", py: "Chingu ireumeun Jisuyeyo.", nl: "Mijn vriendin heet Jisu." },
      { cn: "지수는 학생이에요.", py: "Jisuneun haksaengieyo.", nl: "Jisu is student." },
      { cn: "지수는 키가 커요.", py: "Jisuneun kiga keoyo.", nl: "Jisu is lang." },
      { cn: "주말에 우리는 같이 공부해요.", py: "Jumare urineun gachi gongbuhaeyo.", nl: "In het weekend studeren we samen." },
      { cn: "한국어가 조금 어려워요.", py: "Hangugeoga jogeum eoryeowoyo.", nl: "Koreaans is een beetje moeilijk." },
      { cn: "그런데 지수가 도와줘요.", py: "Geureonde Jisuga dowajwoyo.", nl: "Maar Jisu helpt me." }
    ],
    questions: [
      { type: "mc", q: "Wie is Jisu?",
        options: ["Een Koreaanse vriendin van Anna, en student.", "De lerares van Anna.", "Het jongere zusje van Anna.", "Een Nederlandse vriendin van Anna."], answer: 0,
        why: ["Goed: 한국 친구가 있어요 ... 지수는 학생이에요.", "Er staat 학생 (student), niet 선생님.", "Er staat 친구 (vriendin), niet 동생.", "Er staat 한국 친구: een Koreaanse vriendin."] },
      { type: "mc", q: "Wat vindt Anna moeilijk?",
        options: ["Koreaans.", "Het weekend.", "Seoul.", "Studeren met Jisu."], answer: 0,
        why: ["Goed: 한국어가 조금 어려워요.", "In het weekend studeren ze; dat is niet moeilijk.", "Anna woont in Seoul; ze zegt niet dat het moeilijk is.", "Jisu helpt juist: 지수가 도와줘요."] },
      { type: "mc", q: "지수는 키가 커요. Wat doen 는 en 가 hier?",
        options: ["는: de zin gaat over Jisu. 가: wat groot is, haar lengte.", "는: Jisu is het lijdend voorwerp. 가: lengte is het onderwerp.", "는 en 가 betekenen hier allebei \"en\".", "는: Jisu is nieuwe informatie. 가: lengte is al bekend."], answer: 0,
        why: ["Goed: over Jisu (는) wordt gezegd dat haar lengte (가) groot is.", "Lijdend voorwerp is 을/를, niet 은/는.", "Deze partikels betekenen geen \"en\".", "Het is andersom: 는 = bekend onderwerp, 가 = het nieuwe stukje."] }
    ]
  },
  questions: [
    { type: "mc", q: "누가 와요? (Wie komt er?) Je antwoordt: \"Mijn vriend komt.\"",
      options: ["친구가 와요.", "친구이 와요.", "친구은 와요.", "친구를 와요."], answer: 0,
      why: ["Goed: het antwoord op 누가 krijgt 가, en 친구 eindigt op een klinker.", "이 komt alleen na een 받침. 친구 eindigt op een klinker.", "은 komt alleen na een 받침. Op 누가 antwoord je bovendien met 이/가.", "를 markeert een lijdend voorwerp. Je vriend doet zelf iets."] },
    { type: "mc", q: "Je vertelt over je leraar: \"Mijn leraar is Koreaan.\" 선생님___ 한국 사람이에요.",
      options: ["은", "는", "가", "를"], answer: 0,
      why: ["Goed: 선생님 eindigt op een 받침 (ㅁ), dus 은.", "는 komt na een klinker. 선생님 eindigt op ㅁ.", "가 komt na een klinker. Na een 받침 is het 이.", "를 markeert een lijdend voorwerp, niet wie iemand is."] },
    { type: "mc", q: "누가 시간이 있어요? (Wie heeft tijd?) Je antwoordt: \"Ik heb tijd.\"",
      options: ["제가 시간이 있어요.", "저가 시간이 있어요.", "제가 시간가 있어요.", "제가 시간을 있어요."], answer: 0,
      why: ["Goed: 저 + 가 wordt 제가, en 시간 eindigt op een 받침, dus 이.", "저 + 가 bestaat niet. Het wordt 제가.", "시간 eindigt op ㄴ. Na een 받침 is het 이, niet 가.", "Bij 있어요 krijgt het ding 이/가, niet 을."] },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn vriend is Koreaan.\"",
      tokens: [["제", "je"], ["친구는", "chinguneun"], ["한국", "hanguk"], ["사람이에요", "saramieyo"]] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["저가 학생이에요.", "제가 학생이에요.", "저는 학생이에요.", "동생이 학생이에요."], answer: 0,
      why: ["Goed: deze is fout. 저 + 가 wordt 제가.", "Deze klopt: 제가 = 저 + 가.", "Deze klopt: 저 eindigt op een klinker, dus 는.", "Deze klopt: 동생 eindigt op een 받침, dus 이."] },
    { type: "mc", q: "저는 학생이에요. 언니는 회사원이에요. Wat doet 는 bij 언니?",
      options: ["Het zet 언니 tegenover 저: ik dit, zij iets anders.", "Het maakt 언니 het lijdend voorwerp.", "Het zegt dat 언니 het antwoord op 누가 is.", "Het maakt 언니 meervoud."], answer: 0,
      why: ["Goed: twee keer 은/는 geeft een tegenstelling.", "Lijdend voorwerp is 을/를.", "Het antwoord op 누가 krijgt 이/가.", "Meervoud is 들, niet 는."] },
    { type: "mc", q: "\"Ik heb geen paraplu.\" 우산___ 없어요.",
      options: ["이", "가", "을", "는"], answer: 0,
      why: ["Goed: bij 없어요 krijgt het ding 이/가, en 우산 eindigt op een 받침 (ㄴ).", "가 komt na een klinker. 우산 eindigt op ㄴ.", "Bij 없어요 gebruik je geen 을/를.", "는 komt na een klinker. Na ㄴ zou het 은 zijn."] },
    { type: "fill", q: "제 이름___ 안나예요. (Mijn naam is Anna.)", answers: ["은"],
      hint: "이름 eindigt op ㅁ. De zin gaat over je naam.", why: "이름 heeft een 받침, en de zin gaat over je naam: 이름은." },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn vriend heeft een jonger zusje.\"",
      tokens: [["제", "je"], ["친구는", "chinguneun"], ["여동생이", "yeodongsaengi"], ["있어요", "isseoyo"]] },
    { type: "open", q: "Vertaal: \"Ik ben student.\"", model: ["저는 학생이에요.", "저는 대학생이에요."],
      tip: "Check: 저 eindigt op een klinker, dus 는. 학생 eindigt op een 받침, dus 이에요." },
    { type: "open", q: "Vertaal: \"Ik heb een jonger broertje.\"", model: ["저는 남동생이 있어요.", "남동생이 있어요.", "저는 동생이 있어요."],
      tip: "Check: bij 있어요 krijgt 동생 het partikel 이 (na een 받침). 저는 mag je weglaten." }
  ],
  review: [
    { type: "mc", q: "누가 가요? (Wie gaat er?) \"Minsu gaat.\"",
      options: ["민수가 가요.", "민수이 가요.", "민수은 가요.", "민수를 가요."], answer: 0,
      why: ["Goed: antwoord op 누가 met 가, na een klinker.", "이 komt alleen na een 받침.", "은 komt na een 받침, en op 누가 antwoord je met 이/가.", "를 markeert een lijdend voorwerp."] },
    { type: "mc", q: "가방___ 있어요? (Heb je een tas?)",
      options: ["이", "가", "를", "을"], answer: 0,
      why: ["Goed: 가방 eindigt op ㅇ, een 받침, dus 이.", "가 komt na een klinker. 가방 eindigt op een 받침.", "Bij 있어요 krijgt het ding 이/가, niet 를.", "Bij 있어요 krijgt het ding 이/가, niet 을."] },
    { type: "mc", q: "물___ 없어요. (Er is geen water.)",
      options: ["이", "가", "을", "를"], answer: 0,
      why: ["Goed: 물 eindigt op ㄹ, een 받침, en bij 없어요 hoort 이/가.", "가 komt na een klinker. 물 eindigt op een 받침.", "Bij 없어요 krijgt het ding 이/가, niet 을.", "Bij 없어요 krijgt het ding 이/가, en 를 komt bovendien na een klinker."] }
  ]
})
