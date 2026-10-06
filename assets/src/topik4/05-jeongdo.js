({
  id: "05", slug: "jeongdo", title: "-(으)ㄹ 정도로", sub: "Zo ... dat ...",
  canDo: "Je kunt nu laten zien hoe sterk iets was, met een voorbeeld en -(으)ㄹ 정도로.",
  guess: {
    q: "\"Ik lachte zo hard dat de tranen kwamen.\" Welke zin klopt, denk je?",
    options: ["눈물이 날 정도로 웃었어요.", "눈물이 나을 정도로 웃었어요.", "눈물이 난 정도로 웃었어요.", "눈물이 나다 정도로 웃었어요."], answer: 0,
    why: ["Goed: 나다 eindigt op een klinker, dus alleen ㄹ: 날.", "Na een klinker komt geen 을.", "Voor 정도로 staat hier de ㄹ-vorm, niet de ㄴ-vorm.", "De woordenboekvorm kan niet vóór 정도로 staan."]
  },
  problem: "\"Het was heel warm\" zegt weinig. Hoe warm dan? Met -(으)ㄹ 정도로 geef je een voorbeeld dat de mate laat zien: zo warm dat ik niet kon slapen.",
  pattern: [
    { l: "voorbeeld (stam)", v: "배가 터지", c: 1 }, { l: "zo ... dat", v: "ㄹ 정도로", c: 2, key: true },
    { l: "wat er sterk was", v: "많이 먹었어요", c: 4 }
  ],
  patternCap: "Voorbeeld + (으)ㄹ 정도로 + wat er sterk was. Aan het eind: -(으)ㄹ 정도예요.",
  rules: [
    "Stam op een klinker of op ㄹ: + ㄹ 정도로 (나다 → 날, 울다 → 울). Stam met 받침: + 을 정도로 (먹다 → 먹을).",
    "Het werkt met werkwoorden en bijvoeglijke werkwoorden. Let op ㅂ-stammen: 어렵다 → 어려울 정도로.",
    "Het eerste deel is het voorbeeld; het tweede deel zegt wat er zo sterk was.",
    "Aan het eind van de zin zeg je -(으)ㄹ 정도예요: 걷기 힘들 정도예요."
  ],
  pitfall: "Gebruik de ㄹ-vorm, niet de ㄴ-vorm. Zeg 아플 정도로, niet 아픈 정도로.",
  examples: [
    { cn: "배가 터질 정도로 많이 먹었어요.", py: "Baega teojil jeongdoro mani meogeosseoyo.", nl: "Ik heb zoveel gegeten dat mijn buik bijna barstte." },
    { cn: "눈물이 날 정도로 웃었어요.", py: "Nunmuri nal jeongdoro useosseoyo.", nl: "Ik lachte zo hard dat de tranen kwamen." },
    { cn: "그 영화는 다시 보고 싶을 정도로 재미있었어요.", py: "Geu yeonghwaneun dasi bogo sipeul jeongdoro jaemiisseosseoyo.", nl: "Die film was zo leuk dat ik hem nog eens wil zien." },
    { cn: "어제는 잠을 못 잘 정도로 더웠어요.", py: "Eojeneun jameul mot jal jeongdoro deowosseoyo.", nl: "Gisteren was het zo warm dat ik niet kon slapen." }
  ],
  nuance: [
    { h: "-(으)ㄹ 정도로 of -도록?",
      p: "-도록 kan ook \"zo ... dat\" betekenen, maar klinkt literair en nadrukkelijk. Het komt direct na de stam: 아프도록. Daarnaast betekent -도록 vaak \"zodat\": een doel. Voor een doel past -(으)ㄹ 정도로 niet. En alleen 정도 kan aan het eind van de zin staan: -(으)ㄹ 정도예요.",
      ex: [
        { cn: "목이 아프도록 노래를 불렀어요.", py: "Mogi apeudorok noraereul bulleosseoyo.", nl: "Ik zong tot mijn keel pijn deed." },
        { cn: "늦지 않도록 일찍 출발하세요.", py: "Neutji antorok iljjik chulbalhaseyo.", nl: "Vertrek vroeg, zodat je niet te laat bent." }
      ] },
    { h: "-(으)ㄹ 정도로 of 너무 ... -아/어서?",
      p: "너무 더워서 잠을 못 잤어요 vertelt een echt gevolg: ik sliep niet. 잠을 못 잘 정도로 더웠어요 legt de nadruk op de mate. Het voorbeeld hoeft niet echt te gebeuren: bij 배가 터질 정도로 barst je buik niet echt. Het is een beeld om te overdrijven.",
      ex: [
        { cn: "너무 더워서 잠을 못 잤어요.", py: "Neomu deowoseo jameul mot jasseoyo.", nl: "Het was zo warm dat ik niet sliep." }
      ] },
    { h: "Verwant: -(으)ㄹ 만큼",
      p: "-(으)ㄹ 만큼 betekent bijna hetzelfde: 눈물이 날 만큼 웃었어요. 만큼 gebruik je daarnaast voor \"even ... als\": 너만큼 키가 커요. Let ook op: 정도 na een getal betekent \"ongeveer\": 한 시간 정도."
    }
  ],
  mistakes: [
    { wrong: "다리가 아픈 정도로 걸었어요.", right: "다리가 아플 정도로 걸었어요.", why: "Vóór 정도로 staat de ㄹ-vorm: 아플, niet 아픈." },
    { wrong: "숨쉬기 어렵을 정도로 더웠어요.", right: "숨쉬기 어려울 정도로 더웠어요.", why: "어렵다 is een ㅂ-stam: ㅂ + 을 wordt 울." },
    { wrong: "늦지 않을 정도로 일찍 출발하세요.", right: "늦지 않도록 일찍 출발하세요.", why: "Het gaat om een doel: \"zodat\". Daarvoor gebruik je -도록, niet 정도로." },
    { wrong: "요즘 걷기 힘들 정도로예요.", right: "요즘 걷기 힘들 정도예요.", why: "Aan het eind van de zin valt 로 weg: 정도 + 예요." }
  ],
  vocab: [
    ["-(으)ㄹ 정도로", "-(eu)l jeongdoro", "zo ... dat, in die mate dat"], ["터지다", "teojida", "barsten, ontploffen"],
    ["눈물", "nunmul", "traan"], ["기온", "gion", "temperatuur (buiten)"], ["더위", "deowi", "hitte"],
    ["전기", "jeongi", "elektriciteit"], ["사용량", "sayongnyang", "verbruik"], ["전문가", "jeonmunga", "deskundige"],
    ["조언하다", "joeonhada", "advies geven"], ["외출하다", "oechulhada", "naar buiten gaan, uitgaan"]
  ],
  dialogue: [
    ["A", "어제 콘서트 어땠어요?", "Eoje konseoteu eottaesseoyo?", "Hoe was het concert gisteren?"],
    ["B", "정말 좋았어요. 목이 아플 정도로 노래를 따라 불렀어요.", "Jeongmal joasseoyo. Mogi apeul jeongdoro noraereul ttara bulleosseoyo.", "Echt goed. Ik zong zo hard mee dat mijn keel pijn deed."],
    ["A", "사람이 많았어요?", "Sarami manasseoyo?", "Was het druk?"],
    ["B", "네, 움직일 수 없을 정도로 많았어요.", "Ne, umjigil su eopseul jeongdoro manasseoyo.", "Ja, zo druk dat je je niet kon bewegen."],
    ["A", "다음에는 저도 같이 가고 싶어요.", "Daeumeneun jeodo gachi gago sipeoyo.", "De volgende keer wil ik ook mee."]
  ],
  reading: {
    title: "이번 여름의 더위",
    lines: [
      { cn: "이번 여름은 기록적인 더위가 계속되고 있다.", py: "Ibeon yeoreumeun girokjeogin deowiga gyesokdoego itda.", nl: "Deze zomer houdt een recordhitte aan." },
      { cn: "낮에는 밖에 나가기 힘들 정도로 기온이 높다.", py: "Najeneun bakke nagagi himdeul jeongdoro gioni nopda.", nl: "Overdag is de temperatuur zo hoog dat naar buiten gaan zwaar is." },
      { cn: "밤에도 잠을 자기 어려울 정도로 더워서 에어컨을 켜는 집이 많다.", py: "Bamedo jameul jagi eoryeoul jeongdoro deowoseo eeokeoneul kyeoneun jibi manta.", nl: "Ook 's nachts is het zo warm dat slapen moeilijk is, dus veel huishoudens zetten de airco aan." },
      { cn: "그 때문에 전기 사용량이 크게 늘었다.", py: "Geu ttaemune jeongi sayongnyangi keuge neureotda.", nl: "Daardoor is het stroomverbruik sterk gestegen." },
      { cn: "병원을 찾는 환자도 크게 늘었다.", py: "Byeongwoneul channeun hwanjado keuge neureotda.", nl: "Ook het aantal patiënten in de ziekenhuizen is sterk gestegen." },
      { cn: "전문가들은 가능하면 낮 시간에는 외출하지 말라고 조언한다.", py: "Jeonmungadeureun ganeunghamyeon nat siganeneun oechulhaji mallago joeonhanda.", nl: "Deskundigen raden aan overdag zo mogelijk niet naar buiten te gaan." },
      { cn: "또 목이 마르지 않더라도 물을 자주 마셔야 한다고 강조한다.", py: "Tto mogi mareuji anteorado mureul jaju masyeoya handago gangjohanda.", nl: "Ook benadrukken ze dat je vaak water moet drinken, zelfs als je geen dorst hebt." },
      { cn: "시민들은 \"숨쉬기 힘들 정도예요.\"라고 말한다.", py: "Simindeureun \"Sumswigi himdeul jeongdoyeyo.\" rago malhanda.", nl: "Inwoners zeggen: \"Het is zo erg dat ademen zwaar is.\"" }
    ],
    questions: [
      { type: "mc", q: "Waarom is het stroomverbruik gestegen?",
        options: ["Veel mensen zetten 's nachts de airco aan.", "De ziekenhuizen gebruiken meer stroom.", "Mensen blijven overdag binnen en kijken tv.", "De stroom is goedkoper geworden."], answer: 0,
        why: ["Goed: 에어컨을 켜는 집이 많다. 그 때문에 전기 사용량이 크게 늘었다.", "De ziekenhuizen krijgen meer patiënten; over hun stroom staat niets in de tekst.", "Over tv staat niets in de tekst.", "Over de prijs van stroom staat niets in de tekst."] },
      { type: "mc", q: "Wat raden deskundigen aan?",
        options: ["Overdag niet naar buiten gaan en vaak water drinken.", "Alleen water drinken als je dorst hebt.", "'s Nachts niet naar buiten gaan.", "De airco 's nachts uitzetten."], answer: 0,
        why: ["Goed: 낮 시간에는 외출하지 말라고 ... 물을 자주 마셔야 한다.", "De tekst zegt: ook als je géén dorst hebt (마르지 않더라도).", "Het advies gaat over de dag: 낮 시간.", "Over uitzetten zeggen de deskundigen niets."] },
      { type: "mc", q: "밖에 나가기 힘들 정도로 기온이 높다. Wat doet 힘들 정도로 hier?",
        options: ["Het geeft een voorbeeld dat laat zien hoe hoog de temperatuur is.", "Het geeft het doel van de hoge temperatuur.", "Het zegt dat de temperatuur ongeveer gelijk blijft.", "Het zet twee tegengestelde dingen naast elkaar."], answer: 0,
        why: ["Goed: -(으)ㄹ 정도로 = zo ... dat; het voorbeeld toont de mate.", "Een doel geef je met -도록, en hitte heeft geen doel.", "정도 betekent hier niet \"ongeveer\"; dat is het alleen na een getal.", "Voor een tegenstelling gebruik je -지만."] }
    ]
  },
  questions: [
    { type: "mc", q: "어제는 잠을 못 ___ 정도로 더웠어요.",
      options: ["잘", "자을", "잔", "자기"], answer: 0,
      why: ["Goed: 자다 eindigt op een klinker, dus 잘.", "Na een klinker komt geen 을.", "Voor 정도로 staat hier de ㄹ-vorm, niet 잔.", "자기 is een naamwoordvorm en past niet vóór 정도로."] },
    { type: "mc", q: "배가 ___ 정도로 웃었어요. (Ik lachte zo hard dat mijn buik pijn deed.)",
      options: ["아플", "아프을", "아픈", "아파"], answer: 0,
      why: ["Goed: 아프다 eindigt op een klinker, dus 아플.", "Na een klinker komt geen 을.", "아픈 is de ㄴ-vorm; vóór 정도로 staat 아플.", "아파 is een eindvorm en past niet vóór 정도로."] },
    { type: "mc", q: "방이 숨쉬기 ___ 정도로 더웠어요. (어렵다) (De kamer was zo warm dat ademen moeilijk was.)",
      options: ["어려울", "어렵을", "어려운", "어렵울"], answer: 0,
      why: ["Goed: bij een ㅂ-stam wordt ㅂ + 을 samen 울: 어려울.", "Bij 어렵다 verandert ㅂ; 어렵을 bestaat niet.", "어려운 is de ㄴ-vorm; vóór 정도로 staat 어려울.", "De ㅂ valt weg: niet 어렵울, maar 어려울."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb zoveel gelopen dat mijn benen pijn doen.\"",
      tokens: [["다리가", "dariga"], ["아플", "apeul"], ["정도로", "jeongdoro"], ["많이 걸었어요", "mani georeosseoyo"]] },
    { type: "mc", q: "감기에 걸리지 ___ 따뜻하게 입으세요. (Kleed je warm aan, zodat je niet verkouden wordt.)",
      options: ["않도록", "않을 정도로", "않은 정도로", "않아서"], answer: 0,
      why: ["Goed: een doel (\"zodat\") = -도록.", "정도로 geeft een mate, geen doel.", "정도로 geeft een mate, en de ㄴ-vorm past er ook niet voor.", "-아서 geeft een reden, geen doel."] },
    { type: "mc", q: "배가 터질 정도로 먹었어요. Wat bedoelt de spreker?",
      options: ["Ik heb heel veel gegeten.", "Mijn buik is echt gebarsten.", "Ik heb gegeten zodat mijn buik vol zou zijn.", "Ik heb ongeveer genoeg gegeten."], answer: 0,
      why: ["Goed: het voorbeeld overdrijft om de mate te tonen.", "Het voorbeeld bij 정도로 hoeft niet echt te gebeuren; het is een beeld.", "Een doel zou -도록 zijn.", "정도 betekent hier niet \"ongeveer\"."] },
    { type: "mc", q: "요즘 너무 바빠서 밥 먹을 시간도 없을 ___ (Ik heb het zo druk dat ik zelfs geen tijd heb om te eten.)",
      options: ["정도예요.", "정도로예요.", "정도해요.", "정도가요."], answer: 0,
      why: ["Goed: aan het eind van de zin: 정도 + 예요.", "Aan het eind valt 로 weg.", "정도 is een naamwoord; daar komt 이다 achter, geen 하다.", "가 is een onderwerpspartikel; de zin heeft een eindvorm nodig."] },
    { type: "order", q: "Zet in de goede volgorde: \"Het was zo'n enge film dat ik niet kon slapen.\"",
      tokens: [["잠을", "jameul"], ["못 잘", "mot jal"], ["정도로", "jeongdoro"], ["무서운 영화였어요", "museoun yeonghwayeosseoyo"]] },
    { type: "fill", q: "발이 ___ 정도로 추웠어요. (얼다) (Het was zo koud dat mijn voeten bevroren.)", answers: ["얼"],
      hint: "얼다 heeft een ㄹ-stam.", why: "Bij een ㄹ-stam blijft het 얼, zonder extra 을." },
    { type: "open", q: "Vertaal: \"Hij is zo moe dat hij niet kan lopen.\"",
      model: ["그는 걸을 수 없을 정도로 피곤해요.", "그는 못 걸을 정도로 피곤해요.", "그 사람은 걷지 못할 정도로 피곤해요."],
      tip: "Check: eindigt het voorbeeld op ㄹ of 을 vóór 정도로 (없을, 걸을, 못할)?" },
    { type: "open", q: "Vertaal: \"Het eten was zo pittig dat de tranen kwamen.\"",
      model: ["음식이 눈물이 날 정도로 매웠어요.", "눈물이 날 정도로 음식이 매웠어요."],
      tip: "Check: 나다 → 날 정도로, en 맵다 → 매웠어요 (ㅂ-stam)." }
  ],
  review: [
    { type: "mc", q: "그 책은 밤새 ___ 정도로 재미있었어요. (Dat boek was zo leuk dat ik de hele nacht las.)",
      options: ["읽을", "읽ㄹ", "읽은", "읽는"], answer: 0,
      why: ["Goed: 읽다 heeft een 받침, dus + 을: 읽을.", "Na een 받침 komt 을, niet alleen ㄹ.", "읽은 is de ㄴ-vorm; vóór 정도로 staat 읽을.", "읽는 is de 는-vorm; vóór 정도로 staat 읽을."] },
    { type: "mc", q: "아이가 ___ 정도로 무서운 영화였어요. (Een film zo eng dat het kind huilde.)",
      options: ["울", "울을", "운", "울어"], answer: 0,
      why: ["Goed: bij een ㄹ-stam blijft het 울.", "Een ㄹ-stam krijgt geen extra 을.", "운 is de ㄴ-vorm; vóór 정도로 staat 울.", "울어 is een eindvorm en past niet vóór 정도로."] },
    { type: "mc", q: "그 가수는 모르는 사람이 ___ 정도로 유명해요. (Die zanger is zo beroemd dat bijna niemand hem niet kent.)",
      options: ["없을", "없는", "없어", "없기"], answer: 0,
      why: ["Goed: 없다 heeft een 받침, dus + 을: 없을.", "없는 is de 는-vorm; vóór 정도로 staat 없을.", "없어 is een eindvorm en past niet vóór 정도로.", "없기 is een naamwoordvorm en past niet vóór 정도로."] }
  ]
})
