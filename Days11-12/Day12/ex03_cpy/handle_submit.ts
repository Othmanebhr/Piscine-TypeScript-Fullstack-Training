const form2 = document.getElementById("form") as HTMLFormElement;
const result2 = document.getElementById("result") as HTMLDivElement;

const handle_submitd = <T>(form: FormData) : {success:boolean, data?: T} => {
    try{
        const obj = {} as any;
        form.forEach((value, key) => {
            obj[key] = value;
        })
        return {success: true, data: (obj as T)}
        
    }catch(error){
        return {success: false};
    }
}

interface userData {
    name:string,
    email:string
}

if (result2 && form2){
    form2.addEventListener("submit", (event) =>{
        event.preventDefault();
        const formData = new FormData(form2);
        const response = handle_submitd<userData>(formData);
        console.log(response);
        if (response.data && response.success)
            result2.innerHTML = `name: ${response.data.name}, email: ${response.data.email}`;
        else
            result2.innerHTML = "No Data found";
    })
}