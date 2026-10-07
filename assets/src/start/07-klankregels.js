({
  id: "07", slug: "klankregels", title: "Doorschuiven en neusklanken", sub: "Waarom je niet altijd zegt wat er staat",
  canDo: "Je kunt nu woorden als 한국어 en 감사합니다 goed uitspreken, en je snapt waarom de romanisatie soms anders is dan de letters.",
  guess: {
    q: "한국어 (Koreaans) schrijf je als 한 + 국 + 어. Hoe zeggen Koreanen het, denk je?",
    options: ["han-gu-geo: de ㄱ schuift door naar de volgende lettergreep", "han-guk-eo, met een korte stop na guk", "han-gu-eo: de ㄱ valt weg", "hang-guk-eo: er komt een extra ng bij"], answer: 0,
    why: ["Goed: 어 begint met een stille ㅇ. De ㄱ schuift naar die lege plek.", "Een stop voor een klinker klinkt niet Koreaans. De ㄱ schuift door.", "De ㄱ verdwijnt niet. Hij verhuist naar 어.", "Er komt geen klank bij. De ㄱ verhuist alleen."]
  },
  problem: "Je weet nu hoe een 받침 (slotmedeklinker) klinkt. Maar in een woord beïnvloeden lettergrepen elkaar. Twee regels hoor je overal. Doorschuiven: de 받침 schuift naar een klinker die volgt. Neusklank: k, t en p worden ng, n en m voor ㄴ of ㅁ. De spelling blijft gelijk. Alleen de klank verandert.",
  pattern: [
    { l: "geschreven", v: "한국어", c: 1 }, { l: "doorschuiven", v: "한구거", c: 3, key: true },
    { l: "geschreven", v: "합니다", c: 1 }, { l: "neusklank", v: "함니다", c: 4, key: true }
  ],
  patternCap: "받침 + ㅇ → 받침 schuift door (한국어 = hangugeo) · k/t/p + ㄴ/ㅁ → ng/n/m (합니다 = hamnida)",
  rules: [
    "Doorschuiven (연음, yeoneum): begint de volgende lettergreep met een stille ㅇ, dan schuift de 받침 naar die plek. 음악 klinkt als 으막 (eumak).",
    "Een doorgeschoven 받침 krijgt zijn eigen klank terug. 옷 is ot, maar 옷이 is 오시 (osi). 꽃이 is 꼬치 (kkochi).",
    "Bij een dubbele 받침 schuift de tweede letter door: 값이 klinkt als 갑시 (gapsi), 없어요 als 업서요 (eopseoyo).",
    "Neusklank (비음화, bieumhwa): klinkt de 받침 als k, t of p, en volgt er ㄴ of ㅁ? Dan wordt k → ng, t → n, p → m. 국물 klinkt als 궁물 (gungmul).",
    "De romanisatie volgt de klank, niet de letters: 한국어 = hangugeo, 감사합니다 = gamsahamnida."
  ],
  pitfall: "Doorschuiven gebeurt alleen als de volgende lettergreep met een stille ㅇ begint. In 한국 사람 begint 사 met ㅅ. Dan schuift er niets: Hanguk saram.",
  examples: [
    { cn: "한국어", py: "hangugeo", nl: "Koreaans (de taal). Je zegt 한구거." },
    { cn: "음악", py: "eumak", nl: "muziek. Je zegt 으막." },
    { cn: "감사합니다.", py: "Gamsahamnida.", nl: "Dank u wel. Je zegt 감사함니다." },
    { cn: "국물이 맛있어요.", py: "Gungmuri masisseoyo.", nl: "De bouillon is lekker. Je zegt 궁무리 마시써요." }
  ],
  nuance: [
    { h: "Waarom 감사합니다 als \"gamsahamnida\" klinkt",
      p: "합 eindigt op ㅂ, en die klinkt als p. Daarna komt 니, met een ㄴ. Een p voor een n wordt m. Dus 합니다 klinkt als 함니다. Alle formele vormen op -ㅂ니다 en -습니다 klinken zo. Je hoort dus heel vaak \"-mnida\".",
      ex: [
        { cn: "입니다.", py: "Imnida.", nl: "Het is ... (formeel). Je zegt 임니다." },
        { cn: "반갑습니다.", py: "Bangapseumnida.", nl: "Aangenaam. Je zegt 반갑씀니다." }
      ] },
    { h: "Waarom de romanisatie soms anders is dan de letters",
      p: "De officiële romanisatie (Revised Romanization) schrijft op wat je hoort. Hangul schrijft juist de vaste vorm van elk woorddeel. Zo herken je in 한국어 het woord 한국 (Korea) plus 어 (taal). Op borden en in namen zie je daarom soms een romanisatie die niet letter voor letter klopt.",
      ex: [
        { cn: "한국말", py: "hangungmal", nl: "Koreaans (spreektaal). ㄱ voor ㅁ wordt ng." },
        { cn: "박물관", py: "bangmulgwan", nl: "museum. ㄱ voor ㅁ wordt ng." }
      ] },
    { h: "Wanneer schuift er niets door?",
      p: "Voor een medeklinker schuift niets door. ㅇ onderaan blijft ook staan: die is al een klank (ng). En ㅎ onderaan valt weg voor een klinker. Daarom klinkt 좋아요 als jo-a-yo.",
      ex: [
        { cn: "한국 사람", py: "Hanguk saram", nl: "Koreaan (geen doorschuiven: 사 begint met ㅅ)" },
        { cn: "고양이", py: "goyangi", nl: "kat (ㅇ onderaan blijft staan)" },
        { cn: "좋아요.", py: "Joayo.", nl: "Goed. / Ik vind het leuk. (ㅎ valt weg)" }
      ] }
  ],
  mistakes: [
    { wrong: "한국어 = hanguk-eo (met een stop)", right: "한국어 = hangugeo", why: "De ㄱ schuift door naar 어. Het klinkt als 한구거." },
    { wrong: "감사합니다 = gamsahapnida", right: "감사합니다 = gamsahamnida", why: "ㅂ (p) voor ㄴ wordt een neusklank: m." },
    { wrong: "옷이 = oti", right: "옷이 = osi", why: "Een doorgeschoven 받침 krijgt zijn eigen klank terug. ㅅ wordt weer s." },
    { wrong: "국물 = gukmul", right: "국물 = gungmul", why: "ㄱ (k) voor ㅁ wordt ng." }
  ],
  vocab: [
    ["연음, 비음화", "yeoneum, bieumhwa", "doorschuiven, neusklank worden"], ["한국어", "hangugeo", "Koreaans (de taal)"], ["음악", "eumak", "muziek"],
    ["감사합니다", "gamsahamnida", "dank u wel"], ["국물", "gungmul", "bouillon, soep"], ["입니다", "imnida", "is, ben (formeel)"],
    ["맛있어요", "masisseoyo", "het is lekker"], ["한국말", "hangungmal", "Koreaans (spreektaal)"], ["수업", "sueop", "les"], ["끝나요", "kkeunnayo", "het is afgelopen"]
  ],
  dialogue: [
    ["A", "안녕하세요. 한국어 공부해요?", "Annyeonghaseyo. Hangugeo gongbuhaeyo?", "Hallo. Leer je Koreaans?"],
    ["B", "네, 한국어 공부해요.", "Ne, hangugeo gongbuhaeyo.", "Ja, ik leer Koreaans."],
    ["A", "한국 음악도 좋아해요?", "Hanguk eumakdo joahaeyo?", "Hou je ook van Koreaanse muziek?"],
    ["B", "네, 정말 좋아해요.", "Ne, jeongmal joahaeyo.", "Ja, heel erg."],
    ["A", "이 국물도 먹어 보세요. 맛있어요.", "I gungmuldo meogeo boseyo. Masisseoyo.", "Proef deze bouillon ook eens. Hij is lekker."],
    ["B", "감사합니다. 정말 맛있어요!", "Gamsahamnida. Jeongmal masisseoyo!", "Dank u wel. Echt lekker!"]
  ],
  reading: {
    title: "한국어 수업 (hangugeo sueop)",
    lines: [
      { cn: "저는 한국어를 배워요.", py: "Jeoneun hangugeoreul baewoyo.", nl: "Ik leer Koreaans." },
      { cn: "한국어 수업은 월요일에 있어요.", py: "Hangugeo sueobeun woryoire isseoyo.", nl: "De les Koreaans is op maandag." },
      { cn: "선생님은 한국 사람이에요.", py: "Seonsaengnimeun Hanguk saramieyo.", nl: "De leraar is Koreaans." },
      { cn: "수업이 끝나면 우리는 식당에 가요.", py: "Sueobi kkeunnamyeon urineun sikdange gayo.", nl: "Na de les gaan we naar een restaurant." },
      { cn: "식당에서 국밥을 먹어요.", py: "Sikdangeseo gukbabeul meogeoyo.", nl: "In het restaurant eten we gukbap (rijst in soep)." },
      { cn: "국물이 정말 맛있어요.", py: "Gungmuri jeongmal masisseoyo.", nl: "De bouillon is echt lekker." },
      { cn: "식당에서 한국 음악이 나와요.", py: "Sikdangeseo Hanguk eumagi nawayo.", nl: "In het restaurant speelt Koreaanse muziek." },
      { cn: "다음 주에 또 가요.", py: "Daeum jue tto gayo.", nl: "Volgende week gaan we weer." }
    ],
    questions: [
      { type: "mc", q: "Wanneer is de les Koreaans?",
        options: ["Op maandag.", "In het weekend.", "Elke dag.", "Op vrijdag."], answer: 0,
        why: ["Goed: 수업은 월요일에 있어요. 월요일 = maandag.", "Het weekend staat niet in de tekst.", "Er staat één dag: 월요일.", "Er staat 월요일, maandag."] },
      { type: "mc", q: "Wat eten ze na de les?",
        options: ["Gukbap, rijst in soep.", "Kimbap.", "Brood.", "Niets: ze luisteren alleen naar muziek."], answer: 0,
        why: ["Goed: 식당에서 국밥을 먹어요.", "Er staat 국밥, niet 김밥.", "Brood staat niet in de tekst.", "Ze eten wel: 국밥을 먹어요. De muziek speelt erbij."] },
      { type: "mc", q: "수업이 klinkt als 수어비 (sueobi). Wat gebeurt er met de ㅂ?",
        options: ["Hij schuift door naar 이.", "Hij valt weg.", "Hij wordt m, een neusklank.", "Er komt een extra klinker eu achter."], answer: 0,
        why: ["Goed: 이 begint met een stille ㅇ, dus de ㅂ schuift door.", "De ㅂ verdwijnt niet. Je hoort hem in 비.", "Een neusklank komt alleen voor ㄴ of ㅁ.", "Er komt geen klinker bij. De ㅂ verhuist alleen."] }
    ]
  },
  questions: [
    { type: "mc", q: "Welke romanisatie volgt de uitspraak van 한국어?",
      options: ["hangugeo", "hangukeo", "hangungeo", "hanggugeo"], answer: 0,
      why: ["Goed: de ㄱ schuift door en klinkt tussen klinkers als g.", "Dat is letter voor letter. De romanisatie volgt de klank: gu-geo.", "Er komt geen neusklank. Na ㄱ volgt een klinker, geen ㄴ of ㅁ.", "Er komt geen extra ng bij."] },
    { type: "mc", q: "Hoe verdeel je 음악 (muziek) in klanken?",
      options: ["eu-mak", "eum-ak, met een pauze", "eung-mak", "eu-ak"], answer: 0,
      why: ["Goed: de ㅁ schuift door naar 악.", "Voor een stille ㅇ schuift de 받침 door. Er komt geen pauze.", "Er komt geen ng bij.", "De ㅁ verdwijnt niet. Hij verhuist."] },
    { type: "mc", q: "Hoe spreek je 국물 (bouillon) uit?",
      options: ["gungmul", "gukmul", "gummul", "gugmul"], answer: 0,
      why: ["Goed: ㄱ (k) voor ㅁ wordt ng.", "Voor ㅁ blijft k geen k. Het wordt een neusklank.", "k wordt ng, niet m. Alleen p wordt m.", "Voor ㅁ wordt ㄱ een neusklank: ng."] },
    { type: "mc", q: "Hoe spreek je 옷이 (kleren + 이) uit?",
      options: ["osi", "oti", "ot-i", "o-i"], answer: 0,
      why: ["Goed: de ㅅ schuift door en klinkt weer als s.", "Doorgeschoven krijgt ㅅ zijn eigen klank terug: s, geen t.", "Voor een stille ㅇ schuift de 받침 door. Er komt geen pauze.", "De ㅅ verdwijnt niet. Hij verhuist naar 이."] },
    { type: "mc", q: "In welk voorbeeld schuift de 받침 NIET door?",
      options: ["한국 사람", "한국어", "음악", "옷이"], answer: 0,
      why: ["Goed: 사 begint met ㅅ, niet met een stille ㅇ.", "어 begint met een stille ㅇ, dus de ㄱ schuift door.", "악 begint met een stille ㅇ, dus de ㅁ schuift door.", "이 begint met een stille ㅇ, dus de ㅅ schuift door."] },
    { type: "mc", q: "Waarom schrijft de romanisatie 감사합니다 als gamsahamnida?",
      options: ["De romanisatie volgt de klank, en ㅂ voor ㄴ klinkt als m.", "Er staat een ㅁ in 합.", "Het is een tikfout die iedereen overneemt.", "Formele woorden krijgen altijd een extra m."], answer: 0,
      why: ["Goed: neusklank. p voor n wordt m.", "In 합 staat ㅂ. Je hoort m door de ㄴ die volgt.", "Het is geen fout. Zo klinkt het echt.", "Er komt niets bij. De ㅂ verandert in m."] },
    { type: "order", q: "Zet de lettergrepen op volgorde: gamsahamnida (dank u wel).",
      tokens: [["감", "gam"], ["사", "sa"], ["합", "ham"], ["니", "ni"], ["다", "da"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik hou van Koreaanse muziek.\"",
      tokens: [["저는", "jeoneun"], ["한국", "Hanguk"], ["음악을", "eumageul"], ["좋아해요", "joahaeyo"]] },
    { type: "fill", q: "합니다 klinkt als ___. (Typ de romanisatie of het Hangul van de klank.)", answers: ["hamnida", "함니다"],
      hint: "ㅂ voor ㄴ: welke neusklank?", why: "ㅂ (p) voor ㄴ wordt m: 함니다, hamnida." },
    { type: "fill", q: "꽃이 (bloem + 이) klinkt als ___. (Typ de romanisatie of het Hangul van de klank.)", answers: ["kkochi", "꼬치"],
      hint: "De ㅊ schuift door en krijgt zijn eigen klank terug.", why: "Los is 꽃 kkot. Voor 이 schuift ㅊ door: 꼬치, kkochi." },
    { type: "open", q: "Schrijf de uitspraak van 있어요 (er is) en 없어요 (er is niet) in romanisatie. Zeg ze hardop.", model: ["있어요 = isseoyo, 없어요 = eopseoyo"],
      tip: "Check: in 있어요 schuift ㅆ door (이써요). In 없어요 blijft ㅂ staan en schuift ㅅ door (업서요)." },
    { type: "open", q: "Hoe spreek je 한국말 (Koreaans) uit? Schrijf de klank in Hangul en in romanisatie.", model: ["한궁말 (hangungmal)"],
      tip: "Check: ㄱ voor ㅁ wordt ng. Je zegt dus geen k in het midden." }
  ],
  review: [
    { type: "mc", q: "Hoe spreek je 작년 (vorig jaar) uit?",
      options: ["jangnyeon", "jaknyeon", "jannyeon", "jamnyeon"], answer: 0,
      why: ["Goed: ㄱ (k) voor ㄴ wordt ng.", "Voor ㄴ blijft k geen k. Het wordt een neusklank.", "k wordt ng, niet n. Alleen t wordt n.", "k wordt ng, niet m. Alleen p wordt m."] },
    { type: "mc", q: "Hoe spreek je 읽어요 (ik lees) uit?",
      options: ["ilgeoyo", "ikeoyo", "il-eoyo", "ikgeoyo"], answer: 0,
      why: ["Goed: dubbele 받침 ㄺ. De ㄹ blijft, de ㄱ schuift door.", "Voor een klinker hoor je beide letters: de ㄹ ook.", "De ㄱ verdwijnt niet. Hij schuift door naar 어.", "De ㄱ schuift door. Hij blijft niet ook achter."] },
    { type: "mc", q: "Hoe spreek je 십만 (honderdduizend) uit?",
      options: ["simman", "sipman", "sinman", "singman"], answer: 0,
      why: ["Goed: ㅂ (p) voor ㅁ wordt m.", "Voor ㅁ blijft p geen p. Het wordt een neusklank.", "p wordt m, niet n. Alleen t wordt n.", "p wordt m, niet ng. Alleen k wordt ng."] }
  ]
})
