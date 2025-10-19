var selectEl = function (id) {
    return document.getElementById(id);
};
var titre = selectEl("titre");
var paragraphe = selectEl("paragraphe");
var button = selectEl("button");
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
