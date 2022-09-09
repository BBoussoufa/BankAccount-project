// Exercise 1 ============================================

class Governor {

    static stateBudget = 'budget';
    static vetoBills() {
    return 'Veto is one of my powers';
  }
  
}

console.log(Governor.stateBudget);
console.log(Governor.vetoBills());


// Exercise 2 ==================================================

class Person{
constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

}
console.log(Person.firstName);

class PostalWorker extends Person{
 talk(){
 console.log('person can talk');
 }
 walk(){
    console.log('person can walk');
    }

}

class Chefs extends Person{
    cook(){
    console.log('chefs can cook');
    }
    taste(){
       console.log('chefs can taste');
       }
   
   }
    
   const post = new PostalWorker('john', 'White', 30);
   post.talk();
   post.walk();

console.log(`${post.firstName} ${post.lastName} is ${post.age} years old `);

   const chef = new Chefs('Mike', 'Brown', 45);
   chef.cook();
   chef.taste();

 console.log(`${chef.firstName} ${chef.lastName} is ${chef.age} years old `);

 // Exercise Bank Account Exercise ==================================================





class BankAccount{
  constructor(ownerName, balance, acctNum){
   this.ownerName = ownerName;
   this.balance = balance;
   this.acctNum = acctNum;
  }

    
        deposit(cashDeposit) {
            console.log(`my deposit is ${this.balance}`)
            return this.balance += cashDeposit
        }


        withDraw(cashWithDraw) {
            console.log(`My cash withdraw is ${this.balance}`)
            return this.balance -= cashWithDraw
        }
    }


class CheckingAccount extends BankAccount {

    constructor( ownerName, balance, acctNum,overdraftEnabled){
    super(ownerName, balance, acctNum)
    this.overdraftEnabled = overdraftEnabled;
    }

withDrawChecking(){
  if (balance -= cashWithDraw  < 0 && this.overdraftEnabled == true){
    console.log('overDraft');
  }else{
    super.withDraw()
  }
}
    
}
 
class SavingAccount extends BankAccount{
        withdraw(){
        console.log(`withdraw is not allowed`)
    }
}
const myBankAcc = new  CheckingAccount('Badr', 100, 7001, 10)
myBankAcc.deposit(1000)
myBankAcc.withDraw(800)
myBankAcc.withDraw(1300)


