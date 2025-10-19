const button2 = document.getElementById("button");

if (button2){
    button2.addEventListener("click", () => {
        console.log("Le bouton a été cliqué a:", new Date().toLocaleTimeString());
    });
}