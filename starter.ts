import { SNS } from "aws-sdk";

export function publishSNSMessage(sendMessage: any): void {
  const client = getSNSClient();
  const params = sendMessage;
  client.publish(params).promise()
    .then((data: any) => {
      console.log(data.MessageId);
      return data;
    })
    .catch((error: any) => {
      console.log(error);
    });
}

export const getSNSClient = (): SNS => {
  const AWS = require("aws-sdk");

  // const useSNSLocal = () => {
  //   // return process.env.IS_OFFLINE;
  //   return false;
  // };
  // AWS.config.update({
  //   region: "us-east-2",
  // });

  // const offlineConfig = {
  //   region: "us-east-2",
  //   endpoint: "http://localhost:4002",
  // };
  // const SNSClient = useSNSLocal() ? new AWS.SNS(offlineConfig)
  //   : new AWS.SNS();
  // return SNSClient;
  const SNSClient = new AWS.SNS({region: "us-east-2"});
  return SNSClient;
};
