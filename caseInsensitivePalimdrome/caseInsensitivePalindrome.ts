export function isCaseInsensitivePalindrome(inputString: string): boolean {
    const lowerCaseStr = inputString.toLocaleLowerCase();
    const reverseStr = lowerCaseStr.split('').reverse().join('');

    return lowerCaseStr === reverseStr;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
