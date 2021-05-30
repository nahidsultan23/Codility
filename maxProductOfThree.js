// Codility score 100%

A = [-3, 1, 2, -2, 5, 6];

function solution(A) {
    A.sort((a, b) => (a - b));

    let multiple1 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];

    // Two minus can become plus
    let multiple2 = A[A.length - 1] * A[0] * A[1];

    let maxProduct = (multiple1 > multiple2) ? multiple1 : multiple2;

    return maxProduct;
}

console.log(solution(A));