"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasksType_1 = require("./tasksType");
xdescribe(tasksType_1.tasksTypes.name, () => {
    it('Test 1', () => {
        // arrange
        const deadlines = [1, 2, 3, 4, 5];
        const day = 2;
        // act
        const response = (0, tasksType_1.tasksTypes)(deadlines, day);
        // assert 
        expect(response).toEqual([2, 3, 0]);
    });
    it('Test 2', () => {
        // arrange
        const deadlines = [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8];
        const day = 1;
        // act
        const response = (0, tasksType_1.tasksTypes)(deadlines, day);
        // assert 
        expect(response).toEqual([2, 8, 2]);
    });
});
//# sourceMappingURL=taskType.spec.js.map