function filterShortStateName(arr) {
    return arr.filter(item => item.length < 7);
};

function filterStartVowel(arr) {
    return arr.filter(item => /^[aeiou]/i.test(item));
};

function filter5Vowels(arr) {
    return arr.filter(item => item.match(/[aeiou]/gi).length >= 5);
};

function filter1DistinctVowel(arr) {
    return arr.filter(item => {
        const vowels = item.match(/[aeiou]/gi) || [];
        return new Set(vowels.map(v => v.toLowerCase())).size === 1;

    });
};

function multiFilter(arr) {
    return arr.filter(item =>
        item.capital.length >= 8 &&
        !(/^[aeiou]/i).test(item.name) &&
        /[aeiou]/i.test(item.tag) &&
        item.region.toLowerCase() !== 'south'
    );
};

