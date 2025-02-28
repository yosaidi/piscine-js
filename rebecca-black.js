const isFriday = (date) => date.getDay() === 5;

const isWeekend = (date) => date.getDay() === 6 || date.getDay() === 1;

const isLeapYear = (date) => date.getFullYear() % 4 === 0;

const isLastDayOfMonth = (date) => date.getDate() === new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
