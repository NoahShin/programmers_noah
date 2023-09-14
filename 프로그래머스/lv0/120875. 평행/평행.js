function solution(dots) {
    let arr = [];
  const [[x1,y1], [x2,y2], [x3,y3],[x4,y4]] = dots;
  let line12 = (y2-y1) / (x2-x1)
  let line34 = (y4-y3) / (x4-x3)
  let line23 = (y3-y2) / (x3-x2)
  let line14 = (y4-y1) / (x4-x1)
  
  return (line12 == line34 || line23 == line14) ? 1 : 0;
}