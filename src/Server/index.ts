

import Fastify from 'fastify'
import links from '../Query/GetLinks';
import iframe from '../Query/Getiframe';
import { ReturnFirst } from '../CheckDomain';

const fastify = Fastify({

})

interface query { s: string }
export default () => {


    // Declare a route
    fastify.get('/getframe', (request, reply) => {

        iframe((request.query as query).s,).then((v) => {
            reply.send(v)
        })
    })
    fastify.get("/search", (request, reply) => {

        links((request.query as query).s,).then((v) => {
            reply.send(v)
        })

    })
    fastify.get("/domain", (request, reply) => {

        ReturnFirst().then((v)=>reply.send(v))

    })
    fastify.get("/", (request, reply) => {

        const a = `Help:
        /search?s=query         search link of altadefinizione film pages
        /domain                 get valid domain of altadefinizione && update current domain
        /getframe?s=query       get the inner frame of a given film page
        
        `

        reply.send(a)

    })

    // Run the server!
    fastify.listen(3000, (err, address) => {
        if (err) throw err
        // Server is now listening on ${address}
    })



}





