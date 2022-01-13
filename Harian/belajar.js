function likes(names) {
  if (names[0] === undefined) {
    return "no one like this"
  } else {
    let angka = names.length
    let c = ""
    if (angka == 1)
      return names + " likes this"
    else if (angka == 2)
      return names[0] + " and " + names[1] + " likes this"
    else if (angka == 3)
      return names[0] + ", " + names[1] + " and " + names[2] + " likes this"
    else if (angka >= 4)
      return names[0] + ", " + names[1] + " and " + (angka - 2) + " others likes this"
  }
}
let a = ['jay']
console.log(likes(a))

//
// let baru = a
// console.log(baru)
// console.log(a)

// var namahari = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu');
// let a = ""
// for (key in namahari) {
//   a += namahari[key] + " and ";
//   console.log("Hari ke " + key + " adalah: " + namahari[key] + "<br>");
// }

// console.log(a)