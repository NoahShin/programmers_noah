function solution(arr, k) {
    var answer = [];
    answer = arr.map((item) => {
        if (k % 2 !== 0) return item * k 
        else return item + k
    })
    return answer;
}