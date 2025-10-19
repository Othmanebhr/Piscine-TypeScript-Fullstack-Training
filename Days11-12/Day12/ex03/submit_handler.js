var form = document.getElementById("form");
var result = document.getElementById("result");
var handleSubmit = function (formData) {
    try {
        var obj_1 = {};
        formData.forEach(function (value, key) {
            obj_1[key] = value;
        });
        return {
            success: true,
            data: obj_1
        };
    }
    catch (error) {
        return { success: false };
    }
};
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(form);
    var response = handleSubmit(formData);
    if (response.success && response.data) {
        console.log(response.data.name, response.data.email);
        result.innerHTML = "Name: ".concat(response.data.name, ", Email: ").concat(response.data.email);
    }
    else {
        result.innerHTML = "Error processing form";
    }
});
