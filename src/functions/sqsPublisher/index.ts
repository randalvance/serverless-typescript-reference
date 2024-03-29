import { handlerPath } from '@libs/handlerResolver';
import { Function } from '@libs/serverless-types';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'sqs-publish'
      }
    }
  ],
  layers: [
    {
      Ref: 'MyLayerLambdaLayer'
    }
  ]
} as Function;
