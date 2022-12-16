function solution(sides) {
    var answer = 2;
    let max = Math.max(...sides)
    console.log(max)
    let idx = sides.indexOf(max)
    console.log(idx)
    sides.splice(idx, 1);
  console.log(sides)
let ret = sides.reduce((a, b) => a + b, 0);
  if (ret > max) {
    answer = 1 
  } 
    return answer;
}