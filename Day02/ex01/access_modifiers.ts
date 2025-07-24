class BankAccount
{
	public owner: string;
	private balance: number;
	constructor(name: string, new_balance: number)
	{
		this.owner = name;
		this.balance = new_balance;
	}
	deposit(money: number) { this.balance += money; }
	withdraw(money: number) { this.balance -= money; }
	getBalance() : number { return this.balance; }
}

const Client = new BankAccount("othmane", 10);
console.log("Balance initial: " + Client.getBalance() + " Owner = " + Client.owner);
Client.deposit(85);
console.log(`Balance post deposit = ${Client.getBalance()}`);
Client.withdraw(85);
console.log(`Balance post withdraw = ${Client.getBalance()}`);
