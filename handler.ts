// handler.ts
import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";
import { publishSNSMessage } from "./starter";

exports.publishSns = async (event: APIGatewayEvent, context: Context, callback: Callback) => {
  console.log("Lambda starts");
  const sendMessage = {
    Subject: "Hello X Message",
    Message: "Hi Tri Luong",
    TopicArn: "arn:aws:sns:us-east-2:160116285639:PublishToSNS",
  };
  const resp = await publishSNSMessage(sendMessage);
  console.log("lambda finishes");
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: resp,
      // message: "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
      input: event,
    }),
  };
  callback(JSON.stringify(resp), response);
};
