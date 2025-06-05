// functions
function myFunction() {
    document.getElementById("test").style.display = 'none';
}

function newFuntion() {
    document.getElementById('style').style = 'color:yellow ;background-color:red;width:100px;height:100px;font-weight:bold;border-radius:5px;display:flex;justify-content:center;align-items:center';
}



function imgFunction() {
    document.getElementById('photo').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEOCRYAZPduQCJE2Cm_8DC2hbQGlvp19iHA&s';

}

// return function

function myFunction1(a, b) {
    return (5 * 5)

}
let value = myFunction1(4, 6)
console.log(value)

function calculate(c, d) {
    return (45 / 23) * (c - d)

}
let v = calculate(78, 45)
console.log(v);


// function calculator() {
//     let a = prompt("Enter first value");
//     let numbera = parseInt(a);
//     let b = prompt("Enter second value");
//     let numberb = parseInt(b);
//     let op = prompt("Enter operation to be performed add, sub, mul or div");
//     let result = 0;
//     if (op == "add") {
//         result = numbera + numberb;
//         document.getElementById("calcDisplay").innerHTML = result;
//     }
//     else if (op == "sub") {
//         return a - b;
//     }
//     else if (op == "mul") {
//         return a * b;
//     }
//     else if (op == "div") {
//         return a / b;
//     }
// }

// let calcResult = calculator(12, 5, "div");
// console.log(calcResult, "calculator result");


// String

let name = "Shubham";

let text = 'Amaan ';
let text2 = "Amaan";
let text3 = `Hello My Name is ${name}`;
let fName = "Amaan";
let lName = "Alam";

//error
// let text4 = "Hello "There" ";
let text4 = "Hello \"There\" ";

console.log(text3);
console.log(text4);
console.log(fName + " " + lName);
console.log(text.length);
console.log(text.charAt(3));
console.log(text.charCodeAt(1));
console.log(text.at(0));

// Array 

let arr = ["Amaan", "Shubham", 2, true];
console.log(arr);

let myarr = new Array("Amaan", "Shubham", 2, true);
console.log(myarr);

let cars = [];
cars[0] = "Volvo";
console.log(cars);
cars[1] = "Porsche"
cars[2] = "BMW";
console.log(cars);
// return object as a type
console.log(typeof (cars));

// Object
let obj = {
    fName: "Amaan",
    lName: "Alam",
    age: 22
}
console.log(obj);
console.log(obj.fName);
console.log(obj.lName, obj.age);

// sort and length function
let myarray = ["zebra", "ant", "yak", "bat", "deer"]
console.log(myarray);
myarray.sort();
console.log(myarray);
let length = myarray.length;
console.log(myarray.length);

// access first element and last
console.log(myarray[0], "first element");
console.log(myarray[(myarray.length) - 1], "last element");

// loops in js and array
for (let i = 0; i < length; i++) {
    console.log(myarray[i], `${i} for loop element of myarray`);
}

//for each function
myarray.forEach((data) => {
    if (data === "yak" || data === "zebra") {
        return;
    }
    console.log(data, "for each loop element");
});

// myarray.forEach(displayForEach);

// function displayForEach(value){
//     console.log(value);
// }
// map function
myarray.map((data) => {
    if (data === "yak" || data === "zebra") {
        return;
    }
    console.log(data, "map loop element");
});

// myarray.map(displayForEach);

// function displayForEach(value){
//     console.log(value);
// }

console.log(myarray);
myarray.push("tiger", "lion");
console.log(myarray);
myarray.pop();
console.log(myarray);

// diff b/w type of array and objects
console.log(typeof (arr));
console.log(typeof (obj));
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

//instance of
console.log(arr instanceof Array);
console.log(obj instanceof Array);

// array of objects
const user = [
    {
        name: "Amaan",
        age: 22,
        friends: ["Shubham", "Alex"]
    },
    {
        name: "Shubham",
        age: 26,
        friends: ["Amaan"]
    },
    {
        name: "Alex",
        age: 20,
        friends: ["Shubham"]
    },
]

user.map((data) => {
    console.log(data.name)
    console.log(data.age)
    console.log(data.friends)
})


// sorting with login
const arrNum = [12, 15, 7, 20, 5, 3]

for (let i = 1; i <= arrNum.length; i++) {
    for (let j = 0; j < arrNum.length - 1; j++) {
        if (arrNum[j] > arrNum[j + 1]) {
            //swapping
            let temp = arrNum[j];
            arrNum[j] = arrNum[j + 1];
            arrNum[j + 1] = temp;
        }
    }
}

console.log(arrNum);

// 52 of find without find methods  

let arrfind = [12, 15, 7, 20, 5, 3]
let element = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]==52){
        element.push(arrfind[i])
    }
}
console.log(element)

//----cheak age ok mainer and adult-----

let age =49

if(age <= 0)
{
    console.log("invaild age")
}
else if(age > 0 && age <= 17)
{
    console.log("persion is minor")
}
else if(age >= 18 && age <= 50)
{
    console.log("persion is adult")
}
else if ( age > 50 )
{
    console.log("persion is old")
}














