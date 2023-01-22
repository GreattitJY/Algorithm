function solution(t, p) {
    let res = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
        let num = t.slice(i,p.length + i);
        if (num <= p) res++
    }
    return res
}