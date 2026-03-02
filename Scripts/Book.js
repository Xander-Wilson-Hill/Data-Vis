export default class Book {
	#reserved;
	#onLoan;
	title;
	author;
	
	constructor(title, author) {
		this.title = title;
		this.author = author;
		this.#reserved = false;
		this.#onLoan = false;
	}

	get reserved() {
		return this.#reserved;
	}
}

export class ComicBook extends Book {
	illustrator;

	constructor(title, author, illustrator){
		super(title, author);
		this.illustrator = illustrator;
	}

	get illustrator() {
		return this.illustrator;
	}
}