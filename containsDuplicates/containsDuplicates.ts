export function containsDuplicates(a: number[]): boolean {
    const seen: { [key: number]: boolean } = {};
    for (const element of a) {
        if (seen[element]) return true;
        seen[element] = true;
    }
    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
