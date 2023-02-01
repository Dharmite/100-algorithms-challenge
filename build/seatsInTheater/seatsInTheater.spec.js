"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seatsInTheater_1 = require("./seatsInTheater");
xdescribe(seatsInTheater_1.seatsInTheater.name, () => {
    it('Test 1', () => {
        // arrange
        const nCols = 16;
        const nRows = 11;
        const col = 5;
        const row = 3;
        // act
        const response = (0, seatsInTheater_1.seatsInTheater)(nCols, nRows, col, row);
        // assert 
        expect(response).toBe(96);
    });
});
//# sourceMappingURL=seatsInTheater.spec.js.map