// Use number.reduce(add) or other functios if there is only one type of operator
let text="";
let user=[];
let arrayOperators =[];
let counterOfOperators=0;
let containerNumbers="";
let operatorChoosed="";
function add(...numbers) {
    return Number(numbers[0]) + Number(numbers[1]);
}
function subtract(...numbers) {
    return numbers[0] - numbers[1];
}

function multiply(...numbers) {
    return numbers[0] * numbers[1];
}
function divide(...numbers) {
    return numbers[0] / numbers[1];
}
function operate(operator, number1, number2) {
   
    counterOfOperators = 0;
    if (operator == "-") {
        document.getElementById("operation").innerHTML = subtract(number1, number2);
        
        return user[0] = subtract(number1, number2);

    }   else if (operator == "x") {
        document.getElementById("operation").innerHTML = multiply(number1, number2);
        return user[0] = multiply(number1, number2);

    }   else if (operator == "÷") {
        document.getElementById("operation").innerHTML = divide(number1, number2);
        return user[0] = divide(number1, number2);

    }   else if (operator == "+" && isNaN(number2) !== "true") {
        document.getElementById("operation").innerHTML = add(number1, number2);
        return user[0] = add(number1, number2);

    }   else{
        return user[0] = number1;
    }
    

}

 function writeNumbers(){
    
    containerNumbers +=  event.srcElement.id;
    user[counterOfOperators] = containerNumbers;
    text = document.getElementById("operation").innerHTML =  document.getElementById("operation").innerHTML + event.srcElement.id ;  

}

function clearEverything(){
    document.getElementById("operation").innerHTML = "";
    text="";
    user=[];
    arrayOperators =[];
    counterOfOperators=0;
    containerNumbers="";

}

function buttonsOperator(){
  
  arrayOperators[counterOfOperators] = event.srcElement.id;
  counterOfOperators++;
  operatorChoosed = event.srcElement.id;
  text = document.getElementById("operation").innerHTML =  document.getElementById("operation").innerHTML + event.srcElement.id ;  
  containerNumbers = "";
}

function operateArrays(numbers,operators){

    while(operators.length>0){
        while(operators.includes("x") && operators.includes("÷")){
            if(operators.findIndex(findOperatorMultiply)>operators.findIndex(findOperatorDivide)){
                numbers[operators.findIndex(findOperatorDivide)] = numbers[operators.findIndex(findOperatorDivide)] / numbers[operators.findIndex(findOperatorDivide)+1];
                numbers.splice(operators.findIndex(findOperatorDivide)+1,1);
                operators.splice(operators.findIndex(findOperatorDivide),1);
            }
            else{
                numbers[operators.findIndex(findOperatorMultiply)] = numbers[operators.findIndex(findOperatorMultiply)] * numbers[operators.findIndex(findOperatorMultiply)+1];
                numbers.splice(operators.findIndex(findOperatorMultiply)+1,1);
                operators.splice(operators.findIndex(findOperatorMultiply),1);
            }
        }
        while(operators.includes("x")){
            numbers[operators.findIndex(findOperatorMultiply)] = numbers[operators.findIndex(findOperatorMultiply)] * numbers[operators.findIndex(findOperatorMultiply)+1];
            numbers.splice(operators.findIndex(findOperatorMultiply)+1,1);
            operators.splice(operators.findIndex(findOperatorMultiply),1);            
        }
        while(operators.includes("÷")){
            numbers[operators.findIndex(findOperatorDivide)] = numbers[operators.findIndex(findOperatorDivide)] / numbers[operators.findIndex(findOperatorDivide)+1];
            numbers.splice(operators.findIndex(findOperatorDivide)+1,1);
            operators.splice(operators.findIndex(findOperatorDivide),1);         
        }
        if(operators.includes("+")){
            numbers[operators.findIndex(findOperatorSum)] = Number(numbers[operators.findIndex(findOperatorSum)]) + Number(numbers[operators.findIndex(findOperatorSum)+1]);
            numbers.splice(operators.findIndex(findOperatorSum)+1,1);
            operators.splice(operators.findIndex(findOperatorSum),1);         
        }
        if(operators.includes("-")){
            numbers[operators.findIndex(findOperatorSubstract)] = numbers[operators.findIndex(findOperatorSubstract)] - numbers[operators.findIndex(findOperatorSubstract)+1];
            numbers.splice(operators.findIndex(findOperatorSubstract)+1,1);
            operators.splice(operators.findIndex(findOperatorSubstract),1);         
        }
    }
    user = numbers;
    arrayOperators = operators;


}

function findOperatorMultiply(operators){
    return operators === "x"
}
function findOperatorDivide(operators){
    return operators === "÷"
}
function findOperatorSum(operators){
    return operators === "+"
}
function findOperatorSubstract(operators){
    return operators === "-"
}