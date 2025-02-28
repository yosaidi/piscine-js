const RNA = (str) => {
  
    if (str.length === 0) {
        return '';
    };

    let result = ""; 
    let rna = {
        "T" : "A",
        "A" : "U",
        "G" : "C",
        "C" : "G"
    };

    for (let char of str) {
       result += rna[char];
    };

    return result;
};
const DNA = (str) => {
  
    if (str.length === 0) {
        return '';
    };

    let result = ""; 
    let dna = {
        "A" : "T",
        "U" : "A",
        "C" : "G",
        "G" : "C"
    };

    for (let char of str) {
       result += dna[char];
    };

    return result;
};