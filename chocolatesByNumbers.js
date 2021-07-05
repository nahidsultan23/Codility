// Codility Score: 100%

let N = 7;
let M = 13;

function solution(N, M) {
    let numberOfEatenChocolate = 0;
    let currentPosition = 0;

    if(M > N) {
        let A = [];
        A[0] = 1;
        numberOfEatenChocolate = 1;

        for(i=0; ; i++) {
            let remainder = (currentPosition + M) % N;
            
            currentPosition = remainder;

            if(A[currentPosition]) {
                break;
            }
            else {
                A[currentPosition] = 1;
                numberOfEatenChocolate++;
            }
        }
    }
    else if(M === N) {
        numberOfEatenChocolate = 1;
    }
    else {
        for(i=0; ; i++) {
            let remaining = N - currentPosition; // should return 23
    
            if(remaining % M) {
                let numberOfChocolatesThisLoop = parseInt(remaining / M) + 1;
                currentPosition = (currentPosition + M * (numberOfChocolatesThisLoop - 1) + M) % N;
                
                numberOfEatenChocolate += numberOfChocolatesThisLoop;
            }
            else {
                // Repeatation found. Break the loop.
    
                let numberOfChocolatesThisLoop = (remaining / M);
                
                numberOfEatenChocolate += numberOfChocolatesThisLoop;
    
                break;
            }
        }
    }

    return numberOfEatenChocolate;
}

console.log(solution(N, M));