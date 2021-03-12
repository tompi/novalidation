
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
	it("godtar fødselsnummer som er syntetisk PID", function() {
		expect(NoValidation.fodselsNummer("17912099997")).toEqual(true);
	});
	it("godtar D-nummer som er syntetisk PID", function() {
		expect(NoValidation.fodselsNummer("57912075186")).toEqual(true);
	});
});
