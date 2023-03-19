function solution(n) {
    if (n === 0) return 0;
    let res = 1;
    for (let i = 2; i<= n; i++) {
        if (n % i === 0) res += i; 
    }
    return res
}