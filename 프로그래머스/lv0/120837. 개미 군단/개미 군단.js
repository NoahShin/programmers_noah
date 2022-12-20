function solution(hp) {
    var answer = 0;
  let three =0;
  let count = 0;
    let five = parseInt(hp / 5)
    answer += five
  count = five * 5
    let leftOver = hp % 5 // 4
    if (leftOver) {
       three = parseInt(leftOver / 3)
    }
  count = count + three * 3
     answer += three
    let leftOver2 = hp - count
  answer += leftOver2

    return answer;
}