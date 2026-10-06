// TOPIK 6 lessons (grammar first, vocab follows later).
// Question types: mc (answer = index), order (tokens in the right order), open (self-check with model answers).
// "review" questions never appear in the lesson itself; they come back on the review page.
window.HSK = window.HSK || {};
window.HSK.topik6 = {
  level: "TOPIK 6", dir: "topik6",
  lessons: [
    {
      id: "01", slug: "dedaga", title: "-(으)ㄴ/는 데다가", sub: "Er nog een punt bovenop zetten",
      canDo: "Je kunt nu twee punten in dezelfde richting stapelen met -(으)ㄴ/는 데다가.",
      guess: {
        q: "\"Dit restaurant is duur en bovendien niet lekker.\" Welke zin klopt, denk je?",
        options: ["이 식당은 비싼 데다가 맛도 없어요.", "이 식당은 비싸는 데다가 맛도 없어요.", "이 식당은 비쌀 데다가 맛도 없어요.", "이 식당은 비싸 데다가 맛도 없어요."], answer: 0,
        why: ["Goed: 비싸다 is een bijvoeglijk werkwoord, dus -ㄴ 데다가.", "-는 hoort bij gewone werkwoorden, niet bij 비싸다.", "-ㄹ wijst naar de toekomst en past niet voor 데다가.", "Voor 데 moet een vorm met -ㄴ of -는 staan."]
      },
      problem: "Je wilt een tweede punt toevoegen dat het eerste versterkt. Met -고 zet je twee feiten naast elkaar. Met -(으)ㄴ/는 데다가 zeg je: en daar komt nog iets bij. Beide punten wijzen dezelfde kant op.",
      pattern: [
        { l: "punt 1", v: "비가 오", c: 1 }, { l: "데다가", v: "는 데다가", c: 2, key: true },
        { l: "punt 2", v: "바람도", c: 3 }, { l: "werkwoord", v: "불어요", c: 4 }
      ],
      patternCap: "Punt 1 + -(으)ㄴ/는 데다가 + punt 2 (vaak met 도 of 까지)",
      rules: [
        "Werkwoord in het heden: -는 데다가 (오는 데다가). Bijvoeglijk werkwoord: -(으)ㄴ 데다가 (비싼, 좋은).",
        "Verleden bij een werkwoord: -(으)ㄴ 데다가 (못 잔 데다가). Zelfstandig naamwoord: -인 데다가 (의사인 데다가).",
        "데 is een los woord: je schrijft een spatie ervoor. In spreektaal hoor je ook -는 데다.",
        "Register: spreektaal en schrijftaal. In alledaagse taal zeg je ook -고 또, of een nieuwe zin met 게다가."
      ],
      pitfall: "Beide punten moeten dezelfde kant op wijzen. Voor een tegenstelling (duur maar lekker) gebruik je -지만, niet 데다가.",
      examples: [
        { cn: "그 사람은 성격이 좋은 데다가 일도 잘해요.", py: "Geu sarameun seonggyeogi joeun dedaga ildo jalhaeyo.", nl: "Hij heeft een goed karakter en werkt bovendien goed." },
        { cn: "비가 오는 데다가 바람까지 불어서 밖에 나가기 싫어요.", py: "Biga oneun dedaga baramkkaji bureoseo bakke nagagi sireoyo.", nl: "Het regent en het waait ook nog. Ik wil niet naar buiten." },
        { cn: "어젯밤에 잠을 못 잔 데다가 아침도 굶어서 너무 피곤해요.", py: "Eojetbame jameul mot jan dedaga achimdo gulmeoseo neomu pigonhaeyo.", nl: "Ik heb vannacht niet geslapen en ook niet ontbeten. Ik ben erg moe." },
        { cn: "그는 의사인 데다가 소설가이기도 하다.", py: "Geuneun uisain dedaga soseolgaigido hada.", nl: "Hij is arts en bovendien ook romanschrijver." }
      ],
      vocab: [],
      dialogue: [
        ["A", "왜 그 집으로 이사하지 않았어요?", "Wae geu jibeuro isahaji anasseoyo?", "Waarom ben je niet naar dat huis verhuisd?"],
        ["B", "월세가 비싼 데다가 회사에서도 너무 멀었거든요.", "Wolsega bissan dedaga hoesaeseodo neomu meoreotgeodeunyo.", "De huur was duur en het lag ook nog ver van mijn werk."],
        ["A", "그럼 지금 사는 집은 어때요?", "Geureom jigeum saneun jibeun eottaeyo?", "En het huis waar je nu woont?"],
        ["B", "조용한 데다가 역에서도 가까워서 마음에 들어요.", "Joyonghan dedaga yeogeseodo gakkawoseo maeume deureoyo.", "Het is rustig en ligt ook dicht bij het station. Ik vind het fijn."],
        ["A", "좋겠네요. 저도 이사하고 싶어요.", "Jokenneyo. Jeodo isahago sipeoyo.", "Wat fijn. Ik wil ook verhuizen."]
      ],
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
        { type: "open", q: "Vertaal: \"Dit appartement is goedkoop en ligt bovendien dicht bij het station.\"",
          model: ["이 아파트는 싼 데다가 역에서도 가까워요.", "이 아파트는 값이 싼 데다가 역에서 가까워요.", "이 집은 싼 데다가 역에서도 가깝습니다."],
          tip: "Check: staat er 싼 (niet 싸는) vóór 데다가, met een spatie ervoor?" }
      ],
      review: [
        { type: "mc", q: "그 영화는 ___ 데다가 재미도 없었어요. (De film was lang en bovendien saai.)",
          options: ["긴", "길는", "길은", "길"], answer: 0,
          why: ["Goed: bij 길다 valt de ㄹ weg voor -ㄴ: 긴.", "길다 is een bijvoeglijk werkwoord. -는 past niet.", "Bij een stam op ㄹ valt de ㄹ weg. Er komt geen -은.", "Voor 데 moet een vorm met -ㄴ staan."] },
        { type: "mc", q: "\"Ze kan goed koken en zingt bovendien goed.\"",
          options: ["그녀는 요리를 잘하는 데다가 노래도 잘해요.", "그녀는 요리를 잘하는 데다가 노래는 못해요.", "그녀는 요리를 잘할 데다가 노래도 잘해요.", "그녀는 요리를 잘해 데다가 노래도 잘해요."], answer: 0,
          why: ["Goed: twee positieve punten, en -는 bij het werkwoord 잘하다.", "Dit is een tegenstelling. Daarvoor gebruik je -지만.", "-ㄹ wijst naar de toekomst en past niet voor 데다가.", "Voor 데 moet een vorm met -는 staan."] }
      ]
    },
    {
      id: "02", slug: "keonyeong", title: "-기는커녕", sub: "Laat staan, zelfs dat niet",
      canDo: "Je kunt nu zeggen dat iets niet gebeurde en zelfs iets kleiners niet, met -기는커녕 en (으)ㄴ/는커녕.",
      guess: {
        q: "\"Ik heb niet eens ontbeten, laat staan geluncht.\" Welke zin klopt, denk je?",
        options: ["점심은커녕 아침도 못 먹었어요.", "아침은커녕 점심도 못 먹었어요.", "점심은커녕 아침도 먹었어요.", "점심는커녕 아침도 못 먹었어요."], answer: 0,
        why: ["Goed: het grote ding (lunch) staat voor 커녕, het kleine ding met 도 en een ontkenning erna.", "De volgorde is omgedraaid. Het ontbijt is wat je zelfs niet deed.", "Na 커녕 volgt een ontkenning: 못 먹었어요.", "점심 eindigt op een medeklinker, dus 은커녕."]
      },
      problem: "Soms gebeurt iets niet, en zelfs iets veel kleiners niet. Of het tegendeel gebeurt. In het Nederlands zeg je \"laat staan\" of \"in plaats van\". In het Koreaans gebruik je -기는커녕.",
      pattern: [
        { l: "groot ding", v: "사과하", c: 1 }, { l: "커녕", v: "기는커녕", c: 2, key: true },
        { l: "klein ding + 도", v: "인사도", c: 3 }, { l: "ontkenning", v: "안 했어요", c: 4 }
      ],
      patternCap: "Werkwoord + -기는커녕 / naamwoord + 은/는커녕, dan iets kleiners + 도 + ontkenning, of 오히려 + het tegendeel",
      rules: [
        "Werkwoord: stam + -기는커녕 (가기는커녕, 먹기는커녕). Er komt geen tijd voor -기.",
        "Zelfstandig naamwoord: na een medeklinker 은커녕 (점심은커녕), na een klinker 는커녕 (차는커녕).",
        "Na 커녕 volgt een kleiner ding met 도 of 조차 plus een ontkenning, of 오히려 met het tegendeel.",
        "Register: spreektaal en schrijftaal. In spreektaal hoor je ook -긴커녕. Formeler is -기는 고사하고."
      ],
      pitfall: "Zet het grote ding vóór 커녕 en het kleine ding erna. Omgekeerd klopt de logica niet.",
      examples: [
        { cn: "돈을 모으기는커녕 빚만 늘었어요.", py: "Doneul moeugineunkeonyeong binman neureosseoyo.", nl: "In plaats van geld te sparen, kreeg ik alleen meer schulden." },
        { cn: "바빠서 여행은커녕 주말에도 못 쉬어요.", py: "Bappaseo yeohaengeunkeonyeong jumaredo mot swieoyo.", nl: "Ik ben zo druk. Ik kan niet eens in het weekend rusten, laat staan op reis gaan." },
        { cn: "칭찬을 듣기는커녕 오히려 혼났어요.", py: "Chingchaneul deutgineunkeonyeong ohiryeo honnasseoyo.", nl: "Ik kreeg geen lof. Ik kreeg juist op mijn kop." },
        { cn: "그는 사과하기는커녕 인사도 하지 않았다.", py: "Geuneun sagwahagineunkeonyeong insado haji anatda.", nl: "Hij bood geen excuses aan. Hij groette niet eens." }
      ],
      vocab: [],
      dialogue: [
        ["A", "새 프로젝트는 잘돼 가요?", "Sae peurojekteuneun jaldwae gayo?", "Gaat het goed met het nieuwe project?"],
        ["B", "잘되기는커녕 시작도 못 했어요.", "Jaldoegineunkeonyeong sijakdo mot haesseoyo.", "Goed? We zijn niet eens begonnen."],
        ["A", "왜요? 팀장님이 도와주지 않으셨어요?", "Waeyo? Timjangnimi dowajuji aneusyeosseoyo?", "Hoezo? Heeft de teamleider niet geholpen?"],
        ["B", "도와주시기는커녕 연락도 안 받으세요.", "Dowajusigineunkeonyeong yeollakdo an badeuseyo.", "Helpen? Hij neemt niet eens op."],
        ["A", "정말 힘들겠네요.", "Jeongmal himdeulgenneyo.", "Dat is echt zwaar."]
      ],
      questions: [
        { type: "mc", q: "그는 나를 ___ 방해만 했어요. (Hij hielp me niet, hij zat me alleen in de weg.)",
          options: ["도와주기는커녕", "도와주는커녕", "도와줬기는커녕", "도와주지는커녕"], answer: 0,
          why: ["Goed: werkwoordstam + -기는커녕.", "Bij een werkwoord komt eerst -기. -는커녕 alleen is voor naamwoorden.", "Voor -기 komt geen tijd. De tijd staat aan het eind.", "-지 past hier niet. De vorm is -기는커녕."] },
        { type: "mc", q: "\"Hij heeft niet eens gebeld, laat staan dat hij langskwam.\"",
          options: ["그는 찾아오기는커녕 전화도 안 했어요.", "그는 찾아오기는커녕 전화도 했어요.", "그는 전화하기는커녕 찾아오지도 않았어요.", "그는 찾아오는커녕 전화도 안 했어요."], answer: 0,
          why: ["Goed: het grote ding (langskomen) voor 커녕, het kleine (bellen) met 도 en 안.", "Na 커녕 + 도 volgt een ontkenning.", "De volgorde is omgedraaid. Bellen is wat hij zelfs niet deed.", "Bij een werkwoord gebruik je -기는커녕."] },
        { type: "mc", q: "\"Ik heb niet eens tijd om te slapen, laat staan om te sporten.\"",
          options: ["운동은커녕 잘 시간도 없어요.", "운동는커녕 잘 시간도 없어요.", "운동을커녕 잘 시간도 없어요.", "운동이커녕 잘 시간도 없어요."], answer: 0,
          why: ["Goed: 운동 eindigt op een medeklinker, dus 은커녕.", "Na een medeklinker gebruik je 은커녕, niet 는커녕.", "커녕 komt na 은/는, niet na het lijdend voorwerp 을.", "커녕 komt na 은/는, niet na het onderwerp 이."] },
        { type: "order", q: "Zet in de goede volgorde: \"In plaats van sorry te zeggen, werd hij juist boos.\"",
          tokens: [["사과하기는커녕", "sagwahagineunkeonyeong"], ["오히려", "ohiryeo"], ["화를", "hwareul"], ["냈어요", "naesseoyo"]] },
        { type: "open", q: "Vertaal: \"Ik heb niet eens een kamer, laat staan een huis.\"",
          model: ["집은커녕 방도 없어요.", "집은커녕 방 한 칸도 없어요.", "집은커녕 방조차 없습니다."],
          tip: "Check: staat 집 (het grote ding) voor 은커녕, en 방 met 도 of 조차 erna?" }
      ],
      review: [
        { type: "mc", q: "살을 빼기는커녕 오히려 3킬로 쪘어요. Wat betekent dit?",
          options: ["In plaats van af te vallen, ben ik juist 3 kilo aangekomen.", "Ik ben afgevallen en ook 3 kilo aangekomen.", "Ik ben niet afgevallen en ook niet aangekomen.", "Ik wil afvallen, want ik ben 3 kilo aangekomen."], answer: 0,
          why: ["Goed: -기는커녕 + 오히려 geeft het tegendeel aan.", "-기는커녕 zegt dat het afvallen niet gebeurde.", "쪘어요 zegt dat je wel bent aangekomen.", "-기는커녕 geeft geen reden of wens aan."] },
        { type: "mc", q: "\"Ik kan niet eens Hangul lezen, laat staan een Koreaanse krant.\"",
          options: ["한국 신문은커녕 한글도 못 읽어요.", "한글은커녕 한국 신문도 못 읽어요.", "한국 신문은커녕 한글도 읽어요.", "한국 신문는커녕 한글도 못 읽어요."], answer: 0,
          why: ["Goed: de krant (groot) voor 커녕, Hangul (klein) met 도 en 못.", "De volgorde is omgedraaid. Hangul is wat je zelfs niet kunt.", "Na 커녕 + 도 volgt een ontkenning.", "신문 eindigt op een medeklinker, dus 은커녕."] }
      ]
    },
    {
      id: "03", slug: "jieonjeong", title: "-(으)ㄹ지언정", sub: "Liever dit dan dat",
      canDo: "Je kunt nu een sterk principe uitdrukken met -(으)ㄹ지언정: liever het ergste dan iets wat je weigert.",
      guess: {
        q: "\"Ik verlies liever dan dat ik vals speel.\" Welke zin klopt, denk je?",
        options: ["질지언정 반칙은 하지 않겠어요.", "질지언정 반칙은 하겠어요.", "반칙할지언정 지지는 않겠어요.", "지는지언정 반칙은 하지 않겠어요."], answer: 0,
        why: ["Goed: het offer (verliezen) staat voor -ㄹ지언정, de weigering erna.", "Na -ㄹ지언정 volgt meestal wat je weigert: 하지 않겠어요.", "De betekenis is omgedraaid. Nu speel je liever vals.", "-ㄹ지언정 komt direct na de stam: 질지언정."]
      },
      problem: "Je wilt een sterk principe uitspreken. Je accepteert liever iets ergs dan dat je iets verkeerds doet. In het Nederlands zeg je \"liever ... dan\". In formeel Koreaans gebruik je -(으)ㄹ지언정.",
      pattern: [
        { l: "offer", v: "굶을", c: 1 }, { l: "지언정", v: "지언정", c: 2, key: true },
        { l: "ding + 은/는", v: "남의 돈은", c: 3 }, { l: "weigering", v: "훔치지 않겠다", c: 4 }
      ],
      patternCap: "Offer + -(으)ㄹ지언정 + wat je weigert (vaak -지 않겠다, -지 않을 것이다)",
      rules: [
        "Na een klinker of ㄹ: -ㄹ지언정 (질지언정, 팔지언정). Na een medeklinker: -을지언정 (굶을지언정).",
        "Het werkt ook met bijvoeglijke werkwoorden. Dan betekent het \"ook al\": 몸은 힘들지언정 마음은 편하다.",
        "지언정 plak je vast aan de vorm, zonder spatie. Na een naamwoord: -일지언정.",
        "Register: formeel, vooral schrijftaal en plechtige uitspraken. In alledaagse taal zeg je -더라도, of 차라리 ... -는 게 나아요."
      ],
      pitfall: "Zet het offer voor -ㄹ지언정 en de weigering erna. Draai je ze om, dan zeg je het tegendeel.",
      examples: [
        { cn: "굶을지언정 남의 돈은 훔치지 않겠다.", py: "Gulmeuljieonjeong namui doneun humchiji anketda.", nl: "Ik verhonger liever dan dat ik andermans geld steel." },
        { cn: "죽을지언정 거짓말은 하지 않겠습니다.", py: "Jugeuljieonjeong geojitmareun haji anketseumnida.", nl: "Ik sterf nog liever dan dat ik lieg." },
        { cn: "가난할지언정 비굴하게 살고 싶지는 않다.", py: "Gananhaljieonjeong bigulhage salgo sipjineun anta.", nl: "Ook al ben ik arm, ik wil niet kruiperig leven." },
        { cn: "시험에 떨어질지언정 부정행위는 하지 않을 거예요.", py: "Siheome tteoreojiljieonjeong bujeonghaengwineun haji aneul geoyeyo.", nl: "Ik zak liever voor het examen dan dat ik spiek." }
      ],
      vocab: [],
      dialogue: [
        ["A", "회사에서 보고서 숫자를 바꾸라고 했다면서요?", "Hoesaeseo bogoseo sutjareul bakkurago haetdamyeonseoyo?", "Ik hoorde dat het bedrijf vroeg de cijfers in het rapport te veranderen?"],
        ["B", "네, 매출을 더 높게 쓰라고 했어요.", "Ne, maechureul deo nopge sseurago haesseoyo.", "Ja, ik moest een hogere omzet opschrijven."],
        ["A", "그래서 어떻게 하실 거예요?", "Geuraeseo eotteoke hasil geoyeyo?", "En wat gaat u doen?"],
        ["B", "회사를 그만둘지언정 거짓 보고서는 쓰지 않겠습니다.", "Hoesareul geumanduljieonjeong geojit bogoseoneun sseuji anketseumnida.", "Ik neem liever ontslag dan dat ik een vals rapport schrijf."],
        ["A", "쉽지 않은 결정이네요.", "Swipji aneun gyeoljeongineyo.", "Dat is geen makkelijke beslissing."],
        ["B", "손해를 볼지언정 떳떳하게 살고 싶어요.", "Sonhaereul boljieonjeong tteottteotage salgo sipeoyo.", "Ook al lijd ik verlies, ik wil eerlijk leven."]
      ],
      questions: [
        { type: "mc", q: "차라리 혼자 ___ 그 사람과는 일하지 않겠어요. (Ik werk liever alleen dan met hem.)",
          options: ["일할지언정", "일하을지언정", "일한지언정", "일하지언정"], answer: 0,
          why: ["Goed: 일하- eindigt op een klinker, dus -ㄹ지언정.", "Na een klinker komt -ㄹ, niet -을.", "De vorm heeft -ㄹ nodig, niet -ㄴ.", "Tussen de stam en 지언정 hoort -ㄹ."] },
        { type: "mc", q: "\"Ik verlies liever mijn baan dan dat ik lieg.\"",
          options: ["일자리를 잃을지언정 거짓말은 하지 않겠어요.", "일자리를 잃지언정 거짓말은 하지 않겠어요.", "일자리를 잃은지언정 거짓말은 하지 않겠어요.", "일자리를 잃는지언정 거짓말은 하지 않겠어요."], answer: 0,
          why: ["Goed: 잃- eindigt op een medeklinker, dus -을지언정.", "Na een medeklinker komt -을 voor 지언정.", "De vorm heeft -을 nodig, niet -은.", "De vorm heeft -을 nodig, niet -는."] },
        { type: "mc", q: "몸은 힘들지언정 마음은 편해요. Wat betekent dit?",
          options: ["Mijn lichaam is misschien moe, maar mijn hoofd is rustig.", "Omdat mijn lichaam moe is, is mijn hoofd rustig.", "Mijn lichaam is moe en mijn hoofd ook.", "Mijn lichaam is niet moe, maar mijn hoofd is onrustig."], answer: 0,
          why: ["Goed: bij een bijvoeglijk werkwoord betekent -ㄹ지언정 \"ook al\".", "-ㄹ지언정 geeft geen reden aan.", "편해요 betekent rustig, niet moe.", "힘들지언정 zegt dat het lichaam wel moe is."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik sterf liever dan dat ik mijn vriend verraad.\"",
          tokens: [["죽을지언정", "jugeuljieonjeong"], ["친구를", "chingureul"], ["배신하지는", "baesinhajineun"], ["않겠어요", "ankesseoyo"]] },
        { type: "open", q: "Vertaal: \"Ik loop liever dan dat ik in zijn auto stap.\"",
          model: ["걸어갈지언정 그 사람 차는 타지 않겠어요.", "걸어서 갈지언정 그의 차는 안 탈 거예요.", "걸어갈지언정 그 사람의 차는 타지 않겠습니다."],
          tip: "Check: staat het offer (lopen) voor -ㄹ지언정, en volgt de weigering erna?" }
      ],
      review: [
        { type: "mc", q: "돈을 적게 ___ 이 일을 하고 싶어요. (Ook al verdien ik minder, ik wil dit werk doen.)",
          options: ["받을지언정", "받지언정", "받는지언정", "받아지언정"], answer: 0,
          why: ["Goed: 받- eindigt op een medeklinker, dus -을지언정.", "Na een medeklinker komt -을 voor 지언정.", "De vorm heeft -을 nodig, niet -는.", "-아 past niet voor 지언정."] },
        { type: "mc", q: "\"Ik verkoop liever mijn auto dan dat ik geld leen van mijn ouders.\"",
          options: ["차를 팔지언정 부모님께 돈을 빌리지는 않겠어요.", "차를 팔을지언정 부모님께 돈을 빌리지는 않겠어요.", "차를 판지언정 부모님께 돈을 빌리지는 않겠어요.", "부모님께 돈을 빌릴지언정 차는 팔지 않겠어요."], answer: 0,
          why: ["Goed: bij een stam op ㄹ zeg je 팔지언정.", "Na ㄹ komt geen -을. De vorm is 팔지언정.", "De vorm heeft -ㄹ nodig, niet -ㄴ.", "De betekenis is omgedraaid. Nu leen je liever geld."] }
      ]
    },
    {
      id: "04", slug: "beobida", title: "-는 법이다", sub: "Zo gaat het nu eenmaal",
      canDo: "Je kunt nu een algemene waarheid of levensles uitspreken met -는 법이다.",
      guess: {
        q: "\"Iedereen maakt in het begin fouten. Zo gaat dat nu eenmaal.\" Welke zin klopt, denk je?",
        options: ["처음에는 누구나 실수하는 법이에요.", "처음에는 누구나 실수한 법이에요.", "처음에는 누구나 실수할 법이에요.", "처음에는 누구나 실수하는 법해요."], answer: 0,
        why: ["Goed: werkwoord + -는 법이다 voor iets wat altijd zo gaat.", "-ㄴ is verleden. Een algemene waarheid staat in het heden.", "-ㄹ 법이다 bestaat niet. Gebruik -는 법이다.", "Na 법 komt 이다, hier 이에요."]
      },
      problem: "Je wilt zeggen dat iets altijd zo gaat, als een regel van het leven. In het Nederlands zeg je \"zo gaat dat nu eenmaal\". In het Koreaans plak je -는 법이다 achter het werkwoord.",
      pattern: [
        { l: "wie", v: "노력하는 사람이", c: 1 }, { l: "werkwoord", v: "성공하", c: 4 },
        { l: "법이다", v: "는 법이다", c: 2, key: true }
      ],
      patternCap: "Algemene situatie + werkwoord + -는 법이다 / bijvoeglijk werkwoord + -(으)ㄴ 법이다",
      rules: [
        "Werkwoord: -는 법이다 (실수하는, 느는). Bijvoeglijk werkwoord: -(으)ㄴ 법이다 (쓴, 낯선).",
        "Je gebruikt het voor algemene waarheden, niet voor één gebeurtenis. Daarom staat er geen verleden voor 법.",
        "법 is een los woord: schrijf een spatie ervoor. In beleefde spreektaal zeg je -는 법이에요.",
        "Register: schrijftaal en wijze raad in spreektaal. Het klinkt wat belerend. Alledaags zeg je -기 마련이에요, of 원래 ... -아요."
      ],
      pitfall: "Gebruik -는 법이다 niet voor je eigen eenmalige ervaring. 저는 어제 늦게 일어나는 법이에요 klopt niet.",
      examples: [
        { cn: "노력하는 사람이 결국 성공하는 법이다.", py: "Noryeokaneun sarami gyeolguk seonggonghaneun beobida.", nl: "Wie hard werkt, slaagt uiteindelijk. Zo gaat dat." },
        { cn: "좋은 약은 입에 쓴 법이에요.", py: "Joeun yageun ibe sseun beobieyo.", nl: "Goede medicijnen smaken nu eenmaal bitter." },
        { cn: "시간이 지나면 아픔도 잊게 되는 법이에요.", py: "Sigani jinamyeon apeumdo itge doeneun beobieyo.", nl: "Na verloop van tijd vergeet je ook de pijn." },
        { cn: "가까운 사이일수록 예의를 지켜야 하는 법이다.", py: "Gakkaun saiilsurok yeuireul jikyeoya haneun beobida.", nl: "Hoe dichter je bij iemand staat, hoe beleefder je moet blijven." }
      ],
      vocab: [],
      dialogue: [
        ["A", "발표를 망쳐서 너무 속상해요.", "Balpyoreul mangchyeoseo neomu soksanghaeyo.", "Ik heb mijn presentatie verknald. Ik baal enorm."],
        ["B", "첫 발표는 누구나 떨리는 법이에요.", "Cheot balpyoneun nuguna tteollineun beobieyo.", "Bij een eerste presentatie is iedereen zenuwachtig. Zo gaat dat."],
        ["A", "그래도 다음에는 잘하고 싶어요.", "Geuraedo daeumeneun jalhago sipeoyo.", "Toch wil ik het de volgende keer goed doen."],
        ["B", "연습하면 실력이 느는 법이에요.", "Yeonseupamyeon sillyeogi neuneun beobieyo.", "Als je oefent, word je vanzelf beter."],
        ["A", "고마워요. 힘이 나네요.", "Gomawoyo. Himi naneyo.", "Dank je. Daar krijg ik energie van."]
      ],
      questions: [
        { type: "mc", q: "잘못을 하면 벌을 ___ 법이다. (Wie iets fout doet, wordt nu eenmaal gestraft.)",
          options: ["받는", "받은", "받을", "받기"], answer: 0,
          why: ["Goed: werkwoord + -는 법이다.", "-은 is verleden. Een algemene regel staat in het heden.", "-을 법이다 bestaat niet.", "-기 is een naamwoordvorm en past niet voor 법."] },
        { type: "mc", q: "\"Een nieuwe omgeving is in het begin altijd onwennig.\"",
          options: ["새로운 환경은 처음에는 낯선 법이에요.", "새로운 환경은 처음에는 낯설은 법이에요.", "새로운 환경은 처음에는 낯설는 법이에요.", "새로운 환경은 처음에는 낯설 법이에요."], answer: 0,
          why: ["Goed: 낯설다 is bijvoeglijk en verliest de ㄹ voor -ㄴ: 낯선.", "Bij een stam op ㄹ valt de ㄹ weg. Er komt geen -은.", "낯설다 is een bijvoeglijk werkwoord. -는 past niet.", "Voor 법이다 hoort een vorm met -ㄴ."] },
        { type: "mc", q: "Welke zin past NIET bij -는 법이다?",
          options: ["저는 어제 늦게 일어나는 법이에요.", "부모는 자식을 걱정하는 법이에요.", "봄이 오면 꽃이 피는 법이에요.", "돈이 많으면 걱정도 많은 법이에요."], answer: 0,
          why: ["Goed: dit is één persoonlijke gebeurtenis, geen algemene waarheid.", "Dit kan: ouders maken zich altijd zorgen.", "Dit kan: het is een vaste regel van de natuur.", "Dit kan: het is een algemene levensles."] },
        { type: "order", q: "Zet in de goede volgorde: \"Hoe meer haast, hoe makkelijker je fouten maakt.\"",
          tokens: [["급할수록", "geupalsurok"], ["실수하기", "silsuhagi"], ["쉬운", "swiun"], ["법이에요", "beobieyo"]] },
        { type: "open", q: "Vertaal als levensles: \"Wie veel leest, weet veel.\"",
          model: ["책을 많이 읽는 사람은 아는 것이 많은 법이에요.", "책을 많이 읽으면 아는 게 많아지는 법이에요.", "많이 읽는 사람이 많이 아는 법이다."],
          tip: "Check: 많다 is bijvoeglijk (많은 법), 많아지다 is een werkwoord (많아지는 법)." }
      ],
      review: [
        { type: "mc", q: "비싼 물건은 대개 품질이 ___ 법이에요. (Dure spullen zijn meestal van goede kwaliteit.)",
          options: ["좋은", "좋는", "좋을", "좋아"], answer: 0,
          why: ["Goed: 좋다 is bijvoeglijk, dus -은 법이다.", "좋다 is een bijvoeglijk werkwoord. -는 past niet.", "-을 법이다 bestaat niet.", "Voor 법 hoort een vorm met -ㄴ, niet -아."] },
        { type: "mc", q: "아는 만큼 보이는 법이다. Wat betekent dit?",
          options: ["Je ziet zoveel als je weet. Zo gaat dat nu eenmaal.", "Je moet meer kijken om meer te weten.", "Gisteren zag ik alles wat ik wist.", "Ik weet niet wat ik zie."], answer: 0,
          why: ["Goed: -는 법이다 geeft een algemene waarheid.", "De richting is omgedraaid. Kennis komt eerst, zien volgt.", "-는 법이다 gaat niet over één moment in het verleden.", "De zin ontkent niets."] }
      ]
    },
    {
      id: "05", slug: "geoniwa", title: "-거니와", sub: "Bovendien, in nette schrijftaal",
      canDo: "Je kunt nu in formele tekst een tweede punt toevoegen met -거니와.",
      guess: {
        q: "\"Deze stad is mooi en bovendien veilig.\" (schrijftaal) Welke zin klopt, denk je?",
        options: ["이 도시는 아름답거니와 안전하기도 하다.", "이 도시는 아름다운거니와 안전하기도 하다.", "이 도시는 아름다워거니와 안전하기도 하다.", "이 도시는 아름답기거니와 안전하기도 하다."], answer: 0,
        why: ["Goed: -거니와 komt direct na de stam.", "-거니와 komt na de stam, niet na de vorm met -ㄴ.", "-거니와 komt na de stam, niet na de vorm met -어.", "Er hoort geen -기 tussen de stam en -거니와."]
      },
      problem: "In een opstel of toespraak wil je een punt toevoegen. -(으)ㄴ/는 데다가 klinkt dan te gewoon. Met -거니와 zeg je hetzelfde, maar formeler: dit klopt, en dat ook.",
      pattern: [
        { l: "punt 1", v: "머리도 좋", c: 1 }, { l: "거니와", v: "거니와", c: 2, key: true },
        { l: "punt 2", v: "성격도", c: 3 }, { l: "eind", v: "좋다", c: 4 }
      ],
      patternCap: "Stam + -거니와 + tweede punt (vaak met 도 of -기도 하다)",
      rules: [
        "-거니와 komt direct na de stam, met of zonder 받침: 좋거니와, 크거니와, 들거니와.",
        "Verleden: -았/었거니와 (없었거니와). Zelfstandig naamwoord: -(이)거니와 (선생님이거니와).",
        "Vaste uitdrukking: 다시 말하거니와 betekent \"ik herhaal\" of \"nogmaals\".",
        "Register: schrijftaal en formele toespraken. In spreektaal zeg je -(으)ㄴ/는 데다가, -고 또, of -(으)ㄹ 뿐만 아니라."
      ],
      pitfall: "Gebruik -거니와 niet in een gewoon gesprek met vrienden. Het klinkt dan stijf en ouderwets.",
      examples: [
        { cn: "그는 머리도 좋거니와 성격도 좋다.", py: "Geuneun meorido jokeoniwa seonggyeokdo jota.", nl: "Hij is slim en heeft bovendien een goed karakter." },
        { cn: "이 방법은 시간도 절약되거니와 비용도 적게 든다.", py: "I bangbeobeun sigando jeoryakdoegeoniwa biyongdo jeokge deunda.", nl: "Deze methode bespaart tijd en kost bovendien weinig." },
        { cn: "그 일은 어렵기도 하거니와 위험하기도 하다.", py: "Geu ireun eoryeopgido hageoniwa wiheomhagido hada.", nl: "Dat werk is moeilijk en bovendien gevaarlijk." },
        { cn: "다시 말하거니와, 이 계획에는 문제가 많다.", py: "Dasi malhageoniwa, i gyehoegeneun munjega manta.", nl: "Ik herhaal: dit plan heeft veel problemen." }
      ],
      vocab: [],
      dialogue: [
        ["A", "이번 정책에 대해 어떻게 생각하십니까?", "Ibeon jeongchaege daehae eotteoke saenggakasimnikka?", "Wat vindt u van dit nieuwe beleid?"],
        ["B", "비용도 많이 들거니와 효과도 확실하지 않습니다.", "Biyongdo mani deulgeoniwa hyogwado hwaksilhaji anseumnida.", "Het kost veel geld en het effect is bovendien onzeker."],
        ["A", "그럼 대안이 있습니까?", "Geureom daeani itseumnikka?", "Is er dan een alternatief?"],
        ["B", "기존 제도를 개선하는 것이 더 빠르거니와 안전합니다.", "Gijon jedoreul gaeseonhaneun geosi deo ppareugeoniwa anjeonhamnida.", "Het huidige systeem verbeteren is sneller en bovendien veiliger."],
        ["A", "좋은 의견 감사합니다.", "Joeun uigyeon gamsahamnida.", "Dank u voor uw nuttige mening."]
      ],
      questions: [
        { type: "mc", q: "그 식당은 음식도 ___ 서비스도 훌륭하다.",
          options: ["맛있거니와", "맛있는거니와", "맛있은거니와", "맛있어거니와"], answer: 0,
          why: ["Goed: -거니와 komt direct na de stam 맛있-.", "-거니와 komt na de stam, niet na -는.", "-거니와 komt na de stam, niet na -은.", "-거니와 komt na de stam, niet na -어."] },
        { type: "mc", q: "\"Hij had toen geen geld en bovendien geen tijd.\"",
          options: ["그때 그는 돈도 없었거니와 시간도 없었다.", "그때 그는 돈도 없는거니와 시간도 없었다.", "그때 그는 돈도 없었은거니와 시간도 없었다.", "그때 그는 돈도 없었던거니와 시간도 없었다."], answer: 0,
          why: ["Goed: verleden is -었거니와.", "-거니와 komt na de stam, niet na -는.", "Na -었- volgt direct -거니와, zonder -은.", "Na -었- volgt direct -거니와, zonder -던."] },
        { type: "mc", q: "\"Hij is een goede leraar en bovendien een goede vader.\"",
          options: ["그는 좋은 선생님이거니와 좋은 아버지이기도 하다.", "그는 좋은 선생님거니와 좋은 아버지이기도 하다.", "그는 좋은 선생님인거니와 좋은 아버지이기도 하다.", "그는 좋은 선생님이고거니와 좋은 아버지이기도 하다."], answer: 0,
          why: ["Goed: 선생님 eindigt op een medeklinker, dus 이거니와.", "Na een medeklinker is 이 nodig: 선생님이거니와.", "-거니와 komt na 이-, niet na 인.", "-고 en -거니와 kun je niet stapelen."] },
        { type: "order", q: "Zet in de goede volgorde: \"Deze methode is goedkoop en bovendien snel.\"",
          tokens: [["이 방법은", "i bangbeobeun"], ["값도", "gapdo"], ["싸거니와", "ssageoniwa"], ["속도도", "sokdodo"], ["빠르다", "ppareuda"]] },
        { type: "open", q: "Vertaal in schrijftaal: \"Dit boek is nuttig en bovendien leuk.\"",
          model: ["이 책은 유익하거니와 재미도 있다.", "이 책은 유익하거니와 재미있기도 하다.", "이 책은 내용도 유익하거니와 재미도 있다."],
          tip: "Check: staat -거니와 direct na de stam 유익하-, en eindigt de zin in schrijfstijl (-다)?" }
      ],
      review: [
        { type: "mc", q: "날씨도 ___ 길도 막혀서 늦었다. (Het weer was slecht en bovendien stond er file.)",
          options: ["나쁘거니와", "나쁜거니와", "나빠거니와", "나쁘기거니와"], answer: 0,
          why: ["Goed: -거니와 komt direct na de stam 나쁘-.", "-거니와 komt na de stam, niet na -ㄴ.", "-거니와 komt na de stam, niet na -아.", "Er hoort geen -기 tussen de stam en -거니와."] },
        { type: "mc", q: "그는 키도 크거니와 잘생겼다. Wat is de beste versie in spreektaal?",
          options: ["그는 키도 큰 데다가 잘생겼어요.", "그는 키도 크지만 잘생겼어요.", "그는 키도 커서 잘생겼어요.", "그는 키도 크기는커녕 잘생겼어요."], answer: 0,
          why: ["Goed: -(으)ㄴ 데다가 is de gewone vorm voor \"bovendien\".", "-지만 geeft een tegenstelling. Hier gaan beide punten dezelfde kant op.", "-아서 geeft een reden. Lang zijn is geen reden voor knap zijn.", "-기는커녕 zegt dat het eerste niet klopt."] }
      ]
    },
    {
      id: "06", slug: "meuro", title: "-(으)므로", sub: "Omdat, in formele tekst",
      canDo: "Je kunt nu in formele tekst een reden geven met -(으)므로, en je kiest in spreektaal -아서/어서 of -기 때문에.",
      guess: {
        q: "Een bordje: \"De vloer is glad. Wees daarom voorzichtig.\" Welke zin klopt, denk je?",
        options: ["바닥이 미끄러우므로 조심하십시오.", "바닥이 미끄럽으므로 조심하십시오.", "바닥이 미끄러워서 조심하십시오.", "바닥이 미끄러움으로 조심하십시오."], answer: 0,
        why: ["Goed: 미끄럽다 wordt 미끄러우-, en daarna -므로.", "Bij een ㅂ-stam wordt ㅂ een 우: 미끄러우므로.", "Na -아서/어서 volgt geen opdracht zoals 조심하십시오.", "-ㅁ으로 betekent \"door middel van\", niet \"omdat\"."]
      },
      problem: "In een rapport, een bericht of een bordje wil je een reden geven. -아서/어서 klinkt dan te gewoon. Met -(으)므로 geef je een reden in nette schrijftaal.",
      pattern: [
        { l: "reden", v: "비가 많이 왔", c: 1 }, { l: "므로", v: "으므로", c: 2, key: true },
        { l: "gevolg", v: "경기는 취소되었다", c: 4 }
      ],
      patternCap: "Reden + -(으)므로 + gevolg (schrijftaal). Spreektaal: -아서/어서, -기 때문에, -(으)니까",
      rules: [
        "Na een klinker of ㄹ: -므로 (가므로, 만들므로). Na een medeklinker: -으므로 (많으므로). Zelfstandig naamwoord: -(이)므로.",
        "Verleden: -았/었으므로 (왔으므로). Bij -아서/어서 kan dat niet: 왔어서 is fout.",
        "-(으)므로 en -기 때문에 kunnen in een bericht een verzoek krijgen: 위험하므로 들어가지 마십시오. Na -아서/어서 volgt geen opdracht.",
        "Register: -(으)므로 is schrijftaal. -기 때문에 past in beide. In een gesprek zeg je -아서/어서 of -(으)니까."
      ],
      pitfall: "Verwar -(으)므로 (omdat) niet met -ㅁ으로 (door middel van). 공부하므로 is \"omdat hij studeert\", 공부함으로 is \"door te studeren\".",
      examples: [
        { cn: "비가 많이 왔으므로 경기는 취소되었다.", py: "Biga mani wasseumeuro gyeonggineun chwisodoeeotda.", nl: "Omdat het veel geregend had, werd de wedstrijd afgelast." },
        { cn: "이 지역은 위험하므로 들어가지 마십시오.", py: "I jiyeogeun wiheomhameuro deureogaji masipsio.", nl: "Dit gebied is gevaarlijk. Ga er daarom niet in." },
        { cn: "그는 성실한 학생이므로 장학금을 받을 자격이 있다.", py: "Geuneun seongsilhan haksaengimeuro janghakgeumeul badeul jagyeogi itda.", nl: "Hij is een ijverige student en verdient daarom een beurs." },
        { cn: "인구가 줄고 있으므로 대책이 필요하다.", py: "Inguga julgo isseumeuro daechaegi piryohada.", nl: "De bevolking krimpt, dus er zijn maatregelen nodig." }
      ],
      vocab: [],
      dialogue: [
        ["A", "회의 자료는 다 준비됐어요?", "Hoeui jaryoneun da junbidwaesseoyo?", "Zijn de stukken voor de vergadering klaar?"],
        ["B", "네. 보고서에 예산이 부족하므로 일정을 조정해야 한다고 썼어요.", "Ne. Bogoseoe yesani bujokameuro iljeongeul jojeonghaeya handago sseosseoyo.", "Ja. In het rapport schreef ik dat de planning moet worden aangepast, omdat het budget te krap is."],
        ["A", "회의에서 말할 때는요?", "Hoeuieseo malhal ttaeneunyo?", "En als je het in de vergadering zegt?"],
        ["B", "그때는 예산이 부족해서 일정을 바꿔야 한다고 할 거예요.", "Geuttaeneun yesani bujokaeseo iljeongeul bakkwoya handago hal geoyeyo.", "Dan zeg ik dat we de planning moeten veranderen, omdat het budget te krap is."],
        ["A", "글과 말이 정말 다르군요.", "Geulgwa mari jeongmal dareugunyo.", "Schrijven en spreken verschillen echt."]
      ],
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
        { type: "open", q: "Vertaal als formeel bericht: \"Omdat er veel mensen zijn, kan het lang duren.\"",
          model: ["사람이 많으므로 시간이 오래 걸릴 수 있습니다.", "이용자가 많으므로 오래 기다리실 수 있습니다.", "방문객이 많으므로 시간이 오래 걸릴 수 있습니다."],
          tip: "Check: 많- eindigt op een medeklinker, dus 많으므로. En eindigt de zin formeel (-습니다)?" }
      ],
      review: [
        { type: "mc", q: "이 제품은 가격이 ___ 많이 팔린다. (Dit product verkoopt goed, omdat het goedkoop is.)",
          options: ["싸므로", "싸으므로", "싼므로", "싸서므로"], answer: 0,
          why: ["Goed: 싸- eindigt op een klinker, dus -므로.", "Na een klinker komt -므로, niet -으므로.", "-므로 komt direct na de stam, niet na -ㄴ.", "-아서 en -므로 kun je niet stapelen."] },
        { type: "mc", q: "\"Omdat hij student is, kan hij korting krijgen.\" (schrijftaal)",
          options: ["그는 학생이므로 할인을 받을 수 있다.", "그는 학생므로 할인을 받을 수 있다.", "그는 학생으므로 할인을 받을 수 있다.", "그는 학생인므로 할인을 받을 수 있다."], answer: 0,
          why: ["Goed: na een naamwoord op een medeklinker gebruik je 이므로.", "Na een medeklinker is 이 nodig: 학생이므로.", "Na een naamwoord komt 이므로, niet 으므로.", "-므로 komt na 이-, niet na 인."] }
      ]
    }
  ]
};
