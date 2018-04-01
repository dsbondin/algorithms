function uniqueCountSubstring(S) {
    let len = S.length
    let count = len;
    for (let i = 0; i < len; i++) {
        for (let j = i + 2; j <= len; j++) {
            let string = S.slice(i, j)
            if (string.length === 2 && string[0] !== string[1]) {
                count += 2;
            } else {
                count += uni(string)
            }
        }
    }
    return count;
}

function uni(string) {
    let hash = {};
    let len = string.length
    for (let i = 0; i < len; i++) {
        if (!hash[string[i]]) {
            hash[string[i]] = 1;
        } else {
            hash[string[i]]++;
        }
    }
    return Object.values(hash).filter(n => n === 1).length
}

uniqueCountSubstring('COMPLEXITY')

// => 220
