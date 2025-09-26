import express from 'express';

const app = express();

app.use(express.json());

/*res.json: transforme automatiquement l’objet en JSON et l’envoie 
            au client avec le bon header (Content-Type: application/json).*/

app.post('/user', (req, res) =>{
    if (typeof req.body.name === 'string'){
        res.json({
            success: true,
            user:{
                name: req.body.name
            }
        })
        return console.log("Response Json OK!");
    }
    res.status(400).send("Wrong type!");
})

app.post('/test', (req,res) => {
    res.json({
        success:true,
        user:{
            id: req.body.id,
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })
})

app.listen(3000, () => console.log("Server on : http://localhost:3000/user"));
