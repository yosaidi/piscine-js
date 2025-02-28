

const matchCron = (cron, date) => {
    
    let timePerIndex = {
        0: date.getMinutes(),
        1: date.getHours(),
        2: date.getDate(),
        3: date.getMonth()+1,
        4: date.getDay()
    };
    let pattern = /[0-9]/g
    let cronParts = cron.split(' ').join('');
    cronParts = [...cronParts.matchAll(pattern)];
    for (let i = 0 ; i< cronParts.length; i++) {
        if (timePerIndex[cronParts[i].index] !== Number(cronParts[i][0])) return false;
        
    }
    return true
};


console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00'))
)
