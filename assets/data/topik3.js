// TOPIK 3 lessons. Grammar first; vocabulary comes later.
// Question types: mc (answer = index), order (tokens in the right order), open (self-check with model answers).
// "review" questions never appear in the lesson itself; they come back on the review page.
// Field names follow the shared site schema: cn = Hangul, py = romanisatie.
window.HSK = window.HSK || {};
window.HSK.topik3 = {
  level: "TOPIK 3", dir: "topik3",
  lessons: [
    {
      id: "01", slug: "neunde", title: "-는데 / -(으)ㄴ데", sub: "Eerst de achtergrond, dan je punt",
      canDo: "Je kunt nu met -는데 en -(으)ㄴ데 eerst de situatie schetsen, of een contrast maken met \"maar\".",
      guess: {
        q: "\"Het weer is mooi. Zullen we naar het park gaan?\" Welke zin klopt, denk je?",
        options: ["날씨가 좋은데 공원에 갈까요?", "날씨가 좋는데 공원에 갈까요?", "날씨가 좋아는데 공원에 갈까요?", "날씨가 좋데 공원에 갈까요?"], answer: 0,
        why: ["Goed: 좋다 is bijvoeglijk en heeft een 받침, dus -은데.", "-는데 hoort bij werkwoorden van handeling, niet bij 좋다.", "-는데 plak je direct aan de stam, niet aan de 아-vorm.", "Na een 받침 heb je -은데 nodig, niet alleen -데."]
      },
      problem: "Soms wil je eerst de situatie schetsen en dan pas je vraag of voorstel doen. Soms wil je \"maar\" zeggen. Het Koreaans doet allebei met één uitgang: -는데 of -(으)ㄴ데. De eerste zin geeft de achtergrond, de tweede zin het punt.",
      pattern: [
        { l: "achtergrond", v: "비가 오", c: 1 }, { l: "-는데", v: "는데", c: 2, key: true }, { l: "hoofdzin", v: "우산이 없어요", c: 4 }
      ],
      patternCap: "Achtergrond + -는데 / -(으)ㄴ데 + vraag, voorstel of contrast",
      rules: [
        "Werkwoord van handeling, en ook 있다 en 없다: stam + -는데. 가는데, 먹는데, 맛있는데.",
        "Bijvoeglijk werkwoord: na een klinker -ㄴ데, na een 받침 -은데. 큰데, 작은데.",
        "Naamwoord: + -인데. 학생인데, 주말인데.",
        "Verleden tijd: -았/었는데, voor elk soort werkwoord. 갔는데, 작았는데."
      ],
      pitfall: "Een bijvoeglijk werkwoord krijgt in de tegenwoordige tijd nooit -는데. Zeg 좋은데, niet 좋는데. Let ook op ㅂ-stammen: 춥다 wordt 추운데.",
      examples: [
        { cn: "비가 오는데 우산이 없어요.", py: "Biga oneunde usani eopseoyo.", nl: "Het regent, maar ik heb geen paraplu." },
        { cn: "배가 고픈데 뭐 먹을까요?", py: "Baega gopeunde mwo meogeulkkayo?", nl: "Ik heb honger. Zullen we iets eten?" },
        { cn: "이 가방은 예쁜데 너무 비싸요.", py: "I gabangeun yeppeunde neomu bissayo.", nl: "Deze tas is mooi, maar te duur." },
        { cn: "어제 시장에 갔는데 사람이 많았어요.", py: "Eoje sijange ganneunde sarami manasseoyo.", nl: "Gisteren ging ik naar de markt. Er waren veel mensen." }
      ],
      vocab: [],
      dialogue: [
        ["A", "지금 뭐 해요?", "Jigeum mwo haeyo?", "Wat doe je nu?"],
        ["B", "숙제를 하는데 너무 어려워요.", "Sukjereul haneunde neomu eoryeowoyo.", "Ik maak huiswerk, maar het is erg moeilijk."],
        ["A", "저는 시간이 있는데 도와줄까요?", "Jeoneun sigani inneunde dowajulkkayo?", "Ik heb tijd. Zal ik je helpen?"],
        ["B", "좋아요. 그런데 배가 고픈데 먼저 밥 먹을까요?", "Joayo. Geureonde baega gopeunde meonjeo bap meogeulkkayo?", "Graag. Maar ik heb honger. Zullen we eerst eten?"],
        ["A", "그래요. 근처에 식당이 있는데 아주 맛있어요.", "Geuraeyo. Geuncheoe sikdangi inneunde aju masisseoyo.", "Goed. Er is een restaurant in de buurt. Het is erg lekker."]
      ],
      questions: [
        { type: "mc", q: "\"Deze kamer is klein, maar schoon.\" Welke zin klopt?",
          options: ["이 방은 작은데 깨끗해요.", "이 방은 작는데 깨끗해요.", "이 방은 작인데 깨끗해요.", "이 방은 작안데 깨끗해요."], answer: 0,
          why: ["Goed: 작다 is bijvoeglijk met 받침, dus -은데.", "-는데 is voor werkwoorden van handeling, niet voor 작다.", "-인데 hoort bij een naamwoord, niet bij een werkwoordstam.", "De klinker is 으, niet 아: -은데."] },
        { type: "mc", q: "어제 영화를 ___ 재미없었어요. (Gisteren keek ik een film, maar hij was saai.)",
          options: ["봤는데", "봐는데", "봤은데", "봤인데"], answer: 0,
          why: ["Goed: verleden tijd 봤 + -는데.", "-는데 komt niet na de 아/어-vorm; voor verleden tijd gebruik je 봤.", "Na de verleden tijd 았/었 komt altijd -는데, niet -은데.", "-인데 hoort bij een naamwoord."] },
        { type: "mc", q: "학생이다 (student zijn) + -는데: welke vorm klopt?",
          options: ["학생인데", "학생는데", "학생은데", "학생이는데"], answer: 0,
          why: ["Goed: naamwoord + -인데.", "Een naamwoord krijgt -인데, niet -는데.", "-은데 is voor bijvoeglijke werkwoorden met 받침.", "이다 wordt 인데, niet 이는데."] },
        { type: "order", q: "Zet in de goede volgorde: \"Het is koud. Zal ik het raam dichtdoen?\"",
          tokens: [["날씨가", "nalssiga"], ["추운데", "chuunde"], ["창문을", "changmuneul"], ["닫을까요", "dadeulkkayo"]] },
        { type: "open", q: "Vertaal met -(으)ㄴ데: \"Ik heb honger. Zullen we gaan eten?\"",
          model: ["배가 고픈데 밥 먹으러 갈까요?", "배가 고픈데 같이 밥 먹을까요?", "배고픈데 식당에 갈까요?"],
          tip: "Check: 고프다 is bijvoeglijk zonder 받침, dus 고픈데. Eindig met -(으)ㄹ까요?" }
      ],
      review: [
        { type: "mc", q: "오늘 ___ 아이스크림 먹을까요? (Het is warm vandaag. Zullen we een ijsje eten?)",
          options: ["더운데", "덥는데", "덥은데", "더워는데"], answer: 0,
          why: ["Goed: 덥다 is een ㅂ-stam. ㅂ wordt 우, dus 더운데.", "덥다 is bijvoeglijk, dus geen -는데.", "Bij een ㅂ-stam valt ㅂ weg: 더운데.", "-는데 komt niet na de 어-vorm."] },
        { type: "mc", q: "저는 서울에 ___ 부모님은 부산에 사세요. (Ik woon in Seoul, maar mijn ouders wonen in Busan.)",
          options: ["사는데", "살는데", "살은데", "산데"], answer: 0,
          why: ["Goed: bij een ㄹ-stam valt ㄹ weg voor -는데: 사는데.", "Voor -는데 valt de ㄹ van 살다 weg.", "살다 is een werkwoord van handeling: -는데, niet -은데.", "산데 bestaat niet als tegenwoordige tijd; 살다 krijgt -는데."] }
      ]
    },
    {
      id: "02", slug: "ttaemune", title: "-기 때문에", sub: "Omdat: een sterke reden geven",
      canDo: "Je kunt nu een duidelijke reden geven met -기 때문에, ook in de verleden tijd, en je weet wanneer -아서/어서 beter past.",
      guess: {
        q: "\"Ik was te laat, omdat de bus niet kwam.\" Welke zin klopt, denk je?",
        options: ["버스가 안 왔기 때문에 늦었어요.", "버스가 안 와기 때문에 늦었어요.", "버스가 안 왔기 때문 늦었어요.", "버스가 안 왔때문에 늦었어요."], answer: 0,
        why: ["Goed: 왔 + -기 때문에.", "-기 komt na de stam of na 았/었, niet na de 아-vorm.", "때문 heeft hier 에 nodig: 때문에.", "Tussen 왔 en 때문에 ontbreekt -기."]
      },
      problem: "Je kent -아서/어서 al voor \"omdat\". Maar soms wil je de reden benadrukken, of de reden ligt duidelijk in het verleden. Dan gebruik je -기 때문에. Het klinkt sterker en wat formeler.",
      pattern: [
        { l: "reden", v: "시험이 있", c: 1 }, { l: "-기 때문에", v: "기 때문에", c: 2, key: true }, { l: "gevolg", v: "공부해요", c: 4 }
      ],
      patternCap: "Stam (+ 았/었) + 기 때문에 + gevolg · Naamwoord + 때문에 = vanwege ...",
      rules: [
        "-기 때문에 komt direct na de stam, met of zonder 받침: 가기 때문에, 먹기 때문에, 바쁘기 때문에.",
        "Verleden tijd zet je in de reden zelf: 늦었기 때문에. Met -아서/어서 kan dat niet.",
        "Na een naamwoord zeg je alleen 때문에: 비 때문에 = vanwege de regen.",
        "Na -기 때문에 komt geen opdracht of voorstel (-(으)세요, -(으)ㅂ시다). Gebruik daarvoor -(으)니까."
      ],
      pitfall: "Bij sorry en dank gebruik je -아서/어서: 늦어서 죄송합니다. Met -기 때문에 klinkt een excuus vreemd.",
      examples: [
        { cn: "내일 시험이 있기 때문에 오늘 공부해야 해요.", py: "Naeil siheomi itgi ttaemune oneul gongbuhaeya haeyo.", nl: "Morgen heb ik een examen. Daarom moet ik vandaag studeren." },
        { cn: "길이 막혔기 때문에 늦었어요.", py: "Giri makyeotgi ttaemune neujeosseoyo.", nl: "Ik was te laat omdat er file was." },
        { cn: "감기 때문에 학교에 못 갔어요.", py: "Gamgi ttaemune hakgyoe mot gasseoyo.", nl: "Door een verkoudheid kon ik niet naar school." },
        { cn: "그 식당은 싸기 때문에 학생이 많아요.", py: "Geu sikdangeun ssagi ttaemune haksaengi manayo.", nl: "Dat restaurant is goedkoop. Daarom komen er veel studenten." }
      ],
      vocab: [],
      dialogue: [
        ["A", "왜 어제 모임에 안 왔어요?", "Wae eoje moime an wasseoyo?", "Waarom kwam je gisteren niet naar de bijeenkomst?"],
        ["B", "일이 많았기 때문에 못 갔어요.", "Iri manatgi ttaemune mot gasseoyo.", "Ik had veel werk. Daarom kon ik niet komen."],
        ["A", "요즘 많이 바빠요?", "Yojeum mani bappayo?", "Heb je het nu erg druk?"],
        ["B", "네, 다음 주에 발표가 있기 때문에 매일 늦게 퇴근해요.", "Ne, daeum jue balpyoga itgi ttaemune maeil neutge toegeunhaeyo.", "Ja. Volgende week heb ik een presentatie, dus ik werk elke dag lang."],
        ["A", "그렇군요. 너무 무리하지 마세요.", "Geureokunyo. Neomu murihaji maseyo.", "Ik snap het. Doe niet te veel."]
      ],
      questions: [
        { type: "mc", q: "\"Omdat ik gisteren te veel heb gegeten, heb ik buikpijn.\"",
          options: ["어제 많이 먹었기 때문에 배가 아파요.", "어제 많이 먹기 때문에 배가 아파요.", "어제 많이 먹었어서 배가 아파요.", "어제 많이 먹었기 때문 배가 아파요."], answer: 0,
          why: ["Goed: de verleden tijd zit in de reden: 먹었기 때문에.", "Het eten was gisteren, dus je hebt 먹었 nodig.", "-아서/어서 kan geen verleden tijd dragen. Zeg 먹어서 of 먹었기 때문에.", "때문 heeft hier 에 nodig."] },
        { type: "mc", q: "___ 비행기가 늦게 출발했어요. (Door de sneeuw vertrok het vliegtuig laat.)",
          options: ["눈 때문에", "눈기 때문에", "눈에 때문에", "눈 때문"], answer: 0,
          why: ["Goed: naamwoord + 때문에.", "-기 komt alleen na een werkwoordstam, niet na een naamwoord.", "Tussen het naamwoord en 때문에 komt geen 에.", "때문 heeft hier 에 nodig."] },
        { type: "mc", q: "Je komt te laat en zegt sorry. Welke zin is goed?",
          options: ["늦어서 죄송합니다.", "늦었어서 죄송합니다.", "늦었기 때문에 죄송합니다.", "늦아서 죄송합니다."], answer: 0,
          why: ["Goed: bij sorry gebruik je -아서/어서, zonder verleden tijd.", "-아서/어서 krijgt nooit 았/었 ervoor.", "Bij een excuus klinkt -기 때문에 vreemd. Koreanen zeggen 늦어서.", "늦다 heeft 으 als laatste klinker, dus -어서: 늦어서."] },
        { type: "order", q: "Zet in de goede volgorde: \"Omdat ik geen tijd had, nam ik een taxi.\"",
          tokens: [["시간이", "sigani"], ["없었기", "eopseotgi"], ["때문에", "ttaemune"], ["택시를 탔어요", "taeksireul tasseoyo"]] },
        { type: "open", q: "Vertaal met -기 때문에: \"Omdat ik ziek was, ben ik thuisgebleven.\"",
          model: ["아팠기 때문에 집에 있었어요.", "몸이 아팠기 때문에 집에서 쉬었어요.", "아팠기 때문에 집에 있었습니다."],
          tip: "Check: staat de verleden tijd in de reden (아팠기), en schrijf je 때문에 met 에?" }
      ],
      review: [
        { type: "mc", q: "\"Ik was moe, daarom ben ik vroeg gaan slapen.\"",
          options: ["피곤했기 때문에 일찍 잤어요.", "피곤했어서 일찍 잤어요.", "피곤했기 때문 일찍 잤어요.", "피곤하었기 때문에 일찍 잤어요."], answer: 0,
          why: ["Goed: 피곤했 + -기 때문에.", "-아서/어서 kan geen verleden tijd dragen.", "때문 heeft hier 에 nodig.", "하다 wordt in de verleden tijd 했, niet 하었."] },
        { type: "mc", q: "가방이 ___ 안 샀어요. (De tas was te duur, daarom heb ik hem niet gekocht.)",
          options: ["비쌌기 때문에", "비쌌기 때문", "비쌌 때문에", "비쌌기 때문에서"], answer: 0,
          why: ["Goed: 비쌌 + -기 때문에.", "때문 heeft hier 에 nodig.", "Tussen 비쌌 en 때문에 ontbreekt -기.", "Na 때문에 komt geen 서."] }
      ]
    },
    {
      id: "03", slug: "bijzin", title: "Bijvoeglijke bijzin", sub: "-는 / -(으)ㄴ / -(으)ㄹ + naamwoord",
      canDo: "Je kunt nu een naamwoord beschrijven met een bijzin, in de tegenwoordige, verleden en toekomende tijd.",
      guess: {
        q: "\"Het brood dat ik gisteren at, was lekker.\" Welke zin klopt, denk je?",
        options: ["어제 먹은 빵이 맛있었어요.", "어제 먹는 빵이 맛있었어요.", "어제 먹을 빵이 맛있었어요.", "어제 먹었는 빵이 맛있었어요."], answer: 0,
        why: ["Goed: verleden tijd van een werkwoord + naamwoord: -(으)ㄴ.", "-는 is tegenwoordige tijd. Het eten was gisteren.", "-(으)ㄹ is voor iets wat nog komt.", "Verleden tijd maak je hier met -(으)ㄴ, niet met 었 + 는."]
      },
      problem: "In het Nederlands zeg je \"het boek dat ik lees\". Het Koreaans heeft geen \"dat\". De bijzin staat vóór het naamwoord. De uitgang van het werkwoord vertelt de tijd: nu, al gebeurd, of nog niet gebeurd.",
      pattern: [
        { l: "bijzin", v: "제가 읽", c: 1 }, { l: "uitgang", v: "는", c: 2, key: true }, { l: "naamwoord", v: "책", c: 3 }
      ],
      patternCap: "읽는 책 = het boek dat ik lees · 읽은 책 = dat ik las · 읽을 책 = dat ik ga lezen",
      rules: [
        "Werkwoord, nu: stam + -는. 먹는 사람, 가는 길. Ook 있다/없다: 맛있는 음식.",
        "Werkwoord, verleden: na een klinker -ㄴ, na een 받침 -은. 간 곳, 먹은 빵.",
        "Werkwoord, toekomst of plan: na een klinker -ㄹ, na een 받침 -을. 갈 곳, 먹을 음식.",
        "Bijvoeglijk werkwoord, nu: -ㄴ of -은. 큰 집, 작은 방."
      ],
      pitfall: "Een bijvoeglijk werkwoord krijgt nooit -는: 예쁜 꽃, niet 예쁘는 꽃. Een ㄹ-stam verliest de ㄹ: 살다 wordt 사는 곳, 만들다 wordt 만든 빵.",
      examples: [
        { cn: "저기 서 있는 사람이 제 동생이에요.", py: "Jeogi seo inneun sarami je dongsaengieyo.", nl: "De persoon die daar staat, is mijn jongere broer." },
        { cn: "어제 본 영화가 정말 재미있었어요.", py: "Eoje bon yeonghwaga jeongmal jaemiisseosseoyo.", nl: "De film die ik gisteren zag, was echt leuk." },
        { cn: "주말에 할 일이 많아요.", py: "Jumare hal iri manayo.", nl: "Ik heb in het weekend veel te doen." },
        { cn: "저는 조용한 카페를 좋아해요.", py: "Jeoneun joyonghan kapereul joahaeyo.", nl: "Ik houd van rustige cafés." }
      ],
      vocab: [],
      dialogue: [
        ["A", "이거 누가 만든 케이크예요?", "Igeo nuga mandeun keikeuyeyo?", "Wie heeft deze taart gemaakt?"],
        ["B", "제가 만든 케이크예요.", "Jega mandeun keikeuyeyo.", "Die heb ik gemaakt."],
        ["A", "정말 맛있어요! 다음에 만들 케이크도 먹고 싶어요.", "Jeongmal masisseoyo! Daeume mandeul keikeudo meokgo sipeoyo.", "Echt lekker! Ik wil ook de volgende taart proeven die je maakt."],
        ["B", "그럼 다음 주에 오세요. 제가 좋아하는 초콜릿 케이크를 만들 거예요.", "Geureom daeum jue oseyo. Jega joahaneun chokollit keikeureul mandeul geoyeyo.", "Kom dan volgende week. Ik ga de chocoladetaart maken waar ik van houd."]
      ],
      questions: [
        { type: "mc", q: "\"een grote tas\"",
          options: ["큰 가방", "크는 가방", "클 가방", "크은 가방"], answer: 0,
          why: ["Goed: 크다 is bijvoeglijk zonder 받침, dus -ㄴ: 큰.", "Een bijvoeglijk werkwoord krijgt geen -는.", "-ㄹ is voor iets wat nog komt, niet voor een eigenschap.", "Zonder 받침 plak je alleen ㄴ eraan: 큰."] },
        { type: "mc", q: "작년에 ___ 책이에요. (Dit is het boek dat ik vorig jaar heb gelezen.)",
          options: ["읽은", "읽는", "읽을", "읽었는"], answer: 0,
          why: ["Goed: verleden tijd, met 받침: -은.", "-는 is tegenwoordige tijd.", "-을 is voor iets wat nog komt.", "Verleden tijd maak je met -은, niet met 었 + 는."] },
        { type: "mc", q: "제가 ___ 도시는 아주 커요. (De stad waar ik woon, is heel groot.)",
          options: ["사는", "살는", "살은", "산"], answer: 0,
          why: ["Goed: 살다 + -는, en de ㄹ valt weg.", "Voor -는 valt de ㄹ van 살다 weg.", "살다 is een werkwoord. Voor nu gebruik je -는.", "산 is verleden tijd: waar ik woonde."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik wil warme koffie drinken.\"",
          tokens: [["따뜻한", "ttatteutan"], ["커피를", "keopireul"], ["마시고", "masigo"], ["싶어요", "sipeoyo"]] },
        { type: "open", q: "Vertaal: \"Ik heb geen tijd om te eten.\" (letterlijk: tijd die ik zal eten)",
          model: ["먹을 시간이 없어요.", "밥 먹을 시간이 없어요.", "저는 밥을 먹을 시간이 없어요."],
          tip: "Check: het eten moet nog gebeuren, dus 먹을 vóór 시간." }
      ],
      review: [
        { type: "mc", q: "저기서 커피를 ___ 사람을 알아요? (Ken je de persoon die daar koffie drinkt?)",
          options: ["마시는", "마신는", "마시은", "마셨는"], answer: 0,
          why: ["Goed: werkwoord, nu: -는.", "Kies één uitgang: -는 voor nu, niet ㄴ + 는.", "Na een klinker komt geen -은. Voor nu is het -는.", "Hij drinkt nu, en 었 + 는 bestaat hier niet."] },
        { type: "mc", q: "___ 방에서 자고 싶어요. (Ik wil in een rustige kamer slapen.)",
          options: ["조용한", "조용하는", "조용할", "조용은"], answer: 0,
          why: ["Goed: 조용하다 is bijvoeglijk, dus -ㄴ: 조용한.", "Een bijvoeglijk werkwoord krijgt geen -는.", "-ㄹ is voor iets wat nog komt, niet voor een eigenschap.", "Je plakt de uitgang aan de stam 조용하, niet aan 조용."] }
      ]
    },
    {
      id: "04", slug: "ryeogo", title: "-(으)려고 하다", sub: "Zeggen wat je van plan bent",
      canDo: "Je kunt nu zeggen wat je van plan bent met -(으)려고 하다, en wat je van plan was maar niet deed.",
      guess: {
        q: "\"Ik ben van plan dit weekend naar Busan te gaan.\" Welke zin klopt, denk je?",
        options: ["이번 주말에 부산에 가려고 해요.", "이번 주말에 부산에 가으려고 해요.", "이번 주말에 부산에 가려고 있어요.", "이번 주말에 부산에 가러고 해요."], answer: 0,
        why: ["Goed: 가 eindigt op een klinker, dus -려고 해요.", "Na een klinker komt geen 으: 가려고.", "Na -려고 komt 하다, niet 있다.", "De uitgang is -려고, met ㅕ."]
      },
      problem: "Met -고 싶다 zeg je wat je wilt. Dat is een wens. Met -(으)려고 하다 zeg je wat je van plan bent. In de verleden tijd betekent het vaak: ik was het van plan, maar het ging niet door.",
      pattern: [
        { l: "wie", v: "저는", c: 1 }, { l: "wat", v: "한국어를 배우", c: 3 }, { l: "-려고 하다", v: "려고 해요", c: 2, key: true }
      ],
      patternCap: "Stam + (으)려고 해요 = ik ben van plan · Stam + (으)려고 했는데 = ik was van plan, maar ...",
      rules: [
        "Na een klinker of ㄹ: -려고 하다. 가려고, 만들려고.",
        "Na een andere 받침: -으려고 하다. 먹으려고, 읽으려고.",
        "ㄷ-stammen zoals 듣다 worden 들으려고.",
        "De tijd zit in 하다: 가려고 해요 (plan nu), 가려고 했어요 (plan vroeger)."
      ],
      pitfall: "Bij een ㄹ-stam komt geen 으. Zeg 만들려고, niet 만들으려고.",
      examples: [
        { cn: "내년에 한국에 유학을 가려고 해요.", py: "Naenyeone hanguge yuhageul garyeogo haeyo.", nl: "Ik ben van plan volgend jaar in Korea te gaan studeren." },
        { cn: "저녁에 김치찌개를 만들려고 해요.", py: "Jeonyeoge gimchijjigaereul mandeullyeogo haeyo.", nl: "Ik ben van plan vanavond kimchistoofpot te maken." },
        { cn: "오늘부터 매일 운동하려고 해요.", py: "Oneulbuteo maeil undongharyeogo haeyo.", nl: "Vanaf vandaag ben ik van plan elke dag te sporten." },
        { cn: "전화하려고 했는데 시간이 없었어요.", py: "Jeonhwaharyeogo haenneunde sigani eopseosseoyo.", nl: "Ik wilde bellen, maar ik had geen tijd." }
      ],
      vocab: [],
      dialogue: [
        ["A", "방학에 뭐 할 거예요?", "Banghage mwo hal geoyeyo?", "Wat ga je doen in de vakantie?"],
        ["B", "제주도에 여행을 가려고 해요.", "Jejudoe yeohaengeul garyeogo haeyo.", "Ik ben van plan een reis naar Jeju te maken."],
        ["A", "와, 좋겠어요! 비행기표는 샀어요?", "Wa, jokesseoyo! Bihaenggipyoneun sasseoyo?", "Wat leuk! Heb je je vliegticket al gekocht?"],
        ["B", "어제 사려고 했는데 너무 비쌌어요.", "Eoje saryeogo haenneunde neomu bissasseoyo.", "Ik wilde het gisteren kopen, maar het was te duur."],
        ["A", "그럼 주말에 다시 확인하세요.", "Geureom jumare dasi hwaginhaseyo.", "Kijk dan in het weekend nog eens."]
      ],
      questions: [
        { type: "mc", q: "\"Ik ben van plan een boek te lezen.\"",
          options: ["책을 읽으려고 해요.", "책을 읽려고 해요.", "책을 읽으러고 해요.", "책을 읽으려고 있어요."], answer: 0,
          why: ["Goed: 읽 heeft een 받침, dus -으려고.", "Na een 받침 (behalve ㄹ) heb je 으 nodig: 읽으려고.", "De uitgang is -려고, met ㅕ.", "Na -려고 komt 하다, niet 있다."] },
        { type: "mc", q: "케이크를 ___ 해요. (Ik ben van plan een taart te maken.)",
          options: ["만들려고", "만들으려고", "만드려고", "만들러고"], answer: 0,
          why: ["Goed: ㄹ-stam + -려고.", "Na een ㄹ-stam komt geen 으.", "De ㄹ blijft staan voor -려고.", "De uitgang is -려고, met ㅕ."] },
        { type: "mc", q: "어제 운동하려고 했는데 비가 왔어요. Wat betekent dit?",
          options: ["Ik wilde gisteren sporten, maar het regende.", "Ik heb gisteren gesport, maar het regende.", "Ik wil morgen sporten, maar het regent.", "Ik wilde gisteren sporten, omdat het regende."], answer: 0,
          why: ["Goed: -려고 했는데 = ik was van plan, maar ...", "-려고 했어요 zegt niet dat het gebeurd is. Het was alleen een plan.", "어제 en 했 wijzen naar gisteren, niet naar morgen.", "-는데 geeft hier een contrast, geen reden."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik ben van plan een nieuwe computer te kopen.\"",
          tokens: [["새", "sae"], ["컴퓨터를", "keompyuteoreul"], ["사려고", "saryeogo"], ["해요", "haeyo"]] },
        { type: "open", q: "Vertaal met -(으)려고 하다: \"Ik ben van plan vandaag vroeg te slapen.\"",
          model: ["오늘 일찍 자려고 해요.", "오늘은 일찍 자려고 해요.", "오늘 밤에 일찍 자려고 해요."],
          tip: "Check: 자다 eindigt op een klinker, dus 자려고. Eindig met 해요." }
      ],
      review: [
        { type: "mc", q: "음악을 ___ 해요. (Ik ben van plan naar muziek te luisteren.)",
          options: ["들으려고", "듣으려고", "들려고", "듣려고"], answer: 0,
          why: ["Goed: 듣다 is een ㄷ-stam. Voor 으 wordt ㄷ een ㄹ: 들으려고.", "Bij 듣다 wordt ㄷ een ㄹ voor 으.", "Na de ㄹ van 들 komt hier nog 으: 들으려고.", "Na een 받침 heb je 으 nodig, en ㄷ wordt ㄹ."] },
        { type: "mc", q: "전화하려고 ___ 잊어버렸어요. (Ik wilde je bellen, maar ik vergat het.)",
          options: ["했는데", "하는데", "해는데", "했은데"], answer: 0,
          why: ["Goed: het plan was vroeger, dus 했는데.", "Het plan hoort bij het verleden. Je hebt 했 nodig.", "-는데 komt niet na de 어-vorm 해.", "Na 았/었 komt altijd -는데."] }
      ]
    },
    {
      id: "05", slug: "boda", title: "-아/어 보다", sub: "Iets proberen, of al eens gedaan hebben",
      canDo: "Je kunt nu iemand iets aanraden met -아/어 보세요, en vertellen wat je al eens gedaan hebt met -아/어 봤어요.",
      guess: {
        q: "\"Heb je weleens kimchi gegeten?\" Welke zin klopt, denk je?",
        options: ["김치를 먹어 봤어요?", "김치를 먹아 봤어요?", "김치를 먹고 봤어요?", "김치를 먹어 보세요?"], answer: 0,
        why: ["Goed: 먹어 + 봤어요 = al eens gegeten.", "먹 heeft ㅓ, dus -어: 먹어.", "Met -고 staat er: eten en daarna kijken.", "보세요 is een raad: probeer het eens. Geen vraag naar ervaring."]
      },
      problem: "Je wilt iemand iets aanraden: \"probeer het eens\". Of je wilt vertellen wat je al eens gedaan hebt. Het Koreaans doet allebei met -아/어 보다. Letterlijk staat er: doen en kijken hoe het is.",
      pattern: [
        { l: "wat", v: "이 김치를", c: 3 }, { l: "werkwoord", v: "먹", c: 4 }, { l: "-어 보다", v: "어 보세요", c: 2, key: true }
      ],
      patternCap: "먹어 보세요 = probeer het eens · 먹어 봤어요 = ik heb het al eens gegeten",
      rules: [
        "Stam met ㅏ of ㅗ: -아 보다. 가 보다, 와 보다.",
        "Andere klinkers: -어 보다. 먹어 보다, 입어 보다. 하다 wordt 해 보다.",
        "Probeer eens: -아/어 보세요. Ervaring: -아/어 봤어요.",
        "Ontkennen: 안 + werkwoord. 아직 안 먹어 봤어요 = ik heb het nog nooit gegeten."
      ],
      pitfall: "Gebruik geen -고 vóór 보다. 먹고 보세요 betekent \"eet en kijk dan\". Zeg 먹어 보세요.",
      examples: [
        { cn: "이 옷을 한번 입어 보세요.", py: "I oseul hanbeon ibeo boseyo.", nl: "Pas deze kleren eens." },
        { cn: "저는 한국에 가 봤어요.", py: "Jeoneun hanguge ga bwasseoyo.", nl: "Ik ben weleens in Korea geweest." },
        { cn: "김치찌개를 만들어 봤는데 너무 매웠어요.", py: "Gimchijjigaereul mandeureo bwanneunde neomu maewosseoyo.", nl: "Ik heb een keer kimchistoofpot gemaakt, maar die was te pittig." },
        { cn: "이 노래를 들어 봤어요?", py: "I noraereul deureo bwasseoyo?", nl: "Heb je dit liedje weleens gehoord?" }
      ],
      vocab: [],
      dialogue: [
        ["A", "한국 음식을 먹어 봤어요?", "Hanguk eumsigeul meogeo bwasseoyo?", "Heb je weleens Koreaans eten gegeten?"],
        ["B", "네, 불고기를 먹어 봤어요. 정말 맛있었어요.", "Ne, bulgogireul meogeo bwasseoyo. Jeongmal masisseosseoyo.", "Ja, ik heb bulgogi gegeten. Het was echt lekker."],
        ["A", "떡볶이도 먹어 봤어요?", "Tteokbokkido meogeo bwasseoyo?", "Heb je ook tteokbokki gegeten?"],
        ["B", "아니요, 아직 안 먹어 봤어요.", "Aniyo, ajik an meogeo bwasseoyo.", "Nee, dat heb ik nog nooit gegeten."],
        ["A", "그럼 오늘 같이 먹어 봐요. 학교 앞에 맛있는 집이 있어요.", "Geureom oneul gachi meogeo bwayo. Hakgyo ape masinneun jibi isseoyo.", "Laten we het dan vandaag samen proberen. Voor de school zit een lekker restaurant."]
      ],
      questions: [
        { type: "mc", q: "\"Pas deze schoenen eens.\"",
          options: ["이 신발을 신어 보세요.", "이 신발을 신아 보세요.", "이 신발을 신고 보세요.", "이 신발을 신어 봤어요."], answer: 0,
          why: ["Goed: 신 heeft ㅣ, dus -어 보세요.", "Alleen na ㅏ of ㅗ komt -아. 신다 wordt 신어.", "Met -고 staat er: aantrekken en dan kijken.", "봤어요 vertelt een ervaring, geen raad."] },
        { type: "mc", q: "\"Ik ben weleens op Jeju geweest.\"",
          options: ["제주도에 가 봤어요.", "제주도에 가아 봤어요.", "제주도에 가 보세요.", "제주도에 가어 봤어요."], answer: 0,
          why: ["Goed: 가 + 아 wordt samen 가.", "가 + 아 smelt samen tot 가. Je schrijft geen 가아.", "보세요 is een raad, geen ervaring.", "가 heeft ㅏ, dus -아, en dat smelt samen tot 가."] },
        { type: "mc", q: "요가를 ___? (Heb je weleens yoga gedaan?)",
          options: ["해 봤어요", "하 봤어요", "해 보세요", "했어 봤어요"], answer: 0,
          why: ["Goed: 하다 wordt 해, dan 봤어요.", "하다 wordt altijd 해 vóór 보다.", "보세요 is een raad, geen vraag naar ervaring.", "De verleden tijd zit alleen in 봤, niet in 했."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik wil eens een hanbok aantrekken.\"",
          tokens: [["한복을", "hanbogeul"], ["입어", "ibeo"], ["보고", "bogo"], ["싶어요", "sipeoyo"]] },
        { type: "open", q: "Vertaal: \"Probeer dit eens te eten.\"",
          model: ["이거 먹어 보세요.", "이것 좀 먹어 보세요.", "이 음식을 먹어 보세요."],
          tip: "Check: 먹 + 어, dan 보세요. Schrijf een spatie tussen 먹어 en 보세요." }
      ],
      review: [
        { type: "mc", q: "\"Ik heb dit boek weleens gelezen.\"",
          options: ["이 책을 읽어 봤어요.", "이 책을 읽아 봤어요.", "이 책을 읽고 봤어요.", "이 책을 읽어 보세요."], answer: 0,
          why: ["Goed: 읽 + 어 + 봤어요.", "읽 heeft ㅣ, dus -어.", "Met -고 staat er: lezen en dan kijken.", "보세요 is een raad, geen ervaring."] },
        { type: "mc", q: "우리 식당에 한번 ___. (Kom eens naar ons restaurant.)",
          options: ["와 보세요", "오아 보세요", "와 봤어요", "오어 보세요"], answer: 0,
          why: ["Goed: 오 + 아 smelt samen tot 와.", "오 + 아 schrijf je samen als 와.", "봤어요 vertelt een ervaring. Hier geef je een uitnodiging.", "오 heeft ㅗ, dus -아, en dat wordt 와."] }
      ]
    },
    {
      id: "06", slug: "gedoeda", title: "-게 되다", sub: "Het is zo gekomen",
      canDo: "Je kunt nu met -게 되다 vertellen hoe iets door de situatie zo gekomen is, of hoe je veranderd bent.",
      guess: {
        q: "\"Door mijn werk ben ik naar Seoul verhuisd.\" (Je koos het niet zelf.) Welke zin klopt, denk je?",
        options: ["회사 때문에 서울로 이사하게 됐어요.", "회사 때문에 서울로 이사하게 됬어요.", "회사 때문에 서울로 이사하기 됐어요.", "회사 때문에 서울로 이사해게 됐어요."], answer: 0,
        why: ["Goed: stam 이사하 + -게 됐어요.", "됬어요 is een spelfout. Het is 됐어요 (되었어요).", "De uitgang is -게, niet -기.", "-게 komt aan de stam 이사하, niet aan de 어-vorm."]
      },
      problem: "Soms beslis je iets niet zelf. De situatie brengt je ergens. Of je verandert langzaam: eerst niet, nu wel. In het Nederlands zeg je \"het kwam zo\" of \"uiteindelijk\". In het Koreaans zeg je -게 되다.",
      pattern: [
        { l: "situatie", v: "회사 때문에", c: 1 }, { l: "werkwoord", v: "이사하", c: 4 }, { l: "-게 되다", v: "게 됐어요", c: 2, key: true }
      ],
      patternCap: "Stam + 게 됐어요 = het is zo gekomen dat ... · Stam + 게 될 거예요 = het gaat zo komen dat ...",
      rules: [
        "Stam + -게 되다, met of zonder 받침: 가게 되다, 먹게 되다.",
        "Meestal in de verleden tijd: -게 됐어요. Het is zo gekomen.",
        "Voor later: -게 될 거예요. 다음 달부터 일하게 될 거예요.",
        "Met 좋아하다, 알다 of 잘하다 beschrijf je een verandering: 좋아하게 됐어요 = ben gaan houden van."
      ],
      pitfall: "Schrijf 됐어요, de korte vorm van 되었어요. 됬어요 is fout, ook al hoor je geen verschil.",
      examples: [
        { cn: "회사 때문에 서울로 이사하게 됐어요.", py: "Hoesa ttaemune seoullo isahage dwaesseoyo.", nl: "Door mijn werk ben ik naar Seoul verhuisd." },
        { cn: "한국 드라마를 보고 한국어를 좋아하게 됐어요.", py: "Hanguk deuramareul bogo hangugeoreul joahage dwaesseoyo.", nl: "Door Koreaanse series ben ik Koreaans leuk gaan vinden." },
        { cn: "다음 달부터 이 팀에서 일하게 될 거예요.", py: "Daeum dalbuteo i timeseo ilhage doel geoyeyo.", nl: "Vanaf volgende maand ga ik in dit team werken." },
        { cn: "친구 덕분에 그 사람을 알게 됐어요.", py: "Chingu deokbune geu sarameul alge dwaesseoyo.", nl: "Dankzij een vriend heb ik die persoon leren kennen." }
      ],
      vocab: [],
      dialogue: [
        ["A", "한국어를 어떻게 공부하게 됐어요?", "Hangugeoreul eotteoke gongbuhage dwaesseoyo?", "Hoe ben je Koreaans gaan leren?"],
        ["B", "한국 친구를 사귀게 됐는데 그 친구하고 이야기하고 싶었어요.", "Hanguk chingureul sagwige dwaenneunde geu chinguhago iyagihago sipeosseoyo.", "Ik kreeg een Koreaanse vriend. Ik wilde met die vriend praten."],
        ["A", "그럼 한국에도 가 봤어요?", "Geureom hangugedo ga bwasseoyo?", "Ben je dan ook al in Korea geweest?"],
        ["B", "아직 안 가 봤어요. 그런데 내년에 한국에서 일하게 될 거예요.", "Ajik an ga bwasseoyo. Geureonde naenyeone hangugeseo ilhage doel geoyeyo.", "Nog niet. Maar volgend jaar ga ik in Korea werken."]
      ],
      questions: [
        { type: "mc", q: "\"Ik ben Koreaans eten lekker gaan vinden.\"",
          options: ["한국 음식을 좋아하게 됐어요.", "한국 음식을 좋아하게 됬어요.", "한국 음식을 좋아해게 됐어요.", "한국 음식을 좋아하기 됐어요."], answer: 0,
          why: ["Goed: stam 좋아하 + -게 됐어요.", "됬어요 is een spelfout. Schrijf 됐어요.", "-게 komt aan de stam 좋아하, niet aan de 어-vorm.", "De uitgang is -게, niet -기."] },
        { type: "mc", q: "내년에 일본에서 ___. (Volgend jaar ga ik in Japan wonen.)",
          options: ["살게 될 거예요", "사게 될 거예요", "살기 될 거예요", "살게 돼 거예요"], answer: 0,
          why: ["Goed: 살 + -게 될 거예요.", "Voor -게 blijft de ㄹ staan. 사게 is van 사다 (kopen).", "De uitgang is -게, niet -기.", "Voor 거예요 heb je 될 nodig, niet 돼."] },
        { type: "mc", q: "그 사람을 알게 됐어요. Wat betekent dit?",
          options: ["Ik heb die persoon leren kennen.", "Ik ken die persoon niet.", "Ik wil die persoon leren kennen.", "Ik ga die persoon leren kennen."], answer: 0,
          why: ["Goed: 알게 됐어요 = het is zo gekomen dat ik hem ken.", "Er staat geen ontkenning in de zin.", "Een wens zou -고 싶다 zijn.", "됐어요 is verleden tijd, geen toekomst."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik ben bij een nieuw bedrijf gaan werken.\"",
          tokens: [["새", "sae"], ["회사에서", "hoesaeseo"], ["일하게", "ilhage"], ["됐어요", "dwaesseoyo"]] },
        { type: "open", q: "Vertaal met -게 되다: \"Ik ben koffie lekker gaan vinden.\"",
          model: ["커피를 좋아하게 됐어요.", "이제 커피를 좋아하게 됐어요.", "커피를 좋아하게 되었어요."],
          tip: "Check: 좋아하 + 게, dan 됐어요. Schrijf 됐어요, niet 됬어요." }
      ],
      review: [
        { type: "mc", q: "이 책을 읽고 많은 것을 ___. (Door dit boek ben ik veel te weten gekomen.)",
          options: ["알게 됐어요", "알게 됬어요", "아게 됐어요", "알게 했어요"], answer: 0,
          why: ["Goed: 알 + -게 됐어요.", "됬어요 is een spelfout. Schrijf 됐어요.", "Voor -게 blijft de ㄹ van 알다 staan.", "-게 하다 betekent \"laten\". Hier wil je -게 되다."] },
        { type: "mc", q: "왜 네덜란드에서 ___? (Hoe ben je in Nederland gaan werken?)",
          options: ["일하게 됐어요", "일하게 돼었어요", "일하기 됐어요", "일해게 됐어요"], answer: 0,
          why: ["Goed: 일하 + -게 됐어요.", "되 + 었 schrijf je als 됐 of 되었, niet als 돼었.", "De uitgang is -게, niet -기.", "-게 komt aan de stam 일하, niet aan de 어-vorm."] }
      ]
    }
  ]
};
