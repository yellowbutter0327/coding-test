function solution(s) {
  let arr = s.split(" ");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i].split("").map((a, i) => {
      if (i % 2 === 0) {
        newArr.push(a.toUpperCase());
      } else {
        newArr.push(a.toLowerCase());
      }
    });
    newArr.push(" ");
  }
  newArr.pop();
  let result = newArr.join("");
  return result;
}
