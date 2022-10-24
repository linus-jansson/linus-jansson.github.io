import express from 'express';
import next from 'next'
import bodyParser from 'body-parser';
import http from 'http';

const server = express()
const http_server = http.createServer(server);
// const io = require('socket.io')(http_server);

const dev = process.env.NODE_ENV !== 'production'

const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

// import Auth from './auth';

nextApp.prepare().then((): void => {

    /* Set up body-parser */
    server.use(bodyParser.urlencoded({
        extended: true
    }));

    // server.get('/login', (req, res) => {
    //     let auth = new Auth();
    //     auth.login((result) => {
    //         console.log(result)
    //         return res.json(auth.isAuthenticated())
    //     });

    // });

    /* Handle all requests through next */
    server.get("*", (req, res) => {
        return nextHandler(req, res);
    });

    /* Listen on port 8000 */
    const PORT: number = 8000;
    http_server.listen(PORT)
    // http_server.listen(PORT, (err: Error): void => {
    //     if (err) throw err
    //     console.log("Server is running on port 8000")

    // });
});
