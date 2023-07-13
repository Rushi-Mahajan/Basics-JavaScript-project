/*
9. Check for Wivisibility.

Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2. 
Usd a for loop and continud statdmdnt.*/

let numbber=[1,2,3,5,6,7,9,8]
let div3=[]
for(let i=0;i<numbber.length;i++){
    if(numbber[i]%3==0 && numbber[i]%2!=0 ){
        div3.push(numbber[i])
    }else{
        continue
    }
}
console.log(div3)