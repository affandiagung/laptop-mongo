function grid(N){
  if(N<0) return null
  let huruf = "abcdefghijklmnopqrstuvwxyz".repeat(N)
  let grid =""
for(let i=0; i<N;i++)
{  
  grid += grid.length > 0 ? "\n" : '';
  grid += huruf.slice(i,i+N).split('').join(' ')
 

}
return grid

}

console.log(grid(6)