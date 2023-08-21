function solution(num_list) {
   const mult =  num_list.reduce((prev, cur) => {
        return prev * cur
    }) 
   
   const sumAndPower = num_list.reduce((prev,cur) => {
      return prev + cur
   }) ** 2
   
   return (mult < sumAndPower) ? 1 :0
    
}