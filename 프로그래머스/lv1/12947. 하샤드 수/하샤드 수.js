function solution(x) {
    let sum = [...x.toString()].reduce((a,c) => ~~a + ~~c, 0);
    return x % sum ? false : true
}