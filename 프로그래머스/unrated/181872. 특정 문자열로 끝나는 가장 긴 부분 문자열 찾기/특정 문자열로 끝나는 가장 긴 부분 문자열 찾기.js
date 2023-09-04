function solution(myString, pat) {
    let str = ''
    let arr = [];
    for (let i =0; i < myString.length; i++) {
       str  = str + myString[i]
       if (str.endsWith(pat)) {
           arr.push(str)
       } 
    }
    return arr.pop()
    
    
}