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

        server.get('/api/login', async (req: Request, res: Response) => {
            console.log("New request to /login")
            let auth = new Auth();
            return res.status(200).json({ url: auth.REDIRECT_URI_DISCORD })
        });

        server.get('/api/login/callback', async (req: Request, res: Response) => {
            console.log("New request to /login/callback")

            /* 
                TODO:
                    - If user logged in, redirect to some page
                    - If error occured/not logged in, show error page
            
            */
            let auth = new Auth();
            let code: unknown = req.query.code
            if (code === undefined) {
                return res.redirect('/api/login')
            }

            let result;
            try {
                result = await auth.login(code);
            } catch (error) {
                console.log(result)
                // console.log(error)
            }
            console.log("after try catch")
            res.status(200).json({ status: result.status, data: result.data })
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
