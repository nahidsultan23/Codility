// Codility Score: 100%;

A = [23171, 21011, 21123, 21366, 21013, 21367];

function solution(A) {
    let arrayLength = A.length;
    let maxProfit = 0;

    let min = A[0];
    let profit = 0;

    for (let i = 0; i < arrayLength; i++) {
        profit = A[i] - min;

        if (profit > maxProfit) {
            maxProfit = profit;
        }

        if (A[i] < min) {
            min = A[i];
        }
    }

    return maxProfit;
}

console.log(solution(A));
