"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
const message = "Saurabh";
describe("TEST", () => {
    it("test greeting message", () => {
        expect(greet_1.greeter(message)).toBeDefined();
    });
    it("test sum of two numbers", () => {
        expect(greet_1.sum(2, 3)).toBeDefined();
    });
    it("class task should be callable", () => {
        expect(new greet_1.greet(2, 3)).toBeDefined();
    });
});
//# sourceMappingURL=greet.test.js.map