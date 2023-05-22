function solution(rsp) {
  let arr = [...rsp];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "2") {
      arr2.push("0");
    } else if (arr[i] === "0") {
      arr2.push("5");
    } else if (arr[i] === "5") {
      arr2.push("2");
    }
  }
  return arr2.join("");
}
