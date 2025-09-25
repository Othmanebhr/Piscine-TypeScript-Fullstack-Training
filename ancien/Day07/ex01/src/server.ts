import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('This is a test.');
});

app.get('/hello', (req, res) => {
    res.send('Hello API!');
});

app.listen(3000, () => {
    console.log('Listening on : http://localhost:3000', 'or : http://localhost:3000/hello');
});

/*



*/