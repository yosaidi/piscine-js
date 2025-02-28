const triangle = (str,n) => {
   if (n<=0){
    return '';
   }
   return (n > 1 ? triangle(str, n - 1) + "\n" : '') + str.repeat(n);
}; 

console.log(triangle("*",5))