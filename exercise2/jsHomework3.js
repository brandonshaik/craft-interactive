var ride;

function trainRides(){
	ride=document.getElementById("ride").value;
	cost= (ride * 2.50) * 30;
	alert ("You spend " + cost + " per month on train rides.");

	shouldBuy();

}

function shouldBuy(){

	if (cost > 116){

		alert("You should buy an unlimited MTA card.");
	} else {
		alert("You should pay per ride.");
	}
}