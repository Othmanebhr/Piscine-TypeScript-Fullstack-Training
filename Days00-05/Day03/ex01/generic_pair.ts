class Pairs<T, U>
{
	first: T;
	second: U;

	constructor(fst: T, scd: U)
	{
		this.first = fst;
		this.second = scd;
	}
}

let Te = new Pairs<number, string>(15, "Temane");

console.log(`First = ${Te.first}, second = ${Te.second}`);