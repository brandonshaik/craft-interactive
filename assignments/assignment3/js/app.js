$(document).foundation();

var family
var income


//grabs numbers from form
function getNumbers(){


  family=document.getElementById("family").value;
  income=document.getElementById("income").value;

  console.log('just got numbers')
  familyTwo();
};

function familyTwo(){

  if (family == 2){

    if (income <= 1640){
      document.getElementById("response").innerHTML="Your child qualifies for free lunch in New York City Public Schools.";
    } else if (income > 1640 && income <= 2333){
      document.getElementById("response").innerHTML="Your child qualifies for reduced price lunch, you must pay 25 cents per day.";
    } else if (income > 2333) {
      document.getElementById("response").innerHTML="You must pay for full price lunch, which is $1.50 per day.";
    };
  }else{
    familyThree();
  }
};

function familyThree(){
if (family == 3){

    if (income <= 2069){
      document.getElementById("response").innerHTML="Your child qualifies for free lunch in New York City Public Schools.";
    } else if (income > 2069 && income <= 2944){
      document.getElementById("response").innerHTML="Your child qualifies for reduced price lunch, you must pay 25 cents per day.";
    } else if (income > 2944) {
      document.getElementById("response").innerHTML="You must pay for full price lunch, which is $1.50 per day.";
    };
  }else{
    familyFour();
  }
};

function familyFour(){
if (family == 4){

    if (income <= 2498){
      document.getElementById("response").innerHTML="Your child qualifies for free lunch in New York City Public Schools.";
    } else if (income > 2498 && income <= 3554){
      document.getElementById("response").innerHTML="Your child qualifies for reduced price lunch, you must pay 25 cents per day.";
    } else if (income > 3554) {
      document.getElementById("response").innerHTML="You must pay for full price lunch, which is $1.50 per day.";
    };
  }else{
    familyFive();
  }
};

function familyFive(){
if (family == 5){

    if (income <= 2927){
      document.getElementById("response").innerHTML="Your child qualifies for free lunch in New York City Public Schools.";
    } else if (income > 2927 && income <= 4165){
      document.getElementById("response").innerHTML="Your child qualifies for reduced price lunch, you must pay 25 cents per day.";
    } else if (income > 4165) {
      document.getElementById("response").innerHTML="You must pay for full price lunch, which is $1.50 per day.";
    };
  }else{
    familySix();
  }
};

function familySix(){
  if (family == 6){
    if(income <= 3356){
      document.getElementById("response").innerHTML="Your child qualifies for free lunch in New York City Public Schools.";
    } else if (income > 3356 && income <= 4776){
      document.getElementById("response").innerHTML="Your child qualifies for reduced price lunch, you must pay 25 cents per day.";
    } else if (income > 4776) {
      document.getElementById("response").innerHTML="You must pay for full price lunch, which is $1.50 per day.";
    };
  }else{
    familySeven();
  }
};

function familySeven(){
  if (family == 7){
    if(income <= 3785){
      document.getElementById("response").innerHTML="Your child qualifies for free lunch in New York City Public Schools.";
    } else if (income > 3785 && income <= 5387){
      document.getElementById("response").innerHTML="Your child qualifies for reduced price lunch, you must pay 25 cents per day.";
    } else if (income > 5387) {
      document.getElementById("response").innerHTML="You must pay for full price lunch, which is $1.50 per day.";
    };
  }else{
    familyEight();
  }
};

function familyEight(){
  if (family == 8){
    if(income <= 4214){
      document.getElementById("response").innerHTML="Your child qualifies for free lunch in New York City Public Schools.";
    } else if (income > 4214 && income <= 5998){
      document.getElementById("response").innerHTML="Your child qualifies for reduced price lunch, you must pay 25 cents per day.";
    } else if (income > 5998) {
      document.getElementById("response").innerHTML="You must pay for full price lunch, which is $1.50 per day.";
    };
  }else{
    familyNine();
  }
};

function familyNine(){
  if (family == 9){
    if(income <= 4643){
      document.getElementById("response").innerHTML="Your child qualifies for free lunch in New York City Public Schools.";
    } else if (income > 34643 && income <= 6609){
      document.getElementById("response").innerHTML="Your child qualifies for reduced price lunch, you must pay 25 cents per day.";
    } else if (income > 6609) {
      document.getElementById("response").innerHTML="You must pay for full price lunch, which is $1.50 per day.";
    };
  }else{
    familyTen();
  }
};

function familyTen(){
  if (family == 10){
    if(income <= 5072){
      document.getElementById("response").innerHTML="Your child qualifies for free lunch in New York City Public Schools.";
    } else if (income > 5072 && income <= 7220){
      document.getElementById("response").innerHTML="Your child qualifies for reduced price lunch, you must pay 25 cents per day.";
    } else if (income > 7220) {
      document.getElementById("response").innerHTML="You must pay for full price lunch, which is $1.50 per day.";
    };
  }else{
  }
};