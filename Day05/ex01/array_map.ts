/* Méthode 1 */
const arr = [1,2,3];
const result = arr.map((value) => value * 2)

/* Méthode 2 */
const multiply = (arr:number[]) => arr.map((x) => x * 2);

/* Méthodes alternatives*/
const multiply2 = (arr:number[]) => arr.map(x => x * 2);
const result2 = arr.map((value) => {
    return value * 2}
)

console.log(multiply([1,2,3]), result, multiply2([1,2,3]), result2,);

/*
    1) La méthode map() prends trois arguments map(value, index, array)
    value = arr[i] par exemple elle maniera les valeurs dans le tableaux
    index = leurs index.
    array = l'array elle même
    Evidemment tous les arguements ne sont pas nécéssaire si non utilisé

    Pour la méthode 2:
    arr.map(), on appelle la méthode map();
    pour chaque élément x de arr[] on applique x * 2;
*/