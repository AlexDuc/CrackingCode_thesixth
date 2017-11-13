var string1 = 'LGE'
var string2 = 'GOOGLE'
var string3 = 'GEO'
function compareString(a, b) {
	if(b.length < a.length) {
   return false
  }
  for (var i = 0; i < b.length; i ++) {
  	if(i > (b.length - a.length)) {
    	return false
    }
    if(b[i] === a[0]) {
    	var j = 0
    	for(j = 0; j < a.length; j++) {
      	if(a[j] != b[i+j]) {
        	break;
        }
      }
      if(j === a.length) {
      	return true
      }
    }
  }
}

