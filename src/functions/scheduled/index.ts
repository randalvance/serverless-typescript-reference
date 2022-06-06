import { handlerPath } from '@libs/handlerResolver';
import { Function } from '@libs/serverless-types';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      schedule: {
        rate: ['rate(every hour)'],
        enabled: true
      }
    }
  ],
  layers: [
    {
      Ref: 'MyLayerLambdaLayer'
    }
  ]
} as Function;
