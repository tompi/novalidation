NoValidation
============

Særnorske valideringer i javascript. Litt som Bekk sin NoCommons(https://github.com/bekkopen/NoCommons) bare i javascript, og et par online oppslag i tillegg.

Validering av:
* norske fødselsnummer: http://no.wikipedia.org/wiki/F%C3%B8dselsnummer
* norske orgnummer: http://www.brreg.no/samordning/organisasjonsnummer.html
* norske bankkonti: http://no.wikipedia.org/wiki/MOD11
* norske helligdager: http://no.wikipedia.org/wiki/Helligdager_i_Norge

Online oppslag av:
* norske postnummer vha geonames. Skaff deg en gratisbruker her før du
  bruker denne metoden: http://www.geonames.org/login
* norske orgnummer vha difi.no

Unit-tester i Jasmine.

Bruk
----

* Inkluder NoValidation.js i html-fila di.
* Kall funksjonene: 
	* NoValidation.fodselsnummer("dininput");
	* NoValidation.fodselsnummer("dininput", true); (for å godta H-nummer)
	* NoValidation.bankKontoNummer("dininput");
	* NoValidation.orgNummer("dininput");
	* NoValidation.erHelligDag(new Date(2012, 4, 28));
	* NoValidation.erHelligDagEllerSondag(new Date(2012, 4, 28));
  * NoValidation.slaaOppOrgnr('984661185', function(data) { alert(data.entries[0].navn); }, 'tompi');
  * NoValidation.slaaOppPostNummer('4624', function(data) { alert(data.postalcodes[0].placeName); }, 'tompi');


Alle returnerer true eller false, utenom de to siste som du gir en
funksjon som kalles med returverdi som parameter når oppslag er ferdig.

Lisens: MIT eller GPL v2

Skrevet av Thomas.Haukland@gmail.com

Finner du feil, send meg en mail, eller aller helst fork, legg til unit test
og send en pull-request.

