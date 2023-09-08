function solution(str_list) {
  for (const a of str_list) {
   if (a == 'l') {
       return str_list.slice(0, str_list.indexOf(a))
   } else if (a == 'r') {
       return str_list.slice(str_list.indexOf(a) +1)
   }    
  }
  return [];
}
