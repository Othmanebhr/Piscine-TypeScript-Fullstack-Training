interface User {
    name : string,
    id : number
}

const API_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() : Promise<User[]>{
    try{
        const res = await fetch(API_URL);
        if (!res.ok)
            throw new Error(`fetch error : ${res.status}, ${res.statusText}`);
        const data = await res.json();
        return data as User[];
    }catch (err){
        console.error(err);
        return [];
    }
}

(async () => {
    const data = await fetchUsers();
    console.log(data);
})()