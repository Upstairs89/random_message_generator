var quotes = [
    'We may encuonter defeats, but we must not be defeated',
    'Failure will never overtake me if my determination to succedd is strong enough',
    'Lucky is he who benefits from the faults of others',
    'He who deceives is not of us',
    'Education is the best legacy'
]
function newQuote(){
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNum];
}