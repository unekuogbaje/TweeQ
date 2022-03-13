const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show New Quote
function newQuote() {
    //Pick A Random Quote From API Quote Array
    // change apiQuotes to localQuotes to use local API
    const quote = apiQuotes [Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}
// Get Quotes From API
async function getQuotes() {
    //const apiUrl = 'https://type.fit/api/quotes';
    const apiUrl = 'https://labs.bible.org/api/?passage=random&type=json&callback=myCallback';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

//On Load
getQuotes();

// newQuote (); for localQuotes