/* 2. Calculator

Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement 
to perform the operation on the two num#ersQ
The calculator function should"
L Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operatorP
L Use a switch statement to determine which operation to perform #ased on the value of the operatorP
L If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical 
operation and store the result in a varia#le called resultP
L If the operator is not one of the valid operators, log "Invalid operator" to the console*/

let btton=document.getElementById("CalCulator")


let results;

function Calcu(){
let num1=document.getElementById("Num1").value
let num2=document.getElementById("Num2").value
let ops=document.getElementById("Ops").value
let output=document.getElementById("output")

    console.log(ops)
    switch (ops) {
        case "Add":
            results=Number(num1)+Number(num2)
            break;

        case "Sub":
            results=Number(num1)-Number(num2)
            break;
        
        case "Div":
            results=Number(num1)/Number(num2) 
            break
        
        case "Mul":
            results=Number(num1)*Number(num2)
            break

        default:
            results="Invalid operator"
            break;
    }
        output.innerText=results

}

btton.addEventListener("click",Calcu)