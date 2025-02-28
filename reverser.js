const reverseArr = (arr) => {
    let n = arr.length;
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++){
        swapped = false;
        for (j = 0; j < n - i - 1; j++){
            
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            
        }
        if (swapped == false)
        break;
    }
    return arr;
} ;

const reverseStr = (str) => {
   let arr = str.split('');
   let n = arr.length;
   str = "";
   for (let i = n-1;i>=0 ; i--){
    str += arr[i]
   };
   return str 
};

const reverse = (elem) =>{
    var result = "";
    if (typeof elem === 'string') {
        result = reverseStr(elem);
    } else if (Array.isArray(elem)){
        result = reverseArr(elem);
    };
    return result;
};
