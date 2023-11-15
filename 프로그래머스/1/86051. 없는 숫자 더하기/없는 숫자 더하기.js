function solution(numbers) {
    const missingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return missingNumbers.reduce((sum, num) => (!numbers.includes(num) ? sum + num : sum), 0);
}