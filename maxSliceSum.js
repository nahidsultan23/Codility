// Codility Score: 100%

A = [3, 2, -6, 4, 0];

function solution(A) {
    let arrayLength = A.length;
    let sum = 0;
    let maxSum = 0;
    let maxValue = A[0];

    // Check up to which max element keep the sum greater than 0.
    // If the sum of a slice is less than 0, it cannot increase the other values. So, it can be dropped.
    // Before dropping, the max value got from this slice is recorded.

    for(i=0; i<arrayLength; i++) {
        sum += A[i];

        if(sum < 0) {
            sum = 0;
        }

        if(sum > maxSum) {
            maxSum = sum;
        }

        if(A[i] > maxValue) {
            maxValue = A[i];
        }
    }

    if(!maxSum) {
        maxSum = maxValue;
    }

    return maxSum;
}

console.log(solution(A));