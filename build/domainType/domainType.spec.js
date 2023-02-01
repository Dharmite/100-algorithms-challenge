"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domainType_1 = require("./domainType");
xdescribe(domainType_1.domainType.name, () => {
    it('Test 1', () => {
        // arrange
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        // act
        const response = (0, domainType_1.domainType)(domains);
        // assert 
        expect(response).toEqual(["organization", "commercial", "network", "information"]);
    });
});
//# sourceMappingURL=domainType.spec.js.map