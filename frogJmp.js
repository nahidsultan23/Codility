// Codility score 100%

let X = 10;
let Y = 41;
let D = 30999999999999999999999999999;

function solution(X, Y, D) {
    let result = 0;

    let distance = Y - X;

    if(distance > 0) {
        let divisor = distance / D;

        if(Number.isInteger(divisor)) {
            result = divisor;
        }
        else {
            if(divisor > 1) {
                result = parseInt(divisor) + 1;
            }
            else {
                result = 1;
            }
        }
    }

    return result;
}

console.log(solution(X, Y, D));