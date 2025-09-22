function handle2(value: number | string)
{
    if (typeof value === "number")
        value % 2 == 0 ? console.log("Pair") : console.log("impair");
    else if (typeof value === "string")
            console.log("String:", value);
    else
        console.log("Fuck:", value);
}

handle2(12);
handle2(55);
handle2("Te");
handle2([12, 26]);