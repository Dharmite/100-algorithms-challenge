export function alphabetSubsequence(s: string): boolean {
    const letters = s.toLocaleLowerCase().split('');
    for (let index = 0; index < letters.length - 1; index++) {
        const element = letters[index];
        const nextElement = letters[index + 1];

        if (element >= nextElement) {
            return false;
        }
    }

    return true;
}

// console.log(alphabetSubsequence('zab'));
// console.log(alphabetSubsequence('effg'));
// console.log(alphabetSubsequence('cdce'));
// console.log(alphabetSubsequence('ace'));
// console.log(alphabetSubsequence('bxz'));
