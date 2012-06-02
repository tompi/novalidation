/*
 * NoValidation
 * v0.9 02.06.2012
 *
 * Javascript-pakke for å validere:
 *	a) norske fødselsnummer: http://no.wikipedia.org/wiki/F%C3%B8dselsnummer
 *  b) norske orgnummer: http://www.brreg.no/samordning/organisasjonsnummer.html
 *  c) norske bankkonti: http://no.wikipedia.org/wiki/MOD11
 *
 * Skrevet av Thomas.Haukland@gmail.com
 *
 */

var NoValidation = function() {
	var my = {};
	var fnrOgBankRegEx = /^[0-9]{11}$/;
	var orgNrRegEx = /^[0-9]{9}$/;

	function gyldigDato(aar, mnd, dag) {
		var dato = new Date(aar, mnd, dag);
		// Sjekke at dag/mnd/aar er samme som vi laget dato med:
		if (dato.getDate() != dag) return false;
		if (dato.getMonth() != mnd) return false;		
		if (dato.getFullYear() != aar) return false;		
		return true;
	}

	var k1 = [ 3, 7, 6, 1, 8, 9, 4, 5, 2 ];
	var mod11 = [ 5, 4, 3, 2, 7, 6, 5, 4, 3, 2 ];
	var org = [ 3, 2, 7, 6, 5, 4, 3, 2 ];

	function sjekkMod11(nummer, vekter) {
		var tempk = 0;
		for (var i = 0; i < nummer.length-1; i++) {
			tempk += nummer[i] * vekter[i];
		}
		tempk = 11 - (tempk % 11);
		if (tempk != nummer[nummer.length-1]) return false;
		return true;
	}

	function sjekkKontrollSiffer(fnummer) {
		if (!sjekkMod11(fnummer.substr(0, 10), k1)) return false;
		return sjekkMod11(fnummer, mod11);
	}


	my.fodselsNummer = function(fodselsnummer, godtaHnummer) {
		// Sjekke at streng er 11 siffer
		if (!fnrOgBankRegEx.test(fodselsnummer)) return false;
		// Sjekke at seks første siffer svarer til gyldig dato,
		// Evt med 4 trukket fra første eller tredje siffer
		var dag = parseInt(fodselsnummer.substr(0,2), 10);
		if (dag > 31) dag -= 40;
		var mnd = parseInt(fodselsnummer.substr(2,2), 10);
		if (godtaHnummer && mnd > 12) mnd -= 40;
		// js mnd i dato er 0-11...
		mnd--;
		var aar = parseInt(fodselsnummer.substr(4,2), 10);
		if (!gyldigDato(aar+1800,mnd,dag) &&
				!gyldigDato(aar+1900,mnd,dag) &&
				!gyldigDato(aar+2000,mnd,dag)) {
			return false;
		}
		return sjekkKontrollSiffer(fodselsnummer);
	};

	my.bankKontoNummer = function(kontoNummer) {
		if (!fnrOgBankRegEx.test(kontoNummer)) return false;
		return sjekkMod11(kontoNummer, mod11);
	};

	my.orgNummer = function(orgNummer) {
		if (!orgNrRegEx.test(orgNummer)) return false;
		return sjekkMod11(orgNummer, org);
	}

	return my;
}();
