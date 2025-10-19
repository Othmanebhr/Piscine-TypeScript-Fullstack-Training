class Point
{
	x: number;
	y: number;
	constructor(x1: number, y1: number)
	{
		this.x = x1;
		this.y = y1;
	}
	distance() : number
	{
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
};

const point1 = new Point(1,1);
console.log((`Point1(${point1.x}, ${point1.y}) - Distance à l'origine: ${point1.distance()}`));

const point2 = new Point(3,4);
console.log((`Point2(${point1.x}, ${point1.y}) - Distance à l'origine: ${point2.distance()}`));