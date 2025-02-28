const decimalPart = (n) => n - trunc(n); 


const trunc = (n) => {
    let sign = n < 0 ? -1 : 1;
    let result = 0 ;
    n = Math.abs(n);
    if (n >= 68719476734){
        result = 68719476734
    }

    while (result <= n) {
        result ++;
    };
    result--
    return sign * result;
};

const floor = (n) => {
    let sign = n <= 0 ? -1 : 1;
    n = Math.abs(n);
    let result = trunc(n);
   
    if (sign < 0 && decimalPart(n) > 0) {
        result += 1;
    };

    result *= sign;

    return result === -0 ? 0 : result;
};

const ceil = (n) => {
    let sign = n < 0 ? -1 : 1;
    n = Math.abs(n);

    let result = trunc(n);

    if (sign > 0 && decimalPart(n) > 0) {
        result += 1;
    }

    result *= sign;

    return result === -0 ? 0 : result;
};


const round = (n) => {
    let sign = n <= 0 ? -1 : 1;
    let result = 0;
    n = Math.abs(n);

    if (decimalPart(n) >= 0.5) {
        result = trunc(n) + 1;
    } else {
        result = trunc(n);
    }
    
    result *= sign;

    return result === -0 ? 0 : result;
};


