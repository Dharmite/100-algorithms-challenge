"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alternatingSums_1 = require("./alternatingSums");
xdescribe(alternatingSums_1.alternatingSums.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [50, 60, 60, 45, 70];
        // act
        const response = (0, alternatingSums_1.alternatingSums)(data);
        // assert
        expect(response).toEqual([180, 105]);
    });
});
//# sourceMappingURL=alternatingSums.spec.js.map