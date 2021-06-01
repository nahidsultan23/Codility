// Codility Score: 100%

let A = [4, 3, 2, 1, 5, 9, 7, 8, 10, 6];
let B = [0, 1, 0, 1, 0, 1, 1, 1, 0, 1];

eat = (C, D, aliveFish, currentUpstream, firstDownstreamPoint) => {
    // Start from C[aliveFish - 1] to firstDownstreamPoint and eat the small fish

    for(j=(aliveFish - 1); j>=firstDownstreamPoint; j--) {
        if(C[j] > currentUpstream) {
            // Downstream fish wins. Upstream fish gets eaten. End the loop.

            break;
        }
        else {
            // Upstream fish wins. The downstream fish gets eaten.

            C.pop();
            D.pop();

            aliveFish--;

            if(j === firstDownstreamPoint) {
                // Only one downstream fish was alive and it got eaten.

                firstDownstreamPoint = "no record";

                C.push(currentUpstream);
                D.push(0);

                aliveFish++;
            }
        }
    }

    return {
        C: C,
        D: D,
        aliveFish: aliveFish,
        firstDownstreamPoint: firstDownstreamPoint
    }
}

function solution(A, B) {
    let arrayLength = A.length;
    let C = [];
    let D = [];
    let aliveFish = 0;
    let firstDownstreamPoint = "no record";

    for(i=0; i<arrayLength; i++) {
        if(B[i]) {
            // Downstream fish. Just add to the array.

            C.push(A[i]);
            D.push(B[i]);

            aliveFish++;

            if(firstDownstreamPoint === "no record") {
                firstDownstreamPoint = aliveFish - 1;
            }
        }
        else {
            // Upstream fish. Check if there is any downstream fish to eat.

            if(firstDownstreamPoint === "no record") {
                // No fish to eat. Just add to the array.

                C.push(A[i]);
                D.push(B[i]);

                aliveFish++;
            }
            else {
                // There are downstream fish. Start eating.

                let P = eat(C, D, aliveFish, A[i], firstDownstreamPoint);
            
                C = P.C;
                D = P.D;
                aliveFish = P.aliveFish;
                firstDownstreamPoint = P.firstDownstreamPoint;
            }
        }
    }

    return aliveFish;
}

console.log(solution(A, B));