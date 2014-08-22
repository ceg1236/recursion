// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  //Ideas: Array.isArray(obj)        '{'+obj+'}'
  //    elmt.slice(elmt.indexOf('{')+1, elmt.indexOf('}'))

  console.log('obj', typeof obj, obj);

  if(typeof obj === 'number') {
    return obj.toString(); 
  }
  if(typeof obj === 'boolean') {
    return obj.toString();
  }
  if(typeof obj === 'string') {
    //obj = obj.toString();
    obj = '\"'+obj+'\"';

  }
  if(typeof obj === 'object') {  
    if(obj === null) {
      obj = 'null';
    }
    if(Array.isArray(obj)) {
      if(obj.length===0) {
        obj = "[]";
        return obj; 
      }
      console.log('length',obj.length);
      if(obj.length>1) {
          var array = []; 
          for(var i = 0; i<obj.length; i++) {
             array.push(stringifyJSON(obj[i]));
             array.join(',');
            }
            return '['+array+']';
       
      }
      else if(obj.length===1){
        stringifyJSON(obj[0]);

       if(typeof obj[0] === 'number') {
          return '['+obj+']';
        } else if(typeof obj[0] === 'string') {
          return '[\"'+ obj[0]+'\"]'; 
        } else if(typeof obj[0] === 'object') {
          console.log('OOBB');
          stringifyJSON(obj[0]);
        }
      } 
    }
  }
return obj; 
};
