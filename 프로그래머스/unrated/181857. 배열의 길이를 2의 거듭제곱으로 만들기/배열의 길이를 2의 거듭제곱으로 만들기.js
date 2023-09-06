function solution(arr) {
    const arrLength = arr.length;

    // 주어진 배열의 길이가 이미 2의 정수 거듭제곱이라면 그대로 반환
    if ((arrLength & (arrLength - 1)) === 0) {
        return arr;
    }

    // 2의 정수 거듭제곱으로 만들기 위해 필요한 0의 개수 계산
    const nextPowerOf2 = Math.pow(2, Math.ceil(Math.log2(arrLength)));
    const numOfZerosToAdd = nextPowerOf2 - arrLength;

    // 필요한 개수만큼 0을 배열 뒤에 추가하여 반환
    const result = [...arr]; // 기존 배열을 변경하지 않기 위해 복사
    for (let i = 0; i < numOfZerosToAdd; i++) {
        result.push(0);
    }

    return result;
}