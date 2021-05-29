// Codility score 100%

A = [3, 8, 9, 7, 6];
K = 100;

function solution(A, K) {
    let lengthOfArray = A.length;
    let numberOfRotation = K % lengthOfArray;
    let rotatedArray = [];

    if(numberOfRotation === 0) {
        rotatedArray = A;
    }
    else {
        for(i=0; i<lengthOfArray; i++) {
            let rotatedArrayPosition = K + i;

            if(rotatedArrayPosition >= lengthOfArray) {
                rotatedArrayPosition = rotatedArrayPosition % lengthOfArray;
            }
            
            rotatedArray[rotatedArrayPosition] = A[i];
        }
    }

    return rotatedArray;
}

console.log(solution(A, K));