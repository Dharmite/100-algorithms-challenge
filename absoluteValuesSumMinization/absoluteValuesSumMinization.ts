export function absoluteValuesSumMinimization(a: number[]): number {
    const arrayLength = a.length;
    const isOdd = arrayLength % 2 !== 0;
    const index = isOdd ? Math.floor(arrayLength / 2) : arrayLength / 2 - 1;
    return a[index];
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
