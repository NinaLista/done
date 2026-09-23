---
title: "Omalla kännyapilla havainnot puhumalla Exceliin"
date: 2026-01-02
tags: [Tools, Web App, Mobiili]
short_text: "Kevyt selainpohjainen mobiililoki sanelujen tallentamiseen Google Sheetiin."
back_text: "Rakenteinen lokityökalu tallentaa puhumani tekstin, aikaleiman, sijainnin, karttalinkin ja haluamani valokuvaliitteen Drive-linkkinä Google Sheetsin sarakkeisiin. 1 sanelu = 1 rivi."
image: /assets/images/saneluloki.webp
image_position: 15% 50%
card_style: image
card_size: standard
---

## Puheloki 

Tein mobiilikäyttöön selainpohjaisen, kevyen lokityökalun. Sanelen tai kirjoitan tekstin, ja teksti tallentuu suoraan Google Sheetiin. 
Sovellus näyttökuvakkeesta, johon se tallennetaan ensimmäisellä käyttökerralla.

Sovellus tallentaa tiedot rakenteisesti Google Sheetiin sarakkeisiin, yhden havainnon tiedot tallentuvat samalle riville, kukin omaan sarakesoluunsa. 
Omaan sarakkeeseensa tallentuvat aikaleima, sijainti ja karttalinkki. Haluttaessa lokiin saa myös valokuvan: se tallentuu Google Driveen ja lokiin tallentuu havainnon yhteyteen Drive-linkki kyseiseen kuvaan. 

Rakennetta voi räätälöidä erilaisiin mobiilisti tehtäviin lokitus- ja dokumentointitarpeisiin. 

# Toteutus 

Tekninen toteutus perustuu Apps Script -web-sovellukseen, Google Sheetsiin sekä HTML- ja JavaScript-käyttöliittymään. Työkalu toimii Android-puhelimen selaimessa ilman ulkoisia API-palveluita.
```

