function solution(num_list) {
  let array1 = [];
  let array2 = [];

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      array1.push(i);
    }
  }
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 1) {
      array2.push(i);
    }
  }

  let answer = [array1.length, array2.length];
  return answer;
}

//해결책2
function solution(num_list) {
  let arrNum = num_list.filter(function (a) {
    return a % 2 === 0;
  });

  return [arrNum.length, num_list.length - arrNum.length];
}
