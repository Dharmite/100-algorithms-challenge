export function sortByHeight(a: number[]): number[] {
    const orderedValues = a.filter((value) => value > 0).sort((a, b) => a - b);

    for (let index = 0; index < a.length; index++) {
        const element = a[index];

        if (element > 0) {
            a[index] = orderedValues[0];
            orderedValues.shift();
        }
    }

    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
