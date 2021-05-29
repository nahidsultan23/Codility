// Codility score 100%

A = [1, 3, 5, 4, 2];

function solution(A) {
    let solution = 0;

    if(A.length) {
        let B = [];
    
        for(i=0; i<A.length; i++) {
            B[A[i]] = A[i];
        }

        for(i=1; i<B.length; i++) {
            if(!B[i]) {
                solution = i;
                break;
            }
        }

        if(!solution) {
            solution = B.length;
        }
    }
    else {
        solution = 1;
    }

    return solution;
}

console.log(solution(A));