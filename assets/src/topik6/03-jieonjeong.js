({
  id: "03", slug: "jieonjeong", title: "-(으)ㄹ지언정", sub: "Liever dit dan dat",
  canDo: "Je kunt nu een sterk principe uitdrukken met -(으)ㄹ지언정: liever het ergste dan iets wat je weigert. En je weet wanneer -더라도 beter past.",
  guess: {
    q: "\"Ik verlies liever dan dat ik vals speel.\" Welke zin klopt, denk je?",
    options: ["질지언정 반칙은 하지 않겠어요.", "질지언정 반칙은 하겠어요.", "반칙할지언정 지지는 않겠어요.", "지는지언정 반칙은 하지 않겠어요."], answer: 0,
    why: ["Goed: het offer (verliezen) staat vóór -ㄹ지언정, de weigering erna.", "Na -ㄹ지언정 volgt meestal wat je weigert: 하지 않겠어요.", "De betekenis is omgedraaid. Nu speel je liever vals.", "-ㄹ지언정 komt direct na de stam: 질지언정."]
  },
  problem: "Je wilt een sterk principe uitspreken. Je accepteert liever iets ergs dan dat je iets verkeerds doet. In het Nederlands zeg je \"liever ... dan\". In formeel Koreaans gebruik je -(으)ㄹ지언정.",
  pattern: [
    { l: "offer", v: "굶을", c: 1 }, { l: "지언정", v: "지언정", c: 2, key: true },
    { l: "ding + 은/는", v: "남의 돈은", c: 3 }, { l: "weigering", v: "훔치지 않겠다", c: 4 }
  ],
  patternCap: "Offer + -(으)ㄹ지언정 + wat je weigert (vaak -지 않겠다, -지 않을 것이다); spreektaal: 차라리 ... -는 게 낫다",
  rules: [
    "Na een klinker of ㄹ: -ㄹ지언정 (질지언정, 팔지언정). Na een medeklinker: -을지언정 (굶을지언정).",
    "Het werkt ook met bijvoeglijke werkwoorden. Dan betekent het \"ook al\": 몸은 힘들지언정 마음은 편하다.",
    "지언정 plak je vast aan de vorm, zonder spatie. Na een naamwoord: -일지언정.",
    "Het tweede deel is meestal een vast besluit of een weigering: -지 않겠다, -(으)ㄹ 수 없다.",
    "Register: formeel, vooral schrijftaal en plechtige uitspraken. In alledaagse taal zeg je -더라도, of 차라리 ... -는 게 나아요."
  ],
  pitfall: "Zet het offer vóór -ㄹ지언정 en de weigering erna. Draai je ze om, dan zeg je het tegendeel.",
  examples: [
    { cn: "굶을지언정 남의 돈은 훔치지 않겠다.", py: "Gulmeuljieonjeong namui doneun humchiji anketda.", nl: "Ik verhonger liever dan dat ik andermans geld steel." },
    { cn: "죽을지언정 거짓말은 하지 않겠습니다.", py: "Jugeuljieonjeong geojitmareun haji anketseumnida.", nl: "Ik sterf nog liever dan dat ik lieg." },
    { cn: "가난할지언정 비굴하게 살고 싶지는 않다.", py: "Gananhaljieonjeong bigulhage salgo sipjineun anta.", nl: "Ook al ben ik arm, ik wil niet kruiperig leven." },
    { cn: "시험에 떨어질지언정 부정행위는 하지 않을 거예요.", py: "Siheome tteoreojiljieonjeong bujeonghaengwineun haji aneul geoyeyo.", nl: "Ik zak liever voor het examen dan dat ik spiek." }
  ],
  nuance: [
    { h: "-(으)ㄹ지언정 of -더라도?",
      p: "-더라도 betekent \"ook als\": een neutrale toegeving, in spreektaal en schrijftaal. -(으)ㄹ지언정 is veel sterker. Je aanvaardt bewust iets ergs omdat je een principe niet wilt opgeven. Gaat het om weer, planning of toeval, dan past alleen -더라도.",
      ex: [
        { cn: "비가 오더라도 행사는 예정대로 진행합니다.", py: "Biga odeorado haengsaneun yejeongdaero jinhaenghamnida.", nl: "Ook als het regent, gaat het evenement gewoon door." },
        { cn: "굶을지언정 남의 도움은 받지 않겠다.", py: "Gulmeuljieonjeong namui doumeun batji anketda.", nl: "Ik verhonger nog liever dan dat ik hulp van anderen aanneem." }
      ] },
    { h: "Spreektaal: 차라리 ... -는 게 낫다",
      p: "In een gesprek met vrienden klinkt -(으)ㄹ지언정 plechtig. Daar zeg je 차라리 (liever nog) met -는 게 낫다: eerst het offer, dan wat je weigert. In toespraken, essays en beloftes past -(으)ㄹ지언정 juist goed. Een bijna-synoniem in schrijftaal is -(으)ㄹ망정.",
      ex: [
        { cn: "차라리 굶는 게 낫지, 그 사람한테 돈은 안 빌려.", py: "Charari gumneun ge natji, geu saramhante doneun an billyeo.", nl: "Ik verhonger nog liever. Van hem leen ik geen geld." }
      ] },
    { h: "Met een bijvoeglijk werkwoord: \"ook al\"",
      p: "Na een bijvoeglijk werkwoord of een naamwoord betekent -(으)ㄹ지언정 \"ook al is het zo\". Het eerste deel geef je toe, het tweede deel is het belangrijke punt. Het tweede deel hoeft dan geen weigering te zijn.",
      ex: [
        { cn: "몸은 힘들지언정 마음은 편하다.", py: "Momeun himdeuljieonjeong maeumeun pyeonhada.", nl: "Mijn lichaam is dan wel moe, maar mijn geest is rustig." },
        { cn: "그는 아이일지언정 옳고 그른 것은 안다.", py: "Geuneun aiiljieonjeong olko geureun geoseun anda.", nl: "Hij is dan wel een kind, maar hij weet wat goed en fout is." }
      ] }
  ],
  mistakes: [
    { wrong: "지는지언정 반칙은 하지 않겠어요.", right: "질지언정 반칙은 하지 않겠어요.", why: "Vóór 지언정 staat altijd -(으)ㄹ, nooit -는." },
    { wrong: "차를 팔을지언정 돈은 빌리지 않겠어요.", right: "차를 팔지언정 돈은 빌리지 않겠어요.", why: "Bij een stam op ㄹ komt geen -을. 팔- wordt 팔지언정." },
    { wrong: "굶을 지언정 남의 돈은 훔치지 않겠다.", right: "굶을지언정 남의 돈은 훔치지 않겠다.", why: "지언정 is een uitgang. Je schrijft het vast, zonder spatie." },
    { wrong: "부정행위를 할지언정 시험에 떨어지지는 않겠다.", right: "시험에 떨어질지언정 부정행위는 하지 않겠다.", why: "Het offer (zakken) staat vóór 지언정, de weigering (spieken) erna. Omgekeerd zeg je dat je liever spiekt." }
  ],
  vocab: [
    ["-(으)ㄹ지언정", "-(eu)ljieonjeong", "liever ... dan; ook al (formeel)"], ["반칙", "banchik", "overtreding, vals spel"],
    ["비굴하다", "bigulhada", "kruiperig, laf"], ["부정행위", "bujeonghaengwi", "fraude, spieken"],
    ["손해", "sonhae", "verlies, schade"], ["떳떳하다", "tteotteotada", "met opgeheven hoofd, zonder iets te verbergen"],
    ["배신하다", "baesinhada", "verraden"], ["신념", "sinnyeom", "overtuiging"],
    ["타협하다", "tahyeopada", "een compromis sluiten, toegeven"], ["지시하다", "jisihada", "opdragen, instrueren"]
  ],
  dialogue: [
    ["A", "회사에서 보고서 숫자를 바꾸라고 했다면서요?", "Hoesaeseo bogoseo sutjareul bakkurago haetdamyeonseoyo?", "Ik hoorde dat het bedrijf vroeg de cijfers in het rapport te veranderen?"],
    ["B", "네, 매출을 더 높게 쓰라고 했어요.", "Ne, maechureul deo nopge sseurago haesseoyo.", "Ja, ik moest een hogere omzet opschrijven."],
    ["A", "그래서 어떻게 하실 거예요?", "Geuraeseo eotteoke hasil geoyeyo?", "En wat gaat u doen?"],
    ["B", "회사를 그만둘지언정 거짓 보고서는 쓰지 않겠습니다.", "Hoesareul geumanduljieonjeong geojit bogoseoneun sseuji anketseumnida.", "Ik neem liever ontslag dan dat ik een vals rapport schrijf."],
    ["A", "쉽지 않은 결정이네요.", "Swipji aneun gyeoljeongineyo.", "Dat is geen makkelijke beslissing."],
    ["B", "손해를 볼지언정 떳떳하게 살고 싶어요.", "Sonhaereul boljieonjeong tteotteotage salgo sipeoyo.", "Ook al lijd ik verlies, ik wil eerlijk leven."]
  ],
  reading: {
    title: "한 기자의 선택",
    lines: [
      { cn: "김 기자는 30년 동안 한 신문사에서 일해 왔다.", py: "Gim gijaneun samsimnyeon dongan han sinmunsaeseo ilhae watda.", nl: "Journalist Kim werkte dertig jaar bij één krant." },
      { cn: "어느 날 회사는 한 대기업에 유리한 기사를 쓰라고 지시했다.", py: "Eoneu nal hoesaneun han daegieobe yurihan gisareul sseurago jisihaetda.", nl: "Op een dag droeg het bedrijf hem op een artikel te schrijven dat gunstig was voor een groot concern." },
      { cn: "그 기사는 사실과 달랐지만, 거절하면 일자리를 잃을 수도 있었다.", py: "Geu gisaneun sasilgwa dallatjiman, geojeolhamyeon iljarireul ireul sudo isseotda.", nl: "Het artikel klopte niet met de feiten, maar als hij weigerde, kon hij zijn baan verliezen." },
      { cn: "동료들은 조금만 타협하라고 했지만, 그는 손해를 볼지언정 신념을 버릴 수는 없다고 답했다.", py: "Dongnyodeureun jogeumman tahyeoparago haetjiman, geuneun sonhaereul boljieonjeong sinnyeomeul beoril suneun eopdago dapaetda.", nl: "Collega's zeiden dat hij een beetje moest toegeven, maar hij antwoordde dat hij liever verlies leed dan zijn overtuiging opgaf." },
      { cn: "그리고 회의에서 이렇게 말했다.", py: "Geurigo hoeuieseo ireoke malhaetda.", nl: "En in de vergadering zei hij het volgende." },
      { cn: "\"기자를 그만둘지언정 거짓 기사는 쓰지 않겠습니다.\"", py: "\"Gijareul geumanduljieonjeong geojit gisaneun sseuji anketseumnida.\"", nl: "\"Ik stop nog liever als journalist dan dat ik een vals artikel schrijf.\"" },
      { cn: "결국 그는 회사를 떠났고, 생활은 한동안 어려웠다.", py: "Gyeolguk geuneun hoesareul tteonatgo, saenghwareun handongan eoryeowotda.", nl: "Uiteindelijk vertrok hij, en een tijd lang was het leven moeilijk." },
      { cn: "그러나 그는 지금도 \"삶은 고달플지언정 마음은 떳떳하다\"고 말한다.", py: "Geureona geuneun jigeumdo \"salmeun godalpeuljieonjeong maeumeun tteotteotada\"go malhanda.", nl: "Toch zegt hij nog steeds: \"Het leven is dan wel zwaar, maar ik kan iedereen recht aankijken.\"" },
      { cn: "그의 이야기는 신념과 타협하지 않는 삶이 무엇인지 보여 준다.", py: "Geuui iyagineun sinnyeomgwa tahyeopaji anneun salmi mueosinji boyeo junda.", nl: "Zijn verhaal laat zien wat een leven zonder compromissen met je overtuiging betekent." }
    ],
    questions: [
      { type: "mc", q: "Wat vroeg het bedrijf aan journalist Kim?",
        options: ["Een artikel schrijven dat gunstig was voor een groot concern.", "Ontslag nemen.", "Een artikel over zijn collega's schrijven.", "Een vergadering leiden."], answer: 0,
        why: ["Goed: 대기업에 유리한 기사를 쓰라고 지시했다.", "Hij vertrok zelf. Het bedrijf vroeg dat niet.", "Zijn collega's gaven alleen advies.", "Hij sprak in een vergadering, maar dat was geen opdracht."] },
      { type: "mc", q: "Hoe gaat het nu met hem?",
        options: ["Het leven is zwaar, maar hij heeft niets te verbergen.", "Hij heeft spijt van zijn keuze.", "Hij werkt weer bij dezelfde krant.", "Hij is rijk geworden."], answer: 0,
        why: ["Goed: 삶은 고달플지언정 마음은 떳떳하다.", "Hij zegt juist dat hij zich eerlijk voelt. Over spijt staat niets in de tekst.", "Hij heeft het bedrijf verlaten (회사를 떠났고).", "Het leven was juist moeilijk (어려웠다)."] },
      { type: "mc", q: "기자를 그만둘지언정 거짓 기사는 쓰지 않겠습니다. Wat bedoelt hij?",
        options: ["Hij stopt liever als journalist dan dat hij een vals artikel schrijft.", "Ook als hij stopt, schrijft hij het artikel.", "Hij stopt als journalist omdat hij het artikel heeft geschreven.", "Hij schrijft liever een vals artikel dan dat hij stopt."], answer: 0,
        why: ["Goed: het offer (stoppen) staat vóór 지언정, de weigering erna.", "쓰지 않겠습니다 zegt dat hij het niet schrijft.", "-ㄹ지언정 geeft geen reden aan.", "Dat is de omgekeerde betekenis."] }
    ]
  },
  questions: [
    { type: "mc", q: "차라리 혼자 ___ 그 사람과는 일하지 않겠어요. (Ik werk liever alleen dan met hem.)",
      options: ["일할지언정", "일하을지언정", "일한지언정", "일하지언정"], answer: 0,
      why: ["Goed: 일하- eindigt op een klinker, dus -ㄹ지언정.", "Na een klinker komt -ㄹ, niet -을.", "De vorm heeft -ㄹ nodig, niet -ㄴ.", "Tussen de stam en 지언정 hoort -ㄹ."] },
    { type: "mc", q: "\"Ik verlies liever mijn baan dan dat ik lieg.\"",
      options: ["일자리를 잃을지언정 거짓말은 하지 않겠어요.", "일자리를 잃지언정 거짓말은 하지 않겠어요.", "일자리를 잃은지언정 거짓말은 하지 않겠어요.", "일자리를 잃는지언정 거짓말은 하지 않겠어요."], answer: 0,
      why: ["Goed: 잃- eindigt op een medeklinker, dus -을지언정.", "Na een medeklinker komt -을 vóór 지언정.", "De vorm heeft -을 nodig, niet -은.", "De vorm heeft -을 nodig, niet -는."] },
    { type: "mc", q: "몸은 힘들지언정 마음은 편해요. Wat betekent dit?",
      options: ["Mijn lichaam is misschien moe, maar mijn hoofd is rustig.", "Omdat mijn lichaam moe is, is mijn hoofd rustig.", "Mijn lichaam is moe en mijn hoofd ook.", "Mijn lichaam is niet moe, maar mijn hoofd is onrustig."], answer: 0,
      why: ["Goed: bij een bijvoeglijk werkwoord betekent -ㄹ지언정 \"ook al\".", "-ㄹ지언정 geeft geen reden aan.", "편해요 betekent rustig, niet moe.", "힘들지언정 zegt dat het lichaam wel moe is."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik sterf liever dan dat ik mijn vriend verraad.\"",
      tokens: [["죽을지언정", "jugeuljieonjeong"], ["친구를", "chingureul"], ["배신하지는", "baesinhajineun"], ["않겠어요", "ankesseoyo"]] },
    { type: "mc", q: "비가 ___ 행사는 예정대로 진행합니다. (Ook als het regent, gaat het evenement gewoon door.)",
      options: ["오더라도", "올지언정", "오지언정", "와더라도"], answer: 0,
      why: ["Goed: een neutrale toegeving over het weer is -더라도.", "-ㄹ지언정 is voor een offer dat je uit principe aanvaardt. Regen kies je niet.", "Ook als je 지언정 zou willen: er ontbreekt -ㄹ.", "-더라도 komt direct na de stam: 오더라도."] },
    { type: "mc", q: "Welke spreektaalzin betekent ongeveer hetzelfde als 굶을지언정 그 사람한테 돈은 안 빌리겠다?",
      options: ["차라리 굶는 게 낫지, 그 사람한테 돈은 안 빌려.", "굶더라도 그 사람한테 돈은 빌릴 거야.", "그 사람한테 돈을 빌리는 게 차라리 나아.", "배가 고프니까 그 사람한테 돈을 빌려."], answer: 0,
      why: ["Goed: 차라리 + offer + -는 게 낫다, en daarna de weigering.", "Hier leen je toch geld. Dat is het tegendeel.", "Hier is lenen juist de betere keuze. De betekenis is omgedraaid.", "-니까 geeft een reden en je leent wel geld."] },
    { type: "mc", q: "\"Hij is dan wel een kind, maar hij weet wat goed en fout is.\"",
      options: ["그는 아이일지언정 옳고 그른 것은 안다.", "그는 아이할지언정 옳고 그른 것은 안다.", "그는 아인지언정 옳고 그른 것은 안다.", "그는 아이을지언정 옳고 그른 것은 안다."], answer: 0,
      why: ["Goed: na een naamwoord gebruik je -일지언정.", "아이 is een naamwoord. Je gebruikt 이다, niet 하다.", "Vóór 지언정 staat -ㄹ, niet -ㄴ.", "Na een naamwoord komt 일, niet 을."] },
    { type: "fill", q: "가난___ 비굴하게 살지는 않겠다. (Ik ben nog liever arm dan dat ik kruiperig leef.)",
      answers: ["할지언정", "할망정"], hint: "가난하다 + de formele vorm voor \"liever ... dan\".", why: "가난하- eindigt op een klinker: 가난할지언정. Het bijna-synoniem 가난할망정 is ook goed." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik zak liever voor het examen dan dat ik spiek.\"",
      tokens: [["시험에", "siheome"], ["떨어질지언정", "tteoreojiljieonjeong"], ["부정행위는", "bujeonghaengwineun"], ["하지 않겠다", "haji anketda"]] },
    { type: "open", q: "Vertaal: \"Ik loop liever dan dat ik in zijn auto stap.\"",
      model: ["걸어갈지언정 그 사람 차는 타지 않겠어요.", "걸어서 갈지언정 그의 차는 안 탈 거예요.", "걸어갈지언정 그 사람의 차는 타지 않겠습니다."],
      tip: "Check: staat het offer (lopen) vóór -ㄹ지언정, en volgt de weigering erna?" },
    { type: "open", q: "Vertaal in formele stijl: \"Ik verlies liever geld dan het vertrouwen van mensen.\"",
      model: ["돈을 잃을지언정 사람들의 신뢰는 잃지 않겠다.", "돈은 잃을지언정 신뢰를 잃을 수는 없습니다.", "손해를 볼지언정 사람들의 신뢰는 잃지 않겠습니다."],
      tip: "Check: 잃- + -을지언정 (medeklinker), het offer eerst, en een weigering als -지 않겠다 of -(으)ㄹ 수 없다." }
  ],
  review: [
    { type: "mc", q: "돈을 적게 ___ 이 일을 하고 싶어요. (Ook al verdien ik minder, ik wil dit werk doen.)",
      options: ["받을지언정", "받지언정", "받는지언정", "받아지언정"], answer: 0,
      why: ["Goed: 받- eindigt op een medeklinker, dus -을지언정.", "Na een medeklinker komt -을 vóór 지언정.", "De vorm heeft -을 nodig, niet -는.", "-아 past niet vóór 지언정."] },
    { type: "mc", q: "\"Ik verkoop liever mijn auto dan dat ik geld leen van mijn ouders.\"",
      options: ["차를 팔지언정 부모님께 돈을 빌리지는 않겠어요.", "차를 팔을지언정 부모님께 돈을 빌리지는 않겠어요.", "차를 판지언정 부모님께 돈을 빌리지는 않겠어요.", "부모님께 돈을 빌릴지언정 차는 팔지 않겠어요."], answer: 0,
      why: ["Goed: bij een stam op ㄹ zeg je 팔지언정.", "Na ㄹ komt geen -을. De vorm is 팔지언정.", "De vorm heeft -ㄹ nodig, niet -ㄴ.", "De betekenis is omgedraaid. Nu leen je liever geld."] },
    { type: "mc", q: "\"Ik word liever uitgelachen dan dat ik mijn droom opgeef.\"",
      options: ["비웃음을 살지언정 꿈은 포기하지 않겠어요.", "비웃음을 사을지언정 꿈은 포기하지 않겠어요.", "비웃음을 산지언정 꿈은 포기하지 않겠어요.", "꿈을 포기할지언정 비웃음은 사지 않겠어요."], answer: 0,
      why: ["Goed: 사- eindigt op een klinker, dus 살지언정. Het offer staat eerst.", "Na een klinker komt -ㄹ, niet -을.", "Vóór 지언정 staat -ㄹ, niet -ㄴ.", "De betekenis is omgedraaid. Nu geef je liever je droom op."] }
  ]
})
