import express from 'express';
import type {Request, Response, NextFunction} from 'express';

const app = express();

app.use(express.json());

function validateName(req: Request, res: Response, next: NextFunction){
    if (req.body.name !== undefined)
        return next();
    res.status(400).send('Wrong input!');
}

app.post('/user', validateName, (req, res) =>{
    console.log("Received:", req.body.name);
    res.send('Received!');
})

app.listen(3000);

/*

Ici on creer une fonction, ou plutot "middleware", qui s'appelle validateName,
elle verifie si name est bien definie si oui elle fait un return "next()",
qui est elle une fonction définie dans la dépendance express.

Si elle réussi next() permet de passer a la prochaine route/middleware.

Dans le cas ou cela echoue,elle répond avec une erreur et la route /user n'est
jamais exécutée.

*/