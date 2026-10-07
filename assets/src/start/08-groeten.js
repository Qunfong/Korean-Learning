({
  id: "08", slug: "groeten", title: "Groeten en jezelf voorstellen", sub: "Hallo, ik ben ..., tot ziens",
  canDo: "Je kunt nu groeten, je naam zeggen, ja en nee zeggen en op de goede manier afscheid nemen.",
  guess: {
    q: "Je ontmoet iemand voor het eerst en zegt: \"Ik ben Anna.\" Welke zin klopt, denk je?",
    options: ["저는 안나예요.", "저는 안나이에요.", "저는 안나 있어요.", "저을 안나예요."], answer: 0,
    why: ["Goed: 안나 eindigt op een klinker, dus 예요.", "이에요 komt alleen na een 받침 (slotmedeklinker). 안나 eindigt op een klinker.", "있어요 betekent \"er is\" of \"hebben\", niet \"ben\".", "Na 저 komt 는: 저는. 을 hoort hier niet."]
  },
  problem: "In het Nederlands zeg je \"hallo\" en \"ik ben Anna\". In het Koreaans gebruik je daarvoor vaste zinnen. Na je naam zet je 예요 of 이에요: dat is \"ben\". Ook afscheid nemen werkt anders. Je kiest de zin op basis van wie er weggaat.",
  pattern: [
    { l: "ik", v: "저는", c: 1 }, { l: "naam", v: "민수", c: 3 }, { l: "ben", v: "예요", c: 2, key: true }
  ],
  patternCap: "저는 + naam + 예요 (na een klinker) / 이에요 (na een 받침)",
  rules: [
    "저 is \"ik\" (beleefd). Het woordje 는 erachter zegt: het gaat over mij. Samen: 저는 (jeoneun).",
    "Eindigt het woord op een klinker? Dan 예요: 안나예요 (Annayeyo). Eindigt het op een 받침? Dan 이에요: 톰이에요 (Tomieyo).",
    "안녕하세요 (annyeonghaseyo) is \"hallo\". Je zegt het de hele dag, tegen iedereen.",
    "Afscheid: gaat de ander weg, dan zeg je 안녕히 가세요. Ga jij weg en blijft de ander, dan zeg je 안녕히 계세요.",
    "네 (ne) is \"ja\". 아니요 (aniyo) is \"nee\"."
  ],
  pitfall: "Haal 가세요 en 계세요 niet door elkaar. 가세요 = \"ga goed\", tegen wie weggaat. 계세요 = \"blijf goed\", tegen wie blijft.",
  examples: [
    { cn: "안녕하세요. 저는 안나예요.", py: "Annyeonghaseyo. Jeoneun Annayeyo.", nl: "Hallo. Ik ben Anna." },
    { cn: "저는 톰이에요. 네덜란드 사람이에요.", py: "Jeoneun Tomieyo. Nedeollandeu saramieyo.", nl: "Ik ben Tom. Ik ben Nederlander." },
    { cn: "만나서 반가워요.", py: "Mannaseo bangawoyo.", nl: "Leuk je te ontmoeten." },
    { cn: "안녕히 계세요.", py: "Annyeonghi gyeseyo.", nl: "Tot ziens. (jij gaat weg, de ander blijft)" }
  ],
  nuance: [
    { h: "안녕히 가세요 of 계세요: wie gaat er weg?",
      p: "가세요 komt van 가다, gaan. 계세요 komt van 계시다, blijven (beleefd). Gaat de ander weg? Dan wens je: ga in vrede, 안녕히 가세요. Ga jij weg en blijft de ander? Dan zeg je: blijf in vrede, 안녕히 계세요. Gaan jullie allebei weg, bijvoorbeeld op straat? Dan zeggen jullie allebei 안녕히 가세요.",
      ex: [
        { cn: "안녕히 가세요.", py: "Annyeonghi gaseyo.", nl: "Tot ziens. (de winkelier zegt dit tegen jou als je weggaat)" },
        { cn: "안녕히 계세요.", py: "Annyeonghi gyeseyo.", nl: "Tot ziens. (jij zegt dit tegen de winkelier die blijft)" }
      ] },
    { h: "예요 of 이에요: kijk naar het einde van het woord",
      p: "Na een klinker zeg je 예요. Na een 받침 zeg je 이에요. De ㅇ van 이 is stil, dus de 받침 schuift door (les 07). 톰이에요 klinkt als 토미에요.",
      ex: [
        { cn: "저는 안나예요.", py: "Jeoneun Annayeyo.", nl: "Ik ben Anna. (안나 eindigt op een klinker)" },
        { cn: "저는 학생이에요.", py: "Jeoneun haksaengieyo.", nl: "Ik ben student. (학생 eindigt op ㅇ)" }
      ] },
    { h: "네, 아니요 en 아니에요",
      p: "네 is \"ja\", maar ook \"oké\" of \"ik luister\". 아니요 is \"nee\". Pas op met 아니에요: dat betekent \"dat is het niet\". Je hoort het ook als beleefd antwoord op een bedankje: \"geen dank\".",
      ex: [
        { cn: "감사합니다. 아니에요.", py: "Gamsahamnida. Anieyo.", nl: "Dank u wel. Geen dank." }
      ] },
    { h: "Formeel voorstellen",
      p: "Op je werk of bij een officiële ontmoeting hoor je een formelere vorm. Dan zeg je 처음 뵙겠습니다 (aangenaam) en 저는 ...입니다. Met 예요/이에요 ben je in bijna alle andere situaties beleefd genoeg.",
      ex: [
        { cn: "처음 뵙겠습니다. 저는 안나입니다.", py: "Cheoeum boepgetseumnida. Jeoneun Annaimnida.", nl: "Aangenaam kennis te maken. Ik ben Anna. (formeel)" }
      ] }
  ],
  mistakes: [
    { wrong: "저는 안나이에요.", right: "저는 안나예요.", why: "안나 eindigt op een klinker. Dan gebruik je 예요." },
    { wrong: "저는 톰예요.", right: "저는 톰이에요.", why: "톰 eindigt op een 받침 (ㅁ). Dan gebruik je 이에요." },
    { wrong: "(Je verlaat een winkel.) 안녕히 가세요.", right: "(Je verlaat een winkel.) 안녕히 계세요.", why: "Jij gaat weg en de winkelier blijft. Tegen wie blijft, zeg je 계세요." },
    { wrong: "(Tegen een onbekende.) 나는 민수예요.", right: "(Tegen een onbekende.) 저는 민수예요.", why: "나 is \"ik\" tegen vrienden. Tegen onbekenden zeg je 저." }
  ],
  vocab: [
    ["이에요/예요", "ieyo/yeyo", "ben, is (na 받침 / na klinker)"], ["안녕하세요", "annyeonghaseyo", "hallo"], ["저", "jeo", "ik (beleefd)"],
    ["이름", "ireum", "naam"], ["만나서 반가워요", "mannaseo bangawoyo", "leuk je te ontmoeten"], ["안녕히 가세요", "annyeonghi gaseyo", "tot ziens (tegen wie weggaat)"],
    ["안녕히 계세요", "annyeonghi gyeseyo", "tot ziens (tegen wie blijft)"], ["네", "ne", "ja"], ["아니요", "aniyo", "nee"], ["사람", "saram", "mens, persoon"]
  ],
  dialogue: [
    ["민수", "안녕하세요. 저는 민수예요.", "Annyeonghaseyo. Jeoneun Minsuyeyo.", "Hallo. Ik ben Minsu."],
    ["안나", "안녕하세요. 저는 안나예요.", "Annyeonghaseyo. Jeoneun Annayeyo.", "Hallo. Ik ben Anna."],
    ["민수", "안나 씨는 미국 사람이에요?", "Anna ssineun Miguk saramieyo?", "Anna, ben je Amerikaanse? (씨 = beleefd woordje na een naam)"],
    ["안나", "아니요, 네덜란드 사람이에요.", "Aniyo, Nedeollandeu saramieyo.", "Nee, ik ben Nederlandse."],
    ["민수", "아, 네. 만나서 반가워요.", "A, ne. Mannaseo bangawoyo.", "Ah, oké. Leuk je te ontmoeten."],
    ["안나", "저도 반가워요.", "Jeodo bangawoyo.", "Ik vind het ook leuk."]
  ],
  reading: {
    title: "자기소개 (jagisogae, jezelf voorstellen)",
    lines: [
      { cn: "안녕하세요.", py: "Annyeonghaseyo.", nl: "Hallo." },
      { cn: "제 이름은 톰이에요.", py: "Je ireumeun Tomieyo.", nl: "Mijn naam is Tom." },
      { cn: "저는 네덜란드 사람이에요.", py: "Jeoneun Nedeollandeu saramieyo.", nl: "Ik ben Nederlander." },
      { cn: "저는 학생이에요.", py: "Jeoneun haksaengieyo.", nl: "Ik ben student." },
      { cn: "제 친구는 지수예요.", py: "Je chinguneun Jisuyeyo.", nl: "Mijn vriendin heet Jisu." },
      { cn: "지수는 한국 사람이에요.", py: "Jisuneun Hanguk saramieyo.", nl: "Jisu is Koreaans." },
      { cn: "지수는 선생님이에요.", py: "Jisuneun seonsaengnimieyo.", nl: "Jisu is lerares." },
      { cn: "만나서 반가워요!", py: "Mannaseo bangawoyo!", nl: "Leuk jullie te ontmoeten!" }
    ],
    questions: [
      { type: "mc", q: "Wie is Tom?",
        options: ["Een Nederlandse student.", "Een Koreaanse leraar.", "Een Nederlandse leraar.", "Een Koreaanse student."], answer: 0,
        why: ["Goed: 네덜란드 사람이에요 en 학생이에요.", "Dat is Jisu, en zij is lerares.", "Tom is 학생, student, geen 선생님.", "Tom is 네덜란드 사람, Nederlander."] },
      { type: "mc", q: "Wat doet Jisu?",
        options: ["Ze is lerares.", "Ze is student.", "Ze is Nederlandse.", "Ze heet Tom."], answer: 0,
        why: ["Goed: 지수는 선생님이에요.", "Tom is student, Jisu niet.", "Jisu is 한국 사람: Koreaans.", "Tom is de schrijver. Jisu is zijn vriendin."] },
      { type: "mc", q: "Waarom staat er 지수예요, maar 선생님이에요?",
        options: ["지수 eindigt op een klinker, 선생님 op een 받침.", "지수 is een naam, en namen krijgen altijd 예요.", "선생님 is beleefder, dus krijgt het 이에요.", "Er is geen reden. Je mag ze vrij kiezen."], answer: 0,
        why: ["Goed: na een klinker 예요, na een 받침 (ㅁ) 이에요.", "Namen met een 받침 krijgen 이에요: 톰이에요.", "Beleefdheid heeft hier niets mee te maken. Het gaat om de laatste klank.", "De keuze hangt af van de laatste letter."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik ben Anna.\" Welke zin klopt?",
      options: ["저는 안나예요.", "저는 안나이에요.", "저는 안나이예요.", "저은 안나예요."], answer: 0,
      why: ["Goed: na een klinker 예요.", "이에요 komt na een 받침. 안나 eindigt op een klinker.", "이예요 bestaat niet. Kies 예요 of 이에요.", "저 eindigt op een klinker, dus 는: 저는."] },
    { type: "mc", q: "저는 톰___. (Ik ben Tom.)",
      options: ["이에요", "예요", "이예요", "에요"], answer: 0,
      why: ["Goed: 톰 eindigt op een 받침 (ㅁ), dus 이에요.", "예요 komt na een klinker. 톰 eindigt op ㅁ.", "이예요 bestaat niet.", "Na een 받침 heb je de volledige vorm 이에요 nodig."] },
    { type: "mc", q: "Je verlaat een winkel. De winkelier blijft. Wat zeg jij?",
      options: ["안녕히 계세요.", "안녕히 가세요.", "안녕하세요.", "만나서 반가워요."], answer: 0,
      why: ["Goed: de winkelier blijft, dus 계세요.", "가세요 zeg je tegen iemand die weggaat. Jij gaat weg, niet de winkelier.", "안녕하세요 is \"hallo\", geen afscheid.", "Dat zeg je bij een eerste ontmoeting."] },
    { type: "mc", q: "Een gast gaat weg uit jouw huis. Jij blijft thuis. Wat zeg jij?",
      options: ["안녕히 가세요.", "안녕히 계세요.", "안녕하세요.", "네."], answer: 0,
      why: ["Goed: de gast gaat weg, dus 가세요.", "계세요 zeg je tegen iemand die blijft. De gast blijft niet.", "안녕하세요 is \"hallo\", geen afscheid.", "네 is \"ja\"."] },
    { type: "mc", q: "한국 사람이에요? (Ben je Koreaans?) Je bent Nederlander. Wat zeg je?",
      options: ["아니요, 네덜란드 사람이에요.", "네, 네덜란드 사람이에요.", "아니요, 네덜란드 사람예요.", "아니요, 네덜란드 사람 있어요."], answer: 0,
      why: ["Goed: nee, en 사람 eindigt op ㅁ, dus 이에요.", "네 betekent \"ja\". Je bent geen Koreaan.", "사람 eindigt op een 받침, dus 이에요.", "있어요 is \"er is\", niet \"ben\"."] },
    { type: "mc", q: "Wanneer zeg je 만나서 반가워요?",
      options: ["Als je iemand voor het eerst ontmoet.", "Als je weggaat.", "Als je iemand bedankt.", "Als je sorry zegt."], answer: 0,
      why: ["Goed: het betekent \"leuk je te ontmoeten\".", "Bij weggaan zeg je 안녕히 가세요 of 계세요.", "Bedanken is 감사합니다 of 고마워요 (les 09).", "Sorry is 죄송합니다 of 미안해요 (les 09)."] },
    { type: "mc", q: "Je stelt je voor aan je nieuwe docent. Welke zin past?",
      options: ["저는 민수예요.", "나는 민수예요.", "저는 민수이에요.", "나는 민수이에요."], answer: 0,
      why: ["Goed: 저 is beleefd, en 민수 eindigt op een klinker.", "나 zeg je tegen vrienden, niet tegen een docent.", "민수 eindigt op een klinker, dus 예요.", "나 is te informeel, en na een klinker komt 예요."] },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn vriend is Koreaans.\"",
      tokens: [["제", "je"], ["친구는", "chinguneun"], ["한국", "Hanguk"], ["사람이에요", "saramieyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Anna is Nederlandse.\"",
      tokens: [["안나", "Anna"], ["씨는", "ssineun"], ["네덜란드", "Nedeollandeu"], ["사람이에요", "saramieyo"]] },
    { type: "fill", q: "저는 안나___. (Ik ben Anna.)", answers: ["예요", "yeyo"],
      hint: "안나 eindigt op een klinker.", why: "Na een klinker komt 예요: 안나예요 (Annayeyo)." },
    { type: "open", q: "Vertaal: \"Hallo. Ik ben (jouw naam). Leuk je te ontmoeten.\"", model: ["안녕하세요. 저는 안나예요. 만나서 반가워요. (Annyeonghaseyo. Jeoneun Annayeyo. Mannaseo bangawoyo.)", "안녕하세요. 저는 톰이에요. 만나서 반가워요. (Annyeonghaseyo. Jeoneun Tomieyo. Mannaseo bangawoyo.)"],
      tip: "Check: eindigt je naam in Hangul op een klinker, dan 예요. Op een 받침, dan 이에요. Gebruik 저는, niet 나는." },
    { type: "open", q: "Je gaat weg bij een vriend thuis. Je vriend blijft. Wat zeg je? Schrijf Hangul en romanisatie.", model: ["안녕히 계세요. (Annyeonghi gyeseyo.)"],
      tip: "Check: jij gaat weg, de ander blijft. Dan zeg je 계세요, niet 가세요." }
  ],
  review: [
    { type: "mc", q: "Je vriendin gaat naar huis. Jij blijft in het café. Wat zeg je?",
      options: ["안녕히 가세요.", "안녕히 계세요.", "만나서 반가워요.", "아니요."], answer: 0,
      why: ["Goed: zij gaat weg, dus 가세요.", "계세요 zeg je tegen wie blijft. Jij blijft zelf.", "Dat zeg je bij een eerste ontmoeting.", "아니요 is \"nee\"."] },
    { type: "mc", q: "저는 의사___. (Ik ben arts.)",
      options: ["예요", "이에요", "이예요", "있어요"], answer: 0,
      why: ["Goed: 의사 eindigt op een klinker, dus 예요.", "이에요 komt na een 받침. 의사 eindigt op een klinker.", "이예요 bestaat niet.", "있어요 is \"er is\" of \"hebben\", niet \"ben\"."] },
    { type: "mc", q: "\"Ik ben Jan.\" Jan schrijf je als 얀.",
      options: ["저는 얀이에요.", "저는 얀예요.", "저는 얀이예요.", "저가 얀예요."], answer: 0,
      why: ["Goed: 얀 eindigt op een 받침 (ㄴ), dus 이에요.", "Na een 받침 komt 이에요, niet 예요.", "이예요 bestaat niet.", "Bij een voorstelling zeg je 저는, en na ㄴ komt 이에요."] }
  ]
})
