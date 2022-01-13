function isIsogram(str){
  let m = str.toLowerCase()
  let d = true

  for(let i=0;i<m.length ;i++)
    {
     for(let j=0;j<m.length ;j++) {
        if (i==j) j++
        if ( m[i] === m[j]){
          return false }
    }
    }
    
  return true
}


console.log(isIsogram("Dermatoglyphics"))