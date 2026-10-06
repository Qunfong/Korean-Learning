# Generates every HTML page of the site. Run from the repo root: python tools/build_pages.py
# Bump V after changing anything in assets/, so browsers fetch the new files.
import io, os

V = 1
BRAND, SEAL = "Korean Learning", "한"
FOOTER = "Oefenmateriaal, geen officiële TOPIK-vragen of -scores. Je voortgang staat alleen in deze browser."
SITE_JS = ('<script>window.SITE={key:"korean-learning-v1",lang:"ko-KR",voice:/^ko/i,rom:"romanisatie",language:"Koreaans",'
           'unit:"Hangul",sep:" ",listNote:"Dit is geen officiële TOPIK-woordenlijst.",first:"topik1/les.html?id=01",firstLabel:"TOPIK 1 · les 1"};</script>')
H1 = "Koreaans leren voor de TOPIK, niveau 1 tot 6"
LEAD = ("Korte grammaticalessen in het Nederlands, met Koreaanse voorbeelden, romanisatie en uitspraak. Elke les: eerst gokken, "
        "dan het idee, dan oefenen. Wat je gehaald hebt, komt later terug om te herhalen.")
LEVEL_LEAD = "Zes korte lessen, elk één grammaticapatroon. Doe er één per dag, en herhaal wat terugkomt."
LEVELS = [  # (data key, label, folder, topics on the home card)
    ("topik1", "TOPIK 1", "topik1", "은/는 · 이/가, 을/를, -아요/어요, -았/었어요, 안 · -지 않아요, -고 싶어요"),
    ("topik2", "TOPIK 2", "topik2", "-(으)ㄹ 거예요, -고, -아서/어서, -(으)ㄹ 수 있어요, -아야/어야 해요, -(으)면"),
    ("topik3", "TOPIK 3", "topik3", "-는데, -기 때문에, bijzinnen -는/-(으)ㄴ/-(으)ㄹ, -(으)려고 하다, -아/어 보다, -게 되다"),
    ("topik4", "TOPIK 4", "topik4", "-(으)ㄹ 뿐만 아니라, -더라도, -는 바람에, -다가, -(으)ㄹ 정도로, -다고 하다"),
    ("topik5", "TOPIK 5", "topik5", "-는 반면에, -는 한, -(으)ㄹ 리가 없다, -기 마련이다, -(으)ㄹ수록, -는 셈이다"),
    ("topik6", "TOPIK 6", "topik6", "-는 데다가, -기는커녕, -(으)ㄹ지언정, -는 법이다, -거니와, -(으)므로"),
]


def page(prefix, title, body, scripts=True):
    tags = ""
    if scripts:
        tags = "".join('<script src="%sassets/data/%s.js?v=%d"></script>' % (prefix, k, V) for k, *_ in LEVELS)
        tags += SITE_JS + '<script src="%sassets/app.js?v=%d"></script>' % (prefix, V)
    return """<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<link rel="stylesheet" href="{p}assets/style.css?v={v}">
</head>
<body>
<header class="site"><div class="wrap">
  <a class="brand" href="{p}index.html"><span class="seal">{seal}</span> {brand}</a>
  <nav><a href="{p}index.html#niveaus">Niveaus</a><a href="{p}herhaling.html">Herhalen</a><a href="{p}documentatie.html">Documentatie</a></nav>
</div></header>
<main class="wrap">
{body}
<footer>{footer}</footer>
</main>
{tags}</body></html>
""".format(footer=FOOTER, seal=SEAL, brand=BRAND, title=title, p=prefix, v=V, body=body.strip(), tags=tags)


def write(path, text):
    os.makedirs(os.path.dirname(path) or ".", exist_ok=True)
    with io.open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(text)


cards = "\n".join(
    '  <a class="card" href="%s/"><div class="big">%s</div><p class="muted small zh">%s</p><span class="tag ok">6 lessen</span></a>' % (d, label, topics)
    for _, label, d, topics in LEVELS
)
write("index.html", page("", BRAND, """
<h1>%s</h1>
<p class="lead">%s</p>

<h2 id="niveaus">Kies je niveau</h2>
<div class="grid">
%s
</div>

<h2>Zo werkt een les</h2>
<div class="card">
<ol>
  <li><b>Gok eerst.</b> Eén vraag over het nieuwe patroon, vóór de uitleg. Telt niet mee.</li>
  <li><b>Het idee.</b> Welk probleem lost het patroon op, een plaatje van de zinsbouw, en de valkuil.</li>
  <li><b>Voorbeelden, woorden en een dialoog.</b> Met uitspraakhulp (uit te zetten) en uitspraak via je browser.</li>
  <li><b>Oefenen.</b> Meerkeuze, zinnen bouwen en een eigen zin. Fout? Je krijgt uitleg en probeert opnieuw.</li>
  <li><b>Herhalen.</b> Na 2 dagen komen nieuwe vragen terug. Goed: de pauze verdubbelt. Fout: morgen opnieuw.</li>
</ol>
</div>
<p>Alle grammatica op één plek: <a href="documentatie.html">Documentatie</a>.</p>
""" % (H1, LEAD, cards), scripts=False))

write("herhaling.html", page("", "Herhalen · " + BRAND, '<div id="app" data-page="review"><p>Laden...</p></div>'))
write("documentatie.html", page("", "Documentatie · " + BRAND, '<div id="app" data-page="docs"><p>Laden...</p></div>'))

for key, label, d, _ in LEVELS:
    write(d + "/index.html", page("../", label + " · " + BRAND, """
<h1>%s</h1>
<p class="lead">%s</p>
<div id="app" data-page="level" data-level="%s"><p>Laden...</p></div>
""" % (label, LEVEL_LEAD, key)))
    write(d + "/les.html", page("../", "Les · " + label, """
<div id="app" data-page="lesson" data-level="%s"><p>Laden...</p><noscript>Deze les heeft JavaScript nodig.</noscript></div>
""" % key))
print("pages written, v=%d" % V)
