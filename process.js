
xhttp = new XMLHttpRequest();
xhttp.open("GET","words.xml",false);
xhttp.send(null);
xmlDoc = xhttp.responseXML;

var enArray = xmlDoc.getElementsByTagName( "english" );
var arArray = xmlDoc.getElementsByTagName( "arabic" );

var CURRENT = 0; //global variable that will hold the current pointer
var total = 0;
var numCorrect = 0;


function load() {
	document.getElementById('givenWord').innerHTML = arArray[CURRENT].childNodes[0].nodeValue;
}


function checkThis() {

	var valid = validate();
	
	if( valid == false ){
		//validation failed
		document.getElementById('errorMessage').innerHTML = '<img src=\"images/error.png\"> Letters only please..';
		errorMessage.style.color = "yellow";
	}
	//if the answer is correct
	else if( enArray[CURRENT].childNodes[0].nodeValue.toLowerCase() == textfield.value.toLowerCase() ) {
		document.getElementById('errorMessage').innerHTML = '<img src=\"images/correct.png\"> That is Correct!';
		errorMessage.style.color = "#66FF00";
		numCorrect++; //increment number correct		
		total++;
		//get the next word
		next();
	}
	//if the answer is incorrect
	else { //The answer is incorrect	
		document.getElementById('errorMessage').innerHTML = '<img src=\"images/wrong.png\"> Sorry, that is incorrect.';
		errorMessage.style.color = "red";
		total++;
	}
	//clear the textfield
	document.getElementById('textfield').value = "";
}

function next() {
	//increment the array pointer to next value
	CURRENT = (CURRENT+1)%enArray.length;
	//Reset values and give user the next word.
	document.getElementById('givenWord').innerHTML = arArray[CURRENT].childNodes[0].nodeValue;
}

function validate() {
	if( textfield.value.match(/^[a-zA-Z]+$/) ) 
		return true;
	return false;
}

function finish() {
	//if none correct
	if( total == 0 ) {
		document.getElementById('errorMessage').innerHTML = 'None Answered';
	} 
	else {  //format the tallied score for printing
		var score = (numCorrect/total)*100;
		var wrongAns = "Correct: " + numCorrect + " - ";
		wrongAns += "Wrong: " + (total - numCorrect) + "<br>";
		wrongAns += "Total: " + (total) + " - ";
		wrongAns += "Score: " + score.toFixed(0) + "%<br>";
		document.getElementById('errorMessage').innerHTML = wrongAns;
	}
	errorMessage.style.color = "orange";
}

