# Korean Learning

Statische GitHub Pages-site om Koreaans te leren voor de TOPIK, niveau 1 tot 6.
Live: https://qunfong.github.io/Korean-Learning/

Zelfde opzet als [HSK-Learning](https://github.com/Qunfong/HSK-Learning): per les gok eerst → het idee (patroon als plaatje + valkuil)
→ voorbeelden en dialoog (romanisatie aan/uit, uitspraak via de browser) → oefenen → herhalen na 2 dagen
(goed: pauze ×2, fout: morgen, geleerd bij 16+ dagen). Per niveau 15 lessen en een woordenlijst met flashcards.

## Structuur
- `assets/src/<niveau>/NN-slug.js` - één les per bestand (een JS-object). `_words.js` = woordenlijst van het niveau, `_level.json` = naam en map.
- `assets/data/<niveau>.js` - gegenereerd uit `assets/src`; niet met de hand aanpassen.
- `assets/app.js` - lespagina, oefeningen (meerkeuze, invullen, zinnen bouwen, vertalen), herhaling, documentatie, woordenlijst met flashcards. Identiek in HSK-Learning en Korean-Learning; taalinstellingen via `window.SITE`.
- `tools/site_config.py` - instellingen van deze site (niveaus, teksten, versie `V`).
- `tools/build_pages.py` - voegt de lessen samen en maakt alle HTML-pagina's: `python tools/build_pages.py`.
- `tools/validate.js` - controleert lessen en woordenlijsten: `node tools/validate.js assets/src/<niveau>/*.js`.
- `tools/LESSON_SPEC.md` - specificatie van een les (velden, diepgang, schrijfregels). Voorbeeldles: `HSK-Learning/assets/src/hsk3/01-ba.js`.

Na een wijziging in `assets/`: verhoog `V` in `tools/site_config.py` en draai het build-script, anders laden browsers tot 10 minuten de oude versie.

Oefenmateriaal, door AI geschreven: laat het nakijken door een moedertaalspreker of docent. Geen officiële examenvragen, scores of woordenlijsten.
