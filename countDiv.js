// Codility score 100%

let A = 16;
let B = 17;
let K = 7;

function solution(A, B, K) {
    let totalNumbers = 0;

    let firstDivisible = A / K;
    let secondDivisible = B / K;

    if(firstDivisible) {
        if(firstDivisible < 1) {
            firstDivisible = 1;
        }
        else {
            if(!Number.isInteger(firstDivisible)) {
                firstDivisible = parseInt(firstDivisible) + 1;
            }
        }
    }

    if(secondDivisible) {
        if(secondDivisible < 1) {
            secondDivisible = 1;
        }
        else {
            if(!Number.isInteger(secondDivisible)) {
                secondDivisible = parseInt(secondDivisible);
            }
        }
    }

    if((firstDivisible * K) <= B) {
        totalNumbers = secondDivisible - firstDivisible + 1;
    }

    return totalNumbers;
}

console.log(solution(A, B, K));