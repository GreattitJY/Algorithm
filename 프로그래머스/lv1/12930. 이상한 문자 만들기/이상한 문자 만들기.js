function solution(s) {
    let str = s.split(" ");
    return str.map(arr => [...arr].map((val, idx) => {
        if (idx % 2 === 0) return val.toUpperCase();
        return val.toLowerCase();
    }).join("")).join(" ")
}