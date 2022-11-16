function solution(i, j, k) {
    const arr = []
    for (let s = i; s <= j; s++) {
        arr.push(s)
    }
    return arr.join('').split('').filter(item=> item == k).length
}