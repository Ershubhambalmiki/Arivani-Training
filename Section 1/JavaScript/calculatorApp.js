// function calculator() {
//     let num1 = parseInt(document.getElementById('1').value);
//     let num2 = parseInt(document.getElementById('3').value);
//     let operator = document.getElementById('2').value;
//     let output;

//     if (operator == "add") {
//         output = num1 + num2;
//     } else if (operator == "sub") {
//         output = num1 - num2;
//     } else if (operator == "mul") {
//         output = num1 * num2;
//     }
//     else if (operator == "div") {
//         output = num1 / num2;

//     } else if (operator == "mod") {
//         output = num1 % num2;
//     }

//     document.getElementById('4').value = output;
// }

const myCalculator = () => {
    let num1 = parseInt(document.getElementById('1').value);
    let num2 = parseInt(document.getElementById('3').value);
    let operator = document.getElementById('2').value;
    let output;

    if (operator == "add") {
        output = num1 + num2;
    } else if (operator == "sub") {
        output = num1 - num2;
    } else if (operator == "mul") {
        output = num1 * num2;
    }
    else if (operator == "div") {
        output = num1 / num2;

    } else if (operator == "mod") {
        output = num1 % num2;
    }

    document.getElementById('4').value = output;
    
}

// ---  || opreto------

let mobileNumber = 9696637409;
let email = "shubhamkumarn880@gmail.com";

if(mobileNumber == null || email == null)
{
    console.log("please enter your password")
}
else
{
    console.log("please enter your eamil or number")
}
