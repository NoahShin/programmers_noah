function solution(k, score) {
  
	let answer = [];
  let MJ = [];
let realMj = [];
  for (let i=0; i < score.length; i++) {
		
    MJ.push(score[i])
    // 명예의 전당에 넣고
		if (i == 0 ) {
      answer.push(score[i])
      continue
    } else if (i < k) {
      	MJ.sort((a, b) => b - a)
				// console.log(MJ, 'sorted')
				const min  = MJ[MJ.length - 1]
				answer.push(min)
    } else {
       
      	MJ.sort((a, b) => b - a)
				// console.log(MJ, 'sorted')
        
        for (let j = 0; j < k;j++) {
            realMj.push(MJ[j])
        }
			
				// console.log(realMj, 'realMj')
		const min  = realMj[realMj.length - 1]
				// console.log(min, 'min')
      	answer.push(min)
        MJ.pop()
    }

  }
   // console.log(MJ)
  return answer;
}
