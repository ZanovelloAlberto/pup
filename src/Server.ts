import https from 'https'
import fs from "fs"

import Fastify from 'fastify'
const fastify = Fastify({
    logger: true
})
export default class {

    constructor() {



        // Declare a route
        fastify.get('/', (request, reply) => {

            console.log(request);
            reply.send({ hello: 'world' })
        })

        // Run the server!
        fastify.listen(3000, (err, address) => {
            if (err) throw err
            // Server is now listening on ${address}
        })
    }


}