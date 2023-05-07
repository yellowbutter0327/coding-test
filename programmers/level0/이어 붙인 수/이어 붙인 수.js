function solution(num_list) {
  let num = [];
  let num2 = [];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      num.push(num_list[i]);
    } else {
      num2.push(num_list[i]);
    }
  }
  return Number(num.join("").toString()) + Number(num2.join("").toString());
}
