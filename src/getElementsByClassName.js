// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  //console.log('answer', document.getElementsByClassName(className));
  var nodes = document.body,
      matches = [];


// Run thru body, if childNode has className, push chlildNode to result; 
// if childNode has childNode, recurse as if childNode is body
// this will require an inner-fn that takes the elmt to run-thru as the arg (?)
/*	var walk = function(elmt) {

		if($(elmt).hasClass(className)) {
			console.log("hasClass", $(elmt).hasClass(className));
			matches.push(elmt);

	       console.log('elmt', elmt);
	       console.log('next',elmt.nextSibling);
			  if(elmt.nextSibling) {
			  	console.log('sibling');
			  	if($(elmt).hasClass(className)) {
					matches.push(elmt.nextSibling);
				}
			  	
			  } else if (elmt.childNodes) {
			  	var childs = elmt.childNodes;
			  	console.log('kids',childs);

			  	for(var i=0; i<childs.length; i++) {
			  		if($(childs[i]).hasClass(className)) {
			  			console.log('again!');
			  			matches.push(childs[i]);
			  		}
			  	}
			  	console.log('list',elmt.classList );
			  }
		} else{console.log('NOPE');}
		console.log('fin', matches);
		return matches; 
	};


	//var list = $("*").children(className); 
	//console.log(list); 



	return walk(nodes);
  /*for(var node in childs) {
  	if(childs[node] === className) {
  		result.push(childs[node]);
  	}
  } */
   
};
