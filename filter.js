function filter(arr, f) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr)) result.push(arr[i]);
    };

    return result;
};

function reject(arr, f) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!f(arr[i], i, arr)) result.push(arr[i]);
    };

    return result;
};


function partition(arr, f) {
    let result = [];
    result.push(filter(arr, f), reject(arr, f));
    return result;
};