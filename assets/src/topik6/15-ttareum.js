({
  id: "15", slug: "ttareum", title: "-(으)ㄹ 따름이다", sub: "Alleen maar ..., formeel en bescheiden",
  canDo: "Je kunt nu formeel en bescheiden zeggen dat iets \"alleen maar\" zo is, met -(으)ㄹ 따름이다 (감사할 따름입니다), en je kiest tussen 따름이다 en -(으)ㄹ 뿐이다.",
  guess: {
    q: "Een prijswinnaar zegt: \"Ik kan alleen maar dankbaar zijn.\" Welke zin klopt, denk je?",
    options: ["그저 감사할 따름입니다.", "그저 감사한 따름입니다.", "그저 감사하는 따름입니다.", "그저 감사 따름입니다."], answer: 0,
    why: ["Goed: stam + -(으)ㄹ, dan 따름입니다.", "따름 neemt altijd -(으)ㄹ, niet -ㄴ.", "따름 neemt altijd -(으)ㄹ, niet -는.", "Vóór 따름 staat een vorm op -(으)ㄹ, geen kaal naamwoord."]
  },
  problem: "In het Nederlands zeg je bescheiden: \"Ik heb alleen maar mijn werk gedaan\" of \"Ik kan alleen maar dankbaar zijn.\" In formeel Koreaans zeg je dat met -(으)ㄹ 따름이다. Het betekent hetzelfde als -(으)ㄹ 뿐이다, maar klinkt plechtiger en bescheidener. Je hoort het in toespraken, interviews en officiële teksten.",
  pattern: [
    { l: "(그저)", v: "그저", c: 1 }, { l: "werkwoord", v: "감사하", c: 2 },
    { l: "-(으)ㄹ 따름", v: "ㄹ 따름", c: 3, key: true }, { l: "이다", v: "입니다", c: 4 }
  ],
  patternCap: "Stam + -(으)ㄹ 따름이다 (heden) / -았/었을 따름이다 (verleden) / N일 따름이다; vaak met 그저; spreektaal: -(으)ㄹ 뿐이에요, 그냥 ...",
  rules: [
    "Na een klinker: -ㄹ 따름 (감사할, 고마울). Na een 받침: -을 따름 (믿을 따름). Stam op ㄹ: 알 따름.",
    "Verleden: -았/었을 따름이다 (했을 따름입니다, 좋았을 따름입니다).",
    "Na een zelfstandig naamwoord: N일 따름이다 (소문일 따름이다).",
    "Vaak staat 그저 of 다만 ervoor, en vaak een gevoel: 감사할, 놀라울, 안타까울, 부끄러울 따름.",
    "Het is formeel: -ㅂ니다 of -다. In een gewoon gesprek zeg je -(으)ㄹ 뿐이에요 of je gebruikt 그냥."
  ],
  pitfall: "따름 is geen partikel. Na een naamwoord zeg je N일 따름이다, nooit N 따름이다. En 따름 kent geen andere vormen: -(으)ㄹ 뿐만 아니라 en 너뿐이야 kun je niet met 따름 maken.",
  examples: [
    { cn: "많은 분들이 도와주셔서 그저 감사할 따름입니다.", py: "Maneun bundeuri dowajusyeoseo geujeo gamsahal ttareumimnida.", nl: "Zoveel mensen hebben me geholpen. Ik kan alleen maar dankbaar zijn." },
    { cn: "저는 제가 맡은 일을 했을 따름입니다.", py: "Jeoneun jega mateun ireul haesseul ttareumimnida.", nl: "Ik heb alleen maar gedaan wat mij was toevertrouwd." },
    { cn: "사고 소식을 듣고 그저 안타까울 따름이었다.", py: "Sago sosigeul deutgo geujeo antakkaul ttareumieotda.", nl: "Bij het nieuws over het ongeluk voelde ik alleen maar diepe spijt." },
    { cn: "그것은 근거 없는 소문일 따름이다.", py: "Geugeoseun geungeo eomneun somunil ttareumida.", nl: "Dat is niets meer dan een ongegrond gerucht." }
  ],
  nuance: [
    { h: "-(으)ㄹ 따름이다 of -(으)ㄹ 뿐이다?",
      p: "De betekenis is gelijk: alleen maar, niets meer. -(으)ㄹ 뿐이다 is neutraal en kan overal, ook in gesprekken. -(으)ㄹ 따름이다 is formeler en klinkt bescheidener. Je gebruikt het vooral in toespraken, interviews en geschreven tekst, meestal met -ㅂ니다 of -다.",
      ex: [
        { cn: "저는 최선을 다했을 따름입니다.", py: "Jeoneun choeseoneul dahaesseul ttareumimnida.", nl: "Ik heb alleen maar mijn best gedaan. (formeel, bescheiden)" },
        { cn: "저는 그냥 최선을 다했을 뿐이에요.", py: "Jeoneun geunyang choeseoneul dahaesseul ppunieyo.", nl: "Ik heb gewoon mijn best gedaan. (beleefde spreektaal)" }
      ] },
    { h: "뿐 kan meer dan 따름",
      p: "뿐 is ook een partikel na een naamwoord (너뿐이야) en zit in -(으)ㄹ 뿐만 아니라 (niet alleen ..., maar ook). 따름 kan dat allemaal niet. Het bestaat alleen in -(으)ㄹ 따름이다.",
      ex: [
        { cn: "내 편은 너뿐이야.", py: "Nae pyeoneun neoppuniya.", nl: "Jij bent de enige die aan mijn kant staat." },
        { cn: "이 제품은 저렴할 뿐만 아니라 품질도 좋다.", py: "I jepumeun jeoryeomhal ppunman anira pumjildo jota.", nl: "Dit product is niet alleen goedkoop, maar ook van goede kwaliteit." }
      ] },
    { h: "Bescheidenheid en gevoel",
      p: "Winnaars en sprekers gebruiken 따름 om hun eigen rol klein te maken: 운이 좋았을 따름입니다. Ook vaste combinaties met een gevoel zijn heel gewoon: 감사할, 놀라울, 안타까울, 송구할 따름입니다. Ze betekenen: ik kan niets anders voelen dan dit.",
      ex: [
        { cn: "운이 좋았을 따름입니다.", py: "Uni joasseul ttareumimnida.", nl: "Ik had alleen maar geluk." },
        { cn: "결과를 보니 그저 놀라울 따름입니다.", py: "Gyeolgwareul boni geujeo nollaul ttareumimnida.", nl: "Als ik het resultaat zie, kan ik alleen maar verbaasd zijn." }
      ] },
    { h: "Register: spreektaal",
      p: "Tegen vrienden of collega's klinkt 따름 te plechtig. Zeg dan -(으)ㄹ 뿐이에요, -(으)ㄹ 뿐이야, of maak de zin eenvoudig met 그냥 en 정말.",
      ex: [
        { cn: "그냥 제 일을 했을 뿐이에요.", py: "Geunyang je ireul haesseul ppunieyo.", nl: "Ik heb gewoon mijn werk gedaan." },
        { cn: "도와줘서 정말 고마워.", py: "Dowajwoseo jeongmal gomawo.", nl: "Echt bedankt voor je hulp." }
      ] }
  ],
  mistakes: [
    { wrong: "저는 제 일을 했는 따름입니다.", right: "저는 제 일을 했을 따름입니다.", why: "따름 neemt altijd -(으)ㄹ. In de verleden tijd wordt dat -었을." },
    { wrong: "그것은 근거 없는 소문 따름이다.", right: "그것은 근거 없는 소문일 따름이다.", why: "Na een naamwoord heb je 이다 nodig: N일 따름이다." },
    { wrong: "이 식당은 맛있을 따름만 아니라 값도 싸요.", right: "이 식당은 맛있을 뿐만 아니라 값도 싸요.", why: "\"Niet alleen ..., maar ook\" bestaat alleen met 뿐: -(으)ㄹ 뿐만 아니라." },
    { wrong: "(tegen een vriend) 도와줘서 고마울 따름이야.", right: "(tegen een vriend) 도와줘서 정말 고마워.", why: "따름 is formeel en plechtig. Tegen een vriend klinkt het vreemd." }
  ],
  vocab: [
    ["-(으)ㄹ 따름이다", "-(eu)l ttareumida", "alleen maar, niets anders dan"], ["그저", "geujeo", "slechts, gewoon"],
    ["맡다", "matda", "op zich nemen, toevertrouwd krijgen"], ["안타깝다", "antakkapda", "spijtig, triest"],
    ["소문", "somun", "gerucht"], ["소감", "sogam", "indruk, dankwoord"],
    ["영광", "yeonggwang", "eer"], ["동료", "dongnyo", "collega"],
    ["묵묵히", "mungmuki", "zwijgend, zonder te klagen"], ["초심", "chosim", "oorspronkelijke motivatie"]
  ],
  dialogue: [
    ["기자", "이번에 큰 상을 받으셨는데요, 소감이 어떠세요?", "Ibeone keun sangeul badeusyeonneundeyo, sogami eotteoseyo?", "U hebt een grote prijs gewonnen. Hoe voelt dat?"],
    ["수상자", "과분한 상을 받게 되어 그저 감사할 따름입니다.", "Gwabunhan sangeul batge doeeo geujeo gamsahal ttareumimnida.", "Ik krijg een prijs die ik niet verdien. Ik kan alleen maar dankbaar zijn."],
    ["기자", "이번 연구에서 가장 큰 역할을 하셨다고 들었습니다.", "Ibeon yeongueseo gajang keun yeokareul hasyeotdago deureotseumnida.", "Ik hoorde dat u de grootste rol speelde in dit onderzoek."],
    ["수상자", "아닙니다. 저는 동료들과 함께 최선을 다했을 따름입니다.", "Animnida. Jeoneun dongnyodeulgwa hamkke choeseoneul dahaesseul ttareumimnida.", "Nee hoor. Ik heb alleen maar samen met mijn collega's mijn best gedaan."],
    ["친구", "축하해! 진짜 대단하다.", "Chukahae! Jinjja daedanhada.", "Gefeliciteerd! Echt geweldig."],
    ["수상자", "고마워. 그냥 운이 좋았을 뿐이야.", "Gomawo. Geunyang uni joasseul ppuniya.", "Dank je. Ik had gewoon geluk."]
  ],
  reading: {
    title: "어느 연구자의 수상 소감",
    lines: [
      { cn: "먼저 이 자리에 설 수 있게 되어 영광일 따름입니다.", py: "Meonjeo i jarie seol su itge doeeo yeonggwangil ttareumimnida.", nl: "Allereerst: dat ik hier mag staan, is voor mij alleen maar een eer." },
      { cn: "이 상은 제 이름으로 받지만, 사실은 많은 분들이 노력한 결과입니다.", py: "I sangeun je ireumeuro batjiman, sasireun maneun bundeuri noryeokan gyeolgwaimnida.", nl: "Ik ontvang deze prijs op mijn naam, maar eigenlijk is hij het resultaat van de inzet van veel mensen." },
      { cn: "지난 십 년 동안 함께 연구해 준 동료들이 없었다면 오늘의 결과도 없었을 것입니다.", py: "Jinan sip nyeon dongan hamkke yeonguhae jun dongnyodeuri eopseotdamyeon oneurui gyeolgwado eopseosseul geosimnida.", nl: "Zonder de collega's die de afgelopen tien jaar met mij onderzoek deden, was er vandaag geen resultaat geweest." },
      { cn: "저는 그들 곁에서 제가 맡은 일을 했을 따름입니다.", py: "Jeoneun geudeul gyeoteseo jega mateun ireul haesseul ttareumimnida.", nl: "Ik heb naast hen alleen maar gedaan wat mij was toevertrouwd." },
      { cn: "연구 도중 포기하고 싶었던 순간도 많았습니다.", py: "Yeongu dojung pogihago sipeotdeon sungando manasseumnida.", nl: "Tijdens het onderzoek waren er ook veel momenten waarop ik wilde opgeven." },
      { cn: "그때마다 묵묵히 응원해 준 가족에게 미안하고 고마울 따름입니다.", py: "Geuttaemada mungmuki eungwonhae jun gajogege mianhago gomaul ttareumimnida.", nl: "Mijn familie steunde me elke keer zonder te klagen. Ik kan me alleen maar schuldig en dankbaar voelen." },
      { cn: "앞으로도 초심을 잃지 않고 연구에 힘쓰겠습니다.", py: "Apeurodo chosimeul ilchi anko yeongue himsseugetseumnida.", nl: "Ik zal me ook in de toekomst voor het onderzoek inzetten, zonder mijn oorspronkelijke motivatie te verliezen." },
      { cn: "감사합니다.", py: "Gamsahamnida.", nl: "Dank u wel." }
    ],
    questions: [
      { type: "mc", q: "Aan wie heeft de spreker de prijs volgens hemzelf vooral te danken?",
        options: ["Aan zijn collega's, met wie hij tien jaar onderzoek deed.", "Aan zichzelf alleen.", "Aan de jury van de prijs.", "Aan zijn studenten."], answer: 0,
        why: ["Goed: 함께 연구해 준 동료들이 없었다면 오늘의 결과도 없었을 것입니다.", "Hij maakt zijn eigen rol juist klein (했을 따름입니다).", "Over de jury zegt hij niets.", "Over studenten staat niets in de tekst."] },
      { type: "mc", q: "Wat zegt de spreker over de moeilijke momenten?",
        options: ["Hij wilde vaak opgeven, en zijn familie steunde hem.", "Hij had nooit twijfels.", "Zijn collega's wilden opgeven.", "Hij is tijdelijk gestopt met het onderzoek."], answer: 0,
        why: ["Goed: 포기하고 싶었던 순간도 많았습니다, en 가족 steunde hem.", "Hij zegt juist dat er veel zulke momenten waren.", "Het gaat over zijn eigen twijfel.", "Over stoppen staat niets in de tekst."] },
      { type: "mc", q: "저는 ... 제가 맡은 일을 했을 따름입니다. Waarom gebruikt de spreker hier 따름?",
        options: ["Om bescheiden zijn eigen rol klein te maken.", "Om te zeggen dat hij het werk niet af heeft.", "Om te zeggen dat hij het werk niet wilde doen.", "Om zijn rol groter te maken dan die van anderen."], answer: 0,
        why: ["Goed: -(으)ㄹ 따름이다 = alleen maar, formeel en bescheiden.", "했을 is verleden tijd. Het werk is gedaan.", "Over onwil zegt 따름 niets.", "Dat is het tegendeel van wat 따름 doet."] }
    ]
  },
  questions: [
    { type: "mc", q: "많은 분들이 도와주셔서 그저 감사___ 따름입니다.",
      options: ["할", "한", "하는", "해서"], answer: 0,
      why: ["Goed: 따름 neemt altijd -(으)ㄹ: 감사할.", "-ㄴ past niet vóór 따름.", "-는 past niet vóór 따름.", "Vóór 따름 staat een vorm op -(으)ㄹ, niet -아서."] },
    { type: "mc", q: "\"Ik heb alleen maar mijn plicht gedaan.\" (formeel)",
      options: ["저는 제 의무를 다했을 따름입니다.", "저는 제 의무를 다했는 따름입니다.", "저는 제 의무를 다한 따름입니다.", "저는 제 의무를 다했던 따름입니다."], answer: 0,
      why: ["Goed: verleden tijd -었을 + 따름.", "Na -었- volgt -을, niet -는.", "따름 neemt -(으)ㄹ, niet -ㄴ.", "-던 past niet vóór 따름. Gebruik -었을."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["그것은 근거 없는 소문 따름이다.", "그것은 근거 없는 소문일 따름이다.", "그것은 근거 없는 소문일 뿐이다.", "그것은 근거 없는 소문에 불과하다."], answer: 0,
      why: ["Goed: na een naamwoord is 이다 nodig: 소문일 따름이다.", "Dit klopt: N일 따름이다.", "Dit klopt: N일 뿐이다.", "Dit klopt: N에 불과하다 = niets meer dan."] },
    { type: "mc", q: "이 식당은 맛있을 ___ 아니라 값도 싸요.",
      options: ["뿐만", "따름만", "따름", "뿐이"], answer: 0,
      why: ["Goed: \"niet alleen ..., maar ook\" is -(으)ㄹ 뿐만 아니라.", "따름 heeft geen vorm met 만 아니라.", "따름 kan niet vóór 아니라.", "De vaste vorm is 뿐만 아니라, met 만."] },
    { type: "mc", q: "Een winnaar in een tv-interview: \"Ik had gewoon geluk.\"",
      options: ["그저 운이 좋았을 따름입니다.", "그저 운이 좋았을 따름이야.", "그저 운이 좋은 따름입니다.", "그저 운이 좋았는 따름입니다."], answer: 0,
      why: ["Goed: -었을 따름 met het formele -ㅂ니다.", "-야 is informeel en past niet bij 따름 in een interview.", "따름 neemt -(으)ㄹ, niet -ㄴ.", "Na -었- volgt -을, niet -는."] },
    { type: "mc", q: "Wat betekent: 결과를 보니 그저 놀라울 따름입니다?",
      options: ["Als ik het resultaat zie, kan ik alleen maar verbaasd zijn.", "Als ik het resultaat zie, ben ik een beetje verbaasd.", "Het resultaat is helemaal niet verrassend.", "Ik zal later verbaasd zijn over het resultaat."], answer: 0,
      why: ["Goed: 따름 = niets anders dan, hier: alleen maar verbaasd.", "따름 maakt het gevoel juist sterk en exclusief, niet zwak.", "Dat is het tegendeel.", "-(으)ㄹ in 따름 wijst niet naar de toekomst."] },
    { type: "mc", q: "내 편은 너___. (Jij bent de enige aan mijn kant.)",
      options: ["뿐이야", "따름이야", "일 따름이야", "만 따름이야"], answer: 0,
      why: ["Goed: na een naamwoord is 뿐 een partikel: 너뿐이야.", "따름 is geen partikel en kan niet direct na 너.", "N일 따름 is formeel en past niet bij deze informele zin.", "만 en 따름 kun je niet combineren."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb alleen maar gedaan wat mij was toevertrouwd.\"",
      tokens: [["저는", "jeoneun"], ["제가 맡은", "jega mateun"], ["일을", "ireul"], ["했을", "haesseul"], ["따름입니다", "ttareumimnida"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Dat is niets meer dan een ongegrond gerucht.\"",
      tokens: [["그것은", "geugeoseun"], ["근거 없는", "geungeo eomneun"], ["소문일", "somunil"], ["따름이다", "ttareumida"]] },
    { type: "fill", q: "사고 소식을 들으니 그저 안타까울 ___입니다. (Nu ik het nieuws over het ongeluk hoor, voel ik alleen maar diepe spijt.)",
      answers: ["따름", "뿐"], hint: "Welk woord betekent \"alleen maar\" na -(으)ㄹ?", why: "안타까울 따름입니다 (formeel, plechtig) of 안타까울 뿐입니다 (neutraler)." },
    { type: "open", q: "Vertaal in formele stijl (-ㅂ니다): \"Dat u mij zo'n grote prijs geeft, is voor mij alleen maar een eer.\"",
      model: ["이렇게 큰 상을 주셔서 영광일 따름입니다.", "이런 큰 상을 받게 되어 그저 영광일 따름입니다.", "큰 상을 주셔서 그저 영광스러울 따름입니다."],
      tip: "Check: N일 따름 (영광일) of -(으)ㄹ 따름 (영광스러울), en het einde -ㅂ니다." },
    { type: "open", q: "Vertaal in spreektaal tegen een vriend: \"Ik heb gewoon mijn best gedaan.\"",
      model: ["그냥 최선을 다했을 뿐이야.", "그냥 열심히 했을 뿐이야.", "난 그냥 최선을 다한 거야."],
      tip: "Check: tegen een vriend -(으)ㄹ 뿐이야 of 그냥, niet het plechtige 따름." }
  ],
  review: [
    { type: "mc", q: "여러분의 따뜻한 응원에 감사___ 따름입니다. (Ik kan alleen maar dankbaar zijn voor jullie warme steun.)",
      options: ["할", "한", "하는", "했는"], answer: 0,
      why: ["Goed: 따름 neemt -(으)ㄹ.", "-ㄴ past niet vóór 따름.", "-는 past niet vóór 따름.", "Na -었- volgt -을, en hier is geen verleden tijd nodig."] },
    { type: "mc", q: "\"Hij is niets meer dan een gewone werknemer.\"",
      options: ["그는 평범한 직원일 따름이다.", "그는 평범한 직원 따름이다.", "그는 평범한 직원인 따름이다.", "그는 평범한 직원이 따름이다."], answer: 0,
      why: ["Goed: N일 따름이다.", "Na een naamwoord is 이다 nodig: 직원일.", "따름 neemt -(으)ㄹ, dus 일, niet 인.", "이 is hier een partikel, geen vorm van 이다."] },
    { type: "mc", q: "In een toespraak: \"Wij hebben alleen maar gedaan wat we moesten doen.\"",
      options: ["저희는 해야 할 일을 했을 따름입니다.", "저희는 해야 할 일을 했을 따름이야.", "저희는 해야 할 일을 하는 따름입니다.", "저희는 해야 할 일을 했던 따름입니다."], answer: 0,
      why: ["Goed: -었을 따름입니다, formeel en bescheiden.", "-야 is informeel en past niet in een toespraak.", "따름 neemt -(으)ㄹ, niet -는.", "-던 past niet vóór 따름."] }
  ]
})
