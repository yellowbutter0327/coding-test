function solution(num_list, n) {
  let arr = num_list.slice(n, num_list.length);
  let arr2 = num_list.slice(0, n);
  return arr.concat(arr2);
}
