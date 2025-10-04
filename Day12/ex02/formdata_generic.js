var newUser = document.getElementById("newUser");
var login = document.getElementById("login");
var Result = document.getElementById("result");
function getData(form, fields) {
    var formData = {};
    fields.forEach(function (field) {
        var fieldName = field.toString();
        var input = form.querySelector("#".concat(fieldName));
        if (input)
            formData[field] = input.value;
    });
    return formData;
}
if (newUser && Result) {
    newUser.addEventListener("submit", function (event) {
        event.preventDefault();
        var userData = getData(newUser, ["name", "username", "email"]);
        Result.textContent = "New User Successfully created!";
        Result.style.color = "green";
        console.log("form:", userData);
    });
}
if (login && Result) {
    login.addEventListener("submit", function (event) {
        event.preventDefault();
        var userData = getData(login, ["username2", "email2"]);
        Result.textContent = "Successfully logged!";
        Result.style.color = "green";
        console.log("form:", userData);
    });
}
