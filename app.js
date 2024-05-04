
// Import Library class, Book class, Audiobook class, Games class, Movies class, Music class 

const { Book } = require("./Book");
const { Library } = require("./Library");
const { Media } = require("./Media");

// Create instances of classes 

// let lotr = new Media("fellowship of the ring");
let lotr = new Book("fellowship of the ring", "fancy");

console.log(lotr);
console.log(lotr.name);
console.log(lotr.edition);

// Lord of the Rings as a instance of Book class 
// Class is blueprint
// Instance is thing we build based on the blueprint 
// verb is instantiate 

// Do things with those instances 

// Create an instance of a Library
// add media instances into the Library instance

let libraryInstance = new Library();
libraryInstance.books.push(lotr);

// Log the data in the library 
console.log(libraryInstance);

console.log(libraryInstance.books[0].name);

let lotr2 = new Book("the two towers", "fancy");


console.log(libraryInstance.books.length);
console.log(Book.count);
lotr2 = null;
Book.removeBook();
console.log(Book.count);

console.log(libraryInstance.books[0].getBookName());