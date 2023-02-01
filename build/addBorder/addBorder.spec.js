"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addBorder_1 = require("./addBorder");
xdescribe(addBorder_1.addBorder.name, () => {
    it('Test 1', () => {
        // arrange
        const data = ['abc, ded'];
        // act
        const response = (0, addBorder_1.addBorder)(data);
        // assert
        expect(response).toEqual([
            "*****",
            "*abc*",
            "*ded*",
            "*****"
        ]);
    });
});
//# sourceMappingURL=addBorder.spec.js.map