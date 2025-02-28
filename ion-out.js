const ionOut = (str) => {
    const pattern = /\b\w*tion\w*\b/g;
    const match = str.match(pattern) || [];

    return match.map( word => word.replace('ion',''));
};

