export function missingLetters(str: string): string {
    const chars = str.split('');
    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

    for (let index = 0; index < chars.length; index++) {
        const element = chars[index];

        if (element !== alphabet[index]) {
            return alphabet[index];
        }
    }

    return undefined;
}

console.log(missingLetters('bce'));
console.log(missingLetters('abce'));
console.log(missingLetters('abcdefghjklmno'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));
