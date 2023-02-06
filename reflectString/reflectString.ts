export function reflectString(inputString: string): string {
    const lowerCaseStr = inputString.toLocaleLowerCase();
    const minValue = 'a'.charCodeAt(0);
    const maxValue = 'z'.charCodeAt(0);
    let reflectedStr = '';

    for (let index = 0; index < lowerCaseStr.length; index++) {
        const charCode = lowerCaseStr.charCodeAt(index);
        reflectedStr += String.fromCharCode(maxValue - (charCode - minValue));
    }

    return reflectedStr;
}

console.log(reflectString("name"));
