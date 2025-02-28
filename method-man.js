const words = (str) => str.split(' ');
const sentence = (arr) =>  arr.join(' ');
const yell = (str) => str.toUpperCase() ;
const whisper = (str) =>  '*'+str.toLowerCase()+'*';
const capitalize = (str) => String(str).charAt(0).toUpperCase()+ String(str).slice(1).toLowerCase() ;


console.log(words("hello world"));
console.log(sentence(["i'm",10]));
console.log(yell("hi"));
console.log(whisper("hi"));
console.log(capitalize("hi"));