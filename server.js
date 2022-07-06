const express = require('express');
const postRouter = require('./routes/posts');
const database = require('./config/database');
const authRouter = require('./routes/auth');
const app = express();
require('dotenv').config();
PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/posts', postRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})