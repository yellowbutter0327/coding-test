function solution(num_list) {
  let arr = 0;
  let arr2 = 0;
  for (let i = 0; i < num_list.length; i += 2) {
    arr += num_list[i];
  }
  for (let j = 1; j < num_list.length; j += 2) {
    arr2 += num_list[j];
  }
  if (arr > arr2) {
    return arr;
  } else return arr2;
}
