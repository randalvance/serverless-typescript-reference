import hello from './hello';
import goodbye from './goodbye';
import scheduled from './scheduled';
import sqsHandler from './sqsHandler';
import sqsPublisher from './sqsPublisher';
import * as websocket from './websocket';

export default {
    hello,
    goodbye,
    scheduled,
    sqsHandler,
    sqsPublisher,
    ...websocket,
};
