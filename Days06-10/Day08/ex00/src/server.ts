import express from 'express';

const app = express();
app.get('/user/:id',(req,res) => {
    const ids = Number(req.params.id);
    res.send(`User ID: ${ids}.`);
})

app.get('/test/:justATest', (req,res) => {
    const test = String(req.params.justATest);
    res.send(`Param = ${test}`);
})

app.listen(8000, () => console.log("http://localhost:8000/user/42, http://localhost:8000/test/a"));

/*
- app.get('/user/:id', ...)
    - Ici le user nous envoie une request via la route /user/...
    - ":id" est en realité une variable, id peut devenir "/user/42" ou
      encore "user/68476876"...
    - Cette varibale devient ducoup un paramètre de 'req' (request)
    - On recupere simplement donc cette valeur  (on la caste)
    - On la renvoie avec res

- N'hésitez pas installer nodemon et tester votre code dynamiquement!
*/