function fold(arr, f, accum = arr[0]) {
    for (let i = 0; i < arr.length; i++) {
        console.log(accum, arr[i])
        accum = f(accum, arr[i])
    };
    return accum;
};

