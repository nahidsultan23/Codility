// Codility score 77%; Correctness: 100%, Performance: 50%

A = [9, 3, 9, 3, 9, 7, 9];

function solution(A) {
    let B = [];
    let solution = A[0];

    if(A.length > 1) {
        for(i=0; i<A.length; i++) {
            let theNumber = A[i];

            if(B[theNumber]) {
                B[theNumber] += 1;
            }
            else {
                B[theNumber] = 1;
            }
        }

        for(i=0; i<B.length; i++) {
            if(B[i]) {
                if(B[i] % 2) {
                    solution = i;
                    break;
                }
            }
        }
    }

    return solution;
}

console.log(solution(A));