function map(arr, f) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) result.push(f(arr[i], i, arr))
    };

    return result;
};

function flatMap(arr, f) {
    return arr.reduce((accum, current, index, arr) => accum.concat(f(current, index, arr)), []);
};


console.log(flatMap([1, 2, 3], (x) => [x, x + 1]));

