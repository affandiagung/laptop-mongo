// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
function removeChar(str) {

  let a = str.split("")
  a.pop()
  a.shift()
  let cetak = a.join("")
  return cetak
}


console.log(removeChar("Affandi"))


