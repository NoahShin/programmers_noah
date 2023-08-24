// function solution(n) {
//     let ans = 0;
//     if (n % 2 !== 0)  {
//         for (let i=1;i <=n; i += 2) {
//             ans += i
//         }
//     }
//     if (n % 2 === 0)  {
//         for (let i=2;i <=n; i += 2) {
            
//             ans += i
//         }
//     }
//     return ans
// }

// 등차수열
function solution(n) {
    let ans = 0;
    if (n % 2 !== 0)  {
        return (1+n)/2 * ((n+1)/2)
    }
    if (n % 2 === 0)  {
        for (let i=2;i <=n; i += 2) {
            
            ans += i**2
        }
    }
    return ans
}