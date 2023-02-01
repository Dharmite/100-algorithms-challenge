"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const areEquallyStrong_1 = require("./areEquallyStrong");
xdescribe(areEquallyStrong_1.areEquallyStrong.name, () => {
    it('Test 1', () => {
        // arrange
        const yourLeft = 10;
        const yourRight = 15;
        const friendsLeft = 15;
        const friendsRight = 10;
        // act
        const response = (0, areEquallyStrong_1.areEquallyStrong)(yourLeft, yourRight, friendsLeft, friendsRight);
        // assert
        expect(response).toEqual(true);
    });
    it('Test 2', () => {
        // arrange
        const yourLeft = 15;
        const yourRight = 10;
        const friendsLeft = 15;
        const friendsRight = 10;
        // act
        const response = (0, areEquallyStrong_1.areEquallyStrong)(yourLeft, yourRight, friendsLeft, friendsRight);
        // assert
        expect(response).toEqual(true);
    });
    it('Test 3', () => {
        // arrange
        const yourLeft = 15;
        const yourRight = 10;
        const friendsLeft = 15;
        const friendsRight = 9;
        // act
        const response = (0, areEquallyStrong_1.areEquallyStrong)(yourLeft, yourRight, friendsLeft, friendsRight);
        // assert
        expect(response).toEqual(false);
    });
});
//# sourceMappingURL=areEquallyStrong.spec.js.map