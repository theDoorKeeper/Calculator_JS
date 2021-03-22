
const calculator = document.querySelector("#calculator");
const buttons =calculator.querySelectorAll(".btn");
const display = calculator.querySelector("#display");
const operators = calculator.querySelectorAll(".opBtn");
const equalOp=calculator.querySelector("#equalOp");
const screen=calculator.querySelector("#screen");
const resetButton=calculator.querySelector("#reset");
const audio = document.querySelector(".audio");

let displayValue="";
let choosenOperator="";
let firstValue="";
let secondValue="";
let equalstate=false;



function add (a,b){
    return a+b; 
}
function substract (a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide (a,b){
    return a/b;
}

function operate (operator,a,b){
    a=Number(a);
    b=Number(b)
    if (operator==="+"){
        return add(a,b)
    }
    else if (operator==="-"){
        return substract(a,b)
    }
    else if (operator==="*"){
        return multiply(a,b)
    }
    else if (operator==="/"){
        return divide(a,b)
    }
}

function clearDisplay(){
        display.textContent="";
    }
function populateDisplay(e){
    display.textContent+=e.target.textContent;
    }
 function playSound(){
    if (audio.paused) {
        audio.play();
    }
    else{
        audio.currentTime = 0
    }
 }

    buttons.forEach(button=>button.addEventListener("click",e=>{
      playSound();
       // displayValue="";
        populateDisplay(e);
        displayValue+=e.target.textContent;
      console.log("displayvalue : "+displayValue)
      
    }))

    operators.forEach(operator=>operator.addEventListener("click",e=>{
        playSound();
        if (firstValue===""){ 
            choosenOperator=e.target.textContent;
            firstValue=displayValue;
            displayValue="";
            console.log("firstVAlue: "+firstValue)
        ;clearDisplay();
        }
        else if (equalstate){
            choosenOperator=e.target.textContent;
            clearDisplay();
            equalstate=false;
        }
        else{
            secondValue=displayValue;
            displayValue="";
            firstValue=operate(choosenOperator,firstValue,secondValue);
            secondValue="";
            choosenOperator=e.target.textContent;
            screen.textContent=firstValue;
            clearDisplay()
        }
        
         }))

        equalOp.addEventListener("click",e=>{
            playSound();
        if (firstValue){
            secondValue=displayValue;
            displayValue="";
           console.log(choosenOperator,firstValue,secondValue)
            firstValue=operate(choosenOperator,firstValue,secondValue);
            secondValue="";
            choosenOperator="";
            screen.textContent=firstValue;
            clearDisplay()
            equalstate=true;
            
          
        }
        })


        resetButton.addEventListener("click",e=>{
            playSound();
            clearDisplay();
            screen.textContent="";
            firstValue="";
            secondValue="";
            displayValue="";
            equalstate=false;
        })

/*       equalOp.addEventListener("click",e=>{
         if (secondValue){
             firstValue=operate(choosenOperator,firstValue,secondValue);
             screen.textContent=firstValue;
             secondValue="";
         }
         else {
            firstValue=operate(choosenOperator,firstValue,displayValue);
            screen.textContent=firstValue;
            displayValue="";
         }
     }) */
 

   

    
   /*
       1/ first time i press a button : gets stored in displayValue;
        2/ i press an operator : the value of the operator gets stored in a variable called firstoperator  the value of displayValue gets stored in a new variable called Firstvalue , an display value gets cleared ;

        3/ second time i press a buton (after pressing the OPerator): gets stored in displayValue ;

       4/ second time i press an operator :  displayValue gets stored in a second variable called second value , and displatvalue gets cleared ;
      then operate on first value and second value using the choosen operator an sore the result in firstvalue then clear second value and clear the operator then store the new operator in he value ;
       6/ third time i press a button (ater second operator): step 3
        
        

        
   */