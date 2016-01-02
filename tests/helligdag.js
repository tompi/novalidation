
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
