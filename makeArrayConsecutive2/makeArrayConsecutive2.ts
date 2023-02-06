export function makeArrayConsecutive2(statues: number[]): number {
    const sortedArray = statues.sort((a: number, b: number) => a - b);

    const minValue = sortedArray[0];
    const maxValue = sortedArray[sortedArray.length - 1];

    let nrMissingValues = 0;

    for (let index = minValue; index <= maxValue; index++) {
        if (sortedArray.indexOf(index) === -1) {
            nrMissingValues += 1;
        }
    }
    return nrMissingValues;
}

// console.log(makeArrayConsecutive2([6, 2, 3, 8]));
