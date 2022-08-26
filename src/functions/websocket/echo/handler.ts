import { Handler, APIGatewayProxyEventV2 } from 'aws-lambda';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

const handler: Handler<APIGatewayProxyEventV2> = async (evt) => {
  console.log('Echo called!');
  const body = JSON.parse(evt.body);
  return formatJSONResponse({
    message: `Hello, ${body.name}`
  });
}

export const main = middyfy(handler);
