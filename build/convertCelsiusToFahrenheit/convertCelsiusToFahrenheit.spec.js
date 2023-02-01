"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertCelsiusToFahrenheit_1 = require("./convertCelsiusToFahrenheit");
xdescribe(convertCelsiusToFahrenheit_1.celsiusToFahrenheit.name, () => {
    it('Test 1', () => {
        // arrange
        const data = -30;
        // act
        const response = (0, convertCelsiusToFahrenheit_1.celsiusToFahrenheit)(data);
        // assert 
        expect(response).toBe(-22);
    });
    it('Test 2', () => {
        // arrange
        const data = -10;
        // act
        const response = (0, convertCelsiusToFahrenheit_1.celsiusToFahrenheit)(data);
        // assert 
        expect(response).toBe(14);
    });
    it('Test 3', () => {
        // arrange
        const data = 0;
        // act
        const response = (0, convertCelsiusToFahrenheit_1.celsiusToFahrenheit)(data);
        // assert 
        expect(response).toBe(32);
    });
});
//# sourceMappingURL=convertCelsiusToFahrenheit.spec.js.map