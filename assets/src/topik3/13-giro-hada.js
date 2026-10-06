({
  id: "13", slug: "giro-hada", title: "-기로 하다", sub: "Besluiten en afspreken",
  canDo: "Je kunt nu zeggen wat je besloten of afgesproken hebt met -기로 했어요, een afspraak voorstellen met -기로 해요, en je weet wanneer -(으)려고 하다 of -게 되다 beter past.",
  guess: {
    q: "\"Ik heb met mijn vriend afgesproken dat we elkaar morgen zien.\" Welke zin klopt, denk je?",
    options: ["친구하고 내일 만나기로 했어요.", "친구하고 내일 만나기를 했어요.", "친구하고 내일 만났기로 했어요.", "친구하고 내일 만나기로 됐어요."], answer: 0,
    why: ["Goed: stam + 기로 + 했어요: de afspraak is gemaakt.", "Het partikel is 로, niet 를: 만나기로.", "In het 기-deel komt geen verleden tijd. Die zit in 했어요.", "Een besluit of afspraak maak je zelf: 하다, niet 되다."]
  },
  problem: "In het Nederlands zeg je \"ik heb besloten om ...\" of \"we hebben afgesproken dat ...\". In het Koreaans zet je -기로 achter het werkwoord, en daarna 하다. Het besluit is genomen en staat vast. Dat is sterker dan een plan met -(으)려고 하다.",
  pattern: [
    { l: "wat", v: "운동을", c: 1 }, { l: "stam", v: "하", c: 3 }, { l: "-기로", v: "기로", c: 2, key: true }, { l: "하다", v: "했어요", c: 4, key: true }
  ],
  patternCap: "Stam + 기로 했어요 (besloten, afgesproken) · Stam + 기로 해요 (laten we afspreken) · Ook: -기로 약속하다 / 결정하다 / 결심하다",
  rules: [
    "-기로 komt direct na elke stam, met of zonder 받침: 가기로, 먹기로, 만들기로.",
    "Meestal zeg je 했어요: het besluit is genomen. Het plan zelf kan in de toekomst liggen: 내일 가기로 했어요.",
    "In het 기-deel komt geen verleden tijd: 가기로 했어요, nooit 갔기로.",
    "Besluit je iets níet te doen? Ontken in het 기-deel: 안 가기로 했어요 of 가지 않기로 했어요.",
    "In plaats van 하다 kun je 약속하다, 결정하다 of 결심하다 gebruiken: 같이 가기로 약속했어요."
  ],
  pitfall: "-기로 해요 (tegenwoordige tijd) is meestal een voorstel: \"laten we afspreken dat ...\". Wil je vertellen wat je besloten hebt, zeg dan -기로 했어요.",
  examples: [
    { cn: "올해부터 운동을 하기로 했어요.", py: "Olhaebuteo undongeul hagiro haesseoyo.", nl: "Ik heb besloten om vanaf dit jaar te sporten." },
    { cn: "친구하고 토요일에 영화를 보기로 했어요.", py: "Chinguhago toyoire yeonghwareul bogiro haesseoyo.", nl: "Ik heb met een vriend afgesproken om zaterdag een film te kijken." },
    { cn: "이제 담배를 안 피우기로 했어요.", py: "Ije dambaereul an piugiro haesseoyo.", nl: "Ik heb besloten niet meer te roken." },
    { cn: "그럼 내일 세 시에 만나기로 해요.", py: "Geureom naeil se sie mannagiro haeyo.", nl: "Laten we dan afspreken: morgen om drie uur." }
  ],
  nuance: [
    { h: "-기로 하다 of -(으)려고 하다?",
      p: "-(으)려고 하다 is een plan of voornemen. Het kan nog veranderen. -기로 했어요 is een besluit of afspraak die vaststaat. Vaak hebben anderen het al gehoord. Twijfel je nog? Gebruik -(으)려고 해요.",
      ex: [
        { cn: "여름에 제주도에 가려고 해요.", py: "Yeoreume Jejudoe garyeogo haeyo.", nl: "Ik ben van plan om in de zomer naar Jeju te gaan." },
        { cn: "여름에 제주도에 가기로 했어요.", py: "Yeoreume Jejudoe gagiro haesseoyo.", nl: "Ik heb besloten in de zomer naar Jeju te gaan. (staat vast)" }
      ] },
    { h: "-기로 하다 of -게 되다?",
      p: "Bij -기로 하다 kies je zelf, of samen met anderen. Bij -게 되다 bepalen de omstandigheden of andere mensen het. Je baas, de school of het toeval. Zo hoor je meteen wie er besliste.",
      ex: [
        { cn: "제가 부산 지사에 가기로 했어요.", py: "Jega Busan jisae gagiro haesseoyo.", nl: "Ik heb (zelf) besloten naar de vestiging in Busan te gaan." },
        { cn: "회사 때문에 부산 지사에 가게 됐어요.", py: "Hoesa ttaemune Busan jisae gage dwaesseoyo.", nl: "Door het bedrijf moet ik naar de vestiging in Busan." }
      ] },
    { h: "Afspreken en register",
      p: "Met -기로 해요 of -기로 합시다 stel je een afspraak voor. In formele situaties zeg je -기로 했습니다. In nieuws en verslagen lees je vaak -기로 했다: een officieel besluit van een groep of de overheid.",
      ex: [
        { cn: "우리 매주 금요일에 같이 저녁 먹기로 해요.", py: "Uri maeju geumyoire gachi jeonyeok meokgiro haeyo.", nl: "Laten we afspreken elke vrijdag samen te eten." },
        { cn: "학교는 다음 달부터 도서관을 밤 열 시까지 열기로 했다.", py: "Hakgyoneun daeum dalbuteo doseogwaneul bam yeol sikkaji yeolgiro haetda.", nl: "De school heeft besloten de bibliotheek vanaf volgende maand tot tien uur 's avonds open te houden." }
      ] }
  ],
  mistakes: [
    { wrong: "어제 친구랑 내일 만나기로 해요.", right: "어제 친구랑 내일 만나기로 했어요.", why: "Een afspraak die al gemaakt is, vertel je met 했어요. 해요 is een voorstel." },
    { wrong: "운동을 했기로 했어요.", right: "운동을 하기로 했어요.", why: "Vóór -기로 staat de kale stam, zonder verleden tijd." },
    { wrong: "술을 마시기로 안 했어요.", right: "술을 안 마시기로 했어요.", why: "Wil je zeggen dat je besloot níet te drinken? Zet 안 in het 기-deel. 마시기로 안 했어요 = je hebt het niet besloten." },
    { wrong: "아버지 일 때문에 어렸을 때 미국에서 살기로 했어요.", right: "아버지 일 때문에 어렸을 때 미국에서 살게 됐어요.", why: "Als kind koos je dat niet zelf. Door omstandigheden = -게 되다." }
  ],
  vocab: [
    ["-기로 하다", "-giro hada", "besluiten; afspreken"], ["결심하다", "gyeolsimhada", "vast besluiten"], ["약속하다", "yaksokada", "afspreken, beloven"],
    ["살을 빼다", "sareul ppaeda", "afvallen"], ["계단", "gyedan", "trap"], ["이용하다", "iyonghada", "gebruiken"],
    ["대신", "daesin", "in plaats van"], ["동료", "dongnyo", "collega"], ["등산하다", "deungsanhada", "bergwandelen"], ["담배를 피우다", "dambaereul piuda", "roken"]
  ],
  dialogue: [
    ["A", "주말에 뭐 할 거예요?", "Jumare mwo hal geoyeyo?", "Wat ga je dit weekend doen?"],
    ["B", "지민 씨하고 등산하기로 했어요.", "Jimin ssihago deungsanhagiro haesseoyo.", "Ik heb met Jimin afgesproken om te gaan bergwandelen."],
    ["A", "좋네요. 저도 같이 가도 돼요?", "Jonneyo. Jeodo gachi gado dwaeyo?", "Leuk. Mag ik ook mee?"],
    ["B", "물론이죠. 아침 여덟 시에 학교 앞에서 만나기로 했어요.", "Mullonijyo. Achim yeodeol sie hakgyo apeseo mannagiro haesseoyo.", "Natuurlijk. We spreken om acht uur 's ochtends af voor de school."],
    ["A", "그럼 점심 도시락은 제가 준비하기로 해요.", "Geureom jeomsim dosirageun jega junbihagiro haeyo.", "Laten we dan afspreken dat ik de lunch maak."]
  ],
  reading: {
    title: "건강을 위한 결심",
    lines: [
      { cn: "지난달에 건강 검진을 받았어요.", py: "Jinandare geongang geomjineul badasseoyo.", nl: "Vorige maand had ik een medische keuring." },
      { cn: "의사 선생님이 살을 좀 빼야 한다고 하셨어요.", py: "Uisa seonsaengnimi sareul jom ppaeya handago hasyeosseoyo.", nl: "De dokter zei dat ik wat moest afvallen." },
      { cn: "그래서 저는 생활을 바꾸기로 했어요.", py: "Geuraeseo jeoneun saenghwareul bakkugiro haesseoyo.", nl: "Daarom besloot ik mijn leven te veranderen." },
      { cn: "먼저 엘리베이터 대신 계단을 이용하기로 했어요.", py: "Meonjeo ellibeiteo daesin gyedaneul iyonghagiro haesseoyo.", nl: "Eerst besloot ik de trap te nemen in plaats van de lift." },
      { cn: "그리고 밤에는 라면을 먹지 않기로 결심했어요.", py: "Geurigo bameneun ramyeoneul meokji ankiro gyeolsimhaesseoyo.", nl: "En ik besloot 's avonds geen ramen meer te eten." },
      { cn: "회사 동료 민호 씨도 같이 운동하기로 했어요.", py: "Hoesa dongnyo Minho ssido gachi undonghagiro haesseoyo.", nl: "Mijn collega Minho besloot ook mee te sporten." },
      { cn: "우리는 매일 점심시간에 삼십 분씩 걷기로 약속했어요.", py: "Urineun maeil jeomsimsigane samsip bunssik geotgiro yaksokaesseoyo.", nl: "We spraken af om elke dag in de lunchpauze dertig minuten te wandelen." },
      { cn: "한 달 후에 삼 킬로그램이 빠졌어요.", py: "Han dal hue sam killogeuraemi ppajyeosseoyo.", nl: "Na een maand was ik drie kilo kwijt." },
      { cn: "다음 달에는 수영도 배우기로 했어요.", py: "Daeum dareneun suyeongdo baeugiro haesseoyo.", nl: "Volgende maand ga ik ook leren zwemmen. Dat heb ik besloten." }
    ],
    questions: [
      { type: "mc", q: "Wat besloot de schrijver níet meer te doen?",
        options: ["'s Avonds ramen eten.", "De trap nemen.", "In de lunchpauze wandelen.", "Zwemles nemen."], answer: 0,
        why: ["Goed: 밤에는 라면을 먹지 않기로 결심했어요.", "De trap nemen besloot de schrijver juist wel.", "Wandelen spraken ze juist af.", "Zwemmen gaat de schrijver juist leren."] },
      { type: "mc", q: "Met wie wandelt de schrijver?",
        options: ["Met een collega, Minho.", "Met de dokter.", "Met een vriend, Jimin.", "Alleen."], answer: 0,
        why: ["Goed: 회사 동료 민호 씨도 같이 운동하기로 했어요.", "De dokter gaf alleen advies.", "Jimin komt in de dialoog voor, niet in deze tekst.", "Er staat 우리는: ze wandelen samen."] },
      { type: "mc", q: "우리는 매일 걷기로 약속했어요. Wat betekent -기로 약속했어요 hier?",
        options: ["Ze hebben samen afgesproken elke dag te wandelen.", "Ze wandelden vroeger elke dag.", "Ze zijn misschien van plan te wandelen.", "Ze moeten van de dokter wandelen."], answer: 0,
        why: ["Goed: -기로 약속하다 = samen vast afspreken.", "Het gaat om een afspraak, niet om een gewoonte uit het verleden.", "Een los plan zou -(으)려고 해요 zijn. Dit staat vast.", "Het idee kwam van de dokter, maar het besluit namen ze zelf."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik heb besloten Koreaans te leren.\"",
      options: ["한국어를 배우기로 했어요.", "한국어를 배웠기로 했어요.", "한국어를 배우기로 해요.", "한국어를 배우기 했어요."], answer: 0,
      why: ["Goed: stam + 기로 했어요.", "In het 기-deel komt geen verleden tijd.", "해요 is een voorstel: \"laten we afspreken\".", "Na -기 ontbreekt 로."] },
    { type: "mc", q: "오늘부터 커피를 ___ 했어요. (Ik heb besloten vanaf vandaag geen koffie meer te drinken.)",
      options: ["안 마시기로", "마시기로 안", "안 마셨기로", "못 마시기로"], answer: 0,
      why: ["Goed: de ontkenning zit in het besluit: 안 마시기로 했어요.", "마시기로 안 했어요 = je hebt níet besloten om te drinken.", "In het 기-deel komt geen verleden tijd.", "못 is \"niet kunnen\". Een eigen besluit ontken je met 안."] },
    { type: "mc", q: "\"Ik ben van plan volgend jaar naar Korea te gaan, maar het is nog niet zeker.\"",
      options: ["내년에 한국에 가려고 해요.", "내년에 한국에 가기로 했어요.", "내년에 한국에 가게 됐어요.", "내년에 한국에 가기로 해요."], answer: 0,
      why: ["Goed: een plan dat nog kan veranderen = -(으)려고 해요.", "-기로 했어요 klinkt als een vast besluit.", "-게 됐어요 = de omstandigheden beslisten het.", "-기로 해요 is een voorstel aan iemand anders."] },
    { type: "mc", q: "Je baas stuurt je naar Busan. Je had geen keus. Welke zin past?",
      options: ["부산으로 가게 됐어요.", "부산으로 가기로 했어요.", "부산으로 가려고 해요.", "부산으로 가기로 해요."], answer: 0,
      why: ["Goed: anderen of de omstandigheden beslistenn = -게 되다.", "-기로 했어요 betekent dat je het zelf besloot.", "-(으)려고 해요 is jouw eigen plan.", "-기로 해요 is een voorstel."] },
    { type: "mc", q: "Je vriend vraagt wanneer jullie elkaar zien. Je stelt voor: \"Laten we zaterdag afspreken.\"",
      options: ["토요일에 만나기로 해요.", "토요일에 만나기로 했어요.", "토요일에 만났기로 해요.", "토요일에 만나기를 해요."], answer: 0,
      why: ["Goed: -기로 해요 = een voorstel om iets af te spreken.", "했어요 vertelt over een afspraak die al gemaakt is.", "In het 기-deel komt geen verleden tijd.", "Het partikel is 로, niet 를."] },
    { type: "order", q: "Zet in de goede volgorde: \"Omdat het regende, besloten we thuis te blijven.\"",
      tokens: [["비가", "biga"], ["와서", "waseo"], ["집에", "jibe"], ["있기로", "itgiro"], ["했어요.", "haesseoyo."]] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb vast besloten vanaf vandaag niet meer te roken.\"",
      tokens: [["오늘부터 담배를", "oneulbuteo dambaereul"], ["안", "an"], ["피우기로", "piugiro"], ["결심했어요.", "gyeolsimhaesseoyo."]] },
    { type: "fill", q: "우리는 매주 금요일에 같이 저녁을 먹___ 했어요. (We hebben afgesproken elke vrijdag samen te eten.)", answers: ["기로"],
      hint: "Welke vorm komt tussen de stam en 했어요?", why: "Stam + 기로 했어요: 먹기로 했어요 = we hebben het afgesproken." },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["어제 운동을 했기로 했어요.", "내일부터 운동하기로 했어요.", "매일 운동하기로 결심했어요.", "친구와 같이 운동하기로 약속했어요."], answer: 0,
      why: ["Goed: dit is fout. Vóór -기로 staat geen verleden tijd: 하기로.", "Dit klopt: een besluit over de toekomst.", "Dit klopt: 결심하다 in plaats van 하다.", "Dit klopt: 약속하다 voor een afspraak met iemand."] },
    { type: "mc", q: "Een nieuwslezer zegt: \"De regering heeft besloten de belasting te verlagen.\"",
      options: ["정부는 세금을 내리기로 했습니다.", "정부는 세금을 내리기로 했어.", "정부는 세금을 내리기로 해요.", "정부는 세금을 내렸기로 했습니다."], answer: 0,
      why: ["Goed: formeel nieuws = -기로 했습니다.", "했어 is informele spreektaal. Dat past niet in het nieuws.", "해요 is een voorstel, geen besluit dat al genomen is.", "In het 기-deel komt geen verleden tijd."] },
    { type: "open", q: "Vertaal: \"Ik heb besloten elke dag te wandelen.\"", model: ["매일 걷기로 했어요.", "매일 산책하기로 했어요.", "매일 걷기로 결심했어요."],
      tip: "Check: stam + 기로 했어요, zonder verleden tijd in het 기-deel." },
    { type: "open", q: "Vertaal: \"We hebben afgesproken om zeven uur voor het station.\"", model: ["일곱 시에 역 앞에서 만나기로 했어요.", "우리는 일곱 시에 역 앞에서 만나기로 했어요."],
      tip: "Check: 만나기로 했어요 (al afgesproken), en 역 앞에서 met 에서." }
  ],
  review: [
    { type: "mc", q: "\"We hebben besloten samen te reizen.\"",
      options: ["같이 여행하기로 했어요.", "같이 여행했기로 했어요.", "같이 여행하기를 했어요.", "같이 여행하기로 됐어요."], answer: 0,
      why: ["Goed: stam + 기로 했어요.", "In het 기-deel komt geen verleden tijd.", "Het partikel is 로, niet 를.", "Een eigen besluit is 하다, niet 되다."] },
    { type: "mc", q: "이번 휴가에는 집에서 ___ 했어요. (Ik heb besloten deze vakantie thuis uit te rusten.)",
      options: ["쉬기로", "쉬기", "쉬었기로", "쉬기에"], answer: 0,
      why: ["Goed: 쉬 + 기로 했어요.", "Na -기 ontbreekt 로.", "In het 기-deel komt geen verleden tijd.", "Het partikel is 로, niet 에."] },
    { type: "mc", q: "Je vader kreeg werk in Seoul. Daarom ging het hele gezin daar wonen. Welke zin past?",
      options: ["아버지 일 때문에 서울에서 살게 됐어요.", "아버지 일 때문에 서울에서 살기로 해요.", "아버지 일 때문에 서울에서 살았기로 했어요.", "아버지 일 때문에 서울에서 살기를 됐어요."], answer: 0,
      why: ["Goed: de omstandigheden beslisten het = -게 되다.", "-기로 해요 is een voorstel, geen verhaal over wat gebeurde.", "In het 기-deel komt geen verleden tijd.", "-게 되다 heeft -게 nodig, niet -기를."] }
  ]
})
