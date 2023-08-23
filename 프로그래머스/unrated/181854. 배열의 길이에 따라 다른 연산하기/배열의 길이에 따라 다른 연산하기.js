function solution(arr, n) {
    var answer = [];
    if (arr.length % 2 === 0) {
        return arr.map((x, idx) => (idx % 2 !== 0) ? x + n : x)
    }
     else { 
        return arr.map((x, idx) => (idx % 2 === 0) ? x + n : x)
    }
    
}