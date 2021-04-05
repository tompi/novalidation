NoValidation
============

Særnorske valideringer i javascript. Litt som Bekk sin NoCommons(https://github.com/bekkopen/NoCommons) bare i javascript.

Validering av:
* norske fødselsnummer: http://no.wikipedia.org/wiki/F%C3%B8dselsnummer
* norske orgnummer: http://www.brreg.no/samordning/organisasjonsnummer.html
* norske bankkonti: http://no.wikipedia.org/wiki/MOD11
* norske helligdager: http://no.wikipedia.org/wiki/Helligdager_i_Norge

Unit-tester i Jasmine.

Bruk
----

## Installasjon:

For node:
```bash
$ npm install --save novalidation
```

Direkte fra CDN:
```text
https://unpkg.com/novalidation@latest/build/novalidation.min.js
```
Eksponerer en global "NoValidation" variabel.

## Bruk

CommonJs:
```js
var NoValidation = require('novalidation');
var gyldigFnr = NoValidation.fodselsNummer("12345678901");
```

ES Modules:
```js
import NoValidation from 'novalidation';
var gyldigFnr = NoValidation.fodselsNummer("12345678901");
```

## Funksjoner

* NoValidation.fodselsNummer("dininput");
* NoValidation.fodselsNummer("dininput", true); (for å godta H-nummer)
* NoValidation.bankKontoNummer("dininput");
* NoValidation.orgNummer("dininput");
* NoValidation.erHelligDag(new Date(2012, 4, 28));
* NoValidation.erHelligDagEllerSondag(new Date(2012, 4, 28));

Alle returnerer true eller false

Lisens: MIT

Skrevet av Thomas.Haukland@gmail.com

Finner du feil, send meg en mail, eller aller helst fork, legg til unit test
og send en pull-request.

