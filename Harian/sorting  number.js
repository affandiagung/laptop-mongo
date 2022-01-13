function descendingOrder(n) {
  n = n.toString();
  const word = n.split('')
  word.sort();
  word.reverse();
  return +word.join("");
}

function descOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}
console.log(descendingOrder(4321243214320))
console.log(descOrder(4321243214320))