// Bank class

class Bank {
    #name;
  
    constructor(name) {
      this.#name = name;
    }
  
    get Name() {
      return this.#name;
    }
  }

  // Account class

  class Account extends Bank {
    #balance;
  
    constructor(name, balance) {
      super(name);
      this.#balance = balance;
    }
  
    get Balance() {
      return this.#balance;
    }
  }

  // Saving Account

  class SavingsAccount extends Account {
    #interestRate;
  
    constructor(name, balance, interestRate) {
      super(name, balance);
      this.#interestRate = interestRate;
    }
  
    get interestRate() {
      return this.#interestRate;
    }
  
    set interestRate(value) {
      this.#interestRate = value;
    }
  }

  
  

  const bank = new Bank("SBI Bank");
console.log(bank.Name); 

const account = new Account("UNION Bank", 1000);
console.log(account.Name);    
console.log(account.Balance); 

const savingsAccount = new SavingsAccount("HDFC Bank", 5000, 0.05);
console.log(savingsAccount.Name);         
console.log(savingsAccount.Balance);      
console.log(savingsAccount.interestRate); 

savingsAccount.interestRate = 0.07;
console.log(savingsAccount.interestRate); 

  