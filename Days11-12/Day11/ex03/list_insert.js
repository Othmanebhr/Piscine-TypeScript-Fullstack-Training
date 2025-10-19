var list = document.getElementById("list");
var button4 = document.getElementById("button");
var compteur = 3;
function addNewElem() {
    var newElem = document.createElement("li");
    newElem.textContent = "Element ".concat(compteur);
    if (list)
        list.appendChild(newElem);
    compteur++;
}
if (button4) {
    button4.addEventListener("click", addNewElem);
}
