function nextId(ids){
  ids.sort(function(a, b){return a-b})
  for ( let i=0;i<ids.length;i++){
  let something = ids.includes(i);
  if(something == false) {
    return i
   }
   }
   return (ids[ids.length-1] +1)
}


console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]))