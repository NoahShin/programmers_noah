function solution(my_string) {
    let answer = Array(52).fill(0);
    [...my_string].forEach((str, idx) => {
        const charCode = my_string.charCodeAt(idx);
        // 대문자 A-Z 인 경우
        if (charCode >= 65 && charCode <= 90) answer[charCode - 65] += 1;
        // 소문자 a-z 인 경우
        else if (charCode >= 97 && charCode <= 122) answer[charCode - 97 + 26] += 1;
    });

    return answer;
}