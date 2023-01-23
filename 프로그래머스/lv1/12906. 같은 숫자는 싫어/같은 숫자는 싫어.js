function solution(arr)
{
    let res = []
    res.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) continue;
        res.push(arr[i])
    }
    return res
}