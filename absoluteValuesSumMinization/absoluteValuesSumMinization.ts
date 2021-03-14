export function absoluteValuesSumMinimization(list: number[]): number {
    const isOdd = list.length % 2 !== 0;
    return isOdd ? list[Math.floor(list.length / 2)] : list[list.length / 2 - 1];
}