let lang = prompt("What's your name?");

let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
    "Welcome, " + lang;

alert(feedback);