const isPositive = (num) => num>0;

const abs = (num) => (num<0? num*-1:num);


console.log(isPositive(0));
console.log(isPositive(-5));
console.log(abs(5));
console.log(abs(-5));