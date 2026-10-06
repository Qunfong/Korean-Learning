// TOPIK 4 lessons. Grammar first; vocabulary lists come later.
// Question types: mc (answer = index), order (tokens in the right order), open (self-check with model answers).
// "review" questions never appear in the lesson itself; they come back on the review page.
window.HSK = window.HSK || {};
window.HSK.topik4 = {
  level: "TOPIK 4", dir: "topik4",
  lessons: [
    {
      id: "01", slug: "ppunman", title: "-(으)ㄹ 뿐만 아니라", sub: "Niet alleen ..., maar ook ...",
      canDo: "Je kunt nu twee punten van dezelfde soort opstapelen met -(으)ㄹ 뿐만 아니라.",
      guess: {
        q: "\"Dat huis is niet alleen groot, maar ook rustig.\" Welke zin klopt, denk je?",
        options: ["그 집은 클 뿐만 아니라 조용해요.", "그 집은 크을 뿐만 아니라 조용해요.", "그 집은 큰 뿐만 아니라 조용해요.", "그 집은 크는 뿐만 아니라 조용해요."], answer: 0,
        why: ["Goed: 크다 eindigt op een klinker, dus alleen ㄹ erbij: 클.", "Na een klinker komt geen 을, alleen ㄹ.", "Voor 뿐 staat altijd de ㄹ-vorm, niet de ㄴ-vorm.", "크는 is geen vorm die voor 뿐 kan staan."]
      },
      problem: "Je wilt twee pluspunten (of twee minpunten) noemen, en het tweede moet extra nadruk krijgen. \"Het is goedkoop. Het is ook lekker.\" klinkt los. Met -(으)ㄹ 뿐만 아니라 maak je er één zin van: niet alleen dit, maar ook dat.",
      pattern: [
        { l: "punt 1 (stam)", v: "음식이 맛있", c: 1 }, { l: "niet alleen", v: "을 뿐만 아니라", c: 2, key: true },
        { l: "punt 2 + 도", v: "값도", c: 3 }, { l: "eind", v: "싸요", c: 4 }
      ],
      patternCap: "Stam + (으)ㄹ 뿐만 아니라 + punt 2 (vaak met 도). Naamwoord + 뿐만 아니라.",
      rules: [
        "Stam op een klinker of op ㄹ: + ㄹ 뿐만 아니라 (크다 → 클, 살다 → 살). Stam met 받침: + 을 뿐만 아니라 (먹다 → 먹을).",
        "Het werkt met werkwoorden en bijvoeglijke werkwoorden. Bij een naamwoord plak je 뿐만 direct vast: 영어뿐만 아니라.",
        "Voor de verleden tijd zet je -았/었 ervoor: 왔을 뿐만 아니라, 먹었을 뿐만 아니라.",
        "In het tweede deel staat vaak 도 bij het nieuwe punt: 값도, 중국어도."
      ],
      pitfall: "Beide punten wijzen dezelfde kant op: twee goede dingen of twee slechte dingen. Voor een tegenstelling (mooi maar duur) gebruik je -지만.",
      examples: [
        { cn: "이 식당은 음식이 맛있을 뿐만 아니라 값도 싸요.", py: "I sikdangeun eumsigi masisseul ppunman anira gapdo ssayo.", nl: "In dit restaurant is het eten niet alleen lekker, het is ook goedkoop." },
        { cn: "그는 영어를 잘할 뿐만 아니라 중국어도 잘해요.", py: "Geuneun yeongeoreul jalhal ppunman anira junggugeodo jalhaeyo.", nl: "Hij spreekt niet alleen goed Engels, maar ook goed Chinees." },
        { cn: "어제는 비가 왔을 뿐만 아니라 바람도 많이 불었어요.", py: "Eojeneun biga wasseul ppunman anira baramdo mani bureosseoyo.", nl: "Gisteren regende het niet alleen, het waaide ook hard." },
        { cn: "이 노래는 한국뿐만 아니라 외국에서도 유명해요.", py: "I noraeneun hangukppunman anira oegugeseodo yumyeonghaeyo.", nl: "Dit liedje is niet alleen in Korea bekend, maar ook in het buitenland." }
      ],
      vocab: [],
      dialogue: [
        ["A", "새 집은 어때요?", "Sae jibeun eottaeyo?", "Hoe is je nieuwe huis?"],
        ["B", "아주 좋아요. 넓을 뿐만 아니라 조용해요.", "Aju joayo. Neolbeul ppunman anira joyonghaeyo.", "Heel fijn. Het is niet alleen ruim, het is ook rustig."],
        ["A", "회사에서 가까워요?", "Hoesaeseo gakkawoyo?", "Is het dicht bij je werk?"],
        ["B", "네, 가까울 뿐만 아니라 지하철역도 바로 앞에 있어요.", "Ne, gakkaul ppunman anira jihacheollyeokdo baro ape isseoyo.", "Ja, het is niet alleen dichtbij, er is ook een metrostation vlak voor de deur."],
        ["A", "정말 좋겠네요!", "Jeongmal jokenneyo!", "Dat klinkt echt fijn!"]
      ],
      questions: [
        { type: "mc", q: "어제 밥을 많이 ___ 뿐만 아니라 디저트도 먹었어요. (Gisteren heb ik niet alleen veel gegeten, ook een toetje.)",
          options: ["먹었을", "먹었는", "먹은", "먹었던"], answer: 0,
          why: ["Goed: verleden tijd -었 + 을 vóór 뿐만 아니라.", "Voor 뿐 staat de ㄹ-vorm, niet 는.", "먹은 is de ㄴ-vorm; voor 뿐 moet het 을 zijn.", "던 kan niet voor 뿐 staan; het moet 먹었을 zijn."] },
        { type: "mc", q: "민수는 ___ 중국어도 잘해요. (Minsu spreekt niet alleen Engels goed, maar ook Chinees.)",
          options: ["영어뿐만 아니라", "영어를 뿐만 아니라", "영어일 뿐만 아니라", "영어는 뿐만 아니라"], answer: 0,
          why: ["Goed: bij een naamwoord plak je 뿐만 direct vast.", "Tussen het naamwoord en 뿐만 komt geen 를.", "영어일 zegt \"is Engels\"; dat past hier niet.", "Tussen het naamwoord en 뿐만 komt geen 는."] },
        { type: "mc", q: "그 사람은 서울에 ___ 뿐만 아니라 서울에서 일도 해요. (살다)",
          options: ["살", "살을", "사는", "살는"], answer: 0,
          why: ["Goed: de stam eindigt op ㄹ, dus het blijft 살.", "Een ㄹ-stam krijgt geen extra 을.", "사는 is de ㄴ-vorm; voor 뿐 moet het de ㄹ-vorm zijn.", "살는 bestaat niet; voor 뿐 staat 살."] },
        { type: "order", q: "Zet in de goede volgorde: \"Deze kamer is niet alleen ruim, maar ook licht.\"",
          tokens: [["이 방은", "i bangeun"], ["넓을", "neolbeul"], ["뿐만", "ppunman"], ["아니라", "anira"], ["밝아요", "balgayo"]] },
        { type: "open", q: "Vertaal: \"Mijn zus is niet alleen slim, maar ook aardig.\"",
          model: ["제 언니는 똑똑할 뿐만 아니라 친절해요.", "우리 누나는 똑똑할 뿐만 아니라 착해요.", "제 여동생은 머리가 좋을 뿐만 아니라 성격도 좋아요."],
          tip: "Check: staat er ㄹ of 을 vóór 뿐만 (똑똑할, 좋을), en zijn beide punten positief?" }
      ],
      review: [
        { type: "mc", q: "어제는 비가 ___ 뿐만 아니라 바람도 많이 불었어요.",
          options: ["왔을", "오을", "온", "왔는"], answer: 0,
          why: ["Goed: verleden tijd 왔 + 을.", "Na een klinker komt geen 을, en het gebeurde gisteren.", "온 is de ㄴ-vorm; voor 뿐 moet het de ㄹ-vorm zijn.", "Voor 뿐 staat 을, niet 는."] },
        { type: "mc", q: "그는 요리를 잘___ 뿐만 아니라 청소도 잘해요.",
          options: ["할", "하을", "한", "하는"], answer: 0,
          why: ["Goed: 하다 eindigt op een klinker, dus 할.", "Na een klinker komt alleen ㄹ, geen 을.", "한 is de ㄴ-vorm; voor 뿐 moet het 할 zijn.", "하는 kan niet voor 뿐 staan."] }
      ]
    },
    {
      id: "02", slug: "deorado", title: "-더라도", sub: "Zelfs als ..., toch ...",
      canDo: "Je kunt nu zeggen dat iets doorgaat, zelfs als een (moeilijke) situatie waar wordt, met -더라도.",
      guess: {
        q: "\"Zelfs als het regent, ga ik.\" Welke zin klopt, denk je?",
        options: ["비가 오더라도 갈 거예요.", "비가 와더라도 갈 거예요.", "비가 오으더라도 갈 거예요.", "비가 오는더라도 갈 거예요."], answer: 0,
        why: ["Goed: 더라도 komt direct na de stam 오.", "Er komt geen 아/어 vóór 더라도.", "더라도 krijgt nooit een extra 으.", "Er komt geen 는 vóór 더라도."]
      },
      problem: "Soms wil je zeggen: ook in het ergste geval verandert er niets. \"Ik ga, zelfs als het regent.\" -아/어도 kan dat ook, maar -더라도 is sterker. Het klinkt alsof de situatie misschien niet gebeurt, maar je bent er klaar voor.",
      pattern: [
        { l: "situatie (stam)", v: "비가 오", c: 1 }, { l: "zelfs als", v: "더라도", c: 2, key: true },
        { l: "toch", v: "꼭", c: 3 }, { l: "besluit", v: "갈 거예요", c: 4 }
      ],
      patternCap: "Stam + 더라도 + besluit, advies of plicht. Vaak met 아무리 (hoe ... ook).",
      rules: [
        "더라도 komt direct na de stam, met of zonder 받침: 가더라도, 먹더라도, 힘들더라도.",
        "Bij een naamwoord gebruik je 이더라도: 학생이더라도.",
        "Voor iets in het verleden zet je -았/었 ervoor: 늦었더라도, 떨어졌더라도.",
        "Het tweede deel is vaak een besluit, advies of plicht: -(으)ㄹ 거예요, -지 마세요, -아/어야 해요."
      ],
      pitfall: "Zet geen 아/어 of 는 vóór 더라도. Zeg dus niet 와더라도 of 오는더라도, maar 오더라도.",
      examples: [
        { cn: "비가 오더라도 꼭 갈 거예요.", py: "Biga odeorado kkok gal geoyeyo.", nl: "Zelfs als het regent, ga ik zeker." },
        { cn: "힘들더라도 포기하지 마세요.", py: "Himdeuldeorado pogihaji maseyo.", nl: "Geef niet op, ook al is het zwaar." },
        { cn: "아무리 바쁘더라도 아침은 먹어야 해요.", py: "Amuri bappeudeorado achimeun meogeoya haeyo.", nl: "Hoe druk je ook bent, je moet ontbijten." },
        { cn: "시험에 떨어졌더라도 실망하지 마세요.", py: "Siheome tteoreojyeotdeorado silmanghaji maseyo.", nl: "Ook als je voor het examen gezakt bent, wees niet teleurgesteld." }
      ],
      vocab: [],
      dialogue: [
        ["A", "내일 등산 갈 거예요?", "Naeil deungsan gal geoyeyo?", "Ga je morgen de berg op?"],
        ["B", "네, 비가 오더라도 갈 거예요.", "Ne, biga odeorado gal geoyeyo.", "Ja, ook als het regent, ga ik."],
        ["A", "비가 많이 오면 위험하지 않아요?", "Biga mani omyeon wiheomhaji anayo?", "Is het niet gevaarlijk als het hard regent?"],
        ["B", "많이 오면 안 갈 거예요. 그런데 조금 오더라도 꼭 갈 거예요.", "Mani omyeon an gal geoyeyo. Geureonde jogeum odeorado kkok gal geoyeyo.", "Als het hard regent, ga ik niet. Maar als het een beetje regent, ga ik zeker."],
        ["A", "그럼 우산 꼭 가져가세요.", "Geureom usan kkok gajyeogaseyo.", "Neem dan zeker een paraplu mee."]
      ],
      questions: [
        { type: "mc", q: "아무리 ___ 아침은 꼭 드세요. (바쁘다)",
          options: ["바쁘더라도", "바빠더라도", "바쁘는더라도", "바쁜더라도"], answer: 0,
          why: ["Goed: stam 바쁘 + 더라도.", "Er komt geen 아/어 vóór 더라도.", "Er komt geen 는 vóór 더라도.", "Er komt geen ㄴ-vorm vóór 더라도."] },
        { type: "mc", q: "\"Geef niet op, ook al is het zwaar.\" Welke zin klopt?",
          options: ["힘들더라도 포기하지 마세요.", "힘들어더라도 포기하지 마세요.", "힘든더라도 포기하지 마세요.", "힘들으더라도 포기하지 마세요."], answer: 0,
          why: ["Goed: stam 힘들 + 더라도.", "Er komt geen 어 vóór 더라도.", "힘든 is de ㄴ-vorm; die past niet vóór 더라도.", "더라도 krijgt nooit een extra 으."] },
        { type: "mc", q: "시험에 ___ 실망하지 마세요. (Het examen is al voorbij: ook als je gezakt bent.)",
          options: ["떨어졌더라도", "떨어졌어더라도", "떨어진더라도", "떨어졌는더라도"], answer: 0,
          why: ["Goed: verleden tijd 떨어졌 + 더라도.", "Na 었 komt direct 더라도, zonder 어.", "떨어진 is de ㄴ-vorm; die past niet vóór 더라도.", "Er komt geen 는 vóór 더라도."] },
        { type: "order", q: "Zet in de goede volgorde: \"Zelfs als die tas duur is, koop ik hem.\"",
          tokens: [["그", "geu"], ["가방이", "gabangi"], ["비싸더라도", "bissadeorado"], ["살", "sal"], ["거예요", "geoyeyo"]] },
        { type: "open", q: "Vertaal: \"Zelfs als je het druk hebt, bel me.\"",
          model: ["바쁘더라도 전화하세요.", "아무리 바쁘더라도 저한테 전화해 주세요.", "바쁘더라도 꼭 연락해 주세요."],
          tip: "Check: staat 더라도 direct na de stam 바쁘, zonder 아/어?" }
      ],
      review: [
        { type: "mc", q: "___ 꼭 와 주세요. (Ook als je laat bent, kom zeker.)",
          options: ["늦더라도", "늦어더라도", "늦는더라도", "늦으더라도"], answer: 0,
          why: ["Goed: stam 늦 + 더라도.", "Er komt geen 어 vóór 더라도.", "Er komt geen 는 vóór 더라도.", "더라도 krijgt geen 으, ook niet na een 받침."] },
        { type: "mc", q: "학생___ 돈을 내야 해요. (Ook als je student bent, moet je betalen.)",
          options: ["이더라도", "더라도", "을더라도", "인더라도"], answer: 0,
          why: ["Goed: naamwoord met 받침 + 이더라도.", "학생 heeft een 받침; je hebt 이 nodig.", "을 is een objectpartikel en past hier niet.", "인 is de ㄴ-vorm van 이다; die past niet vóór 더라도."] }
      ]
    },
    {
      id: "03", slug: "barame", title: "-는 바람에", sub: "Doordat ... (en dat was jammer)",
      canDo: "Je kunt nu uitleggen welke onverwachte gebeurtenis een vervelend gevolg had, met -는 바람에.",
      guess: {
        q: "\"Doordat ik me versliep, was ik te laat.\" Welke zin klopt, denk je?",
        options: ["늦잠을 자는 바람에 늦었어요.", "늦잠을 잔 바람에 늦었어요.", "늦잠을 잤는 바람에 늦었어요.", "늦잠을 자는 바람에 늦을 거예요."], answer: 0,
        why: ["Goed: altijd 는 vóór 바람에, en het gevolg in de verleden tijd.", "Ook als het al gebeurd is, blijft het 는, niet ㄴ.", "Er komt geen verleden tijd vóór 는 바람에.", "Het gevolg van 바람에 is al gebeurd; geen toekomst."]
      },
      problem: "Er gebeurde iets onverwachts, en daardoor ging iets mis. \"De bus ging kapot, dus ik was te laat.\" Met -아/어서 noem je gewoon een reden. Met -는 바람에 zeg je erbij: dit was niet de bedoeling.",
      pattern: [
        { l: "gebeurtenis (stam)", v: "버스가 고장 나", c: 1 }, { l: "doordat", v: "는 바람에", c: 2, key: true },
        { l: "gevolg (verleden)", v: "늦었어요", c: 4 }
      ],
      patternCap: "Werkwoordstam + 는 바람에 + gevolg in de verleden tijd (meestal negatief)",
      rules: [
        "Werkwoordstam + 는 바람에, met of zonder 받침: 오는 바람에, 먹는 바람에. Bij een ㄹ-stam valt de ㄹ weg: 울다 → 우는 바람에.",
        "Ook als het al gebeurd is, blijft het 는. Zeg niet 잔 바람에 of 잤는 바람에.",
        "Alleen met werkwoorden, niet met bijvoeglijke werkwoorden zoals 바쁘다 of 춥다.",
        "Het tweede deel staat in de verleden tijd. Er komt geen opdracht, voorstel of toekomst."
      ],
      pitfall: "Zeg niet 비가 오는 바람에 집에 있으세요. Voor een opdracht of voorstel gebruik je -(으)니까: 비가 오니까 집에 있으세요.",
      examples: [
        { cn: "늦잠을 자는 바람에 회의에 늦었어요.", py: "Neutjameul janeun barame hoeuie neujeosseoyo.", nl: "Doordat ik me versliep, kwam ik te laat op de vergadering." },
        { cn: "버스가 고장 나는 바람에 걸어서 왔어요.", py: "Beoseuga gojang naneun barame georeoseo wasseoyo.", nl: "Doordat de bus kapotging, ben ik lopend gekomen." },
        { cn: "갑자기 비가 오는 바람에 옷이 다 젖었어요.", py: "Gapjagi biga oneun barame osi da jeojeosseoyo.", nl: "Doordat het plotseling ging regenen, werden mijn kleren helemaal nat." },
        { cn: "휴대폰을 잃어버리는 바람에 연락을 못 했어요.", py: "Hyudaeponeul ireobeorineun barame yeollageul mot haesseoyo.", nl: "Doordat ik mijn telefoon kwijtraakte, kon ik geen contact opnemen." }
      ],
      vocab: [],
      dialogue: [
        ["A", "왜 이렇게 늦었어요?", "Wae ireoke neujeosseoyo?", "Waarom ben je zo laat?"],
        ["B", "미안해요. 지하철이 고장 나는 바람에 택시를 탔어요.", "Mianhaeyo. Jihacheori gojang naneun barame taeksireul tasseoyo.", "Sorry. Doordat de metro kapotging, heb ik een taxi genomen."],
        ["A", "택시는 빨리 왔어요?", "Taeksineun ppalli wasseoyo?", "Kwam de taxi snel?"],
        ["B", "아니요, 길이 막히는 바람에 더 늦었어요.", "Aniyo, giri makineun barame deo neujeosseoyo.", "Nee, doordat het druk was op de weg, werd ik nog later."],
        ["A", "고생했어요. 커피 한잔해요.", "Gosaenghaesseoyo. Keopi hanjanhaeyo.", "Wat een gedoe. Laten we een kop koffie drinken."]
      ],
      questions: [
        { type: "mc", q: "갑자기 비가 ___ 바람에 옷이 다 젖었어요.",
          options: ["오는", "온", "왔는", "올"], answer: 0,
          why: ["Goed: altijd 는 vóór 바람에.", "Ook als het al gebeurd is, blijft het 는, niet ㄴ.", "Er komt geen verleden tijd vóór 는 바람에.", "올 is de ㄹ-vorm; vóór 바람에 staat 는."] },
        { type: "mc", q: "Welke zin klopt?",
          options: ["길이 막히는 바람에 약속에 늦었어요.", "길이 막히는 바람에 택시를 타세요.", "길이 막힌 바람에 약속에 늦었어요.", "길이 막히는 바람에 약속에 늦을 거예요."], answer: 0,
          why: ["Goed: 는 바람에 + gevolg in de verleden tijd.", "Na 바람에 komt geen opdracht. Gebruik -(으)니까.", "Vóór 바람에 staat altijd 는, niet ㄴ.", "Na 바람에 komt geen toekomst; het gevolg is al gebeurd."] },
        { type: "mc", q: "아기가 밤새 ___ 바람에 잠을 못 잤어요. (울다)",
          options: ["우는", "울는", "운", "울은"], answer: 0,
          why: ["Goed: bij een ㄹ-stam valt de ㄹ weg vóór 는.", "De ㄹ valt weg vóór 는.", "운 is de ㄴ-vorm; vóór 바람에 staat 는.", "울은 bestaat niet; het is 우는."] },
        { type: "order", q: "Zet in de goede volgorde: \"Doordat ik me versliep, miste ik de bus.\"",
          tokens: [["늦잠을", "neutjameul"], ["자는", "janeun"], ["바람에", "barame"], ["버스를 놓쳤어요", "beoseureul nochyeosseoyo"]] },
        { type: "open", q: "Vertaal: \"Doordat de bus kapotging, kwam ik te laat.\"",
          model: ["버스가 고장 나는 바람에 늦었어요.", "버스가 고장 나는 바람에 지각했어요.", "버스가 갑자기 고장 나는 바람에 늦게 왔어요."],
          tip: "Check: staat er 는 vóór 바람에, en staat het gevolg in de verleden tijd?" }
      ],
      review: [
        { type: "mc", q: "컴퓨터가 갑자기 ___ 바람에 파일이 다 없어졌어요. (꺼지다)",
          options: ["꺼지는", "꺼진", "꺼졌는", "꺼질"], answer: 0,
          why: ["Goed: stam 꺼지 + 는 바람에.", "Ook als het al gebeurd is, blijft het 는.", "Er komt geen verleden tijd vóór 는 바람에.", "꺼질 is de ㄹ-vorm; vóór 바람에 staat 는."] },
        { type: "mc", q: "너무 많이 ___ 바람에 배가 아팠어요. (Doordat ik te veel at, had ik buikpijn.)",
          options: ["먹는", "먹은", "먹었는", "먹을"], answer: 0,
          why: ["Goed: altijd 는 vóór 바람에, ook met 받침.", "Ook als het al gebeurd is, blijft het 는, niet 은.", "Er komt geen verleden tijd vóór 는 바람에.", "먹을 is de ㄹ-vorm; vóór 바람에 staat 는."] }
      ]
    },
    {
      id: "04", slug: "daga", title: "-다가", sub: "Bezig met iets, en dan ineens iets anders",
      canDo: "Je kunt nu zeggen dat een handeling onderbroken werd of dat je plan veranderde, met -다가 en -았/었다가.",
      guess: {
        q: "\"Ik viel in slaap terwijl ik tv keek.\" Welke zin klopt, denk je?",
        options: ["텔레비전을 보다가 잠이 들었어요.", "텔레비전을 봐다가 잠이 들었어요.", "텔레비전을 보는다가 잠이 들었어요.", "텔레비전을 본다가 잠이 들었어요."], answer: 0,
        why: ["Goed: 다가 komt direct na de stam 보.", "Er komt geen 아/어 vóór 다가.", "Er komt geen 는 vóór 다가.", "Er komt geen ㄴ vóór 다가."]
      },
      problem: "Je was met iets bezig, en toen gebeurde er iets anders. \"Ik keek tv, en toen viel ik in slaap.\" Of je deed iets, en veranderde daarna van plan. Met -다가 laat je zien dat de eerste handeling stopt of omslaat.",
      pattern: [
        { l: "handeling 1 (stam)", v: "집에 가", c: 1 }, { l: "en toen", v: "다가", c: 2, key: true },
        { l: "handeling 2", v: "친구를 만났어요", c: 4 }
      ],
      patternCap: "Stam + 다가 = midden in handeling 1. Stam + 았/었다가 = handeling 1 is af, dan iets anders.",
      rules: [
        "다가 komt direct na de stam, met of zonder 받침: 가다가, 먹다가, 공부하다가.",
        "Beide delen hebben hetzelfde onderwerp. De ik die tv kijkt, valt ook in slaap.",
        "-다가: handeling 1 is nog bezig als handeling 2 begint (밥을 먹다가 전화를 받았어요).",
        "-았/었다가: handeling 1 is helemaal af, daarna komt iets anders of het tegendeel (창문을 열었다가 닫았어요)."
      ],
      pitfall: "Gebruik geen ander onderwerp in het tweede deel. Zeg niet 내가 공부하다가 친구가 전화했어요, maar 공부하다가 친구에게 전화했어요.",
      examples: [
        { cn: "텔레비전을 보다가 잠이 들었어요.", py: "Tellebijeoneul bodaga jami deureosseoyo.", nl: "Ik viel in slaap terwijl ik tv keek." },
        { cn: "집에 가다가 친구를 만났어요.", py: "Jibe gadaga chingureul mannasseoyo.", nl: "Op weg naar huis kwam ik een vriend tegen." },
        { cn: "밥을 먹다가 전화를 받았어요.", py: "Babeul meokdaga jeonhwareul badasseoyo.", nl: "Ik was aan het eten, en toen nam ik de telefoon op." },
        { cn: "창문을 열었다가 추워서 닫았어요.", py: "Changmuneul yeoreotdaga chuwoseo dadasseoyo.", nl: "Ik deed het raam open, maar deed het weer dicht omdat het koud was." }
      ],
      vocab: [],
      dialogue: [
        ["A", "손이 왜 그래요?", "Soni wae geuraeyo?", "Wat is er met je hand?"],
        ["B", "요리하다가 손을 베었어요.", "Yorihadaga soneul beeosseoyo.", "Ik sneed me in mijn hand tijdens het koken."],
        ["A", "많이 아파요?", "Mani apayo?", "Doet het erg pijn?"],
        ["B", "네, 조금 아파요. 그래서 요리를 하다가 그만뒀어요.", "Ne, jogeum apayo. Geuraeseo yorireul hadaga geumandwosseoyo.", "Ja, een beetje. Daarom ben ik halverwege met koken gestopt."],
        ["A", "그럼 오늘은 밖에서 먹어요.", "Geureom oneureun bakkeseo meogeoyo.", "Laten we vandaag dan buiten eten."]
      ],
      questions: [
        { type: "mc", q: "집에 ___ 친구를 만났어요. (Op weg naar huis kwam ik een vriend tegen.)",
          options: ["가다가", "가아다가", "가는다가", "간다가"], answer: 0,
          why: ["Goed: stam 가 + 다가.", "Er komt geen 아 vóór 다가.", "Er komt geen 는 vóór 다가.", "Er komt geen ㄴ vóór 다가."] },
        { type: "mc", q: "창문을 ___ 추워서 닫았어요. (Ik deed het raam open, maar deed het weer dicht.)",
          options: ["열었다가", "열어다가", "연다가", "열었는다가"], answer: 0,
          why: ["Goed: het openen was af, dus 열었 + 다가.", "Na de stam komt geen 어 vóór 다가.", "연다가 bestaat niet; het openen was af, dus 열었다가.", "Er komt geen 는 vóór 다가."] },
        { type: "mc", q: "\"Ik was aan het studeren, en toen belde ik een vriend.\" Welke zin klopt?",
          options: ["나는 공부하다가 친구에게 전화했어요.", "나는 공부하다가 친구가 전화했어요.", "나는 공부했어다가 친구에게 전화했어요.", "나는 공부하는다가 친구에게 전화했어요."], answer: 0,
          why: ["Goed: één onderwerp (나), stam + 다가.", "Met 친구가 krijgt deel 2 een ander onderwerp; dat kan niet met 다가.", "공부했어다가 bestaat niet; het moet 공부하다가 zijn.", "Er komt geen 는 vóór 다가."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik viel in slaap terwijl ik een boek las.\"",
          tokens: [["책을", "chaegeul"], ["읽다가", "ikdaga"], ["잠이", "jami"], ["들었어요", "deureosseoyo"]] },
        { type: "open", q: "Vertaal: \"Op weg naar school kwam ik mijn leraar tegen.\"",
          model: ["학교에 가다가 선생님을 만났어요.", "학교에 가다가 우리 선생님을 만났어요.", "학교에 걸어가다가 선생님을 봤어요."],
          tip: "Check: staat 다가 direct na de stam 가, en ben jij het onderwerp van beide delen?" }
      ],
      review: [
        { type: "mc", q: "운전을 ___ 졸려서 잠깐 쉬었어요. (Tijdens het rijden werd ik slaperig.)",
          options: ["하다가", "해다가", "하는다가", "한다가"], answer: 0,
          why: ["Goed: stam 하 + 다가.", "Er komt geen 아/어 vóór 다가; 해 is 하 + 여.", "Er komt geen 는 vóór 다가.", "Er komt geen ㄴ vóór 다가."] },
        { type: "mc", q: "은행에 ___ 문이 닫혀서 그냥 왔어요. (Ik ging naar de bank, maar die was dicht.)",
          options: ["갔다가", "가았다가", "갔는다가", "간다가"], answer: 0,
          why: ["Goed: je was er al aangekomen, dus 갔 + 다가.", "가 + 았 wordt samen 갔.", "Er komt geen 는 vóór 다가.", "Er komt geen ㄴ vóór 다가."] }
      ]
    },
    {
      id: "05", slug: "jeongdo", title: "-(으)ㄹ 정도로", sub: "Zo ... dat ...",
      canDo: "Je kunt nu laten zien hoe sterk iets was, met een voorbeeld en -(으)ㄹ 정도로.",
      guess: {
        q: "\"Ik lachte zo hard dat de tranen kwamen.\" Welke zin klopt, denk je?",
        options: ["눈물이 날 정도로 웃었어요.", "눈물이 나을 정도로 웃었어요.", "눈물이 난 정도로 웃었어요.", "눈물이 나다 정도로 웃었어요."], answer: 0,
        why: ["Goed: 나다 eindigt op een klinker, dus alleen ㄹ: 날.", "Na een klinker komt geen 을.", "Voor 정도로 staat hier de ㄹ-vorm, niet de ㄴ-vorm.", "De woordenboekvorm kan niet vóór 정도로 staan."]
      },
      problem: "\"Het was heel warm\" zegt weinig. Hoe warm dan? Met -(으)ㄹ 정도로 geef je een voorbeeld dat de mate laat zien: zo warm dat ik niet kon slapen.",
      pattern: [
        { l: "voorbeeld (stam)", v: "배가 터지", c: 1 }, { l: "zo ... dat", v: "ㄹ 정도로", c: 2, key: true },
        { l: "wat er sterk was", v: "많이 먹었어요", c: 4 }
      ],
      patternCap: "Voorbeeld + (으)ㄹ 정도로 + wat er sterk was. Aan het eind: -(으)ㄹ 정도예요.",
      rules: [
        "Stam op een klinker of op ㄹ: + ㄹ 정도로 (나다 → 날, 울다 → 울). Stam met 받침: + 을 정도로 (먹다 → 먹을).",
        "Het werkt met werkwoorden en bijvoeglijke werkwoorden. Let op ㅂ-stammen: 어렵다 → 어려울 정도로.",
        "Het eerste deel is het voorbeeld; het tweede deel zegt wat er zo sterk was.",
        "Aan het eind van de zin zeg je -(으)ㄹ 정도예요: 걷기 힘들 정도예요."
      ],
      pitfall: "Gebruik de ㄹ-vorm, niet de ㄴ-vorm. Zeg 아플 정도로, niet 아픈 정도로.",
      examples: [
        { cn: "배가 터질 정도로 많이 먹었어요.", py: "Baega teojil jeongdoro mani meogeosseoyo.", nl: "Ik heb zoveel gegeten dat mijn buik bijna barstte." },
        { cn: "눈물이 날 정도로 웃었어요.", py: "Nunmuri nal jeongdoro useosseoyo.", nl: "Ik lachte zo hard dat de tranen kwamen." },
        { cn: "그 영화는 다시 보고 싶을 정도로 재미있었어요.", py: "Geu yeonghwaneun dasi bogo sipeul jeongdoro jaemiisseosseoyo.", nl: "Die film was zo leuk dat ik hem nog eens wil zien." },
        { cn: "어제는 잠을 못 잘 정도로 더웠어요.", py: "Eojeneun jameul mot jal jeongdoro deowosseoyo.", nl: "Gisteren was het zo warm dat ik niet kon slapen." }
      ],
      vocab: [],
      dialogue: [
        ["A", "어제 콘서트 어땠어요?", "Eoje konseoteu eottaesseoyo?", "Hoe was het concert gisteren?"],
        ["B", "정말 좋았어요. 목이 아플 정도로 노래를 따라 불렀어요.", "Jeongmal joasseoyo. Mogi apeul jeongdoro noraereul ttara bulleosseoyo.", "Echt goed. Ik zong zo hard mee dat mijn keel pijn deed."],
        ["A", "사람이 많았어요?", "Sarami manasseoyo?", "Was het druk?"],
        ["B", "네, 움직일 수 없을 정도로 많았어요.", "Ne, umjigil su eopseul jeongdoro manasseoyo.", "Ja, zo druk dat je je niet kon bewegen."],
        ["A", "다음에는 저도 같이 가고 싶어요.", "Daeumeneun jeodo gachi gago sipeoyo.", "De volgende keer wil ik ook mee."]
      ],
      questions: [
        { type: "mc", q: "어제는 잠을 못 ___ 정도로 더웠어요.",
          options: ["잘", "자을", "잔", "자기"], answer: 0,
          why: ["Goed: 자다 eindigt op een klinker, dus 잘.", "Na een klinker komt geen 을.", "Voor 정도로 staat hier de ㄹ-vorm, niet 잔.", "자기 is een naamwoordvorm en past niet vóór 정도로."] },
        { type: "mc", q: "배가 ___ 정도로 웃었어요. (Ik lachte zo hard dat mijn buik pijn deed.)",
          options: ["아플", "아프을", "아픈", "아파"], answer: 0,
          why: ["Goed: 아프다 eindigt op een klinker, dus 아플.", "Na een klinker komt geen 을.", "아픈 is de ㄴ-vorm; vóór 정도로 staat 아플.", "아파 is een eindvorm en past niet vóór 정도로."] },
        { type: "mc", q: "방이 숨쉬기 ___ 정도로 더웠어요. (어렵다) (De kamer was zo warm dat ademen moeilijk was.)",
          options: ["어려울", "어렵을", "어려운", "어렵울"], answer: 0,
          why: ["Goed: bij een ㅂ-stam wordt ㅂ + 을 samen 울: 어려울.", "Bij 어렵다 verandert ㅂ; 어렵을 bestaat niet.", "어려운 is de ㄴ-vorm; vóór 정도로 staat 어려울.", "De ㅂ valt weg: niet 어렵울, maar 어려울."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik heb zoveel gelopen dat mijn benen pijn doen.\"",
          tokens: [["다리가", "dariga"], ["아플", "apeul"], ["정도로", "jeongdoro"], ["많이 걸었어요", "mani georeosseoyo"]] },
        { type: "open", q: "Vertaal: \"Hij is zo moe dat hij niet kan lopen.\"",
          model: ["그는 걸을 수 없을 정도로 피곤해요.", "그는 못 걸을 정도로 피곤해요.", "그 사람은 걷지 못할 정도로 피곤해요."],
          tip: "Check: eindigt het voorbeeld op ㄹ of 을 vóór 정도로 (없을, 걸을, 못할)?" }
      ],
      review: [
        { type: "mc", q: "그 책은 밤새 ___ 정도로 재미있었어요. (Dat boek was zo leuk dat ik de hele nacht las.)",
          options: ["읽을", "읽ㄹ", "읽은", "읽는"], answer: 0,
          why: ["Goed: 읽다 heeft een 받침, dus + 을: 읽을.", "Na een 받침 komt 을, niet alleen ㄹ.", "읽은 is de ㄴ-vorm; vóór 정도로 staat 읽을.", "읽는 is de 는-vorm; vóór 정도로 staat 읽을."] },
        { type: "mc", q: "아이가 ___ 정도로 무서운 영화였어요. (Een film zo eng dat het kind huilde.)",
          options: ["울", "울을", "운", "울어"], answer: 0,
          why: ["Goed: bij een ㄹ-stam blijft het 울.", "Een ㄹ-stam krijgt geen extra 을.", "운 is de ㄴ-vorm; vóór 정도로 staat 울.", "울어 is een eindvorm en past niet vóór 정도로."] }
      ]
    },
    {
      id: "06", slug: "indirect", title: "Indirecte rede", sub: "Hij zei dat ... / vroeg of ... / stelde voor ... / zei dat ik moest ...",
      canDo: "Je kunt nu doorvertellen wat iemand zei, vroeg, voorstelde of opdroeg, met -다고, -냐고, -자고 en -(으)라고.",
      guess: {
        q: "\"Minsu zei dat hij morgen naar Busan gaat.\" Welke zin klopt, denk je?",
        options: ["민수 씨가 내일 부산에 간다고 했어요.", "민수 씨가 내일 부산에 가다고 했어요.", "민수 씨가 내일 부산에 가는다고 했어요.", "민수 씨가 내일 부산에 가냐고 했어요."], answer: 0,
        why: ["Goed: werkwoord op een klinker + ㄴ다고.", "Een werkwoord krijgt ㄴ of 는 vóór 다고.", "Na een klinker komt ㄴ다고, niet 는다고.", "냐고 is voor een vraag; Minsu deelde iets mee."]
      },
      problem: "Je wilt doorvertellen wat iemand zei, zonder letterlijk te citeren. Het Koreaans kijkt naar het soort zin: een mededeling, een vraag, een voorstel of een opdracht. Elk soort krijgt een eigen uitgang vóór 고 했어요.",
      pattern: [
        { l: "wie", v: "민수 씨가", c: 1 }, { l: "wat (in de goede vorm)", v: "내일 간다", c: 3 },
        { l: "citaat", v: "고 했어요", c: 2, key: true }
      ],
      patternCap: "Mededeling -다고 · vraag -냐고 · voorstel -자고 · opdracht -(으)라고 + 했어요 / 말했어요 / 물어봤어요",
      rules: [
        "Mededeling: werkwoord + ㄴ다고/는다고 (간다고, 먹는다고), bijvoeglijk werkwoord + 다고 (바쁘다고), naamwoord + (이)라고 (학생이라고). Verleden: -았/었다고.",
        "Vraag: + 냐고 (가냐고, 먹냐고, 바쁘냐고), naamwoord + (이)냐고. Vaak met 묻다 of 물어보다.",
        "Voorstel: + 자고 (가자고, 먹자고).",
        "Opdracht: + (으)라고 (가라고, 먹으라고). \"Geef mij\" wordt 달라고."
      ],
      pitfall: "Een bijvoeglijk werkwoord krijgt geen ㄴ of 는. Zeg 바쁘다고, niet 바쁜다고.",
      examples: [
        { cn: "민수 씨가 내일 바쁘다고 했어요.", py: "Minsu ssiga naeil bappeudago haesseoyo.", nl: "Minsu zei dat hij morgen druk is." },
        { cn: "친구가 저한테 점심을 먹었냐고 물어봤어요.", py: "Chinguga jeohante jeomsimeul meogeonnyago mureobwasseoyo.", nl: "Mijn vriend vroeg of ik al geluncht had." },
        { cn: "동생이 같이 영화를 보자고 했어요.", py: "Dongsaengi gachi yeonghwareul bojago haesseoyo.", nl: "Mijn broertje stelde voor om samen een film te kijken." },
        { cn: "의사가 담배를 끊으라고 했어요.", py: "Uisaga dambaereul kkeuneurago haesseoyo.", nl: "De dokter zei dat ik moest stoppen met roken." }
      ],
      vocab: [],
      dialogue: [
        ["A", "지민 씨가 뭐라고 했어요?", "Jimin ssiga mworago haesseoyo?", "Wat zei Jimin?"],
        ["B", "오늘 너무 피곤하다고 했어요.", "Oneul neomu pigonhadago haesseoyo.", "Ze zei dat ze vandaag erg moe is."],
        ["A", "그럼 내일 만나자고 할까요?", "Geureom naeil mannajago halkkayo?", "Zullen we dan voorstellen om morgen af te spreken?"],
        ["B", "아까 제가 물어봤어요. 내일 시간이 있냐고요.", "Akka jega mureobwasseoyo. Naeil sigani innyagoyo.", "Dat heb ik net gevraagd. Of ze morgen tijd heeft."],
        ["A", "뭐라고 대답했어요?", "Mworago daedaphaesseoyo?", "Wat antwoordde ze?"],
        ["B", "일찍 연락하라고 했어요.", "Iljjik yeollakarago haesseoyo.", "Ze zei dat we vroeg contact moeten opnemen."]
      ],
      questions: [
        { type: "mc", q: "민수 씨가 ___ 했어요. (Minsu zei dat hij het druk heeft.)",
          options: ["바쁘다고", "바쁜다고", "바쁘는다고", "바빠다고"], answer: 0,
          why: ["Goed: bijvoeglijk werkwoord + 다고.", "Een bijvoeglijk werkwoord krijgt geen ㄴ vóór 다고.", "Een bijvoeglijk werkwoord krijgt geen 는 vóór 다고.", "Er komt geen 아/어 vóór 다고."] },
        { type: "mc", q: "선생님이 이 책을 ___ 했어요. (De leraar zei: \"Lees dit boek.\")",
          options: ["읽으라고", "읽자고", "읽냐고", "읽는다고"], answer: 0,
          why: ["Goed: een opdracht wordt (으)라고; 읽 heeft een 받침, dus 으라고.", "자고 is een voorstel (laten we lezen), geen opdracht.", "냐고 is een vraag, geen opdracht.", "는다고 is een mededeling, geen opdracht."] },
        { type: "mc", q: "엄마가 밥을 ___ 물어봤어요. (Mijn moeder vroeg of ik al gegeten had.)",
          options: ["먹었냐고", "먹었다고", "먹으라고", "먹었자고"], answer: 0,
          why: ["Goed: een vraag in de verleden tijd wordt 었냐고.", "다고 is een mededeling; je moeder vroeg iets.", "으라고 is een opdracht; je moeder vroeg iets.", "자고 krijgt nooit een verleden tijd, en het is geen vraag."] },
        { type: "order", q: "Zet in de goede volgorde: \"Mijn vriend stelde voor om samen te eten.\"",
          tokens: [["친구가", "chinguga"], ["같이 밥을", "gachi babeul"], ["먹자고", "meokjago"], ["했어요", "haesseoyo"]] },
        { type: "open", q: "Vertaal: \"Mijn moeder zei dat ik vroeg moest gaan slapen.\"",
          model: ["엄마가 일찍 자라고 했어요.", "어머니가 저한테 일찍 자라고 하셨어요.", "엄마가 빨리 자라고 말했어요."],
          tip: "Check: is het een opdracht, dus 자라고 (klinker + 라고)?" }
      ],
      review: [
        { type: "mc", q: "동생이 내일 같이 ___ 했어요. (Mijn broertje stelde voor om morgen samen te gaan zwemmen.)",
          options: ["수영하자고", "수영하라고", "수영하냐고", "수영한다고"], answer: 0,
          why: ["Goed: een voorstel wordt 자고.", "라고 is een opdracht, geen voorstel.", "냐고 is een vraag, geen voorstel.", "ㄴ다고 is een mededeling, geen voorstel."] },
        { type: "mc", q: "그 사람이 자기가 ___ 했어요. (Hij zei dat hij student is.)",
          options: ["학생이라고", "학생다고", "학생이다고", "학생라고"], answer: 0,
          why: ["Goed: naamwoord met 받침 + 이라고.", "Bij een naamwoord komt (이)라고, niet 다고.", "이다 wordt 이라고, niet 이다고.", "학생 heeft een 받침; je hebt 이 nodig: 이라고."] }
      ]
    }
  ]
};
