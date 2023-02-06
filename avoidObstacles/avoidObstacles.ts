function avoidObstaclesV2(inputArray: number[]): number {
    const obstacles = inputArray.sort((a: number, b: number) => a - b);
    const safeSpaces: any[] = [];

    const minValue = obstacles[0];
    const maxValue = obstacles[obstacles.length - 1];

    for (let index = minValue; index <= maxValue; index++) {
        if (!obstacles.includes(index)) {
            safeSpaces.push(index);
        }
    }

    for (let index = 0; index < safeSpaces.length; index++) {
        let element = safeSpaces[index];

        while (!obstacles.includes(element) && element <= maxValue) {
            element += safeSpaces[index];
        }

        if (element > maxValue) {
            return safeSpaces[index];
        }
    }

    return maxValue;
}

export function avoidObstacles(inputArray: number[]): number {
    const obstacles = inputArray.sort((a: number, b: number) => a - b);
    const maxValue = obstacles[obstacles.length - 1];

    for (let index = 1; index < maxValue; index++) {
        const matchCondition = obstacles.every(
            (obsticle) => obsticle % index !== 0
        );

        if (matchCondition) {
            return index;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
