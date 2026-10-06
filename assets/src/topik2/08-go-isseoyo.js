({
  id: "08", slug: "go-isseoyo", title: "-고 있어요 en -는 중이에요", sub: "Bezig zijn: aan het ... zijn",
  canDo: "Je kunt nu zeggen waar iemand op dit moment mee bezig is, en beschrijven wat iemand aanheeft, met -고 있어요 en -는 중이에요.",
  guess: {
    q: "\"Ik ben nu een boek aan het lezen.\" Welke zin klopt, denk je?",
    options: ["지금 책을 읽고 있어요.", "지금 책을 읽어 있어요.", "지금 책을 읽는 있어요.", "지금 책을 읽고 이에요."], answer: 0,
    why: ["Goed: stam + 고 있어요 = aan het ... zijn.", "-아/어 있어요 is een toestand na een verandering, geen bezigheid.", "Na 읽는 hoort 중이에요, niet 있어요.", "Na -고 komt 있어요, niet 이에요."]
  },
  problem: "In het Nederlands zeg je \"Ik ben aan het lezen\" als je wilt benadrukken dat iets nu bezig is. Het Koreaans heeft daarvoor -고 있어요 op de stam van een werkwoord. Wil je zeggen dat je er middenin zit, dan kan ook -는 중이에요.",
  pattern: [
    { l: "wie", v: "동생은", c: 1 }, { l: "werkwoord", v: "자", c: 4 }, { l: "-고 있어요", v: "고 있어요", c: 2, key: true }
  ],
  patternCap: "Werkwoordstam + 고 있어요 (가고, 먹고) / stam + 는 중이에요 (먹는 중) / naamwoord + 중이에요 (회의 중)",
  rules: [
    "-고 있어요 komt op elke werkwoordstam, met of zonder 받침: 가고 있어요, 먹고 있어요.",
    "Verleden tijd: -고 있었어요 (was aan het ...). De tijd staat op 있다, niet op de stam.",
    "Over een oudere of iemand met status: -고 계세요. 할머니께서 주무시고 계세요.",
    "-는 중이에요: stam + 는 중이에요 (먹는 중이에요). Een ㄹ-stam verliest de ㄹ: 만들다 wordt 만드는 중이에요. Bij een 하다-naamwoord mag ook alleen 중: 공부 중, 회의 중.",
    "Alleen bij werkwoorden van handeling. Een bijvoeglijk werkwoord zoals 바쁘다 krijgt geen -고 있어요."
  ],
  pitfall: "Bij kleding betekent -고 있어요 meestal \"aanhebben, dragen\", niet \"aan het aantrekken\". 코트를 입고 있어요 = hij draagt een jas. Let ook op: 쓰다 (hoed, bril), 신다 (schoenen).",
  examples: [
    { cn: "지금 뭐 하고 있어요?", py: "Jigeum mwo hago isseoyo?", nl: "Waar ben je nu mee bezig?" },
    { cn: "동생은 방에서 자고 있어요.", py: "Dongsaengeun bangeseo jago isseoyo.", nl: "Mijn broertje ligt in zijn kamer te slapen." },
    { cn: "저는 요즘 한국어를 배우고 있어요.", py: "Jeoneun yojeum hangugeoreul baeugo isseoyo.", nl: "Ik leer tegenwoordig Koreaans." },
    { cn: "지금 회의 중이에요.", py: "Jigeum hoeui jungieyo.", nl: "Ik zit nu in een vergadering." }
  ],
  nuance: [
    { h: "-고 있어요 of -는 중이에요?",
      p: "Vaak kan het allebei. -는 중이에요 legt de nadruk op \"precies nu, midden in\". Je hoort het vaak als uitleg waarom je even niet kunt: aan de telefoon, in een vergadering, achter het stuur. Voor gewoontes en langere periodes met 요즘 is -고 있어요 gewoner.",
      ex: [
        { cn: "지금 운전 중이에요.", py: "Jigeum unjeon jungieyo.", nl: "Ik zit nu achter het stuur." },
        { cn: "요즘 매일 운동하고 있어요.", py: "Yojeum maeil undonghago isseoyo.", nl: "Ik sport tegenwoordig elke dag." }
      ] },
    { h: "-고 있어요 of -아/어 있어요?",
      p: "-고 있어요 is een handeling die bezig is. -아/어 있어요 is een toestand die blijft na een verandering: je bent gaan zitten, en nu zit je. Dat gebruik je vooral bij werkwoorden zonder lijdend voorwerp, zoals 앉다, 서다, 눕다 en 열리다.",
      ex: [
        { cn: "직원이 문을 열고 있어요.", py: "Jigwoni muneul yeolgo isseoyo.", nl: "De medewerker is de deur aan het opendoen." },
        { cn: "문이 열려 있어요.", py: "Muni yeollyeo isseoyo.", nl: "De deur staat open." }
      ] },
    { h: "Beschrijven wat iemand aanheeft",
      p: "Bij aankleden gebruik je -고 있어요 voor wat iemand nu draagt. Elk kledingstuk heeft zijn eigen werkwoord: 입다 voor kleren, 쓰다 voor een hoed of bril, 신다 voor schoenen en sokken. Zo beschrijf je iemand die je zoekt of wilt aanwijzen.",
      ex: [
        { cn: "민수 씨는 파란 셔츠를 입고 있어요.", py: "Minsu ssineun paran syeocheureul ipgo isseoyo.", nl: "Minsu draagt een blauw overhemd." },
        { cn: "그 사람은 안경을 쓰고 있어요.", py: "Geu sarameun angyeongeul sseugo isseoyo.", nl: "Die persoon draagt een bril." }
      ] }
  ],
  mistakes: [
    { wrong: "지금 바쁘고 있어요.", right: "지금 바빠요.", why: "바쁘다 is een bijvoeglijk werkwoord. Dat krijgt geen -고 있어요." },
    { wrong: "그 사람은 의자에 앉고 있어요.", right: "그 사람은 의자에 앉아 있어요.", why: "\"Hij zit\" is een toestand na het gaan zitten: -아/어 있어요." },
    { wrong: "케이크를 만들는 중이에요.", right: "케이크를 만드는 중이에요.", why: "Een ㄹ-stam verliest de ㄹ vóór -는: 만드는." },
    { wrong: "어제 저녁에 영화를 봤고 있었어요.", right: "어제 저녁에 영화를 보고 있었어요.", why: "De verleden tijd staat op 있다, niet op de stam: 보고 있었어요." }
  ],
  vocab: [
    ["-고 있다", "-go itda", "aan het ... zijn, bezig zijn met"], ["-는 중이다", "-neun jungida", "midden in ... zitten"], ["요즘", "yojeum", "tegenwoordig, de laatste tijd"],
    ["회의", "hoeui", "vergadering"], ["통화하다", "tonghwahada", "bellen, aan de telefoon zijn"], ["거실", "geosil", "woonkamer"],
    ["부엌", "bueok", "keuken"], ["눕다", "nupda", "gaan liggen"], ["입다", "ipda", "aantrekken, dragen (kleren)"], ["쓰다", "sseuda", "schrijven; opzetten (hoed, bril)"]
  ],
  dialogue: [
    ["A", "여보세요? 지금 뭐 하고 있어요?", "Yeoboseyo? Jigeum mwo hago isseoyo?", "Hallo? Waar ben je nu mee bezig?"],
    ["B", "도서관에서 숙제하고 있어요.", "Doseogwaneseo sukjehago isseoyo.", "Ik ben in de bibliotheek huiswerk aan het maken."],
    ["A", "아, 그래요? 저도 지금 도서관에 가고 있어요.", "A, geuraeyo? Jeodo jigeum doseogwane gago isseoyo.", "O ja? Ik ben nu ook op weg naar de bibliotheek."],
    ["B", "잘됐네요. 저는 2층 창문 옆에 앉아 있어요.", "Jaldwaenneyo. Jeoneun icheung changmun yeope anja isseoyo.", "Mooi. Ik zit op de eerste verdieping, naast het raam."],
    ["A", "무슨 옷을 입고 있어요?", "Museun oseul ipgo isseoyo?", "Wat heb je aan?"],
    ["B", "빨간 모자를 쓰고 있어요.", "Ppalgan mojareul sseugo isseoyo.", "Ik heb een rode pet op."]
  ],
  reading: {
    title: "일요일 오후",
    lines: [
      { cn: "지금은 일요일 오후 세 시예요.", py: "Jigeumeun iryoil ohu se siyeyo.", nl: "Het is nu zondagmiddag drie uur." },
      { cn: "우리 가족은 모두 집에 있어요.", py: "Uri gajogeun modu jibe isseoyo.", nl: "Mijn hele familie is thuis." },
      { cn: "아버지는 거실에서 신문을 읽고 계세요.", py: "Abeojineun geosireseo sinmuneul ilgo gyeseyo.", nl: "Vader zit in de woonkamer de krant te lezen." },
      { cn: "어머니는 부엌에서 저녁을 만들고 계세요.", py: "Eomeonineun bueokeseo jeonyeogeul mandeulgo gyeseyo.", nl: "Moeder is in de keuken het avondeten aan het maken." },
      { cn: "언니는 방에서 친구하고 통화하는 중이에요.", py: "Eonnineun bangeseo chinguhago tonghwahaneun jungieyo.", nl: "Mijn oudere zus is in haar kamer aan het bellen met een vriendin." },
      { cn: "동생은 소파에 누워 있어요. 자고 있어요.", py: "Dongsaengeun sopae nuwo isseoyo. Jago isseoyo.", nl: "Mijn broertje ligt op de bank. Hij slaapt." },
      { cn: "저는 창문 옆에 앉아서 이 글을 쓰고 있어요.", py: "Jeoneun changmun yeope anjaseo i geureul sseugo isseoyo.", nl: "Ik zit naast het raam en schrijf deze tekst." },
      { cn: "밖에는 비가 오고 있어요.", py: "Bakkeneun biga ogo isseoyo.", nl: "Buiten regent het." },
      { cn: "조용하고 좋은 오후예요.", py: "Joyonghago joeun ohuyeyo.", nl: "Het is een rustige, fijne middag." }
    ],
    questions: [
      { type: "mc", q: "Wat doet de moeder?",
        options: ["Ze maakt het avondeten.", "Ze leest de krant.", "Ze belt met een vriendin.", "Ze slaapt op de bank."], answer: 0,
        why: ["Goed: 어머니는 부엌에서 저녁을 만들고 계세요.", "Dat doet de vader.", "Dat doet de oudere zus.", "Dat doet het broertje."] },
      { type: "mc", q: "Wat is het weer?",
        options: ["Het regent.", "De zon schijnt.", "Het sneeuwt.", "Het waait hard."], answer: 0,
        why: ["Goed: 밖에는 비가 오고 있어요.", "Zon staat niet in de tekst.", "Er staat 비 (regen), niet 눈 (sneeuw).", "Wind staat niet in de tekst."] },
      { type: "mc", q: "아버지는 신문을 읽고 계세요. Waarom staat hier 계세요 en niet 있어요?",
        options: ["Het gaat over de vader, dus de schrijver is beleefd.", "Het gebeurde gisteren.", "De vader is klaar met lezen.", "De vader gaat straks lezen."], answer: 0,
        why: ["Goed: -고 계세요 is de beleefde vorm van -고 있어요.", "계세요 is geen verleden tijd. Dat zou 계셨어요 zijn.", "-고 계세요 betekent: hij is nu bezig.", "Het gaat om nu, niet om straks."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Mijn broertje ligt te slapen.\" Welke zin klopt?",
      options: ["동생이 자고 있어요.", "동생이 자 있어요.", "동생이 자는 있어요.", "동생이 자고 이에요."], answer: 0,
      why: ["Goed: stam 자 + 고 있어요.", "-아/어 있어요 is een toestand, en past niet bij 자다.", "Na 자는 hoort 중이에요, niet 있어요.", "Na -고 komt 있어요, niet 이에요."] },
    { type: "mc", q: "\"Ik ben nu aan het werken.\" Welke zin klopt?",
      options: ["지금 일하는 중이에요.", "지금 일한 중이에요.", "지금 일하고 중이에요.", "지금 일하는 중있어요."], answer: 0,
      why: ["Goed: stam + 는 중이에요.", "-ㄴ is voor iets wat al gebeurd is. Midden in iets is -는.", "Vóór 중 staat -는, niet -고.", "Na 중 komt 이에요, niet 있어요."] },
    { type: "mc", q: "민수 씨는 안경을 쓰고 있어요. Wat betekent dit?",
      options: ["Minsu draagt een bril.", "Minsu is een brief aan het schrijven.", "Minsu zet zijn bril af.", "Minsu koopt een bril."], answer: 0,
      why: ["Goed: 쓰다 bij een bril = opzetten, en -고 있어요 = nu op hebben.", "쓰다 kan \"schrijven\" zijn, maar het voorwerp is 안경 (bril).", "Afzetten is 벗다.", "Kopen is 사다."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["지금 바쁘고 있어요.", "지금 공부하고 있어요.", "지금 회의 중이에요.", "문이 열려 있어요."], answer: 0,
      why: ["Goed: dit is fout. 바쁘다 is bijvoeglijk. Zeg: 지금 바빠요.", "Dit klopt: 공부하다 is een handeling.", "Dit klopt: 하다-naamwoord + 중이에요.", "Dit klopt: een toestand, de deur staat open."] },
    { type: "mc", q: "\"Hij zit op de stoel.\" Welke zin klopt?",
      options: ["의자에 앉아 있어요.", "의자에 앉고 있어요.", "의자에 앉는 중이에요.", "의자에 앉은 있어요."], answer: 0,
      why: ["Goed: zitten is een toestand na het gaan zitten: -아/어 있어요.", "앉고 있어요 klinkt als \"hij is aan het gaan zitten\".", "앉는 중이에요 = hij is midden in het gaan zitten.", "Na 앉은 kan geen 있어요 volgen."] },
    { type: "mc", q: "\"Gisteren om acht uur was ik tv aan het kijken.\"",
      options: ["어제 여덟 시에 텔레비전을 보고 있었어요.", "어제 여덟 시에 텔레비전을 보고 있어요.", "어제 여덟 시에 텔레비전을 봤고 있어요.", "어제 여덟 시에 텔레비전을 보는 있었어요."], answer: 0,
      why: ["Goed: de verleden tijd staat op 있다: 있었어요.", "Het gaat over gisteren, dus 있었어요.", "De verleden tijd staat niet op de stam, maar op 있다.", "Na 보는 kan geen 있었어요 volgen."] },
    { type: "mc", q: "\"Iemand is de deur aan het opendoen.\"",
      options: ["누가 문을 열고 있어요.", "누가 문을 열어 있어요.", "문이 열려 있어요.", "누가 문이 열고 있어요."], answer: 0,
      why: ["Goed: een handeling die bezig is: -고 있어요.", "-아/어 있어요 past niet bij een werkwoord met lijdend voorwerp (문을).", "Dit betekent: de deur staat open. Er is geen handeling.", "De deur is het lijdend voorwerp: 문을, niet 문이."] },
    { type: "fill", q: "언니는 지금 친구하고 ___ 중이에요. (Mijn zus is nu aan het bellen met een vriendin. 통화하다 = bellen)", answers: ["통화하는", "통화"],
      hint: "Stam + 는, of alleen het naamwoord vóór 중.", why: "통화하는 중이에요 en 통화 중이에요 betekenen allebei: ze is midden in een gesprek." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik leer tegenwoordig Koreaans.\"",
      tokens: [["저는 요즘", "jeoneun yojeum"], ["한국어를", "hangugeoreul"], ["배우고", "baeugo"], ["있어요", "isseoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Ze draagt een rode jas.\"",
      tokens: [["빨간", "ppalgan"], ["코트를", "koteureul"], ["입고", "ipgo"], ["있어요", "isseoyo"]] },
    { type: "open", q: "Vertaal: \"Ik ben nu aan het eten.\"", model: ["지금 밥을 먹고 있어요.", "지금 밥을 먹는 중이에요."],
      tip: "Check: 먹 + 고 있어요, of 먹 + 는 중이에요. Niet 먹어 있어요." },
    { type: "open", q: "Vertaal: \"Die persoon draagt een bril.\"", model: ["그 사람은 안경을 쓰고 있어요.", "그 사람은 안경을 썼어요."],
      tip: "Check: bij een bril hoort 쓰다, niet 입다. -고 있어요 = nu op hebben." }
  ],
  review: [
    { type: "mc", q: "\"Het sneeuwt nu.\"",
      options: ["지금 눈이 오고 있어요.", "지금 눈이 와 있어요.", "지금 눈이 오는 있어요.", "지금 눈이 오고 이에요."], answer: 0,
      why: ["Goed: iets wat nu bezig is: -고 있어요.", "-아/어 있어요 is een toestand, geen sneeuw die valt.", "Na 오는 hoort 중이에요, niet 있어요.", "Na -고 komt 있어요, niet 이에요."] },
    { type: "mc", q: "\"Ik ben aan het koken.\"",
      options: ["요리하는 중이에요.", "요리한 중이에요.", "요리하고 중이에요.", "요리하는 중있어요."], answer: 0,
      why: ["Goed: stam + 는 중이에요.", "Midden in iets is -는, niet -ㄴ.", "Vóór 중 staat -는, niet -고.", "Na 중 komt 이에요, niet 있어요."] },
    { type: "mc", q: "\"Hij heeft sneakers aan.\"",
      options: ["운동화를 신고 있어요.", "운동화를 입고 있어요.", "운동화를 신어 있어요.", "운동화를 신는 있어요."], answer: 0,
      why: ["Goed: schoenen = 신다, en -고 있어요 = nu aanhebben.", "입다 is voor kleren, niet voor schoenen.", "-아/어 있어요 past niet bij 신다 met een lijdend voorwerp.", "Na 신는 kan geen 있어요 volgen."] }
  ]
})
