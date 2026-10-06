({
  id: "13", slug: "beorida", title: "-아/어 버리다", sub: "Helemaal, voorgoed: met opluchting of spijt",
  canDo: "Je kunt nu zeggen dat iets helemaal en voorgoed gebeurd is, en daarbij opluchting of spijt laten horen, met -아/어 버리다.",
  guess: {
    q: "Je hebt in je eentje de hele taart opgegeten. Wat zeg je, denk je?",
    options: ["케이크를 다 먹어 버렸어요.", "케이크를 다 먹어 놓았어요.", "케이크를 다 먹고 버렸어요.", "케이크를 다 먹어서 버렸어요."], answer: 0,
    why: ["Goed: -아/어 버리다 = helemaal op, en er klinkt spijt in.", "-아/어 놓다 is voor iets wat je van tevoren klaarzet. Een taart eet je niet \"klaar\".", "먹고 버렸어요 betekent: ik at ervan en gooide het daarna weg.", "-아/어서 maakt er \"ik at het en daarom gooide ik het weg\" van."]
  },
  problem: "In het Nederlands zeg je \"op\" of \"weg\": de taart is óp, de bus is weg. Je toon laat horen of je opgelucht bent of spijt hebt. In het Koreaans doe je dat met -아/어 버리다. Het zegt: dit is helemaal klaar, en er is geen weg terug.",
  pattern: [
    { l: "wat", v: "케이크를 다", c: 1 }, { l: "werkwoord (-아/어)", v: "먹어", c: 3 },
    { l: "helemaal, voorgoed", v: "버렸어요", c: 2, key: true }
  ],
  patternCap: "Werkwoordstam + 아/어 버리다; meestal in de verleden tijd: 먹어 버렸어요, 가 버렸어요, 해 버렸어요",
  rules: [
    "Stam met ㅏ of ㅗ + 아 버리다 (놓아 버리다; 가 + 아 → 가 버리다). Andere stammen + 어 버리다 (먹어 버리다). 하다 → 해 버리다.",
    "Tijd en beleefdheid staan op 버리다: 가 버렸어요, 끝내 버릴 거예요.",
    "Alleen met werkwoorden. Een bijvoeglijk werkwoord maak je eerst een werkwoord met -아/어지다: 추워져 버렸어요.",
    "Je schrijft meestal een spatie vóór 버리다. 잃어버리다 (kwijtraken) en 잊어버리다 (vergeten) zijn één woord geworden en schrijf je aan elkaar.",
    "Het kan ook over de toekomst gaan, als vastbesloten plan: 오늘 다 끝내 버릴 거예요."
  ],
  pitfall: "버리다 alleen betekent \"weggooien\". 먹고 버렸어요 = ik at ervan en gooide het weg. 먹어 버렸어요 = ik heb het helemaal opgegeten. Het verschil zit in -고 tegenover -아/어.",
  examples: [
    { cn: "배가 고파서 케이크를 혼자 다 먹어 버렸어요.", py: "Baega gopaseo keikeureul honja da meogeo beoryeosseoyo.", nl: "Ik had honger en heb de hele taart in mijn eentje opgegeten." },
    { cn: "숙제를 일찍 끝내 버려서 마음이 편해요.", py: "Sukjereul iljjik kkeunnae beoryeoseo maeumi pyeonhaeyo.", nl: "Ik heb mijn huiswerk al vroeg afgemaakt, dus ik ben opgelucht." },
    { cn: "5분 늦었는데 버스가 벌써 가 버렸어요.", py: "Obun neujeonneunde beoseuga beolsseo ga beoryeosseoyo.", nl: "Ik was vijf minuten te laat, en de bus was al weg." },
    { cn: "친구의 비밀을 다른 사람에게 말해 버렸어요.", py: "Chinguui bimireul dareun saramege malhae beoryeosseoyo.", nl: "Ik heb het geheim van mijn vriend toch aan iemand anders verteld." }
  ],
  nuance: [
    { h: "Opluchting of spijt?",
      p: "De vorm is hetzelfde; de situatie bepaalt het gevoel. Is iets lastigs eindelijk klaar, dan hoor je opluchting. Is er iets kwijt, kapot of te laat, dan hoor je spijt. In beide gevallen zegt 버리다: het is helemaal gebeurd en het gaat niet meer terug.",
      ex: [
        { cn: "어려운 일을 오늘 다 해 버렸어요.", py: "Eoryeoun ireul oneul da hae beoryeosseoyo.", nl: "Ik heb het moeilijke werk vandaag helemaal afgekregen." },
        { cn: "중요한 파일을 지워 버렸어요.", py: "Jungyohan paireul jiwo beoryeosseoyo.", nl: "Ik heb een belangrijk bestand gewist." }
      ] },
    { h: "-아/어 버리다 of -아/어 놓다?",
      p: "-아/어 놓다 gebruik je als je iets van tevoren doet, zodat het resultaat later klaarstaat. Het is neutraal en praktisch. -아/어 버리다 zegt dat iets af en weg is, met een gevoel erbij. Het gaat niet om voorbereiding.",
      ex: [
        { cn: "숙제를 미리 해 놓았어요.", py: "Sukjereul miri hae noasseoyo.", nl: "Ik heb mijn huiswerk van tevoren gemaakt (dan is het klaar voor morgen)." },
        { cn: "숙제를 다 해 버렸어요.", py: "Sukjereul da hae beoryeosseoyo.", nl: "Ik heb mijn huiswerk helemaal af (ik ben ervan af)." }
      ] },
    { h: "Kort: -고 말다 (TOPIK 5)",
      p: "-고 말다 betekent ook \"uiteindelijk toch\", vaak ondanks moeite en meestal met spijt. Het klinkt formeler en hoor je vooral in verhalen en schrijftaal. -아/어 버리다 is gewoner in spreektaal en kan ook opluchting uitdrukken.",
      ex: [
        { cn: "열심히 공부했지만 시험에 떨어지고 말았다.", py: "Yeolsimhi gongbuhaetjiman siheome tteoreojigo maratda.", nl: "Ik had hard gestudeerd, maar ben uiteindelijk toch gezakt." }
      ] }
  ],
  mistakes: [
    { wrong: "케이크를 다 먹고 버렸어요.", right: "케이크를 다 먹어 버렸어요.", why: "Met -고 worden het twee handelingen: eten en dan weggooien. Voor \"helemaal op\" gebruik je -아/어 버리다." },
    { wrong: "버스가 벌써 가아 버렸어요.", right: "버스가 벌써 가 버렸어요.", why: "가 + 아 smelt samen tot 가. Je schrijft geen extra 아." },
    { wrong: "날씨가 갑자기 추워 버렸어요.", right: "날씨가 갑자기 추워져 버렸어요.", why: "춥다 is een bijvoeglijk werkwoord. Maak er eerst een werkwoord van met -아/어지다." },
    { wrong: "손님이 오니까 음식을 미리 만들어 버렸어요.", right: "손님이 오니까 음식을 미리 만들어 놓았어요.", why: "Iets van tevoren klaarzetten is -아/어 놓다, niet -아/어 버리다." }
  ],
  vocab: [
    ["-아/어 버리다", "-a/eo beorida", "helemaal, voorgoed (met opluchting of spijt)"], ["끝내다", "kkeunnaeda", "afmaken, afronden"],
    ["비밀", "bimil", "geheim"], ["지우다", "jiuda", "wissen"], ["저장하다", "jeojanghada", "opslaan"],
    ["후회하다", "huhoehada", "spijt hebben"], ["벌써", "beolsseo", "al"], ["정리", "jeongni", "opruimen, ordenen"],
    ["서류", "seoryu", "document, papieren"], ["시원하다", "siwonhada", "opgelucht; fris"]
  ],
  dialogue: [
    ["A", "왜 그렇게 기분이 안 좋아요?", "Wae geureoke gibuni an joayo?", "Waarom ben je zo slecht gehumeurd?"],
    ["B", "보고서를 다 썼는데 저장을 안 하고 컴퓨터를 꺼 버렸어요.", "Bogoseoreul da sseonneunde jeojangeul an hago keompyuteoreul kkeo beoryeosseoyo.", "Mijn verslag was af, maar ik heb de computer uitgezet zonder op te slaan."],
    ["A", "아이고, 다 지워졌어요?", "Aigo, da jiwojyeosseoyo?", "O jee, is alles weg?"],
    ["B", "네, 처음부터 다시 써야 해요. 정말 후회돼요.", "Ne, cheoeumbuteo dasi sseoya haeyo. Jeongmal huhoedwaeyo.", "Ja, ik moet het opnieuw schrijven. Ik heb er echt spijt van."],
    ["A", "그럼 오늘 밤에 다 써 버리고 내일은 푹 쉬세요.", "Geureom oneul bame da sseo beorigo naeireun puk swiseyo.", "Schrijf het vanavond dan helemaal af, en rust morgen goed uit."],
    ["B", "네, 오늘 다 끝내 버릴 거예요!", "Ne, oneul da kkeunnae beoril geoyeyo!", "Ja, ik maak het vandaag helemaal af!"]
  ],
  reading: {
    title: "방 정리",
    lines: [
      { cn: "지난 주말에 오랫동안 미루던 방 정리를 했다.", py: "Jinan jumare oraetdongan mirudeon bang jeongnireul haetda.", nl: "Afgelopen weekend ruimde ik mijn kamer op, iets wat ik al lang uitstelde." },
      { cn: "안 입는 옷과 오래된 책을 모두 버렸다.", py: "An imneun otgwa oraedoen chaegeul modu beoryeotda.", nl: "Ik gooide alle kleren die ik niet draag en alle oude boeken weg." },
      { cn: "몇 년 동안 미루던 일을 하루 만에 끝내 버려서 마음이 아주 시원했다.", py: "Myeon nyeon dongan mirudeon ireul haru mane kkeunnae beoryeoseo maeumi aju siwonhaetda.", nl: "Iets wat ik jaren had uitgesteld, had ik in één dag afgerond. Ik was erg opgelucht." },
      { cn: "그런데 저녁에 중요한 서류가 없다는 것을 알았다.", py: "Geureonde jeonyeoge jungyohan seoryuga eopdaneun geoseul aratda.", nl: "Maar 's avonds merkte ik dat een belangrijk document weg was." },
      { cn: "오래된 책 사이에 있던 서류까지 같이 버려 버린 것이다.", py: "Oraedoen chaek saie itdeon seoryukkaji gachi beoryeo beorin geosida.", nl: "Ik had het document, dat tussen de oude boeken zat, ook meteen weggegooid." },
      { cn: "쓰레기차가 이미 아침에 쓰레기를 가져가 버려서 찾을 수 없었다.", py: "Sseuregichaga imi achime sseuregireul gajyeoga beoryeoseo chajeul su eopseotda.", nl: "De vuilniswagen had het afval 's ochtends al meegenomen, dus ik kon het niet meer vinden." },
      { cn: "정리를 해서 기분은 좋았지만 조금 후회했다.", py: "Jeongnireul haeseo gibuneun joatjiman jogeum huhoehaetda.", nl: "Ik was blij dat ik had opgeruimd, maar ik had ook een beetje spijt." },
      { cn: "다음에는 버리기 전에 꼭 한 번 더 확인해야겠다.", py: "Daeumeneun beorigi jeone kkok han beon deo hwaginhaeyagetda.", nl: "Volgende keer controleer ik alles nog een keer voordat ik iets weggooi." }
    ],
    questions: [
      { type: "mc", q: "Hoe voelde de schrijver zich direct na het opruimen?",
        options: ["Opgelucht.", "Teleurgesteld.", "Bezorgd om de boeken.", "Boos op de vuilniswagen."], answer: 0,
        why: ["Goed: 끝내 버려서 마음이 아주 시원했다.", "Teleurgesteld was hij niet; hij was juist opgelucht.", "De boeken gooide hij bewust weg.", "Over boosheid staat niets in de tekst."] },
      { type: "mc", q: "Waarom kon de schrijver het document niet terugvinden?",
        options: ["De vuilniswagen had het afval al meegenomen.", "Hij had het aan een vriend gegeven.", "Het lag nog tussen de oude boeken.", "Hij had het in een kast gelegd."], answer: 0,
        why: ["Goed: 쓰레기차가 이미 아침에 쓰레기를 가져가 버려서 찾을 수 없었다.", "Er komt geen vriend voor in de tekst.", "Het lag tussen de boeken, maar die waren al weggegooid.", "Over een kast staat niets in de tekst."] },
      { type: "mc", q: "쓰레기차가 ... 가져가 버려서 ... Wat drukt 버려서 hier uit?",
        options: ["Het afval was voorgoed weg, tot spijt van de schrijver.", "De vuilniswagen gooide het document expres weg.", "Het afval was van tevoren klaargezet.", "De schrijver was blij dat het weg was."], answer: 0,
        why: ["Goed: -아/어 버리다 = helemaal en voorgoed, hier met spijt.", "버리다 betekent hier niet \"weggooien\"; het is een hulpwerkwoord.", "Iets klaarzetten is -아/어 놓다.", "De schrijver kon het document niet meer vinden; dat is spijt, geen blijdschap."] }
    ]
  },
  questions: [
    { type: "mc", q: "기차가 벌써 ___. (De trein is al weg.)",
      options: ["떠나 버렸어요", "떠나어 버렸어요", "떠나고 버렸어요", "떠나 놓았어요"], answer: 0,
      why: ["Goed: 떠나 + 아 → 떠나, dan 버렸어요.", "Na een stam op ㅏ smelt 아 samen; geen extra 어.", "Met -고 worden het twee losse handelingen.", "-아/어 놓다 is voor iets wat je klaarzet; een trein vertrekt niet \"klaar\"."] },
    { type: "mc", q: "남은 음식을 먹고 버렸어요. Wat betekent dit?",
      options: ["Ik at ervan en gooide de rest weg.", "Ik heb alles helemaal opgegeten.", "Ik heb het eten van tevoren klaargezet.", "Ik at het uiteindelijk toch op."], answer: 0,
      why: ["Goed: -고 verbindt twee handelingen: eten, en daarna weggooien.", "\"Helemaal opgegeten\" is 먹어 버렸어요, met -아/어.", "Klaarzetten is -아/어 놓다.", "\"Uiteindelijk toch\" is -고 말다 of -아/어 버리다, niet -고 + 버리다."] },
    { type: "mc", q: "손님이 오기 전에 음식을 미리 ___. (Ik heb het eten van tevoren klaargemaakt.)",
      options: ["만들어 놓았어요", "만들어 버렸어요", "만들고 버렸어요", "만들어 말았어요"], answer: 0,
      why: ["Goed: iets van tevoren klaarzetten = -아/어 놓다.", "-아/어 버리다 gaat niet over voorbereiding.", "Dan maak je het en gooi je het weg.", "말다 gaat samen met -고: -고 말다, niet -아/어 말다."] },
    { type: "mc", q: "Welke zin laat opluchting horen?",
      options: ["힘든 일을 오늘 다 끝내 버렸어요.", "중요한 파일을 지워 버렸어요.", "친구의 비밀을 말해 버렸어요.", "버스가 벌써 가 버렸어요."], answer: 0,
      why: ["Goed: iets zwaars is eindelijk af; dat geeft opluchting.", "Een belangrijk bestand kwijt: dat is spijt.", "Een geheim doorvertellen: dat is spijt.", "De bus missen: dat is spijt."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["날씨가 갑자기 추워 버렸어요.", "날씨가 갑자기 추워져 버렸어요.", "아이가 벌써 잠들어 버렸어요.", "남은 피자를 동생이 먹어 버렸어요."], answer: 0,
      why: ["Goed: 춥다 is een bijvoeglijk werkwoord; eerst -아/어지다: 추워져 버렸어요.", "Dit klopt: 추워지다 is een werkwoord.", "Dit klopt: het kind is al helemaal in slaap.", "Dit klopt: de pizza is op, tot spijt van de spreker."] },
    { type: "mc", q: "In een verhaal: 열심히 연습했지만 결국 경기에서 ___. (Hij had hard getraind, maar verloor uiteindelijk toch.)",
      options: ["지고 말았다", "져 놓았다", "지기만 했다", "질 텐데"], answer: 0,
      why: ["Goed: -고 말다 = uiteindelijk toch, met spijt; past bij een verhaal.", "-아/어 놓다 is voor voorbereiding.", "-기만 하다 betekent \"alleen maar doen\".", "-(으)ㄹ 텐데 is een verwachting, geen afloop."] },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn broertje heeft mijn ijsje helemaal opgegeten.\"",
      tokens: [["동생이 제 아이스크림을", "dongsaengi je aiseukeurimeul"], ["다", "da"], ["먹어", "meogeo"], ["버렸어요", "beoryeosseoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Dit werk maak ik vandaag helemaal af.\"",
      tokens: [["이 일은", "i ireun"], ["오늘 다", "oneul da"], ["끝내", "kkeunnae"], ["버릴 거예요", "beoril geoyeyo"]] },
    { type: "fill", q: "어려운 숙제를 오늘 다 ___ 버렸어요. (하다) (Ik heb het moeilijke huiswerk vandaag helemaal af.)", answers: ["해"],
      hint: "Wat wordt 하다 vóór 버리다?", why: "하다 → 해 vóór 버리다: 해 버렸어요." },
    { type: "open", q: "Vertaal: \"Ik heb per ongeluk het belangrijke bestand gewist.\"",
      model: ["실수로 중요한 파일을 지워 버렸어요.", "중요한 파일을 실수로 지워 버렸어요."],
      tip: "Check: 지우다 → 지워 + 버렸어요, met -아/어 en niet met -고." },
    { type: "open", q: "Vertaal: \"Toen ik aankwam, was de trein al vertrokken.\"",
      model: ["제가 도착했을 때 기차가 벌써 떠나 버렸어요.", "도착하니까 기차가 이미 가 버렸어요."],
      tip: "Check: 떠나 버렸어요 of 가 버렸어요, zonder extra 아." }
  ],
  review: [
    { type: "mc", q: "아이가 엄마를 기다리다가 ___. (Het kind viel in slaap terwijl het op mama wachtte.)",
      options: ["잠들어 버렸어요", "잠들고 버렸어요", "잠들 버렸어요", "잠들어 놓았어요"], answer: 0,
      why: ["Goed: 잠들다 → 잠들어 + 버렸어요.", "Met -고 worden het twee losse handelingen.", "Vóór 버리다 staat de -아/어-vorm: 잠들어.", "-아/어 놓다 is voor voorbereiding."] },
    { type: "mc", q: "친구가 오기 전에 창문을 ___. (Ik heb het raam opengezet, zodat het fris is als mijn vriend komt.)",
      options: ["열어 놓았어요", "열어 버렸어요", "열고 버렸어요", "열어 말았어요"], answer: 0,
      why: ["Goed: iets doen zodat het resultaat later klaarstaat = -아/어 놓다.", "-아/어 버리다 gaat niet over voorbereiding.", "Met -고 + 버리다 gooi je iets weg.", "말다 gaat samen met -고, niet met -아/어."] },
    { type: "mc", q: "화가 나서 그 편지를 찢어 ___. (Ik was boos en heb die brief verscheurd.)",
      options: ["버렸어요", "놓았어요", "말았어요", "버려요"], answer: 0,
      why: ["Goed: helemaal en voorgoed, in de verleden tijd.", "-아/어 놓다 is voor voorbereiding; een brief verscheur je niet \"klaar\".", "말다 gaat samen met -고: 찢고 말았어요.", "Het is al gebeurd; dan staat 버리다 in de verleden tijd."] }
  ]
})
