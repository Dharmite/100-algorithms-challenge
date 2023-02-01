"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const centuryFromYear_1 = require("./centuryFromYear");
xdescribe(centuryFromYear_1.centuryFromYear.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 1905;
        // act
        const response = (0, centuryFromYear_1.centuryFromYear)(data);
        // assert
        expect(response).toBe(20);
    });
    it('Test 2', () => {
        // arrange
        const data = 1700;
        // act
        const response = (0, centuryFromYear_1.centuryFromYear)(data);
        // assert
        expect(response).toBe(17);
    });
});
//# sourceMappingURL=centuryFromYear.spec.js.map