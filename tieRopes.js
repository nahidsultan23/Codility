// Codility Score: 100%

let K = 4;
let A = [1, 2, 3, 4, 1, 1, 3];

function solution(K, A) {
    let arrayLength = A.length;
    let sum = 0;
    let result = 0;

    for (let i = 0; i < arrayLength; i++) {
        sum += A[i];

        if (sum >= K) {
            sum = 0;
            result++;
        }
    }

    return result;
}

console.log(solution(K, A));
