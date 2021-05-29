// Codility score 100%

let A = [3, 1, 2, 4, 3];

function solution(A) {
    let arrayLength = A.length;
    let smallestDifference = 0;

    let previousSum1 = 0;
    let previousSum2 = 0;

    for(p=1; p<arrayLength; p++) {
        let sum1 = 0;
        let sum2 = 0;

        if(p === 1) {
            for(i=0; i<p; i++) {
                sum1 += A[i];
            }
    
            for(i=p; i<arrayLength; i++) {
                sum2 += A[i];
            }

            previousSum1 = sum1;
            previousSum2 = sum2;
        }
        else {
            sum1 = previousSum1 + A[p - 1];
            sum2 = previousSum2 - A[p - 1];

            previousSum1 = sum1;
            previousSum2 = sum2;
        }

        let difference = sum1 - sum2;
        if(difference < 0) {
            difference *= -1;
        }

        if(p === 1) {
            smallestDifference = difference;
        }
        else if(difference < smallestDifference) {
            smallestDifference = difference;
        }
    }

    return smallestDifference;
}

console.log(solution(A));