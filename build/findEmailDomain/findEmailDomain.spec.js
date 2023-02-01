"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findEmailDomain_1 = require("./findEmailDomain");
xdescribe(findEmailDomain_1.findEmailDomain.name, () => {
    it('Test 1', () => {
        // arrange
        const address = 'prettyandsimple@example.com';
        // act
        const response = (0, findEmailDomain_1.findEmailDomain)(address);
        // assert 
        expect(response).toBe('example.com');
    });
    it('Test 2', () => {
        // arrange
        const address = '<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org';
        // act
        const response = (0, findEmailDomain_1.findEmailDomain)(address);
        // assert 
        expect(response).toBe('example.org');
    });
});
//# sourceMappingURL=findEmailDomain.spec.js.map