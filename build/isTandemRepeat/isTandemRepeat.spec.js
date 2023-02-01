"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isTandemRepeat_1 = require("./isTandemRepeat");
xdescribe(isTandemRepeat_1.isTandemRepeat.name, () => {
    it('Test 1', () => {
        // arrange
        const inputString = 'tandemtandem';
        // act
        const response = (0, isTandemRepeat_1.isTandemRepeat)(inputString);
        // assert 
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        // arrange
        const inputString = 'qqq';
        // act
        const response = (0, isTandemRepeat_1.isTandemRepeat)(inputString);
        // assert 
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        // arrange
        const inputString = '2w2ww';
        // act
        const response = (0, isTandemRepeat_1.isTandemRepeat)(inputString);
        // assert 
        expect(response).toBe(false);
    });
});
//# sourceMappingURL=isTandemRepeat.spec.js.map