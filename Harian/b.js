function number(busStops) {
  let aa = 0;
  busStops.forEach((e, i, a) => {
    aa += a[i][0] - a[i][1];
  });
  // for (let i = 0; i < busStops.length; i++) {
  //   a += busStops[i][0];
  //   b += busStops[i][1];
  // }

  // return a - b;
  return aa;
}
a = [
  [4, 0],
  [3, 2],
];
console.log(number(a));
