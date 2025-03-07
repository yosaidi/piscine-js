function fusion(...obj) {
    let result = {};

    obj.forEach(object => {
        for (let key in object) {
            if (Array.isArray(object[key]) && Array.isArray(result[key])) {
                result[key] = result[key].concat(object[key]);
            } else if (typeof object[key] === 'string' && typeof result[key] === 'string') {
                result[key] = result[key] + ' ' + object[key];
            } else if (typeof object[key] === 'number' && typeof result[key] === 'number') {
                result[key] = result[key] + object[key];
            } else if (
                typeof object[key] === 'object' &&
                typeof result[key] === 'object' &&
                !Array.isArray(object[key]) &&
                !Array.isArray(result[key])
            ) {
                result[key] = fusion(result[key], object[key]);
            } else {
                result[key] = object[key];
            }
        }
    });

    return result;
}
