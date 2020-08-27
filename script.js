const quotes = [ 
{quote: `"I'm not a great programmer; I'm just a good programmer with great habits."`,
author: `- Kent Beck`
}, {
quote: `"Talk is cheap. Show me the code."`,
author: `- Linus Torvalds`
}, {
quote: `"Programs must be written for people to read, and only incidentally for machines to execute."`,
author: `- Harold Abelson`
}, {
quote: `"Truth can only be found in one place: the code."`,
author: `- Robert C`
}, {
quote: `"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime."`,
author: `- Muhammad Waseem`
}, {
quote: `"How you look at it is pretty much how you'll see it"`,
author: `- Steve Jobs`
}, {
quote: `"The most disastrous thing that you can ever learn is your first programming language."`,
author: `- Alan Kay`
}, {
quote: `"The most important property of a program is whether it accomplishes the intention of its user."`,
author: `- C.A.R. Hoare`
}, {
quote: `"I am committed to push my branch to the master."`,
author: `- Halgurd Hussein`
}, {
quote: `"Coding is not just code, that is a live thing to serve everyone!"`,
author: `- Ming Song`}
]
let quoteText = document.getElementById('text');
let quoteAuthor = document.getElementById('author');
let randomQuote = null;
let randomAuthor = null;
function getRandom () {
    let nextQuotes = quotes.filter(elem => elem.quote != randomQuote)
    let randomQuoteNumber = Math.floor(Math.random() * nextQuotes.length);
    randomQuote = nextQuotes[randomQuoteNumber].quote;
    let nextAuthors = quotes.filter(elem => elem.author != randomAuthor)
    let randomAuthorNumber = Math.floor(Math.random() * nextAuthors.length);
    randomAuthor = nextAuthors[randomAuthorNumber].author;
    
$('#quotes').animate({opacity: 0}, 400,
    function () {
        $('#quotes').animate({opacity: 1}, 400
        );
        $(quoteText).text(randomQuote);
        $(quoteAuthor).text(randomAuthor);
    })};
