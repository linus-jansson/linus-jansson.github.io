import express from 'express';
import type { Request, Response } from 'express';
import next from 'next'
import bodyParser from 'body-parser';
import * as http from 'http';

import compression from 'compression';

const server = express()
const http_server = new http.Server(server);
// const io = require('socket.io')(http_server);

const dev = process.env.NODE_ENV !== 'production'

const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

import Auth from './Auth';

nextApp
    .prepare()
    .then((): void => {
        server.use(compression())
        /* Set up body-parser */
        server.use(bodyParser.urlencoded({
            extended: true
        }));

        server.get('/login', (req, res) => {
            let auth = new Auth();
            let code: unknown = req.query.code

            if (code === undefined) {
                return res.redirect(auth.REDIRECT_URI)
            }

            auth.login(code, () => { });

            return res.status(204).json({ status: "check console" })

        });

        /* Handle all requests through next */
        server.get("*", (req: Request, res: Response) => {
            return nextHandler(req, res);
        });

        /* Listen on port 8000 */
        // https://stackoverflow.com/questions/56291321/how-to-handle-errors-with-express-listen-in-typescript
        const PORT: number = 8000;
        http_server.listen(PORT, (): void => {
            console.log("Server is running on port 8000")
        }).on('error', (err: Error) => {
            throw err
        });
    })
    .catch((err) => { console.log(err) });
