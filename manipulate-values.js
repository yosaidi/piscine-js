function filterValues(obj, callback) {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => callback(value))
    );
}

function mapValues(obj, callback) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, callback(value)])
    );
}

function reduceValues(obj, callback, initialValue = 0) {
    return Object.values(obj).reduce(callback, initialValue);
}
