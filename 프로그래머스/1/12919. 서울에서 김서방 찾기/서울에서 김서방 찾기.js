function solution(seoul) {
    let idx1 = 0;
   seoul.filter((item, idx) => {
       if (item === "Kim") {
           idx1 = idx  
       }
   })
    return `김서방은 ${idx1}에 있다`
}