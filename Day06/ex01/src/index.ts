console.log("Ceci est un test d'exec")

/*

Commandes:
    - (Commandes ex00)

    - tsc : Qui génère les différents fichiers .js
        - index.js → Le code TypeScript compilé en JavaScript
        - index.js.map → Source Map : lie le JS au TS pour le débogage
        - index.d.ts → Déclaration TypeScript : définit les types pour d'autres projets
        - index.d.ts.map → Source Map pour le fichier de déclaration
    Ces fichiers ont été généré par tsconfig car:
    {
    "sourceMap": true,        // → génère les .map
    "declaration": true       // → génère les .d.ts
    }

    - node index.js
*/