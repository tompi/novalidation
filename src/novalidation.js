/*
 * NoValidation
 * v0.9.2 16.07.2012
 *
 * Javascript-pakke for å validere:
 *  a) norske fødselsnummer: http://no.wikipedia.org/wiki/F%C3%B8dselsnummer
 *  b) norske orgnummer: http://www.brreg.no/samordning/organisasjonsnummer.html
 *  c) norske bankkonti: http://no.wikipedia.org/wiki/MOD11
 *  d) norske helligdager: http://no.wikipedia.org/wiki/Helligdager_i_Norge
 *
 * Eller slå opp:
 *  a) orgnummer vha difi
 *  b) postnummer vha geonames
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
            if (dato.getDate() !== dag) return false;
            if (dato.getMonth() !== mnd) return false;
            if (dato.getFullYear() !== aar) return false;
            return true;
        }

        var k1 = [3, 7, 6, 1, 8, 9, 4, 5, 2];
        var mod11 = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
        var org = [3, 2, 7, 6, 5, 4, 3, 2];
        var fasteHelligDager = {
            0: {
                1: true
            },
            4: {
                1: true,
                17: true
            },
            11: {
                25: true,
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
            if (!fnrOgBankRegEx.test(fodselsnummer)) return false;
            // Sjekke at seks første siffer svarer til gyldig dato,
            // Evt med 4 trukket fra første eller tredje siffer
            var dag = parseInt(fodselsnummer.substr(0, 2), 10);
            if (dag > 31) dag -= 40;
            var mnd = parseInt(fodselsnummer.substr(2, 2), 10);
            if (godtaHnummer && mnd > 12) mnd -= 40;
            // js mnd i dato er 0-11
            mnd--;
            var aar = parseInt(fodselsnummer.substr(4, 2), 10);
            if (!gyldigDato(aar + 1800, mnd, dag) && !gyldigDato(aar + 1900, mnd, dag) && !gyldigDato(aar + 2000, mnd, dag)) {
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

        my.slaaOppOrgnr = function(orgnr, suksess) {
            $.ajax({
                url: 'http://hotell.difi.no/api/jsonp/brreg/enhetsregisteret',
                data: {
                    'orgnr': orgnr
                },
                dataType: 'jsonp',
                success: suksess,
                error: function(xhr, textStatus) {
                    alert('Ooops, noe gikk galt. hotell.difi.no er kanskje nede?:' + textStatus);
                }
            });
        };

        my.slaaOppPostNummer = function(postNummer, suksess, geoNamesUser) {
            $.ajax({
                url: 'http://api.geonames.org/postalCodeLookupJSON',
                data: {
                    'postalcode': postNummer,
                    'country': 'NO',
                    'username': geoNamesUser || 'demo'
                },
                dataType: 'jsonp',
                success: suksess,
                error: function(xhr, textStatus) {
                    alert('Ooops, noe gikk galt. geonames er kanskje nede? Eller du har angitt en ugyldig bruker?:' + textStatus);
                }
            });
        };

        return my;
    }();