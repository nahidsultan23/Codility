// Codility score 77%; Correctness: 100%, Performance: 60%

let N = 5;
let A = [3, 4, 4, 6, 1, 4, 4];

function solution(N, A) {
    let counter = Array(N).fill(0);
    
    let maxNumber = 0;

    for(i=0; i<A.length; i++) {
        let number = A[i];

        if((number >= 1) && (number <= N)) {
            //increase 1

            counter[number - 1]++;

            if(counter[number - 1] > maxNumber) {
                maxNumber = counter[number - 1];
            }
        }
        else if(number === (N + 1)) {
            //max counter

            counter = Array(N).fill(maxNumber);
        }
    }

    return counter;
}

console.log(solution(N, A));