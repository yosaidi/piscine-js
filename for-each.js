function forEach(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) f(arr[i], i, arr);
    };

    return undefined
}
