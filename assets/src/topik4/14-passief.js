({
  id: "14", slug: "passief", title: "Passief: -이/히/리/기- en -아/어지다", sub: "Zeggen wat er gebeurt, zonder de dader",
  canDo: "Je kunt nu zeggen dat iets gebeurt of gedaan wordt zonder te zeggen door wie, met passieve werkwoorden en -아/어지다.",
  guess: {
    q: "\"De deur ging open.\" Welke zin klopt, denk je?",
    options: ["문이 열렸어요.", "문을 열렸어요.", "문이 열었어요.", "문이 열혔어요."], answer: 0,
    why: ["Goed: 열다 → 열리다 (passief), en de deur krijgt 이.", "Bij een passief werkwoord krijgt de deur 이/가, niet 을/를.", "열었어요 is actief: iemand deed de deur open. Dan mist het onderwerp.", "열다 krijgt -리-, niet -히-: 열리다."]
  },
  problem: "Soms is niet belangrijk wie iets doet, maar wat er gebeurt. \"De deur ging open.\" \"De zee is te zien.\" In het Koreaans maak je daarvoor een passief werkwoord. Bij veel werkwoorden komt -이-, -히-, -리- of -기- achter de stam. Bij andere gebruik je -아/어지다.",
  pattern: [
    { l: "onderwerp + 이/가", v: "문이", c: 1 }, { l: "stam", v: "열", c: 3 },
    { l: "passief", v: "리", c: 2, key: true }, { l: "tijd + beleefdheid", v: "었어요", c: 4 }
  ],
  patternCap: "Onderwerp이/가 + stam + 이/히/리/기 (보이다, 닫히다, 열리다, 안기다); zonder eigen passief: stam + 아/어지다 (만들어지다)",
  rules: [
    "Wat iets ondergaat, krijgt 이/가, niet 을/를: 문이 열렸어요.",
    "Welke uitgang een werkwoord krijgt, leer je per woord: 보다 → 보이다, 닫다 → 닫히다, 열다 → 열리다, 안다 → 안기다.",
    "Heeft een werkwoord geen eigen passief, dan gebruik je -아/어지다: 만들다 → 만들어지다, 지우다 → 지워지다.",
    "Noem je de dader toch, dan met 에게 (personen) of 에 (dingen): 엄마에게 안겼어요, 바람에 문이 닫혔어요.",
    "Niet elk werkwoord heeft een passief. Werkwoorden als 주다, 받다 en 만나다 krijgen geen -이/히/리/기-. 하다-werkwoorden krijgen 되다: 사용하다 → 사용되다."
  ],
  pitfall: "Zet geen 을/를 vóór een passief werkwoord: 문을 열렸어요 is fout, 문이 열렸어요 is goed. Stapel ook geen twee passieven: gebruik 열리다, niet 열려지다.",
  examples: [
    { cn: "창문 밖으로 바다가 보여요.", py: "Changmun bakkeuro badaga boyeoyo.", nl: "Door het raam is de zee te zien." },
    { cn: "바람 때문에 문이 닫혔어요.", py: "Baram ttaemune muni dachyeosseoyo.", nl: "Door de wind ging de deur dicht." },
    { cn: "아기가 엄마 품에 안겨서 자고 있어요.", py: "Agiga eomma pume angyeoseo jago isseoyo.", nl: "De baby slaapt in de armen van zijn moeder." },
    { cn: "이 다리는 100년 전에 만들어졌어요.", py: "I darineun baengnyeon jeone mandeureojyeosseoyo.", nl: "Deze brug is honderd jaar geleden gebouwd." }
  ],
  nuance: [
    { h: "-이/히/리/기- of -아/어지다?",
      p: "Heeft een werkwoord een eigen passief, gebruik dat dan: 열리다, niet 열어지다. -아/어지다 gebruik je voor werkwoorden zonder eigen passief. Het zegt vaak ook dat iets vanzelf lukt of tot stand komt: met deze pen schrijf je makkelijk.",
      ex: [
        { cn: "문이 열렸어요.", py: "Muni yeollyeosseoyo.", nl: "De deur ging open." },
        { cn: "이 펜은 글씨가 잘 써져요.", py: "I peneun geulssiga jal sseojyeoyo.", nl: "Met deze pen schrijf je makkelijk." }
      ] },
    { h: "Actief of passief?",
      p: "Weet je wie het doet en is dat belangrijk, gebruik dan een gewone actieve zin. Koreaans gebruikt het passief minder dan het Nederlands. Je kiest het als de dader onbekend of onbelangrijk is, of als iets vanzelf gebeurt. Een passief met 에 의해 (door) klinkt stijf en hoort bij schrijftaal.",
      ex: [
        { cn: "제가 문을 닫았어요.", py: "Jega muneul dadasseoyo.", nl: "Ik heb de deur dichtgedaan." },
        { cn: "문이 닫혔어요.", py: "Muni dachyeosseoyo.", nl: "De deur is dicht(gegaan)." }
      ] },
    { h: "보다 of 보이다, 듣다 of 들리다?",
      p: "보다 en 듣다 zijn bewuste handelingen: kijken en luisteren. 보이다 en 들리다 betekenen: te zien zijn, te horen zijn. Het ding dat je ziet of hoort krijgt dan 이/가. Let op: -아/어 보이다 (피곤해 보여요, je ziet er moe uit) is een andere constructie.",
      ex: [
        { cn: "저는 산을 봐요.", py: "Jeoneun saneul bwayo.", nl: "Ik kijk naar de bergen." },
        { cn: "여기에서 산이 보여요.", py: "Yeogieseo sani boyeoyo.", nl: "Hiervandaan zijn de bergen te zien." }
      ] }
  ],
  mistakes: [
    { wrong: "문을 열렸어요.", right: "문이 열렸어요.", why: "Bij een passief werkwoord krijgt wat iets ondergaat 이/가, niet 을/를." },
    { wrong: "이 다리는 100년 전에 만들렸어요.", right: "이 다리는 100년 전에 만들어졌어요.", why: "만들다 heeft geen -리- passief. Gebruik -아/어지다: 만들어지다." },
    { wrong: "옆집 소리가 잘 듣혀요.", right: "옆집 소리가 잘 들려요.", why: "Het passief van 듣다 is 들리다, met -리-." },
    { wrong: "이 단어는 요즘 많이 사용해져요.", right: "이 단어는 요즘 많이 사용돼요.", why: "하다-werkwoorden krijgen 되다 in het passief: 사용되다." }
  ],
  vocab: [
    ["-이/히/리/기-", "-i/hi/ri/gi-", "passief-uitgang (보이다, 열리다 ...)"], ["보이다", "boida", "te zien zijn"],
    ["닫히다", "dachida", "dichtgaan"], ["열리다", "yeollida", "opengaan"], ["안기다", "angida", "in de armen gehouden worden"],
    ["들리다", "deullida", "te horen zijn"], ["팔리다", "pallida", "verkocht worden"], ["잡히다", "japida", "gepakt, gevangen worden"],
    ["만들어지다", "mandeureojida", "gemaakt worden"], ["도둑", "doduk", "dief"]
  ],
  dialogue: [
    ["A", "어, 창문이 왜 열려 있어요?", "Eo, changmuni wae yeollyeo isseoyo?", "Hé, waarom staat het raam open?"],
    ["B", "아까 바람에 열렸어요. 제가 닫을게요.", "Akka barame yeollyeosseoyo. Jega dadeulgeyo.", "Het ging net open door de wind. Ik doe het wel dicht."],
    ["A", "그런데 밖에서 무슨 소리가 들려요.", "Geureonde bakkeseo museun soriga deullyeoyo.", "Maar ik hoor buiten iets."],
    ["B", "옆집 아기가 우는 소리예요. 아, 이제 엄마한테 안겨서 조용해졌어요.", "Yeopjip agiga uneun soriyeyo. A, ije eommahante angyeoseo joyonghaejyeosseoyo.", "Het is de baby van de buren die huilt. Ah, nu hij in mama's armen ligt, is hij stil."],
    ["A", "다행이에요. 창문은 잘 닫혔어요?", "Dahaengieyo. Changmuneun jal dachyeosseoyo?", "Gelukkig. Is het raam goed dicht?"],
    ["B", "네, 잘 닫혔어요.", "Ne, jal dachyeosseoyo.", "Ja, het zit goed dicht."]
  ],
  reading: {
    title: "동네 빵집",
    lines: [
      { cn: "우리 동네에는 30년 전에 만들어진 작은 빵집이 있다.", py: "Uri dongneeneun samsimnyeon jeone mandeureojin jageun ppangjibi itda.", nl: "In onze buurt is een kleine bakkerij die dertig jaar geleden is opgericht." },
      { cn: "아침 7시가 되면 빵집 문이 열린다.", py: "Achim ilgopsiga doemyeon ppangjip muni yeollinda.", nl: "Om zeven uur 's ochtends gaat de deur van de bakkerij open." },
      { cn: "멀리서도 빵 냄새가 나고 사람들의 목소리가 들린다.", py: "Meolliseodo ppang naemsaega nago saramdeurui moksoriga deullinda.", nl: "Zelfs van ver ruik je het brood en hoor je de stemmen van mensen." },
      { cn: "이 빵집의 크림빵은 하루에 500개 넘게 팔린다.", py: "I ppangjibui keurimppangeun harue obaek gae neomge pallinda.", nl: "Van de roombroodjes van deze bakkerij worden er meer dan vijfhonderd per dag verkocht." },
      { cn: "그래서 오후 3시쯤이면 빵이 거의 다 팔려서 없다.", py: "Geuraeseo ohu sesijjeumimyeon ppangi geoui da pallyeoseo eopda.", nl: "Daarom is rond drie uur 's middags bijna al het brood uitverkocht." },
      { cn: "지난달에는 밤에 도둑이 들었지만 다음 날 바로 잡혔다.", py: "Jinandareneun bame doduki deureotjiman daeum nal baro japyeotda.", nl: "Vorige maand werd er 's nachts ingebroken, maar de dief werd de volgende dag meteen gepakt." },
      { cn: "가게 안 카메라에 도둑의 얼굴이 잘 보였기 때문이다.", py: "Gage an kamerae dodugui eolguri jal boyeotgi ttaemunida.", nl: "Het gezicht van de dief was namelijk goed te zien op de camera in de winkel." },
      { cn: "사장님은 웃으면서 \"빵은 훔치지 말고 그냥 사 가세요.\"라고 말했다.", py: "Sajangnimeun useumyeonseo \"ppangeun humchiji malgo geunyang sa gaseyo\"rago malhaetda.", nl: "De eigenaar zei lachend: \"Steel het brood niet, koop het gewoon.\"" }
    ],
    questions: [
      { type: "mc", q: "Hoe laat gaat de bakkerij open?",
        options: ["Om zeven uur 's ochtends.", "Om drie uur 's middags.", "Om vijf uur 's ochtends.", "Dat staat niet in de tekst."], answer: 0,
        why: ["Goed: 아침 7시가 되면 빵집 문이 열린다.", "Rond drie uur is het brood bijna op; dan gaat de winkel niet open.", "Vijf staat niet in de tekst.", "Het staat er wel: 아침 7시."] },
      { type: "mc", q: "Hoe werd de dief gepakt?",
        options: ["Zijn gezicht was goed te zien op de camera.", "De eigenaar zag hem 's nachts.", "Hij kwam de volgende dag brood kopen.", "De buren hoorden hem."], answer: 0,
        why: ["Goed: 카메라에 도둑의 얼굴이 잘 보였기 때문이다.", "Over de eigenaar 's nachts staat niets in de tekst.", "Dat zegt de eigenaar als grap, het is niet gebeurd.", "In de tekst hoor je stemmen van klanten, niet van de dief."] },
      { type: "mc", q: "빵이 거의 다 팔려서 없다. Wat betekent 팔려서 hier?",
        options: ["Het brood is verkocht, dus het is op.", "De bakker wil geen brood meer verkopen.", "Het brood is gestolen.", "Het brood wordt nog gebakken."], answer: 0,
        why: ["Goed: 팔리다 = verkocht worden. Het brood ondergaat de verkoop.", "Er staat niets over wat de bakker wil.", "Gestolen is 훔치다; daar gaat deze zin niet over.", "팔리다 gaat over verkopen, niet over bakken."] }
    ]
  },
  questions: [
    { type: "mc", q: "창문 밖으로 산이 ___. (Door het raam zijn de bergen te zien.)",
      options: ["보여요", "봐요", "보혀요", "보려요"], answer: 0,
      why: ["Goed: 보다 → 보이다 (te zien zijn).", "봐요 is actief: iemand kijkt. Met 산이 als onderwerp past dat niet.", "보다 krijgt -이-, niet -히-.", "보다 krijgt -이-, niet -리-."] },
    { type: "mc", q: "바람 때문에 문___ 닫혔어요.",
      options: ["이", "을", "에게", "으로"], answer: 0,
      why: ["Goed: bij een passief werkwoord krijgt de deur 이/가.", "을/를 hoort bij een actief werkwoord.", "에게 gebruik je voor een persoon als dader, niet voor de deur zelf.", "으로 betekent \"met, naar\"; de deur is het onderwerp."] },
    { type: "mc", q: "옆방에서 음악 소리가 ___. (듣다)",
      options: ["들려요", "듣혀요", "들어요", "듣기요"], answer: 0,
      why: ["Goed: 듣다 → 들리다 (te horen zijn).", "듣다 krijgt -리-, en de ㄷ wordt ㄹ: 들리다.", "들어요 is actief: iemand luistert. Met 소리가 als onderwerp past dat niet.", "-기- is niet de passief-uitgang van 듣다."] },
    { type: "mc", q: "이 다리는 100년 전에 ___. (Deze brug is honderd jaar geleden gebouwd.)",
      options: ["만들어졌어요", "만들렸어요", "만들혔어요", "만드렸어요"], answer: 0,
      why: ["Goed: 만들다 heeft geen eigen passief, dus -아/어지다.", "만들다 krijgt geen -리-.", "만들다 krijgt geen -히-.", "Ook zonder de ㄹ bestaat er geen -리- passief van 만들다."] },
    { type: "mc", q: "Welk werkwoord heeft GEEN passief met -이/히/리/기-?",
      options: ["만나다", "보다", "닫다", "팔다"], answer: 0,
      why: ["Goed: 만나다 heeft geen passief-uitgang.", "보다 → 보이다.", "닫다 → 닫히다.", "팔다 → 팔리다."] },
    { type: "mc", q: "이 단어는 요즘 자주 ___. (Dit woord wordt tegenwoordig vaak gebruikt.)",
      options: ["사용돼요", "사용해져요", "사용혀요", "사용시켜요"], answer: 0,
      why: ["Goed: 하다-werkwoorden krijgen 되다: 사용되다.", "Bij 하다-werkwoorden gebruik je 되다, niet -아/어지다.", "-히- komt niet achter een 하다-werkwoord.", "시키다 betekent \"laten doen\"; dat is geen passief."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["저는 매일 아침 뉴스를 봐요.", "저는 매일 아침 뉴스를 보여요.", "저는 매일 아침 뉴스가 봐요.", "저는 매일 아침 뉴스를 보혀요."], answer: 0,
      why: ["Goed: kijken is een bewuste handeling: 보다 met 을/를.", "보이다 betekent \"te zien zijn\"; met 을/를 en 저는 klopt dat niet.", "Bij het actieve 보다 krijgt het nieuws 을/를.", "보혀요 bestaat niet."] },
    { type: "order", q: "Zet in de goede volgorde: \"Het kind viel in slaap in de armen van zijn moeder.\"",
      tokens: [["아이가 엄마에게", "aiga eommaege"], ["안겨서", "angyeoseo"], ["잠이", "jami"], ["들었어요", "deureosseoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Vanuit mijn kamer is de zee heel goed te zien.\"",
      tokens: [["제 방에서 바다가", "je bangeseo badaga"], ["아주", "aju"], ["잘", "jal"], ["보여요", "boyeoyo"]] },
    { type: "fill", q: "도둑이 경찰에게 잡___어요. (De dief is door de politie gepakt.)", answers: ["혔"],
      hint: "잡다 krijgt -히-; wat wordt 히 + 었?", why: "잡다 → 잡히다; 잡히 + 었어요 = 잡혔어요." },
    { type: "open", q: "Vertaal: \"De deur ging open.\"",
      model: ["문이 열렸어요.", "문이 열렸네요."],
      tip: "Check: 문이 (niet 문을), en 열리다 in de verleden tijd: 열렸어요." },
    { type: "open", q: "Vertaal: \"Ik hoor muziek van hiernaast.\"",
      model: ["옆집에서 음악 소리가 들려요.", "옆방에서 음악이 들려요."],
      tip: "Check: 들리다 (te horen zijn) met 이/가, niet 듣다 met 을/를." }
  ],
  review: [
    { type: "mc", q: "멀리서 기차 소리가 ___. (Van ver is een trein te horen.)",
      options: ["들려요", "들어요", "듣혀요", "들기요"], answer: 0,
      why: ["Goed: 듣다 → 들리다, met 소리가 als onderwerp.", "들어요 is actief: iemand luistert.", "듣다 krijgt -리-, niet -히-.", "-기- is niet de passief-uitgang van 듣다."] },
    { type: "mc", q: "책이 많이 ___ 작가가 기뻐했어요. (Doordat het boek veel verkocht werd, was de schrijver blij.)",
      options: ["팔려서", "팔아서", "팔혀서", "팔이어서"], answer: 0,
      why: ["Goed: 팔다 → 팔리다; het boek wordt verkocht.", "팔아서 is actief; met 책이 als onderwerp past dat niet.", "팔다 krijgt -리-, niet -히-.", "팔다 krijgt -리-, niet -이-."] },
    { type: "mc", q: "칠판의 글씨가 잘 안 ___. (지우다) (De letters op het bord gaan niet goed weg.)",
      options: ["지워져요", "지워요", "지우혀요", "지우려요"], answer: 0,
      why: ["Goed: 지우다 heeft geen eigen passief, dus -아/어지다: 지워지다.", "지워요 is actief; met 글씨가 als onderwerp past dat niet.", "지우다 krijgt geen -히-.", "지우다 krijgt geen -리-."] }
  ]
})
