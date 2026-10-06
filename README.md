# Korean Learning

Statische GitHub Pages-site om Koreaans te leren voor de TOPIK, niveau 1 tot 6.
Live: https://qunfong.github.io/Korean-Learning/

Zelfde opzet als [HSK-Learning](https://github.com/Qunfong/HSK-Learning): per les gok eerst → het idee (patroon als plaatje + valkuil)
→ voorbeelden en dialoog (romanisatie aan/uit, uitspraak via de browser) → oefenen → herhalen na 2 dagen
(goed: pauze ×2, fout: morgen, geleerd bij 16+ dagen). Voorlopig alleen grammatica; woordenlijsten volgen later.

## Structuur
- `assets/data/topik1.js` … `topik6.js` - lessen per niveau. Veld `cn` = Koreaanse zin, `py` = romanisatie. `vocab` is optioneel.
- `assets/app.js` - zelfde code als de HSK-site; taalinstellingen via `window.SITE` (in `tools/build_pages.py`).
- `tools/build_pages.py` - genereert alle HTML-pagina's. `tools/validate.js` - controleert de lesdata.

Na een wijziging in `assets/`: verhoog `V` in `tools/build_pages.py` en draai het script opnieuw.

Oefenmateriaal, geen officiële TOPIK-vragen of -scores.
