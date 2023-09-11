function solution(a, b) {
    const gcd = getGCD(a,b)
    
    let giyak = b / gcd
    while(giyak % 2 === 0){
        giyak /= 2
    }

    while(giyak % 5 === 0){
        giyak /= 5
    }

    return giyak === 1 ? 1 : 2
    
}

let getGCD = (num1, num2) => {
    let gcd;

    for(let i=1; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
}
