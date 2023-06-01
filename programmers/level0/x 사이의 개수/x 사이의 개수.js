function solution(myString) {
  let arr = [];
  let a = myString.split("x");

  for (let i = 0; i < a.length; i++) {
    arr.push(a[i].length);
  }
  return arr;
}
