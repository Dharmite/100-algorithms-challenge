export function almostIncreasingSequence(sequence: number[]): boolean {
    let counter = 0;
    for (let index = 0; index < sequence.length - 1; index++) {
        const element = sequence[index];
        const nextElement = sequence[index + 1];
        const elementAfter = sequence[index + 2];

        if (element >= nextElement) {
            counter++;
            if (element >= elementAfter) {
                return false;
            }
        }
    }

    return counter <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
