// function solution(arr, queries) {
//     return queries.reduce((acc, cur) => {
//         const copyArr = [...acc]
//         const [to, from, val] = cur
//         return copyArr.map((el, elIdx) => {
//             if(elIdx >= to && elIdx <= from) {
//                 if(elIdx%val === 0) return el+1
//             }
//             return el
//         })
//     }, arr)
// }

const solution=(a,q)=>q.length?solution(a.map((v,i)=>i>=q[0][0]&&i<=q[0][1]&&!(i%q[0][2])?v+1:v),q.slice(1)):a
