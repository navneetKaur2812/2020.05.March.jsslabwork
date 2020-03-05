// gets every element with the class of textlet 
className = document.getElementsByClassName('text');
listconsole.log(className);
/* prints the third element from the node list using array notation */
console.log(className[2]);
/* prints the third element from the node list using the item function */
console.log(className.item(2));
let tagName = document.getElementsByTagName('p');
let selector = document.querySelectorAll('div p');
