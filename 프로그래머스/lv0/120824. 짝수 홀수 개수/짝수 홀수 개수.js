const solution = arr => {
    let res = [];
    let even = 0
    let odd = 0
    
    arr.filter(n => {
        if (n & 1) {
            odd++;
        } else even++;
    })
    res.push(even)
    res.push(odd)
    return res
}