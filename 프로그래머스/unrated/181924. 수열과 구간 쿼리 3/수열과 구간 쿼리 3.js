function switchValues(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function solution(arr, queries) {
    
    queries.map((x) => {
        switchValues(arr, x[0], x[1])
    })
    return arr;
}