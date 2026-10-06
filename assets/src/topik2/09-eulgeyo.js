({
  id: "09", slug: "eulgeyo", title: "-(으)ㄹ게요", sub: "Ik zal ...: een belofte of aanbod",
  canDo: "Je kunt nu iets beloven, aanbieden of ter plekke beslissen, rekening houdend met de ander, met -(으)ㄹ게요.",
  guess: {
    q: "Je vriend zegt: \"Het is warm hier.\" Jij antwoordt: \"Ik doe het raam wel open.\" Welke zin klopt, denk je?",
    options: ["제가 창문을 열게요.", "제가 창문을 열을게요.", "제가 창문을 여을게요.", "제가 창문을 열어게요."], answer: 0,
    why: ["Goed: 열다 is een ㄹ-stam, dus alleen -게요.", "Bij een ㄹ-stam komt er geen 을.", "De ㄹ van 열 blijft staan, en er komt geen 을.", "-게요 komt direct op de stam, niet op de 아/어-vorm."]
  },
  problem: "Je wilt iets beloven of aanbieden: \"Ik bel je morgen\" of \"Ik doe het wel.\" In het Nederlands zeg je dan \"ik zal\" of gewoon \"ik doe het\". In het Koreaans gebruik je -(으)ㄹ게요. Je laat zo horen dat je dit doet voor de ander, of omdat de ander het vraagt.",
  pattern: [
    { l: "ik", v: "제가", c: 1 }, { l: "wat", v: "내일 다시 전화하", c: 3 }, { l: "-(으)ㄹ게요", v: "ㄹ게요", c: 2, key: true }
  ],
  patternCap: "Werkwoordstam + ㄹ게요 (na klinker of ㄹ) / 을게요 (na 받침): 할게요, 먹을게요, 열게요",
  rules: [
    "Stam op een klinker: -ㄹ게요. 가다 wordt 갈게요, 하다 wordt 할게요.",
    "Stam op een 받침: -을게요. 먹다 wordt 먹을게요, 앉다 wordt 앉을게요.",
    "Stam op ㄹ: alleen -게요. 열다 wordt 열게요, 만들다 wordt 만들게요. Onregelmatig: 듣다 wordt 들을게요, 돕다 wordt 도울게요.",
    "Het onderwerp is altijd ik of wij. En het is nooit een vraag: vraag met -(으)ㄹ까요?.",
    "Je schrijft 게요, maar je zegt [께요]: 할게요 klinkt als [할께요]. Ontkennen: -지 않을게요."
  ],
  pitfall: "-(으)ㄹ게요 kan alleen over jezelf gaan. Zeg niet 민수 씨가 올게요, maar 민수 씨가 올 거예요.",
  examples: [
    { cn: "내일 다시 전화할게요.", py: "Naeil dasi jeonhwahalgeyo.", nl: "Ik bel je morgen nog een keer." },
    { cn: "제가 창문을 열게요.", py: "Jega changmuneul yeolgeyo.", nl: "Ik doe het raam wel open." },
    { cn: "다시는 늦지 않을게요.", py: "Dasineun neutji aneulgeyo.", nl: "Ik zal nooit meer te laat komen." },
    { cn: "이걸로 할게요.", py: "Igeollo halgeyo.", nl: "Ik neem deze." }
  ],
  nuance: [
    { h: "-(으)ㄹ게요 of -(으)ㄹ 거예요?",
      p: "-(으)ㄹ 거예요 geeft informatie: een plan of een verwachting. Het kan over iedereen gaan, ook over het weer. -(으)ㄹ게요 is een besluit dat je nu neemt, voor of door de ander: een belofte of aanbod. Vraagt iemand naar je plannen, antwoord dan met -(으)ㄹ 거예요.",
      ex: [
        { cn: "주말에 뭐 할 거예요? - 집에서 쉴 거예요.", py: "Jumare mwo hal geoyeyo? - Jibeseo swil geoyeyo.", nl: "Wat ga je dit weekend doen? - Ik ga thuis uitrusten." },
        { cn: "좀 도와줄 수 있어요? - 네, 도와줄게요.", py: "Jom dowajul su isseoyo? - Ne, dowajulgeyo.", nl: "Kun je me even helpen? - Ja, ik help je wel." }
      ] },
    { h: "Alleen ik, en nooit een vraag",
      p: "Je kunt alleen voor jezelf iets beloven. Over een ander gebruik je -(으)ㄹ 거예요. Wil je iets aanbieden als vraag (\"Zal ik ...?\"), dan gebruik je -(으)ㄹ까요?. Het antwoord daarop kan weer -(으)ㄹ게요 zijn.",
      ex: [
        { cn: "제가 갈까요? - 아니요, 제가 갈게요.", py: "Jega galkkayo? - Aniyo, jega galgeyo.", nl: "Zal ik gaan? - Nee, ik ga wel." }
      ] },
    { h: "Beleefd in winkels en op het werk",
      p: "-(으)ㄹ게요 klinkt vriendelijk, omdat je rekening houdt met de ander. In een winkel kies je met 이걸로 할게요. Bij vertrek zeg je 먼저 갈게요. Medewerkers zeggen vaak -아/어 드릴게요: \"ik doe het voor u\". Tegen vrienden zeg je -(으)ㄹ게, zonder 요.",
      ex: [
        { cn: "확인해 드릴게요.", py: "Hwaginhae deurilgeyo.", nl: "Ik zal het voor u nakijken." },
        { cn: "먼저 갈게요. 내일 봐요.", py: "Meonjeo galgeyo. Naeil bwayo.", nl: "Ik ga er alvast vandoor. Tot morgen." }
      ] }
  ],
  mistakes: [
    { wrong: "민수 씨가 내일 올게요.", right: "민수 씨가 내일 올 거예요.", why: "-(으)ㄹ게요 gaat alleen over jezelf. Over een ander gebruik je -(으)ㄹ 거예요." },
    { wrong: "제가 도와줄게요?", right: "제가 도와줄까요?", why: "-(으)ㄹ게요 is nooit een vraag. \"Zal ik ...?\" is -(으)ㄹ까요?." },
    { wrong: "내일은 날씨가 좋을게요.", right: "내일은 날씨가 좋을 거예요.", why: "Een verwachting is -(으)ㄹ 거예요. -(으)ㄹ게요 kan alleen bij iets wat jij doet." },
    { wrong: "제가 저녁을 만들을게요.", right: "제가 저녁을 만들게요.", why: "Bij een ㄹ-stam komt er geen 을: 만들게요." }
  ],
  vocab: [
    ["-(으)ㄹ게요", "-(eu)lgeyo", "ik zal ..., ik doe het wel"], ["다시", "dasi", "opnieuw, weer"], ["꼭", "kkok", "zeker, beslist"],
    ["먼저", "meonjeo", "eerst, alvast"], ["연락하다", "yeollakada", "contact opnemen, laten horen"], ["청소하다", "cheongsohada", "schoonmaken"],
    ["설거지", "seolgeoji", "de afwas"], ["도와주다", "dowajuda", "helpen"], ["끝내다", "kkeunnaeda", "afmaken, afronden"], ["앞으로", "apeuro", "voortaan, in de toekomst"]
  ],
  dialogue: [
    ["A", "방이 너무 더러워요.", "Bangi neomu deoreowoyo.", "De kamer is erg vies."],
    ["B", "미안해요. 오늘 제가 청소할게요.", "Mianhaeyo. Oneul jega cheongsohalgeyo.", "Sorry. Ik maak vandaag schoon."],
    ["A", "그럼 저는 저녁을 만들게요.", "Geureom jeoneun jeonyeogeul mandeulgeyo.", "Dan maak ik het avondeten."],
    ["B", "좋아요. 설거지도 제가 할게요.", "Joayo. Seolgeojido jega halgeyo.", "Goed. Ik doe ook de afwas."],
    ["A", "고마워요. 일곱 시까지 끝낼까요?", "Gomawoyo. Ilgop sikkaji kkeunnaelkkayo?", "Dank je. Zullen we om zeven uur klaar zijn?"],
    ["B", "네, 일곱 시까지 끝낼게요.", "Ne, ilgop sikkaji kkeunnaelgeyo.", "Ja, ik ben om zeven uur klaar."]
  ],
  reading: {
    title: "엄마에게",
    lines: [
      { cn: "엄마, 어제는 정말 죄송해요.", py: "Eomma, eojeneun jeongmal joesonghaeyo.", nl: "Mama, het spijt me echt van gisteren." },
      { cn: "제가 너무 늦게 집에 들어왔어요.", py: "Jega neomu neutge jibe deureowasseoyo.", nl: "Ik kwam veel te laat thuis." },
      { cn: "그리고 전화도 안 받았어요.", py: "Geurigo jeonhwado an badasseoyo.", nl: "En ik nam de telefoon ook niet op." },
      { cn: "앞으로는 늦으면 꼭 먼저 연락할게요.", py: "Apeuroneun neujeumyeon kkok meonjeo yeollakalgeyo.", nl: "Voortaan laat ik het je altijd eerst weten als ik later ben." },
      { cn: "그리고 열한 시 전에 집에 올게요.", py: "Geurigo yeolhan si jeone jibe olgeyo.", nl: "En ik ben voor elf uur thuis." },
      { cn: "이번 주말에는 제가 집 청소를 할게요.", py: "Ibeon jumareneun jega jip cheongsoreul halgeyo.", nl: "Dit weekend maak ik het huis schoon." },
      { cn: "엄마가 좋아하는 김치찌개도 만들게요.", py: "Eommaga joahaneun gimchijjigaedo mandeulgeyo.", nl: "Ik maak ook de kimchi-stoofpot die je lekker vindt." },
      { cn: "다시는 늦지 않을게요.", py: "Dasineun neutji aneulgeyo.", nl: "Ik zal nooit meer te laat komen." },
      { cn: "사랑해요. 수진 올림", py: "Saranghaeyo. Sujin ollim", nl: "Ik hou van je. Sujin" }
    ],
    questions: [
      { type: "mc", q: "Waarom schrijft Sujin deze brief?",
        options: ["Ze kwam laat thuis en nam de telefoon niet op.", "Ze heeft het huis niet schoongemaakt.", "Ze vond het eten niet lekker.", "Ze gaat dit weekend weg."], answer: 0,
        why: ["Goed: 너무 늦게 집에 들어왔어요 en 전화도 안 받았어요.", "Schoonmaken is iets wat ze belooft, niet de reden.", "Over eten klagen staat niet in de tekst.", "Ze blijft juist thuis en maakt schoon."] },
      { type: "mc", q: "Wat belooft Sujin voor dit weekend?",
        options: ["Het huis schoonmaken en kimchi-stoofpot koken.", "Om elf uur gaan slapen.", "Haar moeder elke dag bellen.", "Samen met haar moeder uit eten gaan."], answer: 0,
        why: ["Goed: 집 청소를 할게요 en 김치찌개도 만들게요.", "Elf uur gaat over thuiskomen, niet over slapen.", "Ze belooft te bellen als ze laat is, niet elke dag.", "Uit eten staat niet in de tekst."] },
      { type: "mc", q: "앞으로는 늦으면 꼭 먼저 연락할게요. Wat drukt -ㄹ게요 hier uit?",
        options: ["Een belofte aan haar moeder.", "Een vraag aan haar moeder.", "Een verwachting over het weer.", "Iets wat ze gisteren deed."], answer: 0,
        why: ["Goed: -(으)ㄹ게요 = ik zal het doen, voor de ander.", "-(으)ㄹ게요 is nooit een vraag.", "Een verwachting is -(으)ㄹ 거예요.", "-(으)ㄹ게요 gaat over de toekomst, niet over gisteren."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik maak het eten wel.\" Welke zin klopt?",
      options: ["제가 밥을 만들게요.", "제가 밥을 만들을게요.", "제가 밥을 만드을게요.", "제가 밥을 만들어게요."], answer: 0,
      why: ["Goed: 만들다 is een ㄹ-stam, dus alleen -게요.", "Bij een ㄹ-stam komt er geen 을.", "De ㄹ van 만들 blijft staan.", "-게요 komt direct op de stam, niet op de 아/어-vorm."] },
    { type: "mc", q: "\"Ik ga hier zitten.\" Welke zin is goed gespeld?",
      options: ["여기 앉을게요.", "여기 앉게요.", "여기 앉을께요.", "여기 앉아게요."], answer: 0,
      why: ["Goed: 앉 heeft een 받침, dus -을게요.", "Na een 받침 heb je -을게요 nodig.", "Je zegt [께요], maar je schrijft 게요.", "-을게요 komt direct op de stam, niet op de 아/어-vorm."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["민수 씨가 내일 올게요.", "제가 내일 올게요.", "민수 씨가 내일 올 거예요.", "내일 다시 올게요."], answer: 0,
      why: ["Goed: dit is fout. -(으)ㄹ게요 gaat alleen over jezelf. Zeg: 민수 씨가 내일 올 거예요.", "Dit klopt: jij belooft het zelf.", "Dit klopt: over een ander gebruik je -(으)ㄹ 거예요.", "Dit klopt: het onderwerp is ik, ook zonder 제가."] },
    { type: "mc", q: "\"Zal ik je helpen?\"",
      options: ["제가 도와줄까요?", "제가 도와줄게요?", "제가 도와줄 거예요?", "제가 도와주을까요?"], answer: 0,
      why: ["Goed: \"Zal ik ...?\" is -(으)ㄹ까요?.", "-(으)ㄹ게요 is nooit een vraag.", "Dit vraagt naar een plan, niet \"zal ik\".", "도와주 eindigt op een klinker, dus -ㄹ까요."] },
    { type: "mc", q: "Je vriend vraagt: 주말에 뭐 할 거예요? Je vertelt je plan: thuis uitrusten.",
      options: ["집에서 쉴 거예요.", "집에서 쉴게요.", "집에서 쉬을 거예요.", "집에서 쉬을게요."], answer: 0,
      why: ["Goed: een plan als informatie is -(으)ㄹ 거예요.", "-(으)ㄹ게요 klinkt als een belofte aan je vriend. Dat past hier niet.", "쉬 eindigt op een klinker, dus -ㄹ 거예요.", "Het moet -(으)ㄹ 거예요 zijn, en na 쉬 komt geen 을."] },
    { type: "mc", q: "\"Morgen wordt het mooi weer.\"",
      options: ["내일은 날씨가 좋을 거예요.", "내일은 날씨가 좋을게요.", "내일은 날씨가 좋게요.", "내일은 날씨가 좋을까요."], answer: 0,
      why: ["Goed: een verwachting is -(으)ㄹ 거예요.", "-(으)ㄹ게요 kan alleen bij iets wat jij doet.", "Ook -(으)ㄹ게요 past niet bij het weer, en na 좋 moet 을.", "-(으)ㄹ까요 maakt er een vraag van."] },
    { type: "mc", q: "In een winkel zeg je: 이걸로 할게요. Wat betekent dat?",
      options: ["Ik neem deze.", "Ik ga dit maken.", "Wilt u deze?", "Ik heb deze genomen."], answer: 0,
      why: ["Goed: je beslist nu, tegen de verkoper.", "하다 betekent hier \"kiezen, nemen\", niet \"maken\".", "-(으)ㄹ게요 is nooit een vraag.", "-(으)ㄹ게요 gaat over wat je nu gaat doen, niet over het verleden."] },
    { type: "fill", q: "걱정하지 마세요. 꼭 ___. (Maak je geen zorgen. Ik kom zeker. 오다 = komen)", answers: ["올게요", "갈게요"],
      hint: "오 eindigt op een klinker. Welke vorm van -(으)ㄹ게요 komt erachter?", why: "오 + ㄹ게요 = 올게요: een belofte. 갈게요 kan ook: in het Koreaans \"ga\" je naar de ander toe." },
    { type: "order", q: "Zet in de goede volgorde: \"Als de les afgelopen is, bel ik je meteen.\"",
      tokens: [["수업이", "sueobi"], ["끝나면", "kkeunnamyeon"], ["바로", "baro"], ["전화할게요", "jeonhwahalgeyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Deze keer trakteer ik op lekkere koffie.\"",
      tokens: [["이번에는 제가", "ibeoneneun jega"], ["맛있는", "masinneun"], ["커피를", "keopireul"], ["살게요", "salgeyo"]] },
    { type: "open", q: "Vertaal: \"Ik bel je vanavond.\"", model: ["오늘 저녁에 전화할게요.", "오늘 밤에 전화할게요."],
      tip: "Check: 전화하 + ㄹ게요 = 전화할게요. Geschreven met 게, niet 께." },
    { type: "open", q: "Vertaal: \"Ik help je wel.\"", model: ["제가 도와줄게요.", "제가 도와드릴게요."],
      tip: "Check: 도와주 + ㄹ게요. Tegen een oudere: 도와드릴게요." }
  ],
  review: [
    { type: "mc", q: "\"Ik doe het licht wel uit.\"",
      options: ["제가 불을 끌게요.", "제가 불을 끄을게요.", "제가 불을 끌을게요.", "제가 불을 꺼게요."], answer: 0,
      why: ["Goed: 끄 eindigt op een klinker: 끄 + ㄹ게요 = 끌게요.", "Na een klinker komt -ㄹ게요, niet -을게요.", "De stam is 끄. Er komt maar één ㄹ.", "-ㄹ게요 komt op de stam, niet op de 아/어-vorm."] },
    { type: "mc", q: "\"Zal ik het raam dichtdoen?\"",
      options: ["창문을 닫을까요?", "창문을 닫을게요?", "창문을 닫게요?", "창문을 닫을 거예요?"], answer: 0,
      why: ["Goed: \"Zal ik ...?\" is -(으)ㄹ까요?.", "-(으)ㄹ게요 is nooit een vraag.", "Dit is geen vraag om toestemming, en na 닫 moet 을.", "Dit vraagt naar een plan van de ander."] },
    { type: "mc", q: "\"Mijn oudere zus komt morgen.\"",
      options: ["언니가 내일 올 거예요.", "언니가 내일 올게요.", "언니가 내일 오을 거예요.", "언니가 내일 올까요."], answer: 0,
      why: ["Goed: over een ander gebruik je -(으)ㄹ 거예요.", "-(으)ㄹ게요 gaat alleen over jezelf.", "오 eindigt op een klinker, dus 올 거예요.", "-(으)ㄹ까요 maakt er een vraag van."] }
  ]
})
