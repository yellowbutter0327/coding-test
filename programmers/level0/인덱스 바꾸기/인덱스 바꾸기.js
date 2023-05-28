function solution(my_string, num1, num2) {
  let arr =
    my_string.slice(0, num1) +
    my_string.slice(num2, num2 + 1) +
    my_string.slice(num1 + 1, num2) +
    my_string.slice(num1, num1 + 1) +
    my_string.slice(num2 + 1, my_string.length);
  return arr;
}

//다른 사람의 풀이
function solution(my_string, num1, num2) {
  let arr = my_string.split("");
  let newArr = [...arr];

  newArr[num1] = arr[num2];
  newArr[num2] = arr[num1];

  return newArr.join("");
}
