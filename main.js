var swapCase = function(userString) {
	var splitStr = userString.split('');
	for (var i=0; i<splitStr.length; i++){
		if(splitStr[i] === splitStr[i].toUpperCase()){
			splitStr[i] = splitStr[i].toLowerCase();
//NOTE: you must re-assign the variable to change the value as you loop through the array
		} else {
			splitStr[i] = splitStr[i].toUpperCase();
		};		
	};
	return splitStr.join('');
};
	// var upCase = userString.toUpperCase();
	// console.log(upCase);
	//Get everything in caps
	// var splitStr = upCase.split();
	// console.log(splitStr); 
	// //Get everything in caps in an Array
	// var hLil = upCase.charAt(0).toLowerCase();
	// console.log(hLil);
	// //Get h in lowercase
	// var wLil = upCase.charAt(6).toLowerCase();
	// console.log(wLil);
	// //Get w in lowercase

	// // var altogetherNow = splitStr.toString('');
	// //Replace characters in array
	// //Return string after subsitution	
console.log(swapCase('Hello World'));