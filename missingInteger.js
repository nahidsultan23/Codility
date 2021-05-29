// Codility score 100%

let A = [4, 1, 3, 2, 5];

function solution(A) {
    let lengthOfTheArray = A.length;
    let array = [];
    let permutation = 0;

    for(i=0; i<lengthOfTheArray; i++) {
        if(array[A[i]]) {
            break;
        }
        
        array[A[i]] = A[i];
    }

    for(i=1; i<=lengthOfTheArray; i++) {
        if(!array[i]) {
            break;
        }
        else if(i === lengthOfTheArray) {
            permutation = 1;
        }
    }

    return permutation;
}

console.log(solution(A));