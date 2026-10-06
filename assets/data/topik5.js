// TOPIK 5 lessons. Grammar first; vocabulary follows later.
// Question types: mc (answer = index), order (tokens in the right order), open (self-check with model answers).
// "review" questions never appear in the lesson itself; they come back on the review page.
window.HSK = window.HSK || {};
window.HSK.topik5 = {
  level: "TOPIK 5", dir: "topik5",
  lessons: [
    {
      id: "01", slug: "banmyeone", title: "-(으)ㄴ/는 반면에", sub: "Twee tegengestelde kanten: daarentegen",
      canDo: "Je kunt nu twee tegengestelde kanten van iets naast elkaar zetten met -(으)ㄴ/는 반면에.",
      guess: {
        q: "이 동네는 조용한 반면에 교통이 불편해요. Wat betekent dit, denk je?",
        options: ["Deze buurt is rustig, maar het vervoer is daarentegen onhandig.", "Deze buurt is rustig, en daardoor is het vervoer onhandig.", "Deze buurt is rustig, en het vervoer is ook handig.", "Deze buurt is rustig, omdat het vervoer onhandig is."], answer: 0,
        why: ["Goed: 반면에 zet twee tegengestelde kanten naast elkaar.", "반면에 geeft geen oorzaak of gevolg aan.", "불편해요 betekent onhandig, en 반면에 geeft een tegenstelling.", "Er staat geen reden in de zin. 반면에 zet twee kanten tegenover elkaar."]
      },
      problem: "Je wilt een voordeel en een nadeel tegenover elkaar zetten. In het Nederlands zeg je \"..., maar daarentegen ...\". -지만 kan dat ook, maar klinkt alledaags. In formeel en geschreven Koreaans gebruik je -(으)ㄴ/는 반면에. Het benadrukt dat de twee kanten tegengesteld zijn.",
      pattern: [
        { l: "onderwerp", v: "이 일은", c: 1 }, { l: "eigenschap", v: "힘든", c: 4 },
        { l: "반면에", v: "반면에", c: 2, key: true }, { l: "tegenkant", v: "월급이 많아요", c: 5 }
      ],
      patternCap: "Bijvoeglijk werkwoord + (으)ㄴ 반면에 · werkwoord + 는 반면에 · daarna de tegengestelde kant",
      rules: [
        "Bijvoeglijk werkwoord: na een klinker -ㄴ 반면에 (싼 반면에), na een 받침 -은 반면에 (작은 반면에).",
        "Werkwoord in het heden: -는 반면에 (잘 먹는 반면에). Ook 있다 en 없다 krijgen 는: 맛있는 반면에.",
        "Werkwoord in het verleden: -(으)ㄴ 반면에 (많이 온 반면에). 이다 wordt 인 반면에.",
        "Dit is vooral schrijftaal en formele taal. In spreektaal zeg je meestal -지만 of -는데."
      ],
      pitfall: "Zeg niet 비싸는 반면에. 비싸다 is een bijvoeglijk werkwoord, dus: 비싼 반면에. Schrijf 반면에 los van het woord ervoor.",
      examples: [
        { cn: "이 식당은 음식이 맛있는 반면에 가격이 비싸요.", py: "I sikdang-eun eumsigi masinneun banmyeone gagyeogi bissayo.", nl: "Dit restaurant heeft lekker eten, maar is daarentegen duur." },
        { cn: "형은 운동을 잘하는 반면에 동생은 공부를 잘해요.", py: "Hyeong-eun undong-eul jalhaneun banmyeone dongsaeng-eun gongbureul jalhaeyo.", nl: "De oudste broer is goed in sport. De jongste is daarentegen goed in leren." },
        { cn: "도시 생활은 편리한 반면에 스트레스가 많다.", py: "Dosi saenghwareun pyeollihan banmyeone seuteureseuga manta.", nl: "Het stadsleven is handig, maar geeft daarentegen veel stress." },
        { cn: "작년에는 비가 많이 온 반면에 올해는 거의 안 왔어요.", py: "Jangnyeoneneun biga mani on banmyeone olhaeneun geoui an wasseoyo.", nl: "Vorig jaar regende het veel. Dit jaar regende het daarentegen bijna niet." }
      ],
      vocab: [],
      dialogue: [
        ["A", "새 회사는 어때요?", "Sae hoesaneun eottaeyo?", "Hoe is je nieuwe bedrijf?"],
        ["B", "월급이 많은 반면에 일이 너무 많아요.", "Wolgeubi maneun banmyeone iri neomu manayo.", "Het salaris is hoog, maar er is daarentegen erg veel werk."],
        ["A", "그럼 퇴근이 늦어요?", "Geureom toegeuni neujeoyo?", "Ga je dan laat naar huis?"],
        ["B", "네. 그래도 동료들은 친절해요.", "Ne. Geuraedo dongnyodeureun chinjeolhaeyo.", "Ja. Maar de collega's zijn wel aardig."],
        ["A", "일이 힘든 반면에 사람들이 좋네요.", "Iri himdeun banmyeone saramdeuri jonneyo.", "Het werk is zwaar, maar de mensen zijn daarentegen fijn."]
      ],
      questions: [
        { type: "mc", q: "\"Dit huis is ruim, maar daarentegen oud.\" Welke zin klopt?",
          options: ["이 집은 넓은 반면에 오래됐어요.", "이 집은 넓는 반면에 오래됐어요.", "이 집은 넓을 반면에 오래됐어요.", "이 집은 넓어서 반면에 오래됐어요."], answer: 0,
          why: ["Goed: 넓다 is een bijvoeglijk werkwoord met 받침, dus 넓은 반면에.", "는 hoort bij werkwoorden. 넓다 is een bijvoeglijk werkwoord.", "-(으)ㄹ is een toekomstvorm en past niet vóór 반면에.", "Na -아서 kan 반면에 niet komen. Het moet een bijvoeglijke vorm zijn: 넓은."] },
        { type: "mc", q: "저는 고기를 자주 ___ 반면에 채소는 잘 안 먹어요.",
          options: ["먹는", "먹은", "먹을", "먹고"], answer: 0,
          why: ["Goed: een werkwoord in het heden krijgt -는 반면에.", "먹은 is verleden, maar de zin gaat over nu.", "-을 is een toekomstvorm en past niet vóór 반면에.", "-고 is een verbindingsvorm. Vóór 반면에 staat -는."] },
        { type: "mc", q: "\"Dit brood is lekker, maar daarentegen ongezond.\" Welke zin klopt?",
          options: ["이 빵은 맛있는 반면에 건강에 안 좋아요.", "이 빵은 맛있은 반면에 건강에 안 좋아요.", "이 빵은 맛있을 반면에 건강에 안 좋아요.", "이 빵은 맛있어 반면에 건강에 안 좋아요."], answer: 0,
          why: ["Goed: woorden op 있다 en 없다 krijgen -는: 맛있는.", "맛있다 eindigt op 있다. Dan gebruik je -는, niet -은.", "-을 is een toekomstvorm en past niet vóór 반면에.", "Vóór 반면에 staat een bijvoeglijke vorm, niet -어."] },
        { type: "order", q: "Zet in de goede volgorde: \"Mijn vriend praat veel, ik daarentegen weinig.\"",
          tokens: [["제 친구는", "je chinguneun"], ["말이 많은", "mari maneun"], ["반면에", "banmyeone"], ["저는", "jeoneun"], ["말이 적어요", "mari jeogeoyo"]] },
        { type: "open", q: "Vertaal: \"Seoul is handig, maar daarentegen duur.\"",
          model: ["서울은 교통이 편리한 반면에 물가가 비싸요.", "서울은 편리한 반면에 물가가 비싸다.", "서울은 생활이 편리한 반면에 집값이 비싸요."],
          tip: "Check: 편리하다 is een bijvoeglijk werkwoord, dus 편리한 (niet 편리하는). Staat 반면에 los?" }
      ],
      review: [
        { type: "mc", q: "\"Deze tas is licht, maar daarentegen klein.\"",
          options: ["이 가방은 가벼운 반면에 작아요.", "이 가방은 가볍는 반면에 작아요.", "이 가방은 가볍은 반면에 작아요.", "이 가방은 가벼울 반면에 작아요."], answer: 0,
          why: ["Goed: 가볍다 wordt 가벼운 (ㅂ wordt 우).", "가볍다 is een bijvoeglijk werkwoord, dus geen -는.", "Bij 가볍다 verandert de ㅂ: 가벼운, niet 가볍은.", "-(으)ㄹ is een toekomstvorm en past niet vóór 반면에."] },
        { type: "mc", q: "영수는 말을 ___ 반면에 글은 잘 못 써요. (Yeongsu is goed in praten, maar kan daarentegen niet goed schrijven.)",
          options: ["잘하는", "잘한", "잘할", "잘하고"], answer: 0,
          why: ["Goed: 잘하다 is een werkwoord in het heden, dus -는 반면에.", "잘한 is verleden, maar de zin gaat over nu.", "-ㄹ is een toekomstvorm en past niet vóór 반면에.", "-고 is een verbindingsvorm. Vóór 반면에 staat -는."] }
      ]
    },
    {
      id: "02", slug: "neunhan", title: "-는 한", sub: "Zolang, tenzij, voor zover",
      canDo: "Je kunt nu een voorwaarde noemen die moet blijven gelden met -는 한, en \"voor zover ik weet\" zeggen met 제가 아는 한.",
      guess: {
        q: "특별한 일이 없는 한 내일 갈게요. Wat betekent dit, denk je?",
        options: ["Zolang er niets bijzonders gebeurt, kom ik morgen.", "Omdat er niets bijzonders is, kom ik morgen.", "Ook als er iets bijzonders gebeurt, kom ik morgen.", "Er is niets bijzonders, dus ik kom morgen niet."], answer: 0,
        why: ["Goed: -는 한 noemt een voorwaarde: zolang die geldt, gebeurt het.", "-는 한 is geen reden. Het is een voorwaarde.", "\"Ook als\" is -아/어도. -는 한 betekent \"zolang\".", "갈게요 betekent \"ik kom\", niet \"ik kom niet\"."]
      },
      problem: "Soms gebeurt iets alleen zolang een voorwaarde blijft gelden. In het Nederlands zeg je \"zolang\" of \"tenzij\". Gewoon -(으)면 zegt alleen \"als\". Met -는 한 zeg je: dit geldt, zolang die voorwaarde er is.",
      pattern: [
        { l: "voorwaarde", v: "포기하지 않", c: 4 }, { l: "는 한", v: "는 한", c: 2, key: true },
        { l: "gevolg", v: "성공할 수 있어요", c: 5 }
      ],
      patternCap: "Werkwoordstam + 는 한 + gevolg · 않는 한 = tenzij · 없는 한 · 제가 아는 한 = voor zover ik weet",
      rules: [
        "-는 한 komt direct na de stam, met of zonder 받침: 가는 한, 먹는 한.",
        "Vaak met een ontkenning: -지 않는 한 en 없는 한 betekenen \"tenzij\".",
        "Een stam op ㄹ verliest de ㄹ: 살다 wordt 사는 한, 알다 wordt 아는 한.",
        "Dit is vrij formeel en komt veel voor in schrijftaal. In spreektaal zeg je vaak -(으)면: 포기하지 않으면."
      ],
      pitfall: "Gebruik vóór 한 geen verleden of toekomst: niet 않은 한 of 않을 한, maar 않는 한. Schrijf 한 los: 않는 한, niet 않는한.",
      examples: [
        { cn: "포기하지 않는 한 꿈은 이루어질 거예요.", py: "Pogihaji anneun han kkumeun irueojil geoyeyo.", nl: "Zolang je niet opgeeft, komt je droom uit." },
        { cn: "제가 아는 한 그 사람은 거짓말을 하지 않아요.", py: "Jega aneun han geu sarameun geojinmareul haji anayo.", nl: "Voor zover ik weet, liegt die persoon niet." },
        { cn: "비가 오지 않는 한 경기는 예정대로 진행된다.", py: "Biga oji anneun han gyeongineun yejeongdaero jinhaengdoenda.", nl: "Tenzij het regent, gaat de wedstrijd door zoals gepland." },
        { cn: "특별한 일이 없는 한 매일 운동해요.", py: "Teukbyeolhan iri eomneun han maeil undonghaeyo.", nl: "Tenzij er iets bijzonders is, sport ik elke dag." }
      ],
      vocab: [],
      dialogue: [
        ["A", "이번 주말에 등산 갈 수 있어요?", "Ibeon jumare deungsan gal su isseoyo?", "Kun je dit weekend mee de berg op?"],
        ["B", "비가 오지 않는 한 갈게요.", "Biga oji anneun han galgeyo.", "Zolang het niet regent, ga ik mee."],
        ["A", "일기 예보에서는 맑을 거라고 했어요.", "Ilgi yeboeseoneun malgeul georago haesseoyo.", "Volgens de weersverwachting wordt het helder."],
        ["B", "그럼 급한 일이 생기지 않는 한 꼭 갈게요.", "Geureom geupan iri saenggiji anneun han kkok galgeyo.", "Dan kom ik zeker, tenzij er iets dringends gebeurt."],
        ["A", "좋아요. 토요일 아침에 만나요.", "Joayo. Toyoil achime mannayo.", "Prima. Tot zaterdagochtend."]
      ],
      questions: [
        { type: "mc", q: "\"Zolang je niet oefent, word je niet beter.\" Welke zin klopt?",
          options: ["연습하지 않는 한 실력이 늘지 않아요.", "연습하지 않은 한 실력이 늘지 않아요.", "연습하지 않을 한 실력이 늘지 않아요.", "연습하지 않아 한 실력이 늘지 않아요."], answer: 0,
          why: ["Goed: 않다 + 는 한.", "Vóór 한 staat de vorm -는, niet de verleden vorm -은.", "Vóór 한 staat de vorm -는, niet de toekomstvorm -을.", "Vóór 한 staat een bijvoeglijke vorm met -는, niet -아."] },
        { type: "mc", q: "제가 ___ 한 그 식당은 일요일에 문을 닫아요. (Voor zover ik weet ...)",
          options: ["아는", "알는", "알은", "알"], answer: 0,
          why: ["Goed: bij 알다 valt de ㄹ weg vóór -는: 아는.", "De ㄹ valt weg vóór -는. Het is 아는.", "Vóór 한 staat -는, en de ㄹ valt weg: 아는.", "알 is een toekomstvorm. Vóór 한 staat 아는."] },
        { type: "mc", q: "돈을 아끼지 않는 한 저축할 수 없어요. Wat betekent dit?",
          options: ["Tenzij je zuinig bent, kun je niet sparen.", "Omdat je zuinig bent, kun je niet sparen.", "Ook als je zuinig bent, kun je niet sparen.", "Zodra je zuinig bent, kun je niet sparen."], answer: 0,
          why: ["Goed: -지 않는 한 betekent \"tenzij\" of \"zolang niet\".", "-는 한 geeft een voorwaarde, geen reden.", "\"Ook als\" is -아/어도, niet -는 한.", "\"Zodra\" is -자마자, niet -는 한."] },
        { type: "order", q: "Zet in de goede volgorde: \"Tenzij er een groot probleem is, begint de vergadering om drie uur.\"",
          tokens: [["큰", "keun"], ["문제가", "munjega"], ["없는", "eomneun"], ["한", "han"], ["회의는 세 시에 시작해요", "hoeuineun se sie sijakaeyo"]] },
        { type: "open", q: "Vertaal: \"Zolang je je best doet, is het goed.\"",
          model: ["최선을 다하는 한 괜찮아요.", "열심히 하는 한 괜찮아요.", "네가 최선을 다하는 한 괜찮아."],
          tip: "Check: staat -는 direct na de stam, en staat 한 los?" }
      ],
      review: [
        { type: "mc", q: "\"Tenzij het sneeuwt, rijdt de bus.\"",
          options: ["눈이 오지 않는 한 버스는 다녀요.", "눈이 오지 않은 한 버스는 다녀요.", "눈이 오지 않을 한 버스는 다녀요.", "눈이 오지 않고 한 버스는 다녀요."], answer: 0,
          why: ["Goed: -지 않는 한 = tenzij.", "Vóór 한 staat -는, niet de verleden vorm -은.", "Vóór 한 staat -는, niet de toekomstvorm -을.", "-고 is een verbindingsvorm. Vóór 한 staat -는."] },
        { type: "mc", q: "이 동네에 ___ 한 걱정하지 마세요. (Zolang je in deze buurt woont, hoef je je geen zorgen te maken.)",
          options: ["사는", "살는", "산", "살"], answer: 0,
          why: ["Goed: bij 살다 valt de ㄹ weg vóór -는: 사는.", "De ㄹ valt weg vóór -는. Het is 사는.", "산 is de verleden vorm. Vóór 한 staat 사는.", "살 is een toekomstvorm. Vóór 한 staat 사는."] }
      ]
    },
    {
      id: "03", slug: "riga", title: "-(으)ㄹ 리가 없다", sub: "Dat kan onmogelijk",
      canDo: "Je kunt nu zeggen dat iets volgens jou onmogelijk is, ook over het verleden, met -(으)ㄹ 리가 없다.",
      guess: {
        q: "민수가 거짓말을 할 리가 없어요. Wat betekent dit, denk je?",
        options: ["Minsu liegt onmogelijk.", "Minsu liegt misschien.", "Minsu liegt waarschijnlijk wel.", "Minsu liegt nooit meer."], answer: 0,
        why: ["Goed: -(으)ㄹ 리가 없다 betekent \"het kan onmogelijk\".", "\"Misschien\" is -(으)ㄹ지도 모르다. 리가 없다 is veel sterker.", "Het is juist het tegenovergestelde: het kan niet.", "Er staat niets over \"meer\". Het gaat om onmogelijkheid."]
      },
      problem: "Je hoort iets wat je niet gelooft. In het Nederlands zeg je \"Dat kan niet!\" of \"Hij kan onmogelijk ...\". In het Koreaans zeg je -(으)ㄹ 리가 없다. Je zegt niet alleen dat iets niet zo is. Je zegt dat het volgens jou onmogelijk is.",
      pattern: [
        { l: "wie", v: "그 사람이", c: 1 }, { l: "stam + (으)ㄹ", v: "늦을", c: 4 },
        { l: "리가 없다", v: "리가 없어요", c: 2, key: true }
      ],
      patternCap: "Stam + (으)ㄹ 리가 없다 · 갈 리가 없다 · 먹을 리가 없다 · 갔을 리가 없다 · 학생일 리가 없다",
      rules: [
        "Na een klinker of ㄹ: -ㄹ 리가 없다 (갈, 알). Na een 받침: -을 리가 없다 (먹을, 작을).",
        "Het werkt met werkwoorden en bijvoeglijke werkwoorden. 이다 wordt 일 리가 없다.",
        "Over het verleden: -았/었을 리가 없다 (벌써 갔을 리가 없어요).",
        "In spreektaal valt 가 soms weg: 그럴 리 없어. Als vraag met 있어요 betekent het ook \"onmogelijk\": 그럴 리가 있어요?"
      ],
      pitfall: "Zeg niet 가는 리가 없다 of 갈 리가 않아요. Vóór 리 staat altijd de (으)ㄹ-vorm, en daarna komt 없다. Schrijf 리가 los.",
      examples: [
        { cn: "그 사람이 약속을 잊었을 리가 없어요.", py: "Geu sarami yaksogeul ijeosseul riga eopseoyo.", nl: "Hij kan de afspraak onmogelijk vergeten zijn." },
        { cn: "이렇게 싼 가방이 진짜일 리가 없어요.", py: "Ireoke ssan gabang-i jinjjail riga eopseoyo.", nl: "Zo'n goedkope tas kan onmogelijk echt zijn." },
        { cn: "매일 연습하는 지수가 시험에 떨어질 리가 없다.", py: "Maeil yeonseupaneun jisuga siheome tteoreojil riga eopda.", nl: "Jisu oefent elke dag. Zij kan onmogelijk zakken." },
        { cn: "그럴 리가 없어요!", py: "Geureol riga eopseoyo!", nl: "Dat kan niet!" }
      ],
      vocab: [],
      dialogue: [
        ["A", "지갑이 없어졌어요.", "Jigabi eopseojyeosseoyo.", "Mijn portemonnee is weg."],
        ["B", "아까 가방에 넣었잖아요. 없어졌을 리가 없어요.", "Akka gabang-e neoeotjanayo. Eopseojyeosseul riga eopseoyo.", "Je hebt hem net in je tas gestopt. Hij kan onmogelijk weg zijn."],
        ["A", "가방에도 없어요. 누가 가져갔을까요?", "Gabang-edo eopseoyo. Nuga gajyeogasseulkkayo?", "Hij zit ook niet in mijn tas. Zou iemand hem hebben meegenomen?"],
        ["B", "여기는 우리 사무실이에요. 누가 가져갔을 리가 없어요. 주머니도 봐요.", "Yeogineun uri samusirieyo. Nuga gajyeogasseul riga eopseoyo. Jumeonido bwayo.", "Dit is ons kantoor. Niemand kan hem meegenomen hebben. Kijk ook in je zak."],
        ["A", "아, 여기 있네요!", "A, yeogi inneyo!", "O, hier is hij!"]
      ],
      questions: [
        { type: "mc", q: "\"Hij kan dat onmogelijk weten.\" Welke zin klopt?",
          options: ["그가 그걸 알 리가 없어요.", "그가 그걸 알을 리가 없어요.", "그가 그걸 아는 리가 없어요.", "그가 그걸 알 리가 않아요."], answer: 0,
          why: ["Goed: 알다 eindigt op ㄹ, dus alleen 알 + 리가 없다.", "Een stam op ㄹ krijgt geen extra 을: 알 리가.", "Vóór 리 staat de (으)ㄹ-vorm, niet -는.", "Na 리가 komt 없다, niet 않다."] },
        { type: "mc", q: "민호는 어제 서울에 있었어요. 어제 부산에 ___ 리가 없어요.",
          options: ["갔을", "갈", "가는", "간"], answer: 0,
          why: ["Goed: het gaat over gisteren, dus -았을 리가 없다.", "갈 리가 없다 gaat over nu of later, niet over gisteren.", "Vóór 리 staat de (으)ㄹ-vorm, niet -는.", "Vóór 리 staat de (으)ㄹ-vorm. Voor het verleden: 갔을."] },
        { type: "mc", q: "\"Die man kan onmogelijk een leraar zijn.\" Welke zin klopt?",
          options: ["그 남자가 선생님일 리가 없어요.", "그 남자가 선생님인 리가 없어요.", "그 남자가 선생님을 리가 없어요.", "그 남자가 선생님이을 리가 없어요."], answer: 0,
          why: ["Goed: 이다 wordt 일 리가 없다.", "Vóór 리 staat de (으)ㄹ-vorm: 일, niet 인.", "을 is hier een lijdend-voorwerppartikel. Je hebt 이다 nodig: 일.", "이다 heeft geen 받침, dus geen 을: 일."] },
        { type: "order", q: "Zet in de goede volgorde: \"Die winkel kan onmogelijk al dicht zijn.\"",
          tokens: [["그 가게가", "geu gagega"], ["벌써 문을", "beolsseo muneul"], ["닫았을", "dadasseul"], ["리가", "riga"], ["없어요", "eopseoyo"]] },
        { type: "open", q: "Vertaal: \"Dat kan niet! Ze is onmogelijk al vertrokken.\"",
          model: ["그럴 리가 없어요! 벌써 떠났을 리가 없어요.", "그럴 리가 없어! 벌써 갔을 리가 없어.", "그럴 리가 없어요! 그녀가 벌써 출발했을 리가 없어요."],
          tip: "Check: gebruik je voor het verleden -았/었을 리가 없다, en staat 리가 los?" }
      ],
      review: [
        { type: "mc", q: "\"Deze schoenen kunnen onmogelijk zo duur zijn.\"",
          options: ["이 신발이 그렇게 비쌀 리가 없어요.", "이 신발이 그렇게 비싼 리가 없어요.", "이 신발이 그렇게 비싸을 리가 없어요.", "이 신발이 그렇게 비쌀 리가 아니에요."], answer: 0,
          why: ["Goed: 비싸다 eindigt op een klinker, dus 비쌀 리가 없다.", "Vóór 리 staat de (으)ㄹ-vorm, niet -ㄴ.", "Na een klinker komt alleen ㄹ, geen 을: 비쌀.", "Na 리가 komt 없다, niet 아니다."] },
        { type: "mc", q: "수진 씨는 고기를 안 먹어요. 불고기를 ___ 리가 없어요. (Ze kan onmogelijk bulgogi gegeten hebben.)",
          options: ["먹었을", "먹었는", "먹은", "먹었던"], answer: 0,
          why: ["Goed: verleden + 을 리가 없다.", "Vóór 리 staat -을, niet -는.", "Vóór 리 staat de (으)ㄹ-vorm. Voor het verleden: 먹었을.", "-던 past niet vóór 리. Je hebt 먹었을 nodig."] }
      ]
    },
    {
      id: "04", slug: "maryeon", title: "-기 마련이다", sub: "Dat gebeurt nu eenmaal",
      canDo: "Je kunt nu zeggen dat iets vanzelf of altijd zo gaat, met -기 마련이다.",
      guess: {
        q: "사람은 누구나 실수하기 마련이에요. Wat betekent dit, denk je?",
        options: ["Iedereen maakt nu eenmaal fouten.", "Iedereen moet fouten maken.", "Iedereen probeert fouten te maken.", "Iedereen heeft vandaag een fout gemaakt."], answer: 0,
        why: ["Goed: -기 마련이다 zegt dat iets vanzelf en altijd zo gaat.", "Het is geen plicht. \"Moeten\" is -아/어야 하다.", "Het gaat niet om een poging of een wens.", "Het gaat om een algemene waarheid, niet om vandaag."]
      },
      problem: "Sommige dingen gaan altijd zo. In het Nederlands zeg je \"nu eenmaal\" of \"dat is normaal\". In het Koreaans zeg je -기 마련이다. Je zegt daarmee: dit is een algemene waarheid, het gebeurt vanzelf.",
      pattern: [
        { l: "situatie", v: "시간이 지나면", c: 3 }, { l: "stam", v: "잊", c: 4 },
        { l: "-기 마련이다", v: "기 마련이에요", c: 2, key: true }
      ],
      patternCap: "Stam + 기 마련이다 · 가기 마련이다 · 먹기 마련이다 · 비싸기 마련이다",
      rules: [
        "-기 마련이다 komt direct na de stam. Klinker of 받침 maakt niet uit: 가기, 먹기.",
        "Het werkt met werkwoorden en bijvoeglijke werkwoorden: 비싸기 마련이다.",
        "Er komt geen verleden vóór -기: niet 갔기 마련이다. Het gaat over wat altijd geldt.",
        "Vaak staat er een voorwaarde voor: -(으)면 ... -기 마련이다. Het is vrij formeel. In spreektaal zeg je ook -게 돼 있어요."
      ],
      pitfall: "Gebruik -기 마련이다 niet voor een eigen plan of één voorval. 내일 비가 오기 마련이에요 is fout. Zeg dan: 내일 비가 올 거예요.",
      examples: [
        { cn: "사람은 누구나 실수하기 마련이에요.", py: "Sarameun nuguna silsuhagi maryeonieyo.", nl: "Iedereen maakt nu eenmaal fouten." },
        { cn: "시간이 지나면 잊기 마련이에요.", py: "Sigani jinamyeon itgi maryeonieyo.", nl: "Na een tijdje vergeet je het nu eenmaal." },
        { cn: "처음에는 누구나 긴장하기 마련이다.", py: "Cheoeumeneun nuguna ginjanghagi maryeonida.", nl: "In het begin is iedereen nu eenmaal zenuwachtig." },
        { cn: "좋은 물건은 비싸기 마련이에요.", py: "Joeun mulgeoneun bissagi maryeonieyo.", nl: "Goede spullen zijn nu eenmaal duur." }
      ],
      vocab: [],
      dialogue: [
        ["A", "발표할 때 너무 떨렸어요.", "Balpyohal ttae neomu tteollyeosseoyo.", "Ik was erg zenuwachtig bij mijn presentatie."],
        ["B", "처음에는 누구나 떨리기 마련이에요.", "Cheoeumeneun nuguna tteolligi maryeonieyo.", "In het begin is iedereen nu eenmaal zenuwachtig."],
        ["A", "말도 몇 번 틀렸어요.", "Maldo myeot beon teullyeosseoyo.", "Ik heb me ook een paar keer vergist."],
        ["B", "사람은 실수하기 마련이에요. 다음에는 더 잘할 거예요.", "Sarameun silsuhagi maryeonieyo. Daeumeneun deo jalhal geoyeyo.", "Mensen maken nu eenmaal fouten. Volgende keer gaat het beter."],
        ["A", "고마워요. 연습을 더 해야겠어요.", "Gomawoyo. Yeonseubeul deo haeyagesseoyo.", "Dank je. Ik moet meer oefenen."]
      ],
      questions: [
        { type: "mc", q: "\"Wie hard werkt, slaagt nu eenmaal.\" Welke zin klopt?",
          options: ["열심히 노력하면 성공하기 마련이에요.", "열심히 노력하면 성공하는 마련이에요.", "열심히 노력하면 성공할 마련이에요.", "열심히 노력하면 성공했기 마련이에요."], answer: 0,
          why: ["Goed: stam + 기 마련이다.", "Vóór 마련이다 staat -기, niet -는.", "Vóór 마련이다 staat -기, niet -ㄹ.", "Er komt geen verleden vóór -기 마련이다."] },
        { type: "mc", q: "봄이 오면 날씨가 ___ 마련이에요.",
          options: ["따뜻해지기", "따뜻해지는", "따뜻해질", "따뜻해졌기"], answer: 0,
          why: ["Goed: stam + 기 마련이다.", "Vóór 마련이다 staat -기, niet -는.", "Vóór 마련이다 staat -기, niet -ㄹ.", "Een algemene waarheid krijgt geen verleden: 따뜻해지기."] },
        { type: "mc", q: "In welke zin past -기 마련이다 goed?",
          options: ["물건이 싸면 품질이 떨어지기 마련이에요.", "저는 내일 친구를 만나기 마련이에요.", "어제 길에서 지갑을 줍기 마련이었어요.", "다음 주에 제가 시험을 보기 마련이에요."], answer: 0,
          why: ["Goed: dit is een algemene waarheid. Goedkoop gaat vaak samen met slechte kwaliteit.", "Een eigen plan is geen algemene waarheid. Zeg: 만날 거예요.", "Eén voorval van gisteren is geen algemene waarheid. Zeg: 주웠어요.", "Een eigen plan is geen algemene waarheid. Zeg: 볼 거예요."] },
        { type: "order", q: "Zet in de goede volgorde: \"Na verloop van tijd verandert alles nu eenmaal.\"",
          tokens: [["시간이", "sigani"], ["지나면", "jinamyeon"], ["모든 것이 변하기", "modeun geosi byeonhagi"], ["마련이에요", "maryeonieyo"]] },
        { type: "open", q: "Vertaal: \"Kinderen worden nu eenmaal snel groot.\"",
          model: ["아이들은 빨리 크기 마련이에요.", "아이들은 빨리 자라기 마련이에요.", "아이들은 금방 자라기 마련이다."],
          tip: "Check: staat -기 direct na de stam, zonder verleden, en staat 마련이다 los?" }
      ],
      review: [
        { type: "mc", q: "\"Als je niet eet, krijg je nu eenmaal honger.\"",
          options: ["밥을 안 먹으면 배가 고프기 마련이에요.", "밥을 안 먹으면 배가 고픈 마련이에요.", "밥을 안 먹으면 배가 고플 마련이에요.", "밥을 안 먹으면 배가 고팠기 마련이에요."], answer: 0,
          why: ["Goed: stam + 기 마련이다.", "Vóór 마련이다 staat -기, niet -ㄴ.", "Vóór 마련이다 staat -기, niet -ㄹ.", "Er komt geen verleden vóór -기 마련이다."] },
        { type: "mc", q: "오래 쓰면 물건은 ___ 마련이에요. (Als je iets lang gebruikt, gaat het nu eenmaal kapot.)",
          options: ["고장 나기", "고장 나는", "고장 날", "고장 났기"], answer: 0,
          why: ["Goed: stam + 기 마련이다.", "Vóór 마련이다 staat -기, niet -는.", "Vóór 마련이다 staat -기, niet -ㄹ.", "Er komt geen verleden vóór -기 마련이다."] }
      ]
    },
    {
      id: "05", slug: "surok", title: "-(으)ㄹ수록", sub: "Hoe meer ..., hoe meer ...",
      canDo: "Je kunt nu zeggen dat iets toeneemt naarmate iets anders toeneemt, met -(으)ㄹ수록 en -(으)면 -(으)ㄹ수록.",
      guess: {
        q: "한국어는 공부할수록 재미있어요. Wat betekent dit, denk je?",
        options: ["Hoe meer ik Koreaans leer, hoe leuker het wordt.", "Als ik Koreaans leer, is het leuk.", "Ik leer Koreaans omdat het leuk is.", "Hoewel ik Koreaans leer, is het niet leuk."], answer: 0,
        why: ["Goed: -(으)ㄹ수록 betekent \"hoe meer ..., hoe meer ...\".", "Gewoon \"als\" is -(으)면. -(으)ㄹ수록 zegt dat het toeneemt.", "\"Omdat\" is -아/어서 of -(으)니까.", "\"Hoewel\" is -지만. Er staat ook geen ontkenning."]
      },
      problem: "Soms groeit het ene mee met het andere. In het Nederlands zeg je \"hoe meer ..., hoe ...\". In het Koreaans plak je -(으)ㄹ수록 aan de eerste stam. Voor extra nadruk zet je hetzelfde werkwoord met -(으)면 ervoor: 보면 볼수록.",
      pattern: [
        { l: "(stam + 면)", v: "보면", c: 3 }, { l: "stam + (으)ㄹ수록", v: "볼수록", c: 2, key: true },
        { l: "gevolg", v: "더 좋아요", c: 5 }
      ],
      patternCap: "(Stam + (으)면) + stam + (으)ㄹ수록 + gevolg · 갈수록 · 먹을수록 · 많을수록",
      rules: [
        "Na een klinker of ㄹ: -ㄹ수록 (갈수록, 알수록). Na een 받침: -을수록 (먹을수록, 많을수록).",
        "Het werkt met werkwoorden en bijvoeglijke werkwoorden. Onregelmatige stammen veranderen: 덥다 wordt 더울수록, 듣다 wordt 들을수록.",
        "Met -(으)면 ervoor wordt het sterker: 먹으면 먹을수록. Je herhaalt dan hetzelfde werkwoord.",
        "Het hoort in spreektaal en in schrijftaal. Er komt geen verleden vóór -수록."
      ],
      pitfall: "수록 schrijf je vast aan de stam: 갈수록, niet 갈 수록. Na een klinker komt geen 으: 비쌀수록, niet 비싸을수록.",
      examples: [
        { cn: "그 사람은 보면 볼수록 멋있어요.", py: "Geu sarameun bomyeon bolsurok meosisseoyo.", nl: "Hoe vaker ik hem zie, hoe leuker ik hem vind." },
        { cn: "연습을 많이 할수록 실력이 늘어요.", py: "Yeonseubeul mani halsurok sillyeogi neureoyo.", nl: "Hoe meer je oefent, hoe beter je wordt." },
        { cn: "높이 올라갈수록 공기가 차가워진다.", py: "Nopi ollagalsurok gonggiga chagawojinda.", nl: "Hoe hoger je komt, hoe kouder de lucht wordt." },
        { cn: "집은 역에서 가까울수록 비싸요.", py: "Jibeun yeogeseo gakkaulsurok bissayo.", nl: "Hoe dichter een huis bij het station ligt, hoe duurder het is." }
      ],
      vocab: [],
      dialogue: [
        ["A", "김치를 처음 먹었을 때 어땠어요?", "Gimchireul cheoeum meogeosseul ttae eottaesseoyo?", "Hoe was het toen je voor het eerst kimchi at?"],
        ["B", "너무 매웠어요. 그런데 먹으면 먹을수록 맛있어요.", "Neomu maewosseoyo. Geureonde meogeumyeon meogeulsurok masisseoyo.", "Heel pittig. Maar hoe meer ik het eet, hoe lekkerder het is."],
        ["A", "저도 그래요. 매울수록 더 먹고 싶어요.", "Jeodo geuraeyo. Maeulsurok deo meokgo sipeoyo.", "Ik ook. Hoe pittiger, hoe meer ik wil eten."],
        ["B", "한국 생활도 시간이 갈수록 편해져요.", "Hanguk saenghwaldo sigani galsurok pyeonhaejyeoyo.", "Ook het leven in Korea wordt makkelijker naarmate de tijd verstrijkt."]
      ],
      questions: [
        { type: "mc", q: "\"Hoe meer mensen, hoe leuker.\" Welke zin klopt?",
          options: ["사람이 많을수록 재미있어요.", "사람이 많으수록 재미있어요.", "사람이 많는수록 재미있어요.", "사람이 많수록 재미있어요."], answer: 0,
          why: ["Goed: 많다 heeft een 받침, dus -을수록.", "Na een 받침 komt -을수록, met ㄹ: 많을수록.", "Vóór 수록 staat geen -는. Het is -(으)ㄹ수록.", "Na een 받침 heb je -을 nodig: 많을수록."] },
        { type: "mc", q: "날씨가 ___ 아이스크림이 많이 팔려요. (Hoe warmer het is, hoe meer ijs er verkocht wordt.)",
          options: ["더울수록", "덥을수록", "더워수록", "덥는수록"], answer: 0,
          why: ["Goed: bij 덥다 wordt de ㅂ een 우: 더울수록.", "덥다 is onregelmatig. De ㅂ wordt 우: 더울수록.", "Vóór 수록 staat -(으)ㄹ, niet -어.", "Vóór 수록 staat -(으)ㄹ, niet -는."] },
        { type: "mc", q: "이 노래는 ___ 들을수록 좋아요. (Hoe vaker ik dit lied hoor, hoe mooier het is.)",
          options: ["들으면", "듣으면", "들어서", "듣고"], answer: 0,
          why: ["Goed: -(으)면 + -(으)ㄹ수록, en 듣다 wordt 들으면.", "듣다 is onregelmatig. Vóór een klinker wordt ㄷ een ㄹ: 들으면.", "In dit patroon staat -(으)면 vóór -(으)ㄹ수록, niet -어서.", "In dit patroon staat -(으)면 vóór -(으)ㄹ수록, niet -고."] },
        { type: "order", q: "Zet in de goede volgorde: \"Hoe meer boeken je leest, hoe meer je weet.\"",
          tokens: [["책을 많이", "chaegeul mani"], ["읽을수록", "ilgeulsurok"], ["아는 것이", "aneun geosi"], ["많아져요", "manajyeoyo"]] },
        { type: "open", q: "Vertaal: \"Hoe meer ik oefen, hoe makkelijker het wordt.\"",
          model: ["연습할수록 쉬워져요.", "연습하면 연습할수록 쉬워져요.", "많이 연습할수록 더 쉬워져요."],
          tip: "Check: staat 수록 vast aan de stam, en gebruik je na een 받침 -을수록?" }
      ],
      review: [
        { type: "mc", q: "\"Hoe ouder je wordt, hoe wijzer je wordt.\"",
          options: ["나이가 들수록 지혜로워져요.", "나이가 들을수록 지혜로워져요.", "나이가 드수록 지혜로워져요.", "나이가 드는수록 지혜로워져요."], answer: 0,
          why: ["Goed: 들다 eindigt op ㄹ, dus alleen 수록 erbij: 들수록.", "Een stam op ㄹ krijgt geen extra 을: 들수록.", "De ㄹ blijft staan vóór 수록: 들수록.", "Vóór 수록 staat geen -는."] },
        { type: "mc", q: "이 책은 ___ 읽을수록 어려워요. (Hoe meer ik dit boek lees, hoe moeilijker het wordt.)",
          options: ["읽으면", "읽어면", "읽고", "읽어서"], answer: 0,
          why: ["Goed: -(으)면 + -(으)ㄹ수록. Na een 받침: 읽으면.", "Na een 받침 komt -으면, niet -어면.", "In dit patroon staat -(으)면 vóór -(으)ㄹ수록, niet -고.", "In dit patroon staat -(으)면 vóór -(으)ㄹ수록, niet -어서."] }
      ]
    },
    {
      id: "06", slug: "sem", title: "-는 셈이다", sub: "Dat komt neer op ...",
      canDo: "Je kunt nu zeggen waar iets in feite op neerkomt, met -는 셈이다 en -(으)ㄴ 셈이다.",
      guess: {
        q: "일주일에 6일 일하니까 거의 매일 일하는 셈이에요. Wat betekent dit, denk je?",
        options: ["Ik werk zes dagen per week, dus het komt neer op bijna elke dag werken.", "Ik werk zes dagen per week, dus ik ben van plan elke dag te werken.", "Ik werk zes dagen per week, maar ik werk bijna nooit.", "Ik werk zes dagen per week, omdat ik elke dag wil werken."], answer: 0,
        why: ["Goed: -는 셈이다 betekent \"het komt neer op\".", "\"Van plan zijn\" is -(으)ㄹ 셈이다, met ㄹ. Hier staat -는.", "거의 매일 betekent \"bijna elke dag\", niet \"bijna nooit\".", "Er staat geen wens in de zin. -고 싶다 zou een wens zijn."]
      },
      problem: "Soms is iets niet precies zo, maar in feite wel. In het Nederlands zeg je \"dat komt neer op\" of \"zo goed als\". In het Koreaans zeg je -는 셈이다. Vaak volgt het op een berekening of een reden.",
      pattern: [
        { l: "feit", v: "6일 일하니까", c: 3 }, { l: "conclusie", v: "매일 일하는", c: 4 },
        { l: "셈이다", v: "셈이에요", c: 2, key: true }
      ],
      patternCap: "Werkwoord + 는 셈이다 (nu) · werkwoord + (으)ㄴ 셈이다 (verleden) · bijv. ww + (으)ㄴ 셈이다 · naamwoord + 인 셈이다",
      rules: [
        "Werkwoord in het heden: -는 셈이다 (가는 셈이다). In het verleden: -(으)ㄴ 셈이다 (다 한 셈이다, 먹은 셈이다).",
        "Bijvoeglijk werkwoord: -(으)ㄴ 셈이다 (싼 셈이다, 많은 셈이다). Na een naamwoord: 인 셈이다.",
        "Vaak staat er een reden of berekening voor, met -(으)니까 of -(으)면.",
        "Het komt in schrijftaal en spreektaal voor. Alledaags zeg je ook -(으)ㄴ 거나 마찬가지예요."
      ],
      pitfall: "-(으)ㄹ 셈이다 betekent iets anders: \"van plan zijn\". 어떻게 할 셈이에요? = Wat ben je van plan? Schrijf 셈이다 los.",
      examples: [
        { cn: "일주일에 6일 일하니까 거의 매일 일하는 셈이에요.", py: "Iljuire yugil ilhanikka geoui maeil ilhaneun semieyo.", nl: "Ik werk zes dagen per week. Dat komt neer op bijna elke dag." },
        { cn: "숙제를 90% 했으니까 거의 다 한 셈이에요.", py: "Sukjereul gusip peosenteu haesseunikka geoui da han semieyo.", nl: "Ik heb 90% van mijn huiswerk gedaan. Het is dus zo goed als af." },
        { cn: "만 원에 두 개면 하나에 오천 원인 셈이에요.", py: "Man wone du gaemyeon hanae ocheon wonin semieyo.", nl: "Twee voor tienduizend won komt neer op vijfduizend won per stuk." },
        { cn: "서울에서 10년을 살았으니까 서울 사람인 셈이다.", py: "Seoureseo simnyeoneul sarasseunikka seoul saramin semida.", nl: "Ik heb tien jaar in Seoul gewoond. Ik ben dus zo goed als een Seouler." }
      ],
      vocab: [],
      dialogue: [
        ["A", "회사까지 얼마나 걸려요?", "Hoesakkaji eolmana geollyeoyo?", "Hoe lang doe je over de reis naar je werk?"],
        ["B", "편도로 한 시간 반 걸려요.", "Pyeondoro han sigan ban geollyeoyo.", "Anderhalf uur enkele reis."],
        ["A", "그럼 하루에 세 시간을 길에서 보내는 셈이네요.", "Geureom harue se siganeul gireseo bonaeneun semineyo.", "Dan ben je dus drie uur per dag onderweg."],
        ["B", "맞아요. 일주일이면 15시간인 셈이에요.", "Majayo. Iljuirimyeon yeoldaseot siganin semieyo.", "Klopt. Per week komt dat neer op vijftien uur."],
        ["A", "이사하는 게 낫겠어요.", "Isahaneun ge natgesseoyo.", "Je kunt beter verhuizen."]
      ],
      questions: [
        { type: "mc", q: "\"Het is zo goed als klaar.\" Welke zin klopt?",
          options: ["거의 다 끝난 셈이에요.", "거의 다 끝났는 셈이에요.", "거의 다 끝날 셈이에요.", "거의 다 끝난 셈이예요."], answer: 0,
          why: ["Goed: voor het verleden gebruik je -(으)ㄴ 셈이다.", "Na het verleden 았 komt geen -는. Zeg: 끝난.", "-(으)ㄹ 셈이다 betekent \"van plan zijn\".", "Na een 받침 schrijf je 이에요, niet 이예요."] },
        { type: "mc", q: "한 달에 두 번 만나니까 2주에 한 번 ___ 셈이에요.",
          options: ["만나는", "만날", "만나서", "만났는"], answer: 0,
          why: ["Goed: een werkwoord in het heden krijgt -는 셈이다.", "만날 셈이다 betekent \"van plan zijn om te ontmoeten\".", "Vóór 셈 staat een bijvoeglijke vorm, niet -아서.", "Na het verleden 았 komt geen -는."] },
        { type: "mc", q: "\"Voor die kwaliteit is het eigenlijk goedkoop.\" 품질을 생각하면 ___ 셈이에요.",
          options: ["싼", "싸는", "쌀", "싸은"], answer: 0,
          why: ["Goed: 싸다 is een bijvoeglijk werkwoord, dus -ㄴ 셈이다.", "-는 hoort bij werkwoorden. 싸다 is een bijvoeglijk werkwoord.", "-ㄹ 셈이다 betekent \"van plan zijn\".", "Na een klinker komt alleen ㄴ, geen 은: 싼."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik heb dat boek zo goed als uitgelezen.\"",
          tokens: [["그 책을", "geu chaegeul"], ["거의 다", "geoui da"], ["읽은", "ilgeun"], ["셈이에요", "semieyo"]] },
        { type: "open", q: "Vertaal: \"Ik slaap vier uur per nacht. Dat komt neer op bijna niet slapen.\"",
          model: ["하루에 네 시간 자니까 거의 안 자는 셈이에요.", "매일 네 시간만 자니까 거의 못 자는 셈이에요.", "네 시간밖에 안 자니까 거의 안 자는 셈이다."],
          tip: "Check: werkwoord in het heden + 는 셈이다, en staat 셈이다 los?" }
      ],
      review: [
        { type: "mc", q: "일주일에 두 번 운동하니까 꾸준히 ___ 셈이에요. (Dat komt neer op regelmatig sporten.)",
          options: ["운동하는", "운동할", "운동하은", "운동해서"], answer: 0,
          why: ["Goed: werkwoord in het heden + 는 셈이다.", "-ㄹ 셈이다 betekent \"van plan zijn\".", "Na een klinker komt geen 은. Hier hoort -는.", "Vóór 셈 staat een bijvoeglijke vorm, niet -아서."] },
        { type: "mc", q: "어떻게 할 셈이에요? Wat betekent dit?",
          options: ["Wat ben je van plan?", "Waar komt het op neer?", "Hoe heb je het gedaan?", "Hoe vaak doe je het?"], answer: 0,
          why: ["Goed: -(으)ㄹ 셈이다 betekent \"van plan zijn\".", "\"Neerkomen op\" is -는 셈이다 of -(으)ㄴ 셈이다, niet -ㄹ.", "Voor het verleden zou er 했어요 staan.", "Er staat niets over hoe vaak."] }
      ]
    }
  ]
};
