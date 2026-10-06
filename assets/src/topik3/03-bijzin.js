({
  id: "03", slug: "bijzin", title: "Bijvoeglijke bijzin", sub: "-는 / -(으)ㄴ / -(으)ㄹ + naamwoord",
  canDo: "Je kunt nu een naamwoord beschrijven met een bijzin, in de tegenwoordige, verleden en toekomende tijd.",
  guess: {
    q: "\"Het brood dat ik gisteren at, was lekker.\" Welke zin klopt, denk je?",
    options: ["어제 먹은 빵이 맛있었어요.", "어제 먹는 빵이 맛있었어요.", "어제 먹을 빵이 맛있었어요.", "어제 먹었는 빵이 맛있었어요."], answer: 0,
    why: ["Goed: verleden tijd van een werkwoord + naamwoord: -(으)ㄴ.", "-는 is tegenwoordige tijd. Het eten was gisteren.", "-(으)ㄹ is voor iets wat nog komt.", "Verleden tijd maak je hier met -(으)ㄴ, niet met 었 + 는."]
  },
  problem: "In het Nederlands zeg je \"het boek dat ik lees\". Het Koreaans heeft geen \"dat\". De bijzin staat vóór het naamwoord. De uitgang van het werkwoord vertelt de tijd: nu, al gebeurd, of nog niet gebeurd.",
  pattern: [
    { l: "bijzin", v: "제가 읽", c: 1 }, { l: "uitgang", v: "는", c: 2, key: true }, { l: "naamwoord", v: "책", c: 3 }
  ],
  patternCap: "읽는 책 = het boek dat ik lees · 읽은 책 = dat ik las · 읽을 책 = dat ik ga lezen · 큰 책 = een groot boek",
  rules: [
    "Werkwoord, nu: stam + -는. 먹는 사람, 가는 길. Ook 있다/없다: 맛있는 음식.",
    "Werkwoord, verleden: na een klinker -ㄴ, na een 받침 -은. 간 곳, 먹은 빵.",
    "Werkwoord, toekomst of plan: na een klinker -ㄹ, na een 받침 -을. 갈 곳, 먹을 음식.",
    "Bijvoeglijk werkwoord, nu: -ㄴ of -은. 큰 집, 작은 방.",
    "Het onderwerp van de bijzin krijgt 이/가, niet 은/는: 제가 만든 케이크."
  ],
  pitfall: "Een bijvoeglijk werkwoord krijgt nooit -는: 예쁜 꽃, niet 예쁘는 꽃. Een ㄹ-stam verliest de ㄹ: 살다 wordt 사는 곳, 만들다 wordt 만든 빵.",
  examples: [
    { cn: "저기 서 있는 사람이 제 동생이에요.", py: "Jeogi seo inneun sarami je dongsaengieyo.", nl: "De persoon die daar staat, is mijn jongere broer." },
    { cn: "어제 본 영화가 정말 재미있었어요.", py: "Eoje bon yeonghwaga jeongmal jaemiisseosseoyo.", nl: "De film die ik gisteren zag, was echt leuk." },
    { cn: "주말에 할 일이 많아요.", py: "Jumare hal iri manayo.", nl: "Ik heb in het weekend veel te doen." },
    { cn: "저는 조용한 카페를 좋아해요.", py: "Jeoneun joyonghan kapereul joahaeyo.", nl: "Ik houd van rustige cafés." }
  ],
  nuance: [
    { h: "Drie tijden: -는, -(으)ㄴ en -(으)ㄹ",
      p: "Bij een werkwoord kies je de uitgang naar de tijd. -는 is nu of altijd. -(으)ㄴ is al gebeurd. -(으)ㄹ is nog niet gebeurd: een plan of een mogelijkheid. Het naamwoord blijft gelijk; alleen de uitgang verandert de betekenis.",
      ex: [
        { cn: "제가 읽는 책", py: "jega ingneun chaek", nl: "het boek dat ik (nu) lees" },
        { cn: "제가 읽은 책", py: "jega ilgeun chaek", nl: "het boek dat ik gelezen heb" },
        { cn: "제가 읽을 책", py: "jega ilgeul chaek", nl: "het boek dat ik ga lezen" }
      ] },
    { h: "-(으)ㄹ bij tijd en plan: 먹을 시간, 할 일",
      p: "Na woorden als 시간, 일, 곳 en 계획 gebruik je bijna altijd -(으)ㄹ. Het Nederlands zegt dan \"om te\": tijd om te eten, werk om te doen. Een Nederlandse \"om te\"-zin wordt hier dus een bijzin vóór het naamwoord.",
      ex: [
        { cn: "오늘은 쉴 시간이 없어요.", py: "Oneureun swil sigani eopseoyo.", nl: "Vandaag heb ik geen tijd om uit te rusten." }
      ] },
    { h: "-(으)ㄴ of -던: klaar of herinnering?",
      p: "-(으)ㄴ zegt: het is gebeurd en klaar. -던 kijkt terug op iets wat vroeger vaak gebeurde of niet af was. Dat hoor je veel in verhalen en herinneringen. 먹은 빵 is op; 먹던 빵 is het brood waar je van aan het eten was.",
      ex: [
        { cn: "어릴 때 자주 가던 공원에 다시 가 봤어요.", py: "Eoril ttae jaju gadeon gongwone dasi ga bwasseoyo.", nl: "Ik ging weer naar het park waar ik als kind vaak kwam." }
      ] }
  ],
  mistakes: [
    { wrong: "예쁘는 꽃을 샀어요.", right: "예쁜 꽃을 샀어요.", why: "예쁘다 is bijvoeglijk. Het krijgt -ㄴ, nooit -는." },
    { wrong: "어제 봤는 영화가 재미있었어요.", right: "어제 본 영화가 재미있었어요.", why: "Verleden tijd vóór een naamwoord maak je met -(으)ㄴ, niet met 았/었 + 는." },
    { wrong: "저는 만든 케이크예요.", right: "제가 만든 케이크예요.", why: "In een bijzin krijgt het onderwerp 이/가. 저 + 가 = 제가." },
    { wrong: "엄마가 만들은 빵이에요.", right: "엄마가 만든 빵이에요.", why: "Bij een ㄹ-stam valt de ㄹ weg en komt er geen 으: 만들 + ㄴ = 만든." }
  ],
  vocab: [
    ["-는 / -(으)ㄴ / -(으)ㄹ", "-neun / -(eu)n / -(eu)l", "(maakt van een werkwoord een bijzin vóór een naamwoord)"], ["서다", "seoda", "staan"], ["조용하다", "joyonghada", "rustig, stil"],
    ["따뜻하다", "ttatteutada", "warm"], ["단골", "dangol", "vaste klant; vaste (zaak)"], ["사장님", "sajangnim", "eigenaar, baas"],
    ["직접", "jikjeop", "zelf, persoonlijk"], ["창가", "changga", "plek bij het raam"], ["빌려주다", "billyeojuda", "uitlenen"], ["문을 닫다", "muneul datda", "sluiten (een zaak)"]
  ],
  dialogue: [
    ["A", "이거 누가 만든 케이크예요?", "Igeo nuga mandeun keikeuyeyo?", "Wie heeft deze taart gemaakt?"],
    ["B", "제가 만든 케이크예요.", "Jega mandeun keikeuyeyo.", "Die heb ik gemaakt."],
    ["A", "정말 맛있어요! 다음에 만들 케이크도 먹고 싶어요.", "Jeongmal masisseoyo! Daeume mandeul keikeudo meokgo sipeoyo.", "Echt lekker! Ik wil ook de volgende taart proeven die je maakt."],
    ["B", "그럼 다음 주에 오세요. 제가 좋아하는 초콜릿 케이크를 만들 거예요.", "Geureom daeum jue oseyo. Jega joahaneun chokollit keikeureul mandeul geoyeyo.", "Kom dan volgende week. Ik ga de chocoladetaart maken waar ik van houd."]
  ],
  reading: {
    title: "단골 카페",
    lines: [
      { cn: "우리 집 근처에 제가 자주 가는 카페가 있어요.", py: "Uri jip geuncheoe jega jaju ganeun kapega isseoyo.", nl: "Bij mij in de buurt is een café waar ik vaak kom." },
      { cn: "크지 않은 카페인데 아주 조용해요.", py: "Keuji aneun kapeinde aju joyonghaeyo.", nl: "Het is geen groot café, maar het is heel rustig." },
      { cn: "사장님이 직접 만든 케이크가 정말 맛있어요.", py: "Sajangnimi jikjeop mandeun keikeuga jeongmal masisseoyo.", nl: "De taart die de eigenaar zelf maakt, is echt lekker." },
      { cn: "그 카페에서 처음 만난 사람이 지금 제 남자 친구예요.", py: "Geu kapeeseo cheoeum mannan sarami jigeum je namja chinguyeyo.", nl: "De man die ik daar voor het eerst ontmoette, is nu mijn vriend." },
      { cn: "지난주에는 창가 자리에서 친구가 빌려준 책을 다 읽었어요.", py: "Jinanjueneun changga jarieseo chinguga billyeojun chaegeul da ilgeosseoyo.", nl: "Vorige week las ik aan het raam het boek uit dat een vriendin me had geleend." },
      { cn: "그런데 그 카페가 다음 달에 문을 닫아요.", py: "Geureonde geu kapega daeum dare muneul dadayo.", nl: "Maar het café gaat volgende maand dicht." },
      { cn: "그래서 이번 주말에 사장님께 드릴 선물을 살 거예요.", py: "Geuraeseo ibeon jumare sajangnimkke deuril seonmureul sal geoyeyo.", nl: "Daarom koop ik dit weekend een cadeau om aan de eigenaar te geven." },
      { cn: "어떤 선물이 좋을까요?", py: "Eotteon seonmuri joeulkkayo?", nl: "Wat voor cadeau zou leuk zijn?" }
    ],
    questions: [
      { type: "mc", q: "Wie is de man die de schrijver in het café ontmoette?",
        options: ["Nu haar vriend.", "De eigenaar van het café.", "Haar jongere broer.", "De man die het boek uitleende."], answer: 0,
        why: ["Goed: 처음 만난 사람이 지금 제 남자 친구예요.", "De eigenaar maakt de taart; dat is iemand anders.", "Een broer komt in de tekst niet voor.", "Het boek kwam van een vriendin: 친구가 빌려준 책."] },
      { type: "mc", q: "Waarom koopt de schrijver een cadeau?",
        options: ["Het café gaat volgende maand dicht.", "De eigenaar is jarig.", "Ze heeft het boek kwijt.", "Ze gaat verhuizen."], answer: 0,
        why: ["Goed: 그 카페가 다음 달에 문을 닫아요. 그래서 ...", "Over een verjaardag staat niets in de tekst.", "Ze heeft het boek juist uitgelezen.", "Niet de schrijver, maar het café verdwijnt."] },
      { type: "mc", q: "사장님께 드릴 선물: waarom staat hier 드릴 (-ㄹ)?",
        options: ["Het geven moet nog gebeuren.", "Het geven is al gebeurd.", "Het geven gebeurt nu.", "드리다 is een bijvoeglijk werkwoord."], answer: 0,
        why: ["Goed: -(으)ㄹ is voor iets wat nog komt. Ze koopt het cadeau pas dit weekend.", "Voor al gebeurd zou je 드린 gebruiken.", "Voor nu zou je 드리는 gebruiken.", "드리다 is een werkwoord van handeling: geven (beleefd)."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"een grote tas\"",
      options: ["큰 가방", "크는 가방", "클 가방", "크은 가방"], answer: 0,
      why: ["Goed: 크다 is bijvoeglijk zonder 받침, dus -ㄴ: 큰.", "Een bijvoeglijk werkwoord krijgt geen -는.", "-ㄹ is voor iets wat nog komt, niet voor een eigenschap.", "Zonder 받침 plak je alleen ㄴ eraan: 큰."] },
    { type: "mc", q: "작년에 ___ 책이에요. (Dit is het boek dat ik vorig jaar heb gelezen.)",
      options: ["읽은", "읽는", "읽을", "읽었는"], answer: 0,
      why: ["Goed: verleden tijd, met 받침: -은.", "-는 is tegenwoordige tijd.", "-을 is voor iets wat nog komt.", "Verleden tijd maak je met -은, niet met 었 + 는."] },
    { type: "mc", q: "제가 ___ 도시는 아주 커요. (De stad waar ik woon, is heel groot.)",
      options: ["사는", "살는", "살은", "살아는"], answer: 0,
      why: ["Goed: 살다 + -는, en de ㄹ valt weg.", "Voor -는 valt de ㄹ van 살다 weg.", "살다 is een werkwoord. Voor nu gebruik je -는, niet -은.", "-는 komt direct aan de stam, niet aan de 아-vorm."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik wil warme koffie drinken.\"",
      tokens: [["따뜻한", "ttatteutan"], ["커피를", "keopireul"], ["마시고", "masigo"], ["싶어요.", "sipeoyo."]] },
    { type: "mc", q: "\"de taart die ik gemaakt heb\"",
      options: ["제가 만든 케이크", "저는 만든 케이크", "제가 만드는 케이크", "제가 만들은 케이크"], answer: 0,
      why: ["Goed: onderwerp met 가, en 만들 + ㄴ = 만든.", "In een bijzin krijgt het onderwerp 이/가, niet 은/는.", "만드는 is nu of altijd: de taart die ik maak.", "Bij een ㄹ-stam valt de ㄹ weg: 만든, niet 만들은."] },
    { type: "mc", q: "내일 ___ 옷을 벌써 골랐어요. (Ik heb de kleren die ik morgen aantrek al gekozen.)",
      options: ["입을", "입은", "입었는", "입던"], answer: 0,
      why: ["Goed: morgen ligt in de toekomst, dus -을.", "입은 is al gebeurd: kleren die je aanhad.", "Verleden tijd maak je niet met 었 + 는, en morgen is toekomst.", "-던 kijkt terug op vroeger; dat past niet bij morgen."] },
    { type: "mc", q: "\"lekker eten\"",
      options: ["맛있는 음식", "맛있은 음식", "맛있인 음식", "맛있어 음식"], answer: 0,
      why: ["Goed: woorden op 있다 krijgen altijd -는.", "맛있다 eindigt op 있다, dus -는, niet -은.", "-인 hoort bij 이다, niet bij 있다.", "Vóór een naamwoord heb je een bijzin-uitgang nodig, niet de 어-vorm."] },
    { type: "order", q: "Zet in de goede volgorde: \"Wie is de persoon die je gisteren hebt ontmoet?\"",
      tokens: [["어제", "eoje"], ["만난", "mannan"], ["사람이", "sarami"], ["누구예요?", "nuguyeyo?"]] },
    { type: "fill", q: "이건 엄마가 어제 ___ 빵이에요. (Dit is het brood dat mama gisteren heeft gemaakt.)", answers: ["만든"],
      hint: "만들다 is een ㄹ-stam, en het is al gebeurd.", why: "Verleden tijd: -ㄴ. De ㄹ valt weg: 만들 + ㄴ = 만든." },
    { type: "open", q: "Vertaal: \"Ik heb geen tijd om te eten.\" (letterlijk: tijd die ik zal eten)", model: ["먹을 시간이 없어요.", "밥 먹을 시간이 없어요.", "저는 밥을 먹을 시간이 없어요."],
      tip: "Check: het eten moet nog gebeuren, dus 먹을 vóór 시간." },
    { type: "open", q: "Vertaal: \"Ik zoek een goedkoop restaurant.\"", model: ["싼 식당을 찾고 있어요.", "저렴한 식당을 찾고 있어요."],
      tip: "Check: 싸다 is bijvoeglijk, dus 싼 (niet 싸는) vóór 식당." }
  ],
  review: [
    { type: "mc", q: "저기서 커피를 ___ 사람을 알아요? (Ken je de persoon die daar koffie drinkt?)",
      options: ["마시는", "마신는", "마시은", "마셨는"], answer: 0,
      why: ["Goed: werkwoord, nu: -는.", "Kies één uitgang: -는 voor nu, niet ㄴ + 는.", "Na een klinker komt geen -은. Voor nu is het -는.", "Hij drinkt nu, en 었 + 는 bestaat hier niet."] },
    { type: "mc", q: "___ 방에서 자고 싶어요. (Ik wil in een rustige kamer slapen.)",
      options: ["조용한", "조용하는", "조용할", "조용은"], answer: 0,
      why: ["Goed: 조용하다 is bijvoeglijk, dus -ㄴ: 조용한.", "Een bijvoeglijk werkwoord krijgt geen -는.", "-ㄹ is voor iets wat nog komt, niet voor een eigenschap.", "Je plakt de uitgang aan de stam 조용하, niet aan 조용."] },
    { type: "mc", q: "이건 제가 제주도에서 ___ 사진이에요. (Dit is de foto die ik op Jeju heb genomen.)",
      options: ["찍은", "찍는", "찍을", "찍었는"], answer: 0,
      why: ["Goed: al gebeurd, met 받침: -은.", "-는 is nu: de foto die ik aan het nemen ben.", "-을 is voor iets wat nog komt.", "Verleden tijd vóór een naamwoord is -은, niet 었 + 는."] }
  ]
})
