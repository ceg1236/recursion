// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var nodes = document.body,
      matches = [];


// Run thru body, if childNode has className, push chlildNode to result; 
// if childNode has childNode, recurse as if childNode is body
// this will require an inner-fn that takes the elmt to run-thru as the arg (?)
var walk = function(elmt) {

		if($(elmt).hasClass(className)) {
			matches.push(elmt);
  
		 }
		 if(elmt.childNodes) {
			var childs = elmt.childNodes;

			 for(var i=0; i<childs.length; i++) {
		 		if((childs[i]).childNodes) {
		  			walk(childs[i]);
			  	}
			 }
		 }
	};

	walk(nodes);
	return matches;

};
