function solution(n) {
    let i = 1;
    let arr = [];
    while (i <= n / 2) {
        if (!(n % i)) {
            arr.push(i)
        }
        i++
    }
    return [...arr, n].reduce((acc, cur) => acc += cur, 0)
    
   
}