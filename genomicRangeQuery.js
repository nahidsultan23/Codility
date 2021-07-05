// Codility score 100%

let S = 'CAGCCTA';
let P = [2, 5, 0];
let Q = [4, 5, 6];

function solution(S, P, Q) {
    let A = [];
    let C = [];
    let G = [];

    let result = [];

    let length = S.length;

    for (let i = 0; i < length; i++) {
        if (S[i] === 'A') {
            A.push(i);
        } else if (S[i] === 'C') {
            C.push(i);
        } else if (S[i] === 'G') {
            G.push(i);
        }
    }

    let arrayLength = P.length;

    for (let i = 0; i < arrayLength; i++) {
        let start = P[i];
        let end = Q[i];

        let resultFound = false;

        for (let j = 0; j < A.length; j++) {
            if (A[j] > end) {
                break;
            } else if (A[j] >= start && A[j] <= end) {
                resultFound = true;

                result.push(1);

                break;
            }
        }

        if (!resultFound) {
            for (let j = 0; j < C.length; j++) {
                if (C[j] > end) {
                    break;
                } else if (C[j] >= start && C[j] <= end) {
                    resultFound = true;

                    result.push(2);

                    break;
                }
            }
        }

        if (!resultFound) {
            for (let j = 0; j < G.length; j++) {
                if (G[j] > end) {
                    break;
                } else if (G[j] >= start && G[j] <= end) {
                    resultFound = true;

                    result.push(3);

                    break;
                }
            }
        }

        if (!resultFound) {
            result.push(4);
        }
    }

    return result;
}

console.log(solution(S, P, Q));
