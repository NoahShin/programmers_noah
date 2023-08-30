function solution(num_list, n) {
    // 빈 배열 생성
  const result = [];
    
  while(num_list.length > 0) {
    let tempArray;
    // splice() 메서드를 사용하여 특정 길이만큼 배열을 분리함
    tempArray = num_list.splice(0, n);
    // 빈 배열에 특정 길이만큼 분리된 배열을 추가
    result.push(tempArray);
  }
    
  return result;
    
}

// 이렇게 했어도 되는데...
// function solution(num_list, n) {
//     var answer = [];

//     while(num_list.length) {
//         answer.push(num_list.splice(0,n));
//     }

//     return answer;
// }