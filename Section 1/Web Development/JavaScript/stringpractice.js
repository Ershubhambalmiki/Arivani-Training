// --If you have the string "JavaScript", how would you find out how many characters it has?

let cheakLength = "Javascript";
console.log(cheakLength.length);

// -- How would you change the string "HELLO WORLD" to lowercase in JavaScript?

let converLowerCase = "HELLO MY NAME IS SHUBBHAM";
let conversion =converLowerCase.toLowerCase();
console.log(conversion);

// -- Which method can you use to check if the string "Hello, world!" contains the word "world"?

let cheakInclude = "hello How Are you";
let includeResult = cheakInclude.includes("Are");
console.log(includeResult);

// --If you have a string with extra spaces before and after it, like " Hello ", what does the .trim() method do?

let trim = " shubham";
let trimResult = trim.trimStart();
console.log(trimResult);

// --How can you get the first three characters from the string "JavaScript"?

let getThreeWord = "Javascript";
let getResult = getThreeWord.slice(0,3);
console.log(getResult);

// --If you have a string "hello", which JavaScript method would you use to convert it to "HELLO"?

let conertUpperCase = "hello";
let upperCaseReslut = conertUpperCase.toUpperCase();
console.log(upperCaseReslut);

// --If you have the string "apple,banana,cherry", how would you use .split() to turn it into an array of fruits?

let txtstring = "apple,banana,cherry";
let changeArray = txtstring.split(",")
for(let item of changeArray)
{
    console.log(item);
}

// -- If you have two strings, "Hello" and "World", how can you combine them into a single string "Hello World"?

let add = "Hello"
let add1 = "my name is name ";
let concatenate = add.concat(" ",add1);
console.log(concatenate);

//  --If you have "JavaScript", how would you find the index of "S"?

let findIndex = "javascript";
let findIndexNumber = findIndex.lastIndexOf("s");
console.log(findIndexNumber);

// -- If you have "JavaScript", how would you find the index of "S"?

let accessCharecter = "Javascropt";
let findCharecter = accessCharecter.slice(0,4);
console.log(findCharecter);

// --If you want to replace "Hello" with "Hi" in the string "Hello, World!", how would you do that?

let textReplace = "hello";
let textReplaceRsult = textReplace.replace(textReplace,"hi");
console.log(textReplaceRsult);

// -- How can you use bracket notation to get the first character of a string?

let startsWith = "javascript";
let startResult = startsWith.startsWith("java");
console.log(startResult);

// -- How can you check if the string "Hello World" ends with "World"?

let endWith ="hello World";
let endResult = endWith.endsWith("World");
console.log(endResult);

// -- If you have "hello", what does calling .toUpperCase() on it do?

function myfunction(){
let con = "hello"
let convert = con.toUpperCase();
return convert
}
console.log(myfunction());

// --What method would you use to get the character at index 3 of the string "Hello"?

let at = "hello";
let atResult = at.at(3);
console.log(atResult);

// -- How would you split the string "apple,banana,cherry" into an array of fruits?

let txtString = "apple,banana,cherry"
let conArr = txtString.split(",");
console.log(conArr);






