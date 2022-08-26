import { handlerPath } from '@libs/handlerResolver';
import { Function } from '@libs/serverless-types';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      sqs: {
        arn: 'arn:aws:sqs:ap-southeast-1:962903071363:hello-queue',
        batchSize: 1,
        maximumBatchingWindow: 1
      }
    }
  ],
  layers: [
    {
      Ref: 'MyLayerLambdaLayer'
    }
  ]
} as Function;
