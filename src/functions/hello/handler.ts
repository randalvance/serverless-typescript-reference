import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { v4 as uuid } from 'uuid';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  if (event.body) {
    return formatJSONResponse({
      message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
      event,
    });
  }

  return formatJSONResponse({
    message: `Hello from Serverless: ${uuid()}`
  });
}

export const main = middyfy(hello);
