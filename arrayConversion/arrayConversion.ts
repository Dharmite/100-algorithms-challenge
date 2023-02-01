export function arrayConversion(inputArray: number[]): number {
    const sums = [];
    const products = [];

    const sumValues = (prev: number, curr: number): number => prev + curr;

    for (let index = 0; index < inputArray.length - 1; index += 2) {
        const element = inputArray[index];
        const nextElement = inputArray[index + 1];
        sums.push(element + nextElement);
    }

    for (let index = 0; index < sums.length - 1; index += 2) {
        const element = sums[index];
        const nextElement = sums[index + 1];
        products.push(element * nextElement);
    }

    return products.reduce(sumValues, 0);
}

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
