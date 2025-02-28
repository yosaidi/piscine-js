const nasa = (n) => {
    let result = "";
   for ( let i = 1 ; i <= n ; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            result += "NASA ";
        } else if (i % 3 === 0) {
            result += "NA ";
        } else if (i % 5 === 0) {
            result += "SA ";
        } else {
            result += i.toString()+" ";
        };
        if (i === n) {
            result = result.slice(0, result.length-1)
        }
   }; 
   return result;
};

console.log(nasa(15))