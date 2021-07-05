// Codility Score: 100%

S = '(()(())())';

function solution(S) {
    let stringLength = S.length;

    let A = [];
    let j = 0;

    let result = 0;
    let broke = false;

    if (!stringLength) {
        result = 1;
    } else if (!(stringLength % 2)) {
        for (let i = 0; i < stringLength; i++) {
            let bracket = S[i];

            if (bracket === '(') {
                A[j] = bracket;
                j++;
            } else {
                if (j > 0) {
                    if (A[j - 1] === '(') {
                        j--;
                    } else {
                        broke = true;
                        break;
                    }
                } else {
                    broke = true;
                    break;
                }
            }
        }

        if (!(broke || j)) {
            result = 1;
        }
    }

    return result;
}

console.log(solution(S));
