({
  id: "08", slug: "eulsera", title: "-(으)ㄹ세라", sub: "Uit angst dat ... (literair)",
  canDo: "Je kunt nu in verhalende schrijftaal zeggen wat iemand deed uit angst dat er iets zou gebeuren, met -(으)ㄹ세라, en je zegt hetzelfde in spreektaal met -(으)ㄹ까 봐.",
  guess: {
    q: "\"Uit angst dat de baby wakker zou worden, deed ze de deur zachtjes dicht.\" Welke zin klopt, denk je?",
    options: ["아기가 깰세라 그녀는 살며시 문을 닫았다.", "아기가 깬세라 그녀는 살며시 문을 닫았다.", "아기가 깨을세라 그녀는 살며시 문을 닫았다.", "아기가 깨세라 그녀는 살며시 문을 닫았다."], answer: 0,
    why: ["Goed: 깨- eindigt op een klinker, dus -ㄹ세라: 깰세라.", "-ㄴ wijst naar iets wat al gebeurd is. De vrees gaat over iets wat nog kan gebeuren: -ㄹ.", "Na een klinker komt -ㄹ세라, niet -을세라.", "Er ontbreekt de ㄹ: 깨 + ㄹ세라 = 깰세라."]
  },
  problem: "Je vertelt dat iemand iets deed om te voorkomen dat er iets ergs zou gebeuren. In het Nederlands: \"uit angst dat ...\" of \"voor het geval dat ...\". In gesprekken zeg je -(으)ㄹ까 봐. In romans, essays en verhalen kom je de literaire vorm -(으)ㄹ세라 tegen.",
  pattern: [
    { l: "wat je vreest", v: "아기가 깨", c: 1 }, { l: "ㄹ세라", v: "ㄹ세라", c: 2, key: true },
    { l: "wat je doet om het te voorkomen", v: "조용히 문을 닫았다", c: 4 }
  ],
  patternCap: "Wat je vreest + -(으)ㄹ세라 + handeling om het te voorkomen (vaak met 행여 of 혹시). Spreektaal: -(으)ㄹ까 봐(서)",
  rules: [
    "Na een klinker of ㄹ: -ㄹ세라 (깰세라, 볼세라, 울세라). Na een medeklinker: -을세라 (늦을세라, 잊을세라).",
    "Ook bijvoeglijke werkwoorden: 춥다 wordt 추울세라, 식다 wordt 식을세라.",
    "Vóór -(으)ㄹ세라 staat geen tijd: geen -았/었-. Het gevreesde is altijd iets wat nog kan gebeuren.",
    "Na -(으)ㄹ세라 volgt een handeling om het te voorkomen, meestal in het verleden. Er volgt geen bevel of voorstel.",
    "Register: literair. Je ziet het vaak met 행여(나) of 혹시(나) ervoor. Vaste uitdrukking: 질세라 (om niet onder te doen)."
  ],
  pitfall: "-(으)ㄹ세라 is literair. In een gesprek klinkt het ouderwets of plechtig. Zeg dan -(으)ㄹ까 봐. Wil je alleen zeggen dat je je zorgen maakt, zonder handeling erna, gebruik dan ook -(으)ㄹ까 봐 걱정이다.",
  examples: [
    { cn: "아기가 깰세라 엄마는 조용히 방문을 닫았다.", py: "Agiga kkaelsera eommaneun joyonghi bangmuneul dadatda.", nl: "Uit angst dat de baby wakker zou worden, deed de moeder de kamerdeur zachtjes dicht." },
    { cn: "누가 볼세라 그는 편지를 얼른 주머니에 넣었다.", py: "Nuga bolsera geuneun pyeonjireul eolleun jumeonie neoeotda.", nl: "Uit angst dat iemand het zou zien, stopte hij de brief snel in zijn zak." },
    { cn: "행여 늦을세라 그녀는 새벽부터 서둘러 집을 나섰다.", py: "Haengyeo neujeulsera geunyeoneun saebyeokbuteo seodulleo jibeul naseotda.", nl: "Bang om te laat te komen, vertrok ze al bij het ochtendgloren haastig van huis." },
    { cn: "형이 사과를 하나 집자 동생도 질세라 두 개를 집었다.", py: "Hyeongi sagwareul hana jipja dongsaengdo jilsera du gaereul jibeotda.", nl: "Toen de oudere broer een appel pakte, pakte het broertje er, om niet onder te doen, twee." }
  ],
  nuance: [
    { h: "-(으)ㄹ세라 of -(으)ㄹ까 봐?",
      p: "De betekenis is bijna gelijk: uit angst dat iets gebeurt. -(으)ㄹ까 봐 is de gewone vorm in spreektaal en ook in neutrale schrijftaal. Het kan ook gevolgd worden door 걱정이다 of 걱정하다. -(으)ㄹ세라 is literair en wordt bijna altijd gevolgd door een handeling: wat iemand deed om het te voorkomen.",
      ex: [
        { cn: "아기가 깰까 봐 조용히 문을 닫았어요.", py: "Agiga kkaelkka bwa joyonghi muneul dadasseoyo.", nl: "Ik was bang dat de baby wakker werd, dus ik deed de deur zachtjes dicht. (gesprek)" },
        { cn: "아기가 깰세라 살며시 문을 닫았다.", py: "Agiga kkaelsera salmyeosi muneul dadatda.", nl: "Uit angst dat de baby zou ontwaken, sloot zij de deur behoedzaam. (verhaal)" },
        { cn: "시험에 떨어질까 봐 걱정이에요.", py: "Siheome tteoreojilkka bwa geokjeongieyo.", nl: "Ik ben bang dat ik zak voor het examen. (alleen een zorg)" }
      ] },
    { h: "Vrees of doel: -(으)ㄹ세라 en -지 않도록",
      p: "-지 않도록 betekent \"zodat ... niet\". Het noemt een doel, zonder gevoel van angst. Daarom kan er wel een verzoek of bevel na volgen. Na -(으)ㄹ세라 en -(으)ㄹ까 봐 kan dat niet.",
      ex: [
        { cn: "아이가 깨지 않도록 조용히 하세요.", py: "Aiga kkaeji antorok joyonghi haseyo.", nl: "Doe zachtjes, zodat het kind niet wakker wordt." }
      ] },
    { h: "Vaste vormen: 질세라 en 행여",
      p: "질세라 komt van 지다 (verliezen): \"bang om te verliezen\", dus \"om niet onder te doen\". Ook 뒤질세라 (om niet achter te blijven) is vast. 행여(나) en 혹시(나) betekenen \"misschien, voor het geval dat\". Ze staan vaak vóór -(으)ㄹ세라 en maken de angst sterker.",
      ex: [
        { cn: "다른 회사들도 뒤질세라 비슷한 제품을 내놓았다.", py: "Dareun hoesadeuldo dwijilsera biseutan jepumeul naenoatda.", nl: "Om niet achter te blijven brachten ook andere bedrijven een vergelijkbaar product uit." }
      ] }
  ],
  mistakes: [
    { wrong: "아기가 깨을세라 조용히 걸었다.", right: "아기가 깰세라 조용히 걸었다.", why: "Na een klinker komt -ㄹ세라: 깨 + ㄹ세라 = 깰세라." },
    { wrong: "아이가 춥을세라 옷을 입혀 주었다.", right: "아이가 추울세라 옷을 입혀 주었다.", why: "춥다 is een ㅂ-stam: ㅂ wordt 우, dus 추울세라." },
    { wrong: "누가 볼세라 빨리 숨기세요.", right: "누가 보지 않도록 빨리 숨기세요.", why: "Na -(으)ㄹ세라 komt geen bevel. Voor een verzoek gebruik je -지 않도록." },
    { wrong: "내일 늦을세라 걱정이에요.", right: "내일 늦을까 봐 걱정이에요.", why: "In een gesprek, en voor alleen een zorg, zeg je -(으)ㄹ까 봐 걱정이다." }
  ],
  vocab: [
    ["-(으)ㄹ세라", "-(eu)lsera", "uit angst dat (literair)"], ["행여", "haengyeo", "misschien, voor het geval dat"],
    ["들키다", "deulkida", "betrapt worden, ontdekt worden"], ["얼른", "eolleun", "snel, vlug"],
    ["살며시", "salmyeosi", "zachtjes, behoedzaam"], ["식다", "sikda", "afkoelen, koud worden"],
    ["놓아두다", "noaduda", "neerleggen, klaarzetten"], ["숨기다", "sumgida", "verstoppen, verbergen"],
    ["사춘기", "sachungi", "puberteit"], ["온기", "ongi", "warmte"]
  ],
  dialogue: [
    ["A", "이 소설에 '아기가 깰세라 살며시 문을 닫았다'라는 문장이 있는데, '깰세라'가 무슨 뜻이에요?", "I soseore 'agiga kkaelsera salmyeosi muneul dadatda'raneun munjangi inneunde, 'kkaelsera'ga museun tteusieyo?", "In deze roman staat de zin 'agiga kkaelsera salmyeosi muneul dadatda'. Wat betekent 'kkaelsera'?"],
    ["B", "'깰까 봐'랑 비슷해요. 아기가 깰까 봐 조용히 닫았다는 뜻이에요.", "'Kkaelkka bwa'rang biseutaeyo. Agiga kkaelkka bwa joyonghi dadatdaneun tteusieyo.", "Het lijkt op 'kkaelkka bwa'. Het betekent dat ze de deur zachtjes dichtdeed, uit angst dat de baby wakker werd."],
    ["A", "그럼 말할 때도 '깰세라'라고 해요?", "Geureom malhal ttaedo 'kkaelsera'rago haeyo?", "Zeg je bij het praten dan ook 'kkaelsera'?"],
    ["B", "아니요, 그건 좀 문어적이에요. 말할 때는 보통 '깰까 봐'라고 해요.", "Aniyo, geugeon jom muneojeogieyo. Malhal ttaeneun botong 'kkaelkka bwa'rago haeyo.", "Nee, dat is nogal schrijftaal. Als je praat, zeg je meestal 'kkaelkka bwa'."],
    ["A", "아, 그래서 소설이나 수필에서 자주 보이는군요.", "A, geuraeseo soseorina supireseo jaju boineungunyo.", "Ah, daarom zie je het vaak in romans en essays."],
    ["B", "맞아요. '행여 들킬세라' 같은 표현도 자주 나와요.", "Majayo. 'Haengyeo deulkilsera' gateun pyohyeondo jaju nawayo.", "Precies. Uitdrukkingen als 'haengyeo deulkilsera' kom je ook vaak tegen."]
  ],
  reading: {
    title: "할머니의 도시락",
    lines: [
      { cn: "어린 시절 할머니는 매일 아침 내 도시락을 싸 주셨다.", py: "Eorin sijeol halmeonineun maeil achim nae dosirageul ssa jusyeotda.", nl: "Toen ik klein was, maakte mijn oma elke ochtend mijn lunchtrommel klaar." },
      { cn: "반찬이 식을세라 할머니는 도시락을 수건으로 꼭 싸셨다.", py: "Banchani sigeulsera halmeonineun dosirageul sugeoneuro kkok ssasyeotda.", nl: "Uit angst dat het eten koud zou worden, wikkelde oma de trommel stevig in een handdoek." },
      { cn: "그리고 내가 행여 잊을세라 현관 앞에 놓아두셨다.", py: "Geurigo naega haengyeo ijeulsera hyeongwan ape noadusyeotda.", nl: "En voor het geval ik hem zou vergeten, zette ze hem bij de voordeur klaar." },
      { cn: "사춘기가 된 나는 친구들에게 들킬세라 도시락을 가방 깊숙이 숨기곤 했다.", py: "Sachungiga doen naneun chingudeurege deulkilsera dosirageul gabang gipsugi sumgigon haetda.", nl: "Toen ik in de puberteit kwam, verstopte ik de trommel diep in mijn tas, bang dat mijn vrienden hem zouden zien." },
      { cn: "할머니의 낡은 도시락이 부끄러웠기 때문이다.", py: "Halmeoniui nalgeun dosiragi bukkeureowotgi ttaemunida.", nl: "Ik schaamde me namelijk voor oma's oude lunchtrommel." },
      { cn: "어느 겨울날, 할머니는 내가 추울세라 장갑까지 도시락 옆에 넣어 두셨다.", py: "Eoneu gyeoullal, halmeonineun naega chuulsera janggapkkaji dosirak yeope neoeo dusyeotda.", nl: "Op een winterdag had oma, uit angst dat ik het koud zou krijgen, zelfs handschoenen naast de trommel gelegd." },
      { cn: "그날 나는 처음으로 친구들 앞에서 도시락을 꺼내 놓고 먹었다.", py: "Geunal naneun cheoeumeuro chingudeul apeseo dosirageul kkeonae noko meogeotda.", nl: "Die dag haalde ik voor het eerst mijn trommel tevoorschijn en at ik waar mijn vrienden bij waren." },
      { cn: "이제 할머니는 계시지 않지만, 나는 지금도 그 도시락의 온기를 기억한다.", py: "Ije halmeonineun gyesiji anchiman, naneun jigeumdo geu dosiragui ongireul gieokanda.", nl: "Oma is er nu niet meer, maar ik herinner me nog steeds de warmte van die lunchtrommel." }
    ],
    questions: [
      { type: "mc", q: "Waarom wikkelde oma de lunchtrommel in een handdoek?",
        options: ["Zodat het eten niet koud zou worden.", "Zodat de vrienden hem niet zouden zien.", "Omdat de trommel kapot was.", "Omdat het kind hem vergeten was."], answer: 0,
        why: ["Goed: 반찬이 식을세라 ... 수건으로 꼭 싸셨다.", "Het verstoppen deed het kind zelf, in de tas.", "De trommel was oud (낡은), maar niet kapot.", "Oma zette hem klaar zodat het kind hem níet zou vergeten."] },
      { type: "mc", q: "Waarom verstopte de schrijver de trommel in de puberteit?",
        options: ["Hij schaamde zich voor de oude trommel.", "Hij wilde het eten niet delen.", "Oma had dat gevraagd.", "De trommel was te groot voor zijn tas."], answer: 0,
        why: ["Goed: 할머니의 낡은 도시락이 부끄러웠기 때문이다.", "Over delen staat niets in de tekst.", "Oma vroeg niets: zij maakte alleen de trommel klaar.", "Over de grootte staat niets in de tekst."] },
      { type: "mc", q: "친구들에게 들킬세라 도시락을 숨기곤 했다. Wat betekent 들킬세라 hier?",
        options: ["Uit angst dat zijn vrienden het zouden ontdekken.", "Zodat zijn vrienden het zouden ontdekken.", "Omdat zijn vrienden het al ontdekt hadden.", "Hoewel zijn vrienden het ontdekt hadden."], answer: 0,
        why: ["Goed: -(으)ㄹ세라 = uit angst dat iets gebeurt. Het verstoppen moet dat voorkomen.", "-(으)ㄹ세라 is geen doel: hij wilde het juist níet.", "-(으)ㄹ세라 gaat over iets wat nog kan gebeuren, niet over het verleden.", "-(으)ㄹ세라 geeft geen tegenstelling."] }
    ]
  },
  questions: [
    { type: "mc", q: "행여 기차를 ___ 일찍 역에 갔다. (Uit angst dat hij de trein zou missen, ging hij vroeg naar het station.)",
      options: ["놓칠세라", "놓친세라", "놓치을세라", "놓치세라"], answer: 0,
      why: ["Goed: 놓치- eindigt op een klinker, dus 놓칠세라.", "-ㄴ wijst naar iets wat al gebeurd is. De vrees gaat over de toekomst.", "Na een klinker komt -ㄹ세라, niet -을세라.", "Er ontbreekt de ㄹ: 놓치 + ㄹ세라 = 놓칠세라."] },
    { type: "mc", q: "약속을 ___ 그는 수첩에 적어 두었다. (Uit angst dat hij de afspraak zou vergeten, schreef hij hem op.)",
      options: ["잊을세라", "잊세라", "잊는세라", "잊으세라"], answer: 0,
      why: ["Goed: 잊- eindigt op een medeklinker, dus -을세라.", "Na een medeklinker is 을 nodig: 잊을세라.", "-는 past niet vóór 세라. De vorm is -(으)ㄹ세라.", "Er ontbreekt de ㄹ: 잊 + 을세라."] },
    { type: "mc", q: "누가 들을세라 그는 목소리를 낮추었다. Wat betekent dit?",
      options: ["Uit angst dat iemand het zou horen, dempte hij zijn stem.", "Zodat iemand het zou horen, dempte hij zijn stem.", "Omdat iemand het had gehoord, dempte hij zijn stem.", "Hoewel iemand het hoorde, dempte hij zijn stem."], answer: 0,
      why: ["Goed: -(으)ㄹ세라 = uit angst dat. Zacht praten moet het voorkomen.", "-(으)ㄹ세라 is geen doel: hij wilde het juist níet.", "Het gevreesde is nog niet gebeurd.", "-(으)ㄹ세라 geeft geen tegenstelling."] },
    { type: "mc", q: "Je zegt tegen een vriend: \"Ik was bang dat ik te laat zou komen, dus ik nam een taxi.\" Wat is het natuurlijkst?",
      options: ["늦을까 봐 택시 탔어.", "늦을세라 택시 탔어.", "늦을까 봐 택시 타자.", "늦은까 봐 택시 탔어."], answer: 0,
      why: ["Goed: in een gesprek zeg je -(으)ㄹ까 봐.", "-(으)ㄹ세라 is literair. Tegen een vriend klinkt het vreemd.", "Na -(으)ㄹ까 봐 volgt geen voorstel, en de taxi is al genomen.", "Voor 까 봐 staat -(으)ㄹ, niet -(으)ㄴ."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["늦을세라 서두르세요.", "늦을까 봐 서둘렀어요.", "행여 늦을세라 서둘러 집을 나섰다.", "늦지 않도록 서두르세요."], answer: 0,
      why: ["Goed: na -(으)ㄹ세라 komt geen bevel. Zeg 늦지 않도록 서두르세요.", "Dit klopt: spreektaal, met een handeling in het verleden.", "Dit klopt: literair, met een handeling in het verleden.", "Dit klopt: -지 않도록 kan wel een verzoek krijgen."] },
    { type: "mc", q: "친구가 큰 소리로 노래를 부르자 나도 ___ 더 큰 소리로 불렀다. (Om niet onder te doen zong ik nog harder.)",
      options: ["질세라", "이길세라", "진세라", "질까세라"], answer: 0,
      why: ["Goed: 질세라 = bang om te verliezen, dus \"om niet onder te doen\".", "이기다 is winnen. Bang om te winnen past hier niet.", "-ㄴ wijst naar het verleden. De vorm is -ㄹ세라.", "-ㄹ까 en -세라 kun je niet combineren."] },
    { type: "mc", q: "\"Ik ben bang dat het examen moeilijk wordt.\" (alleen een zorg, in een gesprek)",
      options: ["시험이 어려울까 봐 걱정이에요.", "시험이 어려울세라 걱정이에요.", "시험이 어렵을까 봐 걱정이에요.", "시험이 어려운까 봐 걱정이에요."], answer: 0,
      why: ["Goed: voor een zorg in een gesprek zeg je -(으)ㄹ까 봐 걱정이다.", "-(으)ㄹ세라 is literair en wordt gevolgd door een handeling, niet door 걱정이다.", "어렵다 is een ㅂ-stam: 어려울까 봐.", "Voor 까 봐 staat -(으)ㄹ, niet -(으)ㄴ."] },
    { type: "fill", q: "아기가 ___ 엄마는 텔레비전 소리를 줄였다. (Uit angst dat de baby wakker zou worden (깨다), zette de moeder de tv zachter.)",
      answers: ["깰세라"], hint: "깨- eindigt op een klinker. Welke vorm van -(으)ㄹ세라 komt erachter?",
      why: "깨 + -ㄹ세라 = 깰세라. Daarna volgt de handeling om het te voorkomen." },
    { type: "order", q: "Zet in de goede volgorde: \"Uit angst dat iemand het zou zien, verstopte hij de brief snel.\"",
      tokens: [["누가", "nuga"], ["볼세라", "bolsera"], ["편지를", "pyeonjireul"], ["얼른 숨겼다", "eolleun sumgyeotda"]],
      alt: ["편지를 누가 볼세라 얼른 숨겼다"] },
    { type: "order", q: "Zet in de goede volgorde: \"Uit angst dat het kind het koud zou krijgen, legde ze er een deken over.\"",
      tokens: [["아이가", "aiga"], ["추울세라", "chuulsera"], ["이불을", "ibureul"], ["덮어 주었다", "deopeo jueotda"]] },
    { type: "open", q: "Vertaal (verhalend, -다): \"Uit angst dat ze haar droom zou vergeten, schreef ze hem meteen op.\"",
      model: ["꿈을 잊을세라 그녀는 바로 공책에 적었다.", "그녀는 꿈을 잊을세라 곧바로 적어 두었다.", "행여 꿈을 잊을세라 그녀는 바로 적었다."],
      tip: "Check: 잊- + -을세라 (na een medeklinker), geen tijd vóór 세라, en een handeling in het verleden erna." },
    { type: "open", q: "Zeg dit in spreektaal tegen een vriend: 행여 들킬세라 그는 살금살금 방을 나왔다.",
      model: ["들킬까 봐 살금살금 방에서 나왔대.", "그 사람 들킬까 봐 몰래 방에서 나왔어요.", "혹시 들킬까 봐 조용히 방을 나왔어."],
      tip: "Check: -(으)ㄹ까 봐 in plaats van -(으)ㄹ세라, en een spreektaaleinde (-어, -어요)." }
  ],
  review: [
    { type: "mc", q: "아이가 길을 ___ 할머니는 지도를 그려 주셨다. (Uit angst dat het kind zou verdwalen ...)",
      options: ["잃을세라", "잃세라", "잃는세라", "잃은세라"], answer: 0,
      why: ["Goed: 잃- eindigt op een medeklinker, dus -을세라.", "Na een medeklinker is 을 nodig: 잃을세라.", "-는 past niet vóór 세라.", "-은 wijst naar het verleden. De vrees gaat over iets wat nog kan gebeuren."] },
    { type: "mc", q: "눈물을 들킬세라 그녀는 고개를 돌렸다. Wat betekent dit?",
      options: ["Uit angst dat men haar tranen zou zien, draaide ze haar hoofd weg.", "Zodat men haar tranen zou zien, draaide ze haar hoofd weg.", "Omdat men haar tranen had gezien, draaide ze haar hoofd weg.", "Hoewel men haar tranen zag, draaide ze haar hoofd weg."], answer: 0,
      why: ["Goed: -(으)ㄹ세라 = uit angst dat. Wegkijken moet het voorkomen.", "-(으)ㄹ세라 is geen doel: ze wilde het juist níet.", "Het gevreesde is nog niet gebeurd.", "-(으)ㄹ세라 geeft geen tegenstelling."] },
    { type: "mc", q: "\"Ik was bang dat het zou gaan regenen, dus ik heb een paraplu meegenomen.\" (gesprek)",
      options: ["비가 올까 봐 우산을 가져왔어요.", "비가 올까 봐 우산을 가져오세요.", "비가 온까 봐 우산을 가져왔어요.", "비가 오을까 봐 우산을 가져왔어요."], answer: 0,
      why: ["Goed: -(으)ㄹ까 봐 met een handeling in het verleden.", "Na -(으)ㄹ까 봐 volgt geen bevel of verzoek.", "Voor 까 봐 staat -(으)ㄹ, niet -(으)ㄴ.", "Na een klinker komt -ㄹ까 봐, niet -을까 봐."] }
  ]
})
