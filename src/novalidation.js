/*
 * NoValidation
 * v0.10.2
 *
 * Javascript-pakke for å validere:
 *  a) norske fødselsnummer: http://no.wikipedia.org/wiki/F%C3%B8dselsnummer
 *  b) norske orgnummer: http://www.brreg.no/samordning/organisasjonsnummer.html
 *  c) norske bankkonti: http://no.wikipedia.org/wiki/MOD11
 *  d) norske helligdager: http://no.wikipedia.org/wiki/Helligdager_i_Norge
 *
 * Du kan også bruke den til å hente ut fødselsdato fra et gyldig fødselsnummer
 *
 * Skrevet av Thomas.Haukland@gmail.com
 */

var NoValidation = function() {
    var my = {};
    var fnrOgBankRegEx = /^[0-9]{11}$/;
    var orgNrRegEx = /^[0-9]{9}$/;

    var k1 = [3, 7, 6, 1, 8, 9, 4, 5, 2];
    var mod11 = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    var org = [3, 2, 7, 6, 5, 4, 3, 2];
    var fasteHelligDager = {
        0: {
			// 1. nyttårsdag
			1: true
        },
        4: {
			// 1. mai
			1: true,
			// 17. mai
            17: true
        },
        11: {
			// 1. Juledag
            25: true,
			// 2. Juledag
            26: true
        }
    };
    var bevegelige = {};

    function sjekkMod11(nummer, vekter) {
        var tempk = 0;
        for (var i = 0; i < nummer.length - 1; i++) {
            tempk += nummer[i] * vekter[i];
        }
        tempk = 11 - (tempk % 11);
        if (tempk === 11) tempk = 0;
        if (tempk !== parseInt(nummer[nummer.length - 1], 10)) return false;
        return true;
    }

    function sjekkKontrollSiffer(fnummer) {
        if (!sjekkMod11(fnummer.substr(0, 10), k1)) return false;
        return sjekkMod11(fnummer, mod11);
    }

    my.fodselsNummer = function(fodselsnummer, godtaHnummer) {
		if (!my.datoFraFodselsNummer(fodselsnummer, godtaHnummer)) return false;
        return sjekkKontrollSiffer(fodselsnummer);
    };

	my.datoFraFodselsNummer = function(fodselsNummer, godtaHnummer) {
        if (!fnrOgBankRegEx.test(fodselsNummer)) return undefined;
        // Sjekke at seks første siffer svarer til gyldig dato,
        // Evt med 4 trukket fra første eller tredje siffer
        var dag = parseInt(fodselsNummer.substr(0, 2), 10);
        if (dag > 31) dag -= 40;
        var mnd = parseInt(fodselsNummer.substr(2, 2), 10);
        if (godtaHnummer && mnd > 12) mnd -= 40;
        // js mnd i dato er 0-11
        mnd--;
        var aar = parseInt(fodselsNummer.substr(4, 2), 10);
		// Finne ut hvilket århundre dette er fra:
		var individSiffer = parseInt(fodselsNummer.substr(6, 3), 10);
		if (individSiffer < 500) {
			aar += 1900;
		} else if (individSiffer < 750 && aar > 53) {
			aar += 1800;
		} else if (individSiffer >= 900  && aar >= 40) {
			aar += 1900;
		} else if (individSiffer >= 500  && aar < 40) {
			aar += 2000;
		} else {
			return undefined;
		}
        var dato = new Date(aar, mnd, dag);
        // Sjekke at dag/mnd/aar er samme som vi laget dato med:
        if (dato.getDate() !== dag) return undefined;
        if (dato.getMonth() !== mnd) return undefined;
        if (dato.getFullYear() !== aar) return undefined;
		// Alt ok, returner dato
        return dato;
	};

    my.bankKontoNummer = function(kontoNummer) {
        if (!fnrOgBankRegEx.test(kontoNummer)) return false;
        return sjekkMod11(kontoNummer, mod11);
    };

    my.orgNummer = function(orgNummer) {
        if (!orgNrRegEx.test(orgNummer)) return false;
        return sjekkMod11(orgNummer, org);
    };

    my.erHelligDag = function(dato) {
        if (!(dato instanceof Date)) return false;
        var dag = dato.getDate();
        var mnd = dato.getMonth();
        // Sjekke faste helligdager først
        if (fasteHelligDager[mnd] && fasteHelligDager[mnd][dag]) return true;
        // Sjekker mot bevegelige dager
        var aar = dato.getFullYear();
        regnUtBevegeligeDager(aar);
        if (bevegelige[aar][mnd] && bevegelige[aar][mnd][dag]) return true;
        return false;
    };

    my.erHelligDagEllerSondag = function(dato) {
        if (dato.getDay() === 0) return true;
        return my.erHelligDag(dato);
    };

    function regnUtBevegeligeDager(aar) {
        if (bevegelige[aar]) return;
        var obj = {};
        // Første påskedag
        var h = my.paaskeDag(aar);
        addDato(obj, h, 0);
        // Andre påskedag
        addDato(obj, h, 1);
        // skjærtorsdag
        addDato(obj, h, -4);
        // langfredag
        addDato(obj, h, 1);
        // Kristi himmelfartsdag
        addDato(obj, h, 41);
        // Første pinsedag
        addDato(obj, h, 10);
        // Andre pinsedag
        addDato(obj, h, 1);
        bevegelige[aar] = obj;
    }

    function addDato(obj, dato, offSet) {
        dato.setDate(dato.getDate() + offSet);
        var dag = dato.getDate();
        var mnd = dato.getMonth();

        if (!obj[mnd]) obj[mnd] = {};
        obj[mnd][dag] = true;
    }

    my.paaskeDag = function(aar) {
        // Regne ut påskedag utifra år vha "Påskeformelen" (sjekk wikipedia)
        var a = aar % 19;
        var b = (aar / 100) | 0;
        var c = aar % 100;
        var d = (b / 4) | 0;
        var e = b % 4;
        var f = ((b + 8) / 25) | 0;
        var g = ((b - f + 1) / 3) | 0;
        var h = ((19 * a) + b - d - g + 15) % 30;
        var i = (c / 4) | 0;
        var k = c % 4;
        var l = (32 + (2 * e) + (2 * i) - h - k) % 7;
        var m = ((a + (11 * h) + (22 * l)) / 451) | 0;
        var n = ((h + l - (7 * m) + 114) / 31) | 0;
        var p = (h + l - (7 * m) + 114) % 31;

        return new Date(aar, n - 1, p + 1);
    };

    return my;
}();

// If we are running under node.js, export as module
if (typeof module !== 'undefined') {
	module.exports = NoValidations;
}

