({
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
  nuance: [
    { h: "-는 바람에 of -기 때문에?",
      p: "-기 때문에 geeft een neutrale reden. Het werkt met alles: werkwoorden, bijvoeglijke werkwoorden, 이다, en elke tijd. -는 바람에 gebruik je alleen voor een plotselinge gebeurtenis met een onbedoeld gevolg. Een vaste toestand (het huis is ver weg) of een gewoonte past dus niet bij -는 바람에.",
      ex: [
        { cn: "회사가 멀기 때문에 일찍 출발해요.", py: "Hoesaga meolgi ttaemune iljjik chulbalhaeyo.", nl: "Omdat mijn werk ver weg is, vertrek ik vroeg." },
        { cn: "버스를 놓치는 바람에 늦었어요.", py: "Beoseureul nochineun barame neujeosseoyo.", nl: "Doordat ik de bus miste, was ik te laat." }
      ] },
    { h: "-는 바람에 of -(으)ㄴ/는 탓에?",
      p: "Beide hebben een vervelend gevolg. -는 탓에 legt de schuld bij de oorzaak: \"het komt door ...\". Het werkt ook met bijvoeglijke werkwoorden, en voor het verleden gebruik je de ㄴ-vorm: 잔 탓에. -는 바람에 benadrukt vooral dat het onverwacht gebeurde, en blijft altijd 는.",
      ex: [
        { cn: "늦잠을 잔 탓에 시험을 못 봤어요.", py: "Neutjameul jan tase siheomeul mot bwasseoyo.", nl: "Door mijn eigen verslapen kon ik het examen niet doen." },
        { cn: "날씨가 추운 탓에 감기 환자가 많아요.", py: "Nalssiga chuun tase gamgi hwanjaga manayo.", nl: "Door het koude weer zijn er veel mensen verkouden." }
      ] },
    { h: "Handig bij excuses",
      p: "In spreektaal hoor je -는 바람에 vaak als iemand uitlegt waarom iets misging. Het klinkt als: \"ik kon er niets aan doen\". Daarom past het goed bij 죄송해요 of 미안해요. Over je eigen bewuste keuze zeg je het niet."
    }
  ],
  mistakes: [
    { wrong: "늦잠을 잔 바람에 늦었어요.", right: "늦잠을 자는 바람에 늦었어요.", why: "Vóór 바람에 staat altijd 는, ook als het al gebeurd is." },
    { wrong: "날씨가 추운 바람에 감기에 걸렸어요.", right: "날씨가 추운 탓에 감기에 걸렸어요.", why: "춥다 is een bijvoeglijk werkwoord. Dat kan niet met 바람에, wel met 탓에 of 때문에." },
    { wrong: "비가 오는 바람에 집에 있으세요.", right: "비가 오니까 집에 있으세요.", why: "Na 바람에 komt geen opdracht. Voor een advies of opdracht gebruik je -(으)니까." },
    { wrong: "버스가 고장 났는 바람에 늦었어요.", right: "버스가 고장 나는 바람에 늦었어요.", why: "Er komt geen verleden tijd vóór 는 바람에. Het gevolg draagt de verleden tijd." }
  ],
  vocab: [
    ["-는 바람에", "-neun barame", "doordat (onverwacht, met vervelend gevolg)"], ["늦잠", "neutjam", "uitslapen, verslapen"],
    ["고장 나다", "gojang nada", "kapotgaan"], ["젖다", "jeotda", "nat worden"], ["지각하다", "jigakada", "te laat komen"],
    ["동료", "dongnyo", "collega"], ["쏟다", "ssotda", "morsen"], ["꺼지다", "kkeojida", "uitgaan, uitvallen"],
    ["자료", "jaryo", "materiaal, gegevens"], ["퇴근길", "toegeungil", "weg naar huis na het werk"]
  ],
  dialogue: [
    ["A", "왜 이렇게 늦었어요?", "Wae ireoke neujeosseoyo?", "Waarom ben je zo laat?"],
    ["B", "미안해요. 지하철이 고장 나는 바람에 택시를 탔어요.", "Mianhaeyo. Jihacheori gojang naneun barame taeksireul tasseoyo.", "Sorry. Doordat de metro kapotging, heb ik een taxi genomen."],
    ["A", "택시는 빨리 왔어요?", "Taeksineun ppalli wasseoyo?", "Kwam de taxi snel?"],
    ["B", "아니요, 길이 막히는 바람에 더 늦었어요.", "Aniyo, giri makineun barame deo neujeosseoyo.", "Nee, doordat het druk was op de weg, werd ik nog later."],
    ["A", "고생했어요. 커피 한잔해요.", "Gosaenghaesseoyo. Keopi hanjanhaeyo.", "Wat een gedoe. Laten we een kop koffie drinken."]
  ],
  reading: {
    title: "운이 없는 하루",
    lines: [
      { cn: "오늘은 정말 운이 없는 하루였다.", py: "Oneureun jeongmal uni eomneun haruyeotda.", nl: "Vandaag was echt een dag zonder geluk." },
      { cn: "아침에 알람이 울리지 않는 바람에 30분이나 늦게 일어났다.", py: "Achime allami ulliji anneun barame samsip bunina neutge ireonatda.", nl: "Doordat mijn wekker 's ochtends niet afging, stond ik wel dertig minuten te laat op." },
      { cn: "서둘러 나갔지만 지하철이 고장 나는 바람에 회사에 지각했다.", py: "Seodulleo nagatjiman jihacheori gojang naneun barame hoesae jigakaetda.", nl: "Ik ging snel de deur uit, maar doordat de metro kapotging, kwam ik te laat op mijn werk." },
      { cn: "점심시간에는 동료와 이야기하다가 커피를 쏟는 바람에 셔츠가 더러워졌다.", py: "Jeomsimsiganeneun dongnyowa iyagihadaga keopireul ssonneun barame syeocheuga deoreowojyeotda.", nl: "In de lunchpauze praatte ik met een collega en morste ik koffie, waardoor mijn overhemd vies werd." },
      { cn: "오후 회의 때는 노트북이 갑자기 꺼지는 바람에 발표 자료를 다시 만들어야 했다.", py: "Ohu hoeui ttaeneun noteubugi gapjagi kkeojineun barame balpyo jaryoreul dasi mandeureoya haetda.", nl: "Bij de middagvergadering viel mijn laptop plotseling uit, waardoor ik mijn presentatie opnieuw moest maken." },
      { cn: "퇴근길에는 길이 막혀서 평소보다 한 시간 늦게 집에 도착했다.", py: "Toegeungireneun giri makyeoseo pyeongsoboda han sigan neutge jibe dochakaetda.", nl: "Op weg naar huis stond er file, dus ik was een uur later thuis dan normaal." },
      { cn: "하지만 집에 오니 룸메이트가 맛있는 저녁을 만들어 놓았다.", py: "Hajiman jibe oni rummeiteuga masinneun jeonyeogeul mandeureo noatda.", nl: "Maar toen ik thuiskwam, had mijn huisgenoot een lekker avondeten klaargemaakt." },
      { cn: "힘든 하루였지만 마지막은 행복했다.", py: "Himdeun haruyeotjiman majimageun haengbokaetda.", nl: "Het was een zware dag, maar het einde was fijn." }
    ],
    questions: [
      { type: "mc", q: "Waarom kwam de schrijver te laat op het werk?",
        options: ["De metro ging kapot.", "De bus kwam niet.", "Er stond file op de weg.", "De laptop viel uit."], answer: 0,
        why: ["Goed: 지하철이 고장 나는 바람에 회사에 지각했다.", "In de tekst gaat het om de metro, niet om de bus.", "De file was op weg naar huis, niet 's ochtends.", "De laptop viel uit tijdens de vergadering, niet onderweg."] },
      { type: "mc", q: "Wat gebeurde er in de lunchpauze?",
        options: ["De schrijver morste koffie op zijn overhemd.", "De schrijver maakte zijn presentatie opnieuw.", "De schrijver kwam te laat bij een collega.", "De schrijver at met zijn huisgenoot."], answer: 0,
        why: ["Goed: 커피를 쏟는 바람에 셔츠가 더러워졌다.", "Dat gebeurde 's middags bij de vergadering.", "Hij praatte met een collega; te laat was hij 's ochtends.", "De huisgenoot komt pas 's avonds in het verhaal."] },
      { type: "mc", q: "알람이 울리지 않는 바람에 ... Wat zegt 바람에 hier extra?",
        options: ["Het was onverwacht en het gevolg was vervelend.", "De schrijver had de wekker expres uitgezet.", "Het gevolg was eigenlijk prettig.", "Het gaat om iets wat morgen gebeurt."], answer: 0,
        why: ["Goed: -는 바람에 = een onverwachte gebeurtenis met een onbedoeld gevolg.", "-는 바람에 gebruik je juist niet voor een bewuste keuze.", "Hij stond dertig minuten te laat op: dat is niet prettig.", "Het gevolg 일어났다 staat in de verleden tijd."] }
    ]
  },
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
    { type: "mc", q: "우리 집은 회사에서 ___ 일찍 출발해요. (Omdat mijn huis ver van het werk is, vertrek ik vroeg.)",
      options: ["멀기 때문에", "머는 바람에", "먼 바람에", "멀더라도"], answer: 0,
      why: ["Goed: een vaste toestand met een bijvoeglijk werkwoord: -기 때문에.", "멀다 is een bijvoeglijk werkwoord; dat kan niet met 바람에.", "Ook in de ㄴ-vorm kan een bijvoeglijk werkwoord niet vóór 바람에.", "-더라도 betekent \"zelfs als\"; dat is geen reden."] },
    { type: "mc", q: "___ 시험을 망쳤어요. (Doordat ik niet gestudeerd had, mijn eigen schuld, verpestte ik het examen.)",
      options: ["공부를 안 한 탓에", "공부를 안 한 바람에", "공부를 안 했는 탓에", "공부를 안 할 탓에"], answer: 0,
      why: ["Goed: -(으)ㄴ 탓에 legt de schuld bij de oorzaak, met de ㄴ-vorm voor het verleden.", "Vóór 바람에 staat nooit de ㄴ-vorm, en het gaat hier om schuld.", "했는 bestaat niet als vorm vóór 탓에; het is 한.", "할 is de ㄹ-vorm; die past niet vóór 탓에."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["눈이 오는 바람에 조심하세요.", "눈이 오는 바람에 비행기가 취소됐어요.", "눈이 오니까 조심하세요.", "눈이 많이 와서 길이 미끄러웠어요."], answer: 0,
      why: ["Goed: na 바람에 komt geen opdracht. Zeg: 눈이 오니까 조심하세요.", "Dit klopt: onverwacht, met een vervelend gevolg in de verleden tijd.", "Dit klopt: -(으)니까 met een opdracht.", "Dit klopt: -아/어서 geeft een gewone reden."] },
    { type: "order", q: "Zet in de goede volgorde: \"Doordat er plotseling bezoek kwam, kon ik niet uit.\"",
      tokens: [["갑자기 손님이", "gapjagi sonnimi"], ["오는", "oneun"], ["바람에", "barame"], ["외출을", "oechureul"], ["못 했어요", "mot haesseoyo"]] },
    { type: "fill", q: "버스를 놓치___ 바람에 택시를 탔어요. (Doordat ik de bus miste, nam ik een taxi.)", answers: ["는"],
      hint: "Welke vorm staat altijd vóór 바람에?", why: "놓치 + 는 바람에. Ook voor iets wat al gebeurd is, blijft het 는." },
    { type: "open", q: "Vertaal: \"Doordat de bus kapotging, kwam ik te laat.\"",
      model: ["버스가 고장 나는 바람에 늦었어요.", "버스가 고장 나는 바람에 지각했어요.", "버스가 갑자기 고장 나는 바람에 늦게 왔어요."],
      tip: "Check: staat er 는 vóór 바람에, en staat het gevolg in de verleden tijd?" },
    { type: "open", q: "Vertaal: \"Doordat mijn telefoon uitviel, kon ik je niet bellen.\"",
      model: ["휴대폰이 꺼지는 바람에 전화를 못 했어요.", "핸드폰이 갑자기 꺼지는 바람에 전화 못 했어요."],
      tip: "Check: 꺼지 + 는 바람에 (niet 꺼진 of 꺼졌는), en 못 했어요 in de verleden tijd." }
  ],
  review: [
    { type: "mc", q: "컴퓨터가 갑자기 ___ 바람에 파일이 다 없어졌어요. (꺼지다)",
      options: ["꺼지는", "꺼진", "꺼졌는", "꺼질"], answer: 0,
      why: ["Goed: stam 꺼지 + 는 바람에.", "Ook als het al gebeurd is, blijft het 는.", "Er komt geen verleden tijd vóór 는 바람에.", "꺼질 is de ㄹ-vorm; vóór 바람에 staat 는."] },
    { type: "mc", q: "너무 많이 ___ 바람에 배가 아팠어요. (Doordat ik te veel at, had ik buikpijn.)",
      options: ["먹는", "먹은", "먹었는", "먹을"], answer: 0,
      why: ["Goed: altijd 는 vóór 바람에, ook met 받침.", "Ook als het al gebeurd is, blijft het 는, niet 은.", "Er komt geen verleden tijd vóór 는 바람에.", "먹을 is de ㄹ-vorm; vóór 바람에 staat 는."] },
    { type: "mc", q: "비가 오___ 우산을 가져가세요. (Het regent, dus neem een paraplu mee.)",
      options: ["니까", "는 바람에", "는 탓에", "는데도"], answer: 0,
      why: ["Goed: voor een opdracht of advies gebruik je -(으)니까.", "Na 바람에 komt geen opdracht.", "-는 탓에 legt de schuld ergens bij en past niet bij een opdracht.", "-는데도 betekent \"hoewel\"; dat past hier niet."] }
  ]
})
