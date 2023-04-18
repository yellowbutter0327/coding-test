function solution(n) {
    let a = n.toString()
    let b = a.split("")
    let sum= 0;
    for(let i = 0; i < b.length; i++){
       sum+=parseInt(b[i])
        
    }
  return sum;
}