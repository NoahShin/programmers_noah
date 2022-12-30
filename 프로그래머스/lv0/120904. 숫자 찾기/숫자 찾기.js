function solution(num, k) {
    var answer = 0;
    const arr = num.toString().split('')
    for (let i = 0 ; i < arr.length; i++) {
      if (k == Number(arr[i])) {
        return i+1
      }
    }
    return -1
}