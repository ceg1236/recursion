// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  console.log('type:', typeof obj);

  if(typeof obj === 'object'){	
    var elmt = '{'+obj+'}';
    console.log('elmt:', elmt,'length:', elmt.length, 'obj:', obj);
    return (elmt.indexOf('[')>0? '[' +obj+']':
    		elmt.slice(elmt.indexOf('{')+1, elmt.indexOf('}'))); 

  } else if (typeof obj === 'string'){
  	console.log('test', obj);
  	return "\""+obj+"\"";

  } else {
  return obj.toString(); 
  }
 
};
