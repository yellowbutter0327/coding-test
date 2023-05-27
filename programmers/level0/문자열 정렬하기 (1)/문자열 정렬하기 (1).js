function solution(my_string) {
  let arr = [];
  let string = [...my_string];
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
      arr.push(Number(string[i]));
    }
  }
  return arr.sort((a, b) => a - b);
}
