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
