import 'source-map-support/register';
import schema from "./schema";
import {formatJSONResponse, ValidatedEventAPIGatewayProxyEvent} from "../../../lib/apiGateway";
import commonMiddleware from "../../../lib/commonMiddleware";


const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const body = event.body;
    return formatJSONResponse({
        message: `Hello ${body.name}, welcome to the exciting Serverless world!`,
        event,
    })
}

export const main = commonMiddleware(handler);
