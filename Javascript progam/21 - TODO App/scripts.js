/* 21. TODO App

Create a simple to-do app to add TODO items to the list through an input field and a button.*/
let bttom=document.getElementById("add")
let todo=[]

function add(){
    let listitem=document.getElementById("itemlist")
    let texta=document.getElementById("texta").value
    todo.push(texta)
    console.log(todo);
    // listitem.innerText=todo
   
}

bttom.addEventListener("click",add)