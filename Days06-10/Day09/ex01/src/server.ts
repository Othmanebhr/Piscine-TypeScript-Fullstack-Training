import express from 'express';

const app = express();

app.use(express.json());

/*
app.post : traitera uniquement les request de type POST qui passeront par la
           route /user
*/
app.post('/user', (req,res) => {
    console.log('request received:', req.body);
    res.send('OK');
});

app.listen(3000, () => console.log('Server is running: http://localhost:3000/user'));

/*
commande de test:
curl -X POST http://localhost:3000/user -H "Content_type: application/json -d {"name": "Te"}"

curl: Commande pour envoyé des request http
-X: Choisir le type de request
POST: de type POST
-H: Ajoute une *en-tête (header) http (ici pour preciser que c'est du JSON)
-d: Les donées envoyées dans le body sont de type Json
{...}: le content

*en-tête (header) http: c'est une information sur le type de données que se
                        communique le client et le serveur, elle est nécessaire
                        pour que le serveur et le client se comprennent.
*/
