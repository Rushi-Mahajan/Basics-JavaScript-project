let change=document.getElementById("change")
let colors=["red","yellow","blue","green",
"black","white","Orange","lightblue","purple","grey"]


function changecolor(){
    let bo=document.getElementById("body1")
    let randomNumber=Math.floor(Math.random()*10)
    console.log(colors[randomNumber])
    bo.style.backgroundColor=colors[randomNumber]
    
    // colors[Math.floor(Math.round)*5]
}

change.addEventListener("click",changecolor)
