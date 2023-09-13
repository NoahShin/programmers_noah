function solution(polynomial) {
    var answer = '';
    let xx = 0;
    let number = 0;
    const split = polynomial.split('+')
    
    split.forEach((x) => {
      x = x.trim()
      if (x.includes('x')) {
        x = x.replace('x','')
        if (x == '') xx++;
        else xx += Number(x)
      }
       else {
        number += Number(x)
      }
      
    } )
  
  
  let coe = xx == 1 ? 'x' : `${xx}x`
  
  if (xx && number) return `${coe} + ${number}`
  if (!xx) return `${number}`;
  else if (!number) return `${coe}`
}
