import { handlerPath } from '@libs/handlerResolver';
import { Function } from '@libs/serverless-types';

export const connect = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      websocket: {
        route: '$connect'
      }
    },
    {
      websocket: {
        route: '$disconnect'
      }
    },
    {
      websocket: {
        route: '$default'
      }
    }
  ],
  layers: [
    {
      Ref: 'MyLayerLambdaLayer'
    }
  ]
} as Function;
