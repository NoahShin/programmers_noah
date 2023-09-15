function solution(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n%i === 1 ) {
            arr.push(i)
        }
    }
    const ans  = arr.sort((a,b) => a-b)[0]
    return ans;
}