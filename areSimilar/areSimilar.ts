export function areSimilar(a: number[], b: number[]): boolean {
    // Having different sizes means they are not similar
    if (a.length !== b.length) {
        return false;
    }

    // They have the same value
    if (String(a) === String(b)) {
        return true;
    }

    
    const ascendingOrder = (a: number, b: number) => a - b;
    const value = a.sort(ascendingOrder).join('');
    const target = b.sort(ascendingOrder).join('');

    return value === target;
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
