import { expect } from "chai";
describe("just a fake test", () => {
  it("consolelog a message", () => {
    console.log("This is the message.");
    expect("abc").to.be.equal("abc");
  });
});
