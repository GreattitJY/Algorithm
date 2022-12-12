function solution(my_string) {
    return my_string.split(/[a-z|A-Z]/g).filter(i => +i).reduce((a,c) => parseInt(a)+parseInt(c),0)
}