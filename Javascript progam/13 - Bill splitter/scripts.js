costofeachDish=[200,500,150,80,90,500,600,450]
numberofperson=10

function billsplit(costofeachDish,numberofperson)
{
    let totalprice=0
    for(let i=0;i<costofeachDish.length;i++){
        totalprice+=costofeachDish[i]
    }
    let split=totalprice/numberofperson
    console.log("Cost of Each peron:-",split)
}
billsplit(costofeachDish,numberofperson)