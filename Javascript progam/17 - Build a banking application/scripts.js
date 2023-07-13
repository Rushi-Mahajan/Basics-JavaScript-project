/* 17. Build a banking application

A banking application needs to manage customer accounts and transactions. The user detail is stored in an 
object with a keys name and balance. Write functions using object methods to update a customer's account 
balance based on a deposit or withdrawal. */

let customerAccount={"Name":"Hrushikesh","Balance":4000}

console.log(customerAccount)

function updateBalance(action,amount){
    if(action=="WithDraw"){
        customerAccount.Balance=customerAccount.Balance-amount
    }
    else if(action=="Deposit"){
        customerAccount.Balance=customerAccount.Balance+amount
    }
    console.log(customerAccount)
}

updateBalance("Deposit",500)