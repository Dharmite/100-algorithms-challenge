export function flattenArray(arr: any[]): any[] {
    let newArray: any = [];

    for (const element of arr) {
        if (!Array.isArray(element)) {
            newArray.push(element);
        } else {
            newArray = [...newArray, ...flattenArray(element)];
        }
    }

    return newArray;
}

// console.log(flattenArray([[['a']], [['b']]]));
// console.log(flattenArray([1, [2], [3, [[4]]]]));
