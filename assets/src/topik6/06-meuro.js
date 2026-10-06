({
  id: "06", slug: "meuro", title: "-(으)므로", sub: "Omdat, in formele tekst",
  canDo: "Je kunt nu in formele tekst een reden geven met -(으)므로, je houdt het uit elkaar met -(으)ㅁ으로(써), en je kiest in spreektaal -아서/어서 of -기 때문에.",
  guess: {
    q: "Een bordje: \"De vloer is glad. Wees daarom voorzichtig.\" Welke zin klopt, denk je?",
    options: ["바닥이 미끄러우므로 조심하십시오.", "바닥이 미끄럽으므로 조심하십시오.", "바닥이 미끄러워서 조심하십시오.", "바닥이 미끄러움으로 조심하십시오."], answer: 0,
    why: ["Goed: 미끄럽다 wordt 미끄러우-, en daarna -므로.", "Bij een ㅂ-stam wordt ㅂ een 우: 미끄러우므로.", "Na -아서/어서 volgt geen opdracht zoals 조심하십시오.", "-ㅁ으로 betekent \"door middel van\", niet \"omdat\"."]
  },
  problem: "In een rapport, een bericht of een bordje wil je een reden geven. -아서/어서 klinkt dan te gewoon. Met -(으)므로 geef je een reden in nette schrijftaal. Pas op: -(으)ㅁ으로 klinkt precies hetzelfde, maar betekent iets anders.",
  pattern: [
    { l: "reden", v: "비가 많이 왔", c: 1 }, { l: "므로", v: "으므로", c: 2, key: true },
    { l: "gevolg", v: "경기는 취소되었다", c: 4 }
  ],
  patternCap: "Reden + -(으)므로 + gevolg (schrijftaal). Spreektaal: -아서/어서, -기 때문에, -(으)니까",
  rules: [
    "Na een klinker of ㄹ: -므로 (가므로, 만들므로). Na een medeklinker: -으므로 (많으므로). Zelfstandig naamwoord: -(이)므로 (학생이므로).",
    "Verleden: -았/었으므로 (왔으므로). Bij -아서/어서 kan dat niet: 왔어서 is fout.",
    "Op bordjes en in officiële berichten volgt na -(으)므로 vaak een verzoek: 위험하므로 들어가지 마십시오. Na -아서/어서 en -기 때문에 volgt geen opdracht.",
    "Register: -(으)므로 is schrijftaal. -기 때문에 past in beide. In een gesprek zeg je -아서/어서 of -(으)니까."
  ],
  pitfall: "Verwar -(으)므로 (omdat) niet met -(으)ㅁ으로(써) (door middel van). 공부하므로 is \"omdat hij studeert\", 공부함으로써 is \"door te studeren\". Je hoort geen verschil, dus let op de spelling.",
  examples: [
    { cn: "비가 많이 왔으므로 경기는 취소되었다.", py: "Biga mani wasseumeuro gyeonggineun chwisodoeeotda.", nl: "Omdat het veel geregend had, werd de wedstrijd afgelast." },
    { cn: "이 지역은 위험하므로 들어가지 마십시오.", py: "I jiyeogeun wiheomhameuro deureogaji masipsio.", nl: "Dit gebied is gevaarlijk. Ga er daarom niet in." },
    { cn: "그는 성실한 학생이므로 장학금을 받을 자격이 있다.", py: "Geuneun seongsilhan haksaengimeuro janghakgeumeul badeul jagyeogi itda.", nl: "Hij is een ijverige student en verdient daarom een beurs." },
    { cn: "인구가 줄고 있으므로 대책이 필요하다.", py: "Inguga julgo isseumeuro daechaegi piryohada.", nl: "De bevolking krimpt, dus er zijn maatregelen nodig." }
  ],
  nuance: [
    { h: "-(으)므로, -기 때문에 of -아서/어서?",
      p: "Alle drie betekenen \"omdat\". -아서/어서 is neutraal en hoort bij spreektaal. Er staat geen verleden tijd voor, en er volgt geen opdracht na. -기 때문에 legt nadruk op de reden en past in beide registers. Verleden kan (왔기 때문에), een opdracht erna niet. -(으)므로 is alleen schrijftaal: rapporten, wetten, bordjes. Verleden kan, en op bordjes volgt vaak -십시오.",
      ex: [
        { cn: "눈이 많이 와서 길이 막혔어요.", py: "Nuni mani waseo giri makyeosseoyo.", nl: "Er viel veel sneeuw, dus de weg zat vast. (gesprek)" },
        { cn: "눈이 많이 왔기 때문에 길이 막혔다.", py: "Nuni mani watgi ttaemune giri makyeotda.", nl: "Doordat er veel sneeuw viel, zat de weg vast. (nadruk op de reden)" },
        { cn: "눈이 많이 왔으므로 차량 운행을 제한한다.", py: "Nuni mani wasseumeuro charyang unhaengeul jehanhanda.", nl: "Omdat er veel sneeuw is gevallen, wordt het verkeer beperkt. (officieel bericht)" }
      ] },
    { h: "Spellingval: -(으)므로 of -(으)ㅁ으로(써)?",
      p: "-(으)ㅁ으로(써) is een zelfstandig naamwoord op -ㅁ plus 으로: \"door middel van\". Uitgesproken klinken 운동하므로 en 운동함으로 hetzelfde. Een test: kun je 써 toevoegen? Dan schrijf je -ㅁ으로(써). Zo ook bij de verbindingswoorden: 그러므로 is \"daarom\", 그럼으로써 is \"daardoor, zo\".",
      ex: [
        { cn: "그는 매일 운동하므로 건강하다.", py: "Geuneun maeil undonghameuro geonganghada.", nl: "Hij is gezond, omdat hij elke dag sport." },
        { cn: "그는 매일 운동함으로써 건강을 지켰다.", py: "Geuneun maeil undonghameurosseo geongangeul jikyeotda.", nl: "Door elke dag te sporten bleef hij gezond." }
      ] },
    { h: "Register: wat zeg je in een gesprek?",
      p: "Tegen vrienden of collega's klinkt -(으)므로 stijf, alsof je een rapport voorleest. Zeg dan -아서/어서, of -(으)니까 als er een verzoek volgt. In schrijftaal begin je een nieuwe zin met 그러므로 of 따라서 (daarom). In een gesprek zeg je 그래서.",
      ex: [
        { cn: "공사 중이므로 다른 길을 이용하십시오.", py: "Gongsa jungimeuro dareun gireul iyonghasipsio.", nl: "Wegens werkzaamheden: neem een andere route. (bordje)" },
        { cn: "공사 중이니까 다른 길로 가세요.", py: "Gongsa junginikka dareun gillo gaseyo.", nl: "Er wordt gewerkt, dus neem een andere weg. (gesprek)" }
      ] }
  ],
  mistakes: [
    { wrong: "사람이 많음으로 시간이 오래 걸릴 수 있습니다.", right: "사람이 많으므로 시간이 오래 걸릴 수 있습니다.", why: "Voor \"omdat\" schrijf je -(으)므로. -ㅁ으로 betekent \"door middel van\"." },
    { wrong: "바닥이 미끄럽으므로 조심하십시오.", right: "바닥이 미끄러우므로 조심하십시오.", why: "Bij een ㅂ-stam wordt ㅂ een 우 vóór -(으)므로." },
    { wrong: "이곳은 금연 구역으므로 담배를 피우지 마십시오.", right: "이곳은 금연 구역이므로 담배를 피우지 마십시오.", why: "Na een zelfstandig naamwoord gebruik je -(이)므로, met 이." },
    { wrong: "배고프므로 밥 먹자.", right: "배고프니까 밥 먹자.", why: "-(으)므로 is schrijftaal. Tegen een vriend, met een voorstel erna, zeg je -(으)니까." }
  ],
  vocab: [
    ["-(으)므로", "-(eu)meuro", "omdat, aangezien (schrijftaal)"], ["미끄럽다", "mikkeureopda", "glad"],
    ["취소되다", "chwisodoeda", "afgelast worden"], ["자격", "jagyeok", "recht, bevoegdheid"],
    ["대책", "daechaek", "maatregel"], ["예산", "yesan", "budget"],
    ["조정하다", "jojeonghada", "aanpassen, bijstellen"], ["폭염", "pogyeom", "hittegolf"],
    ["삼가다", "samgada", "vermijden, zich onthouden van"], ["쉼터", "swimteo", "schuilplaats, rustplek"]
  ],
  dialogue: [
    ["A", "회의 자료는 다 준비됐어요?", "Hoeui jaryoneun da junbidwaesseoyo?", "Zijn de stukken voor de vergadering klaar?"],
    ["B", "네. 보고서에 예산이 부족하므로 일정을 조정해야 한다고 썼어요.", "Ne. Bogoseoe yesani bujokameuro iljeongeul jojeonghaeya handago sseosseoyo.", "Ja. In het rapport schreef ik dat de planning moet worden aangepast, omdat het budget te krap is."],
    ["A", "회의에서 말할 때는요?", "Hoeuieseo malhal ttaeneunyo?", "En als je het in de vergadering zegt?"],
    ["B", "그때는 예산이 부족해서 일정을 바꿔야 한다고 할 거예요.", "Geuttaeneun yesani bujokaeseo iljeongeul bakkwoya handago hal geoyeyo.", "Dan zeg ik dat we de planning moeten veranderen, omdat het budget te krap is."],
    ["A", "글과 말이 정말 다르군요.", "Geulgwa mari jeongmal dareugunyo.", "Schrijven en spreken verschillen echt."]
  ],
  reading: {
    title: "폭염 대비 안내",
    lines: [
      { cn: "다음 주부터 전국에 폭염이 계속될 것으로 예상된다.", py: "Daeum jubuteo jeonguge pogyeomi gyesokdoel geoseuro yesangdoenda.", nl: "Vanaf volgende week houdt de hittegolf naar verwachting in het hele land aan." },
      { cn: "폭염은 건강에 큰 위험이 될 수 있으므로 각별한 주의가 필요하다.", py: "Pogyeomeun geongange keun wiheomi doel su isseumeuro gakbyeolhan juuiga piryohada.", nl: "Een hittegolf kan een groot gevaar voor de gezondheid zijn. Daarom is extra voorzichtigheid nodig." },
      { cn: "특히 노인과 어린이는 더위에 약하므로 낮에는 외출을 삼가는 것이 좋다.", py: "Teuki noingwa eorinineun deowie yakameuro najeneun oechureul samganeun geosi jota.", nl: "Vooral ouderen en kinderen kunnen slecht tegen hitte. Zij kunnen overdag beter niet naar buiten gaan." },
      { cn: "실내에서도 온도가 높아질 수 있으므로 물을 자주 마셔야 한다.", py: "Sillaeeseodo ondoga nopajil su isseumeuro mureul jaju masyeoya handa.", nl: "Ook binnen kan het warm worden, dus je moet vaak water drinken." },
      { cn: "시는 무더위 쉼터를 운영함으로써 시민들의 건강을 보호할 계획이다.", py: "Sineun mudeowi swimteoreul unyeonghameurosseo simindeurui geongangeul bohohal gyehoegida.", nl: "De stad wil de gezondheid van de inwoners beschermen door koele rustplekken te openen." },
      { cn: "쉼터는 주민센터와 도서관 등에 마련되어 있다.", py: "Swimteoneun juminsenteowa doseogwan deunge maryeondoeeo itda.", nl: "Die rustplekken zijn ingericht in onder meer buurthuizen en bibliotheken." },
      { cn: "쉼터는 저녁 아홉 시까지 운영되므로 퇴근 후에도 이용할 수 있다.", py: "Swimteoneun jeonyeok ahop sikkaji unyeongdoemeuro toegeun huedo iyonghal su itda.", nl: "Ze zijn open tot negen uur 's avonds, dus je kunt ze ook na je werk gebruiken." },
      { cn: "더 자세한 내용은 시청 누리집에서 확인할 수 있다.", py: "Deo jasehan naeyongeun sicheong nurijibeseo hwaginhal su itda.", nl: "Meer informatie staat op de website van het stadhuis." }
    ],
    questions: [
      { type: "mc", q: "Wie kunnen overdag beter binnen blijven?",
        options: ["Ouderen en kinderen.", "Mensen die na hun werk naar huis gaan.", "Medewerkers van de bibliotheek.", "Alle inwoners van de stad."], answer: 0,
        why: ["Goed: 노인과 어린이는 더위에 약하므로 낮에는 외출을 삼가는 것이 좋다.", "Na het werk kun je juist naar een rustplek (퇴근 후에도 이용할 수 있다).", "De bibliotheek staat in de tekst alleen als plek waar een rustplek is.", "Het advies geldt vooral (특히) voor ouderen en kinderen."] },
      { type: "mc", q: "Tot hoe laat zijn de rustplekken open?",
        options: ["Tot negen uur 's avonds.", "Tot het einde van de werkdag.", "Alleen overdag.", "Tot volgende week."], answer: 0,
        why: ["Goed: 저녁 아홉 시까지 운영되므로.", "Ze blijven juist open ná het werk (퇴근 후에도).", "Ze zijn ook 's avonds open.", "\"Volgende week\" gaat over het begin van de hittegolf."] },
      { type: "mc", q: "노인과 어린이는 더위에 약하므로 ... Wat betekent -므로 hier?",
        options: ["Omdat: het geeft de reden voor het advies.", "Door middel van: het geeft een methode.", "Hoewel: het geeft een tegenstelling.", "Zodra: het geeft een moment."], answer: 0,
        why: ["Goed: ze kunnen slecht tegen hitte, dus ze blijven beter binnen.", "Een methode staat in 운영함으로써, met -ㅁ으로써.", "Een tegenstelling zou -지만 of -(으)나 zijn.", "Een moment geef je aan met -자마자 of -(으)ㄹ 때."] }
    ]
  },
  questions: [
    { type: "mc", q: "이 약은 졸음이 올 수 ___ 운전 전에는 드시지 마십시오. (bijsluiter)",
      options: ["있으므로", "있므로", "있어서", "있음으로"], answer: 0,
      why: ["Goed: 있- eindigt op een medeklinker, dus -으므로.", "Na een medeklinker komt -으므로, niet -므로.", "Na -아서/어서 volgt geen verzoek zoals 드시지 마십시오.", "-ㅁ으로 betekent \"door middel van\", niet \"omdat\"."] },
    { type: "mc", q: "\"Omdat de prijzen gestegen zijn, zal de consumptie dalen.\" (rapport)",
      options: ["물가가 올랐으므로 소비가 줄어들 것이다.", "물가가 올랐므로 소비가 줄어들 것이다.", "물가가 올랐어서 소비가 줄어들 것이다.", "물가가 올랐음으로 소비가 줄어들 것이다."], answer: 0,
      why: ["Goed: verleden + -으므로: 올랐으므로.", "Na -았- komt -으므로, niet -므로.", "Voor -아서/어서 staat nooit een verleden tijd.", "-ㅁ으로 betekent \"door middel van\", niet \"omdat\"."] },
    { type: "mc", q: "Je zegt tegen een vriend: \"Ik ben moe, dus ik ga vroeg slapen.\" Welke zin is het natuurlijkst?",
      options: ["피곤해서 일찍 잘게.", "피곤하므로 일찍 잘게.", "피곤했어서 일찍 잘게.", "피곤함으로 일찍 잘게."], answer: 0,
      why: ["Goed: in een gesprek gebruik je -아서/어서.", "-(으)므로 is schrijftaal. Tegen een vriend klinkt het vreemd.", "Voor -아서/어서 staat geen verleden tijd.", "-ㅁ으로 betekent \"door middel van\", niet \"omdat\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Omdat de tijd krap is, houden we de vergadering kort.\"",
      tokens: [["시간이", "sigani"], ["부족하므로", "bujokameuro"], ["회의를", "hoeuireul"], ["짧게 하겠습니다", "jjalge hagetseumnida"]] },
    { type: "mc", q: "식물은 광합성을 ___ 에너지를 얻는다. (Planten krijgen energie door middel van fotosynthese.)",
      options: ["함으로써", "하므로써", "함으로서", "하으로써"], answer: 0,
      why: ["Goed: \"door middel van\" is -ㅁ으로써: 하- + ㅁ + 으로써.", "-므로 (omdat) en 써 horen niet samen. Je kunt 써 alleen na -ㅁ으로 zetten.", "으로서 betekent \"als, in de rol van\". Voor een middel schrijf je 으로써.", "Er ontbreekt de -ㅁ: eerst een zelfstandig naamwoord maken (함)."] },
    { type: "mc", q: "이 지역에는 노인이 많이 ___ 의료 시설이 더 필요하다.",
      options: ["살므로", "살으므로", "사므로", "살아서므로"], answer: 0,
      why: ["Goed: een stam op ㄹ krijgt -므로, en de ㄹ blijft staan.", "Na ㄹ komt -므로, niet -으므로.", "De ㄹ valt niet weg vóór -므로.", "-아서 en -므로 kun je niet stapelen."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["날씨가 추워서 옷을 따뜻하게 입으세요.", "날씨가 추우니까 옷을 따뜻하게 입으세요.", "날씨가 추우므로 옷을 따뜻하게 입으십시오.", "날씨가 춥기 때문에 감기에 걸리기 쉽다."], answer: 0,
      why: ["Goed: na -아서/어서 volgt geen opdracht. Zeg 추우니까.", "Dit klopt: -(으)니까 kan een verzoek krijgen.", "Dit klopt: zo staat het op een officieel bericht.", "Dit klopt: -기 때문에 met een gewone bewering."] },
    { type: "fill", q: "눈이 많이 ___ 운전에 각별히 주의하십시오. (Omdat er veel sneeuw valt (오다), wees extra voorzichtig bij het rijden.)",
      answers: ["오므로"], hint: "오- eindigt op een klinker. Welke vorm van -(으)므로 komt erachter?",
      why: "오- + -므로 = 오므로. Op een officieel bericht kan daarna -십시오 volgen." },
    { type: "order", q: "Zet in de goede volgorde: \"Het is erg droog, dus pas op met vuur.\" (bordje)",
      tokens: [["날씨가", "nalssiga"], ["매우", "maeu"], ["건조하므로", "geonjohameuro"], ["불에 주의하십시오", "bure juuihasipsio"]] },
    { type: "open", q: "Vertaal als formeel bericht: \"Omdat er veel mensen zijn, kan het lang duren.\"",
      model: ["사람이 많으므로 시간이 오래 걸릴 수 있습니다.", "이용자가 많으므로 오래 기다리실 수 있습니다.", "방문객이 많으므로 시간이 오래 걸릴 수 있습니다."],
      tip: "Check: 많- eindigt op een medeklinker, dus 많으므로. En eindigt de zin formeel (-습니다)?" },
    { type: "open", q: "Zeg dit in spreektaal tegen een collega: 비가 많이 왔으므로 행사가 취소되었다.",
      model: ["비가 많이 와서 행사가 취소됐어요.", "비가 많이 와서 행사가 취소됐대요.", "비가 많이 왔기 때문에 행사가 취소됐어요."],
      tip: "Check: -아서/어서 zonder verleden tijd ervoor (와서, niet 왔어서), of -기 때문에. En een -요-einde." }
  ],
  review: [
    { type: "mc", q: "이 제품은 가격이 ___ 많이 팔린다. (Dit product verkoopt goed, omdat het goedkoop is.)",
      options: ["싸므로", "싸으므로", "싼므로", "싸서므로"], answer: 0,
      why: ["Goed: 싸- eindigt op een klinker, dus -므로.", "Na een klinker komt -므로, niet -으므로.", "-므로 komt direct na de stam, niet na -ㄴ.", "-아서 en -므로 kun je niet stapelen."] },
    { type: "mc", q: "\"Omdat hij student is, kan hij korting krijgen.\" (schrijftaal)",
      options: ["그는 학생이므로 할인을 받을 수 있다.", "그는 학생므로 할인을 받을 수 있다.", "그는 학생으므로 할인을 받을 수 있다.", "그는 학생인므로 할인을 받을 수 있다."], answer: 0,
      why: ["Goed: na een naamwoord op een medeklinker gebruik je 이므로.", "Na een medeklinker is 이 nodig: 학생이므로.", "Na een naamwoord komt 이므로, niet 으므로.", "-므로 komt na 이-, niet na 인."] },
    { type: "mc", q: "이 방법은 비용이 많이 ___ 현실적이지 않다. (Deze methode is niet realistisch, omdat ze veel kost.)",
      options: ["들므로", "들으므로", "드므로", "들어서므로"], answer: 0,
      why: ["Goed: 들다 heeft een stam op ㄹ, dus -므로 en de ㄹ blijft.", "Na ㄹ komt -므로, niet -으므로.", "De ㄹ valt niet weg vóór -므로.", "-아서 en -므로 kun je niet stapelen."] }
  ]
})
