const chunk = (arr ,n) => {
    let result = [];
    let temp = [];
    let count = 0 ;

    for (let i = 0 ; i < arr.length ; i ++) {
        temp.push(arr[i]);
        count++
        if (count===n){
            result.push(temp);
            temp = [];
            count ===0
        }
    };
    
    if (temp){
        result.push(temp);
    };
    
    return result;
};

console.log(chunk(['a', 'b', 'c', 'd'], 2))