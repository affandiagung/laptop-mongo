function getCount(str) {
  var vowelsCount = 0;
let o = str.split("o").length - 1;
let i = str.split("i").length - 1; 
let e = str.split("e").length - 1;
let a = str.split("a").length - 1;
let u = str.split("u").length - 1;
  
  vowelsCount = a +i+u+e+o
  return vowelsCount;
}

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }