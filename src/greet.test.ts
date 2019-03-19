import { greeter, sum } from "./greet";

const message = "Saurabh";

describe("TEST", () => {
    it("test greeting message", () => {
        const messageReceived = greeter(message);
        expect(message).toEqual(messageReceived);    
    });

    it("test sum of two numbers", () => {
        expect(10).toEqual(sum(2, 3));    
    });
});
