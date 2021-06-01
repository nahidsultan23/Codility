// Codility Score: 100%; Correctness: 100%, Performance: 75%

A = [23171, 21011, 21123, 21366, 21013, 21367];

function solution(A) {
    let maxProfit = 0;
    let arrayLength = A.length;

    let maxElementFromRight = A[arrayLength - 1];

    let maxElementArrayFromRight = [];

    for(i=0; i<arrayLength; i++) {
        if(A[arrayLength - (i + 1)] > maxElementFromRight) {
            maxElementFromRight = A[arrayLength - (i + 1)];
        }

        maxElementArrayFromRight.push(maxElementFromRight);
    }

    for(i=0; i<(arrayLength - 1); i++) {
        let buyRate = A[i];
        let sellRate = maxElementArrayFromRight[arrayLength - (i + 2)];

        let profit = sellRate - buyRate;

        if(profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}

console.log(solution(A));