function solution(my_string, queries) {
  let arr = [...my_string]
    queries.forEach(([s,e]) => {
      
        const middle = arr.slice(s,e+1).reverse().join('') // 다시 넣을 것
        const first = arr.slice(0,s).join('')
        const last = arr.slice(e+1).join('')
        arr = [...first,...middle,...last]
    })
  return arr.join('')
}

// 그래,,, splice 를 썼어야했어

// function solution(my_string, queries) {
//     let str = my_string.split('');
//   queries.forEach(([start, end]) => {
//     const changeStr = str.slice(start, end + 1);
//     str.splice(start, changeStr.length, ...changeStr.reverse());
//   });
//   return str.join('');
// }