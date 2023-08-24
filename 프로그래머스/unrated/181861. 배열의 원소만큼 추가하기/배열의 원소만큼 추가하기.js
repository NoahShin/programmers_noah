// function solution(arr) {
//     var answer = [];
//     arr.map((x)=> {
//         for (let i =0; i < x; i++) {
//         answer.push(x)
//     }
//     })
//     return answer;
// }


// 더 좋은 다른 답...
function solution(arr) {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}