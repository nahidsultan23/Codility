// Codility score 100%

A = [9, 3, 9, 3, 9, 7, 9];

function solution(A) {
    let result = 0;
    let arrayLength = A.length;
    let B = [];
    let positionList = [];

    for (let i = 0; i < arrayLength; i++) {
        if (B[A[i]]) {
            B[A[i]]++;
        } else {
            B[A[i]] = 1;
            positionList.push(A[i]);
        }
    }

    arrayLength = positionList.length;

    for (let i = 0; i < arrayLength; i++) {
        let position = positionList[i];

        if (B[position] % 2) {
            result = position;
            break;
        }
    }

    return result;
}

console.log(solution(A));
