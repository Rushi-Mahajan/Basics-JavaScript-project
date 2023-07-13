/* 1. Password Validator
Write a JavaScript program that checks if the entered password matches the confirmed password. If the 
passwords match, the program should log "Password Matched. Password validation Successful." to the console. 
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console.*/

let btton=document.getElementById("button")

function validatedPassword(){
let pwd=document.getElementById("Password").value
let confirm_pwd=document.getElementById("Confirmpassword").value

if(pwd==confirm_pwd){
    console.log("Password Matched.Password validation Successful")
}else{
    console.log("Password didn't match. Password validation unsuccessfu")
}
}

btton.addEventListener("click",validatedPassword)