function getMiddle(s)
{
  let arr = s.split("")
  let a = 0,b=0
  if( (arr.length % 2) == 0){
    
    a = arr.length /2 -1
    
     b = arr.length/2 
    
    return arr[a]+arr[b]
    }
  else {
    a = Math.floor(arr.length/2)
   
    return arr[a]
  }
}

console.log(getMiddle("test"))

// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }