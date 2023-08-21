function solution(myString, pat) {
    
    const ans = myString.replaceAll('A','C').replaceAll('B','A').replaceAll('C','B')
    
    if (ans.includes(pat)) return 1
    else return 0
    
}