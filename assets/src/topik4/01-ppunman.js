({
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
    "Onregelmatige stammen veranderen zoals altijd: 가깝다 → 가까울, 듣다 → 들을.",
    "In het tweede deel staat vaak 도 bij het nieuwe punt: 값도, 중국어도."
  ],
  pitfall: "Beide punten wijzen dezelfde kant op: twee goede dingen of twee slechte dingen. Voor een tegenstelling (mooi maar duur) gebruik je -지만.",
  examples: [
    { cn: "이 식당은 음식이 맛있을 뿐만 아니라 값도 싸요.", py: "I sikdangeun eumsigi masisseul ppunman anira gapdo ssayo.", nl: "In dit restaurant is het eten niet alleen lekker, het is ook goedkoop." },
    { cn: "그는 영어를 잘할 뿐만 아니라 중국어도 잘해요.", py: "Geuneun yeongeoreul jalhal ppunman anira junggugeodo jalhaeyo.", nl: "Hij spreekt niet alleen goed Engels, maar ook goed Chinees." },
    { cn: "어제는 비가 왔을 뿐만 아니라 바람도 많이 불었어요.", py: "Eojeneun biga wasseul ppunman anira baramdo mani bureosseoyo.", nl: "Gisteren regende het niet alleen, het waaide ook hard." },
    { cn: "이 노래는 한국뿐만 아니라 외국에서도 유명해요.", py: "I noraeneun hangukppunman anira oegugeseodo yumyeonghaeyo.", nl: "Dit liedje is niet alleen in Korea bekend, maar ook in het buitenland." }
  ],
  nuance: [
    { h: "-(으)ㄹ 뿐만 아니라 of -는 데다가?",
      p: "Beide stapelen twee punten in dezelfde richting. -는 데다가 betekent \"en daarbovenop\" en klinkt meer als spreektaal. Let op de vorm: -는 데다가 gebruikt de ㄴ/는-vorm (넓은 데다가, 먹는 데다가), -(으)ㄹ 뿐만 아니라 de ㄹ-vorm. -(으)ㄹ 뿐만 아니라 is neutraler en past ook goed in geschreven tekst.",
      ex: [
        { cn: "이 방은 넓을 뿐만 아니라 밝아요.", py: "I bangeun neolbeul ppunman anira balgayo.", nl: "Deze kamer is niet alleen ruim, maar ook licht." },
        { cn: "이 방은 넓은 데다가 밝아요.", py: "I bangeun neolbeun dedaga balgayo.", nl: "Deze kamer is ruim, en daarbovenop licht." }
      ] },
    { h: "Naamwoorden: 뿐만 아니라 direct vast",
      p: "Na een naamwoord plak je 뿐만 aan het woord, zonder partikel: 한국뿐만 아니라, 학생들뿐만 아니라. Het betekent dan \"niet alleen N\". Bij -는 데다가 werkt dat anders: 학생인 데다가 betekent \"is student, en daarbovenop\". Daar heb je dus 이다 nodig.",
      ex: [
        { cn: "학생들뿐만 아니라 선생님들도 왔어요.", py: "Haksaengdeulppunman anira seonsaengnimdeuldo wasseoyo.", nl: "Niet alleen de studenten, ook de leraren kwamen." }
      ] },
    { h: "Niet verwarren met -(으)ㄹ 뿐이다",
      p: "Zonder 만 아니라 betekent 뿐 juist \"alleen maar\". -(으)ㄹ 뿐이에요 zegt dus dat er niets meer is. -(으)ㄹ 뿐만 아니라 zegt dat er nog iets bij komt. Eén klein stukje verandert de hele betekenis.",
      ex: [
        { cn: "저는 그냥 물어봤을 뿐이에요.", py: "Jeoneun geunyang mureobwasseul ppunieyo.", nl: "Ik vroeg het alleen maar." }
      ] },
    { h: "Schrijftaal: 그뿐만 아니라 aan het begin",
      p: "In geschreven tekst begin je een nieuwe zin vaak met 그뿐만 아니라 of kort 뿐만 아니라: \"bovendien\". Zo stapel je over twee zinnen heen. In formele tekst staat de zin dan in de -다-stijl.",
      ex: [
        { cn: "그 영화는 재미있었다. 그뿐만 아니라 음악도 아름다웠다.", py: "Geu yeonghwaneun jaemiisseotda. Geuppunman anira eumakdo areumdawotda.", nl: "Die film was leuk. Bovendien was de muziek prachtig." }
      ] }
  ],
  mistakes: [
    { wrong: "그 집은 큰 뿐만 아니라 조용해요.", right: "그 집은 클 뿐만 아니라 조용해요.", why: "Voor 뿐 staat altijd de ㄹ-vorm, ook bij bijvoeglijke werkwoorden." },
    { wrong: "저는 한국어를 뿐만 아니라 일본어도 배워요.", right: "저는 한국어뿐만 아니라 일본어도 배워요.", why: "Na een naamwoord komt geen 를: 뿐만 plak je direct aan het woord." },
    { wrong: "이 옷은 예쁠 뿐만 아니라 너무 비싸요.", right: "이 옷은 예쁘지만 너무 비싸요.", why: "Mooi en te duur wijzen verschillende kanten op. Voor een tegenstelling gebruik je -지만." },
    { wrong: "이 방은 넓을 데다가 밝아요.", right: "이 방은 넓은 데다가 밝아요.", why: "-는 데다가 gebruikt de ㄴ-vorm. De ㄹ-vorm hoort bij 뿐만 아니라." }
  ],
  vocab: [
    ["-(으)ㄹ 뿐만 아니라", "-(eu)l ppunman anira", "niet alleen ..., maar ook ..."], ["시설", "siseol", "voorzieningen, faciliteiten"],
    ["공간", "gonggan", "ruimte"], ["노인", "noin", "oudere, bejaarde"], ["주차장", "juchajang", "parkeerplaats"],
    ["정류장", "jeongnyujang", "halte"], ["구청", "gucheong", "stadsdeelkantoor"], ["노선", "noseon", "(bus)lijn, route"],
    ["주민", "jumin", "bewoner"], ["이용하다", "iyonghada", "gebruikmaken van"]
  ],
  dialogue: [
    ["A", "새 집은 어때요?", "Sae jibeun eottaeyo?", "Hoe is je nieuwe huis?"],
    ["B", "아주 좋아요. 넓을 뿐만 아니라 조용해요.", "Aju joayo. Neolbeul ppunman anira joyonghaeyo.", "Heel fijn. Het is niet alleen ruim, het is ook rustig."],
    ["A", "회사에서 가까워요?", "Hoesaeseo gakkawoyo?", "Is het dicht bij je werk?"],
    ["B", "네, 가까울 뿐만 아니라 지하철역도 바로 앞에 있어요.", "Ne, gakkaul ppunman anira jihacheollyeokdo baro ape isseoyo.", "Ja, het is niet alleen dichtbij, er is ook een metrostation vlak voor de deur."],
    ["A", "정말 좋겠네요!", "Jeongmal jokenneyo!", "Dat klinkt echt fijn!"]
  ],
  reading: {
    title: "새로 생긴 도서관",
    lines: [
      { cn: "지난달 우리 동네에 새 도서관이 문을 열었다.", py: "Jinandal uri dongnee sae doseogwani muneul yeoreotda.", nl: "Vorige maand is in onze buurt een nieuwe bibliotheek opengegaan." },
      { cn: "이 도서관은 시설이 깨끗할 뿐만 아니라 책도 아주 많다.", py: "I doseogwaneun siseori kkaekkeutal ppunman anira chaekdo aju manta.", nl: "Deze bibliotheek heeft niet alleen schone voorzieningen, er zijn ook heel veel boeken." },
      { cn: "아이들을 위한 공간뿐만 아니라 노인들을 위한 프로그램도 있다.", py: "Aideureul wihan gongganppunman anira noindeureul wihan peurogeuraemdo itda.", nl: "Er is niet alleen een ruimte voor kinderen, er zijn ook programma's voor ouderen." },
      { cn: "그래서 주말에는 학생들뿐만 아니라 가족들도 많이 찾아온다.", py: "Geuraeseo jumareneun haksaengdeulppunman anira gajokdeuldo mani chajaonda.", nl: "Daarom komen er in het weekend niet alleen studenten, maar ook veel gezinnen." },
      { cn: "하지만 문제도 있다.", py: "Hajiman munjedo itda.", nl: "Maar er zijn ook problemen." },
      { cn: "주차장이 좁을 뿐만 아니라 버스 정류장도 멀어서 차가 없는 사람은 가기 어렵다.", py: "Juchajangi jobeul ppunman anira beoseu jeongnyujangdo meoreoseo chaga eomneun sarameun gagi eoryeopda.", nl: "De parkeerplaats is niet alleen klein, ook de bushalte is ver weg. Daardoor is het moeilijk te bereiken voor mensen zonder auto." },
      { cn: "구청은 내년에 버스 노선을 늘리겠다고 밝혔다.", py: "Gucheongeun naenyeone beoseu noseoneul neulligetdago balkyeotda.", nl: "Het stadsdeelkantoor heeft gezegd dat het volgend jaar meer buslijnen komt." },
      { cn: "그렇게 되면 더 많은 주민들이 도서관을 이용할 수 있을 것이다.", py: "Geureoke doemyeon deo maneun jumindeuri doseogwaneul iyonghal su isseul geosida.", nl: "Dan kunnen meer bewoners de bibliotheek gebruiken." }
    ],
    questions: [
      { type: "mc", q: "Wie komen er in het weekend naar de bibliotheek?",
        options: ["Niet alleen studenten, ook veel gezinnen.", "Alleen studenten.", "Vooral ouderen voor hun programma.", "Vooral mensen met een auto."], answer: 0,
        why: ["Goed: 학생들뿐만 아니라 가족들도 많이 찾아온다.", "뿐만 아니라 zegt juist: niet alleen studenten.", "De ouderen staan in de tekst, maar niet bij het weekend.", "De tekst zegt niets over wie met de auto komt."] },
      { type: "mc", q: "Waarom is de bibliotheek moeilijk te bereiken zonder auto?",
        options: ["De bushalte is ver weg.", "De bibliotheek is alleen in het weekend open.", "Er rijden helemaal geen bussen.", "Het gebouw is nog niet af."], answer: 0,
        why: ["Goed: 버스 정류장도 멀어서 ... 가기 어렵다.", "Over openingstijden staat niets in de tekst.", "Er zijn bussen; er komen volgend jaar alleen meer lijnen bij.", "De bibliotheek is al open: 문을 열었다."] },
      { type: "mc", q: "주차장이 좁을 뿐만 아니라 버스 정류장도 멀어서 ... Wat doet 뿐만 아니라 hier?",
        options: ["Het stapelt twee nadelen op: kleine parkeerplaats en verre bushalte.", "Het zet een voordeel tegenover een nadeel.", "Het zegt dat alleen de parkeerplaats een probleem is.", "Het geeft de reden voor de nieuwe buslijnen."], answer: 0,
        why: ["Goed: twee punten in dezelfde richting, allebei negatief.", "Beide punten zijn negatief; voor een tegenstelling gebruik je -지만.", "Dat zou -(으)ㄹ 뿐이다 zijn: \"alleen maar\".", "De reden voor 가기 어렵다 geeft -어서, niet 뿐만 아니라."] }
    ]
  },
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
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["날씨가 추울 뿐만 아니라 따뜻해요.", "날씨가 추울 뿐만 아니라 바람도 불어요.", "날씨가 추운 데다가 바람도 불어요.", "추위뿐만 아니라 바람도 심해요."], answer: 0,
      why: ["Goed: koud en warm spreken elkaar tegen. 뿐만 아니라 stapelt alleen punten in dezelfde richting.", "Dit klopt: koud en ook wind, allebei negatief.", "Dit klopt: -는 데다가 met de ㄴ-vorm 추운.", "Dit klopt: naamwoord + 뿐만 아니라."] },
    { type: "mc", q: "이 방은 넓___ 데다가 밝아요. (Deze kamer is ruim, en daarbovenop licht.)",
      options: ["은", "을", "는", "음"], answer: 0,
      why: ["Goed: -는 데다가 gebruikt bij een bijvoeglijk werkwoord de ㄴ-vorm: 넓은.", "Dat is de vorm voor 뿐만 아니라, niet voor 데다가.", "는 gebruik je bij een handelingswerkwoord, niet bij 넓다.", "음 maakt er een naamwoord van; dat past niet voor 데다가."] },
    { type: "mc", q: "저는 그냥 확인했을 뿐이에요. Wat betekent dit?",
      options: ["Ik heb het alleen maar gecontroleerd.", "Ik heb het niet alleen gecontroleerd, ook verbeterd.", "Ik heb het nog niet gecontroleerd.", "Ik ga het straks controleren."], answer: 0,
      why: ["Goed: -(으)ㄹ 뿐이다 = \"alleen maar\".", "Dat zou 뿐만 아니라 zijn; hier staat 뿐이에요.", "확인했을 is verleden tijd: het is al gebeurd.", "확인했을 is verleden tijd, geen toekomst."] },
    { type: "order", q: "Zet in de goede volgorde: \"Die zanger kan niet alleen goed zingen, maar ook goed dansen.\"",
      tokens: [["그 가수는", "geu gasuneun"], ["노래를", "noraereul"], ["잘할", "jalhal"], ["뿐만 아니라", "ppunman anira"], ["춤도", "chumdo"], ["잘 춰요", "jal chwoyo"]] },
    { type: "fill", q: "그 학생은 성실___ 뿐만 아니라 머리도 좋아요. (Die student is niet alleen ijverig, maar ook slim.)", answers: ["할"],
      hint: "성실하다: de stam eindigt op een klinker.", why: "하다 → 할: na een klinker komt alleen ㄹ erbij." },
    { type: "open", q: "Vertaal: \"Mijn zus is niet alleen slim, maar ook aardig.\"",
      model: ["제 언니는 똑똑할 뿐만 아니라 친절해요.", "우리 누나는 똑똑할 뿐만 아니라 착해요.", "제 여동생은 머리가 좋을 뿐만 아니라 성격도 좋아요."],
      tip: "Check: staat er ㄹ of 을 vóór 뿐만 (똑똑할, 좋을), en zijn beide punten positief?" },
    { type: "open", q: "Vertaal: \"Deze telefoon is niet alleen licht, maar ook goedkoop.\"",
      model: ["이 휴대폰은 가벼울 뿐만 아니라 값도 싸요.", "이 핸드폰은 가벼울 뿐만 아니라 싸요."],
      tip: "Check: 가볍다 is onregelmatig (ㅂ → 우): 가벼울. Staat er 도 bij het tweede punt?" }
  ],
  review: [
    { type: "mc", q: "작년에는 일이 ___ 뿐만 아니라 이사도 했어요. (Vorig jaar had ik het niet alleen druk, ik ben ook verhuisd.)",
      options: ["바빴을", "바쁜", "바빴는", "바쁘을"], answer: 0,
      why: ["Goed: verleden tijd 바빴 + 을.", "바쁜 is de ㄴ-vorm; voor 뿐 moet het de ㄹ-vorm zijn.", "Voor 뿐 staat 을, niet 는.", "Na een klinker komt geen 을, en het was vorig jaar."] },
    { type: "mc", q: "그는 요리를 잘___ 뿐만 아니라 청소도 잘해요.",
      options: ["할", "하을", "한", "하는"], answer: 0,
      why: ["Goed: 하다 eindigt op een klinker, dus 할.", "Na een klinker komt alleen ㄹ, geen 을.", "한 is de ㄴ-vorm; voor 뿐 moet het 할 zijn.", "하는 kan niet voor 뿐 staan."] },
    { type: "mc", q: "___ 아니라 어른들도 이 만화를 좋아해요. (Niet alleen kinderen, ook volwassenen houden van deze strip.)",
      options: ["아이들뿐만", "아이들을 뿐만", "아이들일 뿐만", "아이들이 뿐만"], answer: 0,
      why: ["Goed: naamwoord + 뿐만, zonder partikel.", "Tussen het naamwoord en 뿐만 komt geen 을.", "아이들일 zegt \"zijn kinderen\"; dat past hier niet.", "Tussen het naamwoord en 뿐만 komt geen 이."] }
  ]
})
