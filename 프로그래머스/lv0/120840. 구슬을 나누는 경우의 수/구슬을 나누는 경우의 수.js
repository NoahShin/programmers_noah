function f(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * f(num - 1));
  }
}

function solution(balls, share) {
    const min = balls-share
    return Math.round(f(balls) / (Math.ceil(f(min)) * f(share)))
}