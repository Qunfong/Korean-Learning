({
  id: "01", slug: "dedaga", title: "-(으)ㄴ/는 데다가", sub: "Er nog een punt bovenop zetten",
  canDo: "Je kunt nu twee punten in dezelfde richting stapelen met -(으)ㄴ/는 데다가, en je kiest tussen 데다가 en -(으)ㄹ 뿐만 아니라.",
  guess: {
    q: "\"Dit restaurant is duur en bovendien niet lekker.\" Welke zin klopt, denk je?",
    options: ["이 식당은 비싼 데다가 맛도 없어요.", "이 식당은 비싸는 데다가 맛도 없어요.", "이 식당은 비쌀 데다가 맛도 없어요.", "이 식당은 비싸 데다가 맛도 없어요."], answer: 0,
    why: ["Goed: 비싸다 is een bijvoeglijk werkwoord, dus -ㄴ 데다가.", "-는 hoort bij gewone werkwoorden, niet bij 비싸다.", "-ㄹ wijst naar de toekomst en past niet voor 데다가.", "Voor 데 moet een vorm met -ㄴ of -는 staan."]
  },
  problem: "Je wilt een tweede punt toevoegen dat het eerste versterkt. Met -고 zet je twee feiten naast elkaar. Met -(으)ㄴ/는 데다가 zeg je: en daar komt nog iets bij. Beide punten wijzen dezelfde kant op, vaak naar één gevolg.",
  pattern: [
    { l: "punt 1", v: "비가 오", c: 1 }, { l: "데다가", v: "는 데다가", c: 2, key: true },
    { l: "punt 2", v: "바람도", c: 3 }, { l: "werkwoord", v: "불어요", c: 4 }
  ],
  patternCap: "Punt 1 + -(으)ㄴ/는 데다가 + punt 2 (vaak met 도 of 까지); spreektaal ook -는 데다",
  rules: [
    "Werkwoord in het heden: -는 데다가 (오는 데다가). Bijvoeglijk werkwoord: -(으)ㄴ 데다가 (비싼, 좋은).",
    "있다/없다 en woorden daarmee krijgen -는: 맛있는 데다가, 재미없는 데다가.",
    "Verleden bij een werkwoord: -(으)ㄴ 데다가 (못 잔 데다가). Zelfstandig naamwoord: -인 데다가 (의사인 데다가).",
    "데 is een los woord: je schrijft een spatie ervoor. In spreektaal hoor je ook -는 데다.",
    "Na 데다가 komt geen bevel of voorstel (-세요, -읍시다)."
  ],
  pitfall: "Beide punten moeten dezelfde kant op wijzen. Voor een tegenstelling (duur maar lekker) gebruik je -지만, niet 데다가.",
  examples: [
    { cn: "그 사람은 성격이 좋은 데다가 일도 잘해요.", py: "Geu sarameun seonggyeogi joeun dedaga ildo jalhaeyo.", nl: "Hij heeft een goed karakter en werkt bovendien goed." },
    { cn: "비가 오는 데다가 바람까지 불어서 밖에 나가기 싫어요.", py: "Biga oneun dedaga baramkkaji bureoseo bakke nagagi sireoyo.", nl: "Het regent en het waait ook nog. Ik wil niet naar buiten." },
    { cn: "어젯밤에 잠을 못 잔 데다가 아침도 굶어서 너무 피곤해요.", py: "Eojetbame jameul mot jan dedaga achimdo gulmeoseo neomu pigonhaeyo.", nl: "Ik heb vannacht niet geslapen en ook niet ontbeten. Ik ben erg moe." },
    { cn: "그는 의사인 데다가 소설가이기도 하다.", py: "Geuneun uisain dedaga soseolgaigido hada.", nl: "Hij is arts en bovendien ook romanschrijver." }
  ],
  nuance: [
    { h: "-는 데다가 of -(으)ㄹ 뿐만 아니라?",
      p: "Beide betekenen \"en bovendien\". 데다가 stapelt twee punten op en leidt vaak naar een gevolg (-아서, 그래서). -(으)ㄹ 뿐만 아니라 betekent \"niet alleen A, maar ook B\" en legt de nadruk op B. Let op de vorm: 뿐만 아니라 neemt altijd -(으)ㄹ (저렴할), 데다가 neemt -(으)ㄴ/는 (저렴한). 뿐만 아니라 hoor je vooral in formele tekst en toespraken.",
      ex: [
        { cn: "이 제품은 가격이 저렴한 데다가 품질도 좋아서 잘 팔린다.", py: "I jepumeun gagyeogi jeoryeomhan dedaga pumjildo joaseo jal pallinda.", nl: "Dit product is goedkoop en ook nog van goede kwaliteit, dus het verkoopt goed." },
        { cn: "이 제품은 가격이 저렴할 뿐만 아니라 품질도 우수하다.", py: "I jepumeun gagyeogi jeoryeomhal ppunman anira pumjildo usuhada.", nl: "Dit product is niet alleen goedkoop, maar ook van uitstekende kwaliteit." }
      ] },
    { h: "Wanneer NIET: tegenstelling en bevelen",
      p: "Wijst het tweede punt de andere kant op, dan gebruik je -지만 of -(으)ㄴ/는데. Na 데다가 volgt ook geen bevel of voorstel. Wil je iemand iets aanraden, gebruik dan -(으)니까.",
      ex: [
        { cn: "이 방은 넓지만 너무 어두워요.", py: "I bangeun neopjiman neomu eoduwoyo.", nl: "Deze kamer is ruim, maar te donker." },
        { cn: "비가 오니까 우산을 가져가세요.", py: "Biga onikka usaneul gajyeogaseyo.", nl: "Het regent, dus neem een paraplu mee." }
      ] },
    { h: "Register: spreektaal en schrijftaal",
      p: "In gesprekken zeg je -는 데다(가), of je begint een nieuwe zin met 게다가 (bovendien). In formele tekst kies je vaak -(으)ㄹ 뿐만 아니라, -(으)ㄹ 뿐더러, of 또한 en 더욱이 aan het begin van een zin. 데다가 zelf kan ook in schrijftaal, met de -다-stijl.",
      ex: [
        { cn: "날씨가 추운 데다가 비까지 와서 행사가 취소되었다.", py: "Nalssiga chuun dedaga bikkaji waseo haengsaga chwisodoeeotda.", nl: "Het was koud en het regende ook nog, dus het evenement werd afgelast." },
        { cn: "날씨가 추웠어요. 게다가 비까지 왔어요.", py: "Nalssiga chuwosseoyo. Gedaga bikkaji wasseoyo.", nl: "Het was koud. Bovendien regende het ook nog." }
      ] }
  ],
  mistakes: [
    { wrong: "이 식당은 비싸는 데다가 맛도 없어요.", right: "이 식당은 비싼 데다가 맛도 없어요.", why: "비싸다 is een bijvoeglijk werkwoord. Dat krijgt -ㄴ, niet -는." },
    { wrong: "그 카페는 커피가 맛있은 데다가 값도 싸요.", right: "그 카페는 커피가 맛있는 데다가 값도 싸요.", why: "Woorden op 있다/없다 krijgen altijd -는: 맛있는, 재미없는." },
    { wrong: "이 방은 넓은 데다가 너무 어두워요.", right: "이 방은 넓지만 너무 어두워요.", why: "Ruim is goed, donker is slecht. Bij een tegenstelling gebruik je -지만." },
    { wrong: "비가 오는데다가 바람도 불어요.", right: "비가 오는 데다가 바람도 불어요.", why: "데 is hier een los woord. Schrijf een spatie vóór 데다가." }
  ],
  vocab: [
    ["-(으)ㄴ/는 데다가", "-(eu)n/neun dedaga", "en bovendien, daar komt nog bij"], ["성격", "seonggyeok", "karakter"],
    ["굶다", "gumda", "(een maaltijd) overslaan, honger lijden"], ["월세", "wolse", "maandhuur"],
    ["일자리", "iljari", "baan, werkgelegenheid"], ["부족하다", "bujokada", "tekortschieten, ontbreken"],
    ["출생률", "chulsaengnyul", "geboortecijfer"], ["빈집", "binjip", "leegstaand huis"],
    ["지원자", "jiwonja", "aanvrager, kandidaat"], ["해결하다", "haegyeolhada", "oplossen"]
  ],
  dialogue: [
    ["A", "왜 그 집으로 이사하지 않았어요?", "Wae geu jibeuro isahaji anasseoyo?", "Waarom ben je niet naar dat huis verhuisd?"],
    ["B", "월세가 비싼 데다가 회사에서도 너무 멀었거든요.", "Wolsega bissan dedaga hoesaeseodo neomu meoreotgeodeunyo.", "De huur was duur en het lag ook nog ver van mijn werk."],
    ["A", "그럼 지금 사는 집은 어때요?", "Geureom jigeum saneun jibeun eottaeyo?", "En het huis waar je nu woont?"],
    ["B", "조용한 데다가 역에서도 가까워서 마음에 들어요.", "Joyonghan dedaga yeogeseodo gakkawoseo maeume deureoyo.", "Het is rustig en ligt ook dicht bij het station. Ik vind het fijn."],
    ["A", "좋겠네요. 저도 이사하고 싶어요.", "Jokenneyo. Jeodo isahago sipeoyo.", "Wat fijn. Ik wil ook verhuizen."]
  ],
  reading: {
    title: "떠나는 청년들, 돌아오는 청년들",
    lines: [
      { cn: "최근 많은 지방 도시가 어려움을 겪고 있다.", py: "Choegeun maneun jibang dosiga eoryeoumeul gyeokgo itda.", nl: "Veel steden in de regio hebben de laatste tijd problemen." },
      { cn: "일자리가 부족한 데다가 교통도 불편해서 청년들이 대도시로 떠나고 있다.", py: "Iljariga bujokan dedaga gyotongdo bulpyeonhaeseo cheongnyeondeuri daedosiro tteonago itda.", nl: "Er is te weinig werk en het vervoer is ook nog lastig, dus jongeren vertrekken naar de grote steden." },
      { cn: "청년이 떠난 데다가 출생률까지 낮아져 인구가 빠르게 줄고 있다.", py: "Cheongnyeoni tteonan dedaga chulsaengnyulkkaji najajyeo inguga ppareuge julgo itda.", nl: "De jongeren zijn weg en ook het geboortecijfer is gedaald, dus de bevolking krimpt snel." },
      { cn: "인구가 줄면 상점과 병원이 문을 닫고, 생활은 더 불편해진다.", py: "Inguga julmyeon sangjeomgwa byeongwoni muneul datgo, saenghwareun deo bulpyeonhaejinda.", nl: "Als de bevolking krimpt, sluiten winkels en ziekenhuizen, en wordt het leven nog lastiger." },
      { cn: "이 문제를 해결하기 위해 한 도시는 빈집을 고쳐 청년들에게 싸게 빌려주기 시작했다.", py: "I munjereul haegyeolhagi wihae han dosineun binjibeul gochyeo cheongnyeondeurege ssage billyeojugi sijakaetda.", nl: "Om dit op te lossen begon één stad leegstaande huizen op te knappen en goedkoop aan jongeren te verhuren." },
      { cn: "집값이 싼 데다가 자연환경도 좋아서 지원자가 예상보다 많았다.", py: "Jipgapsi ssan dedaga jayeonhwangyeongdo joaseo jiwonjaga yesangboda manatda.", nl: "De woningen waren goedkoop en de natuur was ook nog mooi, dus er waren meer aanvragers dan verwacht." },
      { cn: "물론 이것만으로 문제가 모두 해결되는 것은 아니다.", py: "Mullon igeonmaneuro munjega modu haegyeoldoeneun geoseun anida.", nl: "Hiermee is het probleem natuurlijk niet helemaal opgelost." },
      { cn: "그러나 작은 변화가 시작되었다는 점에서 의미가 있다.", py: "Geureona jageun byeonhwaga sijakdoeeotdaneun jeomeseo uimiga itda.", nl: "Maar het is betekenisvol dat er een kleine verandering is begonnen." }
    ],
    questions: [
      { type: "mc", q: "Waarom vertrekken jongeren uit de regio?",
        options: ["Er is weinig werk en het vervoer is lastig.", "De huizen zijn te duur.", "De natuur is niet mooi.", "Er zijn te veel jongeren."], answer: 0,
        why: ["Goed: 일자리가 부족한 데다가 교통도 불편해서.", "De tekst zegt juist dat de huizen goedkoop zijn (집값이 싼).", "De natuur is juist een pluspunt (자연환경도 좋아서).", "Het probleem is dat er te weinig mensen zijn."] },
      { type: "mc", q: "Wat deed één stad?",
        options: ["Leegstaande huizen opknappen en goedkoop verhuren.", "Nieuwe ziekenhuizen bouwen.", "Gratis busvervoer invoeren.", "Grote bedrijven naar de stad halen."], answer: 0,
        why: ["Goed: 빈집을 고쳐 청년들에게 싸게 빌려주기 시작했다.", "Ziekenhuizen sluiten juist (문을 닫고).", "Over gratis vervoer staat niets in de tekst.", "Over bedrijven staat niets in de tekst."] },
      { type: "mc", q: "청년이 떠난 데다가 출생률까지 낮아져... Wat doet 데다가 hier?",
        options: ["Het stapelt twee oorzaken die samen tot krimp leiden.", "Het zet twee feiten tegenover elkaar.", "Het zegt dat de jongeren terugkomen.", "Het geeft een doel aan."], answer: 0,
        why: ["Goed: twee punten in dezelfde richting, met één gevolg: 인구가 줄고 있다.", "Voor een tegenstelling zou -지만 staan.", "떠난 betekent \"vertrokken\", niet \"teruggekomen\".", "Een doel geef je aan met -기 위해."] }
    ]
  },
  questions: [
    { type: "mc", q: "그 가게는 물건이 ___ 데다가 가격도 싸요.",
      options: ["많은", "많는", "많을", "많아"], answer: 0,
      why: ["Goed: 많다 is een bijvoeglijk werkwoord, dus 많은 데다가.", "-는 hoort bij gewone werkwoorden. 많다 beschrijft een toestand.", "-을 wijst naar de toekomst en past niet voor 데다가.", "Voor 데 staat een vorm met -ㄴ of -는, niet -아."] },
    { type: "mc", q: "\"Ik heb gisteren veel gegeten en ook alcohol gedronken. Nu doet mijn buik pijn.\"",
      options: ["어제 많이 먹은 데다가 술도 마셔서 배가 아파요.", "어제 많이 먹는 데다가 술도 마셔서 배가 아파요.", "어제 많이 먹을 데다가 술도 마셔서 배가 아파요.", "어제 많이 먹었은 데다가 술도 마셔서 배가 아파요."], answer: 0,
      why: ["Goed: verleden bij een werkwoord is -(으)ㄴ 데다가.", "-는 is heden. Het gaat over gisteren.", "-을 wijst naar de toekomst.", "Na -었- volgt geen -은. Gebruik gewoon 먹은."] },
    { type: "mc", q: "\"Hij is student en heeft bovendien een bijbaan.\"",
      options: ["그는 학생인 데다가 아르바이트도 해요.", "그는 학생은 데다가 아르바이트도 해요.", "그는 학생일 데다가 아르바이트도 해요.", "그는 학생이는 데다가 아르바이트도 해요."], answer: 0,
      why: ["Goed: na een zelfstandig naamwoord gebruik je -인 데다가.", "은 is een onderwerpspartikel, geen vorm voor 데.", "-일 wijst naar de toekomst of een gok.", "이다 krijgt -ㄴ, niet -는."] },
    { type: "order", q: "Zet in de goede volgorde: \"Het regent en het waait bovendien.\"",
      tokens: [["비가", "biga"], ["오는 데다가", "oneun dedaga"], ["바람도", "baramdo"], ["불어요", "bureoyo"]] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["이 방은 넓은 데다가 너무 어두워요.", "이 방은 넓은 데다가 햇빛도 잘 들어요.", "이 방은 좁은 데다가 햇빛도 안 들어요.", "이 방은 깨끗한 데다가 조용하기까지 해요."], answer: 0,
      why: ["Goed: ruim (goed) en donker (slecht) wijzen niet dezelfde kant op. Zeg: 넓지만 너무 어두워요.", "Dit klopt: ruim en zonnig zijn allebei pluspunten.", "Dit klopt: klein en geen zon zijn allebei minpunten.", "Dit klopt: schoon en zelfs stil zijn allebei pluspunten."] },
    { type: "mc", q: "이 제품은 가격이 ___ 뿐만 아니라 품질도 우수하다.",
      options: ["저렴할", "저렴한", "저렴하는", "저렴해"], answer: 0,
      why: ["Goed: 뿐만 아니라 neemt altijd -(으)ㄹ.", "-ㄴ hoort bij 데다가, niet bij 뿐만 아니라.", "-는 past niet bij een bijvoeglijk werkwoord, en niet bij 뿐.", "Voor 뿐 staat een vorm met -(으)ㄹ, niet -아/어."] },
    { type: "mc", q: "Welke zin betekent ongeveer hetzelfde als 그는 의사인 데다가 소설가이기도 하다?",
      options: ["그는 의사일 뿐만 아니라 소설가이기도 하다.", "그는 의사지만 소설가는 아니다.", "그는 의사가 되려고 소설가를 그만두었다.", "그는 의사였다가 소설가가 되었다."], answer: 0,
      why: ["Goed: \"niet alleen arts, maar ook schrijver\" stapelt dezelfde twee feiten.", "Hier is hij juist géén schrijver.", "Dit gaat over een doel en stoppen, niet over twee rollen tegelijk.", "Dit is een wisseling na elkaar, niet twee rollen tegelijk."] },
    { type: "fill", q: "이 동네는 교통이 편리한 ___ 물가도 싸서 살기 좋다. (In deze buurt is het vervoer handig en bovendien zijn de prijzen laag, dus het is er fijn wonen.)",
      answers: ["데다가", "데다"], hint: "Welk woord betekent \"en daar komt nog bij\"?", why: "편리한 데다가: bijvoeglijk werkwoord + -ㄴ, dan 데다가. In spreektaal kan ook 데다." },
    { type: "order", q: "Zet in de goede volgorde: \"In deze buurt is het vervoer handig en zijn de prijzen bovendien laag.\"",
      tokens: [["이 동네는", "i dongneneun"], ["교통이", "gyotongi"], ["편리한 데다가", "pyeollihan dedaga"], ["물가도", "mulgado"], ["싸다", "ssada"]] },
    { type: "open", q: "Vertaal: \"Dit appartement is goedkoop en ligt bovendien dicht bij het station.\"",
      model: ["이 아파트는 싼 데다가 역에서도 가까워요.", "이 아파트는 값이 싼 데다가 역에서 가까워요.", "이 집은 싼 데다가 역에서도 가깝습니다."],
      tip: "Check: staat er 싼 (niet 싸는) vóór 데다가, met een spatie ervoor?" },
    { type: "open", q: "Vertaal in formele schrijfstijl (-다): \"Deze stad vergrijst en bovendien krimpt de bevolking.\"",
      model: ["이 도시는 고령화가 진행되는 데다가 인구도 줄고 있다.", "이 도시는 고령화가 심한 데다가 인구까지 감소하고 있다.", "이 도시는 고령화가 진행될 뿐만 아니라 인구도 감소하고 있다."],
      tip: "Check: -는 of -ㄴ vóór 데다가 (of -ㄹ vóór 뿐만 아니라), 도 of 까지 bij het tweede punt, en een -다-einde." }
  ],
  review: [
    { type: "mc", q: "그 영화는 ___ 데다가 재미도 없었어요. (De film was lang en bovendien saai.)",
      options: ["긴", "길는", "길은", "길"], answer: 0,
      why: ["Goed: bij 길다 valt de ㄹ weg voor -ㄴ: 긴.", "길다 is een bijvoeglijk werkwoord. -는 past niet.", "Bij een stam op ㄹ valt de ㄹ weg. Er komt geen -은.", "Voor 데 moet een vorm met -ㄴ staan."] },
    { type: "mc", q: "\"Ze kan goed koken en zingt bovendien goed.\"",
      options: ["그녀는 요리를 잘하는 데다가 노래도 잘해요.", "그녀는 요리를 잘하는 데다가 노래는 못해요.", "그녀는 요리를 잘할 데다가 노래도 잘해요.", "그녀는 요리를 잘해 데다가 노래도 잘해요."], answer: 0,
      why: ["Goed: twee positieve punten, en -는 bij het werkwoord 잘하다.", "Dit is een tegenstelling. Daarvoor gebruik je -지만.", "-ㄹ wijst naar de toekomst en past niet voor 데다가.", "Voor 데 moet een vorm met -는 staan."] },
    { type: "mc", q: "\"Dat café heeft lekkere koffie en is bovendien goedkoop.\"",
      options: ["그 카페는 커피가 맛있는 데다가 값도 싸요.", "그 카페는 커피가 맛있은 데다가 값도 싸요.", "그 카페는 커피가 맛있을 데다가 값도 싸요.", "그 카페는 커피가 맛있지만 값도 싸요."], answer: 0,
      why: ["Goed: 맛있다 eindigt op 있다 en krijgt dus -는.", "Woorden op 있다 krijgen -는, niet -은.", "-을 wijst naar de toekomst en past niet voor 데다가.", "-지만 is voor een tegenstelling. Lekker en goedkoop wijzen dezelfde kant op."] }
  ]
})
