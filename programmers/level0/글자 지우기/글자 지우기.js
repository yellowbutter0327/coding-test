function solution(my_string, indices) {
  let arr = [...my_string];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!indices.includes(i)) {
      arr2.push(arr[i]);
    }
  }

  return arr2.join("");
}
