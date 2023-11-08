function solution(absolutes, signs) {
    const aa = absolutes.map((item, idx) => signs[idx] === false ? -item : item)
    
    const sum = aa.reduce((acc, cur) => {
  return acc + cur
}, 0);
    return sum

}