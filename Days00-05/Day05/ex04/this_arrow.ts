const obj =
{
    nb: 6,
    nb2: 5,
    printNbs: function(){
        console.log(this.nb, this.nb2);
    }
};

const obj2 =
{
    nb3: 6,
    nb4: 5,
    printNbs: () => {
        console.log(this.nb3, this.nb4);
    }
};

obj.printNbs();
obj2.printNbs();


/*
Fonction classique : this pointe sur l’objet qui appelle la méthode.
Fonction flèche : this pointe sur le contexte global (globalThis), pas sur l’objet.

Dans ce code, obj2.printNbs() affiche "undefined undefined" car :
- Les fonctions flèches ne créent pas leur propre contexte this.
- Dans un module Node.js ou TypeScript, this dans une fonction flèche n’est pas lié à obj2 ni à globalThis, mais souvent à undefined.
- Donc, this.nb3 et this.nb4 sont undefined.

Pour accéder aux propriétés de obj2, il faut utiliser une fonction classique.
*/