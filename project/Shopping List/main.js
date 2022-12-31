

function newElement() {
 const ul = document.querySelector('ul');
 const li = document.createElement('li');
 const inputValue = document.getElementById('userInput').value;
 const textNode = document.createTextNode(inputValue); 
 li.appendChild(textNode);
 if (inputValue == '') {
  alert("Please Enter Items...");
} else {
  ul.appendChild(li);
} 
inputValue.value = "";


// Display close button on click
var span = document.createElement('span');
var xMark = document.createTextNode("\u00D7");
span.className = "close"
span.appendChild(xMark);
li.appendChild(span);


// Click on a close button to hide the current list item.
const close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {  
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

}