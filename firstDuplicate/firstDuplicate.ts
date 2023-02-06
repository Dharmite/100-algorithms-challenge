export function firstDuplicate(a: number[]): number {
    const seen: { [key: number]: boolean } = {};

    for (const value of a) {
        if (seen[value]) return value;
        seen[value] = true;
    }

    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
