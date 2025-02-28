const sameAmount = (str , rgx1 , rgx2) => {
    const regex1 = str.match(new RegExp(rgx1, 'g')) || [];
    const regex2 = str.match(new RegExp(rgx2, 'g')) || [];
    


    return regex1.length === regex2.length
};

