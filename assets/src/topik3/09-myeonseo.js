({
  id: "09", slug: "myeonseo", title: "-(으)면서", sub: "Twee dingen tegelijk, of: terwijl toch",
  canDo: "Je kunt nu met -(으)면서 zeggen dat je twee dingen tegelijk doet, en een tegenstelling uitdrukken (\"terwijl je toch ...\"). Je weet ook wanneer -는 동안 of -다가 beter past.",
  guess: {
    q: "\"Ik studeer terwijl ik naar muziek luister.\" Welke zin klopt, denk je?",
    options: ["음악을 들으면서 공부해요.", "음악을 듣면서 공부해요.", "음악을 들었으면서 공부해요.", "음악을 들어면서 공부해요."], answer: 0,
    why: ["Goed: 듣다 → 들 + 으면서.", "듣다 is ㄷ-onregelmatig. Vóór 으 wordt ㄷ een ㄹ: 들으면서.", "De tijd staat aan het eind van de zin, niet bij -(으)면서.", "-(으)면서 komt aan de stam, niet aan de 어-vorm."]
  },
  problem: "In het Nederlands zeg je \"ik eet terwijl ik tv kijk\". Eén persoon doet twee dingen tegelijk. In het Koreaans plak je -(으)면서 aan de eerste handeling. Het kan ook een tegenstelling zijn: \"je weet het, en toch vraag je het\".",
  pattern: [
    { l: "handeling 1", v: "음악을 들으", c: 1 }, { l: "-(으)면서", v: "면서", c: 2, key: true }, { l: "handeling 2 (+ tijd)", v: "공부해요", c: 4 }
  ],
  patternCap: "Stam + (으)면서 + handeling 2 = ... terwijl ... (tegelijk, zelfde persoon) · -(으)면서도 = terwijl toch, hoewel",
  rules: [
    "Zonder 받침 of met ㄹ: -면서: 가면서, 만들면서. Met 받침: -으면서: 먹으면서.",
    "ㄷ-onregelmatig: 듣다 → 들으면서, 걷다 → 걸으면서.",
    "Beide handelingen hebben hetzelfde onderwerp: één persoon doet twee dingen.",
    "De tijd zet je alleen aan het eind: 먹으면서 봤어요, niet 먹었으면서.",
    "Ook bij bijvoeglijke werkwoorden en 이다: 싸면서 맛있어요 = goedkoop en ook lekker, 학생이면서 가수예요."
  ],
  pitfall: "Twee verschillende personen? Dan kan -(으)면서 niet. Gebruik -는 동안: 제가 요리하는 동안 동생이 청소했어요.",
  examples: [
    { cn: "저는 음악을 들으면서 공부해요.", py: "Jeoneun eumageul deureumyeonseo gongbuhaeyo.", nl: "Ik studeer terwijl ik naar muziek luister." },
    { cn: "친구하고 커피를 마시면서 이야기했어요.", py: "Chinguhago keopireul masimyeonseo iyagihaesseoyo.", nl: "Ik heb met een vriend gepraat onder het genot van een kop koffie." },
    { cn: "그 식당은 음식이 싸면서 맛있어요.", py: "Geu sikdangeun eumsigi ssamyeonseo masisseoyo.", nl: "In dat restaurant is het eten goedkoop en ook lekker." },
    { cn: "다 알면서 왜 모르는 척해요?", py: "Da almyeonseo wae moreuneun cheokaeyo?", nl: "Je weet het allemaal. Waarom doe je dan alsof je het niet weet?" }
  ],
  nuance: [
    { h: "-(으)면서 of -는 동안?",
      p: "-(으)면서 = één persoon doet twee dingen tegelijk. -는 동안 = \"gedurende de tijd dat\": het gaat om de tijdsduur, en de personen mogen verschillen. Zijn er twee personen, dan moet je -는 동안 gebruiken. In formele schrijftaal hoor je in plaats van -(으)면서 ook -(으)며.",
      ex: [
        { cn: "저는 요리하면서 라디오를 들어요.", py: "Jeoneun yorihamyeonseo radioreul deureoyo.", nl: "Ik luister naar de radio terwijl ik kook." },
        { cn: "제가 요리하는 동안 남편이 청소했어요.", py: "Jega yorihaneun dongan nampyeoni cheongsohaesseoyo.", nl: "Terwijl ik kookte, maakte mijn man schoon." }
      ] },
    { h: "Tegenstelling: -(으)면서(도) = terwijl toch",
      p: "Soms passen de twee delen niet bij elkaar. Dan betekent -(으)면서 \"terwijl je toch\" of \"hoewel\". Met 도 erachter wordt de tegenstelling duidelijker: -(으)면서도. Vaak klinkt er kritiek in door.",
      ex: [
        { cn: "돈도 없으면서 비싼 옷만 사요.", py: "Dondo eopseumyeonseo bissan onman sayo.", nl: "Hij heeft niet eens geld, en toch koopt hij alleen dure kleren." },
        { cn: "그는 바쁘면서도 항상 도와줘요.", py: "Geuneun bappeumyeonseodo hangsang dowajwoyo.", nl: "Hoewel hij het druk heeft, helpt hij altijd." }
      ] },
    { h: "Even vooruitkijken: -다가 (TOPIK 4)",
      p: "-다가 lijkt op -(으)면서, maar is anders. Met -다가 wordt handeling 1 onderbroken door iets anders. Met -(으)면서 lopen beide handelingen naast elkaar door. Vergelijk: je liep en luisterde muziek (tegelijk), tegenover: je liep en viel toen (onderbroken).",
      ex: [
        { cn: "걸으면서 음악을 들었어요.", py: "Georeumyeonseo eumageul deureosseoyo.", nl: "Ik luisterde muziek terwijl ik liep." },
        { cn: "걷다가 넘어졌어요.", py: "Geotdaga neomeojyeosseoyo.", nl: "Ik liep en toen viel ik." }
      ] }
  ],
  mistakes: [
    { wrong: "제가 요리하면서 동생이 청소했어요.", right: "제가 요리하는 동안 동생이 청소했어요.", why: "Twee verschillende personen. -(으)면서 vraagt hetzelfde onderwerp; gebruik -는 동안." },
    { wrong: "밥을 먹었으면서 TV를 봤어요.", right: "밥을 먹으면서 TV를 봤어요.", why: "De verleden tijd staat alleen aan het eind van de zin." },
    { wrong: "음악을 듣면서 운동해요.", right: "음악을 들으면서 운동해요.", why: "듣다 is ㄷ-onregelmatig: vóór 으 wordt ㄷ een ㄹ." },
    { wrong: "빵을 먹면서 걸어요.", right: "빵을 먹으면서 걸어요.", why: "Na een 받침 komt -으면서, niet -면서." }
  ],
  vocab: [
    ["-(으)면서", "-(eu)myeonseo", "terwijl (tegelijk); terwijl toch"], ["운전하다", "unjeonhada", "autorijden"], ["위험하다", "wiheomhada", "gevaarlijk zijn"],
    ["아르바이트", "areubaiteu", "bijbaan"], ["벌다", "beolda", "verdienen"], ["용돈", "yongdon", "zakgeld"],
    ["손님", "sonnim", "klant, gast"], ["졸다", "jolda", "indutten, knikkebollen"], ["걱정되다", "geokjeongdoeda", "zich zorgen maken"], ["척하다", "cheokada", "doen alsof"]
  ],
  dialogue: [
    ["A", "민수 씨는 운전하면서 전화해요?", "Minsu ssineun unjeonhamyeonseo jeonhwahaeyo?", "Minsu, bel jij weleens terwijl je rijdt?"],
    ["B", "아니요, 운전하면서 전화하는 것은 위험해요.", "Aniyo, unjeonhamyeonseo jeonhwahaneun geoseun wiheomhaeyo.", "Nee, bellen tijdens het rijden is gevaarlijk."],
    ["A", "맞아요. 그런데 저는 운전하면서 음악은 자주 들어요.", "Majayo. Geureonde jeoneun unjeonhamyeonseo eumageun jaju deureoyo.", "Klopt. Maar ik luister wel vaak naar muziek tijdens het rijden."],
    ["B", "그건 괜찮죠. 저도 노래를 들으면서 운전해요.", "Geugeon gwaenchanchyo. Jeodo noraereul deureumyeonseo unjeonhaeyo.", "Dat is prima. Ik rijd ook met muziek aan."]
  ],
  reading: {
    title: "일하면서 공부하는 동생",
    lines: [
      { cn: "제 동생 지민이는 대학생이면서 카페 아르바이트도 해요.", py: "Je dongsaeng jiminineun daehaksaengimyeonseo kape areubaiteudo haeyo.", nl: "Mijn zusje Jimin studeert en heeft ook een bijbaan in een café." },
      { cn: "낮에는 수업을 듣고 저녁에는 카페에서 일해요.", py: "Najeneun sueobeul deutgo jeonyeogeneun kapeeseo ilhaeyo.", nl: "Overdag volgt ze colleges en 's avonds werkt ze in het café." },
      { cn: "일하면서 돈을 버니까 부모님께 용돈을 받지 않아요.", py: "Ilhamyeonseo doneul beonikka bumonimkke yongdoneul batji anayo.", nl: "Ze verdient zelf geld, dus ze krijgt geen zakgeld van onze ouders." },
      { cn: "손님이 없을 때는 커피를 만들면서 단어를 외워요.", py: "Sonnimi eopseul ttaeneun keopireul mandeulmyeonseo daneoreul oewoyo.", nl: "Als er geen klanten zijn, leert ze woordjes terwijl ze koffie maakt." },
      { cn: "그런데 요즘 지민이가 많이 피곤해 보여요.", py: "Geureonde yojeum jiminiga mani pigonhae boyeoyo.", nl: "Maar de laatste tijd ziet Jimin er erg moe uit." },
      { cn: "어제는 밥을 먹으면서 졸았어요.", py: "Eojeneun babeul meogeumyeonseo jorasseoyo.", nl: "Gisteren dutte ze in terwijl ze at." },
      { cn: "제가 \"좀 쉬어\"라고 하면 지민이는 웃으면서 \"괜찮아\"라고 해요.", py: "Jega \"jom swieo\"rago hamyeon jiminineun useumyeonseo \"gwaenchana\"rago haeyo.", nl: "Als ik zeg \"Rust een beetje\", zegt Jimin lachend: \"Het gaat wel.\"" },
      { cn: "하지만 힘들면서 괜찮다고 하는 동생이 걱정돼요.", py: "Hajiman himdeulmyeonseo gwaenchantago haneun dongsaengi geokjeongdwaeyo.", nl: "Maar ik maak me zorgen om mijn zusje, dat zegt dat het goed gaat terwijl ze het zwaar heeft." },
      { cn: "다음 달에 시험이 끝나면 같이 여행을 가기로 했어요.", py: "Daeum dare siheomi kkeunnamyeon gachi yeohaengeul gagiro haesseoyo.", nl: "Volgende maand, na de examens, gaan we samen op reis. Dat hebben we afgesproken." }
    ],
    questions: [
      { type: "mc", q: "Wat doet Jimin als er geen klanten zijn?",
        options: ["Ze leert woordjes terwijl ze koffie maakt.", "Ze slaapt in het café.", "Ze belt haar ouders.", "Ze gaat naar college."], answer: 0,
        why: ["Goed: 커피를 만들면서 단어를 외워요.", "Ze dutte in tijdens het eten, thuis, niet in het café.", "Over bellen staat niets in de tekst.", "College is overdag: 낮에는 수업을 듣고."] },
      { type: "mc", q: "Waarom krijgt Jimin geen zakgeld?",
        options: ["Ze verdient zelf geld met haar bijbaan.", "Haar ouders hebben geen geld.", "Ze wil een reis betalen.", "Ze heeft een studiebeurs."], answer: 0,
        why: ["Goed: 일하면서 돈을 버니까 ... 용돈을 받지 않아요.", "Over het geld van de ouders staat niets in de tekst.", "De reis komt pas later in de tekst, als afspraak.", "Een studiebeurs komt niet in de tekst voor."] },
      { type: "mc", q: "힘들면서 괜찮다고 하는 동생. Wat betekent -(으)면서 hier?",
        options: ["Terwijl toch: ze heeft het zwaar, maar zegt dat het goed gaat.", "Twee dingen tegelijk doen voor het plezier.", "Nadat ze het zwaar had, ging het weer goed.", "Omdat ze het zwaar heeft, zegt ze dat het goed gaat."], answer: 0,
        why: ["Goed: de twee delen passen niet bij elkaar. Dat is de tegenstelling \"terwijl toch\".", "Hier is geen sprake van plezier; het is een tegenstelling.", "-(으)면서 gaat niet over na elkaar.", "Een reden zou -아서/어서 of -기 때문에 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik eet terwijl ik tv kijk.\"",
      options: ["TV를 보면서 밥을 먹어요.", "TV를 보으면서 밥을 먹어요.", "TV를 봐면서 밥을 먹어요.", "TV를 보는면서 밥을 먹어요."], answer: 0,
      why: ["Goed: stam zonder 받침 + 면서: 보면서.", "Zonder 받침 komt -면서, niet -으면서.", "-(으)면서 komt aan de stam, niet aan de 아-vorm.", "Tussen de stam en -면서 komt geen 는."] },
    { type: "mc", q: "밥을 ___ 드라마를 봤어요. (Ik keek een serie terwijl ik at.)",
      options: ["먹으면서", "먹었으면서", "먹면서", "먹어면서"], answer: 0,
      why: ["Goed: 받침 + 으면서. De verleden tijd staat al in 봤어요.", "De tijd staat alleen aan het eind van de zin.", "Na een 받침 komt -으면서.", "-(으)면서 komt aan de stam, niet aan de 어-vorm."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["제가 요리하면서 동생이 청소했어요.", "제가 요리하는 동안 동생이 청소했어요.", "저는 요리하면서 노래를 불러요.", "동생은 청소하면서 음악을 들어요."], answer: 0,
      why: ["Goed: dit is fout. Twee verschillende personen; gebruik -는 동안.", "Dit klopt: -는 동안 mag met twee personen.", "Dit klopt: één persoon doet twee dingen.", "Dit klopt: één persoon doet twee dingen."] },
    { type: "mc", q: "다 알면서 왜 물어봐요? Wat betekent dit?",
      options: ["Je weet het allemaal, waarom vraag je het dan?", "Als je het allemaal weet, vraag het dan.", "Vraag het terwijl je wegloopt.", "Je weet niets, dus vraag het maar."], answer: 0,
      why: ["Goed: -(으)면서 als tegenstelling: je weet het, en toch vraag je.", "\"Als\" zou -(으)면 zijn, zonder 서.", "알다 is weten, niet lopen.", "알면서 betekent juist dat je het wél weet."] },
    { type: "mc", q: "그 식당은 ___ 맛있어요. (Dat restaurant is goedkoop en ook lekker.)",
      options: ["싸면서", "싸으면서", "쌌으면서", "싼면서"], answer: 0,
      why: ["Goed: 싸다 heeft geen 받침: 싸면서.", "Zonder 받침 komt -면서, niet -으면서.", "Hier gaat het om nu; er hoort geen verleden tijd bij.", "-면서 komt direct aan de stam 싸, zonder ㄴ."] },
    { type: "mc", q: "길을 걷다가 친구를 만났어요. Wat zegt -다가 hier, anders dan -(으)면서?",
      options: ["Het lopen werd onderbroken: onderweg kwam ik een vriend tegen.", "Ik liep de hele tijd samen met mijn vriend.", "Ik ging pas lopen nadat ik mijn vriend had gezien.", "Ik wilde met mijn vriend gaan lopen."], answer: 0,
      why: ["Goed: met -다가 wordt handeling 1 onderbroken door iets anders.", "Samen lopen zou 친구하고 같이 걸었어요 zijn.", "-다가 gaat niet over \"nadat\".", "Een wens zou -고 싶다 zijn."] },
    { type: "order", q: "Zet in de goede volgorde: \"Die persoon groette met een glimlach.\"",
      tokens: [["그", "geu"], ["사람은", "sarameun"], ["웃으면서", "useumyeonseo"], ["인사했어요.", "insahaesseoyo."]] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik werk terwijl ik naar de universiteit ga.\"",
      tokens: [["저는", "jeoneun"], ["대학교에", "daehakgyoe"], ["다니면서", "danimyeonseo"], ["일해요.", "ilhaeyo."]] },
    { type: "fill", q: "텔레비전을 보___ 밥을 먹지 마세요. (Eet niet terwijl je tv kijkt.)", answers: ["면서"],
      hint: "보다 heeft geen 받침.", why: "Stam zonder 받침 + 면서: 보면서." },
    { type: "open", q: "Vertaal: \"Ik luister naar muziek terwijl ik wandel.\"", model: ["걸으면서 음악을 들어요.", "저는 걸으면서 음악을 들어요.", "산책하면서 음악을 들어요."],
      tip: "Check: 걷다 wordt 걸으면서 (ㄷ wordt ㄹ), en 듣다 wordt 들어요." },
    { type: "open", q: "Vertaal: \"Terwijl ik kookte, maakte mijn broer schoon.\"", model: ["제가 요리하는 동안 동생이 청소했어요.", "제가 요리하는 동안 남동생이 청소했어요."],
      tip: "Check: twee verschillende personen, dus -는 동안 en niet -(으)면서." }
  ],
  review: [
    { type: "mc", q: "저는 노래를 ___ 샤워해요. (Ik zing onder de douche.)",
      options: ["부르면서", "불르면서", "부르으면서", "불렀으면서"], answer: 0,
      why: ["Goed: stam 부르 zonder 받침 + 면서.", "Alleen vóór 아/어 verandert 부르 in 불ㄹ. Vóór -면서 blijft het 부르.", "Zonder 받침 komt -면서, niet -으면서.", "De tijd staat aan het eind, niet bij -(으)면서."] },
    { type: "mc", q: "\"Zij is arts en tegelijk schrijver.\"",
      options: ["그녀는 의사이면서 작가예요.", "그녀는 의사으면서 작가예요.", "그녀는 의사하면서 작가예요.", "그녀는 의사인면서 작가예요."], answer: 0,
      why: ["Goed: naamwoord + 이면서.", "Na een naamwoord komt 이면서, de stam van 이다.", "의사하다 bestaat niet als werkwoord.", "-면서 komt direct na 이, zonder ㄴ."] },
    { type: "mc", q: "돈도 ___ 비싼 옷만 사요. (Hij heeft niet eens geld, en toch koopt hij alleen dure kleren.)",
      options: ["없으면서", "없면서", "없는 동안", "없다가"], answer: 0,
      why: ["Goed: -(으)면서 als tegenstelling: \"terwijl toch\".", "Na een 받침 komt -으면서.", "-는 동안 gaat over tijdsduur, niet over een tegenstelling.", "-다가 betekent dat iets onderbroken wordt. Dat past hier niet."] }
  ]
})
