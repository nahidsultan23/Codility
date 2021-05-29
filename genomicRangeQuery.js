// Codility score 62%; Correctness: 100%, Performance: 0%

let S = "CAGCCTA";
let P = [2, 5, 0];
let Q = [4, 5, 6];

convertStringToNumber = (string) => {
    let value = 0;

    switch(string) {
        case "A":
            value = 1;
            break;
        case "C":
            value = 2;
            break;
        case "G":
            value = 3;
            break;
        case "T":
            value = 4;
            break;
        default:
            value = 0;
    }

    return value;
}

function solution(S, P, Q) {
    let numberValueDNA = [];

    for(i=0; i<S.length; i++) {
        numberValueDNA.push(convertStringToNumber(S[i]));
    }

    let minimumFactor = [];

    for(i=0; i<P.length; i++) {
        let startPosition = P[i];
        let endPosition = Q[i];

        let minimumValue = 4;

        for(j=startPosition; j<=endPosition; j++) {
            let value = numberValueDNA[j];

            if(value < minimumValue) {
                minimumValue = value;
            }
        }

        minimumFactor.push(minimumValue);
    }

    return minimumFactor;
}

console.log(solution(S, P, Q));