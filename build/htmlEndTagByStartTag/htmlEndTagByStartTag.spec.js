"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlEndTagByStartTag_1 = require("./htmlEndTagByStartTag");
xdescribe(htmlEndTagByStartTag_1.htmlEndTagByStartTag.name, () => {
    it('Test 1', () => {
        // arrange
        const startTag = "<button type='button' disabled>";
        // act
        const response = (0, htmlEndTagByStartTag_1.htmlEndTagByStartTag)(startTag);
        // assert 
        expect(response).toBe("</button>");
    });
    it('Test 2', () => {
        // arrange
        const startTag = '<i>';
        // act
        const response = (0, htmlEndTagByStartTag_1.htmlEndTagByStartTag)(startTag);
        // assert 
        expect(response).toEqual('</i>');
    });
});
//# sourceMappingURL=htmlEndTagByStartTag.spec.js.map