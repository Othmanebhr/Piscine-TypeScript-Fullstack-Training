interface profile
{
	role: 'admin' | 'user' | 'guest';
}

const Admin: profile =
{
	role: "admin",  
}

const user: profile =
{
	role: "user",  
}

const guest: profile =
{
	role: "guest",  
}

const AdminCon: profile =
{
	role: "guest",  
}

function redirect(role: 'admin' | 'user' | 'guest') : string
{
	if (role === "admin")
		return "Is an Admin";
	else if (role === "user")
		return "Is an user";
	else if (role === "guest")
		return "Is a guest";
	return "Wallahi i don't know.";
}

console.log(redirect(Admin.role))
console.log(redirect(user.role))
console.log(redirect(guest.role))
console.log(redirect(AdminCon.role))