import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { v4 as uuid } from 'uuid';

const hello: ValidatedEventAPIGatewayProxyEvent<unknown> = async () => {
  return formatJSONResponse({
    message: `Goodbye from Serverless: ${uuid()}`
  });
}

export const main = middyfy(hello);
