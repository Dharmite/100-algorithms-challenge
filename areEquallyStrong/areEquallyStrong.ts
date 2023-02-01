export function areEquallyStrong(
    yourLeft: number,
    yourRight: number,
    friendsLeft: number,
    friendsRight: number
): boolean {
    const ascendingOrder = (a: number, b: number) => a - b;

    const [person1Min, person1Max] = [yourLeft, yourRight].sort(ascendingOrder);
    const [person2Min, person2Max] = [friendsLeft, friendsRight].sort(
        ascendingOrder
    );

    return person1Min === person2Min && person1Max === person2Max;
}

// console.log(areEquallyStrong(10, 15, 15, 10));
// console.log(areEquallyStrong(15, 10, 15, 10));
// console.log(areEquallyStrong(15, 10, 15, 9));
