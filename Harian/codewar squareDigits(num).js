function squareDigits(num){
 let s = num.toString()
  let m = s.split("")
  let total =""
  let c = ""
  let k = 0
  for(i = 0; i <m.length; i++){
    k = m[i]*m[i]
    c = k.toString()
  total +=k;
  }
  return parseInt(total)
}

// function squareDigits(num){
//   var array = num.toString().split('').map( function(int) {
//     var i = parseInt(int);
//     return i * i;
//   });
  
//   return parseInt(array.join(""));
// }