({
  id: "13", slug: "mangnonhago", title: "을/를 막론하고 / 불문하고", sub: "Ongeacht, zonder onderscheid naar ...",
  canDo: "Je kunt nu in formele taal zeggen dat iets geldt ongeacht leeftijd, afkomst of reden, met N을/를 막론하고 en N을/를 불문하고, en je kiest in gesprekken voor 상관없이 of -든지.",
  guess: {
    q: "\"Dit lied is geliefd bij jong en oud.\" Welke zin klopt, denk je?",
    options: ["이 노래는 남녀노소를 막론하고 사랑받는다.", "이 노래는 남녀노소에 막론하고 사랑받는다.", "이 노래는 남녀노소가 막론하고 사랑받는다.", "이 노래는 남녀노소를 막론하게 사랑받는다."], answer: 0,
    why: ["Goed: zelfstandig naamwoord + 를, dan 막론하고.", "막론하다 neemt een lijdend voorwerp met 을/를, niet 에.", "가 maakt er een onderwerp van. 막론하다 heeft 를 nodig.", "De vaste vorm is 막론하고, met -고."]
  },
  problem: "In het Nederlands zeg je: \"ongeacht leeftijd\" of \"zonder onderscheid naar afkomst\". In formeel Koreaans gebruik je daarvoor N을/를 막론하고 of N을/를 불문하고. Je hoort het in het nieuws, in wetten, toespraken en vacatures. In een gesprek zeg je eenvoudiger: 상관없이.",
  pattern: [
    { l: "groep of criterium", v: "남녀노소", c: 1 }, { l: "을/를", v: "를", c: 2 },
    { l: "막론하고", v: "막론하고", c: 3, key: true }, { l: "uitspraak", v: "사랑받는다", c: 4 }
  ],
  patternCap: "N + 을/를 + 막론하고 / 불문하고 + uitspraak die voor iedereen geldt; spreektaal: N과/와 상관없이, N 할 것 없이, -든지",
  rules: [
    "Alleen na een zelfstandig naamwoord. Met 받침: 을 (국적을, 성별을). Na een klinker: 를 (이유를, 남녀노소를).",
    "Vaak staat er een paar of een reeks: 남녀노소, 동서고금, 지위 고하, 나이와 성별.",
    "Na een vraagwoord: 누구를 막론하고 = wie dan ook (formeel). In spreektaal: 누구든지, 누구나.",
    "Geen werkwoord of bijzin vóór 막론하고. Voor \"of het nu regent of niet\" gebruik je -든지 ... -든지.",
    "Beide vormen zijn formeel. In gesprekken zeg je N과/와 상관없이, N에 상관없이 of N 할 것 없이."
  ],
  pitfall: "Gebruik 을/를, niet 에: 나이를 막론하고. Leerders mengen het met 나이에 상관없이 en zeggen dan 나이에 막론하고. Dat is fout.",
  examples: [
    { cn: "이 노래는 남녀노소를 막론하고 많은 사랑을 받았다.", py: "I noraeneun namnyeonosoreul mangnonhago maneun sarangeul badatda.", nl: "Dit lied was zeer geliefd bij jong en oud." },
    { cn: "이 대회는 국적을 불문하고 누구나 참가할 수 있습니다.", py: "I daehoeneun gukjeogeul bulmunhago nuguna chamgahal su itseumnida.", nl: "Aan deze wedstrijd kan iedereen meedoen, ongeacht nationaliteit." },
    { cn: "이유를 불문하고 폭력은 용납될 수 없다.", py: "Iyureul bulmunhago pongnyeogeun yongnapdoel su eopda.", nl: "Geweld kan niet worden getolereerd, wat de reden ook is." },
    { cn: "동서고금을 막론하고 교육은 국가의 기초였다.", py: "Dongseogogeumeul mangnonhago gyoyugeun gukgaui gichoyeotda.", nl: "In alle tijden en culturen was onderwijs de basis van een staat." }
  ],
  nuance: [
    { h: "막론하고 of 불문하고?",
      p: "De betekenis is bijna gelijk. 불문 betekent letterlijk \"niet vragen naar\". Het staat vaak bij criteria in regels en vacatures: 학력, 경력, 나이, 성별, 이유. In advertenties zie je ook kort 경력 불문. 막론 betekent \"niet bespreken\" en staat graag bij vaste paren: 남녀노소, 동서고금, 지위 고하.",
      ex: [
        { cn: "학력과 경력을 불문하고 지원할 수 있습니다.", py: "Hangnyeokgwa gyeongnyeogeul bulmunhago jiwonhal su itseumnida.", nl: "Je kunt solliciteren, ongeacht opleiding en werkervaring." },
        { cn: "지위 고하를 막론하고 법 앞에서는 모두 평등하다.", py: "Jiwi gohareul mangnonhago beop apeseoneun modu pyeongdeunghada.", nl: "Hoog of laag in positie: voor de wet is iedereen gelijk." }
      ] },
    { h: "막론하고 of 상관없이?",
      p: "상관없이 betekent ook \"ongeacht\", maar is neutraal en komt overal voor, ook in gesprekken. Het neemt 과/와 of 에: 나이와 상관없이, 나이에 상관없이. In spreektaal laat je het partikel vaak weg: 나이 상관없이. 막론하고 klinkt in een gewoon gesprek te stijf.",
      ex: [
        { cn: "나이에 상관없이 누구나 배울 수 있어요.", py: "Naie sanggwaneopsi nuguna baeul su isseoyo.", nl: "Iedereen kan het leren, ongeacht leeftijd." },
        { cn: "나이를 막론하고 누구나 배울 수 있다.", py: "Naireul mangnonhago nuguna baeul su itda.", nl: "Ongeacht leeftijd kan iedereen het leren." }
      ] },
    { h: "Bijzinnen: -든지 in plaats van 막론하고",
      p: "막론하고 en 불문하고 staan alleen na een zelfstandig naamwoord. Wil je zeggen \"of het nu A is of B\" met een werkwoord, gebruik dan -든지 ... -든지 (spreektaal ook -든 ... -든).",
      ex: [
        { cn: "비가 오든지 눈이 오든지 경기는 예정대로 열린다.", py: "Biga odeunji nuni odeunji gyeongineun yejeongdaero yeollinda.", nl: "Of het nu regent of sneeuwt, de wedstrijd gaat zoals gepland door." },
        { cn: "누구든지 신청할 수 있어요.", py: "Nugudeunji sincheonghal su isseoyo.", nl: "Iedereen kan zich aanmelden." }
      ] },
    { h: "Register: schrijftaal en spreektaal",
      p: "막론하고 en 불문하고 horen in het nieuws, wetten, toespraken en officiële mededelingen. In een gesprek zeg je 상관없이 of N 할 것 없이 (zonder uitzondering). 남녀노소 할 것 없이 is daarom de spreektalige versie van 남녀노소를 막론하고.",
      ex: [
        { cn: "이 게임은 남녀노소 할 것 없이 다 좋아해요.", py: "I geimeun namnyeonoso hal geot eopsi da joahaeyo.", nl: "Iedereen vindt dit spel leuk, jong en oud." }
      ] }
  ],
  mistakes: [
    { wrong: "나이에 막론하고 누구나 참가할 수 있다.", right: "나이를 막론하고 누구나 참가할 수 있다.", why: "막론하다 neemt 을/를. Het 에 komt van 나이에 상관없이." },
    { wrong: "국적를 불문하고 지원할 수 있습니다.", right: "국적을 불문하고 지원할 수 있습니다.", why: "국적 eindigt op een 받침, dus 을, niet 를." },
    { wrong: "비가 오기를 막론하고 경기는 열린다.", right: "비가 오든지 안 오든지 경기는 열린다.", why: "막론하고 staat alleen na een zelfstandig naamwoord. Voor een bijzin gebruik je -든지." },
    { wrong: "(tegen een vriend) 이 게임은 남녀노소를 막론하고 재밌어.", right: "(tegen een vriend) 이 게임은 남녀노소 할 것 없이 재밌어.", why: "막론하고 is te formeel voor een gesprek met een vriend." }
  ],
  vocab: [
    ["N을/를 막론하고 / 불문하고", "eul/reul mangnonhago / bulmunhago", "ongeacht, zonder onderscheid naar"], ["남녀노소", "namnyeonoso", "man en vrouw, jong en oud"],
    ["동서고금", "dongseogogeum", "alle tijden en plaatsen"], ["국적", "gukjeok", "nationaliteit"],
    ["학력", "hangnyeok", "opleidingsniveau"], ["경력", "gyeongnyeok", "werkervaring"],
    ["지위", "jiwi", "positie, status"], ["용납되다", "yongnapdoeda", "getolereerd worden"],
    ["채용", "chaeyong", "werving, aanname (van personeel)"], ["인재", "injae", "talent, bekwaam persoon"]
  ],
  dialogue: [
    ["A", "이번 마라톤 대회 공고 봤어요?", "Ibeon maraton daehoe gonggo bwasseoyo?", "Heb je de aankondiging van de marathon gezien?"],
    ["B", "네, \"나이와 성별을 불문하고 누구나 참가 가능\"이라고 쓰여 있더라고요.", "Ne, \"naiwa seongbyeoreul bulmunhago nuguna chamga ganeung\"irago sseuyeo itdeoragoyo.", "Ja, er stond: \"Iedereen kan meedoen, ongeacht leeftijd en geslacht.\""],
    ["A", "그럼 우리 아버지도 나갈 수 있겠네요.", "Geureom uri abeojido nagal su itgenneyo.", "Dan kan mijn vader dus ook meedoen."],
    ["B", "그럼요. 나이 상관없이 다 뛸 수 있대요.", "Geureomyo. Nai sanggwaneopsi da ttwil su itdaeyo.", "Zeker. Iedereen mag lopen, ongeacht leeftijd."],
    ["A", "좋네요. 비가 오든 안 오든 꼭 같이 나가요.", "Jonneyo. Biga odeun an odeun kkok gachi nagayo.", "Mooi. Of het nu regent of niet, we gaan zeker samen."]
  ],
  reading: {
    title: "채용 공고에서 사라지는 조건들",
    lines: [
      { cn: "과거 많은 기업의 채용 공고에는 나이와 학력 제한이 있었다.", py: "Gwageo maneun gieobui chaeyong gonggoeneun naiwa hangnyeok jehani isseotda.", nl: "Vroeger stonden er in veel vacatures beperkingen op leeftijd en opleiding." },
      { cn: "그러나 최근에는 학력과 나이를 불문하고 지원을 받는 기업이 늘고 있다.", py: "Geureona choegeuneneun hangnyeokgwa naireul bulmunhago jiwoneul banneun gieobi neulgo itda.", nl: "Maar de laatste tijd nemen steeds meer bedrijven sollicitaties aan, ongeacht opleiding en leeftijd." },
      { cn: "이른바 \"블라인드 채용\"은 출신 지역이나 가족 관계 같은 정보도 묻지 않는다.", py: "Ireunba \"beullaindeu chaeyong\"eun chulsin jiyeogina gajok gwangye gateun jeongbodo mutji anneunda.", nl: "Bij zogenaamde \"blinde werving\" wordt ook niet gevraagd naar herkomst of gezinssituatie." },
      { cn: "지원자를 오직 능력으로 평가하겠다는 것이다.", py: "Jiwonjareul ojik neungnyeogeuro pyeonggahagetdaneun geosida.", nl: "Het idee is dat kandidaten alleen op hun kunnen worden beoordeeld." },
      { cn: "한 기업 대표는 \"좋은 인재는 배경을 막론하고 어디에나 있다\"고 말했다.", py: "Han gieop daepyoneun \"joeun injaeneun baegyeongeul mangnonhago eodiena itda\"go malhaetda.", nl: "Een bedrijfsleider zei: \"Goed talent is overal te vinden, ongeacht achtergrond.\"" },
      { cn: "실제로 이 제도를 도입한 뒤 직원들의 출신 학교가 훨씬 다양해졌다.", py: "Siljero i jedoreul doipan dwi jigwondeurui chulsin hakgyoga hwolssin dayanghaejyeotda.", nl: "Na de invoering van dit systeem werden de scholen waar werknemers vandaan komen inderdaad veel diverser." },
      { cn: "물론 서류만으로는 지원자를 판단하기 어렵다는 지적도 있다.", py: "Mullon seoryumaneuroneun jiwonjareul pandanhagi eoryeopdaneun jijeokdo itda.", nl: "Natuurlijk merken sommigen op dat je een kandidaat moeilijk alleen op papier kunt beoordelen." },
      { cn: "그래도 공정한 기회가 배경을 불문하고 누구에게나 주어져야 한다는 데에는 대부분이 동의한다.", py: "Geuraedo gongjeonghan gihoega baegyeongeul bulmunhago nuguegena jueojyeoya handaneun deeneun daebubuni donguihanda.", nl: "Toch is bijna iedereen het erover eens dat iedereen een eerlijke kans moet krijgen, ongeacht achtergrond." }
    ],
    questions: [
      { type: "mc", q: "Wat vraagt een bedrijf bij \"blinde werving\" NIET?",
        options: ["Herkomst en gezinssituatie.", "Wat de kandidaat kan.", "De naam van de vacature.", "Of de kandidaat wil solliciteren."], answer: 0,
        why: ["Goed: 출신 지역이나 가족 관계 같은 정보도 묻지 않는다.", "De kandidaat wordt juist op 능력 beoordeeld.", "Over de naam van de vacature staat niets.", "Dat is vanzelfsprekend en staat niet in de tekst."] },
      { type: "mc", q: "Welke kritiek noemt de tekst?",
        options: ["Je kunt een kandidaat moeilijk alleen op papier beoordelen.", "Blinde werving is te duur.", "Er solliciteren te weinig mensen.", "Oudere kandidaten worden achtergesteld."], answer: 0,
        why: ["Goed: 서류만으로는 지원자를 판단하기 어렵다는 지적.", "Over kosten staat niets in de tekst.", "Over het aantal sollicitanten staat niets.", "Leeftijd is juist geen criterium meer."] },
      { type: "mc", q: "배경을 막론하고 in zin 5 betekent:",
        options: ["ongeacht achtergrond", "vanwege de achtergrond", "behalve de achtergrond", "vóór de achtergrond"], answer: 0,
        why: ["Goed: 막론하고 = zonder onderscheid naar, ongeacht.", "Een reden geef je aan met 때문에.", "\"Behalve\" is 을/를 제외하고.", "막론하고 heeft niets met volgorde te maken."] }
    ]
  },
  questions: [
    { type: "mc", q: "이 대회는 국적___ 불문하고 누구나 참가할 수 있다.",
      options: ["을", "를", "에", "과"], answer: 0,
      why: ["Goed: 국적 eindigt op een 받침, dus 을.", "를 staat na een klinker. 국적 eindigt op ㄱ.", "불문하다 neemt 을/를, niet 에.", "과 betekent \"en\" of \"met\" en past niet vóór 불문하고."] },
    { type: "mc", q: "\"Ongeacht leeftijd kan iedereen het leren.\" (formeel)",
      options: ["나이를 막론하고 누구나 배울 수 있다.", "나이에 막론하고 누구나 배울 수 있다.", "나이가 막론하고 누구나 배울 수 있다.", "나이를 막론하게 누구나 배울 수 있다."], answer: 0,
      why: ["Goed: N를 막론하고.", "에 komt van 나이에 상관없이. 막론하다 neemt 를.", "가 maakt 나이 het onderwerp. Dat kan niet.", "De vaste vorm is 막론하고, met -고."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["비가 오기를 막론하고 경기는 예정대로 열린다.", "날씨와 상관없이 경기는 예정대로 열린다.", "비가 오든지 눈이 오든지 경기는 예정대로 열린다.", "기상 조건을 불문하고 경기는 예정대로 열린다."], answer: 0,
      why: ["Goed: 막론하고 staat niet na een werkwoord. Zeg: 비가 오든지 안 오든지.", "Dit klopt: 상관없이 na N + 와.", "Dit klopt: -든지 ... -든지 voor bijzinnen.", "Dit klopt: N을 불문하고."] },
    { type: "mc", q: "Je zegt tegen een vriend: \"Dit spel vindt iedereen leuk, jong en oud.\" Welke zin past?",
      options: ["이 게임은 남녀노소 할 것 없이 다 좋아해.", "이 게임은 남녀노소를 막론하고 사랑받는다.", "이 게임은 남녀노소를 불문하고 선호된다.", "이 게임은 남녀노소에 할 것 없이 다 좋아해."], answer: 0,
      why: ["Goed: N 할 것 없이 is de spreektalige vorm.", "Dit is krantentaal, te stijf tegen een vriend.", "불문하고 en 선호된다 zijn formele schrijftaal.", "Vóór 할 것 없이 staat geen 에."] },
    { type: "mc", q: "Wat betekent: 이유를 불문하고 지각은 허용되지 않습니다?",
      options: ["Te laat komen is niet toegestaan, wat de reden ook is.", "Te laat komen is toegestaan als je een reden geeft.", "Vraag niet waarom iemand te laat komt.", "Je moet de reden van te laat komen opschrijven."], answer: 0,
      why: ["Goed: 이유를 불문하고 = ongeacht de reden.", "불문하고 zegt juist dat de reden niet telt.", "불문 betekent letterlijk \"niet vragen\", maar de zin is een regel over te laat komen.", "Over opschrijven staat niets in de zin."] },
    { type: "mc", q: "Welke zin betekent ongeveer hetzelfde als 나이를 불문하고 누구나 지원할 수 있다?",
      options: ["나이와 상관없이 누구나 지원할 수 있다.", "나이에 따라 지원할 수 있다.", "나이가 많아야 지원할 수 있다.", "나이를 물어본 후에 지원할 수 있다."], answer: 0,
      why: ["Goed: 상관없이 is de neutrale versie van 불문하고.", "에 따라 betekent \"afhankelijk van\". Dan telt leeftijd juist wel.", "Hier is leeftijd een voorwaarde.", "불문 betekent juist dat er niet naar gevraagd wordt."] },
    { type: "mc", q: "성별___ 막론하고 누구나 신청할 수 있습니다.",
      options: ["을", "를", "이", "에"], answer: 0,
      why: ["Goed: 성별 eindigt op ㄹ, dus 을.", "를 staat na een klinker.", "이 is een onderwerpspartikel. 막론하다 neemt 을/를.", "막론하다 neemt geen 에."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hoog of laag in positie, voor de wet is iedereen gelijk.\"",
      tokens: [["지위 고하를", "jiwi gohareul"], ["막론하고", "mangnonhago"], ["법 앞에서는", "beop apeseoneun"], ["모두", "modu"], ["평등하다", "pyeongdeunghada"]],
      alt: ["법 앞에서는 지위 고하를 막론하고 모두 평등하다", "지위 고하를 막론하고 모두 법 앞에서는 평등하다"] },
    { type: "order", q: "Zet in de goede volgorde: \"Iedereen kan meedoen, ongeacht nationaliteit.\"",
      tokens: [["국적을", "gukjeogeul"], ["불문하고", "bulmunhago"], ["누구나", "nuguna"], ["참가할 수", "chamgahal su"], ["있습니다", "itseumnida"]],
      alt: ["누구나 국적을 불문하고 참가할 수 있습니다"] },
    { type: "fill", q: "이유___ 불문하고 폭력은 용납될 수 없다. (Geweld kan niet worden getolereerd, wat de reden ook is.)",
      answers: ["를"], hint: "이유 eindigt op een klinker. Welk partikel?", why: "이유를 불문하고: na een klinker 를, en 불문하다 neemt een lijdend voorwerp." },
    { type: "open", q: "Vertaal in formele schrijfstijl (-다): \"Dit festival is populair bij jong en oud.\"",
      model: ["이 축제는 남녀노소를 막론하고 인기가 많다.", "이 축제는 남녀노소를 불문하고 사랑받고 있다.", "이 축제는 나이와 성별을 막론하고 인기를 끌고 있다."],
      tip: "Check: 를 na 남녀노소, 막론하고 of 불문하고 met -고, en een -다-einde." },
    { type: "open", q: "Vertaal in spreektaal tegen een collega: \"Iedereen kan zich aanmelden, ongeacht leeftijd.\"",
      model: ["나이 상관없이 누구나 신청할 수 있어요.", "나이에 상관없이 누구든지 신청할 수 있어요.", "나이와 상관없이 다 신청할 수 있어요."],
      tip: "Check: in een gesprek 상관없이 (niet 막론하고), met of zonder 에/와, en een -요-einde." }
  ],
  review: [
    { type: "mc", q: "이 장학금은 전공___ 불문하고 신청할 수 있다. (Iedereen kan deze beurs aanvragen, ongeacht studierichting.)",
      options: ["을", "를", "에", "이"], answer: 0,
      why: ["Goed: 전공 eindigt op ㅇ, dus 을.", "를 staat na een klinker.", "불문하다 neemt 을/를, niet 에.", "이 is een onderwerpspartikel."] },
    { type: "mc", q: "\"In alle tijden en culturen hielden mensen van verhalen.\"",
      options: ["동서고금을 막론하고 사람들은 이야기를 좋아했다.", "동서고금에 막론하고 사람들은 이야기를 좋아했다.", "동서고금이 막론하고 사람들은 이야기를 좋아했다.", "동서고금을 막론하게 사람들은 이야기를 좋아했다."], answer: 0,
      why: ["Goed: N을 막론하고.", "막론하다 neemt 을, niet 에.", "이 maakt er een onderwerp van. Dat kan niet.", "De vaste vorm is 막론하고, met -고."] },
    { type: "mc", q: "\"Of je nu ervaring hebt of niet, je kunt solliciteren.\" (spreektaal)",
      options: ["경력이 있든 없든 지원할 수 있어요.", "경력이 있기를 막론하고 지원할 수 있어요.", "경력이 있든 없든을 불문하고 지원할 수 있어요.", "경력이 있든 없든에 막론하고 지원할 수 있어요."], answer: 0,
      why: ["Goed: voor een bijzin gebruik je -든 ... -든.", "막론하고 staat niet na een werkwoord.", "불문하고 staat alleen na een zelfstandig naamwoord, niet na -든.", "막론하고 neemt geen 에, en ook geen bijzin."] }
  ]
})
