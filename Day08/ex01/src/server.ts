import express from 'express'

const app = express();

app.get('/search', (req,res) => {
    const value = req.query.term;
    res.send(value);
})
app.get('/test', (req,res) => {
    const value = req.query.test;
    res.send(value);
})

app.get('/manyQuerys', (req,res) => {
    const term = req.query.term;
    const type = req.query.type;
    const lang = req.query.lang;
    res.send(`term = ${term}, type = ${type}, lang = ${lang}`);
})

app.listen(3000,() => console.log("http://localhost:3000/search?term=test", "\n",
    "http://localhost:3000/manyQuerys?term=789&type=852&lang=string"
))

/*

- Une query: - C'est la partie apres le "?" dans une url.
             - Elle sert a transmettre des informations au serveur
             sous la forme de paire: clé=valeur;
             - on la recuperea avec req.query.term 

*/