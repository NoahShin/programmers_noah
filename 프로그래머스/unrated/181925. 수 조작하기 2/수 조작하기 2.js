function solution(numLog) {
    let result = "";
    numLog.reduce((acc, cur, idx) => {
        
        switch (cur - numLog[idx - 1]) {
                
            case 1:
                result += "w";
                break;
            case 10:
                result += "d";
                break;
            case -1:
                result += "s";
                break;
            case -10 :
                result += "a";
                break;
        }
    })
    return result;
}