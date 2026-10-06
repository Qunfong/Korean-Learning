({
  id: "11", slug: "a-juseyo", title: "-아/어 주세요", sub: "Iets voor iemand doen, en erom vragen",
  canDo: "Je kunt nu iemand om een gunst vragen en aanbieden iets voor een ander te doen, met -아/어 주세요 en -아/어 줄게요.",
  guess: {
    q: "Je vraagt een voorbijganger: \"Wilt u een foto van mij maken?\" Welke zin klopt, denk je?",
    options: ["사진 좀 찍어 주세요.", "사진 좀 찍 주세요.", "사진 좀 찍아 주세요.", "사진 좀 찍었어 주세요."], answer: 0,
    why: ["Goed: 찍다 wordt 찍어, en daarna komt 주세요.", "Tussen de stam en 주세요 hoort -아/어: 찍어.", "De laatste klinker is ㅣ, dus -어, niet -아.", "Vóór 주세요 komt geen verleden tijd."]
  },
  problem: "In het Nederlands zeg je: \"Kunt u de deur voor mij opendoen?\" De woorden \"voor mij\" maken er een gunst van. Het Koreaans zet daarvoor 주다 (geven) achter het werkwoord. 열어 주세요 betekent: doe het open, voor mij. Met dezelfde vorm bied je ook hulp aan.",
  pattern: [
    { l: "wat", v: "문을", c: 1 }, { l: "werkwoord + 아/어", v: "열어", c: 3 }, { l: "주다", v: "주세요", c: 2, key: true }
  ],
  patternCap: "Stam + 아/어 + 주세요 (verzoek) / 줄게요 (aanbod) / 줬어요 (gedaan) / 드릴게요 (beleefd)",
  rules: [
    "Het werkwoord krijgt de vorm van -아요/어요 zonder 요: 열다 wordt 열어, 사다 wordt 사, 하다 wordt 해. Daarna komt 주다.",
    "주세요 is een verzoek: doe dit voor mij. 줄게요 is een aanbod: ik doe het voor jou.",
    "De tijd staat alleen op 주다: 사 줬어요 (heeft voor mij gekocht), niet 샀어 줬어요.",
    "Doe je iets voor iemand die hoger staat (leraar, klant, oudere), dan wordt 주다 드리다: 들어 드릴게요.",
    "Tussen de twee delen staat een spatie: 열어 주세요. 도와주다 (helpen) is één woord: 도와주세요."
  ],
  pitfall: "주세요 vraagt de ander iets te doen. Wil je zelf iets voor de ander doen, gebruik dan 줄게요. 제가 사 주세요 is fout. Zeg: 제가 사 줄게요.",
  examples: [
    { cn: "창문 좀 열어 주세요.", py: "Changmun jom yeoreo juseyo.", nl: "Wil je het raam even opendoen?" },
    { cn: "천천히 말해 주세요.", py: "Cheoncheonhi malhae juseyo.", nl: "Wilt u alstublieft langzaam praten?" },
    { cn: "제가 가방을 들어 줄게요.", py: "Jega gabangeul deureo julgeyo.", nl: "Ik draag je tas wel." },
    { cn: "엄마가 생일 선물을 사 줬어요.", py: "Eommaga saengil seonmureul sa jwosseoyo.", nl: "Mijn moeder heeft een verjaardagscadeau voor me gekocht." }
  ],
  nuance: [
    { h: "-(으)세요 of -아/어 주세요?",
      p: "-(으)세요 zegt wat de ander moet doen. Het is een instructie, vaak voor het goed van de ander zelf. -아/어 주세요 vraagt om een gunst voor jou. Een dokter zegt 여기 앉으세요. Vraag je een vriend om op je te wachten, dan zeg je 기다려 주세요: het wachten is voor jou.",
      ex: [
        { cn: "여기 앉으세요.", py: "Yeogi anjeuseyo.", nl: "Gaat u hier zitten." },
        { cn: "잠깐만 기다려 주세요.", py: "Jamkkanman gidaryeo juseyo.", nl: "Wacht even op me, alstublieft." }
      ] },
    { h: "드리다: iets doen voor iemand die hoger staat",
      p: "Doe je iets voor een leraar, klant of oudere, dan gebruik je 드리다 in plaats van 주다. Zo zet je jezelf lager, en dat is beleefd. Vraag je zelf om hulp, dan blijft het 주세요, ook tegen een oudere: 도와주세요. 드리다 gaat altijd over wat jij voor die ander doet.",
      ex: [
        { cn: "제가 짐을 들어 드릴게요.", py: "Jega jimeul deureo deurilgeyo.", nl: "Ik draag uw bagage wel." },
        { cn: "할머니께 편지를 읽어 드렸어요.", py: "Halmeonikke pyeonjireul ilgeo deuryeosseoyo.", nl: "Ik heb de brief voor oma voorgelezen." }
      ] },
    { h: "Zachter vragen: 좀 en -아/어 주시겠어요?",
      p: "Vóór het werkwoord zet je vaak 좀 (\"even\"). Dat maakt het verzoek zachter. Nog beleefder is -아/어 주시겠어요? (\"Zou u ... willen?\"). In een winkel of tegen een onbekende is dat heel gewoon.",
      ex: [
        { cn: "이것 좀 바꿔 주시겠어요?", py: "Igeot jom bakkwo jusigesseoyo?", nl: "Zou u dit willen ruilen?" }
      ] }
  ],
  mistakes: [
    { wrong: "제가 사 주세요.", right: "제가 사 줄게요.", why: "주세요 is een verzoek aan de ander. Bied je zelf iets aan, dan zeg je 줄게요." },
    { wrong: "엄마가 샀어 줬어요.", right: "엄마가 사 줬어요.", why: "De verleden tijd staat alleen op 주다, niet op het eerste werkwoord." },
    { wrong: "선생님, 제가 들어 줄게요.", right: "선생님, 제가 들어 드릴게요.", why: "Voor een leraar gebruik je 드리다 in plaats van 주다." },
    { wrong: "문을 열 주세요.", right: "문을 열어 주세요.", why: "Tussen de stam en 주세요 hoort -아/어: 열어." }
  ],
  vocab: [
    ["-아/어 주다", "-a/-eo juda", "iets voor iemand doen"], ["드리다", "deurida", "geven (beleefd); iets doen voor iemand hoger"], ["창문", "changmun", "raam"],
    ["열다", "yeolda", "openen"], ["들다", "deulda", "dragen, optillen"], ["천천히", "cheoncheonhi", "langzaam"],
    ["기다리다", "gidarida", "wachten"], ["빌리다", "billida", "lenen"], ["짐", "jim", "bagage"], ["생신", "saengsin", "verjaardag (beleefd)"]
  ],
  dialogue: [
    ["A", "민수 씨, 이 가방 좀 들어 주세요.", "Minsu ssi, i gabang jom deureo juseyo.", "Minsu, wil je deze tas even voor me dragen?"],
    ["B", "네, 제가 들어 줄게요. 와, 정말 무거워요!", "Ne, jega deureo julgeyo. Wa, jeongmal mugeowoyo!", "Ja, ik draag hem wel. Wauw, die is echt zwaar!"],
    ["A", "미안해요. 도서관에서 책을 많이 빌렸어요.", "Mianhaeyo. Doseogwaneseo chaegeul mani billyeosseoyo.", "Sorry. Ik heb veel boeken geleend in de bibliotheek."],
    ["B", "괜찮아요. 어디에 놓을까요?", "Gwaenchanayo. Eodie noeulkkayo?", "Geeft niks. Waar zal ik hem neerzetten?"],
    ["A", "책상 위에 놓아 주세요. 고마워요!", "Chaeksang wie noa juseyo. Gomawoyo!", "Zet hem maar op het bureau. Bedankt!"]
  ],
  reading: {
    title: "할머니 생신",
    lines: [
      { cn: "지난 토요일은 할머니 생신이었어요.", py: "Jinan toyoireun halmeoni saengsinieosseoyo.", nl: "Afgelopen zaterdag was oma jarig." },
      { cn: "저는 할머니께 꽃을 사 드렸어요.", py: "Jeoneun halmeonikke kkocheul sa deuryeosseoyo.", nl: "Ik kocht bloemen voor oma." },
      { cn: "언니는 할머니께 노래를 불러 드렸어요.", py: "Eonnineun halmeonikke noraereul bulleo deuryeosseoyo.", nl: "Mijn zus zong een lied voor oma." },
      { cn: "할머니는 눈이 나빠서 제가 편지를 읽어 드렸어요.", py: "Halmeonineun nuni nappaseo jega pyeonjireul ilgeo deuryeosseoyo.", nl: "Oma ziet slecht, dus ik las de brief voor haar voor." },
      { cn: "할머니가 정말 좋아하셨어요.", py: "Halmeoniga jeongmal joahasyeosseoyo.", nl: "Oma vond het echt leuk." },
      { cn: "저녁에는 할머니가 맛있는 떡을 만들어 주셨어요.", py: "Jeonyeogeneun halmeoniga masinneun tteogeul mandeureo jusyeosseoyo.", nl: "'s Avonds maakte oma lekkere rijstcake voor ons." },
      { cn: "그리고 할머니가 말씀하셨어요.", py: "Geurigo halmeoniga malsseumhasyeosseoyo.", nl: "En oma zei:" },
      { cn: "\"다음에 또 와 줘.\"", py: "\"Daeume tto wa jwo.\"", nl: "\"Kom nog eens langs, hoor.\"" },
      { cn: "\"네, 꼭 다시 올게요.\"", py: "\"Ne, kkok dasi olgeyo.\"", nl: "\"Ja, ik kom zeker terug.\"" }
    ],
    questions: [
      { type: "mc", q: "Wat deed de zus van de schrijver?",
        options: ["Ze zong een lied voor oma.", "Ze kocht bloemen voor oma.", "Ze las een brief voor oma voor.", "Ze maakte rijstcake voor oma."], answer: 0,
        why: ["Goed: 언니는 할머니께 노래를 불러 드렸어요.", "De bloemen kocht de schrijver zelf.", "De brief las de schrijver voor.", "De rijstcake maakte oma zelf."] },
      { type: "mc", q: "Waarom las de schrijver de brief voor?",
        options: ["Oma ziet slecht.", "Oma was moe.", "Oma kan niet lezen.", "Oma had haar bril niet."], answer: 0,
        why: ["Goed: 할머니는 눈이 나빠서 ...", "Moe zijn staat niet in de tekst.", "Er staat niet dat oma niet kan lezen, alleen dat ze slecht ziet.", "Een bril staat niet in de tekst."] },
      { type: "mc", q: "저는 할머니께 꽃을 사 드렸어요. Waarom staat hier 드렸어요 en niet 줬어요?",
        options: ["De schrijver doet iets voor oma, en oma staat hoger.", "Het gebeurde in het verleden.", "Oma kocht de bloemen voor de schrijver.", "De bloemen waren duur."], answer: 0,
        why: ["Goed: voor iemand die hoger staat wordt 주다 드리다.", "Het verleden zit in -었어요, dat kan ook met 줬어요.", "Dan zou 할머니가 het onderwerp zijn. Hier koopt 저.", "Prijs heeft niets met 드리다 te maken."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Wilt u dat nog een keer zeggen?\"",
      options: ["다시 한번 말해 주세요.", "다시 한번 말하 주세요.", "다시 한번 말했어 주세요.", "다시 한번 말해 줄게요."], answer: 0,
      why: ["Goed: 하다 wordt 해, dan 주세요.", "하다 wordt 해, niet 하.", "Vóór 주세요 komt geen verleden tijd.", "줄게요 is een aanbod van jezelf, geen verzoek."] },
    { type: "mc", q: "Je vriend krijgt zijn koffer niet omhoog. Je biedt hulp aan.",
      options: ["제가 들어 줄게요.", "제가 들어 주세요.", "제가 들 줄게요.", "제가 들었어 줄게요."], answer: 0,
      why: ["Goed: 줄게요 is een aanbod: ik doe het voor jou.", "주세요 is een verzoek aan de ander, geen aanbod.", "Tussen de stam en 주다 hoort -어: 들어.", "Vóór 줄게요 komt geen verleden tijd."] },
    { type: "mc", q: "Welke zin betekent: \"Ik koop het wel voor je.\"",
      options: ["제가 사 줄게요.", "제가 사 주세요.", "저한테 사 주세요.", "제가 사 줬어요."], answer: 0,
      why: ["Goed: 제가 + 사 줄게요 = ik koop het voor jou.", "주세요 past niet bij 제가: je kunt jezelf niets vragen.", "Dit is \"Koop het voor mij.\"", "Dit is verleden tijd: \"Ik heb het voor je gekocht.\""] },
    { type: "mc", q: "창문 좀 열어 주세요. Wat zegt de spreker extra, vergeleken met 창문 여세요?",
      options: ["Dat het opendoen een gunst voor hem is.", "Dat het raam al open is.", "Dat hij het raam zelf opendoet.", "Dat het gisteren gebeurde."], answer: 0,
      why: ["Goed: -아/어 주세요 vraagt om iets voor de spreker.", "Dan zou je het niet vragen.", "De ander doet het raam open, niet de spreker.", "주세요 is een verzoek, geen verleden tijd."] },
    { type: "mc", q: "Je helpt je leraar met zijn boeken. Wat zeg je?",
      options: ["선생님, 제가 들어 드릴게요.", "선생님, 제가 들어 줄게요.", "선생님, 제가 들어 드리세요.", "선생님, 제가 들어 주세요."], answer: 0,
      why: ["Goed: voor een leraar wordt 주다 드리다.", "줄게요 is te gewoon tegen een leraar.", "-세요 is een verzoek aan de ander, geen aanbod.", "주세요 is een verzoek, en je wilt zelf helpen."] },
    { type: "mc", q: "\"Mijn vriend heeft een cadeau voor me gekocht.\"",
      options: ["친구가 선물을 사 줬어요.", "친구가 선물을 샀어 줬어요.", "친구가 선물을 샀어 줘요.", "친구가 선물을 사 줄게요."], answer: 0,
      why: ["Goed: de verleden tijd staat op 주다: 줬어요.", "De verleden tijd staat alleen op 주다, niet ook op 사다.", "De verleden tijd hoort op 주다, niet op 사다.", "줄게요 is een aanbod voor later, geen verleden tijd."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["문을 열 주세요.", "문을 열어 주세요.", "불을 꺼 주세요.", "이름을 써 주세요."], answer: 0,
      why: ["Goed: dit is fout. Tussen de stam en 주세요 hoort -어: 열어 주세요.", "Dit klopt: 열다 wordt 열어.", "Dit klopt: 끄다 wordt 꺼.", "Dit klopt: 쓰다 wordt 써."] },
    { type: "fill", q: "잠깐만 ___ 주세요. (Wacht even op me, alstublieft. 기다리다 = wachten)", answers: ["기다려"],
      hint: "기다리 + 어: wat wordt dat samen?", why: "ㅣ + 어 trek je samen tot ㅕ: 기다려 주세요." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik maak wel een foto van je.\"",
      tokens: [["제가", "jega"], ["사진을", "sajineul"], ["찍어", "jjigeo"], ["줄게요", "julgeyo"]],
      alt: ["사진을 제가 찍어 줄게요"] },
    { type: "order", q: "Zet in de goede volgorde (tegen je leraar): \"Meneer, ik help u wel.\"",
      tokens: [["선생님,", "seonsaengnim,"], ["제가", "jega"], ["도와", "dowa"], ["드릴게요", "deurilgeyo"]] },
    { type: "open", q: "Vertaal: \"Kunt u een foto van ons maken?\"", model: ["사진 좀 찍어 주세요.", "저희 사진 좀 찍어 주세요.", "사진 좀 찍어 주시겠어요?"],
      tip: "Check: 찍다 wordt 찍어, dan 주세요 of 주시겠어요. Niet 찍으세요: het is een gunst voor jou." },
    { type: "open", q: "Vertaal: \"Ik help je wel.\" (tegen een vriend)", model: ["제가 도와줄게요.", "내가 도와줄게."],
      tip: "Check: een aanbod is 줄게요, niet 주세요. 도와주다 schrijf je aan elkaar." }
  ],
  review: [
    { type: "mc", q: "\"Wil je even het licht uitdoen?\"",
      options: ["불 좀 꺼 주세요.", "불 좀 끄어 주세요.", "불 좀 껐어 주세요.", "불 좀 끄 주세요."], answer: 0,
      why: ["Goed: 끄다 verliest de 으: 꺼, dan 주세요.", "De 으 valt weg: 끄 + 어 = 꺼.", "Vóór 주세요 komt geen verleden tijd.", "Tussen de stam en 주세요 hoort -어."] },
    { type: "mc", q: "\"Ik schrijf het wel voor je op.\"",
      options: ["제가 써 줄게요.", "제가 써 주세요.", "제가 쓰어 줄게요.", "제가 썼어 줄게요."], answer: 0,
      why: ["Goed: 쓰다 wordt 써, en een aanbod is 줄게요.", "주세요 is een verzoek aan de ander.", "De 으 valt weg: 쓰 + 어 = 써.", "Vóór 줄게요 komt geen verleden tijd."] },
    { type: "mc", q: "Je zegt tegen je baas: \"Ik zet de koffie wel voor u.\"",
      options: ["사장님, 제가 커피를 타 드릴게요.", "사장님, 제가 커피를 타 주세요.", "사장님, 제가 커피를 탔어 드릴게요.", "사장님, 제가 커피를 타 드리세요."], answer: 0,
      why: ["Goed: voor je baas wordt 주다 드리다, en een aanbod is -ㄹ게요.", "주세요 is een verzoek, geen aanbod.", "Vóór 드릴게요 komt geen verleden tijd.", "-세요 is een verzoek aan de ander, geen aanbod."] }
  ]
})
