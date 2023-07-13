 let check=document.getElementById("check")

function checkCaptilze(){
    
    let firstName=document.getElementById("firstName").value

    firstName[0]==(firstName[0]).toUpperCase()?(console.log(firstName)):(
    console.log(firstName[0].toUpperCase()+firstName.slice(1,firstName.length)))
    
}
check.addEventListener("click",checkCaptilze)