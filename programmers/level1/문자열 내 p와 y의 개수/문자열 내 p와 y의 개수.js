function solution(s) {
  let str = s.toLowerCase();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (str[i] === "p") count++;
    else if (str[i] === "y") count--;
  }
  return count === 0 ? true : false;
}


//다른풀이생각
function solution(s){
  var arr = [...s];
  let p = 0;
  let y = 0;
  
  arr.map(a => {
      if(a === 'p' || a === 'P'){
          p++;
      }else if(a === 'y' || a === 'Y'){
          y++;
      }
  })
  
  if(p === y || (p === 0 && y === 0)){
      return true;
  }else{
      return false;
  }
}
