function solution(n, k) {
    let arr = [];
    for(let i = 0; i <= n; i++){
        if (i % k === 0 && i) {
            arr.push(i)
        }
    }
    return arr;
}