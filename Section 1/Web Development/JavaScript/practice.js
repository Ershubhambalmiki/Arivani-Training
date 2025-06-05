// --javascript variable ---

var varCheck = 4, varCheck1 = 5;
varProduct = varCheck * varCheck1;
console.log(varProduct, "Var Example");

let letCheck = 20, letCheck1 = 55;
letResult = letCheck + letCheck1
console.log(letResult, "Let Example");

const constCheck = 45, constCheck1 = 10;
constResult = constCheck / constCheck1;
console.log(constResult, "const Example")


// ----- [Javascript Arithmetic oprators] ---

// //--- addition (+) oprator---

var varadditon = 4, varadditon1 = 5;
varResult = varadditon + varadditon1
console.log("Addition oprator (+)  example 4+5 = ", varResult)

// --subtraction oprator--
let letSubtraction = 20, letSubtraction1 = 45;
letResult = letSubtraction - letSubtraction1;
console.log("Subtraction oprator (-) example 20-45 = ", letResult);

//----- mulitipliction oprator----

const constMultipliction = 2, constmultipliction1 = 3;
constResult = constMultipliction * constmultipliction1;
console.log("Multipliction oprator (*) example 2*3 = ", constResult);

// -----Exponentitaion oprator----

var Exponentitaon = 3, Exponentitaion1 = 3;
powerResult = Exponentitaon ** Exponentitaion1;
console.log("Exponentitaion oprator (**) example 3**3 = ", powerResult);

//------ division oprator-------

let letDivision = 45, letDivision1 = 12;
divisionResult = letDivision / letDivision1;
console.log("Division oprator (/) example 45/12 = ", divisionResult);

// ---modulus oprator

const constModlus = 23, constModlus1 = 15;
modlusResult = constModlus % constModlus1;
console.log("Modulus oprator (%) example 23%15 = ", modlusResult);

// ----incriment oprator---

var incriment = 29;
incriment++;
console.log("incriment oprator (++) example 29++ = ", incriment);

// ---dicriment oprator--
let dicriment = 21;
dicriment--;
console.log("dicriment oprator (--) example 21-- = ", dicriment)

// --Assignment oprator--

const a = 45;
console.log("Assignment opretor a =", a);

var assingnmentAdditon = 15;
//assingnmentAdditon = assingnmentAdditon + 52;
assingnmentAdditon += 52;
console.log("Assignment with Addition Oprator (15 += 52) = ", assingnmentAdditon);

var assingnmentSubtraction = 35;
assingnmentSubtraction -= 25;
console.log("Assingnment with Subtraction OPrator (35 -= 25) = ", assingnmentSubtraction);

let assingnmentMultipilictoon = 15;
assingnmentMultipilictoon *= 5;
console.log("Assingnment with Multipliction OPrator (15 *= 5) = ", assingnmentMultipilictoon);

let assingnmentRimainder = 23;
assingnmentRimainder %= 12;
console.log("Assingnment with Rimainder oprator (23 %= 12)=", assingnmentRimainder);

let assingnmentDivision = 24;
assingnmentDivision /= 23;
console.log("Assingnment with Division oprator (24 /= 23)=", assingnmentDivision);

// -- [comprasion oprator] ---

// --grater then---

var value1 = 45, value2 = 21;
graterValueRisult = value1 > value2;
console.log("Grater Number is (45 > 21) = ", graterValueRisult);

// --less then---

var Number1 = 20, Number2 = 21;
lessValueRisult = Number1 < Number2;
console.log("Less Number is (20 < 21) = ", lessValueRisult);

// --equel---

let NumberE1 = 26, NumberE2 = 26;

equelValueRisult = NumberE1 == NumberE2;
console.log("Equel Number is (26 == 26 ) = ", equelValueRisult);

// --equle and data type---

let NumberED1 = 78, NumberED2 = 78;
EquleAndDatatupe = NumberED1 === NumberED2;
console.log(" Equle Number And Data Type (78 === 78) = ", EquleAndDatatupe,);

// ---not equle--

const NumberNE1 = 33, NumberNE2 = 45;
NotEquleRisult = NumberNE1 != NumberNE2;
console.log("Not Equle Number is (33 != 45 = ", NotEquleRisult)

// ---less then equle--

let NumberLE1 = 89, NumberLE2 = 74;

LessEquleRisult = NumberLE1 <= NumberLE2;
console.log("Less then and Equle Number is (88 <= 74) = ", LessEquleRisult)

// --grater then equle---

let NumberGE1 = 55, NumberGE2 = 14;

gratorEquleRisult = NumberED1 >= NumberGE2;
console.log("Grato the ANd Euler Number is (55 >= 14) = ", gratorEquleRisult);

//--- ternary ----

let NumberT1 = 45, NumberT2 = 25;

Risult = (NumberT1 > NumberT2) ? (NumberT1 == NumberT2) : (NumberT1 < NumberT2)
console.log("Condition is =", Risult)

// --- [Logical oprator] ---

// --and oprator----

let NumberA = 23; NumberA1 = 25;

checkRisult = (NumberA > NumberA1) && (NumberA < NumberA1);
console.log("Condition is =", checkRisult)

//---- OR oprator ----

let numberO = 25, numberO1 = 47;
Risult = (numberO > numberO1) || (numberO < numberO1)
console.log("OR Condition is =", Risult)

// --Difference bitween var, let ,const---

// --[Scope]---

// --var variable---

var varscop = 45;

{
    var varscope1 = 25;
}
console.log("var variable declar to block of code but  accese to out  block of code =", varscope1)
console.log("and var variable ddeclar to out  block of code and accese possible to out block of code =", varscop)

// --let variable---

let letscop = 21;
{
    let letscop1 = 23;
    console.log("let variable declar block of code and accese too block of code =", letscop1);

}
// console.log(letscop1); //let variable declar to block of code but accse too block off code not a accese out off block of code /////

console.log("let variable declar out block off code and accese to out block of code possible =", varscop)

// ---const variable ---

const constscop = 21;
{
    const constscop1 = 23;
    console.log("const variable declar block of code and accese too block of code =", constscop1);

}
// console.log(constscop1); //let variable declar to block of code but accse too block off code not a accese out off block of code /////

console.log("const variable declar out block off code and accese to out block of code possible =", constscop)


// -----[Redeclaration]----

// ---var variable Re Declration posible----

var varD = 45;
var varD = 15;

console.log("var declar", varD);
console.log("var Redeclration", varD); // it is possible to redeclare var variable ;

// -- let variable ReDeclaration not possible----

let letD = 45;
// let letD = 15; // not a redeclare let variable

console.log("let declar", letD);
// console.log("let Redeclration",letD1); // it is not  possible to redeclare let variable ;


// -- const variable ReDeclaration not possible----

const constD = 45;
// const constD = 15; // not a redeclare const variable

console.log("let declar", constD);
// console.log("const Redeclration",letD1); // it is not  possible to redeclare const variable ;

// ---Reassign----

// --var variable Reassign----

var varR = 23;
varR = 88;
console.log("var variable  assign in value possible =", varR)
console.log("var variable  Reassign in value possible =", varR)

// --let variable Reassign----

let letR = "shubham";
letR = "balmiki";
console.log("let variable  assign in value possible =", letR)
console.log("let variable  Reassign in value possible =", letR)

// --const variable Reassign----

// const constR = "shubham";
// constR = "balmiki";
// console.log("const variable  assign in value possible =",constR)
// console.log("const variable  Reassign in value not possible =",constR)


// --Hoisted----

// Hoisted possible a var variable ---

Numberh = 15;
console.log("print a Numberh =", Numberh);
var Numberh;

// Hoisted not a  possible let variable ---

// Numberl = 15 ;
// console.log("print a Numberl =",Numberl);
// let Numberl;

// Hoisted not a  possible const variable ---

// NumberC = 15 ;
// console.log("print a NumberC =",NumberC);
// let NumberC;



//---Function----

// function myfunction(input,input1){

//     return input + input1;

// }
// let output = myfunction(parseInt(prompt()),parseInt(prompt()));
// console.log("addition is =",output)



// --- [ String In a Javascript ] ----

// --Using Quotes---

let quotes = "Duoble Quetes";//   You can also define a string in double quoytes
console.log("String Difine A duoble quates =", quotes);

let singleQuotes = 'Single quetes';  // You can also difine a string in Single quetes
console.log('String Difine A Single quates =', singleQuotes);

// ---- Quotes inside Quotes ----

let insaideQuotes = "Inside Said 'Quotes'"; // Single quatus can also be used inside dual quatus
console.log("duoble quetes in said Single quotes = ", insaideQuotes);

// -- Template String ---

let temString = "he's often called 'Shubham'"; // Templates aloow single and double quotes inside a string:
console.log("Template string that works like inside quotes =", temString);

// --- (Length of String) ---

let lengthString = "Shubham";  //To tell the length of a string
console.log("Length of string =", lengthString.length);

// -- Escape Character ---

let escapeCharater = "Shubham"; // In this, the value of one variable can be coordinated with another variable.
let escapeCharater1 = `Hello My Name is ${escapeCharater}`;
console.log("Escape Character =", escapeCharater1);

// ---- [ String Methods ] ---

// -- String CharAt ----

let charAt = "shubham"; // Any character of the string can be accessed using this method
console.log("String CharAt Method =", charAt.charAt(2));

// -- String charcode At ---

let charcodeAt = "shubham"; // The value of any character of the string can be accessed using this method.
console.log("String Charecode Method =", charcodeAt.charCodeAt(2));

//  -- String at ---

let at = "shubham"; // Any character of the string can be accessed using this method
console.log("String at Method =", at.at(2));

// -- Slice ----

let sliceString = "sliceMethods" // Any word of the string can be removed using this method.
console.log(" By slice method  = ", sliceString.slice(5));

// -- Trim Methods ---

let trimvariable = "Trim Methods"; //Now you have to develop the calculator app  {but this method is not working}
console.log("Trim Methods =", trimvariable.trim(5));

// -- to upercase methods ---

let uperCase = "string value"; // With this method all the lowercase words in the string will be converted into uppercase
console.log("upercase methods =", uperCase.toUpperCase());

// -- to lowercase methods ---

let lowerCase = "STRING VALUE"; // With this method all the upercase words in the string will be converted into lowercase
console.log("lowercase methods =", lowerCase.toLocaleLowerCase());

// -- Property access ---

let propertyAccess = "property Access"; // same worked a (chartAt) methods ;
console.log("Property Methods =", propertyAccess[5]);

// -- concat ----

let concatVariable = "Shubham"; // Tow strings can be combined using these methods
let concatVariable1 = "Balmiki";
let result = concatVariable + " " + concatVariable1;
console.log("concat method =", result);

// -- Repeate -----

let repeate = "Hi My Name is Shubham balmiki ;" + " "; // String can be written using these methods
console.log("Repeate methods =", repeate.repeat(2));

// -- Replace ---

let replaceVariable = "Shubham"; // The replace() method returns a new string.
let replaceResult = replaceVariable.replace("Shubham", "Shubham Balmiki");
console.log("Replace Methods =", replaceResult);

// --Replace All ----

let replaceAll = "i like playing the cricket"; // The replace() method returns a new string of word.
replaceAll = replaceAll.replaceAll(/cricket/g, "coding");
replaceAll = replaceAll.replaceAll(/playing/g, "");
console.log("Replace Methods =", replaceAll);

// -- pad strat ----

let padStart = "Balmiki"; // The padStart() method pads a string from the startIt pads a string with another string 
// (multiple times) until it reaches a given length.
let padStart1 = padStart.padStart(14, "Shubham");
console.log("pad start mwthod =", padStart1);

// -- pad End ----

let padEnd = "Shubham"; // The padEnd() method pads a string from the end.It pads a string with another string 
// (multiple times) until it reaches a given length.
let padEnd1 = padEnd.padEnd(14, "Balmiki");
console.log("pad End mwthod =", padEnd1);

// -- substring ----

let subString = ("dog,cat") // Works just like the slice method
let subString1 = subString.substring(4, 7)
console.log("Substring Methods =", subString1)

// -- [ String Search ] ----

// -- String index start ---

let stringIndexStrat = "I Leaning Java Script" // The indexOf() method returns the index (position) of the first 
// occurrence of a string in a string, or it returns -1 if the string is not found:
let stringIndexStrat1 = stringIndexStrat.indexOf("java")
console.log("String Search Index Strat =", stringIndexStrat1)

// -- String index end ---

let stringIndexEnd = "I Leaning Java Script" // The indexOf() method returns the index (position) of the last 
// occurrence of a string in a string, or it returns -1 if the string is  found:
let stringIndexEnd1 = stringIndexStrat.lastIndexOf("Script")
console.log("String Search Index end =", stringIndexEnd1)

// -- String Search ---

let search = "i learn javascript programing"; // The search() method searches a string for a string (or a regular 
// expression) and returns the position of the match
let searchResult = search.search("javascript");
console.log("String Search Method =", searchResult);

// -- match String---

let match = "javascript is a scripting language and i learn javascript programing"; // The match() method returns
//  an array containing the results of matching a string against a string (or a regular expression).
let matchResult = match.match("javascript");
console.log(" String  Match =", matchResult.toString());

// -- matchAll String---

let matchAll = "javascript is a scripting language and i learn javascript programing"; // The matchAll() method 
// returns an iterator containing the results of matching a string against a string (or a regular expression)
let matchAllResult = match.match("javascript");
console.log(" String  Match =", matchAllResult.toString());

//  -- Include --

let Include = "Hi my name is shuubham"; // If the string is included then it will return true result, if the
//  string is not included then it will return false
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

let arrIndex = ["Shubham", 25, true, 0.2, 'javascript']; // ["Shubham",25,true,0.2,'javascript'];
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

// --Using the JavaScript Keyword new --

let newArray = new Array("java", "javascript", "Html", "Css");
console.log("Dicliar New key word =", newArray);

// -- Difine Array---

let lineBreakArr = [
    "Sitapur",
    "Lucknow",
    "Gorakhpur",
]
console.log("Dicliar line break Array =", lineBreakArr);

// -- Dicliar Array by index Number --

let Bikes = []
Bikes[0] = "yamaha",
    Bikes[1] = "Honda",
    Bikes[2] = "Hero",
    Bikes[3] = "Bajaj"
console.log("Diclair Array by the index number =", Bikes);

// --For loop Array ---

let loopArray = ["Shubham", "Sandeep", 15, "akash"];
for (let i = 0; i < loopArray.length; i++) {
    console.log("For Loop", loopArray[i])
}

// -- Map Function ---

let mapArray = ["Shubham", "Sandeep", 15, "akash"];

mapArray.map((item) => {
    console.log("Map Function", item)
});

// -- Foreach Loop ----

let foreachArray = ["Shubham", "Sandeep", 15, "akash"];

mapArray.forEach((item) => {
    console.log("Foreach Function", item)
});

// -- Sorting ---

let sorTing = ["Bol", "Elphant", "Dog", "Apple"];
//  let sorTing = [1,2346,4,10000]
console.log("Sorting String An  Array =", sorTing.sort());

// console.log(sorTing.sort((a,b)=>{return a-b}))
// console.log(sorTing.sort(function(a,b){return a-b}))

// -- Add a Element In A Array ---

let addElement = ["car", "Bikes", 15, 0.2];
addElement.push = "Shubham";
console.log("Add e Element In a Array =", addElement);

// -- out Element in a Array-----

let outElement = ["car", "Bikes", 15, 0.2];
outElement.pop();
console.log("Delete e Element In a Array =", outElement);

// -- Nested Array ---

let nestedArr = [
    {
        name: "car volvo",
        beheviar: "Runnig",
        color: ["red", "yellow", "white"]
    },


    {
        name: "car hondai",
        beheviar: "Runnig",
        color: ["red", "black", "blue"]
    },
    {
        name: "car suzuki",
        beheviar: "Runnig",
        color: ["red", "black", "white"]
    }
]
nestedArr.map((item) => {
    console.log("Nested Array access by map function =", item)
});
nestedArr.forEach((item) => {
    console.log("Nested Array access by foereach loop =", item)
});

// --bitween Array and object  ----

let arrayNew = [2, 5, "shubham", true]
console.log(typeof (arrayNew), Array.isArray(arrayNew));

let obj = { name: "shubham", age: 25, Hobbies: "coding,cirket" };
console.log(typeof (obj));

// ---Array Methods----

// ---Array at method---

let atArray = ["car", "friuts", "Bike", 45];
let atResult = atArray.at(2);
console.log(atResult);

// --- Array joi method---

let joiArray = ["shubham", "sandeep", "akash", ""];
let joiResult = joiArray.join(" Kumar,");
console.log(joiResult);

// --Array flat Method ---

let flatArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flatResult = flatArray.flat()
console.log(flatResult);

let stringflatarr = [["shubham", "sandeep"], ["Shubham", "Akash", 10], [42, "sumit", 12]];
console.log(stringflatarr.flat());

// --- Array concat Method ---

let concatArray = ["car", "friuts", "Bike", 45];
let concatArray1 = [1, 2, 3]
console.log(concatArray.concat(concatArray1));

// --Array unshift method----
const unshiftArray = ["car", "friuts", "Bike", 10];
unshiftArray.unshift("Shubham")
console.log(unshiftArray);

// -- Array shift method ---

const shiftArray = ["car", "friuts", "Bike", 10];
shiftArray.shift()
console.log(shiftArray);

// -- Array toSpliced method --

let toSplicedArr = ["car", "friuts", "Bike", 10];
let toSplicedArr1 = toSplicedArr.toSpliced(0, 2)
console.log(toSplicedArr1);

// --slice Method in a Array ---

let sliceArray = ["car", "friuts", "Bike", 10];
let sliceArray1 = sliceArray.slice(0, 2)
console.log("slice method", sliceArray1);

// -- [ Array Methods ] --- 

// ---Array Include Method ----

let include = [14,"shubham",0.2];
console.log("include Methods =",include.includes(14));

// -- Array find --- 

let find = ["shubham",56,"kumar"];
let findIt=find.find(findfunction)
function findfunction(value){
return value == 56
}
console.log("Find value =",findIt);

// -- Array findindex --- 

let findIndex = ["shubham",56,"kumar"];
let findIndexResult = findIndex.findIndex(findindexfunction)
function findindexfunction(value){
return value == 56
}
console.log("Find index value =",findIndexResult);

// -- Array findLast --- 

let findLast = ["shubham",56,"kumar","shubham"];
let findlastResult = findLast.findLast(findlastfunction)
function findlastfunction(value){
return value == "shubham"
}
console.log("Find Last value =",findlastResult);

// --Array findlastIndex --

let findLastIndex = ["shubham",56,"kumar","shubham"];
let findlastInedxResult = findLast.findLastIndex(findlastindexfunction)
function findlastindexfunction(value){
return value == "shubham"
}
console.log("Find LastIndex value =",findlastInedxResult);


// -- Array indexOf ---

let index = ["shubham",56,"kumar"];
console.log("Access value of first index number =",index.indexOf(56));

// --Array lastindexof----

let lastIndexOf = [12,45,89,35,"shunbham",true];
console.log("Access value of last index number =",lastIndexOf.lastIndexOf(true));


// --- Filter ----

// -- Return only even Number ----

let filterArray = [10,21,45,31,55,12,15,8,4]
let filterResult = filterArray.filter((num)=>{return num % 2 ==0})
console.log(filterResult);

// -- Access greter than 5 to string word ---

let filterArrStr = ["shubham","sandeep","akash","amaan"];
let filterSteringResult = filterArrStr.filter((strn)=>{return strn.length > 5});
console.log(filterSteringResult);

// -- Return the dublicate value ---

// let dublicateFilter = [1,2,5,7,1,7];
// dublicateFilter.filter(()=>{})

// --Filter Negative Numbers: Write a JavaScript function that filters out negative numbers from an array--

let filterNnum = [1,2,3,-5,-4,1];
let filterNresult = filterNnum.filter((num)=>{return num >=0})
console.log(filterNresult);


// -- Filter Prime Numbers: Write a JavaScript function that filters an array of numbers and returns only the prime numbers.

let filterPrimes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterPrimesResult = filterPrimes.filter((num)=>{return (num % 2) });
console.log("filter primes Number",filterPrimesResult);

// -- Write a JavaScript program that uses filter() to return all the string elements from the array

 let stringElement = [1, "hello", true, "world", 42,]
function filterString(stringValue){
if(typeof(stringValue) =='string'){
    return stringValue;
}
}
let filterStringRsult = stringElement.filter(filterString)
console.log("Filter string", filterStringRsult)

// -- Create a filter() function to return all values that are greater than 100 from the array

let greater100 = [50, 200, 150, 80, 120];
function greater(num){
    if(num > 50){
        return num
    }
}
let greater100Result = greater100.filter((item)=>greater(item));
console.log("grwater then 100 =",greater100Result);
console.log("grwater then 100dhajh =",greater100);

// --How would you use filter() to extract all elements that are strings from the array 

let filterString1 = [1, "apple", "banana", true, "orange"];
// const filterstringelement=(stringElement)=>{
//     if(typeof(stringElement)=='string'){
//         return stringElement;
//      }
// }
let filterString1Result = filterString1.filter((value) => typeof(value) == "string");
console.log("filter string",filterString1Result);

// -- Use filter() to find all numbers less than 10 from the array

let lessthen10 = [1, 10, 5, 20, 9];
let lessthen10Result = lessthen10.filter((num)=>{
    if(num < 10){
        return num
    }
})
console.log("less then =",lessthen10Result);

// --  Use the filter() method to return all numbers that are not NaN from the array

// let numberArr = [NaN, 3, 4, NaN, 5];
// let numberArrResult = numberArr.filter((num)=>{
//     if(typeof(num)==){
//         return num
//     }
// })
// console.log("numbers",numberArrResult);

let filterArr = [{name:"shubham",age:25,city:"sitapur"},{name:"Amaan",age:22,city:"lucknow"},{name:"Sandeep",age:15,city:"lucknow"}];

let filteredData = filterArr.filter((arr) => arr.city == 'lucknow');
console.log(filteredData, "filteredDoc of Amaan");


















 

 



















