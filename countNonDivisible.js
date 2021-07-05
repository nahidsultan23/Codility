// Codility Score: 77%; Correctness: 100%, Performance: 50%

let A = [3, 1, 2, 3, 6];

function solution(A) {
    let arrayLength = A.length;
    let B = [];
    let positions = [];
    let C = [];

    for (let i = 0; i < arrayLength; i++) {
        if (B[A[i]]) {
            B[A[i]]++;
        } else {
            B[A[i]] = 1;
            positions.push(A[i]);
        }
    }

    positions.sort((a, b) => a - b);
    let numberOfPositions = positions.length;

    for (let i = 0; i < arrayLength; i++) {
        let toBeCompared = A[i];

        let numberOfNonDivisors = 0;
        let totalNumbers = arrayLength - B[toBeCompared];

        for (let j = 0; j < numberOfPositions; j++) {
            let position = positions[j];

            if (position <= toBeCompared / 2) {
                if (toBeCompared % position) {
                    // this is a non divisor
                    // check how many elements are there in B in this position

                    numberOfNonDivisors += B[position];
                }

                totalNumbers -= B[position];
            } else if (position > toBeCompared / 2) {
                // after this, the positions are not divisors

                numberOfNonDivisors += totalNumbers;
                break;
            }
        }

        C.push(numberOfNonDivisors);
    }

    return C;
}

console.log(solution(A));
