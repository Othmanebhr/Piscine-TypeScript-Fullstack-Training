import express from 'express'

const app = express();

app.get('', (req, res) => {
    res.send('This is the first page');
})

app.get('/hello', (req, res) => res.send('Hello API!'))

app.listen(3000, () => 
    console.log("Server is running on : http://localhost:3000, or you could go to http://localhost:3000/hello!"));