const email2 = document.getElementById("email") as HTMLInputElement;
const result2 = document.getElementById("result") as HTMLDivElement;
const form2 = document.getElementById("form") as HTMLFormElement;

function checkEmail(email:string){
    return (email.indexOf('@') !== -1 && email.indexOf('.') !== -1);
}

function submitResponse(ok: boolean){
    console.log("Input done!")
    if (ok){
        result2.textContent = "Email successfully registred!";
        result2.style.color = "green";
    }
    else {
        result2.textContent = "Invalid email!";
        result2.style.color = "red";
    }
}

if (email2 && result2 && form2){
    form2.addEventListener("submit", (event) =>{
        event.preventDefault();//evite le rechargement de la page
        submitResponse(checkEmail(email2.value));
    })
}