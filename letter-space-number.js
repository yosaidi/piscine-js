const letterSpaceNumber = (str) => {
    let result = [];
    const match = str.match(/[a-zA-Z]\s\d(?!\d|[a-zA-Z])/g);
    if (match) {
        result = match
    };
    return result;
};

