({
  id: "08", slug: "ieyo", title: "이에요/예요 en 아니에요", sub: "Zeggen wat iets is, en wat het niet is",
  canDo: "Je kunt nu zeggen wie of wat iets is met 이에요/예요, en wat het niet is met 이/가 아니에요.",
  guess: {
    q: "\"Ik ben leraar.\" Welke zin klopt, denk je?",
    options: ["저는 선생님이에요.", "저는 선생님예요.", "저는 선생님이예요.", "저는 선생님이 있어요."], answer: 0,
    why: ["Goed: 선생님 eindigt op een 받침 (ㅁ), dus 이에요.", "예요 komt alleen na een klinker. 선생님 eindigt op ㅁ.", "이예요 bestaat niet. Het is 이에요 of 예요.", "있어요 betekent \"er is\" of \"hebben\", niet \"zijn\"."]
  },
  problem: "In het Nederlands zeg je \"Ik ben student\" met het werkwoord \"zijn\". In het Koreaans plak je 이에요 of 예요 direct achter het zelfstandig naamwoord. Welke vorm hangt af van de laatste klank. Voor \"niet zijn\" gebruik je een apart woord: 아니에요.",
  pattern: [
    { l: "wie", v: "저는", c: 1 }, { l: "wat", v: "학생", c: 3 }, { l: "이에요/예요", v: "이에요", c: 2, key: true }
  ],
  patternCap: "Naamwoord met 받침 + 이에요 · naamwoord op klinker + 예요 · naamwoord + 이/가 아니에요 (is niet)",
  rules: [
    "Eindigt het naamwoord op een 받침? Dan 이에요: 학생이에요, 선생님이에요.",
    "Eindigt het op een klinker? Dan 예요: 의사예요, 친구예요.",
    "Niet zijn: naamwoord + 이/가 아니에요. Na 받침 이, na klinker 가: 학생이 아니에요, 의사가 아니에요.",
    "Een vraag maak je met dezelfde vorm en een vraagtoon: 학생이에요?",
    "이에요 en 예요 schrijf je vast aan het naamwoord. 아니에요 schrijf je los."
  ],
  pitfall: "Schrijf nooit 이예요 of 아니예요. Het is 이에요 of 예요, en altijd 아니에요.",
  examples: [
    { cn: "저는 학생이에요.", py: "Jeoneun haksaengieyo.", nl: "Ik ben student." },
    { cn: "제 친구는 의사예요.", py: "Je chinguneun uisayeyo.", nl: "Mijn vriend is dokter." },
    { cn: "이것은 커피가 아니에요. 차예요.", py: "Igeoseun keopiga anieyo. Chayeyo.", nl: "Dit is geen koffie. Het is thee." },
    { cn: "저는 중국 사람이 아니에요.", py: "Jeoneun Jungguk sarami anieyo.", nl: "Ik ben geen Chinees." }
  ],
  nuance: [
    { h: "이에요 (is) of 있어요 (er is, hebben)?",
      p: "Beide vertaal je soms met \"is\". Maar 이에요 zegt wat iets is: een naam, beroep of ding. 있어요 zegt dat iets ergens is, of dat je iets hebt. Vergelijk: \"het is een student\" en \"er is een student\".",
      ex: [
        { cn: "그 사람은 학생이에요.", py: "Geu sarameun haksaengieyo.", nl: "Die persoon is student." },
        { cn: "교실에 학생이 있어요.", py: "Gyosire haksaengi isseoyo.", nl: "Er is een student in de klas." }
      ] },
    { h: "Niet zijn: 아니에요, niet 안",
      p: "Werkwoorden ontken je met 안. Bij 이에요 werkt dat niet. Je gebruikt 아니에요, en het naamwoord krijgt 이/가. In de spreektaal valt 이/가 soms weg: 학생 아니에요. 아니에요 hoor je ook als beleefd \"nee hoor\" of \"graag gedaan\".",
      ex: [
        { cn: "저는 의사가 아니에요.", py: "Jeoneun uisaga anieyo.", nl: "Ik ben geen dokter." },
        { cn: "감사합니다. - 아니에요.", py: "Gamsahamnida. - Anieyo.", nl: "Dank u wel. - Graag gedaan." }
      ] },
    { h: "Formeel: 입니다",
      p: "이에요/예요 is beleefd en vriendelijk, voor het dagelijks leven. Bij een presentatie, in het nieuws of bij een formele voorstelling hoor je 입니다. Die vorm is na 받침 en klinker gelijk. De ontkenning is dan 아닙니다.",
      ex: [
        { cn: "저는 안나입니다.", py: "Jeoneun Annaimnida.", nl: "Ik ben Anna. (formeel)" }
      ] }
  ],
  mistakes: [
    { wrong: "저는 학생예요.", right: "저는 학생이에요.", why: "학생 eindigt op een 받침 (ㅇ). Dan gebruik je 이에요." },
    { wrong: "저는 선생님이예요.", right: "저는 선생님이에요.", why: "이예요 bestaat niet. Na een 받침 is het 이에요." },
    { wrong: "저는 안 학생이에요.", right: "저는 학생이 아니에요.", why: "이에요 ontken je niet met 안, maar met 이/가 아니에요." },
    { wrong: "이것은 가방이 아니예요.", right: "이것은 가방이 아니에요.", why: "De vorm is altijd 아니에요, niet 아니예요." }
  ],
  vocab: [
    ["이에요/예요, 아니에요", "ieyo/yeyo, anieyo", "zijn / niet zijn"], ["의사", "uisa", "dokter, arts"], ["회사원", "hoesawon", "kantoormedewerker"],
    ["가수", "gasu", "zanger, zangeres"], ["이것", "igeot", "dit (ding)"], ["차", "cha", "thee"],
    ["이름", "ireum", "naam"], ["나라", "nara", "land"], ["사진", "sajin", "foto"], ["고등학생", "godeunghaksaeng", "middelbare scholier"]
  ],
  dialogue: [
    ["A", "이름이 뭐예요?", "Ireumi mwoyeyo?", "Hoe heet je?"],
    ["B", "제 이름은 안나예요.", "Je ireumeun Annayeyo.", "Ik heet Anna."],
    ["A", "안나 씨는 학생이에요?", "Anna ssineun haksaengieyo?", "Ben jij student, Anna?"],
    ["B", "아니요, 학생이 아니에요. 회사원이에요.", "Aniyo, haksaengi anieyo. Hoesawonieyo.", "Nee, ik ben geen student. Ik werk op kantoor."],
    ["A", "어느 나라 사람이에요?", "Eoneu nara saramieyo?", "Uit welk land kom je?"],
    ["B", "네덜란드 사람이에요.", "Nedeollandeu saramieyo.", "Ik ben Nederlandse."]
  ],
  reading: {
    title: "우리 가족 사진",
    lines: [
      { cn: "이것은 우리 가족 사진이에요.", py: "Igeoseun uri gajok sajinieyo.", nl: "Dit is een foto van mijn gezin." },
      { cn: "이 사람은 우리 아버지예요.", py: "I sarameun uri abeojiyeyo.", nl: "Deze persoon is mijn vader." },
      { cn: "아버지는 의사예요.", py: "Abeojineun uisayeyo.", nl: "Mijn vader is dokter." },
      { cn: "이 사람은 우리 어머니예요.", py: "I sarameun uri eomeoniyeyo.", nl: "Deze persoon is mijn moeder." },
      { cn: "어머니는 선생님이 아니에요. 회사원이에요.", py: "Eomeonineun seonsaengnimi anieyo. Hoesawonieyo.", nl: "Mijn moeder is geen lerares. Ze werkt op kantoor." },
      { cn: "이 사람은 제 동생이에요.", py: "I sarameun je dongsaengieyo.", nl: "Deze persoon is mijn broertje." },
      { cn: "동생은 고등학생이에요.", py: "Dongsaengeun godeunghaksaengieyo.", nl: "Mijn broertje zit op de middelbare school." },
      { cn: "그리고 이 사람은 가수가 아니에요. 제 친구예요.", py: "Geurigo i sarameun gasuga anieyo. Je chinguyeyo.", nl: "En deze persoon is geen zanger. Het is mijn vriend." }
    ],
    questions: [
      { type: "mc", q: "Wat is het beroep van de vader?",
        options: ["Dokter.", "Leraar.", "Kantoormedewerker.", "Zanger."], answer: 0,
        why: ["Goed: 아버지는 의사예요.", "선생님 staat bij de moeder, en dan met 아니에요: ze is geen lerares.", "회사원 is de moeder.", "가수 staat bij de vriend, met 아니에요: hij is geen zanger."] },
      { type: "mc", q: "Wie staat er NIET op de foto?",
        options: ["Een lerares.", "De vader.", "Het broertje.", "Een vriend."], answer: 0,
        why: ["Goed: de moeder is geen lerares, en er staat geen lerares op de foto.", "De vader staat erop: 이 사람은 우리 아버지예요.", "Het broertje staat erop: 이 사람은 제 동생이에요.", "Een vriend staat erop: 제 친구예요."] },
      { type: "mc", q: "이 사람은 가수가 아니에요. Wat betekent deze zin?",
        options: ["Deze persoon is geen zanger.", "Deze persoon is zanger.", "Deze persoon heeft geen zanger.", "Deze persoon zingt niet."], answer: 0,
        why: ["Goed: 이/가 아니에요 = is geen.", "Dat zou 가수예요 zijn, zonder 아니에요.", "\"Geen ... hebben\" is 없어요, niet 아니에요.", "아니에요 zegt wat iemand niet is, niet wat iemand niet doet."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Mijn vriend is zanger.\"",
      options: ["제 친구는 가수예요.", "제 친구는 가수이예요.", "제 친구는 가수가 있어요.", "제 친구는 가수가 아니에요."], answer: 0,
      why: ["Goed: 가수 eindigt op een klinker, dus 예요.", "이예요 bestaat niet. Na een klinker is het 예요.", "있어요 betekent \"hebben\": mijn vriend heeft een zanger.", "아니에요 betekent \"is niet\": precies het omgekeerde."] },
    { type: "mc", q: "이 사람은 회사원___. (Deze persoon werkt op kantoor.)",
      options: ["이에요", "예요", "이예요", "이 아니에요"], answer: 0,
      why: ["Goed: 회사원 eindigt op een 받침 (ㄴ), dus 이에요.", "예요 komt na een klinker. 회사원 eindigt op ㄴ.", "이예요 bestaat niet.", "이 아니에요 betekent \"is geen\": het omgekeerde."] },
    { type: "mc", q: "\"Ik ben geen leraar.\"",
      options: ["저는 선생님이 아니에요.", "저는 선생님가 아니에요.", "저는 선생님이 아니예요.", "저는 안 선생님이에요."], answer: 0,
      why: ["Goed: 선생님 heeft een 받침, dus 이, en dan 아니에요.", "가 komt na een klinker. 선생님 eindigt op ㅁ.", "De vorm is 아니에요, niet 아니예요.", "이에요 ontken je niet met 안."] },
    { type: "mc", q: "\"Dit is geen koffie.\"",
      options: ["이것은 커피가 아니에요.", "이것은 커피이 아니에요.", "이것은 커피가 안이에요.", "이것은 커피가 없어요."], answer: 0,
      why: ["Goed: 커피 eindigt op een klinker, dus 가 아니에요.", "이 komt na een 받침. 커피 eindigt op een klinker.", "Het woord is 아니에요, niet 안이에요.", "없어요 betekent \"er is geen\" of \"niet hebben\"."] },
    { type: "mc", q: "\"Er is een student in de klas.\"",
      options: ["교실에 학생이 있어요.", "교실에 학생이에요.", "교실에서 학생이 있어요.", "교실에 학생이 아니에요."], answer: 0,
      why: ["Goed: \"er is\" = 이/가 있어요.", "이에요 zegt wat iets is, niet dat het ergens is.", "Bij 있어요 hoort 에, niet 에서.", "아니에요 betekent \"is niet\"."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["저는 학생예요.", "저는 학생이에요.", "제 친구예요.", "이것은 의자가 아니에요."], answer: 0,
      why: ["Goed: deze is fout. 학생 eindigt op een 받침, dus 이에요.", "Deze klopt: 받침 + 이에요.", "Deze klopt: 친구 eindigt op een klinker, dus 예요.", "Deze klopt: 의자 eindigt op een klinker, dus 가 아니에요."] },
    { type: "mc", q: "Je stelt jezelf voor in een formele presentatie. Welke zin past het best?",
      options: ["저는 안나입니다.", "저는 안나예요.", "나는 안나야.", "안나예요?"], answer: 0,
      why: ["Goed: 입니다 is de formele vorm.", "Deze klopt, maar is beleefd en alledaags, niet formeel.", "Dit is informeel, voor vrienden.", "Dit is een vraag: \"Ben jij Anna?\"."] },
    { type: "fill", q: "제 이름은 민수___. (Mijn naam is Minsu.)", answers: ["예요"],
      hint: "민수 eindigt op een klinker.", why: "Na een klinker gebruik je 예요: 민수예요." },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn vader is geen dokter.\"",
      tokens: [["우리", "uri"], ["아버지는", "abeojineun"], ["의사가", "uisaga"], ["아니에요", "anieyo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Dit is mijn Koreaanse boek.\"",
      tokens: [["이것은", "igeoseun"], ["제", "je"], ["한국어", "hangugeo"], ["책이에요", "chaegieyo"]] },
    { type: "open", q: "Vertaal: \"Ik ben Nederlander.\"", model: ["저는 네덜란드 사람이에요.", "네덜란드 사람이에요."],
      tip: "Check: 사람 eindigt op een 받침, dus 이에요." },
    { type: "open", q: "Vertaal: \"Mijn jongere broer is geen student.\"", model: ["제 동생은 학생이 아니에요.", "제 남동생은 학생이 아니에요.", "동생은 학생이 아니에요."],
      tip: "Check: 학생 + 이 아니에요, met een spatie voor 아니에요." }
  ],
  review: [
    { type: "mc", q: "\"Dit is mijn tas.\"",
      options: ["이것은 제 가방이에요.", "이것은 제 가방예요.", "이것은 제 가방이예요.", "이것은 제 가방이 있어요."], answer: 0,
      why: ["Goed: 가방 eindigt op een 받침 (ㅇ), dus 이에요.", "예요 komt na een klinker. 가방 eindigt op ㅇ.", "이예요 bestaat niet.", "있어요 betekent \"er is\" of \"hebben\", niet \"is\"."] },
    { type: "mc", q: "\"Hij is geen Koreaan.\"",
      options: ["그 사람은 한국 사람이 아니에요.", "그 사람은 한국 사람가 아니에요.", "그 사람은 한국 사람이 아니예요.", "그 사람은 안 한국 사람이에요."], answer: 0,
      why: ["Goed: 사람 + 이 아니에요.", "가 komt na een klinker. 사람 eindigt op ㅁ.", "De vorm is 아니에요, niet 아니예요.", "이에요 ontken je niet met 안."] },
    { type: "mc", q: "\"Dat is thee.\"",
      options: ["그것은 차예요.", "그것은 차이예요.", "그것은 차가 있어요.", "그것은 차가 아니에요."], answer: 0,
      why: ["Goed: 차 eindigt op een klinker, dus 예요.", "이예요 bestaat niet. Na een klinker is het 예요.", "있어요 betekent \"er is\" of \"hebben\".", "아니에요 betekent \"is niet\": het omgekeerde."] }
  ]
})
