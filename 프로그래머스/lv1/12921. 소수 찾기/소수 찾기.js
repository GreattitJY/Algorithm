const isPrime = (num) => {
    for (let i = 2; i*i <= num; i++) {
        if( num % i === 0) return false
    }
    return true
}

function solution(n) {
    let res = 0;
    for (let i = 2; i <= n; i++) {
       if (isPrime(i)) res++;
    }
    return res
}