import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('This is a Node application that is connected to AWS');
});
app.listen(port, (): void => {
    console.log(`the server is listening on http://localhost:${port}`);
});