export function arrayPreviousLess(items: number[]): number[] {
    const newArray = [];
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        const prevElements = items.slice(0, index).reverse();
        const minValue = Math.min(...prevElements);
        const prevElement = items[index - 1];

        if (element <= minValue) {
            newArray.push(-1);
        } else {
            newArray.push(prevElement);
        }
    }
    return newArray;
}

// console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
