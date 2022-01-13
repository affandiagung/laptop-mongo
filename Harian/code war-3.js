// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  let ar = s.toUpperCase()
  let array = ar.split("")
  let isi = []
  for (let i = 0; i <= array.length - 1; i++) {
    let a = array[i].toString();
    let c = a.toLowerCase()
    let b = c.repeat(i)
    isi.push(a + b)
  }
  let cetak = isi.join("-")
  return cetak;
}

console.log(accum("ZpglnRxqenU"))

