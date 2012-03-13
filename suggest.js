

function keyUp( event, str ){
	//If the "Return" key is pressed, call "checkThis"
	if( event.keyCode == 13 ) {
		checkThis();
	}
	else { //give a suggestion
		suggest( str );
	}
}

function suggest( str ){
	
	if( str.length > 0 ){
	
		var hint = "suggestion: ";
		var i;
		for( i=0; i<enArray.length; i++ ) {
		
			var engWord = enArray[i].childNodes[0].nodeValue;
			if ( str.toLowerCase() ==  engWord.substr(0,str.length).toLowerCase() ) {
				if ( hint == "suggestion: " ) {				
					hint += engWord;
				}
				else {
					hint += " , " + engWord;
				}
			}
		}
	}
	var response;
	if( hint == "suggestion: " || hint == null ) {
		response = "no suggestion";
	}
	else {
		response = hint;
	}

	document.getElementById("errorMessage").innerHTML = response;
	errorMessage.style.color = "white";
}

function clearbox(box_name) {
	
	var textbox = document.getElementById(box_name);
	if (textbox.value == "type here...") {
		textbox.value = "";
	}
	
}