const email = document.getElementById("email");
const result = document.getElementById("result"); //AJOUTER LE TYPE
const form = document.getElementById("form");
function checkValidMail(email) {
    return email.indexOf('@') !== -1 && email.indexOf('.') !== -1;
}
function submitOk() {
    console.log("Email received");
    if (result) {
        result.textContent = "submit OK!";
        result.style.color = "green";
    }
}
function submitKo() {
    console.log("Email incorrect");
    if (result) {
        result.textContent = "Invalid email";
        result.style.color = "red";
    }
}
if (email && form && result) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const emailValue = email.value;
        const isValid = checkValidMail(emailValue);
        if (isValid)
            submitOk();
        else
            submitKo();
    });
}
