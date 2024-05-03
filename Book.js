const { Media } = require("./Media");


class Book extends Media {
	constructor(newName, newEdition = "first"){
		super(newName);

		this.edition = newEdition;

		Book.count++;
	}

	static count = 0;

	getBookName(){
		return this.name + ", " + this.edition;
	}

	static removeBook(){
		Book.count--;
	}
}

module.exports = {
	Book
}