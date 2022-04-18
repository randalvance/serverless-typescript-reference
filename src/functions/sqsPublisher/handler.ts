import * as AWS from 'aws-sdk';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

const sqs = new AWS.SQS({
  apiVersion: 'latest',
  region: process.env.AWS_REGION,
});

const handler: ValidatedEventAPIGatewayProxyEvent<unknown> = async () => {
    // Send a message into SQS
    await sqs.sendMessage({
      QueueUrl: process.env.QUEUE_URL,
      // Any message data we want to send
      MessageBody: JSON.stringify({
          fileName: 'foo/bar.mp4'
      }),
    }).promise();

  return formatJSONResponse({
    message: 'Message Sent!'
  });
}

export const main = middyfy(handler);
