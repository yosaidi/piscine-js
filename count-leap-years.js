
const countLeapYears = (date) => {
    let year = date.getFullYear()
    let count = 0;
    for (let i = 1 ; i < year; i++) {
       count += isLeapYear(i)?1:0
    }
    return count
};


const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(countLeapYears(new Date('1664-08-09'))) //403