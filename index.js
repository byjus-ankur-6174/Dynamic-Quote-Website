const quoteTitle = document.querySelector("#quote-title");
const quoteAuthor = document.querySelector("#quote-author");
const changeQuoteBtn = document.querySelector("#change-quote-btn");

let quotes = [];
const url = "https://type.fit/api/quotes";

const getQuotes = async () => {
	try {
		let data = await fetch(url);
		data = await data.json();
		quotes = data;
	} catch (err) {
		console.log(err);
	}
};

getQuotes();

changeQuoteBtn.addEventListener("click", () => {
	let index = Math.floor(Math.random() * quotes.length);
	quoteTitle.innerHTML = `${quotes[index].text}`;
	quoteAuthor.innerHTML = `By ${quotes[index].author}`;
});
