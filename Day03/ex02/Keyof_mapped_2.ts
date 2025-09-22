const scores : Record<string, number> =
{
    math: 9,
    french: 5,
    science: 7.5
}

function displayKeyValue2(obj: Record<string, number>)
{
    for (const key in obj)
        console.log(`${key}: ${obj[key]}`)
}

displayKeyValue2(scores);