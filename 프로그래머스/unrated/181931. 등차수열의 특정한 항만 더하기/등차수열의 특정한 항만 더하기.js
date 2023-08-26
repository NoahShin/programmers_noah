function solution(a, d, included) {
    let ans = 0;
    included.filter((x,idx) => {
        if (x) {
            ans += (d*idx +a)
        }
    })
    return ans
    
}