/*18. Change Text on Button click.

Create a simple HTML page with a heading and a button. The initial text must be “The most affordable learning 
platform”, use JavaScript to change the heading text to “PW Skills” when the button is clicked. The button must 
toggle the text of a heading between "The most affordable learning platform" and "PW Skills" on each click. */

let btton=document.getElementById("btton")
let n=1

function changeText(){
    let para=document.getElementById("Header1")
    if(n%2!=0){
        para.innerText="The most affordable learning platform"
    }else if(n%2==0){
        para.innerText="PW skills"
    }
    n++
    
}

btton.addEventListener("click",changeText)