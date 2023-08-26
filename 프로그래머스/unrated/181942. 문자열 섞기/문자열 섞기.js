function solution(str1, str2) {
    let a = '';
    for(let i =0; i<str1.length; i++) {
        a += str1[i]
        a += str2[i]
    }
    return a;
}