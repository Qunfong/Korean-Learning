({
  id: "06", slug: "sem", title: "-는 셈이다", sub: "Dat komt neer op ...",
  canDo: "Je kunt nu zeggen waar iets in feite op neerkomt, met -는 셈이다 en -(으)ㄴ 셈이다.",
  guess: {
    q: "일주일에 6일 일하니까 거의 매일 일하는 셈이에요. Wat betekent dit, denk je?",
    options: [
      "Ik werk zes dagen per week, dus het komt neer op bijna elke dag werken.",
      "Ik werk zes dagen per week, dus ik ben van plan elke dag te werken.",
      "Ik werk zes dagen per week, maar ik werk bijna nooit.",
      "Ik werk zes dagen per week, omdat ik elke dag wil werken."
    ], answer: 0,
    why: [
      "Goed: -는 셈이다 betekent \"het komt neer op\".",
      "\"Van plan zijn\" is -(으)ㄹ 셈이다, met ㄹ. Hier staat -는.",
      "거의 매일 betekent \"bijna elke dag\", niet \"bijna nooit\".",
      "Er staat geen wens in de zin. -고 싶다 zou een wens zijn."
    ]
  },
  problem: "Soms is iets niet precies zo, maar in feite wel. In het Nederlands zeg je \"dat komt neer op\" of \"zo goed als\". In het Koreaans zeg je -는 셈이다. Vaak volgt het op een berekening of een reden.",
  pattern: [
    { l: "feit", v: "6일 일하니까", c: 3 }, { l: "conclusie", v: "매일 일하는", c: 4 },
    { l: "셈이다", v: "셈이에요", c: 2, key: true }
  ],
  patternCap: "Werkwoord + 는 셈이다 (nu) · werkwoord + (으)ㄴ 셈이다 (verleden) · bijv. ww + (으)ㄴ 셈이다 · naamwoord + 인 셈이다",
  rules: [
    "Werkwoord in het heden: -는 셈이다 (가는 셈이다). In het verleden: -(으)ㄴ 셈이다 (다 한 셈이다, 먹은 셈이다).",
    "Bijvoeglijk werkwoord: -(으)ㄴ 셈이다 (싼 셈이다, 많은 셈이다). Na een naamwoord: 인 셈이다.",
    "Vaak staat er een reden of berekening voor, met -(으)니까 of -(으)면.",
    "Het komt in schrijftaal en spreektaal voor. In schrijftaal eindig je op -는 셈이다, in een gesprek op -는 셈이에요 of -는 셈이야."
  ],
  pitfall: "-(으)ㄹ 셈이다 betekent iets anders: \"van plan zijn\". 어떻게 할 셈이에요? = Wat ben je van plan? Schrijf 셈이다 los.",
  examples: [
    { cn: "일주일에 6일 일하니까 거의 매일 일하는 셈이에요.", py: "Iljuire yugil ilhanikka geoui maeil ilhaneun semieyo.", nl: "Ik werk zes dagen per week. Dat komt neer op bijna elke dag." },
    { cn: "숙제를 90% 했으니까 거의 다 한 셈이에요.", py: "Sukjereul gusip peosenteu haesseunikka geoui da han semieyo.", nl: "Ik heb 90% van mijn huiswerk gedaan. Het is dus zo goed als af." },
    { cn: "만 원에 두 개면 하나에 오천 원인 셈이에요.", py: "Man wone du gaemyeon hanae ocheon wonin semieyo.", nl: "Twee voor tienduizend won komt neer op vijfduizend won per stuk." },
    { cn: "서울에서 10년을 살았으니까 서울 사람인 셈이다.", py: "Seoureseo simnyeoneul sarasseunikka seoul saramin semida.", nl: "Ik heb tien jaar in Seoul gewoond. Ik ben dus zo goed als een Seouler." }
  ],
  nuance: [
    { h: "-는 셈이다 of -(으)ㄹ 셈이다?",
      p: "Eén klank maakt een groot verschil. -는 셈이다 en -(으)ㄴ 셈이다 betekenen \"het komt neer op\". -(으)ㄹ 셈이다 betekent \"van plan zijn\". Het klinkt vaak kritisch of verbaasd, zeker als vraag: wat denk je eigenlijk te doen? Gebruik het niet voor je eigen gewone plannen. Daarvoor zeg je -(으)ㄹ 생각이다 of -(으)려고 하다.",
      ex: [
        { cn: "그 돈이면 한 달 월급인 셈이에요.", py: "Geu donimyeon han dal wolgeubin semieyo.", nl: "Dat bedrag komt neer op een maandsalaris." },
        { cn: "그 돈으로 뭘 할 셈이에요?", py: "Geu doneuro mwol hal semieyo?", nl: "Wat ben je in vredesnaam van plan met dat geld?" }
      ] },
    { h: "셈이다 of -는 것과 같다?",
      p: "-는 것과 같다 betekent \"is (net) als\". Je vergelijkt twee dingen, vaak met een beeld. -는 셈이다 is een conclusie uit cijfers of feiten: als je alles optelt, komt het hierop neer. Bij een beeld zonder berekening past 셈이다 niet goed.",
      ex: [
        { cn: "인생은 마라톤을 하는 것과 같다.", py: "Insaeng-eun maratoneul haneun geotgwa gatda.", nl: "Het leven is als een marathon lopen." },
        { cn: "매일 6킬로미터를 뛰니까 일주일에 마라톤을 한 번 하는 셈이다.", py: "Maeil yuk killomiteoreul ttwinikka iljuire maratoneul han beon haneun semida.", nl: "Ik loop elke dag zes kilometer. Dat komt neer op één marathon per week." }
      ] },
    { h: "Spreektaal en schrijftaal",
      p: "셈이다 werkt in beide registers. In een gesprek antwoord je vaak kort met 그런 셈이에요: \"zo ongeveer, ja\". Ook vast is -는 셈 치다: \"doen alsof, beschouwen als\". In formele teksten zie je ook -(으)ㄴ 것이나 다름없다: \"is zo goed als\". In spreektaal hoor je -(으)ㄴ 거나 마찬가지예요.",
      ex: [
        { cn: "A: 이사 준비 다 끝났어요? B: 네, 그런 셈이에요.", py: "A: Isa junbi da kkeunnasseoyo? B: Ne, geureon semieyo.", nl: "A: Ben je klaar met de verhuisvoorbereidingen? B: Ja, zo ongeveer." },
        { cn: "속는 셈 치고 한번 믿어 볼게요.", py: "Sonneun sem chigo hanbeon mideo bolgeyo.", nl: "Ik neem het risico dat ik bedrogen word, en geloof je één keer." }
      ] }
  ],
  mistakes: [
    { wrong: "거의 다 끝났는 셈이에요.", right: "거의 다 끝난 셈이에요.", why: "Voor het verleden gebruik je -(으)ㄴ 셈이다. Na 았/었 komt geen -는." },
    { wrong: "이 가격이면 싸는 셈이에요.", right: "이 가격이면 싼 셈이에요.", why: "싸다 is een bijvoeglijk werkwoord. Dat krijgt -(으)ㄴ, niet -는." },
    { wrong: "그는 거의 한국 사람 셈이에요.", right: "그는 거의 한국 사람인 셈이에요.", why: "Na een naamwoord heb je 이다 nodig: 인 셈이다." },
    { wrong: "거의 매일 일하는셈이에요.", right: "거의 매일 일하는 셈이에요.", why: "셈 is een zelfstandig naamwoord. Je schrijft het los." }
  ],
  vocab: [
    ["-는 셈이다", "-neun semida", "neerkomen op, zo goed als"], ["거의", "geoui", "bijna"],
    ["편도", "pyeondo", "enkele reis"], ["꾸준히", "kkujunhi", "regelmatig, gestaag"],
    ["품질", "pumjil", "kwaliteit"], ["월급", "wolgeup", "maandsalaris"],
    ["집세", "jipse", "huur (van een woning)"], ["절반", "jeolban", "de helft"],
    ["아끼다", "akkida", "besparen, zuinig zijn op"], ["합하다", "hapada", "optellen, samenvoegen"]
  ],
  dialogue: [
    ["A", "회사까지 얼마나 걸려요?", "Hoesakkaji eolmana geollyeoyo?", "Hoe lang doe je over de reis naar je werk?"],
    ["B", "편도로 한 시간 반 걸려요.", "Pyeondoro han sigan ban geollyeoyo.", "Anderhalf uur enkele reis."],
    ["A", "그럼 하루에 세 시간을 길에서 보내는 셈이네요.", "Geureom harue se siganeul gireseo bonaeneun semineyo.", "Dan ben je dus drie uur per dag onderweg."],
    ["B", "맞아요. 일주일이면 15시간인 셈이에요.", "Majayo. Iljuirimyeon yeoldaseot siganin semieyo.", "Klopt. Per week komt dat neer op vijftien uur."],
    ["A", "이사하는 게 낫겠어요.", "Isahaneun ge natgesseoyo.", "Je kunt beter verhuizen."]
  ],
  reading: {
    title: "월급과 집세",
    lines: [
      { cn: "나는 한 달에 300만 원을 번다.", py: "Naneun han dare sambaengman woneul beonda.", nl: "Ik verdien drie miljoen won per maand." },
      { cn: "그중에서 150만 원을 집세로 낸다.", py: "Geujung-eseo baegosimman woneul jipsero naenda.", nl: "Daarvan betaal ik anderhalf miljoen won aan huur." },
      { cn: "월급의 절반을 집세로 내는 셈이다.", py: "Wolgeubui jeolbaneul jipsero naeneun semida.", nl: "Dat komt neer op de helft van mijn salaris aan huur." },
      { cn: "교통비와 식비까지 합하면 남는 돈이 거의 없는 셈이다.", py: "Gyotongbiwa sikbikkaji hapamyeon nameun doni geoui eomneun semida.", nl: "Tel je vervoer en eten erbij, dan blijft er zo goed als niets over." },
      { cn: "그래서 작년에 회사 근처의 작은 집으로 이사했다.", py: "Geuraeseo jangnyeone hoesa geuncheoui jageun jibeuro isahaetda.", nl: "Daarom ben ik vorig jaar naar een klein huis bij mijn werk verhuisd." },
      { cn: "집세는 30만 원 더 싸고, 교통비도 들지 않는다.", py: "Jipseneun samsimman won deo ssago, gyotongbido deulji anneunda.", nl: "De huur is driehonderdduizend won lager, en ik heb geen reiskosten meer." },
      { cn: "한 달에 40만 원 정도를 아끼는 셈이다.", py: "Han dare sasimman won jeongdoreul akkineun semida.", nl: "Dat komt neer op ongeveer vierhonderdduizend won besparing per maand." },
      { cn: "일 년 동안 거의 500만 원을 모은 셈이다.", py: "Il lyeon dongan geoui obaengman woneul moeun semida.", nl: "In een jaar heb ik dus bijna vijf miljoen won gespaard." },
      { cn: "집은 좁아졌지만 나는 이 선택에 만족한다.", py: "Jibeun jobajyeotjiman naneun i seontaege manjokanda.", nl: "Mijn huis is kleiner, maar ik ben tevreden met deze keuze." }
    ],
    questions: [
      { type: "mc", q: "Hoeveel van zijn salaris betaalde de schrijver eerst aan huur?",
        options: ["De helft.", "Een derde.", "Bijna alles.", "Een kwart."], answer: 0,
        why: ["Goed: 150만 원 van 300만 원: 월급의 절반.", "Een derde zou 100만 원 zijn.", "Pas met vervoer en eten erbij bleef er bijna niets over.", "Een kwart zou 75만 원 zijn."] },
      { type: "mc", q: "Waarom spaart de schrijver nu geld?",
        options: ["De huur is lager en hij heeft geen reiskosten.", "Hij verdient meer dan vroeger.", "Hij eet niet meer buiten de deur.", "Hij woont nu bij zijn ouders."], answer: 0,
        why: ["Goed: 집세는 30만 원 더 싸고, 교통비도 들지 않는다.", "Over een hoger salaris staat niets in de tekst.", "Over eten buiten de deur staat niets.", "Hij woont in een klein huis bij zijn werk."] },
      { type: "mc", q: "남는 돈이 거의 없는 셈이다. Wat betekent dit?",
        options: ["Er blijft zo goed als geen geld over.", "Er blijft precies niets over.", "Hij is van plan geen geld over te houden.", "Er blijft veel geld over."], answer: 0,
        why: ["Goed: -는 셈이다 betekent \"het komt neer op\", niet precies.", "셈이다 en 거의 maken het minder exact: zo goed als.", "\"Van plan zijn\" zou -(으)ㄹ 셈이다 zijn.", "없는 betekent dat er geen geld is."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Het is zo goed als klaar.\" Welke zin klopt?",
      options: ["거의 다 끝난 셈이에요.", "거의 다 끝났는 셈이에요.", "거의 다 끝날 셈이에요.", "거의 다 끝난 셈이예요."], answer: 0,
      why: ["Goed: voor het verleden gebruik je -(으)ㄴ 셈이다.", "Na het verleden 았 komt geen -는. Zeg: 끝난.", "-(으)ㄹ 셈이다 betekent \"van plan zijn\".", "Na een 받침 schrijf je 이에요, niet 이예요."] },
    { type: "mc", q: "한 달에 두 번 만나니까 2주에 한 번 ___ 셈이에요.",
      options: ["만나는", "만날", "만나서", "만났는"], answer: 0,
      why: ["Goed: een werkwoord in het heden krijgt -는 셈이다.", "만날 셈이다 betekent \"van plan zijn om te ontmoeten\".", "Vóór 셈 staat een bijvoeglijke vorm, niet -아서.", "Na het verleden 았 komt geen -는."] },
    { type: "mc", q: "\"Voor die kwaliteit is het eigenlijk goedkoop.\" 품질을 생각하면 ___ 셈이에요.",
      options: ["싼", "싸는", "쌀", "싸은"], answer: 0,
      why: ["Goed: 싸다 is een bijvoeglijk werkwoord, dus -ㄴ 셈이다.", "-는 hoort bij werkwoorden. 싸다 is een bijvoeglijk werkwoord.", "-ㄹ 셈이다 betekent \"van plan zijn\".", "Na een klinker komt alleen ㄴ, geen 은: 싼."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb dat boek zo goed als uitgelezen.\"",
      tokens: [["그 책을", "geu chaegeul"], ["거의 다", "geoui da"], ["읽은", "ilgeun"], ["셈이에요", "semieyo"]] },
    { type: "open", q: "Vertaal: \"Ik slaap vier uur per nacht. Dat komt neer op bijna niet slapen.\"",
      model: ["하루에 네 시간 자니까 거의 안 자는 셈이에요.", "매일 네 시간만 자니까 거의 못 자는 셈이에요.", "네 시간밖에 안 자니까 거의 안 자는 셈이다."],
      tip: "Check: werkwoord in het heden + 는 셈이다, en staat 셈이다 los?" },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["형은 거의 학생 셈이에요.", "형은 거의 학생인 셈이에요.", "형은 거의 다 먹은 셈이에요.", "형은 거의 매일 오는 셈이에요."], answer: 0,
      why: ["Goed gezien: deze zin is fout. Na een naamwoord heb je 인 셈이다 nodig.", "Deze zin klopt: naamwoord + 인 셈이다.", "Deze zin klopt: verleden + -(으)ㄴ 셈이다.", "Deze zin klopt: werkwoord in het heden + -는 셈이다."] },
    { type: "mc", q: "회사를 그만두고 뭘 할 셈이야? Wat betekent dit?",
      options: ["Wat ben je eigenlijk van plan na je ontslag?", "Waar komt je ontslag op neer?", "Wat heb je gedaan na je ontslag?", "Wat moet je doen na je ontslag?"], answer: 0,
      why: ["Goed: -(으)ㄹ 셈이다 betekent \"van plan zijn\", vaak kritisch.", "\"Neerkomen op\" is -는 셈이다, niet -ㄹ.", "Voor het verleden zou er 했어 staan.", "\"Moeten\" is -아/어야 하다."] },
    { type: "mc", q: "Welke zin past het best in een formeel onderzoeksrapport?",
      options: ["응답자의 절반이 반대한 셈이다.", "응답자의 절반이 반대한 셈이야.", "응답자의 절반이 반대한 셈이네요.", "응답자의 절반이 반대한 거나 마찬가지예요."], answer: 0,
      why: ["Goed: in een formeel rapport eindig je op -다.", "-야 is informele spreektaal.", "-네요 drukt verrassing uit in een gesprek.", "거나 마찬가지예요 is spreektaal, met de verkorting 거."] },
    { type: "mc", q: "10명 중에서 9명이 왔으니까 거의 다 ___ 셈이에요.",
      options: ["온", "왔는", "올", "와은"], answer: 0,
      why: ["Goed: 오다 in het verleden + -ㄴ 셈이다: 온 셈이다.", "Na het verleden 았 komt geen -는.", "올 셈이다 betekent \"van plan zijn te komen\".", "Na een klinker komt alleen ㄴ, geen 은: 온."] },
    { type: "order", q: "Zet in de goede volgorde: \"Dan komt het neer op twintigduizend won per persoon.\"",
      tokens: [["그러면", "geureomyeon"], ["한 사람당", "han saramdang"], ["이만 원인", "iman wonin"], ["셈이에요", "semieyo"]] },
    { type: "fill", q: "하나 값에 두 개를 샀으니까 하나는 공짜로 ___ 셈이에요. (Dat komt neer op één gratis gekregen.)",
      answers: ["받은"], hint: "받다 = krijgen. Het gaat over het verleden.",
      why: "Verleden van een werkwoord + -(으)ㄴ 셈이다: 받다 wordt 받은 셈이다." },
    { type: "open", q: "Vertaal: \"Hij woont al twintig jaar in Korea. Hij is zo goed als een Koreaan.\"",
      model: ["한국에서 20년 동안 살았으니까 거의 한국 사람인 셈이에요.", "한국에 산 지 20년이 됐으니까 한국 사람인 셈이에요.", "그는 한국에서 20년이나 살았으니까 한국 사람인 셈이다."],
      tip: "Check: na een naamwoord 인 셈이다, en staat 셈이다 los?" }
  ],
  review: [
    { type: "mc", q: "일주일에 두 번 운동하니까 꾸준히 ___ 셈이에요. (Dat komt neer op regelmatig sporten.)",
      options: ["운동하는", "운동할", "운동하은", "운동해서"], answer: 0,
      why: ["Goed: werkwoord in het heden + 는 셈이다.", "-ㄹ 셈이다 betekent \"van plan zijn\".", "Na een klinker komt geen 은. Hier hoort -는.", "Vóór 셈 staat een bijvoeglijke vorm, niet -아서."] },
    { type: "mc", q: "어떻게 할 셈이에요? Wat betekent dit?",
      options: ["Wat ben je van plan?", "Waar komt het op neer?", "Hoe heb je het gedaan?", "Hoe vaak doe je het?"], answer: 0,
      why: ["Goed: -(으)ㄹ 셈이다 betekent \"van plan zijn\".", "\"Neerkomen op\" is -는 셈이다 of -(으)ㄴ 셈이다, niet -ㄹ.", "Voor het verleden zou er 했어요 staan.", "Er staat niets over hoe vaak."] },
    { type: "mc", q: "그 가게는 일요일에만 쉬니까 거의 매일 문을 ___ 셈이에요. (Die winkel is zo goed als elke dag open.)",
      options: ["여는", "열", "열는", "열은"], answer: 0,
      why: ["Goed: 열다 verliest ㄹ vóór -는: 여는 셈이다.", "열 셈이다 betekent \"van plan zijn te openen\".", "Bij een stam op ㄹ valt ㄹ weg vóór -는: 여는.", "-은 is geen vorm voor het heden, en ㄹ-stammen krijgen geen 은."] }
  ]
})
