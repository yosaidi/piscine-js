
const dayOfTheYear = (date) => {
    const start = new Date(date);
    start.setUTCFullYear(date.getUTCFullYear(), 0, 1);
    const difference = date - start;

    return Math.floor(difference / (1000 * 60 * 60 * 24)) + 1;
};

