const sign = (num) => {
    if (num>0)  { 
  return 1 ;
    } else if (num<0){
  return -1 ;
    }else if (num ==0){
        return 0 ;
    }
} ;

const sameSign = (num1, num2) => {
   return (num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0) || (num1 === 0 && num2 === 0);
}
console.log(sign(1));
console.log(sign(-1));
console.log(sign(0));
console.log(sameSign(5,4));
console.log(sameSign(5,-2));
console.log(sameSign(-5,-2));
console.log(sameSign(-1,0));
console.log(sameSign(0,231));