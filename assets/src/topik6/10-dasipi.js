({
  id: "10", slug: "dasipi", title: "-다시피", sub: "Zoals u weet, en: zo goed als",
  canDo: "Je kunt nu met -다시피 verwijzen naar wat de luisteraar al weet of ziet (아시다시피, 보시다시피), je zegt met -다시피 하다 dat iets bijna zo is, en je kiest tussen -다시피, -는 바와 같이 en -듯이.",
  guess: {
    q: "Een makelaar zegt: \"Zoals u ziet, is de kamer erg ruim.\" Welke zin klopt, denk je?",
    options: ["보시다시피 방이 아주 넓습니다.", "보시는다시피 방이 아주 넓습니다.", "보실다시피 방이 아주 넓습니다.", "보셔다시피 방이 아주 넓습니다."], answer: 0,
    why: ["Goed: stam (+ 시) + -다시피, zonder iets ertussen.", "-다시피 komt direct na de stam. Er komt geen -는 tussen.", "-ㄹ hoort niet vóór -다시피.", "-다시피 komt na de stam, niet na de -아/어-vorm."]
  },
  problem: "In een presentatie wil je verwijzen naar iets wat het publiek al weet of ziet: \"zoals u weet\", \"zoals u ziet\". Daarvoor heb je -다시피. Met een ander werkwoord en 하다 betekent het iets anders: \"zo goed als, praktisch\". 굶다시피 했다: ik heb zo goed als niets gegeten.",
  pattern: [
    { l: "zoals u ...", v: "보시", c: 1 }, { l: "다시피", v: "다시피", c: 2, key: true },
    { l: "mededeling", v: "방이 아주 넓습니다", c: 4 }
  ],
  patternCap: "Weten/zien-werkwoord + -다시피 + zin (아시다시피, 보시다시피, 말씀드렸다시피). Ander werkwoord + -다시피 하다 = bijna, praktisch (살다시피 하다). Schrijftaal: -는 바와 같이",
  rules: [
    "Stam + -다시피, zonder verschil tussen klinker en medeklinker: 알다시피, 보다시피, 듣다시피. Beleefd: 아시다시피, 보시다시피.",
    "Betekenis 1 (zoals je weet/ziet) alleen met werkwoorden van weten, waarnemen en zeggen: 알다, 보다, 듣다, 느끼다, 배우다, 말하다. Verleden kan: 말씀드렸다시피.",
    "Betekenis 2 (bijna): werkwoord + -다시피 하다: 굶다시피 하다, 살다시피 하다. Of met een ander werkwoord: 뛰다시피 걸었다.",
    "Geen -는 of -ㄴ vóór -다시피: 아는다시피 is fout.",
    "Register: 아시다시피 en 보시다시피 in formeel spreken. Tegen een vriend: 너도 알다시피. In formele tekst: -는 바와 같이."
  ],
  pitfall: "Betekenis 1 werkt alleen met werkwoorden als 알다, 보다 en 듣다. Met andere werkwoorden betekent -다시피 \"bijna\": 살다시피 했다 is niet \"zoals hij woonde\", maar \"hij woonde er praktisch\".",
  examples: [
    { cn: "보시다시피 이 방은 햇빛이 잘 들어옵니다.", py: "Bosidasipi i bangeun haetbichi jal deureoomnida.", nl: "Zoals u ziet, valt er in deze kamer veel zonlicht binnen." },
    { cn: "아시다시피 올해는 경기가 좋지 않습니다.", py: "Asidasipi olhaeneun gyeonggiga jochi anseumnida.", nl: "Zoals u weet, gaat het dit jaar niet goed met de economie." },
    { cn: "시험 기간에는 도서관에서 살다시피 했다.", py: "Siheom giganeneun doseogwaneseo saldasipi haetda.", nl: "Tijdens de examenperiode woonde ik praktisch in de bibliotheek." },
    { cn: "돈이 없어서 일주일 동안 굶다시피 지냈다.", py: "Doni eopseoseo iljuil dongan gumdasipi jinaetda.", nl: "Ik had geen geld, dus ik heb een week lang zo goed als niets gegeten." }
  ],
  nuance: [
    { h: "-다시피 of -는 바와 같이?",
      p: "Beide betekenen \"zoals\" bij weten, zien en zeggen. -는 바와 같이 is formele schrijftaal: scripties, rapporten, officiële teksten. Het neemt -는 (heden) of -(으)ㄴ (verleden) vóór 바. -다시피 komt direct na de stam en past ook in formeel spreken. Betekenis 2 (bijna) heeft 바와 같이 niet.",
      ex: [
        { cn: "앞에서 살펴본 바와 같이 청년 실업 문제는 심각하다.", py: "Apeseo salpyeobon bawa gachi cheongnyeon sireop munjeneun simgakada.", nl: "Zoals hierboven besproken, is de jeugdwerkloosheid een ernstig probleem. (scriptie)" },
        { cn: "앞에서 말씀드렸다시피 청년 실업 문제가 심각합니다.", py: "Apeseo malsseumdeuryeotdasipi cheongnyeon sireop munjega simgakamnida.", nl: "Zoals ik al zei, is de jeugdwerkloosheid een ernstig probleem. (presentatie)" }
      ] },
    { h: "-다시피 하다 of -듯이?",
      p: "-다시피 하다 zegt dat je iets bijna echt doet: je woont er bijna, je eet bijna niets. -듯이 vergelijkt met iets anders: \"alsof, zoals\". Geld uitgeven als water is een vergelijking, dus -듯이. Let op: bij 알다 hoor je ook 알듯이, maar 아시다시피 en 보시다시피 zijn de vaste formules.",
      ex: [
        { cn: "그는 요즘 회사에서 살다시피 한다.", py: "Geuneun yojeum hoesaeseo saldasipi handa.", nl: "Hij woont tegenwoordig praktisch op kantoor." },
        { cn: "그는 돈을 물 쓰듯이 쓴다.", py: "Geuneun doneul mul sseudeusi sseunda.", nl: "Hij smijt met geld (letterlijk: hij gebruikt geld zoals water)." }
      ] },
    { h: "Register: beleefd, informeel en geschreven",
      p: "Tegen een publiek of een klant zeg je 아시다시피 of 보시다시피, met -시-. Tegen een vriend zeg je 너도 알다시피 of 보다시피, zonder -시-. Over jezelf gebruik je nooit -시-. In een scriptie of rapport schrijf je liever -는 바와 같이.",
      ex: [
        { cn: "너도 알다시피 나 요즘 좀 바빠.", py: "Neodo aldasipi na yojeum jom bappa.", nl: "Zoals je weet, heb ik het nu een beetje druk. (tegen een vriend)" }
      ] }
  ],
  mistakes: [
    { wrong: "아는다시피 이번 주에 시험이 있어요.", right: "알다시피 이번 주에 시험이 있어요.", why: "-다시피 komt direct na de stam: 알- + 다시피. Er komt geen -는 tussen." },
    { wrong: "앞에서 살펴보는 바와 같이 문제가 심각하다.", right: "앞에서 살펴본 바와 같이 문제가 심각하다.", why: "Je verwijst naar iets wat al besproken is. Dan staat er -(으)ㄴ vóór 바." },
    { wrong: "그는 돈을 물 쓰다시피 쓴다.", right: "그는 돈을 물 쓰듯이 쓴다.", why: "Een vergelijking met iets anders (water) maak je met -듯이. -다시피 하다 is \"bijna echt doen\"." },
    { wrong: "보시다시피 나 요즘 좀 바빠.", right: "보다시피 나 요즘 좀 바빠.", why: "Tegen een vriend in 반말 gebruik je geen -시-. Zeg 보다시피." }
  ],
  vocab: [
    ["-다시피", "-dasipi", "zoals (u weet/ziet); bijna, zo goed als"], ["경기", "gyeonggi", "economie, conjunctuur"],
    ["굶다", "gumda", "niet eten, honger lijden"], ["분기", "bungi", "kwartaal"],
    ["매출", "maechul", "omzet, verkoop"], ["도표", "dopyo", "grafiek, tabel"],
    ["출시", "chulsi", "lancering (van een product)"], ["감소하다", "gamsohada", "afnemen, dalen"],
    ["살펴보다", "salpyeoboda", "bekijken, onderzoeken"], ["홍보", "hongbo", "promotie, pr"]
  ],
  dialogue: [
    ["A", "민준 씨, 요즘 얼굴 보기가 힘드네요.", "Minjun ssi, yojeum eolgul bogiga himdeuneyo.", "Minjun, ik zie je de laatste tijd bijna nooit."],
    ["B", "보시다시피 요즘 프로젝트 때문에 정신이 없어요.", "Bosidasipi yojeum peurojekteu ttaemune jeongsini eopseoyo.", "Zoals je ziet, heb ik het door het project ontzettend druk."],
    ["A", "밥은 잘 챙겨 먹어요?", "Babeun jal chaenggyeo meogeoyo?", "Eet je wel goed?"],
    ["B", "아니요, 일주일째 굶다시피 하고 있어요.", "Aniyo, iljuiljjae gumdasipi hago isseoyo.", "Nee, ik eet al een week zo goed als niets."],
    ["A", "그러다 쓰러져요. 오늘 점심은 같이 먹어요.", "Geureoda sseureojyeoyo. Oneul jeomsimeun gachi meogeoyo.", "Zo val je nog om. Laten we vandaag samen lunchen."],
    ["B", "좋아요. 아시다시피 제가 매운 음식을 좋아하니까 떡볶이 어때요?", "Joayo. Asidasipi jega maeun eumsigeul joahanikka tteokbokki eottaeyo?", "Goed. Je weet dat ik van pittig eten houd. Wat dacht je van tteokbokki?"]
  ],
  reading: {
    title: "지난 분기 판매 보고",
    lines: [
      { cn: "오늘은 지난 분기 판매 결과를 말씀드리겠습니다.", py: "Oneureun jinan bungi panmae gyeolgwareul malsseumdeurigetseumnida.", nl: "Vandaag presenteer ik de verkoopresultaten van het afgelopen kwartaal." },
      { cn: "아시다시피 올해 초부터 시장 경기가 좋지 않았습니다.", py: "Asidasipi olhae chobuteo sijang gyeonggiga jochi anatseumnida.", nl: "Zoals u weet, ging het sinds begin dit jaar niet goed met de markt." },
      { cn: "그런데 화면의 도표에서 보시다시피 우리 신제품의 매출은 오히려 크게 늘었습니다.", py: "Geureonde hwamyeonui dopyoeseo bosidasipi uri sinjepumui maechureun ohiryeo keuge neureotseumnida.", nl: "Maar zoals u in de grafiek op het scherm ziet, is de verkoop van ons nieuwe product juist sterk gestegen." },
      { cn: "이는 개발팀이 출시 전 석 달 동안 회사에서 살다시피 하며 품질을 높인 덕분입니다.", py: "Ineun gaebaltimi chulsi jeon seok dal dongan hoesaeseo saldasipi hamyeo pumjireul nopin deokbunimnida.", nl: "Dat komt doordat het ontwikkelteam drie maanden voor de lancering praktisch op kantoor woonde en de kwaliteit verbeterde." },
      { cn: "반면 기존 제품의 판매는 조금 감소했습니다.", py: "Banmyeon gijon jepumui panmaeneun jogeum gamsohaetseumnida.", nl: "De verkoop van de bestaande producten is daarentegen iets gedaald." },
      { cn: "앞에서 말씀드렸다시피 시장 상황은 여전히 어렵습니다.", py: "Apeseo malsseumdeuryeotdasipi sijang sanghwangeun yeojeonhi eoryeopseumnida.", nl: "Zoals ik al zei, blijft de situatie op de markt moeilijk." },
      { cn: "따라서 다음 분기에는 신제품 홍보에 더 집중하고자 합니다.", py: "Ttaraseo daeum bungieneun sinjepum hongboe deo jipjunghagoja hamnida.", nl: "Daarom willen we ons volgend kwartaal meer richten op de promotie van het nieuwe product." }
    ],
    questions: [
      { type: "mc", q: "Wat gebeurde er met de verkoop van het nieuwe product?",
        options: ["Die steeg sterk.", "Die daalde een beetje.", "Die bleef gelijk.", "Het product is nog niet gelanceerd."], answer: 0,
        why: ["Goed: 신제품의 매출은 오히려 크게 늘었습니다.", "Dat geldt voor de bestaande producten (기존 제품).", "De tekst zegt dat de verkoop sterk steeg.", "Het product is al gelanceerd: er is al omzet."] },
      { type: "mc", q: "Wat wil het bedrijf volgend kwartaal doen?",
        options: ["Meer inzetten op promotie van het nieuwe product.", "Stoppen met de bestaande producten.", "Een nieuw ontwikkelteam aannemen.", "De prijzen verlagen."], answer: 0,
        why: ["Goed: 신제품 홍보에 더 집중하고자 합니다.", "Over stoppen staat niets in de tekst.", "Over een nieuw team staat niets in de tekst.", "Over prijzen staat niets in de tekst."] },
      { type: "mc", q: "회사에서 살다시피 하며 ... Wat betekent 살다시피 hier?",
        options: ["Ze woonden praktisch op kantoor: ze waren er bijna altijd.", "Zoals u weet, woonden ze op kantoor.", "Ze woonden echt op kantoor, met een bed.", "Ze deden alsof ze op kantoor woonden."], answer: 0,
        why: ["Goed: -다시피 하다 met een gewoon werkwoord = bijna, praktisch.", "\"Zoals u weet\" kan alleen met 알다, 보다, 듣다 en dergelijke.", "-다시피 하다 zegt \"bijna\", niet dat ze er echt woonden.", "Het is geen toneelspel: ze waren er echt bijna altijd."] }
    ]
  },
  questions: [
    { type: "mc", q: "___ 이번 회의는 다음 주로 연기되었습니다. (Zoals u weet, is de vergadering uitgesteld tot volgende week.)",
      options: ["아시다시피", "아는다시피", "아신다시피", "알으시다시피"], answer: 0,
      why: ["Goed: 알- + -시- (ㄹ valt weg) + 다시피 = 아시다시피.", "Er komt geen -는 vóór -다시피.", "-다시피 komt na de stam (+ 시), niet na 아신-.", "Bij een ㄹ-stam komt er geen 으: 아시다시피."] },
    { type: "mc", q: "그는 시험 기간에 도서관에서 살다시피 했다. Wat betekent dit?",
      options: ["Hij woonde tijdens de examens praktisch in de bibliotheek.", "Zoals hij weet, woonde hij in de bibliotheek.", "Hij woonde tijdens de examens echt in de bibliotheek.", "Hij deed alsof hij in de bibliotheek woonde."], answer: 0,
      why: ["Goed: -다시피 하다 met 살다 = bijna, praktisch.", "\"Zoals je weet\" kan alleen met werkwoorden als 알다 en 보다.", "-다시피 하다 zegt \"bijna\", niet \"echt\".", "Het is geen toneelspel: hij was er echt bijna altijd."] },
    { type: "mc", q: "In een scriptie: \"Zoals hierboven besproken, ...\"",
      options: ["앞에서 살펴본 바와 같이", "앞에서 살펴보는 바와 같이", "앞에서 살펴볼 바와 같이", "앞에서 살펴본다시피"], answer: 0,
      why: ["Goed: het is al besproken, dus -(으)ㄴ vóór 바와 같이.", "-는 is heden. Het bespreken is al gebeurd.", "-ㄹ wijst naar de toekomst: wat nog besproken wordt.", "-다시피 komt direct na de stam (살펴보다시피), niet na -ㄴ다."] },
    { type: "mc", q: "\"Hij smijt met geld (letterlijk: hij gebruikt geld zoals water).\"",
      options: ["그는 돈을 물 쓰듯이 쓴다.", "그는 돈을 물 쓰다시피 쓴다.", "그는 돈을 물 쓰는 바와 같이 쓴다.", "그는 돈을 물 쓸 듯이 쓴다."], answer: 0,
      why: ["Goed: een vergelijking met iets anders maak je met -듯이.", "-다시피 is \"bijna echt doen\", geen vergelijking met water.", "-는 바와 같이 is \"zoals (bekend/gezegd)\", geen beeldspraak.", "Bij deze vaste vergelijking staat -듯이 direct na de stam: 쓰듯이."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["먹다시피 이 음식은 정말 맛있어요.", "보다시피 나 요즘 좀 바빠.", "들으셨다시피 내일 회의가 취소되었습니다.", "그는 매일 회사에서 밤을 새우다시피 한다."], answer: 0,
      why: ["Goed: \"zoals je eet\" kan niet. Betekenis 1 werkt alleen met weten, zien, horen en zeggen.", "Dit klopt: 보다시피 tegen een vriend.", "Dit klopt: verleden + 다시피 bij 듣다.", "Dit klopt: -다시피 하다 = bijna elke nacht doorwerken."] },
    { type: "mc", q: "Je zegt tegen een vriend: \"Zoals je weet, ben ik vorige maand verhuisd.\"",
      options: ["너도 알다시피 나 지난달에 이사했어.", "너도 아시다시피 나 지난달에 이사했어.", "너도 아는다시피 나 지난달에 이사했어.", "너도 알 다시피 나 지난달에 이사했어."], answer: 0,
      why: ["Goed: tegen een vriend zonder -시-: 알다시피.", "-시- is beleefd. Dat past niet bij 너 en 반말.", "Er komt geen -는 vóór -다시피.", "-다시피 schrijf je vast aan de stam: 알다시피."] },
    { type: "fill", q: "___ 우리 팀은 이번 달 목표를 달성했습니다. (Zoals u ziet, heeft ons team het doel van deze maand gehaald.)",
      answers: ["보시다시피", "보다시피"], hint: "보다 + beleefd -시- + ...",
      why: "보시다시피: stam 보- + -시- + 다시피. Voor een publiek is de beleefde vorm het best." },
    { type: "order", q: "Zet in de goede volgorde: \"Zoals u weet, gaat het dit jaar niet goed met de economie.\"",
      tokens: [["아시다시피", "asidasipi"], ["올해는", "olhaeneun"], ["경기가", "gyeonggiga"], ["좋지 않습니다", "jochi anseumnida"]],
      alt: ["올해는 아시다시피 경기가 좋지 않습니다"] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik had geen geld, dus ik heb een week lang zo goed als niets gegeten.\"",
      tokens: [["돈이 없어서", "doni eopseoseo"], ["일주일 동안", "iljuil dongan"], ["굶다시피", "gumdasipi"], ["지냈다", "jinaetda"]],
      alt: ["일주일 동안 돈이 없어서 굶다시피 지냈다"] },
    { type: "open", q: "Vertaal (presentatie, -습니다): \"Zoals u ziet, is de omzet dit kwartaal gestegen.\"",
      model: ["보시다시피 이번 분기 매출이 늘었습니다.", "보시다시피 이번 분기에 매출이 증가했습니다.", "도표에서 보시다시피 이번 분기 매출이 올랐습니다."],
      tip: "Check: 보시다시피 (met -시-, zonder -는), aan het begin, en een -습니다-einde." },
    { type: "open", q: "Vertaal (gesprek, -요): \"Tijdens de examens woonde ik praktisch in de bibliotheek.\"",
      model: ["시험 기간에 도서관에서 살다시피 했어요.", "시험 때 도서관에서 거의 살다시피 했어요.", "시험 기간에는 도서관에서 살다시피 지냈어요."],
      tip: "Check: 살다 + 다시피 + 하다 (of 지내다), en het verleden aan het einde." }
  ],
  review: [
    { type: "mc", q: "___ 이 제품은 크기가 작고 가볍습니다. (Zoals u ziet, is dit product klein en licht.)",
      options: ["보시다시피", "보신다시피", "보시는다시피", "보실다시피"], answer: 0,
      why: ["Goed: 보- + -시- + 다시피.", "-다시피 komt na 보시-, niet na 보신-.", "Er komt geen -는 vóór -다시피.", "-ㄹ hoort niet vóór -다시피."] },
    { type: "mc", q: "\"Hij liep zo snel dat hij bijna rende.\"",
      options: ["그는 뛰다시피 걸었다.", "그는 뛰는 바와 같이 걸었다.", "그는 뛰었다시피 걸었다.", "그는 뛰기다시피 걸었다."], answer: 0,
      why: ["Goed: -다시피 met een gewoon werkwoord = bijna.", "-는 바와 같이 is \"zoals (bekend/gezegd)\", niet \"bijna\".", "Met het verleden krijg je betekenis 1, en \"zoals hij rende\" past niet.", "-다시피 komt direct na de stam, zonder -기."] },
    { type: "mc", q: "표에서 ___ 청년 실업률이 계속 높아지고 있다. (Zoals de tabel laat zien ... ; scriptie)",
      options: ["보는 바와 같이", "볼 바와 같이", "보는 바와 같은", "본다 바와 같이"], answer: 0,
      why: ["Goed: formele schrijftaal: -는 바와 같이.", "-ㄹ wijst naar de toekomst. Je ziet het nu in de tabel.", "같은 staat vóór een zelfstandig naamwoord. Hier volgt een zin, dus 같이.", "Vóór 바 staat de vorm -는, niet -ㄴ다."] }
  ]
})
