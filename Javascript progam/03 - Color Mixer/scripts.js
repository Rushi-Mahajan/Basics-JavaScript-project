let btton=document.getElementById("CalCulator")

//  If color1 is "red" and color2 is "#lue" or vice versa, print "purple"P
// L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
//  If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green"P

function mixColor(){
    let color1=document.getElementById('Num1').value
    let color2=document.getElementById('Num2').value


if((color1=="red" && color2=="blue") || (color1=="blue" && color2=="red")){
    console.log("purple")
}else if((color1=="red" && color2=="yellow") || (color1=="yellow" && color2=="red")){
    console.log("orange")
}if((color1=="blue" && color2=="yellow") || (color1=="yellow" && color2=="blue")){
    console.log("green")
}
}

btton.addEventListener("click",mixColor)