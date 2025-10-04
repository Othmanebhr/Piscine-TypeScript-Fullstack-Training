var form3 = document.getElementById("form");
var result = document.getElementById("result");
var email3 = document.getElementById("email");
var phoneNumber = document.getElementById("phoneNumber");
var name2 = document.getElementById("name");
var Username = document.getElementById("username");
function checkForm() {
    if (phoneNumber.value) {
        if (isNaN(Number(phoneNumber.value)) || phoneNumber.value.length > 10 || phoneNumber.value.indexOf('.') !== -1)
            return false;
    }
    if (!name2.value || !Username.value || !email3.value)
        return false;
    return email3.value.indexOf('@') !== -1 && email3.value.indexOf('.') !== -1;
}
function formOk() {
    var userData = {
        name: name2.value,
        username: Username.value,
        phoneNumer: phoneNumber.value ? Number(phoneNumber.value) : undefined,
        email: email3.value
    };
    result.textContent = "Form completed successfully!";
    result.style.color = "green";
    console.log("Here is the data:", userData);
}
if (form3 && result && email3 && name2 && Username) {
    form3.addEventListener("submit", function (event) {
        event.preventDefault();
        if (checkForm())
            formOk();
        else {
            result.textContent = "An error occurred";
            result.style.color = "red";
            console.log("Wrong Form received");
        }
    });
}
