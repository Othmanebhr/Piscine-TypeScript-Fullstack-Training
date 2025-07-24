interface Drawable
{
	draw(): void;
}

class Circle implements Drawable
{
	private radius: number;
	
	constructor(size: number) { this.radius = size; }
	draw(): void { console.log(`Dessin d'un cercle de rayons ${this.radius}cm.`); } //oui j'allais pas dessiner un cercle non plus.
}

const Cercle = new Circle(22);
Cercle.draw();