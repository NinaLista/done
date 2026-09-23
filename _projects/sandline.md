---
title: "Digitaalinen kirjahylly"
date: 2026-09-01
tags: [Books, Translation, IT Skills, Coding, Experiments, Personal, AI]
short_text: "Oikeat kirjat digihyllyyn. Yksi html-sivu."
back_text: "Kirjahyllyn valokuvista tai valmiista tietokannasta painetut kirjat digikirjahyllyyn. Visuaalisesti selailtava tietokanta. Eri projekteja & toteutustapoja."
image: /assets/images/bookshelf.png
image_position: 50% 50%
card_style: image
card_size: tall
---
## Projektit: Digitaalinen kirjahylly

Tässä projektissa kokeilen erilaisia tapoja saada painetut kirjat ja niiden teostiedot digitaaliseen visuaaliseen arkistoon. Samalla saan jatkokäyttöön hyödyllisen kirjatietokannan.

<img src="{{ '/assets/images/bookshelfAI.png' | relative_url }}"
     alt="digikirjasto-workflow"
     style="width:100%; height:auto; display:block;">
     
## Toteutuksia

### 1. Kuvapohjainen kirjasto (kirjat hyllyssä, ei valmista kirjalistaa)

**A) Chat-pohjainen HTML-työvuo**  

`Yksi HTML-sivu & Excel-tietokanta`  
`Teknologiat: multimodaalinen AI, verkkopohjainen metatietojen rikastus, Excel/CSV, itsenäinen HTML.`

<img src="{{ '/assets/images/digital-bookshelf-workflow-2-AI.webp' | relative_url }}"
     alt="digikirjasto-workflow-2"
     style="width:100%; height:auto; display:block;">

Kirjahyllykuvat [H] → konenäkö / teosten tunnistus [AI] → ihmisen tekemä tarkistus [H] → metatietojen rikastus verkkolähteistä [AI] → normalisoitu Excel-master [AI] → HTML-koodin luonti [AI] [H] → täydennysvaiheessa: uusien kirjarivien lisäys master-tiedoston &  sivun generointi masterista [AI][H] → tarvittaessa käyttöliittymän ja toimintojen iteratiivinen muokkaus chatissa [AI][H].

*Erään digitaalisen kirjahyllyn näkymä. Kirjaa klikkaamalla avautuu kirjatietue. Kirjoja voi lajitella monin tavoin, kuten genren tai tekijän mukaan.*
<img src="{{ '/assets/images/bookshelf2.png' | relative_url }}"
     alt="digikirjahylly"
     style="width:100%; height:auto; display:block;">
     
**B) Google AI Studio + Firebase -työvuo**  

`Yksi verkkosivusto & Firebase-tietokanta`  
`Teknologiat: Google AI Studio, multimodaalinen AI, Firebase, tietokantapohjainen verkkosovellus.`

Kirjahyllykuvan lataus [H] → teosten tunnistus [AI] → metatietojen rikastus [AI] → suora lisäys Firebase-tietokantaan [AI] → selainpohjainen yksittäisten kirjojen editointi, lisäys [H][AI] → ylläpidettävä ja ladattava kirjastoaineisto.

### 2. API-pohjainen kirjasto (valmis kirjalista)

`Teknologiat: REST API, JSON, AI-avusteinen sovelluksen rakentaminen ja datankäsittely.`

Rajattu Finna/Fennica API-haku [H][AI] → bibliografisten tietojen nouto [AI] → suodatus ja normalisointi [AI] → Excel/CSV-aineisto [AI] → hakukelpoinen digikirjasto [AI][H].

---

### 1. Image-based library (books in the shelves, no existing database)

**A) Chat-based HTML workflow**  

`One HTML-page & Excel-listing`  
`Technologies: multimodal AI, web-based metadata enrichment, Excel/CSV, standalone HTML.`

Shelf photos [H] → computer vision / book identification [AI] → human verification [H] → metadata enrichment from web sources [AI] → normalized Excel master file [AI] → HTML code generation [AI][H] → during the expansion phase: addition of new book rows to the master file & generation of the webpage from the master [AI][H] → when needed, iterative modification of the user interface and functionality through chat [AI][H].

**B) Google AI Studio + Firebase workflow**  

`One website & Firebase-database`  
`Technologies: Google AI Studio, multimodal AI, Firebase, database-backed web application.`

Shelf photo upload [H] → book identification [AI] → metadata enrichment [AI] → direct addition to Firebase database [AI] → browser-based book-editing and addition of books [H][AI] → downloadable / maintainable digital library dataset.

### 2. API-based library (existing book database)

`Technologies: REST API, JSON, AI-assisted application generation and data processing.`

Filtered Finna/Fennica API queries [H][AI] → bibliographic metadata retrieval [AI] → normalization and filtering [AI] → Excel/CSV dataset [AI] → searchable digital library [AI][H].

