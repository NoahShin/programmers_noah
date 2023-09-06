function solution(myString, pat) {
    var answer = 0;

    for (let i=0; i<myString.length; i++) {
        const same = myString.slice(i, i + pat.length);

        if (same.length !== pat.length) break;
        if (same === pat) answer += 1;
    }

    return answer;
}