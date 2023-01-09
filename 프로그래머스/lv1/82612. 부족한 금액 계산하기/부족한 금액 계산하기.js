function solution(price, money, count) {
    let answer = 0;
    while(count) {
        answer += price*count
        count--
    }
    if (answer > money) {
        return answer - money
    } else return 0
}