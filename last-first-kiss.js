const first = (a) => a[0];
const last = (a) => a[a.length-1];
const kiss = (a) => [a[a.length-1],a[0]];

console.log(first("hello"));
console.log(first([1,2]));
console.log(last("hello"));
console.log(last([1,2]));
console.log(kiss("hello"));
console.log(kiss([1,2]));