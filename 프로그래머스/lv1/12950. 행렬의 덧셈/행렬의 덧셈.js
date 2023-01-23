function solution(arr1, arr2) {
    let res =[];
    arr1.forEach((el,idx) => {
        res.push(el.map((val, elIdx) => val+ arr2[idx][elIdx]))
    })
    return res
}