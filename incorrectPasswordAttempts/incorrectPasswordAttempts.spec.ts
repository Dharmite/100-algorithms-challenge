import { incorrectPasscodeAttempts } from './incorrectPasswordAttempts';

describe(incorrectPasscodeAttempts.name, () => {
    it('Test 1', () => {
        // arrange
        const passcode = '1111';
        const attempts = [
            '1111',
            '4444',
            '9999',
            '3333',
            '8888',
            '2222',
            '7777',
            '0000',
            '6666',
            '7285',
            '5555',
            '1111',
        ];

        // act
        const response = incorrectPasscodeAttempts(passcode, attempts);

        // assert
        expect(response).toBe(true);
    });

    test('returns true if 10 incorrect attempts', () => {
        const passcode = '1234';
        const attempts = Array.from({ length: 10 }, () => 'incorrect');

        expect(incorrectPasscodeAttempts(passcode, attempts)).toBe(true);
    });

    test('returns false if less than 10 incorrect attempts', () => {
        const passcode = '1234';
        const attempts = Array.from({ length: 9 }, () => 'incorrect');

        expect(incorrectPasscodeAttempts(passcode, attempts)).toBe(false);
    });

    test('resets counter on correct attempt', () => {
        const passcode = '1234';
        const attempts = [
            ...Array.from({ length: 5 }, () => 'incorrect'),
            passcode,
        ];

        expect(incorrectPasscodeAttempts(passcode, attempts)).toBe(false);
    });
});
