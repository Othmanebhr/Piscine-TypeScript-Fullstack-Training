const form = document.getElementById("form") as HTMLFormElement;
const result = document.getElementById("result") as HTMLDivElement;

interface userData{
    name:string,
    email:string
}

const handleSubmit = <T>(formData: FormData): { success: boolean, data?: T } => {
    try{
        const obj = {} as any;
        formData.forEach((value, key) =>{
            obj[key] = value;
        })
        return {
            success: true,
            data: (obj as T)
        };
    } catch (error){
        return {success: false};
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const response = handleSubmit<userData>(formData);
    if (response.success && response.data) {
        console.log(response.data.name, response.data.email);
        result.innerHTML = `Name: ${response.data.name}, Email: ${response.data.email}`;
    } else {
        result.innerHTML = "Error processing form";
    }
})
