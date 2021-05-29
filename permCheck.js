// Codility score 100%

A = [4, 1, 3, 2, 6];

function solution(A) {
    let lengthOfArray = A.length;
    let B = [];
    let isPermutation = 1;

    for(i=0; i<lengthOfArray; i++) {
        if(B[A[i]]) {
            isPermutation = 0;
            break;
        }
        else {
            B[A[i]] = A[i];
        }
    }

    if(isPermutation) {
        for(i=1; i<=lengthOfArray; i++) {
            if(!B[i]) {
                isPermutation = 0;
                break;
            }
        }
    }

    return isPermutation;
}

console.log(solution(A));