const selectEl = (id: string) => {
    return document.getElementById(id);
}

const titre = selectEl("titre");
const paragraphe = selectEl("paragraphe");
const button = selectEl("button");

console.log("Resultats:");
console.log("Titre:", titre);
console.log("Paragraphe:", paragraphe);
console.log("Button:", button);

// Test visuel - modifier le contenu
if (titre) {
    titre.textContent = "TITRE TROUVE !";
}

if (paragraphe) {
    paragraphe.textContent = "PARAGRAPHE TROUVE !";
}

if (button) {
    button.textContent = "BOUTON TROUVE !";
}