const add = (a: number, b: number) => {
    return a + b;
}

const add2 = (a:number, b:number) => a + b;

console.log(add(1, 4), add2(5, 5));

/*
Interet:

- Syntaxe concise : Elle permet d’écrire des fonctions plus courtes.

- Pas de liaison propre à this : Le mot-clé this dans une fonction flèche 
fait référence au contexte englobant, ce qui évite certains pièges avec 
les méthodes de callback.

- Utilisation fréquente : Idéale pour les fonctions anonymes, 
les callbacks, et les méthodes courtes

*/