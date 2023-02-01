export function alphabeticShift(inputString: string): string {
    const normaliseString = inputString.toLocaleLowerCase();
    const minValue = 'a'.charCodeAt(0);
    const maxValue = 'z'.charCodeAt(0);

    return normaliseString
        .split('')
        .map((letter) => {
            if (letter.charCodeAt(0) === maxValue) {
                return String.fromCharCode(minValue);
            }

            return String.fromCharCode(letter.charCodeAt(0) + 1);
        })
        .join('');
}

// console.log(alphabeticShift('crazy'));
