let X = 1;
let A = [1];

// Codility score 100%

function solution(X, A) {
    let B = [];
    let missingPositions = X;
    let result = -1;

    for(i=0; i<A.length; i++) {
        if(!B[A[i]]) {
            B[A[i]] = A[i];
            missingPositions--;

            if(!missingPositions) {
                result = i;
                break;
            }
        }
    }

    return result;
}

console.log(solution(X, A));