import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import next from 'next'
import bodyParser from 'body-parser';
import http from 'http';

const server = express()
const http_server = http.Server(server);
// const io = require('socket.io')(http_server);

const dev = process.env.NODE_ENV !== 'production'

const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

import Auth from './auth.js';

const auth = new Auth()

nextApp.prepare().then(() => {

    /* Set up body-parser */
    server.use(bodyParser.urlencoded({
        extended: true
    }));

    server.get('/login', async (req, res) => {
        let q_code = req.query.code
        console.log("query code", q_code)

        if (q_code) {
            let login_result = await auth.login(q_code);

            return res.json(login_result)
        }


        else
            return res.redirect(auth.REDIRECT_URI)

    });

    server.get('/isloggedin', (req, res) => {
        return res.json(auth.isAuthenticated)
    });

    /* Handle all requests through next */
    server.get("*", (req, res) => {
        return nextHandler(req, res);
    });

    /* Listen on port 8000 */
    http_server.listen(8000, (err) => {
        if (err) throw err
        console.log("Server is running on port 8000")
    });
});
