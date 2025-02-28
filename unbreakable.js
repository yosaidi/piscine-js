const split = (str,sep) => {
    let result = [];
    let temp = ""; 
    let sepLength = sep.length;
    let strLength = str.length

    if (strLength === 0) {
        return [''];
    };
    
    if (sepLength==0){
        for (let i = 0 ; i < strLength ; i++){
            result.push(str[i]);
        };
        return result;
    };

 
    for (let i =0 ; i< strLength ; i++){
        if (str.slice(i,i+sepLength) === sep){
            result.push(temp);
            temp = "";
            i += sepLength-1;
        } else {
            temp += str[i];
        };
    };

    
        if (temp){

            result.push(temp);
        };

        if (str.slice(strLength - sepLength) === sep) {
            result.push('');
        }
        return result;
};

const join = (arr,sep = ',') => {
    if (arr.length===0){
        return ""
    }
    let result = "";
    for (let i = 0 ; i< arr.length ; i ++) {
        if (i === arr.length-1){
            result += arr[i];
            continue;
        };
        result += arr[i] + sep;
    };

    return result;
};


console.log(split('', 'Riad'), ['']) 