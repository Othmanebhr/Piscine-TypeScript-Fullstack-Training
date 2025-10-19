const newUser = document.getElementById("newUser") as HTMLFormElement;
const login = document.getElementById("login") as HTMLFormElement;
const Result = document.getElementById("result") as HTMLDivElement;

function getData<T>(form: HTMLFormElement, fields: (keyof T)[])
{
    const formData = {} as T;

    fields.forEach((field) => {
        const fieldName = field.toString();
        const input = form.querySelector(`#${fieldName}`) as HTMLInputElement;
        if (input)
            (formData as any)[field] = input.value;
    })
    return formData;
}

interface newUserForm{
    name:string,
    username:string,
    email:string
}

interface loginForm{
    username2:string,
    email2:string
}

if (newUser && Result){
    newUser.addEventListener("submit", (event) => {
        event.preventDefault();
        const userData = getData<newUserForm>(newUser, ["name", "username", "email"]);
        Result.textContent = "New User Successfully created!";
        Result.style.color = "green";
        console.log("form:", userData);
    })
}

if (login && Result){
    login.addEventListener("submit", (event) => {
        event.preventDefault();
        const userData = getData<loginForm>(login, ["username2", "email2"]);
        Result.textContent = "Successfully logged!";
        Result.style.color = "green";
        console.log("form:", userData);
    })
}