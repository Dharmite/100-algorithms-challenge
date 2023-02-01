export function allLongestStrings(inputArray: string[]): string[] {
    const largestLength = Math.max(...inputArray.map((value) => value.length));
    return inputArray.filter((value) => value.length === largestLength);
}

// console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
