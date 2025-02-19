const obj = Object.freeze({  
    str : "String" ,   
    bool : true,    
    num : 1,  
    undef : undefined,
});

const escapeStr = `
single quote : '
double quote : "
slash : /
backslash : \\
backticks : \`
`;   

const arr = Object.freeze([4, '2']);

const nested = Object.freeze({
   arr : Object.freeze([4,undefined,'2']),
   obj : Object.freeze({
    str :"string",
    num : 1,
    bool : true,
   }),
});




console.log(obj);
console.log(arr);
console.log(escapeStr);
console.log(nested);