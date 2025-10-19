import express from 'express';

const app = express();

async function fetchUser(userId: number)
{
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const user = await response.json();
        return user;
    }catch(error)
    {
        console.error('Erreur lors de la récupération de l\'utilisateur:', error);
        throw error;
    }
}

app.get("/user/:id", async (req, res) =>{
    try{
        const user = await fetchUser(Number(req.params.id));
        res.json(user);
    } catch(error){
        res.status(500).json({error: 'Impossible de récupéré l\'utilisateur.'})
    }
})

app.listen(3000);

/*

Points clés à retenir :
async : mot-clé qui indique que la fonction est asynchrone
asynchrone : le code continue de s'exec pendant l'attente
Les appels réseau/ request base de donées... peuvent prendre du temps

await : attend la résolution d'une promesse

API: API: C'est l'intermédiaire entre ton application et les 
données/services externes

Request GET : Méthode HTTP pour RÉCUPÉRER des données (lecture seule, 
ne modifie rien)
fetch('https://jsonplaceholder.typicode.com/users/1')
ici fetch() lance une request GET demandant a l'APT le User Numéro:(x)
fetch() : fonction pour faire des appels/request HTTP
Promesses : fetch() retourne une Promise

try/catch : gère les erreurs qui peuvent survenir
Status HTTP : 200 (OK), 404 (Not Found), 500 (Server Error)


.json() : méthode pour parser la réponse JSON

test:
lancer le serveur puis:
lancer: (sur son navigateur)
http://localhost:3000/user/1
http://localhost:3000/user/2
http://localhost:3000/user/5

ou:
curl http://localhost:3000/user/1
curl http://localhost:3000/user/999(error)

*/