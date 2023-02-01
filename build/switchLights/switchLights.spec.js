"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const switchLights_1 = require("./switchLights");
xdescribe(switchLights_1.switchLights.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [1, 1, 1, 1, 1];
        // act
        const response = (0, switchLights_1.switchLights)(data);
        // assert 
        expect(response).toEqual([0, 1, 0, 1, 0]);
    });
    it('Test 2', () => {
        // arrange
        const data = [0, 0];
        // act
        const response = (0, switchLights_1.switchLights)(data);
        // assert 
        expect(response).toEqual([0, 0]);
    });
});
//# sourceMappingURL=switchLights.spec.js.map