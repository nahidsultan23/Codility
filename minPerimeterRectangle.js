// Codility Score: 100%

let N = 30;

function solution(N) {
    let minPerimeter = 2 * (N + 1);
    let maxPossibleFactor = parseInt(Math.sqrt(N));

    for(i=2; i<=maxPossibleFactor; i++) {
        if(!(N % i)) {
            let anotherFactor = N / i;
            let perimeter = 2 * (i + anotherFactor);

            if(perimeter < minPerimeter) {
                minPerimeter = perimeter;
            }
        }
    }

    return minPerimeter;
}

console.log(solution(N));