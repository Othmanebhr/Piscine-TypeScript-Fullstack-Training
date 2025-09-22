interface user
{
    id: number;
    name: string;
}

interface admin extends user
{
    permissions: string[];
}

const Admin : admin =
{
    id: 1,
    name: "Te",
    permissions: ["Delete", "Kick", "Ban"]
}

const User : user = 
{
    id: 2,
    name: "TeTop"
}

console.log(Admin);
console.log(User);