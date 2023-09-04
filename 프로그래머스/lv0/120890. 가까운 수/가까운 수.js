function solution(array, n) {
  let result = array[0];

  for (let i = 1; i < array.length; i++) {
    const temp = array[i];
    const currentDifference = Math.abs(n - temp);
    const resultDifference = Math.abs(n - result);

    if (
      currentDifference < resultDifference ||
      (currentDifference === resultDifference && temp < result)
    ) {
      result = temp;
    }
  }

  return result;

}

// function solution(array, n) {
//     array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

//     return array[0];
// }

// function solution(array2, n) {
//     var array = [...array2].sort()
//     var cal = array.map(v => Math.abs(v-n)) //요소에서 n뺀것을 절대값으로 표시
//     var cal2 = Math.min(...cal) //제일 가까운수의 값
//     var cal3 = cal.indexOf(cal2) //제일 가까운수의 인덱스

//     return array[cal3];
// }
