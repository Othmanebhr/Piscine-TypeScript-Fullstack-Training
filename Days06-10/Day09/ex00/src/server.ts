import express from 'express';

const app = express();

app.use(express.json());

/*app.post: traite uniquement une request post depuis la route /user */
app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('OK');
}) /* Pour les tests: curl -X POST http://localhost:3000/user -H "Content-Type: application/json" -d '{"name":"Alice"}'*/

app.listen(3000, () => {
    console.log("Server is on");
});

/*

- On crée une application express

- on utilise la méthode use() avant les routes

- app.use(): Sert a ajouter des *Middleware, ici *express.json();

- body: C'est la partie d'une request http qui contient des donées envoyées par
        le client au serveur.

- Middleware: c'est une fonction ici dans express qui intercepte les request avant 
              qu'elle ne prenne la route final. Il peut modifer la request,
              la réponse ou décider de passer a autre chose.

- express.json(): C'est un middleware qui lit le body Json et le met dans req.body.
                  Sans ce middleware req.body serait undefined pour les request
                  POST/PUT.

- Request POST/PUT: POST = sert a envoyer des données pour creer une ressource ex:
                           créer un utilisateur;
                    PUT = sert a envoyer des donées pour modifier/remplacer des 
                          ressouces ex: Modifier un nom d'utilisateur;
                          
Exemple :
    Quand tu fais un POST vers /user avec { "name": "Alice" } en JSON, 
    le body contient { "name": "Alice" }. Le middleware express.json() 
    va lire ce body et le mettre dans req.body pour que tu puisses 
    l’utiliser dans ta route.
*/