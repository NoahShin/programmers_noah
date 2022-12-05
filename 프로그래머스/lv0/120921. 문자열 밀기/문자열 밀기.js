function solution(A, B) {
    let answer = 0;
    if(A == B) {
        return 0
    }
    for (let i = 0; i <= A.length; i++) {
      let last = A.slice(-1)
    let middle = A.slice(0,-1)
    console.log(last, 'last')
  console.log(middle, 'middle')
    const result = last + middle
    console.log(result)
   A = result
        answer++;
    if (result == B) {
      return answer
    }
    }

    return -1;
}