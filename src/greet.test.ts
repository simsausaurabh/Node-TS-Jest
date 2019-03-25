import { greeter, sum, greet } from "./greet";

const message = "Saurabh";

describe("TEST", () => {
    it("test greeting message", () => {
        expect(greeter(message)).toBeDefined();    
    });

    it("test sum of two numbers", () => {
        expect(sum(2, 3)).toBeDefined()
    });

    it("class task should be callable", () => {
        expect(new greet(2, 3)).toBeDefined();
    })
});
