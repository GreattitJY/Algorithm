function solution(s) {
    const res = [];
    const map = new Map();
    [...s].map((v,i) => {
        if (!map.has(v)) res.push(-1)
        else res.push(i - map.get(v))
        map.set(v,i)
    })
    return res
}