function solution(n) {
    let num = [...n.toString(3)].reverse().join('')
    return parseInt(num, 3)
}