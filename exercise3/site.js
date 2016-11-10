//add
function add(num1, num2){

  var addit = parseFloat(num1) + parseFloat(num2),
      additString = num1 + ' + ' + num2 + ' = ' + addit;

      onclick=function(){
        document.getElementById('result').innerHTML=additString;
      }

}

// substract

function subtract(num1, num2){

  var subtr = parseFloat(num1) - parseFloat(num2),
      subtrString = num1 + ' - ' + num2 + ' = ' + subtr;

      onclick=function(){
        document.getElementById('result').innerHTML=subtrString;
      }
}

// multiply

function multiply(num1, num2){

  var mult = parseFloat(num1) * parseFloat(num2),
    multString = num1 + ' * ' + num2 + ' = ' + mult;
      document.getElementById('result').innerHTML=multString;

      onclick=function(){
        document.getElementById('result').innerHTML=multString;
      }
}


// divide

function divide(num1, num2){

  var divi = parseFloat(num1) / parseFloat(num2),
    diviString = num1 + ' / ' + num2 + ' = ' + divi;

    onclick=function(){
        document.getElementById('result').innerHTML=diviString;
      }
}

// this function will grab the inputs, populate the result div
// and run an operation
function populatehtml(operation){
  var input1 = document.getElementById('first').value;
  var input2 = document.getElementById('second').value;
  var output = operation(input1,input2);
    document.getElementById('result').innerText += output;


// this if else statement will return a statement if no
// value is entered

    if (input1 == "" || input2 == ""){

      document.getElementById('result').innerHTML="You must input numbers to calculate"
    } else {

    }
}

// buttons are assigned a function to do calculation

document.getElementById('add').onclick = function(){
    populatehtml(add) };
document.getElementById('subtract').onclick = function(){
    populatehtml(subtract) };
document.getElementById('multiply').onclick = function(){
    populatehtml(multiply) };
document.getElementById('divide').onclick = function(){
    populatehtml(divide) };