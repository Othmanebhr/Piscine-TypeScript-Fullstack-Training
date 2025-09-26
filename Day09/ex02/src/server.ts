import express from 'express';

const app = express();

app.use(express.json());

app.post('/user', (req,res) => {
    if (typeof req.body.age !== 'number'){
        console.log("Wrong value received.");
        return res.status(400).send('Invalid body: req.body.age is required and must be a number!');
    }
    if (typeof req.body.name !== 'string'){
        console.log('Wrong value received:' + req.body.name);
        return res.status(400).send('Invalid body: req.body.name is required and must be a string!');
    }
    console.log(req.body);
    res.send('Value received!');
})

app.listen(3000, () => console.log("Server is running: http://localhost:3000/user"));