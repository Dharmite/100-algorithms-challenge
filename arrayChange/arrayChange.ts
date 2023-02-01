export function arrayChange(inputArray: number[]): number {
    let result = 0;
    const copyArray = [...inputArray];
    for (let index = 0; index < copyArray.length - 1; index++) {
        let element = copyArray[index];
        let nextElement = copyArray[index + 1];

        if (nextElement <= element) {
            while (nextElement <= element) {
                result++;
                nextElement++;
            }
        }

        copyArray[index + 1] = nextElement;
    }
    return result;
}

console.log(arrayChange([1, 1, 1]));
