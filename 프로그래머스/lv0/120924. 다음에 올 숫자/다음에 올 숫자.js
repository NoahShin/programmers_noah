function solution(common) {
    var answer = 0;
    // return answer;
    const gongCha1 = common[1] - common[0]
    const gongCha2 = common[2] - common[1]
    const gongBi = common[1] / common[0]
  
    if (gongCha2 == gongCha1) {
      return common[common.length-1] + gongCha1 
    } else return common[common.length-1] * gongBi
}