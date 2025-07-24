class Animal
{
	name = "Animal";
	makeSound()
	{ console.log("nothing."); }
}

class Dog extends Animal
{
	name = "Dog";
	makeSound(): void { console.log("Woof Woof!"); }
}

let test = new Dog();
console.log(`${test.name} say:`);
test.makeSound();

test = new Animal;
console.log(`${test.name} say:`);
test.makeSound();