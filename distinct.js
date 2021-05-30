// Codility score 100%

let A = [2, 1, 1, 2, 3, 1];

function solution(A) {
    let B = [];
    let count = 0;

    for(i=0; i<A.length; i++) {
        if(!A[i] && !B[0]) {
            B[0] = "zero";
            count++;
        }
        else if(!B[A[i]]) {
            B[A[i]] = A[i];
            count++;
        }
    }

    return count;
}

console.log(solution(A));