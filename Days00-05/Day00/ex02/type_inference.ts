/*Version TypeScript*/
function greet(name: string) //Sans inférence
{
	return `Hello, ${name}!`;
}

function greet2(name: string) : string // Avec inférence
{
	return `Hello, ${name}!`;
}

function multiply(x: number, y: number)
{
	return x * y;
}

function isEven(n: number)
{
	return n % 2 == 0;
}

/*Version TypeScript*/
// function greet(name)
// {
// 	return `Hello, ${name}!`; //Backsticks 
// 	// return "Hello" + name + "!";
// }

// function multiply(x, y)
// {
// 	return x * y;
// }

// function isEven(n)
// {
// 	return n % 2 == 0;
// }


console.log(greet("Othmane"));
console.log(multiply(2, 2));
console.log(isEven(5));
console.log(isEven(4));

/*
🧠 L'Inférence de Type: TypeScript devine automatiquement le type d'une variable/fonction sans que le précisier.
*/