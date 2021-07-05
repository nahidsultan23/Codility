// Codility score 100%

let A = [3, 4, 4, 6, 1, 4, 4];
let N = 5;

function solution(N, A) {
    let B = [];
    let C = [];
    let initNumber = 0;
    let arrayLength = A.length;
    let maxNumber = 0;
    let result = [];
    let j = 0;

    B.push([]);
    C.push([]);

    for (let i = 0; i < arrayLength; i++) {
        let element = A[i];

        if (element > N) {
            j++;

            B.push([]);
            C.push([]);

            B[j][0] = maxNumber;

            initNumber = maxNumber;
        } else {
            if (B[j][element - 1]) {
                B[j][element - 1]++;
            } else {
                B[j][element - 1] = 1;
            }

            if (element < N) {
                if (B[j][element]) {
                    B[j][element]--;
                } else {
                    B[j][element] = -1;
                }
            }

            if (C[j][element - 1]) {
                C[j][element - 1]++;
            } else {
                C[j][element - 1] = 1;
            }

            if (initNumber + C[j][element - 1] > maxNumber) {
                maxNumber = initNumber + C[j][element - 1];
            }
        }
    }

    let sum = 0;

    for (let i = 0; i < N; i++) {
        if (B[j][i]) {
            sum += B[j][i];
        }

        result.push(sum);
    }

    return result;
}

console.log(solution(N, A));
