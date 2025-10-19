function printObject(obj: Record<string, number>)
{
	for (const key in obj)
	{
		const value = obj[key];
		console.log(`${key}: ${value}`);
	}
}

const test =
{
	nb1: 45,
	nb2: 55,
	nb3: 65,
};

printObject(test);