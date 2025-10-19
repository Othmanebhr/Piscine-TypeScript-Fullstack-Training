console.log("This is a test");

/*
Commandes utilisée et pourquoi:

- npm init -y:
    Crée un environnement de travail Node.js avec le fichier package.json
    qui contient les *métadonnées du projet et gère les dépendances
    *métadonées:
        - Donnée = le contenu principal (la photo, la musique, le texte).
        - Métadonnée = les informations qui décrivent ou donnent du contexte à cette donnée.

- npm install typescript ts-node nodemon -d
    Sert a rajouter typescript/ts-node/nodemon dans les dependances du package.json

- npx tsc --init
    Crée le fichier tsconfig.json qui configure le compilateur TypeScript
    (règles de compilation, dossiers source/sortie, options du langage)

- ts-node va servir a directement compiler le typescipt sans passer par un.js

- nodemon va servir a mettre a jour directement le serveur pour toucher au cpde en temps réelle

*/