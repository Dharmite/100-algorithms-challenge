"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fancyRide_1 = require("./fancyRide");
xdescribe(fancyRide_1.fancyRide.name, () => {
    it('Test 1', () => {
        // arrange
        const l = 30;
        const fares = [0.3, 0.5, 0.7, 1, 1.3];
        // act
        const response = (0, fancyRide_1.fancyRide)(l, fares);
        // assert 
        expect(response).toBe('UberXL');
    });
});
//# sourceMappingURL=fancyRide.spec.js.map