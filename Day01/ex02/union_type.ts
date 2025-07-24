function getStatus(code: number | string) : string
{
	if (typeof code === "string")
		return "Type found in " + code + " is 'string'";
	else if (typeof code === "number")
		return "Type found in " + code + " is 'number'";
	else
		return "Type is nor a number or a string";
}

console.log(getStatus(9));
console.log(getStatus("othmane"));
console.error(getStatus([1,2,3])); //ERROR
