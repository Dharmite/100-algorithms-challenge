export function arrayReplace(
    inputArray: number[],
    elemToReplace: number,
    substitutionElem: number
): number[] {
    return inputArray.map((element) =>
        element === elemToReplace ? substitutionElem : element
    );
}

console.log(arrayReplace([3, 5, 2, 4, 5], 1, 3));
