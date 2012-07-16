
describe("NoValidation.fodselsNummer", function() {
	it("feiler på tom input", function() {
		expect(NoValidation.fodselsNummer("")).toEqual(false);
	});
	it("feiler på bokstaver", function() {
		expect(NoValidation.fodselsNummer("123e234")).toEqual(false);
	});
	it("feiler på for mange tegn", function() {
		expect(NoValidation.fodselsNummer("123456789012")).toEqual(false);
	});
	it("feiler på for få tegn", function() {
		expect(NoValidation.fodselsNummer("1234567890")).toEqual(false);
	});
	it("feiler på ugyldig dag i dato", function() {
		expect(NoValidation.fodselsNummer("72045678901")).toEqual(false);
	});
	it("feiler på skuddårsdato utenfor skuddår", function() {
		expect(NoValidation.fodselsNummer("29025778901")).toEqual(false);
	});
	it("feiler på ugyldig dag i måned", function() {
		expect(NoValidation.fodselsNummer("01545678901")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer1 (a)", function() {
		expect(NoValidation.fodselsNummer("29017542704")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer1 (b)", function() {
		expect(NoValidation.fodselsNummer("29017542714")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer1 (c)", function() {
		expect(NoValidation.fodselsNummer("29017542724")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer1 (d)", function() {
		expect(NoValidation.fodselsNummer("29017542734")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer1 (e)", function() {
		expect(NoValidation.fodselsNummer("29017542744")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer1 (f)", function() {
		expect(NoValidation.fodselsNummer("29017542754")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer1 (g)", function() {
		expect(NoValidation.fodselsNummer("29017542764")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer1 (h)", function() {
		expect(NoValidation.fodselsNummer("29017542774")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer1 (i)", function() {
		expect(NoValidation.fodselsNummer("29017542784")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer2 (a)", function() {
		expect(NoValidation.fodselsNummer("29017542790")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer2 (b)", function() {
		expect(NoValidation.fodselsNummer("29017542791")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer2 (c)", function() {
		expect(NoValidation.fodselsNummer("29017542792")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer2 (d)", function() {
		expect(NoValidation.fodselsNummer("29017542793")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer2 (e)", function() {
		expect(NoValidation.fodselsNummer("29017542795")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer2 (f)", function() {
		expect(NoValidation.fodselsNummer("29017542796")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer2 (g)", function() {
		expect(NoValidation.fodselsNummer("29017542797")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer2 (h)", function() {
		expect(NoValidation.fodselsNummer("29017542798")).toEqual(false);
	});
	it("feiler på ugyldig kontrollsiffer2 (i)", function() {
		expect(NoValidation.fodselsNummer("29017542799")).toEqual(false);
	});
	it("feiler på ugyldig individnummer", function() {
		expect(NoValidation.fodselsNummer("01015780000")).toEqual(false);
	});
	it("godtar gyldig fnr (a)", function() {
		expect(NoValidation.fodselsNummer("29017542794")).toEqual(true);
	});
	it("godtar gyldig fnr (b)", function() {
		expect(NoValidation.fodselsNummer("29029633310")).toEqual(true);
	});
	it("godtar gyldig fnr (c)", function() {
		expect(NoValidation.fodselsNummer("01010101006")).toEqual(true);
	});
	it("godtar gyldig D-nummer", function() {
		expect(NoValidation.fodselsNummer("47086303651")).toEqual(true);
	});
});

describe("NoValidation.bankKontoNummer", function() {
	it("feiler på tom input", function() {
		expect(NoValidation.bankKontoNummer("")).toEqual(false);
	});
	it("feiler på for få tall", function() {
		expect(NoValidation.bankKontoNummer("1234567890")).toEqual(false);
	});
	it("feiler på for mange tall", function() {
		expect(NoValidation.bankKontoNummer("123456789012")).toEqual(false);
	});
	it("feiler på feil sjekksum (a)", function() {
		expect(NoValidation.bankKontoNummer("12345678901")).toEqual(false);
	});
	it("feiler på feil sjekksum (b)", function() {
		expect(NoValidation.bankKontoNummer("12345678902")).toEqual(false);
	});
	it("feiler på feil sjekksum (c)", function() {
		expect(NoValidation.bankKontoNummer("12345678904")).toEqual(false);
	});
	it("feiler på feil sjekksum (d)", function() {
		expect(NoValidation.bankKontoNummer("12345678905")).toEqual(false);
	});
	it("feiler på feil sjekksum (e)", function() {
		expect(NoValidation.bankKontoNummer("12345678906")).toEqual(false);
	});
	it("feiler på feil sjekksum (f)", function() {
		expect(NoValidation.bankKontoNummer("12345678907")).toEqual(false);
	});
	it("feiler på feil sjekksum (g)", function() {
		expect(NoValidation.bankKontoNummer("12345678908")).toEqual(false);
	});
	it("feiler på feil sjekksum (h)", function() {
		expect(NoValidation.bankKontoNummer("12345678909")).toEqual(false);
	});
	it("feiler på feil sjekksum (i)", function() {
		expect(NoValidation.bankKontoNummer("12345678900")).toEqual(false);
	});
	it("godtar riktig sjekksum (a)", function() {
		expect(NoValidation.bankKontoNummer("12345678903")).toEqual(true);
	});
	it("godtar riktig sjekksum (b)", function() {
		expect(NoValidation.bankKontoNummer("30600787000")).toEqual(true);
	});
	it("godtar riktig sjekksum (c)", function() {
		expect(NoValidation.bankKontoNummer("30002144219")).toEqual(true);
	});
});

describe("NoValidation.orgNummer", function() {
	it("feiler på tom input", function() {
		expect(NoValidation.orgNummer("")).toEqual(false);
	});
	it("feiler på bokstaver", function() {
		expect(NoValidation.orgNummer("1234567e9")).toEqual(false);
	});
	it("feiler på feil sjekksum (a)", function() {
		expect(NoValidation.orgNummer("123456780")).toEqual(false);
	});
	it("feiler på feil sjekksum (b)", function() {
		expect(NoValidation.orgNummer("123456781")).toEqual(false);
	});
	it("feiler på feil sjekksum (c)", function() {
		expect(NoValidation.orgNummer("123456782")).toEqual(false);
	});
	it("feiler på feil sjekksum (d)", function() {
		expect(NoValidation.orgNummer("123456783")).toEqual(false);
	});
	it("feiler på feil sjekksum (e)", function() {
		expect(NoValidation.orgNummer("123456784")).toEqual(false);
	});
	it("feiler på feil sjekksum (f)", function() {
		expect(NoValidation.orgNummer("123456786")).toEqual(false);
	});
	it("feiler på feil sjekksum (g)", function() {
		expect(NoValidation.orgNummer("123456787")).toEqual(false);
	});
	it("feiler på feil sjekksum (h)", function() {
		expect(NoValidation.orgNummer("123456788")).toEqual(false);
	});
	it("feiler på feil sjekksum (i)", function() {
		expect(NoValidation.orgNummer("123456789")).toEqual(false);
	});
	it("godtar riktig sjekksum (a)", function() {
		expect(NoValidation.orgNummer("123456785")).toEqual(true);
	});
	it("godtar riktig sjekksum (b)", function() {
		expect(NoValidation.orgNummer("981566378")).toEqual(true);
	});
});


describe("NoValidation.paaskeDag", function() {
	it("regner ut 8. april som påskedag 2012", function() {
		expect(NoValidation.paaskeDag(2012).getTime()).toEqual((new Date(2012,3,8).getTime()));
	});
	it("regner ut 31. mars som påskedag 2013", function() {
		expect(NoValidation.paaskeDag(2013).getTime()).toEqual((new Date(2013,2,31).getTime()));
	});
});

describe("NoValidation.erHelligDag", function() {
	it("regner ut 26. mai 2012 som ikke helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(2012, 4, 26))).toEqual(false);
	});
	it("regner ut 27. mai 2012 som helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(2012, 4, 27))).toEqual(true);
	});
	it("regner ut 28. mai 2012 som helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(2012, 4, 28))).toEqual(true);
	});
	it("regner ut 29. mai 2012 som ikke helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(2012, 4, 29))).toEqual(false);
	});
	it("regner ut 4. april 2012 som ikke helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(2012, 3, 4))).toEqual(false);
	});
	it("regner ut 5. april 2012 som helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(2012, 3, 5))).toEqual(true);
	});
	it("regner ut 6. april 2012 som helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(2012, 3, 6))).toEqual(true);
	});
	it("regner ut 7. april 2012 som ikke helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(2012, 3, 7))).toEqual(false);
	});
	it("regner ut 8. april 2012 som helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(2012, 3, 8))).toEqual(true);
	});
	it("regner ut 9. april 2012 som helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(2012, 3, 9))).toEqual(true);
	});
	it("regner ut 10. april 2012 som ikke helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(2012, 3, 10))).toEqual(false);
	});
	it("regner ut 20. mai 2013 som helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(2013, 4, 20))).toEqual(true);
	});
	it("regner ut 1. januar 1999 som helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(1999, 0, 1))).toEqual(true);
	});
	it("regner ut 17. mai 1999 som helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(1999, 4, 17))).toEqual(true);
	});
	it("regner ut 1. mai 1999 som helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(1999, 4, 1))).toEqual(true);
	});
	it("regner ut 25. desember 1901 som helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(1901, 11, 25))).toEqual(true);
	});
	it("regner ut 26. desember 1901 som helligdag", function() {
		expect(NoValidation.erHelligDag(new Date(1901, 11, 26))).toEqual(true);
	});
});

describe("NoValidation.slaaOppOrgnr", function() {
	it("984661185 heter POSTEN NORGE AS", function() {
		var done = false;
		var navn = '';
		NoValidation.slaaOppOrgnr('984661185', function (data) {
			done = true;
			navn = data.entries[0].navn;
		});
		waitsFor(function() {
			return done;
		}, "Slå opp orgnr returnerte ikke...", 10000);
		runs(function() {
			expect(navn).toEqual('POSTEN NORGE AS');
		});
	});
});

describe("NoValidation.slaaOpPostNummer", function() {
	it("4624 gir Kristiansand S", function() {
		var done = false;
		var navn = '';
		NoValidation.slaaOppPostNummer('4624', function (data) {
			done = true;
			navn = data.postalcodes[0].placeName;
		}, 'tompi');
		waitsFor(function() {
			return done;
		}, "Slå opp postnummer returnerte ikke...", 10000);
		runs(function() {
			expect(navn).toEqual('Kristiansand S');
		});
	});
});

describe("NoValidation.erHelligDagEllerSondag", function() {
	it("regner ikke 16. juli 2012 som søndag eller helligdag", function() {
		expect(NoValidation.erHelligDagEllerSondag(new Date(2012, 6, 16))).toEqual(false);
	});
	it("regner 15. juli 2012 som søndag eller helligdag", function() {
		expect(NoValidation.erHelligDagEllerSondag(new Date(2012, 6, 15))).toEqual(true);
	});
	it("regner ikke 14. juli 2012 som søndag eller helligdag", function() {
		expect(NoValidation.erHelligDagEllerSondag(new Date(2012, 6, 14))).toEqual(false);
	});
	it("regner ut 5. april 2012 som helligdag", function() {
		expect(NoValidation.erHelligDagEllerSondag(new Date(2012, 3, 5))).toEqual(true);
	});
});
