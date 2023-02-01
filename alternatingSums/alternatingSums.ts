export function alternatingSums(a: number[]): number[] {
    const sumValues = (prev: number, curr: number) => prev + curr;
    const isEven = (_value: number, index: number) => index % 2 === 0;
    const isOdd = (_value: number, index: number) => index % 2 !== 0;

    const team1 = a.filter(isEven).reduce(sumValues, 0);
    const team2 = a.filter(isOdd).reduce(sumValues, 0);

    return [team1, team2];
}

// console.log(alternatingSums([50, 60, 60, 45, 70]));
