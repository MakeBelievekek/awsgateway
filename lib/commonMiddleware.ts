import middy from "@middy/core"
import middyJsonBodyParser from "@middy/http-json-body-parser"
import httpEventNormalizer from "@middy/http-event-normalizer";
import httpErrorHandler from "@middy/http-error-handler";

export default handler  => {
    return middy(handler).use([
        middyJsonBodyParser(),
        httpErrorHandler(),
        httpEventNormalizer()
    ]);
}
