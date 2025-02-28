const repeat = (str,n) => 
    n > 0 
    ? str + repeat(str,n-1)
    : "";




console.log(repeat("hi",3));