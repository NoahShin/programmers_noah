function solution(denum1, num1, denum2, num2) {
    let answer = [];
    let newNum = 0; 
    let newDenum = 0;
    let gcd = 0;
 
        newNum = num1 * num2;
        denum1 = denum1 * num2;
        denum2 = denum2 * num1;
        newDenum = denum1 + denum2;
        gcd = getGCD(newNum,newDenum)
   
     
    
    
    return [newDenum/gcd, newNum/gcd];
}


let getGCD = (num1, num2) => {
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
}

