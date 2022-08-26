import type { Handler } from 'aws-lambda'
import { middyfy } from '@libs/lambda';

const handler: Handler<any> = async () => {
  console.log('Invoked!');
}

export const main = middyfy(handler);
