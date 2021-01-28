import {APIGatewayProxyHandler} from "aws-lambda";
import 'source-map-support/register';
import commonMiddleware from "../../../lib/commonMiddleware";


const handler: APIGatewayProxyHandler = async (event, _context) => {
    console.log(event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "1, 2, 1, 2, test, test"
        })
    }
}

export const main = commonMiddleware(handler);
