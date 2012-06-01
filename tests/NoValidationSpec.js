
describe("NoValidation", function() {
	it("feiler på tom input", function() {
		expect(NoValidation.fodselsNummer("")).toEqual(false);
	});
	it("feiler på bokstaver", function() {
		expect(NoValidation.fodselsNummer("123e234")).toEqual(false);
	});
	it("feiler på for mange tegn", function() {
		expect(NoValidation.fodselsNummer("123456789012")).toEqual(false);
	});
});
