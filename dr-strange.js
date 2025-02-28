const addWeek = (date) => {

    const myweek = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        "secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
        "secondFriday", "secondSaturday", "secondSunday"
    ];
    const epoch = new Date('0001-01-01');
    const differenceinMS = date - epoch;
    const differenceinDays = Math.floor(differenceinMS / (1000 * 60 * 60 * 24));
    const myday = differenceinDays % 14;

    return myweek[myday];

};


const timeTravel = ({ date, hour, minute, second }) => {

    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);

    return date;
};

