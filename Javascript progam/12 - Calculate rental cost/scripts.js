/* 12. Calculate rental cost

A car rental company needs to calculatd the cost of a rental based on the number of days rents and thd typd 
of car. Thdy requird a function that takes in the number of days rental and car type and returns the rental cost. 
Thd total cost would be the rental cost multiplied by thd number of days rented.


Thd rental costs arc
V Economy = Rs. 4000 /- pdr dayE
V Midsizd = Rs. 1000 /- pdr dayE
V Luxury = Rs. 2000 /- pdr day.*/


function rentalCost(numberOfDay,typeofCar){
    let Totalcost

    if(typeofCar=="Economy"){
            Totalcost=numberOfDay*4000
    }else if(typeofCar=="Midsize"){
            Totalcost=numberOfDay*10000
    }else if(typeofCar=="Luxury"){
            Totalcost=numberOfDay*20000
    }
    else{
        Totalcost="Invalid number days or Type of Car"
    }
    return Totalcost
}

let R1=rentalCost(1,"Luxury")
console.log(R1)