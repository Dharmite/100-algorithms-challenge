export function adjacentElementsProduct(inputArray: number[]): number {
    let largestValue = inputArray[0] * inputArray[1]; // largestValue in the beginning is the product of the first two value

    for (let index = 1; index < inputArray.length - 1; index++) {
        const element = inputArray[index];
        const nextElement = inputArray[index + 1];
        const product = element * nextElement;

        if (product > largestValue) {
            largestValue = product;
        }
    }

    return largestValue;
}

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
