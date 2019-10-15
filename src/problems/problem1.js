const timer = require('../util/timer');

const problem1 = () => {
    let sum = 0;
    for (let i = 0; i < 1000; ++i) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};

timer(problem1);