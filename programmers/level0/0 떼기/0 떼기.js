function solution(n_str) {
  let arr = [...n_str];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "0") {
      arr = arr.slice(i + 1);
      break;
    }
  }
  return arr.join("");
}
