({
  id: "12", slug: "madang", title: "-(으)ㄴ/는 마당에", sub: "Nu het al zo is, ...",
  canDo: "Je kunt nu een (meestal ongunstige) situatie noemen en daar een oordeel aan koppelen met -(으)ㄴ/는 마당에, en je kiest tussen 마당에, -는 상황에서 en -는 판에.",
  guess: {
    q: "\"Nu het al zo ver gekomen is, wat valt er nog te verbergen?\" Welke zin klopt, denk je?",
    options: ["이렇게 된 마당에 숨길 게 뭐가 있겠어요?", "이렇게 될 마당에 숨길 게 뭐가 있겠어요?", "이렇게 됐는 마당에 숨길 게 뭐가 있겠어요?", "이렇게 된 마당으로 숨길 게 뭐가 있겠어요?"], answer: 0,
    why: ["Goed: het is al gebeurd, dus -(으)ㄴ: 된 마당에.", "-ㄹ wijst naar de toekomst. De situatie is er al.", "Na -었- volgt geen -는. Gebruik 된.", "Het partikel is 에: 마당에, niet 마당으로."]
  },
  problem: "In het Nederlands zeg je: \"Nu het bedrijf toch sluit, heeft dat geen zin meer.\" Je noemt een situatie die al vaststaat, meestal een slechte, en je trekt er een conclusie uit. In het Koreaans doe je dat met -(으)ㄴ/는 마당에. Het tweede deel is een oordeel, vaak een retorische vraag.",
  pattern: [
    { l: "situatie", v: "회사가 문을 닫", c: 1 }, { l: "마당에", v: "는 마당에", c: 2, key: true },
    { l: "onderwerp", v: "월급 인상은", c: 3 }, { l: "oordeel", v: "생각할 수도 없다", c: 4 }
  ],
  patternCap: "Situatie + -는 마당에 (werkwoord, nu) / -(으)ㄴ 마당에 (werkwoord voltooid, bijvoeglijk werkwoord) + oordeel of retorische vraag; spreektaal ook -는 판에",
  rules: [
    "Werkwoord dat nu bezig is: -는 마당에 (떠나는 마당에). Al gebeurd: -(으)ㄴ 마당에 (이렇게 된 마당에, 끝난 마당에).",
    "Bijvoeglijk werkwoord: -(으)ㄴ 마당에 (힘든, 어려운). Woorden op 있다/없다 krijgen -는: 돈도 없는 마당에.",
    "Het tweede deel is een oordeel: een retorische vraag (-겠어요?, 무슨 N이에요), \"het heeft geen zin\" of \"dan moet je ...\" (-아/어야지).",
    "마당 is een zelfstandig naamwoord: schrijf een spatie ervoor (된 마당에).",
    "De situatie is bijna altijd ongunstig of dringend. Voor een neutrale tijd of plaats gebruik je -(으)ㄹ 때 of -는 상황에서."
  ],
  pitfall: "마당에 is geen neutraal \"toen\" of \"terwijl\". Zonder oordeel in het tweede deel klinkt het fout: 회의가 시작되는 마당에 커피를 마셨다 kan niet. Zeg dan 회의가 시작되기 전에.",
  examples: [
    { cn: "이렇게 된 마당에 숨길 게 뭐가 있겠어요?", py: "Ireoke doen madange sumgil ge mwoga itgesseoyo?", nl: "Nu het zo ver gekomen is, wat valt er nog te verbergen?" },
    { cn: "회사가 문을 닫는 마당에 월급 인상은 생각할 수도 없다.", py: "Hoesaga muneul danneun madange wolgeup insangeun saenggakal sudo eopda.", nl: "Nu het bedrijf de deuren sluit, valt aan loonsverhoging niet eens te denken." },
    { cn: "먹고살기도 힘든 마당에 해외여행은 무슨 해외여행이에요.", py: "Meokgosalgido himdeun madange haeoeyeohaengeun museun haeoeyeohaengieyo.", nl: "Rondkomen is al moeilijk genoeg. Een reis naar het buitenland, kom nou." },
    { cn: "경기가 침체된 마당에 세금을 올리는 것은 바람직하지 않다.", py: "Gyeonggiga chimchedoen madange segeumeul ollineun geoseun baramjikaji anta.", nl: "Nu de economie stilstaat, is het niet wenselijk de belastingen te verhogen." }
  ],
  nuance: [
    { h: "-는 마당에 of -는 상황에서?",
      p: "-는 상황에서 beschrijft een situatie neutraal: \"in een situatie waarin\". -는 마당에 voegt een oordeel toe: de situatie is al slecht genoeg, dus wat volgt is onzinnig of juist nodig. Met 마당에 klinkt bijna altijd kritiek of berusting door.",
      ex: [
        { cn: "모두가 바쁜 상황에서 그는 침착하게 일을 처리했다.", py: "Moduga bappeun sanghwangeseo geuneun chimchakage ireul cheorihaetda.", nl: "In een situatie waarin iedereen het druk had, handelde hij het werk rustig af." },
        { cn: "모두가 바쁜 마당에 그는 혼자 휴가를 떠났다.", py: "Moduga bappeun madange geuneun honja hyugareul tteonatda.", nl: "Terwijl iedereen het al zo druk had, ging hij in z'n eentje op vakantie." }
      ] },
    { h: "-는 마당에 of -는 판에?",
      p: "-는 판에 betekent bijna hetzelfde, maar is ruwer en hoort vooral in spreektaal. 판 roept een chaotische, drukke scène op. In nette tekst en in het nieuws kies je 마당에. Nog sterker en spreektaliger is -는 판국에.",
      ex: [
        { cn: "다들 정신없는 판에 너까지 왜 그래?", py: "Dadeul jeongsineomneun pane neokkaji wae geurae?", nl: "Iedereen is al de kluts kwijt. Waarom doe jij nou ook zo?" },
        { cn: "직원들이 일자리를 잃는 마당에 임원들이 성과급을 받는 것은 부적절하다.", py: "Jigwondeuri iljarireul illeun madange imwondeuri seonggwageubeul banneun geoseun bujeokjeolhada.", nl: "Terwijl werknemers hun baan verliezen, is het ongepast dat bestuurders een bonus krijgen." }
      ] },
    { h: "Wanneer NIET: neutrale of positieve momenten",
      p: "Gaat het alleen om een moment in de tijd, zonder oordeel, dan past 마당에 niet. Vergelijk een gewone volgorde met -(으)ㄴ 후에 en een conclusie met 마당에.",
      ex: [
        { cn: "시험이 끝난 후에 친구들과 파티를 했어요.", py: "Siheomi kkeunnan hue chingudeulgwa patireul haesseoyo.", nl: "Na het examen hield ik een feestje met vrienden." },
        { cn: "시험이 끝난 마당에 더 공부해서 뭐 해요?", py: "Siheomi kkeunnan madange deo gongbuhaeseo mwo haeyo?", nl: "Nu het examen toch voorbij is, wat heeft verder studeren voor zin?" }
      ] },
    { h: "Register: schrijftaal en spreektaal",
      p: "마당에 komt voor in kranten en betogen, met een -다-einde. In gesprekken hoor je het ook, maar vaker -는 판에, 이렇게 된 이상 (nu het zo is) of 이 와중에 (te midden van dit alles).",
      ex: [
        { cn: "이렇게 된 이상 솔직하게 말할게.", py: "Ireoke doen isang soljikage malhalge.", nl: "Nu het zo is, zeg ik het eerlijk." },
        { cn: "이 와중에 농담이 나와?", py: "I wajunge nongdami nawa?", nl: "Maak je nu nog grapjes, midden in dit alles?" }
      ] }
  ],
  mistakes: [
    { wrong: "돈도 없은 마당에 무슨 여행이야?", right: "돈도 없는 마당에 무슨 여행이야?", why: "Woorden op 있다/없다 krijgen -는, ook als ze een toestand beschrijven." },
    { wrong: "먹고살기도 힘드는 마당에 무슨 여행이야?", right: "먹고살기도 힘든 마당에 무슨 여행이야?", why: "힘들다 is een bijvoeglijk werkwoord: de ㄹ valt weg en je krijgt 힘든." },
    { wrong: "회의가 시작되는 마당에 커피를 한 잔 마셨어요.", right: "회의가 시작되기 전에 커피를 한 잔 마셨어요.", why: "Hier is geen oordeel, alleen een moment. Daar past 마당에 niet." },
    { wrong: "이렇게 된마당에 솔직하게 말할게요.", right: "이렇게 된 마당에 솔직하게 말할게요.", why: "마당 is een zelfstandig naamwoord. Schrijf een spatie ervoor." }
  ],
  vocab: [
    ["-(으)ㄴ/는 마당에", "-(eu)n/neun madange", "nu het al zo is, in deze situatie"], ["숨기다", "sumgida", "verbergen"],
    ["먹고살다", "meokgosalda", "rondkomen, de kost verdienen"], ["침체되다", "chimchedoeda", "stilstaan, stagneren"],
    ["바람직하다", "baramjikada", "wenselijk zijn"], ["구조조정", "gujojojeong", "reorganisatie, ontslagronde"],
    ["성과급", "seonggwageup", "prestatiebonus"], ["비난", "binan", "kritiek, verwijt"],
    ["설득력", "seoldeungnyeok", "overtuigingskracht"], ["반납하다", "bannapada", "teruggeven, inleveren"]
  ],
  dialogue: [
    ["A", "이번 달에도 회사 사정이 안 좋대요.", "Ibeon daredo hoesa sajeongi an jotaeyo.", "Ook deze maand schijnt het slecht te gaan met het bedrijf."],
    ["B", "그럼 성과급은 못 받겠네요.", "Geureom seonggwageubeun mot batgenneyo.", "Dan krijgen we zeker geen bonus."],
    ["A", "구조조정 얘기까지 나오는 마당에 성과급은 무슨 성과급이에요.", "Gujojojeong yaegikkaji naoneun madange seonggwageubeun museun seonggwageubieyo.", "Er wordt zelfs al over een ontslagronde gepraat. Een bonus, kom nou."],
    ["B", "그렇긴 하네요. 이렇게 된 마당에 이직 준비라도 해야겠어요.", "Geureokin haneyo. Ireoke doen madange ijik junbirado haeyagesseoyo.", "Dat is waar. Nu het zo ver is, moet ik me maar voorbereiden op een andere baan."],
    ["A", "저도요. 다들 불안한 판에 혼자 여유 부릴 수는 없죠.", "Jeodoyo. Dadeul buranhan pane honja yeoyu buril suneun eopjyo.", "Ik ook. Iedereen is onrustig. Dan kun je zelf niet rustig achteroverleunen."]
  ],
  reading: {
    title: "위기 속의 성과급 논란",
    lines: [
      { cn: "최근 한 대기업이 임원들에게 거액의 성과급을 지급해 비난을 받고 있다.", py: "Choegeun han daegieobi imwondeurege geoaegui seonggwageubeul jigeupae binaneul batgo itda.", nl: "Een groot bedrijf krijgt kritiek omdat het zijn bestuurders onlangs enorme bonussen uitkeerde." },
      { cn: "이 회사는 올해 큰 적자를 기록했고, 직원 천 명을 줄이는 구조조정을 발표했다.", py: "I hoesaneun olhae keun jeokjareul girokaetgo, jigwon cheon myeongeul jurineun gujojojeongeul balpyohaetda.", nl: "Het bedrijf leed dit jaar een groot verlies en kondigde een reorganisatie aan waarbij duizend banen verdwijnen." },
      { cn: "노조는 \"직원들이 일자리를 잃는 마당에 임원들이 성과급을 받는 것은 말이 안 된다\"고 주장했다.", py: "Nojoneun \"jigwondeuri iljarireul illeun madange imwondeuri seonggwageubeul banneun geoseun mari an doenda\"go jujanghaetda.", nl: "De vakbond zei: \"Terwijl werknemers hun baan verliezen, is het onzin dat bestuurders een bonus krijgen.\"" },
      { cn: "회사 측은 성과급이 작년 실적에 따른 것이라고 설명했다.", py: "Hoesa cheugeun seonggwageubi jangnyeon siljeoge ttareun geosirago seolmyeonghaetda.", nl: "Het bedrijf legde uit dat de bonussen gebaseerd waren op de resultaten van vorig jaar." },
      { cn: "그러나 경영이 이렇게 어려워진 마당에 그런 설명은 설득력이 없다는 지적이 많다.", py: "Geureona gyeongyeongi ireoke eoryeowojin madange geureon seolmyeongeun seoldeungnyeogi eopdaneun jijeogi manta.", nl: "Maar velen merken op dat zo'n uitleg niet overtuigt, nu het bedrijf er zo slecht voor staat." },
      { cn: "한 전문가는 \"위기 상황에서는 경영진이 먼저 책임을 지는 모습을 보여야 한다\"고 말했다.", py: "Han jeonmunganeun \"wigi sanghwangeseoneun gyeongyeongjini meonjeo chaegimeul jineun moseubeul boyeoya handa\"go malhaetda.", nl: "Een deskundige zei: \"In een crisis moet de leiding als eerste laten zien dat ze verantwoordelijkheid neemt.\"" },
      { cn: "비난이 커지자 회사는 성과급 일부를 반납하겠다고 밝혔다.", py: "Binani keojija hoesaneun seonggwageup ilbureul bannapagetdago balkyeotda.", nl: "Toen de kritiek groeide, maakte het bedrijf bekend dat een deel van de bonussen wordt teruggegeven." },
      { cn: "하지만 노조는 \"일이 이렇게 커진 마당에 일부 반납으로는 부족하다\"는 입장이다.", py: "Hajiman nojoneun \"iri ireoke keojin madange ilbu bannabeuroneun bujokada\"neun ipjangida.", nl: "Maar de vakbond vindt: \"Nu de zaak zo groot is geworden, is een gedeeltelijke teruggave niet genoeg.\"" }
    ],
    questions: [
      { type: "mc", q: "Waarom krijgt het bedrijf kritiek?",
        options: ["Het keerde bestuurders grote bonussen uit terwijl er banen verdwijnen.", "Het verhoogde de lonen van alle werknemers.", "Het maakte dit jaar een grote winst.", "Het weigerde met de vakbond te praten."], answer: 0,
        why: ["Goed: 거액의 성과급 en tegelijk een 구조조정 van duizend banen.", "Over loonsverhoging voor iedereen staat niets in de tekst.", "Het bedrijf leed juist verlies (큰 적자).", "Over een weigering staat niets in de tekst."] },
      { type: "mc", q: "Wat besloot het bedrijf uiteindelijk?",
        options: ["Een deel van de bonussen teruggeven.", "Alle bonussen teruggeven.", "De reorganisatie afblazen.", "Meer werknemers aannemen."], answer: 0,
        why: ["Goed: 성과급 일부를 반납하겠다고 밝혔다.", "Het gaat om 일부, een deel. Dat is de vakbond juist niet genoeg.", "Over het afblazen van de reorganisatie staat niets.", "Over nieuwe werknemers staat niets."] },
      { type: "mc", q: "직원들이 일자리를 잃는 마당에 ... Wat drukt 마당에 hier uit?",
        options: ["De situatie is al slecht, dus de bonus is onaanvaardbaar.", "Een neutraal tijdstip: op het moment dat.", "Een doel: om banen te redden.", "Een voorwaarde: als werknemers hun baan verliezen."], answer: 0,
        why: ["Goed: 마당에 koppelt een slechte situatie aan een oordeel (말이 안 된다).", "Voor een neutraal tijdstip zou -(으)ㄹ 때 staan.", "Een doel geef je aan met -기 위해.", "Een voorwaarde geef je aan met -(으)면."] }
    ]
  },
  questions: [
    { type: "mc", q: "통장에 돈도 ___ 마당에 무슨 쇼핑이에요?",
      options: ["없는", "없은", "없을", "없어"], answer: 0,
      why: ["Goed: 없다 krijgt altijd -는.", "Woorden op 있다/없다 krijgen -는, niet -은.", "-을 wijst naar de toekomst. Het geld is er nu al niet.", "Vóór 마당 moet een vorm met -ㄴ of -는 staan."] },
    { type: "mc", q: "먹고살기도 ___ 마당에 차를 바꾸자고요?",
      options: ["힘든", "힘드는", "힘들", "힘들은"], answer: 0,
      why: ["Goed: bijvoeglijk werkwoord op ㄹ: de ㄹ valt weg, 힘든.", "-는 hoort bij gewone werkwoorden, niet bij 힘들다.", "-ㄹ wijst naar de toekomst en past niet vóór 마당에.", "Bij een stam op ㄹ valt de ㄹ weg. Er komt geen -은."] },
    { type: "mc", q: "\"Nu het al zo ver gekomen is, moet ik eerlijk zijn.\"",
      options: ["이렇게 된 마당에 솔직하게 말해야겠어요.", "이렇게 될 마당에 솔직하게 말해야겠어요.", "이렇게 됐는 마당에 솔직하게 말해야겠어요.", "이렇게 된 마당으로 솔직하게 말해야겠어요."], answer: 0,
      why: ["Goed: al gebeurd, dus -(으)ㄴ 마당에.", "-ㄹ wijst naar de toekomst. De situatie bestaat al.", "Na -었- volgt geen -는.", "Het partikel is 에, niet 으로."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["시험이 끝난 마당에 친구들과 즐겁게 파티를 했어요.", "시험이 끝난 마당에 더 공부해서 뭐 해요?", "회사가 어려운 마당에 성과급은 무슨 성과급이에요.", "다들 바쁜 마당에 혼자 놀러 가면 어떡해요?"], answer: 0,
      why: ["Goed: hier is geen oordeel, alleen een vrolijk verslag. Zeg: 시험이 끝난 후에.", "Dit klopt: een retorische vraag als oordeel.", "Dit klopt: slechte situatie plus \"kom nou\".", "Dit klopt: kritiek op wat iemand doet in een drukke situatie."] },
    { type: "mc", q: "Welke zin beschrijft de situatie neutraal, zonder kritiek?",
      options: ["모두가 바쁜 상황에서 그는 침착하게 일을 처리했다.", "모두가 바쁜 마당에 그는 혼자 휴가를 떠났다.", "모두가 바쁜 판에 그는 혼자 휴가를 떠났다.", "모두가 바쁜 마당에 휴가는 무슨 휴가야."], answer: 0,
      why: ["Goed: -는 상황에서 is neutraal.", "마당에 voegt kritiek toe: hoe kon hij nu op vakantie gaan.", "판에 is net als 마당에 kritisch, en nog spreektaliger.", "Een retorische vraag met 마당에 is juist een sterk oordeel."] },
    { type: "mc", q: "Je schrijft een opiniestuk in de krant. Welke zin past het best?",
      options: ["물가가 치솟는 마당에 공공요금까지 올리는 것은 무리다.", "물가가 치솟는 판국에 공공요금까지 올리면 어떡해?", "물가가 치솟는 판에 공공요금까지 올린다니 말이 돼?", "물가가 치솟는 마당에 공공요금까지 올리면 어떡하냐고."], answer: 0,
      why: ["Goed: 마당에 met een -다-einde is de nette schrijfstijl.", "판국에 en -면 어떡해 zijn spreektaal.", "판에 en 말이 돼? zijn spreektaal.", "-냐고 is een spreektalig, emotioneel einde."] },
    { type: "mc", q: "Wat betekent: 떠나는 마당에 굳이 싸울 필요는 없잖아요?",
      options: ["Nu je toch vertrekt, hoeven we toch geen ruzie meer te maken.", "Als je vertrekt, moeten we ruzie maken.", "Voordat je vertrekt, moeten we eerst ruzie maken.", "Omdat we ruzie maakten, vertrek je."], answer: 0,
      why: ["Goed: 마당에 = nu het al zo is, met een oordeel: geen zin in ruzie.", "마당에 is geen voorwaarde, en 필요는 없다 betekent \"hoeft niet\".", "마당에 betekent niet \"voordat\". Dat is -기 전에.", "De oorzaak-volgorde is omgedraaid. 마당에 hangt aan 떠나는."] },
    { type: "order", q: "Zet in de goede volgorde: \"Nu het zo ver gekomen is, moet ik eerlijk zijn.\"",
      tokens: [["이렇게", "ireoke"], ["된 마당에", "doen madange"], ["솔직하게", "soljikage"], ["말해야겠어요", "malhaeyagesseoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Nu het bedrijf de deuren sluit, valt aan loonsverhoging niet te denken.\"",
      tokens: [["회사가", "hoesaga"], ["문을 닫는 마당에", "muneul danneun madange"], ["월급 인상은", "wolgeup insangeun"], ["생각할 수도", "saenggakal sudo"], ["없다", "eopda"]],
      alt: ["월급 인상은 회사가 문을 닫는 마당에 생각할 수도 없다"] },
    { type: "fill", q: "다들 힘든 ___ 혼자 불평하면 안 되지. (Iedereen heeft het al moeilijk. Dan moet je niet in je eentje klagen.)",
      answers: ["마당에", "판에", "판국에"], hint: "Welk woord koppelt een slechte situatie aan een oordeel?", why: "힘든 마당에 (of in spreektaal 힘든 판에): de situatie is al slecht, dus klagen kan niet." },
    { type: "open", q: "Vertaal: \"Nu het examen toch voorbij is, wat heeft verder studeren voor zin?\"",
      model: ["시험이 끝난 마당에 더 공부해서 뭐 해요?", "시험이 다 끝난 마당에 공부해서 뭐 하겠어요?", "시험도 끝난 마당에 더 공부할 필요가 있을까요?"],
      tip: "Check: 끝난 (voltooid, -ㄴ) vóór 마당에, een spatie, en een retorische vraag als tweede deel." },
    { type: "open", q: "Vertaal in formele schrijfstijl (-다): \"Nu de economie stilstaat, is het niet wenselijk de belastingen te verhogen.\"",
      model: ["경기가 침체된 마당에 세금을 올리는 것은 바람직하지 않다.", "경기가 침체되어 있는 마당에 세금을 인상하는 것은 바람직하지 않다.", "경제가 어려운 마당에 증세는 바람직하지 않다."],
      tip: "Check: 침체된 of 어려운 (-ㄴ) vóór 마당에, een oordeel in het tweede deel en een -다-einde." }
  ],
  review: [
    { type: "mc", q: "가게가 망하게 ___ 마당에 직원을 더 뽑자고요?",
      options: ["생긴", "생길", "생기는", "생겼는"], answer: 0,
      why: ["Goed: -게 생기다 (op het punt staan) staat in de voltooide vorm: 생긴 마당에.", "-ㄹ wijst naar de toekomst. De dreiging is er al.", "-게 생기다 gebruik je hier als een al ontstane toestand: 생긴.", "Na -었- volgt geen -는."] },
    { type: "mc", q: "\"Nu het contract al getekend is, heeft spijt geen zin.\"",
      options: ["계약서에 이미 서명한 마당에 후회해도 소용없어요.", "계약서에 이미 서명할 마당에 후회해도 소용없어요.", "계약서에 이미 서명했는 마당에 후회해도 소용없어요.", "계약서에 이미 서명한 마당으로 후회해도 소용없어요."], answer: 0,
      why: ["Goed: al gebeurd, dus -(으)ㄴ 마당에.", "-ㄹ wijst naar de toekomst, maar het is al getekend.", "Na -었- volgt geen -는.", "Het partikel is 에, niet 으로."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["날씨가 좋은 마당에 공원에서 산책을 했어요.", "비까지 오는 마당에 굳이 나가야 해요?", "다들 지친 마당에 회의를 또 하자고요?", "돈도 없는 마당에 새 차는 무슨 새 차예요."], answer: 0,
      why: ["Goed: een neutraal, prettig moment zonder oordeel. Zeg: 날씨가 좋아서 산책을 했어요.", "Dit klopt: slechte situatie plus retorische vraag.", "Dit klopt: iedereen is moe, dus een extra vergadering is onzinnig.", "Dit klopt: geen geld, dus een nieuwe auto is onzin."] }
  ]
})
