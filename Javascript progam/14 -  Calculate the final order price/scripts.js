/*14. Calculate the final order price

A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of 
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on 
the unit price and quantity of each item.*/

product1={Unitprice:1,Quantity:12}
product2={Unitprice:1,Quantity:12}
product3={Unitprice:1,Quantity:12}
product4={Unitprice:1,Quantity:12}

let CustomerCart=[product1,product2,product3,product4]

let totalPrice =() =>{
    let totalprodut=[];
    let total=0
    for(let i=0;i<CustomerCart.length;i++){
        totalprodut.push(CustomerCart[i].Quantity*CustomerCart[i].Unitprice)
    }    
    for(let i=0;i<totalprodut.length;i++){
        total=Number(total)+Number(totalprodut[i])
    }
    return total
}

let r=totalPrice()
console.log(r)
