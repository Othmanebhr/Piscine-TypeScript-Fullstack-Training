var email2 = document.getElementById("email");
var result2 = document.getElementById("result");
var form2 = document.getElementById("form");
function checkEmail(email) {
    return (email.indexOf('@') !== -1 && email.indexOf('.') !== -1);
}
function submitResponse(ok) {
    console.log("Input done!");
    if (ok) {
        result2.textContent = "Email successfully registred!";
        result2.style.color = "green";
    }
    else {
        result2.textContent = "Invalid email!";
        result2.style.color = "red";
    }
}
if (email2 && result2 && form2) {
    form2.addEventListener("submit", function (event) {
        event.preventDefault();
        submitResponse(checkEmail(email2.value));
    });
}
