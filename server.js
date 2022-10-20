import express from 'express';
import next from 'next'
import bodyParser from 'body-parser';
import http from 'http';

const server = express()
const http_server = http.Server(server);
// const io = require('socket.io')(http_server);

const dev = process.env.NODE_ENV !== 'production'

const nextApp = next({dev})
const nextHandler = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
        
    /* Set up body-parser */
    server.use(bodyParser.urlencoded({
        extended: true
    }));
    
    /* Handle all requests through next */
    server.get("*", (req, res) => {
        return nextHandler(req, res)
    });

    /* Listen on port 8000 */
    http_server.listen(8000, (err) => {
        if (err) throw err
        console.log("Server is running on port 8000")
    });
});
