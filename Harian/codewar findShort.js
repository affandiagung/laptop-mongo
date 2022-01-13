function findShort(s){
  let c= s.split(" ")
  let b=30
  for(let i =0;i<c.length;i++)
   {
      if(b>c[i].length)
         b= c[i].length    
   }
   return b
}


console.log(findShort("dsadas dasdas das das das dda"))