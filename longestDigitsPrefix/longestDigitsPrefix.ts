export function longestDigitsPrefix(inputString: string): string {
    const regex = /^[1-9]+/gi;
    const digitMatches = inputString.match(regex);

    return digitMatches?.[0] || '';
}

console.log(longestDigitsPrefix('123aa1'));
