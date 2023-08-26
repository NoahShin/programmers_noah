function solution(str1, str2) {
    let a = '';
    for(let i =0; i<str1.length; i++) {
        a += str1[i]
        a += str2[i]
    }
    return a;
}

// 난 바보였습니다...str1 이랑 str2 랑 길이가 같은 걸 생각하면 이렇게 map 돌려도 됬는데..

// function solution(str1, str2) {
//     return [...str1].map((x, idx)=> x+str2[idx]).join("");
// }