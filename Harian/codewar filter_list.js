function filter_list(l) {
  let k=[]
   for(let i =0;i<l.length;i++){
      if(typeof(l[i]) === 'number' ){
        k.push(l[i])
      }
        
    }
  return k;
}

// function filter_list(l) {
//   return l.filter(Number.isInteger);
// }
console.log(filter_list([1,2,'1','b']))