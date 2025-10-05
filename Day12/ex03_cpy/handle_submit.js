var form2 = document.getElementById("form");
var result2 = document.getElementById("result");
var handle_submitd = function (form) {
    try {
        var obj_1 = {};
        form.forEach(function (value, key) {
            obj_1[key] = value;
        });
        return { success: true, data: obj_1 };
    }
    catch (error) {
        return { success: false };
    }
};
if (result2 && form2) {
    form2.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = new FormData(form2);
        var response = handle_submitd(formData);
        console.log(response);
        if (response.data && response.success)
            result2.innerHTML = "name: ".concat(response.data.name, ", email: ").concat(response.data.email);
        else
            result2.innerHTML = "No Data found";
    });
}
