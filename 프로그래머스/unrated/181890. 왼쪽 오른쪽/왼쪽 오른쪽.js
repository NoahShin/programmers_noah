function solution(str_list) {
  const left = str_list.findIndex((x) => x == 'l')   
  const right = str_list.findIndex((x) => x == 'r')
  
  for (const a of str_list) {
      
   if (a == 'l') {
       return str_list.slice(0, str_list.indexOf(a))
       break;
   } else if (a == 'r') {
       return str_list.slice(str_list.indexOf(a) +1)
       break;
   }    
  }
  return [];
}

// function solution(str_list) {
//   const left = str_list.findIndex((x) => x == 'l')   
//   const right = str_list.findIndex((x) => x == 'r')
//   console.log(left, right)
  
//   if (left === -1 && right === -1) return [];
//   if (left === -1 && right >= 0) {
//       if (!right) return [];
//       return str_list.slice(right)
//   }
//   if (right == -1 && left >= 0) {
      
//       if (!left) return [];
//       return str_list.slice(0, left)
//   }    

//   if (left < right && right > 0 && left > 0) {
//       if (!left) return [];
//       return str_list.slice(0, left)
//   }
//   if (right < left && right > 0 && left > 0) {
//       if (!right) return [];
//       return str_list.slice(right)
//   }
    
  
  
// }