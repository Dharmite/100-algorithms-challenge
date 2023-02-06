export function candies(n: number, m: number): number {
    const candiePerChildreen = Math.floor(m / 3);
    return candiePerChildreen * n;
}

// console.log(candies(3, 10));
