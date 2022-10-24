function solution(money) {
    return [(money/5500)|0, money - 5500*((money/5500)|0)];
}