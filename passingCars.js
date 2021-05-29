// Codility score 100%

A = [0, 1, 0, 1, 1];

function solution(A) {
    let movingEastCars = 0;
    let movingWestCars = 0;

    let pairsOfPassingCars = 0;

    for(i=0; i<A.length; i++) {
        if(A[i]) {
            movingWestCars++;
        }
        else {
            movingEastCars++;
        }
    }

    if(movingEastCars && movingWestCars) {
        for(i=0; i<(A.length - 1); i++) {
            if(A[i]) {
                // Car going to west

                movingWestCars--;

                if(!movingWestCars) {
                    break;
                }
            }
            else {
                // Car going to east. Check west cars

                movingEastCars--;

                pairsOfPassingCars += movingWestCars;

                if(!movingEastCars) {
                    break;
                }
            }

            if(pairsOfPassingCars > 1000000000) {
                pairsOfPassingCars = -1;
                break;
            }
        }
    }

    return pairsOfPassingCars;
}

console.log(solution(A));