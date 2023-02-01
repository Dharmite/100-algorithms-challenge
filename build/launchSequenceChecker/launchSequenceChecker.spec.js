"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const launchSequenceChecker_1 = require("./launchSequenceChecker");
xdescribe(launchSequenceChecker_1.launchSequenceChecker.name, () => {
    it('Test 1', () => {
        // arrange
        const systemNames = ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"];
        const stepNumbers = [1, 10, 11, 2, 12, 111];
        // act
        const response = (0, launchSequenceChecker_1.launchSequenceChecker)(systemNames, stepNumbers);
        // assert 
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        // arrange
        const systemNames = ["stage_1", "stage_1", "stage_2", "dragon"];
        const stepNumbers = [2, 1, 12, 111];
        // act
        const response = (0, launchSequenceChecker_1.launchSequenceChecker)(systemNames, stepNumbers);
        // assert 
        expect(response).toBe(false);
    });
});
//# sourceMappingURL=launchSequenceChecker.spec.js.map