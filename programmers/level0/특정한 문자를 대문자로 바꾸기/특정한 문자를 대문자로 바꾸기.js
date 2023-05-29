function solution(my_string, alp) {
  let arr = [];
  let arr2 = [...my_string];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === alp) {
      arr.push(arr2[i].toUpperCase());
    } else {
      arr.push(arr2[i]);
    }
  }
  return arr.join("");
}
