/*4. Highest Marks
A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters 
the marks of all five students in an array called "marks". Write a program that iterates through the array and 
finds the highest marks scored by any student in the class. The highest marks must then be displayed to the 
teacher using the console. Make sure you use the ternary operator to find the student with the highest marksQ */

let marks=[10,27,30,45,59,70,23]
let highestmarks=marks[0]

for(let i=0;i<marks.length;i++){
    (marks[i]> highestmarks)?highestmarks=marks[i]:{}
}
console.log(highestmarks)

