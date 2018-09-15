console.log("hello world");
//declaring the variable box 
let box;
//assigning the variable box the value of bottle
box = "bottle";
//console logging the variable box to figure out what value it has now
console.log("box = " + box);

box = "phone";
console.log("box = " + box);

box = "wire";
console.log("box = " + box);

//declaring the variabale city
let city;
//assigning city the value of the city where you were born
city = "Reston";
//console log the variable to check in browser
console.log("city = " + city)
//reassign city to Wash, DC
city = "Washington DC";
console.log("city = " + city)

//Booleans: A datatype with only two possible values
//declaring two variables
let languageA = "JavaScript";
let languageB = "Java";

//this is our boolean 
let areTheyEqual = (languageA == languageB); 
console.log("areTheyEqual = " + areTheyEqual);

//Strict Equality - checks type and contents 

//flexible equality, javascript will guess and figure out that the number 4 and the string "4" are the same.
let a = 4; 
console.log(a == "4"); 

//strict equality, thus, in JavaScript you need to tell it 3 equal signs to indicate that it HAS to be exactly the same.
console.log(a === "4");

//Will it print? Yes/No
let m = 45;

//will not print
if ( m < 45 || m >= 46 ) {
    console.log("will it print?");
}

//will print
let aColor = "red";
let me = 45;

if( m !=45 || aColor == "red" ){
    console.log("will this print");
}

//If - Else Statements 
let speed = 50;

if (speed < 30) {
    console.log("not ticket");
}
//This one will only show from 30-40
else if (speed <=40) {
    console.log("50 dollar fine!");
}
else {
    console.log("100 dollar fine!");
}
//In if-else, once a true is realized it won't continue reading the following statements 

//Pop-Up Windows 
//Prompt
let question = prompt ("Are you interested in viewing this profile?");
if (question == "yes"){
    let con = confirm ("You are proceeding to the website, contact information provided by request.")
}
else {
    question = alert ("You have found the wrong page.")
}
console.log(question)
//when a user inputs an answer the value of "prompt" will now be their answer

//Confirm 
//provides a message pop up, often after the prompt code

//Alert 
//similar to a confirm but doesn't have two options, you can only click "okayr users Ilse Reijs and Jan-Noud Hutten" width="500" height="333">

