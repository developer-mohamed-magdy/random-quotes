var quotes =[
  'Be yourself everyone else is already taken ― Oscar Wilde',

  'Im selfish, impatient and a little insecure I make mistakes',

  ' I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best--Marilyn Monroe',

  'Two things are infinite the universe and human stupidity and Im not sure about the universe -Albert Einstein',

  'So many books, so little time-Frank Zappa',

  'Be the change that you wish to see in the world-Mahatma Gandhi',
  
  'Be yourself everyone else is already taken ― Oscar Wilde',

  'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst',

  ' then you sure as hell dont deserve me at my best--Marilyn Monroe',
  'Two things are infinite the universe and human stupidity and Im not sure about the universe -Albert Einstein',

  'So many books, so little time-Frank Zappa',
  '“Be the change that you wish to see in the world-Mahatma Gandhi'
]
function newQuote() {
  var randomValue = Math.floor(Math.random() * (quotes.length)) ; 
    document.getElementById('quoteDisplay').innerHTML = quotes[randomValue];
  }
  

