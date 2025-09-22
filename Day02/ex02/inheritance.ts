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

let test1 = new Dog();
console.log(`${test1.name} say:`);
test1.makeSound();

test1 = new Animal;
console.log(`${test1.name} say:`);
test1.makeSound();