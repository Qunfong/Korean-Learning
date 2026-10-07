# Site settings for tools/build_pages.py (Korean-Learning). Bump V after changing anything in assets/.
V = 4
BRAND, SEAL = "Korean Learning", "한"
FOOTER = "Oefenmateriaal, geen officiële TOPIK-vragen of -scores. Je voortgang staat alleen in deze browser."
SITE_JS = ('<script>window.SITE={key:"korean-learning-v1",lang:"ko-KR",voice:/^ko/i,rom:"romanisatie",language:"Koreaans",'
           'unit:"Hangul",sep:" ",listNote:"Dit is geen officiële TOPIK-woordenlijst.",first:"topik1/les.html?id=01",firstLabel:"TOPIK 1, les 1",passSeal:"합"};</script>')
SITE_HEAD = ('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
             '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Noto+Serif+KR:wght@400;600&display=swap">'
             '<style>:root{--zh:"Noto Serif KR","AppleMyungjo","Batang",serif;--green:#2b5a8a;--green-soft:#e6eef7;--grid:#cddbeb;--ok:#2b5a8a;--ok-soft:#e6eef7}@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--green:#8fb5e3;--green-soft:#17263a;--grid:#2a3e57;--ok:#8fb5e3;--ok-soft:#17263a}}</style>')
H1 = "Koreaans leren voor de TOPIK, niveau 1 tot 6"
LEAD = ("Grammaticalessen in het Nederlands, met Koreaanse voorbeelden, romanisatie en uitspraak. Elke les: eerst gokken, "
        "dan het idee en de nuance, dan lezen en oefenen. Wat je gehaald hebt, komt later terug om te herhalen.")
LEVEL_LEAD = "Vijftien lessen, elk één grammaticapatroon met tien woorden en een leestekst. Doe er één per dag, en herhaal wat terugkomt."
LEVELS = [  # (data key, label, folder, topics on the home card)
    ("topik1", "TOPIK 1", "topik1", "은/는 · 이/가, 을/를, 에/에서, -아요/어요, -았/었어요, -(으)세요, -지만 ..."),
    ("topik2", "TOPIK 2", "topik2", "-(으)ㄹ 거예요, -아서/어서, -(으)니까, -고 있어요, -(으)ㄹ 때, onregelmatige werkwoorden ..."),
    ("topik3", "TOPIK 3", "topik3", "-는데, -기 때문에, bijzinnen, -(으)ㄴ 적이 있다, -는 것 같다, -기로 하다 ..."),
    ("topik4", "TOPIK 4", "topik4", "-더라도, -는 바람에, -다가, -았/었더니, -던, -느라고, passief, causatief ..."),
    ("topik5", "TOPIK 5", "topik5", "-는 반면에, -(으)ㄹ 리가 없다, -(으)ㄹ수록, -(으)ㄹ 뻔하다, -는 김에, -고 말다 ..."),
    ("topik6", "TOPIK 6", "topik6", "-는 데다가, -기는커녕, -(으)ㄹ지언정, -(으)ㄴ 나머지, -기 나름이다, -(으)ㄹ 따름이다 ..."),
]
