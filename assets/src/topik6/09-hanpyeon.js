({
  id: "09", slug: "hanpyeon", title: "-는 한편", sub: "Tegelijk, en aan de andere kant",
  canDo: "Je kunt nu in formele taal twee activiteiten of twee kanten naast elkaar zetten met -는 한편, en je kiest tussen 한편, -는 반면에 en -(으)면서.",
  guess: {
    q: "\"Hij werkt overdag bij een bedrijf en studeert daarnaast 's avonds.\" Welke zin klopt, denk je?",
    options: ["그는 낮에는 회사에 다니는 한편 밤에는 공부를 한다.", "그는 낮에는 회사에 다닐 한편 밤에는 공부를 한다.", "그는 낮에는 회사에 다니기 한편 밤에는 공부를 한다.", "그는 낮에는 회사에 다니고 한편 밤에는 공부를 한다."], answer: 0,
    why: ["Goed: werkwoord in het heden + -는 한편.", "-ㄹ wijst naar de toekomst. Hier gaat het om wat hij nu elke dag doet.", "Voor 한편 staat een bijvoeglijke vorm, geen -기.", "-고 en 한편 verbind je niet zo. Gebruik -는 한편."]
  },
  problem: "Je wilt zeggen dat iemand twee dingen naast elkaar doet, of dat iets twee kanten heeft. In het Nederlands: \"daarnaast\", \"tegelijk\" of \"aan de andere kant\". In een gesprek zeg je -(으)면서. In nieuws, rapporten en formele tekst gebruik je -는 한편.",
  pattern: [
    { l: "kant 1", v: "낮에는 회사에 다니", c: 1 }, { l: "한편", v: "는 한편", c: 2, key: true },
    { l: "kant 2", v: "밤에는 대학원에서 공부한다", c: 4 }
  ],
  patternCap: "A + -는 한편 (bijv. ww: -(으)ㄴ 한편, naamwoord: -인 한편) + B. Ook: 한편으로는 ... 한편으로는; zinsbegin 한편, = intussen. Spreektaal: -(으)면서, -기도 하고",
  rules: [
    "Werkwoord: -는 한편 (다니는, 늘리는). Bijvoeglijk werkwoord: -(으)ㄴ 한편 (기쁜, 좋은). 있다/없다: -는 한편.",
    "Zelfstandig naamwoord: -인 한편 (의사인 한편). Een spatie vóór 한편.",
    "De tijd staat meestal alleen aan het einde: 세금을 낮추는 한편 ... 지원하기로 했다.",
    "Twee gebruiken: daarnaast iets doen (zelfde onderwerp), of twee kanten naast elkaar (vaak gevoelens: 기쁜 한편 아쉽다).",
    "Register: schrijftaal en formeel spreken. Aan het begin van een zin betekent 한편, \"intussen\" of \"anderzijds\" (nieuws)."
  ],
  pitfall: "-는 한편 verbindt activiteiten of kanten over een langere periode. Twee kleine handelingen op hetzelfde moment passen niet: 밥을 먹는 한편 TV를 봤다 is fout. Zeg dan 밥을 먹으면서 TV를 봤다.",
  examples: [
    { cn: "그는 낮에는 회사에 다니는 한편 밤에는 대학원에서 공부한다.", py: "Geuneun najeneun hoesae danineun hanpyeon bameneun daehagwoneseo gongbuhanda.", nl: "Overdag werkt hij bij een bedrijf, en daarnaast studeert hij 's avonds aan de universiteit." },
    { cn: "졸업을 하게 되어 기쁜 한편 친구들과 헤어지는 것이 아쉽다.", py: "Joreobeul hage doeeo gippeun hanpyeon chingudeulgwa heeojineun geosi aswipda.", nl: "Ik ben blij dat ik afstudeer, maar tegelijk vind ik het jammer om afscheid te nemen van mijn vrienden." },
    { cn: "정부는 세금을 낮추는 한편 일자리 창출에도 힘쓰기로 했다.", py: "Jeongbuneun segeumeul natchuneun hanpyeon iljari changchuredo himsseugiro haetda.", nl: "De regering verlaagt de belastingen en gaat zich daarnaast inzetten voor nieuwe banen." },
    { cn: "한편, 같은 날 부산에서는 큰 축제가 열렸다.", py: "Hanpyeon, gateun nal Busaneseoneun keun chukjega yeollyeotda.", nl: "Intussen werd op dezelfde dag in Busan een groot festival gehouden." }
  ],
  nuance: [
    { h: "-는 한편 of -는 반면에?",
      p: "-는 반면에 zet twee kanten scherp tegenover elkaar: een voordeel tegenover een nadeel. -는 한편 zet twee dingen naast elkaar. Dat kan een tegenstelling zijn, maar ook gewoon \"daarnaast\". Doet iemand twee dingen naast elkaar, zonder tegenstelling? Dan past alleen 한편. 회사에 다니는 반면에 소설도 쓴다 is fout.",
      ex: [
        { cn: "이 일은 월급이 많은 반면에 너무 바쁘다.", py: "I ireun wolgeubi maneun banmyeone neomu bappeuda.", nl: "Dit werk betaalt goed, maar daartegenover staat dat het erg druk is." },
        { cn: "그는 회사에 다니는 한편 소설도 쓴다.", py: "Geuneun hoesae danineun hanpyeon soseoldo sseunda.", nl: "Hij werkt bij een bedrijf en schrijft daarnaast romans." }
      ] },
    { h: "-는 한편 of -(으)면서?",
      p: "-(으)면서 betekent \"terwijl\": twee handelingen op precies hetzelfde moment, door dezelfde persoon. Het past in elk register. -는 한편 gaat over activiteiten die over een langere periode naast elkaar lopen, en klinkt formeel. Voor muziek luisteren tijdens het studeren kies je dus -(으)면서.",
      ex: [
        { cn: "음악을 들으면서 공부해요.", py: "Eumageul deureumyeonseo gongbuhaeyo.", nl: "Ik studeer terwijl ik naar muziek luister." },
        { cn: "그녀는 일을 하는 한편 공부도 계속했다.", py: "Geunyeoneun ireul haneun hanpyeon gongbudo gyesokaetda.", nl: "Ze werkte, en daarnaast bleef ze studeren." }
      ] },
    { h: "Register: wat zeg je in een gesprek?",
      p: "In een gesprek klinkt -는 한편 stijf. Voor twee gevoelens zeg je -기도 하고 ... -기도 하다, of 한편으로는 ... 한편으로는. Voor twee activiteiten zeg je -(으)면서 of -고. In het nieuws hoor je 한편, aan het begin van een zin om naar een ander bericht over te stappen.",
      ex: [
        { cn: "한편으로는 기쁘고 한편으로는 아쉬워요.", py: "Hanpyeoneuroneun gippeugo hanpyeoneuroneun aswiwoyo.", nl: "Aan de ene kant ben ik blij, aan de andere kant vind ik het jammer." }
      ] }
  ],
  mistakes: [
    { wrong: "졸업하게 되어 기쁘는 한편 아쉽다.", right: "졸업하게 되어 기쁜 한편 아쉽다.", why: "기쁘다 is een bijvoeglijk werkwoord. Dat krijgt -(으)ㄴ, niet -는." },
    { wrong: "밥을 먹는 한편 TV를 봤다.", right: "밥을 먹으면서 TV를 봤다.", why: "Twee kleine handelingen op hetzelfde moment: gebruik -(으)면서." },
    { wrong: "그는 회사에 다니는 반면에 소설도 쓴다.", right: "그는 회사에 다니는 한편 소설도 쓴다.", why: "Er is geen tegenstelling, alleen \"daarnaast\". Dan past -는 한편, niet -는 반면에." },
    { wrong: "그는 의사는 한편 소설가로도 활동한다.", right: "그는 의사인 한편 소설가로도 활동한다.", why: "Na een zelfstandig naamwoord gebruik je -인 한편." }
  ],
  vocab: [
    ["-는 한편", "-neun hanpyeon", "terwijl, daarnaast, aan de andere kant"], ["대학원", "daehagwon", "masteropleiding, graduate school"],
    ["아쉽다", "aswipda", "jammer, spijtig"], ["창출", "changchul", "het scheppen (van banen)"],
    ["힘쓰다", "himsseuda", "zich inzetten, moeite doen"], ["관광객", "gwangwanggaek", "toerist"],
    ["활기", "hwalgi", "levendigheid"], ["소음", "soeum", "lawaai"],
    ["제한하다", "jehanhada", "beperken"], ["우려하다", "uryeohada", "zich zorgen maken, vrezen"]
  ],
  dialogue: [
    ["A", "요즘 어떻게 지내요? 아직 그 회사에 다녀요?", "Yojeum eotteoke jinaeyo? Ajik geu hoesae danyeoyo?", "Hoe gaat het met je? Werk je nog bij dat bedrijf?"],
    ["B", "네, 회사에 다니면서 주말에는 한국어도 가르치고 있어요.", "Ne, hoesae danimyeonseo jumareneun hangugeodo gareuchigo isseoyo.", "Ja, ik werk daar, en in het weekend geef ik ook Koreaanse les."],
    ["A", "대단하네요. 이력서에는 어떻게 썼어요?", "Daedanhaneyo. Iryeokseoeneun eotteoke sseosseoyo?", "Knap. Hoe heb je dat in je cv gezet?"],
    ["B", "'회사에 근무하는 한편 주말에는 한국어 강사로 활동하고 있다'라고 썼어요.", "'Hoesae geunmuhaneun hanpyeon jumareneun hangugeo gangsaro hwaldonghago itda'rago sseosseoyo.", "Ik schreef: 'Ik werk bij een bedrijf en ben daarnaast in het weekend actief als docent Koreaans.'"],
    ["A", "힘들지 않아요?", "Himdeulji anayo?", "Is dat niet zwaar?"],
    ["B", "한편으로는 힘들지만 한편으로는 보람도 커요.", "Hanpyeoneuroneun himdeuljiman hanpyeoneuroneun boramdo keoyo.", "Aan de ene kant is het zwaar, maar aan de andere kant geeft het ook veel voldoening."]
  ],
  reading: {
    title: "관광객 증가, 기대와 우려",
    lines: [
      { cn: "최근 한 해안 마을을 찾는 관광객이 크게 늘었다.", py: "Choegeun han haean maeureul channeun gwangwanggaegi keuge neureotda.", nl: "De laatste tijd komen er veel meer toeristen naar een dorp aan de kust." },
      { cn: "관광객이 늘면서 식당과 숙소의 매출이 오르는 한편 새로운 일자리도 생겼다.", py: "Gwangwanggaegi neulmyeonseo sikdanggwa suksoui maechuri oreuneun hanpyeon saeroun iljarido saenggyeotda.", nl: "Met de groei van het toerisme stijgt de omzet van restaurants en logies, en daarnaast zijn er nieuwe banen bijgekomen." },
      { cn: "주민들은 마을이 활기를 되찾아 기쁜 한편 걱정도 크다고 말한다.", py: "Jumindeureun maeuri hwalgireul doechaja gippeun hanpyeon geokjeongdo keudago malhanda.", nl: "De inwoners zeggen dat ze blij zijn dat het dorp weer leeft, maar dat ze zich tegelijk ook veel zorgen maken." },
      { cn: "밤늦게까지 소음이 계속되는 데다가 쓰레기도 크게 늘었기 때문이다.", py: "Bamneutgekkaji soeumi gyesokdoeneun dedaga sseuregido keuge neureotgi ttaemunida.", nl: "Er is namelijk tot laat in de nacht lawaai, en er is ook veel meer afval." },
      { cn: "이에 군청은 관광객의 수를 제한하는 한편 주민들을 위한 지원도 늘리기로 했다.", py: "Ie guncheongeun gwangwanggaegui sureul jehanhaneun hanpyeon jumindeureul wihan jiwondo neulligiro haetda.", nl: "Daarom besloot de gemeente het aantal toeristen te beperken en daarnaast de steun aan inwoners te verhogen." },
      { cn: "한편, 일부 상인들은 이러한 규제가 지역 경제에 부담이 될 수 있다고 우려한다.", py: "Hanpyeon, ilbu sangindeureun ireohan gyujega jiyeok gyeongjee budami doel su itdago uryeohanda.", nl: "Anderzijds vrezen sommige ondernemers dat deze regels de lokale economie kunnen schaden." },
      { cn: "관광과 주민의 생활이 함께 나아갈 수 있는 방법을 찾아야 할 때이다.", py: "Gwangwanggwa juminui saenghwari hamkke naagal su inneun bangbeobeul chajaya hal ttaeida.", nl: "Het is tijd om een manier te vinden waarop toerisme en het leven van de inwoners samen kunnen gaan." }
    ],
    questions: [
      { type: "mc", q: "Waarom maken de inwoners zich zorgen?",
        options: ["Er is tot laat lawaai en er is veel meer afval.", "De restaurants verdienen minder.", "Er zijn minder banen.", "Er komen te weinig toeristen."], answer: 0,
        why: ["Goed: 밤늦게까지 소음이 계속되는 데다가 쓰레기도 크게 늘었기 때문이다.", "De omzet stijgt juist (매출이 오르는).", "Er zijn juist nieuwe banen (새로운 일자리도 생겼다).", "Er komen juist veel meer toeristen."] },
      { type: "mc", q: "Wat besloot de gemeente?",
        options: ["Het aantal toeristen beperken en de inwoners meer steunen.", "Alle restaurants 's avonds sluiten.", "Meer hotels bouwen.", "Niets doen, op verzoek van de ondernemers."], answer: 0,
        why: ["Goed: 관광객의 수를 제한하는 한편 주민들을 위한 지원도 늘리기로 했다.", "Over het sluiten van restaurants staat niets in de tekst.", "Over nieuwe hotels staat niets in de tekst.", "De ondernemers maken zich zorgen, maar de gemeente heeft al besloten."] },
      { type: "mc", q: "마을이 활기를 되찾아 기쁜 한편 걱정도 크다. Wat doet 한편 hier?",
        options: ["Het zet twee gevoelens naast elkaar: blij, en tegelijk bezorgd.", "Het geeft de reden van de zorgen.", "Het zegt dat de zorgen eerst kwamen.", "Het zegt dat ze alleen blij zijn."], answer: 0,
        why: ["Goed: twee kanten tegelijk: 기쁜 한편 걱정도 크다.", "De reden staat in de volgende zin, met -기 때문이다.", "한편 zegt niets over volgorde in tijd.", "Na 한편 komt juist een tweede kant: 걱정도 크다."] }
    ]
  },
  questions: [
    { type: "mc", q: "이번 결과가 ___ 한편 조금 아쉽기도 하다. (Ik ben tevreden met het resultaat, maar vind het tegelijk een beetje jammer.)",
      options: ["만족스러운", "만족스럽는", "만족스러울", "만족스럽은"], answer: 0,
      why: ["Goed: bijvoeglijk werkwoord met ㅂ-stam: 만족스러운 한편.", "-는 hoort bij werkwoorden. 만족스럽다 is een bijvoeglijk werkwoord.", "-ㄹ wijst naar de toekomst en past niet voor 한편.", "Bij een ㅂ-stam wordt ㅂ een 우: 만족스러운."] },
    { type: "mc", q: "그는 대학 교수___ 한편 유명한 작가이기도 하다.",
      options: ["인", "이는", "일", "이고"], answer: 0,
      why: ["Goed: na een zelfstandig naamwoord gebruik je -인 한편.", "이다 krijgt -ㄴ, niet -는.", "-ㄹ wijst naar de toekomst of een gok.", "-고 kan niet direct vóór 한편 staan."] },
    { type: "mc", q: "\"Ik studeer terwijl ik naar muziek luister.\" (gesprek)",
      options: ["음악을 들으면서 공부해요.", "음악을 듣는 한편 공부해요.", "음악을 듣는 반면에 공부해요.", "음악을 들은 한편 공부해요."], answer: 0,
      why: ["Goed: twee handelingen op hetzelfde moment: -(으)면서.", "-는 한편 is voor activiteiten over een langere periode, niet voor twee kleine handelingen tegelijk.", "-는 반면에 geeft een tegenstelling. Die is er hier niet.", "-은 wijst naar het verleden, en 한편 past hier sowieso niet."] },
    { type: "mc", q: "\"Hij werkt bij een bank en schrijft daarnaast romans.\"",
      options: ["그는 은행에 다니는 한편 소설도 쓴다.", "그는 은행에 다니는 반면에 소설도 쓴다.", "그는 은행에 다닐 한편 소설도 쓴다.", "그는 은행에 다니기 한편 소설도 쓴다."], answer: 0,
      why: ["Goed: twee activiteiten naast elkaar: -는 한편.", "-는 반면에 vraagt een tegenstelling. Bankwerk en schrijven zijn geen tegengestelde kanten.", "-ㄹ wijst naar de toekomst en past niet voor 한편.", "Voor 한편 staat een bijvoeglijke vorm, geen -기."] },
    { type: "mc", q: "도시 인구는 늘어나는 한편 농촌 인구는 줄어들고 있다. Wat betekent dit?",
      options: ["De stadsbevolking groeit, terwijl de plattelandsbevolking krimpt.", "Omdat de stadsbevolking groeit, krimpt de plattelandsbevolking.", "Zodra de stadsbevolking groeit, krimpt de plattelandsbevolking.", "De stadsbevolking groeit alleen als de plattelandsbevolking krimpt."], answer: 0,
      why: ["Goed: 한편 zet twee ontwikkelingen naast elkaar.", "한편 geeft geen oorzaak. Dat zou -기 때문에 zijn.", "한편 geeft geen moment. Dat zou -자마자 zijn.", "한편 geeft geen voorwaarde. Dat zou -아야 of -는 한 zijn."] },
    { type: "mc", q: "Een nieuwslezer zegt: \"한편, 같은 시각 서울에서는 ...\" Wat betekent 한편, hier?",
      options: ["Intussen, anderzijds", "Daarom", "Bijvoorbeeld", "Eén keer"], answer: 0,
      why: ["Goed: aan het begin van een zin stapt 한편, over naar een ander bericht.", "\"Daarom\" is 그래서 of 따라서.", "\"Bijvoorbeeld\" is 예를 들어.", "한 is hier niet het getal \"één\". 한편 is één woord."] },
    { type: "fill", q: "정부는 수출을 늘리는 ___ 국내 시장도 살리기로 했다. (De regering wil de export vergroten en daarnaast de binnenlandse markt versterken.)",
      answers: ["한편"], hint: "Welk woord betekent \"en daarnaast\" in formele tekst?",
      why: "늘리는 한편: werkwoord + -는, dan 한편, met een spatie ervoor." },
    { type: "order", q: "Zet in de goede volgorde: \"Overdag werkt ze, en daarnaast studeert ze 's avonds.\"",
      tokens: [["그녀는", "geunyeoneun"], ["낮에는 일하는 한편", "najeneun ilhaneun hanpyeon"], ["밤에는", "bameneun"], ["공부한다", "gongbuhanda"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik ben blij, maar tegelijk ook een beetje verdrietig.\"",
      tokens: [["기쁜 한편", "gippeun hanpyeon"], ["조금", "jogeum"], ["슬프기도", "seulpeugido"], ["하다", "hada"]] },
    { type: "open", q: "Vertaal (formeel, -다): \"De regering verlaagt de belastingen en steunt daarnaast kleine bedrijven.\"",
      model: ["정부는 세금을 낮추는 한편 중소기업도 지원한다.", "정부는 세금을 인하하는 한편 중소기업을 지원하고 있다.", "정부는 세금을 줄이는 한편 소규모 기업도 지원하기로 했다."],
      tip: "Check: werkwoord + -는 vóór 한편, met een spatie, en een -다-einde." },
    { type: "open", q: "Zeg dit in spreektaal tegen een vriend: 합격해서 기쁜 한편 걱정도 된다.",
      model: ["합격해서 기쁘기도 하고 걱정도 돼.", "합격해서 한편으로는 기쁘고 한편으로는 걱정돼요.", "붙어서 기쁘긴 한데 걱정도 돼."],
      tip: "Check: -기도 하고 of 한편으로는 ... 한편으로는 in plaats van -는 한편, en een spreektaaleinde." }
  ],
  review: [
    { type: "mc", q: "그는 작은 회사를 ___ 한편 틈틈이 그림을 그린다. (Hij leidt een klein bedrijf en schildert daarnaast in zijn vrije tijd.)",
      options: ["운영하는", "운영할", "운영하기", "운영하고"], answer: 0,
      why: ["Goed: werkwoord in het heden + -는 한편.", "-ㄹ wijst naar de toekomst en past niet voor 한편.", "Voor 한편 staat geen -기.", "-고 kan niet direct vóór 한편 staan."] },
    { type: "mc", q: "\"Ze belde terwijl ze autoreed.\"",
      options: ["그녀는 운전하면서 통화했다.", "그녀는 운전하는 한편 통화했다.", "그녀는 운전하는 반면에 통화했다.", "그녀는 운전한 한편 통화했다."], answer: 0,
      why: ["Goed: twee handelingen op hetzelfde moment: -(으)면서.", "-는 한편 is niet voor twee kleine handelingen op hetzelfde moment.", "-는 반면에 geeft een tegenstelling. Die is er niet.", "Ook in het verleden past 한편 hier niet."] },
    { type: "mc", q: "새 도시로 이사하게 되어 마음이 ___ 한편 섭섭하기도 하다. (Ik verhuis naar een nieuwe stad. Ik ben opgewonden, maar ook een beetje weemoedig.)",
      options: ["설레는", "설레은", "설렐", "설레고"], answer: 0,
      why: ["Goed: 설레다 is een gewoon werkwoord, dus -는 한편.", "설레다 is geen bijvoeglijk werkwoord, en na een klinker komt nooit -은.", "-ㄹ wijst naar de toekomst en past niet voor 한편.", "-고 kan niet direct vóór 한편 staan."] }
  ]
})
