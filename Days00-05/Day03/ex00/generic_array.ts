function firstElement<T>(arr: T[]) : T | undefined
{
	return arr.length > 0 ? arr[0] : undefined;
}


const nb = [1, 2, 3];
console.log(`First element numbers: ${firstElement(nb)}`);

const strs = ["Te", "test", "lllll"];
console.log(`First element string: ${firstElement(strs)}`);

const flags = [true, false, true];
console.log(`First element flags: ${firstElement(flags)}`);