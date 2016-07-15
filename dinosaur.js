function Dinosaur(name, species, size) {
	// this.roar = function () {
	//   return "Roar!";
	// };
	this.name = name;
	this.species = species;
	this.size = size || "Not specified";
}

Dinosaur.prototype.roar = function roar() {
	return "Roar!!!";
};

Dinosaur.prototype.run = function () {
  return "Running!";
};

module.exports = Dinosaur;
