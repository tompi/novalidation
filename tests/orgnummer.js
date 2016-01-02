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
