function solution(arr, delete_list) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!delete_list.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
}
