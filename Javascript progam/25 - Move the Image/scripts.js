let bttn=document.getElementById("down")
let btt1=document.getElementById("up")
let btt2=document.getElementById("left")
let btt3=document.getElementById("right")


function changePosition(){
    let x=document.getElementById("object").offsetTop
    x=x+25
    document.getElementById("object").style.top=x+'px'    
}
function changePositionup(){
    let x=document.getElementById("object").offsetTop
    x=x-25
    document.getElementById("object").style.top=x+'px'
}
function changePositionleft(){
    let x=document.getElementById("object").offsetLeft
    x=x-25
    document.getElementById("object").style.left=x+'px'    
}
function changePositionright(){
    let x=document.getElementById("object").offsetLeft
    x=x+25
    document.getElementById("object").style.left=x+'px'    
}
bttn.addEventListener("keydown",changePosition)
btt1.addEventListener("keyup",changePositionup)
btt2.addEventListener("keypress",changePositionleft)
btt3.addEventListener("keypress",changePositionright)

