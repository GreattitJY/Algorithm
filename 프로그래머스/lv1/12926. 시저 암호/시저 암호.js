function solution(s, n) {
 return [...s].map(el => {
        if (el === ' ') return ' ';
        let elMove = el.charCodeAt() + n;
        let elValid = el.toLowerCase().charCodeAt() + n;
        if (elValid > 122) return String.fromCharCode(elMove - 26)
        else return String.fromCharCode(elMove);
    }).join('')
}