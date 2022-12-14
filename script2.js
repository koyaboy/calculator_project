let currentNum = "";
let previousNum = "";
let numOperator = "";
let solution = "";
let countDecimal = 0;


const currentDisplayNum = document.querySelector(".currentDisplayNum")
const previousDisplayNum = document.querySelector(".previousDisplayNum")

const clear = document.querySelector(".clearButton");

const numbers = document.querySelectorAll(".number");

const equals = document.getElementById("equalsTo");

const decimal = document.querySelector(".decimal");

const operators = document.querySelectorAll(".operators");

const percentage = document.querySelector(".percentage");

const changeSign = document.querySelector(".changeSign");


currentDisplayNum.style.fontSize = "38px";

numbers.forEach((number)=> {
    number.addEventListener('click', e=> {
        displayNumber(e.target.textContent);
    });
});

function displayNumber(numberClicked){
   
    if(previousNum != "" && currentNum != "" && numOperator == ""){
        previousNum = "";
        currentDisplayNum.textContent = currentNum;
    }
    if(currentNum.length < 13){

        currentNum += numberClicked;
        currentDisplayNum.textContent = currentNum;
    }
    
}



operators.forEach((operator) =>{
    operator.addEventListener('click', e =>{
        handleOperator(e.target.textContent);
    })
})



function handleOperator(op){
    if(currentNum == "" && previousNum == ""){
        numOperator = ""
        alert("You must have a number before clicking an operator");
        previousDisplayNum.textContent = "";
        currentDisplayNum.textContent = "";
    }
    
   else if(previousNum == ""){
        previousNum = currentNum;
        operatorCheck(op);
    }

    

    else{
       
        operate()
        numOperator = op;
        currentDisplayNum.textContent = previousNum;
        previousDisplayNum.textContent = previousNum + " " + numOperator;
    }
   
}

function operatorCheck(text){
    numOperator = text;
    currentDisplayNum.textContent = "0";
    previousDisplayNum.textContent = previousNum + " " + numOperator;
    currentNum = "";

}

percentage.addEventListener('click', handlePercentage);

function handlePercentage(){
    previousNum = previousNum /100;
    previousDisplayNum.textContent = "";
    currentDisplayNum.textContent = previousNum;
}
  
changeSign.addEventListener('click', ()=>{
    previousNum = -previousNum
    previousDisplayNum.textContent = "";
    currentDisplayNum.textContent = previousNum;
    
})

decimal.addEventListener('click' , handleDecimal);

function handleDecimal(){
    countDecimal++;

    if(currentNum == ""){
        countDecimal = 0;
    }


    else if(currentNum.includes(".")){
        countDecimal = 0;
    }
    
        
    else if(currentNum != "" && countDecimal == 1){
            currentNum = currentNum + decimal.textContent;
            currentDisplayNum.textContent += decimal.textContent
            parseFloat(currentNum);
            
    }
        
}
    
    
       



function operate(){

    previousNum = parseFloat(previousNum);
    currentNum = parseFloat(currentNum);
   


    if(numOperator === "+"){
        previousNum = previousNum + currentNum;
    }

    else if(numOperator === "-"){
        previousNum = previousNum - currentNum;


    }
    else if(numOperator === "*"){
        previousNum = previousNum * currentNum;
    }



    else if(numOperator === "/"){
        if(currentNum <= 0){
            previousNum = "ERROR";
            previousDisplayNum.textContent = "";
            currentDisplayNum.textContent = previousNum;
            numOperator = "";
            return;

        }
        
            previousNum = previousNum / currentNum;    
    }

  
    
    
    previousNum.toString();

    displayResults();

    
}

function displayResults(){
   if(previousDisplayNum.length < 13){
    previousDisplayNum.textContent = "";
    currentDisplayNum.textContent = previousNum;
    numOperator = "";
    currentNum = "";

   }

   else{
    previousNum = parseFloat(previousNum);
    previousNum = Math.round(previousNum * 1000000000000)/1000000000000;
    previousNum.toString();
    previousDisplayNum.textContent = "";
    currentDisplayNum.textContent = previousNum;
    numOperator = "";
    currentNum = "";


   }
   
    
   
}

equals.addEventListener('click', operate);

equals.addEventListener('click', ()=>{
    countDecimal = 0;

});



clear.addEventListener('click', Clear)

function Clear(){
    previousNum = ""
    currentNum = ""
    previousDisplayNum.textContent = "";
    currentDisplayNum.textContent = "0";
    countDecimal = 0;
    
};

//kEYBOARD FUNCTIONALITY

document.addEventListener('keydown', e=>{
    switch(e.key){
        case '0':
            displayNumber('0');
            break;
        
        case '1':
            displayNumber('1');
            break;
        
        case '2':
            displayNumber('2');
            break;

        case '3':
            displayNumber('3');
            break;

        case '4':
            displayNumber('4');
            break;

        case '5':
            displayNumber('5');
            break;

        case '6':
            displayNumber('6');
            break;

        case '7':
            displayNumber('7');
            break;

        case '8':
            displayNumber('8');
            break;

        case '9':
            displayNumber('9');
            break;

        case '+':
            handleOperator('+');
            break;

        case '-':
            handleOperator('-');
            break;

        case '*':
            handleOperator('*');
            break;

        case '/':
            handleOperator('/');
            break;

        case '%':
            handlePercentage();
            break;

        case '.':
            handleDecimal();
            break;
        
        case 'Enter':
            e.preventDefault();
            operate();
            break;

        case 'Escape':
            Clear();
            break;
        

    }
});

