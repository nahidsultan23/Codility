// Codility score 100%

let N = 561892;

intToBinary = (number) => {
    let binaryNumberArray = [];
    for(i=0; ; i++) {
        let divisor = parseInt(number / 2);
        if(divisor === 0) {
            binaryNumberArray.push(1);
            break;
        }

        binaryNumberArray.push(number % 2);
        number = divisor;
    }

    let numberInBinary = "";

    for(i=(binaryNumberArray.length - 1); i>=0; i--) {
        numberInBinary += binaryNumberArray[i];
    }

    return numberInBinary;
}

function solution(N) {
    let binaryNumber = intToBinary(N);
    let count = 0;
    let maxCount = 0;
    let cluster = [];
    let j = 0;
    
    for(i=0; i<binaryNumber.length; i++) {
        if(Number(binaryNumber[i]) === 1) {
            if(i > 0) {
                if(count > maxCount) {
                    maxCount = count;
                }

                count = 0;
            }
            
            if(!cluster.length) {
                cluster.push([1]);
            }
            else {
                cluster[j].push(1) ;
                cluster.push([1]);
                j++;

                
            }
        }
        else {
            cluster[j].push(0);
            count++;
        }
    }

    return maxCount;
}

console.log(solution(N));