function solution(hp) {
    let a = parseInt(hp/5)
    let b = hp%5
    let c = parseInt(b/3)
    let d = b%3
    let e = parseInt(d/1)
    let f = a+c+e
    return f;
}