function solution(n, control) {
    [...control].map((item) => {
        switch(item) {
            case('w'):
                n++
                break;
            case('s'):
                n--
                break;
            case('d'):
                n += 10
                break;
            case('a'):
                n -= 10
                break;
        }
      
    })
  return n;
}

// const operations = {
//   w: (n) => n + 1,
//   s: (n) => n - 1,
//   d: (n) => n + 10,
//   a: (n) => n - 10,
// };

// function solution(n, control) {
//   return [...control].reduce((prev, op) => operations[op](prev), n);
// }