({
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
  pitfall: "Gebruik geen ander onderwerp in het tweede deel. Zeg niet 내가 공부하다가 친구가 전화했어요, maar 공부하는데 친구가 전화했어요.",
  examples: [
    { cn: "텔레비전을 보다가 잠이 들었어요.", py: "Tellebijeoneul bodaga jami deureosseoyo.", nl: "Ik viel in slaap terwijl ik tv keek." },
    { cn: "집에 가다가 친구를 만났어요.", py: "Jibe gadaga chingureul mannasseoyo.", nl: "Op weg naar huis kwam ik een vriend tegen." },
    { cn: "밥을 먹다가 전화를 받았어요.", py: "Babeul meokdaga jeonhwareul badasseoyo.", nl: "Ik was aan het eten, en toen nam ik de telefoon op." },
    { cn: "창문을 열었다가 추워서 닫았어요.", py: "Changmuneul yeoreotdaga chuwoseo dadasseoyo.", nl: "Ik deed het raam open, maar deed het weer dicht omdat het koud was." }
  ],
  nuance: [
    { h: "-다가 of -았/었다가?",
      p: "Eén lettergreep verandert het beeld. 가다가 betekent: onderweg, je was er nog niet. 갔다가 betekent: je was er al, en daarna gebeurde er iets. Met -았/었다가 maak je vaak een handeling ongedaan: aandoen en weer uitdoen, openen en weer sluiten.",
      ex: [
        { cn: "도서관에 가다가 친구를 만났어요.", py: "Doseogwane gadaga chingureul mannasseoyo.", nl: "Op weg naar de bibliotheek kwam ik een vriend tegen." },
        { cn: "도서관에 갔다가 친구를 만났어요.", py: "Doseogwane gatdaga chingureul mannasseoyo.", nl: "Ik was naar de bibliotheek gegaan, en daar kwam ik een vriend tegen." }
      ] },
    { h: "-다가 of -(으)면서?",
      p: "Met -(으)면서 doe je twee dingen tegelijk, en allebei gaan ze door. Met -다가 stopt de eerste handeling of slaat om in iets anders. Muziek luisteren en studeren tegelijk is dus -(으)면서. Muziek luisteren en dan in slaap vallen is -다가.",
      ex: [
        { cn: "음악을 들으면서 공부해요.", py: "Eumageul deureumyeonseo gongbuhaeyo.", nl: "Ik studeer terwijl ik naar muziek luister." },
        { cn: "음악을 듣다가 잠이 들었어요.", py: "Eumageul deutdaga jami deureosseoyo.", nl: "Ik luisterde naar muziek en viel toen in slaap." }
      ] },
    { h: "-다가 als oorzaak van een ongelukje",
      p: "Vaak volgt na -다가 een vervelend gevolg: je raakte gewond of er ging iets mis tijdens de handeling. Dan betekent -다가 bijna \"doordat ik aan het ... was\". Anders dan bij -는 바람에 blijft het onderwerp hetzelfde.",
      ex: [
        { cn: "뛰어가다가 넘어졌어요.", py: "Ttwieogadaga neomeojyeosseoyo.", nl: "Ik viel terwijl ik aan het rennen was." }
      ] },
    { h: "Spreektaal: -다 in plaats van -다가",
      p: "In spreektaal valt 가 vaak weg: 집에 가다 친구를 만났어요. De betekenis blijft hetzelfde. In geschreven tekst schrijf je meestal de volle vorm -다가."
    }
  ],
  mistakes: [
    { wrong: "텔레비전을 봐다가 잠이 들었어요.", right: "텔레비전을 보다가 잠이 들었어요.", why: "다가 komt direct na de stam, zonder 아/어." },
    { wrong: "공부하다가 친구가 전화했어요.", right: "공부하는데 친구가 전화했어요.", why: "Met -다가 hebben beide delen hetzelfde onderwerp. Belt iemand anders, gebruik dan -는데." },
    { wrong: "도서관에 가다가 책을 빌렸어요.", right: "도서관에 갔다가 책을 빌렸어요.", why: "Je leent boeken ín de bibliotheek. Je was er dus al: -았/었다가." },
    { wrong: "음악을 듣다가 공부해요.", right: "음악을 들으면서 공부해요.", why: "Je doet allebei tegelijk. Daarvoor gebruik je -(으)면서, niet -다가." }
  ],
  vocab: [
    ["-다가", "-daga", "terwijl ... (en toen), halverwege"], ["잠이 들다", "jami deulda", "in slaap vallen"], ["베다", "beda", "snijden (in)"],
    ["그만두다", "geumanduda", "ophouden, stoppen met"], ["산책하다", "sanchaekada", "wandelen"], ["빌리다", "billida", "lenen, huren"],
    ["발견하다", "balgyeonhada", "ontdekken"], ["그치다", "geuchida", "ophouden (regen)"], ["우연히", "uyeonhi", "toevallig"],
    ["계획", "gyehoek", "plan"]
  ],
  dialogue: [
    ["A", "손이 왜 그래요?", "Soni wae geuraeyo?", "Wat is er met je hand?"],
    ["B", "요리하다가 손을 베었어요.", "Yorihadaga soneul beeosseoyo.", "Ik sneed me in mijn hand tijdens het koken."],
    ["A", "많이 아파요?", "Mani apayo?", "Doet het erg pijn?"],
    ["B", "네, 조금 아파요. 그래서 요리를 하다가 그만뒀어요.", "Ne, jogeum apayo. Geuraeseo yorireul hadaga geumandwosseoyo.", "Ja, een beetje. Daarom ben ik halverwege met koken gestopt."],
    ["A", "그럼 오늘은 밖에서 먹어요.", "Geureom oneureun bakkeseo meogeoyo.", "Laten we vandaag dan buiten eten."]
  ],
  reading: {
    title: "계획 없는 주말",
    lines: [
      { cn: "지난 주말에 날씨가 좋아서 한강 공원에 산책하러 갔다.", py: "Jinan jumare nalssiga joaseo Hangang gongwone sanchaekareo gatda.", nl: "Afgelopen weekend was het mooi weer, dus ging ik wandelen in het Hangang-park." },
      { cn: "강을 따라 걷다가 자전거를 빌려 주는 곳을 발견했다.", py: "Gangeul ttara geotdaga jajeongeoreul billyeo juneun goseul balgyeonhaetda.", nl: "Terwijl ik langs de rivier liep, ontdekte ik een plek waar je fietsen kunt huren." },
      { cn: "오랜만에 자전거를 타다가 갑자기 비가 와서 편의점으로 들어갔다.", py: "Oraenmane jajeongeoreul tadaga gapjagi biga waseo pyeonuijeomeuro deureogatda.", nl: "Ik fietste voor het eerst in lange tijd, maar het begon plotseling te regenen, dus ging ik een supermarktje in." },
      { cn: "편의점에서 우산을 살까 하다가 비가 금방 그쳐서 그냥 나왔다.", py: "Pyeonuijeomeseo usaneul salkka hadaga biga geumbang geuchyeoseo geunyang nawatda.", nl: "Ik dacht erover een paraplu te kopen, maar de regen hield snel op, dus ging ik gewoon weer naar buiten." },
      { cn: "다시 자전거를 타고 가다가 대학교 때 친구를 우연히 만났다.", py: "Dasi jajeongeoreul tago gadaga daehakgyo ttae chingureul uyeonhi mannatda.", nl: "Weer op de fiets kwam ik toevallig een vriend uit mijn studietijd tegen." },
      { cn: "우리는 카페에 갔다가 같이 저녁도 먹었다.", py: "Urineun kapee gatdaga gachi jeonyeokdo meogeotda.", nl: "We gingen naar een café en aten daarna ook samen." },
      { cn: "집에 오다가 오늘 하루를 생각해 보니 계획한 것은 하나도 없었다.", py: "Jibe odaga oneul harureul saenggakae boni gyehoekan geoseun hanado eopseotda.", nl: "Op weg naar huis dacht ik aan de dag terug: niets ervan was gepland." },
      { cn: "그래도 계획이 없어서 더 즐거운 하루였다.", py: "Geuraedo gyehoegi eopseoseo deo jeulgeoun haruyeotda.", nl: "Toch was het juist zonder plan een leukere dag." }
    ],
    questions: [
      { type: "mc", q: "Waarom ging de schrijver een supermarktje in?",
        options: ["Het begon plotseling te regenen.", "Hij wilde een fiets huren.", "Hij had honger.", "Hij had daar afgesproken met een vriend."], answer: 0,
        why: ["Goed: 갑자기 비가 와서 편의점으로 들어갔다.", "De fietsen huurde hij langs de rivier, niet in de winkel.", "Over honger staat niets in de tekst.", "De vriend kwam hij later toevallig tegen: 우연히."] },
      { type: "mc", q: "Wie kwam de schrijver tegen?",
        options: ["Een vriend uit zijn studietijd.", "Een collega van zijn werk.", "De eigenaar van de fietsenverhuur.", "Een vriend met wie hij had afgesproken."], answer: 0,
        why: ["Goed: 대학교 때 친구를 우연히 만났다.", "De tekst noemt 대학교 때 친구, geen collega.", "Over de eigenaar staat niets in de tekst.", "우연히 betekent toevallig: er was geen afspraak."] },
      { type: "mc", q: "우리는 카페에 갔다가 같이 저녁도 먹었다. Wat laat 갔다가 zien?",
        options: ["Het café-bezoek was af, daarna gingen ze eten.", "Ze aten onderweg naar het café.", "Ze gingen tegelijk naar het café en aten.", "Ze gingen uiteindelijk niet naar het café."], answer: 0,
        why: ["Goed: -았/었다가 = handeling 1 is af, dan komt iets anders.", "Onderweg zou 가다가 zijn, zonder 았.", "Tegelijk zou -(으)면서 zijn.", "갔다가 zegt juist dat ze er geweest zijn."] }
    ]
  },
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
    { type: "mc", q: "도서관에 ___ 책을 빌려 왔어요. (Ik ben naar de bibliotheek gegaan en heb een boek geleend.)",
      options: ["갔다가", "가다가", "가면서", "가는데"], answer: 0,
      why: ["Goed: je was er al, dus -았/었다가.", "가다가 betekent onderweg; daar leen je geen boek.", "-(으)면서 betekent tegelijk; je leent niet tijdens het lopen.", "-는데 geeft achtergrond, maar je was er dan nog niet."] },
    { type: "mc", q: "음악을 ___ 공부해요. (Ik studeer met muziek aan.)",
      options: ["들으면서", "듣다가", "들었다가", "들다가"], answer: 0,
      why: ["Goed: twee dingen tegelijk = -(으)면서.", "-다가 betekent dat het luisteren stopt; hier gaat het door.", "-았/었다가 betekent dat het luisteren al af is.", "들다가 is de verkeerde stam; bovendien gaat het hier om tegelijk."] },
    { type: "mc", q: "옷을 입었다가 벗었어요. Wat gebeurde er?",
      options: ["Ik trok de kleren aan en daarna weer uit.", "Ik trok de kleren uit terwijl ik ze aantrok.", "Ik trok de kleren aan en hield ze aan.", "Ik wilde ze aantrekken, maar deed het niet."], answer: 0,
      why: ["Goed: -았/었다가 = handeling 1 is af, daarna het tegendeel.", "Dat kan niet: 입었 zegt dat het aantrekken al af was.", "벗었어요 betekent uittrekken.", "입었 zegt dat je ze echt hebt aangetrokken."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik deed mijn jas aan, maar deed hem weer uit omdat het warm was.\"",
      tokens: [["코트를", "koteureul"], ["입었다가", "ibeotdaga"], ["더워서", "deowoseo"], ["다시 벗었어요", "dasi beoseosseoyo"]] },
    { type: "fill", q: "숙제를 하___ 잠이 들었어요. (Ik viel in slaap terwijl ik huiswerk maakte.)", answers: ["다가", "다"],
      hint: "Welke uitgang betekent \"midden in een handeling\"?", why: "하 + 다가: het huiswerk was nog bezig toen je in slaap viel. In spreektaal kan ook 하다." },
    { type: "open", q: "Vertaal: \"Op weg naar school kwam ik mijn leraar tegen.\"",
      model: ["학교에 가다가 선생님을 만났어요.", "학교에 가다가 우리 선생님을 만났어요.", "학교에 걸어가다가 선생님을 봤어요."],
      tip: "Check: staat 다가 direct na de stam 가, en ben jij het onderwerp van beide delen?" },
    { type: "open", q: "Vertaal: \"Ik ging de winkel in, maar kwam er meteen weer uit.\"",
      model: ["가게에 들어갔다가 바로 나왔어요.", "가게에 들어갔다가 금방 다시 나왔어요."],
      tip: "Check: het naar binnen gaan was af, dus 들어갔 + 다가, niet 들어가다가." }
  ],
  review: [
    { type: "mc", q: "운전을 ___ 졸려서 잠깐 쉬었어요. (Tijdens het rijden werd ik slaperig.)",
      options: ["하다가", "해다가", "하는다가", "한다가"], answer: 0,
      why: ["Goed: stam 하 + 다가.", "Er komt geen 아/어 vóór 다가; 해 is 하 + 여.", "Er komt geen 는 vóór 다가.", "Er komt geen ㄴ vóór 다가."] },
    { type: "mc", q: "은행에 ___ 문이 닫혀서 그냥 왔어요. (Ik ging naar de bank, maar die was dicht.)",
      options: ["갔다가", "가았다가", "갔는다가", "간다가"], answer: 0,
      why: ["Goed: je was er al aangekomen, dus 갔 + 다가.", "가 + 았 wordt samen 갔.", "Er komt geen 는 vóór 다가.", "Er komt geen ㄴ vóór 다가."] },
    { type: "mc", q: "불을 ___ 다시 껐어요. (Ik deed het licht aan, en daarna weer uit.)",
      options: ["켰다가", "켜다가", "켜는다가", "켠다가"], answer: 0,
      why: ["Goed: het aandoen was af, daarna het tegendeel: 켰다가.", "켜다가 betekent midden in het aandoen; het licht was echt aan.", "Er komt geen 는 vóór 다가.", "Er komt geen ㄴ vóór 다가."] }
  ]
})
