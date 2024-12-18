import express from 'express';
import http from 'serverless-http'; //to use all express props without running a server on some port

const app = express();

app.get('/', (req, res) => {
    res.json({message: 'ok'});
})

export const handler = http(app);