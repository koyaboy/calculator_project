function add(a,b){
    
    return a + b;              
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}


let firstNum = "";
let secondNum = "";
let numOperator = "";

let displayValue = "0";
let displayArea = document.getElementById("displayArea")
let operators = document.querySelectorAll(".operators");
let numbers = document.querySelectorAll(".number")
let equalsTo = document.getElementById("equalsTo");

let firstNo = "";
let secondNo = "";
let solution = "" ; //;

let count = 0;
displayArea.innerHTML += displayValue;


function operate(a,b,operator){
    if(operator === "+"){
        return add(a,b);
    }

    if(operator === "-"){
        return subtract(a,b);
    }

    if(operator === "*"){
        return multiply(a,b);
    }

    if(operator === "/"){
        return divide(a,b);

        // do a case to prevent it being divided by 0
    }
}


// display area work .....

numbers.forEach((number) => {
    number.addEventListener('click', e => {
        
        if(numOperator == ""){
            firstNum += e.target.id;
            firstNo = parseInt(firstNum);
            displayValue = firstNo;
            updateDisplay();

            
        }

        else{
            secondNum += e.target.id;
            secondNo = parseInt(secondNum);
            solution = operate(firstNo,secondNo,numOperator);
            displayValue = solution;
            updateDisplay();
               
        }



        
    })

});



function updateDisplay(){

    displayArea.innerHTML = displayValue;
       
    
}



operators.forEach((operator) => {
    operator.addEventListener('click' , e =>{

       // displayValue = 0;
        numOperator = e.target.innerText;
        count++;
        //performCalc();
        

    })
})


equalsTo.addEventListener("click", ()=>{

    solution = operate(firstNo,secondNo,numOperator);
    displayValue = solution;
    updateDisplay();

    

});

