({
  id: "11", slug: "tende", title: "-(으)ㄹ 텐데", sub: "Zou toch ...: verwachting met zorg, wens of dank",
  canDo: "Je kunt nu een verwachting uitspreken en daar meteen een zorg, wens of dank aan koppelen, met -(으)ㄹ 텐데.",
  guess: {
    q: "Je vriend heeft het erg druk, maar komt toch naar je feest. Wat zeg je, denk je?",
    options: ["바쁠 텐데 와 줘서 고마워요.", "바쁜 텐데 와 줘서 고마워요.", "바쁘는 텐데 와 줘서 고마워요.", "바쁠 테는데 와 줘서 고마워요."], answer: 0,
    why: ["Goed: stam + ㄹ 텐데. Daarna volgt je dank.", "Vóór 텐데 staat altijd de ㄹ-vorm, niet de ㄴ-vorm.", "Vóór 텐데 staat geen 는; het is 바쁠.", "텐데 is al de samengetrokken vorm; 테는데 bestaat niet."]
  },
  problem: "Je verwacht iets, en daar hoort een reactie bij. \"Je hebt het vast druk, dus bedankt dat je komt.\" \"Het wordt vast koud, neem een jas mee.\" Met -(으)ㄹ 텐데 noem je eerst je verwachting. Daarna volgt je zorg, advies, wens of dank.",
  pattern: [
    { l: "verwachting (stam)", v: "바쁘", c: 1 }, { l: "zou toch ...", v: "ㄹ 텐데", c: 2, key: true },
    { l: "reactie: dank, zorg, advies", v: "와 줘서 고마워요", c: 4 }
  ],
  patternCap: "Stam + (으)ㄹ 텐데 + reactie; verleden: -았/었을 텐데; aan het zinseinde: -(으)ㄹ 텐데(요)",
  rules: [
    "Na een klinker: ㄹ 텐데 (바쁠 텐데, 올 텐데). Na een 받침: 을 텐데 (먹을 텐데). Een ㄹ-stam krijgt alleen 텐데: 알다 → 알 텐데.",
    "Het werkt met werkwoorden, bijvoeglijke werkwoorden en 이다: 비가 올 텐데, 추울 텐데, 학생일 텐데.",
    "Voor iets wat vermoedelijk al gebeurd is, zet je -았/었 ervoor: 피곤했을 텐데, 기다렸을 텐데.",
    "Het tweede deel mag een opdracht, voorstel of vraag zijn: 추울 텐데 코트를 입으세요.",
    "Aan het einde van de zin drukt -(으)ㄹ 텐데(요) een wens of spijt uit: 시간이 있으면 좋을 텐데요."
  ],
  pitfall: "Vóór 텐데 staat altijd de ㄹ-vorm. 바쁜 텐데 of 먹는 텐데 bestaat niet. Gaat het om het verleden, dan wordt het 바빴을 텐데, niet 바빴는 텐데.",
  examples: [
    { cn: "바쁠 텐데 와 줘서 고마워요.", py: "Bappeul tende wa jwoseo gomawoyo.", nl: "Je hebt het vast druk, dus bedankt dat je gekomen bent." },
    { cn: "밖에 추울 텐데 코트를 입고 가세요.", py: "Bakke chuul tende koteureul ipgo gaseyo.", nl: "Het is buiten vast koud, trek je jas aan als je gaat." },
    { cn: "먼 길 오느라 힘들었을 텐데 어서 앉으세요.", py: "Meon gil oneura himdeureosseul tende eoseo anjeuseyo.", nl: "De lange reis was vast zwaar, ga snel zitten." },
    { cn: "시간이 조금만 더 있으면 좋을 텐데요.", py: "Sigani jogeumman deo isseumyeon joeul tendeyo.", nl: "Had ik maar wat meer tijd." }
  ],
  nuance: [
    { h: "-(으)ㄹ 텐데 of -(으)ㄹ 거예요?",
      p: "Beide drukken een verwachting uit. -(으)ㄹ 거예요 sluit de zin af: je doet alleen een voorspelling. Het kan ook je eigen plan zijn. -(으)ㄹ 텐데 koppelt de verwachting aan een reactie: een advies, zorg of dank. Voor je eigen plan gebruik je -(으)ㄹ 텐데 niet.",
      ex: [
        { cn: "내일 비가 올 거예요.", py: "Naeil biga ol geoyeyo.", nl: "Morgen gaat het regenen." },
        { cn: "내일 비가 올 텐데 우산을 챙기세요.", py: "Naeil biga ol tende usaneul chaenggiseyo.", nl: "Morgen gaat het vast regenen, neem een paraplu mee." }
      ] },
    { h: "-(으)ㄹ 텐데 of -는데?",
      p: "-는데 geeft een feit als achtergrond: je ziet het of je weet het zeker. -(으)ㄹ 텐데 geeft een verwachting: je denkt het, maar je weet het niet zeker. Zie je de regen door het raam, dan zeg je 비가 오는데. Denk je dat het straks gaat regenen, dan zeg je 비가 올 텐데.",
      ex: [
        { cn: "지금 비가 오는데 우산 있어요?", py: "Jigeum biga oneunde usan isseoyo?", nl: "Het regent nu, heb je een paraplu?" },
        { cn: "이따가 비가 올 텐데 우산 있어요?", py: "Ittaga biga ol tende usan isseoyo?", nl: "Straks gaat het vast regenen, heb je een paraplu?" }
      ] },
    { h: "Aan het zinseinde: wens en spijt",
      p: "Staat -(으)ㄹ 텐데(요) aan het einde, dan blijft de reactie onuitgesproken. Met -(으)면 좋을 텐데 wens je iets wat niet zo is. Met -았/었으면 ...았/었을 텐데 heb je spijt over het verleden. Dit hoor je vooral in spreektaal; 텐데요 is de beleefde vorm.",
      ex: [
        { cn: "미리 말했으면 도와줬을 텐데.", py: "Miri malhaesseumyeon dowajwosseul tende.", nl: "Als je het eerder had gezegd, had ik je geholpen." }
      ] }
  ],
  mistakes: [
    { wrong: "바쁜 텐데 와 줘서 고마워요.", right: "바쁠 텐데 와 줘서 고마워요.", why: "Vóór 텐데 staat altijd de ㄹ-vorm: 바쁠, niet 바쁜." },
    { wrong: "밖이 춥을 텐데 코트를 입으세요.", right: "밖이 추울 텐데 코트를 입으세요.", why: "춥다 is onregelmatig: de ㅂ wordt 우. Dus 추울 텐데." },
    { wrong: "어제 많이 피곤할 텐데 잘 잤어요?", right: "어제 많이 피곤했을 텐데 잘 잤어요?", why: "Het gaat om gisteren. Voor het verleden gebruik je -았/었을 텐데." },
    { wrong: "지금 비가 올 텐데 우산 있어요? (je ziet de regen)", right: "지금 비가 오는데 우산 있어요? (je ziet de regen)", why: "Je ziet het regenen: dat is een feit, geen verwachting. Dan gebruik je -는데." }
  ],
  vocab: [
    ["-(으)ㄹ 텐데", "-(eu)l tende", "zou toch ... (verwachting + reactie)"], ["챙기다", "chaenggida", "meenemen, niet vergeten"],
    ["피곤하다", "pigonhada", "moe"], ["어서", "eoseo", "snel, kom (uitnodigend)"], ["미리", "miri", "van tevoren"],
    ["마중 나가다", "majung nagada", "iemand gaan ophalen"], ["짐", "jim", "bagage"], ["무겁다", "mugeopda", "zwaar"],
    ["걱정이 되다", "geokjeongi doeda", "zich zorgen maken"], ["역", "yeok", "station"]
  ],
  dialogue: [
    ["A", "비행기를 오래 타서 피곤할 텐데 괜찮아요?", "Bihaenggireul orae taseo pigonhal tende gwaenchanayo?", "Je hebt lang gevlogen, je bent vast moe. Gaat het?"],
    ["B", "네, 괜찮아요. 공항까지 마중 나와 줘서 고마워요.", "Ne, gwaenchanayo. Gonghangkkaji majung nawa jwoseo gomawoyo.", "Ja, het gaat. Bedankt dat je me op het vliegveld komt ophalen."],
    ["A", "아니에요. 짐이 무거울 텐데 제가 들게요.", "Anieyo. Jimi mugeoul tende jega deulgeyo.", "Graag gedaan. Je bagage is vast zwaar, ik draag hem wel."],
    ["B", "고마워요. 그런데 지금 서울은 추워요?", "Gomawoyo. Geureonde jigeum seoureun chuwoyo?", "Dank je. Is het trouwens koud in Seoul?"],
    ["A", "네, 밤에는 더 추울 텐데 따뜻한 옷 있어요?", "Ne, bameneun deo chuul tende ttatteutan ot isseoyo?", "Ja, 's avonds wordt het vast nog kouder. Heb je warme kleren?"],
    ["B", "아, 코트를 가져왔으면 좋았을 텐데요.", "A, koteureul gajyeowasseumyeon joasseul tendeyo.", "Ah, had ik maar een jas meegenomen."]
  ],
  reading: {
    title: "동생이 오는 날",
    lines: [
      { cn: "다음 주에 동생이 처음으로 혼자 서울에 온다.", py: "Daeum jue dongsaengi cheoeumeuro honja seoure onda.", nl: "Volgende week komt mijn jongere zus voor het eerst alleen naar Seoul." },
      { cn: "기차를 오래 타야 해서 많이 피곤할 텐데 역까지 마중을 나가려고 한다.", py: "Gichareul orae taya haeseo mani pigonhal tende yeokkkaji majungeul nagaryeogo handa.", nl: "Ze moet lang in de trein zitten en is vast erg moe, dus ik ga haar ophalen van het station." },
      { cn: "동생은 서울 지하철을 잘 모를 텐데 혼자 오라고 하면 걱정이 될 것 같다.", py: "Dongsaengeun seoul jihacheoreul jal moreul tende honja orago hamyeon geokjeongi doel geot gatda.", nl: "Ze kent de metro van Seoul vast niet goed. Als ik haar alleen laat komen, zou ik me zorgen maken." },
      { cn: "짐도 많을 텐데 내가 차를 가지고 가면 편할 것이다.", py: "Jimdo maneul tende naega chareul gajigo gamyeon pyeonhal geosida.", nl: "Ze heeft vast ook veel bagage, dus het is handig als ik met de auto ga." },
      { cn: "어머니께서 김치를 많이 만들어서 동생에게 주셨다고 한다.", py: "Eomeonikkeseo gimchireul mani mandeureoseo dongsaengege jusyeotdago handa.", nl: "Mijn moeder heeft veel kimchi gemaakt en die aan mijn zus meegegeven, hoor ik." },
      { cn: "어머니도 김치를 만드느라 힘드셨을 텐데 정말 감사하다.", py: "Eomeonido gimchireul mandeuneura himdeusyeosseul tende jeongmal gamsahada.", nl: "Het kimchi maken was vast zwaar voor mijn moeder. Ik ben haar echt dankbaar." },
      { cn: "어머니도 같이 오시면 좋을 텐데 일 때문에 못 오신다.", py: "Eomeonido gachi osimyeon joeul tende il ttaemune mot osinda.", nl: "Het zou fijn zijn als mijn moeder ook meekwam, maar door haar werk kan ze niet komen." },
      { cn: "동생이 오면 같이 맛있는 음식을 먹으러 가야겠다.", py: "Dongsaengi omyeon gachi masinneun eumsigeul meogeureo gayagetda.", nl: "Als mijn zus er is, moeten we samen lekker uit eten gaan." }
    ],
    questions: [
      { type: "mc", q: "Waarom gaat de schrijver met de auto naar het station?",
        options: ["Zijn zus heeft vast veel bagage.", "De metro rijdt die dag niet.", "Zijn moeder heeft het gevraagd.", "Hij wil kimchi gaan kopen."], answer: 0,
        why: ["Goed: 짐도 많을 텐데 내가 차를 가지고 가면 편할 것이다.", "De zus kent de metro niet goed; dat de metro niet rijdt, staat er niet.", "De moeder vraagt niets; ze geeft kimchi mee.", "De kimchi heeft de moeder al gemaakt."] },
      { type: "mc", q: "Waarom komt de moeder niet mee?",
        options: ["Ze moet werken.", "Ze is moe van het kimchi maken.", "Ze kent de metro van Seoul niet.", "Ze wil niet met de trein."], answer: 0,
        why: ["Goed: 일 때문에 못 오신다.", "Het kimchi maken was vast zwaar, maar dat is niet de reden.", "De zus kent de metro niet goed, niet de moeder.", "Over de trein en de moeder staat niets in de tekst."] },
      { type: "mc", q: "어머니도 같이 오시면 좋을 텐데 ... Wat drukt 좋을 텐데 hier uit?",
        options: ["Een wens die niet uitkomt.", "Een vast plan voor volgende week.", "Een feit dat de schrijver zeker weet.", "Een opdracht aan de moeder."], answer: 0,
        why: ["Goed: -(으)면 좋을 텐데 = het zou fijn zijn als ..., maar het gebeurt niet.", "Een plan zeg je met -(으)ㄹ 거예요, niet met 텐데.", "텐데 geeft een verwachting of wens, geen zeker feit.", "Er staat geen opdracht; de moeder kan niet komen."] }
    ]
  },
  questions: [
    { type: "mc", q: "밖에 ___ 텐데 장갑을 끼고 가세요. (춥다)",
      options: ["추울", "추운", "춥을", "춥는"], answer: 0,
      why: ["Goed: 춥다 is onregelmatig (ㅂ → 우), en vóór 텐데 staat de ㄹ-vorm.", "추운 is de ㄴ-vorm; vóór 텐데 staat de ㄹ-vorm.", "De ㅂ wordt 우: 추울, niet 춥을.", "Vóór 텐데 staat geen 는."] },
    { type: "mc", q: "어제 이사하느라 ___ 텐데 오늘은 푹 쉬세요. (Het verhuizen gisteren was vast zwaar, rust vandaag goed uit.)",
      options: ["힘들었을", "힘들었는", "힘든", "힘들은"], answer: 0,
      why: ["Goed: voor het verleden: -았/었을 텐데.", "Na -았/었 komt 을, niet 는.", "힘든 is de ㄴ-vorm en mist het verleden.", "힘들은 bestaat niet; een ㄹ-stam krijgt geen 은."] },
    { type: "mc", q: "그 사람은 이 길을 잘 ___ 텐데 물어볼까요? (알다)",
      options: ["알", "알을", "아는", "안"], answer: 0,
      why: ["Goed: een ㄹ-stam krijgt alleen 텐데: 알 텐데.", "Na een ㄹ-stam komt geen extra 을.", "아는 is de 는-vorm; vóór 텐데 staat de ㄹ-vorm.", "안 is de ㄴ-vorm; vóór 텐데 staat de ㄹ-vorm."] },
    { type: "mc", q: "바쁠 텐데 와 줘서 고마워요. Wat bedoelt de spreker?",
      options: ["Ik denk dat je het druk hebt, en toch kwam je.", "Je hebt me zelf verteld dat je het druk hebt.", "Je krijgt het later druk.", "Ik heb het druk, dus kom niet."], answer: 0,
      why: ["Goed: 텐데 = verwachting van de spreker, met dank als reactie.", "Een zeker feit geef je met -는데: 바쁜데.", "텐데 zegt niets over later; het gaat om nu.", "Het gaat over de ander, en de spreker bedankt juist."] },
    { type: "mc", q: "내일 비가 ___ 우산을 챙기세요. (Morgen gaat het vast regenen, neem een paraplu mee.)",
      options: ["올 텐데", "올 거예요", "온 텐데", "오는 텐데"], answer: 0,
      why: ["Goed: verwachting + advies in één zin: 올 텐데.", "-(으)ㄹ 거예요 sluit de zin af; je kunt er geen tweede deel aan vastmaken.", "Vóór 텐데 staat de ㄹ-vorm, niet de ㄴ-vorm.", "Vóór 텐데 staat geen 는."] },
    { type: "mc", q: "Je kijkt uit het raam en ziet het sneeuwen. Welke zin past?",
      options: ["지금 눈이 오는데 운전 조심하세요.", "지금 눈이 올 텐데 운전 조심하세요.", "지금 눈이 오는 텐데 운전 조심하세요.", "지금 눈이 올 거예요 운전 조심하세요."], answer: 0,
      why: ["Goed: je ziet het, dus het is een feit: -는데.", "텐데 is voor een verwachting; je ziet de sneeuw al.", "오는 텐데 bestaat niet.", "-(으)ㄹ 거예요 sluit de zin af en is ook een voorspelling."] },
    { type: "mc", q: "Je wenst dat je meer tijd had. Welke zin past?",
      options: ["시간이 더 있으면 좋을 텐데요.", "시간이 더 있으면 좋은 텐데요.", "시간이 더 있는데 좋을 텐데요.", "시간이 더 있으면 좋았는데요."], answer: 0,
      why: ["Goed: -(으)면 좋을 텐데요 = had ik maar ...", "Vóór 텐데 staat de ㄹ-vorm: 좋을.", "-는데 maakt van de wens een feit: \"ik heb meer tijd\".", "좋았는데요 zegt dat het fijn was; dat is geen wens."] },
    { type: "order", q: "Zet in de goede volgorde: \"Je bent vast moe, ga eerst zitten.\"",
      tokens: [["피곤할", "pigonhal"], ["텐데", "tende"], ["먼저", "meonjeo"], ["앉으세요", "anjeuseyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Had ik het maar van tevoren geweten.\"",
      tokens: [["미리", "miri"], ["알았으면", "arasseumyeon"], ["좋았을", "joasseul"], ["텐데요", "tendeyo"]] },
    { type: "fill", q: "많이 기다렸___ 텐데 늦어서 미안해요. (Je hebt vast lang gewacht, sorry dat ik te laat ben.)", answers: ["을"],
      hint: "Na -았/었 vóór 텐데 komt ...?", why: "기다렸 + 을 텐데: voor iets wat al gebeurd is, wordt het -았/었을 텐데." },
    { type: "open", q: "Vertaal: \"Je hebt het vast druk, bedankt dat je gekomen bent.\"",
      model: ["바쁠 텐데 와 줘서 고마워요.", "바쁘실 텐데 와 주셔서 감사합니다."],
      tip: "Check: 바쁠 (ㄹ-vorm) + 텐데, en daarna de dank met -아/어 줘서." },
    { type: "open", q: "Vertaal: \"Het wordt vast koud, neem een jas mee.\"",
      model: ["추울 텐데 코트를 가져가세요.", "날씨가 추울 텐데 외투를 챙기세요."],
      tip: "Check: 춥다 → 추울 텐데, en het advies in het tweede deel." }
  ],
  review: [
    { type: "mc", q: "아이가 배가 ___ 텐데 간식을 줄까요? (고프다)",
      options: ["고플", "고픈", "고프는", "고팠는"], answer: 0,
      why: ["Goed: stam 고프 + ㄹ 텐데.", "고픈 is de ㄴ-vorm; vóór 텐데 staat de ㄹ-vorm.", "Vóór 텐데 staat geen 는.", "Voor het verleden is het 고팠을, niet 고팠는."] },
    { type: "mc", q: "시험 준비하느라 ___ 텐데 고생 많았어요. (De examenvoorbereiding was vast zwaar.)",
      options: ["힘들었을", "힘들었는", "힘든", "힘들을"], answer: 0,
      why: ["Goed: verleden + verwachting: -았/었을 텐데.", "Na -았/었 komt 을, niet 는.", "힘든 is de ㄴ-vorm en mist het verleden.", "힘들을 bestaat niet; een ㄹ-stam krijgt alleen 텐데: 힘들 텐데."] },
    { type: "mc", q: "버스가 곧 ___ 조금만 기다려요. (De bus komt vast zo, wacht nog even.)",
      options: ["올 텐데", "올 거예요", "온 텐데", "오는 텐데"], answer: 0,
      why: ["Goed: verwachting + advies in één zin.", "-(으)ㄹ 거예요 sluit de zin af; er kan geen tweede deel achter.", "Vóór 텐데 staat de ㄹ-vorm.", "Vóór 텐데 staat geen 는."] }
  ]
})
