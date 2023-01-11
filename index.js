import express from 'express';
import bodyParser from 'body-parser';

import users from './routes/users.js';

const app = express();
const PORT = 3033;

app.use(bodyParser.json());

app.use('/users', users);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));