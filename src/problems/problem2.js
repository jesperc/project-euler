const timer = require('../util/timer');

const problem2 = () => {
    let sum = 0;
    let current = 1;
    let previous = 1;
    let temp = 0;
    while (current < 4000000) {
        if (current % 2 === 0) {
            sum += current;
        }
        temp = current;
        current += previous;
        previous = temp;
    }
    return sum;
};

const result = timer(problem2);
console.log(result);