function solution(a, b) {
    if (a === b) return a;
    let arr = [a, b].sort((a,b) => a-b);
    let res = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        res += i;
    }
    return res
    
}