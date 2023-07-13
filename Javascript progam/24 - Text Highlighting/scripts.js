/* 24. Text Highlighting

Using the Document Object Model (DOM), highlight all words in a paragraph element that are greater than 8 
characters. The highlighted words should be with a yellow background color.*/


window.onload = function() {
    check = (word) => {
      if (word.length > 8) {
        word = '<span style="background:yellow;">' + word + '</span>';
      } else {
        word;
      }
      return word;
    }
  
    var str = document.getElementById("p01").innerText;
    var newt = str.trim().split(' ').map(check).join(' ')
    console.log(newt)
    // .split(' ').map(check).join(' ');
    document.querySelector("#p01").innerHTML = newt;
  
  }