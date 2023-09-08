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