({
  id: "10", slug: "go-malda", title: "-고 말다", sub: "Uiteindelijk ... (helaas), of: ik zál ...",
  canDo: "Je kunt nu vertellen dat iets ongewild toch gebeurde, en een vast voornemen uitspreken, met -고 말았다 en -고 말겠다.",
  guess: {
    q: "참으려고 했는데 그만 울고 말았어요. Wat betekent dit, denk je?",
    options: [
      "Ik probeerde me in te houden, maar uiteindelijk huilde ik toch.",
      "Ik probeerde me in te houden, en ik stopte met huilen.",
      "Ik probeerde me in te houden, dus ik huilde niet.",
      "Ik probeerde me in te houden, en ik ga zeker huilen."
    ], answer: 0,
    why: [
      "Goed: -고 말았다 = uiteindelijk gebeurde het toch, tegen je wil in.",
      "말다 betekent hier niet \"stoppen\". Het gevolg is dat je huilde.",
      "\"Niet huilen\" zou 울지 않았어요 zijn. Hier gebeurde het wel.",
      "말았어요 staat in het verleden. Een voornemen is -고 말겠어요."
    ]
  },
  problem: "In het Nederlands zeg je: \"Uiteindelijk heb ik toch de hele taart opgegeten.\" Je wilde het niet, maar het gebeurde. In het Koreaans zeg je -고 말았다. Met -고 말겠다 zeg je het omgekeerde: ik zál het halen, wat er ook gebeurt.",
  pattern: [
    { l: "결국", v: "결국", c: 1 }, { l: "wat", v: "케이크를 다", c: 3 },
    { l: "stam + 고", v: "먹고", c: 4 }, { l: "말았다", v: "말았어요", c: 2, key: true }
  ],
  patternCap: "Stam + 고 말았다 (uiteindelijk, helaas) · stam + 고 말겠다 / 고 말 거예요 (vast voornemen) · 지고 말았다 · 먹고 말겠다",
  rules: [
    "Stam + 고 말다, na een klinker en na een 받침 hetzelfde: 지고 말았다, 먹고 말았다.",
    "Voor een ongewenst of onverwacht resultaat gebruik je het verleden: -고 말았다. Vaak staat 결국, 끝내 of 그만 ervoor.",
    "Voor een vast voornemen gebruik je -고 말겠다 of -고 말 거예요. Het onderwerp is dan meestal \"ik\".",
    "Alleen met werkwoorden. Bij een bijvoeglijk werkwoord gebruik je eerst -아/어지다: 슬퍼지고 말았다.",
    "-고 말았다 klinkt wat formeler en past in verhalen en schrijftaal. In spreektaal hoor je vaker -아/어 버렸다."
  ],
  pitfall: "Verwar -고 말다 niet met -지 말다. 먹지 마세요 = eet het niet. 먹고 말았어요 = ik heb het uiteindelijk toch opgegeten. Het gevolg is dus juist dat het WEL gebeurde.",
  examples: [
    { cn: "열심히 뛰었지만 결국 기차를 놓치고 말았어요.", py: "Yeolsimhi ttwieotjiman gyeolguk gichareul nochigo marasseoyo.", nl: "Ik rende hard, maar uiteindelijk miste ik de trein toch." },
    { cn: "다이어트 중인데 케이크를 다 먹고 말았다.", py: "Daieoteu jung-inde keikeureul da meokgo maratda.", nl: "Ik ben aan het lijnen, maar ik heb toch de hele taart opgegeten." },
    { cn: "두 사람은 결국 헤어지고 말았다.", py: "Du sarameun gyeolguk heeojigo maratda.", nl: "De twee zijn uiteindelijk uit elkaar gegaan." },
    { cn: "이번에는 꼭 합격하고 말겠어요.", py: "Ibeoneneun kkok hapgyeokago malgesseoyo.", nl: "Deze keer zál ik slagen." }
  ],
  nuance: [
    { h: "-고 말았다 of -고 말겠다?",
      p: "Dezelfde vorm heeft twee kanten. In het verleden (-고 말았다) beschrijf je een resultaat dat je niet wilde of niet verwachtte. Met -겠다 of -(으)ㄹ 거예요 spreek je een vast voornemen uit: ondanks alle moeite bereik ik het. Dat zeg je meestal over jezelf.",
      ex: [
        { cn: "결승전에서 아깝게 지고 말았어요.", py: "Gyeolseungjeoneseo akkapge jigo marasseoyo.", nl: "We verloren de finale helaas nipt." },
        { cn: "내년에는 꼭 이기고 말겠어요.", py: "Naenyeoneneun kkok igigo malgesseoyo.", nl: "Volgend jaar zál ik winnen." }
      ] },
    { h: "-고 말다 of -아/어 버리다?",
      p: "Allebei zeggen dat iets helemaal gebeurd is. -아/어 버리다 kan ook opluchting uitdrukken: het is eindelijk weg of klaar. -고 말다 draait om een resultaat na weerstand of moeite, en klinkt vaak spijtig. Ben je blij dat iets af is, gebruik dan 버리다.",
      ex: [
        { cn: "밀린 숙제를 오늘 다 해 버렸어요.", py: "Millin sukjereul oneul da hae beoryeosseoyo.", nl: "Ik heb vandaag al mijn achterstallige huiswerk in één keer afgewerkt." },
        { cn: "시험 전날 그만 잠들고 말았어요.", py: "Siheom jeonnal geuman jamdeulgo marasseoyo.", nl: "De avond voor het examen viel ik per ongeluk in slaap." }
      ] },
    { h: "Spreektaal en schrijftaal",
      p: "-고 말았다 vind je veel in verhalen, dagboeken en nieuws, met een eindvorm op -다. In een gesprek klinkt -아/어 버렸어(요) natuurlijker. -고 말겠다 klinkt plechtig en vastberaden. In spreektaal zeg je ook 꼭 ...(으)ㄹ 거야.",
      ex: [
        { cn: "그는 끝내 꿈을 포기하고 말았다.", py: "Geuneun kkeunnae kkumeul pogihago maratda.", nl: "Hij gaf zijn droom uiteindelijk toch op." },
        { cn: "아, 또 늦잠 자 버렸어.", py: "A, tto neutjam ja beoryeosseo.", nl: "Ah, ik heb me weer verslapen." }
      ] }
  ],
  mistakes: [
    { wrong: "어제 결국 시험에 떨어지고 말아요.", right: "어제 결국 시험에 떨어지고 말았어요.", why: "Het resultaat is al gebeurd. Gebruik het verleden: -고 말았다." },
    { wrong: "너무 일해서 결국 피곤하고 말았어요.", right: "너무 일해서 결국 지치고 말았어요.", why: "피곤하다 is een bijvoeglijk werkwoord. -고 말다 werkt alleen met werkwoorden, zoals 지치다." },
    { wrong: "다음에는 꼭 이기고 말았어요.", right: "다음에는 꼭 이기고 말겠어요.", why: "Een voornemen gaat over de toekomst. Daarvoor is -고 말겠다." },
    { wrong: "숙제를 다 하고 말았어요! 이제 놀자!", right: "숙제를 다 해 버렸어요! 이제 놀자!", why: "Je bent opgelucht. -고 말았다 klinkt spijtig. Voor opluchting gebruik je -아/어 버리다." }
  ],
  vocab: [
    ["-고 말다", "-go malda", "uiteindelijk (helaas); beslist (voornemen)"], ["결국", "gyeolguk", "uiteindelijk"],
    ["그만", "geuman", "per ongeluk, zomaar"], ["끝내", "kkeunnae", "uiteindelijk, tot het eind"],
    ["참다", "chamda", "zich inhouden, verdragen"], ["잠들다", "jamdeulda", "in slaap vallen"],
    ["포기하다", "pogihada", "opgeven"], ["도전하다", "dojeonhada", "een uitdaging aangaan"],
    ["멈추다", "meomchuda", "stoppen, stilstaan"], ["통과하다", "tonggwahada", "passeren, door iets heen komen"]
  ],
  dialogue: [
    ["A", "어제 축구 경기 봤어요?", "Eoje chukgu gyeonggi bwasseoyo?", "Heb je gisteren de voetbalwedstrijd gezien?"],
    ["B", "네, 우리 팀이 이기고 있었는데 마지막에 지고 말았어요.", "Ne, uri timi igigo isseonneunde majimage jigo marasseoyo.", "Ja, ons team stond voor, maar verloor op het eind toch."],
    ["A", "아쉽네요. 저는 보다가 그만 잠들고 말았어요.", "Aswimneyo. Jeoneun bodaga geuman jamdeulgo marasseoyo.", "Jammer. Ik viel tijdens het kijken per ongeluk in slaap."],
    ["B", "다음 경기는 꼭 경기장에 가서 보고 말 거예요.", "Daeum gyeonggineun kkok gyeonggijang-e gaseo bogo mal geoyeyo.", "De volgende wedstrijd ga ik hoe dan ook in het stadion bekijken."],
    ["A", "저도 같이 가요. 이번에는 안 잘게요.", "Jeodo gachi gayo. Ibeoneneun an jalgeyo.", "Ik ga mee. Deze keer val ik niet in slaap."]
  ],
  reading: {
    title: "나의 첫 마라톤",
    lines: [
      { cn: "나는 작년에 처음으로 마라톤에 도전했다.", py: "Naneun jangnyeone cheoeumeuro maratone dojeonhaetda.", nl: "Vorig jaar waagde ik me voor het eerst aan een marathon." },
      { cn: "석 달 동안 열심히 준비했지만 대회 일주일 전에 다리를 다치고 말았다.", py: "Seok dal dong-an yeolsimhi junbihaetjiman daehoe iljuil jeone darireul dachigo maratda.", nl: "Ik had drie maanden hard getraind, maar een week voor de wedstrijd raakte ik helaas geblesseerd aan mijn been." },
      { cn: "그래도 포기하고 싶지 않아서 대회에 나갔다.", py: "Geuraedo pogihago sipji anaseo daehoee nagatda.", nl: "Toch wilde ik niet opgeven, en ik deed mee." },
      { cn: "30킬로미터까지는 잘 달렸다.", py: "Samsip killomiteokkajineun jal dallyeotda.", nl: "Tot dertig kilometer liep ik goed." },
      { cn: "하지만 다리가 너무 아파서 결국 멈추고 말았다.", py: "Hajiman dariga neomu apaseo gyeolguk meomchugo maratda.", nl: "Maar mijn been deed zo'n pijn dat ik uiteindelijk moest stoppen." },
      { cn: "집에 돌아와서 나는 그만 울고 말았다.", py: "Jibe dorawaseo naneun geuman ulgo maratda.", nl: "Thuis barstte ik in tranen uit." },
      { cn: "그날 밤 나는 일기장에 이렇게 썼다.", py: "Geunal bam naneun ilgijang-e ireoke sseotda.", nl: "Die avond schreef ik in mijn dagboek:" },
      { cn: "\"내년에는 꼭 끝까지 달리고 말겠다.\"", py: "\"Naenyeoneneun kkok kkeutkkaji dalligo malgetda.\"", nl: "\"Volgend jaar zál ik tot het eind lopen.\"" },
      { cn: "그리고 올해, 나는 마침내 결승선을 통과했다.", py: "Geurigo olhae, naneun machimnae gyeolseungseoneul tonggwahaetda.", nl: "En dit jaar ben ik eindelijk over de finish gekomen." }
    ],
    questions: [
      { type: "mc", q: "Waarom stopte de schrijver vorig jaar?",
        options: ["Zijn been deed te veel pijn.", "Hij had niet getraind.", "Hij viel in slaap.", "Hij wilde opgeven."], answer: 0,
        why: ["Goed: 다리가 너무 아파서 결국 멈추고 말았다.", "Hij trainde juist drie maanden: 석 달 동안 열심히 준비했지만.", "Over slapen staat niets in de tekst.", "Hij wilde juist niet opgeven: 포기하고 싶지 않아서."] },
      { type: "mc", q: "Wat gebeurde er dit jaar?",
        options: ["Hij liep de marathon uit.", "Hij raakte weer geblesseerd.", "Hij deed niet mee.", "Hij stopte na dertig kilometer."], answer: 0,
        why: ["Goed: 마침내 결승선을 통과했다.", "Over een nieuwe blessure staat niets.", "Hij deed mee en finishte.", "Dat gebeurde vorig jaar."] },
      { type: "mc", q: "내년에는 꼭 끝까지 달리고 말겠다. Wat drukt -고 말겠다 hier uit?",
        options: ["Een vast voornemen: ik zál het halen.", "Spijt over iets wat gebeurd is.", "Een verbod: ik mag niet lopen.", "Twijfel: misschien loop ik."], answer: 0,
        why: ["Goed: -고 말겠다 = sterke wil om iets te bereiken.", "Spijt is -고 말았다, in het verleden.", "Een verbod is -지 말다.", "Twijfel is -(으)ㄹ지도 모르다. 꼭 laat zien dat hij het zeker wil."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Uiteindelijk heb ik de trein toch gemist.\" Welke zin klopt?",
      options: ["결국 기차를 놓치고 말았어요.", "결국 기차를 놓치고 말겠어요.", "결국 기차를 놓치지 말았어요.", "결국 기차를 놓쳐고 말았어요."], answer: 0,
      why: ["Goed: stam + 고 말았다 voor een ongewenst resultaat.", "-고 말겠다 is een voornemen voor later.", "-지 말다 is een verbod. Je bedoelt -고 말다.", "Vóór 고 staat de kale stam: 놓치고."] },
    { type: "mc", q: "이번에는 꼭 합격하고 말겠어요. Wat betekent dit?",
      options: ["Deze keer zál ik slagen.", "Deze keer ben ik uiteindelijk geslaagd.", "Deze keer slaag ik niet.", "Deze keer stop ik met proberen."], answer: 0,
      why: ["Goed: -고 말겠다 = vast voornemen.", "Een resultaat in het verleden zou -고 말았어요 zijn.", "Er staat geen ontkenning, en 꼭 betekent \"zeker\".", "말다 betekent hier niet \"stoppen\"."] },
    { type: "mc", q: "\"Eindelijk! Al mijn huiswerk is af.\" (opgelucht) Welke zin past het best?",
      options: ["숙제를 다 해 버렸어요!", "숙제를 다 하고 말았어요!", "숙제를 다 하지 말았어요!", "숙제를 다 해 말았어요!"], answer: 0,
      why: ["Goed: -아/어 버리다 kan opluchting uitdrukken.", "-고 말았다 klinkt spijtig, alsof je het niet wilde.", "-지 말다 is een verbod.", "말다 komt na -고, niet na -아/어."] },
    { type: "mc", q: "그만 ___ 말았어요. (Ik viel per ongeluk in slaap.)",
      options: ["잠들고", "잠들지", "잠들어", "잠든"], answer: 0,
      why: ["Goed: stam + 고 말았다.", "잠들지 말다 betekent \"niet in slaap vallen\": een verbod.", "-아/어 hoort bij 버리다, niet bij 말다.", "Vóór 말다 staat -고, geen bijvoeglijke vorm."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["결국 피곤하고 말았어요.", "결국 헤어지고 말았어요.", "그만 웃고 말았어요.", "끝내 포기하고 말았어요."], answer: 0,
      why: ["Goed gezien: deze zin is fout. 피곤하다 is een bijvoeglijk werkwoord. Zeg: 지치고 말았어요.", "Deze zin klopt: werkwoord + 고 말았다.", "Deze zin klopt: werkwoord + 고 말았다.", "Deze zin klopt: werkwoord + 고 말았다."] },
    { type: "mc", q: "Welke zin past het best in een roman, als vertelling?",
      options: ["두 사람은 결국 헤어지고 말았다.", "두 사람은 결국 헤어져 버렸어.", "두 사람은 결국 헤어지고 말았잖아요.", "두 사람은 결국 헤어져 버렸네요."], answer: 0,
      why: ["Goed: -고 말았다 met -다 past in verhalende schrijftaal.", "-어 is informele spreektaal.", "-잖아요 is spreektaal: \"je weet toch\".", "-네요 drukt verrassing uit in een gesprek."] },
    { type: "mc", q: "\"Ik heb helaas mijn telefoon laten vallen.\" Welke zin klopt?",
      options: ["휴대폰을 떨어뜨리고 말았어요.", "휴대폰을 떨어뜨리고 말아요.", "휴대폰을 떨어뜨리고 말겠어요.", "휴대폰을 떨어뜨렸고 말았어요."], answer: 0,
      why: ["Goed: kale stam + 고 말았어요.", "Het is al gebeurd. Gebruik het verleden: 말았어요.", "-고 말겠다 is een voornemen. Niemand wil zijn telefoon laten vallen.", "Het verleden staat in 말았어요, niet vóór 고."] },
    { type: "order", q: "Zet in de goede volgorde: \"Uiteindelijk heb ik toch de hele taart opgegeten.\"",
      tokens: [["결국", "gyeolguk"], ["케이크를 다", "keikeureul da"], ["먹고", "meokgo"], ["말았어요", "marasseoyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"De volgende wedstrijd zál ik winnen.\"",
      tokens: [["다음 경기에서는 꼭", "daeum gyeonggieseoneun kkok"], ["이기고", "igigo"], ["말", "mal"], ["거예요", "geoyeyo"]] },
    { type: "fill", q: "참으려고 했는데 그만 ___ 말았어요. (Ik moest toch lachen. Gebruik 웃다.)",
      answers: ["웃고"], hint: "Welke verbinding komt vóór 말다?",
      why: "Stam + 고 말았다: 웃다 wordt 웃고 말았어요." },
    { type: "open", q: "Vertaal: \"Ik wilde niet huilen, maar uiteindelijk huilde ik toch.\"",
      model: ["울고 싶지 않았는데 결국 울고 말았어요.", "안 울려고 했는데 결국 울고 말았어요.", "울지 않으려고 했지만 끝내 울고 말았다."],
      tip: "Check: stam + 고 말았다 in het verleden, en niet -지 말다?" },
    { type: "open", q: "Vertaal: \"Ik zal mijn droom zeker waarmaken.\"",
      model: ["꼭 꿈을 이루고 말겠어요.", "제 꿈을 꼭 이루고 말 거예요.", "나는 꿈을 꼭 이루고 말겠다."],
      tip: "Check: -고 말겠다 of -고 말 거예요 voor een voornemen, met 꼭?" }
  ],
  review: [
    { type: "mc", q: "오늘도 또 ___ 말았어요. (Ik ben helaas weer te laat gekomen.)",
      options: ["지각하고", "지각하지", "지각해", "지각한"], answer: 0,
      why: ["Goed: stam + 고 말았다.", "지각하지 말다 is een verbod: \"kom niet te laat\".", "-아/어 hoort bij 버리다, niet bij 말다.", "Vóór 말다 staat -고, geen bijvoeglijke vorm."] },
    { type: "mc", q: "그는 끝내 비밀을 말하고 말았다. Wat betekent dit?",
      options: ["Hij verklapte uiteindelijk toch het geheim.", "Hij is vast van plan het geheim te vertellen.", "Hij vertelde het geheim niet.", "Hij hield op over het geheim te praten."], answer: 0,
      why: ["Goed: -고 말았다 = uiteindelijk gebeurde het toch.", "Een voornemen is -고 말겠다, niet 말았다.", "Er staat geen ontkenning. Het gebeurde wel.", "말다 betekent hier niet \"ophouden\"."] },
    { type: "mc", q: "\"Ik heb het verslag in één keer af!\" (opgelucht) Welke zin past het best?",
      options: ["보고서를 한 번에 다 써 버렸어요!", "보고서를 한 번에 다 쓰고 말았어요!", "보고서를 한 번에 다 쓰지 말았어요!", "보고서를 한 번에 다 써 말았어요!"], answer: 0,
      why: ["Goed: -아/어 버리다 drukt hier opluchting uit.", "-고 말았다 klinkt spijtig, alsof het tegen je wil was.", "-지 말다 is een verbod.", "말다 komt na -고, niet na -아/어."] }
  ]
})
