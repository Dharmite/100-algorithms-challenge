export function firstDigit(inputString: string): string {
    const matches = inputString.match(/\d/gi);
    return matches[0];
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
