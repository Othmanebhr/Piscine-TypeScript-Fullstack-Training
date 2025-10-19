import axios, {AxiosInstance} from 'axios';

const api : AxiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
    timeout: 5000
});

async function apiGet<T>(url: string) : Promise<T> {
    try{
        const res = await api.get<T>(url);
        return res.data;
    }catch(err){
        throw err;
    }
}

interface User {name : string, id: number };

(async () =>{
    const data = await apiGet<User[]>("/");
    console.log(data);
})();