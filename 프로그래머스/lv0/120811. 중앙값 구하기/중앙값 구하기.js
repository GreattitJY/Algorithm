function solution(array) {
    array.sort((a,b) => a-b)
    const idx = Math.ceil(array.length / 2) - 1

    return array[idx];
}