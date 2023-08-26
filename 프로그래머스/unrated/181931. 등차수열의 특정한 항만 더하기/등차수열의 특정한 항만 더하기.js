function solution(a, d, included) {
    let ans = 0;
    included.filter((x,idx) => {
        if (x) {
            ans += (d*idx +a)
        }
    })
    return ans
    
}

// 그래.. reduce 를 끝까지 썼었어야했어..
// function solution(a, d, included) {
//     return included.reduce((acc, flag, i) => {
//         return flag ? acc + a + d * i : acc
//     }, 0)
// }