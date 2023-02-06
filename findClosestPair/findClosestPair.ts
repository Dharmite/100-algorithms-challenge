export function findClosestPair(numbers: number[], sum: number): number {
    let distance = -1;

    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];

        for (let index2 = index + 1; index2 < numbers.length; index2++) {
            const element2 = numbers[index2];

            const absDiff = Math.abs(index - index2);

            if (element + element2 === sum) {
                if (distance === -1 || absDiff < distance) {
                    distance = absDiff;
                }
            }
        }
    }

    return distance;
}

// console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
// console.log(findClosestPair([2, 3, 7], 8));
