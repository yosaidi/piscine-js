const flat = (arr, depth =1) => {
    return arr.reduce((accum , current)=> {
        if (Array.isArray(current)&& depth>0){
            accum.push(...flat(current, depth - 1));
        } else {
            accum.push(current);
        };
    return accum
    }, []);
};

console.log( flat([1, [2]]))