import { handlerPath } from '@libs/handlerResolver';
import { Function } from '@libs/serverless-types';

export const echo = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      websocket: {
        route: 'echo',
        routeResponseSelectionExpression: '$default'
      }
    }
  ],
  layers: [
    {
      Ref: 'MyLayerLambdaLayer'
    }
  ]
} as Function;
