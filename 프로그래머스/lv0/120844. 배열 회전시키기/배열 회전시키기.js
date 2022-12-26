function solution(numbers, direction) {
    var answer = [];
  console.log(numbers)
  if ( direction == 'right') {
    for (let i = 1; i < numbers.length; i++) {
      const a = numbers.shift()
      numbers.push(a)
    }
  } else {
    for (let i = -1; i < numbers.length; i++) {
      const a = numbers.shift()
      numbers.push(a)
    }
  }
  console.log(numbers)
    return numbers;
}