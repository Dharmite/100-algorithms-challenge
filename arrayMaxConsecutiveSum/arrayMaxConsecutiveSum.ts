export function arrayMaxConsecutiveSum(
    inputArray: number[],
    k: number
): number {
    let maxValue;

    for (let index = 0; index <= inputArray.length - k; index++) {
        let targetIndex = index + k;
        let currIndex = index;
        let result = 0;

        while (currIndex < targetIndex) {
            result += inputArray[currIndex];
            currIndex++;
        }

        if (!maxValue || result > maxValue) {
            maxValue = result;
        }
    }

    return maxValue;
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
