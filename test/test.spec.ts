// test.spec.ts
import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";
import * as chai from "chai";
import * as mocha from "mocha";

const expect = chai.expect;
const should = chai.should();

// import { expect } from "chai";
import { publishSNSMessage } from "../starter";

describe("Test API call", () => {
  it("run sns publish", async () => {
    const messageToSend = {
      Subject: "Hello Message",
      Message: "Hi Tri Luong",
      TopicArn: "arn:aws:sns:us-east-2:160116285639:PublishToSNS",
    };
    const expectedReturn = undefined;
    const replyMessage = publishSNSMessage(messageToSend);
    expect(replyMessage).to.be.equal(expectedReturn);
  });
});

// describe("handler", () => {
//   describe("publishSns", () => {
//     it("should return Serverless boilerplate message", () => {
//       publishSns(textx, nullx, (error: Error, result: any) => {
//         expect(error).to.be.eql(null);
//         result.body.should.equal(
//           '{"message":"Go Serverless Webpack (Typescript) v1.0!
//            Your function executed successfully!","input":null}');
//       });
//     });
//   });
// });
