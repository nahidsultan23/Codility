// Codility Score: 100%

let A = [-5, -3, -1, 0, 3, 6];

function solution(A) {
    let count = 0;
    let arrayLength = A.length;
    let B = [];

    for(i=0; i<arrayLength; i++) {
        let element = A[i];
        if(element < 0) {
            element *= -1;
        }

        if(!B[element]) {
            B[element] = 1;
            count++;
        }
    }

    return count;
}

console.log(solution(A));