"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lateRide_1 = require("./lateRide");
xdescribe(lateRide_1.lateRide.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 240;
        // act
        const response = (0, lateRide_1.lateRide)(data);
        // assert 
        expect(response).toBe(4);
    });
    it('Test 2', () => {
        // arrange
        const data = 808;
        // act
        const response = (0, lateRide_1.lateRide)(data);
        // assert 
        expect(response).toBe(14);
    });
});
//# sourceMappingURL=lateRide.spec.js.map