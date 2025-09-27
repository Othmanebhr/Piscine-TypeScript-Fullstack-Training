const selectEl = (id: string):HTMLElement | null => {
    return document.getElementById(id);
}

const title = selectEl("titre");
const button = selectEl("Button");
const paragraphe = selectEl("Paragraphe");

if (title)
{
    console.log("Type:", title);
    console.log("Name:", title.textContent);
    console.log("Tag(Balise):", title.tagName);
}

/*

DOM = Document Object Model
Le DOM, c'est la façon dont le navigateur "voit" la page HTML.
Il transforme chaque balise HTML en objet que tu peux manipuler.

Document (la page entière)
└── html
    ├── head
    │   └── title
    └── body
        ├── h1 (élément DOM)
        ├── p (élément DOM)
        └── button (élément DOM)

Comment exec?
Faire tsc index.ts pour generer le .js dont la page html se servira comme script
puis faire explorer.exe, faire F12 sur la page et voir la console

*/