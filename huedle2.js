let answer1Values = [];
let answer2Values = [];
let answer3Values = [];

let answerColors = []; //holds all of the answer colors in one array for easy access
let turnCounter = 0; //counts the number of turns for the labels

let message = "";

let guessColors = ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"];

//raw input variables
//input from each guess
let guessInput = []; //each array holds the r, g, b of the guess

var valid; //boolean checks if the input is valid
let isColor1Correct = false;
let isColor2Correct = false;
let isColor3Correct = false;

/*let innyput = document.querySelector("INPUTPUTPUT");
let display = document.getElementById("yum");

innyput.addEventListener("INPUTPUTPUT", updateValue);

function updateValue(e) {
	display.textContent = e.target.value;
}*/

function guess() { // numberentered
	++turnCounter; //checks turn number
	
	document.getElementById("message").innerHTML += "turn " + turnCounter + " " + answer1Values + " " + answer2Values + " " + answer3Values;
	
	if (turnCounter == 1) {
		guessInput[0] = document.getElementById("r1").value; //assigns raw input to the variables
		guessInput[1] = document.getElementById("g1").value;
		guessInput[2] = document.getElementById("b1").value;
	}

	if (turnCounter == 2) {
		guessInput[0] = document.getElementById("r2").value;
		guessInput[1] = document.getElementById("g2").value;
		guessInput[2] = document.getElementById("b2").value;
	}

	if (turnCounter == 3) {
		guessInput[0] = document.getElementById("r3").value;
		guessInput[1] = document.getElementById("g3").value;
		guessInput[2] = document.getElementById("b3").value;
	}

	if (turnCounter == 4) {
		guessInput[0] = document.getElementById("r4").value;
		guessInput[1] = document.getElementById("g4").value;
		guessInput[2] = document.getElementById("b4").value;
	}

	if (turnCounter == 5) {
		guessInput[0] = document.getElementById("r5").value;
		guessInput[1] = document.getElementById("g5").value;
		guessInput[2] = document.getElementById("b5").value;
	}
	if (turnCounter == 6) {
		guessInput[0] = document.getElementById("r6").value;
		guessInput[1] = document.getElementById("g6").value;
		guessInput[2] = document.getElementById("b6").value;
	}
	if (turnCounter == 7) {
		guessInput[0] = document.getElementById("r7").value;
		guessInput[1] = document.getElementById("g7").value;
		guessInput[2] = document.getElementById("b7").value;
}
	if (turnCounter == 8) {
		guessInput[0] = document.getElementById("r8").value;
		guessInput[1] = document.getElementById("g8").value;
		guessInput[2] = document.getElementById("b8").value;
	}
	if (turnCounter == 9) {
		guessInput[0] = document.getElementById("r9").value;
		guessInput[1] = document.getElementById("g9").value;
		guessInput[2] = document.getElementById("b9").value;
	}
	if (turnCounter == 10) {
		guessInput[0] = document.getElementById("r10").value;
		guessInput[1] = document.getElementById("g10").value;
		guessInput[2] = document.getElementById("b10").value;
	}
	
	valid = isValid(guessInput[0], guessInput[1], guessInput[2]); //checks if the variables are valid
	checkRGB(guessInput[0], guessInput[1], guessInput[2]); //checks how correct the values are 
	
}

function run() {
	enableInput();
	selectRGB(); //selects answer colors
	answerColors[0] = "rgb(" + answer1Values[0] + ", " + answer1Values[1] + ", " + answer1Values[2] + ")"; //prints the rgb values for answer1	
	answerColors[1] = "rgb(" + answer2Values[0] + ", " + answer2Values[1] + ", " + answer2Values[2] + ")"; //prints the rgb values for answer2
	answerColors[2] = "rgb(" + answer3Values[0] + ", " + answer3Values[1] + ", " + answer3Values[2] + ")"; //prints the rgb values for answer3	
	generateCircle(); //initializes circle values to all black
	//document.getElementById("message").innerHTML += answerColor + " turn " + turnCounter + "<br>";
}

function enableInput() { //allows the user to enter guess values for the next turn in the input boxes
	document.getElementById("r" + (turnCounter + 1)).disabled = false;
	document.getElementById("g" + (turnCounter + 1)).disabled = false;
	document.getElementById("b" + (turnCounter + 1)).disabled = false;
}

function enableNewInput(char) {
	document.getElementById("r" + (turnCounter + 1) + char).disabled = false;
	document.getElementById("g" + (turnCounter + 1) + char).disabled = false;
	document.getElementById("b" + (turnCounter + 1) + char).disabled = false;
}

function disableInput(num) { //prevents the user from entering the guess values for previous turns or skipping ahead
	document.getElementById("r" + num).disabled = true;
	document.getElementById("g" + num).disabled = true;
	document.getElementById("b" + num).disabled = true;
}

function isValid(r, g, b) {
	if (r == Number(r) && r > 0 && r <= 255) {
		if (g == Number(g) && g > 0 && g <= 255) {
			if (b == Number(b) && b > 0 && b <= 255) 
				return true;
		}
	}
	return false;
}

function checkRGB(r, g, b) { //checks how accurate rgb is
	let errorMessage = "!isvalid error <br>";
	
	if (valid) {
		let hintSet1 = check1Vals(r, g, b);
		let hintSet2 = check2Vals(r, g, b);
		let hintSet3 = check3Vals(r, g, b);

		let isWon = false;
			
		document.getElementById("message").innerHTML += "r: " + hintSet1[0] + "<br>"; //checks r guess
		document.getElementById("message").innerHTML += "g: " + hintSet1[1] + "<br>"; //checks g guess
		document.getElementById("message").innerHTML += "b: " + hintSet1[2] + "<br>"; //checks b guess
		
		
		let thisColor = "rgb(" + r + "," + g + "," + b + ")";
		document.getElementById("message").innerHTML += "color: " + thisColor + "<br>";
		
		guessColors[turnCounter - 1] = thisColor;
			
		generateCircle();
		
		document.getElementById("r" + turnCounter).style.backgroundColor = hintSet1[0];  
		document.getElementById("g" + turnCounter).style.backgroundColor = hintSet1[1];  
		document.getElementById("b" + turnCounter).style.backgroundColor = hintSet1[2];  
		
		document.getElementById("r" + turnCounter + "a").style.backgroundColor = hintSet2[0];  
		document.getElementById("g" + turnCounter + "a").style.backgroundColor = hintSet2[1];  
		document.getElementById("b" + turnCounter + "a").style.backgroundColor = hintSet2[2];  
		
		document.getElementById("r" + turnCounter + "b").style.backgroundColor = hintSet3[0];  
		document.getElementById("g" + turnCounter + "b").style.backgroundColor = hintSet3[1];  
		document.getElementById("b" + turnCounter + "b").style.backgroundColor = hintSet3[2]; 
	
		document.getElementById("r" + turnCounter + "a").value = r;  
		document.getElementById("g" + turnCounter + "a").value = g;  
		document.getElementById("b" + turnCounter + "a").value = b;  
		
		document.getElementById("r" + turnCounter + "b").value = r;  
		document.getElementById("g" + turnCounter + "b").value = g;  
		document.getElementById("b" + turnCounter + "b").value = b; 
	
		if(hintSet1[0] == "#00cc66" && hintSet1[1] == "#00cc66" && hintSet1[2] == "#00cc66")
			isColor1Correct = true;
		if(hintSet2[0] == "#00cc66" && hintSet2[1] == "#00cc66" && hintSet2[2] == "#00cc66")
			isColor2Correct = true;
		if(hintSet3[0] == "#00cc66" && hintSet3[1] == "#00cc66" && hintSet3[2] == "#00cc66")
			isColor3Correct = true;
		
		if(isColor1Correct && isColor2Correct && isColor3Correct)
			isWon = true;

		if (isWon)
			win();
		else if (turnCounter >= 10)
			lose();
		
		if (isColor1Correct) {
			disableInput(1);
			disableInput(2);
			disableInput(3);
			disableInput(4);
			disableInput(5);
			disableInput(6);
	
			if(!isColor2Correct)
				enableNewInput(a);
		}
		
		disableInput(turnCounter);
		if(turnCounter < 10 && !isColor1Correct) //checks if turnCounter is less than six to implement the enableInput
			enableInput(); //enableInput doesn't need to be called on the last guess
		
		
	}
	else {
		document.getElementById("message").innerHTML += errorMessage;
		turnCounter--;
		document.getElementById("message").innerHTML += turnCounter;
		error();
	}
}

function check1Vals(rVal, gVal, bVal) {
	let thisGuess = [checkR(rVal), checkG(gVal), checkB(bVal)];
	return thisGuess;
}

function check2Vals(rVal, gVal, bVal) {
	let thisGuess = [checkRa(rVal), checkGa(gVal), checkBa(bVal)];
	return thisGuess;
}

function check3Vals(rVal, gVal, bVal) {
	let thisGuess = [checkRb(rVal), checkGb(gVal), checkBb(bVal)];
	return thisGuess;
}

function checkR(rVal) { //checks r value
	if (Math.abs(rVal - answer1Values[0]) <= 5) //if guess is correct --> green
		return "#00cc66";
	if (Math.abs(rVal - answer1Values[0]) <= 15) //if guess is rlly close --> red
		return "#ff3300";
	if (Math.abs(rVal - answer1Values[0]) <= 25) //if guess is pretty close --> organey pink
		return "#ff6666";
	if (Math.abs(rVal - answer1Values[0]) <= 50) //if guess is close --> pink
		return "#ff66ff";
	if (Math.abs(rVal - answer1Values[0]) <= 100) //if guess is far --> purple
		return "#9966ff";
	if (Math.abs(rVal - answer1Values[0]) <= 150) //if guess is pretty far --> blueish purple
		return "#6666ff";
	if (Math.abs(rVal - answer1Values[0]) <= 200) //if guess is really far -->  blue
		return "#3399ff";
	return "#99ccff"; //if guess is way off --> light blue
}

function checkG(gVal) { //checks g value
	if (Math.abs(gVal - answer1Values[1]) <= 5)
		return "#00cc66";
	if (Math.abs(gVal - answer1Values[1]) <= 15)
		return "#ff3300";
	if (Math.abs(gVal - answer1Values[1]) <= 25)
		return "#ff6666";
	if (Math.abs(gVal - answer1Values[1]) <= 50)
		return "#ff66ff";
	if (Math.abs(gVal - answer1Values[1]) <= 100)
		return "#9966ff";
	if (Math.abs(gVal - answer1Values[1]) <= 150)
		return "#6666ff";
	if (Math.abs(gVal - answer1Values[1]) <= 200)
		return "#3399ff";
	return "#99ccff";
}

function checkB(bVal) { //checks b value
	if (Math.abs(bVal - answer1Values[2]) <= 5)
		return "#00cc66";
	if (Math.abs(bVal - answer1Values[2]) <= 15)
		return "#ff3300";
	if (Math.abs(bVal - answer1Values[2]) <= 25)
		return "#ff6666";
	if (Math.abs(bVal - answer1Values[2]) <= 50)
		return "#ff66ff";
	if (Math.abs(bVal - answer1Values[2]) <= 100)
		return "#9966ff";
	if (Math.abs(bVal - answer1Values[2]) <= 150)
		return "#6666ff";
	if (Math.abs(bVal - answer1Values[2]) <= 200)
		return "#3399ff";
	return "#99ccff";
}

function checkRa(rVal) { //checks r value
	if (Math.abs(rVal - answer2Values[0]) <= 5) //if guess is correct --> green
		return "#00cc66";
	if (Math.abs(rVal - answer2Values[0]) <= 15) //if guess is rlly close --> red
		return "#ff3300";
	if (Math.abs(rVal - answer2Values[0]) <= 25) //if guess is pretty close --> organey pink
		return "#ff6666";
	if (Math.abs(rVal - answer2Values[0]) <= 50) //if guess is close --> pink
		return "#ff66ff";
	if (Math.abs(rVal - answer2Values[0]) <= 100) //if guess is far --> purple
		return "#9966ff";
	if (Math.abs(rVal - answer2Values[0]) <= 150) //if guess is pretty far --> blueish purple
		return "#6666ff";
	if (Math.abs(rVal - answer2Values[0]) <= 200) //if guess is really far -->  blue
		return "#3399ff";
	return "#99ccff"; //if guess is way off --> light blue
}

function checkGa(gVal) { //checks g value
	if (Math.abs(gVal - answer2Values[1]) <= 5)
		return "#00cc66";
	if (Math.abs(gVal - answer2Values[1]) <= 15)
		return "#ff3300";
	if (Math.abs(gVal - answer2Values[1]) <= 25)
		return "#ff6666";
	if (Math.abs(gVal - answer2Values[1]) <= 50)
		return "#ff66ff";
	if (Math.abs(gVal - answer2Values[1]) <= 100)
		return "#9966ff";
	if (Math.abs(gVal - answer2Values[1]) <= 150)
		return "#6666ff";
	if (Math.abs(gVal - answer2Values[1]) <= 200)
		return "#3399ff";
	return "#99ccff";
}

function checkBa(bVal) { //checks b value
	if (Math.abs(bVal - answer2Values[2]) <= 5)
		return "#00cc66";
	if (Math.abs(bVal - answer2Values[2]) <= 15)
		return "#ff3300";
	if (Math.abs(bVal - answer2Values[2]) <= 25)
		return "#ff6666";
	if (Math.abs(bVal - answer2Values[2]) <= 50)
		return "#ff66ff";
	if (Math.abs(bVal - answer2Values[2]) <= 100)
		return "#9966ff";
	if (Math.abs(bVal - answer2Values[2]) <= 150)
		return "#6666ff";
	if (Math.abs(bVal - answer2Values[2]) <= 200)
		return "#3399ff";
	return "#99ccff";
}

function checkRb(rVal) { //checks r value
	if (Math.abs(rVal - answer3Values[0]) <= 5) //if guess is correct --> green
		return "#00cc66";
	if (Math.abs(rVal - answer3Values[0]) <= 15) //if guess is rlly close --> red
		return "#ff3300";
	if (Math.abs(rVal - answer3Values[0]) <= 25) //if guess is pretty close --> organey pink
		return "#ff6666";
	if (Math.abs(rVal - answer3Values[0]) <= 50) //if guess is close --> pink
		return "#ff66ff";
	if (Math.abs(rVal - answer3Values[0]) <= 100) //if guess is far --> purple
		return "#9966ff";
	if (Math.abs(rVal - answer3Values[0]) <= 150) //if guess is pretty far --> blueish purple
		return "#6666ff";
	if (Math.abs(rVal - answer3Values[0]) <= 200) //if guess is really far -->  blue
		return "#3399ff";
	return "#99ccff"; //if guess is way off --> light blue
}

function checkGb(gVal) { //checks g value
	if (Math.abs(gVal - answer3Values[1]) <= 5)
		return "#00cc66";
	if (Math.abs(gVal - answer3Values[1]) <= 15)
		return "#ff3300";
	if (Math.abs(gVal - answer3Values[1]) <= 25)
		return "#ff6666";
	if (Math.abs(gVal - answer3Values[1]) <= 50)
		return "#ff66ff";
	if (Math.abs(gVal - answer3Values[1]) <= 100)
		return "#9966ff";
	if (Math.abs(gVal - answer3Values[1]) <= 150)
		return "#6666ff";
	if (Math.abs(gVal - answer3Values[1]) <= 200)
		return "#3399ff";
	return "#99ccff";
}

function checkBb(bVal) { //checks b value
	if (Math.abs(bVal - answer3Values[2]) <= 5)
		return "#00cc66";
	if (Math.abs(bVal - answer3Values[2]) <= 15)
		return "#ff3300";
	if (Math.abs(bVal - answer3Values[2]) <= 25)
		return "#ff6666";
	if (Math.abs(bVal - answer3Values[2]) <= 50)
		return "#ff66ff";
	if (Math.abs(bVal - answer3Values[2]) <= 100)
		return "#9966ff";
	if (Math.abs(bVal - answer3Values[2]) <= 150)
		return "#6666ff";
	if (Math.abs(bVal - answer3Values[2]) <= 200)
		return "#3399ff";
	return "#99ccff";
}

function selectRGB() {
	answer1Values[0] = Math.floor(Math.random() * 240) + 10; //assigns random rgb values to the first answer color
	answer1Values[1] = Math.floor(Math.random() * 240) + 10;
	answer1Values[2] = Math.floor(Math.random() * 240) + 10;
	
	do
		answer2Values[0] = Math.floor(Math.random() * 240) + 10;
	while(Math.abs(answer2Values[0] - answer1Values[0]) < 50) //makes sure the rgb values of the second color are not too similar to the rgb values of the first color
	
	do
		answer2Values[1] = Math.floor(Math.random() * 240) + 10;
	while(Math.abs(answer2Values[1] - answer1Values[1]) < 50)
		
	do
		answer2Values[2] = Math.floor(Math.random() * 240) + 10;
	while(Math.abs(answer2Values[2] - answer1Values[2]) < 50)	
	
	do
		answer3Values[0] = Math.floor(Math.random() * 240) + 10; //makes sure the rgb values of the third color are not too similar to the rgb values of the first and second colors
	while(Math.abs(answer2Values[0] - answer3Values[0]) < 50 || Math.abs(answer3Values[0] - answer1Values[0]) < 50)
	
	do
		answer3Values[1] = Math.floor(Math.random() * 240) + 10;
	while(Math.abs(answer2Values[1] - answer3Values[1]) < 50 || Math.abs(answer3Values[1] - answer1Values[1]) < 50)
	
	do
		answer3Values[2] = Math.floor(Math.random() * 240) + 10;	
	while(Math.abs(answer2Values[2] - answer3Values[2]) < 50 || Math.abs(answer3Values[2] - answer1Values[2]) < 50)	
}

function disableButton() {
	document.getElementById("click-to-check").disabled = true;
}

function error() {
	var modal = document.getElementById("errorModal");
	var span = document.getElementsByClassName("close")[0];

	document.getElementById("error-message-continued").innerHTML = "check that each value is between 1<br>and 225 and that all values have been entered";

	modal.style.display = "block";
	span.onclick = function() {
		modal.style.display = "none";
	}
	  
	window.onclick = function(event) {
		if (event.target == modal)
		  modal.style.display = "none";
	}
}

function win() {
	var modal = document.getElementById("winModal");
	var span = document.getElementsByClassName("close")[0];

	document.getElementById("win-message").innerHTML = "<br> the exact answers are <br>" + answerColors[0] +  "<br>" + answerColors[1] +  "<br>" + answerColors[2];
	modal.style.display = "block";
	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
		
	disableInput(1);
	disableInput(2);
	disableInput(3);
	disableInput(4);
	disableInput(5);
	disableInput(6);
	
	disableButton();
}

function lose() {
	var modal = document.getElementById("loseModal");
	var span = document.getElementsByClassName("close")[0];

	document.getElementById("lose-message").innerHTML = "<br> the exact answers are <br>" + answerColors[0] +  "<br>" + answerColors[1] +  "<br>" + answerColors[2];
	modal.style.display = "block";
	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
		
	disableInput(1);
	disableInput(2);
	disableInput(3);
	disableInput(4);
	disableInput(5);
	disableInput(6);
	
	disableButton();
}

function instructions() {
	var modal = document.getElementById("instructionModal");
	var span = document.getElementsByClassName("close")[0];

	modal.style.display = "block";
	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

function generateCircle() {
	//circle1
	var c = document.getElementById("circleCanvas");
	var ctx = c.getContext("2d");
	ctx.lineWidth = 10;
	ctx.strokeStyle = answerColors[0];

	//outer circle
	ctx.beginPath();
	ctx.arc(375, 330, 325, 0, 2 * Math.PI, true);
	ctx.stroke(); //https://www.w3schools.com/tags/canvas_arc.asp
	ctx.moveTo(375, 330);
	ctx.closePath();
	ctx.fillStyle = 'black';
	ctx.fill(); //https://www.html5canvastutorials.com/tutorials/html5-canvas-shape-fill/
	
	//sector 1
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, 0, -1/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[0];
	ctx.fill();
	
	//sector 2
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -1/5 * Math.PI, -2/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[1];
	ctx.fill();
	
	//sector 3
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -2/5 * Math.PI, -3/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[2];
	ctx.fill();
	
	//sector 4
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -3/5 * Math.PI, -4/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[3];
	ctx.fill();
	
	//sector 5 
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -4/5 * Math.PI, -5/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[4];
	ctx.fill();
	
	//sector 6
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -5/5 * Math.PI, -6/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[5];
	ctx.fill();
	
	//sector 7
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -6/5 * Math.PI, -7/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[6];
	ctx.fill();
	
	//sector 8
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -7/5 * Math.PI, -8/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[7];
	ctx.fill();
	
	//sector 9 
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -8/5 * Math.PI, -9/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[8];
	ctx.fill();
	
	//sector 10
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 325, -9/5 * Math.PI, -10/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[9];
	ctx.fill();
	
	//last line
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.moveTo(375, 330);
	ctx.lineTo(700, 330);
	ctx.stroke();
	ctx.closePath();
	
	//inner circle
	ctx.beginPath();
	ctx.moveTo(375, 330);
	ctx.arc(375, 330, 150, 0, 2 * Math.PI);
	ctx.lineWidth = 10;
	ctx.stroke();
	ctx.fillStyle = answerColors[0];
	ctx.fill();
	
	
//circle2--------------------------------------------------------------
	var c = document.getElementById("circleCanvas");
	var ctx = c.getContext("2d");
	ctx.lineWidth = 10;
	ctx.strokeStyle = answerColors[1];

	//outer circle
	ctx.beginPath();
	ctx.arc(375, 1050, 325, 0, 2 * Math.PI, true);
	ctx.stroke(); //https://www.w3schools.com/tags/canvas_arc.asp
	ctx.moveTo(375, 1050);
	ctx.closePath();
	ctx.fillStyle = 'black';
	ctx.fill(); //https://www.html5canvastutorials.com/tutorials/html5-canvas-shape-fill/
	
	//sector 1
	ctx.beginPath();
	ctx.moveTo(375, 1050);
	ctx.arc(375, 1050, 325, 0, -1/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[0];
	ctx.fill();
	
	//sector 2
	ctx.beginPath();
	ctx.moveTo(375, 1050);
	ctx.arc(375, 1050, 325, -1/5 * Math.PI, -2/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[1];
	ctx.fill();
	
	//sector 3
	ctx.beginPath();
	ctx.moveTo(375, 1050);
	ctx.arc(375, 1050, 325, -2/5 * Math.PI, -3/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[2];
	ctx.fill();
	
	//sector 4
	ctx.beginPath();
	ctx.moveTo(375, 1050);
	ctx.arc(375, 1050, 325, -3/5 * Math.PI, -4/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[3];
	ctx.fill();
	
	//sector 5 
	ctx.beginPath();
	ctx.moveTo(375, 1050);
	ctx.arc(375, 1050, 325, -4/5 * Math.PI, -5/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[4];
	ctx.fill();
	
	//sector 6
	ctx.beginPath();
	ctx.moveTo(375, 1050);
	ctx.arc(375, 1050, 325, -5/5 * Math.PI, -6/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[5];
	ctx.fill();
	
	//sector 7
	ctx.beginPath();
	ctx.moveTo(375, 1050);
	ctx.arc(375, 1050, 325, -6/5 * Math.PI, -7/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[6];
	ctx.fill();
	
	//sector 8
	ctx.beginPath();
	ctx.moveTo(375, 1050);
	ctx.arc(375, 1050, 325, -7/5 * Math.PI, -8/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[7];
	ctx.fill();
	
	//sector 9 
	ctx.beginPath();
	ctx.moveTo(375, 1050);
	ctx.arc(375, 1050, 325, -8/5 * Math.PI, -9/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[8];
	ctx.fill();
	
	//sector 10
	ctx.beginPath();
	ctx.moveTo(375, 1050);
	ctx.arc(375, 1050, 325, -9/5 * Math.PI, -10/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[9];
	ctx.fill();
	
	//last line
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.moveTo(375, 1050);
	ctx.lineTo(700, 1050);
	ctx.stroke();
	ctx.closePath();
	
	//inner circle
	ctx.beginPath();
	ctx.moveTo(375, 1050);
	ctx.arc(375, 1050, 150, 0, 2 * Math.PI);
	ctx.lineWidth = 10;
	ctx.stroke();
	ctx.fillStyle = answerColors[1];
	ctx.fill();
	
//circle3--------------------------------------------------------------
	var c = document.getElementById("circleCanvas");
	var ctx = c.getContext("2d");
	ctx.lineWidth = 10;
	ctx.strokeStyle = answerColors[2];

	//outer circle
	ctx.beginPath();
	ctx.arc(375, 1770, 325, 0, 2 * Math.PI, true);
	ctx.stroke(); //https://www.w3schools.com/tags/canvas_arc.asp
	ctx.moveTo(375, 1770);
	ctx.closePath();
	ctx.fillStyle = 'black';
	ctx.fill(); //https://www.html5canvastutorials.com/tutorials/html5-canvas-shape-fill/
	
	//sector 1
	ctx.beginPath();
	ctx.moveTo(375, 1770);
	ctx.arc(375, 1770, 325, 0, -1/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[0];
	ctx.fill();
	
	//sector 2
	ctx.beginPath();
	ctx.moveTo(375, 1770);
	ctx.arc(375, 1770, 325, -1/5 * Math.PI, -2/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[1];
	ctx.fill();
	
	//sector 3
	ctx.beginPath();
	ctx.moveTo(375, 1770);
	ctx.arc(375, 1770, 325, -2/5 * Math.PI, -3/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[2];
	ctx.fill();
	
	//sector 4
	ctx.beginPath();
	ctx.moveTo(375, 1770);
	ctx.arc(375, 1770, 325, -3/5 * Math.PI, -4/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[3];
	ctx.fill();
	
	//sector 5 
	ctx.beginPath();
	ctx.moveTo(375, 1770);
	ctx.arc(375, 1770, 325, -4/5 * Math.PI, -5/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[4];
	ctx.fill();
	
	//sector 6
	ctx.beginPath();
	ctx.moveTo(375, 1770);
	ctx.arc(375, 1770, 325, -5/5 * Math.PI, -6/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[5];
	ctx.fill();
	
	//sector 7
	ctx.beginPath();
	ctx.moveTo(375, 1770);
	ctx.arc(375, 1770, 325, -6/5 * Math.PI, -7/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[6];
	ctx.fill();
	
	//sector 8
	ctx.beginPath();
	ctx.moveTo(375, 1770);
	ctx.arc(375, 1770, 325, -7/5 * Math.PI, -8/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[7];
	ctx.fill();
	
	//sector 9 
	ctx.beginPath();
	ctx.moveTo(375, 1770);
	ctx.arc(375, 1770, 325, -8/5 * Math.PI, -9/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[8];
	ctx.fill();
	
	//sector 10
	ctx.beginPath();
	ctx.moveTo(375, 1770);
	ctx.arc(375, 1770, 325, -9/5 * Math.PI, -10/5 * Math.PI, true);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = guessColors[9];
	ctx.fill();
	
	//last line
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.moveTo(375, 1770);
	ctx.lineTo(700, 1770);
	ctx.stroke();
	ctx.closePath();
	
	//inner circle
	ctx.beginPath();
	ctx.moveTo(375, 1770);
	ctx.arc(375, 1770, 150, 0, 2 * Math.PI);
	ctx.lineWidth = 10;
	ctx.stroke();
	ctx.fillStyle = answerColors[2];
	ctx.fill();
}
