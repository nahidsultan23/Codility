// Codility Score: 100%

A = [10, 2, 5, 1, 8, 20];

function solution(A) {
    A.sort((a, b) => (a - b));

    let tripletFound = 0;

    for(i=0; i<(A.length - 2); i++) {
        let p = A[i];
        let q = A[i + 1];
        let r = A[i + 2];

        if(((p + q) > r) && ((q + r) > p) && ((r + p) > q)) {
            tripletFound = 1;
            break;
        }
    }

    return tripletFound;
}

console.log(solution(A));