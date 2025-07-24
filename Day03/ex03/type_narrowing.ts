function handle(value: number | string)
{
	if (typeof value === "number")
	{
		if (value % 2 == 0)
			console.log("C'est un nombre pair.");
		else
			console.log("C'est un nombre impair.");
	}
	else if (typeof value === "string")
		console.log(value.length);
	else
		console.log("Error");
}

handle(14);
handle(17);
handle("Te");
handle("");