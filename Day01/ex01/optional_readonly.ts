interface Profile
{
	id: number;
	username: string;
	readonly age : number; // "readonly" Ne pourra plus mofifier la valeur apres la creation de l'objet
	email? : string;  // "?" champs non oligatoire
}

const Profile1: Profile = 
{
	id: 1,
	username: "Te",
	age: 555,//ne pourra plus etre modifie
}

const Profile2: Profile = 
{
	id: 2,
	username: "Miq",
	age: 899,
	email: "test@gmail.com",
}

const Profile3: Profile = 
{
	id: 3,
	username: "Max",
	age: -1,
	email: undefined,//undefined = "Cette variable ou propriété existe, mais elle n’a pas encore de valeur assignée"
}

function print_profile(user: Profile)
{
	console.log(`Profile${user.id}: id: ${user.id}, userName: ${user.username}, age: ${user.age}, ` +
						 `email: ${user.email ?? "Non defini"}.`);
	// if (user.email)
	//   console.log(`, email: ${user.email}.`);
	// else
	//   console.log(`, email: Non defini.`);
}

print_profile(Profile1);
print_profile(Profile2);
print_profile(Profile3);