import type { Handler } from "aws-lambda"
import { middyfy } from '@libs/lambda';

const handler: Handler<any> = async (event) => {
    // SQS may invoke with multiple messages
    for (const message of event.Records) {
      const bodyData = JSON.parse(message.body);

      const fileName = bodyData.fileName;
      // do something with `fileName`

      console.log('fileName = ', fileName);
  }
}

export const main = middyfy(handler);
