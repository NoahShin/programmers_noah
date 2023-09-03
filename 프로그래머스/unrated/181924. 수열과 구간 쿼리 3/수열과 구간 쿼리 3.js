function switchValues(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function solution(arr, queries) {
    
    queries.map((x) => {
        switchValues(arr, x[0], x[1])
    })
    return arr;
}

// 구조분해 할당 바로
// function solution(arr, queries) {
//     queries.forEach( ([a,b]) => {
//         [arr[a],arr[b]] = [arr[b],arr[a]];
//     })
//     return arr;
// }