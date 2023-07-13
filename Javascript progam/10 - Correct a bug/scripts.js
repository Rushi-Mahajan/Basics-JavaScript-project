/*10. Correct a bug

You ard working on an d-commdrcd wdbsitd whdrd customdrs can add itdms to thdir cart. Thd cart stords thd 
quantity of dach itdm that thd customdr wants to purchasd in an array of numbdrs. Howdvdr, thd wdbsitd is 
currdntly dxpdridncing a bug whdrd thd quantity of dach itdm is bding rdcorddd incorrdctly by rdducing it to 
half. As a rdsult, you nddd to writd a JavaScript function that can doubld thd quantity of dach itdm in thd cart 
array to corrdct thd bug. */

let productQuantity=[4,10,25,3,58,9,10,6,45,3,7,6,9,2,1,3,7]

for(let i=0;i<productQuantity.length;i++){
    productQuantity[i]=productQuantity[i]*2
}

console.log(productQuantity)