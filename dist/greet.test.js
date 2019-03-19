"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
const message = "Saurabh";
describe("TEST", () => {
    it("test greeting message", () => {
        const messageReceived = greet_1.greeter(message);
        expect(message).toEqual(messageReceived);
    });
    it("test sum of two numbers", () => {
        expect(10).toEqual(greet_1.sum(2, 3));
    });
});
//# sourceMappingURL=greet.test.js.map