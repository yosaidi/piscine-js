
function firstDayWeek(week, year) {
    let date = new Date("01-01-0001");
    date.setFullYear(year, 0, (week * 7) - 6)

    while (date.getDay() !== 1 && date.getDate() !== 1) date.setDate(date.getDate() - 1);

    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    let yearStr = date.getFullYear().toString().padStart(4, '0');

    
    return `${day}-${month}-${yearStr}`;
}





