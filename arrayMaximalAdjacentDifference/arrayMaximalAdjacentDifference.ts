export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDifference = Math.abs(inputArray[0] - inputArray[1]);
    for (let index = 1; index < inputArray.length - 1; index++) {
        const element = inputArray[index];
        const nextElement = inputArray[index + 1];
        const difference = Math.abs(nextElement - element);

        if (difference > maxDifference) {
            maxDifference = difference;
        }
    }

    return maxDifference;
}

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
// console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));
