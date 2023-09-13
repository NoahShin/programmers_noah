function solution(a, b, c, d) {
    const arr = [a,b,c,d]

    if (a==b && b==c && c==d) return 1111*a
  
    const set = new Set(arr)
    if ([...set].length == 4) {
      return [...set].sort((a,b) => a-b)[0]
    }
    
    const result = arr.reduce((acc,cur)=> {
    acc.set(cur, (acc.get(cur)||0) +1) ;
    return acc;
    },new Map());
  
    const two = [...result].filter((x) => x[1] == 2)
    if (two.length == 2) {
      let p = two[0][0]
      let q = two[1][0]
      return (p+q) * Math.abs(p-q)
    }
  
   const one = [...result].filter((x) => x[1] == 1)

   if (one.length == 2) {
     let q = one[0][0]
     let r = one[1][0]
     return q * r
   }
  
      for (const [key, value] of result) {
    if (value === 3) return (10 * key + one[0][0])**2
    }
    
    return result;
}