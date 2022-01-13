function hexToDec(h) {
  let d = h.split("").reverse().join("");
  console.log(d);
  let jumlah = 0;
  if (h.length === 1) {
    if (h.toLowerCase() === "a") return 10;
    if (h.toLowerCase() === "b") return 11;
    if (h.toLowerCase() === "c") return 12;
    if (h.toLowerCase() === "d") return 13;
    if (h.toLowerCase() === "e") return 14;
    if (h.toLowerCase() === "f") return 15;
    return parseInt(h);
  }
  if (h[0] === "-") {
    for (let i = 0; i < d.length - 1; i++) {
      if (d[i].toLowerCase() == "a") {
        console.log("nilai index ke " + i + " isinya " + d[i]);
        jumlah += 10 * Math.pow(16, i);
        console.log(jumlah);
      }
      if (d[i].toLowerCase() == "b") jumlah += 11 * Math.pow(16, i);
      if (d[i].toLowerCase() == "c") jumlah += 12 * Math.pow(16, i);
      if (d[i].toLowerCase() == "d") jumlah += 13 * Math.pow(16, i);
      if (d[i].toLowerCase() == "e") jumlah += 14 * Math.pow(16, i);
      if (d[i].toLowerCase() == "f") jumlah += 15 * Math.pow(16, i);
      if (d[i] < 10) jumlah += parseInt(d[i]) * Math.pow(16, i);
    }
    jumlah = -jumlah;
  } else {
    for (let i = 0; i < d.length; i++) {
      if (d[i].toLowerCase() == "a") jumlah += 10 * Math.pow(16, i);
      if (d[i].toLowerCase() == "b") jumlah += 11 * Math.pow(16, i);
      if (d[i].toLowerCase() == "c") jumlah += 12 * Math.pow(16, i);
      if (d[i].toLowerCase() == "d") jumlah += 13 * Math.pow(16, i);
      if (d[i].toLowerCase() == "e") jumlah += 14 * Math.pow(16, i);
      if (d[i].toLowerCase() == "f") jumlah += 15 * Math.pow(16, i);
      if (d[i] < 10) jumlah += parseInt(d[i]) * Math.pow(16, i);
    }
  }

  return jumlah;
}

console.log(hexToDec("-aaa"));
