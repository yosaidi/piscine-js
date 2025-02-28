const indexOf= (arr,value, start = 0) => {
    let index = -1;
    if (start<0) start = arr.length + start;

  
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return index;
};

const lastIndexOf =(arr,value , start =arr.length-1) => {
  
   
    if (start<0) start = arr.length + start;

    for (let i = start ; i>=0 ;i--){
         if (arr[i]===value)return i;
        
    }
    return -1
};


const includes = (arr,value,start =0) => {
    let found = false ;
    if (start<0) start = arr.length + start;

    for (let i = start; i < arr.length; i++){
        if (arr[i] === value) found = true;
    };
    return found
};

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2) )