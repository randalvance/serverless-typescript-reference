import { Handler, APIGatewayProxyEventV2 } from 'aws-lambda';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { v4 as uuid } from 'uuid';

const handler: Handler<APIGatewayProxyEventV2> = async () => {
  return formatJSONResponse({
    id: uuid(),
    message: 'Connected'
  });
}

export const main = middyfy(handler);
