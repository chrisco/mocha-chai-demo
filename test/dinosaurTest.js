var Dinosaur = require("../dinosaur");
var chai = require("chai");
var expect = chai.expect;

describe("Dinosaur", function() {
	var danny = new Dinosaur("Danny");
	var bob = new Dinosaur("Danny", "T-Rex");
	var dude = new Dinosaur();
	var denver = new Dinosaur("Denver", "Pterodactly", 233);

	it("should have a name", function() {
		expect(danny.name).to.equal("Danny");
	});
	it("should have a species", function() {
		expect(bob.species).to.equal("T-Rex");
	});
	it("should have the option of having a size", function() {
		expect(denver.size).to.equal(233);
		expect(bob.size).to.equal("Not specified");
	});
});

describe("Roar", function() {
	var danny = new Dinosaur();
	it("should roar", function() {
		expect(danny.roar()).to.equal("Roar!!!");
	});

describe("Run", function () {
	var roberto = new Dinosaur();
	it("should be run", function () {
		expect(roberto.run()).to.equal("Running!");
	});
});

});


// before(function () {
//
// });

// after(function () {
//
// });
