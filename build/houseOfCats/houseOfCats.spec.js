"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const houseOfCats_1 = require("./houseOfCats");
xdescribe(houseOfCats_1.houseOfCats.name, () => {
    it('Test 1', () => {
        // arrange
        const legs = 6;
        // act
        const response = (0, houseOfCats_1.houseOfCats)(legs);
        // assert 
        expect(response).toEqual([1, 3]);
    });
    it('Test 2', () => {
        // arrange
        const legs = 2;
        // act
        const response = (0, houseOfCats_1.houseOfCats)(legs);
        // assert 
        expect(response).toEqual([1]);
    });
});
//# sourceMappingURL=houseOfCats.spec.js.map