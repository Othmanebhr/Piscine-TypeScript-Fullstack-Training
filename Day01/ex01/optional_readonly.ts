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
	username: "Te",
	age: 899,
	email: "test@gmai;.com",
}

const Profile3: Profile = 
{
	id: 3,
	username: "Te",
	age: 899,
	email: undefined,//undefined = "Cette variable ou propriété existe, mais elle n’a pas encore de valeur assignée"
}