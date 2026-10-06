({
  id: "07", slug: "nameoji", title: "-(으)ㄴ 나머지", sub: "Zo erg ... dat er iets misging",
  canDo: "Je kunt nu zeggen dat een te sterk gevoel of een overdreven handeling tot een gevolg leidde, met -(으)ㄴ 나머지, en je kiest tussen 나머지, -(으)ㄹ 정도로 en -는 바람에.",
  guess: {
    q: "\"Hij was zo zenuwachtig dat hij zijn tekst vergat.\" Welke zin klopt, denk je?",
    options: ["그는 긴장한 나머지 대사를 잊어버렸다.", "그는 긴장할 나머지 대사를 잊어버렸다.", "그는 긴장하기 나머지 대사를 잊어버렸다.", "그는 긴장하고 나머지 대사를 잊어버렸다."], answer: 0,
    why: ["Goed: werkwoord + -(으)ㄴ, dan 나머지.", "-ㄹ wijst naar de toekomst. Het gevoel was er al, dus -ㄴ.", "Voor 나머지 staat een bijvoeglijke vorm, geen -기.", "-고 verbindt twee zinnen. Voor 나머지 moet -ㄴ staan."]
  },
  problem: "In het Nederlands zeg je: \"Hij was zo blij dat hij begon te huilen.\" Een gevoel of handeling ging te ver, en daardoor gebeurde er iets wat je niet plande. In formeel en verhalend Koreaans zeg je dat met -(으)ㄴ 나머지. Letterlijk: \"als rest van te veel ...\".",
  pattern: [
    { l: "te sterk gevoel", v: "너무 긴장하", c: 1 }, { l: "나머지", v: "ㄴ 나머지", c: 2, key: true },
    { l: "gevolg", v: "실수를 하고 말았다", c: 4 }
  ],
  patternCap: "(너무 / 지나치게) + werkwoord of bijv. werkwoord + -(으)ㄴ 나머지 + gevolg (meestal verleden). Spreektaal: 너무 ~아서/어서",
  rules: [
    "Na een klinker: -ㄴ 나머지 (긴장한, 기쁜). Na een medeklinker: -은 나머지 (좋은). ㅂ-stam: 반가운 나머지.",
    "Werkwoorden én bijvoeglijke werkwoorden krijgen -(으)ㄴ. -는 나머지 kom je bijna nooit tegen.",
    "Het gevolg is meestal al gebeurd: verleden tijd, vaak met -고 말았다 of -아/어 버렸다.",
    "Na 나머지 komt geen bevel, voorstel of plan (-세요, -자, -ㄹ 거예요).",
    "Register: schrijftaal en verhalen. In een gesprek zeg je meestal 너무 ~아서/어서."
  ],
  pitfall: "De oorzaak moet een te sterk gevoel of een overdreven handeling zijn (te blij, te gehaast, te druk bezig). Een gewone, externe oorzaak past niet: 지하철이 고장 난 나머지 is fout. Gebruik dan -는 바람에.",
  examples: [
    { cn: "그는 너무 긴장한 나머지 준비한 말을 다 잊어버렸다.", py: "Geuneun neomu ginjanghan nameoji junbihan mareul da ijeobeoryeotda.", nl: "Hij was zo zenuwachtig dat hij alles vergat wat hij had voorbereid." },
    { cn: "오랜만에 친구를 만나 반가운 나머지 눈물이 났다.", py: "Oraenmane chingureul manna bangaun nameoji nunmuri natda.", nl: "Ik zag mijn vriend na lange tijd terug en was zo blij dat de tranen kwamen." },
    { cn: "서두른 나머지 지갑을 집에 두고 나왔다.", py: "Seodureun nameoji jigabeul jibe dugo nawatda.", nl: "Ik had zo'n haast dat ik mijn portemonnee thuis liet liggen." },
    { cn: "일에 지나치게 몰두한 나머지 건강을 해치고 말았다.", py: "Ire jinachige molduhan nameoji geongangeul haechigo maratda.", nl: "Hij ging zo op in zijn werk dat hij zijn gezondheid schaadde." }
  ],
  nuance: [
    { h: "-(으)ㄴ 나머지 of -(으)ㄹ 정도로?",
      p: "Beide vertaal je met \"zo ... dat\". 나머지 vertelt wat er echt gebeurde doordat iets te ver ging. Het gevolg staat achteraan. -(으)ㄹ 정도로 meet hoe sterk iets is, met een beeld. Het beeld hoeft niet echt te gebeuren, en het is niet altijd negatief. Let op de volgorde: bij 정도로 komt het gevoel achteraan.",
      ex: [
        { cn: "그는 너무 기쁜 나머지 소리를 질렀다.", py: "Geuneun neomu gippeun nameoji sorireul jilleotda.", nl: "Hij was zo blij dat hij het uitschreeuwde. (dat gebeurde echt)" },
        { cn: "그는 소리를 지를 정도로 기뻤다.", py: "Geuneun sorireul jireul jeongdoro gippeotda.", nl: "Hij was zo blij dat hij het wel kon uitschreeuwen. (nadruk op hoe blij)" }
      ] },
    { h: "-(으)ㄴ 나머지 of -는 바람에?",
      p: "-는 바람에 geeft een onverwachte gebeurtenis van buitenaf als oorzaak van een slecht gevolg. Het hoort meer bij spreektaal. 나머지 gaat over iets in de persoon zelf dat te ver ging: een gevoel, een toestand, een overdreven handeling. Een kapotte wekker is geen \"te veel\", dus daar past alleen 바람에.",
      ex: [
        { cn: "알람이 안 울리는 바람에 늦잠을 잤다.", py: "Allami an ullineun barame neutjameul jatda.", nl: "Mijn wekker ging niet af, dus ik heb me verslapen." },
        { cn: "너무 피곤한 나머지 늦잠을 잤다.", py: "Neomu pigonhan nameoji neutjameul jatda.", nl: "Ik was zo moe dat ik me verslapen heb." }
      ] },
    { h: "Wanneer NIET, en wat zeg je in een gesprek?",
      p: "Gebruik 나머지 niet voor een gewone, bewuste reactie: honger hebben en dan eten is geen \"te ver gaan\". Het gevolg is meestal ongepland of ongewenst. In een gesprek klinkt 나머지 boekig. Zeg dan 너무 ~아서/어서, of 너무 ~해 가지고 in heel losse spreektaal.",
      ex: [
        { cn: "너무 긴장해서 할 말을 잊어버렸어요.", py: "Neomu ginjanghaeseo hal mareul ijeobeoryeosseoyo.", nl: "Ik was zo zenuwachtig dat ik vergat wat ik wilde zeggen. (gesprek)" }
      ] }
  ],
  mistakes: [
    { wrong: "너무 긴장할 나머지 실수를 했다.", right: "너무 긴장한 나머지 실수를 했다.", why: "Voor 나머지 staat -(으)ㄴ. Het gevoel was er al vóór het gevolg." },
    { wrong: "친구를 만나서 반갑은 나머지 울었다.", right: "친구를 만나서 반가운 나머지 울었다.", why: "반갑다 is een ㅂ-stam: ㅂ wordt 우, dus 반가운." },
    { wrong: "지하철이 고장 난 나머지 회사에 늦었다.", right: "지하철이 고장 나는 바람에 회사에 늦었다.", why: "Een externe, onverwachte gebeurtenis is geen \"te veel\". Daarvoor gebruik je -는 바람에." },
    { wrong: "너무 화가 난 나머지 소리를 지를 거예요.", right: "너무 화가 난 나머지 소리를 지르고 말았어요.", why: "Het gevolg van 나머지 is al gebeurd. Een plan of toekomst past er niet na." }
  ],
  vocab: [
    ["-(으)ㄴ 나머지", "-(eu)n nameoji", "zo erg ... dat (met een gevolg)"], ["긴장하다", "ginjanghada", "zenuwachtig zijn, gespannen zijn"],
    ["반갑다", "bangapda", "blij (iemand te zien)"], ["서두르다", "seodureuda", "haast hebben, zich haasten"],
    ["몰두하다", "molduhada", "opgaan in, zich storten op"], ["해치다", "haechida", "schaden"],
    ["당황하다", "danghwanghada", "in verwarring raken, van slag zijn"], ["엉뚱하다", "eongttunghada", "vreemd, totaal ernaast"],
    ["면접관", "myeonjeopgwan", "interviewer (bij sollicitatie)"], ["차분하다", "chabunhada", "kalm, rustig"]
  ],
  dialogue: [
    ["A", "어제 발표는 잘했어요?", "Eoje balpyoneun jalhaesseoyo?", "Ging je presentatie gisteren goed?"],
    ["B", "아니요. 너무 긴장한 나머지 중간에 할 말을 잊어버렸어요.", "Aniyo. Neomu ginjanghan nameoji junggane hal mareul ijeobeoryeosseoyo.", "Nee. Ik was zo zenuwachtig dat ik halverwege vergat wat ik wilde zeggen."],
    ["A", "저도 그런 적이 있어요. 첫 발표 때 서두른 나머지 슬라이드를 몇 장 건너뛰었거든요.", "Jeodo geureon jeogi isseoyo. Cheot balpyo ttae seodureun nameoji seullaideureul myeot jang geonneottwieotgeodeunyo.", "Dat heb ik ook gehad. Bij mijn eerste presentatie had ik zo'n haast dat ik een paar dia's oversloeg."],
    ["B", "정말요? 그래서 어떻게 됐어요?", "Jeongmallyo? Geuraeseo eotteoke dwaesseoyo?", "Echt? En hoe liep dat af?"],
    ["A", "부장님이 웃으시면서 처음부터 다시 하라고 하셨어요.", "Bujangnimi useusimyeonseo cheoeumbuteo dasi harago hasyeosseoyo.", "De afdelingschef lachte en zei dat ik opnieuw moest beginnen."],
    ["B", "다음에는 저도 천천히 해야겠어요.", "Daeumeneun jeodo cheoncheonhi haeyagesseoyo.", "Volgende keer moet ik het ook rustig aan doen."]
  ],
  reading: {
    title: "첫 면접",
    lines: [
      { cn: "민수는 오랫동안 기다리던 회사의 면접을 보게 되었다.", py: "Minsuneun oraetdongan gidarideon hoesaui myeonjeobeul boge doeeotda.", nl: "Minsu mocht op gesprek komen bij het bedrijf waar hij al lang op hoopte." },
      { cn: "면접 전날 밤, 그는 너무 긴장한 나머지 한숨도 자지 못했다.", py: "Myeonjeop jeonnal bam, geuneun neomu ginjanghan nameoji hansumdo jaji motaetda.", nl: "De avond ervoor was hij zo zenuwachtig dat hij geen oog dichtdeed." },
      { cn: "아침에는 서두른 나머지 넥타이를 매는 것도 잊어버렸다.", py: "Achimeneun seodureun nameoji nektaireul maeneun geotdo ijeobeoryeotda.", nl: "'s Ochtends had hij zo'n haast dat hij zelfs vergat een das om te doen." },
      { cn: "다행히 회사 근처 편의점에서 넥타이를 살 수 있었다.", py: "Dahaenghi hoesa geuncheo pyeonuijeomeseo nektaireul sal su isseotda.", nl: "Gelukkig kon hij in een supermarktje bij het bedrijf een das kopen." },
      { cn: "면접관이 첫 질문을 하자 그는 당황한 나머지 엉뚱한 대답을 하고 말았다.", py: "Myeonjeopgwani cheot jilmuneul haja geuneun danghwanghan nameoji eongttunghan daedabeul hago maratda.", nl: "Toen de interviewer de eerste vraag stelde, raakte hij zo van slag dat hij een totaal verkeerd antwoord gaf." },
      { cn: "그러나 면접관은 웃으며 다시 천천히 말해 보라고 했다.", py: "Geureona myeonjeopgwaneun useumyeo dasi cheoncheonhi malhae borago haetda.", nl: "Maar de interviewer glimlachte en zei dat hij het rustig opnieuw mocht proberen." },
      { cn: "민수는 숨을 깊이 쉬고 준비한 내용을 차분하게 이야기했다.", py: "Minsuneun sumeul gipi swigo junbihan naeyongeul chabunhage iyagihaetda.", nl: "Minsu ademde diep in en vertelde rustig wat hij had voorbereid." },
      { cn: "일주일 후 합격 소식을 들은 그는 너무 기쁜 나머지 거리에서 소리를 질렀다.", py: "Iljuil hu hapgyeok sosigeul deureun geuneun neomu gippeun nameoji georieseo sorireul jilleotda.", nl: "Een week later hoorde hij dat hij was aangenomen. Hij was zo blij dat hij op straat begon te juichen." }
    ],
    questions: [
      { type: "mc", q: "Wat vergat Minsu 's ochtends?",
        options: ["Een das om te doen.", "Zijn telefoon.", "De tekst die hij had voorbereid.", "Het adres van het bedrijf."], answer: 0,
        why: ["Goed: 넥타이를 매는 것도 잊어버렸다.", "Over een telefoon staat niets in de tekst.", "Hij gaf een vreemd antwoord, maar vertelde later rustig wat hij had voorbereid.", "Hij vond het bedrijf wel: hij kocht er vlakbij een das."] },
      { type: "mc", q: "Hoe reageerde de interviewer op het vreemde antwoord?",
        options: ["Hij glimlachte en liet Minsu het opnieuw proberen.", "Hij werd boos en stopte het gesprek.", "Hij stelde meteen een andere vraag.", "Hij gaf Minsu een das."], answer: 0,
        why: ["Goed: 웃으며 다시 천천히 말해 보라고 했다.", "De interviewer was niet boos: hij lachte.", "Hij vroeg Minsu juist om hetzelfde opnieuw te proberen.", "Minsu kocht de das zelf in een winkel."] },
      { type: "mc", q: "당황한 나머지 엉뚱한 대답을 하고 말았다. Wat betekent 나머지 hier?",
        options: ["Hij raakte zo van slag dat hij daardoor een verkeerd antwoord gaf.", "Hij gaf de rest van zijn antwoord.", "Hoewel hij van slag was, gaf hij een goed antwoord.", "Hij raakte van slag omdat hij een verkeerd antwoord gaf."], answer: 0,
        why: ["Goed: een te sterk gevoel (당황하다) leidt tot een ongewild gevolg.", "나머지 betekent hier niet \"de rest\", maar \"als gevolg van te veel ...\".", "나머지 geeft geen tegenstelling, en het antwoord was juist fout.", "De richting is andersom: eerst het gevoel, dan het verkeerde antwoord."] }
    ]
  },
  questions: [
    { type: "mc", q: "오랜만에 가족을 만나서 ___ 나머지 눈물을 흘렸다.",
      options: ["반가운", "반갑은", "반갑는", "반가울"], answer: 0,
      why: ["Goed: ㅂ-stam + -(으)ㄴ wordt 반가운.", "Bij een ㅂ-stam wordt ㅂ een 우. 반갑은 bestaat niet.", "-는 hoort niet bij een bijvoeglijk werkwoord, en niet bij 나머지.", "-ㄹ wijst naar de toekomst. Voor 나머지 staat -(으)ㄴ."] },
    { type: "mc", q: "그는 화가 난 나머지 문을 세게 닫았다. Wat betekent dit?",
      options: ["Hij was zo boos dat hij de deur hard dichtsloeg.", "Hoewel hij boos was, sloeg hij de deur hard dicht.", "Hij sloeg de deur hard dicht, en daardoor werd hij boos.", "Hij was boos, en de rest sloeg de deur dicht."], answer: 0,
      why: ["Goed: te veel boosheid leidt tot het gevolg: de deur dichtslaan.", "나머지 geeft geen tegenstelling.", "De richting is andersom: eerst boos, dan de deur.", "나머지 betekent hier niet \"de rest (van de mensen)\"."] },
    { type: "mc", q: "\"Doordat de metro uitviel, kwam ik te laat op mijn werk.\"",
      options: ["지하철이 고장 나는 바람에 회사에 늦었어요.", "지하철이 고장 난 나머지 회사에 늦었어요.", "지하철이 고장 날 정도로 회사에 늦었어요.", "지하철이 고장 나는 나머지 회사에 늦었어요."], answer: 0,
      why: ["Goed: een onverwachte gebeurtenis van buitenaf: -는 바람에.", "나머지 vraagt een te sterk gevoel of handeling. Een kapotte metro is dat niet.", "-(으)ㄹ 정도로 meet een graad. Hier gaat het om een oorzaak.", "Ook met -는 past 나머지 hier niet: de oorzaak komt van buitenaf."] },
    { type: "mc", q: "\"Het was zo koud dat mijn handen leken te bevriezen.\"",
      options: ["손이 얼 정도로 추웠다.", "손이 언 정도로 추웠다.", "손이 얼 나머지 추웠다.", "손이 얼 바람에 추웠다."], answer: 0,
      why: ["Goed: -(으)ㄹ 정도로 meet hoe koud het was, met een beeld.", "정도로 neemt -(으)ㄹ, niet -(으)ㄴ.", "나머지 neemt -(으)ㄴ, en het gevolg komt erna, niet de oorzaak.", "바람에 neemt -는 en geeft een oorzaak, geen graad."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["너무 긴장한 나머지 실수하지 마세요.", "너무 긴장한 나머지 실수를 하고 말았다.", "지나치게 걱정한 나머지 병이 나고 말았다.", "기쁜 나머지 밤새 잠을 이루지 못했다."], answer: 0,
      why: ["Goed: na 나머지 komt geen verzoek of bevel.", "Dit klopt: te zenuwachtig, met een gevolg in het verleden.", "Dit klopt: te veel zorgen, en daardoor ziek.", "Dit klopt: te blij, en daardoor niet geslapen."] },
    { type: "mc", q: "그는 너무 흥분한 나머지 ___.",
      options: ["실수를 하고 말았다", "실수를 할 것이다", "실수를 하자", "실수를 하세요"], answer: 0,
      why: ["Goed: het gevolg is al gebeurd, met -고 말았다.", "Na 나머지 komt geen voorspelling. Het gevolg is meestal al gebeurd.", "Na 나머지 komt geen voorstel.", "Na 나머지 komt geen bevel."] },
    { type: "fill", q: "너무 놀란 ___ 아무 말도 하지 못했다. (Ik was zo geschrokken dat ik niets kon zeggen.)",
      answers: ["나머지"], hint: "Welk woord betekent hier \"zo erg ... dat\"?",
      why: "놀란 나머지: een te sterk gevoel (놀라다) met een gevolg in het verleden." },
    { type: "order", q: "Zet in de goede volgorde: \"Hij had zo'n haast dat hij zijn telefoon liet liggen.\"",
      tokens: [["그는", "geuneun"], ["서두른 나머지", "seodureun nameoji"], ["휴대폰을", "hyudaeponeul"], ["두고 왔다", "dugo watda"]],
      alt: ["서두른 나머지 그는 휴대폰을 두고 왔다"] },
    { type: "order", q: "Zet in de goede volgorde: \"Ze ging zo op in haar werk dat ze haar gezondheid schaadde.\"",
      tokens: [["그녀는", "geunyeoneun"], ["일에 몰두한 나머지", "ire molduhan nameoji"], ["건강을", "geongangeul"], ["해치고 말았다", "haechigo maratda"]],
      alt: ["일에 몰두한 나머지 그녀는 건강을 해치고 말았다"] },
    { type: "open", q: "Vertaal (schrijftaal, -다): \"Ze was zo blij dat ze begon te huilen.\"",
      model: ["그녀는 너무 기쁜 나머지 눈물을 흘렸다.", "그녀는 너무 기쁜 나머지 울고 말았다.", "그녀는 기쁜 나머지 울음을 터뜨렸다."],
      tip: "Check: 기쁜 (met -ㄴ) vóór 나머지, en een gevolg in het verleden." },
    { type: "open", q: "Zeg dit in spreektaal tegen een collega: 그는 당황한 나머지 엉뚱한 대답을 하고 말았다.",
      model: ["그 사람 너무 당황해서 엉뚱한 대답을 해 버렸어요.", "그분이 너무 당황해서 엉뚱하게 대답했어요.", "너무 당황해 가지고 엉뚱한 대답을 했대요."],
      tip: "Check: 너무 ~아서/어서 in plaats van 나머지, en een -요-einde." }
  ],
  review: [
    { type: "mc", q: "시험 결과에 ___ 나머지 친구에게 화를 내고 말았다. (Ik was zo teleurgesteld in de uitslag dat ik boos werd op een vriend.)",
      options: ["실망한", "실망할", "실망해", "실망하기"], answer: 0,
      why: ["Goed: werkwoord + -ㄴ, dan 나머지.", "-ㄹ wijst naar de toekomst. Het gevoel was er al.", "Voor 나머지 staat een bijvoeglijke vorm, geen -아/어.", "Voor 나머지 staat geen -기."] },
    { type: "mc", q: "\"Hij lachte zo hard dat zijn buik pijn deed.\"",
      options: ["그는 배가 아플 정도로 웃었다.", "그는 배가 아픈 나머지 웃었다.", "그는 배가 아플 나머지 웃었다.", "그는 배가 아플 바람에 웃었다."], answer: 0,
      why: ["Goed: -(으)ㄹ 정도로 zegt hoe hard hij lachte.", "Zo wordt de buikpijn de oorzaak van het lachen. Dat is andersom.", "나머지 neemt -(으)ㄴ, niet -(으)ㄹ.", "바람에 neemt -는 en geeft een oorzaak, geen graad."] },
    { type: "mc", q: "아이는 너무 ___ 나머지 엄마 뒤에 숨었다. (Het kind was zo bang dat het zich achter zijn moeder verstopte.)",
      options: ["무서운", "무섭은", "무섭는", "무서울"], answer: 0,
      why: ["Goed: 무섭다 is een ㅂ-stam, dus 무서운.", "Bij een ㅂ-stam wordt ㅂ een 우. 무섭은 bestaat niet.", "-는 hoort niet bij een bijvoeglijk werkwoord.", "-ㄹ wijst naar de toekomst. Voor 나머지 staat -(으)ㄴ."] }
  ]
})
