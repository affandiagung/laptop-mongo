// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
function warnTheSheep(queue) {
  let a = queue.length
  let urut = 0
  for (let i = 0; i < queue.length; i++)
    if (queue[i] == "wolf")
      urut = a - i - 1

  if (urut < 1)
    return "Pls go away and stop eating my sheep"
  else if (urut == 1)
    return "Oi! Sheep number 1! You are about to be eaten by a wolf!"
  else
    return "Oi! Sheep number " + (urut) + "! You are about to be eaten by a wolf!"
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"]))