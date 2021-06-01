// Codility Score: 100%

let N = 24;

function solution(N) {
    let numberOfFactors = 0;

    if(N === 1) {
        numberOfFactors = 1;
    }
    else if(N <= 3) {
        numberOfFactors = 2;
    }
    else if(N > 3) {
        numberOfFactors = 2;

        for(i=2; (i * i)<N; i++) {
            if(!(N % i)) {
                numberOfFactors += 2;
            }
        }

        if(i * i === N) {
            numberOfFactors += 1;
        }
    }

    return numberOfFactors;
}

console.log(solution(N));