
const pyramid = (str, n) => {
    if (n <= 0) {
        return '';
    }
    let result = "";
    var space = " ";
    for (let i = 1 ; i <= n ; i++){
        result += space.repeat((n-i)* str.length);
        for (let j = 1 ; j < 2 * i ; j++){
            result += str;
        }
        i!=n ? result += '\n' : result += '';
    };
    return result;
};

console.log(pyramid("{}", 12));
