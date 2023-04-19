function solution(numbers) {
    let code1 = numbers.sort(function(f,s){return f-s});
     let a =code1[code1.length-1]*code1[code1.length-2]
     return a;
    }