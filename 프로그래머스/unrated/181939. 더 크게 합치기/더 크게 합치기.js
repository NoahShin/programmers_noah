function solution(a, b) {
    const ab = Number(String(a) + String(b))
    const ba = Number(String(b) + String(a))
    return ab === ba ? ab : Math.max(ab,ba) 
}

// 나 바본가?? 
// function solution(a, b) {
//     return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
// }