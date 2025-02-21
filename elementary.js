const multiply = (a,b) => {
  let absA = Math.abs(a);
  let absB = Math.abs(b);
  let result = 0;

  const multiplyhelper=(a,b )=> a>0? b+ multiplyhelper(a-1,b):0;

  result = multiplyhelper(absA,absB);

  return (a < 0 && b < 0) || (a > 0 && b > 0) ? result : -result

};

const divide = (a,b) => {
    if (Math.abs(a)<Math.abs(b)) return 0;

    let sign = (a>0) == (b>0) ;
    let r = 0;
    
    a= Math.abs(a);
    b= Math.abs(b);

    while (a>Math.abs(b))  {
     a-= b;
     r++;
    }

    return sign? r : - r ;

}; 

const modulo = (a, b) => a-multiply(b,divide(a,b)) ;



