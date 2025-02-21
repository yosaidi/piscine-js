
const integerPart = (n) => {
    let sign = n < 0 ? -1 : 1; // Handle negative numbers
    n = Math.abs(n);
    
    let result = 0;
    while (n >= 1) {
        n -= 1; // Subtract 1 until the number becomes less than 1
        result++;
    }
    
    return sign * result;
};


const decimalPart = (n) => {
    return n - integerPart(n);
}




const trunc = (n) => integerPart(n);


const round = (n) => {
    const decimal = decimalPart(n);
   
    return decimal < 0.5 ? integerPart(n) : integerPart(n) + (n < 0 ? -1 : 1);
};



const nums = [3.7, -3.7, 3.1, -3.1];
console.log(nums.map(round));
