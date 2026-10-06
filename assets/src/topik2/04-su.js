({
  id: "04", slug: "su", title: "-(으)ㄹ 수 있어요/없어요", sub: "Zeggen wat je kunt en niet kunt",
  canDo: "Je kunt nu zeggen wat je wel en niet kunt, en vragen of iets kan, met -(으)ㄹ 수 있어요/없어요.",
  guess: {
    q: "\"Ik kan Koreaans lezen.\" Welke zin klopt, denk je?",
    options: ["한국어를 읽을 수 있어요.", "한국어를 읽 수 있어요.", "한국어를 읽는 수 있어요.", "한국어를 읽을 수 없어요."], answer: 0,
    why: ["Goed: 읽 heeft een 받침, dus -을 수 있어요.", "Na een 받침 heb je -을 nodig.", "Voor 수 staat de vorm met -(으)ㄹ, niet -는.", "없어요 betekent juist \"niet kunnen\"."]
  },
  problem: "Je wilt zeggen dat je iets kunt: zwemmen, Koreaans spreken, morgen komen. Of juist dat het niet kan. Het Koreaans heeft geen apart woord voor \"kunnen\". Je zegt: \"er is een manier om te ...\" (수 있어요) of \"er is geen manier\" (수 없어요).",
  pattern: [
    { l: "wat", v: "김밥을", c: 3 }, { l: "stam", v: "만들", c: 4 },
    { l: "-(으)ㄹ 수", v: "수", c: 2, key: true }, { l: "wel / niet", v: "있어요", c: 5 }
  ],
  patternCap: "Stam + -(으)ㄹ 수 있어요 (kan) / 없어요 (kan niet): 갈 수 있어요, 먹을 수 없어요",
  rules: [
    "Stam op een klinker: -ㄹ 수 있어요. 가다 wordt 갈 수 있어요.",
    "Stam op een 받침: -을 수 있어요. 먹다 wordt 먹을 수 있어요.",
    "Stam op ㄹ: je voegt niets toe. 만들다 wordt 만들 수 있어요.",
    "Onregelmatige stammen veranderen: 걷다 wordt 걸을 수 있어요, 듣다 wordt 들을 수 있어요.",
    "Niet kunnen: vervang 있어요 door 없어요. 갈 수 없어요."
  ],
  pitfall: "수 is een los woord. Schrijf 갈 수 있어요 met twee spaties, niet 갈수있어요. Zeg ook niet 갈 수 안 있어요, maar 갈 수 없어요.",
  examples: [
    { cn: "저는 한국어를 조금 할 수 있어요.", py: "Jeoneun hangugeoreul jogeum hal su isseoyo.", nl: "Ik kan een beetje Koreaans spreken." },
    { cn: "오늘은 바빠서 만날 수 없어요.", py: "Oneureun bappaseo mannal su eopseoyo.", nl: "Vandaag heb ik het druk, dus ik kan niet afspreken." },
    { cn: "여기에서 사진을 찍을 수 있어요?", py: "Yeogieseo sajineul jjigeul su isseoyo?", nl: "Kan ik hier foto's maken?" },
    { cn: "저는 김밥을 만들 수 있어요.", py: "Jeoneun gimbabeul mandeul su isseoyo.", nl: "Ik kan gimbap maken." }
  ],
  nuance: [
    { h: "-(으)ㄹ 수 있다 of -(으)ㄹ 줄 알다?",
      p: "-(으)ㄹ 줄 알다 betekent: je weet hoe het moet, je hebt het geleerd. -(으)ㄹ 수 있다 is breder: ook omstandigheden tellen mee, zoals tijd, gezondheid of toestemming. Kun je vandaag niet zwemmen omdat je verkouden bent? Dan past alleen 수 없어요.",
      ex: [
        { cn: "저는 수영할 줄 알아요.", py: "Jeoneun suyeonghal jul arayo.", nl: "Ik kan zwemmen. (ik heb het geleerd)" },
        { cn: "감기에 걸려서 오늘은 수영할 수 없어요.", py: "Gamgie geollyeoseo oneureun suyeonghal su eopseoyo.", nl: "Ik ben verkouden, dus vandaag kan ik niet zwemmen." }
      ] },
    { h: "Korter: 못",
      p: "In spreektaal zeg je \"niet kunnen\" vaak korter met 못 vóór het werkwoord. 못 가요 betekent hetzelfde als 갈 수 없어요. Bij 하다-werkwoorden staat 못 vóór 하다: 수영 못 해요.",
      ex: [
        { cn: "내일은 못 가요.", py: "Naeireun mot gayo.", nl: "Morgen kan ik niet komen." },
        { cn: "내일은 갈 수 없어요.", py: "Naeireun gal su eopseoyo.", nl: "Morgen kan ik niet komen." }
      ] },
    { h: "Vragen en verzoeken",
      p: "Met -(으)ㄹ 수 있어요? vraag je of iets mag of kan. Met 좀 en -아/어 줄 수 있어요? vraag je beleefd om hulp. Met 줄 알아요? vraag je alleen naar een vaardigheid.",
      ex: [
        { cn: "좀 도와줄 수 있어요?", py: "Jom dowajul su isseoyo?", nl: "Kun je me even helpen?" }
      ] }
  ],
  mistakes: [
    { wrong: "오늘은 갈 수 안 있어요.", right: "오늘은 갈 수 없어요.", why: "Niet kunnen is 수 없어요. 안 past hier niet." },
    { wrong: "빵을 만들을 수 있어요.", right: "빵을 만들 수 있어요.", why: "만들다 is een ㄹ-stam. Daar komt geen -을 bij." },
    { wrong: "바빠서 내일은 갈 줄 몰라요.", right: "바빠서 내일은 갈 수 없어요.", why: "Het gaat om tijd, niet om een vaardigheid. Dan gebruik je 수 없다." },
    { wrong: "저는 멀리 걷을 수 없어요.", right: "저는 멀리 걸을 수 없어요.", why: "걷다 is onregelmatig: vóór -을 wordt ㄷ een ㄹ." }
  ],
  vocab: [
    ["-(으)ㄹ 수 있다/없다", "-(eu)l su itda/eopda", "kunnen / niet kunnen"], ["조금", "jogeum", "een beetje"], ["사진을 찍다", "sajineul jjikda", "een foto maken"],
    ["수영하다", "suyeonghada", "zwemmen"], ["자전거", "jajeongeo", "fiets"], ["운전하다", "unjeonhada", "autorijden"],
    ["일하다", "ilhada", "werken"], ["아직", "ajik", "nog (niet)"], ["글", "geul", "geschreven tekst, letters"], ["돕다", "dopda", "helpen"]
  ],
  dialogue: [
    ["A", "수영할 수 있어요?", "Suyeonghal su isseoyo?", "Kun je zwemmen?"],
    ["B", "아니요, 수영할 수 없어요. 자전거는 탈 수 있어요.", "Aniyo, suyeonghal su eopseoyo. Jajeongeoneun tal su isseoyo.", "Nee, ik kan niet zwemmen. Fietsen kan ik wel."],
    ["A", "그럼 토요일에 같이 자전거를 타요.", "Geureom toyoire gachi jajeongeoreul tayo.", "Laten we dan zaterdag samen fietsen."],
    ["B", "토요일에는 일해서 갈 수 없어요. 일요일은 어때요?", "Toyoireneun ilhaeseo gal su eopseoyo. Iryoireun eottaeyo?", "Zaterdag werk ik, dus dan kan ik niet. Hoe is zondag?"],
    ["A", "좋아요. 일요일에 만나요.", "Joayo. Iryoire mannayo.", "Goed. Tot zondag."]
  ],
  reading: {
    title: "우리 가족",
    lines: [
      { cn: "저는 형하고 여동생이 있어요.", py: "Jeoneun hyeonghago yeodongsaengi isseoyo.", nl: "Ik heb een oudere broer en een jongere zus." },
      { cn: "형은 운동을 좋아해요.", py: "Hyeongeun undongeul joahaeyo.", nl: "Mijn broer houdt van sport." },
      { cn: "형은 수영도 할 수 있고 스키도 탈 수 있어요.", py: "Hyeongeun suyeongdo hal su itgo seukido tal su isseoyo.", nl: "Hij kan zwemmen en ook skiën." },
      { cn: "여동생은 다섯 살이에요.", py: "Yeodongsaengeun daseot sarieyo.", nl: "Mijn zusje is vijf jaar." },
      { cn: "아직 글을 읽을 수 없어요.", py: "Ajik geureul ilgeul su eopseoyo.", nl: "Ze kan nog niet lezen." },
      { cn: "하지만 노래를 정말 잘해요.", py: "Hajiman noraereul jeongmal jalhaeyo.", nl: "Maar ze zingt heel goed." },
      { cn: "저는 운동을 잘 못해요.", py: "Jeoneun undongeul jal motaeyo.", nl: "Ik ben niet goed in sport." },
      { cn: "하지만 한국어하고 중국어를 할 수 있어요.", py: "Hajiman hangugeohago junggugeoreul hal su isseoyo.", nl: "Maar ik kan Koreaans en Chinees spreken." },
      { cn: "다음 달에 가족하고 중국에 갈 거예요.", py: "Daeum dare gajokago jungguge gal geoyeyo.", nl: "Volgende maand gaan we met het gezin naar China." },
      { cn: "중국에서는 제가 가족을 도와줄 수 있어요.", py: "Junggugeseoneun jega gajogeul dowajul su isseoyo.", nl: "In China kan ik mijn familie helpen." }
    ],
    questions: [
      { type: "mc", q: "Wat kan de oudere broer?",
        options: ["Zwemmen en skiën.", "Koreaans en Chinees spreken.", "Heel goed zingen.", "Lezen en schrijven."], answer: 0,
        why: ["Goed: 수영도 할 수 있고 스키도 탈 수 있어요.", "Dat kan de schrijver zelf.", "Dat kan het zusje.", "Lezen staat bij het zusje, en zij kan het nog niet."] },
      { type: "mc", q: "Waarom kan de schrijver in China helpen?",
        options: ["Hij spreekt Chinees.", "Hij is goed in sport.", "Hij woont in China.", "Hij kan goed zingen."], answer: 0,
        why: ["Goed: 중국어를 할 수 있어요.", "Hij zegt juist: 운동을 잘 못해요.", "Dat staat niet in de tekst.", "Het zusje zingt goed, niet hij."] },
      { type: "mc", q: "아직 글을 읽을 수 없어요. Wat betekent 수 없어요 hier?",
        options: ["Ze is nog niet in staat om te lezen.", "Ze wil niet lezen.", "Ze mag niet lezen.", "Ze gaat morgen lezen."], answer: 0,
        why: ["Goed: 수 없어요 = niet kunnen. Ze is vijf en kan het nog niet.", "Niet willen is 안 읽어요 of 읽고 싶지 않아요.", "Uit de tekst blijkt geen verbod: ze is gewoon nog te jong.", "Een plan zou -(으)ㄹ 거예요 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik kan kimchi eten.\" Welke zin klopt?",
      options: ["김치를 먹을 수 있어요.", "김치를 먹 수 있어요.", "김치를 먹을수 있어요.", "김치를 머글 수 있어요."], answer: 0,
      why: ["Goed: 먹 + 을 수 있어요, met een spatie voor en na 수.", "Na een 받침 heb je -을 nodig.", "수 is een los woord en krijgt een spatie.", "Je schrijft de stam zoals hij is: 먹을, niet zoals je het hoort."] },
    { type: "mc", q: "\"Vandaag kan ik niet gaan.\" Welke zin klopt?",
      options: ["오늘은 갈 수 없어요.", "오늘은 갈 수 안 있어요.", "오늘은 가을 수 없어요.", "오늘은 갈 수 아니에요."], answer: 0,
      why: ["Goed: niet kunnen is 수 없어요.", "Voor \"niet kunnen\" vervang je 있어요 door 없어요. 안 past hier niet.", "-을 komt alleen na een 받침. 가 eindigt op een klinker.", "아니에요 ontkent een zelfstandig naamwoord. Hier heb je 없어요 nodig."] },
    { type: "mc", q: "빵을 ___ 있어요? (Kun je brood maken?)",
      options: ["만들 수", "만들을 수", "만드 수", "만들수"], answer: 0,
      why: ["Goed: 만들다 is een ㄹ-stam. Je voegt niets toe.", "Bij een ㄹ-stam komt er geen -을 bij.", "De ㄹ van de stam blijft staan.", "수 is een los woord en krijgt een spatie."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik kan gimbap maken.\"",
      tokens: [["김밥을", "gimbabeul"], ["만들", "mandeul"], ["수", "su"], ["있어요", "isseoyo"]] },
    { type: "mc", q: "\"Ik ben ziek, dus vandaag kan ik niet komen.\"",
      options: ["아파서 오늘은 갈 수 없어요.", "아파서 오늘은 갈 줄 몰라요.", "아파서 오늘은 갈 수 안 있어요.", "아파서 오늘은 가을 수 없어요."], answer: 0,
      why: ["Goed: het gaat om je gezondheid, dus 수 없어요.", "줄 모르다 betekent \"niet weten hoe\". Dat is een vaardigheid, geen omstandigheid.", "Niet kunnen is 수 없어요, niet 수 안 있어요.", "가 eindigt op een klinker: 갈, niet 가을."] },
    { type: "mc", q: "\"Ik kan niet ver lopen.\"",
      options: ["멀리 걸을 수 없어요.", "멀리 걷을 수 없어요.", "멀리 걸 수 없어요.", "멀리 걸을수 없어요."], answer: 0,
      why: ["Goed: 걷다 is onregelmatig. Vóór -을 wordt ㄷ een ㄹ: 걸을.", "Vóór -을 verandert de ㄷ van 걷다 in ㄹ.", "Na de nieuwe ㄹ komt nog -을. 걸 수 is van 걸다 (ophangen).", "수 is een los woord en krijgt een spatie."] },
    { type: "mc", q: "Je vraagt een vriend beleefd: \"Kun je me even helpen?\"",
      options: ["좀 도와줄 수 있어요?", "좀 도와주을 수 있어요?", "좀 도와줄 수 안 있어요?", "좀 도와줄 줄 알아요?"], answer: 0,
      why: ["Goed: met -(으)ㄹ 수 있어요? vraag je om hulp.", "주 eindigt op een klinker: 줄, niet 주을.", "Ontkennen doe je met 없어요, en hier wil je juist hulp.", "줄 알아요? vraagt of iemand weet hoe helpen moet. Dat is geen verzoek."] },
    { type: "fill", q: "저는 피아노를 ___ 수 있어요. (Ik kan piano spelen. 치다 = spelen)", answers: ["칠"],
      hint: "치다 eindigt op een klinker.", why: "치 + ㄹ = 칠. Daarna 수 있어요." },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn oudere broer kan skiën.\"",
      tokens: [["형은", "hyeongeun"], ["스키를", "seukireul"], ["탈", "tal"], ["수", "su"], ["있어요", "isseoyo"]] },
    { type: "open", q: "Vertaal: \"Kun je autorijden?\"", model: ["운전할 수 있어요?", "운전을 할 수 있어요?"],
      tip: "Check: 운전하다 eindigt op een klinker, dus 할 수. Staan er spaties rond 수?" },
    { type: "open", q: "Vertaal: \"Vandaag kan ik niet afspreken.\"", model: ["오늘은 만날 수 없어요.", "오늘은 못 만나요."],
      tip: "Check: 만나 + ㄹ = 만날, en niet kunnen is 수 없어요. 못 만나요 is de korte vorm." }
  ],
  review: [
    { type: "mc", q: "\"Ik kan hier niet slapen.\"",
      options: ["여기에서 잘 수 없어요.", "여기에서 자을 수 없어요.", "여기에서 잘수 없어요.", "여기에서 잘 수 안 있어요."], answer: 0,
      why: ["Goed: 자 + ㄹ = 잘, en niet kunnen is 수 없어요.", "-을 komt alleen na een 받침.", "수 is een los woord en krijgt een spatie.", "Niet kunnen is 수 없어요, niet 수 안 있어요."] },
    { type: "mc", q: "\"Kan ik hier zitten?\"",
      options: ["여기 앉을 수 있어요?", "여기 앉 수 있어요?", "여기 앉는 수 있어요?", "여기 안즐 수 있어요?"], answer: 0,
      why: ["Goed: 앉 heeft een 받침, dus -을 수.", "Na een 받침 heb je -을 nodig.", "Voor 수 staat de vorm met -(으)ㄹ, niet -는.", "Je schrijft de stam zoals hij is: 앉을, niet zoals je het hoort."] },
    { type: "mc", q: "\"Kun je Chinees spreken?\"",
      options: ["중국어를 할 수 있어요?", "중국어를 하을 수 있어요?", "중국어를 할수 있어요?", "중국어를 할 수 안 있어요?"], answer: 0,
      why: ["Goed: 하 + ㄹ = 할, met spaties rond 수.", "하 eindigt op een klinker: 할, niet 하을.", "수 is een los woord en krijgt een spatie.", "안 hoort niet in deze vorm. Ontkennen doe je met 없어요."] }
  ]
})
