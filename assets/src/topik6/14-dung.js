({
  id: "14", slug: "dung", title: "-는 둥 마는 둥 / -느니 -느니", sub: "Iets maar half doen, en allerlei redenen opnoemen",
  canDo: "Je kunt nu in spreektaal zeggen dat iemand iets maar half doet (-는 둥 마는 둥) en dat iemand allerlei klachten of smoesjes opsomt (-다느니 -다느니), en je kent de formele alternatieven.",
  guess: {
    q: "\"Ik had me verslapen, dus ik heb nauwelijks ontbeten.\" Welke zin klopt, denk je?",
    options: ["늦잠을 자서 아침을 먹는 둥 마는 둥 했어요.", "늦잠을 자서 아침을 먹었는 둥 마는 둥 했어요.", "늦잠을 자서 아침을 먹고 둥 마는 둥 했어요.", "늦잠을 자서 아침을 먹는 둥 마시는 둥 했어요."], answer: 0,
    why: ["Goed: stam + -는 둥 마는 둥, en de tijd zit in 하다: 했어요.", "De tijd staat niet in het eerste deel. Zeg 먹는 둥.", "Vóór 둥 staat een vorm op -는, niet -고.", "마는 komt van 말다 (ophouden), niet van 마시다."]
  },
  problem: "In het Nederlands zeg je: \"Hij at nauwelijks\" of \"Hij luisterde maar half.\" Het Koreaans heeft daar een levendige spreektaalvorm voor: -는 둥 마는 둥. Doet iemand iets niet en geeft hij allerlei redenen, dan zeg je -다느니 -다느니. Beide klinken een beetje geërgerd.",
  pattern: [
    { l: "handeling", v: "밥을 먹", c: 1 }, { l: "둥 마는 둥", v: "는 둥 마는 둥", c: 2, key: true },
    { l: "하다", v: "했다", c: 3 }, { l: "klachten", v: "덥다느니 춥다느니", c: 4, key: true }, { l: "afsluiting", v: "불평한다", c: 5 }
  ],
  patternCap: "V-는 둥 마는 둥 하다 (nauwelijks, half); A/V-다느니 A/V-다느니 하다 / 말이 많다 / 핑계를 대다 (allerlei redenen); formeel: 건성으로, 이런저런 이유를 들어",
  rules: [
    "-는 둥 마는 둥: werkwoordstam + -는 둥 마는 둥 + 하다. De tijd zit in 하다: 먹는 둥 마는 둥 했다.",
    "마는 komt van 말다 (ophouden). Het tweede deel is altijd 마는 둥, ook als het werkwoord anders is.",
    "-느니 -느니 met een werkwoord: 가느니 마느니 (wel of niet gaan). Met een citaat, ook bij bijvoeglijke werkwoorden: 덥다느니, 간다느니, 학생이라느니.",
    "Na -느니 -느니 komt 하다, 하면서, 말이 많다, 불평하다 of 핑계를 대다.",
    "Beide vormen zijn spreektaal en klinken kritisch. In formele tekst zeg je 건성으로 of 제대로 ... 않다, en 이런저런 이유를 들어."
  ],
  pitfall: "Zet geen tijd in het eerste deel: 먹는 둥 마는 둥 했다, niet 먹었는 둥. En een bijvoeglijk werkwoord krijgt niet direct -느니: zeg 덥다느니 춥다느니, niet 덥느니 춥느니.",
  examples: [
    { cn: "늦잠을 자서 아침을 먹는 둥 마는 둥 하고 나왔어요.", py: "Neutjameul jaseo achimeul meongneun dung maneun dung hago nawasseoyo.", nl: "Ik had me verslapen. Ik heb nauwelijks ontbeten en ben de deur uit gegaan." },
    { cn: "아이는 내 말을 듣는 둥 마는 둥 게임만 했다.", py: "Aineun nae mareul deunneun dung maneun dung geimman haetda.", nl: "Het kind luisterde nauwelijks naar me en zat alleen maar te gamen." },
    { cn: "동생은 덥다느니 피곤하다느니 하면서 청소를 안 했어요.", py: "Dongsaengeun deopdaneuni pigonhadaneuni hamyeonseo cheongsoreul an haesseoyo.", nl: "Mijn broertje zei dat het warm was, dat hij moe was, en ruimde niet op." },
    { cn: "회의에서 예산이 부족하다느니 시간이 없다느니 말이 많았다.", py: "Hoeuieseo yesani bujokadaneuni sigani eopdaneuni mari manatda.", nl: "In de vergadering werd van alles geroepen: het budget was te krap, er was geen tijd." }
  ],
  nuance: [
    { h: "-는 둥 마는 둥 of -다가 말다?",
      p: "-는 둥 마는 둥 zegt: je deed het wel, maar slordig of zonder aandacht. -다가 말다 zegt: je begon eraan en stopte halverwege. Het verschil zit in hoe, niet in hoe ver.",
      ex: [
        { cn: "숙제를 하는 둥 마는 둥 했어요.", py: "Sukjereul haneun dung maneun dung haesseoyo.", nl: "Ik heb mijn huiswerk maar half en slordig gemaakt." },
        { cn: "숙제를 하다가 말았어요.", py: "Sukjereul hadaga marasseoyo.", nl: "Ik begon aan mijn huiswerk en stopte halverwege." }
      ] },
    { h: "-다느니 -다느니 of -거나?",
      p: "-다느니 -다느니 geeft weer wat iemand allemaal zegt, en het klinkt geërgerd: steeds nieuwe klachten of smoesjes. -거나 noemt gewoon twee mogelijkheden, zonder oordeel.",
      ex: [
        { cn: "그는 바쁘다느니 아프다느니 핑계를 댔다.", py: "Geuneun bappeudaneuni apeudaneuni pinggyereul daetda.", nl: "Hij kwam met allerlei smoesjes: hij had het druk, hij was ziek." },
        { cn: "주말에는 책을 읽거나 영화를 봐요.", py: "Jumareneun chaegeul ilgeona yeonghwareul bwayo.", nl: "In het weekend lees ik of kijk ik een film." }
      ] },
    { h: "Let op: -느니 차라리 is iets anders",
      p: "Eén -느니 met 차라리 betekent \"liever ... dan\". Twee keer -느니 achter elkaar betekent \"allerlei gepraat over\". Kijk dus of er een tweede -느니 volgt.",
      ex: [
        { cn: "그렇게 사느니 차라리 혼자 살겠어요.", py: "Geureoke saneuni charari honja salgesseoyo.", nl: "Liever woon ik alleen dan dat ik zo leef." },
        { cn: "이사를 가느니 마느니 말이 많았어요.", py: "Isareul ganeuni maneuni mari manasseoyo.", nl: "Er werd eindeloos gepraat over wel of niet verhuizen." }
      ] },
    { h: "Register: formele alternatieven",
      p: "Beide vormen horen in gesprekken, verhalen en columns. In een rapport of nieuwsbericht schrijf je 건성으로 (halfslachtig) of 제대로 ... 않았다. Voor de opsomming van redenen schrijf je 이런저런 이유를 들어 of 여러 가지 이유를 들어.",
      ex: [
        { cn: "그는 회의 자료를 건성으로 읽었다.", py: "Geuneun hoeui jaryoreul geonseongeuro ilgeotda.", nl: "Hij las de vergaderstukken halfslachtig door." },
        { cn: "정부는 여러 가지 이유를 들어 결정을 미뤘다.", py: "Jeongbuneun yeoreo gaji iyureul deureo gyeoljeongeul mirwotda.", nl: "De regering stelde de beslissing uit en voerde daarvoor allerlei redenen aan." }
      ] }
  ],
  mistakes: [
    { wrong: "아침을 먹었는 둥 마는 둥 하고 나왔어요.", right: "아침을 먹는 둥 마는 둥 하고 나왔어요.", why: "De tijd staat in 하다 (나왔어요), niet in het eerste deel." },
    { wrong: "그는 덥느니 춥느니 불평했다.", right: "그는 덥다느니 춥다느니 불평했다.", why: "Een bijvoeglijk werkwoord krijgt de citaatvorm -다느니, niet direct -느니." },
    { wrong: "아이는 내 말을 듣는둥 마는둥 했다.", right: "아이는 내 말을 듣는 둥 마는 둥 했다.", why: "둥 is een los woord. Schrijf een spatie vóór elk 둥." },
    { wrong: "(in een rapport) 직원들이 교육을 듣는 둥 마는 둥 했다.", right: "(in een rapport) 직원들이 교육을 건성으로 들었다.", why: "-는 둥 마는 둥 is spreektaal. In een rapport schrijf je 건성으로." }
  ],
  vocab: [
    ["-는 둥 마는 둥 / -느니 -느니", "-neun dung maneun dung / -neuni -neuni", "nauwelijks, maar half / allerlei redenen opnoemen"], ["늦잠", "neutjam", "het zich verslapen"],
    ["건성으로", "geonseongeuro", "halfslachtig, zonder aandacht"], ["핑계", "pinggye", "smoes, uitvlucht"],
    ["불평하다", "bulpyeonghada", "klagen"], ["예산", "yesan", "budget"],
    ["잔소리", "jansori", "gezeur, gemopper"], ["사춘기", "sachungi", "puberteit"],
    ["꾸물거리다", "kkumulgeorida", "treuzelen"], ["저절로", "jeojeollo", "vanzelf"]
  ],
  dialogue: [
    ["A", "민수 씨, 아까 회의 때 왜 그렇게 조용했어요?", "Minsu ssi, akka hoeui ttae wae geureoke joyonghaesseoyo?", "Minsu, waarom was je zo stil tijdens de vergadering?"],
    ["B", "어젯밤에 잠을 자는 둥 마는 둥 해서 정신이 없었어요.", "Eojetbame jameul janeun dung maneun dung haeseo jeongsini eopseosseoyo.", "Ik heb vannacht nauwelijks geslapen. Ik was er niet bij met mijn hoofd."],
    ["A", "그래서 발표도 듣는 둥 마는 둥 했군요.", "Geuraeseo balpyodo deunneun dung maneun dung haetgunnyo.", "Daarom luisterde je ook maar half naar de presentatie."],
    ["B", "네. 그런데 다들 예산이 없다느니 인원이 부족하다느니 불평만 하던데요.", "Ne. Geureonde dadeul yesani eopdaneuni inwoni bujokadaneuni bulpyeongman hadeondeyo.", "Ja. Maar iedereen klaagde alleen maar: er is geen budget, er zijn te weinig mensen."],
    ["A", "맞아요. 결국 아무것도 정하지 못했어요.", "Majayo. Gyeolguk amugeotdo jeonghaji motaesseoyo.", "Klopt. Uiteindelijk is er niets besloten."]
  ],
  reading: {
    title: "사춘기 아들과의 아침",
    lines: [
      { cn: "요즘 중학생 아들과 하루를 시작하는 일이 쉽지 않다.", py: "Yojeum junghaksaeng adeulgwa harureul sijakaneun iri swipji anta.", nl: "De dag beginnen met mijn zoon, die op de middelbare school zit, is de laatste tijd niet makkelijk." },
      { cn: "아침마다 깨우면 아들은 눈을 뜨는 둥 마는 둥 하다가 다시 잠이 든다.", py: "Achimmada kkaeumyeon adeureun nuneul tteuneun dung maneun dung hadaga dasi jami deunda.", nl: "Als ik hem 's ochtends wek, doet hij zijn ogen half open en valt dan weer in slaap." },
      { cn: "겨우 식탁에 앉아도 밥을 먹는 둥 마는 둥 하고 휴대폰만 본다.", py: "Gyeou siktage anjado babeul meongneun dung maneun dung hago hyudaeponman bonda.", nl: "Zit hij eindelijk aan tafel, dan eet hij nauwelijks en kijkt hij alleen naar zijn telefoon." },
      { cn: "학교에 늦겠다고 하면 머리가 아프다느니 배가 아프다느니 하면서 더 꾸물거린다.", py: "Hakgyoe neutgetdago hamyeon meoriga apeudaneuni baega apeudaneuni hamyeonseo deo kkumulgeorinda.", nl: "Zeg ik dat hij te laat komt, dan heeft hij hoofdpijn, dan buikpijn, en treuzelt hij nog meer." },
      { cn: "그럴 때마다 잔소리가 저절로 나온다.", py: "Geureol ttaemada jansoriga jeojeollo naonda.", nl: "Elke keer begin ik vanzelf te mopperen." },
      { cn: "하지만 내가 무슨 말을 해도 아들은 듣는 둥 마는 둥이다.", py: "Hajiman naega museun mareul haedo adeureun deunneun dung maneun dungida.", nl: "Maar wat ik ook zeg, mijn zoon luistert maar half." },
      { cn: "어느 날 나도 사춘기 때 똑같았다는 어머니의 말씀이 떠올랐다.", py: "Eoneu nal nado sachungi ttae ttokgatatdaneun eomeoniui malsseumi tteoollatda.", nl: "Op een dag dacht ik terug aan de woorden van mijn moeder: ik was in mijn puberteit precies hetzelfde." },
      { cn: "그 뒤로는 잔소리를 줄이고 조금 더 참아 보기로 했다.", py: "Geu dwironeun jansorireul jurigo jogeum deo chama bogiro haetda.", nl: "Sindsdien mopper ik minder en probeer ik wat meer geduld te hebben." }
    ],
    questions: [
      { type: "mc", q: "Wat doet de zoon aan het ontbijt?",
        options: ["Hij eet nauwelijks en kijkt naar zijn telefoon.", "Hij eet snel en gaat meteen naar school.", "Hij eet niets en slaapt verder.", "Hij eet veel en praat met zijn ouders."], answer: 0,
        why: ["Goed: 밥을 먹는 둥 마는 둥 하고 휴대폰만 본다.", "Hij treuzelt juist (꾸물거린다).", "Hij eet wel, maar nauwelijks. Weer slapen gebeurt bij het wekken.", "Hij kijkt alleen naar zijn telefoon."] },
      { type: "mc", q: "Waarom besluit de schrijver minder te mopperen?",
        options: ["Ze herinnert zich dat ze zelf als puber net zo was.", "Haar zoon vroeg haar ermee te stoppen.", "De school gaf haar dat advies.", "Haar zoon kwam nooit meer te laat."], answer: 0,
        why: ["Goed: 나도 사춘기 때 똑같았다는 어머니의 말씀.", "Dat staat niet in de tekst.", "Over de school staat niets.", "Over een verandering bij de zoon staat niets."] },
      { type: "mc", q: "머리가 아프다느니 배가 아프다느니 하면서 ... Wat drukt -다느니 -다느니 hier uit?",
        options: ["Hij somt steeds nieuwe klachten op, en de schrijver ergert zich.", "Hij heeft zowel hoofdpijn als buikpijn, en gaat naar de dokter.", "Hij kiest tussen hoofdpijn en buikpijn.", "Hij heeft liever hoofdpijn dan buikpijn."], answer: 0,
        why: ["Goed: -다느니 -다느니 geeft geërgerd weer wat iemand allemaal beweert.", "De vorm citeert klachten. Of ze echt zijn, laat de schrijver open.", "Een neutrale keuze maak je met -거나.", "\"Liever ... dan\" is één -느니 met 차라리."] }
    ]
  },
  questions: [
    { type: "mc", q: "너무 바빠서 점심을 ___ 둥 마는 둥 했어요.",
      options: ["먹는", "먹었는", "먹을", "먹고"], answer: 0,
      why: ["Goed: stam + -는 둥. De tijd zit in 했어요.", "De verleden tijd staat niet in het eerste deel.", "-을 wijst naar de toekomst en past niet vóór 둥.", "Vóór 둥 staat een vorm op -는, niet -고."] },
    { type: "mc", q: "Wat betekent: 그는 내 말을 듣는 둥 마는 둥 했다?",
      options: ["Hij luisterde nauwelijks naar me.", "Hij luisterde aandachtig naar me.", "Hij begon te luisteren en stopte halverwege.", "Hij weigerde naar me te luisteren."], answer: 0,
      why: ["Goed: -는 둥 마는 둥 = half, zonder aandacht.", "Dat is het tegendeel.", "Beginnen en halverwege stoppen is -다가 말다.", "Weigeren is 듣지 않으려고 했다. 둥 마는 둥 betekent dat hij half luisterde."] },
    { type: "mc", q: "\"Hij klaagt steeds: het is te warm, het is te koud.\"",
      options: ["그는 덥다느니 춥다느니 불평해요.", "그는 덥느니 춥느니 불평해요.", "그는 덥다느니 춥다거나 불평해요.", "그는 덥다면 춥다면 불평해요."], answer: 0,
      why: ["Goed: citaatvorm -다느니 bij bijvoeglijke werkwoorden.", "Een bijvoeglijk werkwoord krijgt niet direct -느니.", "Beide delen krijgen dezelfde vorm: -다느니 -다느니.", "-다면 betekent \"als\", geen opsomming van klachten."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["숙제를 했는 둥 마는 둥 했어요.", "숙제를 하는 둥 마는 둥 했어요.", "숙제를 하다가 말았어요.", "숙제를 대충 했어요."], answer: 0,
      why: ["Goed: de tijd hoort niet in het eerste deel. Zeg 하는 둥 마는 둥 했어요.", "Dit klopt: half en slordig gedaan.", "Dit klopt: begonnen en gestopt.", "Dit klopt: ruwweg gedaan."] },
    { type: "mc", q: "그렇게 사___ 차라리 혼자 살겠어요. (Liever woon ik alleen dan zo te leven.)",
      options: ["느니", "는 둥", "거나", "든지"], answer: 0,
      why: ["Goed: één -느니 met 차라리 = liever ... dan.", "-는 둥 heeft 마는 둥 nodig en betekent \"half\".", "-거나 noemt een keuze, maar past niet bij 차라리.", "-든지 betekent \"of ... of\", niet \"liever dan\"."] },
    { type: "mc", q: "\"Ik begon aan het boek, maar stopte halverwege.\"",
      options: ["책을 읽다가 말았어요.", "책을 읽는 둥 마는 둥 했어요.", "책을 읽느니 마느니 했어요.", "책을 읽거나 말았어요."], answer: 0,
      why: ["Goed: -다가 말다 = beginnen en halverwege stoppen.", "Dit betekent: je las het half en zonder aandacht.", "Dit betekent: er werd gepraat over wel of niet lezen.", "-거나 noemt een keuze en past niet met 말다."] },
    { type: "mc", q: "In een officieel rapport: \"Sommige deelnemers volgden de training maar halfslachtig.\"",
      options: ["일부 참가자는 교육을 건성으로 들었다.", "일부 참가자는 교육을 듣는 둥 마는 둥 했어.", "일부 참가자는 교육을 듣는 둥 마는 둥 했잖아요.", "일부 참가자는 교육을 듣는 둥 마는 둥 했대."], answer: 0,
      why: ["Goed: 건성으로 en een -다-einde passen in een rapport.", "-는 둥 마는 둥 en -어 zijn spreektaal.", "-잖아요 is spreektaal: \"dat weet je toch\".", "-대 is een spreektalig citaat."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik had me verslapen, dus ik heb nauwelijks ontbeten.\"",
      tokens: [["늦잠을 자서", "neutjameul jaseo"], ["아침을", "achimeul"], ["먹는 둥", "meongneun dung"], ["마는 둥", "maneun dung"], ["했어요", "haesseoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij kwam met allerlei smoesjes: hij had het druk, hij was ziek.\"",
      tokens: [["그는", "geuneun"], ["바쁘다느니 아프다느니", "bappeudaneuni apeudaneuni"], ["핑계를", "pinggyereul"], ["댔다", "daetda"]] },
    { type: "fill", q: "아이는 내 말을 듣는 둥 ___ 둥 게임만 했다. (Het kind luisterde nauwelijks naar me en zat alleen te gamen.)",
      answers: ["마는"], hint: "Het tweede deel komt van 말다 (ophouden).", why: "듣는 둥 마는 둥: het tweede deel is altijd 마는 둥." },
    { type: "open", q: "Vertaal: \"Mijn broertje heeft zijn kamer maar half opgeruimd.\"",
      model: ["동생은 방을 치우는 둥 마는 둥 했어요.", "남동생이 방 청소를 하는 둥 마는 둥 했어요.", "동생이 방을 정리하는 둥 마는 둥 했어요."],
      tip: "Check: stam + -는 둥 마는 둥, spaties vóór 둥, en de tijd in 했어요." },
    { type: "open", q: "Vertaal: \"Hij zei dat hij moe was, dat hij geen tijd had, en hij kwam niet.\"",
      model: ["그는 피곤하다느니 시간이 없다느니 하면서 안 왔어요.", "그 사람은 피곤하다느니 시간이 없다느니 하더니 결국 안 왔어요.", "그는 피곤하다느니 바쁘다느니 핑계를 대고 오지 않았다."],
      tip: "Check: twee keer de citaatvorm -다느니, gevolgd door 하면서 of 핑계를 대다." }
  ],
  review: [
    { type: "mc", q: "어제는 잠을 ___ 둥 마는 둥 해서 너무 피곤해요.",
      options: ["자는", "잤는", "잘", "자고"], answer: 0,
      why: ["Goed: stam + -는 둥 마는 둥, de tijd zit in 해서.", "De verleden tijd hoort niet in het eerste deel.", "-ㄹ wijst naar de toekomst en past niet vóór 둥.", "Vóór 둥 staat een vorm op -는."] },
    { type: "mc", q: "\"Ze klaagde dat het eten zout was, dat het koud was.\"",
      options: ["그녀는 음식이 짜다느니 차갑다느니 불평했다.", "그녀는 음식이 짜느니 차갑느니 불평했다.", "그녀는 음식이 짜다느니 차갑다거나 불평했다.", "그녀는 음식이 짜다면 차갑다면 불평했다."], answer: 0,
      why: ["Goed: citaatvorm -다느니 bij bijvoeglijke werkwoorden.", "Een bijvoeglijk werkwoord krijgt niet direct -느니.", "Beide delen krijgen dezelfde vorm.", "-다면 betekent \"als\"."] },
    { type: "mc", q: "Wat betekent: 바빠서 신문 기사를 읽는 둥 마는 둥 했어요?",
      options: ["Ik had het druk en heb het artikel maar vluchtig gelezen.", "Ik had het druk en heb het artikel helemaal niet gelezen.", "Ik had het druk en heb het artikel heel grondig gelezen.", "Ik had het druk en twijfelde of ik het artikel zou lezen."], answer: 0,
      why: ["Goed: -는 둥 마는 둥 = half, zonder aandacht.", "Je hebt het wel gelezen, maar niet goed.", "Dat is het tegendeel.", "Twijfelen over wel of niet is -(으)ㄹ까 말까."] }
  ]
})
