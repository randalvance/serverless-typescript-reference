import type { AWS } from '@serverless/typescript';

import functions from '@functions/index';

const serverlessConfiguration: AWS = {
  service: 'hello-sls',
  frameworkVersion: '3',
  plugins: ['serverless-offline', 'serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'ap-southeast-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    deploymentBucket: {
      name: 'serverless-deployment-bucket'
    },
    iam: {
      role: 'arn:aws:iam::962903071363:role/hello-lambda-role'
    },
    lambdaHashingVersion: '20201221',
    websocketsApiName: '${self:service}-websockets',
    websocketsApiRouteSelectionExpression: '$request.body.action',
  },
  layers: {
    MyLayer: {
      path: 'layer'
    }
  },
  // import the function via paths
  functions: functions,
  package: { individually: true, exclude: ['node_modules'] },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk', 'uuid', '@middy'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10
    },
  },
};

module.exports = serverlessConfiguration;
