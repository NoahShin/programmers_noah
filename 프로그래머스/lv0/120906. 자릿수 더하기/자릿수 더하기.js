function solution(n) {
    var answer = 0;
    n = n.toString()
    // console.log(n)
    n = n.split('')
    // console.log(n)
    // answer = n.map(x => answer = answer + Number(x))
  answer = n.reduce((accumulator, value) => {
  return accumulator + Number(value);
}, 0);
    return answer;
}