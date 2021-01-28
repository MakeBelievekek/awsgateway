import schema from "./schema";

export default {
  handler: `${__dirname.split(process.cwd())[1].substring(1).replace(/\\/g, '/')}/handler.main`,
  events: [
    {
      http: {
        method: 'POST',
        path: 'post-test',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
