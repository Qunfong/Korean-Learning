({
  id: "06", slug: "gedoeda", title: "-게 되다", sub: "Het is zo gekomen",
  canDo: "Je kunt nu met -게 되다 vertellen hoe iets door de situatie zo gekomen is, of hoe je veranderd bent, en je weet wanneer -기로 하다 of -아/어지다 beter past.",
  guess: {
    q: "\"Door mijn werk ben ik naar Seoul verhuisd.\" (Je koos het niet zelf.) Welke zin klopt, denk je?",
    options: ["회사 때문에 서울로 이사하게 됐어요.", "회사 때문에 서울로 이사하게 됬어요.", "회사 때문에 서울로 이사하기 됐어요.", "회사 때문에 서울로 이사해게 됐어요."], answer: 0,
    why: ["Goed: stam 이사하 + -게 됐어요.", "됬어요 is een spelfout. Het is 됐어요 (되었어요).", "De uitgang is -게, niet -기.", "-게 komt aan de stam 이사하, niet aan de 어-vorm."]
  },
  problem: "Soms beslis je iets niet zelf. De situatie brengt je ergens. Of je verandert langzaam: eerst niet, nu wel. In het Nederlands zeg je \"het kwam zo\" of \"uiteindelijk\". In het Koreaans zeg je -게 되다.",
  pattern: [
    { l: "situatie", v: "회사 때문에", c: 1 }, { l: "werkwoord", v: "이사하", c: 4 }, { l: "-게 되다", v: "게 됐어요", c: 2, key: true }
  ],
  patternCap: "Stam + 게 됐어요 = het is zo gekomen dat ... · Stam + 게 될 거예요 = het gaat zo komen dat ...",
  rules: [
    "Stam + -게 되다, met of zonder 받침: 가게 되다, 먹게 되다.",
    "Meestal in de verleden tijd: -게 됐어요. Het is zo gekomen.",
    "Voor later: -게 될 거예요. 다음 달부터 일하게 될 거예요.",
    "Met 좋아하다, 알다 of 잘하다 beschrijf je een verandering: 좋아하게 됐어요 = ben gaan houden van.",
    "Bij een ㄹ-stam blijft de ㄹ staan: 살다 wordt 살게 되다, 알다 wordt 알게 되다."
  ],
  pitfall: "Schrijf 됐어요, de korte vorm van 되었어요. 됬어요 is fout, ook al hoor je geen verschil.",
  examples: [
    { cn: "회사 때문에 서울로 이사하게 됐어요.", py: "Hoesa ttaemune seoullo isahage dwaesseoyo.", nl: "Door mijn werk ben ik naar Seoul verhuisd." },
    { cn: "한국 드라마를 보고 한국어를 좋아하게 됐어요.", py: "Hanguk deuramareul bogo hangugeoreul joahage dwaesseoyo.", nl: "Door Koreaanse series ben ik Koreaans leuk gaan vinden." },
    { cn: "다음 달부터 이 팀에서 일하게 될 거예요.", py: "Daeum dalbuteo i timeseo ilhage doel geoyeyo.", nl: "Vanaf volgende maand ga ik in dit team werken." },
    { cn: "친구 덕분에 그 사람을 알게 됐어요.", py: "Chingu deokbune geu sarameul alge dwaesseoyo.", nl: "Dankzij een vriend heb ik die persoon leren kennen." }
  ],
  nuance: [
    { h: "-게 되다 of -기로 하다?",
      p: "-게 되다 zegt: het is zo gekomen, door de situatie of door anderen. -기로 하다 zegt: ik heb het zelf besloten. Dezelfde gebeurtenis klinkt dus anders. Met -게 되다 klinkt het bescheiden of onvermijdelijk. Met -기로 하다 neem je zelf de beslissing.",
      ex: [
        { cn: "회사에서 저를 서울로 보내서 서울에서 일하게 됐어요.", py: "Hoesaeseo jeoreul seoullo bonaeseo seoureseo ilhage dwaesseoyo.", nl: "Mijn bedrijf stuurde me naar Seoul, dus nu werk ik in Seoul." },
        { cn: "저는 서울에서 일하기로 했어요.", py: "Jeoneun seoureseo ilhagiro haesseoyo.", nl: "Ik heb besloten in Seoul te werken." }
      ] },
    { h: "-게 되다 of -아/어지다?",
      p: "Allebei betekenen ze \"worden\" of \"gaan\". Bij een bijvoeglijk werkwoord (koud, mooi, goed) gebruik je -아/어지다: 추워졌어요. Bij een handeling of gevoel gebruik je -게 되다: 좋아하게 됐어요. Let op het paar: 좋아졌어요 = het is beter geworden, 좋아하게 됐어요 = ik ben het leuk gaan vinden.",
      ex: [
        { cn: "날씨가 많이 추워졌어요.", py: "Nalssiga mani chuwojyeosseoyo.", nl: "Het is veel kouder geworden." },
        { cn: "요즘 한국어 실력이 좋아졌어요.", py: "Yojeum hangugeo sillyeogi joajyeosseoyo.", nl: "Mijn Koreaans is de laatste tijd beter geworden." },
        { cn: "요즘 한국 음악을 좋아하게 됐어요.", py: "Yojeum hanguk eumageul joahage dwaesseoyo.", nl: "Ik ben de laatste tijd Koreaanse muziek leuk gaan vinden." }
      ] },
    { h: "Register: bescheiden nieuws brengen",
      p: "In formele situaties brengen Koreanen eigen nieuws vaak met -게 되다, ook als ze het zelf kozen. Het klinkt bescheiden: niet \"ik heb besloten\", maar \"het is zo gelopen\". Je hoort het bij een nieuwe baan, een verhuizing of een huwelijk. Formeel: -게 되었습니다.",
      ex: [
        { cn: "다음 달에 결혼하게 되었습니다.", py: "Daeum dare gyeolhonhage doeeotseumnida.", nl: "Volgende maand ga ik trouwen." }
      ] }
  ],
  mistakes: [
    { wrong: "한국 음식을 좋아하게 됬어요.", right: "한국 음식을 좋아하게 됐어요.", why: "되 + 었 wordt 됐. 됬 bestaat niet." },
    { wrong: "날씨가 춥게 됐어요.", right: "날씨가 추워졌어요.", why: "Bij een bijvoeglijk werkwoord zoals 춥다 gebruik je -아/어지다 voor een verandering." },
    { wrong: "내일부터 운동하게 했어요.", right: "내일부터 운동하기로 했어요.", why: "Een eigen besluit is -기로 하다. -게 하다 betekent \"iemand iets laten doen\"." },
    { wrong: "내년에 부산에서 사게 될 거예요.", right: "내년에 부산에서 살게 될 거예요.", why: "Vóór -게 blijft de ㄹ van 살다 staan. 사게 komt van 사다 (kopen)." }
  ],
  vocab: [
    ["-게 되다", "-ge doeda", "het is zo gekomen dat; gaan (verandering)"], ["이사하다", "isahada", "verhuizen"], ["사귀다", "sagwida", "(vrienden) maken, omgaan met"],
    ["덕분에", "deokbune", "dankzij"], ["실력", "sillyeok", "vaardigheid, niveau"], ["사무실", "samusil", "kantoor"],
    ["필요하다", "piryohada", "nodig zijn"], ["맵다", "maepda", "pittig, scherp"], ["이제", "ije", "nu, inmiddels"], ["처음", "cheoeum", "begin, eerste keer"]
  ],
  dialogue: [
    ["A", "한국어를 어떻게 공부하게 됐어요?", "Hangugeoreul eotteoke gongbuhage dwaesseoyo?", "Hoe ben je Koreaans gaan leren?"],
    ["B", "한국 친구를 사귀게 됐는데 그 친구하고 이야기하고 싶었어요.", "Hanguk chingureul sagwige dwaenneunde geu chinguhago iyagihago sipeosseoyo.", "Ik kreeg een Koreaanse vriend. Ik wilde met die vriend praten."],
    ["A", "그럼 한국에도 가 봤어요?", "Geureom hangugedo ga bwasseoyo?", "Ben je dan ook al in Korea geweest?"],
    ["B", "아직 안 가 봤어요. 그런데 내년에 한국에서 일하게 될 거예요.", "Ajik an ga bwasseoyo. Geureonde naenyeone hangugeseo ilhage doel geoyeyo.", "Nog niet. Maar volgend jaar ga ik in Korea werken."]
  ],
  reading: {
    title: "서울에 오게 된 이유",
    lines: [
      { cn: "저는 네덜란드 사람이고 지금 서울에 살아요.", py: "Jeoneun nedeollandeu saramigo jigeum seoure sarayo.", nl: "Ik ben Nederlander en woon nu in Seoul." },
      { cn: "처음에는 한국에 대해 잘 몰랐어요.", py: "Cheoeumeneun hanguge daehae jal mollasseoyo.", nl: "In het begin wist ik weinig over Korea." },
      { cn: "그런데 대학교에서 한국 친구를 사귀게 됐어요.", py: "Geureonde daehakgyoeseo hanguk chingureul sagwige dwaesseoyo.", nl: "Maar op de universiteit kreeg ik een Koreaanse vriend." },
      { cn: "그 친구 덕분에 한국 음식과 노래를 알게 됐어요.", py: "Geu chingu deokbune hanguk eumsikgwa noraereul alge dwaesseoyo.", nl: "Dankzij die vriend leerde ik Koreaans eten en Koreaanse liedjes kennen." },
      { cn: "그래서 저는 한국어를 배우기로 했어요.", py: "Geuraeseo jeoneun hangugeoreul baeugiro haesseoyo.", nl: "Daarom besloot ik Koreaans te leren." },
      { cn: "열심히 공부해서 한국어 실력이 많이 좋아졌어요.", py: "Yeolsimhi gongbuhaeseo hangugeo sillyeogi mani joajyeosseoyo.", nl: "Ik studeerde hard, en mijn Koreaans werd veel beter." },
      { cn: "작년에 우리 회사가 서울에 사무실을 열었어요.", py: "Jangnyeone uri hoesaga seoure samusireul yeoreosseoyo.", nl: "Vorig jaar opende mijn bedrijf een kantoor in Seoul." },
      { cn: "한국어를 할 수 있는 사람이 필요했기 때문에 제가 서울에서 일하게 됐어요.", py: "Hangugeoreul hal su inneun sarami piryohaetgi ttaemune jega seoureseo ilhage dwaesseoyo.", nl: "Ze hadden iemand nodig die Koreaans spreekt, dus zo kwam ik in Seoul te werken." },
      { cn: "이제는 매운 음식도 좋아하게 됐어요.", py: "Ijeneun maeun eumsikdo joahage dwaesseoyo.", nl: "Inmiddels ben ik ook pittig eten lekker gaan vinden." }
    ],
    questions: [
      { type: "mc", q: "Waarom werkt de schrijver nu in Seoul?",
        options: ["Het bedrijf had iemand nodig die Koreaans spreekt.", "De Koreaanse vriend vroeg het.", "De schrijver wilde pittig eten.", "De universiteit stuurde de schrijver."], answer: 0,
        why: ["Goed: 한국어를 할 수 있는 사람이 필요했기 때문에 ... 일하게 됐어요.", "De vriend speelt een rol bij het leren, niet bij het werk.", "Pittig eten kwam pas later: 이제는.", "De universiteit is waar de schrijver de vriend leerde kennen."] },
      { type: "mc", q: "Wat heeft de schrijver ZELF besloten?",
        options: ["Koreaans leren.", "In Seoul werken.", "Een kantoor openen.", "Een Koreaanse vriend krijgen."], answer: 0,
        why: ["Goed: 한국어를 배우기로 했어요. -기로 하다 = zelf besluiten.", "Dat is zo gekomen: 일하게 됐어요.", "Dat deed het bedrijf.", "Dat is zo gekomen: 사귀게 됐어요."] },
      { type: "mc", q: "이제는 매운 음식도 좋아하게 됐어요. Wat zegt -게 되다 hier?",
        options: ["Eerst niet, nu wel: de schrijver is veranderd.", "De schrijver besloot pittig eten te eten.", "De schrijver moet pittig eten.", "Het eten is pittiger geworden."], answer: 0,
        why: ["Goed: met 좋아하다 beschrijft -게 되다 een verandering.", "Een besluit zou 먹기로 했어요 zijn.", "Moeten is -아/어야 하다.", "Dan verandert het eten: 매워졌어요. Hier verandert de schrijver."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik ben Koreaans eten lekker gaan vinden.\"",
      options: ["한국 음식을 좋아하게 됐어요.", "한국 음식을 좋아하게 됬어요.", "한국 음식을 좋아해게 됐어요.", "한국 음식을 좋아하기 됐어요."], answer: 0,
      why: ["Goed: stam 좋아하 + -게 됐어요.", "됬어요 is een spelfout. Schrijf 됐어요.", "-게 komt aan de stam 좋아하, niet aan de 어-vorm.", "De uitgang is -게, niet -기."] },
    { type: "mc", q: "내년에 일본에서 ___. (Volgend jaar ga ik in Japan wonen.)",
      options: ["살게 될 거예요", "사게 될 거예요", "살기 될 거예요", "살게 돼 거예요"], answer: 0,
      why: ["Goed: 살 + -게 될 거예요.", "Voor -게 blijft de ㄹ staan. 사게 is van 사다 (kopen).", "De uitgang is -게, niet -기.", "Voor 거예요 heb je 될 nodig, niet 돼."] },
    { type: "mc", q: "그 사람을 알게 됐어요. Wat betekent dit?",
      options: ["Ik heb die persoon leren kennen.", "Ik ken die persoon niet.", "Ik wil die persoon leren kennen.", "Ik ga die persoon leren kennen."], answer: 0,
      why: ["Goed: 알게 됐어요 = het is zo gekomen dat ik hem ken.", "Er staat geen ontkenning in de zin.", "Een wens zou -고 싶다 zijn.", "됐어요 is verleden tijd, geen toekomst."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik ben bij een nieuw bedrijf gaan werken.\"",
      tokens: [["새", "sae"], ["회사에서", "hoesaeseo"], ["일하게", "ilhage"], ["됐어요", "dwaesseoyo"]] },
    { type: "mc", q: "Je hebt ZELF besloten om vanaf morgen te sporten. Wat zeg je?",
      options: ["내일부터 운동하기로 했어요.", "내일부터 운동하게 됐어요.", "내일부터 운동하게 했어요.", "내일부터 운동하고 했어요."], answer: 0,
      why: ["Goed: een eigen besluit is -기로 하다.", "-게 되다 zegt dat het zo gekomen is, niet dat jij besliste.", "-게 하다 betekent \"iemand laten sporten\".", "-고 하다 is geen vorm voor een besluit."] },
    { type: "mc", q: "날씨가 ___. (Het is kouder geworden.)",
      options: ["추워졌어요", "춥게 됐어요", "춥어졌어요", "추워 됐어요"], answer: 0,
      why: ["Goed: bijvoeglijk werkwoord + -아/어지다: 추워졌어요.", "Bij een bijvoeglijk werkwoord zoals 춥다 gebruik je -아/어지다, niet -게 되다.", "춥다 is onregelmatig: ㅂ wordt 우, dus 추워.", "Na de 어-vorm komt 지다, niet 되다."] },
    { type: "fill", q: "회사 일 때문에 부산에 가___ 됐어요. (Door mijn werk ben ik in Busan beland.)", answers: ["게"],
      hint: "Welke uitgang komt tussen de stam en 되다?", why: "Stam 가 + -게 + 됐어요." },
    { type: "order", q: "Zet in de goede volgorde: \"Dankzij mijn vriend ben ik Koreaans leuk gaan vinden.\"",
      tokens: [["친구", "chingu"], ["덕분에", "deokbune"], ["한국어를", "hangugeoreul"], ["좋아하게", "joahage"], ["됐어요", "dwaesseoyo"]],
      alt: ["한국어를 친구 덕분에 좋아하게 됐어요"] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["여름이 돼서 날씨가 덥게 됐어요.", "여름이 돼서 날씨가 더워졌어요.", "그 사람을 좋아하게 됐어요.", "다음 달에 이사하기로 했어요."], answer: 0,
      why: ["Goed: dit is fout. Bij 덥다 gebruik je -아/어지다: 더워졌어요.", "Dit klopt: bijvoeglijk werkwoord + -아/어지다.", "Dit klopt: een verandering in gevoel met -게 되다.", "Dit klopt: een eigen besluit met -기로 하다."] },
    { type: "open", q: "Vertaal met -게 되다: \"Ik ben koffie lekker gaan vinden.\"", model: ["커피를 좋아하게 됐어요.", "이제 커피를 좋아하게 됐어요.", "커피를 좋아하게 되었어요."],
      tip: "Check: 좋아하 + 게, dan 됐어요. Schrijf 됐어요, niet 됬어요." },
    { type: "open", q: "Vertaal: \"Ik heb besloten te verhuizen.\" Let op: jij besliste zelf.", model: ["이사하기로 했어요.", "저는 이사하기로 했어요.", "이사하기로 결정했어요."],
      tip: "Check: een eigen besluit is -기로 하다, niet -게 되다." }
  ],
  review: [
    { type: "mc", q: "이 책을 읽고 많은 것을 ___. (Door dit boek ben ik veel te weten gekomen.)",
      options: ["알게 됐어요", "알게 됬어요", "아게 됐어요", "알게 했어요"], answer: 0,
      why: ["Goed: 알 + -게 됐어요.", "됬어요 is een spelfout. Schrijf 됐어요.", "Voor -게 blijft de ㄹ van 알다 staan.", "-게 하다 betekent \"laten\". Hier wil je -게 되다."] },
    { type: "mc", q: "왜 네덜란드에서 ___? (Waarom ben je in Nederland gaan werken?)",
      options: ["일하게 됐어요", "일하게 돼었어요", "일하기 됐어요", "일해게 됐어요"], answer: 0,
      why: ["Goed: 일하 + -게 됐어요.", "되 + 었 schrijf je als 됐 of 되었, niet als 돼었.", "De uitgang is -게, niet -기.", "-게 komt aan de stam 일하, niet aan de 어-vorm."] },
    { type: "mc", q: "아이가 태어나서 아침 일찍 ___. (Sinds ons kind er is, sta ik vroeg op.)",
      options: ["일어나게 됐어요", "일어나게 됬어요", "일어나기 됐어요", "일어나져 됐어요"], answer: 0,
      why: ["Goed: de situatie heeft het zo gemaakt: 일어나 + -게 됐어요.", "됬어요 is een spelfout. Schrijf 됐어요.", "De uitgang is -게, niet -기.", "-아/어지다 en -게 되다 combineer je niet zo. Gebruik alleen -게 됐어요."] }
  ]
})
