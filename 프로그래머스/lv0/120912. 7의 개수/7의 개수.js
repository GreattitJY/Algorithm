function solution(array) {
    let res = 0
    array.join('').split('').filter(i => {
    if (i == 7) {
        res++;
    }
})
    return res
}