interface User {
    id: number,
    name: string
}

const API_URL2 = "https://jsonplaceholder.typicode.com/users";

async function typed_response() : Promise<User[]>{
    try {
        const res = await fetch(API_URL2);
        if (!res.ok)
            throw new Error(`err fetch : ${res.status} ${res.statusText}`)
        const rawData = await res.json();
        if (!Array.isArray(rawData))
            return [];
        return rawData.map((user: any) => ({
            id : Number(user.id),
            name : String(user.name)
        }));
    } catch (err){
        console.error(err);
        return [];
    }
}

(async () =>{
    const data = await typed_response();
    console.log(data);
})();