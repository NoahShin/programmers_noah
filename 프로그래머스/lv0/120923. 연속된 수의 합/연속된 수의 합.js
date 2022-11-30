function solution(num, total) {
    let startNum = 0 // 초반 [0~num]의 배열을 생성
    let sum = new Array(num).fill(0).map((a,i) => i).reduce((a,b) => a+b, 0)
    // 배열이 total과 같아질 때까지 반복
    while(sum !== total) {
        if(sum < total) {
            startNum++ // 현재 배열의 합이 total보다 작다면 +1
        } else {
            startNum--  // 크다면 -1
        }
        // 변경된 startNum에 따른 배열의 합 계산
      answer = new Array(num).fill(0).map((a,i) => i+startNum)
        sum = answer.reduce((a,b) => a+b, 0)
    }
    return new Array(num).fill(0).map((a,i) => i+startNum)
}