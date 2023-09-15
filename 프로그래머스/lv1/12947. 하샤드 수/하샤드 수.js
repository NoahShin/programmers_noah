// function solution(x) {
//     const aa = String(x).split('').reduce((acc,cur)=> acc += Number(cur),0)
//     return (x % aa == 0) ? true : false
 
// }

function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}