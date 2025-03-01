function adder(arr, initialValue = 0) {
    return arr.reduce((accum, current) => accum + current, initialValue);
};

function sumOrMul(arr, initialValue = 0) {
    const even = (n) => n % 2 === 0;
    return arr.reduce((accum, current) =>
        !even(current) ? accum + current : accum * current
        , initialValue);
};

function funcExec(arr, initialValue = 0) {
    return arr.reduce((accum, currentF) => currentF(accum), initialValue);
};