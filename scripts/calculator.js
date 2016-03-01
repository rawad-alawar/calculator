//calculator

var equation = "";
var arr = ["0","1","2","3","4","5","6","7","8","9",".","+","-","*","%"];
var value = "";
var answer = "";

$(document).ready(function(){
	$("button").click(function(){
		
		value = this.innerHTML;
		

		if ($.inArray(value,arr) !== -1){
			equation += value;
			document.getElementById("answer").innerHTML = equation;
		}
		if (value === "C") {
			equation = "";
			document.getElementById("answer").innerHTML = equation;
		}
		if (value === "="){
			answer = eval(equation);
			document.getElementById("answer").innerHTML = answer;
			equation = "";
		}



	});
















});

