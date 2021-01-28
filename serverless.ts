import type { AWS } from "@serverless/typescript";
import {postTest, getTest} from "./api";

const serverlessConfiguration: AWS = {
    service: 'awsgateway',
    frameworkVersion: "2",
    custom: {
        webpack: {
            webpackConfig: "./webpack.config.js",
            includeModules: true,
        },
    },
    // Add the serverless-webpack plugin
    plugins: ["serverless-webpack"],
    provider: {
        name: 'aws',
        runtime: 'nodejs12.x',
        region: 'eu-central-1',
        memorySize: 256,
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
        lambdaHashingVersion: '20201221',
    },
    functions: {
        bus: postTest, test: getTest
    }
};

module.exports = serverlessConfiguration;
