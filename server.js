import express from 'express';

import taskRoutes from './routes/tasks.js';
const server = express();
const port = 3333

server.use(express.json());

server.use(`/tasks`,taskRoutes)

server.get ('/', (req, res) => {
    res.send(`you are on route ${req.url}`)
})
server.listen(port, () => {console.log(`server listening to port ${port}`);});