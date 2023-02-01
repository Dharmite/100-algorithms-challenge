export function uniqueDigitProducts(a: number[]): number {
    const products = a.map(getDigitProduct);
    const uniques = new Set(products);
    return uniques.size;
}

function getDigitProduct(digit: number): number {
    return String(digit)
        .split('')
        .map((digit) => Number(digit))
        .reduce((prev, curr) => prev * curr, 1);
}

// console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
