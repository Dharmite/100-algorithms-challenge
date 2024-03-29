export function add(param1: number, param2: number): number | undefined {
    if (typeof param1 !== 'number' || typeof param2 !== 'number') {
        return;
    }

    return param1 + param2;
}

export function add2(...param1: number[]): number {
    return param1.reduce((prev, curr) => prev + curr, 0);
}

// console.log(add(1, 2));
// console.log(add(3, 2));

// console.log(add2(1,2,3,4,5));
// console.log(add2(2,3));
