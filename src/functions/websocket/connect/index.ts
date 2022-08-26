import { handlerPath } from '@libs/handlerResolver';
import { Function } from '@libs/serverless-types';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      websocket: {
        route: '$connect'
      }
    }
  ],
  layers: [
    {
      Ref: 'MyLayerLambdaLayer'
    }
  ]
} as Function;
