const quotes = [
    "Warning: the Slayer has entered the facility.",
    "The only thing they fear... is you.",
    "You can't just shoot a hole into the surface of Mars."
];

function randomQuote(){
    const rand = Math.floor(Math.random() * quotes.length) 

    const quote = quotes[rand];

    return quote;
}

function randomizeMyQuotes(){
    const quote = randomQuote();
    const quoteDiv = document.getElementById("quote");

    quoteDiv.innerHTML = quote;
}

function onBodyLoad(){
    randomizeMyQuotes();
}

const quoteButton = document.getElementById("quoteGenerator");

quoteButton.addEventListener("click", function(){
    randomizeMyQuotes();
})


