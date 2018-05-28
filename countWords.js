// count words in camelcase string

function countWords(s) {
    let upperCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i].toLocaleUpperCase() === s[i]) upperCount++;
    }
    return upperCount + 1;
}

console.log(countWords('letMeSpeakFromMyHeart'));
// 6
