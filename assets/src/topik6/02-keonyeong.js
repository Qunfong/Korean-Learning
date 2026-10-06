({
  id: "02", slug: "keonyeong", title: "-기는커녕", sub: "Laat staan, zelfs dat niet",
  canDo: "Je kunt nu zeggen dat iets niet gebeurde en zelfs iets kleiners niet, of juist het tegendeel, met -기는커녕 en (으)ㄴ/는커녕.",
  guess: {
    q: "\"Ik heb niet eens ontbeten, laat staan geluncht.\" Welke zin klopt, denk je?",
    options: ["점심은커녕 아침도 못 먹었어요.", "아침은커녕 점심도 못 먹었어요.", "점심은커녕 아침도 먹었어요.", "점심는커녕 아침도 못 먹었어요."], answer: 0,
    why: ["Goed: het grote ding (lunch) staat vóór 커녕, het kleine ding met 도 en een ontkenning erna.", "De volgorde is omgedraaid. Het ontbijt is wat je zelfs niet deed.", "Na 커녕 volgt een ontkenning: 못 먹었어요.", "점심 eindigt op een medeklinker, dus 은커녕."]
  },
  problem: "Soms gebeurt iets niet, en zelfs iets veel kleiners niet. Of het tegendeel gebeurt. In het Nederlands zeg je \"laat staan\" of \"in plaats van\". In het Koreaans gebruik je -기는커녕. Je hoort er teleurstelling of kritiek in.",
  pattern: [
    { l: "groot ding", v: "사과하", c: 1 }, { l: "커녕", v: "기는커녕", c: 2, key: true },
    { l: "klein ding + 도", v: "인사도", c: 3 }, { l: "ontkenning", v: "안 했어요", c: 4 }
  ],
  patternCap: "Werkwoord + -기는커녕 / naamwoord + 은/는커녕, dan iets kleiners + 도/조차 + ontkenning, of 오히려 + het tegendeel",
  rules: [
    "Werkwoord: stam + -기는커녕 (가기는커녕, 먹기는커녕). Er komt geen tijd vóór -기; de tijd staat aan het eind.",
    "Zelfstandig naamwoord: na een medeklinker 은커녕 (점심은커녕), na een klinker 는커녕 (차는커녕).",
    "Na 커녕 volgt een kleiner ding met 도 of 조차 plus een ontkenning, of 오히려 met het tegendeel.",
    "Register: spreektaal en schrijftaal. In spreektaal hoor je ook -긴커녕. Formeler is -기는 고사하고 / 은/는 고사하고."
  ],
  pitfall: "Zet het grote ding vóór 커녕 en het kleine ding erna. Omgekeerd klopt de logica niet.",
  examples: [
    { cn: "돈을 모으기는커녕 빚만 늘었어요.", py: "Doneul moeugineunkeonyeong binman neureosseoyo.", nl: "In plaats van geld te sparen, kreeg ik alleen meer schulden." },
    { cn: "바빠서 여행은커녕 주말에도 못 쉬어요.", py: "Bappaseo yeohaengeunkeonyeong jumaredo mot swieoyo.", nl: "Ik ben zo druk. Ik kan niet eens in het weekend rusten, laat staan op reis gaan." },
    { cn: "칭찬을 듣기는커녕 오히려 혼났어요.", py: "Chingchaneul deutgineunkeonyeong ohiryeo honnasseoyo.", nl: "Ik kreeg geen lof. Ik kreeg juist op mijn kop." },
    { cn: "그는 사과하기는커녕 인사도 하지 않았다.", py: "Geuneun sagwahagineunkeonyeong insado haji anatda.", nl: "Hij bood geen excuses aan. Hij groette niet eens." }
  ],
  nuance: [
    { h: "-기는커녕 of -는 대신에?",
      p: "-는 대신에 is neutraal: je doet B in plaats van A, vaak uit eigen keuze. -기는커녕 is een klacht: het verwachte A gebeurt niet, en wat er wel gebeurt is slechter of nog minder. Na 커녕 staat daarom vaak 오히려, 만, of 도 met een ontkenning.",
      ex: [
        { cn: "방을 청소하기는커녕 더 어지럽혔어요.", py: "Bangeul cheongsohagineunkeonyeong deo eojireophyeosseoyo.", nl: "In plaats van de kamer op te ruimen, maakte hij er een nog grotere rommel van." },
        { cn: "방을 청소하는 대신에 빨래를 했어요.", py: "Bangeul cheongsohaneun daesine ppallaereul haesseoyo.", nl: "In plaats van de kamer op te ruimen, deed ik de was." }
      ] },
    { h: "Het spiegelbeeld: 은/는 물론",
      p: "N은/는 물론 N도 betekent \"niet alleen A, maar zelfs B\", in positieve zin. N은/는커녕 N도 + ontkenning betekent \"niet eens B, laat staan A\". Let op: bij 물론 staat het makkelijke ding eerst, bij 커녕 het moeilijke.",
      ex: [
        { cn: "그는 한글은 물론 한자도 읽을 수 있다.", py: "Geuneun hangeureun mullon hanjado ilgeul su itda.", nl: "Hij kan niet alleen Hangul lezen, maar zelfs Hanja." },
        { cn: "그는 한자는커녕 한글도 못 읽는다.", py: "Geuneun hanjaneunkeonyeong hangeuldo mot ingneunda.", nl: "Hij kan niet eens Hangul lezen, laat staan Hanja." }
      ] },
    { h: "Register: -긴커녕 en -기는 고사하고",
      p: "In gesprekken kort je -기는커녕 vaak af tot -긴커녕. In kranten en betogen kom je -기는 고사하고 of 은/는 고사하고 tegen. De betekenis is gelijk. Gebruik 커녕 niet voor een neutrale mededeling: het drukt altijd ontevredenheid uit.",
      ex: [
        { cn: "쉬긴커녕 더 바빠졌어요.", py: "Swiginkeonyeong deo bappajyeosseoyo.", nl: "Rusten? Ik heb het juist nog drukker gekregen." },
        { cn: "휴가는 고사하고 주말에도 쉬지 못한다.", py: "Hyuganeun gosahago jumaredo swiji motanda.", nl: "Men kan niet eens in het weekend rusten, laat staan op vakantie gaan." }
      ] }
  ],
  mistakes: [
    { wrong: "그는 나를 도와줬기는커녕 방해만 했어요.", right: "그는 나를 도와주기는커녕 방해만 했어요.", why: "Vóór -기 komt geen tijd. De verleden tijd staat in 했어요." },
    { wrong: "아침은커녕 점심도 못 먹었어요.", right: "점심은커녕 아침도 못 먹었어요.", why: "Het grote ding (de lunch) staat vóór 커녕. Het kleine ding, dat zelfs niet lukte, staat erna." },
    { wrong: "그는 사과하기는커녕 인사도 했다.", right: "그는 사과하기는커녕 인사도 하지 않았다.", why: "Na 커녕 + 도 volgt een ontkenning: 안, 못 of -지 않다." },
    { wrong: "책을 읽기는커녕 영화를 봤어요.", right: "책을 읽는 대신에 영화를 봤어요.", why: "Een neutrale keuze is geen klacht. Dan gebruik je -는 대신에." }
  ],
  vocab: [
    ["-기는커녕", "-gineunkeonyeong", "laat staan, in plaats van (met een slechter resultaat)"], ["빚", "bit", "schuld (geld)"],
    ["혼나다", "honnada", "op je kop krijgen"], ["오히려", "ohiryeo", "juist, integendeel"],
    ["방해하다", "banghaehada", "hinderen, storen"], ["물가", "mulga", "prijspeil, kosten van levensonderhoud"],
    ["대책", "daechaek", "maatregel"], ["부담", "budam", "last, druk"],
    ["저축", "jeochuk", "sparen, spaargeld"], ["호소하다", "hosohada", "klagen over, een beroep doen op"]
  ],
  dialogue: [
    ["A", "새 프로젝트는 잘돼 가요?", "Sae peurojekteuneun jaldwae gayo?", "Gaat het goed met het nieuwe project?"],
    ["B", "잘되기는커녕 시작도 못 했어요.", "Jaldoegineunkeonyeong sijakdo mot haesseoyo.", "Goed? We zijn niet eens begonnen."],
    ["A", "왜요? 팀장님이 도와주지 않으셨어요?", "Waeyo? Timjangnimi dowajuji aneusyeosseoyo?", "Hoezo? Heeft de teamleider niet geholpen?"],
    ["B", "도와주시기는커녕 연락도 안 받으세요.", "Dowajusigineunkeonyeong yeollakdo an badeuseyo.", "Helpen? Hij neemt niet eens op."],
    ["A", "정말 힘들겠네요.", "Jeongmal himdeulgenneyo.", "Dat is echt zwaar."]
  ],
  reading: {
    title: "효과 없는 물가 대책",
    lines: [
      { cn: "정부는 지난해 물가를 잡기 위해 여러 대책을 발표하였다.", py: "Jeongbuneun jinanhae mulgareul japgi wihae yeoreo daechaegeul balpyohayeotda.", nl: "Vorig jaar kondigde de regering diverse maatregelen aan om de prijzen in toom te houden." },
      { cn: "그러나 물가는 내려가기는커녕 오히려 더 크게 올랐다.", py: "Geureona mulganeun naeryeogagineunkeonyeong ohiryeo deo keuge ollatda.", nl: "Maar de prijzen daalden niet. Ze stegen juist nog harder." },
      { cn: "서민들의 부담은 줄기는커녕 날마다 늘어나고 있다.", py: "Seomindeurui budameun julgineunkeonyeong nalmada neureonago itda.", nl: "De last voor gewone burgers wordt niet kleiner, maar groeit elke dag." },
      { cn: "특히 청년층은 저축은커녕 생활비조차 마련하기 어렵다고 호소한다.", py: "Teukhi cheongnyeoncheungeun jeochugeunkeonyeong saenghwalbijocha maryeonhagi eoryeopdago hosohanda.", nl: "Vooral jongeren klagen dat ze niet eens hun levensonderhoud kunnen betalen, laat staan sparen." },
      { cn: "전문가들은 대책이 현실을 제대로 반영하지 못했다고 지적한다.", py: "Jeonmungadeureun daechaegi hyeonsireul jedaero banyeonghaji motaetdago jijeokanda.", nl: "Deskundigen wijzen erop dat de maatregelen de werkelijkheid niet goed weerspiegelden." },
      { cn: "정부는 효과가 나타나려면 시간이 더 필요하다는 입장이다.", py: "Jeongbuneun hyogwaga natanaryeomyeon sigani deo piryohadaneun ipjangida.", nl: "De regering stelt dat er meer tijd nodig is voordat er effect zichtbaar wordt." },
      { cn: "하지만 국민들은 충분한 설명은커녕 간단한 안내조차 받지 못했다며 불만을 드러냈다.", py: "Hajiman gungmindeureun chungbunhan seolmyeongeunkeonyeong gandanhan annaejocha batji motaetdamyeo bulmaneul deureonaetda.", nl: "Maar burgers uitten hun ongenoegen: ze kregen niet eens een korte toelichting, laat staan een volledige uitleg." },
      { cn: "신뢰를 회복하려면 정부가 먼저 상황을 솔직하게 설명해야 할 것이다.", py: "Sillyoereul hoebokaryeomyeon jeongbuga meonjeo sanghwangeul soljikage seolmyeonghaeya hal geosida.", nl: "Om het vertrouwen te herstellen, zal de regering eerst eerlijk moeten uitleggen hoe het ervoor staat." }
    ],
    questions: [
      { type: "mc", q: "Wat gebeurde er met de prijzen na de maatregelen?",
        options: ["Ze stegen nog harder.", "Ze daalden een beetje.", "Ze bleven gelijk.", "Ze daalden eerst en stegen later."], answer: 0,
        why: ["Goed: 내려가기는커녕 오히려 더 크게 올랐다.", "내려가기는커녕 zegt juist dat ze niet daalden.", "올랐다 betekent dat ze stegen.", "Over een daling eerst staat niets in de tekst."] },
      { type: "mc", q: "Waar klagen jongeren over?",
        options: ["Ze kunnen hun levensonderhoud nauwelijks betalen.", "Ze hebben te veel spaargeld.", "Ze krijgen te veel uitleg.", "Ze vinden geen deskundigen."], answer: 0,
        why: ["Goed: 생활비조차 마련하기 어렵다.", "저축은커녕 betekent dat sparen juist niet lukt.", "Burgers klagen dat ze juist géén uitleg kregen.", "Deskundigen worden in de tekst wel genoemd; daar klagen jongeren niet over."] },
      { type: "mc", q: "충분한 설명은커녕 간단한 안내조차 받지 못했다. Wat betekent dit?",
        options: ["Ze kregen niet eens een korte toelichting, laat staan een volledige uitleg.", "Ze kregen een volledige uitleg in plaats van een korte toelichting.", "Ze kregen een korte toelichting, maar geen volledige uitleg.", "Ze wilden geen uitleg en geen toelichting."], answer: 0,
        why: ["Goed: het grote ding (설명) staat vóór 커녕, het kleine (안내) met 조차 en een ontkenning.", "커녕 betekent niet \"in plaats van\" in neutrale zin; ze kregen niets.", "조차 + 못했다 zegt dat ook de korte toelichting er niet was.", "받지 못했다 gaat over niet krijgen, niet over niet willen."] }
    ]
  },
  questions: [
    { type: "mc", q: "그는 나를 ___ 방해만 했어요. (Hij hielp me niet, hij zat me alleen in de weg.)",
      options: ["도와주기는커녕", "도와주는커녕", "도와줬기는커녕", "도와주지는커녕"], answer: 0,
      why: ["Goed: werkwoordstam + -기는커녕.", "Bij een werkwoord komt eerst -기. -는커녕 alleen is voor naamwoorden.", "Vóór -기 komt geen tijd. De tijd staat aan het eind.", "-지 past hier niet. De vorm is -기는커녕."] },
    { type: "mc", q: "\"Hij heeft niet eens gebeld, laat staan dat hij langskwam.\"",
      options: ["그는 찾아오기는커녕 전화도 안 했어요.", "그는 찾아오기는커녕 전화도 했어요.", "그는 전화하기는커녕 찾아오지도 않았어요.", "그는 찾아오는커녕 전화도 안 했어요."], answer: 0,
      why: ["Goed: het grote ding (langskomen) vóór 커녕, het kleine (bellen) met 도 en 안.", "Na 커녕 + 도 volgt een ontkenning.", "De volgorde is omgedraaid. Bellen is wat hij zelfs niet deed.", "Bij een werkwoord gebruik je -기는커녕."] },
    { type: "mc", q: "\"Ik heb niet eens tijd om te slapen, laat staan om te sporten.\"",
      options: ["운동은커녕 잘 시간도 없어요.", "운동는커녕 잘 시간도 없어요.", "운동을커녕 잘 시간도 없어요.", "운동이커녕 잘 시간도 없어요."], answer: 0,
      why: ["Goed: 운동 eindigt op een medeklinker, dus 은커녕.", "Na een medeklinker gebruik je 은커녕, niet 는커녕.", "커녕 komt na 은/는, niet na het lijdend voorwerp 을.", "커녕 komt na 은/는, niet na het onderwerp 이."] },
    { type: "order", q: "Zet in de goede volgorde: \"In plaats van sorry te zeggen, werd hij juist boos.\"",
      tokens: [["사과하기는커녕", "sagwahagineunkeonyeong"], ["오히려", "ohiryeo"], ["화를", "hwareul"], ["냈어요", "naesseoyo"]] },
    { type: "mc", q: "\"Ik ging niet naar de film, maar las een boek. Dat was gewoon mijn keuze.\"",
      options: ["영화를 보는 대신에 책을 읽었어요.", "영화를 보기는커녕 책을 읽었어요.", "영화를 보는 대신에 책도 안 읽었어요.", "영화를 봤는 대신에 책을 읽었어요."], answer: 0,
      why: ["Goed: een neutrale keuze voor B in plaats van A is -는 대신에.", "커녕 drukt teleurstelling uit en vraagt om iets slechters na 커녕. Hier is niets mis.", "Met 도 안 zeg je dat je ook geen boek las. Dat is niet de bedoeling.", "Vóór 대신에 staat bij een werkwoord -는 of -(으)ㄴ, niet 봤는."] },
    { type: "mc", q: "한글___ 한자도 읽을 수 있어요. (Ik kan niet alleen Hangul lezen, maar zelfs Hanja.)",
      options: ["은 물론", "은커녕", "는 물론", "을 물론"], answer: 0,
      why: ["Goed: positief \"niet alleen ... maar zelfs\" is 은/는 물론. 한글 eindigt op een medeklinker: 은.", "커녕 vraagt om een ontkenning erna. Hier kun je het juist wel.", "한글 eindigt op een medeklinker, dus 은, niet 는.", "물론 komt na 은/는, niet na 을."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["그는 사과하기는커녕 인사도 했다.", "그는 사과하기는커녕 인사도 하지 않았다.", "그는 사과하기는커녕 오히려 화를 냈다.", "그는 사과는커녕 인사조차 하지 않았다."], answer: 0,
      why: ["Goed: na 커녕 + 도 moet een ontkenning staan. Hier ontbreekt die.", "Dit klopt: groot ding vóór 커녕, klein ding + 도 + ontkenning.", "Dit klopt: 오히려 + het tegendeel.", "Dit klopt: naamwoord + 는커녕, en 조차 + ontkenning."] },
    { type: "fill", q: "그 약을 먹었는데 감기가 ___ 오히려 더 심해졌다. (Ik nam dat medicijn, maar mijn verkoudheid werd niet beter. Hij werd juist erger.)",
      answers: ["낫기는커녕", "낫긴커녕"], hint: "낫다 = beter worden. Welke vorm komt vóór 오히려?", why: "Werkwoordstam 낫 + -기는커녕, gevolgd door 오히려 + het tegendeel. In spreektaal ook 낫긴커녕." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb niet eens tijd om te eten, laat staan om te rusten.\"",
      tokens: [["쉬기는커녕", "swigineunkeonyeong"], ["밥 먹을", "bap meogeul"], ["시간도", "sigando"], ["없어요", "eopseoyo"]] },
    { type: "open", q: "Vertaal: \"Ik heb niet eens een kamer, laat staan een huis.\"",
      model: ["집은커녕 방도 없어요.", "집은커녕 방 한 칸도 없어요.", "집은커녕 방조차 없습니다."],
      tip: "Check: staat 집 (het grote ding) vóór 은커녕, en 방 met 도 of 조차 erna?" },
    { type: "open", q: "Vertaal in formele schrijfstijl (-다): \"De verkoop steeg niet. Hij daalde juist.\"",
      model: ["매출이 늘기는커녕 오히려 줄었다.", "판매량은 증가하기는커녕 오히려 감소하였다.", "매출은 늘기는 고사하고 오히려 줄었다."],
      tip: "Check: werkwoordstam + -기는커녕 zonder tijd, dan 오히려 + het tegendeel, en een -다-einde." }
  ],
  review: [
    { type: "mc", q: "살을 빼기는커녕 오히려 3킬로 쪘어요. Wat betekent dit?",
      options: ["In plaats van af te vallen, ben ik juist 3 kilo aangekomen.", "Ik ben afgevallen en ook 3 kilo aangekomen.", "Ik ben niet afgevallen en ook niet aangekomen.", "Ik wil afvallen, want ik ben 3 kilo aangekomen."], answer: 0,
      why: ["Goed: -기는커녕 + 오히려 geeft het tegendeel aan.", "-기는커녕 zegt dat het afvallen niet gebeurde.", "쪘어요 zegt dat je wel bent aangekomen.", "-기는커녕 geeft geen reden of wens aan."] },
    { type: "mc", q: "\"Ik kan niet eens Hangul lezen, laat staan een Koreaanse krant.\"",
      options: ["한국 신문은커녕 한글도 못 읽어요.", "한글은커녕 한국 신문도 못 읽어요.", "한국 신문은커녕 한글도 읽어요.", "한국 신문는커녕 한글도 못 읽어요."], answer: 0,
      why: ["Goed: de krant (groot) vóór 커녕, Hangul (klein) met 도 en 못.", "De volgorde is omgedraaid. Hangul is wat je zelfs niet kunt.", "Na 커녕 + 도 volgt een ontkenning.", "신문 eindigt op een medeklinker, dus 은커녕."] },
    { type: "mc", q: "\"Hij heeft niet eens een fiets, laat staan een auto.\"",
      options: ["그는 차는커녕 자전거도 없어요.", "그는 자전거는커녕 차도 없어요.", "그는 차는커녕 자전거도 있어요.", "그는 차은커녕 자전거도 없어요."], answer: 0,
      why: ["Goed: de auto (groot) vóór 커녕, de fiets (klein) met 도 en 없어요.", "De volgorde is omgedraaid. De fiets is wat hij zelfs niet heeft.", "Na 커녕 + 도 volgt een ontkenning, zoals 없어요.", "차 eindigt op een klinker, dus 는커녕."] }
  ]
})
