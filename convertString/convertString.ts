export function convertString(s: string, t: string): boolean {
    const chars = s.split('');
    let word = t.split('');

    for (const char of chars) {
        const index = word.indexOf(char);
        if (index === 0) word.splice(index, 1);
        if (word.length === 0) return true;
    }

    return false;
}

export function convertStringV2(s: string, t: string): boolean {
    const chars = s.split('');
    const word = t.split('');

    for (let i = 0; i < chars.length; i++) {
        const element = chars[i];

        if (element === word[0]) {
            word.shift();
        }

        if (word.length === 0) return true;
    }

    return false;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
