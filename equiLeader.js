// Codility Score: 100%

A = [4, 3, 4, 4, 4, 2];

function solution(A) {
    let arrayLength = A.length;
    let B = [];
    let C = [];
    let equiLeaderCount = 0;

    let fromLeftLeader = A[0];
    let fromLeftLeaderCount = 0;
    let fromLeftLeaderArray = [];

    let fromRightLeader = A[arrayLength - 1];
    let fromRightLeaderCount = 0;
    let fromRightLeaderArray = [];

    for(i=0; i<arrayLength; i++) {
        if(B[A[i]]) {
            B[A[i]]++;

            if(B[A[i]] > fromLeftLeaderCount) {
                fromLeftLeaderCount = B[A[i]];
                fromLeftLeader = A[i];
            }
        }
        else {
            B[A[i]] = 1;

            if(!fromLeftLeaderCount) {
                fromLeftLeaderCount = 1;
                fromLeftLeader = A[i];
            }
        }

        if(fromLeftLeaderCount > ((i + 1) / 2)) {
            fromLeftLeaderArray.push(fromLeftLeader);
        }
        else {
            fromLeftLeaderArray.push("none");
        }

        let elementPosition = arrayLength - (i + 1);

        if(C[A[elementPosition]]) {
            C[A[elementPosition]]++;

            if(C[A[elementPosition]] > fromRightLeaderCount) {
                fromRightLeaderCount = C[A[elementPosition]];
                fromRightLeader = A[elementPosition];
            }
        }
        else {
            C[A[elementPosition]] = 1;

            if(!fromRightLeaderCount) {
                fromRightLeaderCount = 1;
                fromRightLeader = A[elementPosition];
            }
        }

        if(fromRightLeaderCount > ((i + 1) / 2)) {
            fromRightLeaderArray.push(fromRightLeader);
        }
        else {
            fromRightLeaderArray.push("none");
        }
    }

    for(i=0; i<arrayLength; i++) {
        let rightArrayPosition = arrayLength - (i + 2);

        if((fromLeftLeaderArray[i] !== "none") && (fromRightLeaderArray[rightArrayPosition] !== "none")) {
            if(fromLeftLeaderArray[i] === fromRightLeaderArray[rightArrayPosition]) {
                equiLeaderCount++;
            }
        }
    }

    return equiLeaderCount;
}

console.log(solution(A));