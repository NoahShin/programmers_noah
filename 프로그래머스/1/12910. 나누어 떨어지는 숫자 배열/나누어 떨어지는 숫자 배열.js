function solution(arr, divisor) {
    const aa =  arr.filter((item) => item % divisor === 0).sort((a,b) => a-b); 
    return aa.length > 0 ? aa : [-1]
}