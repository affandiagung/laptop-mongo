function getSum( a,b )
{  let c=0
let temp
if(a>=b){
let temp = a
a=b
b=temp
}
  while(a<=b)
{
  c = c+a
  a++
}
 return c
}