function solution(arr, divisor) {
    let tmp = arr.sort((a,b) => a-b);
    let res = tmp.filter(i => !(i % divisor))
    return res.length ? res : [-1]
    
}