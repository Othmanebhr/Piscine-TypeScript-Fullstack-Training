export namespace Geometry
{
    export function calculateArea(width: number, height: number) : number
    { return width * height; }
    export function calculatePerimeter(width: number, height: number) : number
    { return  2 * (width + height); }
    function testOutsideWithoutExport() { console.log("Ceci est un test"); } // Should add export!
}

/*
Un namespace = un "dossier virtuel" dans le même fichier pour organiser le code.
(qu'on peut export evidemment)

Un module = fichier séparé (comme l'exercice 00).

en réalité cet exercice vous apprends surtout a bien rganisé votre code.
*/