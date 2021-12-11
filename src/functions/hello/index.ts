import schema from './schema';
import { handlerPath } from '@libs/handlerResolver';
import { Function } from '@libs/serverless-types';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'hello',
        request: {
          schemas: {
            'application/json': schema
          }
        }
      }
    },
    {
      http: {
        method: 'get',
        path: 'hello'
      }
    }
  ],
  layers: [
    {
      Ref: 'dependenciesLambdaLayer'
    }
  ]
} as Function;
