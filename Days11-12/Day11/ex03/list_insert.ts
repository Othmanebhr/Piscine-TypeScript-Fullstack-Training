const list = document.getElementById("list");
const button4 = document.getElementById("button");

let compteur: number = 3;

function addNewElem(){
    const newElem = document.createElement("li");
    newElem.textContent = `Element ${compteur}`;
    if (list)
        list.appendChild(newElem);
    compteur++;
}

if (button4)
{
    button4.addEventListener("click", addNewElem)
}