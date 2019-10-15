const now = require("performance-now");

module.exports = (func, decimals = 3) => {
    const start = now();
    const result = func();
    const end = now();

    console.log(`Execution took ${(end-start).toFixed(decimals)} milliseconds`);
    return result;
};