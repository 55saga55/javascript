//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];


function display(){
    var mynew = Math.floor(Math.random()*10);
    if ( mynew >= arrayOfQuotes.length){
        mynew = mynew-5;
        document.getElementById("quoteOutput").innerHTML = arrayOfQuotes[mynew].quote;
        document.getElementById("authorOutput").innerHTML = arrayOfQuotes[mynew].author;

    }
    else{
        document.getElementById("quoteOutput").innerHTML = arrayOfQuotes[mynew].quote;
        document.getElementById("authorOutput").innerHTML = arrayOfQuotes[mynew].author;

    }
}

function generateQuote(){
    display();
}