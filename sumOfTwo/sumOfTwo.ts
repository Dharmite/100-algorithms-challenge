export function sumOfTwoV2(a: number[], b: number[], v: number): boolean {
    for (let index = 0; index < a.length; index++) {
        const elem1 = a[index];

        for (let index = 0; index < b.length; index++) {
            const elem2 = b[index];

            const sum = elem1 + elem2;

            if (sum === v) {
                return true;
            }
        }
    }

    return false;
}

export function sumOfTwo(a: number[], b: number[], v: number): boolean {
    const hashMap: { [val: number]: number } = {};
    for (let num of a) {
        const diff = v - num;
        hashMap[diff] = diff;
    }

    for (let num of b) {
        if (hashMap.hasOwnProperty(num)) {
            return true;
        }
    }

    return false;
}

// onsole.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
