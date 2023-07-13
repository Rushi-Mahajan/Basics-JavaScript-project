/*We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate 
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e 
counted*/

let btton=document.getElementById("Check")

function checkVowels(){
let Name=document.getElementById("Name").value
let vowels="aeiou"
let letter_vowels=""

for(let i=0;i<Name.length;i++){
    for(let j=0;j<vowels.length;j++){
        if(Name[i]==vowels[j])
        {
            letter_vowels+=Name[i]
        }
    }
}
console.log("Vowels are:-",letter_vowels)
}
btton.addEventListener("click",checkVowels)