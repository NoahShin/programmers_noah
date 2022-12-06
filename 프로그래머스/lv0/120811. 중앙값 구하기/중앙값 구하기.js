function solution(array) {
    var answer = 0;
  const a = array.sort(compareNumbers)
  const len = array.length
  const ban = (len -1) / 2 
  answer = array[ban]
    return answer;
}

// solution([9, -1, 0]		)



function compareNumbers(a, b) {
  return a - b;
}