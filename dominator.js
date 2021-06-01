// Codility Score: 100%

let A = [3, 4, 3, 2, 3, -1, 3, 3];

function solution(A) {
    let dominatorPosition = -1;
    let arrayLength = A.length;
    let B = [];
    let maxOccurrance = 0;
    let occurrancePosition = 0;

    for(i=0; i<arrayLength; i++) {
        if(B[A[i]]) {
            B[A[i]]++;
            
            if(B[A[i]] > maxOccurrance) {
                maxOccurrance = B[A[i]];
                occurrancePosition = i;
            }
        }
        else {
            B[A[i]] = 1;

            if(!maxOccurrance) {
                maxOccurrance = 1;
                occurrancePosition = i;
            }
        }
    }

    if(maxOccurrance > (arrayLength / 2)) {
        dominatorPosition = occurrancePosition;
    }

    return dominatorPosition;
}

console.log(solution(A));