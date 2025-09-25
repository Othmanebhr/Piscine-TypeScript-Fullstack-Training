import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.get('/hello', (req, res) => {
    res.send('Hello API');
}
)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});