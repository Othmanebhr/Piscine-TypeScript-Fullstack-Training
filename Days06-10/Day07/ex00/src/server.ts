import express from 'express'

const app = express();

app.get('', (req,res) => {
    console.log("Someone conected");
    res.send("This is the front page!");
})

app.get('/hello', (req,res) =>{
    res.send("Hello API!");
})

app.listen(3000, () => console.log("http://localhost:3000, http://localhost:3000/hello"));


/*

- On import express

- On creer notre app avec express() => qui nous creer automatiquement notre serveur

- req,res
    - req: donnée reçu par notre serveur
    - res: "response", réponse qu'on renvoie

- res.send envoie une reponse directement;

- app.listen, on ecoute sur le port 3000.

*/