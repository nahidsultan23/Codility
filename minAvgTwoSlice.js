// Codility score 50%; Correctness: 100%, Performance: 0%

let A = [4, 2, 2, 5, 1, 5, 8];

function solution(A) {
    let previousSumArray = [A[0]];
    let sum = A[0];
    let smallestAverage = 10000;
    let startingPosition = 0;

    for(q=1; q<A.length; q++) {
        sum += A[q]; 
        previousSumArray.push(sum);
        let average = sum / (q + 1);

        if(average < smallestAverage) {
            smallestAverage = average;
            startingPosition = 0;
        }
    }

    for(p=1; p<(A.length - 1); p++) {
        for(q=p+1; q<A.length; q++) {
            let sum = previousSumArray[q] - previousSumArray[p - 1];
            
            let average = sum / (q - p + 1);

            if(average < smallestAverage) {
                smallestAverage = average;
                startingPosition = p;
            }
        }
    }

    return startingPosition;
}

console.log(solution(A));