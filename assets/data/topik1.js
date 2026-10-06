// TOPIK 1 lessons (grammar first; vocab follows later).
// cn = Korean (Hangul), py = Revised Romanization (pronunciation-based).
// Question types: mc (answer = index), order (tokens in the right order), open (self-check with model answers).
// "review" questions never appear in the lesson itself; they come back on the review page.
window.HSK = window.HSK || {};
window.HSK.topik1 = {
  level: "TOPIK 1", dir: "topik1",
  lessons: [
    {
      id: "01", slug: "eun-ga", title: "은/는 en 이/가", sub: "Topic en onderwerp",
      canDo: "Je kunt nu zeggen waar je zin over gaat met 은/는, en wie iets doet met 이/가.",
      guess: {
        q: "Je stelt jezelf voor: \"Ik ben Minsu.\" Welke zin klopt, denk je?",
        options: ["저는 민수예요.", "저은 민수예요.", "저가 민수예요.", "저을 민수예요."], answer: 0,
        why: ["Goed: 저 eindigt op een klinker, dus 는.", "은 komt alleen na een 받침. 저 eindigt op een klinker.", "저 + 가 bestaat niet; dat wordt 제가. Bij een voorstelling gebruik je 저는.", "을 markeert een lijdend voorwerp, niet wie je bent."]
      },
      problem: "Het Koreaans plakt een klein partikel achter een woord. Dat partikel zegt welke rol het woord heeft. 은/는 zegt: hierover gaat de zin. 이/가 zegt: dit is wie of wat iets doet of is. Vaak is dat nieuwe informatie.",
      pattern: [
        { l: "wie", v: "저", c: 1 }, { l: "은/는", v: "는", c: 2, key: true }, { l: "wat", v: "학생이에요", c: 4 }
      ],
      patternCap: "Woord + 은/는 (hierover gaat het) · woord + 이/가 (wie of wat, nieuwe informatie)",
      rules: [
        "Eindigt het woord op een 받침 (medeklinker)? Dan 은 of 이: 선생님은, 책이.",
        "Eindigt het woord op een klinker? Dan 는 of 가: 저는, 친구가.",
        "Vraag je met 누가 (wie)? Dan krijgt het antwoord ook 이/가: 친구가 와요.",
        "Let op: 저 + 가 wordt 제가, en 누구 + 가 wordt 누가."
      ],
      pitfall: "Zeg niet 저가. Als 가 achter 저 komt, wordt het 제가: 제가 해요.",
      examples: [
        { cn: "저는 네덜란드 사람이에요.", py: "Jeoneun Nedeollandeu saramieyo.", nl: "Ik ben Nederlander." },
        { cn: "친구가 와요.", py: "Chinguga wayo.", nl: "Mijn vriend komt eraan." },
        { cn: "이 책은 재미있어요.", py: "I chaegeun jaemiisseoyo.", nl: "Dit boek is leuk." },
        { cn: "동생이 있어요.", py: "Dongsaengi isseoyo.", nl: "Ik heb een jonger broertje of zusje." }
      ],
      vocab: [],
      dialogue: [
        ["A", "안녕하세요. 저는 민수예요.", "Annyeonghaseyo. Jeoneun Minsuyeyo.", "Hallo. Ik ben Minsu."],
        ["B", "안녕하세요. 저는 안나예요. 네덜란드 사람이에요.", "Annyeonghaseyo. Jeoneun Annayeyo. Nedeollandeu saramieyo.", "Hallo. Ik ben Anna. Ik ben Nederlandse."],
        ["A", "한국어가 어려워요?", "Hangugeoga eoryeowoyo?", "Is Koreaans moeilijk?"],
        ["B", "네, 조금 어려워요. 그런데 재미있어요.", "Ne, jogeum eoryeowoyo. Geureonde jaemiisseoyo.", "Ja, een beetje. Maar het is leuk."],
        ["A", "누가 가르쳐요?", "Nuga gareuchyeoyo?", "Wie geeft les?"],
        ["B", "김 선생님이 가르쳐요.", "Gim seonsaengnimi gareuchyeoyo.", "Meneer Kim geeft les."]
      ],
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
        { type: "open", q: "Vertaal: \"Ik ben student.\"", model: ["저는 학생이에요.", "저는 대학생이에요."],
          tip: "Check: 저 eindigt op een klinker, dus 는. 학생 eindigt op een 받침, dus 이에요." }
      ],
      review: [
        { type: "mc", q: "누가 가요? (Wie gaat er?) \"Minsu gaat.\"",
          options: ["민수가 가요.", "민수이 가요.", "민수은 가요.", "민수를 가요."], answer: 0,
          why: ["Goed: antwoord op 누가 met 가, na een klinker.", "이 komt alleen na een 받침.", "은 komt na een 받침, en op 누가 antwoord je met 이/가.", "를 markeert een lijdend voorwerp."] },
        { type: "mc", q: "가방___ 있어요? (Heb je een tas?)",
          options: ["이", "가", "를", "을"], answer: 0,
          why: ["Goed: 가방 eindigt op ㅇ, een 받침, dus 이.", "가 komt na een klinker. 가방 eindigt op een 받침.", "Bij 있어요 krijgt het ding 이/가, niet 를.", "Bij 있어요 krijgt het ding 이/가, niet 을."] }
      ]
    },
    {
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
        "In spreektaal valt 을/를 soms weg. In de oefeningen schrijf je het wel."
      ],
      pitfall: "Bij 있어요, 없어요 en 좋아요 krijgt het ding 이/가: 커피가 좋아요. Bij 좋아해요 is het wel 를: 커피를 좋아해요.",
      examples: [
        { cn: "저는 밥을 먹어요.", py: "Jeoneun babeul meogeoyo.", nl: "Ik eet." },
        { cn: "친구가 사과를 사요.", py: "Chinguga sagwareul sayo.", nl: "Mijn vriend koopt appels." },
        { cn: "동생은 책을 읽어요.", py: "Dongsaengeun chaegeul ilgeoyo.", nl: "Mijn broertje leest een boek." },
        { cn: "저는 한국어를 공부해요.", py: "Jeoneun hangugeoreul gongbuhaeyo.", nl: "Ik studeer Koreaans." }
      ],
      vocab: [],
      dialogue: [
        ["A", "지금 뭐 해요?", "Jigeum mwo haeyo?", "Wat doe je nu?"],
        ["B", "영화를 봐요.", "Yeonghwareul bwayo.", "Ik kijk een film."],
        ["A", "무슨 영화를 봐요?", "Museun yeonghwareul bwayo?", "Welke film kijk je?"],
        ["B", "한국 영화를 봐요. 같이 봐요!", "Hanguk yeonghwareul bwayo. Gachi bwayo!", "Een Koreaanse film. Kijk mee!"],
        ["A", "좋아요. 그럼 저는 커피를 사요.", "Joayo. Geureom jeoneun keopireul sayo.", "Goed. Dan koop ik koffie."]
      ],
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
        { type: "open", q: "Vertaal: \"Ik drink water.\"", model: ["저는 물을 마셔요.", "물을 마셔요."],
          tip: "Check: 물 eindigt op ㄹ, een 받침, dus 을. Het werkwoord staat achteraan." }
      ],
      review: [
        { type: "mc", q: "\"Ik kijk tv.\"",
          options: ["저는 텔레비전을 봐요.", "저는 텔레비전를 봐요.", "저는 텔레비전이 봐요.", "저를 텔레비전을 봐요."], answer: 0,
          why: ["Goed: 텔레비전 eindigt op ㄴ, dus 을.", "를 komt na een klinker. 텔레비전 eindigt op ㄴ.", "De tv is wat je kijkt. Het krijgt 을, niet 이.", "Jij kijkt zelf. 저 krijgt 는, niet 를."] },
        { type: "mc", q: "저는 김치___ 좋아해요. (Ik houd van kimchi.)",
          options: ["를", "을", "가", "이"], answer: 0,
          why: ["Goed: bij 좋아해요 krijgt het ding 을/를, en 김치 eindigt op een klinker.", "을 komt alleen na een 받침.", "가 hoort bij 좋아요, niet bij 좋아해요.", "이 komt na een 받침, en bij 좋아해요 is het 을/를."] }
      ]
    },
    {
      id: "03", slug: "ayo-eoyo", title: "-아요/어요", sub: "Beleefde tegenwoordige tijd",
      canDo: "Je kunt nu werkwoorden beleefd vervoegen in de tegenwoordige tijd, met -아요, -어요 en 해요.",
      guess: {
        q: "먹다 betekent \"eten\". \"Ik eet brood.\" Welke zin klopt, denk je?",
        options: ["저는 빵을 먹어요.", "저는 빵을 먹아요.", "저는 빵을 먹해요.", "저는 빵을 먹으요."], answer: 0,
        why: ["Goed: de klinker van 먹 is ㅓ, dus 어요.", "아요 komt alleen na ㅏ of ㅗ. De klinker van 먹 is ㅓ.", "해요 is alleen voor werkwoorden op 하다.", "으요 bestaat niet. Na 먹 komt 어요."]
      },
      problem: "Een Koreaans werkwoord in het woordenboek eindigt op 다: 가다, 먹다. Zo praat je niet. In beleefde spreektaal haal je 다 weg. Aan de stam plak je 아요 of 어요. De laatste klinker van de stam beslist welke.",
      pattern: [
        { l: "stam", v: "먹", c: 4 }, { l: "-아요/어요", v: "어요", c: 2, key: true }
      ],
      patternCap: "Stam + 아요 (na ㅏ of ㅗ) · stam + 어요 (andere klinkers) · 하다 → 해요",
      rules: [
        "Is de laatste klinker van de stam ㅏ of ㅗ? Dan 아요: 좋다 → 좋아요, 살다 → 살아요.",
        "Bij andere klinkers komt 어요: 먹다 → 먹어요, 읽다 → 읽어요.",
        "Eindigt de stam op een klinker? Dan smelten ze samen: 가다 → 가요, 오다 → 와요, 마시다 → 마셔요, 배우다 → 배워요.",
        "Alles met 하다 wordt 해요: 공부하다 → 공부해요."
      ],
      pitfall: "Zeg niet 하아요 of 하어요. 하다 heeft een eigen vorm: 해요. Een vraag heeft dezelfde vorm; alleen je toon gaat omhoog.",
      examples: [
        { cn: "저는 서울에 살아요.", py: "Jeoneun Seoure sarayo.", nl: "Ik woon in Seoel." },
        { cn: "오늘 날씨가 좋아요.", py: "Oneul nalssiga joayo.", nl: "Het weer is vandaag goed." },
        { cn: "동생이 우유를 마셔요.", py: "Dongsaengi uyureul masyeoyo.", nl: "Mijn broertje drinkt melk." },
        { cn: "저는 매일 한국어를 공부해요.", py: "Jeoneun maeil hangugeoreul gongbuhaeyo.", nl: "Ik studeer elke dag Koreaans." }
      ],
      vocab: [],
      dialogue: [
        ["A", "주말에 뭐 해요?", "Jumare mwo haeyo?", "Wat doe je in het weekend?"],
        ["B", "친구를 만나요. 같이 영화를 봐요.", "Chingureul mannayo. Gachi yeonghwareul bwayo.", "Ik zie een vriend. We kijken samen een film."],
        ["A", "어디에서 만나요?", "Eodieseo mannayo?", "Waar spreken jullie af?"],
        ["B", "학교 앞에서 만나요. 수진 씨는요?", "Hakgyo apeseo mannayo. Sujin ssineunyo?", "Voor de school. En jij, Sujin?"],
        ["A", "저는 집에서 쉬어요. 그리고 책을 읽어요.", "Jeoneun jibeseo swieoyo. Geurigo chaegeul ilgeoyo.", "Ik rust thuis. En ik lees een boek."]
      ],
      questions: [
        { type: "mc", q: "\"Ik ga naar school.\" (가다)",
          options: ["학교에 가요.", "학교에 가아요.", "학교에 가어요.", "학교에 갔어요."], answer: 0,
          why: ["Goed: 가 + 아요 smelt samen tot 가요.", "Twee keer ㅏ smelt samen. Je zegt 가요.", "De klinker is ㅏ, dus 아요, en dat smelt samen tot 가요.", "갔어요 is verleden tijd: \"ik ging\"."] },
        { type: "mc", q: "\"Ik studeer Koreaans.\" (공부하다)",
          options: ["한국어를 공부해요.", "한국어를 공부하아요.", "한국어를 공부하어요.", "한국어가 공부해요."], answer: 0,
          why: ["Goed: 하다 wordt 해요.", "하다 heeft een eigen vorm: 해요, niet 하아요.", "하다 heeft een eigen vorm: 해요, niet 하어요.", "Wat je studeert is het lijdend voorwerp: 한국어를."] },
        { type: "mc", q: "\"Het weer is goed.\" (좋다)",
          options: ["날씨가 좋아요.", "날씨가 좋어요.", "날씨가 좋해요.", "날씨가 좋았어요."], answer: 0,
          why: ["Goed: de klinker van 좋 is ㅗ, dus 아요.", "Na ㅗ komt 아요, niet 어요.", "해요 is alleen voor werkwoorden op 하다.", "좋았어요 is verleden tijd: \"het weer was goed\"."] },
        { type: "order", q: "Zet in de goede volgorde: \"We spreken af voor onze school.\"",
          tokens: [["우리", "uri"], ["학교", "hakgyo"], ["앞에서", "apeseo"], ["만나요", "mannayo"]] },
        { type: "open", q: "Vertaal: \"Ik drink thee.\" (마시다)", model: ["저는 차를 마셔요.", "차를 마셔요."],
          tip: "Check: 마시 + 어요 smelt samen tot 마셔요. 차 eindigt op een klinker, dus 를." }
      ],
      review: [
        { type: "mc", q: "\"Mijn vriend komt.\" (오다)",
          options: ["친구가 와요.", "친구가 오아요.", "친구가 오어요.", "친구가 왔어요."], answer: 0,
          why: ["Goed: 오 + 아요 smelt samen tot 와요.", "ㅗ + 아요 smelt samen. Je zegt 와요.", "Na ㅗ komt 아요, en dat smelt samen tot 와요.", "왔어요 is verleden tijd: \"mijn vriend kwam\"."] },
        { type: "mc", q: "저는 태권도를 ___. (Ik leer taekwondo.) (배우다)",
          options: ["배워요", "배우아요", "배와요", "배웠어요"], answer: 0,
          why: ["Goed: de klinker ㅜ krijgt 어요, en 우 + 어 smelt samen tot 워.", "Na ㅜ komt 어요, niet 아요.", "Na ㅜ komt 어, dus 워, niet 와.", "배웠어요 is verleden tijd: \"ik leerde\"."] }
      ]
    },
    {
      id: "04", slug: "past", title: "-았/었어요", sub: "Verleden tijd",
      canDo: "Je kunt nu vertellen wat je gisteren of in het weekend deed, met -았어요, -었어요 en 했어요.",
      guess: {
        q: "\"Gisteren heb ik vlees gegeten.\" Welke zin klopt, denk je?",
        options: ["어제 고기를 먹었어요.", "어제 고기를 먹았어요.", "어제 고기를 먹어요.", "어제 고기를 먹했어요."], answer: 0,
        why: ["Goed: de klinker van 먹 is ㅓ, dus 었어요.", "았어요 komt alleen na ㅏ of ㅗ.", "먹어요 is tegenwoordige tijd. Bij 어제 hoort verleden tijd.", "했어요 is alleen voor werkwoorden op 하다."]
      },
      problem: "Wil je vertellen wat je gisteren deed? Dan heb je de verleden tijd nodig. Je plakt 았어요 of 었어요 aan de stam. Dezelfde klinkerregel als bij 아요/어요 beslist welke.",
      pattern: [
        { l: "wanneer", v: "어제", c: 1 }, { l: "stam", v: "먹", c: 4 }, { l: "-았/었어요", v: "었어요", c: 2, key: true }
      ],
      patternCap: "Stam + 았어요 (na ㅏ of ㅗ) · stam + 었어요 (andere klinkers) · 하다 → 했어요",
      rules: [
        "Is de laatste klinker ㅏ of ㅗ? Dan 았어요: 좋다 → 좋았어요, 살다 → 살았어요.",
        "Bij andere klinkers komt 었어요: 먹다 → 먹었어요, 읽다 → 읽었어요.",
        "Eindigt de stam op een klinker? Dan smelten ze samen: 가다 → 갔어요, 오다 → 왔어요, 마시다 → 마셨어요.",
        "Alles met 하다 wordt 했어요: 공부하다 → 공부했어요."
      ],
      pitfall: "Een tijdwoord als 어제 maakt de zin niet vanzelf verleden. Het werkwoord verandert ook: zeg 어제 갔어요, niet 어제 가요.",
      examples: [
        { cn: "어제 친구를 만났어요.", py: "Eoje chingureul mannasseoyo.", nl: "Gisteren heb ik een vriend gezien." },
        { cn: "주말에 영화를 봤어요.", py: "Jumare yeonghwareul bwasseoyo.", nl: "In het weekend heb ik een film gekeken." },
        { cn: "아침에 커피를 마셨어요.", py: "Achime keopireul masyeosseoyo.", nl: "Vanochtend heb ik koffie gedronken." },
        { cn: "지난주에 한국어를 공부했어요.", py: "Jinanjue hangugeoreul gongbuhaesseoyo.", nl: "Vorige week heb ik Koreaans gestudeerd." }
      ],
      vocab: [],
      dialogue: [
        ["A", "주말에 뭐 했어요?", "Jumare mwo haesseoyo?", "Wat heb je in het weekend gedaan?"],
        ["B", "부산에 갔어요.", "Busane gasseoyo.", "Ik ben naar Busan gegaan."],
        ["A", "부산에서 뭐 했어요?", "Busaneseo mwo haesseoyo?", "Wat heb je in Busan gedaan?"],
        ["B", "바다를 봤어요. 그리고 생선을 먹었어요.", "Badareul bwasseoyo. Geurigo saengseoneul meogeosseoyo.", "Ik heb de zee gezien. En ik heb vis gegeten."],
        ["A", "재미있었어요?", "Jaemiisseosseoyo?", "Was het leuk?"],
        ["B", "네, 정말 좋았어요.", "Ne, jeongmal joasseoyo.", "Ja, het was echt fijn."]
      ],
      questions: [
        { type: "mc", q: "어제 학교에 ___. (Gisteren ging ik naar school.) (가다)",
          options: ["갔어요", "가었어요", "가요", "가았어요"], answer: 0,
          why: ["Goed: 가 + 았어요 smelt samen tot 갔어요.", "Na ㅏ komt 았, niet 었.", "가요 is tegenwoordige tijd. Bij 어제 hoort verleden tijd.", "Twee keer ㅏ smelt samen. Je zegt 갔어요."] },
        { type: "mc", q: "\"Ik heb gisteren een boek gelezen.\"",
          options: ["어제 책을 읽었어요.", "어제 책을 읽았어요.", "어제 책을 읽어요.", "어제 책을 읽했어요."], answer: 0,
          why: ["Goed: de klinker van 읽 is ㅣ, dus 었어요.", "았어요 komt alleen na ㅏ of ㅗ.", "읽어요 is tegenwoordige tijd.", "했어요 is alleen voor werkwoorden op 하다."] },
        { type: "mc", q: "\"Ik heb gisteren gewerkt.\" (일하다)",
          options: ["어제 일했어요.", "어제 일하었어요.", "어제 일하았어요.", "어제 일해요."], answer: 0,
          why: ["Goed: 하다 wordt 했어요.", "하다 heeft een eigen vorm: 했어요.", "하다 heeft een eigen vorm: 했어요.", "일해요 is tegenwoordige tijd."] },
        { type: "order", q: "Zet in de goede volgorde: \"Mijn Koreaanse vriend heeft gebeld.\"",
          tokens: [["제", "je"], ["한국", "hanguk"], ["친구가", "chinguga"], ["전화했어요", "jeonhwahaesseoyo"]] },
        { type: "open", q: "Vertaal: \"Ik heb gisteren koffie gedronken.\" (마시다)", model: ["어제 커피를 마셨어요.", "저는 어제 커피를 마셨어요."],
          tip: "Check: 마시 + 었어요 smelt samen tot 마셨어요." }
      ],
      review: [
        { type: "mc", q: "\"Het eten was lekker.\" (맛있다)",
          options: ["음식이 맛있었어요.", "음식이 맛있았어요.", "음식이 맛있어요.", "음식을 맛있었어요."], answer: 0,
          why: ["Goed: de klinker van 있 is ㅣ, dus 었어요.", "았어요 komt alleen na ㅏ of ㅗ.", "맛있어요 is tegenwoordige tijd: \"het is lekker\".", "Het eten is lekker; het is geen lijdend voorwerp. Dus 이."] },
        { type: "mc", q: "\"Mijn moeder kwam.\" (오다)",
          options: ["엄마가 왔어요.", "엄마가 오었어요.", "엄마가 와요.", "엄마가 오았어요."], answer: 0,
          why: ["Goed: 오 + 았어요 smelt samen tot 왔어요.", "Na ㅗ komt 았, niet 었.", "와요 is tegenwoordige tijd.", "ㅗ + 았 smelt samen. Je zegt 왔어요."] }
      ]
    },
    {
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
        "Verleden tijd: 안 갔어요 of 가지 않았어요."
      ],
      pitfall: "있어요 ontken je niet met 안. Je zegt 없어요: 시간이 없어요.",
      examples: [
        { cn: "저는 술을 안 마셔요.", py: "Jeoneun sureul an masyeoyo.", nl: "Ik drink geen alcohol." },
        { cn: "오늘은 학교에 가지 않아요.", py: "Oneureun hakgyoe gaji anayo.", nl: "Vandaag ga ik niet naar school." },
        { cn: "동생은 공부 안 해요.", py: "Dongsaengeun gongbu an haeyo.", nl: "Mijn broertje studeert niet." },
        { cn: "어제 아침을 안 먹었어요.", py: "Eoje achimeul an meogeosseoyo.", nl: "Gisteren heb ik niet ontbeten." }
      ],
      vocab: [],
      dialogue: [
        ["A", "커피 마셔요?", "Keopi masyeoyo?", "Drink je koffie?"],
        ["B", "아니요, 커피는 안 마셔요. 차를 마셔요.", "Aniyo, keopineun an masyeoyo. Chareul masyeoyo.", "Nee, koffie drink ik niet. Ik drink thee."],
        ["A", "오늘 회사에 가요?", "Oneul hoesae gayo?", "Ga je vandaag naar je werk?"],
        ["B", "아니요, 오늘은 가지 않아요. 집에서 쉬어요.", "Aniyo, oneureun gaji anayo. Jibeseo swieoyo.", "Nee, vandaag ga ik niet. Ik rust thuis."],
        ["A", "그럼 같이 점심 먹어요!", "Geureom gachi jeomsim meogeoyo!", "Laten we dan samen lunchen!"],
        ["B", "좋아요.", "Joayo.", "Goed."]
      ],
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
        { type: "open", q: "Vertaal: \"Ik drink geen koffie.\"", model: ["저는 커피를 안 마셔요.", "커피를 마시지 않아요.", "저는 커피를 마시지 않아요."],
          tip: "Check: 안 staat direct voor 마셔요, of 지 않아요 komt achter de stam 마시." }
      ],
      review: [
        { type: "mc", q: "\"Ik heb gisteren niet gewerkt.\" (일하다)",
          options: ["어제 일 안 했어요.", "어제 안 일했어요.", "어제 일 안 해요.", "어제 일 않 했어요."], answer: 0,
          why: ["Goed: 안 staat voor 했어요, en het is verleden tijd.", "Bij 일하다 komt 안 tussen 일 en 했어요.", "안 해요 is tegenwoordige tijd. Bij 어제 hoort 했어요.", "Voor het werkwoord schrijf je 안, niet 않."] },
        { type: "mc", q: "\"Het is niet duur.\" (비싸다)",
          options: ["비싸지 않아요.", "비싸지 안아요.", "비싸 않아요.", "비싸지 않았어요."], answer: 0,
          why: ["Goed: stam 비싸 + 지 않아요.", "Het is 않아요, met ㄶ.", "Tussen de stam en 않아요 hoort 지.", "않았어요 is verleden tijd: \"het was niet duur\"."] }
      ]
    },
    {
      id: "06", slug: "go-sipeoyo", title: "-고 싶어요", sub: "Zeggen wat je wilt",
      canDo: "Je kunt nu zeggen wat je wilt doen, met -고 싶어요.",
      guess: {
        q: "\"Ik wil naar Korea.\" Welke zin klopt, denk je?",
        options: ["한국에 가고 싶어요.", "한국에 가요 싶어요.", "한국에 갔고 싶어요.", "한국에 가고 싶었어요."], answer: 0,
        why: ["Goed: stam 가 + 고 싶어요.", "Je plakt 고 aan de stam, niet aan 가요.", "De stam blijft kaal. De tijd zit in 싶어요.", "싶었어요 is verleden tijd: \"ik wilde\"."]
      },
      problem: "Je wilt zeggen wat je graag wilt doen. In het Koreaans plak je -고 싶어요 aan de stam van het werkwoord. Je hoeft niet op de klinker te letten. Elke stam krijgt gewoon 고.",
      pattern: [
        { l: "waarheen", v: "한국에", c: 3 }, { l: "stam", v: "가", c: 4 }, { l: "-고 싶어요", v: "고 싶어요", c: 2, key: true }
      ],
      patternCap: "Stam + 고 싶어요 (gaan: 가고 싶어요 · eten: 먹고 싶어요 · studeren: 공부하고 싶어요)",
      rules: [
        "Stam + 고 싶어요. Er is geen klinkerregel: 가고, 먹고, 읽고, 공부하고.",
        "Verleden tijd zit in 싶다, niet in de stam: 가고 싶었어요.",
        "Niet willen: 가고 싶지 않아요.",
        "Een vraag: 뭐 먹고 싶어요? (Wat wil je eten?)"
      ],
      pitfall: "-고 싶어요 gebruik je voor jezelf, of in een vraag aan de ander. Over een derde persoon zeg je -고 싶어해요: 동생이 가고 싶어해요.",
      examples: [
        { cn: "저는 한국에 가고 싶어요.", py: "Jeoneun Hanguge gago sipeoyo.", nl: "Ik wil naar Korea." },
        { cn: "비빔밥을 먹고 싶어요.", py: "Bibimbabeul meokgo sipeoyo.", nl: "Ik wil bibimbap eten." },
        { cn: "오늘은 집에서 쉬고 싶어요.", py: "Oneureun jibeseo swigo sipeoyo.", nl: "Vandaag wil ik thuis rusten." },
        { cn: "어제 영화를 보고 싶었어요.", py: "Eoje yeonghwareul bogo sipeosseoyo.", nl: "Gisteren wilde ik een film kijken." }
      ],
      vocab: [],
      dialogue: [
        ["A", "배고파요. 뭐 먹고 싶어요?", "Baegopayo. Mwo meokgo sipeoyo?", "Ik heb honger. Wat wil je eten?"],
        ["B", "저는 불고기를 먹고 싶어요.", "Jeoneun bulgogireul meokgo sipeoyo.", "Ik wil bulgogi eten."],
        ["A", "좋아요. 그리고 뭐 마시고 싶어요?", "Joayo. Geurigo mwo masigo sipeoyo?", "Goed. En wat wil je drinken?"],
        ["B", "콜라를 마시고 싶어요. 민수 씨는요?", "Kollareul masigo sipeoyo. Minsu ssineunyo?", "Ik wil cola drinken. En jij, Minsu?"],
        ["A", "저는 물을 마시고 싶어요.", "Jeoneun mureul masigo sipeoyo.", "Ik wil water drinken."]
      ],
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
        { type: "open", q: "Vertaal: \"Ik wil naar huis gaan.\"", model: ["집에 가고 싶어요.", "저는 집에 가고 싶어요."],
          tip: "Check: stam 가 + 고 싶어요, en 집 krijgt 에." }
      ],
      review: [
        { type: "mc", q: "\"Ik wil een film kijken.\" (보다)",
          options: ["영화를 보고 싶어요.", "영화를 봐고 싶어요.", "영화를 봤고 싶어요.", "영화를 보고 싶었어요."], answer: 0,
          why: ["Goed: stam 보 + 고 싶어요.", "고 komt aan de kale stam 보, niet aan 봐.", "De stam blijft kaal. De tijd zit in 싶어요.", "싶었어요 is verleden tijd: \"ik wilde kijken\"."] },
        { type: "mc", q: "\"Gisteren wilde ik slapen.\" (자다)",
          options: ["어제 자고 싶었어요.", "어제 잤고 싶어요.", "어제 자고 싶어요.", "어제 자고 싶았어요."], answer: 0,
          why: ["Goed: de verleden tijd zit in 싶었어요.", "De stam blijft kaal. De tijd zit in 싶다.", "싶어요 is tegenwoordige tijd. Bij 어제 hoort 싶었어요.", "De klinker van 싶 is ㅣ, dus 었어요."] }
      ]
    }
  ]
};
