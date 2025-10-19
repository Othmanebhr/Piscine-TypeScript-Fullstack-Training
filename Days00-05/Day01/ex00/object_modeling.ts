/*Version TypeScript*/
// interface User
// {
// 	id: number;
// 	userName: string;
// 	email: string;
// }

// const user1: User = 
// {
// 	id: 1,
// 	userName: "Te",
// 	email: "test@gmail.com",
// }

// function printUser(user: User)
// {
// 	console.log(`Id: ${user.id}, Username: ${user.email}, email: ${user.email}.`);
// }

/*Pas de declaration de type en JS, pas d'interface en JS*/

const user1 = 
{
	id: 1,
	userName: "Te",
	email: "test@gmail.com",
}

function printUser(user)
{
	console.log(`Id: ${user.id}, Username: ${user.email}, email: ${user.email}.`);
}

printUser(user1);