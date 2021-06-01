// Codility Score: 87%; Correctness: 100%, Performance: 75%

S = "{[()()]}";

function solution(S) {
    let properlyNested = 0;

    if(!S.length) {
        properlyNested = 1;
    }
    else if(S.length > 1) {
        if(!(S.length % 2)) {
            let counter = [];
            let notProperlyNested = 0;

            for(i=0; i<S.length; i++) {
                if(S[i] === "(") {
                    counter.push(1);
                }
                else if(S[i] === "{") {
                    counter.push(2);
                }
                else if(S[i] === "[") {
                    counter.push(3);
                }
                else if(S[i] === ")") {
                    let counterLength = counter.length;
                    let lastElement = counter[counterLength - 1];

                    if(lastElement === 1) {
                        counter.pop();
                    }
                    else {
                        notProperlyNested = 1;
                        break;
                    }
                }
                else if(S[i] === "}") {
                    let counterLength = counter.length;
                    let lastElement = counter[counterLength - 1];

                    if(lastElement === 2) {
                        counter.pop();
                    }
                    else {
                        notProperlyNested = 1;
                        break;
                    }
                }
                else {
                    let counterLength = counter.length;
                    let lastElement = counter[counterLength - 1];

                    if(lastElement === 3) {
                        counter.pop();
                    }
                    else {
                        notProperlyNested = 1;
                        break;
                    }
                }
            }

            if(!notProperlyNested) {
                if(!counter.length) {
                    properlyNested = 1;
                }
            }
        }
    }

    return properlyNested;
}

console.log(solution(S));