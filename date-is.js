function isValid(date) {
    return date instanceof Date && !isNaN(date) || typeof date === 'number' && !isNaN(new Date(date));
};

function isAfter(date1, date2) {

    if (!isValid(date1) || !isValid(date2)) {
        return false;
    }


    const d1 = new Date(date1);
    const d2 = new Date(date2);


    return d1 > d2;
};

function isBefore(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) {
        return false;
    }

    return !isAfter(date1, date2);
};

function isFuture(date) {
    if (!isValid(date)) return false;


    return date.getTime() > Date.now()
};

function isPast(date) {
    if (!isValid(date)) return false;

    return !isFuture(date);

}
