
/* math

let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x, 3);
x = Math.sqrt(x);
x = Math.abs(x);
maximum = Math.max(x,y,z);
minimum = Math.max(x,y,z);
x = Math.PI;

console.log(x);

*/

// useful string properties & methods

//let userName = "Jae bom";
//let phoneNumber = "123-456-789";

//console.log("userName.length");
//console.log(userName.charAt(0));
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("o"));
//console.log(userName.trim());
//console.log(userName.toUpperCase());
//console.log(userName.toLowerCase());
//console.log(phoneNumber = phoneNumber.replaceAll("-", "/"));

/*phoneNumber = phoneNumber.replaceAll("-", "/")
console.log(phoneNumber); also works! */


// slice() extracts a section of a string and returns it
// as a new string, without modifying the original string

/*
let fullName = "Let's go";
let firstName;
let lastName

firstName = fullName.slice(0,7);
lastName = fullName.slice(8, 13);

or do this better method

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
*/


// method chaining = calling one method after aother in one
// continuous line of code

//let userName = "Tristan";

//let letter = userName.charAt(0);
//letter = letter.toUpperCase();

//or do this

//let letter = userName.charAt(0).toUpperCase();
//console.log(letter);




// if statement = a basic form of decision making
// if a condition is true, then do something
// if not, then dont do it lmao

/*
let age = 15;

if(age >= 18){
    console.log("You're legal.")
}
else {
    console.log("POLICE INVASION ONGOING");
}

let online = true;

if(online){
    console.log("*gamer sfx plays*");
}
else {
    console.log("*sad gamer sfx plays*");
}
*/


// switch = statement that examines a value for a match
// against many case clauses. more efficient than many 
// "else if" statements
/*
let grade = "Yum";

if(grade == "A"){
    console.log("Damn");
}
else if (grade == "B)"){
    console.log("Sheesh");
}
else if (grade == "C"){
    console.log("Chad");
}
else if (grade == "D"){
    console.log("Dork");
}
else if (grade == "F"){
    console.log("Fuck up");
}
else {
    console.log(grade+"?", "The fuck you typin, dog?");
}
*/
// using a lot of else if statements aint look nice, use
// switch statements instead =D

/*
let grade = "A";

switch(grade){
    case "A":
        console.log("Damn!");
        break;
    case "B":
        console.log("Sheesh..");
        break;
    case "C":
        console.log("Chad!");
        break;
    case "D":
        console.log("Dork.");
        break;
    case "F":
        console.log("You're a fuck up.");
        break;
    default:
        console.log(grade+"?", "The fuck you typin, dog?");
}
*/

// another example of using switch statements
// but this time we have numbers instead of letters

let grade = 90;

switch(true){
    case grade >= 90:
        console.log("Damn!");
        break;
    case grade >= 85:
        console.log("Sheesh..");
        break;
    case grade >= 80:
        console.log("Chad");
        break;
    case grade >= 75:
        console.log("Dork");
        break;
    case grade < 75:
        console.log("You're a fuck up.");
        break;
    default:
        console.log(grade+"?", "The fuck you typin, dog?");
}



/* for loop = repeat some code a certain amount of times

for (let i = 1; i <= 20; i+=1){
    if (i == 13){
        break;
    }
    console.log(i);
}

console.log("Happy New Year!");

*/

// nested loop = a loop inside of another loop
    
/*
for (let i = 1; i <= 2; i+=1){
    for (let j = 1; j <= 3; j+=1){
    console.log(j);
    }
}
*/

// function = define code once, and use it many times
// to perform some code, call the function name


/*
unRavel();

function unRavel(){
    console.log("Oshiete,")
    console.log("Oshiete yo")
    console.log("Sono shikumi wo..")
    console.log("Boku no naka ni,")
    console.log("dareka iru no?")
}
*/

