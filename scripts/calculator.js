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
		if (value ==="e^x"){
			x = eval(equation);
			ex = 0;
			for (i=0; i < 100; i++){
				N = factorial(i);
				console.log(answer);
				console.log(typeof answer);
				ex += (Math.pow(x,i))/N;
			}

			ex = Math.round(ex*1000)/1000;
			document.getElementById("answer").innerHTML = ex;
			equation = "";
		}



	});


function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  return n * factorial(n - 1);
}













});

