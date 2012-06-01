/*
 * NoValidation
 * v0.1
 *
 * Javascript-pakke for å validere norske fødselsnummer,
 * orgnummer og bankkonti
 *
 * Skrevet av Thomas.Haukland@gmail.com
 *
 */

var NoValidation = function() {
	var my = {};
	var fnrRegEx = /^[0-9]$/;

	my.fodselsNummer = function(fodselsnummer) {
		if (!fnrRegEx.test(fodselsnummer)) return false;
		return true;
	};

	return my;
}();
