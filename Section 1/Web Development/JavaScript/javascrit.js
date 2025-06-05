// -- [ String Search ] ----

// -- String index start ---

let stringIndexStrat = "I Leaning Java Script"
let stringIndexStrat1 = stringIndexStrat.indexOf("java")
console.log("String Search Index Strat =", stringIndexStrat1)

// -- String index end ---

let stringIndexEnd = "I Leaning Java Script"
let stringIndexEnd1 = stringIndexStrat.lastIndexOf("Script")
console.log("String Search Index end =", stringIndexEnd1)

// -- String Search ---

let search = "i learn javascript programing";
let searchResult = search.search("javascript");
console.log("String Search Method =", searchResult);

// -- match String---

let match = "javascript is a scripting language and i learn javascript programing";
let matchResult = match.match("javascript");
console.log(" String  Match =", matchResult.toString());
// -- matchAll String---

let matchAll = "javascript is a scripting language and i learn javascript programing"; 
let matchAllResult = match.match("javascript");
console.log(" String  Match =", matchAllResult.toString());

//  -- Include --

let Include = "Hi my name is shuubham"; 
let IncludeResult = Include.includes("is");
console.log("include =", IncludeResult);

// -- startwith ----- 

let start = "Hello world, welcome to the universe";
let startResult = start.startsWith("Hello");
console.log("strat with =", startResult);

// --[ Array ]-----

let arr = ["Shubham", 25, true, 0.2, 'javascript'];
console.log("Print a array", arr);

// -- array print a index number --

let arrIndex = ["Shubham", 25, true, 0.2, 'javascript'];
console.log("print array to index number =", arrIndex[3]);

// -- Difine a array and change the  eliment -----

let array = ["sandeep", "akash", 25, 0.2];
array[1] = "shubham";
console.log("change a eliment =", array);

// -- Converting an Array to Strin --

let arrayToString = ["shubham", "sandeep", "Akash", "Sumit"];
let convertStringg = arrayToString.toLocaleString();
console.log("Conversing an Array to String", convertStringg);

// --Access the full Array-- 

let fullArray = ["Shubham", "sandeep", 45, "Akash"];
console.log("Access the zful Array", fullArray);

// --Arrays are Objects---

let objects = { name: "shubham", age: 26, lastname: "Balmiki" };
console.log(objects);
console.log("Array And Object", objects.name, objects.age, objects.lastname);

// --Accesssing the last Array Element--

let aLastElement = ["apple", "banana", 12, 0.2]
let lastLength = aLastElement.length - 1;
console.log("Accessing last Array Elemnet", aLastElement[lastLength]);

// --- Filter ----

// -- Return only even Number ----

let filterArray = [10,21,45,31,55,12,15,8,4]
let filterResult = filterArray.filter((num)=>{return num % 2 ==0})
console.log(filterResult);


